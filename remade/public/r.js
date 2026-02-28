var _global = "undefined" != typeof globalThis.window ? globalThis.window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "0.20.66"
}, (() => {
  'use strict';

  const IS_DEV = false;
  const IS_AIR = !IS_DEV && true;
  const [BRAND_ID, BRAND_TYPE = IS_DEV ? "internal" : "external"] = "rusocial".split("@");

  const BRAND_CONFIG = {
    name: "RUSocial",
    description: "Professional Social Media Services",
    icon: "rusocial.png",
    title: "RUSocial",
    subtitle: null,
    url: "https://rusocial.io/purchase.html",
    email: null,
    telegramURL: "https://t.me/rusocial_io",
    discordURL: "https://discord.gg/rusocial",
    stripePortal: "https://billing.stripe.com/p/login/5kA8wx1uwgWQgHmfYY",
    telegramBotUsername: null
  };

  globalThis.q1 || globalThis.q2 || (
    globalThis.console.log("production", "isOF", "true", "brand", "rusocial", "useDevScripts", "false", "air", IS_AIR),
    globalThis.console.log(BRAND_CONFIG)
  );

  const PLATFORMS = (IS_DEV
    ? ["snapchat", "discord", "gvoice", "bumble", "tiktok", "grindr", "tinder", "instagram", "messenger", "whatsapp", "reddit", "pornhub", "linkedin", "badoo", "telegram", "fetlife", "x", "bluesky"]
    : ["snapchat", "gvoice", "discord", "pornhub", "tiktok", "fetlife", "grindr", "reddit", "whatsapp", "x", "badoo", "telegram", "instagram", "bumble", "bluesky", "messenger"]
  ).reduce((acc, platform) => (acc[platform] = platform, acc), {});

  const PLATFORM_LIST = globalThis.Object.values(PLATFORMS);

  [PLATFORMS.snapchat, PLATFORMS.reddit, PLATFORMS.instagram, PLATFORMS.x, PLATFORMS.whatsapp, PLATFORMS.telegram, PLATFORMS.grindr, PLATFORMS.gvoice, PLATFORMS.tiktok, PLATFORMS.discord, PLATFORMS.fetlife, PLATFORMS.pornhub, PLATFORMS.bluesky].filter(Boolean);
  [PLATFORMS.snapchat, PLATFORMS.instagram].filter(Boolean);
  new Set([PLATFORMS.snapchat, PLATFORMS.reddit, PLATFORMS.instagram, PLATFORMS.x, PLATFORMS.whatsapp, PLATFORMS.telegram, PLATFORMS.grindr, PLATFORMS.gvoice, PLATFORMS.tiktok, PLATFORMS.discord, PLATFORMS.fetlife, PLATFORMS.pornhub, PLATFORMS.bluesky].filter(Boolean));

  const LANGUAGES = globalThis.Object.entries({
    aa: "Afar", ab: "Abkhazian", af: "Afrikaans", ak: "Akan", sq: "Albanian",
    am: "Amharic", ar: "Arabic", an: "Aragonese", hy: "Armenian", as: "Assamese",
    av: "Avaric", ae: "Avestan", ay: "Aymara", az: "Azerbaijani", ba: "Bashkir",
    bm: "Bambara", eu: "Basque", be: "Belarusian", bn: "Bengali", bh: "Bihari",
    bi: "Bislama", bo: "Tibetan", bs: "Bosnian", br: "Breton", bg: "Bulgarian",
    my: "Burmese", ca: "Catalan", cs: "Czech", ch: "Chamorro", ce: "Chechen",
    zh: "Chinese", cu: "Church", cv: "Chuvash", kw: "Cornish", co: "Corsican",
    cr: "Cree", cy: "Welsh", da: "Danish", de: "German", dv: "Divehi",
    nl: "Dutch", dz: "Dzongkha", el: "Greek", en: "English", eo: "Esperanto",
    et: "Estonian", ee: "Ewe", fo: "Faroese", fa: "Persian", fj: "Fijian",
    fi: "Finnish", fr: "French", fy: "Western", ff: "Fulah", Ga: "Georgian",
    gd: "Gaelic", ga: "Irish", gl: "Galician", gv: "Manx", gn: "Guarani",
    gu: "Gujarati", ht: "Haitian", ha: "Hausa", he: "Hebrew", hz: "Herero",
    hi: "Hindi", ho: "Hiri", hr: "Croatian", hu: "Hungarian", ig: "Igbo",
    is: "Icelandic", io: "Ido", ii: "Sichuan", iu: "Inuktitut", ie: "Interlingue",
    ia: "Interlingua", id: "Indonesian", ik: "Inupiaq", it: "Italian", jv: "Javanese",
    ja: "Japanese", kl: "Kalaallisut", kn: "Kannada", ks: "Kashmiri", kr: "Kanuri",
    kk: "Kazakh", km: "Central", ki: "Kikuyu", rw: "Kinyarwanda", ky: "Kirghiz",
    kv: "Komi", kg: "Kongo", ko: "Korean", kj: "Kuanyama", ku: "Kurdish",
    lo: "Lao", la: "Latin", lv: "Latvian", li: "Limburgan", ln: "Lingala",
    lt: "Lithuanian", lb: "Luxembourgish", lu: "Luba-Katanga", lg: "Ganda",
    mk: "Macedonian", mh: "Marshallese", ml: "Malayalam", mi: "Maori", mr: "Marathi",
    ms: "Malay", Mi: "Micmac", mg: "Malagasy", mt: "Maltese", mn: "Mongolian",
    na: "Nauru", nv: "Navajo", nr: "Ndebele", ng: "Ndonga", ne: "Nepali",
    nn: "Norwegian", nb: "Bokm\xE5l", oc: "Occitan", oj: "Ojibwa", or: "Oriya",
    om: "Oromo", os: "Ossetian", pa: "Panjabi", pi: "Pali", pl: "Polish",
    pt: "Portuguese", ps: "Pushto", qu: "Quechua", rm: "Romansh", ro: "Romanian",
    rn: "Rundi", ru: "Russian", sg: "Sango", sa: "Sanskrit", si: "Sinhala",
    sk: "Slovak", sl: "Slovenian", se: "Northern", sm: "Samoan", sn: "Shona",
    sd: "Sindhi", so: "Somali", st: "Sotho", es: "Spanish", sc: "Sardinian",
    sr: "Serbian", ss: "Swati", su: "Sundanese", sw: "Swahili", sv: "Swedish",
    ty: "Tahitian", ta: "Tamil", tt: "Tatar", te: "Telugu", tg: "Tajik",
    tl: "Tagalog", th: "Thai", ti: "Tigrinya", to: "Tonga", tn: "Tswana",
    ts: "Tsonga", tk: "Turkmen", tr: "Turkish", tw: "Twi", ug: "Uighur",
    uk: "Ukrainian", ur: "Urdu", uz: "Uzbek", ve: "Venda", vi: "Vietnamese",
    vo: "Volap\xFCk", wa: "Walloon", wo: "Wolof", xh: "Xhosa", yi: "Yiddish",
    yo: "Yoruba", za: "Zhuang", zu: "Zulu"
  }).map(([code, name]) => ({ value: code, label: name }));

  PLATFORM_LIST.map(platform => ({
    value: platform,
    label: platform.charAt(0).toUpperCase() + platform.slice(1)
  })).concat([{ value: "all", label: "All" }]);

  PLATFORMS.snapchat; PLATFORMS.instagram; PLATFORMS.messenger; PLATFORMS.x;
  PLATFORMS.reddit; PLATFORMS.gvoice; PLATFORMS.telegram; PLATFORMS.badoo;
  PLATFORMS.grindr; PLATFORMS.tiktok; PLATFORMS.discord; PLATFORMS.fetlife;
  PLATFORMS.pornhub; PLATFORMS.bluesky; PLATFORMS.bumble; PLATFORMS.tinder;
  PLATFORMS.whatsapp; PLATFORMS.linkedin;

  const CONTACT_METHOD_OPTIONS = [
    { value: "number", label: "Phone number" },
    { value: "whatsapp", label: "WhatsApp" },
    { value: "instagram", label: "Instagram" },
    { value: "snapchat", label: "Snapchat" },
    { value: "twitter", label: "Twitter" },
    { value: "telegram", label: "Telegram" },
    { value: "wechat", label: "WeChat" },
    { value: "email", label: "Email" },
    { value: "onlyfans", label: "OnlyFans" }
  ].filter(option => option);

  const EVENT_PREFIX = "int";
  const INTERNAL_EVENTS = {
    evalCode: "int-6ce9e33c27",
    beginTask: "int-8ba144",
    backgroundFetch: "int-62cabd7e",
    globalErrorCapture: "int-a3f7c1",
    sentryCapture: "int-8fq7h34",
    sentryDebugId: "int-7d4e2f9b"
  };

  function dispatchData(eventId, data) {
    const platformPrefix = eventId.split("-")[0];
    data = deepClone(data, platformPrefix === "reddit" ? 6 : Infinity);

    let interval = globalThis.setInterval(() => {
      let event = new CustomEvent(eventId, { detail: data });
      globalThis.window.dispatchEvent(event);
    }, 100);

    const ackEventName = "int-acknowledge-" + eventId;
    const onAcknowledge = () => {
      globalThis.clearInterval(interval);
      globalThis.window.removeEventListener(ackEventName, onAcknowledge);
    };
    globalThis.window.addEventListener(ackEventName, onAcknowledge);
  }

  function deepClone(value, maxDepth = Infinity) {
    const isSerializable = (val) => {
      var constructorName;
      return val == null || !(
        "function" == typeof val ||
        val instanceof Error ||
        val instanceof Node ||
        "symbol" == typeof val ||
        val instanceof WeakMap ||
        val instanceof WeakSet ||
        "Proxy" === (null === (constructorName = val == null ? undefined : val.constructor) || undefined === constructorName ? undefined : constructorName.name) ||
        val instanceof globalThis.Promise
      );
    };

    const cloneRecursive = (obj, seen, depth) => {
      if (depth > maxDepth || seen.has(obj)) return null;
      seen.add(obj);

      if (globalThis.Array.isArray(obj)) {
        const cloned = obj.map(item => isSerializable(item) ? cloneRecursive(item, seen, depth + 1) : null);
        seen.delete(obj);
        return cloned;
      }

      if ("object" == typeof obj && null !== obj) {
        const cloned = {};
        globalThis.Object.keys(obj).forEach(key => {
          try {
            if (isSerializable(obj[key])) {
              cloned[key] = cloneRecursive(obj[key], seen, depth + 1);
            } else {
              cloned[key] = null;
            }
          } catch (err) {
            if (err instanceof TypeError && err.message.includes("read only")) return;
            throw console.error("You are probably returning to content script an object you shouldnt be"), err;
          }
        });
        seen.delete(obj);
        return cloned;
      }

      seen.delete(obj);
      return obj;
    };

    return cloneRecursive(value, new Set(), 0);
  }

  !function initTaskListener() {
    globalThis.window.addEventListener(INTERNAL_EVENTS.beginTask, async (event) => {
      let taskData = event.detail;
      globalThis.window.injectedData = taskData;

      let { fnID, ejectedDataEventID } = taskData;

      try {
        if (fnID === "runPopupScript") {
          (function executePopupScript(responseEventId, data) {
            try {
              globalThis.eval(data.script);
              dispatchData(responseEventId, { success: true });
            } catch (err) {
              globalThis.console.error(err);
              dispatchData(responseEventId, { success: false });
            }
          })(ejectedDataEventID, taskData);
        }
      } catch (err) {
        globalThis.console.error(err);
        dispatchData(ejectedDataEventID, {
          success: false,
          error: "Failed to execute task. Error: " + JSON.stringify(err.message)
        });
      }
    });
  }();
})();
