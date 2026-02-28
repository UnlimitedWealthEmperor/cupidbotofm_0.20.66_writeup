var _global = "undefined" != typeof globalThis.window ? globalThis.window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "0.20.66"
}, (() => {
  var __webpack_modules__ = {
      /* Module 9252: deep-equal - Deep equality comparison */
      9252: (module) => {
        'use strict';

        module.exports = function deepEqual(a, b) {
          if (a === b) return true;
          if (a && b && "object" == typeof a && "object" == typeof b) {
            if (a.constructor !== b.constructor) return false;
            var length, i, keys;
            if (globalThis.Array.isArray(a)) {
              if ((length = a.length) != b.length) return false;
              for (i = length; 0 != i--;) if (!deepEqual(a[i], b[i])) return false;
              return true;
            }
            if (a instanceof Map && b instanceof Map) {
              if (a.size !== b.size) return false;
              for (i of a.entries()) if (!b.has(i[0])) return false;
              for (i of a.entries()) if (!deepEqual(i[1], b.get(i[0]))) return false;
              return true;
            }
            if (a instanceof Set && b instanceof Set) {
              if (a.size !== b.size) return false;
              for (i of a.entries()) if (!b.has(i[0])) return false;
              return true;
            }
            if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
              if ((length = a.length) != b.length) return false;
              for (i = length; 0 != i--;) if (a[i] !== b[i]) return false;
              return true;
            }
            if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
            if (a.valueOf !== globalThis.Object.prototype.valueOf) return a.valueOf() === b.valueOf();
            if (a.toString !== globalThis.Object.prototype.toString) return a.toString() === b.toString();
            if ((length = (keys = globalThis.Object.keys(a)).length) !== globalThis.Object.keys(b).length) return false;
            for (i = length; 0 != i--;) if (!globalThis.Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
            for (i = length; 0 != i--;) {
              var key = keys[i];
              if (!deepEqual(a[key], b[key])) return false;
            }
            return true;
          }
          return a != a && b != b;
        };
      },
      7503: function (moduleExports, moduleThis, webpackRequire) {
        var exportsResult;
        moduleExports = webpackRequire.nmd(moduleExports), function () {
          'use strict';

          var typeChecks = {
              ["function"]: true,
              object: true
            },
            root = typeChecks[typeof globalThis.window] && globalThis.window || this,
            exportsRef = typeChecks[typeof moduleThis] && moduleThis,
            moduleRef = typeChecks.object && moduleExports && !moduleExports.nodeType && moduleExports,
            globalCtx = exportsRef && moduleRef && "object" == typeof webpackRequire.g && webpackRequire.g;
          !globalCtx || globalCtx.global !== globalCtx && globalCtx.window !== globalCtx && globalCtx.self !== globalCtx || (root = globalCtx);
          var maxSafeInt = globalThis.Math.pow(2, 53) - 1,
            reOpera = /\bOpera/,
            objProto = globalThis.Object.prototype,
            hasOwn = objProto.hasOwnProperty,
            toString = objProto.toString;
          function capitalize(str) {
            return (str = globalThis.String(str)).charAt(0).toUpperCase() + str.slice(1);
          }
          function formatOS(osStr) {
            return osStr = trim(osStr), /^(?:webOS|i(?:OS|P))/.test(osStr) ? osStr : capitalize(osStr);
          }
          function forOwn(obj, cb) {
            for (var key in obj) hasOwn.call(obj, key) && cb(obj[key], key, obj);
          }
          function getClassOf(val) {
            return null == val ? capitalize(val) : toString.call(val).slice(8, -1);
          }
          function qualify(qualStr) {
            return globalThis.String(qualStr).replace(/([ -])(?!$)/g, "$1?");
          }
          function reduce(collection, reducer) {
            var accumulator = null;
            return function iterateFn(coll, iterCb) {
              var idx = -1,
                len = coll ? coll.length : 0;
              if ("number" == typeof len && len > -1 && len <= maxSafeInt) {
                for (; ++idx < len;) iterCb(coll[idx], idx, coll);
              } else forOwn(coll, iterCb);
            }(collection, function (item, idx) {
              accumulator = reducer(accumulator, item, idx, collection);
            }), accumulator;
          }
          function trim(trimStr) {
            return globalThis.String(trimStr).replace(/^ +| +$/g, '');
          }
          var platformResult = function parsePlatform(userAgent) {
            var context = root,
              isCustomContext = userAgent && "object" == typeof userAgent && "String" != getClassOf(userAgent);
            isCustomContext && (context = userAgent, userAgent = null);
            var nav = context.navigator || {},
              navUserAgent = nav.userAgent || '';
            userAgent || (userAgent = navUserAgent);
            var match,
              versionSuffix,
              isChromeLike = isCustomContext ? !!nav.likeChrome : /\bChrome\b/.test(userAgent) && !/internal|\n/i.test(toString.toString()),
              objectClass = "Object",
              scriptProxyClass = isCustomContext ? objectClass : "ScriptBridgingProxyObject",
              envClass = isCustomContext ? objectClass : "Environment",
              javaClass = isCustomContext && context.java ? "JavaPackage" : getClassOf(context.java),
              runtimeObjClass = isCustomContext ? objectClass : "RuntimeObject",
              likeJava = /\bJava/.test(javaClass) && context.java,
              hasJavaEnv = likeJava && getClassOf(context.environment) == envClass,
              alphaChar = likeJava ? "a" : "\u03B1",
              betaChar = likeJava ? "b" : "\u03B2",
              doc = context.document || {},
              opera = context.operamini || context.opera,
              operaClass = reOpera.test(operaClass = isCustomContext && opera ? opera["[[Class]]"] : getClassOf(opera)) ? operaClass : opera = null,
              arch = userAgent,
              description = [],
              prerelease = null,
              isBrowserContext = userAgent == navUserAgent,
              version = isBrowserContext && opera && "function" == typeof opera.version && opera.version(),
              layout = function getLayout(layoutsArr) {
                return reduce(layoutsArr, function (prev, layoutItem) {
                  return prev || RegExp("\\b" + (layoutItem.pattern || qualify(layoutItem)) + "\\b", "i").exec(userAgent) && (layoutItem.label || layoutItem);
                });
              }([{
                label: "EdgeHTML",
                pattern: "Edge"
              }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
              }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
              browserName = function getBrowser(browserList) {
                return reduce(browserList, function (prevMatch, browserItem) {
                  return prevMatch || RegExp("\\b" + (browserItem.pattern || qualify(browserItem)) + "\\b", "i").exec(userAgent) && (browserItem.label || browserItem);
                });
              }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                label: "Microsoft Edge",
                pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
              }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                label: "Samsung Internet",
                pattern: "SamsungBrowser"
              }, "SeaMonkey", {
                label: "Silk",
                pattern: "(?:Cloud9|Silk-Accelerated)"
              }, "Sleipnir", "SlimBrowser", {
                label: "SRWare Iron",
                pattern: "Iron"
              }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
                label: "Yandex Browser",
                pattern: "YaBrowser"
              }, {
                label: "UC Browser",
                pattern: "UCBrowser"
              }, "Opera Mini", {
                label: "Opera Mini",
                pattern: "OPiOS"
              }, "Opera", {
                label: "Opera",
                pattern: "OPR"
              }, "Chromium", "Chrome", {
                label: "Chrome",
                pattern: "(?:HeadlessChrome)"
              }, {
                label: "Chrome Mobile",
                pattern: "(?:CriOS|CrMo)"
              }, {
                label: "Firefox",
                pattern: "(?:Firefox|Minefield)"
              }, {
                label: "Firefox for iOS",
                pattern: "FxiOS"
              }, {
                label: "IE",
                pattern: "IEMobile"
              }, {
                label: "IE",
                pattern: "MSIE"
              }, "Safari"]),
              product = getProduct([{
                label: "BlackBerry",
                pattern: "BB10"
              }, "BlackBerry", {
                label: "Galaxy S",
                pattern: "GT-I9000"
              }, {
                label: "Galaxy S2",
                pattern: "GT-I9100"
              }, {
                label: "Galaxy S3",
                pattern: "GT-I9300"
              }, {
                label: "Galaxy S4",
                pattern: "GT-I9500"
              }, {
                label: "Galaxy S5",
                pattern: "SM-G900"
              }, {
                label: "Galaxy S6",
                pattern: "SM-G920"
              }, {
                label: "Galaxy S6 Edge",
                pattern: "SM-G925"
              }, {
                label: "Galaxy S7",
                pattern: "SM-G930"
              }, {
                label: "Galaxy S7 Edge",
                pattern: "SM-G935"
              }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                label: "Kindle Fire",
                pattern: "(?:Cloud9|Silk-Accelerated)"
              }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                label: "Wii U",
                pattern: "WiiU"
              }, "Wii", "Xbox One", {
                label: "Xbox 360",
                pattern: "Xbox"
              }, "Xoom"]),
              manufacturer = function getManufacturer(mfrMap) {
                return reduce(mfrMap, function (mfrResult, mfrEntry, mfrKey) {
                  return mfrResult || (mfrEntry[product] || mfrEntry[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] || RegExp("\\b" + qualify(mfrKey) + "(?:\\b|\\w*\\d)", "i").exec(userAgent)) && mfrKey;
                });
              }({
                Apple: {
                  iPad: 1,
                  iPhone: 1,
                  iPod: 1
                },
                Alcatel: {},
                Archos: {},
                Amazon: {
                  Kindle: 1,
                  ["Kindle Fire"]: 1
                },
                Asus: {
                  Transformer: 1
                },
                ["Barnes & Noble"]: {
                  Nook: 1
                },
                BlackBerry: {
                  PlayBook: 1
                },
                Google: {
                  ["Google TV"]: 1,
                  Nexus: 1
                },
                HP: {
                  TouchPad: 1
                },
                HTC: {},
                Huawei: {},
                Lenovo: {},
                LG: {},
                Microsoft: {
                  Xbox: 1,
                  ["Xbox One"]: 1
                },
                Motorola: {
                  Xoom: 1
                },
                Nintendo: {
                  ["Wii U"]: 1,
                  Wii: 1
                },
                Nokia: {
                  Lumia: 1
                },
                Oppo: {},
                Samsung: {
                  ["Galaxy S"]: 1,
                  ["Galaxy S2"]: 1,
                  ["Galaxy S3"]: 1,
                  ["Galaxy S4"]: 1
                },
                Sony: {
                  PlayStation: 1,
                  ["PlayStation Vita"]: 1
                },
                Xiaomi: {
                  Mi: 1,
                  Redmi: 1
                }
              }),
              osName = function getOsName(osList) {
                return reduce(osList, function (osMatch, osItem) {
                  var osPattern = osItem.pattern || qualify(osItem);
                  return !osMatch && (osMatch = RegExp("\\b" + osPattern + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(userAgent)) && (osMatch = function formatOsString(osString, pattern, label) {
                    var winVersionMap = {
                      ["10.0"]: "10",
                      6.4: "10 Technical Preview",
                      6.3: "8.1",
                      6.2: "8",
                      6.1: "Server 2008 R2 / 7",
                      ["6.0"]: "Server 2008 / Vista",
                      5.2: "Server 2003 / XP 64-bit",
                      5.1: "XP",
                      5.01: "2000 SP1",
                      ["5.0"]: "2000",
                      ["4.0"]: "NT",
                      ["4.90"]: "ME"
                    };
                    return pattern && label && /^Win/i.test(osString) && !/^Windows Phone /i.test(osString) && (winVersionMap = winVersionMap[/[\d.]+$/.exec(osString)]) && (osString = "Windows " + winVersionMap), osString = globalThis.String(osString), pattern && label && (osString = osString.replace(RegExp(pattern, "i"), label)), formatOS(osString.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '').replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]);
                  }(osMatch, osPattern, osItem.label || osItem)), osMatch;
                });
              }(["Windows Phone", "KaiOS", "Android", "CentOS", {
                label: "Chrome OS",
                pattern: "CrOS"
              }, "Debian", {
                label: "DragonFly BSD",
                pattern: "DragonFly"
              }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
            function getProduct(prodList) {
              return reduce(prodList, function (match, prodItem) {
                var prodPattern = prodItem.pattern || qualify(prodItem);
                return !match && (match = RegExp("\\b" + prodPattern + " *\\d+[.\\w_]*", "i").exec(userAgent) || RegExp("\\b" + prodPattern + " *\\w+-[\\w]*", "i").exec(userAgent) || RegExp("\\b" + prodPattern + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(userAgent)) && ((match = globalThis.String(prodItem.label && !RegExp(prodPattern, "i").test(prodItem.label) ? prodItem.label : match).split("/"))[1] && !/[\d.]+/.test(match[0]) && (match[0] += " " + match[1]), prodItem = prodItem.label || prodItem, match = formatOS(match[0].replace(RegExp(prodPattern, "i"), prodItem).replace(RegExp("; *(?:" + prodItem + "[_-])?", "i"), " ").replace(RegExp("(" + prodItem + ")[-_.]?(\\w)", "i"), "$1 $2"))), match;
              });
            }
            function getVersion(versionPatterns) {
              return reduce(versionPatterns, function (prev, versionPattern) {
                return prev || (RegExp(versionPattern + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(userAgent) || 0)[1] || null;
              });
            }
            if (layout && (layout = [layout]), /\bAndroid\b/.test(osName) && !product && (match = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(userAgent)) && (product = trim(match[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, '') || null), manufacturer && !product ? product = getProduct([manufacturer]) : manufacturer && product && (product = product.replace(RegExp("^(" + qualify(manufacturer) + ")[-_.\\s]", "i"), manufacturer + " ").replace(RegExp("^(" + qualify(manufacturer) + ")[-_.]?(\\w)", "i"), manufacturer + " $2")), (match = /\bGoogle TV\b/.exec(product)) && (product = match[0]), /\bSimulator\b/i.test(userAgent) && (product = (product ? product + " " : '') + "Simulator"), "Opera Mini" == browserName && /\bOPiOS\b/.test(userAgent) && description.push("running in Turbo/Uncompressed mode"), "IE" == browserName && /\blike iPhone OS\b/.test(userAgent) ? (manufacturer = (match = parsePlatform(userAgent.replace(/like iPhone OS/, ''))).manufacturer, product = match.product) : /^iP/.test(product) ? (browserName || (browserName = "Safari"), osName = "iOS" + ((match = / OS ([\d_]+)/i.exec(userAgent)) ? " " + match[1].replace(/_/g, ".") : '')) : "Konqueror" == browserName && /^Linux\b/i.test(osName) ? osName = "Kubuntu" : manufacturer && "Google" != manufacturer && (/Chrome/.test(browserName) && !/\bMobile Safari\b/i.test(userAgent) || /\bVita\b/.test(product)) || /\bAndroid\b/.test(osName) && /^Chrome/.test(browserName) && /\bVersion\//i.test(userAgent) ? (browserName = "Android Browser", osName = /\bAndroid\b/.test(osName) ? osName : "Android") : "Silk" == browserName ? (/\bMobi/i.test(userAgent) || (osName = "Android", description.unshift("desktop mode")), /Accelerated *= *true/i.test(userAgent) && description.unshift("accelerated")) : "UC Browser" == browserName && /\bUCWEB\b/.test(userAgent) ? description.push("speed mode") : "PaleMoon" == browserName && (match = /\bFirefox\/([\d.]+)\b/.exec(userAgent)) ? description.push("identifying as Firefox " + match[1]) : "Firefox" == browserName && (match = /\b(Mobile|Tablet|TV)\b/i.exec(userAgent)) ? (osName || (osName = "Firefox OS"), product || (product = match[1])) : !browserName || (match = !/\bMinefield\b/i.test(userAgent) && /\b(?:Firefox|Safari)\b/.exec(browserName)) ? (browserName && !product && /[\/,]|^[^(]+?\)/.test(userAgent.slice(userAgent.indexOf(match + "/") + 8)) && (browserName = null), (match = product || manufacturer || osName) && (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(osName)) && (browserName = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(osName) ? osName : match) + " Browser")) : "Electron" == browserName && (match = (/\bChrome\/([\d.]+)\b/.exec(userAgent) || 0)[1]) && description.push("Chromium " + match), version || (version = getVersion(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", qualify(browserName), "(?:Firefox|Minefield|NetFront)"])), (match = ("iCab" == layout && parseFloat(version) > 3 ? "WebKit" : /\bOpera\b/.test(browserName) && (/\bOPR\b/.test(userAgent) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(userAgent) && !/^(?:Trident|EdgeHTML)$/.test(layout) && "WebKit" || !layout && /\bMSIE\b/i.test(userAgent) && ("Mac OS" == osName ? "Tasman" : "Trident") || "WebKit" == layout && /\bPlayStation\b(?! Vita\b)/i.test(browserName) && "NetFront") && (layout = [match]), "IE" == browserName && (match = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(userAgent) || 0)[1]) ? (browserName += " Mobile", osName = "Windows Phone " + (/\+$/.test(match) ? match : match + ".x"), description.unshift("desktop mode")) : /\bWPDesktop\b/i.test(userAgent) ? (browserName = "IE Mobile", osName = "Windows Phone 8.x", description.unshift("desktop mode"), version || (version = (/\brv:([\d.]+)/.exec(userAgent) || 0)[1])) : "IE" != browserName && "Trident" == layout && (match = /\brv:([\d.]+)/.exec(userAgent)) && (browserName && description.push("identifying as " + browserName + (version ? " " + version : '')), browserName = "IE", version = match[1]), isBrowserContext) {
              if (function hasProperty(obj, key) {
                var propType = null != obj ? typeof obj[key] : "number";
                return !(/^(?:boolean|number|string|undefined)$/.test(propType) || "object" == propType && !obj[key]);
              }(context, "global")) {
                if (likeJava && (arch = (match = likeJava.lang.System).getProperty("os.arch"), osName = osName || match.getProperty("os.name") + " " + match.getProperty("os.version")), hasJavaEnv) {
                  try {
                    version = context.require("ringo/engine").version.join("."), browserName = "RingoJS";
                  } catch (err) {
                    (match = context.system) && match.global.system == context.system && (browserName = "Narwhal", osName || (osName = match[0].os || null));
                  }
                  browserName || (browserName = "Rhino");
                } else "object" == typeof context.process && !context.process.browser && (match = context.process) && ("object" == typeof match.versions && ("string" == typeof match.versions.electron ? (description.push("Node " + match.versions.node), browserName = "Electron", version = match.versions.electron) : "string" == typeof match.versions.nw && (description.push("Chromium " + version, "Node " + match.versions.node), browserName = "NW.js", version = match.versions.nw)), browserName || (browserName = "Node.js", arch = match.arch, osName = match.platform, version = (version = /[\d.]+/.exec(match.version)) ? version[0] : null));
              } else getClassOf(match = context.runtime) == scriptProxyClass ? (browserName = "Adobe AIR", osName = match.flash.system.Capabilities.os) : getClassOf(match = context.phantom) == runtimeObjClass ? (browserName = "PhantomJS", version = (match = match.version || null) && match.major + "." + match.minor + "." + match.patch) : "number" == typeof doc.documentMode && (match = /\bTrident\/(\d+)/i.exec(userAgent)) ? (version = [version, doc.documentMode], (match = +match[1] + 4) != version[1] && (description.push("IE " + version[1] + " mode"), layout && (layout[1] = ''), version[1] = match), version = "IE" == browserName ? globalThis.String(version[1].toFixed(1)) : version[0]) : "number" == typeof doc.documentMode && /^(?:Chrome|Firefox)\b/.test(browserName) && (description.push("masking as " + browserName + " " + version), browserName = "IE", version = "11.0", layout = ["Trident"], osName = "Windows");
              osName = osName && formatOS(osName);
            }
            if (version && (match = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) || /(?:alpha|beta)(?: ?\d)?/i.exec(userAgent + ";" + (isBrowserContext && nav.appMinorVersion)) || /\bMinefield\b/i.test(userAgent) && "a") && (prerelease = /b/i.test(match) ? "beta" : "alpha", version = version.replace(RegExp(match + "\\+?$"), '') + ("beta" == prerelease ? betaChar : alphaChar) + (/\d+\+?/.exec(match) || '')), "Fennec" == browserName || "Firefox" == browserName && /\b(?:Android|Firefox OS|KaiOS)\b/.test(osName)) browserName = "Firefox Mobile";else {
              if ("Maxthon" == browserName && version) version = version.replace(/\.[\d.]+/, ".x");else {
                if (/\bXbox\b/i.test(product)) "Xbox 360" == product && (osName = null), "Xbox 360" == product && /\bIEMobile\b/.test(userAgent) && description.unshift("mobile mode");else {
                  if (!/^(?:Chrome|IE|Opera)$/.test(browserName) && (!browserName || product || /Browser|Mobi/.test(browserName)) || "Windows CE" != osName && !/Mobi/i.test(userAgent)) {
                    if ("IE" == browserName && isBrowserContext) try {
                      null === context.external && description.unshift("platform preview");
                    } catch (err) {
                      description.unshift("embedded");
                    } else (/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(userAgent)) && (match = (RegExp(product.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(userAgent) || 0)[1] || version) ? (osName = ((match = [match, /BB10/.test(userAgent)])[1] ? (product = null, manufacturer = "BlackBerry") : "Device Software") + " " + match[0], version = null) : this != forOwn && "Wii" != product && (isBrowserContext && opera || /Opera/.test(browserName) && /\b(?:MSIE|Firefox)\b/i.test(userAgent) || "Firefox" == browserName && /\bOS X (?:\d+\.){2,}/.test(osName) || "IE" == browserName && (osName && !/^Win/.test(osName) && version > 5.5 || /\bWindows XP\b/.test(osName) && version > 8 || 8 == version && !/\bTrident\b/.test(userAgent))) && !reOpera.test(match = parsePlatform.call(forOwn, userAgent.replace(reOpera, '') + ";")) && match.name && (match = "ing as " + match.name + ((match = match.version) ? " " + match : ''), reOpera.test(browserName) ? (/\bIE\b/.test(match) && "Mac OS" == osName && (osName = null), match = "identify" + match) : (match = "mask" + match, browserName = operaClass ? formatOS(operaClass.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(match) && (osName = null), isBrowserContext || (version = null)), layout = ["Presto"], description.push(match));
                  } else browserName += " Mobile";
                }
              }
            }
            (match = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(userAgent) || 0)[1]) && (match = [parseFloat(match.replace(/\.(\d)$/, ".0$1")), match], "Safari" == browserName && "+" == match[1].slice(-1) ? (browserName = "WebKit Nightly", prerelease = "alpha", version = match[1].slice(0, -1)) : version != match[1] && version != (match[2] = (/\bSafari\/([\d.]+\+?)/i.exec(userAgent) || 0)[1]) || (version = null), match[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(userAgent) || 0)[1], 537.36 == match[0] && 537.36 == match[2] && parseFloat(match[1]) >= 28 && "WebKit" == layout && (layout = ["Blink"]), isBrowserContext && (isChromeLike || match[1]) ? (layout && (layout[1] = "like Chrome"), match = match[1] || ((match = match[0]) < 530 ? 1 : match < 532 ? 2 : match < 532.05 ? 3 : match < 533 ? 4 : match < 534.03 ? 5 : match < 534.07 ? 6 : match < 534.1 ? 7 : match < 534.13 ? 8 : match < 534.16 ? 9 : match < 534.24 ? 10 : match < 534.3 ? 11 : match < 535.01 ? 12 : match < 535.02 ? "13+" : match < 535.07 ? 15 : match < 535.11 ? 16 : match < 535.19 ? 17 : match < 536.05 ? 18 : match < 536.1 ? 19 : match < 537.01 ? 20 : match < 537.11 ? "21+" : match < 537.13 ? 23 : match < 537.18 ? 24 : match < 537.24 ? 25 : match < 537.36 ? 26 : "Blink" != layout ? "27" : "28")) : (layout && (layout[1] = "like Safari"), match = (match = match[0]) < 400 ? 1 : match < 500 ? 2 : match < 526 ? 3 : match < 533 ? 4 : match < 534 ? "4+" : match < 535 ? 5 : match < 537 ? 6 : match < 538 ? 7 : match < 601 ? 8 : match < 602 ? 9 : match < 604 ? 10 : match < 606 ? 11 : match < 608 ? 12 : "12"), layout && (layout[1] += " " + (match += "number" == typeof match ? ".x" : /[.+]/.test(match) ? '' : "+")), "Safari" == browserName && (!version || parseInt(version) > 45) ? version = match : "Chrome" == browserName && /\bHeadlessChrome/i.test(userAgent) && description.unshift("headless")), "Opera" == browserName && (match = /\bzbov|zvav$/.exec(osName)) ? (browserName += " ", description.unshift("desktop mode"), "zvav" == match ? (browserName += "Mini", version = null) : browserName += "Mobile", osName = osName.replace(RegExp(" *" + match + "$"), '')) : "Safari" == browserName && /\bChrome\b/.exec(layout && layout[1]) ? (description.unshift("desktop mode"), browserName = "Chrome Mobile", version = null, /\bOS X\b/.test(osName) ? (manufacturer = "Apple", osName = "iOS 4.3+") : osName = null) : /\bSRWare Iron\b/.test(browserName) && !version && (version = getVersion("Chrome")), version && 0 == version.indexOf(match = /[\d.]+$/.exec(osName)) && userAgent.indexOf("/" + match + "-") > -1 && (osName = trim(osName.replace(match, ''))), osName && -1 != osName.indexOf(browserName) && !RegExp(browserName + " OS").test(osName) && (osName = osName.replace(RegExp(" *" + qualify(browserName) + " *"), '')), layout && !/\b(?:Avant|Nook)\b/.test(browserName) && (/Browser|Lunascape|Maxthon/.test(browserName) || "Safari" != browserName && /^iOS/.test(osName) && /\bSafari\b/.test(layout[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(browserName) && layout[1]) && (match = layout[layout.length - 1]) && description.push(match), description.length && (description = ["(" + description.join("; ") + ")"]), manufacturer && product && product.indexOf(manufacturer) < 0 && description.push("on " + manufacturer), product && description.push((/^on /.test(description[description.length - 1]) ? '' : "on ") + product), osName && (match = / ([\d.+]+)$/.exec(osName), versionSuffix = match && "/" == osName.charAt(osName.length - match[0].length - 1), osName = {
              architecture: 32,
              family: match && !versionSuffix ? osName.replace(match[0], '') : osName,
              version: match ? match[1] : null,
              toString: function () {
                var ver = this.version;
                return this.family + (ver && !versionSuffix ? " " + ver : '') + (64 == this.architecture ? " 64-bit" : '');
              }
            }), (match = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch) ? (osName && (osName.architecture = 64, osName.family = osName.family.replace(RegExp(" *" + match), '')), browserName && (/\bWOW64\b/i.test(userAgent) || isBrowserContext && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(userAgent)) && description.unshift("32-bit")) : osName && /^OS X/.test(osName.family) && "Chrome" == browserName && parseFloat(version) >= 39 && (osName.architecture = 64), userAgent || (userAgent = null);
            var parsedPlatform = {};
            return parsedPlatform.description = userAgent, parsedPlatform.layout = layout && layout[0], parsedPlatform.manufacturer = manufacturer, parsedPlatform.name = browserName, parsedPlatform.prerelease = prerelease, parsedPlatform.product = product, parsedPlatform.ua = userAgent, parsedPlatform.version = browserName && version, parsedPlatform.os = osName || {
              architecture: null,
              family: null,
              version: null,
              toString: function () {
                return "null";
              }
            }, parsedPlatform.parse = parsePlatform, parsedPlatform.toString = function toStringFn() {
              return this.description || '';
            }, parsedPlatform.version && description.unshift(version), parsedPlatform.name && description.unshift(browserName), osName && browserName && (osName != globalThis.String(osName).split(" ")[0] || osName != browserName.split(" ")[0] && !product) && description.push(product ? "(" + osName + ")" : "on " + osName), description.length && (parsedPlatform.description = description.join(" ")), parsedPlatform;
          }();
          root.platform = platformResult, undefined === (exportsResult = function () {
            return platformResult;
          }.call(moduleThis, webpackRequire, moduleThis, moduleExports)) || (moduleExports.exports = exportsResult);
        }.call(this);
      }
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (undefined !== cachedModule) return cachedModule.exports;
    var module = __webpack_module_cache__[moduleId] = {
      id: moduleId,
      loaded: false,
      exports: {}
    };
    return __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = true, module.exports;
  }
  __webpack_require__.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof globalThis.window) return window;
    }
  }(), __webpack_require__.nmd = (mod) => (mod.paths = [], mod.children || (mod.children = []), mod), (() => {
    'use strict';
    const IS_DEV = false,
      IS_AIR = !IS_DEV && true,
      IS_OF = !IS_DEV || true,
      USE_DEV_SCRIPTS = false,
      USE_DEV_SENTRY = false,
      IS_OFM = true,
      [BRAND_ID, BRAND_TYPE = IS_DEV ? "internal" : "external"] = "cupidbotofm".split("@"),
      BRAND_CONFIG = {
        name: "CupidBot OFM",
        description: "#1 bot for OFM funneling",
        icon: "cupidbotofm.png",
        title: "CupidBotOFM.ai",
        subtitle: null,
        url: "https://cupidbotofm.ai",
        email: "admin@cupidbot.ai",
        telegramURL: "https://t.me/cupidbotg",
        stripePortal: "https://billing.stripe.com/p/login/5kA8wx1uwgWQgHmfYY",
        telegramBotUsername: "CupidBotAdminBot"
      },
      PROD_API_URL = "https://cupidbot-382905.uc.r.appspot.com";
    let DEV_API_URL = "http://localhost:1111";
    const API_BASE_URL = IS_DEV ? DEV_API_URL : "https://cupidbot-382905.uc.r.appspot.com",
      SENTRY_DSN = IS_DEV || USE_DEV_SENTRY ? "https://633e559173342961092119ebc4ffc10d@o4507347424051200.ingest.us.sentry.io/4508310211657728" : "https://91c44cc7c7986c87e0a54a7a9b680a16@o4507347424051200.ingest.us.sentry.io/4508300273647616",
      STORAGE_KEY_DATES = "dates",
      STORAGE_KEY_DA = "ofm-da",
      STORAGE_KEY_DA_SWIPER = "ofm-da-swiper",
      STORAGE_KEY_WEBCAM = "ofm-webcam",
      STORAGE_KEY_SNAP = "ofm-snap",
      STORAGE_KEY_REDDIT = "ofm-reddit",
      STORAGE_KEY_IG = "ofm-ig",
      STORAGE_KEY_X = "ofm-x",
      STORAGE_KEY_WA = "ofm-wa",
      STORAGE_KEY_TG = "ofm-tg",
      STORAGE_KEY_GRINDR = "ofm-grindr",
      STORAGE_KEY_GVOICE = "ofm-gvoice",
      STORAGE_KEY_TIKTOK = "ofm-tiktok",
      STORAGE_KEY_DISCORD = "ofm-discord",
      STORAGE_KEY_FETLIFE = "ofm-fetlife",
      STORAGE_KEY_PORNHUB = "ofm-pornhub",
      STORAGE_KEY_BLUESKY = "ofm-bluesky",
      JSON_REF = JSON;
    globalThis.q1 || globalThis.q2 || (globalThis.console.log("production", "isOF", "true", "brand", "cupidbotofm", "useDevScripts", "false", "air", IS_AIR), globalThis.console.log(BRAND_CONFIG));
    const SENTRY_ENABLED_SCRIPTS = ["background", "snapchat", "instagram", "discord", "reddit", "gvoice", "telegram", "bluesky", "whatsapp", "x"],
      PLATFORMS = (IS_DEV ? ["snapchat", "discord", "gvoice", "bumble", "tiktok", "grindr", "tinder", "instagram", "messenger", "whatsapp", "reddit", "pornhub", "linkedin", "badoo", "telegram", "fetlife", "x", "bluesky"] : IS_OFM ? ["snapchat", "gvoice", "discord", "pornhub", "tiktok", "fetlife", "grindr", "reddit", "whatsapp", "x", "badoo", "telegram", "instagram", "bumble", "bluesky", "messenger"] : ["bumble"]).reduce((acc, name) => (acc[name] = name, acc), {}),
      PLATFORM_LIST = globalThis.Object.values(PLATFORMS),
      DATING_APPS = ["tinder", "bumble", "hinge", "badoo", "okcupid", "match", "hily", "boo", "coffeemeetsbagel", "facebookdating", "match", "plentyoffish"];
    [PLATFORMS.snapchat, PLATFORMS.reddit, PLATFORMS.instagram, PLATFORMS.x, PLATFORMS.whatsapp, PLATFORMS.telegram, PLATFORMS.grindr, PLATFORMS.gvoice, PLATFORMS.tiktok, PLATFORMS.discord, PLATFORMS.fetlife, PLATFORMS.pornhub, PLATFORMS.bluesky].filter(Boolean), [PLATFORMS.snapchat, PLATFORMS.instagram].filter(Boolean), new Set([PLATFORMS.snapchat, PLATFORMS.reddit, PLATFORMS.instagram, PLATFORMS.x, PLATFORMS.whatsapp, PLATFORMS.telegram, PLATFORMS.grindr, PLATFORMS.gvoice, PLATFORMS.tiktok, PLATFORMS.discord, PLATFORMS.fetlife, PLATFORMS.pornhub, PLATFORMS.bluesky].filter(Boolean)), globalThis.Object.entries({
      aa: "Afar",
      ab: "Abkhazian",
      af: "Afrikaans",
      ak: "Akan",
      sq: "Albanian",
      am: "Amharic",
      ar: "Arabic",
      an: "Aragonese",
      hy: "Armenian",
      as: "Assamese",
      av: "Avaric",
      ae: "Avestan",
      ay: "Aymara",
      az: "Azerbaijani",
      ba: "Bashkir",
      bm: "Bambara",
      eu: "Basque",
      be: "Belarusian",
      bn: "Bengali",
      bh: "Bihari",
      bi: "Bislama",
      bo: "Tibetan",
      bs: "Bosnian",
      br: "Breton",
      bg: "Bulgarian",
      my: "Burmese",
      ca: "Catalan",
      cs: "Czech",
      ch: "Chamorro",
      ce: "Chechen",
      zh: "Chinese",
      cu: "Church",
      cv: "Chuvash",
      kw: "Cornish",
      co: "Corsican",
      cr: "Cree",
      cy: "Welsh",
      da: "Danish",
      de: "German",
      dv: "Divehi",
      nl: "Dutch",
      dz: "Dzongkha",
      el: "Greek",
      en: "English",
      eo: "Esperanto",
      et: "Estonian",
      ee: "Ewe",
      fo: "Faroese",
      fa: "Persian",
      fj: "Fijian",
      fi: "Finnish",
      fr: "French",
      fy: "Western",
      ff: "Fulah",
      Ga: "Georgian",
      gd: "Gaelic",
      ga: "Irish",
      gl: "Galician",
      gv: "Manx",
      gn: "Guarani",
      gu: "Gujarati",
      ht: "Haitian",
      ha: "Hausa",
      he: "Hebrew",
      hz: "Herero",
      hi: "Hindi",
      ho: "Hiri",
      hr: "Croatian",
      hu: "Hungarian",
      ig: "Igbo",
      is: "Icelandic",
      io: "Ido",
      ii: "Sichuan",
      iu: "Inuktitut",
      ie: "Interlingue",
      ia: "Interlingua",
      id: "Indonesian",
      ik: "Inupiaq",
      it: "Italian",
      jv: "Javanese",
      ja: "Japanese",
      kl: "Kalaallisut",
      kn: "Kannada",
      ks: "Kashmiri",
      kr: "Kanuri",
      kk: "Kazakh",
      km: "Central",
      ki: "Kikuyu",
      rw: "Kinyarwanda",
      ky: "Kirghiz",
      kv: "Komi",
      kg: "Kongo",
      ko: "Korean",
      kj: "Kuanyama",
      ku: "Kurdish",
      lo: "Lao",
      la: "Latin",
      lv: "Latvian",
      li: "Limburgan",
      ln: "Lingala",
      lt: "Lithuanian",
      lb: "Luxembourgish",
      lu: "Luba-Katanga",
      lg: "Ganda",
      mk: "Macedonian",
      mh: "Marshallese",
      ml: "Malayalam",
      mi: "Maori",
      mr: "Marathi",
      ms: "Malay",
      Mi: "Micmac",
      mg: "Malagasy",
      mt: "Maltese",
      mn: "Mongolian",
      na: "Nauru",
      nv: "Navajo",
      nr: "Ndebele",
      ng: "Ndonga",
      ne: "Nepali",
      nn: "Norwegian",
      nb: "Bokm\xE5l",
      oc: "Occitan",
      oj: "Ojibwa",
      or: "Oriya",
      om: "Oromo",
      os: "Ossetian",
      pa: "Panjabi",
      pi: "Pali",
      pl: "Polish",
      pt: "Portuguese",
      ps: "Pushto",
      qu: "Quechua",
      rm: "Romansh",
      ro: "Romanian",
      rn: "Rundi",
      ru: "Russian",
      sg: "Sango",
      sa: "Sanskrit",
      si: "Sinhala",
      sk: "Slovak",
      sl: "Slovenian",
      se: "Northern",
      sm: "Samoan",
      sn: "Shona",
      sd: "Sindhi",
      so: "Somali",
      st: "Sotho",
      es: "Spanish",
      sc: "Sardinian",
      sr: "Serbian",
      ss: "Swati",
      su: "Sundanese",
      sw: "Swahili",
      sv: "Swedish",
      ty: "Tahitian",
      ta: "Tamil",
      tt: "Tatar",
      te: "Telugu",
      tg: "Tajik",
      tl: "Tagalog",
      th: "Thai",
      ti: "Tigrinya",
      to: "Tonga",
      tn: "Tswana",
      ts: "Tsonga",
      tk: "Turkmen",
      tr: "Turkish",
      tw: "Twi",
      ug: "Uighur",
      uk: "Ukrainian",
      ur: "Urdu",
      uz: "Uzbek",
      ve: "Venda",
      vi: "Vietnamese",
      vo: "Volap\xFCk",
      wa: "Walloon",
      wo: "Wolof",
      xh: "Xhosa",
      yi: "Yiddish",
      yo: "Yoruba",
      za: "Zhuang",
      zu: "Zulu"
    }).map(([langCode, langLabel]) => ({
      value: langCode,
      label: langLabel
    }));
    let RSA_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3+mkV0wcJz7mVi4ZoStxRzXBtv3TA+g8/Nov65KM+jo5k14u35J5TPsdwCIvnWwCgZaWsU39YxuLStX06H+vB3A++pw8+k5zqlB2NaPcMywyAIhE5olbo8RLyMS5JaEl48acHtnDwoQG3gaG3+DhaEP/kh1rcC+xJz0BupBKi71VGyc6CERjRk9yYNZjdBd4uHhQp4AqAjXQM08JKL3eC8nHySIQ2l2ZXxIW3cgIXWi79EXAhnwSWRUmZ+zzaUIMZXeCAOh+qCddG3xj4CjY9TVf3csPk+KfUbhDXYSfuZtWrXh2kI8Hc9fSKzfpQIRJK3y1O3Ywbqq6esvIlRKbZwIDAQAB";
    PLATFORM_LIST.map(platform => ({
      value: platform,
      label: platform.charAt(0).toUpperCase() + platform.slice(1)
    })).concat([{
      value: "all",
      label: "All"
    }]);
    const PLATFORM_CONFIGS = {
      [PLATFORMS.snapchat]: {
        app: "snapchat",
        restartURL: "https://www.snapchat.com/web",
        appDomain: "snapchat.com",
        chatDomain: "snapchat.com/web",
        excluded: ["accounts.snapchat.com", "/login"]
      },
      [PLATFORMS.instagram]: {
        app: "instagram",
        restartURL: "https://www.instagram.com/direct/inbox",
        appDomain: "instagram.com",
        chatDomain: "instagram.com/direct",
        excluded: ["/login", "/challenge", "/account", "/suspended", "/consent"]
      },
      [PLATFORMS.messenger]: {
        app: "messenger",
        restartURL: "https://facebook.com/messages",
        appDomain: "facebook.com",
        chatDomain: "facebook.com/messages",
        excluded: ["/login", "/challenge", "/account", "/suspended", "/consent"]
      },
      [PLATFORMS.x]: {
        app: "x",
        restartURL: "https://x.com/i/chat",
        appDomain: "x.com",
        chatDomain: "x.com/i/chat",
        excluded: ["/pin", "/flow", "/login", "/account"]
      },
      [PLATFORMS.reddit]: {
        app: "reddit",
        restartURL: "https://reddit.com/chat",
        appDomain: "reddit.com",
        chatDomain: "reddit.com/chat",
        excluded: []
      },
      [PLATFORMS.gvoice]: {
        app: "gvoice",
        restartURL: "https://voice.google.com/u/0/messages",
        appDomain: "voice.google.com",
        chatDomain: "voice.google.com",
        excluded: ["/about"]
      },
      [PLATFORMS.telegram]: {
        app: "telegram",
        restartURL: "https://web.telegram.org/a",
        appDomain: "web.telegram.org",
        chatDomain: "web.telegram.org",
        specificChatPath: "web.telegram.org/a",
        excluded: [],
        openOnlyWhenRunning: false,
        disableWaitForTabsToLoad: true
      },
      [PLATFORMS.badoo]: {
        app: "badoo",
        restartURL: "https://badoo.com/connections",
        appDomain: "badoo.com",
        chatDomain: "badoo.com/connections",
        excluded: ["verification", "suspend", "landing", "login", "block"]
      },
      [PLATFORMS.grindr]: {
        app: "grindr",
        restartURL: "https://web.grindr.com/chat",
        appDomain: "grindr.com",
        chatDomain: "grindr.com/chat",
        excluded: ["login", "suspend", "block"]
      },
      [PLATFORMS.tiktok]: {
        app: "tiktok",
        restartURL: "https://tiktok.com/messages",
        appDomain: "tiktok.com",
        chatDomain: "tiktok.com/messages",
        excluded: ["login", "suspend", "block"]
      },
      [PLATFORMS.discord]: {
        app: "discord",
        restartURL: "https://discord.com/channels/@me",
        appDomain: "discord.com",
        chatDomain: "discord.com/channels/@me",
        excluded: ["login", "suspend", "block", "verify"]
      },
      [PLATFORMS.fetlife]: {
        app: "fetlife",
        restartURL: "https://fetlife.com/inbox",
        appDomain: "fetlife.com",
        chatDomain: "fetlife.com/inbox",
        excluded: ["login", "suspend", "block", "verify", "lock"]
      },
      [PLATFORMS.pornhub]: {
        app: "pornhub",
        restartURL: "https://www.pornhub.com/chat/index",
        appDomain: "pornhub.com",
        chatDomain: "pornhub.com/chat/index",
        excluded: ["login", "suspend", "block", "verify", "lock"]
      },
      [PLATFORMS.bluesky]: {
        app: "bluesky",
        restartURL: "https://bsky.app/messages",
        appDomain: "bsky.app",
        chatDomain: "bsky.app/messages",
        excluded: []
      },
      [PLATFORMS.bumble]: {
        app: "bumble",
        restartURL: "https://bumble.com/app",
        appDomain: "bumble.com",
        chatDomain: "bumble.com/app",
        excluded: []
      },
      [PLATFORMS.tinder]: {
        app: "tinder",
        restartURL: "https://tinder.com/app",
        appDomain: "tinder.com",
        chatDomain: "tinder.com/app",
        excluded: []
      },
      [PLATFORMS.whatsapp]: {
        app: "whatsapp",
        restartURL: "https://web.whatsapp.com",
        appDomain: "web.whatsapp.com",
        chatDomain: "web.whatsapp.com",
        excluded: []
      },
      [PLATFORMS.linkedin]: {
        app: "linkedin",
        restartURL: "http://linkedin.com/hiring/applicants/?rating=GOOD_FIT&jobId=4324561813",
        appDomain: "linkedin.com",
        chatDomain: "linkedin.com/hiring",
        excluded: []
      }
    };
    [{
      value: "number",
      label: "Phone number"
    }, {
      value: "whatsapp",
      label: "WhatsApp"
    }, {
      value: "instagram",
      label: "Instagram"
    }, {
      value: "snapchat",
      label: "Snapchat"
    }, {
      value: "twitter",
      label: "Twitter"
    }, {
      value: "telegram",
      label: "Telegram"
    }, {
      value: "wechat",
      label: "WeChat"
    }, {
      value: "email",
      label: "Email"
    }, IS_OFM ? {
      value: "onlyfans",
      label: "OnlyFans"
    } : null].filter(entry => entry);
    const eventPrefix = "int",
      SENTRY_DEBUG_EVENT_ID = "$int-3db5d2",
      LOG_LEVELS = {
        fatal: "fatal",
        error: "error",
        warning: "warning",
        log: "log",
        info: "info",
        debug: "debug"
      },
      SAMPLE_RATES = {
        always: 1,
        veryCommon: 0.5,
        common: 0.2,
        normal: 0.1,
        uncommon: 0.05,
        rare: 0.01,
        veryRare: 0.001,
        extremelyRare: 0.0001,
        never: 0
      },
      LOG_LEVEL_VALUES = globalThis.Object.values(LOG_LEVELS),
      SCRIPT_ORIGINS = {
        bg: "bg",
        ui: "ui",
        pre: "pre",
        loop: "loop",
        sdk: "sdk",
        sdk_global: "sdk_global"
      },
      SENTRY_DEBUG = (globalThis.Object.values(SCRIPT_ORIGINS), "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__),
      SENTRY_VERSION = "8.34.0",
      GLOBAL_OBJ = globalThis;
    function getGlobalSingleton(name, creator, carrier) {
      const target = carrier || GLOBAL_OBJ,
        sentryObj = target.__SENTRY__ = target.__SENTRY__ || {},
        versionObj = sentryObj["8.34.0"] = sentryObj["8.34.0"] || {};
      return versionObj[name] || (versionObj[name] = creator());
    }
    const CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"],
      originalConsoleMethods = {};
    function consoleSandbox(callback) {
      if (!("console" in GLOBAL_OBJ)) return callback();
      const consoleObj = GLOBAL_OBJ.console,
        savedMethods = {},
        methodNames = globalThis.Object.keys(originalConsoleMethods);
      methodNames.forEach(meth => {
        const savedFn = originalConsoleMethods[meth];
        savedMethods[meth] = consoleObj[meth], consoleObj[meth] = savedFn;
      });
      try {
        return callback();
      } finally {
        methodNames.forEach(method => {
          consoleObj[method] = savedMethods[method];
        });
      }
    }
    const sentryLogger = getGlobalSingleton("logger", function createLogger() {
        let loggerEnabled = false;
        const logger = {
          enable: () => {
            loggerEnabled = true;
          },
          disable: () => {
            loggerEnabled = false;
          },
          isEnabled: () => loggerEnabled
        };
        return SENTRY_DEBUG ? CONSOLE_LEVELS.forEach(level => {
          logger[level] = (...args) => {
            loggerEnabled && consoleSandbox(() => {
              GLOBAL_OBJ.console[level]("Sentry Logger [" + level + "]:", ...args);
            });
          };
        }) : CONSOLE_LEVELS.forEach(noopLevel => {
          logger[noopLevel] = () => {};
        }), logger;
      }),
      objectToString = globalThis.Object.prototype.toString;
    function isError(value) {
      switch (objectToString.call(value)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object WebAssembly.Exception]":
          return true;
        default:
          return safeInstanceOf(value, Error);
      }
    }
    function isInstanceOf(value, className) {
      return objectToString.call(value) === "[object " + className + "]";
    }
    function isErrorEvent(val) {
      return isInstanceOf(val, "ErrorEvent");
    }
    function isDOMError(val) {
      return isInstanceOf(val, "DOMError");
    }
    function isString(val) {
      return isInstanceOf(val, "String");
    }
    function isParameterizedString(val) {
      return "object" == typeof val && null !== val && "__sentry_template_string__" in val && "__sentry_template_values__" in val;
    }
    function isPrimitive(val) {
      return null === val || isParameterizedString(val) || "object" != typeof val && "function" != typeof val;
    }
    function isPlainObject(val) {
      return isInstanceOf(val, "Object");
    }
    function isEvent(target) {
      return "undefined" != typeof Event && safeInstanceOf(target, Event);
    }
    function isThenable(val) {
      return Boolean(val && val.then && "function" == typeof val.then);
    }
    function safeInstanceOf(obj, base) {
      try {
        return obj instanceof base;
      } catch (err) {
        return false;
      }
    }
    function isVueViewModel(vm) {
      return !("object" != typeof vm || null === vm || !vm.__isVue && !vm._isVue);
    }
    const globalRef = GLOBAL_OBJ,
      DEFAULT_MAX_STRING_LENGTH = 80;
    function htmlTreeAsString(elem, options = {}) {
      if (!elem) return "<unknown>";
      try {
        let currentNode = elem;
        const maxDepth = 5,
          elements = [];
        let depth = 0,
          totalLen = 0;
        const separator = " > ",
          sepLen = " > ".length;
        let nodeStr;
        const keyAttrs = globalThis.Array.isArray(options) ? options : options.keyAttrs,
          maxLen = !globalThis.Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
        for (; currentNode && depth++ < maxDepth && (nodeStr = htmlElementAsString(currentNode, keyAttrs), !("html" === nodeStr || depth > 1 && totalLen + elements.length * sepLen + nodeStr.length >= maxLen));) elements.push(nodeStr), totalLen += nodeStr.length, currentNode = currentNode.parentNode;
        return elements.reverse().join(" > ");
      } catch (err) {
        return "<unknown>";
      }
    }
    function htmlElementAsString(element, keyAttrsList) {
      const el = element,
        parts = [];
      if (!el || !el.tagName) return '';
      if (globalRef.HTMLElement && el instanceof HTMLElement && el.dataset) {
        if (el.dataset.sentryComponent) return el.dataset.sentryComponent;
        if (el.dataset.sentryElement) return el.dataset.sentryElement;
      }
      parts.push(el.tagName.toLowerCase());
      const matchedAttrs = keyAttrsList && keyAttrsList.length ? keyAttrsList.filter(attr => el.getAttribute(attr)).map(attr => [attr, el.getAttribute(attr)]) : null;
      if (matchedAttrs && matchedAttrs.length) matchedAttrs.forEach(pair => {
        parts.push("[" + pair[0] + "=\"" + pair[1] + "\"]");
      });else {
        el.id && parts.push("#" + el.id);
        const className = el.className;
        if (className && isString(className)) {
          const classes = className.split(/\s+/);
          for (const cls of classes) parts.push("." + cls);
        }
      }
      const labelAttrs = ["aria-label", "type", "name", "title", "alt"];
      for (const attrName of labelAttrs) {
        const attrVal = el.getAttribute(attrName);
        attrVal && parts.push("[" + attrName + "=\"" + attrVal + "\"]");
      }
      return parts.join('');
    }
    function truncate(str, maxLength = 0) {
      return "string" != typeof str || 0 === maxLength || str.length <= maxLength ? str : str.slice(0, maxLength) + "...";
    }
    function safeJoin(arr, separator) {
      if (!globalThis.Array.isArray(arr)) return '';
      const results = [];
      for (let idx = 0; idx < arr.length; idx++) {
        const item = arr[idx];
        try {
          isVueViewModel(item) ? results.push("[VueViewModel]") : results.push(globalThis.String(item));
        } catch (err) {
          results.push("[value cannot be serialized]");
        }
      }
      return results.join(separator);
    }
    function stringMatchesSomePattern(str, pattern, exact = false) {
      return !!isString(str) && (function isRegex(p) {
        return isInstanceOf(p, "RegExp");
      }(pattern) ? pattern.test(str) : !!isString(pattern) && (exact ? str === pattern : str.includes(pattern)));
    }
    function matchesSomePattern(testStr, patterns = [], exact = false) {
      return patterns.some(pat => stringMatchesSomePattern(testStr, pat, exact));
    }
    function fill(target, prop, replacer) {
      if (!(prop in target)) return;
      const original = target[prop],
        replacement = replacer(original);
      "function" == typeof replacement && markFunctionWrapped(replacement, original), target[prop] = replacement;
    }
    function addNonEnumerableProperty(obj, key, value) {
      try {
        globalThis.Object.defineProperty(obj, key, {
          value: value,
          writable: true,
          configurable: true
        });
      } catch (ex) {
        SENTRY_DEBUG && sentryLogger.log("Failed to add non-enumerable property \"" + key + "\" to object", obj);
      }
    }
    function markFunctionWrapped(wrapper, original) {
      try {
        const proto = original.prototype || {};
        wrapper.prototype = original.prototype = proto, addNonEnumerableProperty(wrapper, "__sentry_original__", original);
      } catch (err) {}
    }
    function getOriginalFunction(fn) {
      return fn.__sentry_original__;
    }
    function objectify(event) {
      if (isError(event)) return {
        message: event.message,
        name: event.name,
        stack: event.stack,
        ...extractExceptionKeysForMessage(event)
      };
      if (isEvent(event)) {
        const eventObj = {
          type: event.type,
          target: getComponentName(event.target),
          currentTarget: getComponentName(event.currentTarget),
          ...extractExceptionKeysForMessage(event)
        };
        return "undefined" != typeof CustomEvent && safeInstanceOf(event, CustomEvent) && (eventObj.detail = event.detail), eventObj;
      }
      return event;
    }
    function getComponentName(eventTarget) {
      try {
        return function isElement(thing) {
          return "undefined" != typeof Element && safeInstanceOf(thing, Element);
        }(eventTarget) ? htmlTreeAsString(eventTarget) : globalThis.Object.prototype.toString.call(eventTarget);
      } catch (err) {
        return "<unknown>";
      }
    }
    function extractExceptionKeysForMessage(obj) {
      if ("object" == typeof obj && null !== obj) {
        const result = {};
        for (const k in obj) globalThis.Object.prototype.hasOwnProperty.call(obj, k) && (result[k] = obj[k]);
        return result;
      }
      return {};
    }
    function dropUndefinedKeys(input) {
      return dropUndefinedRecursive(input, new Map());
    }
    function dropUndefinedRecursive(obj, type) {
      if (function isPlainObj(obj) {
        if (!isPlainObject(obj)) return false;
        try {
          const ctorName = globalThis.Object.getPrototypeOf(obj).constructor.name;
          return !ctorName || "Object" === ctorName;
        } catch (cloneErr) {
          return true;
        }
      }(obj)) {
        const cached = type.get(obj);
        if (undefined !== cached) return cached;
        const result = {};
        type.set(obj, result);
        for (const prop of globalThis.Object.getOwnPropertyNames(obj)) undefined !== obj[prop] && (result[prop] = dropUndefinedRecursive(obj[prop], type));
        return result;
      }
      if (globalThis.Array.isArray(obj)) {
        const cachedArr = type.get(obj);
        if (undefined !== cachedArr) return cachedArr;
        const arr = [];
        return type.set(obj, arr), obj.forEach(item => {
          arr.push(dropUndefinedRecursive(item, type));
        }), arr;
      }
      return obj;
    }
    function uuid4() {
      const globalObj = GLOBAL_OBJ,
        cryptoApi = globalObj.crypto || globalObj.msCrypto;
      let randomByte = () => 16 * globalThis.Math.random();
      try {
        if (cryptoApi && cryptoApi.randomUUID) return cryptoApi.randomUUID().replace(/-/g, '');
        cryptoApi && cryptoApi.getRandomValues && (randomByte = () => {
          const buf = new Uint8Array(1);
          return cryptoApi.getRandomValues(buf), buf[0];
        });
      } catch (err) {}
      return ([10000000] + 1000 + 4000 + 8000 + 100000000000).replace(/[018]/g, c => (c ^ (15 & randomByte()) >> c / 4).toString(16));
    }
    function getFirstException(event) {
      return event.exception && event.exception.values ? event.exception.values[0] : undefined;
    }
    function getEventDescription(event) {
      const {
        message: message,
        event_id: eventId
      } = event;
      if (message) return message;
      const firstException = getFirstException(event);
      return firstException ? firstException.type && firstException.value ? firstException.type + ": " + firstException.value : firstException.type || firstException.value || eventId || "<unknown>" : eventId || "<unknown>";
    }
    function addExceptionTypeValue(event, val, type) {
      const exceptionObj = event.exception = event.exception || {},
        values = exceptionObj.values = exceptionObj.values || [],
        firstVal = values[0] = values[0] || {};
      firstVal.value || (firstVal.value = val || ''), firstVal.type || (firstVal.type = type || "Error");
    }
    function addExceptionMechanism(event, newMechanism) {
      const firstExc = getFirstException(event);
      if (!firstExc) return;
      const existingMech = firstExc.mechanism;
      if (firstExc.mechanism = {
        type: "generic",
        handled: true,
        ...existingMech,
        ...newMechanism
      }, newMechanism && "data" in newMechanism) {
        const mergedData = {
          ...(existingMech && existingMech.data),
          ...newMechanism.data
        };
        firstExc.mechanism.data = mergedData;
      }
    }
    function checkOrSetAlreadyCaught(exception) {
      if (exception && exception.__sentry_captured__) return true;
      try {
        addNonEnumerableProperty(exception, "__sentry_captured__", true);
      } catch (err) {}
      return false;
    }
    const IS_SENTRY_DEBUG = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
      installedIntegrations = [];
    function afterAllSetup(client, integrations) {
      for (const integration of integrations) integration && integration.afterAllSetup && integration.afterAllSetup(client);
    }
    function setupIntegration(client, matched, installedMap) {
      if (installedMap[matched.name]) IS_SENTRY_DEBUG && sentryLogger.log("Integration skipped because it was already installed: " + matched.name);else {
        if (installedMap[matched.name] = matched, -1 === installedIntegrations.indexOf(matched.name) && "function" == typeof matched.setupOnce && (matched.setupOnce(), installedIntegrations.push(matched.name)), matched.setup && "function" == typeof matched.setup && matched.setup(client), "function" == typeof matched.preprocessEvent) {
          const boundPreprocess = matched.preprocessEvent.bind(matched);
          client.on("preprocessEvent", (event, hint) => boundPreprocess(event, hint, client));
        }
        if ("function" == typeof matched.processEvent) {
          const boundProcess = matched.processEvent.bind(matched),
            processor = globalThis.Object.assign((event, hint) => boundProcess(event, hint, client), {
              id: matched.name
            });
          client.addEventProcessor(processor);
        }
        IS_SENTRY_DEBUG && sentryLogger.log("Integration installed: " + matched.name);
      }
    }
    const DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", "can't redefine non-configurable property \"solana\"", "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler"],
      inboundFiltersIntegration = (options = {}) => ({
        name: "InboundFilters",
        ["processEvent"](event, hint, client) {
          const clientOptions = client.getOptions(),
            mergedOpts = function mergeFilterOptions(filterOptions = {}, clientOpts = {}) {
              return {
                allowUrls: [...(filterOptions.allowUrls || []), ...(clientOpts.allowUrls || [])],
                denyUrls: [...(filterOptions.denyUrls || []), ...(clientOpts.denyUrls || [])],
                ignoreErrors: [...(filterOptions.ignoreErrors || []), ...(clientOpts.ignoreErrors || []), ...(filterOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS)],
                ignoreTransactions: [...(filterOptions.ignoreTransactions || []), ...(clientOpts.ignoreTransactions || [])],
                ignoreInternal: undefined === filterOptions.ignoreInternal || filterOptions.ignoreInternal
              };
            }(options, clientOptions);
          return function shouldDropEvent(eventToCheck, filterOpts) {
            if (filterOpts.ignoreInternal && function isInternalError(evt) {
              try {
                return "SentryError" === evt.exception.values[0].type;
              } catch (err) {}
              return false;
            }(eventToCheck)) return IS_SENTRY_DEBUG && sentryLogger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + getEventDescription(eventToCheck)), true;
            if (function isIgnoredError(evt, ignoreList) {
              if (evt.type || !ignoreList || !ignoreList.length) return false;
              return function getMessages(evt) {
                const msgs = [];
                evt.message && msgs.push(evt.message);
                let lastExceptionValue;
                try {
                  lastExceptionValue = evt.exception.values[evt.exception.values.length - 1];
                } catch (_e) {}
                return lastExceptionValue && lastExceptionValue.value && (msgs.push(lastExceptionValue.value), lastExceptionValue.type && msgs.push(lastExceptionValue.type + ": " + lastExceptionValue.value)), msgs;
              }(evt).some(s => matchesSomePattern(s, ignoreList));
            }(eventToCheck, filterOpts.ignoreErrors)) return IS_SENTRY_DEBUG && sentryLogge("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + getEventDescription(eventToCheck)), true;
            if (function isEmptyException(event) {
              if (event.type) return false;
              if (!event.exception || !event.exception.values || 0 === event.exception.values.length) return false;
              return !event.message && !event.exception.values.some(excVal => excVal.stacktrace || excVal.type && "Error" !== excVal.type || excVal.value);
            }(eventToCheck)) return IS_SENTRY_DEBUG && sentryLogger.warn("Event dropped due to not having an error message, error type or stacktrace.\nEvent: " + getEventDescription(eventToCheck)), true;
            if (function shouldIgnoreTransaction(evt, ignoreTx) {
              if ("transaction" !== evt.type || !ignoreTx || !ignoreTx.length) return false;
              const txName = evt.transaction;
              return !!txName && matchesSomePattern(txName, ignoreTx);
            }(eventToCheck, filterOpts.ignoreTransactions)) return IS_SENTRY_DEBUG && sentryLogger.warn("Event dropped due to being matched by `ignoreTransactions` option.\nEvent: " + getEventDescription(eventToCheck)), true;
            if (function isDeniedUrl(evt, denyList) {
              if (!denyList || !denyList.length) return false;
              const url = getEventFilterUrl(evt);
              return !!url && matchesSomePattern(url, denyList);
            }(eventToCheck, filterOpts.denyUrls)) return IS_SENTRY_DEBUG && sentryLogger.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + getEventDescription(eventToCheck) + ".\nUrl: " + getEventFilterUrl(eventToCheck)), true;
            if (!function isAllowedUrl(evt, allowList) {
              if (!allowList || !allowList.length) return true;
              const url = getEventFilterUrl(evt);
              return !url || matchesSomePattern(url, allowList);
            }(eventToCheck, filterOpts.allowUrls)) return IS_SENTRY_DEBUG && sentryLogger.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + getEventDescription(eventToCheck) + ".\nUrl: " + getEventFilterUrl(eventToCheck)), true;
            return false;
          }(event, mergedOpts) ? null : event;
        }
      });
    function getEventFilterUrl(evt) {
      try {
        let frames;
        try {
          frames = evt.exception.values[0].stacktrace.frames;
        } catch (_e) {}
        return frames ? function findFrameUrl(frames = []) {
          for (let i = frames.length - 1; i >= 0; i--) {
            const frame = frames[i];
            if (frame && "<anonymous>" !== frame.filename && "[native code]" !== frame.filename) return frame.filename || null;
          }
          return null;
        }(frames) : null;
      } catch (err) {
        return IS_SENTRY_DEBUG && sentryLogger.error("Cannot extract url for event " + getEventDescription(evt)), null;
      }
    }
    function getMainCarrier() {
      return initCarrier(GLOBAL_OBJ), GLOBAL_OBJ;
    }
    function initCarrier(carrier) {
      const sentry = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
      return sentry.version = sentry.version || "8.34.0", sentry["8.34.0"] = sentry["8.34.0"] || {};
    }
    function generatePropagationContext() {
      return {
        traceId: uuid4(),
        spanId: uuid4().substring(16)
      };
    }
    const MS_PER_SEC = 1000;
    function dateTimestampInSeconds() {
      return globalThis.Date.now() / MS_PER_SEC;
    }
    const timestampInSeconds = function createTimestamp() {
      const {
        performance: performanceApi
      } = GLOBAL_OBJ;
      if (!performanceApi || !performanceApi.now) return dateTimestampInSeconds;
      const drift = globalThis.Date.now() - performanceApi.now(),
        timeOrigin = null == performanceApi.timeOrigin ? drift : performanceApi.timeOrigin;
      return () => (timeOrigin + performanceApi.now()) / MS_PER_SEC;
    }();
    let timestampSource;
    (() => {
      const {
        performance: performanceObj
      } = GLOBAL_OBJ;
      if (!performanceObj || !performanceObj.now) return void (timestampSource = "none");
      const threshold = 3600000,
        perfNow = performanceObj.now(),
        dateNow = globalThis.Date.now(),
        originDrift = performanceObj.timeOrigin ? globalThis.Math.abs(performanceObj.timeOrigin + perfNow - dateNow) : threshold,
        timeOriginOk = originDrift < threshold,
        navStart = performanceObj.timing && performanceObj.timing.navigationStart,
        navStartDrift = "number" == typeof navStart ? globalThis.Math.abs(navStart + perfNow - dateNow) : threshold;
      timeOriginOk || navStartDrift < threshold ? originDrift <= navStartDrift ? (timestampSource = "timeOrigin", performanceObj.timeOrigin) : timestampSource = "navigationStart" : timestampSource = "dateNow";
    })();
    function updateSession(session, sessionUpdate = {}) {
      if (sessionUpdate.user && (!session.ipAddress && sessionUpdate.user.ip_address && (session.ipAddress = sessionUpdate.user.ip_address), session.did || sessionUpdate.did || (session.did = sessionUpdate.user.id || sessionUpdate.user.email || sessionUpdate.user.username)), session.timestamp = sessionUpdate.timestamp || timestampInSeconds(), sessionUpdate.abnormal_mechanism && (session.abnormal_mechanism = sessionUpdate.abnormal_mechanism), sessionUpdate.ignoreDuration && (session.ignoreDuration = sessionUpdate.ignoreDuration), sessionUpdate.sid && (session.sid = 32 === sessionUpdate.sid.length ? sessionUpdate.sid : uuid4()), undefined !== sessionUpdate.init && (session.init = sessionUpdate.init), !session.did && sessionUpdate.did && (session.did = '' + sessionUpdate.did), "number" == typeof sessionUpdate.started && (session.started = sessionUpdate.started), session.ignoreDuration) session.duration = undefined;else {
        if ("number" == typeof sessionUpdate.duration) session.duration = sessionUpdate.duration;else {
          const dur = session.timestamp - session.started;
          session.duration = dur >= 0 ? dur : 0;
        }
      }
      sessionUpdate.release && (session.release = sessionUpdate.release), sessionUpdate.environment && (session.environment = sessionUpdate.environment), !session.ipAddress && sessionUpdate.ipAddress && (session.ipAddress = sessionUpdate.ipAddress), !session.userAgent && sessionUpdate.userAgent && (session.userAgent = sessionUpdate.userAgent), "number" == typeof sessionUpdate.errors && (session.errors = sessionUpdate.errors), sessionUpdate.status && (session.status = sessionUpdate.status);
    }
    const SPAN_KEY = "_sentrySpan";
    function setSpanOnScope(scope, span) {
      span ? addNonEnumerableProperty(scope, "_sentrySpan", span) : delete scope["_sentrySpan"];
    }
    function getSpanOnScope(scope) {
      return scope["_sentrySpan"];
    }
    class SentryScope {
      constructor() {
        this._notifyingListeners = false, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = generatePropagationContext();
      }
      ["clone"]() {
        const outputVal = new SentryScope();
        return outputVal._breadcrumbs = [...this._breadcrumbs], outputVal._tags = {
          ...this._tags
        }, outputVal._extra = {
          ...this._extra
        }, outputVal._contexts = {
          ...this._contexts
        }, outputVal._user = this._user, outputVal._level = this._level, outputVal._session = this._session, outputVal._transactionName = this._transactionName, outputVal._fingerprint = this._fingerprint, outputVal._eventProcessors = [...this._eventProcessors], outputVal._requestSession = this._requestSession, outputVal._attachments = [...this._attachments], outputVal._sdkProcessingMetadata = {
          ...this._sdkProcessingMetadata
        }, outputVal._propagationContext = {
          ...this._propagationContext
        }, outputVal._client = this= this._client, outputVal._lastEventId = this._lastEventId, setSpanOnScope(outputVal, getSpanOnScope(this)), outputVal;
      }
      ["setClient"](client) {
        this._client = client;
      }
      ["setLastEventId"](id) {
        this._lastEventId = id;
      }
      ["getClient"]() {
        return this._client;
      }
      ["lastEventId"]() {
        return this._lastEventId;
      }
      ["addScopeListener"](listener) {
        this._scopeListeners.push(listener);
      }
      ["addEventProcessor"](processor) {
        return this._eventProcessors.push(processor), this;
      }
      ["setUser"](user) {
        return this._user = user || {
          email: undefined,
          id: undefined,
          ip_address: undefined,
          username: undefined
        }, this._session && updateSession(this._session, {
          user: user
        }), this._notifyScopeListeners(), this;
      }
      ["getUser"]() {
        return this._user;
      }
      ["getRequestSession"]() {
        return this._requestSession;
      }
      ["setRequestSession"](reqSession) {
        return this._requestSession = reqSession, this;
      }
      ["setTags"](tags) {
        return this._tags = {
          ...this._tags,
          ...tags
        }, this._notifyScopeListeners(), this;
      }
      ["setTag"](key, val) {
        return this._tags = {
          ...this._tags,
          [key]: val
        }, this._notifyScopeListeners(), this;
      }
      ["setExtras"](extras) {
        return this._extra = {
          ...this._extra,
          ...extras
        }, this._notifyScopeListeners(), this;
      }
      ["setExtra"](key, value) {
        return this._extra = {
          ...this._extra,
          [key]: value
        }, this._notifyScopeListeners(), this;
      }
      ["setFingerprint"](fingerprint) {
        return this._fingerprint = fingerprint, this._notifyScopeListeners(), this;
      }
      ["setLevel"](level) {
        return this._level = level, this._notifyScopeListeners(), this;
      }
      ["setTransactionName"](name) {
        return this._transactionName = name, this._notifyScopeListeners(), this;
      }
      ["setContext"](key, context) {
        return null === context ? delete this._contexts[key] : this._contexts[key] = context, this._notifyScopeListeners(), this;
      }
      ["setSession"](session) {
        return session ? this._session = session : delete this._session, this._notifyScopeListeners(), this;
      }
      ["getSession"]() {
        return this._session;
      }
      ["update"](result) {
        if (!result) return this;
        const str = "function" == typeof result ? result(this) : result,
          [v, requestSession] = str instanceof SentryScope ? [str.getScopeData(), str.getRequestSession()] : isPlainObject(str) ? [result, result.requestSession] : [],
          {
            tags: tags,
            extra: extra,
            user: user,
            contexts: contexts,
            level: level,
            fingerprint: fingerprint = [],
            propagationContext: propagationContext
          } = v || {};
        return this._tags = {
          ...this._tags,
          ...tags
        }, this._extra = {
          ...this._extra,
          ...extra
        }, this._contexts = {
          ...this._contexts,
          ...contexts
        }, user && globalThis.Object.keys(user).length && (this._user = user), level && (this._level = level), fingerprint.length && (this._fingerprint = fingerprint), propagationContext && (this._propagationContext = propagationContext), requestSession && (this._requestSession = requestSession), this;
      }
      ["clear"]() {
        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = undefined, this._transactionName = undefined, this._fingerprint = undefined, this._requestSession = undefined, this._session = undefined, setSpanOnScope(this, undefined), this._attachments = [], this._propagationContext = generatePropagationContext(), this._notifyScopeListeners(), this;
      }
      ["addBreadcrumb"](breadcrumb, hint) {
        const strb = "number" == typeof hint ? hint : 100;
        if (strb <= 0) return this;
        const val = {
            timestamp: dateTimestampInSeconds(),
            ...breadcrumb
          },
          breadcrumbs = this._breadcrumbs;
        return breadcrumbs.push(val), this._breadcrumbs = breadcrumbs.length > strb ? breadcrumbs.slice(-strb) : breadcrumbs, this._notifyScopeListeners(), this;
      }
      ["getLastBreadcrumb"]() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
      }
      ["clearBreadcrumbs"]() {
        return this._breadcrumbs = [], this._notifyScopeListeners(), this;
      }
      ["addAttachment"](attachment) {
        return this._attachments.push(attachment), this;
      }
      ["clearAttachments"]() {
        return this._attachments = [], this;
      }
      ["getScopeData"]() {
        return {
          breadcrumbs: this._breadcrumbs,
          attachments: this._attachments,
          contexts: this._contexts,
          tags: this._tags,
          extra: this._extra,
          user: this._user,
          level: this._level,
          fingerprint: this._fingerprint || [],
          eventProcessors: this._eventProcessors,
          propagationContext: this._propagationContext,
          sdkProcessingMetadata: this._sdkProcessingMetadata,
          transactionName: this._transactionName,
          span: getSpanOnScope(this)
        };
      }
      ["setSDKProcessingMetadata"](metadata) {
        return this._sdkProcessingMetadata = {
          ...this._sdkProcessingMetadata,
          ...metadata
        }, this;
      }
      ["setPropagationContext"](propagationContext) {
        return this._propagationContext = propagationContext, this;
      }
      ["getPropagationContext"]() {
        return this._propagationContext;
      }
      ["captureException"](originalException, hint) {
        const event_id = hint && hint.event_id ? hint.event_id : uuid4();
        if (!this._client) return sentryLogger.warn("No client configured on scope - will not capture exception!"), event_id;
        const syntheticException = new Error("Sentry syntheticException");
        return this._client.captureException(originalException, {
          originalException: originalException,
          syntheticException: syntheticException,
          ...hint,
          event_id: event_id
        }, this), event_id;
      }
      ["captureMessage"](originalException, level, hint) {
        const event_id = hint && hint.event_id ? hint.event_id : uuid4();
        if (!this._client) return sentryLogger.warn("No client configured on scope - will not capture message!"), event_id;
        const syntheticException = new Error(originalException);
        return this._client.captureMessage(originalException, level, {
          originalException: originalException,
          syntheticException: syntheticException,
          ...hint,
          event_id: event_id
        }, this), event_id;
      }
      ["captureEvent"](eventType, hint) {
        const eventId = hint && hint.event_id ? hint.event_id : uuid4();
        return this._client ? (this._client.captureEvent(eventType, {
          ...hint,
          event_id: eventId
        }, this), eventId) : (sentryLogger.warn("No client configured on scope - will not capture event!"), eventId);
      }
      ["_notifyScopeListeners"]() {
        this._notifyingListeners || (this._notifyingListeners = true, this._scopeListeners.forEach(item => {
          item(this);
        }), this._notifyingListeners = false);
      }
    }
    const SentryScope = SentryScope;
    class SentryHub {
      constructor(_0x, vb) {
        let currentScope, isolationScope;
        currentScope = vc || new SentryScope(), isolationScope = vb || new SentryScope(), this._stack = [{
          scope: currentScope
        }], this._isolationScope = isolationScope;
      }
      ["withScope"](callback) {
        const valc = this._pushScope();
        let vd;
        try {
          vd = callback(valc);
        } catch (err) {
          throw this._popScope(), err;
        }
        return isThenable(vd) ? vd.then(val => (this._popScope(), val), err => {
          throw this._popScope(), err;
        }) : (this._popScope(), vd);
      }
      ["getClient"]() {
        return this.getStackTop().client;
      }
      ["getScope"]() {
        return this.getStackTop().scope;
      }
      ["getIsolationScope"]() {
        return this._isolationScope;
      }
      ["getStackTop"]() {
        return this._stack[this._stack.length - 1];
      }
      ["_pushScope"]() {
        const scope = this.getScope().clone();
        return this._stack.push({
          client: this.getClient(),
          scope: scope
        }), scope;
      }
      ["_popScope"]() {
        return !(this._stack.length <= 1) && !!this._stack.pop();
      }
    }
    function getCurrentHub() {
      const stack = initCarrier(getMainCarrier());
      return stack.stack = stack.stack || new SentryHub(function stackHelper() {
        return getGlobalSingleton("defaultCurrentScope", () => new SentryScope());
      }(), function helper() {
        return getGlobalSingleton("defaultIsolationScope", () => new SentryScope());
      }());
    }
    function withScope(callback) {
      return getCurrentHub().withScope(callback);
    }
    function setCurrentScope(scopeToSet, scopeCallback) {
      const hub = getCurrentHub();
      return hub.withScope(() => (hub.getStackTop().scope = scopeToSet, scopeCallback(scopeToSet)));
    }
    function withIsolationScope(callback) {
      return getCurrentHub().withScope(() => callback(getCurrentHub().getIsolationScope()));
    }
    function getHubFromCarrier(carrierArg) {
      const carrier = initCarrier(carrierArg);
      return carrier.acs ? carrier.acs : function helperb() {
        return {
          withIsolationScope: withIsolationScope,
          withScope: withScope,
          withSetScope: setCurrentScope,
          withSetIsolationScope: (scope, callback) => withIsolationScope(callback),
          getCurrentScope: () => getCurrentHub().getScope(),
          getIsolationScope: () => getCurrentHub().getIsolationScope()
        };
      }();
    }
    function getCurrentScope() {
      return getHubFromCarrier(getMainCarrier()).getCurrentScope();
    }
    function getIsolationScope() {
      return getHubFromCarrier(getMainCarrier()).getIsolationScope();
    }
    function getClient() {
      return getCurrentScope().getClient();
    }
    let origFunctionToString;
    const patchedFunctions = new WeakMap(),
      functionToStringIntegration = () => ({
        name: "FunctionToString",
        ["setupOnce"]() {
          origFunctionToString = Function.prototype.toString;
          try {
            Function.prototype.toString = function (...args) {
              const originalFn = getOriginalFunction(this),
                targetFn = patchedFunctions.has(getClient()) && undefined !== originalFn ? originalFn : this;
              return origFunctionToString.apply(targetFn, args);
            };
          } catch (err) {}
        },
        ["setup"](client) {
          patchedFunctions.set(client, true);
        }
      }),
      STACKTRACE_FRAME_LIMIT = 50,
      UNKNOWN_FUNCTION = "?",
      chromeRegex = /\(error: (.*)\)/,
      sentryWrappedRegex = /captureMessage|captureException/;
    function createStackParser(...param) {
      const vale = param.sort((a, b) => a[0] - b[0]).map(itemb => itemb[1]);
      return (result, start = 0, skip = 0) => {
        const frames = [],
          lines = result.split("\n");
        for (let idx = start; idx < lines.length; idx++) {
          const valf = lines[idx];
          if (valf.length > 1024) continue;
          const cleaned = chromeRegex.test(valf) ? valf.replace(chromeRegex, "$1") : valf;
          if (!cleaned.match(/\S*Error: /)) {
            for (const list of vale) {
              const parsedFrame = list(cleaned);
              if (parsedFrame) {
                frames.push(parsedFrame);
                break;
              }
            }
            if (frames.length >= STACKTRACE_FRAME_LIMIT + skip) break;
          }
        }
        return function stackHelperb(frames) {
          if (!frames.length) return [];
          const frameCopy = globalThis.Array.from(frames);
          return /sentryWrapped/.test(stripSentryFramesAndReverse(frameCopy)["function"] || '') && frameCopy.pop(), frameCopy.reverse(), sentryWrappedRegex.test(stripSentryFramesAndReverse(frameCopy)["function"] || '') && (frameCopy.pop(), sentryWrappedRegex.test(stripSentryFramesAndReverse(frameCopy)["function"] || '') && frameCopy.pop()), frameCopy.slice(0, STACKTRACE_FRAME_LIMIT).map(frame => ({
            ...frame,
            filename: frame.filename || stripSentryFramesAndReverse(frameCopy).filename,
            ["function"]: frame["function"] || "?"
          }));
        }(frames.slice(skip));
      };
    }
    function stripSentryFramesAndReverse(arr) {
      return arr[arr.length - 1] || {};
    }
    const ANONYMOUS_SENTINEL = "<anonymous>";
    function getFunctionName(fn) {
      try {
        return fn && "function" == typeof fn && fn.name || "<anonymous>";
      } catch (err) {
        return "<anonymous>";
      }
    }
    function parseStackFrames(event) {
      const exception = event.exception;
      if (exception) {
        const frameList = [];
        try {
          return exception.values.forEach(exc => {
            exc.stacktrace.frames && frameList.push(...exc.stacktrace.frames);
          }), frameList;
        } catch (err) {
          return;
        }
      }
    }
    const dedupeIntegration = () => {
      let lastEvent;
      return {
        name: "Dedupe",
        ["processEvent"](vf) {
          if (vf.type) return vf;
          try {
            if (function eventHelper(eventA, event) {
              if (!event) return false;
              if (function messagesMatch(eventb, eventB) {
                const msgA = eventb.message,
                  resultc = eventB.message;
                if (!msgA && !resultc) return false;
                if (msgA && !resultc || !msgA && resultc) return false;
                if (msgA !== resultc) return false;
                if (!vg(eventb, eventB)) return false;
                if (!vh(eventb, eventB)) return false;
                return true;
              }(eventA, event)) return true;
              if (function exceptionsMatch(type, eventB) {
                const valg = vi(eventB),
                  resultd = vi(type);
                if (!valg || !resultd) return false;
                if (valg.type !== resultd.type || valg.value !== resultd.value) return false;
                if (!vg(type, eventB)) return false;
                if (!vh(type, eventB)) return false;
                return true;
              }(eventA, event)) return true;
              return false;
            }(vf, lastEvent)) return IS_SENTRY_DEBUG && sentryLogger.warn("Event dropped due to being a duplicate of previously captured event."), null;
          } catch (errb) {}
          return lastEvent = event;
        }
      };
    };
    function vh(eventA, eventc) {
      let framesA = parseStackFrames(eventA),
        framesB = parseStackFrames(eventc);
      if (!framesA && !framesB) return true;
      if (framesA && !framesB || !framesA && framesB) return false;
      if (framesB.length !== framesA.length) return false;
      for (let i = 0; i < framesB.length; i++) {
        const frameB = framesB[i],
          frame = framesA[i];
        if (frameB.filename !== frame.filename || frameB.lineno !== frame.lineno || frameB.colno !== frame.colno || frameB["function"] !== frame["function"]) return false;
      }
      return true;
    }
    function vg(eventA, eventB) {
      let vali = eventA.fingerprint,
        fpB = eventB.fingerprint;
      if (!vali && !fpB) return true;
      if (vali && !fpB || !vali && fpB) return false;
      try {
        return !(vali.join('') !== fpB.join(''));
      } catch (err) {
        return false;
      }
    }
    function vi(event) {
      return event.exception && event.exception.values && event.exception.values[0];
    }
    const obj = {},
      instrumentSetupDone = {};
    function addInstrumentationHandler(type, callback) {
      obj[type] = obj[type] || [], obj[type].push(callback);
    }
    function maybeSetupInstrumentation(type, paramb) {
      instrumentSetupDone[type] || (paramb(), instrumentSetupDone[type] = true);
    }
    function triggerHandlers(type, data) {
      const handlers = type && obj[type];
      if (handlers) {
        for (const handler of handlers) try {
          handler(data);
        } catch (err) {
          SENTRY_DEBUG && sentryLogger.error("Error while triggering instrumentation handler.\nType: " + type + "\nName: " + getFunctionName(handler) + "\nError:", err);
        }
      }
    }
    const globalObj = GLOBAL_OBJ,
      DEBOUNCE_DURATION = 1000;
    let debounceTimer, lastCapturedEventType, lastCapturedEventTargetId;
    function setupDOMInstrumentation() {
      if (!globalObj.document) return;
      const domHandler = triggerHandlers.bind(null, "dom"),
        domEventHandler = makeDOMEventHandler(domHandler, true);
      globalObj.document.addEventListener("click", domEventHandler, false), globalObj.document.addEventListener("keypress", domEventHandler, false), ["EventTarget", "Node"].forEach(targetType => {
        const proto = globalObj[targetType] && globalObj[targetType].prototype;
        proto && proto.hasOwnProperty && proto.hasOwnProperty("addEventListener") && (fill(proto, "addEventListener", function (originalAdd) {
          return function (paramc, listener, paramd) {
            if ("click" === paramc || "keypress" == paramc) try {
              const target = this,
                handlers = target.__sentry_instrumentation_handlers__ = target.__sentry_instrumentation_handlers__ || {},
                vj = handlers[paramc] = handlers[paramc] || {
                  refCount: 0
                };
              if (!vj.handler) {
                const handler = makeDOMEventHandler(domHandler);
                vj.handler = handler, originalAdd.call(this, paramc, handler, paramd);
              }
              vj.refCount++;
            } catch (err) {}
            return originalAdd.call(this, paramc, listener, paramd);
          };
        }), fill(proto, "removeEventListener", function (originalRemove) {
          return function (eventType, listener, evente) {
            if ("click" === eventType || "keypress" == eventType) try {
              const target = this,
                handlers = target.__sentry_instrumentation_handlers__ || {},
                entry = handlers[eventType];
              entry && (entry.refCount--, entry.refCount <= 0 && (originalRemove.call(this, eventType, entry.handler, evente), entry.handler = undefined, delete handlers[eventType]), 0 === globalThis.Object.keys(handlers).length && delete target.__sentry_instrumentation_handlers__);
            } catch (errc) {}
            return originalRemove.call(this, eventType, listener, evente);
          };
        }));
      });
    }
    function makeDOMEventHandler(eventg, global = false) {
      return domEvent => {
        if (!domEvent || domEvent._sentryCaptured) return;
        const valh = function helperc(cb) {
          try {
            return cb.target;
          } catch (errd) {
            return null;
          }
        }(domEvent);
        if (function shouldSkipKeypress(evtType, element) {
          return "keypress" === evtType && (!element || !element.tagName || "INPUT" !== element.tagName && "TEXTAREA" !== element.tagName && !element.isContentEditable);
        }(domEvent.type, valh)) return;
        addNonEnumerableProperty(domEvent, "_sentryCaptured", true), valh && !valh._sentryId && addNonEnumerableProperty(valh, "_sentryId", uuid4());
        const eventName = "keypress" === domEvent.type ? "input" : domEvent.type;
        if (!function eventHelperb(domEvent) {
          if (domEvent.type !== lastCapturedEventType) return false;
          try {
            if (!domEvent.target || domEvent.target._sentryId !== lastCapturedEventTargetId) return false;
          } catch (erre) {}
          return true;
        }(domEvent)) {
          eventg({
            event: domEvent,
            name: eventName,
            global: global
          }), lastCapturedEventType = domEvent.type, lastCapturedEventTargetId = valh ? valh._sentryId : undefined;
        }
        globalThis.clearTimeout(debounceTimer), debounceTimer = globalObj.setTimeout(() => {
          lastCapturedEventTargetId = undefined, lastCapturedEventType = undefined;
        }, DEBOUNCE_DURATION);
      };
    }
    const SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
    function parseHelper() {
      if (!globalObj.XMLHttpRequest) return;
      const valj = globalThis.XMLHttpRequest.prototype;
      valj.open = new Proxy(valj.open, {
        ["apply"](resulte, xhr, v3) {
          const startTimestamp = 1000 * timestampInSeconds(),
            method = isString(v3[0]) ? v3[0].toUpperCase() : undefined,
            url = function helperd(input) {
              if (isString(input)) return input;
              try {
                return input.toString();
              } catch (errf) {}
              return;
            }(v3[1]);
          if (!method || !url) return resulte.apply(xhr, v3);
          xhr["__sentry_xhr_v3__"] = {
            method: method,
            url: url,
            request_headers: {}
          }, "POST" === method && url.match(/sentry_key/) && (xhr.__sentry_own_request__ = true);
          const onReadyStateChange = () => {
            const strc = xhr["__sentry_xhr_v3__"];
            if (strc && 4 === xhr.readyState) {
              try {
                strc.status_code = xhr.status;
              } catch (err) {}
              triggerHandlers("xhr", {
                endTimestamp: 1000 * timestampInSeconds(),
                startTimestamp: startTimestamp,
                xhr: xhr
              });
            }
          };
          return "onreadystatechange" in xhr && "function" == typeof xhr.onreadystatechange ? xhr.onreadystatechange = new Proxy(xhr.onreadystatechange, {
            apply: (vk, vl, args) => (onReadyStateChange(), vk.apply(vl, args))
          }) : xhr.addEventListener("readystatechange", onReadyStateChange), xhr.setRequestHeader = new Proxy(xhr.setRequestHeader, {
            ["apply"](target, vm, args) {
              const [vn, vo] = args,
                resultg = vm["__sentry_xhr_v3__"];
              return resultg && isString(vn) && isString(vo) && (resultg.request_headers[vn.toLowerCase()] = vo), target.apply(vm, args);
            }
          }), resulte.apply(xhr, v3);
        }
      }), valj.send = new Proxy(valj.send, {
        ["apply"](resulth, xhr, body) {
          const xhrData = xhr["__sentry_xhr_v3__"];
          if (!xhrData) return resulth.apply(xhr, body);
          return undefined !== body[0] && (xhrData.body = body[0]), triggerHandlers("xhr", {
            startTimestamp: 1000 * timestampInSeconds(),
            xhr: xhr
          }), resulth.apply(xhr, body);
        }
      });
    }
    const globalObj = GLOBAL_OBJ;
    let lastUrl;
    function wrapHistoryMethod() {
      if (!function helpere() {
        const valk = globalObj.chrome,
          listb = valk && valk.app && valk.app.runtime,
          strd = "history" in globalObj && !!globalObj.history.pushState && !!globalObj.history.replaceState;
        return !listb && strd;
      }()) return;
      const vall = globalObj.onpopstate;
      function wrapHistoryMethodb(paramf) {
        return function (...args) {
          const url = args.length > 2 ? args[2] : undefined;
          if (url) {
            const from = lastUrl,
              to = globalThis.String(url);
            lastUrl = to, !globalThis.Object && (lEfeq() ^= rgZACYT), triggerHandlers("history", {
              from: from,
              to: to
            });
          }
          return paramf.apply(this, args);
        };
      }
      globalObj.onpopstate = function (...args) {
        const to = globalObj.location.href,
          from = lastUrl;
        lastUrl = to;
        if (triggerHandlers("history", {
          from: from,
          to: to
        }), vall) try {
          return vall.apply(this, args);
        } catch (errh) {}
      }, fill(globalObj.history, "pushState", wrapHistoryMethodb), fill(globalObj.history, "replaceState", wrapHistoryMethodb);
    }
    const MAX_BREADCRUMBS = 100;
    function addBreadcrumb(breadcrumb, hint) {
      const client = getClient(),
        isoScope = getIsolationScope();
      if (!client) return;
      const {
        beforeBreadcrumb: beforeBreadcrumb = null,
        maxBreadcrumbs: maxBreadcrumbs = MAX_BREADCRUMBS
      } = client.getOptions();
      if (maxBreadcrumbs <= 0) return;
      const valm = {
          timestamp: dateTimestampInSeconds(),
          ...breadcrumb
        },
        processedCrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(valm, hint)) : valm;
      null !== processedCrumb && (client.emit && client.emit("beforeAddBreadcrumb", processedCrumb, hint), isoScope.addBreadcrumb(processedCrumb, maxBreadcrumbs));
    }
    function setupConsoleInstrumentation() {
      "console" in GLOBAL_OBJ && CONSOLE_LEVELS.forEach(function (level) {
        level in GLOBAL_OBJ.console && fill(GLOBAL_OBJ.console, level, function (paramg) {
          return originalConsoleMethods[level] = paramg, function (...args) {
            triggerHandlers("console", {
              args: args,
              level: level
            });
            const valn = originalConsoleMethods[level];
            valn && valn.apply(GLOBAL_OBJ.console, args);
          };
        });
      });
    }
    const GLOBAL_WINDOW = GLOBAL_OBJ;
    function hasFetchAPI() {
      if (!("fetch" in GLOBAL_WINDOW)) return false;
      try {
        return new Headers(), new Request("http://www.example.com"), new Response(), true;
      } catch (err) {
        return false;
      }
    }
    function isNativeFn(paramh) {
      return paramh && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(paramh.toString());
    }
    function instrumentFetch(parami, skipSentryRequests = false) {
      skipSentryRequests && !function canUsePureFetch() {
        if ("string" == typeof EdgeRuntime) return true;
        if (!hasFetchAPI()) return false;
        if (isNativeFn(GLOBAL_WINDOW.fetch)) return true;
        let isPureFetch = false;
        const vald = GLOBAL_WINDOW.document;
        if (vald && "function" == typeof vald.createElement) try {
          const str = vald.createElement("iframe");
          str.hidden = true, vald.head.appendChild(str), str.contentWindow && str.contentWindow.fetch && (isPureFetch = isNativeFn(str.contentWindow.fetch)), vald.head.removeChild(str);
        } catch (erri) {
          SENTRY_DEBUG && sentryLogger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", erri);
        }
        return isPureFetch;
      }() || fill(GLOBAL_OBJ, "fetch", function (paramk) {
        return function (...args) {
          const {
              method: method,
              url: url
            } = function helperf(paraml) {
              if (0 === paraml.length) return {
                method: "GET",
                url: ''
              };
              if (2 === paraml.length) {
                const [vp, options] = paraml;
                return {
                  url: getRequestUrl(vp),
                  method: method(options, "method") ? globalThis.String(options.method).toUpperCase() : "GET"
                };
              }
              const num = paraml[0];
              return {
                url: getRequestUrl(num),
                method: method(num, "method") ? globalThis.String(num.method).toUpperCase() : "GET"
              };
            }(args),
            v39 = {
              args: args,
              fetchData: {
                method: method,
                url: url
              },
              startTimestamp: 1000 * timestampInSeconds()
            };
          parami || triggerHandlers("fetch", {
            ...v39
          });
          const stack = new Error().stack;
          return paramk.apply(GLOBAL_OBJ, args).then(async response => (parami ? parami(response) : triggerHandlers("fetch", {
            ...v39,
            endTimestamp: 1000 * timestampInSeconds(),
            response: response
          }), response), error => {
            throw triggerHandlers("fetch", {
              ...v39,
              endTimestamp: 1000 * timestampInSeconds(),
              error: error
            }), isError(error) && undefined === error.stack && (error.stack = stack, addNonEnumerableProperty(error, "framesToPop", 1)), error;
          });
        };
      });
    }
    function method(paramm, paramn) {
      return !!paramm && "object" == typeof paramm && !!paramm[paramn];
    }
    function getRequestUrl(request) {
      return "string" == typeof request ? request : request ? method(request, "url") ? request.url : request.toString ? request.toString() : '' : '';
    }
    const CONSOLE_LEVEL_MAP = ["fatal", "error", "warning", "log", "info", "debug"];
    function mapConsoleLevel(errj) {
      return "warn" === errj ? "warning" : CONSOLE_LEVEL_MAP.includes(errj) ? errj : "log";
    }
    function normalizeHelperb(undefined) {
      return undefined === undefined ? undefined : undefined >= 400 && undefined < 500 ? "warning" : undefined >= 500 ? "error" : undefined;
    }
    function parseUrl(url) {
      if (!url) return {};
      const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
      if (!match) return {};
      const search = match[6] || '',
        _0    hash      host: match[4],
        path: match[5],
        protocol: match[2],
        search: search,
        hash: hash,
        relative: match[5] + search + hash
      };
    }
    const stre = "undefined" == typeof __SENBUG__ || __SENTRY_DEBUG__;
    function serializeValue(value, depth = 100, paramo = 1 / 0) {
      try {
        return normalizeValue('', value, depth, paramo);
      } catch (e) {
        return {
          ERROR: "**non-serializable** (" + e + ")"
        };
      }
    }
    function normalize(input, depth = 3, maxBreadth = 102400) {
      const serialized = serializeValue(input, depth);
      return function helperg(obj) {
        return function helperh(paramp) {
          return ~-encodeURI(paramp).split(/%..|./).length;
        }(JSON.stringify(obj));
      }(serialized) > maxBreadth ? normalize(input, depth - 1, maxBreadth) : serialized;
    }
    function normalizeValue(value, value, __sentry_override_normalization_depth__ = 1 / 0, maxBreadth = 1 / 0, memo = function normalizeHelperc() {
      const strf = "function" == typeof WeakSet,
        refTracker = strf ? new WeakSet() : [];
      return [function helperi(paramr) {
        if (strf) return !!refTracker.has(paramr) || (refTracker.add(paramr), false);
        for (let len3 = 0; len3 < refTracker.length; len3++) if (refTracker[len3] === paramr) return true;
        return refTracker.push(paramr), false;
      }, function helperj(params) {
        if (strf) refTracker["delete"](params);else {
          for (let len = 0; len < refTracker.length; len++) if (refTracker[len] === params) {
            refTracker.splice(len, 1);
            break;
          }
        }
      }];
    }()) {
      const [resulti, vq] = memo;
      if (null == value || ["boolean", "string"].includes(typeof value) || "number" == typeof value && Number.isFinite(value)) return value;
      const valo = function eventHelperc(eventh, value) {
        try {
          if ("domain" === eventh && value && "object" == typeof value && vr&& "object" == typeof value && value._events) return "[Domain]";
          if ("domainEmitter" === eventh) return "[DomainEmitter]";
          if ("undefined" != typeof global && value === global) return "[Global]";
          if ("undefined" != typeof globalThis.window && value === globalThis.window) return "[Window]";
          if ("undefined" != typeof globalThis.document && value === globalThis.document) return "[Document]";
          if (isVueViewModel(value)) return "[VueViewModel]";
          if (function eventHelperd(eventi) {
            return isPlainObject(eventi) && "nativeEvent" in eventi && "preventDefault" in eventi && "stopPropagation" in eventi;
          }(value)) return "[SyntheticEvent]";
          if ("number" == typeof value && !Number.isFinite(value)) return "[" + value + "]";
          if ("function" == typeof value) return "[Function: " + getFunctionName(value) + "]";
          if ("symbol" == typeof value) return "[" + globalThis.String(value) + "]";
          if ("bigint" == typeof value) return "[BigInt: " + globalThis.String(value) + "]";
          const valp = function helperk(typeb) {
            const resultj = globalThis.Object.getPrototypeOf(typeb);
            return resultj ? resultj.constructor.name : "null prototype";
          }(value);
          return /^HTML(\w*)Element$/.test(valp) ? "[HTMLElement: " + valp + "]" : "[object " + valp + "]";
        } catch (errk) {
          return "**non-serializable** (" + errk + ")";
        }
      }(value, value);
      if (!valo.startsWith("[object ")) return valo;
      if (value.__sentry_skip_norma_normalization__) return value;
      const strg = "number" == typeof value.__sentry_override_normalization_depth__ ? value.__sentry_override_normalization_depth__ : __sentry_override_normalization_depth__;
      if (0 === strg) return valo.replace("object ", '');
    lar ~]";
      const val34 = value;
      if (val34 && "function" == typeof val34.toJSON) try {
        return normalizeValue('', val34.toJSON(), strg - 1, maxBreadth, memo);
      } catch (err22) {}
      const isArray = globalThis.Array.isArray(value) ? [] : {};
      let numb = 0;
      const val35 = objectify(value);
      for (const v4 in val35) {
        if (!globalThis.Object.prototype.hasOwnProperty.call(val35, v4)) continue;
        if (numb >= maxBreadth) {
          isArray[v4] = "[MaxProperties ~]";
          break;
        }
        const num30 = val35[v4];
        isArray[v4] = normalizeValue(v4, num30, strg - 1, maxBreadth, memo), numb++;
      }
      return vq(value), isArray;
    }
    const strh = "production";
    var PROMISE_STATES;
    function resolvedSyncPromise(paramt) {
      return new SyncPromise(itemc => {
        itemc(paramt);
      });
    }
    function rejectedSyncPromise(paramu) {
      return new SyncPromise((asyncResult, asyncResultc) => {
        asyncResultc(paramu);
      });
    }
    !function (statesEnum) {
      statesEnum[statesEnum.PENDING = 0] = "PENDING";
      statesEnum[statesEnum.RE= "PENDING";
      statesEnum[statesEnum.RESOLVED = 1] = "RESOLVEEJECTED";
    }(PROMISE_STATES || (PROMISE_STATES = {}));
    class SyncPromise {
      constructor(asyncResultd) {
        SyncPromise.prototype.__init.call(this), SyncPromise.prototype.__init2.call(this), SyncPromise.prototype.__init3.call(this), SyncPromise.prototype.__init4.call(this), this._state = PROMISE_STATES.PENDING, this._handlers = [];
        try {
          asyncResultd(this._resolve, this._reject);
        } catch (errl) {
          this._reject(errl);
        }
      }
      ["then"](listd, liste) {
        return new SyncPromise((listf, listc) => {
          this._handlers.push([false, itemd => {
            if (listd) try {
              listf(listd(itemd));
            } catch (errg) {
              listc(errg);
            } else listc(errg);
            } else listf(itemd);
          }, iteme => {
            if (liste) try {
              listf(liste(iteme));
            } catch (errm) {
              listc(errm);
            } else listc(iteme);
          }]), this._executeHandlers();
        });
      }
      ["catch"](asyncResulte) {
        return this.then(itemf => itemf, asyncResulte);
      }
      ["finally"](promise) {
        return new SyncPromise((asyncResultf, asyncResulth) => {
          let asyncResultg, flag;
          return this.then(itemg => {
            flag = false, asyncResultg = itemg, promise && promise();
          }, itemh => {
            flag = true, asyncResultg = itemh, promise && promise();
          }).then(() => {
            flag ? asyncResulth(asyncResultg) : asyncResultf(asyncResultg);
          });
        });
      }
      ["__init"]() {
        this._resolve = resolve => {
          this._setResult(PROMISE_STATES.RESOLVED, resolve);
        };
      }
      ["__init2"]() {
        this._reject = reject => {
          this._setResult(PROMISE_STATES.REJECTED, reject);
        };
      }
      ["__init3"]() {
        this._setResult = (state, value) => {
          this._state === PROMISE_STATES.PENDING && (isThenable(value) ? value.then(this._resolve, this._reject) : (this._state = state, this._value = value, this._executeHandlers()));
        };
      }
      ["__init4"]() {
        this._executeHandlers = MISE_STATES.PENDING) return;
          const sliced = this._handlers.slice();
          this._handlers = [], sliced.forEach(itemi => {
            itemi[0] || (this._state === PROMISE_STATES.RESOLVED && itemi[1](this._value), this._state === PROMISE_STATES.REJECTED && itemi[2](this._value), itemi[0] = true);
          });
        };
      }
    }
    function notifyEventProcessors(processors, event, hint, index = 0) {
      return new SyncPromise((asyncResulti, asyncResultj) => {
        const num3 = processors[index];
        if (null === event || "function" != typeof num3) asyncResulti(event);else {
          const numc = num3({
            ...event
          }, hint);
          IS_SENTRY_DEBUG && num3.id && null === numc && sentryLogger.log("Event processor \"" + num3.id + "\" dropped event"), isThenable(numc) ? numc.then(itemj => notifyEventProcessors(processors, itemj, hint, index + 1).then(asyncResulti)).then(null, asyncResultj) : notifyEventProcessors(processors, numc, hint, index + 1).then(asyncResulti).then(null, asyncResultj);
        }
      });
    }
    const stri = "sentry-",
      regex = /^sentry-/;
    function baggageHeaderToDsc(paramv) {
      const valq = function helperl(paramw) {
        if (!paramw || !isString(paramw) && !globalThis.Array.isArray(paramw)) return;
        if (globalThis.Array.isArray(paramw)) return paramw.reduce((listg, listh) => {
          const numd = listi(listh);
          return globalThis.Object.entries(numd).forEach(([listj, listk]) => {
            listg[listj] = listk;
          }), listg;
        }, {});
        return listi(paramw);
      }(paramv);
      if (!valq) return;
      const entries = globalThis.Object.entries(valq).reduce((vs, [vt, vu]) => {
        return vt.match(regex) && (vs[vt.slice("sentry-".length)] = vu), vs;
      }, {});
      return globalThis.Object.keys(entries).length > 0 ? entries : undefined;
    }
    function listi(paramx) {
      return paramx.split(",").map(parts => parts.split("=").map(iteml => decodeURIComponent(iteml.trim()))).reduce((listl, [listm, listo]) => (listm && listo && (listl[listm] = listo), listl), {});
    }
    const strj = "sentry.source",
      strk = "sentry.sample_rate",
      strl = "sentry.op",
      strm = "sentry.origin",
      METRICS_PROP = "_sentryMetrics";
    function errorHelper(paramy) {
      const strn = paramy["_sentryMetrics"];
      if (!strn) return;
      const objb = {};
      for (const [, [listp, listq]] of strn) {
        (objb[listp] || (objb[listp] = [])).push(dropUndefinedKeys(listq));
      }
      return objb;
    }
    const SPAN_STATUS_UNSET = 0,
      nume = 1,
      numf = 1;
    function spanToTraceContext(paramz) {
      const {
          spanId: spanId,
          traceId: traceId
        } = paramz.spanContext(),
        {
          parent_span_id: parent_span_id
        } = spanToJSON(paramz);
      return dropUndefinedKeys({
        parent_span_id: parent_span_id,
        span_id: spanId,
        trace_id: traceId
: spanId,
        trace_id: traceId
      });
    }
    function ensureTimestampInSeconds(timestampInput) {
      return "number" == typeof timestampInput ? vv(timestampInput) : globalThis.Array.isArray(timestampInput) ? timestampInput[0] + timestampInput[1] / 1000000000 : timestampInput instanceof globalThis.Date ? vv(timestampInput.getTime()) : timestampInSeconds();
    }
    function vv(1000) {
      return 1000 > 9999999999 ? 1000 / 1000 : 1000;
    }
    function spanToJSON(span) {
      if (function helperm(paramz) {
      rn "function" == typeof paramz.getSpanJSON;
      }(span)) return span.getSpanJSON();
      try {
        const {
          spanId: spanId,
          traceId: traceId
        } = span.spanContext();
        if (function helpern(typec) {
          const numg = typec;
          return !!(numg.attributes && numg.startTime && numg.name && numg.endTime && numg.status);
        }(span)) {
          const {
            attributes: attributes,
            startTime: startTime,
            name: name,
            endTime: endTime,
            parentSpanId: parentSpanId,
            status: status
          } = span;
          return dropUndefinedKeys({
            span_id: spanId,
            trace_id: traceId,
            data: attributes,
            description: name,
            parent_span_id: parentSpanId,
            start_timestamp: ensureTimestampInSeconds(startTime),
            timesmpInSeconds(startTime),
            timestamp: ensureTimestampInSeconds(endTime) || undefined,
            status: status(status),
            op: attributes["sentry.op"],
            origin: attributes["sentry.origin"],
            _metrics_summary: errorHelper(span)
          });
        }
        return {
          span_id: spanId,
          trace_id: traceId
        };
      } catch (err23) {
        return {};
      }
    }
    function spanIsSampled(paramz) {
      const {
        traceFlags: traceFlags
      } = paramz.spanContext();
      return traceFlags === numf;
    }
    function status(errn) {
      if (errn && errn.code !== SPAN_STATUS_UNSET) return errn.code === nume ? "ok" : errn.message || "unknown_error";
    }
    const ROOT_SPAN_KEY = "_sentryRootSpan";
    function getRootSpan(span) {
      return span["_sentryRootSpan"] || span;
    }
    const stro = "_frozenDsc";
    function getDynamicSamplingContext(trace_id, paramz) {
      const environment = paramz.getOptions(),
        {
          publicKey: publicKey
        } = paramz.getDsn() || {},
        vw = dropUndefinedKeys({
          environment: environment.environment || "production",
          release: environment.release,
          public_key: publicKey,
          trace_id: trace_id
        });
      return paramz.emit("createDsc", vw), vw;
    }
    function spanToDsc(client) {
      const client = getClient();
      if (!client) return {};
      const dsc = getDynamicSamplingContext(spanToJSON(client).trace_id || '', client),
        rootSpan = getRootSpan(client),
        resultl = rootSpan["_frozenDsc"];
      if (resultl) return resultl;
      const valr = rootSpan.spanContext().traceState,
        resultm = valr && valr.get("sentry.dsc"),
        resultn = resultm && baggageHeaderToDsc(resultm);
      if (resultn) return resultn;
      const spanJson = spanToJSON(rootSpan),
        vy = spanJson.data || {},
        resulto = vy["sentry.sample_rate"];
      null != resulto && (dsc.sample_rate = '' + resulto);
      const strp = vy["sentry.source"],
        transaction = spanJson.description;
      return "url" !== strp && transaction && (dsc.transaction = transaction), function hasTracingEnabled(clientb) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return false;
        const client = getClient(),
          options = clientb || client && client.getOptions();
        return !!options && (options.enableTracing || "tracesSampleRate" in options || "tracesSampler" in options);
      }() && (dsc.sampled = globalThis.String(spanIsSampled(rootSpan))), client.emit("createDsc", dsc, rootSpan), dsc;
    }
    function applyScopeDataToEvent(event, data) {
      const {
        fingerprint: fingerprint,
        span: span,
   readcrumbs: readcrumbs,
        sdkProcessingMetadata: sdkProcessingMetadata
      } = data;
      !function eventHelpere(event, eventj) {
        const {
            extra: extra,
     
            tags: tags,
            user: user,
      contexts: contexts,
            level: level,
            transactionName: transactionName
          } = eventj,
          vz = dropUndefinedKeys(extra);
        vz && globalThis.Object.keys(vz).length && (event.extra = {
          ...vz,
          ...event.extra
        });
        const vals = dropUndefinedKeys(tags);
        vals && globalThis.Object.keys(vals).length && (event.tags = {
          ...vals,
          ...event.tags
        });
        const valt = dropUndefinedKeys(user);
        valt && globalThis.Object.keys(valt).length && (event.user = {
          ...valt,
          ...event.user
        });
        const val39 = dropUndefinedKeys(contexts);
        val39 && globalThis.Object.keys(val39).length && (event.contexts = {
          ...val39,
          ...event.contexts
        }), level && (event.level = level), !Number && (sjzhot() >>= ZgcyEv), transactionName && "transaction" !== event.type && (event.transaction = transactionName);
      }(event, data), span && function eventHelperf(eventWithTraceContext, event18) {
        eventWithTraceContext.contexts = {
          trace: spanToTraceContext(event18),
          ...eventWithTraceContext.contexts
        }, eventWithTraceContext.sdkProcessingMetadata = {
          dynamicSamplingContext: spanToDsc(event18),
          ...eventWithTraceContext.sdkProcessingMetadata
        };
        const rootSpan = getRootSpan(event18),
          spanJson = spanToJSON(rootSpan).description;
        spanJson && !eventWithTraceContext.transaction && "transaction" === eventWithTraceContext.type && (eventWithTraceContext.transaction = spanJson);
      }(event, span), function eventHelperg(eventWithFingerprint, event24) {
        eventWithFingerprint.fingerprint = eventWithFingerprint.fingerprint ? function eventHelperh(event19) {
          return globalThis.Array.isArray(event19) ? event19 : [event19];
        }(eventWithFingerprint.fingerprint) : [], event24 && (eventWithFingerprint.fingerprint = eventWithFingerprint.fingerprint.concat(event24)), !RegExp && (qLuesHg() %= TgWVV), eventWithFingerprint.fingerprint && !eventWithFingerprint.fingerprint.length && delete eventWithFingerprint.fingerprint;
      }(event, fingerprint), function eventHelperi(arg55, arg111) {
        const breadcrumbs = [...(arg55.breadcrumbs || []), ...arg111];
        arg55.breadcrumbs = breadcrumbs.length ? breadcrumbs : undefined;
      }(event, readcrumbs), function eventHelperj(arg56, arg112) {
        arg56.sdkProcessingMetadata = {
          ...arg56.sdkProcessingMetadata,
          ...arg112
        };
      }(event, sdkProcessingMetadata);
    }
    function breadcrumbHelper(scope, scope6) {
      const {
        extra: extra,
        tags: tags,
        user: user,
        contexts: contexts,
        level: level,
        sdkProcessingMetadata: sdkProcessingMetadata,
        breadcrumbs: breadcrumbs,
        fingerprint: fingerprint,
        eventProcessors: eventProcessors,
        attachments: attachments,
        propagationContext: propagationContext,
        transactionName: transactionName,
        span: span
      } = scope6;
      v5(scope, "extra", extra), v5(scope, "tags", tags), v5(scope, "user", user), v5(scope, "contexts", contexts), v5(scope, "sdkProcessingMetadata", sdkProcessingMetadata), level && (scope.level = level), transactionName && (scope.transactionName = transactionName), span && (scope.span = span), breadcrumbs.length && (scope.breadcrumbs = [...scope.breadcrumbs, ...breadcrumbs]), fingerprint.length && (scope.fingerprint = [...scope.fingerprint, ...fingerprint]), eventProcessors.length && (scope.eventProcessors = [...scope.eventProcessors, ...eventProcessors]), attachments.length && (scope.attachments = [...scope.attachments, ...attachments]), scope.propagationContext = {
        ...scope.propagationContext,
        ...propagationContext
      };
    }
    function v5(key5, key6, key) {
      if (key && globalThis.Object.keys(key).length) {
        key5[key6] = {
          ...key5[key6]
        };
        for (const v42 in key) globalThis.Objec.Object.prototype.hasOwnProperty.call(key, v42) && (key5[key6][v42] = key[v42]);
      }
    }
    function prepareEvent(options, event_id, captureHint, scope, client, isolationScope) {
      const {
          normalizeDepth: normalizeDepth = 3,
          normalizeMaxBreadth: normalizeMaxBreadth = 1000
        } = options,
        captureHint = {
          ...event_id,
          event_id: event_id.event_id || captureHint.event_id || uuid4(),
          timestamp: event_id.timestamp || dateTimestampInSeconds()
        },
        mapped = captureHint.integrations || options.integrations.map(itemm => itemm.name);
      !function eventHelperk(preparedEvent, eventk) {
        const {
          environment: environment,
          release: release,
          dist: dist,
          maxValueLength: maxValueLength = 250
        } = eventk;
        "environment" in preparedEvent || (preparedEvent.environment = "environment" in eventk ? environment : "production"), undefined === preparedEvent.release && undefined !== release && (preparedEvent.release = release);
        undefined === preparedEvent.dist && undefined !== dist && (preparedEvent.dist = dist), preparedEvent.message && (preparedEvent.message = truncate(preparedEvent.message, maxValueLength));
        const valu = preparedEvent.exception && preparedEvent.exception.values && preparedEvent.exception.values[0];
        valu && valu.value && (valu.value = truncate(valu.value, maxValueLength));
        const valv = preparedEvent.request;
        valv && valv.url && (valv.url = truncate(valv.url, maxValueLength));
      }(captureHint, options), function helpero(sdk, typed) {
        typed.length > 0 && (sdk.sdk = sdk.sdk || {}, sdk.sdk.integrations = [...(sdk.sdk.integrations || []), ...typed]);
      }(captureHint, mapped), client && client.emit("applyFrameMetadata", event_id), undefined === event_id.type && function eventHelperl(typee, typef) {
        const valw = GLOBAL_OBJ._sentryDebugIds;
        if (!valw) return;
        let map;
        const resultp = vz.get(typef);
        resultp ? map = resultp : (map = new Map(), vz.set(typef, map));
        const entries = globalThis.Object.entries(valw).reduce((v135, [v45, v245]) => {
          let v7;
          const result50 = map.get(v45);
          result50 ? v7 = result50 : (v7 = typef(v45), map.set(v45, v7));
          for (let len4 = v7.length - 1; len4 >= 0; len4--) {
            const num19 = v7[len4];
            if (num19.filename) {
              v135[num19.filename] = v245;
              break;
            }
          }
          return v135;
        }, {});
        try {
          typee.exception.values.forEach(item46 => {
            item46.stacktrace.frames.forEach(item12 => {
              item12.filename && (item12.debug_id = entries[item12.filename]);
            });
          });
        } catch (err24) {}
      }(captureHint, options.stackParser);
      const val82 = function scopeHelper(scope, scope4) {
        if (!scope4) return scope;
        const sentryscope2 = scope ? scope.clone() : new SentryScope();
        return sentryscope2.update(scope4), sentryscope2;
      }(scope, captureHint.captureContext);
      captureHint.mechanism && addExceptionMechanism(captureHint, captureHint.mechanism);
      const arr47 = client ? client.getEventProcessors() : [],
        resultf = function helperp() {
          return getGlobalSingleton("globalScope", () => new SentryScope());
        }().getScopeData();
      isolationScope && breadcrumbHelper(resultf, isolationScope.getScopeData());
      val82 && breadcrumbHelper(resultf, val82.getScopeData());
      const attachments = [...(captureHint.attachments || []), ...resultf.attachments];
      return attachments.length && (captureHint.attachments = attachments), applyScopeDataToEvent(captureHint, resultf), notifyEventProcessors([...arr47, ...resultf.eventProcessors], captureHint, captureHint).then(item7 => (item7 && function eventHelperm(sentryEvent) {
        const objc = {};
        try {
          sentryEvent.exception.values.forEach(item47 => {
            item47.stacktrace.frames.forEach(debug_id => {
              debug_id.debug_id && (debug_id.abs_path ? objc[debug_id.abs_path] = debug_id.debug_id : debug_id.filename && (objc[debug_id.filename] = debug_id.debug_id), delete debug_id.debug_id);
            });
          });
        } catch (err25) {}
        if (0 === globalThis.Object.keys(objc).length) return;
        sentryEvent.debug_meta = sentryEvent.debug_meta || {}, sentryEvent.debug_meta.images = sentryEvent.debug_meta.images || [];
        const val132 = sentryEvent.debug_meta.images;
        globalThis.Object.entries(objc).forEach(([code_file, debug_id]) => {
          val132.push({
            type: "sourcemap",
            code_file: code_file,
            debug_id: debug_id
          });
        });
      }(item7), "number" == typeof normalizeDepth && normalizeDepth > 0 ? function normalizeHelperd(event, event, eventf) {
        if (!event) return null;
        const valx = {
          ...event,
          ...(event.breadcrumbs && {
            breadcrumbs: event.breadcrumbs.map(item13 => ({
              ...item13,
              ...(item13.data && {
                data: serializeValue(item13.data, event, eventf)
              })
            }))
          }),
          ...(event.user && {
            user: serializeValue(event.user, event, eventf)
          }),
          ...(event.contexts && {
            contexts: serializeValue(event.contexts, event, eventf)
          }),
          ...(event.extra && {
            extra: serializeValue(event.extra, event, eventf)
          })
        };
        return event.contexts && event.contexts.trace && valx.contexts && (valx.contexts.trace = event.contexts.trace, event.contexts.trace.data && (valx.contexts.trace.data = serializeValue(event.contexts.trace.data, event, eventf))), event.spans && (valx.spans = event.spans.map(item14 => ({
          ...item14,
          ...(item14.data && {
            data: serializeValue(item14.data, event, eventf)
          })
        }))), valx;
      }(item7, normalizeDepth, normalizeMaxBreadth) : item7));
    }
    const vz = new WeakMap();
    function scopeHelperb(captureContext) {
      if (captureContext) return function helperq(key10) {
        return key10 instanceof SentryScope || "function" == typeof key10;
      }(captureContext) || function helperr(key14) {
        return globalThis.Object.keys(key14).some(item48 => v246.includes(item48));
      }(captureContext) ? {
        captureContext: captureContext
      } : captureContext;
    }
    const v246 = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
    function captureEvent(event, hint) {
      return getCurrentScope().captureEvent(event, hint);
    }
    const globalWindow = GLOBAL_OBJ;
    let inFlightErrorsCount = 0;
    function checkFetchb() {
      return inFlightErrorsCount > 0;
    }
    function wrapFunction(wrappedFn, options = {}, before) {
      if ("function" != typeof wrappedFn) return wrappedFn;
      try {
        const valy = wrappedFn.__sentry_wrapped__;
        if (valy) return "function" == typeof valy ? valy : wrappedFn;
        if (getOriginalFunction(wrappedFn)) return wrappedFn;
      } catch (erro) {
        returpedFn;
      }
      const wrappedHandler = function () {
        const arguments = globalThis.Array.prototype.slice.call(arguments);
        try {
          before && "function" == typeof before && before.apply(this, arguments);
          const mapped = arguments.map(itemn => wrapFunction(itemn, options));
          return wrappedFn.apply(this, mapped);
        } catch (errp) {
          throw function helpers() {
            inFlightErrorsCount++, globalThis.setTimeout(() => {
              inFlightErrorsCount--;
            });
          }(), function scopeHelperc(...scope2) {
            const valz = getHubFromCarrier(getMainCarrier());
            if (2 === scope2.length) {
              const [vz, vz] = scope2;
              return vz ? valz.withSetScope(vz, vz) : valz.withScope(vz);
            }
            return valz.withScope(scope2[0]);
          }(itemo => {
            itemo.addEventProcessor(itemk => (options.mechanism && (addExceptionTypeValue(itemk, undefined, undefined), addExceptionMechanism(itemk, options.mechanism)), itemk.extra = {
              ...itemk.extra,
              arguments: arguments
            }, itemk)), function scopeHelperd(scope, scopeb) {
              return getCurrentScope().captureException(scope, scopeHelperb(scopeb));
            }(errp);
          }), errp;
        }
      };
      try {
        for (const vz in wrappedFn) globalThis.Object.prototype.hasOwnProperty.call(wrappedFn, vz) && (wrappedHandler[vz] = wrappedFn[vz]);
      } catch (errq) {}
      markFunctionWrapped(wrappedHandler, wrappedFn), addNonEnumerableProperty(wrappedFn, "__sentry_wrapped__", wrappedHandler);
      try {
        globalThis.Object.getOwnPropertyDescriptor(wrappedHandler, "name").configurable && globalThis.Object.defineProperty(wrappedHandler, "name", {
          get: () => wrappedFn.name
        });
      } catch (err28) {}
      return wrappedHandler;
    }
    const numh = 1024,
      breadcrumbsIntegration = (vz = {}) => {
        const breadcrumbsOptions = {
          console: true,
          dom: true,
          fetch: true,
          history: true,
          sentry: true,
          xhr: true,
          ...vz
        };
        return {
          name: "Breadcrumbs",
          ["setup"](sentryClient) {
            breadcrumbsOptions.console && function breadcrumbHelperb(hint) {
              const strq = "console";
              addInstrumentationHandler(strq, hint), maybeSetupInstrumentation(strq, setupConsoleInstrumentation);
            }(function helpert(clientc) {
              return function breadcrumbHelperc(breadcrumbHint) {
                if (getClient() !== clientc) return;
                const breadcrumb = {
                  category: "console",
                  data: {
                    arguments: breadcrumbHint.args,
                    logger: "console"
                  },
                  level: mapConsoleLevel(breadcrumbHint.level),
                  message: safeJoin(breadcrumbHint.args, " ")
                };
                if ("assert" === breadcrumbHint.level) {
                  if (false !== breadcrumbHint.args[0]) return;
                  breadcrumb.message = "Assertion failed: " + (safeJoin(breadcrumbHint.args.slice(1), " ") || "console.assert"), breadcrumb.data.arguments = breadcrumbHint.args.slice(1);
                }
                addBreadcrumb(breadcrumb, {
                  input: breadcrumbHint.args,
                  level: breadcrumbHint.level
                });
              };
            }(sentryClient)), bd0) {
              addInstrumentationHandler("dom", vz), maybeSetupInstrumentation("dom", setupDOMInstrumentation);
            }(function helperu(clientd, client) {
              return function eventHelpern(event) {
                if (getClient() !== clientd) return;
                let message,
                  v47,
                  keyAttrs = "object" == typeof client ? client.serializeAttribute : undefined,
                  maxStringLength = "object" == typeof client && "number" == typeof client.maxStringLength ? client.maxStringLength : undefined;
                maxStringLength && maxStringLength > numh && (stre && sentryLogger.warn("`dom.maxStringLength` cannot exceed 1024, but a value of " + maxStringLength + " was configured. Sentry will use 1024 instead."), maxStringLength = numh), "string" == typeof keyAttrs && (keyAttrs = [keyAttrs]);
                try {
                  const target = event.event,
                    arg57 = function helperv(arg58) {
                      return !!arg58 && !!arg58.target;
                    }(target) ? target.target : target;
                  message = htmlTreeAsString(arg57, {
                    keyAttrs: keyAttrs,
                    maxStringLength: maxStringLength
                  }), v47 = function helperw(arg113) {
                    if (!globalRef.HTMLElement) return null;
                    let domNode = arg113;
                    for (let numi = 0; numi < 5; numi++) {
                      if (!domNode) return null;
                      if (domNode instanceof HTMLElement) {
                        if (domNode.dataset.sentryComponent) return domNode.dataset.sentryComponent;
                        if (domNode.dataset.sentryElement) return domNode.dataset.sentryElement;
                      }
                      domNode = domNode.parentNode;
                    }
                    return null;
                  }(arg57);
                } catch (err29) {
                  message = "<unknown>";
                }
                if (0 === message.length) return;
                const breadcrumbb = {
                  category: "ui." + event.name,
                  message: message
                };
       ge: message
                };
                v47 && (breadcrumbb.data = {
                  ["ui.component_name"]: v47
                }), addBreadcrumb(breadcrumbb, {
                  event: event.event,
                  name: event.name,
                  global: event.global
                });
              };
            }(sentryClient, breadcrumbsOptions.dom)), breadcrumbsOptions.xhr && function breadcrumbHelperd(client10) {
              addInstrumentationHandler("xhr", client10), maybeSetupInstrumentation("xhr", parseHelper);
            }(function helperx(client11) {
              return function xhrHelper(xhr) {
                if (getClient() !== client11) return;
                const {
                    startTimestamp: startTimestamp,
                    endTimestamp: endTimestamp
                  } = xhr,
                  result51 = xhr.xhr["__sentry_xhr_v3__"];
                if (!startTimestamp || !endTimestamp || !result51) return;
                const {
                    method: method,
                    url: url,
                    status_code: status_code,
                    body: body
                  } = result51,
                  data = {
                    method: method,
                    url: url,
                    status_code: status_code
                  },
                  v252 = {
                    xhr: xhr.xhr,
                    input: body,
                    startTimestamp: startTimestamp,
                    endTimestamp: endTimestamp
                  };
                addBreadcrumb({
                  category: "xhr",
                  data: data,
         level: normalizeHelperb(status_code)
                }, v252);
              };
            }(sentryClient)), breadcrumbsOptions.fetch && function checkFetchc(client12, client13) {
              const strr = "fetch";
              addInstrumentationHandler("fetch", client12), maybeSetupInstrumentation("fetch", () => instrumentFetch(undefined, client13));
            }(function helpery(client14) {
              return function checkFetchd(fetchHint) {
                if (getClient() !== client14) return;
                const {
                  startTimestamp: startTimestamp,
                  endTimestamp: endTimestamp
                } = fetchHint;
                if (endTimestamp && (!fetchHint.fetchData.url.match(/sentry_key/) || "POST" !== fetchHint.fetchData.method)) {
                  if (fetchHint.error) addBreadcrumb({
                    category: "fetch",
                    data: fetchHint.fetchData,
                    level: "error",
                    type: "http"
                  }, {
                    data: fetchHint.error,
                    input: fetchHint.args,
                    startTimestamp: startTimestamp,
                    endTimestamp: endTimestamp
                  });else {
                    const status_code = fetchHint.response,
                      data = {
                        ...fetchHint.fetchData,
                        status_code: status_code && status_code.status
                      },
                      v253 = {
                        input: fetchHint.args,
                        response: status_code,
                        startTimestamp: startTimestamp,
                        endTimestamp: endTimestamp
                      };
                    addBreadcrumb({
                      category: "fetch",
                      data: data,
                      type: "http",
                      level: normalizeHelperb(data.status_code)
                    }, v253);
                  }
                }
              };
            }(sentryClient)), breadcrumbsOptions.history && function wrapHistoryMethodc(client15) {
              const strs = "history";
              addInstrumentationHandler("history", client15), maybeSetupInstrumentation("history", wrapHistoryMethod);
            }(function helperz(client16) {
              return function helperz(client5) {
                if (getClient() !== client16) return;
                let from = client5.from,
                  to = client5.to;
                const parsedUrl = parseUrl(globalWindow.location.href);
                let valz = from ? parseUrl(from) : undefined;
                const parsedUrl = parseUrl(to);
                valz && valz.path || (valz = parsedUrl), parsedUrl.protocol === parsedUrl.protocol && parsedUrl.host === parsedUrl.host && (to = parsedUrl.relative), parsedUrl.protocol === valz.protocol && parsedUrl.host === valz.host && (from = valz.relative), addBreadcrumb({
                  category: "navigation",
                  data: {
                    from: from,
                    to: to
                  }
                });
              };
            }(sentryClient)), breadcrumbsOptions.sentry && sentryClient.on("beforeSendEvent", function breadcrumbHelpere(type13) {
              return function eventHelpero(event_id) {
                getClient() === type13 && addBreadcrumb({
                  category: "sentry." + ("transaction" === event_id.type ? "transaction" : "event"),
                  event_id: event_id.event_id,
                  level: event_id.level,
                  message: getEventDescription(event_id)
                }, {
                  event: event_id
                });
              };
            }(sentryClient));
          }
        };
      },
      v254 = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
      browserApiErrorsIntegration = (vz = {}) => {
        const valz = {
          XMLHttpRequest: true,
          eventTarget: true,
          requestAnimationFrame: true,
          setInterval: true,
          setTimeout: true,
          ...vz
        };
        return {
          name: "BrowserApiErrors",
          ["setupOnce"]() {
            valz.setTimeout && fill(globalWindow, "setTimeout", wrapTimer), valz.setInterval && fill(globalWindow, "setInterval", wrapTimer), valz.requestAnimationFrame && fill(globalWindow, "dow, "requestAnimationFrame", listr), valz.XMLHttpRequest && "XMLHttpRequest" in globalWindpRequest && "XMLHttpRequest" in globalWindow && fill(globalThis.XMLHttpRequest.prototype, "send", lists);
            const valz = valz.eventTarget;
            valz && (globalThis.Array.isArray(valz) ? valz : v254).forEach(listt);
          }
        };
      };
    function wrapTimer(paramz) {
      return function (...paramz) {
        const numj = paramz[0];
        return paramz[0] = wrapFunction(numj, {
          mechanism: {
            data: {
              ["function"]: getFunctionName(paramz)        },
            handled: false,
            type: "instrument"
          }
        }), paramz.apply(this, paramz);
      };
    }
    function listr(paramz) {
      return function (paramz) {
        return paramz.apply(this, [wrapFunction(paramz, {
          mechanism: {
            data: {
              ["function"]: "requestAnimationFrame",
              handler: getFunctionName(paramz)
            },
            handled: false,
            type: "instrument"
          }
        })]);
      };
    }
    function lists(errr) {
      return function (...errs) {
        const valz = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(itemp => {
          itemp in valz && "function" == typeof valz[itemp] && fill(valz, itemp, function (arg37) {
            const val85 = {
                mechanism: {
                  data: {
                    ["function"]: itemp,
                    handler: getFunctionName(arg37)
                  },
                  handled: false,
                  type: "instrument"
                }
              },
              result52 = getOriginalFunction(arg37);
            return result52 && (val85.mechanism.data.handler = getFunctionName(result52)), wrapFunction(arg37, val85);
          });
        }), errr.apply(this, errs);
      };
    }
    function listt(target) {
      const val86 = globalWindow,
        resultk = val86[target] && val86[target].prototype;
      resultk && resultk.hasOwnProperty && resultk.hasOwnProperty("addEventListener") && (fill(resultk, "addEventListener", function (event45) {
        return function (event46, eventListener, event47) {
          try {
            "function" == typeof eventListener.handleEvent && (eventListener.handleEvent = wrapFunction(eventListener.handleEvent, {
              mechanism: {
                data: {
                  ["function"]: "handleEvent",
                  handler: getFunctionName(eventListener),
                  target: target
                },
                handled: false,
                type: "instrument"
              }
            }));
          } catch (err30) {}
          return event45.apply(this, [event46, wrapFunction(eventListener, {
            mechanism: {
              data: {
                ["function"]: "addEventListener",
                handler: getFunctionName(eventListener),
                target: target
              },
              handled: false,
              type: "instrument"
            }
          }), event47]);
        };
      }), fill(resultk, "removeEventListener", function (event27) {
        return function (arg61, arg115, arg62) {
          const num10 = arg115;
          try {
            const val87 = num10 && num10.__sentry_wrapped__;
            val87 && event27.call(this, arg61, val87, arg62);
          } catch (err31) {}
          return event27.call(this, arg61, num10, arg62);
        };
      }));
    }
    let originalOnError = null;
    function errorHelperb() {
      originalOnError = GLOBAL_OBJ.onerror, GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
        return triggerHandlers("error", {
          column: column,
          error: error,
          line: line,
          msg: msg,
          url: url
        }), !(!originalOnError || originalOnError.__SENTRY_LOADER__) && originalOnError.apply(this, arguments);
      }, GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
    }
    let ref = null;
    function helperz() {
      ref = GLOBAL_OBJ.onunhandledrejection, GLOBAL_OBJ.onunhandledrejection = function (errt) {
        return triggerHandlers("unhandledrejection", errt), !(ref && !ref.__SENTRY_LOADER__) || ref.apply(this, arguments);
      }, GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
    }
    function exceptionFromError(stackParser, error) {
      const frames = parseStackString(stackParser, error),
        exceptionValue = {
          type: extractType(error),
          value: extractMessage(error)
        };
      return frames.length && (exceptionValue.stacktrace = {
        frames: frames
      }), undefined === exceptionValue.type && '' === exceptionValue.value && (exceptionValue.value = "Unrecoverable error caught"), exceptionValue;
    }
    function eventFromPlainObject(stackParser, rejection, eventl, isUnhandledRejection) {
      const client = getClient(),
        options = client && client.getOptions().normalizeDepth,
        error = function errorHelperc(erru) {
          for (const vz in erru) if (globalThis.Object.prototype.hasOwnProperty.call(erru, vz)) {
            const numk = erru[vz];
            if (numk instanceof Error) return numk;
          }
          return;
        }(rejection),
        extra = {
          __serialized__: normalize(rejection, options)
        };
      if (error) return {
        exception: {
          values: [exceptionFromError(stackParser, error)]
        },
        extra: extra
      };
      const result = {
        exception: {
          values: [{
            type: isEvent(rejection) ? rejection.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
            value: exceptionFromRejection(rejection, {
              isUnhandledRejection: isUnhandledRejection
            })
          }]
        },
        extra: extra
      };
      if (eventl) {
        const frames = parseStackString(stackParser, eventl);
        frames.length && (result.exception.values[0].stacktrace = {
          frames: frames
        });
      }
      return result;
    }
    function eventFromUnknownInput(stackParser, exception) {
      return {
        exception: {
          values: [exceptionFromError(stackParser, exception)]
        }
      };
    }
    function parseStackString(parser, hint) {
      const stackStr = hint.stacktrace || hint.stack || '',
        hintb = function checkReact(hint) {
          if (hint && reactMinifiedRegex.test(hint.message)) return 1;
          return 0;
        }(hint),
        framesToPop = function getFramesToPop(hint) {
          if ("number" == typeof hint.framesToPop) return hint.framesToPop;
          return 0;
        }(hint);
      try {
        return parser(stackStr, hintb, framesToPop);
      } catch (err) {}
      return [];
    }
    const reactMinifiedRegex = /Minified React error #\d+;/i;
    function isWebAssemblyException(obj) {
      return "undefined" != typeof WebAssembly && undefined !== WebAssembly.Exception && obj instanceof WebAssembly.Exception;
    }
    function extractType(error) {
      const type = error && error.name;
      if (!type && isWebAssemblyException(error)) return error.message && globalThis.Array.isArray(error.message) && 2 == error.message.length ? error.message[0] : "WebAssembly.Exception";
      return type;
    }
    function extractMessage(error) {
      const msg = error && error.message;
      return msg ? msg.error && "string" == typeof msg.error.message ? msg.error.message : isWebAssemblyException(error) && globalThis.Array.isArray(error.message) && 2 == error.message.length ? error.message[1] : msg : "No error message";
    }
    function eventFromException(exceptionClient, exception, syntheticException, attachStacktrace, isRejection) {
      let result;
      if (isErrorEvent(exception) && exception.error) return eventFromUnknownInput(exceptionClient, exception.error);
      if (isDOMError(exception) || function isDOMException(val) {
        return isInstanceOf(val, "DOMException");
      }(exception)) {
        const domError = exception;
        if ("stack" in exception) result = eventFromUnknownInput(exceptionClient, exception);else {
          const message = domError.name || (isDOMError(domError) ? "DOMError" : "DOMException"),
            msg = domError.message ? message + ": " + domError.message : message;
          result = eventFromMessage(exceptionClient, msg, syntheticException, attachStacktrace), addExceptionTypeValue(result, msg);
        }
        return "code" in domError && (result.tags = {
          ...result.tags,
          ["DOMException.code"]: '' + domError.code
        }), result;
      }
      if (isError(exception)) return eventFromUnknownInput(exceptionClient, exception);
      if (isPlainObject(exception) || isEvent(exception)) return result = eventFromPlainObject(exceptionClient, exception, syntheticException, isRejection), addExceptionMechanism(result, {
        synthetic: true
      }), result;
      return result = eventFromMessage(exceptionClient, exception, syntheticException, attachStacktrace), addExceptionTypeValue(result, '' + exception, undefined), addExceptionMechanism(result, {
        synthetic: true
      }), result;
    }
    function eventFromMessage(stackParser, message, level, attachStacktrace) {
      const result = {};
      if (attachStacktrace && level) {
        const frames = parseStackString(stackParser, level);
        frames.length && (result.exception = {
          values: [{
            value: message,
            stacktrace: {
              frames: frames
            }
          }]
        });
      }
      if (isParameterizedString(message)) {
        const {
          __sentry_template_string__: __sentry_template_string__,
          __sentry_template_values__: params
        } = message;
        return result.logentry = {
          message: __sentry_template_string__,
          params: params
        }, result;
      }
      return result.message = message, result;
    }
    function exceptionFromRejection(rejectionEvent, {
      isUnhandledRejection: isUnhandledRejection
    }) {
      const summarizedKeys = function summarizeKeys(obj, maxLength = 40) {
          const keys = globalThis.Object.keys(objectify(obj));
          keys.sort();
          const firstKey = keys[0];
          if (!firstKey) return "[object has no keys]";
          if (firstKey.length >= maxLength) return truncate(firstKey, maxLength);
          for (let i = keys.length; i > 0; i--) {
            const joined = keys.slice(0, i).join(", ");
            if (!(joined.length > maxLeng ? joined : truncate(joined, maxLength);
          }
          return '';
        }(rejectionEvent),
        resultq = isUnhandledRejection ? "promise rejection" : "exception";
      if (isErrorEvent(rejectionEvent)) return "Event `ErrorEvent` captured as " + resultq + " with message `" + rejectionEvent.message + "`";
      if (isEvent(rejectionEvent)) {
        return "Event `" + function getEventType(typeg) {
          try {
            const proto = globalThis.Object.getPrototypeOf(typeg);
            return proto ? proto.constructor.name : undefined;
          } catch (errv) {}
        }(rejectionEvent) + "` (type=" + rejectionEvent.type + ") captured as " + resultq;
      }
      return "Object captured as " + resultq + " with keys: " + summarizedKeys;
    }
    const globalHandlersIntegration = (vz = {}) => {
      const options = {
        onerror: true,
        onunhandledrejection: true,
        ...vz
      };
      return {
        name: "GlobalHandlers",
        ["setupOnce"]() {
          Error.stackTraceLimit = 50;
        },
        ["setup"](vz) {
          options.onerror && (!function errorHelperd(client) {
            !function helperz(handler) {
              const handlerType = "error";
              addInstrumentationHandler("error", handler), maybeSetupInstrumentation("error", errorHelperb);
            }(errEvent => {
              const {
                stackParser: stackParser,
               stackParser: stackParser,
                attachStacktrace: attachStacktrace
              } = getClientOptionsForIntegration();
              if (getClient() !== client || checkFetchb()) return;
              const {
                  msg: msg,
                  url: url,
                  line: line,
                  column: column,
                  error: error
                } = errEvent,
                valz = function helperz(exception, url, line, undefined) {
                  const exceptionObj = exception.exception = exception.exception || {},
                    values = exceptionObj.values = exceptionObj.values || [],
                    stacktrace = values[0] = values[0] || {},
                    frames = stacktrace.stacktrace = stacktrace.stacktrace || {},
                    listu = frames.frames = frames.frames || [],
                    colno = isNaN(parseInt(undefined, 10)) ? undefined : undefined,
                    lineno = isNaN(parseInt(line, 10)) ? undefined : line,
                    filename = isString(url) && url.length > 0 ? url : function getDocUrl() {
                      try {
                        return globalRef.document.location.href;
                      } catch (errw) {
                        return '';
                      }
                    }();
                  return 0 === listu.length && listu.push({
                    colno: colno,
                    filename: filename,
                    ["function"]: "?",
                    in_app: true,
                    lineno: lineno
                  }), exception;
                }(eventFromException(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
              valz.level = "error", captureEvent(valz, {
                originalException: error,
                mechanism: {
                  handled: false,
                  type: "onerror"
                }
              });
            });
          }(vz), logGlobalHandler("onerror")), options.onunhandledrejection && (!function errorHelpere(client) {
            !function helperz(handler) {
              const strt = "unhandledrejection";
              addInstrumentationHandler("unhandledrejection", handler), maybeSetupInstrumentation("unhandledrejection", helperz);
            }(itemq => {
              const {
                stackParser: stackParser,
                attachStacktrace: attachStacktrace
              } = getClientOptionsForIntegration();
              if (getClient() !== client || checkFetchb()) return;
              const originalException = function helperz(arg) {
                  if (isPrimitive(arg)) return arg;
                  try {
                    if ("reason" in arg) return arg.reason;
                    if ("detail" in arg && "reason" in arg.detail) return arg.detail.reason;
                  } catch (errx) {}
                  return arg;
                }(itemq),
                eventData = isPrimitive(originalException) ? function eventHelperq(value) {
                  return {
                    exception: {
                      values: [{
                        type: "UnhandledRejection",
                        value: "Non-Error promise rejection captured with value: " + globalThis.String(value)
                      }]
                    }
                  };
                }(originalException) : eventFromException(stackParser, originalException, undefined, attachStacktrace, true);
              eventData.level = "error", captureEvent(eventData, {
                originalException: originalException,
                mechanism: {
                  handled: false,
                  type: "onunhandledrejection"
                }
              });
            });
          }(vz), logGlobalHandler("onunhandledrejection"));
        }
      };
    };
    function logGlobalHandler(handlerName) {
      stre && sentryLogger.log("Global Handler attached: " + handlerName);
    }
    function getClientOptionsForIntegration() {
      const client = getClient();
      return client && client.getOptions() || {
        stackParser: () => [],
        attachStacktrace: false
      };
    }
    const httpContextIntegration = () => ({
      name: "HttpContext",
      ["preprocessEvent"](event) {
        if (!globalWindow.navigator && !globalWindow.location && !globalWindow.document) return;
        const url = event.request && event.request.url || globalWindow.location && globalWindow.location.href,
          {
            referrer: referrer
          } = globalWindow.document || {},
          {
            userAgent: userAgent
          } = globalWindow.navigator || {},
          headers = {
            ...(event.request && event.request.headers),
            ...(referrer && {
              Referer: referrer
            }),
            ...(userAgent && {
              ["User-Agent"]: userAgent
            })
          },
          request = {
            ...event.request,
            ...(url && {
              url: url
            }),
            headers: headers
          };
        event.request = request;
      }
    });
    function walkErrorTree(valz, stackParser, maxValueLength = 250, valz, limit, exceptionEvent, hint) {
      if (!(exceptionEvent.exception && exceptionEvent.exception.values && hint && safeInstanceOf(hint.originalException, Error))) return;
      const lastValue = exceptionEvent.exception.values.length > 0 ? exceptionEvent.exception.values[exceptionEvent.exception.values.length - 1] : undefined;
      lastValue && (exceptionEvent.exception.values = function truncateValues(valz, maxLen) {
        return valz.map(val => (val.value && (val.value = truncate(val.value, maxLen)), val));
      }(applyAggregateErrors(valz, stackParser, limit, hint.originalException, valz, exceptionEvent.exception.values, lastValue, 0), maxValueLength));
    }
    function applyAggregateErrors(valz, valz, valz, error, valz, values, targetValue, exceptionId) {
      if (values.length >= valz + 1) return values;
      let collectedValues = [...values];
      if (safeInstanceOf(error[valz], Error)) {
        addExceptionMechanismById(targetValue, exceptionId);
        const parsed = valz(valz, error[valz]),
          idx = collectedValues.length;
        applyChainedMechanism(parsed, valz, idx, exceptionId), collectedValues = applyAggregateErrors(valz, listv, [parsed, ...collectedValues], parsed, idx);
      }
      return globalThis.Array.isArray(error.errors) && error.errors.forEach((listw, listx) => {
        if (safeInstanceOf(listw, Error)) {
          addExceptionMechanismById(targetValue, exceptionId);
          const numl = valz(valz, listw),
            vz = collectedValues.length;
          applyChainedMechanism(numl, "errors[" + listx + "]", vz, exceptionId), collectedValues = applyAggregateErrors(valz, valz, valz, listw, valz, [numl, ...collectedValues], numl, vz);
        }
      }), collectedValues;
    }
    function addExceptionMechanismById(mechanism, exceptionId) {
      mechanism.mechanism = mechanism.mechanism || {
        type: "generic",
        handled: true
      }, mechanism.mechanism = {
        ...mechanism.mechanism,
        ...("AggregateError" === mechanism.type && {
          is_exception_group: true
        }),
        exception_id: exceptionId
      };
    }
    function applyChainedMechanism(mechanismb, source, exception_id, parent_id) {
      mechanismb.mechanism = mechanismb.mechanism || {
        type: "generic",
        handled: true
      }, mechanismb.mechanism = {
        ...mechanismb.mechanism,
        type: "chained",
        source: source,
        exception_id: exception_id,
        parent_id: parent_id
      };
    }
    const linkedErrorsIntegration = (opts = {}) => {
      const valz = opts.limit || 5,
        key = opts.key || "cause";
      return {
        name: "LinkedErrors",
        ["preprocessEvent"](vz, vz, vz) {
          const clientOptions = vz.getOptions();
          walkErrorTree(exceptionFromError, clientOptions.stackParser, clientOptions.maxValueLength, key, valz, vz, vz);
        }
      };
    };
    function getDefaultIntegrations(erry) {
      return [inboundFiltersIntegration(), functionToStringIntegration(), browserApiErrorsIntegration(), breadcrumbsIntegration(), globalHandlersIntegration(), linkedErrorsIntegration(), dedupeIntegration(), httpContextIntegration()];
    }
    const DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function dsnToString(dsn, withAuth = false) {
      const {
        host: host,
        path: path,
        pass: pass,
        port: port,
        projectId: projectId,
        protocol: protocol,
        publicKey: publicKey
      } = dsn;
      return protocol + "://" + publicKey + (withAuth && pass ? ":" + pass : '') + "@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId;
    }
    function eventHelperp(dsnConfig) {
      return {
        protocol: dsnConfig.protocol,
        publicKey: dsnConfig.publicKey || '',
        pass: dsnConfig.pass || '',
        host: dsnConfig.host,
        port: dsnConfig.port || '',
        path: dsnConfig.path || '',
        projectId: dsnConfig.projectId
      };
    }
    function makeDsn(dsn) {
      const parsed = "string" == typeof dsn ? function parseHelperb(errz) {
        const match = DSN_REGEX.exec(errz);
        if (!match) return void consoleSandbox(() => {
          globalThis.console.error("Invalid Sentry Dsn: " + errz);
        });
        const [protocol, publicKey, pass = '', host = '', port = '', slicedb = ''] = match.slice(1);
        let dsnPath = '',
          projectId = slicedb;
        const pathParts = projectId.split("/");
        if (pathParts.length > 1 && (dsnPath = pathParts.slice(0, -1).join("/"), projectId = pathParts.pop()), projectId) {
          const numMatch = projectId.match(/^\d+/);
          numMatch && (projectId = numMatch[0]);
        }
        return eventHelperp({
          host: host,
          pass: pass,
          path: dsnPath,
          projectId: projectId,
          port: port,
          protocol: protocol,
          publicKey: publicKey
        });
      }(dsn) : eventHelperp(dsn);
      if (parsed && function validateDsn(dsn) {
        if (!SENTRY_DEBUG) return true;
        const {
          port: port,
          projectId: projectId,
          protocol: protocol
        } = dsn;
        return !(["protocol", "publicKey", "host", "projectId"].find(key => !dsn[key] && (sentryLogger.error("Invalid Sentry Dsn: " + key + " missing"), true)) || (projectId.match(/^\d+$/) ? function isValidProtocol(errz) {
          return "http" === errz || "https" === errz;
        }(protocol) ? port && isNaN(parseInt(port, 10)) && (sentryLogger.error("Invalid Sentry Dsn: Invalid port " + port), 1) : (sentryLogger.error("Invalid Sentry Dsn: Invalid protocol " + protocol), 1) : (sentryLogger.error("Invalid Sentry Dsn: Invalid projectId " + projectId), 1)));
      }(parsed)) return parsed;
    }
    function createEnvelope(headers, items = []) {
      return [headers, items];
    }
    function envelopeHelper(envelope, item) {
      const [resultr, items] = envelope;
      return [resultr, [...items, item]];
    }
    function envelopeContainsItemType(envelope, predicate) {
      const items = envelope[1];
      for (const item of items) {
        if (predicate(item, item[0].type)) return true;
      }
      return false;
    }
    function envelopeContainsTypes(envelope, paramz) {
      return envelopeContainsItemType(envelope, (item, type) => paramz.includes(type));
    }
    function encodeUTF8(str) {
      return GLOBAL_OBJ.__SENTRY__ && GLOBAL_OBJ.__SENTRY__.encodePolyfill ? GLOBAL_OBJ.__SENTRY__.encodePolyfill(str) : new TextEncoder().encode(str);
    }
    function serializeEnvelope(envelope) {
      const [headers, listy] = envelope;
      let output = JSON.stringify(headers);
      function append(chunk) {
        "string" == typeof output ? output = "string" == typeof chunk ? output + chunk : [encodeUTF8(output), chunk] : output.push("string" == typeof chunk ? encodeUTF8(chunk) : chunk);
      }
      for (const vz of listy) {
        const [itemHeaders, payload] = vz;
        if (append("\n" + JSON.stringify(itemHeaders) + "\n"), "string" == typeof payload || payload instanceof Uint8Array) append(payload);else {
          let jsonStr;
          try {
            jsonStr = JSON.stringify(payload);
          } catch (err) {
            jsonStr = JSON.stringify(serializeValue(payload));
          }
          append(jsonStr);
        }
      }
      return "string" == typeof output ? output : function concatBuffers(buffers) {
        const len8 = buffers.reduce((vz, buf) => vz + buf.length, 0),
          result = new Uint8Array(len8);
        let offset = 0;
        for (const buf of buffers) result.set(buf, offset), offset += buf.length;
        return result;
      }(output);
    }
    function parseEnvelope(body) {
      let encodedBody = "string" == typeof body ? encodeUTF8(body) : body;
      function readBytes(length) {
        const chunk = encodedBody.subarray(0, length);
        return encodedBody = encodedBody.subarray(length + 1), chunk;
      }
      function readHeader() {
        let newlineIdx = encodedBody.indexOf(10);
        return newlineIdx < 0 && (newlineIdx = encodedBody.length), JSON.parse(function decode(bytes) {
          return GLOBAL_OBJ.__SENTRY__ && GLOBAL_OBJ.__SENTRY__.decodePolyfill ? GLOBAL_OBJ.__SENTRY__.decodePolyfill(bytes) : new TextDecoder().decode(bytes);
        }(readBytes(newlineIdx)));
      }
      const envelopeHeaders = readHeader(),
        parsedItems = [];
      for (; encodedBody.length;) {
        const itemHeader = readHeader(),
          payloadLength = "number" == typeof itemHeader.length ? itemHeader.length : undefined;
        parsedItems.push([itemHeader, payloadLength ? readBytes(payloadLength) : readHeader()]);
      }
      return [envelopeHeaders, parsedItems];
    }
    function createAttachmentItem(attachmentItem) {
      const length = "string" == typeof attachmentItem.data ? encodeUTF8(attachmentItem.data) : attachmentItem.data;
      return [dropUndefinedKeys({
        type: "attachment",
        length: length.length,
        filename: attachmentItem.filename,
        content_type: attachmentItem.contentType,
        attachment_type: attachmentItem.attachmentType
      }), length];
    }
    const TYPE_TO_CATEGORY = {
      session: "session",
      sessions: "session",
      attachment: "attachment",
      transaction: "transaction",
      event: "error",
      client_report: "internal",
      user_report: "default",
      profile: "profile",
      profile_chunk: "profile",
      replay_event: "replay",
      replay_recording: "replay",
      check_in: "monitor",
      feedback: "feedback",
      span: "span",
      statsd: "metric_bucket"
    };
    function getCategoryForType(type) {
      return TYPE_TO_CATEGORY[type];
    }
    function getSdkMetadataForEnvelope(metadata) {
      if (!metadata || !metadata.sdk) return;
      const {
        name: name,
        version: sdkVersion
      } = metadata.sdk;
      return {
        name: name,
        version: sdkVersion
      };
    }
    class SentryError extends Error {
      constructor(message, logLevel = "warn") {
        super(message), this.message = message, this.namge = message, this.name = new.target.prototype.constructor.name, globalThis.Object.setPrototypeOf(this, new.target.prototype), this.logLevel = logLevel;
      }
    }
    const stru = "7";
    function getEnvelopeEndpointWithUrlEncodedAuth(parame) {
      const strv = parame.protocol ? parame.protocol + ":" : '',
        results = parame.port ? ":" + parame.port : '';
      return strv + "//" + parame.host + results + (parame.path ? "/" + parame.path : '') + "/api/";
    }
    function getAuthQueryString(dsn, sentry_client) {
      return function helperz(params) {
        return globalThis.Object.keys(params).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&");
      }({
        sentry_key: dsn.publicKey,
        sentry_version: "7",
        ...(sentry_client && {
          sentry_client: sentry_client.name + "/" + sentry_client.version
        })
      });
    }
    function helperz(dsn, paramz, paramz) {
      return paramz || function eventHelperr(eventm) {
        return '' + getEnvelopeEndpointWithUrlEncodedAuth(eventm) + eventm.projectId + "/envelope/";
      }(dsn) + "?" + getAuthQueryString(dsn, paramz);
    }
    function createEventEnvelope(event, dsn, metadata, tunnel) {
      const valz = getSdkMetadataForEnvelope(metadata),
        type = event.type && "replay_event" !== event.type ? event.type : "event";
      !function helperz(fieldValue, sdk) {
        return sdk ? (fieldValue.sdk = fieldValue.sdk || {}, fieldValue.sdk.name = fieldValue.sdk.name || sdk.name, fieldValue.sdk.version = fieldValue.sdk.version || sdk.version, fieldValue.sdk.integrations = [...(fieldValue.sdk.integrations || []), ...(sdk.integrations || [])], fieldValue.sdk.packages = [...(fieldValue.sdk.packages || []), ...(sdk.packages || [])], fieldValue) : fieldValue;
      }(event, metadata && metadata.sdk);
      const envelopeHeaders = function envelopeHelperc(evt, sdkMeta, hasTunnel, eventn) {
        const dsc = evt.sdkProcessingMetadata && evt.sdkProcessingMetadata.dynamicSamplingContext;
        return {
          event_id: evt.event_id,
          sent_at: new globalThis.Date().toISOString(),
          ...(  ...(sdkMeta && {
            sdk: sdkMeta
          }),
          ...(!!hasTunnel && eventn && {
            dsn: dsnToString(eventn)
          }),
          ...(dsc && {
            trace: dropUndefinedKeys({
              ...dsc
            })
          })
        };
      }(event, valz, _     return !Boolean && (mGHYIIe() -= DJRbdd), delete event.sdkProcessingMetadata, Envelope(envelopeHeaders, [[{
        type: type
      }, event]]);
    }
    const strw = "Not capturing exception because it's already been captured.";
    class BaseClient {
      constructor(clientOptions) {
        if (this._options = clientOptions, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], clientOptions.dsn ? this._dsn = makeDsn(clientOptions.dsn) : IS_SENTRY_DEBUG && sentryLogger.warn("No DSN provided, client will not send events."), this._dsn) {
          const url = helperz(this._dsn, clientOptions.tunnel, clientOptions._metadata ? clientOptions._metadata.sdk : undefined);
          this._transport = clientOptions.transport({
            tunnel: this._options.tunnel,
            recordDroppedEvent: this.recordDroppedEvent.bind(this),
            ...clientOptions.transportOptions,
            url: url
          });
        }
      }
      ["captureException"](exception, hint, captureHintc) {
        const event_id = uuid4();
        if (checkOrSetAlreadyCaught(exception)) return IS_SENTRY_DEBUG && sentryLogger.log("Not capturing exception because it's already been captured."), event_id;
        const captureHintd = {
          event_id: event_id,
          ...hint
        };
        return this._process(this.eventFromException(exception, captureHintd).then(preparedEvent => this._captureEvent(preparedEvent, captureHintd, captureHintc))), captureHintd.event_id;
      }
      ["captureMessage"](message, level, hint, captureHintf) {
        const captureHintg = {
            event_id: uuid4(),
            ...hint
          },
          asyncResultk = isParameterizedString(message) ? message : globalThis.String(message),
          asyncResultl = isPrimitive(message) ? this.eventFromMessage(asyncResultk, level, captureHintg) : this.eventFromException(message, captureHintg);
        return this._process(asyncResultl.then(itemr => this._captureEvent(itemr, captureHintg, captureHintf))), captureHintg.event_id;
      }
      ["captureEvent"](event, hint, captureHinth) {
        const event_id = uuid4();
        if (hint && hint.originalException && checkOrSetAlreadyCaught(hint.originalException)) return IS_SENTRY_DEBUG && sentryLogger.log("Not capturing exception because it's already been captured."), event_id;
        const captureHinti = {
            event_id: event_id,
            ...hint
          },
          resultt = (event.sdkProcessingMetadata || {}).capturedSpanScope;
        return this._process(this._captureEvent(event, captureHinti, resultt || captureHinth)), captureHinti.event_id;
      }
      ["captureSession"](vz) {
        "string" != typeof vz.release ? IS_SENTRY_DEBUG && sentryLogger.warn("Discarded session because of missing or non-string release") : (this.sendSession(vz), updateSession(vz, {
          init: false
        }));
      }
      ["getDsn"]() {
        return this._dsn;
      }
      ["getOptions"]() {
        return this._options;
      }
      ["getSdkMetadata"]() {
        return this._options._metadata;
      }
      ["getTransport"]() {
        return this._transport;
      }
      ["flush"](asyncResultm) {
        const valz = this._transport;
        return valz ? (this.emit("flush"), this._isClientDoneProcessing(asyncResultm).then(items => valz.flush(asyncResultm).then(itemt => items && itemt))) : resolvedSyncPromise(true);
      }
      ["close"](asyncResultn) {
        return this.flush(asyncResultn).then(optionsb => (this.getOptions().enabled = false, this.emit("close"), optionsb));
      }
      ["getEventProcessors"]() {
        return this._eventProcessors;
      }
      ["addEventProcessor"](processor) {
        this._eventProcessoocessors.push(processor);
      }
     5754d9);
      }
      ["init"]() {
        (this._isEnabled() || this._options.integrations.some(({
          name: name
        }) => name.startsWith("Spotlight"))) && this._setupIntegrations();
      }
      ["getIntegrationByName"](vz) {
        return this._integrations[vz];
      }
      ["addIntegration"](vz) {
        const valz = this._integrations[vz.name];
        setupIntegration(this, vz, this._integrations), valz || afterAllSetup(this, [vz]);
      }
      ["sendEvent"](vz, vz = {}) {
        this.emit("beforeSendEvent", vz, vz);
        let valz = createEventEnvelope(vz, this._dsn, this._options._metadata, this._options.tunnel);
        for (const asyncResulto of vz.attachments || []) valz = envelopeHelper(valz, createAttachmentItem(asyncResulto));
        const valz = this.sendEnvelope(valz);
        valz && valz.then(itemu => this.emit("afterSendEvent", vz, itemu), null);
      }
      ["sendSession"](vz) {
        const valz = function helperz(cbb, cbc, cbd, cbe) {
          const sdk = getSdkMetadataForEnvelope(cbd);
          return createEnvelope({
            sent_at: new globalThis.Date().toISOString(),
            ...(sdk && {
              sdk: sdk
            }),
            ...(!!cbe && cbc && {
              dsn: dsnToString(cbc)
            })
          }, ["aggregates" in cbb ? [{
            type: "sessions"
          }, cbb] : [{
            type: "session"
          }, cbb.toJSON()]]);
        }(vz, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(valz);
      }
      ["recordDroppedEvent"](vz, vz, vz) {
        if (this._options.sendClientReports) {
          const strx = "number" == typeof vz ? vz : 1,
            vz = vz + ":" + vz;
          IS_SENTRY_DEBUG && sentryLogger.log("Recording outcome: \"" + vz + "\"" + (strx > 1 ? " (" + strx + " times)" : '')), this._outcomes[vz] = (this._outcomes[vz] || 0) + strx;
        }
      }
      ["on"](listz, listz) {
        const listz = this._hooks[listz] = this._hooks[listz] || [];
        return listz.push(listz), () => {
          const valz = listz.indexOf(listz);
          valz > -1 && listz.splice(valz, 1);
        };
      }
      ["emit"](listz, ...listz) {
        const valz = this._hooks[listz];
        valz && valz.forEach(itemv => itemv(...listz));
      }
      ["sendEnvelope"](asyncResultp) {
        return this.emit("beforeEnvelope", asyncResultp), this._isEnabled() && this._transport ? this._transport.send(asyncResultp).then(null, itemw => (IS_SENTRY_DEBUG && sentryLogger.error("Error while sending event:", itemw), itemw)) : (IS_SENTRY_DEBUG && sentryLogger.error("Transport disabled"), resolvedSyncPromise({}));
      }
      ["_setupIntegrations"]() {
        const {
          integrations: integrations
        } = this._options;
        this._integrations = function helperz(paramz, paramz) {
          const objd = {};
          return paramz.forEach(itemx => {
            itemx && setupIntegration(paramz, itemx, objd);
          }), objd;
        }(this, integrations), afterAllSetup(this, integrations);
      }
      ["_updateSessionFromEvent"](errors, vz) {
        let flag = false,
          flagb = false;
        const valz = vz.exception && vz.exception.values;
        if (valz) {
          flagb = true;
          for (const vz of valz) {
            const valz = vz.mechanism;
            if (valz && false === valz.handled) {
              flag = true;
              break;
            }
          }
        }
        const stry = "ok" === errors.status;
        (stry && 0 === errors.errors || stry && flag) && (updateSession(errors, {
          ...(flag && {
            status: "crashed"
          }),
          errors: errors.errors || Number(flagb || flag)
        }), this.captureSession(errors));
      }
      ["_isClientDoneProcessing"](asyncResultq) {
        return new SyncPromise(itemy => {
          let numm = 0;
          const valz = globalThis.setInterval(() => {
            0 == this._numProcessing ? (globalThis.clearInterval(valz), itemy(true)) : (numm += 1, asyncResultq && numm >= asyncResultq && (globalThis.clearInterval(valz), itemy(false)));
          }, 1);
        });
      }
      ["_isEnabled"]() {
        return false !== this.getOptions().enabled && undefined !== this._transport;
      }
      ["_prepareEvent"](asyncResultr, asyncResultb, asyncResults, isolationScope = getIsolationScope()) {
        const options = this.getOptions(),
          keys = globalThis.Object.keys(this._integrations);
        return !asyncResultb.integrations && keys.length > 0 && (asyncResultb.integrations = keys), this.emit("preprocessEvent", asyncResultr, asyncResultb), asyncResultr.type || isolationScope.setLastEventId(asyncResultr.event_id || asyncResultb.event_id), prepareEvent(options, asyncResultr, asyncResultb, asyncResults, this, isolationScope).then(preparedEvent => {
          if (null === preparedEvent) return preparedEvent;
          const valz = {
            ...isolationScope.getPropagationContext(),
            ...(asyncResults ? asyncResults.getPropagationContext() : undefined)
          };
          if (!(preparedEvent.contexts && preparedEvent.contexts.trace) && valz) {
            const {
              traceId: traceId,
              spanId: spanId,
              parentSpanId: parentSpanId,
              dsc: dsc
            } = valz;
            preparedEvent.contexts = {
              trace: dropUndefinedKeys({
                trace_id: traceId,
                span_id: spanId,
                parent_span_id: parentSpanId
              }),
              ...preparedEvent.contexts
            };
            const dynamicSamplingContext = dsc || getDynamicSamplingContext(traceId, this);
            preparedEvent.sdkProcessingMetadata = {
              dynamicSamplingContext: dynamicSamplingContext,
              ...preparedEvent.sdkProcessingMetadata
            };
          }
          return preparedEvent;
        });
      }
      ["_captureEvent"](asyncResultt, obje = {}, asyncResultu) {
        return this._processEvent(asyncResultt, obje, asyncResultu).then(itemz => itemz.event_id, itemz => {
          if (IS_SENTRY_DEBUG) {
            const numn = itemz;
            "log" === numn.logLevel ? sentryLogger.log(numn.message) : sentryLogger.warn(numn);
          }
        });
      }
      ["_processEvent"](sentryEvent, vx, vz) {
        const options = this.getOptions(),
          {
            sampleRate: sampleRate
          } = options,
          vz = isTransactionEvent(sentryEvent),
          resultu = isErrorEvent_(sentryEvent),
          resultv = sentryEvent.type || "error",
          strz = "before send for type `" + resultv + "`",
          resultw = undefined === sampleRate ? undefined : function helperz(sampleRate) {
            if ("boolean" == typeof sampleRate) return Number(sampleRate);
            const parsed = "string" == typeof sampleRate ? parseFloat(sampleRate) : sampleRate;
            if (!("number" != typeof parsed || isNaN(parsed) || parsed < 0 || parsed > 1)) return parsed;
            IS_SENTRY_DEBUG && sentryLogger.warn("[Tracing] Given sample rate is invalid. Sample rate must be at be a boolean or a number between 0 and 1. Got " + JSON.stringify(sampleRate) + " of type " + JSON.stringify(typeof sampleRate) + ".");
          }(sampleRate);
        if (resultu && "number" == typeof typeh.random() > resultw) return this.recordDroppedEvent("sample_rate", "error", sentryEvent), rejectedSyncPromise(new SentryError("Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")", "log"));
        const strz = "replay_event" === resultv ? "replay" : resultv,
          asyncResultv = (sentryEvent.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
        return this._prepareEvent(sentryEvent, vx, vz, asyncResultv).then(itemz => {
          if (null === itemz) throw this.recordDroppedEvent("event_processor", strz, sentryEvent), new SentryError("An event processor returned `null`, will not send event.", "log");
          if (vx.data && true === vx.data.__sentry__) return itemz;
          const valz = function helperz(cbf, cbg, item, cbh) {
            const {
              beforeSend: beforeSend,
              beforeSendTransaction: beforeSendTransaction,
              beforeSendSpan: beforeSendSpan
            } = cbg;
            if (isErrorEvent_(item) && beforeSend) return beforeSend(item, cbh);
            if (isTransactionEvent(item)) {
              if (item.spans && beforeSendSpan) {
                const spans = [];
                for (const arr64 of item.spans) {
                  const num24 = beforeSendSpan(arr64);
                  num24 ? spans.push(num24) : cbf.recordDroppedEvent("before_send", "span");
                }
                item.spans = spans;
              }
              if (beforeSendTransaction) {
                if (item.spans) {
                  const len9 = item.spans.length;
                  item.sdkProcessingMetadata = {
                    ...item.sdkProcessingMetadata,
                    spanCountBeforeProcessing: len9
                  };
                }
                return beforeSendTransaction(item, cbh);
              }
            }
            return item;
          }(this, options, itemz, vx);
          return function eventHelpers(event6, event32) {
            const ref5 = event32 + " must return `null` or a valid event.";
            if (isThenable(event6)) return event6.then(item16 => {
              if (!isPlainObject(item16) && null !== item16) throw new SentryError(ref5);
              return item16;
            }, item60 => {
              throw new SentryError(event32 + " rejected with " + item60);
            });
            if (!isPlainObject(event6) && null !== event6) throw new SentryError(ref5);
            return event6;
          }(valz, strz);
        }).then(item => {
          if (null === item) {
            if (this.recordDroppedEvent("before_send", strz, sentryEvent), vz) {
              const len10 = 1 + (sentryEvent.spans || []).length;
              this.recordDroppedEvent("before_send", "span", len10);
            }
            throw new SentryError(strz + " returned `null`, will not send event.", "log");
          }
          const result55 = vz && vz.getSession();
          if (!vz && result55 && this._updateSessionFromEvent(result55, item), vz) {
            const val108 = (item.sdkProcessingMetadata && item.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (item.spans ? item.spans.length : 0);
            val108 > 0 && this.recordDroppedEvent("before_send", "span", val108);
          }
          const val109 = item.transaction_info;
          if (vz && val109 && item.transaction !== sentryEvent.transaction) {
            const source = "cust const source = "custom";
            item.transaction_info = {
              ...val109,
              source: source
            };
          }
          return this.sendEvent(item, vx), item;
        }).then(null, originalException => {
          if (originalException instanceof SentryError) throw originalException;
          throw this.captureException(originalException, {
            data: {
              __sentry__: true
            },
            originalException: originalException
          }), new SentryError("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + originalException);
        });
      }
      ["_process"](asyncResultw) {
        this._numProcessing++, asyncResultw.then(itemz => (this._numProcessing--, itemz), itemz => (this._numProcessing--, itemz));
      }
      ["_clearOutcomes"]() {
        const valz = this._outcomes;
        return this._outcomes = {}, globalThis.Object.entries(valz).map(([listz, quantity]) => {
          const [reason, category] = listz.split(":");
          return {
            reason: reason,
            category: category,
            quantity: quantity
          };
        });
      }
      ["_flushOutcomes"]() {
        IS_SENTRY_DEBUG && sentryLogger.log("Flushing outcomes...");
        const valz = this._clearOutcomes();
        if (0 === valz.length) return void (IS_SENTRY_DEBUG && sentryLogger.log("No outcomes to send"));
        if (!this._dsn) return void (IS_SENTRY_DEBUG && sentryLogger.log("No dsn provided, will not send outcomes"));
        IS_SENTRY_DEBUG && sentryLogger.log("Sending outcomes:", valz);
        const valz = function eventHelpert(discarded_events, dsn, timestamp) {
          return createEnvelope(dsn ? {
            dsn: dsn
          } : {}, [[{
            type: "client_report"
          }, {
            timestamp: timestamp || dateTimestampInSeconds(),
            discarded_events: discarded_events
          }]]);
        }(valz, this._options.tunnel && dsnToString(this._dsn));
        this.sendEnvelope(valz);
      }
    }
    function isErrorEvent_(typei) {
      return undefined === typei.type;
    }
    function isTransactionEvent(typej) {
      return "transaction" === typej.type;
    }
    class SentryBrowserClient extends BaseClient {
      constructor(vz) {
        const valz = {
          parentSpanIsAlwaysRootSpan: true,
          ...vz
        };
        !function dateHelper(paramz, paramz, packages = [paramz], name = "npm") {
          const _metadata = paramz._metadata || {};
          _metadata.sdk || (_metadata.sdk = {
            name: "sentry.javascript." + paramz,
            packages: packages.map(itemz => ({
              name: name + ":@sentry/" + itemz,
              version: "8.34.0"
            })),
            version: "8.34.0"
          }), paramz._metadata = _metadata;
        }(valz, "browser", ["browser"], globalWindow.SENTRY_SDK_SOURCE || "npm"), super(valz), valz.sendClientReports && globalWindow.document && globalWindow.document.addEventListener("visibilitychange", () => {
          "hidden" === globalWindow.document.visibilityState && this._flushOutcomes();
        });
      }
      ["eventFromException"](stackParser, exception) {
        return function eventHelperu(evento, eventp, event_id, eventq) {
          const captureHintj = eventFromException(evento, eventp, event_id && event_id.syntheticException || undefined, eventq);
          return addExceptionMechanism(captureHintj), captureHintj.level = "error", event_id && event_id.event_id && (captureHintj.event_id = event_id.event_id), resolvedSyncPromise(captureHintj);
        }(this._options.stackParser, stackParser, exception, this._options.attachStacktrace);
      }
      ["eventFromMessage"](stackParser, message = "info", level) {
        return function eventHelperv(eventr, events, level = "info", event_idb, eventt) {
          const captureHintk = eventFromMessage(eventr, events, event_idb && event_idb.syntheticException || undefined, eventt);
          return captureHintk.level = level, event_idb && event_idb.event_id && (captureHintk.event_id = event_idb.event_id), resolvedSyncPromise(captureHintk);
        }(this._options.stackParser, stackParser, message, level, this._options.attachStacktrace);
      }
      ["captureUserFeUserFeedback"](vz) {
        if (!this._isEnabled()) return void (stre && sentryLogger.warn("SDK not enabled, will not capture user feedback."));
        const valz = function eventHelperw(event_id, {
          metab0c0b, {
          metadata: metadata,
          tunnel: tunnel,
          dsn: dsn
        }) {
          const valz = {
              event_id: event_id.event_id,
              sent_at: new globalThis.Date().toISOString(),
              ...(metadata && metadata.sdk && {
                sdk: {
                  name: metadata.sdk.name,
                  version: metadata.sdk.version
                }
              }),
              ...(!!tunnel && !!dsn && {
                dsn: dsnToString(dsn)
              })
            },
            paramz = function helperz(paramz) {
              return [{
                type: "user_report"
              }, paramz];
            }(event_id);
          return createEnvelope(valz, [paramz]);
        }(vz, {
          metadata: this.getSdkMetadata(),
          dsn: this.getDsn(),
          tunnel: this.getOptions().tunnel
        });
        this.sendEnvelope(valz);
      }
      ["_prepareEvent"](platform, vz, vz) {
        return platform.platform = platform.platform || "javascript", super._prepareEvent(platform, vz, vz);
      }
    }
    const numo = 60000;
    function parseRetryAfterHeader(header, now = globalThis.Date.now()) {
      const parsedb = parseInt('' + header, 10);
      if (!isNaN(parsedb)) return 1000 * parsedb;
      const strz = globalThis.Date.parse('' + header);
      return isNaN(strz) ? numo : strz - now;
    }
    const nump = 100,
      numq = 5000,
      numr = 3600000;
    function makeOfflineTransportBase(cbi) {
      function localFn(...cbj) {
        IS_SENTRY_DEBUG && sentryLogger.info("[Offline]:", ...cbj);
      }
      return transportOptions => {
        const transport = cbi(transportOptions);
        if (!transportOptions.createStore) throw new Error("No `createStore` function was provided");
        const valz = transportOptions.createStore(transportOptions);
        let v,
          listn = numq;
        function checkFetch(eventu) {
          v && globalThis.clearTimeout(v), v = globalThis.setTimeout(async () => {
            v = undefined;
            const valz = await valz.shift();
            valz && (localFn("Attempting to send previously queued event"), valz[0].sent_at = new globalThis.Date().toISOString(), send(valz, true)["catch"](itemz => {
              localFn("Failed to retry sending", itemz);
            }));
          }, eventu), "number" != typeof v && v.unref && v.unref();
        }
        function envelopeHelperb() {
          v || (checkFetch(listn), listn = globalThis.Math.min(2 * listn, numr));
        }
        async function send(eventd, eventv = false) {
          if (!eventv && envelopeContainsTypes(eventd, ["replay_event", "replay_recording"])) return await valz.push(eventd), checkFetch(nump), {};
          try {
            const val = await transport.send(eventd);
            let nums = nump;
            if (val) {
              if (val.headers && val.headers["retry-after"]) nums = parseRetryAfterHeader(val.headers["retry-after"]);else {
                if (val.headers && val.headers["x-sentry-rate-limits"]) nums = 60000;else {
                  if ((val.statusCode || 0) >= 400) return val;
                }
              }
            }
            return checkFetch(nums), listn = numq, val;
          } catch (err) {
            if (await function eventHelperx(eventw, eventx, eventy) {
              return !envelopeContainsTypes(eventw, ["client_report"]) && (!transportOptions.shouldStore || transportOptions.shouldStore(eventw, eventx, eventy));
            }(eventd, err, listn)) return eventv ? await valz.unshift(eventd) : await valz.push(eventd), envelopeHelperb(), localFn("Error sending. Event queued.", err), {};
            throw err;
          }
        }
        return transportOptions.flushAtStartup && envelopeHelperb(), {
          send: send,
          flush: flush => transport.flush(flush)
        };
      };
    }
    const strz = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
      objf = {};
    function checkFetchf(paramj) {
      const numt = objf[paramj];
      if (numt) return numt;
      let captureHinte = globalObj[paramj];
      if (isNativeFn(captureHinte)) return objf[paramj] = captureHinte.bind(globalObj);
      const val11 = globalObj.document;
      if (val11 && "function" == typeof val11.createElement) try {
        const str4 = val11.createElement("iframe");
        str4.hidden = true, val11.head.appendChild(str4);
        const val56 = str4.contentWindow;
        val56 && val56[paramj] && (captureHinte = val56[paramj]), val11.head.removeChild(str4);
      } catch (err10) {
        strz && sentryLogger.warn("Could not create sandbox iframe for " + paramj + " check, bailing to window." + paramj + ": ", err10);
      }
      return captureHinte ? objf[paramj] = captureHinte.bind(globalObj) : captureHinte;
    }
    function checkFetche(arg130) {
      objf[arg130] = undefined;
    }
    function makePromiseBuffer(paramz) {
      const promiseBufferArray = [];
      function checkFetchg(paramz) {
        return promiseBufferArray.splice(promiseBufferArray.indexOf(paramz), 1)[0] || globalThis.Promise.resolve(undefined);
      }
      return {
        $: promiseBufferArray,
        add: function errorHelperf(errz) {
          if (!function helperz() {
            return undefined === paramz || promiseBufferArray.length < paramz;
          }()) return rejectedSyncPromise(new SentryError("Not adding Promise because buffer limit was reached."));
          const num = errz();
          return -1 === promiseBufferArray.indexOf(num) && promiseBufferArray.push(num), num.then(() => checkFetchg(num)).then(null, () => checkFetchg(num).then(null, () => {})), num;
        },
        drain: function helperz(paramz) {
          return new SyncPromise((asyncResultx, asyncResulty) => {
            let len7 = promiseBufferArray.length;
            if (!len7) return asyncResultx(true);
            const valz = globalThis.setTimeout(() => {
              paramz && paramz > 0 && asyncResultx(false);
            }, paramz);
            promiseBufferArray.forEach(itemz => {
              resolvedSyncPromise(itemz).then(() => {
                --len7 || (globalThis.clearTimeout(valz), asyncResultx(true));
              }, asyncResulty);
            });
          });
        }
      };
    }
    const DEFAULT_BUFFER_SIZE = 64;
    function createTransport(paramz, paramz, paramz = makePromiseBuffer(paramz.bufferSize || DEFAULT_BUFFER_SIZE)) {
      let objg = {};
      return {
        send: function helperz(paramz) {
          const listz = [];
          if (envelopeContainsItemType(paramz, (vz, vz) => {
            const valz = getCategoryForType(vz);
            if (function dateHelperb(paramz, paramz, now = globalThis.Date.now()) {
              return function eventHelpery(eventz, eventz) {
                return eventz[eventz] || eventz.all || 0;
              } now;
            }(objg, valz)) {
              const valz = getEventFromEnvelopeItem(vz, vz);
              paramz.recordDroppedEvent("ratelimit_backoff", valz, valz);
            } else listz.push(vz);
          }), 0 === listz.length) return resolvedSyncPromise({});
          const envelope = createEnvelope(paramz[0], listz),
            vz = itemz => {
              envelopeContainsItemType(envelope, (vz, vz) => {
                const valz = getEventFromEnvelopeItem(vz, vz);
                paramz.recordDroppedEvent(itemz, getCategoryForType(vz), valz);
              });
            };
          return paramz.add(() => paramz({
            body: serializeEnvelope(envelope)
          }).then(fetchResponse => (undefined !== fetchResponse.statusCode && (fetchResponse.statusCode < 200 || fetchResponse.statusCode >= 300) && IS_SENTRY_DEBUG && sentryLogger.warn("Sentry responded with status code " + fetchResponse.statusCode + " to sent event."), objg = function checkFetchh(eventz, {
            statusCode: statusCode,
            headers: headers
          }, now = globalThis.Date.now()) {
            const valb = {
                ...eventz
              },
              v169 = headers && headers["x-sentry-rate-limits"],
              v170 = headers && headers["retry-after"];
            if (v169) for (const v293 of v169.trim().split(",")) {
              const [v294, v171,,, v172] = v293.split(":", 5),
                60 = parseInt(v294, 10),
                v174 = 1000 * (isNaN(60) ? 60 : 60);
              if (v171) {
                for (const v175 of v171.split(";")) "metric_bucket" === v175 && v172 && !v172.split(";").includes("custom") || (valb[v175] = now + v174);
              } else valb.all = now + v174;
            } else v170 ? valb.all = now + parseRetryAfterHeader(v170, now) : 429 === statusCode && (valb.all = now + 60000);
            return valb;
          }(objg, fetchResponse), fetchResponse), item68 => {
            throw vz("network_error"), item68;
          })).then(item69 => item69, item25 => {
            if (item25 instanceof SentryError) return ISf SentryError) return IS_SENTRY_DEBUG && sentryLogger.error("Skipped sending event because buffer is full."), vz("queue_overflow"), resolvedSyncPromise({});
            throw item25;
          });
        },
        flush: flush => paramz.drain(flush)
      };
    }
    function getEventFromEnvelopeItem(eventz, eventz) {
      if ("event" === eventz || "transaction" === eventz) return globalThis.Array.isArray(eventz) ? eventz[1] : undefined;
    }
    function makeFetchTransport(headers, paramz = checkFetchf("fetch")) {
      let keepalive = 0,
        numu = 0;
      return createTransport(headers, function transportHelper(body) {
        const len5 = body.body.length;
        keepalive += len5, numu++;
        const valz = {
          body: body.body,
          method: "POST",
          referrerPolicy: "origin",
          headers: headers.headers,
          keepalive: keepalive <= 60000 && numu < 15,
          ...headers.fetchOptions
        };
        if (!paramz) return checkFetche("fetch"), rejectedSyncPromise("No fetch implementation available");
        try {
          return paramz(headers.url, valz).then(statusCode => (keepalive -= len5, numu--, {
            statusCode: statusCode.status,
            headers: {
              ["x-sentry-rate-limits"]: statusCode.headers.get("X-Sentry-Rate-Limits"),
              ["retry-after"]: statusCode.headers.get("Retry-After")
            }
          }));
        } catch (errz) {
          return checkFetche("fetch"), keepalive -= len5, numu--, rejectedSyncPromise(errz);
        }
      });
    }
    function promisifyRequest(indexedDbRequest) {
      return new globalThis.Promise((asyncResultz, asyncResultz) => {
        indexedDbRequest.oncomplete = indexedDbRequest.onsuccess = () => asyncResultz(indexedDbRequest.result), indexedDbRequest.onabort = indexedDbRequest.onerror = () => asyncResultz(indexedDbRequest.error);
      });
    }
    function getAllKeys(paramz) {
      return promisifyRequest(paramz.getAllKeys());
    }
    function createIndexedDbStore(paramz) {
      let resultx;
      function normalizeHelper() {
        return null == resultx && (resultx = function helperz(paramz, paramz) {
          const valz = indexedDB.open(paramz);
          valz.onupgradeneeded = () => valz.result.createObjectStore(paramz);
          const valz = promisifyRequest(valz);
          return itemz => valz.then(itemz => itemz(itemz.transaction(paramz, "readwrite").objectStore(paramz)));
        }(paramz.dbName || "sentry-offline", paramz.storeName || "queue")), resultx;
      }
      return {
        push: async itemz => {
          try {
            const valz = await serializeEnvelope(itemz);
            await function helperz(paramz, paramz, paramz) {
              return paramz(itemz => getAllKeys(itemz).then(itemz => {
                if (!(itemz.length >= paramz)) return itemz.put(paramz, globalThis.Math.max(...itemz, 0) + 1), promisifyRequest(itemz.transaction);
              }));
            }(normalizeHelper(), valz, paramz.maxQueueSize || 30);
          } catch (errz) {}
        },
        unshift: async itemz => {
          try {
            const valz = await serializeEnvelope(itemz);
            await function helperz(paramz, paramz, paramz) {
              return paramz(itemz => getAllKeys(itemz).then(itemz => {
                if (!(itemz.length >= paramz)) return itemz.put(paramz, globalThis.Math.min(...itemz, 0) - 1), promisifyRequest(itemz.transaction);
              }));
            }(normalizeHelper(), valz, paramz.maxQueueSize || 30);
          } catch (errz) {}
        },
        shift: async () => {
          try {
            const valz = await function helperz(paramz) {
              return paramz(itemz => getAllKeys(itemz).then(itemz => {
                const numv = itemz[0];
                if (null != numv) return promisifyRequest(itemz.get(numv)).then(itemz => (itemz["delete"](numv), promisifyRequest(itemz.transaction).then(() => itemz)));
              }));
            }(normalizeHelper());
            if (valz) return parseEnvelope(valz);
          } catch (errz) {}
        }
      };
    }
    function makeOfflineTransport(paramz = makeFetchTransport) {
      return function helperz(paramz) {
        return itemz => paramz({
          ...itemz,
          createStore: createIndexedDbStore
        });
      }(makeOfflineTransportBase(paramz));
    }
    function createFrame(filename, fn, lineno, colno) {
      const valz = {
        filename: filename,
        ["function"]: "<anonymous>" === fn ? "?" : fn,
        in_app: true
      };
      return undefined !== lineno && (valz.lineno = lineno), undefined !== colno && (valz.colno = colno), valz;
    }
    const chromeStackLineRegex = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      chromeEvalRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      chromeEvalChainRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      geckoStackLineRegex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      defaultStackParser = createStackParser(...[[30, itemz => {
        const match = chromeStackLineRegex.exec(itemz);
        if (resulty          const [, vz, vz, vz] = match;
          return createFrame(vz, "?", +vz, +vz);
        }
        const evalMatch = chromeEvalRegex.exec(itemz);
        if (evalMatch) {
          if (evalMatch[2] && 0 === evalMatch[2].indexOf("eval")) {
            const matched = chromeEvalChainRegex.exec(evalMatch[2]);
            matched && (evalMatch[2] = matched[1], evalMatch[3] = matched[2], evalMatch[4] = matched[3]);
          }
          const [resultz, vz] = extractFnAndFile(evalMatch[1] || "?", evalMatch[2]);
          return createFrame(vz, resultz, evalMatch[3] ? +evalMatch[3] : undefined, evalMatch[4] ? +evalMatch[4] : undefined);
        }
      }], [50, itemz => {
        const config = geckoStackLineRegex.exec(itemz);
        if (config) {
          if (config[3] && config[3].indexOf(" > eval") > -1) {
            const match = geckoEvalRegex.exec(config[3]);
            match && (config[1] = config[1] || "eval", config[3] = match[1], config[4] = match[2], config[5] = '');
          }
          let val59 = config[3],
            result22 = config[1] || "?";
          return [result22, val59] = extractFnAndFile(result22, val59), createFrame(val59, result22, config[4] ? +config[4] : undefined, config[5] ? +config[5] : undefined);
        }
      }]]),
      extractFnAndFile = (vz, vz) => {
        const strz = -1 !== vz.indexOf("safari-extension"),
          resultz = -1 !== vz.indexOf("safari-web-extension");
        return strz || resultz ? [-1 !== vz.indexOf("@") ? vz.split("@")[0] : "?", strz ? "safari-extension:" + vz : "safari-web-extension:" + vz] : [vz, vz];
      };
    var platformInfo = __webpack_require__(7503);
    __webpack_require__(9252);
    class vz extends Error {}
    class AbstractZoneError extends vz {
      constructor() {
        super("Zone is an abstract class");
      }
    }
    class Zone {
      get ["type"]() {
        throw new AbstractZoneError();
      }
      get ["name"]() {
        throw new AbstractZoneError();
      }
      get ["ianaName"]() {
        return this.name;
      }
      get ["isUniversal"]() {
        throw new AbstractZoneError();
      }
      ["offsetName"](vz, vz) {
        throw new AbstractZoneError();
      }
      ["formatOffset"](vz, vz) {
        throw new AbstractZoneError();
      }
      ["offset"](vz) {
        throw new AbstractZoneError();
      }
      ["equals"](vz) {
        throw new AbstractZoneError();
      }
      get ["isValid"]() {
        throw new AbstractZoneError();
      }
    }
    let dtfCache = {};
    let ianaZoneCache = {};
    class IANAZone extends Zone {
      static ["create"](vz) {
        return ianaZoneCache[vz] || (ianaZoneCache[vz] = new IANAZone(vz)), ianaZoneCache[vz];
      }
      static ["resetCache"]() {
        ianaZoneCache = {}, dtfCache = {};
      }
      static ["isValidSpecifier"](vz) {
        return this.isValidZone(vz);
      }
      static ["isValidZone"](timeZone) {
        if (!timeZone) return false;
        try {
          return new Intl.DateTimeFormat("en-US", {
            timeZone: timeZone
          }).format(), true;
        } catch (errz) {
          return false;
        }
      }
      constructor(zoneName) {
        super(), this.zoneName = zoneName, this.valid = IANAZone.isValidZone(zoneName);
      }
      get ["type"]() {
        return "iana";
      }
      get ["name"]() {
        return this.zoneName;
      }
      get ["isUniversal"]() {
        return false;
      }
      ["offsetName"](vz, {
        format: format,
        locale: locale
      }) {
        return monthForLocale(vz, format, locale, this.name);
      }
      ["formatOffset"](vz, vz) {
        return formatOffset(this.offset(vz), vz);
      }
      ["offset"](resultz) {
        const globalthis = new globalThis.Date(resultz);
        if (isNaN(globalthis)) return NaN;
        const valz = function helperz(timeZone) {
          return dtfCache[timeZone] || (dtfCache[timeZone] = new Intl.DateTimeFormat("en-US", {
            hour12: false,
            timeZone: timeZone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            era: "short"
          })), dtfCache[timeZone];
        }(this.name);
        let [year, month, day, paramz, paramz, minute, second] = valz.formatToParts ? function helperz(paramz, paramz) {
          const valz = paramz.formatToParts(paramz),
            listz = [];
          for (let len6 = 0; len6 < valz.length; len6++) {
            const {
                type: type,
                value: value
              } = valz[len6],
              resultz = typeToPos[type];
            "era" === type ? listz[resultz] = value : isUndefined(resultz) || (listz[resultz] = parseInt(value, 10));
          }
          return listz;
        }(valz, globalthis) : function helperz(paramz, paramz) {
          const cleanedb = paramz.format(paramz).replace(/\u200E/g, ''),
            regexb = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(cleanedb),
            [, result90, v304, v305, v306, v307, v308, v309] = regexb;
          return [v305, result90, v304, v306, v307, v308, v309];
        }(valz, globalthis);
        "BC" === paramz && (year = 1 - globalThis.Math.abs(year));
        let num15 = +globalthis;
        const num16 = num15 % 1000;
        return num15 -= num16 >= 0 ? num16 : 1000 + num16, (objToLocalTS({
          year: year,
          month: month,
          day: day,
          hour: 24 === paramz ? 0 : paramz,
          minute: minute,
          second: second,
          millisecond: 0
        }) - num15) / 60000;
      }
      ["equals"](resultz) {
        return "iana" === resultz.type && resultz.name === this.name;
      }
      get ["isValid"]() {
        return this.valid;
      }
    }
    let utcInstance = null;
    class FixedOffsetZone extends Zone {
      static get ["utcInstance"]() {
        return null === utcInstance && (utcInstance = new FixedOffsetZone(0)), utcInstance;
      }
      static ["instance"](vz) {
        return 0 === vz ? FixedOffsetZone.utcInstance : new FixedOffsetZone(vz);
      }
      static ["parseSpecifier"](vz) {
        if (vz) {
          const match = vz.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
          if (match) return new FixedOffsetZone(signedOffset(match[1], match[2]));
        }
        return null;
      }
      constructor(fixed) {
        super(), this.fixed = fixed;
      }
      get ["type"]() {
        return "fixed";
      }
      get ["name"]() {
        return 0 === this.fixed ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
      }
      get ["ianaName"]() {
        return 0 === this.fixed ? "Etc/UTC" : "Etc/GMT" + formatOffset(-this.fixed, "narrow");
      }
      ["offsetName"]() {
        return this.name;
      }
      ["formatOffset"](vz, vz) {
        return formatOffset(this.fixed, vz);
      }
      get ["isUniversal"]() {
        return true;
     
        return this.fixed;
      }
      ["equals"](resultz) {
        return "fixed" === resultz.type && resultz.fixed === this.fixed;
      }
      get ["isValid"]() {
        return true;
      }
    }
    const valz = {
      arab: "[\u0660-\u0669]",
      arabext: "[\u06F0-\u06F9]",
      bali: "[\u1B50-\u1B59]",
      beng: "[\u09E6-\u09EF]",
      deva: "[\u0966-\u096F]",
      fullwide: "[\uFF10-\uFF19]",
      gujr: "[\u0AE6-\u0AEF]",
      hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
      khmr: "[\u17E0-\u17E9]",
      knda: "[\u0CE6-\u0CEF]",
      laoo: "[\u0ED0-\u0ED9]",
      limb: "[\u1946-\u194F]",
      mlym: "[\u0D66-\u0D6F]",
      mong: "[\u1810-\u1819]",
      mymr: "[\u1040-\u1049]",
      orya: "[\u0B66-\u0B6F]",
      tamldec: "[\u0BE6-\u0BEF]",
      telu: "[\u0C66-\u0C6F]",
      thai: "[\u0E50-\u0E59]",
      tibt: "[\u0F20-\u0F29]",
      latn: "\\d"
    };
    valz.hanidec.replace(/[\[|\]]/g, '').split('');
    function isUndefined(paramz) {
      return undefined === paramz;
    }
    function padNumber(paramz, paramz = 2) {
      let resultz;
      return resultz = paramz < 0 ? "-" + ('' + -paramz).padStart(paramz, "0") : ('' + paramz).padStart(paramz, "0"), resultz;
    }
    function parseInteger(paramz) {
      return isUndefined(paramz) || null === paramz || '' === paramz ? undefined : parseInt(paramz, 10);
    }
    function parseMillis(paramz) {
      if (!isUndefined(paramz) && null !== paramz && '' !== paramz) {
        const parsedc = 1000 * parseFloat("0." + paramz);
        return globalThis.Math.floor(parsedc);
      }
    }
    function objToLocalTS(dateObj) {
      let timestamp = globalThis.Date.UTC(dateObj.year, dateObj.month - 1, dateObj.day, dateObj.hour, dateObj.minute, dateObj.second, dateObj.millisecond);
      return dateObj.year < 100 && dateObj.year >= 0 && (timestamp = new globalThis.Date(timestamp), timestamp.setUTCFullYear(dateObj.year, dateObj.month - 1, dateObj.day)), +timestamp;
    }
    function monthForLocale(dateVal, timeZoneName, locale, timeZone = null) {
      const dateObj = new globalThis.Date(dateVal),
        baseOpts = {
          hourCycle: "h23",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        };
      timeZone && (baseOpts.timeZone = timeZone);
      const formatOpts = {
          timeZoneName: timeZoneName,
          ...baseOpts
        },
        tzPart = new Intl.DateTimeFormat(locale, formatOpts).formatToParts(dateObj).find(itemz => "timezonename" === itemz.type.toLowerCase());
      return tzPart ? tzPart.value : null;
    }
    function signedOffset(paramz, minsStr) {
      let hoursParsed = parseInt(paramz, 10);
      Number.isNaN(hoursParsed) && (hoursParsed = 0);
      const minsParsed = parseInt(minsStr, 10) || 0;
      return 60 * hoursParsed + (hoursParsed < 0 || globalThis.Object.is(hoursParsed, -0) ? -minsParsed : minsParsed);
    }
    function formatOffset(paramz, format) {
      const mathResultb = globalThis.Math.trunc(globalThis.Math.abs(paramz / 60)),
        mathResult = globalThis.Math.trunc(globalThis.Math.abs(paramz % 60)),
 abs(paramz % 60)),
        resultz = paramz >= 0 ? "+" : "-";
      switch (format) {
        case "short":
          return '' + resultz + padNumber(mathResultb, 2) + ":" + padNumber(mathResult, 2);
        case "narrow":
          return '' + resultz + mathResultb + (mathResult > 0 ? ":" + mathResult : '');
        case "techie":
          return '' + resultz + padNumber(mathResultb, 2) + padNumber(mathResult, 2);
        default:
 lt:
          throw new RangeError("Value format " + format + " is out of range for property format");
      }
    }
    const ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
    function combineRegex(...paramz) {
      const combined = paramz.reduce((vz, vz) => vz + vz.source, '');
      return RegExp("^" + combined + "$");
    }
    function parse(...parsers) {
      return str => parsers.reduce(([obj, vz, idx], parser) => {
        const [parsedObj, nextIdx, nextIdx] = parser(str, idx);
        return [{
          ...obj,
          ...parsedObj
        }, nextIdx || vz, nextIdx];
      }, [{}, null, 1]).slice(0, 2);
    }
    function extractISOFields(...fields) {
      return (captures, vz) => {
        const objh = {};
        let fieldIndex;
        for (fieldIndex = 0; fieldIndex < fields.length; fieldIndex++) objh[fields[fieldIndex]] = parseInteger(captures[vz + fieldIndex]);
        return [objh, null, vz + fieldIndex];
      };
    }
    const tzRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
      timeRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
      fullTimeRegex = RegExp('' + timeRegex.source + ("(?:" + tzRegex.source + "?(?:\\[(" + ianaRegex.source + ")\\])?)?")),
      vz = RegExp("(?:T" + fullTimeRegex.source + ")?"),
      isoWeekFields = extractISOFields("weekYear", "weekNumber", "weekDay"),
      isoOrdinalFields = extractISOFields("year", "ordinal"),
      resultz = RegExp(timeRegex.source + " ?(?:" + tzRegex.source + "|(" + ianaRegex.source + "))?"),
      optSpaceTimeRegex = RegExp("(?: " + resultz.source + ")?");
    function intOrUndef(obj, key, defaultVal) {
      const val = obj[key];
      return isUndefined(val) ? defaultVal : parseInteger(val);
    }
    function extractISOOffset(paramz, idx) {
      return [{
        hours: intOrUndef(paramz, idx, 0),
        minutes: intOrUndef(paramz, idx + 1, 0),
        seconds: intOrUndef(paramz, idx + 2, 0),
        milliseconds: parseMillis(paramz[idx + 3])
      }, null, idx + 4];
    }
    function ianaZoneFromMatch(captures, paramq) {
      const isZulu = !captures[paramq] && !captures[paramq + 1],
        offsetMins = signedOffset(captures[paramq + 1], captures[paramq + 2]);
      return [{}, isZulu ? null : FixedOffsetZone.instance(offsetMins), paramq + 3];
    }
    function extractISOTimezone(captures, paramz) {
      return [{}, captures[paramz] ? IANAZone.create(captures[paramz]) : null, paramz + 1];
    }
    RegExp("^T?" + timeRegex.source + "$");
    combineRegex(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, vz), combineRegex(/(\d{4})-?W(\d\d)(?:-?(\d))?/, vz), combineRegex(/(\d{4})-?(\d{3})/, vz), combineRegex(fullTimeRegex), parse(function parseHelperc(paramz, dateIdx) {
      return [{
        year: intOrUndef(paramz, dateIdx),
        month: intOrUndef(paramz, dateIdx + 1, 1),
        day: intOrUndef(paramz, dateIdx + 2, 1)
      }, null, dateIdx + 3];
    }, extractISOOffset, ianaZoneFromMatch, extractISOTimezone), parse(isoWeekFields, extractISOOffset, ianaZoneFromMatch, extractISOTimezone), parse(isoOrdinalFields, extractISOOffset, ianaZoneFromMatch, extractISOTimezone), parse(extractISOOffset, ianaZoneFromMatch, extractISOTimezone), parse(extractISOOffset);
    combineRegex(/(\d{4})-(\d\d)-(\d\d)/, optSpaceTimeRegex), combineRegex(resultz), parse(extractISOOffset, ianaZoneFromMatch, extractISOTimezone);
    const orderedUnits = {
        weeks: {
          days: 7,
          hours: 168,
          minutes: 10080,
          seconds: 604800,
          milliseconds: 604800000
        },
        days: {
          hours: 24,
          minutes: 1440,
          seconds: 86400,
          milliseconds: 86400000
        },
        hours: {
          minutes: 60,
          seconds: 3600,
          milliseconds: 3600000
        },
        minutes: {
          seconds: 60,
          milliseconds: 60000
        },
        seconds: {
          milliseconds: 1000
        }
      },
      DAYS_PER_YEAR = 365.2425,
      DAYS_PER_MONTH = 30.436875,
      casualMatrix = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
    casualMatrix.slice(0).reverse(), Symbol["for"]("nodejs.util.inspect.custom"), Symbol["for"]("nodejs.util.inspect.custom");
    const nbspRegex = "[ " + globalThis.String.fromCharCode(160) + "]";
    new RegExp(nbspRegex, "g");
    Symbol["for"]("nodejs.util.inspect.custom");
    const STATE_STORAGE_KEY = "cupidbotState";
    function reverseObfuscateString(input) {
      let reversed = input.split('').reverse().join('');
      return reversed = reversed.replace(/\/\/(.)/g, (vz, char) => char.toUpperCase()), reversed = reversed.replace(/\//g, "."), reversed;
    }
    const CURRENT_BG_SCRIPT_KEY = "currentBackgroundScript",
      PENDING_BG_SCRIPT_KEY = "pendingBackgroundScript",
      CURRENT_CONTENT_SCRIPT_KEY = "currentContentScript",
      PENDING_CONTENT_SCRIPT_KEY = "pendingContentScript",
      CURRENT_POPUP_SCRIPT_KEY = "currentPopupScript",
      PENDING_POPUP_SCRIPT_KEY = "pendingPopupScript",
      CURRENT_INJECTED_SCRIPT_KEY = "currentInjectedScript",
      PENDING_INJECTED_SCRIPT_KEY = "pendingInjectedScript";
    async function getCurrentBgScript() {
      return await getStorageValue("currentBackgroundScript");
    }
    async function getPendingBgScript() {
      return await getStorageValue("pendingBackgroundScript");
    }
    async function setPendingBgScript(data) {
      await setStorageValue("pendingBackgroundScript", data);
    }
    async function setPendingContentScript(data) {
      await setStorageValue("pendingContentScript", data);
    }
    async function setPendingPopupScript(data) {
      await setStorageValue("pendingPopupScript", data);
    }
    async function setPendingInjectedScript(data) {
      await setStorageValue("pendingInjectedScript", data);
    }
    async function getPlatformConfigs(appFilter = null) {
      const values = globalThis.Object.values(PLATFORM_CONFIGS).filter(cfg => undefined !== cfg);
      return appFilter ? values.filter(cfg => cfg.app === appFilter) : values;
    }
    function matchesAppDomain(url, config) {
      return url.includes(config.appDomain);
    }
    function matchesChatDomain(url, config) {
      return url.includes(config.chatDomain);
    }
    async function isAppUrl(url, appFilter = null) {
      const valz = await getPlatformConfigs(appFilter);
      for (const cfg of valz) if (matchesAppDomain(url, cfg)) return true;
      return false;
    }
    async function getPlatformConfigForUrl(url) {
      const configs = await getPlatformConfigs();
      for (const config of configs) if (matchesAppDomain(url, config)) return config;
      return null;
    }
    async function isExcludedUrl(url, appFilter = null) {
      const platformCfg = await getPlatformConfigForUrl(url);
      return !platformCfg || platformCfg.excluded.some(pattern => url.includes(pattern));
    }
    async function getAppTabs(app = {}) {
      const {
          app: app = null,
          forClosing: forClosing = false,
          chatDomainOnly: chatDomainOnly = false
        } = app,
        vz = await globalThis.chrome.tabs.query({}),
        appTabs = [];
      for (const tab of vz) {
        if (!(null == tab ? undefined : tab.id) || !(null == tab ? undefined : tab.url)) continue;
        const tabUrl = tab.url.toLowerCase();
        if (!tabUrl.startsWith("chrome") && (await isAppUrl(tabUrl, app)) && (!forClosing || !(await isExcludedUrl(tabUrl, app)))) {
          if (chatDomainOnly) {
            const platformCfg = await getPlatformConfigForUrl(tabUrl);
            if (!platformCfg || !matchesChatDomain(tabUrl, platformCfg)) continue;
          }
          appTabs.push(tab);
        }
      }
      return appTabs;
    }
    async function createAppTab(platformCfg) {
      var stored;
      const storageKey = "createdAppTabs",
        vz = null !== (stored = await getStorageValue("createdAppTabs")) && undefined !== stored ? stored : {},
        existingTabId = vz[platformCfg.app];
      if (existingTabId) {
        try {
          await globalThis.chrome.tabs.remove(existingTabId);
        } catch (errz) {}
        delete vz[platformCfg.app];
      }
      const newTab = await globalThis.chrome.tabs.create({
        uatformCfg.restartURL
      });
      vz[platformCfg.app] = newTab.id, await setStorageValue("createdAppTabs", vz);
    }
    const clearRestartLock = new Set();
    async function clearAndRestartAppTabs(appName, preservedTabId = null) {
      const val13 = await async function helperz(paramz) {
        return PLATFORM_CONFIGS[paramz];
      }(appName);
      if (globalThis.console.log("clearAndRestartAppTabs", appName, val13), val13 && !clearRestartLock.has(appName)) {
        clearRestartLock.add(appName);
        try {
          var chatTabs = await getAppTabs({
              app: appName,
              forClosing: true,
              chatDomainOnly: true
            }),
            otherTabs             app: appName,
              forClosing: true
            });
          const allTabs = await globalThis.chrome.tabs.query({}),
            restartURL = val13.restartURL;
          if (0 == chatTabs.length) return void (otherTabs.length > 0 && restartURL && (globalThis.console.log("No chat domain tabs, creating new tab with restartURL", restartURL), await createAppTab(val13)));
          preservedTabId || chatTabs.length != allTabs.length || (preservedTabId = chatTabs[0].id);
          for (const tab of chatTabs) preservedTabId && tab.id == preservedTabId || (globalThis.console.log("Closed chat domain tab", tab.id, preservedTabId, tab.url), await globalThis.chrome.tabs.remove(tab.id));
          chatTabs = await getAppTabs({
            app: appName,
            forClosing: true,
            chatDomainOnly: true
          }), restartURL && 0 == chatTabs.length ? await createAppTab(val13) : preservedTabId && (await globalThis.chrome.tabs.reload(preservedTabId));
        } finally {
          clearRestartLock["delete"](appName);
        }
      }
    }
    async function reloadContentScripts() {
      const appKeys = await async function getAppsWithTabs(appFilter = null, forClosing = false) {
        const tabs = await getAppTabs({
            app: appFilter,
            forClosing: forClosing
          }),
          appSet = new Set();
        for (const resultz of tabs) {
          const valz = await getPlatformConfigForUrl(resultz.url);
          appSet.add(valz.app);
        }
        return globalThis.Array.from(appSet);
      }(null, true);
      for (const appKey of appKeys) await clearAndRestartAppTabs(appKey);
    }
    async function debuggerEval(code, options = {}) {
      const debugTarget = (await globalThis.chrome["debugger"].getTargets()).find(itemz => itemz.url === "chrome-extension://" + globalThis.chrome.runtime.id + "/background.js");
      try {
        await globalThis.chrome["debugger"].attach({
          targetId: debugTarget.id
        }, "1.3");
      } catch (errz) {}
      return await globalThis.chrome["debugglobalThis.chrome["debugger"].sendCommand({
        targetId: debugTarget.id
      }, function helperz() {
        return reverseObfuscateString("etaulave/emitnur//");
      }(), {
       
        ...options
      });
    }
    async function appL
    async function appLog(app, ...args) {
      const logPrefix = "LOG:";
      globalThis.console.log("LOG:", ...args), appendToAppLogs(app, ["LOG:", ...args]);
    }
    async function appError(app, ...args) {
      const prefix = "ERROR:";
      globalThis.console.error("ERROR:", ...args), appendToAppLogs(app, ["ERROR:", ...args]);
    }
    async function appendToAppLogs(app, logArgs) {
      const valz = function helperz() {
          const stackLines = new Error().stack.split("\n");
          for (let lineIdx = 3; lineIdx < stackLines.length; lineIdx++) {
            const match = stackLines[lineIdx].match(/(?:\s+at\s+|@)(.*?)(?::\d+){1,2}$/);
            if (match && match[1]) return match[1].split("/").pop();
          }
          return "unknown";
        }(),
        logStr = logArgs.map(entry => "object" == typeof entry ? safeJSON.stringify(entry) : entry).join(" "),
        logLine = "[" + new globalThis.Date().toISOString() + " - " + valz + "] " + logStr,
        resultz = app + "Logs",
        newLogs = (await getStorageOrLocal(resultz, '')) + logLine + "\n\n",
        paramz = function helperz(paramz) {
          return 1024 * paramz * 1024 / 2;
        }(IS_DEV ? 1 : 2);
      if (newLogs.length > paramz) {
        const trimmedLogs = newLogs.slice(newLogs.length - paramz);
        await setStorageOrLocal(resultz, trimmedLogs);
      } else await setStorageOrLocal(resultz, newLogs);
    }
    const safeJSON = {
      stringify: (value, ref = null, vz = null) => JSON_REF.stringify(value, (key, replacerValue) => ('' === key || ("function" == typeof ref ? undefined === (replacerValue = ref(key, replacerValue)) && (replacerValue = null) : globalThis.Array.isArray(ref) ? (undefined === replacerValue && (replacerValue = null), replacerValue = ref.includes(key) ? replacerValue : undefined) : undefined === replacerValue && (replacerValue = null)), replacerValue), vz),
      parse: JSON_REF.parse
    };
    function trimStorageValue(trimmedVal, maxLen = 1000) {
      if (globalThis.Array.isArray(trimmedVal)) {
        let trimmed = trimmedVal;
        return trimmedVal.length > maxLen && (trimmed = trimmedVal.slice(0, maxLen), globalThis.console.log("truncated array in trimLocalStorageValue", trimmed)), trimmed.map(elem => trimStorageValue(elem, maxLen));
      }
      if (null !== trimmedVal && "object" == typeof trimmedVal) {
        const result = {};
        for (const prop in trimmedVal) trimmedVal.hasOwnProperty(prop) && (result[prop] = trimStorageValue(trimmedVal[prop], maxLen));
        return result;
      }
      return trimmedVal;
    }
    function setStorageOrLocal(key, value) {
      return isChromeStorage() ? setStorageValue(key, value) : function dateHelperc(key, value) {
        const trimmed = trimStorageValue(value);
        globalThis.localStorage.setItem(key, safeJSON.stringify(trimmed));
      }(key, value);
    }
    function getStorageOrLocal(key, defaultVal = null) {
      return isChromeStorage() ? getStorageValue(key, defaultVal) : function dateHelperd(paramz, paramz = null) {
        const resultz = globalThis.localStorage.getItem(paramz);
        return resultz ? safeJSON.parse(resultz) : paramz;
      }(key, defaultVal);
    }
    const storageCache = {},
      NO_CACHE_KEYS = new Set(["networkLog", "shouldLog", "currentContentScript", "pendingContentScript", "currentInjectedScript", "pendingInjectedScript", "currentPopupScript", "pendingPopupScript", "dynamicInterceptions"]);
    function shouldCacheKey(storageKey) {
      return !isServiceWorker() && !storageKey.endsWith("Logs") && !NO_CACHE_KEYS.has(storageKey);
    }
    async function setStorageValue(key, value, useSync = false) {
      undefined === value && (value = null), useSync ? await globalThis.chrome.storage.sync.set({
        [key]: value
      }) : (shouldCacheKey(key) && (storageCache[key] = value), await globalThis.chrome.stoet({
        [key]: value
      }));
    }
    async function getStorageValue(storageKey, defaultVal = null, paramz = false) {
      var resultz;
      return null !== (resultz = await (ar syncResult, localResult, localResult;
        if (paramz) ret      if (paramz) return null === (syncResult = await globalThis.chrome.storage.sync.get({
          [storageKey]: defaultVal
        })) || undefined === syncResult ? undefined : syncResult[storageKey];
        if (shouldCacheKey(storageKey)) {
          if (undefined === storageCache[storageKey]) {
            const cachedVal = null === (localResult = await globalThis.chrome            [storageKey]: defaultVal
            })) || undefined === localResult ? undefined : localResult[storageKey];
            return storageCache[storageKey] = cachedVal, cachedVal;
          }
          return storageCache[storageKey];
        }
        return null === (localResult = await globalThis.chrome.storage.local.get({
          [storageKey]: defaultVal
        })) || undefined === localResult ? undefined : localResult[storageKey];
      })()) && undefined !== resultz ? resultz : defaultVal;
    }
    function sleep(ms) {
      if (!(ms <= 0)) return new globalThis.Promise(itemz => globalThis.setTimeout(itemz, ms));
    }
    function randomFloat(max, min = 0) {
      return globalThis.Math.random() * globalThis.Math.abs(max - min) + globalThis.Math.min(max, min);
    }
    function randomInt(max, min = 0) {
      return globalThis.Math.floor(randomFloat(max, min));
    }
    function ran
    }
    function randomDelay(maxMs, min = 0) {
      if (!(maxMs <= 0 && min <= 0)) return sleep(randomFloat(maxMs, min));
    }
    let isChromeStorageAvailable = null;
    function isChromeStorage() {
      var undefined;
      return null !== isChromeStorageAvailable || (isChromeStorageAvailable = "undefined" != typeof globalThis.chrome && undefined !== (null === (undefined = globalThis.chrome.storage) || undefined === undefined ? undefined : undefined.local)), isChromeStorageAvailable;
    }
    async function getState() {
      return await getStorageOrLocal("state", {});
    }
    async function getStateValue(key) {
      const valz = await getState();
      return valz ? valz[key] : null;
    }
    function extractDigits(str) {
      if (!str) return null;
      const match = str.match(/\d+/g);
      return match ? parseInt(match.join(''), 10) : null;
    }
    const HTML_TAG_REGEX = /<.*?>/g;
    function stripHtml(input) {
      if (isServiceWorker() || !input) return input;
      if ("string" != typeof input) return input;
      return input = function helperz(str) {
        return str.replace(HTML_TAG_REGEX, '');
      }(input = input.trim()), function cleanHelper(paramz) {
        return safeJSON.parse(safeJSON.stringify(paramz));
      }(new DOMParser().parseFromString(input, "text/html").documentElement.textContent);
    }
    async function normalizeProfile(app) {
      return function helperz(platform, rawProfile) {
        var undefined, undefined, undefined, vz, undefined, undefined, undefined, undefined, undefined, vz, vz, undefined, undefined, undefined, undefined;
        if (!rawProfile || !platform) return null;
        var normalizedResult = null;
        if (platform == PLATFORMS.bumble || platform == PLATFORMS.badoo) {
          const photoUrl = rawProfile.profile_photo ? rawProfile.profile_photo.large_url : null;
          let strz = '',
            profileText = '',
            city = null === (undefined = rawProfile.city) || undefined === undefined ? undefined : undefined.name;
          (rawProfile.profile_fields || []).forEach(field => {
            "aboutme_text" == field.id && (strz = field.display_value || ''), "location" != field.id || city || (city = field.display_value || ''), profileText += " " + (field.display_value || '');
          }), profileText += " " + (rawProfile.profile_summary && rawProfile.profile_summary.primary_text || ''), profileText += " " + (rawProfile.profile_summary && rawProfile.profilofile.profile_summary.secondary_text || ''), normalizedResult = {
            accountID: rawProfile.user_id,
            name: rawProfile.name,
            gender: rawProfile.gender,
            imageURL: photoUrl ? "https:" + photoUrl : null,
            DOB: new globalThis.Date(rawProfile.dob).getTime() / 1000,
            city: city,
            countryCode: rawProfile.country ? rawProfile.country.iso_code : null,
            age: rawProfile.age,
            distance: extractDigits(rawProfile.distance_short),
            bio: stripHtml(strz),
            profileText: stripHtml(profileText)
          };
        } else {
          if (platform == PLATFORMS.tinder) {
            var DOB = null,
              age = null;
            rawProfile.birth_date && (DOB = new globalThis.Date(rawProfile.birth_date).getTime() / 1000, age = function dateHelpere(birthDate) {
              const birth = new globalThis.Date(birthDate),
                resultz = new globalThis.Date();
              let resultz = resultz.getFullYear() - birth.getFullYear();
              return (resultz.getMonth() < birth.getMonth() || resultz.getMonth() === birth.getMonth() && resultz.getDate() < birth.getDate()) && resultz--, resultz;
            }(rawProfile.birth_date));
            let bioText = rawProfile.bio || '';
            (rawProfile.selected_descriptors || []).forEach(descriptor => {
              (descriptor.choice_selections || []).forEach(choice => {
                bioText += " " + (choice.name || '');
              });
            }), (rawProfile.jobs || []).forEach(itemz => {
              bioText += " " + (itemz.title && itemz.title.name || ''), bioText += " " + (itemz.company && itemz.company.name || '');
            });
            var cityOrTz = null !== (vz = null === (undefined = null === (undefined = rawProfile.pos_info) || undefined === undefined ? undefined : undefined.city) || undefined === undefined ? undefined : undefined.name) && undefined !== vz ? vz : null === (undefined = rawProfile.pos_info) || undefined === undefined ? undefined : undefined.timezone;
            cityOrTz = cityOrTz ? null === (undefined = cityOrTz.split("/")[1]) || undefined === undefined ? undefined : undefined.replaceAll("_", " ") : null, normalizedResult = {
              accountID: rawProfile._id,
              name: rawProfile.name,
              gender: rawProfile.gender,
              imageURL: null === (undefined = null == rawProfile ? undefined : rawProfile.photos[0]) || undefined === undefined ? undefined : undefined.url,
              DOB: DOB,
              city: cityOrTz,
              countryCode: null === (undefined = null === (undefined = rawProfile.pos_info) || undefined === undefined ? undefined : undefined.country) || undefined === undefined ? undefined : undefined.cc,
              age: age,
              distance: null !== (vz = null !== (vz = rawProfile.distance_mi) && undefined !== vz ? vz : rawProfile.distance_km) && undefined !== vz ? vz : rawProfile.distance,
              bio: stripHtml(rawProfile.bio),
              profileText: stripHtml(bioText)
            };
          } else {
            if (platform == PLATFORMS.snapchat) {
              const bitmojiSelfie = rawProfile.bitmoji_selfie_id,
                bitmojiAvatar = rawProfile.bitmoji_avatar_id,
                bitmojiUrl = bitmojiSelfie && bitmojiAvatar ? "https://sdk.bitmoji.com/render/panel/" + bitmojiSelfie + "-" + bitmojiAvatar + "-ve.webp" : null;
              normalizedResult = {
                accountID: rawProfile.user_id,
            wProfile.display_name || rawProfile.displayName || rawProfile.display || rawProfile.name,
                imageURL: bitmojiUrl,
                username: rawProfile.mutable_username || rawProfile.mutableUsername || rawProfile.username
              };
            } else {
              if (platform == PLATFORMS.reddit) normalizedResult = {
                accountID: rawProfile.userId,
                name: rawProfile.displayName || rawProfile.name,
                username: rawProfile.rawDisplayName
              };else {
                if (platform == PLATFORMS.instagram) normalizedResult = {
                  accountID: rawProfile.idStr,
                  name: rawProfile.full_name,
                  username: rawProfile.username,
                  imageURL: rawProfile.profile_pic_url
                };else {
                  if (platform == PLATFORMS.x) normalizedResult = {
                    accountID: rawProfile.id_str,
                    name: rawProfile.name,
                    username: rawProfile.screen_name,
                    imageURL: rawProfile.profile_image_url_https || rawProfile.profile_image_url
                  };else {
                    if (platform == PLATFORMS.whatsapp) normalizedResult = {
                      accountID: null === (undefined = rawProfile.id) || undefined === undefined ? undefined : undefined._serialized,
                      name: rawProfile.pushname || rawProfile.name || rawProfile.shortName,
                      username: null === (undefined = rawProfile.id) || undefined === undefined ? undefined : undefined.user
                    };else {
                      if (platform == PLATFORMS.telegram) {
                        function helperz(arg11) {
                          var undefined, activeUsername;
                          const name = (arg11.firstName || '') + (arg11.lastName ? " " + arg11.lastName : '') || (null === (activeUsername = null === (undefined = arg11.usernames) || undefined === undefined ? undefined : undefined.find(itemz => itemz.isActive)) || undefined === activeUsername ? undefined : activeUsername.username) || arg11.phoneNumber;
                          return null == name ? undefined : name.trim();
                        }
                        normalizedResult = {
                          accountID: rawProfile.id,
                          name: helperz(rawProfile),
                          username: null === (undefined = null === (undefined = rawProfile.usernames) || undefined === undefined ? undefined : undefined.find(itemz => itemz.isActive)) || undefined === undefined ? undefined : undefined.username
                        };
                      } else platform == PLATFORMS.grindr ? normalizedResult = {
                        accountID: rawProfile.profileId,
                        name: rawProfile.name || rawProfile.displayName
                      } : platform == PLATFORMS.gvoice ? normalizedResult = {
                        accountID: "t." + rawProfile.number,
                        name: rawProfile.name,
                        email: rawProfile.email,
                        phone: rawProfile.number
                      } : platform == PLATFORMS.tiktok ? normalizedResult = {
                        accountID: rawProfile.uid,
                        name: rawProfile.nickName,
                        username: rawProfile.uniqueId
                      } : platform == PLATFORMS.discord ? normalizedResult = {
                        accountID: rawProfile.id,
                        name: rawProfile.globalName,
                        username: rawProfile.username,
                        imageURL: rawProfile.id && rawProfile.avatar ? "https://cdn.discordapp.com/avatars/" + rawProfile.id + "/" + rawProfile.avatar + ".webp?size=100" : null
                      } : platform == PLATFORMS.fetlife ? normalizedResult = {
                        accountID: rawProfile.id,
                        name: rawProfile.nickname,
      ame,
                        username: rawProfile.nickname
                      } : platform == PLATFORMS.pornhub ? normalizedResult = {
                        accountID: rawProfile.profileId,
                        name: rawProfile.profileUsername,
    name: rawProfile.profileUsername
                      } : platform == PLATFORMS.bluesky && (normalizedResult = {
                        accountID: rawProfile.did,
                        name: rawProfile.handle,
                        username: rawProfile.handle
                      });
                    }
                  }
                }
              }
            }
          }
        }
        return normalizedResult;
      }(app, await getStoredProfile(app));
    }
    async function getStoredProfile(app) {
      return await getStorageOrLocal(app + "Profile", null);
    }
    function isDatingApp(app) {
      return DATING_APPS.includes(app);
    }
    async function getCurrentUser() {
      return (await getState()).user;
    }
    function isServiceWorker() {
      return "undefined" == typeof globalThis.document;
    }
    function getScriptVersion() {
      return function helperz() {
        var undefined;
        return "undefined" == typeof globalThis.window ? null : null === (undefined = null === globalThis || undefined === globalThis ? undefined : globalThis._bgData) || undefined === undefined ? undefined : undefined.version;
      }() || function helperz() {
        var undefined;
        return null === (undefined = null === globalThis || undefined === globalThis ? undefined : globalThis._scriptData) || undefined === undefined ? undefined : undefined.version;
      }();
    }
    async function buildAppContext(app) {
      var undefined, undefined, undefined;
      const accessToken = await getStorageOrLocal("cupidbotState", {}),
        accessTokenb = await getState(),
        accountState = (await getCurrentUser(), await normalizeProfile(app), await getStateValue(app));
      let obj = {},
        subscriptionProduct = null;
      const subscriptionMap = accessTokenb.subscriptionMap;
      return obj = {
        manifestVersion: isChromeStorage() ? getManifestVersion() : "100.0.0",
        version: isChromeStorage() ? getScriptVersion() : "100.0.0",
        accessToken: null,
        accountID: null,
        isFemale: null,
        product: null,
        app: app,
        isOF: IS_OFM,
        brand: BRAND_ID,
        creator_id: null,
        acc_id: null,
        preset_id: null,
        presetName: null
      }, accessTokenb && (obj.accessToken = accessTokenb.accessToken, isDatingApp(app) ? subscriptionProduct = IS_OFM ? (null === (undefined = null == subscriptionMap ? undefined : subscriptionMap["ofm-da"]) || undefined === undefined ? undefined : undefined.isAuthorized) ? "ofm-da" : (null === (undefined = null == subscriptionMap ? undefined : subscriptionMap["ofm-da-swiper"]) || undefined === undefined ? undefined : undefined.i0x1fc168.isAuthorized) ? "ofm-da-swiper" : (null === (undefined = null == subscriptionMap ? undefined : subscriptionMap["ofm-webcam"]) || undefined === undefined ? undefined : undefined.isAuthorized) ? "ofm-webcam" : "ofm-da" : "dates" : app == PLATFORMS.snapchat ? subscriptionProduct = "ofm-snap" : app == PLATFORMS.reddit ? subscriptionProduct = "ofm-reddit" : app == PLATFORMS.instagram ? subscriptionProduct = "ofm-ig" : app == PLATFORMS.x ? subscriptionProduct = "ofm-x" : _0 = "ofm-x" : app == PLATFORMS.whatsapp ? subscriptionProduct = "ofm-wa" : app == PLATFORMS.telegram ? subscriptionProduct = "ofm-tg" : app == PLATFORMS.grindr ? subscriptionProduct = "ofm-grindr" : app == PLATFORMS.gvoice ? subscriptionProduct = "ofm-gvoice" : app == PLATFORMS.tiktok ? subscriptionProduct = "ofm-tiktok" : app == PLATFORMS.discord ? subscriptionProduct = "ofm-discord" : app == PLATFORMS.fetlife ? subscriptionProduct = "ofm-fetlife" : app == PLATFORMS.pornhub ? subscriptionProduct = "ofm-pornhub" : app == PLATFORMS.bluesky && (subscriptionProduct = "ofm-bluesky")), accountState && (obj.accountID = accountState.accountID, obj.isFemale = accountState.isFemale, accountState.creator_id && (obj.creator_id = accountState.creator_id), accountState.id && (obj.acc_id = accountState.id), accountState.preset_id && (obj.preset_id = accountState.preset_id), accountState.presetName && (obj.presetName = accountState.presetName)), subscriptionProduct && (obj.product = subscriptionProduct), isChromeStorage() || (obj.accessToken = accessToken.accessToken), obj;
    }
    function buildQueryString(params) {
      if (!params || 0 == globalThis.Object.keys(params).length) return '';
      return params = globalThis.Object.fromEntries(globalThis.Object.entries(params).filter(([k, v]) => null != v)), "?" + new globalThis.URLSearchParams(params).toString();
    }
    function getCurrentApp() {
      var loc;
      return isServiceWorker() ? "background" : function helperz(href) {
        if (!href) return null;
        for (const cfg of globalThis.Object.values(PLATFORM_CONFIGS)) if (href.includes(cfg.appDomain)) return cfg.app;
        return null;
      }(null === (loc = null === globalThis || undefined === globalThis ? undefined : globalThis.location) || undefined === loc ? undefined : loc.href);
    }
    function isTruthy(apiValue) {
      return !(!apiValue || null == apiValue || null == apiValue) && ("boolean" == typeof apiValue ? apiValue : "string" == typeof apiValue ? apiValue.trim().length > 0 : globalThis.Array.isArray(apiValue) ? 0 != apiValue.length && apiValue.every(isTruthy) : "object" == typeof apiValue ? globalThis.Object.keys(apiValue).length > 0 : "number" == typeof apiValue ? 0 != apiValue : !!apiValue);
    }
    function validateApiUrl(value) {
      function getCharCode(cbk) {
        return cbk.charCodeAt(0);
      }
      const reversedUrl = function helperz(url) {
        let parts = url.split(''),
          arr = [],
          listz = parts.length;
        for (; listz--;) arr.push(parts[listz]);
        return arr = arr.map((listz, listz) => arr[arr.length - 1 - listz] ? arr[listz] : ''), arr = arr.filter(itemz => true), arr.reduce((listz, listz) => listz + listz, '');
      }(value);
      return !value[39] || value[40] ? (globalThis.console.log(40), false) : getCharCode(reversedUrl[34]) ** 2 != 3364 ? (globalThis.console.log(34), false) : getCharCode(reversedUrl[29]) + 2 - 5 + 5 - 10 - 100 + 3 - 100 + 1000 != 907 ? (globalThis.console.log(29), false) : getCharCode(reversedUrl[27]) / 2 != 50 ? (globalThis.console.log(27), false) : 98 != getCharCode(reversedUrl[26]) ? (globalThis.console.log(26), false) : 10 * getCharCode(reversedUrl[24]) != 1160 ? (globalThis.console.log(24), false) : getCharCode(reversedUrl[23]) / 3 != 15 ? (globalThis.console.log(23), false) : getCharCode(reversedUrl[19]) - 0 + 9 - 0 + 9 - 9 - 9 + 9 + 9 != 75 ? (globalThis.console.log(19), false) : getCharCode(reversedUrl[16]) - 1 + 4 - 4 + 2 - 4 - 4 - 5 - 7 - 5 - 6 + 4 + 5 - 6 - 2 - -7 + 1 != 25 ? (globalThis.console.log(16), false) : getCharCode(reversedUrl[13]) - 1 + 4 - 4 + 2 - 4 - 4 - 5 - 7 - 5 - 6 + 4 + 5 - 6 - 2 - -7 + 1 != 25 ? (globalThis.console.log(13), false) : getCharCode(reversedUrl[11]) - 1 + 4 - 4 + 2 - 4 - 4 - 5 - 7 - 5 - 6 + 4 + 5 - 6 - 2 - -7 + 1 != 25 ? (globalThis.console.log(11), false) : getCharCode(reversedUrl[3]) - 1 + 4 - 4 + 2 - 4 - 4 - 5 - 7 - 5 - 6 + 4 + 5 - 6 - 2 - -7 + 1 == 25 || (globalThis.console.log(3), false);
    }
    async function sendFetchMessage(options, options) {
      return await globalThis.chrome.runtime.sendMessage({
        action: "fetch",
        url: options,
        options: options
      });
    }
    const rateLimitStrikes = {};
    function incrementRateLimitStrikes(endpoint, maxStrikes = 10) {
      const valz = randomInt(1, 3);
      rateLimitStrikes[endpoint] = globalThis.Math.min((rateLimitStrikes[endpoint] || 0) + valz, maxStrikes);
    }
    async function apiFetch(apiEndpoint, method, callback, extraParams = {}, timeout = 60000, baseUrl = null, useContentFetch = false) {
      const refc = null != baseUrl ? baseUrl : API_BASE_URL;
      timeout = IS_DEV ? 99999 : timeout;
      const strikeKey = "customFetch-" + apiEndpoint;
      await async function helperz(cbl, cbm = null) {
        if (IS_DEV) return;
        const valz = rateLimitStrikes[cbl] || 0;
        if (valz) {
          const valz = randomInt(800, 1500) * valz ** 2;
          null == cbm || cbm(valz), globalThis.console.log("Rate limited for " + cbl + " " + valz + ", waiting " + valz / 1000 + " seconds"), await sleep(valz);
        }
      }(strikeKey);
      let fetchUrl = refc + "/api/" + apiEndpoint,
        body = {},
        resultz = {
          ...(await buildAppContext(callback)),
          ...extraParams
        };
      return "GET" == method ? fetchUrl = '' + fetchUrl + buildQueryString(resultz) : body = {
        body: safeJSON.stringify(resultz)
      }, appLog(callback, "fetching " + apiEndpoint, fetchUrl, method, resultz), new globalThis.Promise(async (asyncResultz, asyncResultz) => {
        let vz;
        const valz = {
          method: method,
          headers: {
            ["Content-Type"]: "application/json"
          },
          ...body
        };
        vz = useContentFetch ? sendFetchMessage(fetchUrl, valz) : globalThis.fetch(fetchUrl, valz);
        try {
          const val161 = globalThis.setTimeout(() => {
              incrementRateLimitStrikes(strikeKey, 10), appError(callback, apiEndpoint + " NETWORK TIMEOUT", timeout), asyncResultz(new Error("Network request timed out"));
            }, timeout),
            fetchResponse = await vz;
          globalThis.clearTimeout(val161);
          const val118 = useContentFetch ? fetchResponse.json : await fetchResponse.json();
          if (appLog(callback, "RESPONSE " + apiEndpoint, fetchResponse.status, val118), 429 == fetchResponse.status) throw incrementRateLimitStrikes(strikeKey, 10), new Error("Rate limited");
          if (500 == fetchResponse.status) throw incrementRateLimitStrikes(strikeKey, 10), new Error("Server error");
          if (400 == fetchResponse.status) throw incrementRateLimitStrikes(strikeKey, 50), new Error("Bad request");
          if (200 != fetchResponse.status || !fetchResponse.ok) throw fetchResponse.ok ? (incrementRateLimitStrikes(strikeKey, 10), new Error("Invalid network status code: " + fetchResponse.status)) : (incrementRateLimitStrikes(strikeKey, 10), new Error("Network response was not ok"));
          !function errorHelperg(error16) {
            rateLimitStrikes[error16] = globalThis.Math.max((rateLimitStrikes[error16] || 0) - 1, 0);
          }(strikeKey), asyncResultz(validateApiUrl("https://cupidbot-382905.uc.r.appspot.com") ? val118 : null);
        } catch (errz) {
          incrementRateLimitStrikes(strikeKey, 10), appError(callback, apiEndpoint + " NETWORK ERROR", errz), asyncResultz(errz);
        }
      });
    }
    async function decryptScript(scriptData) {
      const partsb = scriptData.url.split('').filter((listz, listz) => listz % 3 == 0).slice(0, 32).join('');
      return await async function helperz(paramz, paramz) {
        const valz = Uint8Array.from(globalThis.atob(paramz), itemz => itemz.charCodeAt(0)),
          iv = valz.subarray(0, 12),
          vz = valz.subarray(12, 28),
          vz = valz.subarray(28),
          bytes = new Uint8Array(vz.length + vz.length);
        bytes.set(vz, 0), bytes.set(vz, vz.length);
        const textencoder = await crypto.subtle.importKey("raw", new TextEncoder().encode(paramz), {
          name: "AES-GCM"
        }, false, ["decrypt"]);
        try {
          const valz = await crypto.subtle.decrypt({
            name: "AES-GCM",
            iv: iv,
            tagLength: 128
          }, textencoder, bytes);
          return new TextDecoder().decode(valz);
        } catch (errz) {
          throw globalThis.console.error("Decryption failed", errz), errz;
        }
      }(scriptData.scriptText, partsb);
    }
    function decryptArrayBuffer(arrayBuffer) {
      let strz = '';
      const uint8array = new Uint8Array(arrayBuffer),
        resultz = uint8array.byteLength;
      for (let numw = 0; numw < resultz; numw += 8192) strz += globalThis.String.fromCharCode(...uint8array.subarray(numw, numw + 8192));
      return globalThis.btoa(strz);
    }
    let cachedManifestVersion = null;
    function getManifestVersion() {
      return cachedManifestVersion || (cachedManifestVersion = globalThis.chrome.runtime.getManifest().version, cachedManifestVersion);
    }
    function flattenForSentry(obj, maxLength = null) {
      if ("object" != typeof obj) return obj;
      const obji = {};
      for (const vz in obj) {
        const numx = obj[vz];
        "object" == typeof numx || globalThis.Array.isArray(numx) ? obji[vz] = safeJSON.stringify(numx) : obji[vz] = numx;
        const numy = obji[vz];
        maxLength && "string" == typeof numy && numy.length > maxLength && (obji[vz] = numy.slice(0, maxLength) + "...");
      }
      return obji;
    }
    class LogEntry {
      constructor(content, opts, rawData = null, key = null) {
        this.content = content, this.opts = opts, this.rawData = rawData, this.key = key;
      }
      ["createError"](vz) {
        var undefined;
        const syntheticException = null != vz ? vz : new Error(this.content);
        return syntheticException[SENTRY_DEBUG_EVENT_ID] = true, syntheticException.errorData = {
          content: this.content,
          opts: this.opts,
          key: null === (undefined = this.opts) || undefined === undefined ? undefined : undefined.key
        }, syntheticException;
      }
    }
    function createLogEntry(content, opts, keyb, keyc, keyd) {
      const logentry = new LogEntry('' + (keyc ? "[" + content + "] [" + keyc + ":" + opts + "]" : "[" + content + ":" + opts + "]") + (keyb ? " " + keyb : ''), keyd);
      if (keyd.key || (keyd.key = content + ":" + opts), keyd.extra && IS_DEV) {
        const jsonStr = JSON.stringify(keyd.extra, null, 2);
        logentry.content += "\r\n\r\n" + jsonStr;
      }
      return logentry;
    }
    new Map(), new Map();
    function defineHiddenProp(obj, key, value) {
      return globalThis.Object.defineProperty(obj, key, {
        value: value,
        enumerable: false,
        writable: true,
        configurable: true
      }), obj;
    }
    function isEmptyObject(obj) {
      return 0 === globalThis.Object.keys(null != obj ? obj : {}).length;
    }
    function errorFromObject(data, errz = null) {
      if (!data) return data;
      const syntheticExceptionb = errz ? new Error(errz) : new Error();
      for (let strz in data) {
        "message" === strz && errz && (strz = "_message"), defineHiddenProp(syntheticExceptionb, strz, data[strz]);
      }
      return syntheticExceptionb;
    }
    function networkResponseToError(error, errz) {
      return null == error ? null : ("object" != typeof error && (error = {
        networkResponse: error
     omObject(error, errz));
    }
    function isType(value, ...errz) {
      return errz.some(itemz => function errorHelperh(checkVal, typeStr) {
        const strz = itemz => "function" == typeof itemz && itemz.toString().startsWith("class");
        return "promise" === typeStr ? Boolean(checkVal && "function" == typeof checkVal.thenheckVal.then) : "set" === typeStr ? checkVal instanceof Set : "map" === typeStr ? checkVal instanceof Map : "array" === typeStr ? globalThis.Array.isArray(checkVal) : "blob" === typeStr ? checkVal instanceof Blob : "object" === typeStr ? checkVal && "object" == typeof checkVal && null !== checkVal && !globalThis.Array.isArray(checkVal) : "function" === typeStr ? "function" == typeof checkVal && !strz(checkVal) : "class" === typeStr ? strz(checkVal) : "error" === typeStr ? checkVal instanceof Error : typeof checkVal === typeStr;
      }(value, itemz));
    }
    function buildSentryFingerprint({
      app: app,
      origin: origin,
      level: level,
      originalMessage: originalMessage,
      manifestVersion: manifestVersion,
      scriptVersion: scriptVersion,
      accountId: accountId
    }) {
      const arr = [app, origin, level, originalMessage, manifestVersion, scriptVersion, accountId],
        obj = {
          app: app,
          origin: origin,
          level: level,
          originalMessage: originalMessage,
          manifestVersion: manifestVersion,
          scriptVersion: scriptVersion,
          accountId: accountId
        },
        str = arr.join(":");
      return {
        arr: arr,
        obj: obj,
        str: str
      };
    }
    function matchesSentryFilter(fingerprint, filter) {
      for (const resultz in filter) if ("originalMessage" == resultz) {
        if (filter[resultz] && !fingerprint.originalMessage.includes(filter[resultz])) return false;
      } else {
        if (filter[resultz] !== fingerprint[resultz]) return false;
      }
      return true;
    }
    const SENTRY_IGNORED_FILTERS = [{
        origin: SCRIPT_ORIGINS.ui,
        level: LOG_LEVELS.error,
        originalMessage: "Extension context invalidated."
      }, {
        origin: SCRIPT_ORIGINS.loop,
        level: LOG_LEVELS.error,
        originalMessage: "Could not establish connection. Receiving end does not exist."
      }, {
        origin: SCRIPT_ORIGINS.loop,
        level: LOG_LEVELS.error,
        originalMessage: "A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received"
      }, {
        app: "snapchat",
        origin: SCRIPT_ORIGINS.sdk,
        level: LOG_LEVELS.error,
        originalMessage: "DUPLICATEREQUEST"
      }, {
        app: "snapchat",
        origin: SCRIPT_ORIGINS.sdk,
        level: LOG_LEVELS.error,
        originalMessage: "INTERNALERROR"
      }, {
        app: "instagram",
        origin: SCRIPT_ORIGINS.sdk,
        level: LOG_LEVELS.error,
        originalMessage: "login_required"
      }, {
        app: "instagram",
        origin: SCRIPT_ORIGINS.sdk,
        level: LOG_LEVELS.error,
        originalMessage: "checkpoint_required"
      }, {
        level: LOG_LEVELS.error,
        originalMessage: "FILE_ERROR_NO_SPACE (ChromeMethodBFE: 3::WritableFileAppend::8)"
      }],
      sentryFingerprints = {
        get: async () => await getStorageValue("sentryFingerprints", {}),
        async ["set"](vz) {
          await setStorageValue("sentryFingerprints", vz);
        },
        async ["registerFingerprint"](vz) {
          const resultz = await sentryFingerprints.get();
          resultz[vz] = globalThis.Date.now(), await sentryFingerprints.set(resultz);
        },
        async ["isFingerprintRecent"](vz) {
          const resultz = await sentryFingerprints.get(),
            resultz = resultz[vz];
          if (!resultz) return false;
          return !!(globalThis.Date.now() - resultz < 86400000) || (delete resultz[vz], await sentryFingerprints.set(resultz), false);
        },
        async ["clear"]() {
          await sentryFingerprints.set({});
        }
      };
    let sentryClient = null;
    async function createSentryScope() {
      const sentryscope = new SentryScope(),
        email = await getCurrentUser();
      return sentryscope.setClient(function scopeHelpere() {
        if (null != sentryClient) return sentryClient;
        const integrations = getDefaultIntegrations().filter(itemz => !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(itemz.name));
        return sentryClient = new SentryBrowserClient({
          dsn: SENTRY_DSN,
          transport: makeOfflineTransport(makeFetchTransport),
          transportOptions: {
            shouldStore: (vz, vz, vz) => !(vz > 0)
          },
          stackParser: defaultStackParser,
          integrations: integrations,
          release: getScriptVersion(),
          beforeSend: (vz, vz) => {
            var undefined, vz;
            const strz = "number" == typeof globalThis._sentryContentScriptLineOffset ? globalThis._sentryContentScriptLineOffset : 0,
              strz = "number" == typeof globalThis._sentryBackgroundScriptLineOffset ? globalThis._sentryBackgroundScriptLineOffset : 0,
              strz = "number" == typeof globalThis._sentryPopupScriptLineOffset ? globalThis._sentryPopupScriptLineOffset : 0;
            let flagc = false;
            const lineno = (listz, listz) => listz > listz ? listz - listz : 1;
            if (null === (vz = null === (undefined = vz.exception) || undefined === undefined ? undefined : undefined.values) || undefined === vz || vz.forEach(itemz => {
              var undefined, vz;
              const undefined = null === (undefined = itemz.stacktrace) || undefined === undefined ? undefined : undefined.frames,
                undefined = vz.tags,
                resultz = null == undefined ? undefined : undefined.origin,
                listz = null !== (vz = null == undefined ? undefined : undefined.some(itemz => {
                  var undefined, undefined;
                  return (null === (undefined = itemz.filename) || undefined === undefined ? undefined : undefined.includes("actualInjectedScript.js")) || (null === (undefined = itemz.abs_path) || undefined === undefined ? undefined : undefined.includes("actualInjectedScript.js"));
                })) && undefined !== vz && vz;
              null == undefined || undefined.forEach(frame => {
                var undefined, undefined, undefined, undefined, undefined;
                "<anonymous>" === frame.filename ? ("sdk" === resultz || "sdk_global" === resultz && listz) && (frame.filename = "app:///actualInjectedScript.js", frame.abs_path = frame.filename) : "actualInjectedScript.js" !== frame.filename && "actualInjectedScript.js" !== frame.abs_path || (frame.filename = "app:///actualInjectedScript.js", frame.abs_path = frame.filename), (null === (undefined = frame.filename) || undefined === undefined ? undefined : undefined.includes("actualInjectedScript.js")) && (flagc = true), frame.lineno && ((null === (undefined = frame.filename) || undefined === undefined ? undefined : undefined.includes("actualContentScript.js")) && strz > 0 ? frame.lineno = lineno(frame.lineno, strz) : (null === (undefined = frame.filename) || undefined === undefined ? undefined : undefined.includes("actualBackgroundScript.js")) && strz > 0 ? frame.lineno = lineno(frame.lineno, strz) : (null === (undefined = frame.filename) || undefined === undefined ? undefined : undefined.includes("actualPopupScript.js")) && strz > 0 ? frame.lineno = lineno(frame.lineno, strz) : (null === (undefined = frame.filename) || undefined === undefined ? undefined : undefined.includes("actualInjectedScript.js")) && (frame.lineno = lineno(frame.lineno, 1)));
              });
            }), flagc && globalThis.__sentryInjectedDebugId) {
              const debug_meta = vz.debug_meta || {},
                isArray = globalThis.Array.isArray(debug_meta.images) ? debug_meta.images : [];
              isArray.some(item88 => item88.debug_id === globalThis.__sentryInjectedDebugId) || (isArray.push({
                type: "sourcemap",
                code_file: "app:///actualInjectedScript.js",
                debug_id: globalThis.__sentryInjectedDebugId
              }), debug_meta.images = isArray, vz.debug_meta = debug_meta);
            }
            return vz;
          }
        }), sentryClient.init(), sentryClient;
      }()), sentryscope.setContext("os", {
        name: platformInfo.os.family,
        version: platformInfo.os.version
      }), sentryscope.setContext("browser", {
        name: platformInfo.name,
        version: platformInfo.version
      }), email && sentryscope.setUser({
        email: email.email,
        telegram: email.telegram,
        telegramChatID: email.telegramChatID
      }), sentryscope;
    }
    async function captureToSentry(errorOrMessage, {
      origin: origin,
      level: logLevel = LOG_LEVELS.error,
      tags: sentryTags = {},
      extra: extraData = {},
      extraSecrets: extraSecrets = {},
      transactionName: transactionName,
      frequency: frequency = "normal",
      networkRelated: networkRelated = false,
      forceApp: forceApp,
      skipFingerprint: skipFingerprint = false
    }) {
      var vz, vz, undefined, undefined;
      const {
          assert$: resultb,
          message$: vz
        } = function errorHelperi(strz = "no-group") {
          const syntheticExceptionc = syntheticExceptiond => new Error("You cannot use the " + syntheticExceptiond + " function without the macro, to implement the macro, call it as " + syntheticExceptiond);
          return {
            message$: (vz, vz, vz, vz) => {
              if (!vz) throw syntheticExceptionc("message$");
              return createLogEntry(strz, vz, vz, '', vz);
            },
            assert$: (vz, vz, vz, errorContext, vz) => {
              if (!vz) throw syntheticExceptionc("assert$");
              if (vz) return vz;
              null != errorContext.networkResponse && (errorContext.networkRelated = true);
              const logEntry = createLogEntry(strz, vz, vz, '', errorContext),
                vz = null != errorContext.networkResponse ? networkResponseToError(errorContext.networkResponse, logEntry.content) : undefined;
              throw delete errorContext.networkResponse, logEntry.createError(null != vz ? vz : undefined);
            },
            throw$: (v334, v335, errorContext, v336) => {
              var v97;
              if (!v336) throw syntheticExceptionc("throw$");
              null != errorContext.networkResponse && (errorContext.networkRelated = true);
              const logEntry = createLogEntry(strz, v334, v335, '', errorContext),
                v197 = null !== (v97 = errorContext.exception) && undefined !== v97 ? v97 : null != errorContext.networkResponse ? networkResponseToError(errorContext.networkResponse, logEntry.content) : undefined;
              throw delete errorContext.exception, delete errorContext.networkResponse, logEntry.createError(null != v197 ? v197 : undefined);
            }
          };
        }("utils:3e64b9"),
        result15 = SAMPLE_RATES[frequency];
      if (resultb(1, null != result15, '', {
        sentry: false
      }, true), resultb(2, function helperz(arg177, arg178) {
        return arg178.includes(arg177);
      }8);
      }(logLevel, LOG_LEVEL_VALUES), '', {
        sentry: false
      }, true), resultb(3, isType(errorOrMessage, "string", "error"), '', {
        extra: {
          content: errorOrMessage
        },
        sentry: false
      }, true), resultb(4, isType(errorOrMessage, "string") || "error" === logLevel, '', {
        sentry: false,
        extra: {
          content: errorOrMessage,
          level: logLevel
        true), resultb(5, isType(origin, "string"), '', {
        sentry: false
      }, true), !IS_OF) return false;
      const num28 = 1 / result15,
        result95 = 1 != num28 ? "[" + num28 + "x]" : '';
      if (1 != result15 && globalThis.Math.random() > result15) return false;
      const currentApp = null != forceApp ? forceApp : getCurrentApp(),
        result96 = null == extraData ? undefined : extraData.rawError,
        rawErrorData = (null == extraData ? undefined : extraData.rawData) || result96;
      if (networkRelated || "sdk" !== origin && "sdk_global" !== origin || rawErrorData && "number" == typeof (null !== (vz = null !== (vz = rawErrorData.status) && undefined !== vz ? vz : rawErrorData.statusCode) && undefined !== vz ? vz : rawErrorData.httpStatus) && (networkRelated = true), null == currentApp) return false;
      if (!SENTRY_ENABLED_SCRIPTS.includes(currentApp)) return false;
      const undefined = await normalizeProfile(currentApp),
        manifestVersion = getManifestVersion(),
        scriptVersion = getScriptVersion(),
        accountId = null == undefined ? undefined : undefined.accountID;
      let messageStr = "string" == typeof errorOrMessage ? errorOrMessage : errorOrMessage.message;
      messageStr = function dateHelperf(paramz) {
        return paramz ? paramz.replace(/https:\/\/[^\s]+/g, '').trim() : paramz;
      }(messageStr), messageStr = function dateHelperg(paramz, paramz) {
        return paramz ? paramz.split(" ").filter(joined => joined.length < paramz).join(" ") : paramz;
      }(messageStr, 40);
      const fingerprint = buildSentryFingerprint({
          app: currentApp,
          origin: origin,
          level: logLevel,
          originalMessage: messageStr,
          manifestVersion: manifestVersion,
          scriptVersion: scriptVersion,
          accountId: accountId
        }),
        fingerprint = buildSentryFingerprint({
          app: currentApp,
          origin: origin,
          level: logLevel,
          originalMessage: messageStr
        });
      for (const resultz of SENTRY_IGNORED_FILTERS) if (matchesSentryFilter(fingerprint.obj, resultz)) return false;
      if (!skipFingerprint) {
        if (await sentryFingerprints.isFingerprintRecent(fingerprint.str)) return false;
        await sentryFingerprints.registerFingerprint(fingerprint.str);
      }
      sentryTags.app = currentApp, sentryTags.accountId = null == undefined ? undefined : undefined.accountID, sentryTags.origin = origin, isServiceWorker() || (sentryTags.url = null === (undefined = null === (undefined = globalThis.window) || undefined === undefined ? undefined : undefined.location) || undefined === undefined ? undefined : undefined.href), sentryTags.manifestVersion = manifestVersion;
      const captureHintb = await createSentryScope();
      if (captureHintb.setTags(sentryTags), captureHintb.setTransactionName("\u200E"), !isEmptyObject(extraData)) {
        for (const [vz, vz] of globalThis.Object.entries(extraData)) extraData[vz] = flattenForSentry(vz, 300);
        globalThis.console.log(extraData), captureHintb.setContext("Extra", extraData);
      }
      if (!isEmptyObject(extraSecrets)) {
        const valz = await async function helperz(jsonStr) {
          jsonStr = safeJSON.stringify(jsonStr);
          const val164 = Uint8Array.from(globalThis.atob(v368), item90 => item90.charCodeAt(0)),
            v340 = await crypto.subtle.importKey("spki", val164, {
              name: "RSA-OAEP",
              hash: "SHA-256"
            }, true, ["encrypt"]),
            encoder = new TextEncoder().encode(jsonStr),
            listz = [];
          for (let len2 = 0; len2 < encoder.length; len2 += 180) listz.push(encoder.slice(len2, len2 + 180));
          const mappedb = await globalThis.Promise.all(listz.map(item91 => crypto.subtle.encr.subtle.encrypt({
              name: "RSA-OAEP"
            }, v340, item91))),
            arr71 = mappedb.reduce((arr72, arr73) => arr72 + arr73.byteLength, 0),
            buffer = new ArrayBuffer(arr71),
            bytes = new Uint8Array(buffer);
          let numz = 0;
          return mappedb.forEach(item32 => {
            bytes.set(new Uint8Array(item32), numz), numz += item32.byteLength;
          }), decryptArrayBuffer(buffer);
        }(extraSecrets);
        captureHintb.setContext("Extra Secrets", {
          $: valz
        });
      }
      if (captureHintb.setContext("Account", undefined), captureHintb.setFingerprint(fingerprint.arr), "error" === logLevel) {
        const val165 = errorOrMessage,
          result100 = ("sdk" === origin || "sdk_global" === origin) && "string" == typeof errorOrMessage,
          error36 = function errorHelperj(error5) {
            return "string" == typeof error5 && (/\n\s*at\s/.test(error5) || error5.includes("@") || error5.includes("\\n"));
          }(rawErrorData && "object" == typeof rawErrorData ? rawErrorData.stack : undefined);
        let errorToCapture = null;
        if (result100 ? error36 && (errorToCapture = errorFromObject(rawErrorData, errorOrMessage)) : errorToCapture = "string" == typeof errorOrMessage ? new Error(errorOrMessage) : errorOrMessage, errorToCapture) {
          const val66 = errorToCapture.stack;
          if (defineHiddenProp(errorToCapture, "name", '' + (networkRelated ? "\uD83C\uDF10 " : '') + function errorHelperk(error13) {
            return error13 ? error13.charAt(0).toUpperCase() + error13.slice(1) : '';
          }(currentApp) + ": " + (transactionName || messageStr) + " " + result95), defineHiddenProp(errorToCapture, "message", "[" + origin.toUpperCase() + "] " + (transactionName ? messageStr : '')), val66 && errorToCapture.stack !== val66 && defineHiddenProp(errorToCapture, "stack", val66), "string" == typeof errorToCapture.stack && errorToCapture.stack.includes("\\n")) {
            const cleanedc = errorToCapture.stack.replace(/\\n(?=\s*at )/g, "\n").replace(/\\n(?=@)/g, "\n");
            cleanedc !== errorToCapture.stack && defineHiddenProp(errorToCapture, "stack", cleanedc);
          }
          captureHintb.captureException(errorToCapture);
        } else {
          const str37 = ("[" + origin.toUpperCase() + "] " + (transactionName ? transactionName + ": " : '') + messageStr).trim();
          captureHintb.captureMessage(str37 || globalThis.String(val165), "error");
        }
      } else captureHintb.captureMessage(globalThis.String(errorOrMessage), logLevel);
      return true;
    }
    const strz = "always";
    function sentryTestCapture(paramz) {
      if (!USE_DEV_SENTRY) return;
      const {
        label: label,
        expectedFile: expectedFile,
        origin: origin,
        delay: delay = 100,
        forceApp: forceApp,
        transactionName: transactionName,
        makeError: makeError
      } = paramz;
      globalThis.setTimeout(async () => {
        const syntheticExceptione = makeError ? makeError() : new Error("[" + label + "] Dev test - expected file: " + expectedFile);
        try {
          await captureToSentry(syntheticExceptione, {
            origin: origin,
            frequency: "always",
            tags: {
              context: label.toLowerCase().replace(/_/g, "-")
            },
            skipFingerprint: true,
            ...(forceApp && {
              forceApp: forceApp
            }),
            ...(transactionName && {
              transactionName: transactionName
            })
          });
        } catch (errz) {
          globalThis.console.error("[SENTRY TEST] " + label + " sentryCapture error:", errz);
        }
      }, delay);
    }
    const utcDateFormatter = new Intl.DateTimeFormat("sv-SE", {
      timeZone: "UTC",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
    function formatLogPrefix(tag, message) {
      return "[" + function helperz() {
        const now = globalThis.Date.now(),
          resultz = now % 1000;
        return utcDateFormatter.format(now) + "." + globalThis.String(resultz).padStart(3, "0");
      }() + "] [" + tag + "] " + message;
    }
    function logWithTimestamp(logFn, tag, message, extra) {
      const valz = formatLogPrefix(tag, message);
      undefined !== extra ? logFn(valz, extra) : logFn(valz);
    }
    function logInfo(message, extra) {
      logWithTimestamp(globalThis.console.info, "BG", message, extra);
    }
    function logWarning(message, extra) {
      logWithTimestamp(globalThis.console.warn, "BG", message, extra);
    }
    function logError(message, extra) {
      logWithTimestamp(globalThis.console.error, "BG", message, extra);
    }
    let deafStrikes = 0;
    const SCRIPT_CONTENT_PLACEHOLDER = "___SCRIPT_CONTENT___",
      SENTRY_OFFSET_PLACEHOLDER = "___SENTRY_OFFSET___";
    let isBackgroundAirRunning = false;
    async function runBackgroundScript(fromAlarm, attempt = 0) {
      if (logInfo("Running background script", {
        fromAlarm: fromAlarm,
        isBackgroundAirRunning: isBackgroundAirRunning,
        attempt: attempt
      }), isBackgroundAirRunning) return;
      let text = null,
        refb = null,
        version = null,
        refd = null;
      if (IS_AIR) {
        const valz = await getCurrentBgScript();
        refb = await getPendingBgScript();
        let numz = valz;
        if (attempt <= 2 && refb && (numz = refb, refd = true), null == numz || attempt > 5) return void logError("Failed to get background script data", {
          attempt: attempt
        });
        logInfo("processing dS"), text = await decryptScript(numz), version = numz.version;
      } else {
        const strz = globalThis.chrome.runtime.getURL("actualBackgroundScript.js"),
          resultz = await globalThis.fetch(strz);
        if (200 !== resultz.status) return void logError("Failed to fetch actualBackgroundScript.js");
        text = await resultz.text(), version = getManifestVersion();
      }
      const valz = function helperz(paramz, paramz) {
        const partsc = (paramz.split("___SCRIPT_CONTENT___")[0].match(/\n/g) || []).length;
        return paramz.split("___SENTRY_OFFSET___").join(globalThis.String(partsc)).split("___SCRIPT_CONTENT___").join(paramz);
      }("(() => {\nglobalThis._sentryBackgroundScriptLineOffset = ___SENTRY_OFFSET___;\nglobalThis._scriptData = {\n  version: \"" + version + "\",\n};\n" + "___SCRIPT_CONTENT___" + "\n})();\n//# sourceURL=actualBackgroundScript.js", text);
      logInfo("about to eIBS");
      const response = await debuggerEval(valz, {
        awaitPromise: true
      });
      response.exceptionDetails ? (logError("Error injecting background script", {
        response: response,
        exceptionDetails: response.exceptionDetails
      }), runBackgroundScript(fromAlarm, attempt + 1)) : (logInfo("Injected background script", {
        version: version
      }), isBackgroundAirRunning = true, refd && (await async function helperz(arg188) {
        await setStorageValue("currentBackgroundScript", arg188);
      }(refb), await setPendingBgScript(null)));
    }
    async function checkAndUpdateScriptVersions() {
      if (!IS_AIR) return;
      const now = globalThis.Date.now();
      let scriptVersions = null;
      for (; globalThis.Date.now() - now < 1200000 && !scriptVersions;) {
        try {
          if (scriptVersions = await apiFetch("getLatestScriptVersions", "GET", null, {
            isDev: USE_DEV_SCRIPTS,
            clientSecret: null
          }), isTruthy(scriptVersions)) break;
        } catch (error) {
          logWarning("Error fetching latest extension version (retrying)", {
            error: error
          });
        }
        await randomDelay(1000, 10000);
      }
      if (!scriptVersions) return void logError("Failed to fetch latest extension version after retries");
      const currentScriptData = await getCurrentBgScript(),
        pendingScriptData = await getPendingBgScript(),
        currentScriptData = await async function helperz() {
          return await getStorageValue("currentContentScript");
        }(),
        pendingScriptData = await async function helperz() {
          return await getStorageValue("pendingContentScript");
        }(),
        currentScriptData = await async function helperz() {
          return await getStorageValue("currentPopupScript");
        }(),
        pendingScriptData = await async function helperz() {
          return await getStorageValue("pendingPopupScript");
        }(),
        result69 = (v344, undefined) => {
          const val122 = scriptVersions[v344];
          return (null == undefined ? undefined : undefined.version) === val122.version && (null == undefined ? undefined : undefined.url) === val122.url;
        },
        v345 = [{
          key: "backgroundScript",
          currentScriptData: currentScriptData,
          pendingScriptData: pendingScriptData,
          setPendingScriptData: setPendingBgScript
        }, {
          key: "injectedScript",
          currentScriptData: await async function helperz() {
            return await getStorageValue("currentInjectedScript");
          }(),
          pendingScriptData: await async function helperz() {
            return await getStorageValue("pendingInjectedScript");
          }(),
          setPendingScriptData: setPendingInjectedScript
        }, {
          key: "contentScript",
          currentScriptData: currentScriptData,
          pendingScriptData: pendingScriptData,
          setPendingScriptData: setPendingContentScript
        }, {
          key: "popupScript",
          currentScriptData: currentScriptData,
          pendingScriptData: pendingScriptData,
          setPendingScriptData: setPendingPopupScript
        }];
      for (const v346 of v345) {
        const {
            key: scriptKey,
            currentScriptData: currentScriptData,
            pendingScriptData: pendingScriptData,
            setPendingScriptData: setPendingScriptData
          } = v346,
          v99 = scriptVersions[scriptKey];
        if (!v99) {
          logInfo("No version data found for", {
            key: scriptKey
          });
          continue;
        }
        if (result69(scriptKey, currentScriptData) || result69(scriptKey, pendingScriptData)) continue;
        let scriptText = null;
        const now = globalThis.Date.now(),
          numz = 600000;
        for (; globalThis.Date.now() - now < numz && !scriptText;) try {
          const val171 = await globalThis.fetch(v99.url);
          scriptText = decryptArrayBuffer(await val171.arrayBuffer());
        } catch (error) {
          logWarning("Error fetching latest content script (retrying)", {
            key: scriptKey,
            error: error
          }), await randomDelay(1000, 10000);
        }
        if (!scriptText) {
          logError("Failed to fetch latest script after retries", {
            key: scriptKey
          });
          continue;
        }
        const val172 = {
          scriptText: scriptText,
          ...v99
        };
        await setPendingScriptData(val172), "backgroundScript" == scriptKey ? globalThis.chrome.runtime.reload() : "contentScript" == scriptKey && (await reloadContentScripts());
      }
    }
    logInfo("Background static loaded"), validateApiUrl("https://cupidbot-382905.uc.r.appspot.com") || globalThis.console.log(4 .pop().push()), globalThis.chrome.alarms.create("checkVersionUpdate", {
      periodInMinutes: IS_DEV ? 0.5 : 60
    }), checkAndUpdateScriptVersions(), globalThis.chrome.alarms.create("runBackgroundScript", {
      periodInMinutes: 0.5
    }), runBackgroundScript(false), globalThis.chrome.alarms.onAlarm.addListener(item33 => {
      "checkVersionUpdate" === item33.name ? checkAndUpdateScriptVersions() : "runBackgroundScript" === item33.name && runBackgroundScript(true);
    }), function errorHelperl(makeError) {
      sentryTestCapture({
        label: "BACKGROUND_STATIC",
        expectedFile: "index.ts",
        origin: SCRIPT_ORIGINS.bg,
        delay: 500,
        forceApp: "background",
        transactionName: "background-static-test",
        makeError: makeError
      });
    }(() => new Error("[BACKGROUND_STATIC] Dev test - expected file: index.ts")), async function errorHelperm() {
      var undefined;
      const strz = "keyThatWillNeverExist";
      return 8008 === (null === (undefined = await globalThis.chrome.storage.local.get({
        [strz]: 8008
      })) || undefined === undefined ? undefined : undefined[strz]) || (globalThis.console.error("BROWSER VERSION IS TOO OLD, PLEASE UPDATE"), false);
    }(), async function watchForChromiumDeafBug() {
      const globalthis2 = await new globalThis.Promise(itemz => {
        let flagd = true;
        const valz = () => {
          flagd = false;
        };
        globalThis.chrome.storage.local.onChanged.addListener(valz), globalThis.chrome.storage.local.set({
          testEventDispatching: globalThis.Math.random()
        }, () => {
          const error = globalThis.chrome.runtime.lastError;
          error && logError("storage.local.set failed maybe storage is full instead of it being chrome issue 40834197", {
            error: error
          });
        }), globalThis.setTimeout(() => {
          globalThis.chrome.storage.local.onChanged.removeListener(valz), itemz(flagd);
        }, 5000);
      });
      globalthis2 ? (deafStrikes += 1, logWarning("Chromium Issue 40834197 detected", {
        DEAF_STRIKES: deafStrikes
      }), deafStrikes >= 3 && (logError("Chromium Issue 40834197 MAX_DEAF_STRIKES reached, reloading extension via chrome.runtime.reload()"), globalThis.chrome.runtime.reload())) : deafStrikes = 0, globalThis.setTimeout(watchForChromiumDeafBug, 10000);
    }();
  })();
})();afBug, 10000);
    }();
  })();
})();();
})();000);
    }();
  })();
})();();
})();();afBug, 10000);
    }();
  })();
})();();
})();000);
    }();
  })();
})();();
})();;();
})();000);
    }();
  })();
})();();
})();();})();();();
})();();})();();();();
})();();})();();)();();})();();;();