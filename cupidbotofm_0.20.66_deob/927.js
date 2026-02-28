var _global = "undefined" != typeof globalThis.window ? globalThis.window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "0.20.66"
}, (self.webpackChunkreactjs_chrome = self.webpackChunkreactjs_chrome || []).push([[927], {
  6927: (unused, exports, require) => {
    require.d(exports, {
      EventStreamSerde: () => EventStreamSerde
    });

    var utf8Utils = require(5792);
    var decoderUtils = require(2637);

    class EventStreamSerde {
      ["marshaller"];
      ["serializer"];
      ["deserializer"];
      ["serdeContext"];
      ["defaultContentType"];

      constructor({ marshaller, serializer, deserializer, serdeContext, defaultContentType }) {
        this.marshaller = marshaller;
        this.serializer = serializer;
        this.deserializer = deserializer;
        this.serdeContext = serdeContext;
        this.defaultContentType = defaultContentType;
      }

      async ["serializeEventStream"]({ eventStream, requestSchema, initialRequest }) {
        const marshaller = this.marshaller;
        const streamMember = requestSchema.getEventStreamMember();
        const memberSchema = requestSchema.getMemberSchema(streamMember);
        const serializer = this.serializer;
        const contentType = this.defaultContentType;
        const initialRequestMarker = Symbol("initialRequestMarker");

        const wrappedStream = {
          async *[Symbol.asyncIterator]() {
            if (initialRequest) {
              const headers = {
                [":event-type"]: { type: "string", value: "initial-request" },
                [":message-type"]: { type: "string", value: "event" },
                [":content-type"]: { type: "string", value: contentType }
              };
              serializer.write(requestSchema, initialRequest);
              const body = serializer.flush();
              yield {
                [initialRequestMarker]: true,
                headers: headers,
                body: body
              };
            }
            for await (const event of eventStream) yield event;
          }
        };

        return marshaller.serialize(wrappedStream, (message) => {
          if (message[initialRequestMarker]) {
            return { headers: message.headers, body: message.body };
          }

          const eventKey = globalThis.Object.keys(message).find(k => "__type" !== k) ?? '';
          const { additionalHeaders, body, eventType, explicitPayloadContentType } =
            this.writeEventBody(eventKey, memberSchema, message);

          return {
            headers: {
              [":event-type"]: { type: "string", value: eventType },
              [":message-type"]: { type: "string", value: "event" },
              [":content-type"]: { type: "string", value: explicitPayloadContentType ?? contentType },
              ...additionalHeaders
            },
            body: body
          };
        });
      }

      async ["deserializeEventStream"]({ response, responseSchema, initialResponseContainer }) {
        const marshaller = this.marshaller;
        const streamMember = responseSchema.getEventStreamMember();
        const memberSchemas = responseSchema.getMemberSchema(streamMember).getMemberSchemas();
        const initialResponseMarker = Symbol("initialResponseMarker");

        const deserializedStream = marshaller.deserialize(response.body, async (rawEvent) => {
          const eventKey = globalThis.Object.keys(rawEvent).find(k => "__type" !== k) ?? '';
          const eventBody = rawEvent[eventKey].body;

          if ("initial-response" === eventKey) {
            const parsed = await this.deserializer.read(responseSchema, eventBody);
            delete parsed[streamMember];
            return { [initialResponseMarker]: true, ...parsed };
          }

          if (eventKey in memberSchemas) {
            const schema = memberSchemas[eventKey];

            if (schema.isStructSchema()) {
              const result = {};
              let hasEventTraits = false;

              for (const [fieldName, fieldSchema] of schema.structIterator()) {
                const { eventHeader, eventPayload } = fieldSchema.getMergedTraits();
                hasEventTraits = hasEventTraits || Boolean(eventHeader || eventPayload);

                if (eventPayload) {
                  if (fieldSchema.isBlobSchema()) {
                    result[fieldName] = eventBody;
                  } else if (fieldSchema.isStringSchema()) {
                    result[fieldName] = (this.serdeContext?.["utf8Encoder"] ?? utf8Utils.P)(eventBody);
                  } else if (fieldSchema.isStructSchema()) {
                    result[fieldName] = await this.deserializer.read(fieldSchema, eventBody);
                  }
                } else if (eventHeader) {
                  const headerValue = rawEvent[eventKey].headers[fieldName]?.["value"];
                  if (headerValue != null) {
                    if (fieldSchema.isNumericSchema()) {
                      result[fieldName] = headerValue && "object" == typeof headerValue && "bytes" in headerValue
                        ? BigInt(headerValue.toString())
                        : Number(headerValue);
                    } else {
                      result[fieldName] = headerValue;
                    }
                  }
                }
              }

              if (hasEventTraits) return { [eventKey]: result };
              if (0 === eventBody.byteLength) return { [eventKey]: {} };
            }

            return { [eventKey]: await this.deserializer.read(schema, eventBody) };
          }

          return { $unknown: rawEvent };
        });

        const iterator = deserializedStream[Symbol.asyncIterator]();
        const firstResult = await iterator.next();

        if (firstResult.done) return deserializedStream;

        if (firstResult.value?.[initialResponseMarker]) {
          if (!responseSchema) {
            throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
          }
          for (const [key, value] of globalThis.Object.entries(firstResult.value)) {
            initialResponseContainer[key] = value;
          }
        }

        return {
          async *[Symbol.asyncIterator]() {
            if (!firstResult?.["value"]?.[initialResponseMarker]) {
              yield firstResult.value;
            }
            for (;;) {
              const { done, value } = await iterator.next();
              if (done) break;
              yield value;
            }
          }
        };
      }

      ["writeEventBody"](eventKey, unionSchema, eventData) {
        const serializer = this.serializer;
        let payloadContentType;
        let resolvedEventType = eventKey;
        let payloadField = null;
        const extraHeaders = {};

        if (unionSchema.getSchema()[4].includes(eventKey)) {
          const eventSchema = unionSchema.getMemberSchema(eventKey);

          if (!eventSchema.isStructSchema()) {
            throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
          }

          for (const [fieldName, fieldSchema] of eventSchema.structIterator()) {
            const { eventHeader, eventPayload } = fieldSchema.getMergedTraits();

            if (eventPayload) {
              payloadField = fieldName;
            } else if (eventHeader) {
              const fieldValue = eventData[eventKey][fieldName];
              let headerType = "binary";

              if (fieldSchema.isNumericSchema()) {
                headerType = (-2) ** 31 <= fieldValue && fieldValue <= 2 ** 31 - 1 ? "integer" : "long";
              } else if (fieldSchema.isTimestampSchema()) {
                headerType = "timestamp";
              } else if (fieldSchema.isStringSchema()) {
                headerType = "string";
              } else if (fieldSchema.isBooleanSchema()) {
                headerType = "boolean";
              }

              if (fieldValue != null) {
                extraHeaders[fieldName] = { type: headerType, value: fieldValue };
                delete eventData[eventKey][fieldName];
              }
            }
          }

          if (payloadField !== null) {
            const payloadSchema = eventSchema.getMemberSchema(payloadField);
            if (payloadSchema.isBlobSchema()) {
              payloadContentType = "application/octet-stream";
            } else if (payloadSchema.isStringSchema()) {
              payloadContentType = "text/plain";
            }
            serializer.write(payloadSchema, eventData[eventKey][payloadField]);
          } else {
            serializer.write(eventSchema, eventData[eventKey]);
          }
        } else {
          const [unknownType, unknownData] = eventData[eventKey];
          resolvedEventType = unknownType;
          serializer.write(15, unknownData);
        }

        const serializedBody = serializer.flush();

        return {
          body: "string" == typeof serializedBody
            ? (this.serdeContext?.["utf8Decoder"] ?? decoderUtils.a)(serializedBody)
            : serializedBody,
          eventType: resolvedEventType,
          explicitPayloadContentType: payloadContentType,
          additionalHeaders: extraHeaders
        };
      }
    }
  }
}]);
