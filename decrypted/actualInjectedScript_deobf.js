var _global = "undefined" != typeof globalThis.window ? globalThis.window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "0.20.78"
}, (() => {
  var _0x5561fb = {
      9252: _0x126ab3 => {
        'use strict';

        _0x126ab3.exports = function _0x46c12f(_0x2ec1c7, _0x2c485e) {
          if (_0x2ec1c7 === _0x2c485e) return true;
          if (_0x2ec1c7 && _0x2c485e && "object" == typeof _0x2ec1c7 && "object" == typeof _0x2c485e) {
            if (_0x2ec1c7.constructor !== _0x2c485e.constructor) return false;
            var _0xb4274f, _0x10d4d2, _0x469238;
            if (globalThis.Array.isArray(_0x2ec1c7)) {
              if ((_0xb4274f = _0x2ec1c7.length) != _0x2c485e.length) return false;
              for (_0x10d4d2 = _0xb4274f; 0 != _0x10d4d2--;) if (!_0x46c12f(_0x2ec1c7[_0x10d4d2], _0x2c485e[_0x10d4d2])) return false;
              return true;
            }
            if (_0x2ec1c7 instanceof Map && _0x2c485e instanceof Map) {
              if (_0x2ec1c7.size !== _0x2c485e.size) return false;
              for (_0x10d4d2 of _0x2ec1c7.entries()) if (!_0x2c485e.has(_0x10d4d2[0])) return false;
              for (_0x10d4d2 of _0x2ec1c7.entries()) if (!_0x46c12f(_0x10d4d2[1], _0x2c485e.get(_0x10d4d2[0]))) return false;
              return true;
            }
            if (_0x2ec1c7 instanceof Set && _0x2c485e instanceof Set) {
              if (_0x2ec1c7.size !== _0x2c485e.size) return false;
              for (_0x10d4d2 of _0x2ec1c7.entries()) if (!_0x2c485e.has(_0x10d4d2[0])) return false;
              return true;
            }
            if (ArrayBuffer.isView(_0x2ec1c7) && ArrayBuffer.isView(_0x2c485e)) {
              if ((_0xb4274f = _0x2ec1c7.length) != _0x2c485e.length) return false;
              for (_0x10d4d2 = _0xb4274f; 0 != _0x10d4d2--;) if (_0x2ec1c7[_0x10d4d2] !== _0x2c485e[_0x10d4d2]) return false;
              return true;
            }
            if (_0x2ec1c7.constructor === RegExp) return _0x2ec1c7.source === _0x2c485e.source && _0x2ec1c7.flags === _0x2c485e.flags;
            if (_0x2ec1c7.valueOf !== globalThis.Object.prototype.valueOf) return _0x2ec1c7.valueOf() === _0x2c485e.valueOf();
            if (_0x2ec1c7.toString !== globalThis.Object.prototype.toString) return _0x2ec1c7.toString() === _0x2c485e.toString();
            if ((_0xb4274f = (_0x469238 = globalThis.Object.keys(_0x2ec1c7)).length) !== globalThis.Object.keys(_0x2c485e).length) return false;
            for (_0x10d4d2 = _0xb4274f; 0 != _0x10d4d2--;) if (!globalThis.Object.prototype.hasOwnProperty.call(_0x2c485e, _0x469238[_0x10d4d2])) return false;
            for (_0x10d4d2 = _0xb4274f; 0 != _0x10d4d2--;) {
              var _0x57f81d = _0x469238[_0x10d4d2];
              if (!_0x46c12f(_0x2ec1c7[_0x57f81d], _0x2c485e[_0x57f81d])) return false;
            }
            return true;
          }
          return _0x2ec1c7 != _0x2ec1c7 && _0x2c485e != _0x2c485e;
        };
      },
      7503: function (_0x3552ab, _0x521c3d, _0x43da27) {
        var _0x476ef2;
        _0x3552ab = _0x43da27.nmd(_0x3552ab), function () {
          'use strict';

          var _0x105a00 = {
              ["function"]: true,
              object: true
            },
            _0x7d7d4b = _0x105a00[typeof globalThis.window] && globalThis.window || this,
            _0x353a0e = _0x105a00[typeof _0x521c3d] && _0x521c3d,
            _0x167369 = _0x105a00.object && _0x3552ab && !_0x3552ab.nodeType && _0x3552ab,
            _0x180a01 = _0x353a0e && _0x167369 && "object" == typeof _0x43da27.g && _0x43da27.g;
          !_0x180a01 || _0x180a01.global !== _0x180a01 && _0x180a01.window !== _0x180a01 && _0x180a01.self !== _0x180a01 || (_0x7d7d4b = _0x180a01);
          var _0x2030e1 = globalThis.Math.pow(2, 53) - 1,
            _0x5b1215 = /\bOpera/,
            _0x357431 = globalThis.Object.prototype,
            _0x5acd07 = _0x357431.hasOwnProperty,
            _0x19f276 = _0x357431.toString;
          function _0x1dd0e1(_0x5005cc) {
            return (_0x5005cc = globalThis.String(_0x5005cc)).charAt(0).toUpperCase() + _0x5005cc.slice(1);
          }
          function _0x1acd3c(_0x396fd1) {
            return _0x396fd1 = _0xaf1e46(_0x396fd1), /^(?:webOS|i(?:OS|P))/.test(_0x396fd1) ? _0x396fd1 : _0x1dd0e1(_0x396fd1);
          }
          function _0x187bd0(_0x48b8b8, _0x51eb48) {
            for (var _0x447475 in _0x48b8b8) _0x5acd07.call(_0x48b8b8, _0x447475) && _0x51eb48(_0x48b8b8[_0x447475], _0x447475, _0x48b8b8);
          }
          function _0x49a32d(_0x3a4bbf) {
            return null == _0x3a4bbf ? _0x1dd0e1(_0x3a4bbf) : _0x19f276.call(_0x3a4bbf).slice(8, -1);
          }
          function _0xed78d9(_0x4edb63) {
            return globalThis.String(_0x4edb63).replace(/([ -])(?!$)/g, "$1?");
          }
          function _0x3c9b98(_0x3d483b, _0x463f77) {
            var _0x30516d = null;
            return function _0x1fb938(_0x4a00c7, _0x57b830) {
              var _0x55188d = -1,
                _0x381d37 = _0x4a00c7 ? _0x4a00c7.length : 0;
              if ("number" == typeof _0x381d37 && _0x381d37 > -1 && _0x381d37 <= _0x2030e1) {
                for (; ++_0x55188d < _0x381d37;) _0x57b830(_0x4a00c7[_0x55188d], _0x55188d, _0x4a00c7);
              } else _0x187bd0(_0x4a00c7, _0x57b830);
            }(_0x3d483b, function (_0x4368a2, _0x481679) {
              _0x30516d = _0x463f77(_0x30516d, _0x4368a2, _0x481679, _0x3d483b);
            }), _0x30516d;
          }
          function _0xaf1e46(_0xfc527b) {
            return globalThis.String(_0xfc527b).replace(/^ +| +$/g, '');
          }
          var _0x1d38da = function _0x173a73(_0x51810a) {
            var _0x594f2a = _0x7d7d4b,
              _0x58c564 = _0x51810a && "object" == typeof _0x51810a && "String" != _0x49a32d(_0x51810a);
            _0x58c564 && (_0x594f2a = _0x51810a, _0x51810a = null);
            var _0x6bf9ed = _0x594f2a.navigator || {},
              _0x3011bc = _0x6bf9ed.userAgent || '';
            _0x51810a || (_0x51810a = _0x3011bc);
            var _0x33a5c0,
              _0x2c5e17,
              _0x5b3eae = _0x58c564 ? !!_0x6bf9ed.likeChrome : /\bChrome\b/.test(_0x51810a) && !/internal|\n/i.test(_0x19f276.toString()),
              _0x561b8f = "Object",
              _0x166801 = _0x58c564 ? _0x561b8f : "ScriptBridgingProxyObject",
              _0x523cbb = _0x58c564 ? _0x561b8f : "Environment",
              _0x1e3ec6 = _0x58c564 && _0x594f2a.java ? "JavaPackage" : _0x49a32d(_0x594f2a.java),
              _0x487c6c = _0x58c564 ? _0x561b8f : "RuntimeObject",
              _0x9d5118 = /\bJava/.test(_0x1e3ec6) && _0x594f2a.java,
              _0x6a73eb = _0x9d5118 && _0x49a32d(_0x594f2a.environment) == _0x523cbb,
              _0x4250f7 = _0x9d5118 ? "a" : "\u03B1",
              _0x518272 = _0x9d5118 ? "b" : "\u03B2",
              _0x4793f0 = _0x594f2a.document || {},
              _0x56be0c = _0x594f2a.operamini || _0x594f2a.opera,
              _0x13b05b = _0x5b1215.test(_0x13b05b = _0x58c564 && _0x56be0c ? _0x56be0c["[[Class]]"] : _0x49a32d(_0x56be0c)) ? _0x13b05b : _0x56be0c = null,
              _0x26fc11 = _0x51810a,
              _0xf794c5 = [],
              _0x5caa51 = null,
              _0x397863 = _0x51810a == _0x3011bc,
              _0x48317d = _0x397863 && _0x56be0c && "function" == typeof _0x56be0c.version && _0x56be0c.version(),
              _0x336792 = function _0x5c9449(_0x5723e7) {
                return _0x3c9b98(_0x5723e7, function (_0xbfbced, _0x305dc3) {
                  return _0xbfbced || RegExp("\\b" + (_0x305dc3.pattern || _0xed78d9(_0x305dc3)) + "\\b", "i").exec(_0x51810a) && (_0x305dc3.label || _0x305dc3);
                });
              }([{
                label: "EdgeHTML",
                pattern: "Edge"
              }, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
              }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
              _0x4a5203 = function _0x2c9ddc(_0x2bb731) {
                return _0x3c9b98(_0x2bb731, function (_0x1b1f7b, _0x34430f) {
                  return _0x1b1f7b || RegExp("\\b" + (_0x34430f.pattern || _0xed78d9(_0x34430f)) + "\\b", "i").exec(_0x51810a) && (_0x34430f.label || _0x34430f);
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
              _0x2f3127 = _0x270920([{
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
              _0x4180ae = function _0x514f1d(_0x3b8da7) {
                return _0x3c9b98(_0x3b8da7, function (_0x5ff8b7, _0x532310, _0x50c689) {
                  return _0x5ff8b7 || (_0x532310[_0x2f3127] || _0x532310[/^[a-z]+(?: +[a-z]+\b)*/i.exec(_0x2f3127)] || RegExp("\\b" + _0xed78d9(_0x50c689) + "(?:\\b|\\w*\\d)", "i").exec(_0x51810a)) && _0x50c689;
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
              _0x4895bf = function _0x549337(_0xd5a45c) {
                return _0x3c9b98(_0xd5a45c, function (_0xd960df, _0x2185c2) {
                  var _0x1b49e0 = _0x2185c2.pattern || _0xed78d9(_0x2185c2);
                  return !_0xd960df && (_0xd960df = RegExp("\\b" + _0x1b49e0 + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(_0x51810a)) && (_0xd960df = function _0x3ab144(_0x4c85e8, _0x22d618, _0x227dce) {
                    var _0x388d6d = {
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
                    return _0x22d618 && _0x227dce && /^Win/i.test(_0x4c85e8) && !/^Windows Phone /i.test(_0x4c85e8) && (_0x388d6d = _0x388d6d[/[\d.]+$/.exec(_0x4c85e8)]) && (_0x4c85e8 = "Windows " + _0x388d6d), _0x4c85e8 = globalThis.String(_0x4c85e8), _0x22d618 && _0x227dce && (_0x4c85e8 = _0x4c85e8.replace(RegExp(_0x22d618, "i"), _0x227dce)), _0x1acd3c(_0x4c85e8.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '').replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]);
                  }(_0xd960df, _0x1b49e0, _0x2185c2.label || _0x2185c2)), _0xd960df;
                });
              }(["Windows Phone", "KaiOS", "Android", "CentOS", {
                label: "Chrome OS",
                pattern: "CrOS"
              }, "Debian", {
                label: "DragonFly BSD",
                pattern: "DragonFly"
              }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
            function _0x270920(_0x2cb44f) {
              return _0x3c9b98(_0x2cb44f, function (_0x3d7b4c, _0x3dd690) {
                var _0x54b88c = _0x3dd690.pattern || _0xed78d9(_0x3dd690);
                return !_0x3d7b4c && (_0x3d7b4c = RegExp("\\b" + _0x54b88c + " *\\d+[.\\w_]*", "i").exec(_0x51810a) || RegExp("\\b" + _0x54b88c + " *\\w+-[\\w]*", "i").exec(_0x51810a) || RegExp("\\b" + _0x54b88c + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(_0x51810a)) && ((_0x3d7b4c = globalThis.String(_0x3dd690.label && !RegExp(_0x54b88c, "i").test(_0x3dd690.label) ? _0x3dd690.label : _0x3d7b4c).split("/"))[1] && !/[\d.]+/.test(_0x3d7b4c[0]) && (_0x3d7b4c[0] += " " + _0x3d7b4c[1]), _0x3dd690 = _0x3dd690.label || _0x3dd690, _0x3d7b4c = _0x1acd3c(_0x3d7b4c[0].replace(RegExp(_0x54b88c, "i"), _0x3dd690).replace(RegExp("; *(?:" + _0x3dd690 + "[_-])?", "i"), " ").replace(RegExp("(" + _0x3dd690 + ")[-_.]?(\\w)", "i"), "$1 $2"))), _0x3d7b4c;
              });
            }
            function _0x524d29(_0x179474) {
              return _0x3c9b98(_0x179474, function (_0x20879b, _0x5bbaa2) {
                return _0x20879b || (RegExp(_0x5bbaa2 + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(_0x51810a) || 0)[1] || null;
              });
            }
            if (_0x336792 && (_0x336792 = [_0x336792]), /\bAndroid\b/.test(_0x4895bf) && !_0x2f3127 && (_0x33a5c0 = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(_0x51810a)) && (_0x2f3127 = _0xaf1e46(_0x33a5c0[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, '') || null), _0x4180ae && !_0x2f3127 ? _0x2f3127 = _0x270920([_0x4180ae]) : _0x4180ae && _0x2f3127 && (_0x2f3127 = _0x2f3127.replace(RegExp("^(" + _0xed78d9(_0x4180ae) + ")[-_.\\s]", "i"), _0x4180ae + " ").replace(RegExp("^(" + _0xed78d9(_0x4180ae) + ")[-_.]?(\\w)", "i"), _0x4180ae + " $2")), (_0x33a5c0 = /\bGoogle TV\b/.exec(_0x2f3127)) && (_0x2f3127 = _0x33a5c0[0]), /\bSimulator\b/i.test(_0x51810a) && (_0x2f3127 = (_0x2f3127 ? _0x2f3127 + " " : '') + "Simulator"), "Opera Mini" == _0x4a5203 && /\bOPiOS\b/.test(_0x51810a) && _0xf794c5.push("running in Turbo/Uncompressed mode"), "IE" == _0x4a5203 && /\blike iPhone OS\b/.test(_0x51810a) ? (_0x4180ae = (_0x33a5c0 = _0x173a73(_0x51810a.replace(/like iPhone OS/, ''))).manufacturer, _0x2f3127 = _0x33a5c0.product) : /^iP/.test(_0x2f3127) ? (_0x4a5203 || (_0x4a5203 = "Safari"), _0x4895bf = "iOS" + ((_0x33a5c0 = / OS ([\d_]+)/i.exec(_0x51810a)) ? " " + _0x33a5c0[1].replace(/_/g, ".") : '')) : "Konqueror" == _0x4a5203 && /^Linux\b/i.test(_0x4895bf) ? _0x4895bf = "Kubuntu" : _0x4180ae && "Google" != _0x4180ae && (/Chrome/.test(_0x4a5203) && !/\bMobile Safari\b/i.test(_0x51810a) || /\bVita\b/.test(_0x2f3127)) || /\bAndroid\b/.test(_0x4895bf) && /^Chrome/.test(_0x4a5203) && /\bVersion\//i.test(_0x51810a) ? (_0x4a5203 = "Android Browser", _0x4895bf = /\bAndroid\b/.test(_0x4895bf) ? _0x4895bf : "Android") : "Silk" == _0x4a5203 ? (/\bMobi/i.test(_0x51810a) || (_0x4895bf = "Android", _0xf794c5.unshift("desktop mode")), /Accelerated *= *true/i.test(_0x51810a) && _0xf794c5.unshift("accelerated")) : "UC Browser" == _0x4a5203 && /\bUCWEB\b/.test(_0x51810a) ? _0xf794c5.push("speed mode") : "PaleMoon" == _0x4a5203 && (_0x33a5c0 = /\bFirefox\/([\d.]+)\b/.exec(_0x51810a)) ? _0xf794c5.push("identifying as Firefox " + _0x33a5c0[1]) : "Firefox" == _0x4a5203 && (_0x33a5c0 = /\b(Mobile|Tablet|TV)\b/i.exec(_0x51810a)) ? (_0x4895bf || (_0x4895bf = "Firefox OS"), _0x2f3127 || (_0x2f3127 = _0x33a5c0[1])) : !_0x4a5203 || (_0x33a5c0 = !/\bMinefield\b/i.test(_0x51810a) && /\b(?:Firefox|Safari)\b/.exec(_0x4a5203)) ? (_0x4a5203 && !_0x2f3127 && /[\/,]|^[^(]+?\)/.test(_0x51810a.slice(_0x51810a.indexOf(_0x33a5c0 + "/") + 8)) && (_0x4a5203 = null), (_0x33a5c0 = _0x2f3127 || _0x4180ae || _0x4895bf) && (_0x2f3127 || _0x4180ae || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(_0x4895bf)) && (_0x4a5203 = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(_0x4895bf) ? _0x4895bf : _0x33a5c0) + " Browser")) : "Electron" == _0x4a5203 && (_0x33a5c0 = (/\bChrome\/([\d.]+)\b/.exec(_0x51810a) || 0)[1]) && _0xf794c5.push("Chromium " + _0x33a5c0), _0x48317d || (_0x48317d = _0x524d29(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", _0xed78d9(_0x4a5203), "(?:Firefox|Minefield|NetFront)"])), (_0x33a5c0 = ("iCab" == _0x336792 && parseFloat(_0x48317d) > 3 ? "WebKit" : /\bOpera\b/.test(_0x4a5203) && (/\bOPR\b/.test(_0x51810a) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(_0x51810a) && !/^(?:Trident|EdgeHTML)$/.test(_0x336792) && "WebKit" || !_0x336792 && /\bMSIE\b/i.test(_0x51810a) && ("Mac OS" == _0x4895bf ? "Tasman" : "Trident") || "WebKit" == _0x336792 && /\bPlayStation\b(?! Vita\b)/i.test(_0x4a5203) && "NetFront") && (_0x336792 = [_0x33a5c0]), "IE" == _0x4a5203 && (_0x33a5c0 = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(_0x51810a) || 0)[1]) ? (_0x4a5203 += " Mobile", _0x4895bf = "Windows Phone " + (/\+$/.test(_0x33a5c0) ? _0x33a5c0 : _0x33a5c0 + ".x"), _0xf794c5.unshift("desktop mode")) : /\bWPDesktop\b/i.test(_0x51810a) ? (_0x4a5203 = "IE Mobile", _0x4895bf = "Windows Phone 8.x", _0xf794c5.unshift("desktop mode"), _0x48317d || (_0x48317d = (/\brv:([\d.]+)/.exec(_0x51810a) || 0)[1])) : "IE" != _0x4a5203 && "Trident" == _0x336792 && (_0x33a5c0 = /\brv:([\d.]+)/.exec(_0x51810a)) && (_0x4a5203 && _0xf794c5.push("identifying as " + _0x4a5203 + (_0x48317d ? " " + _0x48317d : '')), _0x4a5203 = "IE", _0x48317d = _0x33a5c0[1]), _0x397863) {
              if (function _0x4923c1(_0x465a7c, _0x41bb4e) {
                var _0x22af8f = null != _0x465a7c ? typeof _0x465a7c[_0x41bb4e] : "number";
                return !(/^(?:boolean|number|string|undefined)$/.test(_0x22af8f) || "object" == _0x22af8f && !_0x465a7c[_0x41bb4e]);
              }(_0x594f2a, "global")) {
                if (_0x9d5118 && (_0x26fc11 = (_0x33a5c0 = _0x9d5118.lang.System).getProperty("os.arch"), _0x4895bf = _0x4895bf || _0x33a5c0.getProperty("os.name") + " " + _0x33a5c0.getProperty("os.version")), _0x6a73eb) {
                  try {
                    _0x48317d = _0x594f2a.require("ringo/engine").version.join("."), _0x4a5203 = "RingoJS";
                  } catch (_0x2860b3) {
                    (_0x33a5c0 = _0x594f2a.system) && _0x33a5c0.global.system == _0x594f2a.system && (_0x4a5203 = "Narwhal", _0x4895bf || (_0x4895bf = _0x33a5c0[0].os || null));
                  }
                  _0x4a5203 || (_0x4a5203 = "Rhino");
                } else "object" == typeof _0x594f2a.process && !_0x594f2a.process.browser && (_0x33a5c0 = _0x594f2a.process) && ("object" == typeof _0x33a5c0.versions && ("string" == typeof _0x33a5c0.versions.electron ? (_0xf794c5.push("Node " + _0x33a5c0.versions.node), _0x4a5203 = "Electron", _0x48317d = _0x33a5c0.versions.electron) : "string" == typeof _0x33a5c0.versions.nw && (_0xf794c5.push("Chromium " + _0x48317d, "Node " + _0x33a5c0.versions.node), _0x4a5203 = "NW.js", _0x48317d = _0x33a5c0.versions.nw)), _0x4a5203 || (_0x4a5203 = "Node.js", _0x26fc11 = _0x33a5c0.arch, _0x4895bf = _0x33a5c0.platform, _0x48317d = (_0x48317d = /[\d.]+/.exec(_0x33a5c0.version)) ? _0x48317d[0] : null));
              } else _0x49a32d(_0x33a5c0 = _0x594f2a.runtime) == _0x166801 ? (_0x4a5203 = "Adobe AIR", _0x4895bf = _0x33a5c0.flash.system.Capabilities.os) : _0x49a32d(_0x33a5c0 = _0x594f2a.phantom) == _0x487c6c ? (_0x4a5203 = "PhantomJS", _0x48317d = (_0x33a5c0 = _0x33a5c0.version || null) && _0x33a5c0.major + "." + _0x33a5c0.minor + "." + _0x33a5c0.patch) : "number" == typeof _0x4793f0.documentMode && (_0x33a5c0 = /\bTrident\/(\d+)/i.exec(_0x51810a)) ? (_0x48317d = [_0x48317d, _0x4793f0.documentMode], (_0x33a5c0 = +_0x33a5c0[1] + 4) != _0x48317d[1] && (_0xf794c5.push("IE " + _0x48317d[1] + " mode"), _0x336792 && (_0x336792[1] = ''), _0x48317d[1] = _0x33a5c0), _0x48317d = "IE" == _0x4a5203 ? globalThis.String(_0x48317d[1].toFixed(1)) : _0x48317d[0]) : "number" == typeof _0x4793f0.documentMode && /^(?:Chrome|Firefox)\b/.test(_0x4a5203) && (_0xf794c5.push("masking as " + _0x4a5203 + " " + _0x48317d), _0x4a5203 = "IE", _0x48317d = "11.0", _0x336792 = ["Trident"], _0x4895bf = "Windows");
              _0x4895bf = _0x4895bf && _0x1acd3c(_0x4895bf);
            }
            if (_0x48317d && (_0x33a5c0 = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(_0x48317d) || /(?:alpha|beta)(?: ?\d)?/i.exec(_0x51810a + ";" + (_0x397863 && _0x6bf9ed.appMinorVersion)) || /\bMinefield\b/i.test(_0x51810a) && "a") && (_0x5caa51 = /b/i.test(_0x33a5c0) ? "beta" : "alpha", _0x48317d = _0x48317d.replace(RegExp(_0x33a5c0 + "\\+?$"), '') + ("beta" == _0x5caa51 ? _0x518272 : _0x4250f7) + (/\d+\+?/.exec(_0x33a5c0) || '')), "Fennec" == _0x4a5203 || "Firefox" == _0x4a5203 && /\b(?:Android|Firefox OS|KaiOS)\b/.test(_0x4895bf)) _0x4a5203 = "Firefox Mobile";else {
              if ("Maxthon" == _0x4a5203 && _0x48317d) _0x48317d = _0x48317d.replace(/\.[\d.]+/, ".x");else {
                if (/\bXbox\b/i.test(_0x2f3127)) "Xbox 360" == _0x2f3127 && (_0x4895bf = null), "Xbox 360" == _0x2f3127 && /\bIEMobile\b/.test(_0x51810a) && _0xf794c5.unshift("mobile mode");else {
                  if (!/^(?:Chrome|IE|Opera)$/.test(_0x4a5203) && (!_0x4a5203 || _0x2f3127 || /Browser|Mobi/.test(_0x4a5203)) || "Windows CE" != _0x4895bf && !/Mobi/i.test(_0x51810a)) {
                    if ("IE" == _0x4a5203 && _0x397863) try {
                      null === _0x594f2a.external && _0xf794c5.unshift("platform preview");
                    } catch (_0x49e4cd) {
                      _0xf794c5.unshift("embedded");
                    } else (/\bBlackBerry\b/.test(_0x2f3127) || /\bBB10\b/.test(_0x51810a)) && (_0x33a5c0 = (RegExp(_0x2f3127.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(_0x51810a) || 0)[1] || _0x48317d) ? (_0x4895bf = ((_0x33a5c0 = [_0x33a5c0, /BB10/.test(_0x51810a)])[1] ? (_0x2f3127 = null, _0x4180ae = "BlackBerry") : "Device Software") + " " + _0x33a5c0[0], _0x48317d = null) : this != _0x187bd0 && "Wii" != _0x2f3127 && (_0x397863 && _0x56be0c || /Opera/.test(_0x4a5203) && /\b(?:MSIE|Firefox)\b/i.test(_0x51810a) || "Firefox" == _0x4a5203 && /\bOS X (?:\d+\.){2,}/.test(_0x4895bf) || "IE" == _0x4a5203 && (_0x4895bf && !/^Win/.test(_0x4895bf) && _0x48317d > 5.5 || /\bWindows XP\b/.test(_0x4895bf) && _0x48317d > 8 || 8 == _0x48317d && !/\bTrident\b/.test(_0x51810a))) && !_0x5b1215.test(_0x33a5c0 = _0x173a73.call(_0x187bd0, _0x51810a.replace(_0x5b1215, '') + ";")) && _0x33a5c0.name && (_0x33a5c0 = "ing as " + _0x33a5c0.name + ((_0x33a5c0 = _0x33a5c0.version) ? " " + _0x33a5c0 : ''), _0x5b1215.test(_0x4a5203) ? (/\bIE\b/.test(_0x33a5c0) && "Mac OS" == _0x4895bf && (_0x4895bf = null), _0x33a5c0 = "identify" + _0x33a5c0) : (_0x33a5c0 = "mask" + _0x33a5c0, _0x4a5203 = _0x13b05b ? _0x1acd3c(_0x13b05b.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(_0x33a5c0) && (_0x4895bf = null), _0x397863 || (_0x48317d = null)), _0x336792 = ["Presto"], _0xf794c5.push(_0x33a5c0));
                  } else _0x4a5203 += " Mobile";
                }
              }
            }
            (_0x33a5c0 = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(_0x51810a) || 0)[1]) && (_0x33a5c0 = [parseFloat(_0x33a5c0.replace(/\.(\d)$/, ".0$1")), _0x33a5c0], "Safari" == _0x4a5203 && "+" == _0x33a5c0[1].slice(-1) ? (_0x4a5203 = "WebKit Nightly", _0x5caa51 = "alpha", _0x48317d = _0x33a5c0[1].slice(0, -1)) : _0x48317d != _0x33a5c0[1] && _0x48317d != (_0x33a5c0[2] = (/\bSafari\/([\d.]+\+?)/i.exec(_0x51810a) || 0)[1]) || (_0x48317d = null), _0x33a5c0[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(_0x51810a) || 0)[1], 537.36 == _0x33a5c0[0] && 537.36 == _0x33a5c0[2] && parseFloat(_0x33a5c0[1]) >= 28 && "WebKit" == _0x336792 && (_0x336792 = ["Blink"]), _0x397863 && (_0x5b3eae || _0x33a5c0[1]) ? (_0x336792 && (_0x336792[1] = "like Chrome"), _0x33a5c0 = _0x33a5c0[1] || ((_0x33a5c0 = _0x33a5c0[0]) < 530 ? 1 : _0x33a5c0 < 532 ? 2 : _0x33a5c0 < 532.05 ? 3 : _0x33a5c0 < 533 ? 4 : _0x33a5c0 < 534.03 ? 5 : _0x33a5c0 < 534.07 ? 6 : _0x33a5c0 < 534.1 ? 7 : _0x33a5c0 < 534.13 ? 8 : _0x33a5c0 < 534.16 ? 9 : _0x33a5c0 < 534.24 ? 10 : _0x33a5c0 < 534.3 ? 11 : _0x33a5c0 < 535.01 ? 12 : _0x33a5c0 < 535.02 ? "13+" : _0x33a5c0 < 535.07 ? 15 : _0x33a5c0 < 535.11 ? 16 : _0x33a5c0 < 535.19 ? 17 : _0x33a5c0 < 536.05 ? 18 : _0x33a5c0 < 536.1 ? 19 : _0x33a5c0 < 537.01 ? 20 : _0x33a5c0 < 537.11 ? "21+" : _0x33a5c0 < 537.13 ? 23 : _0x33a5c0 < 537.18 ? 24 : _0x33a5c0 < 537.24 ? 25 : _0x33a5c0 < 537.36 ? 26 : "Blink" != _0x336792 ? "27" : "28")) : (_0x336792 && (_0x336792[1] = "like Safari"), _0x33a5c0 = (_0x33a5c0 = _0x33a5c0[0]) < 400 ? 1 : _0x33a5c0 < 500 ? 2 : _0x33a5c0 < 526 ? 3 : _0x33a5c0 < 533 ? 4 : _0x33a5c0 < 534 ? "4+" : _0x33a5c0 < 535 ? 5 : _0x33a5c0 < 537 ? 6 : _0x33a5c0 < 538 ? 7 : _0x33a5c0 < 601 ? 8 : _0x33a5c0 < 602 ? 9 : _0x33a5c0 < 604 ? 10 : _0x33a5c0 < 606 ? 11 : _0x33a5c0 < 608 ? 12 : "12"), _0x336792 && (_0x336792[1] += " " + (_0x33a5c0 += "number" == typeof _0x33a5c0 ? ".x" : /[.+]/.test(_0x33a5c0) ? '' : "+")), "Safari" == _0x4a5203 && (!_0x48317d || parseInt(_0x48317d) > 45) ? _0x48317d = _0x33a5c0 : "Chrome" == _0x4a5203 && /\bHeadlessChrome/i.test(_0x51810a) && _0xf794c5.unshift("headless")), "Opera" == _0x4a5203 && (_0x33a5c0 = /\bzbov|zvav$/.exec(_0x4895bf)) ? (_0x4a5203 += " ", _0xf794c5.unshift("desktop mode"), "zvav" == _0x33a5c0 ? (_0x4a5203 += "Mini", _0x48317d = null) : _0x4a5203 += "Mobile", _0x4895bf = _0x4895bf.replace(RegExp(" *" + _0x33a5c0 + "$"), '')) : "Safari" == _0x4a5203 && /\bChrome\b/.exec(_0x336792 && _0x336792[1]) ? (_0xf794c5.unshift("desktop mode"), _0x4a5203 = "Chrome Mobile", _0x48317d = null, /\bOS X\b/.test(_0x4895bf) ? (_0x4180ae = "Apple", _0x4895bf = "iOS 4.3+") : _0x4895bf = null) : /\bSRWare Iron\b/.test(_0x4a5203) && !_0x48317d && (_0x48317d = _0x524d29("Chrome")), _0x48317d && 0 == _0x48317d.indexOf(_0x33a5c0 = /[\d.]+$/.exec(_0x4895bf)) && _0x51810a.indexOf("/" + _0x33a5c0 + "-") > -1 && (_0x4895bf = _0xaf1e46(_0x4895bf.replace(_0x33a5c0, ''))), _0x4895bf && -1 != _0x4895bf.indexOf(_0x4a5203) && !RegExp(_0x4a5203 + " OS").test(_0x4895bf) && (_0x4895bf = _0x4895bf.replace(RegExp(" *" + _0xed78d9(_0x4a5203) + " *"), '')), _0x336792 && !/\b(?:Avant|Nook)\b/.test(_0x4a5203) && (/Browser|Lunascape|Maxthon/.test(_0x4a5203) || "Safari" != _0x4a5203 && /^iOS/.test(_0x4895bf) && /\bSafari\b/.test(_0x336792[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(_0x4a5203) && _0x336792[1]) && (_0x33a5c0 = _0x336792[_0x336792.length - 1]) && _0xf794c5.push(_0x33a5c0), _0xf794c5.length && (_0xf794c5 = ["(" + _0xf794c5.join("; ") + ")"]), _0x4180ae && _0x2f3127 && _0x2f3127.indexOf(_0x4180ae) < 0 && _0xf794c5.push("on " + _0x4180ae), _0x2f3127 && _0xf794c5.push((/^on /.test(_0xf794c5[_0xf794c5.length - 1]) ? '' : "on ") + _0x2f3127), _0x4895bf && (_0x33a5c0 = / ([\d.+]+)$/.exec(_0x4895bf), _0x2c5e17 = _0x33a5c0 && "/" == _0x4895bf.charAt(_0x4895bf.length - _0x33a5c0[0].length - 1), _0x4895bf = {
              architecture: 32,
              family: _0x33a5c0 && !_0x2c5e17 ? _0x4895bf.replace(_0x33a5c0[0], '') : _0x4895bf,
              version: _0x33a5c0 ? _0x33a5c0[1] : null,
              toString: function () {
                var _0x1f23fe = this.version;
                return this.family + (_0x1f23fe && !_0x2c5e17 ? " " + _0x1f23fe : '') + (64 == this.architecture ? " 64-bit" : '');
              }
            }), (_0x33a5c0 = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(_0x26fc11)) && !/\bi686\b/i.test(_0x26fc11) ? (_0x4895bf && (_0x4895bf.architecture = 64, _0x4895bf.family = _0x4895bf.family.replace(RegExp(" *" + _0x33a5c0), '')), _0x4a5203 && (/\bWOW64\b/i.test(_0x51810a) || _0x397863 && /\w(?:86|32)$/.test(_0x6bf9ed.cpuClass || _0x6bf9ed.platform) && !/\bWin64; x64\b/i.test(_0x51810a)) && _0xf794c5.unshift("32-bit")) : _0x4895bf && /^OS X/.test(_0x4895bf.family) && "Chrome" == _0x4a5203 && parseFloat(_0x48317d) >= 39 && (_0x4895bf.architecture = 64), _0x51810a || (_0x51810a = null);
            var _0x55ea94 = {};
            return _0x55ea94.description = _0x51810a, _0x55ea94.layout = _0x336792 && _0x336792[0], _0x55ea94.manufacturer = _0x4180ae, _0x55ea94.name = _0x4a5203, _0x55ea94.prerelease = _0x5caa51, _0x55ea94.product = _0x2f3127, _0x55ea94.ua = _0x51810a, _0x55ea94.version = _0x4a5203 && _0x48317d, _0x55ea94.os = _0x4895bf || {
              architecture: null,
              family: null,
              version: null,
              toString: function () {
                return "null";
              }
            }, _0x55ea94.parse = _0x173a73, _0x55ea94.toString = function _0x4d2e93() {
              return this.description || '';
            }, _0x55ea94.version && _0xf794c5.unshift(_0x48317d), _0x55ea94.name && _0xf794c5.unshift(_0x4a5203), _0x4895bf && _0x4a5203 && (_0x4895bf != globalThis.String(_0x4895bf).split(" ")[0] || _0x4895bf != _0x4a5203.split(" ")[0] && !_0x2f3127) && _0xf794c5.push(_0x2f3127 ? "(" + _0x4895bf + ")" : "on " + _0x4895bf), _0xf794c5.length && (_0x55ea94.description = _0xf794c5.join(" ")), _0x55ea94;
          }();
          _0x7d7d4b.platform = _0x1d38da, undefined === (_0x476ef2 = function () {
            return _0x1d38da;
          }.call(_0x521c3d, _0x43da27, _0x521c3d, _0x3552ab)) || (_0x3552ab.exports = _0x476ef2);
        }.call(this);
      }
    },
    _0x535d6f = {};
  function _0x3e5cf3(_0x203a03) {
    var _0x2d8fb3 = _0x535d6f[_0x203a03];
    if (undefined !== _0x2d8fb3) return _0x2d8fb3.exports;
    var _0x4d7d11 = _0x535d6f[_0x203a03] = {
      id: _0x203a03,
      loaded: false,
      exports: {}
    };
    return _0x5561fb[_0x203a03].call(_0x4d7d11.exports, _0x4d7d11, _0x4d7d11.exports, _0x3e5cf3), _0x4d7d11.loaded = true, _0x4d7d11.exports;
  }
  _0x3e5cf3.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (_0x112fc2) {
      if ("object" == typeof globalThis.window) return window;
    }
  }(), _0x3e5cf3.nmd = _0x3209be => (_0x3209be.paths = [], _0x3209be.children || (_0x3209be.children = []), _0x3209be), (() => {
    'use strict';
    const _0xc86507 = false,
      _0x10d087 = !_0xc86507 && true,
      _0x72cd86 = false,
      _0x1a5273 = "__devSentryTest",
      [_0x48d10a, _0x34d1a1 = _0xc86507 ? "internal" : "external"] = "cupidbotofm".split("@"),
      _0x1501fd = {
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
      _0x22fd95 = JSON;
    globalThis.q1 || globalThis.q2 || (globalThis.console.log("production", "isOF", "true", "brand", "cupidbotofm", "useDevScripts", "false", "air", _0x10d087), globalThis.console.log(_0x1501fd));
    const _0x1219eb = (_0xc86507 ? ["snapchat", "discord", "gvoice", "bumble", "tiktok", "grindr", "tinder", "instagram", "messenger", "whatsapp", "reddit", "pornhub", "linkedin", "badoo", "telegram", "fetlife", "x", "bluesky"] : ["snapchat", "gvoice", "discord", "pornhub", "tiktok", "fetlife", "grindr", "reddit", "whatsapp", "x", "badoo", "telegram", "instagram", "bumble", "bluesky", "messenger"]).reduce((_0x54eaae, _0x39e7af) => (_0x54eaae[_0x39e7af] = _0x39e7af, _0x54eaae), {}),
      _0x388d79 = globalThis.Object.values(_0x1219eb);
    [_0x1219eb.snapchat, _0x1219eb.reddit, _0x1219eb.instagram, _0x1219eb.x, _0x1219eb.whatsapp, _0x1219eb.telegram, _0x1219eb.grindr, _0x1219eb.gvoice, _0x1219eb.tiktok, _0x1219eb.discord, _0x1219eb.fetlife, _0x1219eb.pornhub, _0x1219eb.bluesky].filter(Boolean), [_0x1219eb.snapchat, _0x1219eb.instagram].filter(Boolean), new Set([_0x1219eb.snapchat, _0x1219eb.reddit, _0x1219eb.instagram, _0x1219eb.x, _0x1219eb.whatsapp, _0x1219eb.telegram, _0x1219eb.grindr, _0x1219eb.gvoice, _0x1219eb.tiktok, _0x1219eb.discord, _0x1219eb.fetlife, _0x1219eb.pornhub, _0x1219eb.bluesky].filter(Boolean)), globalThis.Object.entries({
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
    }).map(([_0x16f475, _0x3ac47a]) => ({
      value: _0x16f475,
      label: _0x3ac47a
    }));
    _0x388d79.map(_0x29c06e => ({
      value: _0x29c06e,
      label: _0x29c06e.charAt(0).toUpperCase() + _0x29c06e.slice(1)
    })).concat([{
      value: "all",
      label: "All"
    }]), _0x1219eb.snapchat, _0x1219eb.instagram, _0x1219eb.messenger, _0x1219eb.x, _0x1219eb.reddit, _0x1219eb.gvoice, _0x1219eb.telegram, _0x1219eb.badoo, _0x1219eb.grindr, _0x1219eb.tiktok, _0x1219eb.discord, _0x1219eb.fetlife, _0x1219eb.pornhub, _0x1219eb.bluesky, _0x1219eb.bumble, _0x1219eb.tinder, _0x1219eb.whatsapp, _0x1219eb.linkedin, [{
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
    }, {
      value: "onlyfans",
      label: "OnlyFans"
    }].filter(_0x32e5fb => _0x32e5fb);
    const _0x416807 = "int",
      _0x5e0cd2 = "$int-3db5d2",
      _0x2912ec = {
        evalCode: "int-6ce9e33c27",
        beginTask: "int-8ba144",
        backgroundFetch: "int-62cabd7e",
        globalErrorCapture: "int-a3f7c1",
        sentryCapture: "int-8fq7h34",
        sentryDebugId: "int-7d4e2f9b"
      };
    function _0xd12ecd(_0x553fcc, _0x3b1e58) {
      return (_0x2b9184, _0x4b0f83) => {
        const _0x1d4ecb = _0x3b1e58 ? _0x2b9184[_0x3b1e58] : _0x2b9184,
          _0x39a720 = _0x3b1e58 ? _0x4b0f83[_0x3b1e58] : _0x4b0f83;
        if ("ascending" === _0x553fcc) return _0x1d4ecb < _0x39a720 ? -1 : _0x1d4ecb > _0x39a720 ? 1 : 0;
        if ("descending" === _0x553fcc) return _0x1d4ecb < _0x39a720 ? 1 : _0x1d4ecb > _0x39a720 ? -1 : 0;
        throw new Error("Invalid direction");
      };
    }
    function _0x3c026c(_0x40540a, _0x38f5db) {
      return _0x40540a.sort(_0xd12ecd("ascending", _0x38f5db));
    }
    class _0x1ef9d3 {
      constructor(_0x590b8b, _0x2a2e0f, _0x3d213b = null, _0x1e41ff = null) {
        this.content = _0x590b8b, this.opts = _0x2a2e0f, this.rawData = _0x3d213b, this.key = _0x1e41ff;
      }
      ["createError"](_0x55f421) {
        var _0x17012e;
        const _0x15dfb7 = null != _0x55f421 ? _0x55f421 : new Error(this.content);
        return _0x15dfb7[_0x5e0cd2] = true, _0x15dfb7.errorData = {
          content: this.content,
          opts: this.opts,
          key: null === (_0x17012e = this.opts) || undefined === _0x17012e ? undefined : _0x17012e.key
        }, _0x15dfb7;
      }
    }
    function _0x450ce0(_0x1e411f, _0x95171, _0x487967, _0x197e43, _0x3424cc) {
      const _0x41337f = new _0x1ef9d3('' + (_0x197e43 ? "[" + _0x1e411f + "] [" + _0x197e43 + ":" + _0x95171 + "]" : "[" + _0x1e411f + ":" + _0x95171 + "]") + (_0x487967 ? " " + _0x487967 : ''), _0x3424cc);
      if (_0x3424cc.key || (_0x3424cc.key = _0x1e411f + ":" + _0x95171), _0x3424cc.extra && _0xc86507) {
        const _0x2b38a4 = JSON.stringify(_0x3424cc.extra, null, 2);
        _0x41337f.content += "\r\n\r\n" + _0x2b38a4;
      }
      return _0x41337f;
    }
    function _0x4c64f4(_0x408bd8, _0x122838, _0x4d05a5) {
      if (!_0x408bd8) {
        const _0x3a9780 = "string" == typeof _0x122838 ? function _0xdfedad(_0x5b59a4, _0x1fa4e5) {
          return new _0x1ef9d3(_0x5b59a4, _0x1fa4e5);
        }(_0x122838, _0x4d05a5) : _0x122838;
        throw _0x3a9780.createError();
      }
      return _0x408bd8;
    }
    function _0x442618(_0x5cc07c = "no-group") {
      const _0x20c3e9 = _0x1dac60 => new Error("You cannot use the " + _0x1dac60 + " function without the macro, to implement the macro, call it as " + _0x1dac60);
      return {
        message$: (_0x1b504c, _0x428f06, _0x36bf53, _0x2d2a4d) => {
          if (!_0x2d2a4d) throw _0x20c3e9("message$");
          return _0x450ce0(_0x5cc07c, _0x1b504c, _0x428f06, '', _0x36bf53);
        },
        assert$: (_0x3adaa3, _0xc7a3c5, _0x5c0172, _0x30ccc8, _0x459078) => {
          if (!_0x459078) throw _0x20c3e9("assert$");
          if (_0xc7a3c5) return _0xc7a3c5;
          "networkResponse" in _0x30ccc8 && (_0x30ccc8.networkRelated = true);
          const _0x422afb = _0x450ce0(_0x5cc07c, _0x3adaa3, _0x5c0172, '', _0x30ccc8),
            _0x374c70 = null != _0x30ccc8.networkResponse ? _0x2b2b79(_0x30ccc8.networkResponse, _0x422afb.content) : undefined;
          throw delete _0x30ccc8.networkResponse, _0x422afb.createError(null != _0x374c70 ? _0x374c70 : undefined);
        },
        throw$: (_0x450795, _0x474067, _0x274d11, _0x1cc2a3) => {
          var _0x3446b4;
          if (!_0x1cc2a3) throw _0x20c3e9("throw$");
          "networkResponse" in _0x274d11 && (_0x274d11.networkRelated = true);
          const _0x25899d = _0x450ce0(_0x5cc07c, _0x450795, _0x474067, '', _0x274d11),
            _0x24db17 = null !== (_0x3446b4 = _0x274d11.exception) && undefined !== _0x3446b4 ? _0x3446b4 : null != _0x274d11.networkResponse ? _0x2b2b79(_0x274d11.networkResponse, _0x25899d.content) : undefined;
          throw delete _0x274d11.exception, delete _0x274d11.networkResponse, _0x25899d.createError(null != _0x24db17 ? _0x24db17 : undefined);
        }
      };
    }
    const _0x33d6e2 = ["store", "network-if-needed", "network"];
    function _0x5b0f73(_0x583e47, _0x56e6ff) {
      const _0x1d5117 = _0x2f8ff0 => "function" == typeof _0x2f8ff0 && _0x2f8ff0.toString().startsWith("class");
      return "promise" === _0x56e6ff ? Boolean(_0x583e47 && "function" == typeof _0x583e47.then) : "set" === _0x56e6ff ? _0x583e47 instanceof Set : "map" === _0x56e6ff ? _0x583e47 instanceof Map : "array" === _0x56e6ff ? globalThis.Array.isArray(_0x583e47) : "blob" === _0x56e6ff ? _0x583e47 instanceof Blob : "object" === _0x56e6ff ? _0x583e47 && "object" == typeof _0x583e47 && null !== _0x583e47 && !globalThis.Array.isArray(_0x583e47) : "function" === _0x56e6ff ? "function" == typeof _0x583e47 && !_0x1d5117(_0x583e47) : "class" === _0x56e6ff ? _0x1d5117(_0x583e47) : "error" === _0x56e6ff ? _0x583e47 instanceof Error : typeof _0x583e47 === _0x56e6ff;
    }
    function _0x4848bd(_0x4f3f45, ..._0x57a609) {
      return _0x57a609.some(_0x987946 => _0x5b0f73(_0x4f3f45, _0x987946));
    }
    function _0x2f4cb3(_0x4f94d7, _0xa6d49e) {
      return _0x4f94d7 in _0xa6d49e;
    }
    function _0x1ec1be(_0x323226, _0x3f2869) {
      return _0x3f2869.every(_0x4e64fa => _0x4e64fa in _0x323226);
    }
    function _0xbc63a7(_0x16eeaa, _0x10c88c) {
      return _0x10c88c.includes(_0x16eeaa);
    }
    function _0x5a8493(_0x22dc7c, _0x5bbaff) {
      const _0xb666b5 = (null == _0x5bbaff ? undefined : _0x5bbaff.deepVisited) || new WeakSet();
      for (const _0xb63719 in _0x22dc7c) (null == _0x5bbaff ? undefined : _0x5bbaff.deep) && "object" == typeof _0x22dc7c[_0xb63719] && null !== _0x22dc7c[_0xb63719] && !_0xb666b5.has(_0x22dc7c[_0xb63719]) && (_0xb666b5.add(_0x22dc7c[_0xb63719]), _0x22dc7c[_0xb63719] = _0x5a8493(_0x22dc7c[_0xb63719], {
        deep: _0x5bbaff.deep,
        deepVisited: _0xb666b5
      })), _0x22dc7c[_0xb63719] || (null == _0x5bbaff ? undefined : _0x5bbaff.allowZero) && 0 === _0x22dc7c[_0xb63719] || delete _0x22dc7c[_0xb63719];
      return _0x22dc7c;
    }
    function _0x1424e4(_0x30a05d, _0x9d9a04) {
      const _0x3499c4 = [...globalThis.Object.getOwnPropertyNames(_0x30a05d), ...globalThis.Object.keys(_0x30a05d)];
      if (_0x9d9a04) {
        let _0x402c9f = _0x30a05d;
        for (; _0x402c9f = globalThis.Object.getPrototypeOf(_0x402c9f);) _0x3499c4.push(...globalThis.Object.getOwnPropertyNames(_0x402c9f), ...globalThis.Object.keys(_0x402c9f));
      }
      return _0x3499c4;
    }
    const _0x30c89a = new Map();
    function _0x3a9804(_0xe8b63f, _0x4d5064) {
      let _0xcdaa58 = "cacheKey" in _0x4d5064 ? _0x30c89a.get(_0x4d5064.cacheKey) : undefined;
      return !_0xcdaa58 && (_0xcdaa58 = _0x1424e4(_0xe8b63f, _0x4d5064.prototypesIncluded).find(_0x2e8c75 => {
        const _0x59e07c = _0xe8b63f[_0x2e8c75];
        return _0x4848bd(_0x59e07c, _0x4d5064.propType) && (!_0x4d5064.predicate || _0x4d5064.predicate(_0x59e07c));
      }), "cacheKey" in _0x4d5064 && _0x30c89a.set(_0x4d5064.cacheKey, _0xcdaa58)), _0x4d5064.assert && _0x4c64f4(_0xcdaa58, _0x4d5064.assert.content, _0x4d5064.assert.opts), _0x4d5064.returnKey ? _0xcdaa58 : _0xcdaa58 ? _0xe8b63f[_0xcdaa58] : undefined;
    }
    const _0x9ea1b5 = new Map();
    function _0x4d9a60(_0x42cb9d, _0x1d946e, _0x5a2da1) {
      const _0x871ff3 = null == _0x5a2da1 ? undefined : _0x5a2da1.cacheKey;
      if (_0x871ff3) {
        const _0x6b6fac = _0x9ea1b5.get(_0x871ff3);
        if (_0x6b6fac) return _0x6b6fac;
      }
      const _0x303605 = [],
        _0x5e3484 = null == _0x5a2da1 ? undefined : _0x5a2da1.ignore,
        _0x178091 = new WeakSet(),
        _0x429d5d = _0x1d946e.includes("->"),
        _0x3c06eb = _0x429d5d ? _0x1d946e.slice(0, _0x1d946e.indexOf("->")) : undefined,
        _0x97f04c = _0x429d5d ? _0x1d946e.slice(_0x1d946e.indexOf("->") + 2) : undefined,
        _0x2e33a0 = (_0x51bba7, _0x3eb9e0) => !!_0x51bba7 && (!_0x5e3484 || !_0x5e3484.some(_0xa45a30 => _0x51bba7.includes(_0xa45a30))) && !((null == _0x5a2da1 ? undefined : _0x5a2da1.type) && !_0x4848bd(_0x42cb9d[_0x51bba7], _0x5a2da1.type)) && (!(!_0x429d5d || _0x51bba7 != _0x97f04c || !_0x3eb9e0.endsWith(_0x3c06eb)) || _0x51bba7.includes(_0x1d946e)),
        _0x5e1959 = (_0x30e014, _0x64e24f, _0x515bf9, _0x32bead) => _0x303605.push({
          type: _0x30e014,
          path: _0x64e24f.split("->"),
          rawPath: _0x64e24f,
          match: _0x515bf9,
          value: _0x32bead
        }),
        _0x563cda = (_0xec1b9a, _0x2d8e96 = '') => {
          var _0x410d98, _0x5d9a11;
          const _0x5c072d = _0x2d8e96 ? _0x2d8e96 + "->" : '';
          if ("depth" !== (null == _0x5a2da1 ? undefined : _0x5a2da1.mode)) {
            if (_0x178091.has(_0xec1b9a)) return;
            "object" == typeof _0xec1b9a && null !== _0xec1b9a && _0x178091.add(_0xec1b9a);
          } else {
            if (_0x2d8e96.split("->").length > (null !== (_0x410d98 = null == _0x5a2da1 ? undefined : _0x5a2da1.depth) && undefined !== _0x410d98 ? _0x410d98 : 10)) return;
          }
          if (_0x5e3484 && _0x5e3484.some(_0x109203 => _0x2d8e96.includes(_0x109203))) return;
          let _0x45f870;
          _0x45f870 = globalThis.Array.isArray(_0xec1b9a) ? globalThis.Object.keys(_0xec1b9a) : (null == _0x5a2da1 ? undefined : _0x5a2da1.listNonEnumerable) ? _0x1424e4(_0xec1b9a, true) : globalThis.Object.keys(_0xec1b9a);
          for (const _0x1fcdf2 of _0x45f870) if (!(null == _0x5a2da1 ? undefined : _0x5a2da1.ignoreType) || !_0x4848bd(_0xec1b9a[_0x1fcdf2], _0x5a2da1.ignoreType)) {
            if (_0x2e33a0(_0x1fcdf2, _0x2d8e96) && _0x5e1959("key", '' + _0x5c072d + _0x1fcdf2, _0x1fcdf2, _0xec1b9a[_0x1fcdf2]), _0xec1b9a[_0x1fcdf2] && "object" == typeof _0xec1b9a[_0x1fcdf2]) try {
              _0x563cda(_0xec1b9a[_0x1fcdf2], '' + _0x5c072d + _0x1fcdf2);
            } catch (_0x365384) {} else _0x2e33a0(null === (_0x5d9a11 = _0xec1b9a[_0x1fcdf2]) || undefined === _0x5d9a11 ? undefined : _0x5d9a11.toString(), _0x2d8e96) && _0x5e1959("value", '' + _0x5c072d + _0x1fcdf2, _0xec1b9a[_0x1fcdf2].toString(), _0xec1b9a[_0x1fcdf2]);
          }
        };
      return _0x563cda(_0x42cb9d), _0x871ff3 && _0x9ea1b5.set(_0x871ff3, _0x303605), _0x303605;
    }
    function _0x229767(_0x4aac73, _0xd27f34) {
      return _0x4aac73 ? _0x4aac73.includes("->") ? _0x4aac73.split("->").reduce((_0x2109b2, _0x3ed1e9) => null == _0x2109b2 ? undefined : _0x2109b2[_0x3ed1e9], _0xd27f34) : _0xd27f34[_0x4aac73] : _0xd27f34;
    }
    const _0xd3f0d8 = (..._0xd84089) => {
      const _0x193af6 = {};
      for (const _0x3624f6 of _0xd84089) for (const _0x706528 of globalThis.Object.keys(_0x3624f6)) {
        if (globalThis.Object.prototype.hasOwnProperty.call(_0x193af6, _0x706528)) throw new Error("Property " + _0x706528 + " already defined in source object");
        globalThis.Object.defineProperty(_0x193af6, _0x706528, {
          get: () => _0x3624f6[_0x706528]
        });
      }
      return _0x193af6;
    };
    function _0xc6bc1(_0x1baac6, _0x4bcfdc, _0x48a348) {
      return globalThis.Object.defineProperty(_0x1baac6, _0x4bcfdc, {
        value: _0x48a348,
        enumerable: false,
        writable: true,
        configurable: true
      }), _0x1baac6;
    }
    function _0x2ab5f1(_0x3e0861, _0xc0c641) {
      return _0x3e0861.reduce((_0x164c2f, _0xc8747a) => (_0x164c2f[_0xc8747a[_0xc0c641]] = _0xc8747a, _0x164c2f), {});
    }
    const _0x6efe0b = "\n\n[SENTRY_ASYNC_BOUNDARY_SCHEDULED_AT]\n";
    function _0x4359d1(_0x3af06f) {
      return JSON.stringify(_0x3af06f, (_0x148b7c, _0x27d346) => _0x27d346 instanceof Error ? globalThis.Object.getOwnPropertyNames(_0x27d346).reduce((_0x172a31, _0x554935) => (_0x172a31[_0x554935] = _0x27d346[_0x554935], _0x172a31), {}) : _0x27d346);
    }
    function _0x5343bd(_0x237a8a) {
      const _0x1e1c87 = _0x4359d1(_0x237a8a);
      return JSON.parse(_0x1e1c87);
    }
    function _0xe62d60(_0x2d83d3, _0x7a7aa0 = "Unknown error") {
      return _0x2d83d3 instanceof Error ? _0x2d83d3.message : "string" == typeof _0x2d83d3 ? _0x2d83d3 : _0x2d83d3 && "object" == typeof _0x2d83d3 && "message" in _0x2d83d3 ? globalThis.String(_0x2d83d3.message) : _0x2d83d3 ? globalThis.String(_0x2d83d3) : _0x7a7aa0;
    }
    function _0x2b2b79(_0x3a3759, _0xd05ad) {
      return null == _0x3a3759 ? null : ("object" != typeof _0x3a3759 && (_0x3a3759 = {
        networkResponse: _0x3a3759
      }), function _0x2dd499(_0x20f83a, _0x59281f = null) {
        if (!_0x20f83a) return _0x20f83a;
        const _0x116fb8 = _0x59281f ? new Error(_0x59281f) : new Error();
        for (let _0x29e0ab in _0x20f83a) "message" === _0x29e0ab && _0x59281f && (_0x29e0ab = "_message"), _0xc6bc1(_0x116fb8, _0x29e0ab, _0x20f83a[_0x29e0ab]);
        return _0x116fb8;
      }(_0x3a3759, _0xd05ad));
    }
    function _0x4cc3d2(_0x3d4219) {
      try {
        const _0x102432 = _0x3d4219();
        if (_0x5b0f73(_0x102432, "promise")) return _0x102432["catch"](() => null);
        return _0x102432;
      } catch (_0xd336cb) {
        return null;
      }
    }
    function _0x4cceab(_0x1d81a7, _0x5b8b3a) {
      _0x1d81a7 instanceof Error && _0x5b8b3a && _0x1d81a7.stack && (_0x1d81a7.stack.includes("\n\n[SENTRY_ASYNC_BOUNDARY_SCHEDULED_AT]\n") || (_0x1d81a7.stack = '' + _0x1d81a7.stack + "\n\n[SENTRY_ASYNC_BOUNDARY_SCHEDULED_AT]\n" + _0x5b8b3a));
    }
    function _0x491d77(_0x5a0709) {
      for (var _0x4544b0 = '', _0x29f9e3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", _0xf9a90d = 0; _0xf9a90d < _0x5a0709; _0xf9a90d++) _0x4544b0 += _0x29f9e3.charAt(globalThis.Math.floor(62 * globalThis.Math.random()));
      return _0x4544b0;
    }
    function _0x231ec8(_0x45ff94, _0x1c64ee = 0) {
      if (!(_0x45ff94 <= 0 && _0x1c64ee <= 0)) return _0x3cae2f(function _0x14520b(_0x1c1cb9, _0x268e49 = 0) {
        return globalThis.Math.random() * globalThis.Math.abs(_0x1c1cb9 - _0x268e49) + globalThis.Math.min(_0x1c1cb9, _0x268e49);
      }(_0x45ff94, _0x1c64ee));
    }
    function _0x3cae2f(_0x52798e) {
      return new globalThis.Promise(_0x30216b => globalThis.setTimeout(_0x30216b, _0x52798e));
    }
    function _0x18d5ed(_0x907a25, _0x3b2237 = 1000, _0x5a2233) {
      return new globalThis.Promise(async _0x17cbe0 => {
        if (await _0x907a25()) return void _0x17cbe0(null);
        const _0x1e8796 = globalThis.Date.now();
        let _0x334044 = null;
        const _0x1fbb41 = globalThis.setInterval(async () => {
          (await _0x907a25()) && (globalThis.clearTimeout(_0x334044), globalThis.clearInterval(_0x1fbb41), _0x17cbe0(null)), _0x334044 = globalThis.setTimeout(() => {
            _0x5a2233 && globalThis.Date.now() - _0x1e8796 > _0x5a2233 && (globalThis.clearInterval(_0x1fbb41), _0x17cbe0(null));
          }, _0x5a2233);
        }, _0x3b2237);
      });
    }
    function _0x30de57(_0x6ec2ac) {
      const _0xd4ba3d = globalThis.Object.keys(_0x6ec2ac).find(_0x1072ef => _0x1072ef.startsWith("__reactFiber"));
      return _0xd4ba3d ? _0x6ec2ac[_0xd4ba3d] : null;
    }
    function _0x4d65b9(_0x25a08c, _0x1ca07f = 1 / 0) {
      const _0x5e6b77 = _0x2becfd => {
          var _0x5a8f8f;
          return null == _0x2becfd || !("function" == typeof _0x2becfd || _0x2becfd instanceof Error || _0x2becfd instanceof Node || "symbol" == typeof _0x2becfd || _0x2becfd instanceof WeakMap || _0x2becfd instanceof WeakSet || "Proxy" === (null === (_0x5a8f8f = null == _0x2becfd ? undefined : _0x2becfd.constructor) || undefined === _0x5a8f8f ? undefined : _0x5a8f8f.name) || _0x2becfd instanceof globalThis.Promise);
        },
        _0x2db032 = (_0xfc44b, _0x52d7cd, _0x1e68c2) => {
          if (_0x1e68c2 > _0x1ca07f || _0x52d7cd.has(_0xfc44b)) return null;
          if (_0x52d7cd.add(_0xfc44b), globalThis.Array.isArray(_0xfc44b)) {
            const _0x1ddcfd = _0xfc44b.map(_0xb21e63 => _0x5e6b77(_0xb21e63) ? _0x2db032(_0xb21e63, _0x52d7cd, _0x1e68c2 + 1) : null);
            return _0x52d7cd["delete"](_0xfc44b), _0x1ddcfd;
          }
          if ("object" == typeof _0xfc44b && null !== _0xfc44b) {
            const _0xb16acc = {};
            return globalThis.Object.keys(_0xfc44b).forEach(_0x362653 => {
              try {
                _0x5e6b77(_0xfc44b[_0x362653]) ? _0xb16acc[_0x362653] = _0x2db032(_0xfc44b[_0x362653], _0x52d7cd, _0x1e68c2 + 1) : _0xb16acc[_0x362653] = null;
              } catch (_0x32b510) {
                if (_0x32b510 instanceof TypeError && _0x32b510.message.includes("read only")) return;
                throw globalThis.console.error("You are probably returning to content script an object you shouldnt be"), _0x32b510;
              }
            }), _0x52d7cd["delete"](_0xfc44b), _0xb16acc;
          }
          return _0x52d7cd["delete"](_0xfc44b), _0xfc44b;
        };
      return _0x2db032(_0x25a08c, new Set(), 0);
    }
    function _0x2e7e16(_0x2d7155, _0x1b21f0 = {}) {
      let _0x53bc19 = {
          ..._0x1b21f0
        },
        _0x2205dd = {},
        _0x46b835 = 0;
      return {
        has: _0x1f8185 => _0x1f8185 in _0x53bc19,
        get: _0x36fe67 => _0x53bc19[_0x36fe67],
        ["set"](_0x3497ae, _0x6ad849, _0x3d2161 = true) {
          var _0x10aa8d;
          let _0x1e9a98 = "function" == typeof _0x6ad849 && _0x3d2161 ? _0x6ad849(_0x53bc19[_0x3497ae]) : _0x6ad849;
          return _0x53bc19[_0x3497ae] = _0x1e9a98, null === (_0x10aa8d = _0x2205dd[_0x3497ae]) || undefined === _0x10aa8d || _0x10aa8d.forEach(({
            fn: _0x4ac224
          }) => _0x4ac224(_0x1e9a98)), _0x1e9a98;
        },
        dispatch: (_0x429bea, ..._0x3bf0ef) => _0x53bc19[_0x429bea](..._0x3bf0ef),
        ["subscribe"](_0x198d2d, _0x5eac80) {
          _0x2205dd[_0x198d2d] || (_0x2205dd[_0x198d2d] = []);
          const _0x1b9feb = _0x46b835++;
          return _0x2205dd[_0x198d2d].push({
            id: _0x1b9feb,
            fn: _0x5eac80
          }), {
            unsubscribe: () => {
              _0x2205dd[_0x198d2d] = _0x2205dd[_0x198d2d].filter(_0x357f24 => _0x357f24.id !== _0x1b9feb);
            }
          };
        },
        ["delete"](_0x1a1259) {
          delete _0x53bc19[_0x1a1259];
        },
        ["restore"]() {
          _0x53bc19 = {
            ..._0x1b21f0
          };
        }
      };
    }
    const _0x2b719b = {
        fatal: "fatal",
        error: "error",
        warning: "warning",
        log: "log",
        info: "info",
        debug: "debug"
      },
      _0x420c41 = (globalThis.Object.values(_0x2b719b), {
        bg: "bg",
        ui: "ui",
        pre: "pre",
        loop: "loop",
        sdk: "sdk",
        sdk_global: "sdk_global"
      });
    globalThis.Object.values(_0x420c41), _0x3e5cf3(7503), _0x3e5cf3(9252);
    class _0x18cf86 extends Error {}
    class _0x2f9623 extends _0x18cf86 {
      constructor() {
        super("Zone is an abstract class");
      }
    }
    class _0x3fce6e {
      get ["type"]() {
        throw new _0x2f9623();
      }
      get ["name"]() {
        throw new _0x2f9623();
      }
      get ["ianaName"]() {
        return this.name;
      }
      get ["isUniversal"]() {
        throw new _0x2f9623();
      }
      ["offsetName"](_0x36b859, _0x4147dd) {
        throw new _0x2f9623();
      }
      ["formatOffset"](_0x5f3fc3, _0x52ae1f) {
        throw new _0x2f9623();
      }
      ["offset"](_0x4bbf9c) {
        throw new _0x2f9623();
      }
      ["equals"](_0x5eef2e) {
        throw new _0x2f9623();
      }
      get ["isValid"]() {
        throw new _0x2f9623();
      }
    }
    let _0x28034b = {};
    let _0x2f814b = {};
    class _0x137650 extends _0x3fce6e {
      static ["create"](_0x47b2de) {
        return _0x2f814b[_0x47b2de] || (_0x2f814b[_0x47b2de] = new _0x137650(_0x47b2de)), _0x2f814b[_0x47b2de];
      }
      static ["resetCache"]() {
        _0x2f814b = {}, _0x28034b = {};
      }
      static ["isValidSpecifier"](_0x48bb3a) {
        return this.isValidZone(_0x48bb3a);
      }
      static ["isValidZone"](_0xb1d784) {
        if (!_0xb1d784) return false;
        try {
          return new Intl.DateTimeFormat("en-US", {
            timeZone: _0xb1d784
          }).format(), true;
        } catch (_0x3cc00b) {
          return false;
        }
      }
      constructor(_0x41f871) {
        super(), this.zoneName = _0x41f871, this.valid = _0x137650.isValidZone(_0x41f871);
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
      ["offsetName"](_0x4c1c7b, {
        format: _0x195c5a,
        locale: _0x3cf722
      }) {
        return _0x105f0a(_0x4c1c7b, _0x195c5a, _0x3cf722, this.name);
      }
      ["formatOffset"](_0x16293f, _0x65d014) {
        return _0x4c861e(this.offset(_0x16293f), _0x65d014);
      }
      ["offset"](_0x227718) {
        const _0x273731 = new globalThis.Date(_0x227718);
        if (isNaN(_0x273731)) return NaN;
        const _0x10049d = function _0xc92639(_0x47942c) {
          return _0x28034b[_0x47942c] || (_0x28034b[_0x47942c] = new Intl.DateTimeFormat("en-US", {
            hour12: false,
            timeZone: _0x47942c,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            era: "short"
          })), _0x28034b[_0x47942c];
        }(this.name);
        let [_0x4261f8, _0x2a5326, _0x4bdd59, _0x52c78e, _0x1ee3fb, _0x21acf4, _0x54b24a] = _0x10049d.formatToParts ? function _0x1c9233(_0x181f8c, _0x5c038e) {
          const _0x22f4dd = _0x181f8c.formatToParts(_0x5c038e),
            _0x43cf79 = [];
          for (let _0x351f6b = 0; _0x351f6b < _0x22f4dd.length; _0x351f6b++) {
            const {
                type: _0x20c04a,
                value: _0x4d64c7
              } = _0x22f4dd[_0x351f6b],
              _0x462d9d = _0x2a5279[_0x20c04a];
            "era" === _0x20c04a ? _0x43cf79[_0x462d9d] = _0x4d64c7 : _0x23f61f(_0x462d9d) || (_0x43cf79[_0x462d9d] = parseInt(_0x4d64c7, 10));
          }
          return _0x43cf79;
        }(_0x10049d, _0x273731) : function _0x43c85c(_0x501ed6, _0x5dc271) {
          const _0x55b405 = _0x501ed6.format(_0x5dc271).replace(/\u200E/g, ''),
            _0x567e01 = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(_0x55b405),
            [, _0x3b63c6, _0x553073, _0x57ad95, _0x839718, _0x21f48f, _0x1d34cd, _0x167081] = _0x567e01;
          return [_0x57ad95, _0x3b63c6, _0x553073, _0x839718, _0x21f48f, _0x1d34cd, _0x167081];
        }(_0x10049d, _0x273731);
        "BC" === _0x52c78e && (_0x4261f8 = 1 - globalThis.Math.abs(_0x4261f8));
        let _0xd2d2b7 = +_0x273731;
        const _0x1eefcc = _0xd2d2b7 % 1000;
        return _0xd2d2b7 -= _0x1eefcc >= 0 ? _0x1eefcc : 1000 + _0x1eefcc, (_0x23a18f({
          year: _0x4261f8,
          month: _0x2a5326,
          day: _0x4bdd59,
          hour: 24 === _0x1ee3fb ? 0 : _0x1ee3fb,
          minute: _0x21acf4,
          second: _0x54b24a,
          millisecond: 0
        }) - _0xd2d2b7) / 60000;
      }
      ["equals"](_0x40f9f6) {
        return "iana" === _0x40f9f6.type && _0x40f9f6.name === this.name;
      }
      get ["isValid"]() {
        return this.valid;
      }
    }
    let _0x1a5767 = null;
    class _0x2f8322 extends _0x3fce6e {
      static get ["utcInstance"]() {
        return null === _0x1a5767 && (_0x1a5767 = new _0x2f8322(0)), _0x1a5767;
      }
      static ["instance"](_0x59039a) {
        return 0 === _0x59039a ? _0x2f8322.utcInstance : new _0x2f8322(_0x59039a);
      }
      static ["parseSpecifier"](_0x2bb819) {
        if (_0x2bb819) {
          const _0x59066e = _0x2bb819.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
          if (_0x59066e) return new _0x2f8322(_0x8dd798(_0x59066e[1], _0x59066e[2]));
        }
        return null;
      }
      constructor(_0x5883f1) {
        super(), this.fixed = _0x5883f1;
      }
      get ["type"]() {
        return "fixed";
      }
      get ["name"]() {
        return 0 === this.fixed ? "UTC" : "UTC" + _0x4c861e(this.fixed, "narrow");
      }
      get ["ianaName"]() {
        return 0 === this.fixed ? "Etc/UTC" : "Etc/GMT" + _0x4c861e(-this.fixed, "narrow");
      }
      ["offsetName"]() {
        return this.name;
      }
      ["formatOffset"](_0x2943e6, _0x4a5d54) {
        return _0x4c861e(this.fixed, _0x4a5d54);
      }
      get ["isUniversal"]() {
        return true;
      }
      ["offset"]() {
        return this.fixed;
      }
      ["equals"](_0x1a5d1f) {
        return "fixed" === _0x1a5d1f.type && _0x1a5d1f.fixed === this.fixed;
      }
      get ["isValid"]() {
        return true;
      }
    }
    const _0x274e33 = {
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
    _0x274e33.hanidec.replace(/[\[|\]]/g, '').split('');
    function _0x23f61f(_0x183017) {
      return undefined === _0x183017;
    }
    function _0x23936c(_0x106f97, _0x50a110 = 2) {
      let _0xc46782;
      return _0xc46782 = _0x106f97 < 0 ? "-" + ('' + -_0x106f97).padStart(_0x50a110, "0") : ('' + _0x106f97).padStart(_0x50a110, "0"), _0xc46782;
    }
    function _0x480084(_0xf53914) {
      return _0x23f61f(_0xf53914) || null === _0xf53914 || '' === _0xf53914 ? undefined : parseInt(_0xf53914, 10);
    }
    function _0x12e94e(_0x50ecc9) {
      if (!_0x23f61f(_0x50ecc9) && null !== _0x50ecc9 && '' !== _0x50ecc9) {
        const _0x349691 = 1000 * parseFloat("0." + _0x50ecc9);
        return globalThis.Math.floor(_0x349691);
      }
    }
    function _0x23a18f(_0x18b8ea) {
      let _0x319162 = globalThis.Date.UTC(_0x18b8ea.year, _0x18b8ea.month - 1, _0x18b8ea.day, _0x18b8ea.hour, _0x18b8ea.minute, _0x18b8ea.second, _0x18b8ea.millisecond);
      return _0x18b8ea.year < 100 && _0x18b8ea.year >= 0 && (_0x319162 = new globalThis.Date(_0x319162), _0x319162.setUTCFullYear(_0x18b8ea.year, _0x18b8ea.month - 1, _0x18b8ea.day)), +_0x319162;
    }
    function _0x105f0a(_0x56932c, _0x131cd6, _0x592c99, _0x3abc05 = null) {
      const _0x1eb716 = new globalThis.Date(_0x56932c),
        _0x1b8213 = {
          hourCycle: "h23",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        };
      _0x3abc05 && (_0x1b8213.timeZone = _0x3abc05);
      const _0x453e24 = {
          timeZoneName: _0x131cd6,
          ..._0x1b8213
        },
        _0x5b775e = new Intl.DateTimeFormat(_0x592c99, _0x453e24).formatToParts(_0x1eb716).find(_0x1c5cda => "timezonename" === _0x1c5cda.type.toLowerCase());
      return _0x5b775e ? _0x5b775e.value : null;
    }
    function _0x8dd798(_0x3bedb2, _0x13c7d4) {
      let _0x180be5 = parseInt(_0x3bedb2, 10);
      Number.isNaN(_0x180be5) && (_0x180be5 = 0);
      const _0x19a38a = parseInt(_0x13c7d4, 10) || 0;
      return 60 * _0x180be5 + (_0x180be5 < 0 || globalThis.Object.is(_0x180be5, -0) ? -_0x19a38a : _0x19a38a);
    }
    function _0x4c861e(_0x3af593, _0x2a4f7d) {
      const _0x1931b2 = globalThis.Math.trunc(globalThis.Math.abs(_0x3af593 / 60)),
        _0x458718 = globalThis.Math.trunc(globalThis.Math.abs(_0x3af593 % 60)),
        _0x3ea432 = _0x3af593 >= 0 ? "+" : "-";
      switch (_0x2a4f7d) {
        case "short":
          return '' + _0x3ea432 + _0x23936c(_0x1931b2, 2) + ":" + _0x23936c(_0x458718, 2);
        case "narrow":
          return '' + _0x3ea432 + _0x1931b2 + (_0x458718 > 0 ? ":" + _0x458718 : '');
        case "techie":
          return '' + _0x3ea432 + _0x23936c(_0x1931b2, 2) + _0x23936c(_0x458718, 2);
        default:
          throw new RangeError("Value format " + _0x2a4f7d + " is out of range for property format");
      }
    }
    const _0x35a5fe = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
    function _0x26bcf4(..._0x58e5b6) {
      const _0x252623 = _0x58e5b6.reduce((_0xa2b446, _0x36dc2a) => _0xa2b446 + _0x36dc2a.source, '');
      return RegExp("^" + _0x252623 + "$");
    }
    function _0x5e6328(..._0x14f168) {
      return _0x476f2a => _0x14f168.reduce(([_0x4da123, _0xdda556, _0x196c8e], _0x54b4b7) => {
        const [_0x2087b5, _0x176db3, _0x1fa779] = _0x54b4b7(_0x476f2a, _0x196c8e);
        return [{
          ..._0x4da123,
          ..._0x2087b5
        }, _0x176db3 || _0xdda556, _0x1fa779];
      }, [{}, null, 1]).slice(0, 2);
    }
    function _0x469616(..._0x1daa69) {
      return (_0x36ec8a, _0x3d3dd5) => {
        const _0x10ef82 = {};
        let _0x2a88b7;
        for (_0x2a88b7 = 0; _0x2a88b7 < _0x1daa69.length; _0x2a88b7++) _0x10ef82[_0x1daa69[_0x2a88b7]] = _0x480084(_0x36ec8a[_0x3d3dd5 + _0x2a88b7]);
        return [_0x10ef82, null, _0x3d3dd5 + _0x2a88b7];
      };
    }
    const _0x206603 = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
      _0x2f6c90 = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
      _0x259225 = RegExp('' + _0x2f6c90.source + ("(?:" + _0x206603.source + "?(?:\\[(" + _0x35a5fe.source + ")\\])?)?")),
      _0x534589 = RegExp("(?:T" + _0x259225.source + ")?"),
      _0x17914b = _0x469616("weekYear", "weekNumber", "weekDay"),
      _0x153f5e = _0x469616("year", "ordinal"),
      _0x5192f0 = RegExp(_0x2f6c90.source + " ?(?:" + _0x206603.source + "|(" + _0x35a5fe.source + "))?"),
      _0x301f0d = RegExp("(?: " + _0x5192f0.source + ")?");
    function _0x26b4c0(_0x29c75c, _0x4bee72, _0x4d02da) {
      const _0x57a9ad = _0x29c75c[_0x4bee72];
      return _0x23f61f(_0x57a9ad) ? _0x4d02da : _0x480084(_0x57a9ad);
    }
    function _0x1d2c79(_0x5a8b77, _0x3a8b04) {
      return [{
        hours: _0x26b4c0(_0x5a8b77, _0x3a8b04, 0),
        minutes: _0x26b4c0(_0x5a8b77, _0x3a8b04 + 1, 0),
        seconds: _0x26b4c0(_0x5a8b77, _0x3a8b04 + 2, 0),
        milliseconds: _0x12e94e(_0x5a8b77[_0x3a8b04 + 3])
      }, null, _0x3a8b04 + 4];
    }
    function _0x498148(_0x1576d6, _0x160d90) {
      const _0x41060e = !_0x1576d6[_0x160d90] && !_0x1576d6[_0x160d90 + 1],
        _0x4d978e = _0x8dd798(_0x1576d6[_0x160d90 + 1], _0x1576d6[_0x160d90 + 2]);
      return [{}, _0x41060e ? null : _0x2f8322.instance(_0x4d978e), _0x160d90 + 3];
    }
    function _0x4481f6(_0x211803, _0x2d32e3) {
      return [{}, _0x211803[_0x2d32e3] ? _0x137650.create(_0x211803[_0x2d32e3]) : null, _0x2d32e3 + 1];
    }
    RegExp("^T?" + _0x2f6c90.source + "$"), _0x26bcf4(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, _0x534589), _0x26bcf4(/(\d{4})-?W(\d\d)(?:-?(\d))?/, _0x534589), _0x26bcf4(/(\d{4})-?(\d{3})/, _0x534589), _0x26bcf4(_0x259225), _0x5e6328(function _0x49795d(_0x4c415b, _0x5b7619) {
      return [{
        year: _0x26b4c0(_0x4c415b, _0x5b7619),
        month: _0x26b4c0(_0x4c415b, _0x5b7619 + 1, 1),
        day: _0x26b4c0(_0x4c415b, _0x5b7619 + 2, 1)
      }, null, _0x5b7619 + 3];
    }, _0x1d2c79, _0x498148, _0x4481f6), _0x5e6328(_0x17914b, _0x1d2c79, _0x498148, _0x4481f6), _0x5e6328(_0x153f5e, _0x1d2c79, _0x498148, _0x4481f6), _0x5e6328(_0x1d2c79, _0x498148, _0x4481f6), _0x5e6328(_0x1d2c79), _0x26bcf4(/(\d{4})-(\d\d)-(\d\d)/, _0x301f0d), _0x26bcf4(_0x5192f0), _0x5e6328(_0x1d2c79, _0x498148, _0x4481f6);
    const _0x389a0c = {
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
      _0x596d41 = 365.2425,
      _0x4a96a5 = 30.436875,
      _0x156cff = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
    _0x156cff.slice(0).reverse(), Symbol["for"]("nodejs.util.inspect.custom"), Symbol["for"]("nodejs.util.inspect.custom");
    const _0x52fb12 = "[ " + globalThis.String.fromCharCode(160) + "]";
    new RegExp(_0x52fb12, "g"), Symbol["for"]("nodejs.util.inspect.custom");
    const _0x5c2242 = "currentContentScript",
      _0x58a8aa = "pendingContentScript",
      _0x1036ed = "currentPopupScript",
      _0x482d60 = "pendingPopupScript",
      _0x389e14 = "currentInjectedScript",
      _0x45e2f5 = "pendingInjectedScript";
    new Set();
    const _0x257d5a = "__wingmanSetTimeoutWithStackInstalled";
    !function _0x2bb680() {
      const _0x295335 = globalThis;
      if (_0x295335["__wingmanSetTimeoutWithStackInstalled"]) return;
      const _0x35d113 = _0x295335.setTimeout.bind(_0x295335);
      _0x295335.setTimeout = (_0x2f39f4, _0x304d12, ..._0xc7e8c3) => {
        if ("function" != typeof _0x2f39f4) return _0x35d113(_0x2f39f4, _0x304d12, ..._0xc7e8c3);
        const _0xe17ceb = function _0x36f8f6(_0x1bb4c7, _0x41caaf) {
          return function _0x17fd78(..._0x576175) {
            try {
              const _0x160afd = _0x1bb4c7.apply(this, _0x576175);
              return null != _0x160afd && "function" == typeof _0x160afd.then ? _0x160afd["catch"](_0x22ba2d => {
                throw _0x4cceab(_0x22ba2d, _0x41caaf), _0x22ba2d;
              }) : _0x160afd;
            } catch (_0x5432c2) {
              throw _0x4cceab(_0x5432c2, _0x41caaf), _0x5432c2;
            }
          };
        }(_0x2f39f4, new Error("setTimeout scheduled here").stack);
        return _0x35d113(_0xe17ceb, _0x304d12, ..._0xc7e8c3);
      }, _0x295335["__wingmanSetTimeoutWithStackInstalled"] = true;
    }();
    const _0x33c756 = (_0x3934f7, _0x295707) => globalThis.Date.now() - _0x3934f7.getTime() > _0x295707,
      _0xd3d098 = _0x55efa9 => 1000 * _0x55efa9,
      _0x1a4046 = _0x44a9e0 => 60 * _0x44a9e0 * 1000;
    function _0x5bcb1c(_0x69eb12, _0x14598f = {
      deep: false,
      mutate: true
    }) {
      if (_0x4848bd(_0x69eb12, "array")) return _0x69eb12.map(_0x4f3d1c => _0x5bcb1c(_0x4f3d1c, _0x14598f));
      if (_0x4848bd(_0x69eb12, "object")) {
        const _0x4bbfc9 = _0x14598f.mutate ? _0x69eb12 : {};
        for (const _0x1af919 in _0x69eb12) {
          const _0x5d827c = _0x69eb12[_0x1af919],
            _0x434195 = _0x1af919.replace(/_([a-z])/g, (_0x109722, _0x29792c) => _0x29792c.toUpperCase());
          _0x4bbfc9[_0x434195] = _0x14598f.deep && "object" == typeof _0x5d827c ? _0x5bcb1c(_0x5d827c, _0x14598f) : _0x5d827c, _0x14598f.mutate && _0x1af919 !== _0x434195 && delete _0x4bbfc9[_0x1af919];
        }
        return _0x4bbfc9;
      }
      return _0x69eb12;
    }
    _0x22fd95.parse, new Set(["networkLog", "shouldLog", "currentContentScript", "pendingContentScript", "currentInjectedScript", "pendingInjectedScript", "currentPopupScript", "pendingPopupScript", "dynamicInterceptions"]);
    function _0x2d00e3(_0x3ecfe1) {
      if (!(_0x3ecfe1 <= 0)) return new globalThis.Promise(_0x7ff2f3 => globalThis.setTimeout(_0x7ff2f3, _0x3ecfe1));
    }
    function _0x42a136(_0x2bc5e6, _0x3beddb = 0) {
      return globalThis.Math.random() * globalThis.Math.abs(_0x2bc5e6 - _0x3beddb) + globalThis.Math.min(_0x2bc5e6, _0x3beddb);
    }
    function _0x514276(_0x16a86b, _0x9b6415 = 0) {
      if (!(_0x16a86b <= 0 && _0x9b6415 <= 0)) return _0x2d00e3(_0x42a136(_0x16a86b, _0x9b6415));
    }
    function _0x242748(_0x1f4a59, _0x428238) {
      return _0x1f4a59 + _0x428238 / 1000000000;
    }
    function _0x422ee6(_0x10d6a7) {
      return !(!_0x10d6a7 || null == _0x10d6a7 || null == _0x10d6a7) && ("boolean" == typeof _0x10d6a7 ? _0x10d6a7 : "string" == typeof _0x10d6a7 ? _0x10d6a7.trim().length > 0 : globalThis.Array.isArray(_0x10d6a7) ? 0 != _0x10d6a7.length && _0x10d6a7.every(_0x422ee6) : "object" == typeof _0x10d6a7 ? globalThis.Object.keys(_0x10d6a7).length > 0 : "number" == typeof _0x10d6a7 ? 0 != _0x10d6a7 : !!_0x10d6a7);
    }
    _0x2b719b.error, _0x2b719b.error, _0x2b719b.error, _0x2b719b.error, _0x2b719b.error, _0x2b719b.error, _0x2b719b.error, _0x2b719b.error;
    function _0x3e6b65(_0x4d19da) {
      return "string" == typeof _0x4d19da && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(_0x4d19da);
    }
    const _0x5ce230 = "always";
    function _0x427bd9(_0x130154, _0x2cc362) {
      globalThis.console.warn("Forwarding to sentry capture", _0x2cc362);
      const _0x5b9e67 = {
        transactionName: _0x130154,
        extendedMessage: _0x4d65b9(_0x2cc362)
      };
      globalThis.window.dispatchEvent(new CustomEvent(_0x2912ec.sentryCapture, {
        detail: _0x5b9e67
      }));
    }
    function _0x37432a() {
      var _0x1cb721;
      const {
        message$: _0x311de7
      } = _0x442618("injected-sentry");
      try {
        let _0x3f2dbe;
        const _0x2300c5 = globalThis._sentryDebugIdIdentifier;
        _0x3f2dbe = null !== (_0x1cb721 = function _0x5ac9e3(_0x214486) {
          var _0x1ca606;
          if (!_0x214486) return null;
          const _0x5c5cf6 = _0x214486.match(/sentry-dbid-([a-f0-9-]{36})/i) || _0x214486.match(/debugId=([a-f0-9-]{36})/i),
            _0x4c9ecd = null !== (_0x1ca606 = null == _0x5c5cf6 ? undefined : _0x5c5cf6[1]) && undefined !== _0x1ca606 ? _0x1ca606 : null;
          return _0x3e6b65(_0x4c9ecd) ? _0x4c9ecd : null;
        }("string" == typeof _0x2300c5 ? _0x2300c5 : null)) && undefined !== _0x1cb721 ? _0x1cb721 : undefined;
        const _0x1c8388 = globalThis._sentryDebugIds;
        if (!_0x3f2dbe && _0x1c8388 && "object" == typeof _0x1c8388) {
          const _0x4fe90f = globalThis.Object.entries(_0x1c8388).filter(_0x2a3795 => "string" == typeof _0x2a3795[0] && "string" == typeof _0x2a3795[1]).find(([_0x4d2138]) => _0x4d2138.includes("actualInjectedScript"));
          _0x3f2dbe = null == _0x4fe90f ? undefined : _0x4fe90f[1];
        }
        if (_0x3e6b65(_0x3f2dbe)) {
          try {
            globalThis.window.__sentryInjectedDebugId = _0x3f2dbe;
          } catch (_0x3df82f) {}
          const _0x14c789 = () => {
            try {
              if (null === globalThis.document || undefined === globalThis.document ? undefined : globalThis.document.documentElement) return globalThis.document.documentElement.dataset.sentryInjectedDebugId = _0x3f2dbe, globalThis.window.dispatchEvent(new CustomEvent(_0x2912ec.sentryDebugId, {
                detail: {
                  debugId: _0x3f2dbe,
                  filename: "actualInjectedScript.js"
                }
              })), true;
            } catch (_0x4b9682) {}
            return false;
          };
          if (!_0x14c789()) {
            const _0x3dfff4 = () => {
              _0x14c789() && (globalThis.document.removeEventListener("DOMContentLoaded", _0x3dfff4), globalThis.document.removeEventListener("readystatechange", _0x3dfff4));
            };
            globalThis.document.addEventListener("DOMContentLoaded", _0x3dfff4), globalThis.document.addEventListener("readystatechange", _0x3dfff4), globalThis.setTimeout(_0x3dfff4, 0);
          }
        } else _0x1c8388 && "object" == typeof _0x1c8388 && globalThis.Object.keys(_0x1c8388).length > 0 && _0x427bd9("Missing debug ID in injected context", _0x311de7(1, '', {
          sentry: "rare",
          extra: {
            hasDebugIdIdentifier: "string" == typeof _0x2300c5,
            debugIdKeys: globalThis.Object.keys(null != _0x1c8388 ? _0x1c8388 : {}).slice(0, 3)
          }
        }, true));
      } catch (_0x588beb) {}
    }
    async function _0x2d4093() {
      if (!_0x72cd86) return false;
      throw function _0x439c43(_0xbbc52c, _0x225ec1, _0x4c0102) {
        const _0x5df741 = _0x4c0102 ? new Error(_0xbbc52c) : {
            message: _0xbbc52c
          },
          _0x8675a0 = new _0x1ef9d3(_0xbbc52c, {
            sentry: "always",
            sentryLevel: _0x2b719b.error,
            key: _0x225ec1,
            skipFingerprint: true
          }).createError(_0x5df741);
        return _0x8675a0["__devSentryTest"] = true, _0x8675a0.code = 13, _0x8675a0;
      }("Dev test (sdk stack) - expected exception capture", "dev-sentry-sdk-stack", true);
    }
    class _0x5ee43d {
      static ["fetch"](_0xa34d78, _0x204b7a) {
        return new globalThis.Promise((_0x48ed2d, _0x34ec22) => {
          const _0x5650fa = _0x491d77(8),
            _0x1c3e8e = "int-ejectedData-" + _0x5650fa,
            _0x329a82 = _0x366e11 => {
              globalThis.window.dispatchEvent(new CustomEvent("int-acknowledge-" + _0x1c3e8e)), globalThis.window.removeEventListener(_0x1c3e8e, _0x329a82), _0x366e11.detail.success ? _0x48ed2d(_0x366e11.detail.data) : _0x34ec22(_0x366e11.detail.error);
            };
          globalThis.window.addEventListener(_0x1c3e8e, _0x329a82), globalThis.window.dispatchEvent(new CustomEvent(_0x2912ec.backgroundFetch, {
            detail: {
              url: _0xa34d78,
              init: _0x204b7a,
              ejectedDataEventID: _0x1c3e8e
            }
          }));
        });
      }
      static ["evalCode"]({
        code: _0x15e96f
      }) {
        return new globalThis.Promise((_0x22f26d, _0xafcd39) => {
          const _0x577986 = _0x491d77(8),
            _0x1cdb90 = "int-ejectedData-" + _0x577986,
            _0x48bbb0 = _0x367504 => {
              globalThis.window.dispatchEvent(new CustomEvent("int-acknowledge-" + _0x1cdb90)), globalThis.window.removeEventListener(_0x1cdb90, _0x48bbb0), _0x367504.detail.success ? _0x22f26d(_0x367504.detail.data) : _0xafcd39(_0x367504.detail.error);
            };
          globalThis.window.addEventListener(_0x1cdb90, _0x48bbb0), globalThis.window.dispatchEvent(new CustomEvent(_0x2912ec.evalCode, {
            detail: {
              c: _0x15e96f,
              ejectedDataEventID: _0x1cdb90
            }
          }));
        });
      }
      static ["ping"]() {
        return true;
      }
      static ["devSentryTest"]() {
        !function _0x26fe31() {
          _0x72cd86 && function _0x4e427d() {
            throw new _0x1ef9d3("[INJECTED] Dev test - expected file: base.ts", {
              sentry: "always",
              sentryLevel: _0x2b719b.error,
              key: "dev-sentry-injected",
              skipFingerprint: true
            }).createError();
          }();
        }();
      }
      static async ["devSentrySdkTest"]() {
        return await _0x2d4093();
      }
      static async ["devSentrySdkNoStackTest"]() {
        return await async function _0x32fd61() {
          if (!_0x72cd86) return false;
          const _0x36958c = "message goes here",
            _0x417f2f = new _0x1ef9d3("message goes here", {
              sentry: "always",
              sentryLevel: _0x2b719b.error,
              key: "dev-sentry-sdk-no-stack",
              skipFingerprint: true
            }).createError({
              message: "message goes here"
            });
          throw _0x417f2f["__devSentryTest"] = true, _0x417f2f.code = 13, _0x417f2f;
        }();
      }
      static async ["devSentrySdkNoStackEmptyMessageTest"]() {
        return await async function _0x1ac146() {
          if (!_0x72cd86) return false;
          const _0x12e612 = new _0x1ef9d3('', {
            sentry: "always",
            sentryLevel: _0x2b719b.error,
            key: "dev-sentry-sdk-no-stack-empty-message",
            skipFingerprint: true,
            networkRelated: true
          }).createError({
            message: '',
            name: "AjaxError",
            networkError: '',
            responseText: '',
            statusCode: 0,
            url: "/api/v1/friendships/pending/"
          });
          throw _0x12e612["__devSentryTest"] = true, _0x12e612.code = 13, _0x12e612;
        }();
      }
      static async ["devSentrySdkGlobalTest"]() {
        return await async function _0x4e99a3() {
          return !!_0x72cd86 && (globalThis.setTimeout(() => {
            const _0x497d98 = new Error("Dev test (stack) - expected file: base.ts");
            throw _0x497d98["__devSentryTest"] = true, _0x497d98;
          }, 0), await new globalThis.Promise(_0x39ae17 => globalThis.setTimeout(_0x39ae17, 50)), true);
        }();
      }
      static async ["devSentrySdkGlobalNoStackTest"]() {
        return await async function _0x28f5cd() {
          return !!_0x72cd86 && (globalThis.setTimeout(() => {
            throw {
              message: "Dev test (no stack) - expected file: base.ts",
              ["__devSentryTest"]: true
            };
          }, 0), await new globalThis.Promise(_0x384ba8 => globalThis.setTimeout(_0x384ba8, 50)), true);
        }();
      }
    }
    const _0x20be49 = {},
      _0x57efeb = {
        internalModuleName: _0x2f6d1a => "__int:" + _0x2f6d1a,
        findImports: _0x2ddfa9 => _0x2ddfa9.match(/[\w$]=n(\d*?)/gi) || [],
        ["findImportName"](_0x6140aa, _0x3e1f26) {
          var _0x24f3c4;
          return null === (_0x24f3c4 = new RegExp("(([\\w$]))=n\\(" + _0x3e1f26 + "\\)", "imgs").exec(_0x6140aa)) || undefined === _0x24f3c4 ? undefined : _0x24f3c4[1];
        },
        ["findImportCount"](_0x5dc116) {
          var _0x35e91c;
          return (null === (_0x35e91c = _0x5dc116.match(/[\w$]=n(\d*?)/gi)) || undefined === _0x35e91c ? undefined : _0x35e91c.length) || 0;
        },
        findExportCount: _0x2cdf39 => globalThis.Object.keys(_0x2cdf39).length,
        ["findExport"](_0x29c8a9, _0x43356f) {
          if (!_0x29c8a9.exports) return null;
          const _0x39c04f = [],
            _0x5ed15f = globalThis.Object.keys(_0x29c8a9.exports);
          if (null != _0x43356f.names && _0x43356f.names.some(_0x3e0808 => !_0x5ed15f.includes(_0x3e0808))) return null;
          if (null != _0x43356f.count) {
            if (globalThis.Array.isArray(_0x43356f.count)) {
              const [_0x5f0f86, _0x22b71f] = _0x43356f.count;
              if (_0x5ed15f.length < _0x5f0f86 || _0x5ed15f.length > _0x22b71f) return null;
            } else {
              if (_0x43356f.count !== _0x5ed15f.length) return null;
            }
          }
          for (const _0x1aa9ba of _0x5ed15f) {
            const _0x42cf46 = _0x4cc3d2(() => _0x29c8a9.exports[_0x1aa9ba]);
            if (null == _0x42cf46) continue;
            if (_0x43356f.key && _0x1aa9ba !== _0x43356f.key) continue;
            if (null != _0x43356f.predicate && !_0x43356f.predicate(_0x42cf46)) continue;
            if (null != _0x43356f.matchesProps && !_0x43356f.matchesProps.every(_0x5beac2 => null != _0x4cc3d2(() => _0x42cf46[_0x5beac2]))) continue;
            if (null != _0x43356f.matches && !globalThis.Object.entries(_0x43356f.matches).every(([_0x1e6d89, _0x1feb71]) => _0x4cc3d2(() => _0x42cf46[_0x1e6d89]) === _0x1feb71)) continue;
            if (null != _0x43356f.includes && !_0x43356f.includes.every(_0x2ca1dd => "function" == typeof _0x42cf46 && "function" == typeof _0x42cf46.toString && ("string" == typeof _0x2ca1dd ? _0x42cf46.toString().includes(_0x2ca1dd) : _0x2ca1dd.test(_0x42cf46.toString())))) continue;
            if (null != _0x43356f.matchesType && typeof _0x42cf46 !== _0x43356f.matchesType) continue;
            const _0xbb6712 = {
              key: _0x1aa9ba,
              value: _0x42cf46
            };
            if (!_0x43356f.accumulate) return _0xbb6712;
            _0x39c04f.push(_0xbb6712);
          }
          return _0x43356f.accumulate ? _0x39c04f : null;
        }
      },
      _0x9b9cc3 = globalThis.webpackData || {
        webpackRequires: undefined,
        webpackChunkName: undefined
      },
      _0x2ff5c3 = {
        ["findChunkName"]() {
          let _0x3e1abe;
          return _0x3e1abe = "__LOADABLE_LOADED_CHUNKS__" in globalThis.window ? "__LOADABLE_LOADED_CHUNKS__" : globalThis.Object.keys(globalThis.window).find(_0x559088 => _0x559088.startsWith("webpackChunk")), _0x9b9cc3.webpackChunkName = _0x3e1abe;
        },
        ["getChunks"]() {
          const {
            assert$: _0x5cb054
          } = _0x442618("zfmz4dj");
          return _0x9b9cc3.webpackChunkName || _0x2ff5c3.findChunkName(), _0x5cb054(1, _0x9b9cc3.webpackChunkName, '', {
            sentry: "veryRare"
          }, true), globalThis.window[_0x9b9cc3.webpackChunkName];
        },
        ["getModulesEntries"]() {
          let _0x4015a4 = {};
          if ((null === (_0x50606f = _0x9b9cc3.webpackChunkName) || undefined === _0x50606f ? undefined : _0x50606f.includes("telegram")) || (() => {
            var _0x4fd392;
            return null === (_0x4fd392 = _0x9b9cc3.webpackChunkName) || undefined === _0x4fd392 ? undefined : _0x4fd392.includes("of_vue");
          })() || (() => {
            var _0x21cb3d;
            return null === (_0x21cb3d = _0x9b9cc3.webpackChunkName) || undefined === _0x21cb3d ? undefined : _0x21cb3d.includes("grindr_web");
          })() || (() => {
            var _0x3a5262;
            return null === (_0x3a5262 = _0x9b9cc3.webpackChunkName) || undefined === _0x3a5262 ? undefined : _0x3a5262.includes("discord");
          })() || (() => {
            var _0x47295a;
            return null === (_0x47295a = _0x9b9cc3.webpackChunkName) || undefined === _0x47295a ? undefined : _0x47295a.includes("twitter");
          })() || "webpackChunkweb" === _0x9b9cc3.webpackChunkName) {
            const _0x44ee51 = _0x57efeb.internalModuleName("req");
            for (const _0x1202de of _0x2ff5c3.getRequires()) {
              const _0x241617 = globalThis.Object.values(_0x1202de).find(_0xff3f8c => "function" == typeof _0xff3f8c[_0x44ee51]);
              _0x241617 && (_0x4015a4 = {
                ..._0x4015a4,
                ..._0x241617
              });
            }
          } else _0x4015a4 = _0x2ff5c3.getChunks().map(_0x4ac8c1 => _0x4ac8c1[1]).reduce((_0x5267a6, _0x45afb8) => globalThis.Object.assign(_0x5267a6, _0x45afb8), {});
          var _0x50606f;
          return globalThis.Object.entries(_0x4015a4);
        },
        ["getRequires"]() {
          const {
            assert$: _0x1a371a
          } = _0x442618("f4f489");
          return null != _0x9b9cc3.webpackRequires || (_0x2ff5c3.registerModule("req", (_0x3c1b48, _0x16f9f8, _0x69122e) => {
            _0x9b9cc3.webpackRequires && _0x9b9cc3.webpackRequires.includes(_0x69122e) || (_0x9b9cc3.webpackRequires = [...(_0x9b9cc3.webpackRequires || []), _0x69122e]);
          }, false), _0x1a371a(1, _0x9b9cc3.webpackRequires, '', {
            sentry: false
          }, true)), _0x9b9cc3.webpackRequires;
        },
        ["module"](_0x478156) {
          const _0x4ff46c = _0x2ff5c3.getRequires();
          for (const _0x5021ac of _0x4ff46c) try {
            const _0x410a7b = _0x5021ac(_0x478156);
            if (_0x410a7b) return _0x410a7b;
          } catch (_0x3642db) {
            continue;
          }
          return null;
        },
        async ["refactorExports"](_0x78f418, _0x23683e) {
          const {
              assert$: _0x3157de,
              throw$: _0x20dd4e
            } = _0x442618("e3eafb"),
            _0x2cf85b = _0x57efeb.internalModuleName(_0x78f418);
          if (_0x2cf85b in _0x20be49) return _0x20be49[_0x2cf85b];
          const _0x44cbe9 = _0x2ff5c3.findModule({
            key: _0x78f418,
            id: _0x78f418
          });
          _0x44cbe9 || _0x20dd4e(1, '', {
            sentry: "veryRare"
          }, true);
          let _0x3cd1dd = _0x44cbe9.moduleInitiator.toString();
          const _0x41f900 = _0x23683e(_0x3cd1dd);
          _0x41f900 || _0x20dd4e(2, '', {
            sentry: "veryRare"
          }, true);
          const _0x3cb214 = globalThis.Object.entries(_0x41f900).filter(([_0x5399f9, _0x1697d7]) => null == _0x1697d7);
          _0x3cb214.length > 0 && _0x20dd4e(3, '', {
            sentry: "veryRare",
            extra: {
              moduleId: _0x78f418,
              failedExports: _0x3cb214.map(([_0x176ac4]) => _0x176ac4)
            }
          }, true), /^\d+\s*\(/.test(_0x3cd1dd) && (_0x3cd1dd = _0x3cd1dd.replace(/^\d+/, "function"));
          const _0x22e953 = _0x3cd1dd.lastIndexOf("}"),
            _0xcc2324 = globalThis.Object.entries(_0x41f900).map(([_0x2ff802, _0x21da21]) => "__int_t." + _0x2ff802 + " = " + _0x21da21).join(";\n"),
            _0x3a7456 = _0x3cd1dd.slice(0, _0x22e953) + (";" + _0xcc2324) + _0x3cd1dd.slice(_0x22e953);
          {
            const _0x1b4812 = "__tmp_" + _0x78f418,
              _0x372bce = "globalThis." + _0x1b4812 + " = ((__" + "int" + "_e, __" + "int" + "_t, __" + "int" + "_n) => {\n          const original = " + _0x3a7456 + ";\n          return original(__" + "int" + "_e, __" + "int" + "_t, __" + "int" + "_n)\n        })";
            await _0x5ee43d.evalCode({
              code: _0x372bce
            });
            const _0x4cfe92 = globalThis[_0x1b4812];
            return _0x3157de(2, _0x4cfe92, '', {
              sentry: "veryRare",
              extra: {
                moduleId: _0x78f418
              }
            }, true), _0x2ff5c3.registerModule(_0x78f418, _0x4cfe92);
          }
        },
        ["registerModule"](_0x2490b8, _0x3f36e8, _0x3d672b = true) {
          const _0x196a0f = _0x57efeb.internalModuleName(_0x2490b8);
          if (_0x196a0f in _0x20be49) return _0x20be49[_0x196a0f];
          if (_0x2ff5c3.getChunks().push([[_0x196a0f], {
            [_0x196a0f]: _0x3f36e8
          }, _0x2dfc4b => _0x2dfc4b(_0x196a0f)]), !_0x3d672b) return null;
          const _0x5bc54f = _0x2ff5c3.module(_0x196a0f);
          return _0x20be49[_0x196a0f] = _0x5bc54f;
        },
        ["hasLoadedModule"](_0x3e43a3) {
          var _0xb1426a;
          const _0x404ed2 = _0x2ff5c3.getRequires();
          for (const _0x18615a of _0x404ed2) {
            const _0x32177e = globalThis.Object.keys(_0x18615a),
              _0x7ff2fe = _0x57efeb.internalModuleName("req"),
              _0xb19f6c = _0x32177e.find(_0x5e8eb => {
                const _0x193b05 = _0x18615a[_0x5e8eb];
                if ("object" != typeof _0x193b05) return false;
                const _0x1810d9 = _0x193b05[_0x7ff2fe];
                return !!_0x1810d9 && "loaded" in _0x1810d9;
              });
            return !_0xb19f6c || !!(null === (_0xb1426a = _0x18615a[_0xb19f6c][_0x3e43a3]) || undefined === _0xb1426a ? undefined : _0xb1426a.loaded);
          }
          return false;
        },
        ["findModule"](_0x363d47) {
          const {
            assert$: _0x1db3d9,
            message$: _0x3c9b01
          } = _0x442618("ncaj37d");
          if (_0x363d47.key && _0x20be49[_0x363d47.key]) return _0x20be49[_0x363d47.key];
          const _0x2afbe7 = [],
            _0x45d0ea = _0x2ff5c3.getModulesEntries();
          for (const [_0x21b7a0, _0x113ebc] of _0x45d0ea) {
            if (_0x21b7a0.startsWith(_0x57efeb.internalModuleName(''))) continue;
            const _0x48e117 = null == _0x113ebc ? undefined : _0x113ebc.toString();
            if (null == _0x48e117) continue;
            if (_0x363d47.id && _0x21b7a0 !== _0x363d47.id.toString()) continue;
            if (null != _0x363d47.importsModules && _0x363d47.importsModules.some(_0x2bc266 => !_0x48e117.includes(_0x2bc266))) continue;
            if (null != _0x363d47.importCount && _0x363d47.importCount !== _0x57efeb.findImportCount(_0x48e117)) continue;
            if (null != _0x363d47.includes && _0x363d47.includes.some(_0x3f61f4 => "string" == typeof _0x3f61f4 ? !_0x48e117.includes(_0x3f61f4) : !_0x3f61f4.test(_0x48e117))) continue;
            if (!_0x363d47.includeNonLoaded && !_0x2ff5c3.hasLoadedModule(_0x21b7a0)) continue;
            const _0x2500b4 = _0x4cc3d2(() => _0x2ff5c3.module(_0x21b7a0));
            if (_0x2500b4 == globalThis.window) continue;
            if (null == _0x2500b4) continue;
            const _0xef4d51 = {
              moduleKey: _0x21b7a0,
              moduleInitiator: _0x113ebc,
              exports: _0x2500b4
            };
            if (_0x363d47.exportsMeta) {
              const _0x5f1619 = _0x57efeb.findExport(_0xef4d51, _0x363d47.exportsMeta);
              if (globalThis.Array.isArray(_0x5f1619) ? !_0x5f1619.length : !_0x5f1619) continue;
              null != _0x5f1619 && (_0xef4d51.exportsMatched = _0x5f1619);
            }
            (null == _0x363d47.predicate || _0x363d47.predicate({
              ..._0xef4d51,
              content: _0x48e117
            })) && _0x2afbe7.push(_0xef4d51);
          }
          _0x363d47.assert && _0x4c64f4(_0x2afbe7.length, _0x363d47.assert), _0x363d47.assertExport && _0x4c64f4(_0x2afbe7.every(_0x16abdb => _0x16abdb.exportsMatched), _0x363d47.assertExport), !_0x363d47.accumulate && _0x2afbe7.length > 1 && _0x427bd9(_0x363d47.key, _0x3c9b01(1, '', {
            extra: {
              key: _0x363d47.key
            },
            sentry: "always"
          }, true));
          const _0x113aa1 = _0x363d47.accumulate ? _0x2afbe7 : _0x2afbe7[0];
          return _0x363d47.key && _0x2afbe7.length && (_0x20be49[_0x363d47.key] = _0x113aa1), _0x113aa1;
        },
        ["findExport"](_0x29d845) {
          const {
              assert$: _0x3045b5,
              message$: _0x7bd887
            } = _0x442618("jiyrs73"),
            _0x1b6fb8 = _0x2ff5c3.findModule({
              ..._0x29d845,
              accumulate: false
            });
          return _0x3045b5(1, !!_0x1b6fb8, '', {
            sentry: "rare"
          }, true), _0x3045b5(2, _0x1b6fb8.exportsMatched, '', {
            extra: {
              key: _0x29d845.key
            },
            sentry: "rare"
          }, true);
        }
      };
    globalThis.window.WebpackBase = _0x2ff5c3;
    let _0x2f2819 = null;
    const _0x22cf1c = {
        ..._0x2ff5c3,
        store: undefined,
        ["getSnapchatStoreModule"]() {
          const {
            message$: _0x977353
          } = _0x442618("13913f");
          if (null != _0x22cf1c.store) return _0x22cf1c.store;
          const _0x31866e = _0x2ff5c3.findModule({
            key: "store-module",
            accumulate: true,
            assert: _0x977353(1, '', {
              sentry: "rare"
            }, true),
            assertExport: _0x977353(2, '', {
              sentry: "rare"
            }, true),
            includes: ["broadcastTypingActivity"],
            exportsMeta: {
              matchesProps: ["getState", "setState"]
            }
          })[0];
          return _0x22cf1c.store = _0x31866e, _0x31866e;
        },
        accessSnapchatStore: (_0x5e7cc5 = '') => _0x229767(_0x5e7cc5, _0x22cf1c.getSnapchatStoreModule().exportsMatched.value.getState()),
        async ["callSnapchatStore"](_0x298a56, ..._0x5bc965) {
          const {
            assert$: _0x38d81f,
            message$: _0x2cd5e8
          } = _0x442618("5ba0d9");
          _0x38d81f(1, null != _0x298a56, '', {
            sentry: "rare"
          }, true), _0x38d81f(2, _0x4848bd(_0x298a56, "string"), '', {
            sentry: "rare"
          }, true);
          const _0x35901c = _0x229767(_0x298a56, (await _0x22cf1c.getSnapchatStoreModule()).exportsMatched.value.getState());
          return _0x38d81f(3, "function" == typeof _0x35901c, '', {
            extra: {
              fn: _0x35901c,
              path: _0x298a56
            },
            sentry: "rare"
          }, true), _0x35901c(..._0x5bc965);
        },
        ContentEncoding: () => {
          const {
            assert$: _0x34625f,
            message$: _0x5a312e
          } = _0x442618("f8b2a4");
          return _0x2ff5c3.findModule({
            key: "content-encoding",
            assert: _0x5a312e(1, '', {
              sentry: "rare"
            }, true),
            assertExport: _0x5a312e(2, '', {
              sentry: "rare"
            }, true),
            includes: ["text", "share", "statusMessage", "location", "snapReply"].map(_0x368eca => "\"" + _0x368eca + "\"===e.content?.$case"),
            exportsMeta: {
              matchesProps: ["encode"]
            }
          });
        },
        React: () => _0x2ff5c3.findModule({
          key: "react-module",
          includes: ["react.strict_mode"]
        }),
        Rpc: () => {
          const {
              assert$: _0x212d43,
              message$: _0x143b5d
            } = _0x442618("b06b33"),
            _0x3be22d = _0x22cf1c.getSnapchatStoreModule(),
            _0x788bbc = _0x3be22d.exportsMatched;
          return _0x2ff5c3.findModule({
            key: "rpc-client",
            assert: _0x143b5d(1, '', {
              sentry: "rare"
            }, true),
            assertExport: _0x143b5d(2, '', {
              sentry: "rare"
            }, true),
            includes: [new RegExp("(([\\w$])\\s*=\\s*n\\(" + _0x3be22d.moduleKey + "\\)).*(\\2." + _0x788bbc.key + ".getState\\(\\).auth.refreshToken)", "igs")],
            exportsMeta: {
              includes: ["API_ERROR_GRPC_7_16"]
            }
          });
        },
        Locale: () => {
          const {
            assert$: _0x3042f7,
            message$: _0x3e78a9
          } = _0x442618("788003");
          return _0x2ff5c3.findModule({
            key: "locale-handler",
            assert: _0x3e78a9(1, '', {
              sentry: "rare"
            }, true),
            assertExport: _0x3e78a9(2, '', {
              sentry: "rare"
            }, true),
            includes: ["getLocale="],
            exportsMeta: {
              key: "getLocale"
            }
          });
        },
        Http: {
          ["getExportKeyForAuthedFetch"](_0x14ebbb, _0x36c24b) {
            const _0x121d02 = {},
              _0x4e58bf = /n\.d\s*\(\s*t\s*,\s*\{([\s\S]*?)\}\s*\)/g,
              _0x38f510 = /([$\w]+)\s*:\s*\(\s*\)\s*=>\s*([$\w]+)/g;
            let _0x53370b;
            for (; _0x53370b = _0x4e58bf.exec(_0x14ebbb);) {
              let _0x39ddf7,
                _0x3e7c4d = _0x53370b[1];
              for (; _0x39ddf7 = _0x38f510.exec(_0x3e7c4d);) {
                const [, _0x15923f, _0x371193] = _0x39ddf7;
                _0x121d02[_0x15923f] = _0x371193;
              }
            }
            const _0x42a8b8 = {},
              _0x4e2a5f = /([$\w]+)\s*=\s*\(0\s*,\s*a\.Jr\)\s*\(\s*\{\s*name\s*:\s*(['"])(.*?)\2/gs;
            let _0x594563;
            for (; _0x594563 = _0x4e2a5f.exec(_0x14ebbb);) {
              const [, _0x521652,, _0x1b71ca] = _0x594563;
              _0x42a8b8[_0x521652] = _0x1b71ca;
            }
            const _0x3e5c7a = globalThis.Object.keys(_0x42a8b8).find(_0x1753ce => _0x42a8b8[_0x1753ce] === _0x36c24b);
            if (!_0x3e5c7a) return null;
            const _0xefd463 = globalThis.Object.keys(_0x121d02).find(_0x298ec5 => _0x121d02[_0x298ec5] === _0x3e5c7a);
            return null != _0xefd463 ? _0xefd463 : null;
          },
          getFetcher: () => {
            const {
              assert$: _0x382407,
              message$: _0x1dbd1c
            } = _0x442618("xqmof4h8d");
            if (_0x2f2819) return _0x2f2819;
            const _0x3e4ee8 = _0x2ff5c3.findModule({
                key: "http-functions-module",
                assert: _0x1dbd1c(1, '', {
                  sentry: "rare"
                }, true),
                includes: ["default-authed-fetch"]
              }),
              _0x1e5b9f = _0x22cf1c.Http.getExportKeyForAuthedFetch(_0x3e4ee8.moduleInitiator.toString(), "default-authed-fetch");
            return _0x2f2819 = _0x3e4ee8.exports[_0x1e5b9f], _0x2f2819;
          },
          fetch: _0x274080 => _0x22cf1c.Http.getFetcher()(_0x274080)
        }
      },
      _0x35a362 = globalThis.Object.freeze({
        FRIEND: 0,
        PENDING: 1,
        BLOCKED: 2,
        DELETED: 3,
        FOLLOWING: 6
      }),
      _0x10c530 = globalThis.Object.freeze({
        ONEONONE: 0,
        USERCREATEDGROUP: 1
      }),
      _0x2e4142 = globalThis.Object.freeze({
        UNSET: 0,
        ACCEPTED: 1,
        IGNORED: 2,
        SENT: 3,
        PENDING: 4
      }),
      _0x5ad269 = 0,
      _0x46038c = 1,
      _0x430bdf = 2,
      _0xef48a1 = {
        UNKNOWN: 0,
        READ: 1,
        RELEASE: 2,
        SAVE: 3,
        UNSAVE: 4,
        ERASE: 5,
        SCREENSHOT: 6,
        SCREEN_RECORD: 7,
        REPLAY: 8,
        REACTION: 9,
        REMOVEREACTION: 10,
        REVOKETRANSCRIPTION: 11,
        ALLOWTRANSCRIPTION: 12,
        ERASESAVEDSTORYMEDIA: 13,
        EDITMESSAGE: 14
      },
      _0x30e355 = {
        SNAP: 1,
        CHAT: 2,
        EXTERNAL_MEDIA: 3,
        SHARE: 4,
        NOTE: 5,
        STICKER: 6,
        STATUS: 7,
        LOCATION: 8,
        MEDIA: 9,
        STATUS_SAVE_TO_CAMERA_ROLL: 9,
        STATUS_CONVERSATION_CAPTURE_SCREENSHOT: 10,
        STATUS_CONVERSATION_CAPTURE_RECORD: 11,
        STATUS_CALL_MISSED_VIDEO: 12,
        STATUS_CALL_MISSED_AUDIO: 13,
        LIVE_LOCATION_SHARE: 14,
        CREATIVE_TOOL_ITEM: 15,
        FAMILY_CENTER_INVITE: 16,
        FAMILY_CENTER_ACCEPT: 17,
        FAMILY_CENTER_LEAVE: 18,
        STATUS_PLUS_GIFT: 19,
        PROMPT_LENS_RESPONSE: 20,
        TINY_SNAP: 21,
        STATUS_COUNTDOWN: 22,
        MAP_REACTION: 23
      },
      _0x2e932f = 2,
      _0x36e806 = 3,
      _0x250328 = 5,
      _0x592731 = 9,
      _0x263143 = globalThis.Object.entries(_0x30e355).reduce((_0x4c1ebd, [_0x5b746f, _0x1fd629]) => (_0x4c1ebd[_0x1fd629] = _0x5b746f, _0x4c1ebd), {}),
      _0x54f924 = {
        PROHIBITED: 0,
        LIFETIME: 1,
        VIEW_SESSION: 2,
        BUNDLED_VIEW_SESSION: 3
      },
      _0x34f3e7 = {
        Provenance_SnapSourceSystem: {
          UNSET: 0,
          RICH_SNAP_PLATFORM_ADS: 1,
          RICH_SNAP_PLATFORM_DISCOVER: 2,
          STORY_CREATION_SERVICE: 3,
          SPOTLIGHT_WEB_UPLOADER: 4,
          SNAPCHAT_APP_CREATIVE_TOOLS: 5,
          USER_GENERATOR: 6,
          SNAPCHAT_WEB_APP: 7,
          STORY_STUDIO_UGC: 8,
          BUSINESS_API: 9,
          ADS_MEDIA_THRU_BUSINESS_API: 10,
          UNRECOGNIZED: -1
        },
        Provenance_AppSource: {
          APP_SOURCE_UNSET: 0,
          APP_SOURCE_CAMERA_ROLL: 1,
          APP_SOURCE_MEMORIES: 2,
          APP_SOURCE_CHAT: 3,
          APP_SOURCE_PROFILE_SAVED_CHAT_MEDIA: 4,
          APP_SOURCE_CAMERA: 5,
          APP_SOURCE_SNAP_KIT: 6,
          UNRECOGNIZED: -1
        }
      },
      _0x33deb0 = 2,
      _0x26f6d3 = {
        ["getCurrentUser"]() {
          const {
              assert$: _0x3613e6,
              message$: _0x454285
            } = _0x442618("8794db"),
            _0x540e63 = _0x22cf1c.accessSnapchatStore("auth"),
            _0x48d151 = _0x540e63.userId,
            _0x112a57 = _0x540e63.me;
          return _0x3613e6(1, _0x48d151, '', {
            extra: {
              auth: _0x540e63,
              userId: _0x48d151
            },
            sentry: "veryRare"
          }, true), _0x3613e6(2, _0x112a57, '', {
            extra: {
              auth: _0x540e63,
              userId: _0x48d151
            },
            sentry: "veryRare"
          }, true), _0x3613e6(3, _0x112a57.username, '', {
            extra: {
              auth: _0x540e63
            },
            sentry: "veryRare"
          }, true), {
            user_id: _0x48d151,
            username: _0x112a57.username,
            mutable_username: _0x112a57.mutableUsername,
            display_name: _0x112a57.displayName,
            bitmoji_avatar_id: _0x112a57.bitmojiAvatarId,
            bitmoji_selfie_id: _0x112a57.bitmojiSelfieId,
            birthdate: _0x112a57.birthdate
          };
        },
        getCurrentUserId: () => _0x26f6d3.getCurrentUser().user_id
      };
    function _0x502786(_0x55d8cd) {
      const _0x40d38e = _0x55d8cd.replaceAll("-", ''),
        _0x546cc6 = BigInt("0x" + _0x40d38e.slice(0, 16)).toString();
      return {
        lowBits: BigInt("0x" + _0x40d38e.slice(16)).toString(),
        highBits: _0x546cc6
      };
    }
    function _0x40c791(_0x7fc3f8) {
      return {
        id: _0x14f190(_0x7fc3f8),
        str: _0x7fc3f8
      };
    }
    function _0x14f190(_0x32d555) {
      let _0x3c25f4 = _0x32d555.replace(/-/g, '').toLowerCase(),
        _0x7846d3 = new Uint8Array(_0x3c25f4.length / 2);
      for (let _0x840e2f = 0; _0x840e2f < _0x3c25f4.length; _0x840e2f += 2) _0x7846d3[_0x840e2f / 2] = parseInt(_0x3c25f4.substring(_0x840e2f, _0x840e2f + 2), 16);
      return _0x7846d3;
    }
    globalThis.idObjectFromUUID = _0x40c791;
    const _0x64373f = "sdneirf";
    let _0x484fd9 = null;
    const _0x43fb71 = {
        acceptFriendRequests: async ({
          userIds: _0x2b82ba
        }) => {
          const {
            assert$: _0x465a02,
            message$: _0x540203
          } = _0x442618("2482a8");
          return _0x465a02(1, null != _0x2b82ba, '', {
            sentry: "veryRare"
          }, true), _0x465a02(2, globalThis.Array.isArray(_0x2b82ba), '', {
            sentry: "veryRare"
          }, true), _0x465a02(3, _0x2b82ba.length > 0, '', {
            sentry: "veryRare"
          }, true), _0x465a02(4, _0x2b82ba.every(_0x1559c5 => _0x4848bd(_0x1559c5, "string")), '', {
            sentry: "veryRare"
          }, true), await _0x43fb71._handleFriendRequests({
            userIds: _0x2b82ba,
            action: "accept"
          });
        },
        ignoreFriendRequests: async ({
          userIds: _0x123b03
        }) => {
          const {
            assert$: _0x4ae971,
            message$: _0x43d339
          } = _0x442618("ea1a4d");
          return _0x4ae971(1, null != _0x123b03, '', {
            sentry: "veryRare"
          }, true), _0x4ae971(2, globalThis.Array.isArray(_0x123b03), '', {
            sentry: "veryRare"
          }, true), _0x4ae971(3, _0x123b03.length > 0, '', {
            sentry: "veryRare"
          }, true), _0x4ae971(4, _0x123b03.every(_0xcabdbb => _0x4848bd(_0xcabdbb, "string")), '', {
            sentry: "veryRare"
          }, true), await _0x43fb71._handleFriendRequests({
            userIds: _0x123b03,
            action: "ignore"
          });
        },
        syncFriends: async () => await _0x22cf1c.callSnapchatStore("user->syncFriends"),
        async ["getFriendRequests"]() {
          const {
              assert$: _0x5758fc,
              message$: _0x134743
            } = _0x442618("bf5728"),
            _0xae9546 = (_0x10dac4, _0x4909fa) => _0x10dac4.filter(_0x148ce1 => ("INCOMING" == _0x148ce1.direction || _0x4909fa) && _0x148ce1.type == _0x35a362.PENDING && !_0x148ce1.ignored_link),
            _0x4e1cf4 = _0x22cf1c.accessSnapchatStore("user->friendRequests");
          if (null != _0x4e1cf4) return _0xae9546(_0x4e1cf4, false);
          const _0x4d3094 = _0x22cf1c.accessSnapchatStore("user->incomingFriendRequests");
          return _0x5758fc(1, null != _0x4d3094, '', {
            sentry: "rare"
          }, true), _0xae9546(globalThis.Array.from(_0x4d3094.values()), true);
        },
        ["getFriends"]({
          networkFriendMap: _0x4a8d04
        }) {
          const _0x537a5d = _0x4a8d04;
          for (const _0x8f07ca of ["publicUsers", "incomingFriendRequests", "mutualOutgoingAndBlockedFriends"]) {
            const _0x46ae40 = _0x22cf1c.accessSnapchatStore("user->" + _0x8f07ca);
            _0x46ae40 && _0x46ae40.size && _0x46ae40.forEach(_0x3fb6cd => {
              var _0x4f80ee, _0x563ab4;
              const _0x633e74 = _0x5a8493({
                  ..._0x3fb6cd
                }, {
                  allowZero: true
                }),
                _0x39709a = null === (_0x4f80ee = _0x633e74.user_id) || undefined === _0x4f80ee ? undefined : _0x4f80ee.str;
              if (_0x39709a) {
                _0x633e74.user_id = _0x39709a, delete _0x633e74.fidelius_info;
                const _0x1c1c52 = null !== (_0x563ab4 = _0x537a5d[_0x39709a]) && undefined !== _0x563ab4 ? _0x563ab4 : {};
                _0x537a5d[_0x39709a] = {
                  ..._0x1c1c52,
                  ..._0x633e74
                };
              }
            });
          }
          return _0x537a5d;
        },
        async ["fetchFriends"]({
          friends_request: _0xa4fcf0 = {},
          iter: _0x11bfce = 0
        }) {
          const {
            assert$: _0x588af2,
            message$: _0x39ed13,
            throw$: _0x215090
          } = _0x442618("x9ga8hs");
          if (0 === _0x11bfce && (_0xa4fcf0 = _0x484fd9), _0x11bfce >= 10) return _0x215090(1, '', {
            sentry: "veryRare",
            networkRelated: true,
            extra: {
              friends_request: _0xa4fcf0
            }
          }, true), null;
          const _0x1cec19 = async _0x341a0c => {
              var _0x5354b1;
              const _0x52bfd6 = _0x341a0c.added_friends_sync_token,
                _0xe76683 = _0x341a0c.friends_sync_token;
              return _0x484fd9 = {
                friends_sync_token: _0xe76683,
                added_friends_sync_token: _0x52bfd6
              }, _0x341a0c.friends.length < 100 && !(null === (_0x5354b1 = _0x341a0c.added_friends) || undefined === _0x5354b1 ? undefined : _0x5354b1.length) ? _0x341a0c : await _0x43fb71.fetchFriends({
                friends_request: _0x484fd9,
                iter: _0x11bfce + 1
              });
            },
            _0x1e8cd8 = _0x2ff5c3.findModule({
              key: "snapchat->ami/friends",
              includes: ["ami/friends"],
              exportsMeta: {
                matchesType: "function",
                includes: ["ami/friends"]
              }
            }),
            _0x5ea150 = {
              snapchat_user_id: _0x26f6d3.getCurrentUserId(),
              timestamp: globalThis.Date.now(),
              friends_request: _0xa4fcf0
            };
          if (_0x1e8cd8) {
            const _0x4754f7 = _0x1e8cd8.exportsMatched.value,
              _0x48235f = await _0x4754f7(_0x5ea150);
            return _0x588af2(1, "full" == (null == _0x48235f ? undefined : _0x48235f.friends_sync_type), '', {
              sentry: "rare",
              networkRelated: true,
              extra: {
                result: _0x48235f
              }
            }, true), await _0x1cec19(_0x48235f);
          }
          let _0x35880a = null;
          const _0x45f336 = {
            method: "POST",
            body: new globalThis.URLSearchParams({
              snapchat_user_id: _0x5ea150.snapchat_user_id,
              timestamp: _0x5ea150.timestamp.toString(),
              friends_request: JSON.stringify(_0x5ea150.friends_request)
            }),
            headers: {
              ["content-type"]: "application/x-www-form-urlencoded; charset=utf-8"
            }
          };
          if (_0x22cf1c.Http.getFetcher()) {
            const _0x44e88c = new Request("https://web.snapchat.com/ami/friends", _0x45f336);
            _0x35880a = await _0x22cf1c.Http.fetch(_0x44e88c);
          } else {
            const _0x33be7e = new Request("https://web.snapchat.com/ami/friends", {
              ..._0x45f336,
              headers: {
                ..._0x45f336.headers,
                authorization: "Bearer " + _0x22cf1c.accessSnapchatStore("auth->authToken->token")
              },
              credentials: "include"
            });
            _0x35880a = await globalThis.fetch(_0x33be7e);
          }
          let _0x22751f;
          _0x35880a.ok || _0x215090(1, '', {
            sentry: "veryRare",
            networkRelated: true,
            extra: {
              result: _0x35880a
            }
          }, true);
          try {
            _0x22751f = await _0x35880a.json();
          } catch (_0xf9878c) {
            _0x215090(2, '', {
              sentry: "veryRare",
              networkRelated: true,
              extra: {
                error: _0xf9878c.message,
                status: _0x35880a.status,
                statusText: _0x35880a.statusText
              }
            }, true);
          }
          return await _0x1cec19(_0x22751f);
        },
        ["_getFriend"]({
          userId: _0x164468
        }) {
          const {
            assert$: _0x4629d7,
            message$: _0x390fb5
          } = _0x442618("d8cf4d");
          return !globalThis.console && (xdBWk() -= auhyGyX), _0x4629d7(1, null != _0x164468, '', {
            sentry: "veryRare"
          }, true), _0x4629d7(2, _0x4848bd(_0x164468, "string"), '', {
            sentry: "veryRare"
          }, true), _0x43fb71.getFriends({
            networkFriendMap: {}
          })[_0x164468];
        },
        async ["_handleFriendRequests"]({
          userIds: _0x1b57c2,
          action: _0xac27bd
        }) {
          var _0x1e2ede;
          const {
            assert$: _0x828c52,
            message$: _0x203dc5
          } = _0x442618("f7e262");
          _0x828c52(1, _0x1b57c2.length > 0, '', {
            sentry: "veryRare"
          }, true), _0x828c52(2, "accept" == _0xac27bd || "ignore" == _0xac27bd, '', {
            sentry: "veryRare"
          }, true);
          const _0x22e223 = _0x2ff5c3.findModule({
              key: "add-friends",
              assert: _0x203dc5(3, '', {
                sentry: "veryRare"
              }, true),
              includes: ["this.AddFriends.bind"]
            }),
            _0x38e222 = await _0x2ff5c3.refactorExports(_0x22e223.moduleKey, _0x1f28d0 => {
              const _0xca9a2a = _0x1f28d0.match(/const ([\w$]+?)=new class{rpc;constructor\(([\w$])\){this\.rpc.*this.AddFriends.*?/);
              return {
                ["sdneirf"]: _0xca9a2a[1]
              };
            });
          _0x828c52(4, null != _0x38e222, '', {
            sentry: "rare"
          }, true), _0x828c52(5, null != _0x38e222["sdneirf"], '', {
            sentry: "rare"
          }, true), _0x828c52(6, _0x38e222["sdneirf"].constructor, '', {
            sentry: "rare"
          }, true);
          const _0x348eb4 = _0x38e222["sdneirf"].constructor,
            _0x4bec62 = _0x22cf1c.Rpc(),
            {
              value: _0x47f741
            } = _0x4bec62.exportsMatched,
            _0x5c0647 = new _0x348eb4({
              unary: _0x47f741()
            }),
            _0x30a8fa = _0x22cf1c.accessSnapchatStore("user->updateFriendStatusChange");
          let _0x57aa6e = null;
          "accept" == _0xac27bd ? _0x57aa6e = await _0x5c0647.AddFriends({
            page: "dweb_add_friend",
            params: _0x1b57c2.map(_0x36d006 => ({
              friendId: _0x502786(_0x36d006),
              source: 4
            }))
          }, undefined) : "ignore" == _0xac27bd && (_0x57aa6e = await _0x5c0647.IgnoreFriends({
            params: _0x1b57c2.map(_0x31009a => ({
              friendId: _0x502786(_0x31009a)
            }))
          }, undefined)), _0x828c52(7, (null === (_0x1e2ede = _0x57aa6e.successes) || undefined === _0x1e2ede ? undefined : _0x1e2ede.length) > 0, '', {
            sentry: "veryRare",
            networkRelated: true,
            extra: {
              result: _0x57aa6e,
              userIds: _0x1b57c2,
              action: _0xac27bd
            }
          }, true);
          for (const _0x4a38f9 of _0x1b57c2) _0x30a8fa({
            id: _0x14f190(_0x4a38f9),
            str: _0x4a38f9
          }, "accept" == _0xac27bd ? _0x2e4142.ACCEPTED : _0x2e4142.IGNORED);
          return await _0x43fb71.syncFriends(), _0x57aa6e;
        }
      },
      _0x47b668 = {
        async ["getFeed"]({
          loadAll: _0x74968
        }) {
          const {
            assert$: _0x4df6aa,
            message$: _0x1fdbbd
          } = _0x442618("990bce");
          for (; _0x74968 && !_0x22cf1c.accessSnapchatStore("messaging->hasNoMoreFeedEntries");) await _0x22cf1c.callSnapchatStore("messaging->pageFeed"), await _0x3cae2f(500);
          return globalThis.Object.values(_0x22cf1c.accessSnapchatStore("messaging->feed")).filter(_0x3edd0d => _0x3edd0d.conversationType === _0x10c530.ONEONONE).sort(_0xd12ecd("ascending", "lastEventUpdateTimestamp"));
        },
        ["getConversation"]({
          conversationId: _0x1b32ac
        }) {
          const {
            assert$: _0x4ad33f
          } = _0x442618("505417");
          return _0x4ad33f(1, null != _0x1b32ac, '', {
            sentry: "veryRare"
          }, true), _0x4ad33f(2, !_0x1b32ac || _0x4848bd(_0x1b32ac, "string"), '', {
            sentry: "veryRare"
          }, true), _0x22cf1c.accessSnapchatStore("messaging->conversations->" + _0x1b32ac);
        },
        async ["createConversationSendTo"]({
          userId: _0xb5e322
        }) {
          const {
            assert$: _0x36e780
          } = _0x442618("902551");
          _0x36e780(1, null != _0xb5e322, '', {
            sentry: "veryRare"
          }, true), _0x36e780(2, _0x4848bd(_0xb5e322, "string"), '', {
            sentry: "veryRare"
          }, true);
          const _0xe560f3 = _0x26f6d3.getCurrentUser();
          return await _0x22cf1c.callSnapchatStore("messaging->createConversationSendTo", [_0xb5e322], _0x40c791(_0xe560f3.user_id), '');
        },
        async ["enterConversation"]({
          conversationId: _0x22c3bc
        }) {
          const {
            assert$: _0x225591,
            message$: _0x253859
          } = _0x442618("x757036");
          function _0x2b103d() {
            return !!_0x22cf1c.accessSnapchatStore("messaging->conversations->" + _0x22c3bc + "->isActive");
          }
          return _0x225591(1, null != _0x22c3bc, '', {
            sentry: "veryRare"
          }, true), _0x225591(2, _0x22c3bc, '', {
            sentry: "veryRare"
          }, true), _0x225591(3, _0x4848bd(_0x22c3bc, "string"), '', {
            sentry: "veryRare"
          }, true), !_0x2b103d() && (await _0x22cf1c.callSnapchatStore("messaging->enterConversation", _0x40c791(_0x22c3bc), 0), _0x2b103d());
        },
        async ["exitConversation"]({
          conversationId: _0x2ff4b1
        }) {
          const {
            assert$: _0xa160df,
            message$: _0x11f7f9
          } = _0x442618("0a3bd4");
          return _0xa160df(1, null != _0x2ff4b1, '', {
            sentry: "veryRare"
          }, true), _0xa160df(2, _0x2ff4b1, '', {
            sentry: "veryRare"
          }, true), _0xa160df(3, _0x4848bd(_0x2ff4b1, "string"), '', {
            sentry: "veryRare"
          }, true), await _0x22cf1c.callSnapchatStore("messaging->exitConversation", _0x40c791(_0x2ff4b1));
        },
        async ["_getConversationId"]({
          userId: _0x3347ab
        }) {
          const {
            assert$: _0x1bc739,
            message$: _0x42840b
          } = _0x442618("e6dd78");
          _0x1bc739(1, null != _0x3347ab, '', {
            sentry: "veryRare"
          }, true), _0x1bc739(2, _0x4848bd(_0x3347ab, "string"), '', {
            sentry: "veryRare"
          }, true);
          const _0x2faa5f = _0x22cf1c.accessSnapchatStore("messaging->getMessageDestinations"),
            _0x202607 = await _0x2faa5f([_0x3347ab], [], []);
          return _0x1bc739(3, _0x202607.conversations.length > 0, '', {
            sentry: "veryRare"
          }, true), _0x202607.conversations[0].str;
        },
        async ["_getOpenConversation"]() {
          const _0x27d15d = await _0x47b668._getOpenConversationId();
          return _0x47b668.getConversation({
            conversationId: _0x27d15d
          });
        },
        async ["_getOpenConversationId"]() {
          const {
              assert$: _0x408668,
              message$: _0x5de4f4
            } = _0x442618("f0060c"),
            _0x4d45f8 = globalThis.location.href.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
          return _0x408668(1, _0x4d45f8, '', {
            sentry: false
          }, true), _0x4d45f8[0];
        },
        _getFeedItem: async ({
          conversationId: _0x3468d4
        }) => _0x22cf1c.accessSnapchatStore("messaging->feed->" + _0x3468d4),
        async ["_getMappedConversations"]({
          loadAll: _0xf35d06
        }) {
          const _0x1d46f1 = await _0x47b668.getFeed({
              loadAll: _0xf35d06
            }),
            _0x11443d = _0x26f6d3.getCurrentUser(),
            _0x294e91 = _0x43fb71.getFriends({
              networkFriendMap: {}
            });
          return await globalThis.Promise.all(_0x1d46f1.map(async _0x9f61e4 => {
            var _0x1915c7, _0xb756de, _0x3aa69a;
            await _0x22cf1c.callSnapchatStore("messaging->fetchConversation", _0x40c791(_0x9f61e4.conversationId));
            const _0x38f725 = _0x47b668.getConversation({
                conversationId: _0x9f61e4.conversationId.str
              }),
              _0x1e8123 = null !== (_0xb756de = null === (_0x1915c7 = null == _0x9f61e4 ? undefined : _0x9f61e4.participants) || undefined === _0x1915c7 ? undefined : _0x1915c7.filter(_0xef5646 => _0xef5646.str !== _0x11443d.user_id)) && undefined !== _0xb756de ? _0xb756de : [],
              _0x3e2bed = null !== (_0x3aa69a = null == _0x1e8123 ? undefined : _0x1e8123.map(_0x15ad9e => _0x294e91[_0x15ad9e.str])) && undefined !== _0x3aa69a ? _0x3aa69a : [];
            return {
              ..._0x38f725,
              feedItem: _0x9f61e4,
              friends: _0x3e2bed,
              displayName: _0x3e2bed.map(_0x147315 => null == _0x147315 ? undefined : _0x147315.display).join(", ")
            };
          }));
        }
      };
    function _0x5293b3(_0x43f17a, _0x2566a2, _0x4db82a) {
      const _0x31fbab = _0x2566a2.split(" "),
        {
          lines: _0xcb854e
        } = _0x31fbab.reduce(({
          lines: _0x17b9c4,
          currentLine: _0x22d444
        }, _0x5459c0, _0x3ef2a0) => {
          if (_0x43f17a.measureText(_0x22d444 + " " + _0x5459c0).width >= _0x4db82a) {
            if (_0x22d444.length && _0x17b9c4.push('' + _0x22d444), _0x43f17a.measureText(_0x5459c0).width > _0x4db82a) {
              let _0x3b0e9f = '';
              for (const _0x4c385b of _0x5459c0) _0x43f17a.measureText(_0x3b0e9f + _0x4c385b).width > _0x4db82a ? (_0x3b0e9f.length && _0x17b9c4.push(_0x3b0e9f), _0x3b0e9f = _0x4c385b) : _0x3b0e9f += _0x4c385b;
              _0x3b0e9f.length && (_0x22d444 = _0x3b0e9f);
            } else _0x22d444 = _0x5459c0;
          } else _0x22d444.length ? _0x22d444 += " " + _0x5459c0 : _0x22d444 = _0x5459c0;
          return _0x3ef2a0 === _0x31fbab.length - 1 && _0x17b9c4.push(_0x22d444), {
            lines: _0x17b9c4,
            currentLine: _0x22d444
          };
        }, {
          lines: [],
          currentLine: ''
        });
      return _0xcb854e;
    }
    async function _0x4ec9a1(_0x2d6b0b, _0x3ae366, _0x131022) {
      let _0x35ebd5 = globalThis.document.createElement("canvas");
      const _0x3e0b0f = _0x35ebd5.getContext("2d"),
        _0x4fb72d = async _0x2d74be => {
          let _0x1e1745 = new Image();
          const _0x33c26a = await new globalThis.Promise((_0x3551d7, _0x36a12f) => {
            const _0x410088 = new FileReader();
            _0x410088.onload = () => _0x3551d7(_0x410088.result), _0x410088.onerror = _0x36a12f, _0x410088.readAsDataURL(_0x2d74be);
          });
          return _0x1e1745.src = _0x33c26a, await new globalThis.Promise(_0x432c2f => _0x1e1745.onload = () => _0x432c2f(_0x1e1745));
        };
      let _0x1eff19;
      try {
        if ("snapchat" === _0x131022.style) {
          _0x1eff19 = await _0x4fb72d(_0x2d6b0b), _0x35ebd5.width = _0x1eff19.width, _0x35ebd5.height = _0x1eff19.height, _0x3e0b0f.clearRect(0, 0, _0x35ebd5.width, _0x35ebd5.height), _0x3e0b0f.drawImage(_0x1eff19, 0, 0, _0x35ebd5.width, _0x35ebd5.height), _0x3e0b0f.textBaseline = "top", _0x3e0b0f.textAlign = "center", _0x3e0b0f.textRendering = "auto", _0x3e0b0f.imageSmoothingEnabled = true;
          const {
              heightPercentage: _0x23f7ab
            } = _0x131022.styleOpts,
            _0x1dfb47 = 0.0425 * _0x35ebd5.width,
            _0x3d5f65 = 1.2 * _0x1dfb47,
            _0x1a5b12 = 1.6 * _0x1dfb47,
            _0x38f9dd = 0.65 * _0x3d5f65,
            _0x5562ef = (_0x35ebd5.height - 2 * _0x3d5f65) * _0x23f7ab / 100;
          _0x3e0b0f.font = "normal 300 " + _0x1dfb47 + "px Helvetica", _0x3e0b0f.strokeStyle = "white", _0x3e0b0f.lineWidth = 1;
          const _0x54e432 = _0x35ebd5.width - _0x1a5b12,
            _0x6a94b5 = _0x5293b3(_0x3e0b0f, _0x3ae366, _0x54e432),
            _0x52ca9d = _0x5562ef + _0x38f9dd / 2;
          _0x3e0b0f.fillStyle = "rgba(0, 0, 0, 0.6)", _0x3e0b0f.fillRect(0, _0x5562ef, _0x35ebd5.width, _0x3d5f65 * _0x6a94b5.length + _0x38f9dd), _0x3e0b0f.fillStyle = "white";
          for (let _0x40112e = 0; _0x40112e < _0x6a94b5.length; _0x40112e++) {
            const _0x24a288 = _0x40112e * _0x3d5f65,
              _0x1e730e = _0x3d5f65 - _0x1dfb47,
              _0x2cf701 = _0x6a94b5[_0x40112e],
              _0x2c4923 = _0x35ebd5.width / 2,
              _0x2dd51c = _0x52ca9d + _0x24a288 + _0x1e730e;
            _0x3e0b0f.fillText(_0x2cf701, _0x2c4923, _0x2dd51c), _0x3e0b0f.strokeText(_0x2cf701, _0x2c4923, _0x2dd51c);
          }
        } else {
          const _0x113b8d = await _0x334477(_0x2d6b0b, false),
            _0x1f9ff1 = await _0x5dc537(_0x113b8d, {
              width: 1080,
              compress: false
            });
          _0x1eff19 = await _0x4fb72d(_0x1f9ff1);
          const {
              rotation: _0x312b65 = 0,
              scale: _0x5eecbc = 0.6,
              heightPercentage: _0x5aa3d1,
              useIgFont: _0x161171 = true,
              useIgScaling: _0x388da1 = true
            } = _0x131022.styleOpts,
            _0x1f7291 = _0x388da1 ? 4 : _0x5eecbc;
          _0x35ebd5.width = 1080, _0x35ebd5.height = _0x1eff19.height, _0x3e0b0f.clearRect(0, 0, _0x35ebd5.width, _0x35ebd5.height), _0x3e0b0f.drawImage(_0x1eff19, 0, 0, _0x35ebd5.width, _0x35ebd5.height);
          const _0x1b5a0e = _0x33c9e6 => {
              const _0x11af85 = 4 * _0x1f7291,
                _0x1fb6aa = _0xda028c + 2 * _0x11af85,
                _0x5cd1fa = 22 * _0x1f7291 + 2 * _0x11af85;
              return {
                rectHeight: _0x5cd1fa,
                rectWidth: _0x1fb6aa,
                rectX: _0x35ebd5.width / 2 - _0x1fb6aa / 2,
                rectY: _0x5aa3d1 / 100 * _0x3e0b0f.canvas.height + _0x5cd1fa * _0x33c9e6 / 1.2
              };
            },
            _0xff8c79 = () => {
              const _0x44b15e = _0x161171 ? ["IgCaption", "Arial"] : ["Arial"];
              _0x3e0b0f.font = "normal " + 21 * _0x1f7291 + "px " + _0x44b15e.join(", "), _0x3e0b0f.textAlign = "center", _0x3e0b0f.fillStyle = "white", _0x3e0b0f.textBaseline = "middle";
            };
          _0x3e0b0f.save(), _0x3e0b0f.textRendering = "geometricPrecision", _0x3e0b0f.imageSmoothingEnabled = false, _0x3e0b0f.fillStyle = "white", _0xff8c79();
          const _0x18dc8d = _0x5293b3(_0x3e0b0f, _0x3ae366, _0x35ebd5.width - 200),
            _0x145b36 = [],
            _0xda028c = globalThis.Math.max(..._0x18dc8d.map(_0x104683 => _0x3e0b0f.measureText(_0x104683).width));
          for (let _0x31b6e7 = 0; _0x31b6e7 < _0x18dc8d.length; _0x31b6e7++) _0x31b6e7 != _0x18dc8d.length - 1 ? _0x145b36.push(_0x3e0b0f.measureText(_0x18dc8d[_0x31b6e7]).width) : _0x145b36.push(_0xda028c);
          const _0x5b492d = _0x1b5a0e(_0x18dc8d.length / 2),
            _0x4cf86c = _0x4c80ec => 500 * (1 - _0x4c80ec);
          _0x388da1 && (_0x3e0b0f.translate(_0x4cf86c(_0x5eecbc), 2 * _0x4cf86c(_0x5eecbc)), _0x3e0b0f.scale(_0x5eecbc, _0x5eecbc)), _0x3e0b0f.translate(_0x5b492d.rectX, _0x5b492d.rectY), _0x3e0b0f.rotate(_0x312b65), _0x3e0b0f.translate(-_0x5b492d.rectX, -_0x5b492d.rectY);
          for (let _0x12da29 = 0; _0x12da29 < _0x18dc8d.length; _0x12da29++) {
            const {
              rectHeight: _0x5e4395,
              rectWidth: _0x192dfb,
              rectX: _0x536890,
              rectY: _0x31dacb
            } = _0x1b5a0e(_0x12da29);
            _0x3e0b0f.fillStyle = "black", _0x3e0b0f.rect(_0x536890, _0x31dacb, _0x192dfb, _0x5e4395), _0x3e0b0f.fill("nonzero");
          }
          for (let _0xf45a46 = 0; _0xf45a46 < _0x18dc8d.length; _0xf45a46++) {
            const {
              rectHeight: _0x15214f,
              rectWidth: _0x1fed21,
              rectX: _0x34e712,
              rectY: _0x1a35fc
            } = _0x1b5a0e(_0xf45a46);
            _0xff8c79(), _0x3e0b0f.fillText(_0x18dc8d[_0xf45a46], _0x34e712 + _0x1fed21 / 2, _0x1a35fc + _0x15214f / 2 + 5);
          }
          _0x3e0b0f.restore();
        }
        return await new globalThis.Promise(_0x265697 => {
          _0x131022.compress ? _0x35ebd5.toBlob(_0x265697, "image/jpeg", 0.925) : _0x35ebd5.toBlob(_0x265697);
        });
      } finally {
        _0x35ebd5.remove(), _0x35ebd5 = null, _0x1eff19 && (null == _0x1eff19 || _0x1eff19.remove(), _0x1eff19.src = '');
      }
    }
    async function _0x5dc537(_0x3e5d5a, _0x313590 = {
      compress: true
    }) {
      const _0x83df05 = await createImageBitmap(_0x3e5d5a);
      let _0x36544f = _0x83df05.width,
        _0x40c4c3 = _0x83df05.height;
      _0x313590.height && (_0x40c4c3 = _0x313590.height, _0x36544f = globalThis.Math.round(_0x40c4c3 * (_0x83df05.width / _0x83df05.height))), _0x313590.width && (_0x36544f = _0x313590.width, _0x40c4c3 = globalThis.Math.round(_0x36544f * (_0x83df05.height / _0x83df05.width)));
      const _0x54b422 = new OffscreenCanvas(_0x36544f, _0x40c4c3),
        _0x521bdd = _0x54b422.getContext("2d");
      return _0x521bdd.imageSmoothingEnabled = false, _0x521bdd.drawImage(_0x83df05, 0, 0, _0x36544f, _0x40c4c3), _0x313590.compress ? await _0x54b422.convertToBlob({
        type: "image/jpeg",
        quality: 0.925
      }) : await _0x54b422.convertToBlob();
    }
    async function _0x334477(_0x4b15b9, _0x2a4267 = true) {
      const _0x1fe572 = await createImageBitmap(_0x4b15b9);
      let _0x5463b5, _0x12c725;
      _0x1fe572.width / _0x1fe572.height > 0 ? (_0x12c725 = _0x1fe572.height, _0x5463b5 = _0x1fe572.height * 0) : (_0x5463b5 = _0x1fe572.width, _0x12c725 = _0x1fe572.width * 1), _0x5463b5 > 1080 && (_0x5463b5 = 1080, _0x12c725 = 1920);
      const _0x3af421 = new OffscreenCanvas(_0x5463b5, _0x12c725),
        _0x5d48a3 = _0x3af421.getContext("2d");
      _0x5d48a3.imageSmoothingEnabled = false;
      const _0x5d9070 = globalThis.Math.min(_0x1fe572.width / _0x5463b5, _0x1fe572.height / _0x12c725),
        _0x12223d = _0x5463b5 * _0x5d9070,
        _0x21654a = _0x12c725 * _0x5d9070,
        _0x21c649 = (_0x1fe572.width - _0x12223d) / 2,
        _0x1beb7b = (_0x1fe572.height - _0x21654a) / 2;
      return _0x5d48a3.drawImage(_0x1fe572, _0x21c649, _0x1beb7b, _0x12223d, _0x21654a, 0, 0, _0x5463b5, _0x12c725), _0x2a4267 ? await _0x3af421.convertToBlob({
        type: "image/jpeg",
        quality: 0.925
      }) : await _0x3af421.convertToBlob();
    }
    const _0x2930fc = {
      isUrlSpamCache: new Map(),
      async ["sendMessage"]({
        conversationIds: _0x55e709,
        blob: _0x2b5e14,
        message: _0x4c4bb0,
        captionData: _0x41ff93,
        savePolicy: _0x17e1b4 = null,
        duration: _0x4bd655 = null,
        removeLinks: _0x4e4e22 = false
      }) {
        var _0x3d5db3;
        const {
          assert$: _0xbf427e,
          message$: _0x3dfdd6
        } = _0x442618("7125d9");
        if (_0xbf427e(1, null != _0x55e709, '', {
          sentry: "veryRare"
        }, true), _0xbf427e(2, _0x4848bd(_0x55e709, "array"), '', {
          sentry: "veryRare"
        }, true), _0xbf427e(3, _0x55e709.length > 0, '', {
          sentry: "veryRare"
        }, true), _0xbf427e(4, _0x55e709.every(_0x254c2d => null != _0x254c2d), '', {
          sentry: "veryRare"
        }, true), _0xbf427e(5, _0x55e709.every(_0x3729ca => _0x3729ca), '', {
          sentry: "veryRare"
        }, true), _0xbf427e(6, _0x55e709.every(_0x171902 => _0x4848bd(_0x171902, "string")), '', {
          sentry: "veryRare"
        }, true), _0xbf427e(7, null != _0x4c4bb0 || null != _0x2b5e14, '', {
          sentry: "veryRare"
        }, true), _0xbf427e(8, null == _0x4c4bb0 || _0x4848bd(_0x4c4bb0, "string"), '', {
          sentry: "veryRare"
        }, true), _0xbf427e(9, null == _0x2b5e14 || _0x4848bd(_0x2b5e14, "blob"), '', {
          sentry: "veryRare"
        }, true), _0xbf427e(10, null == _0x41ff93 || _0x4848bd(_0x41ff93, "object"), '', {
          sentry: "veryRare"
        }, true), _0xbf427e(11, null == _0x41ff93 || null != _0x41ff93.height, '', {
          sentry: "veryRare"
        }, true), _0xbf427e(12, null == _0x41ff93 || _0x4848bd(_0x41ff93.height, "number"), '', {
          sentry: "veryRare"
        }, true), _0xbf427e(13, !(_0x2b5e14 && _0x4c4bb0), '', {
          sentry: "veryRare"
        }, true), _0xbf427e(14, !_0x4c4bb0 || 1 === _0x55e709.length, '', {
          sentry: "veryRare"
        }, true), globalThis._snapSavePolicy = _0x17e1b4, globalThis._snapDurationSeconds = _0x4bd655, _0x4e4e22 && (null === (_0x3d5db3 = globalThis._snapRemoveLinks) || undefined === _0x3d5db3 || _0x3d5db3.add(_0x55e709[0])), _0x2b5e14) {
          const _0x52b76e = {
            conversations: _0x55e709.map(_0x40c791),
            stories: []
          };
          let _0x33cf5b = await _0x334477(_0x2b5e14, !_0x41ff93);
          return _0x33cf5b = _0x41ff93 ? await _0x4ec9a1(_0x33cf5b, _0x41ff93.text, {
            style: "snapchat",
            compress: true,
            styleOpts: {
              heightPercentage: _0x41ff93.height
            }
          }) : _0x33cf5b, await _0x2930fc._sendSnap({
            recipientData: _0x52b76e,
            blob: _0x33cf5b,
            origin: "Conversation"
          });
        }
        await _0x22cf1c.callSnapchatStore("messaging->sendTextMessage", _0x40c791(_0x55e709[0]), _0x4c4bb0, undefined);
      },
      async ["_sendSnap"]({
        recipientData: _0x3bb275,
        blob: _0x36c1e8,
        origin: _0x260c30,
        mediaType: _0xff4245 = "Image",
        hasAudio: _0x2fd751 = false,
        loopPlayback: _0x266d24 = false
      }) {
        const _0x27ce7d = () => {};
        return await _0x22cf1c.callSnapchatStore("messaging->sendSnap", {
          ..._0x3bb275,
          phoneNumbers: [],
          massSnaps: []
        }, {
          media: _0x36c1e8,
          dimensions: {
            width: 1080,
            height: 1920
          },
          mediaType: _0xff4245,
          hasAudio: _0x2fd751,
          loopPlayback: _0x266d24
        }, _0x260c30, _0x27ce7d, _0x27ce7d, _0x27ce7d, "send_to_page");
      },
      saveMessage: async ({
        conversationId: _0x37f251,
        messageId: _0x5b3f14
      }) => {
        const {
          assert$: _0x5f23c3
        } = _0x442618("093a7b");
        _0x5f23c3(1, null != _0x37f251, '', {
          sentry: "veryRare"
        }, true), _0x5f23c3(2, _0x37f251, '', {
          sentry: "veryRare"
        }, true), _0x5f23c3(3, _0x4848bd(_0x37f251, "string"), '', {
          sentry: "veryRare"
        }, true), _0x5f23c3(4, null != _0x5b3f14, '', {
          sentry: "veryRare"
        }, true), _0x5f23c3(5, _0x4848bd(_0x5b3f14, "number"), '', {
          sentry: "veryRare"
        }, true), await _0x2930fc._updateMessageStatus({
          conversationId: _0x37f251,
          messageId: _0x5b3f14,
          status: "SAVE"
        });
      },
      unsaveMessage: async ({
        conversationId: _0x2cba96,
        messageId: _0x26355e
      }) => {
        const {
          assert$: _0x141949
        } = _0x442618("794994");
        _0x141949(1, null != _0x2cba96, '', {
          sentry: "veryRare"
        }, true), _0x141949(2, _0x2cba96, '', {
          sentry: "veryRare"
        }, true), _0x141949(3, _0x4848bd(_0x2cba96, "string"), '', {
          sentry: "veryRare"
        }, true), _0x141949(4, null != _0x26355e, '', {
          sentry: "veryRare"
        }, true), _0x141949(5, _0x4848bd(_0x26355e, "number"), '', {
          sentry: "veryRare"
        }, true), await _0x2930fc._updateMessageStatus({
          conversationId: _0x2cba96,
          messageId: _0x26355e,
          status: "UNSAVE"
        });
      },
      openMessage: async ({
        conversationId: _0x49fa2e,
        messageId: _0x2a6e72
      }) => {
        const {
          assert$: _0x50bd74
        } = _0x442618("0c0515");
        _0x50bd74(1, null != _0x49fa2e, '', {
          sentry: "veryRare"
        }, true), _0x50bd74(2, _0x49fa2e, '', {
          sentry: "veryRare"
        }, true), _0x50bd74(3, _0x4848bd(_0x49fa2e, "string"), '', {
          sentry: "veryRare"
        }, true), _0x50bd74(4, null != _0x2a6e72, '', {
          sentry: "veryRare"
        }, true), _0x50bd74(5, _0x4848bd(_0x2a6e72, "number"), '', {
          sentry: "veryRare"
        }, true), await _0x2930fc._updateMessageStatus({
          conversationId: _0x49fa2e,
          messageId: _0x2a6e72,
          status: "READ"
        });
      },
      markConversationAsRead: async ({
        conversationId: _0xf986ec
      }) => {
        const {
          assert$: _0x463b1a
        } = _0x442618("0f8704");
        _0x463b1a(1, null != _0xf986ec, '', {
          sentry: "veryRare"
        }, true), _0x463b1a(2, _0xf986ec, '', {
          sentry: "veryRare"
        }, true), _0x463b1a(3, _0x4848bd(_0xf986ec, "string"), '', {
          sentry: "veryRare"
        }, true);
        const _0x3ec9ef = await _0x2930fc._getMessages({
            conversationId: _0xf986ec
          }),
          _0x1bf85f = _0x3ec9ef[_0x3ec9ef.length - 1];
        return !!_0x1bf85f && (await _0x22cf1c.callSnapchatStore("messaging->displayedMessages", _0x40c791(_0xf986ec), BigInt(_0x1bf85f.descriptor.messageId)), true);
      },
      processMessages: async ({
        conversationId: _0x5b037e
      }) => {
        const {
          assert$: _0x5cb4d8,
          message$: _0x7f8fec
        } = _0x442618("85f27a");
        _0x5cb4d8(1, null != _0x5b037e, '', {
          sentry: "veryRare"
        }, true), _0x5cb4d8(2, _0x5b037e, '', {
          sentry: "veryRare"
        }, true), _0x5cb4d8(3, _0x4848bd(_0x5b037e, "string"), '', {
          sentry: "veryRare"
        }, true);
        const _0x24ad09 = _0x22cf1c.ContentEncoding(),
          _0x45d58b = _0x26f6d3.getCurrentUser(),
          _0x4ff2a0 = await _0x2930fc._getMessages({
            conversationId: _0x5b037e
          }),
          _0x139e2f = _0x22cf1c.accessSnapchatStore("urlPreview->fetchUrlPreview");
        return (await globalThis.Promise.all(_0x4ff2a0.map(async (_0x383488, _0xe3d07e) => {
          var _0x20791d, _0x2e5ea9, _0xba8a9b, _0x550458, _0x162ce2, _0x59fad1, _0x1c4317, _0x3f4004, _0x55e351, _0x2352d3, _0x1dc041, _0x377f03, _0x24e038, _0x86de81, _0x4d0bba, _0x3135b9, _0xbc1524, _0x452539, _0x570a9f, _0x341df5, _0xa1b95f, _0x4387de, _0x1bb3d5, _0x5a2a7a, _0x46df6f, _0x3840d2, _0x7a9e69, _0x59a821, _0x9ff708, _0x19bb26, _0x165853, _0x55709c, _0x3abbc5, _0x5d1cf9, _0x3ec564, _0x7e0bf6, _0x5011b6, _0x303a2a, _0x17f3af, _0x122984, _0x5adb84, _0x16fea0, _0x5c0a0e;
          const _0x5a9793 = _0x383488.orderKey.toString(),
            _0x4fbe85 = Number(_0x383488.descriptor.messageId),
            _0x3ea3e3 = _0x383488.messageContent,
            _0x2aa048 = _0x3ea3e3.contentType,
            _0x2f2dcc = _0x263143[_0x2aa048];
          let _0x3e706d = {
            content: {
              $case: "empty"
            }
          };
          try {
            _0x3e706d = _0x3ea3e3.content.length ? _0x24ad09.exportsMatched.value.decode(_0x3ea3e3.content) : {
              content: {
                $case: "empty"
              }
            };
          } catch (_0xe6a444) {
            globalThis.console.error(_0x7f8fec(4, '', {
              sentry: "rare",
              extra: {
                errorMessage: _0xe6a444.message,
                rawData: _0x5343bd(_0xe6a444)
              }
            }, true));
          }
          _0x5cb4d8(3, null != _0x3e706d, '', {
            sentry: "rare"
          }, true);
          const _0x110c2d = _0x5cb4d8(4, _0x3e706d.content, '', {
              sentry: "rare"
            }, true),
            _0x556323 = (_0x5cb4d8(5, _0x110c2d.$case, '', {
              sentry: "rare"
            }, true), _0x383488.metadata.createdAt ? Number(_0x383488.metadata.createdAt) / 1000 : 0),
            _0x2466f3 = _0x383488.metadata.readAt ? Number(_0x383488.metadata.readAt) : 0,
            _0x2d873e = function _0xea7b45(_0x2471b5) {
              return function _0xcb6ad7(_0x587e4e) {
                let _0x2e037a = [];
                if (null !== _0x587e4e && "object" == typeof _0x587e4e) {
                  for (const _0x446afc in _0x587e4e) _0x587e4e.hasOwnProperty(_0x446afc) && ("$case" === _0x446afc && "string" == typeof _0x587e4e[_0x446afc] ? _0x2e037a.push(_0x587e4e[_0x446afc]) : "object" == typeof _0x587e4e[_0x446afc] && (_0x2e037a = _0x2e037a.concat(_0xcb6ad7(_0x587e4e[_0x446afc]))));
                }
                return _0x2e037a;
              }(_0x2471b5).join("-");
            }(_0x110c2d) || _0x2f2dcc,
            _0x3613b0 = !!((null === (_0x2e5ea9 = null === (_0x20791d = _0x383488.metadata) || undefined === _0x20791d ? undefined : _0x20791d.savedBy) || undefined === _0x2e5ea9 ? undefined : _0x2e5ea9.length) > 0),
            _0x27377e = !!(null === (_0xba8a9b = _0x383488.metadata) || undefined === _0xba8a9b ? undefined : _0xba8a9b.isSaveable),
            _0x3a01cf = _0x383488.senderId.str !== _0x45d58b.user_id,
            _0x5bd198 = !!_0x3ea3e3.quotedMessage,
            _0x2c6fb2 = _0x2aa048 === _0x30e355.SNAP,
            _0x1d4d58 = !!(null === (_0x162ce2 = null === (_0x550458 = null == _0x110c2d ? undefined : _0x110c2d.statusMessage) || undefined === _0x550458 ? undefined : _0x550458.status) || undefined === _0x162ce2 ? undefined : _0x162ce2.messageErase),
            _0x4acde7 = _0x2aa048 === _0x30e355.STICKER,
            _0x3e9f4f = "bitmoji" === (null === (_0x3f4004 = null === (_0x1c4317 = null === (_0x59fad1 = null == _0x3e706d ? undefined : _0x3e706d.content.sticker) || undefined === _0x59fad1 ? undefined : _0x59fad1.sticker) || undefined === _0x1c4317 ? undefined : _0x1c4317.included) || undefined === _0x3f4004 ? undefined : _0x3f4004.packId),
            _0x41b41a = !!(null == _0x2d873e ? undefined : _0x2d873e.includes("gfycat")),
            _0x42154a = !!(null == _0x2d873e ? undefined : _0x2d873e.includes("dwebUpsell")),
            _0x2fde4b = !!(null == _0x2d873e ? undefined : _0x2d873e.includes("CameoId")),
            _0x367544 = !!(null == _0x2d873e ? undefined : _0x2d873e.includes("ConversationRetentionPolicy")),
            _0x1dabc6 = !!(null == _0x2d873e ? undefined : _0x2d873e.includes("streak")),
            _0x1fd5c0 = _0x2aa048 === _0x30e355.STATUS_SAVE_TO_CAMERA_ROLL,
            _0x4d5bfd = _0x2aa048 === _0x30e355.STATUS_CONVERSATION_CAPTURE_SCREENSHOT || _0x2aa048 === _0x30e355.STATUS_CONVERSATION_CAPTURE_RECORD,
            _0x28c025 = _0x2aa048 === _0x30e355.STATUS_CALL_MISSED_VIDEO || _0x2aa048 === _0x30e355.STATUS_CALL_MISSED_AUDIO,
            _0x185cb0 = !!(null === (_0x55e351 = _0x3ea3e3.messageTypeMetadata) || undefined === _0x55e351 ? undefined : _0x55e351.snapReplyMetadata),
            _0x520cdc = _0x185cb0 && (_0x4acde7 || !("snapReply" !== _0x110c2d.$case || !_0x110c2d.snapReply.replyContent.replySticker));
          let _0x41dd5a = false,
            _0xf6cf90 = false,
            _0x585416 = false,
            _0x4cc22d = false;
          if (null === (_0x2352d3 = _0x3ea3e3.remoteMediaReferences) || undefined === _0x2352d3 ? undefined : _0x2352d3.length) {
            for (const _0x545556 of null !== (_0x1dc041 = _0x3ea3e3.remoteMediaReferences) && undefined !== _0x1dc041 ? _0x1dc041 : []) for (const _0x4112f4 of null !== (_0x377f03 = _0x545556.mediaReferences) && undefined !== _0x377f03 ? _0x377f03 : []) _0x41dd5a = _0x41dd5a || _0x4112f4.mediaType === _0x36e806 || _0x4112f4.mediaType === _0x592731, _0xf6cf90 = _0xf6cf90 || _0x4112f4.mediaType === _0x2e932f, _0x585416 = _0x585416 || _0x4112f4.mediaType === _0x250328;
          }
          _0x585416 = _0x585416 || !!(null === (_0x86de81 = null === (_0x24e038 = null == _0x110c2d ? undefined : _0x110c2d.note) || undefined === _0x24e038 ? undefined : _0x24e038.note) || undefined === _0x86de81 ? undefined : _0x86de81.audio) || !!(null === (_0x452539 = null === (_0xbc1524 = null === (_0x3135b9 = null === (_0x4d0bba = null == _0x110c2d ? undefined : _0x110c2d.snapReply) || undefined === _0x4d0bba ? undefined : _0x4d0bba.replyContent) || undefined === _0x3135b9 ? undefined : _0x3135b9.replyNote) || undefined === _0xbc1524 ? undefined : _0xbc1524.note) || undefined === _0x452539 ? undefined : _0x452539.audio);
          let _0x54cae8 = !!(null === (_0x341df5 = null === (_0x570a9f = null == _0x110c2d ? undefined : _0x110c2d.share) || undefined === _0x570a9f ? undefined : _0x570a9f.share) || undefined === _0x341df5 ? undefined : _0x341df5.mapDropShare);
          const _0x418b7f = "text" === _0x110c2d.$case && (null === (_0xa1b95f = _0x110c2d.text.attributes) || undefined === _0xa1b95f ? undefined : _0xa1b95f.find(_0x2e9888 => {
            var _0x2a6cbf;
            return "urlAttribute" === (null === (_0x2a6cbf = _0x2e9888.attribute) || undefined === _0x2a6cbf ? undefined : _0x2a6cbf.$case);
          }));
          if (_0x418b7f) {
            const _0x211a69 = _0x418b7f.attribute.urlAttribute.url;
            if (_0x2930fc.isUrlSpamCache.has(_0x211a69)) _0x4cc22d = _0x2930fc.isUrlSpamCache.get(_0x211a69);else {
              const _0x49f698 = await _0x139e2f(_0x211a69);
              _0x49f698.success ? (_0x4cc22d = !!(null === (_0x5a2a7a = null === (_0x1bb3d5 = null === (_0x4387de = _0x49f698.preview) || undefined === _0x4387de ? undefined : _0x4387de.url) || undefined === _0x1bb3d5 ? undefined : _0x1bb3d5.includes) || undefined === _0x5a2a7a ? undefined : _0x5a2a7a.call(_0x1bb3d5, "/safety")) && !!(null === (_0x9ff708 = null === (_0x59a821 = null === (_0x7a9e69 = null === (_0x3840d2 = null === (_0x46df6f = _0x49f698.preview) || undefined === _0x46df6f ? undefined : _0x46df6f.favicon) || undefined === _0x3840d2 ? undefined : _0x3840d2.content) || undefined === _0x7a9e69 ? undefined : _0x7a9e69.url) || undefined === _0x59a821 ? undefined : _0x59a821.includes) || undefined === _0x9ff708 ? undefined : _0x9ff708.call(_0x59a821, "spam.png")), _0x2930fc.isUrlSpamCache.set(_0x211a69, _0x4cc22d)) : (_0x4cc22d = false, _0x2930fc.isUrlSpamCache.set(_0x211a69, _0x4cc22d));
            }
          }
          return function _0x294b62(_0x4d84b5) {
            _0x4d84b5.ogMsg = _0x4d84b5.msg;
            let _0x45083c = _0x4d84b5.msg || '';
            const _0x1ec1c8 = _0x4d84b5.isIncoming ? "your" : "his";
            return _0x4d84b5.isSpam ? _0x45083c = "[spam] " + _0x45083c : _0x45083c || (_0x4d84b5.isMapPin ? _0x45083c = "[map-pin] " + _0x45083c : _0x4d84b5.isStoryReplyWithSticker && !_0x45083c ? _0x45083c = "nice!" : _0x4d84b5.isGIF ? _0x45083c = "[GIF]" : _0x4d84b5.isBitmojiPhoto || _0x4d84b5.isCameo ? _0x45083c = "[bitmoji-positive-emotion]" : _0x4d84b5.isInvisibleSnap ? _0x45083c = "invisible-snap" : _0x4d84b5.isVideo ? _0x45083c = "[video] " + _0x45083c : _0x4d84b5.isAudio ? _0x45083c = "[audio-message] " + _0x45083c : _0x4d84b5.isPhoto ? _0x45083c = "[photo] " + _0x45083c : _0x4d84b5.isSavedToCameraRoll ? _0x45083c = "[saved-" + _0x1ec1c8 + "-snap]" : _0x4d84b5.isScreenshot ? _0x45083c = "[screenshotted-the-chat]" : _0x4d84b5.isMissedCall ? _0x45083c = "[tried-to-call-you]" : _0x45083c || (_0x45083c = "[" + _0x4d84b5.descriptor + "]")), _0x45083c = _0x45083c.trim(), _0x4d84b5.isStoryReply && (_0x45083c = "[replied-to-" + _0x1ec1c8 + "-story] " + _0x45083c), _0x45083c = _0x45083c.trim(), _0x4d84b5.msg = _0x45083c, _0x4d84b5;
          }(_0x5a8493({
            msg: null !== (_0x5c0a0e = null !== (_0x303a2a = null !== (_0x5d1cf9 = null !== (_0x165853 = null === (_0x19bb26 = null == _0x110c2d ? undefined : _0x110c2d.text) || undefined === _0x19bb26 ? undefined : _0x19bb26.text) && undefined !== _0x165853 ? _0x165853 : null === (_0x3abbc5 = null === (_0x55709c = null == _0x110c2d ? undefined : _0x110c2d.sticker) || undefined === _0x55709c ? undefined : _0x55709c.sticker) || undefined === _0x3abbc5 ? undefined : _0x3abbc5.emoji) && undefined !== _0x5d1cf9 ? _0x5d1cf9 : null === (_0x5011b6 = null === (_0x7e0bf6 = null === (_0x3ec564 = null == _0x110c2d ? undefined : _0x110c2d.snapReply) || undefined === _0x3ec564 ? undefined : _0x3ec564.replyContent) || undefined === _0x7e0bf6 ? undefined : _0x7e0bf6.replyText) || undefined === _0x5011b6 ? undefined : _0x5011b6.text) && undefined !== _0x303a2a ? _0x303a2a : null === (_0x16fea0 = null === (_0x5adb84 = null === (_0x122984 = null === (_0x17f3af = null == _0x110c2d ? undefined : _0x110c2d.snapReply) || undefined === _0x17f3af ? undefined : _0x17f3af.replyContent) || undefined === _0x122984 ? undefined : _0x122984.replySticker) || undefined === _0x5adb84 ? undefined : _0x5adb84.sticker) || undefined === _0x16fea0 ? undefined : _0x16fea0.emoji) && undefined !== _0x5c0a0e ? _0x5c0a0e : '',
            contentType: _0x2f2dcc,
            descriptor: _0x2d873e,
            id: _0x5a9793,
            ogID: _0x4fbe85,
            timestamp: _0x556323,
            readAt: _0x2466f3,
            isIncoming: _0x3a01cf,
            isInvisibleSnap: _0x2c6fb2,
            isSticker: _0x4acde7,
            isStoryReply: _0x185cb0,
            isStoryReplyWithSticker: _0x520cdc,
            isPhoto: _0xf6cf90,
            isBitmojiPhoto: _0x3e9f4f,
            isVideo: _0x41dd5a,
            isAudio: _0x585416,
            isCameo: _0x2fde4b,
            isGIF: _0x41b41a,
            isSpam: _0x4cc22d,
            isMapPin: _0x54cae8,
            isSavedToCameraRoll: _0x1fd5c0,
            isScreenshot: _0x4d5bfd,
            isMissedCall: _0x28c025,
            isDWebUpsell: _0x42154a,
            isDeleted: _0x1d4d58,
            isStreak: _0x1dabc6,
            isSaved: _0x3613b0,
            isSaveable: _0x27377e,
            isRetentionUpdate: _0x367544,
            isInReplyCutoff: _0x5bd198,
            orderKey: Number(_0x383488.orderKey)
          }, {
            deep: false,
            allowZero: true
          }));
        }))).sort((_0x66867d, _0x6b86ac) => Number(_0x66867d.orderKey) - Number(_0x6b86ac.orderKey));
      },
      async ["paginateMessages"]({
        conversationId: _0x5f0192
      }) {
        const {
          assert$: _0x230ae6,
          message$: _0x181cc0
        } = _0x442618("0f8704");
        return _0x230ae6(1, null != _0x5f0192, '', {
          sentry: "veryRare"
        }, true), _0x230ae6(2, _0x5f0192, '', {
          sentry: "veryRare"
        }, true), _0x230ae6(3, _0x4848bd(_0x5f0192, "string"), '', {
          sentry: "veryRare"
        }, true), await _0x22cf1c.callSnapchatStore("messaging->paginateMessages", _0x40c791(_0x5f0192)), _0x22cf1c.accessSnapchatStore("messaging->conversations->" + _0x5f0192);
      },
      async ["_processOpenMessages"]() {
        const _0x1ecece = await _0x47b668._getOpenConversationId();
        return await _0x2930fc.processMessages({
          conversationId: _0x1ecece
        });
      },
      async ["_paginateOpenMessages"]() {
        const _0xcd326e = await _0x47b668._getOpenConversationId();
        return await _0x2930fc.paginateMessages({
          conversationId: _0xcd326e
        });
      },
      async ["_getOpenMessages"]() {
        const _0x48e2fd = await _0x47b668._getOpenConversationId();
        return _0x2930fc._getMessages({
          conversationId: _0x48e2fd
        });
      },
      ["_getMessages"]({
        conversationId: _0x3fda19
      }) {
        const _0xf32962 = _0x47b668.getConversation({
          conversationId: _0x3fda19
        });
        return (null == _0xf32962 ? undefined : _0xf32962.messages) ? globalThis.Array.from(_0xf32962.messages.values()) : [];
      },
      ["_getMessage"]({
        conversationId: _0x62241f,
        messageId: _0x525235
      }) {
        var _0x584ed8;
        return null === (_0x584ed8 = _0x47b668.getConversation({
          conversationId: _0x62241f
        }).messages) || undefined === _0x584ed8 ? undefined : _0x584ed8.get(BigInt(_0x525235));
      },
      async ["_updateMessageStatus"]({
        conversationId: _0x854e17,
        messageId: _0x30c117,
        status: _0x5dad58
      }) {
        const {
          assert$: _0x32213f,
          message$: _0x1b71e
        } = _0x442618("ad3236");
        _0x32213f(1, null != _0x854e17, '', {
          sentry: "veryRare"
        }, true), _0x32213f(2, _0x4848bd(_0x854e17, "string"), '', {
          sentry: "veryRare"
        }, true), _0x32213f(3, null != _0x30c117, '', {
          sentry: "veryRare"
        }, true), _0x32213f(4, _0x4848bd(_0x30c117, "number"), '', {
          sentry: "veryRare"
        }, true), _0x32213f(5, null != _0xef48a1[_0x5dad58], '', {
          sentry: "veryRare"
        }, true), await _0x22cf1c.callSnapchatStore("messaging->updateMessage", _0x40c791(_0x854e17), BigInt(_0x30c117), _0xef48a1[_0x5dad58]);
      }
    };
    function _0x356354(_0x4a68ea, _0x1835f0, _0x264aab) {
      return _0x4a68ea.match(_0x264aab)[_0x1835f0];
    }
    function _0x156fc6() {
      const {
        message$: _0x4143b1,
        assert$: _0xb57bbe
      } = _0x442618("axflsaf");
      if (!globalThis.window.location.href.toLowerCase().includes("snapchat.com")) return;
      (function _0x5f0b68() {
        var _0xf35dc7;
        const _0x438d16 = globalThis.document.createElement("iframe");
        _0x438d16.style.display = "none", (null !== (_0xf35dc7 = globalThis.document.head) && undefined !== _0xf35dc7 ? _0xf35dc7 : globalThis.document.documentElement).appendChild(_0x438d16);
        const _0x2cd6ab = _0x438d16.contentWindow;
        globalThis.window.console.log = _0x2cd6ab.console.log, globalThis.window.console.error = _0x2cd6ab.console.error, globalThis.window.console.warn = _0x2cd6ab.console.warn, globalThis.window.console.info = _0x2cd6ab.console.info;
      })(), function _0x209301() {
        !function () {
          var _0x58b665 = CanvasRenderingContext2D.prototype.drawImage;
          CanvasRenderingContext2D.prototype.drawImage = function () {
            var _0x4d113f = arguments[0];
            if ("https://cf-st.sc-cdn.net/dw/0719fccbc89e0b18044d.png" !== _0x4d113f.src) {
              if (globalThis.window._cameraRes && (this.imageSmoothingEnabled = false, this.canvas.width != globalThis.window._cameraRes.width)) {
                let _0x3ef313 = globalThis.window._cameraRes.width,
                  _0x5219de = globalThis.window._cameraRes.height;
                globalThis.window._cameraRes.height < 1920 && (_0x3ef313 = globalThis.window._cameraRes.width * (1920 / globalThis.window._cameraRes.height), _0x5219de = 1920), globalThis.window._devicePixelRatio = globalThis.window.devicePixelRatio, globalThis.window.devicePixelRatio = (_0x3ef313 / _0x4d113f.width + _0x5219de / _0x4d113f.height) / 2, arguments[3] = this.canvas.width = _0x3ef313, arguments[4] = this.canvas.height = _0x5219de;
              }
              _0x58b665.apply(this, arguments);
            }
          };
          var _0xea128d = HTMLCanvasElement.prototype.toBlob;
          HTMLCanvasElement.prototype.toBlob = function () {
            arguments[2] = 0.95, _0xea128d.apply(this, arguments);
          };
        }();
      }(), function _0x219f23() {
        const {
          throw$: _0x17accc
        } = _0x442618("x9aod9s8");
        MessagePort.prototype.postMessage = new Proxy(MessagePort.prototype.postMessage, {
          async ["apply"](_0x4c609d, _0x54da22, [_0x222055, ..._0x559693]) {
            try {
              await async function _0x5127aa(_0x3fd027) {
                var _0x539721, _0x5a1112, _0x19952e, _0x1196b1;
                if (globalThis.Array.isArray(null == _0x3fd027 ? undefined : _0x3fd027.path) && (null === (_0x539721 = null == _0x3fd027 ? undefined : _0x3fd027.path) || undefined === _0x539721 ? undefined : _0x539721.includes("send")) && (null === (_0x19952e = null === (_0x5a1112 = null == _0x3fd027 ? undefined : _0x3fd027.argumentList) || undefined === _0x5a1112 ? undefined : _0x5a1112[1]) || undefined === _0x19952e ? undefined : _0x19952e.value)) {
                  const _0x15161a = _0x22cf1c.findModule({
                      key: "bitmoji-duplex",
                      includes: ["DuplexVolatileMessageTransport"]
                    }),
                    _0x352db8 = await _0x22cf1c.refactorExports(_0x15161a.moduleKey, _0x45dc85 => ({
                      OutboundTransientMessage: _0x356354(_0x45dc85, 1, /([\w$]+?)={encode:\(([\w$]),([\w$])=([\w$]+?)\.Writer\.create\(\)\)=>\("recipients"===\2\.destination\?\.\$case/)
                    })),
                    {
                      OutboundTransientMessage: _0x248d4e
                    } = _0x352db8,
                    _0x4c50ef = _0x3fd027.argumentList[1],
                    _0x300ee1 = _0x248d4e.decode(_0x4c50ef.value);
                  if ("presence" != (null === (_0x1196b1 = null == _0x300ee1 ? undefined : _0x300ee1.payload) || undefined === _0x1196b1 ? undefined : _0x1196b1.type)) return;
                  _0x300ee1.payload.data[_0x300ee1.payload.data.length - 1] = _0x4a4e9f.MOBILE, _0x4c50ef.value = _0x248d4e.encode(_0x300ee1).finish();
                }
              }(_0x222055), function _0xf30bc9(_0xd7a64) {
                var _0x1ec614, _0x4220ae, _0x3aa8aa, _0x23d9e2, _0x31d661, _0x20f4c0, _0x3b7f08, _0x5e041b, _0x169491, _0x532344, _0x31be02, _0x52bb6e, _0x264b17, _0x3ed7e0, _0x502501, _0x33d08b, _0x195eff, _0x1c3c6c, _0x3b2457, _0x2d3605, _0x2edb68, _0x93bf2e, _0x304b40, _0xb9c29, _0x3ca112, _0x3441f6;
                if (globalThis.Array.isArray(null == _0xd7a64 ? undefined : _0xd7a64.path) && (null === (_0x1ec614 = null == _0xd7a64 ? undefined : _0xd7a64.path) || undefined === _0x1ec614 ? undefined : _0x1ec614.includes("sendMessageWithContent")) && (null === (_0x23d9e2 = null === (_0x3aa8aa = null === (_0x4220ae = null == _0xd7a64 ? undefined : _0xd7a64.argumentList) || undefined === _0x4220ae ? undefined : _0x4220ae[1]) || undefined === _0x3aa8aa ? undefined : _0x3aa8aa.value) || undefined === _0x23d9e2 ? undefined : _0x23d9e2.content)) {
                  const _0x1238cb = null === (_0x169491 = null === (_0x5e041b = null === (_0x3b7f08 = null === (_0x20f4c0 = null === (_0x31d661 = null == _0xd7a64 ? undefined : _0xd7a64.argumentList) || undefined === _0x31d661 ? undefined : _0x31d661[0]) || undefined === _0x20f4c0 ? undefined : _0x20f4c0.value) || undefined === _0x3b7f08 ? undefined : _0x3b7f08.conversations) || undefined === _0x5e041b ? undefined : _0x5e041b[0]) || undefined === _0x169491 ? undefined : _0x169491.str,
                    _0x156be1 = _0x22cf1c.ContentEncoding();
                  if (!_0x156be1 || !_0x156be1.exportsMatched) return void globalThis.console.error("Failed to find ContentEncodingModule");
                  const {
                      encode: _0x498903,
                      decode: _0x1b254c
                    } = _0x156be1.exportsMatched.value,
                    _0x4000dd = _0x1b254c(_0xd7a64.argumentList[1].value.content);
                  "snapdoc" == (null === (_0x532344 = null == _0x4000dd ? undefined : _0x4000dd.content) || undefined === _0x532344 ? undefined : _0x532344.$case) && (_0xd7a64.argumentList[1].value.savePolicy = null !== (_0x31be02 = globalThis._snapSavePolicy) && undefined !== _0x31be02 ? _0x31be02 : _0x54f924.VIEW_SESSION), (null === (_0x502501 = null === (_0x3ed7e0 = null === (_0x264b17 = null === (_0x52bb6e = null == _0x4000dd ? undefined : _0x4000dd.content) || undefined === _0x52bb6e ? undefined : _0x52bb6e.snapdoc) || undefined === _0x264b17 ? undefined : _0x264b17.attachments) || undefined === _0x3ed7e0 ? undefined : _0x3ed7e0.attachments) || undefined === _0x502501 ? undefined : _0x502501.length) && (_0x4000dd.content.snapdoc.attachments = undefined), (null === (_0x3b2457 = null === (_0x1c3c6c = null === (_0x195eff = null === (_0x33d08b = null == _0x4000dd ? undefined : _0x4000dd.content) || undefined === _0x33d08b ? undefined : _0x33d08b.snapdoc) || undefined === _0x195eff ? undefined : _0x195eff.playback) || undefined === _0x1c3c6c ? undefined : _0x1c3c6c.playbackCharacteristics) || undefined === _0x3b2457 ? undefined : _0x3b2457.displayDuration) && globalThis._snapDurationSeconds && (_0x4000dd.content.snapdoc.playback.playbackCharacteristics.displayDuration = {
                    $case: "durationSeconds",
                    durationSeconds: globalThis._snapDurationSeconds
                  }), (null === (_0x2edb68 = null === (_0x2d3605 = null == _0x4000dd ? undefined : _0x4000dd.content) || undefined === _0x2d3605 ? undefined : _0x2d3605.snapdoc) || undefined === _0x2edb68 ? undefined : _0x2edb68.provenance) && (_0x4000dd.content.snapdoc.provenance.sourceSystem = _0x34f3e7.Provenance_SnapSourceSystem.UNSET, _0x4000dd.content.snapdoc.provenance.appSource = _0x34f3e7.Provenance_AppSource.APP_SOURCE_CAMERA), _0x1238cb && (null === (_0x93bf2e = globalThis._snapRemoveLinks) || undefined === _0x93bf2e ? undefined : _0x93bf2e.has(_0x1238cb)) && (null === (_0x3441f6 = null === (_0x3ca112 = null === (_0xb9c29 = null === (_0x304b40 = null == _0x4000dd ? undefined : _0x4000dd.content) || undefined === _0x304b40 ? undefined : _0x304b40.text) || undefined === _0xb9c29 ? undefined : _0xb9c29.attributes) || undefined === _0x3ca112 ? undefined : _0x3ca112.some) || undefined === _0x3441f6 ? undefined : _0x3441f6.call(_0x3ca112, _0x3f3a5a => {
                    var _0x3a019e;
                    return "urlAttribute" === (null === (_0x3a019e = null == _0x3f3a5a ? undefined : _0x3f3a5a.attribute) || undefined === _0x3a019e ? undefined : _0x3a019e.$case);
                  })) && (_0x4000dd.content.text.attributes = []), _0xd7a64.argumentList[1].value.content = _0x498903(_0x4000dd).finish();
                }
              }(_0x222055);
            } catch (_0x5bd6ca) {
              globalThis.console.log("GRPC error", _0x5bd6ca), _0x17accc(1, '', {
                sentry: "veryRare",
                exception: _0x5bd6ca
              }, true);
            }
            return Reflect.apply(_0x4c609d, _0x54da22, [_0x222055, ..._0x559693]);
          }
        });
      }();
      const _0xab0e3a = _0x22cf1c.findModule({
        key: "provenance-snapsource",
        accumulate: true,
        assert: _0x4143b1(1, '', {
          sentry: "rare"
        }, true),
        exportsMeta: {
          predicate: _0x1cbc4d => "object" == typeof _0x1cbc4d && "SNAPCHAT_WEB_APP" in _0x1cbc4d
        }
      })[0];
      _0xab0e3a && _0xab0e3a.exportsMatched ? _0xab0e3a.exportsMatched.value.SNAPCHAT_WEB_APP = _0xab0e3a.exportsMatched.value.UNSET : globalThis.console.log("Failed patching"), function _0x316944(_0x25b31d, _0xfc9f09, _0x31ae14) {
        const _0x5f0b30 = _0x25b31d[_0xfc9f09];
        _0x25b31d[_0xfc9f09] = _0x31ae14(_0x5f0b30, _0x25b31d);
      }(globalThis.document, "hasFocus", () => () => true);
      const _0x25326f = EventTarget.prototype.addEventListener;
      globalThis.Object.defineProperty(EventTarget.prototype, "addEventListener", {
        value: function (..._0x204935) {
          const _0x232fc7 = _0x204935[0];
          if ("keydown" !== _0x232fc7 && "focus" !== _0x232fc7) return _0x25326f.call(this, ..._0x204935);
        }
      }), globalThis._snapSavePolicy = null, globalThis._snapDurationSeconds = null, globalThis._snapRemoveLinks = new Set();
    }
    const _0x4a4e9f = {
        UNRECOGNIZED: -1,
        MOBILE: 1,
        WEB: 2
      },
      _0x4c357d = {
        init: async () => await _0x156fc6(),
        async ["hasLoaded"]() {
          var _0x50d2c4;
          try {
            const _0x381bd9 = globalThis.Object.values(null !== (_0x50d2c4 = _0x22cf1c.accessSnapchatStore("messaging->feed")) && undefined !== _0x50d2c4 ? _0x50d2c4 : {}),
              _0xbe477a = !!_0x22cf1c.accessSnapchatStore("talk->client");
            return !!_0x381bd9.length && _0xbe477a;
          } catch (_0x2e4f78) {
            return false;
          }
        }
      };
    let _0x41c18d = globalThis.Promise.resolve();
    const _0x280795 = (_0x497c56, _0x64f9c2) => {
        if (!_0x497c56) return false;
        return _0x497c56.split(":")[0] === _0x64f9c2;
      },
      _0x4a01df = globalThis.Object.freeze({
        presentOnPlatform: false,
        isPeeking: false,
        typingState: _0x5ad269
      }),
      _0x18500e = {
        isRecipientPresent: async ({
          conversationId: _0x5113cb,
          recipientId: _0x78f806
        } = {}) => {
          const {
            assert$: _0x46d3d2,
            message$: _0x1ca0a9
          } = _0x442618("cde366");
          _0x46d3d2(1, null != _0x5113cb, '', {
            sentry: "veryRare"
          }, true), _0x46d3d2(2, _0x5113cb, '', {
            sentry: "veryRare"
          }, true), _0x46d3d2(3, _0x4848bd(_0x5113cb, "string"), '', {
            sentry: "veryRare"
          }, true), _0x46d3d2(4, null != _0x78f806, '', {
            sentry: "veryRare"
          }, true), _0x46d3d2(5, _0x78f806, '', {
            sentry: "veryRare"
          }, true), _0x46d3d2(6, _0x4848bd(_0x78f806, "string"), '', {
            sentry: "veryRare"
          }, true);
          const _0x224ec9 = await _0x18500e._findPresenceRecipient({
            conversationId: _0x5113cb,
            recipientId: _0x78f806
          });
          return !!_0x224ec9.presentOnPlatform || !!_0x224ec9.isPeeking;
        },
        async ["isRecipientTyping"]({
          conversationId: _0x283c06,
          recipientId: _0x26a280
        }) {
          const {
            assert$: _0x45ba06,
            message$: _0x6f7c92
          } = _0x442618("d5843d");
          _0x45ba06(1, null != _0x283c06, '', {
            sentry: "veryRare"
          }, true), _0x45ba06(2, _0x283c06, '', {
            sentry: "veryRare"
          }, true), _0x45ba06(3, _0x4848bd(_0x283c06, "string"), '', {
            sentry: "veryRare"
          }, true), _0x45ba06(4, null != _0x26a280, '', {
            sentry: "veryRare"
          }, true), _0x45ba06(5, _0x26a280, '', {
            sentry: "veryRare"
          }, true), _0x45ba06(6, _0x4848bd(_0x26a280, "string"), '', {
            sentry: "veryRare"
          }, true);
          const _0xc56a18 = await _0x18500e._findPresenceRecipient({
            conversationId: _0x283c06,
            recipientId: _0x26a280
          });
          return _0xc56a18.typingState === _0x46038c || _0xc56a18.typingState === _0x430bdf;
        },
        async ["startPresence"]({
          conversationId: _0x104549
        }) {
          const {
            assert$: _0xad7f0e,
            message$: _0xb20120,
            throw$: _0x48f3d3
          } = _0x442618("204ae7");
          _0xad7f0e(1, null != _0x104549, '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x104549
            }
          }, true), _0xad7f0e(2, _0x104549, '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x104549
            }
          }, true), _0xad7f0e(3, _0x4848bd(_0x104549, "string"), '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x104549
            }
          }, true);
          const _0x5d5077 = {
            get: () => _0x22cf1c.accessSnapchatStore("presence->presenceSession"),
            isValid: (_0x1f6394 = _0x5d5077.get()) => {
              var _0x416e80;
              return (null === (_0x416e80 = null == _0x1f6394 ? undefined : _0x1f6394.conversationId) || undefined === _0x416e80 ? undefined : _0x416e80.str) === _0x104549 || (null == _0x1f6394 ? undefined : _0x1f6394.conversationId) === _0x104549;
            }
          };
          if (_0x5d5077.isValid()) return _0x5d5077.get();
          const _0x5ccf9e = _0x40c791(_0x104549),
            _0x10bc4c = _0x12a90b => {
              var _0x3abef7, _0x12b1dc, _0x139f77, _0x43bdc2;
              const _0x10c820 = null == _0x12a90b ? undefined : _0x12a90b.state,
                _0x37bf30 = (null == _0x10c820 ? undefined : _0x10c820.keys) ? globalThis.Array.from(_0x10c820.keys()).slice(0, 5) : null;
              return {
                conversationId: null !== (_0x139f77 = null !== (_0x12b1dc = null === (_0x3abef7 = null == _0x12a90b ? undefined : _0x12a90b.conversationId) || undefined === _0x3abef7 ? undefined : _0x3abef7.str) && undefined !== _0x12b1dc ? _0x12b1dc : null == _0x12a90b ? undefined : _0x12a90b.conversationId) && undefined !== _0x139f77 ? _0x139f77 : null,
                stateSize: null !== (_0x43bdc2 = null == _0x10c820 ? undefined : _0x10c820.size) && undefined !== _0x43bdc2 ? _0x43bdc2 : null,
                stateKeysSample: _0x37bf30,
                hasProcessTypingActivity: "function" == typeof (null == _0x12a90b ? undefined : _0x12a90b.processTypingActivity)
              };
            },
            _0x4f0e41 = _0x41c18d.then(async () => {
              var _0x950df3;
              if (_0x5d5077.isValid()) return _0x5d5077.get();
              const _0x3041a3 = _0x5d5077.get();
              _0x3041a3 && !_0x5d5077.isValid(_0x3041a3) && (await (null === (_0x950df3 = null == _0x3041a3 ? undefined : _0x3041a3.dispose) || undefined === _0x950df3 ? undefined : _0x950df3.call(_0x3041a3)));
              const _0x3b9cf6 = await _0x47b668.enterConversation({
                conversationId: _0x104549
              });
              if (!!!_0x22cf1c.accessSnapchatStore("messaging->conversations->" + _0x104549 + "->isActive")) {
                const _0x4dccf6 = await _0x47b668._getOpenConversationId()["catch"](() => null);
                _0x48f3d3(4, '', {
                  sentry: "extremelyRare",
                  extra: {
                    conversationId: _0x104549,
                    enterConversationResult: _0x3b9cf6,
                    openConversationId: _0x4dccf6
                  }
                }, true);
              }
              const _0x56554c = await _0x22cf1c.callSnapchatStore("presence->createPresenceSession", _0x5ccf9e),
                {
                  session: _0x11cd00,
                  maxWaitMs: _0x246996,
                  timedOut: _0x5c3ff4,
                  waitedMs: _0xaaeb10
                } = await (async () => {
                  const _0x3e8101 = 2000,
                    _0x3cb9d0 = _0x22cf1c.getSnapchatStoreModule().exportsMatched.value;
                  return _0x5d5077.isValid() ? {
                    session: _0x5d5077.get(),
                    maxWaitMs: _0x3e8101,
                    timedOut: false,
                    waitedMs: 0
                  } : await new globalThis.Promise(_0x31bfb1 => {
                    const _0x209f67 = globalThis.Date.now();
                    let _0x30ab3c = () => {};
                    const _0x48e2f4 = _0x2c3461 => {
                        _0x30ab3c(), _0x31bfb1({
                          session: _0x5d5077.get(),
                          maxWaitMs: _0x3e8101,
                          timedOut: _0x2c3461,
                          waitedMs: globalThis.Date.now() - _0x209f67
                        });
                      },
                      _0x51e602 = globalThis.setTimeout(() => _0x48e2f4(true), _0x3e8101);
                    _0x30ab3c = _0x3cb9d0.subscribe(() => {
                      _0x5d5077.isValid() && (globalThis.clearTimeout(_0x51e602), _0x48e2f4(false));
                    });
                  });
                })();
              if (!_0x5d5077.isValid(_0x11cd00)) {
                const _0x59607f = await _0x47b668._getOpenConversationId()["catch"](() => null),
                  _0x1ac88d = !_0x59607f || _0x59607f === _0x104549,
                  _0x36c1cb = _0x10bc4c(_0x11cd00),
                  _0x4f529d = {
                    conversationId: _0x104549,
                    openConversationId: _0x59607f,
                    presenceSession: _0x36c1cb,
                    enterConversationResult: _0x3b9cf6,
                    createPresenceSessionResult: _0x56554c,
                    storePresenceSession: _0x10bc4c(_0x5d5077.get()),
                    isValid: _0x5d5077.isValid(_0x11cd00),
                    maxWaitMs: _0x246996,
                    timedOut: _0x5c3ff4,
                    waitedMs: _0xaaeb10
                  };
                _0x48f3d3(1, '', {
                  sentry: _0x1ac88d ? "veryRare" : "extremelyRare",
                  networkRelated: true,
                  extra: {
                    sendToSentry: _0x1ac88d,
                    ..._0x4f529d
                  }
                }, true);
              }
              return await _0x22cf1c.callSnapchatStore("presence->presenceSession->activate"), _0x5d5077.get();
            });
          return _0x41c18d = _0x4f0e41["catch"](() => null), await _0x4f0e41;
        },
        async ["stopPresence"]() {
          const _0x1b3d63 = _0x22cf1c.accessSnapchatStore("presence->presenceSession");
          await (null == _0x1b3d63 ? undefined : _0x1b3d63.dispose());
        },
        startTyping: async ({
          conversationId: _0x315c1c
        }) => {
          const {
            assert$: _0x43e26f,
            message$: _0x67b494
          } = _0x442618("3402ad");
          return _0x43e26f(1, null != _0x315c1c, '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x315c1c
            }
          }, true), _0x43e26f(2, _0x315c1c, '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x315c1c
            }
          }, true), _0x43e26f(3, _0x4848bd(_0x315c1c, "string"), '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x315c1c
            }
          }, true), await _0x18500e._sendTypingActivity({
            conversationId: _0x315c1c,
            type: "TYPING"
          });
        },
        stopTyping: async ({
          conversationId: _0x125496
        }) => {
          const {
            assert$: _0x2ad91e,
            message$: _0x3380d3
          } = _0x442618("cf9178");
          return _0x2ad91e(1, null != _0x125496, '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x125496
            }
          }, true), _0x2ad91e(2, _0x125496, '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x125496
            }
          }, true), _0x2ad91e(3, _0x4848bd(_0x125496, "string"), '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x125496
            }
          }, true), await _0x18500e._sendTypingActivity({
            conversationId: _0x125496,
            type: "FINISH"
          });
        },
        async ["_sendTypingActivity"]({
          conversationId: _0x9a57ad,
          type: _0x21be1b
        }) {
          const {
            assert$: _0x4d863a,
            message$: _0x5b0950
          } = _0x442618("42c44e");
          _0x4d863a(1, null != _0x9a57ad, '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x9a57ad
            }
          }, true), _0x4d863a(2, _0x9a57ad, '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x9a57ad
            }
          }, true), _0x4d863a(3, _0x4848bd(_0x9a57ad, "string"), '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x9a57ad
            }
          }, true), _0x4d863a(4, null != _0x21be1b, '', {
            sentry: "veryRare",
            extra: {
              type: _0x21be1b
            }
          }, true), _0x4d863a(5, _0x4848bd(_0x21be1b, "string"), '', {
            sentry: "veryRare",
            extra: {
              type: _0x21be1b
            }
          }, true), _0x4d863a(6, null != _0xb9d680[_0x21be1b], '', {
            sentry: "veryRare",
            extra: {
              type: _0x21be1b
            }
          }, true);
          const _0x2e656b = await _0x18500e.startPresence({
            conversationId: _0x9a57ad
          });
          return _0x4d863a(7, null != (null == _0x2e656b ? undefined : _0x2e656b.processTypingActivity), '', {
            sentry: "veryRare",
            extra: {
              conversationId: _0x9a57ad,
              presenceSession: _0x2e656b
            }
          }, true), await _0x2e656b.processTypingActivity(_0xb9d680[_0x21be1b], 0);
        },
        async ["_findPresenceRecipient"]({
          conversationId: _0x480d44,
          recipientId: _0x1937f7
        }) {
          const {
            assert$: _0x17b800
          } = _0x442618("adae08");
          let _0x4c9402;
          _0x17b800(1, null != _0x480d44, '', {
            sentry: "veryRare"
          }, true), _0x17b800(2, null != _0x1937f7, '', {
            sentry: "veryRare"
          }, true), _0x17b800(3, _0x480d44, '', {
            sentry: "veryRare"
          }, true), _0x17b800(4, _0x1937f7, '', {
            sentry: "veryRare"
          }, true), _0x17b800(5, _0x4848bd(_0x480d44, "string"), '', {
            sentry: "veryRare"
          }, true), _0x17b800(6, _0x4848bd(_0x1937f7, "string"), '', {
            sentry: "veryRare"
          }, true);
          try {
            _0x4c9402 = await _0x18500e.startPresence({
              conversationId: _0x480d44
            });
          } catch (_0x16b08f) {
            return _0x4a01df;
          }
          const _0x1b19af = _0x26f6d3.getCurrentUser(),
            _0x2f8296 = _0x54f832 => {
              var _0x38d1a2, _0x21dfce, _0x2beb77, _0x1b1baf;
              const _0x5661f1 = globalThis.Array.from(null !== (_0x2beb77 = null === (_0x21dfce = null === (_0x38d1a2 = null == _0x54f832 ? undefined : _0x54f832.state) || undefined === _0x38d1a2 ? undefined : _0x38d1a2.entries) || undefined === _0x21dfce ? undefined : _0x21dfce.call(_0x38d1a2)) && undefined !== _0x2beb77 ? _0x2beb77 : []).find(([_0x179baa]) => {
                const _0x3c3b2d = "string" == typeof _0x179baa ? _0x179baa : null == _0x179baa ? undefined : _0x179baa.str;
                return _0x1937f7 ? _0x280795(_0x3c3b2d, _0x1937f7) : !_0x280795(_0x3c3b2d, _0x1b19af.user_id);
              });
              return null !== (_0x1b1baf = null == _0x5661f1 ? undefined : _0x5661f1[1]) && undefined !== _0x1b1baf ? _0x1b1baf : null;
            },
            _0x36aa65 = _0x2f8296(_0x4c9402);
          if (_0x36aa65) return _0x36aa65;
          const _0x49c52b = _0x22cf1c.getSnapchatStoreModule().exportsMatched.value;
          if ("function" == typeof (null == _0x49c52b ? undefined : _0x49c52b.subscribe)) {
            const _0x585099 = 3000,
              _0x221710 = await new globalThis.Promise(_0x1fe566 => {
                let _0x16bbf1 = () => {};
                const _0x49c580 = _0x56c3ec => {
                    _0x16bbf1(), _0x1fe566(_0x56c3ec);
                  },
                  _0x198f99 = globalThis.setTimeout(() => _0x49c580(null), _0x585099);
                _0x16bbf1 = _0x49c52b.subscribe(() => {
                  const _0x31f4bc = _0x22cf1c.accessSnapchatStore("presence->presenceSession"),
                    _0x2124e3 = _0x2f8296(_0x31f4bc);
                  _0x2124e3 && (globalThis.clearTimeout(_0x198f99), _0x49c580(_0x2124e3));
                });
              });
            if (_0x221710) return _0x221710;
          }
          return _0x4a01df;
        }
      },
      _0x23d950 = {
        async ["viewStory"]({
          userId: _0x28a79d
        }) {
          const {
            assert$: _0x12163c,
            message$: _0x3a2163
          } = _0x442618("a0468c");
          _0x12163c(1, null != _0x28a79d, '', {
            sentry: "veryRare"
          }, true), _0x12163c(2, _0x4848bd(_0x28a79d, "string"), '', {
            sentry: "veryRare"
          }, true);
          const _0x949da2 = /(async\s+[\w$]+\s*=>\s*new\s+Promise\s*\(\s*\([\w$]+\s*,\s*[\w$]+\)\s*=>\s*\{\s*[\w$]+\s*\.\s*push\s*\(\s*[\w$]+\s*\),?)/g,
            _0x313d0f = _0x2ff5c3.findModule({
              key: "stories-batch",
              assert: _0x3a2163(1, '', {
                sentry: "rare"
              }, true),
              includes: ["read_receipts_batch_size"]
            }),
            _0x3d7b40 = globalThis.Object.values(_0x313d0f.exports),
            _0x389f83 = _0x26f6d3.getCurrentUser().user_id,
            _0x45f573 = _0x22cf1c.accessSnapchatStore("friendStories->syncWatchState"),
            _0x1213c6 = _0x3d7b40.find(_0x5d04f9 => null != _0x5d04f9 && _0x949da2.test(_0x5d04f9.toString())),
            _0x3d2edb = _0x3d7b40.find(_0x2a5419 => null != _0x2a5419 && _0x2a5419.toString().includes("friendLinkState"));
          _0x12163c(3, null != _0x1213c6, '', {
            sentry: "rare"
          }, true), _0x12163c(4, null != _0x3d2edb, '', {
            sentry: "rare"
          }, true);
          const _0x38e10d = _0x40c791(_0x28a79d),
            _0x5a2b42 = await _0x23d950._listStories({
              userId: _0x28a79d
            });
          if (!_0x5a2b42.length) return "No stories found";
          const _0x493b58 = _0x3d2edb(_0x40c791(_0x389f83), _0x5a2b42[0].snaps.map((_0x325b60, _0x22ffde) => ({
              snapId: _0x325b60.itemMetadata.snapId,
              ownerUserId: _0x38e10d,
              shareCount: 0,
              viewTimeMs: globalThis.Date.now() + 1000 * _0x22ffde,
              snapExpirationTimeMs: Number(_0x325b60.itemMetadata.expirationTimestampMs),
              snapCreationTimeMs: Number(_0x325b60.itemMetadata.creationTimestampMs),
              wasRewatched: false
            }))),
            _0x17dbc3 = await _0x1213c6(..._0x493b58);
          return await _0x45f573(), _0x17dbc3;
        },
        async ["postStory"]({
          blob: _0x1f8c1b,
          captionData: _0x5d41c0
        }) {
          const {
            assert$: _0x151b67,
            message$: _0x1c60e2
          } = _0x442618("741369");
          _0x151b67(1, null != _0x1f8c1b, '', {
            sentry: "veryRare"
          }, true), _0x151b67(3, _0x4848bd(_0x1f8c1b, "blob"), '', {
            sentry: "veryRare"
          }, true), _0x151b67(4, !_0x5d41c0 || _0x4848bd(_0x5d41c0, "object"), '', {
            sentry: "veryRare"
          }, true), _0x151b67(5, !_0x5d41c0 || _0x4848bd(null == _0x5d41c0 ? undefined : _0x5d41c0.text, "string"), '', {
            sentry: "veryRare"
          }, true), _0x151b67(6, !_0x5d41c0 || _0x4848bd(null == _0x5d41c0 ? undefined : _0x5d41c0.height, "number"), '', {
            sentry: "veryRare"
          }, true);
          const _0x3b26d8 = {
            conversations: [],
            stories: [{
              storyData: new Uint8Array([10, 0, 58, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
              storyId: {
                id: new Uint8Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
              },
              storyType: _0x33deb0
            }]
          };
          let _0x2529db = await _0x334477(_0x1f8c1b, !_0x5d41c0);
          return _0x2529db = _0x5d41c0 ? await _0x4ec9a1(_0x2529db, _0x5d41c0.text, {
            style: "snapchat",
            compress: true,
            styleOpts: {
              heightPercentage: _0x5d41c0.height
            }
          }) : _0x2529db, await _0x2930fc._sendSnap({
            recipientData: _0x3b26d8,
            blob: _0x2529db,
            origin: "LandingPage"
          });
        },
        ["_listStories"]({
          userId: _0x35a0ba,
          viewed: _0x52feb4 = false
        }) {
          var _0x41df43, _0xc42eb3, _0xf1841c;
          const {
            assert$: _0x4b0eb9,
            message$: _0x1ddf9d
          } = _0x442618("549578");
          _0x4b0eb9(2, !_0x35a0ba || _0x4848bd(_0x35a0ba, "string"), '', {
            sentry: "veryRare"
          }, true);
          const _0x1ba9d5 = _0x22cf1c.accessSnapchatStore("friendStories->playbackData");
          let _0x2bbbc7 = globalThis.Array.from(_0x1ba9d5.entries()).filter(([_0x8268ac, _0x1c66aa]) => _0x1c66aa.hasViewedAll == _0x52feb4);
          if (_0x35a0ba) {
            const _0x533818 = null !== (_0xf1841c = null === (_0xc42eb3 = null === (_0x41df43 = _0x2bbbc7.find(_0x5ef3cf => _0x5ef3cf[0].str === _0x35a0ba)) || undefined === _0x41df43 ? undefined : _0x41df43[1]) || undefined === _0xc42eb3 ? undefined : _0xc42eb3.bundle.items) && undefined !== _0xf1841c ? _0xf1841c : [];
            return _0x533818.length ? [{
              userId: _0x35a0ba,
              snaps: _0x533818
            }] : [];
          }
          return _0x2bbbc7.map(([_0x5a4189, _0x12bccd]) => ({
            userId: _0x5a4189.str,
            snaps: _0x12bccd.bundle.items
          }));
        }
      };
    let _0x3842bd = null;
    const _0x248283 = {
        get ["redditChatApp"]() {
          const {
            assert$: _0x3deb77
          } = _0x442618("xvoos");
          return _0x3deb77(1, globalThis.document.querySelector("rs-app"), '', {
            sentry: "uncommon"
          }, true);
        },
        get ["redditRoomNav"]() {
          const {
            assert$: _0x592f74
          } = _0x442618("dpkbwiyq");
          return _0x592f74(1, _0x248283.redditChatApp.shadowRoot.querySelector("rs-rooms-nav"), '', {
            sentry: "uncommon"
          }, true);
        },
        get ["redditMatrixClient"]() {
          const {
            assert$: _0xcde064
          } = _0x442618("mhijclfr");
          return _0xcde064(1, globalThis.document.querySelector("rs-matrix-client"), '', {
            sentry: "uncommon"
          }, true);
        },
        get ["redditAuthClient"]() {
          const {
            assert$: _0x4c3875
          } = _0x442618("bibpv");
          return _0x4c3875(1, _0x248283.redditMatrixClient.authClient, '', {
            sentry: "uncommon"
          }, true);
        },
        get ["redditRoomNavVirtual"]() {
          const {
            assert$: _0x23b13e
          } = _0x442618("mcqcbcnc");
          return _0x23b13e(1, _0x248283.redditRoomNav.shadowRoot.querySelector("rs-virtual-scroll"), '', {
            sentry: "uncommon"
          }, true);
        },
        get ["redditFirstRoom"]() {
          var _0x1b6f8c;
          const {
              assert$: _0x43e31e
            } = _0x442618("zxdcxhba"),
            _0x7b98f1 = _0x248283.redditRoomNavVirtual;
          return _0x43e31e(1, null === (_0x1b6f8c = null == _0x7b98f1 ? undefined : _0x7b98f1.shadowRoot) || undefined === _0x1b6f8c ? undefined : _0x1b6f8c.querySelector("rs-rooms-nav-room"), '', {
            sentry: "uncommon"
          }, true);
        },
        get ["redditUserController"]() {
          var _0x5ff447;
          return null === (_0x5ff447 = _0x248283.redditFirstRoom) || undefined === _0x5ff447 ? undefined : _0x5ff447.users;
        },
        async ["graphQlCall"](_0x2afea4, _0x1d8def = 0) {
          const {
            assert$: _0x4d3803
          } = _0x442618("odbplf");
          _0x4d3803(1, _0x1d8def < 3, '', {
            sentry: "uncommon"
          }, true);
          const _0x2dcd6d = await _0x248283.redditAuthClient.getToken(),
            _0x1a4db7 = _0x248283.redditAuthClient.constructor.getLoid(),
            _0xdb0e5c = (_0x248283.redditAuthClient.constructor.getCsrfToken(), globalThis.document.cookie),
            _0x4ec3f0 = globalThis.Object.fromEntries(_0xdb0e5c.split(";").map(_0x5c69e2 => _0x5c69e2.trim().split("="))).session_tracker,
            _0x3d1800 = await globalThis.fetch("https://gql.reddit.com", {
              method: "POST",
              headers: {
                ["Content-Type"]: "application/json",
                Authorization: "Bearer " + _0x2dcd6d,
                ["X-Reddit-Loid"]: _0x1a4db7,
                ["X-Reddit-Session"]: _0x4ec3f0
              },
              body: JSON.stringify(_0x2afea4)
            });
          return 401 === _0x3d1800.status ? (await _0x248283.redditAuthClient.refreshToken(), await _0x248283.graphQlCall(_0x2afea4, _0x1d8def + 1)) : 200 === _0x3d1800.status ? await _0x3d1800.json() : null;
        },
        get ["redditChatGqlClient"]() {
          var _0xca3322;
          return (null === (_0xca3322 = globalThis.document.querySelector("reddit-chat-gql-client")) || undefined === _0xca3322 ? undefined : _0xca3322.client) || null;
        },
        get ["graphqlClient"]() {
          const {
              assert$: _0x35486d
            } = _0x442618("osbytmo"),
            _0x5536f0 = globalThis.document.querySelector("rs-graphql-client");
          return (null == _0x5536f0 ? undefined : _0x5536f0.client) ? _0x5536f0.client : (_0x3842bd || (_0x3842bd = {
            async ["makeGQLCall"]({
              operation: _0x563983,
              variables: _0x4364e7
            }, _0x5af65e = {}) {
              const _0x3b9ead = await _0x248283.redditAuthClient.getToken(),
                _0x373f98 = _0x248283.redditAuthClient.constructor.getLoid(),
                _0x1013b6 = {
                  ["Content-Type"]: "application/json"
                };
              _0x3b9ead && (_0x1013b6.Authorization = "Bearer " + _0x3b9ead), _0x373f98 && (_0x1013b6["X-Reddit-Loid"] = _0x373f98);
              const _0x3c6147 = {};
              if (_0x4364e7 && (_0x3c6147.variables = _0x4364e7), _0x563983.hash) _0x3c6147.operationName = _0x563983.name, _0x3c6147.extensions = {
                persistedQuery: {
                  version: 1,
                  sha256Hash: _0x563983.hash
                }
              };else {
                if (!_0x563983.query) throw new Error("Operation is invalid");
                _0x3c6147.query = _0x563983.query;
              }
              const _0x485497 = _0x5af65e.abortController || new AbortController(),
                _0x53b2d6 = globalThis.setTimeout(() => _0x485497.abort(), 10000);
              try {
                const _0x5b4bd5 = await globalThis.fetch("https://gql-fed.reddit.com", {
                  method: "POST",
                  headers: _0x1013b6,
                  body: JSON.stringify(_0x3c6147),
                  signal: _0x485497.signal
                });
                if (globalThis.clearTimeout(_0x53b2d6), 200 === _0x5b4bd5.status) {
                  const _0x52ccc1 = await _0x5b4bd5.text();
                  return JSON.parse(_0x52ccc1);
                }
                throw new Error("GraphQL request failed with status " + _0x5b4bd5.status);
              } catch (_0x49fd3a) {
                throw globalThis.clearTimeout(_0x53b2d6), _0x49fd3a;
              }
            }
          }), _0x35486d(1, _0x3842bd, '', {
            sentry: "uncommon"
          }, true));
        },
        get ["matrix"]() {
          var _0x1e5b4d;
          const {
            assert$: _0x5bb939
          } = _0x442618("pxpveztg");
          return _0x5bb939(1, null === (_0x1e5b4d = _0x248283.redditChatApp) || undefined === _0x1e5b4d ? undefined : _0x1e5b4d.client, '', {
            sentry: "uncommon"
          }, true);
        }
      },
      _0x43a440 = "@t2_1qwk:reddit.com",
      _0x76aaaf = {
        redditChatScript: null,
        newRedditOperationHashes: {}
      };
    function _0x3d9281() {
      return globalThis.document.getElementById("reddit-chat");
    }
    async function _0x6881b2(_0x279d50) {
      const {
        assert$: _0x4daf8e
      } = _0x442618("asuov");
      if (_0x76aaaf.newRedditOperationHashes[_0x279d50]) return _0x76aaaf.newRedditOperationHashes[_0x279d50];
      const _0x4de56d = await async function _0x1d4fcb() {
        if (_0x76aaaf.redditChatScript) return _0x76aaaf.redditChatScript;
        const _0x177f49 = _0x3d9281();
        if (!_0x177f49) return null;
        const _0xc48381 = _0x177f49.getAttribute("src");
        if (!_0xc48381) return null;
        const _0x42c319 = await globalThis.fetch(_0xc48381),
          _0x27bc67 = await _0x42c319.text();
        return _0x76aaaf.redditChatScript = _0x27bc67, _0x27bc67;
      }();
      _0x4daf8e(1, "string" == typeof _0x4de56d, '', {
        sentry: "rare"
      }, true);
      const _0x2d491b = new RegExp("name:\"" + _0x279d50 + "\",hash:\"([\\w$]*?)\""),
        _0x4cfd79 = _0x4de56d.match(_0x2d491b);
      _0x4daf8e(2, _0x4cfd79, '', {
        sentry: "rare"
      }, true);
      const _0x2808d = _0x4cfd79[1];
      return _0x4daf8e(3, _0x2808d, '', {
        sentry: "rare"
      }, true), _0x76aaaf.newRedditOperationHashes[_0x279d50] = _0x2808d, _0x2808d;
    }
    function _0x1ebc05(_0x51cc68) {
      return _0x51cc68 ? {
        userId: _0x51cc68.userId,
        name: _0x51cc68.name,
        displayName: _0x51cc68.displayName,
        rawDisplayName: _0x51cc68.rawDisplayName
      } : _0x51cc68;
    }
    function _0xfc3fad(_0x50ec93) {
      return _0x50ec93 ? _0x50ec93.map(_0x31a7aa => function _0x2738cc(_0x17c340) {
        if (!_0x17c340) return _0x17c340;
        return {
          currentState: {
            members: _0x5b5145(_0x17c340.currentState.members)
          },
          roomId: _0x17c340.roomId,
          timeline: _0x17c340.timeline.map(_0x50c481 => ({
            event: {
              origin_server_ts: _0x50c481.event.origin_server_ts
            }
          }))
        };
      }(_0x31a7aa)) : _0x50ec93;
    }
    function _0x5b5145(_0x11e3cb) {
      return _0x11e3cb ? globalThis.Object.keys(_0x11e3cb).reduce((_0x54d542, _0x29bdc1) => (_0x29bdc1 === "@t2_1qwk:reddit.com" || (_0x54d542[_0x29bdc1] = _0x1ebc05(_0x11e3cb[_0x29bdc1])), _0x54d542), {}) : _0x11e3cb;
    }
    function _0x2ccc60(_0x41052e) {
      return _0x41052e ? _0x41052e.map(_0x43a70d => function _0x57960a(_0x55d4df) {
        if (!_0x55d4df) return _0x55d4df;
        return {
          currentState: {
            members: _0x5b5145(_0x55d4df.currentState.members)
          },
          roomId: _0x55d4df.roomId
        };
      }(_0x43a70d)) : _0x41052e;
    }
    function _0x25492a(_0x3faaf6) {
      return _0x3faaf6.slice(1, _0x3faaf6.indexOf(":"));
    }
    function _0x1df58b(_0x9540f5) {
      return "@" + _0x9540f5 + ":reddit.com";
    }
    const _0x3cfce5 = {
        getNotifications: async _0x4d2532 => {
          var _0x33a1f5, _0x1e1b84;
          const {
              assert$: _0xcf14c1
            } = _0x442618("wmmynrhd"),
            _0x420a38 = await "be3e43b15ada",
            _0x269dc5 = await _0x248283.graphQlCall({
              id: _0x420a38,
              variables: {
                after: (null == _0x4d2532 ? undefined : _0x4d2532.cursor) ? _0x4d2532.cursor : null,
                first: 10
              }
            }),
            _0x58f0e9 = null === (_0x1e1b84 = null === (_0x33a1f5 = _0x269dc5.data) || undefined === _0x33a1f5 ? undefined : _0x33a1f5.notificationInbox) || undefined === _0x1e1b84 ? undefined : _0x1e1b84.elements,
            _0x1761a6 = null == _0x58f0e9 ? undefined : _0x58f0e9.edges,
            _0xc79ed = null == _0x58f0e9 ? undefined : _0x58f0e9.pageInfo;
          return _0xcf14c1(1, _0x269dc5.data, '', {
            sentry: "veryRare",
            networkRelated: true
          }, true), _0xcf14c1(2, _0x1761a6, '', {
            sentry: "rare"
          }, true), _0xcf14c1(3, _0xc79ed, '', {
            sentry: "rare"
          }, true), {
            notifications: null == _0x1761a6 ? undefined : _0x1761a6.map(_0x4606f1 => _0x4606f1.node),
            hasNext: null == _0xc79ed ? undefined : _0xc79ed.hasNextPage,
            cursor: null == _0xc79ed ? undefined : _0xc79ed.endCursor
          };
        }
      },
      _0x47fe97 = ["COMMENT_REPLY", "POST_REPLY", "THREAD_REPLIES"],
      _0x409a68 = {
        getReplies: async _0x4e7301 => {
          const _0x43c181 = await _0x3cfce5.getNotifications(_0x4e7301);
          return {
            comments: _0x43c181.notifications.filter(_0x36bb1a => {
              var _0x1106b9;
              return _0x47fe97.includes(null === (_0x1106b9 = null == _0x36bb1a ? undefined : _0x36bb1a.context) || undefined === _0x1106b9 ? undefined : _0x1106b9.messageType);
            }).map(_0x5e7ec5 => {
              var _0x50a93e, _0x1d384d, _0x46c857;
              const _0x437beb = null !== (_0x46c857 = null === (_0x1d384d = null === (_0x50a93e = _0x5e7ec5.title) || undefined === _0x50a93e ? undefined : _0x50a93e.match(/u\/(.+?) /)) || undefined === _0x1d384d ? undefined : _0x1d384d[1]) && undefined !== _0x46c857 ? _0x46c857 : '';
              return {
                ..._0x5e7ec5,
                author: !_0x437beb || _0x437beb.startsWith("[") && _0x437beb.endsWith("]") ? '' : _0x437beb
              };
            }).filter(_0xc8798a => !!_0xc8798a.author && "AutoModerator" !== _0xc8798a.author),
            hasNext: _0x43c181.hasNext,
            cursor: _0x43c181.cursor
          };
        }
      },
      _0x2d403b = (_0x2466f1, _0x4a2cfc) => {
        const {
            throw$: _0x28cc11
          } = _0x442618("6e86e8"),
          _0x48afcd = _0x248283.redditRoomNav;
        _0x48afcd || _0x28cc11(1, '', {
          sentry: "veryRare"
        }, true);
        let _0x594797 = null;
        return "joined_chat_rooms" === _0x2466f1 ? (_0x594797 = _0x48afcd.getRoomsList(), _0x594797 = _0x4a2cfc ? _0xfc3fad(_0x594797) : _0x594797) : "invited_chat_rooms" === _0x2466f1 && (_0x594797 = _0x48afcd.getFilteredRoomList().filter(_0x4d3d65 => "invite" === _0x4d3d65.getMyMembership()), _0x594797 = _0x4a2cfc ? _0x2ccc60(_0x594797) : _0x594797), _0x594797;
      },
      _0x2f07d9 = {
        getRooms: _0x4cca15 => _0x2d403b("joined_chat_rooms", null == _0x4cca15 ? undefined : _0x4cca15.clean),
        getRoomRequests: _0x2e140c => _0x2d403b("invited_chat_rooms", null == _0x2e140c ? undefined : _0x2e140c.clean),
        getRoom: async _0x377f35 => {
          const {
            assert$: _0xe261d5
          } = _0x442618("cupszh");
          return _0xe261d5(1, "string" == typeof _0x377f35.roomId, '', {
            sentry: false
          }, true), await _0x248283.matrix.getRoom(_0x377f35.roomId);
        },
        acceptRoomRequest: async _0x21d70d => {
          const {
            assert$: _0x37105b
          } = _0x442618("mm");
          _0x37105b(1, "string" == typeof _0x21d70d.roomId, '', {
            sentry: false
          }, true), await _0x248283.matrix.joinRoom(_0x21d70d.roomId);
        },
        ignoreRoomRequest: async _0x29b68f => {
          const {
            assert$: _0x1d49f6
          } = _0x442618("gjswtzny");
          _0x1d49f6(1, "string" == typeof _0x29b68f.roomId, '', {
            sentry: false
          }, true), await _0x248283.matrix.leaveRoom(_0x29b68f.roomId);
        },
        createRoom: async _0x2e514f => {
          const {
            assert$: _0x1f9f5c
          } = _0x442618("rkxmqbd");
          return _0x1f9f5c(1, "string" == typeof _0x2e514f.userId, '', {
            sentry: false
          }, true), await _0x248283.matrix.createRoom({
            preset: "reddit_dm",
            invite: [_0x2e514f.userId]
          });
        },
        markAsRead: async _0x1a338d => {
          const {
            assert$: _0x6b8acc
          } = _0x442618("osceygt");
          _0x6b8acc(1, "string" == typeof _0x1a338d.roomId, '', {
            sentry: false
          }, true);
          const _0x285bd2 = await _0x2f07d9.getRoom({
            roomId: _0x1a338d.roomId
          });
          _0x6b8acc(2, _0x285bd2, '', {
            sentry: "rare"
          }, true);
          const _0x3f174f = _0x285bd2.getLiveTimeline();
          _0x6b8acc(3, _0x3f174f, '', {
            sentry: "rare"
          }, true);
          const _0xb4810f = _0x3f174f.getEvents();
          return 0 !== _0xb4810f.length && (await _0x248283.matrix.sendReadReceipt(_0xb4810f[_0xb4810f.length - 1]));
        }
      },
      _0x322a3d = {
        async ["getFollowers"](_0x7d9c63) {
          var _0x2007c7, _0x412170, _0x4040f8, _0x40649a;
          const {
              assert$: _0x37d476
            } = _0x442618("obxjp"),
            _0xe6dee5 = await _0x248283.graphQlCall({
              id: await "5fc67bec507f",
              variables: {
                includeIdentity: false,
                first: null,
                after: (null == _0x7d9c63 ? undefined : _0x7d9c63.cursor) ? _0x7d9c63.cursor : null,
                searchQuery: null
              }
            }),
            _0x3f46a8 = null === (_0x412170 = null === (_0x2007c7 = _0xe6dee5.data) || undefined === _0x2007c7 ? undefined : _0x2007c7.identity) || undefined === _0x412170 ? undefined : _0x412170.followedByRedditorsInfo,
            _0x2bfec0 = null == _0x3f46a8 ? undefined : _0x3f46a8.edges,
            _0x113a3f = null == _0x3f46a8 ? undefined : _0x3f46a8.pageInfo;
          return _0x37d476(1, _0xe6dee5.data, '', {
            sentry: "rare"
          }, true), _0x37d476(2, _0x3f46a8, '', {
            sentry: "rare"
          }, true), _0x37d476(3, _0x113a3f, '', {
            sentry: "rare"
          }, true), {
            followers: null === (_0x40649a = null === (_0x4040f8 = null == _0x2bfec0 ? undefined : _0x2bfec0.map(_0x27ff83 => _0x27ff83.node)) || undefined === _0x4040f8 ? undefined : _0x4040f8.filter(_0x171a86 => "DeletedRedditor" !== (null == _0x171a86 ? undefined : _0x171a86.__typename))) || undefined === _0x40649a ? undefined : _0x40649a.map(_0x425fe5 => ({
              ..._0x425fe5,
              id: _0x1df58b(_0x425fe5.id)
            })),
            hasMore: null == _0x113a3f ? undefined : _0x113a3f.hasNextPage,
            nextCursor: null == _0x113a3f ? undefined : _0x113a3f.endCursor
          };
        }
      },
      _0x1f85bc = {
        loadThreads: async _0x25e68d => {
          var _0x18a149;
          const {
              assert$: _0x49eeff
            } = _0x442618("rqkfprn"),
            _0x4529a6 = _0x49eeff(1, await _0x2f07d9.getRoom(_0x25e68d), '', {
              sentry: false
            }, true),
            _0x544627 = _0x49eeff(2, null === (_0x18a149 = _0x4529a6.getUnfilteredTimelineSet()) || undefined === _0x18a149 ? undefined : _0x18a149.getLiveTimeline(), '', {
              sentry: false
            }, true).events.filter(_0x1782f2 => _0x1782f2.isThreadRoot && !_0x1782f2.thread);
          for (const _0x437538 of _0x544627) {
            const _0x10e554 = _0x437538.event.event_id;
            await _0x4529a6.createThread(_0x10e554, _0x437538, [], 0);
          }
          return _0x544627.length;
        },
        processMessages: async _0x5242f0 => {
          const {
              assert$: _0x12095f
            } = _0x442618("yoqlj"),
            _0x73ee5f = new Map(),
            _0x14a49c = _0x12095f(1, await _0x2f07d9.getRoom(_0x5242f0), '', {
              sentry: false
            }, true),
            _0x2ffb70 = _0x12095f(2, _0x248283.matrix.getUserId(), '', {
              sentry: false
            }, true),
            _0x55299a = (_0x36c38b, _0xf25c18) => {
              var _0x542586, _0x4092c6, _0x55d124, _0x7fb63;
              for (const _0x20a170 of _0x36c38b) {
                const _0x3af6de = _0x20a170.event;
                if (!_0x3af6de) continue;
                let _0x4f726a = _0x3af6de.event_id,
                  _0x1e1338 = '',
                  _0x30d140 = _0x3af6de.origin_server_ts / 1000,
                  _0x30242c = (null === (_0x542586 = _0x20a170.sender) || undefined === _0x542586 ? undefined : _0x542586.userId) !== _0x2ffb70,
                  _0x22522b = false,
                  _0x1abb66 = false,
                  _0x56806a = false,
                  _0x17cfba = !!_0xf25c18;
                if (_0x73ee5f.has(_0x4f726a)) continue;
                if ("m.reaction" === _0x3af6de.type) continue;
                "m.sticker" === _0x3af6de.type && (_0x56806a = true);
                const _0x1ddcc2 = null === (_0x4092c6 = _0x3af6de.content) || undefined === _0x4092c6 ? undefined : _0x4092c6.msgtype,
                  _0x14234d = null === (_0x7fb63 = null === (_0x55d124 = _0x3af6de.content) || undefined === _0x55d124 ? undefined : _0x55d124.info) || undefined === _0x7fb63 ? undefined : _0x7fb63.mimetype;
                if ("m.text" === _0x1ddcc2 ? _0x1e1338 = _0x3af6de.content.body : "m.image" === _0x1ddcc2 && (_0x1abb66 = "image/gif" !== _0x14234d, _0x22522b = "image/gif" === _0x14234d), _0x1e1338 || _0x22522b || _0x1abb66 || _0x56806a) {
                  const _0x36cfc1 = {
                    id: _0x4f726a,
                    msg: _0x1e1338,
                    timestamp: _0x30d140,
                    isIncoming: _0x30242c,
                    isGIF: _0x22522b,
                    isPhoto: _0x1abb66,
                    isSticker: _0x56806a,
                    isInReplyThread: _0x17cfba
                  };
                  _0x73ee5f.set(_0x4f726a, _0x54640d(_0x36cfc1));
                }
                _0x20a170.thread && _0x20a170.threadId !== _0xf25c18 && _0x55299a(_0x20a170.thread.timeline, _0x20a170.threadId);
              }
            },
            _0x342bb6 = _0x12095f(3, _0x14a49c.getUnfilteredTimelineSet(), '', {
              sentry: "rare"
            }, true),
            _0x31dfd2 = _0x12095f(4, _0x342bb6.getLiveTimeline(), '', {
              sentry: "rare"
            }, true);
          _0x55299a(_0x31dfd2.events);
          const _0x170ede = globalThis.Array.from(_0x73ee5f.values());
          return _0x170ede.sort((_0x35f4fe, _0x1f123c) => _0x35f4fe.timestamp - _0x1f123c.timestamp), _0x170ede;
        },
        paginateMessages: async _0x23e408 => {
          const {
              assert$: _0x19b15f
            } = _0x442618("exzzjd"),
            _0x5b58b2 = _0x19b15f(1, await _0x2f07d9.getRoom(_0x23e408), '', {
              sentry: "rare"
            }, true),
            _0x5f5d1f = _0x19b15f(2, _0x5b58b2.getUnfilteredTimelineSet(), '', {
              sentry: "rare"
            }, true),
            _0x59457f = _0x19b15f(3, _0x5f5d1f.getLiveTimeline(), '', {
              sentry: "rare"
            }, true);
          return await _0x248283.matrix.paginateEventTimeline(_0x59457f, {
            backwards: true,
            limit: 10
          });
        },
        sendPhoto: async _0x252ee4 => {
          const {
            assert$: _0x48cb78
          } = _0x442618("iwhoirul");
          _0x48cb78(1, "string" == typeof _0x252ee4.roomId, '', {
            sentry: false
          }, true), _0x48cb78(2, _0x252ee4.blob instanceof Blob, '', {
            sentry: false
          }, true);
          const _0x4fa5a3 = await _0x5dc537(_0x252ee4.blob, {
              compress: true,
              width: 1080
            }),
            _0x57f143 = _0x248283.matrix,
            _0xc43164 = new File([_0x4fa5a3], _0x491d77(8) + ".jpg", {
              type: "image/jpeg"
            });
          let _0x5354f6,
            _0x18fac2,
            _0xd69bb = new FileReader(),
            _0x5987bd = new Image();
          try {
            return _0x5354f6 = await _0x57f143.uploadContent(_0xc43164), _0x18fac2 = await new globalThis.Promise(_0x1fa790 => {
              _0xd69bb.onload = () => {
                _0x5987bd.onload = () => _0x1fa790({
                  w: _0x5987bd.width,
                  h: _0x5987bd.height,
                  mimetype: _0xc43164.type,
                  size: _0xc43164.size
                }), _0x5987bd.onerror = () => _0x1fa790(null), _0x5987bd.src = _0xd69bb.result;
              }, _0xd69bb.readAsDataURL(_0xc43164);
            }), _0x48cb78(3, _0x5354f6, '', {
              sentry: "rare"
            }, true), _0x48cb78(4, _0x18fac2, '', {
              sentry: "rare"
            }, true), _0x48cb78(5, "string" == typeof _0x5354f6.content_uri, '', {
              sentry: "rare"
            }, true), await _0x57f143.sendImageMessage(_0x252ee4.roomId, _0x252ee4.threadId ? _0x252ee4.threadId : null, _0x5354f6.content_uri, _0x18fac2);
          } finally {
            _0x5987bd.src = '', _0x5987bd = null, _0xd69bb = null;
          }
        },
        sendTextMessage: async _0x2c54e4 => {
          const {
            assert$: _0x34eabf
          } = _0x442618("onnahhma");
          return _0x34eabf(1, "string" == typeof _0x2c54e4.roomId, '', {
            sentry: false
          }, true), _0x34eabf(2, "string" == typeof _0x2c54e4.message, '', {
            sentry: false
          }, true), _0x248283.matrix.sendTextMessage(_0x2c54e4.roomId, _0x2c54e4.threadId ? _0x2c54e4.threadId : null, _0x2c54e4.message, null);
        }
      };
    function _0x54640d(_0xbf6d3e) {
      _0xbf6d3e.ogMsg = _0xbf6d3e.msg;
      let _0x51b0a7 = _0xbf6d3e.msg || '';
      return _0xbf6d3e.isGIF ? _0x51b0a7 = "[GIF]" : _0xbf6d3e.isSticker ? _0x51b0a7 = "[sticker]" : _0xbf6d3e.isPhoto ? _0x51b0a7 = "[photo] " + _0x51b0a7 : _0xbf6d3e.msg && (_0x51b0a7 = _0xbf6d3e.msg), _0x51b0a7 = _0x51b0a7.trim(), _0xbf6d3e.isInReplyThread && (_0x51b0a7 = "[replied] " + _0x51b0a7), _0x51b0a7 = _0x51b0a7.trim(), _0xbf6d3e.msg = _0x51b0a7, _0xbf6d3e;
    }
    const _0x48bd16 = {
        hasLoaded: () => !!_0x4cc3d2(() => {
          var _0x12bade;
          return null === (_0x12bade = _0x248283.redditChatApp) || undefined === _0x12bade ? undefined : _0x12bade.client;
        })
      },
      _0x5cf49b = {
        startTyping: _0x61b8c5 => {
          const {
            assert$: _0xdf0ee1
          } = _0x442618("cbbvo");
          return _0xdf0ee1(1, "string" == typeof _0x61b8c5.roomId, '', {
            sentry: false
          }, true), _0x248283.matrix.sendTyping(_0x61b8c5.roomId, true, 15000);
        },
        stopTyping: _0x219626 => {
          const {
            assert$: _0xe52c39
          } = _0x442618("kbhlh");
          return _0xe52c39(1, "string" == typeof _0x219626.roomId, '', {
            sentry: false
          }, true), _0x248283.matrix.sendTyping(_0x219626.roomId, false, 0);
        },
        isRecipientTyping: _0xd560d7 => {
          const {
              assert$: _0x4841c2
            } = _0x442618("lnqglhy"),
            _0x4d50a6 = _0x248283.matrix.getRoom(_0xd560d7.roomId);
          _0x4841c2(1, _0x4d50a6, '', {
            sentry: false
          }, true);
          const _0x536ec8 = _0x4d50a6.getMember(_0xd560d7.recipientId);
          return _0x4841c2(2, _0x536ec8, '', {
            sentry: "rare"
          }, true), _0x536ec8.typing;
        }
      },
      _0x1fbae1 = {
        users: null
      },
      _0xa6439e = {
        getMe: async _0x2a0256 => {
          const _0x353005 = await _0x248283.matrix.getUser(await _0x248283.matrix.getUserId());
          return (null == _0x2a0256 ? undefined : _0x2a0256.clean) ? _0x1ebc05(_0x353005) : _0x353005;
        },
        getUsers: async _0x50d95f => {
          const _0x168ed1 = await _0x248283.matrix.getUsers();
          return (null == _0x50d95f ? undefined : _0x50d95f.clean) ? function _0x1997a3(_0x2dbdfa) {
            return _0x2dbdfa ? _0x2dbdfa.map(_0x484440 => _0x1ebc05(_0x484440)) : _0x2dbdfa;
          }(_0x168ed1) : _0x168ed1;
        },
        fetchRedditors: async _0x3f59a7 => {
          var _0x31e2f3;
          const {
            assert$: _0x364226,
            message$: _0x3b8398
          } = _0x442618("bbcy");
          _0x364226(1, globalThis.Array.isArray(_0x3f59a7.userIds), '', {
            sentry: false
          }, true);
          const _0x2fc8d1 = {},
            _0x3e942a = _0x3f59a7.ignoreCache ? _0x3f59a7.userIds : [];
          if (!_0x3f59a7.ignoreCache) {
            for (const _0x20b3b7 of _0x3f59a7.userIds) (null === (_0x31e2f3 = _0x1fbae1.users) || undefined === _0x31e2f3 ? undefined : _0x31e2f3[_0x20b3b7]) ? _0x2fc8d1[_0x20b3b7] = _0x1fbae1.users[_0x20b3b7] : _0x3e942a.push(_0x20b3b7);
          }
          if (0 === _0x3e942a.length) return _0x2fc8d1;
          const _0xd09a7c = _0x3e942a.map(_0x25492a),
            _0x59b1d7 = _0x4525ab => {
              var _0x31856b, _0x356265, _0x667d7b, _0x4096be;
              const _0x3123fa = null !== (_0x31856b = null == _0x4525ab ? undefined : _0x4525ab.data) && undefined !== _0x31856b ? _0x31856b : _0x4525ab;
              return [null == _0x3123fa ? undefined : _0x3123fa.redditorsInfoByIds, null === (_0x356265 = null == _0x3123fa ? undefined : _0x3123fa.chatRedditors) || undefined === _0x356265 ? undefined : _0x356265.redditorsInfoByIds, null == _0x3123fa ? undefined : _0x3123fa.chatRedditorsByIds, null == _0x3123fa ? undefined : _0x3123fa.chatRedditors, null === (_0x667d7b = null == _0x3123fa ? undefined : _0x3123fa.chatRedditorsByIds) || undefined === _0x667d7b ? undefined : _0x667d7b.nodes, null === (_0x4096be = null == _0x3123fa ? undefined : _0x3123fa.chatRedditors) || undefined === _0x4096be ? undefined : _0x4096be.nodes].find(globalThis.Array.isArray);
            };
          let _0x19d1f9 = null;
          const _0x381d23 = _0x248283.redditChatGqlClient,
            _0x544227 = Boolean(null == _0x381d23 ? undefined : _0x381d23.queryRedditors),
            _0x423c9f = Boolean(_0x3d9281());
          _0x544227 && (_0x19d1f9 = _0x59b1d7(await _0x381d23.queryRedditors({
            ids: _0xd09a7c
          })["catch"](() => null)));
          !_0x19d1f9 && _0x423c9f && (!globalThis.String && (lwzoZ() ^= IKTOXx), _0x19d1f9 = _0x59b1d7(await _0x248283.graphqlClient.makeGQLCall({
            operation: {
              name: "Redditors",
              hash: await _0x6881b2("Redditors")
            },
            variables: {
              ids: _0xd09a7c
            }
          })));
          if (_0x19d1f9 || !_0x544227 && !_0x423c9f || _0x364226(2, _0x19d1f9, '', {
            sentry: "rare",
            extra: {
              hasChatClient: _0x544227,
              hasLegacyScript: _0x423c9f
            }
          }, true), !_0x19d1f9) return _0x427bd9("reddit.fetchRedditors", _0x3b8398(3, '', {
            sentry: "veryRare",
            extra: {
              hasChatClient: _0x544227,
              hasLegacyScript: _0x423c9f
            }
          }, true)), {
            ..._0x2fc8d1
          };
          const _0x45b809 = globalThis.Object.fromEntries(_0x19d1f9.map(_0x2d668a => [_0x1df58b(_0x2d668a.id), _0x2d668a])),
            _0x161cc1 = {
              ..._0x2fc8d1
            };
          for (const _0x5c8dd7 of _0x3e942a) {
            const _0x1bc0a4 = _0x45b809[_0x5c8dd7] || {
              __typename: "DeletedRedditor",
              id: "t2_0",
              displayName: "[deleted]"
            };
            _0x161cc1[_0x5c8dd7] = _0x1bc0a4, _0x1fbae1.users || (_0x1fbae1.users = {}), _0x1fbae1.users[_0x5c8dd7] = _0x1bc0a4;
          }
          return _0x161cc1;
        },
        fetchRedditorByUsername: async _0x417e2d => {
          const {
            assert$: _0xf2a377
          } = _0x442618("jaoidnwr");
          _0xf2a377(1, _0x417e2d, '', {
            sentry: false
          }, true), _0xf2a377(2, _0x417e2d.username, '', {
            sentry: false
          }, true);
          const _0x4c6c56 = await "db6eb1356b13";
          _0xf2a377(3, _0x4c6c56, '', {
            sentry: "rare"
          }, true);
          const _0x2145bc = await _0x248283.graphQlCall({
            id: _0x4c6c56,
            variables: {
              name: _0x417e2d.username
            }
          });
          return _0xf2a377(4, _0x2145bc.data.redditorInfoByName, '', {
            extra: _0x2145bc.data,
            sentry: "veryRare"
          }, true), _0xf2a377(5, _0x2145bc.data.redditorInfoByName.id, '', {
            extra: _0x2145bc.data.redditorInfoByName,
            sentry: "veryRare"
          }, true), _0x2145bc.data.redditorInfoByName.id;
        },
        searchUser: async _0x8f7836 => {
          const {
            assert$: _0x2dedea
          } = _0x442618("lwz");
          return _0x2dedea(1, (await _0xa6439e.searchUsers({
            term: _0x8f7836.username
          }))[0], '', {
            sentry: "veryRare"
          }, true);
        },
        searchUsers: async _0x1d3473 => await _0x248283.matrix.searchUserDirectory({
          term: _0x1d3473.term,
          limit: _0x1d3473.limit
        }).then(_0x165072 => null == _0x165072 ? undefined : _0x165072.results),
        getDeletedUsers: async _0x50d0c1 => {
          const {
            assert$: _0xeabe93
          } = _0x442618("rclfynzn");
          _0xeabe93(1, globalThis.Array.isArray(_0x50d0c1.userIds), '', {
            sentry: false
          }, true);
          const _0x269cfa = await _0xa6439e.fetchRedditors({
            userIds: _0x50d0c1.userIds
          });
          return globalThis.Object.fromEntries(_0x50d0c1.userIds.map(_0x327cf9 => {
            var _0x2e2620;
            return [_0x327cf9, "DeletedRedditor" === (null === (_0x2e2620 = _0x269cfa[_0x327cf9]) || undefined === _0x2e2620 ? undefined : _0x2e2620.__typename)];
          }));
        }
      },
      _0x55b30d = {};
    function _0x193b63(_0x488972) {
      const _0x4cfb0a = function _0x5aa529(_0x3cb426) {
        let _0x5c80dc = _0x5816f6(_0x3cb426);
        const _0x2f467b = [];
        for (; _0x5c80dc;) _0x2f467b.push(_0x5c80dc), _0x5c80dc = _0x5c80dc["return"];
        return _0x2f467b;
      }(_0x488972);
      return _0x4cfb0a.map(_0x3aada1 => {
        var _0x241002;
        return null === (_0x241002 = null == _0x3aada1 ? undefined : _0x3aada1.memoizedProps) || undefined === _0x241002 ? undefined : _0x241002.value;
      }).filter(Boolean);
    }
    function _0x5816f6(_0x568737) {
      const _0x350944 = ["__reactFiber$", "__reactProps$", "__reactContainer$", "__reactInternalInstance", "_reactInternalFiber"];
      if (!_0x568737) return null;
      for (const _0x576962 of function _0x2007d0(_0xc613f6) {
        const _0x3a1208 = new Set();
        if (null == _0xc613f6 || "object" != typeof _0xc613f6 && "function" != typeof _0xc613f6) return [];
        return globalThis.Object.getOwnPropertyNames(_0xc613f6).forEach(_0x45878a => _0x3a1208.add(_0x45878a)), globalThis.Object.getOwnPropertySymbols(_0xc613f6).forEach(_0x4f6f1a => _0x3a1208.add(_0x4f6f1a)), globalThis.Array.from(_0x3a1208);
      }(_0x568737)) if (_0x350944.some(_0x1e744e => _0x576962.startsWith(_0x1e744e))) try {
        return _0x568737[_0x576962] || null;
      } catch (_0xc5f673) {}
      return null;
    }
    function _0x5394d9(_0x5a9c03) {
      var _0x51293e;
      const {
          key: _0x52e706,
          accumulate: _0xd559e3,
          assert: _0x40baa6,
          element: _0x3314c1,
          mustHaveKeys: _0x24fff8,
          mustHaveNestedKeys: _0x34cb02,
          filter: _0xcd6f2d,
          maxDepth: _0x3a6f3f = 5
        } = _0x5a9c03,
        _0x776dab = _0x52e706.trim(),
        _0x571d0c = _0x776dab.length > 0;
      if (_0x571d0c && _0x776dab in _0x55b30d) return _0x55b30d[_0x776dab];
      const _0xe9bf9b = _0x5816f6(_0x3314c1) || function _0x3fa7b4() {
          const _0x3e5e9a = [globalThis.document.querySelector("#react-root, [data-reactroot], #root, #app"), globalThis.document.body].filter(Boolean);
          for (const _0x382599 of _0x3e5e9a) {
            const _0x5956b6 = _0x5816f6(_0x382599);
            if (_0x5956b6) return _0x5956b6;
          }
          const _0x190365 = globalThis.Array.from(globalThis.document.querySelectorAll("body *")).slice(0, 2000);
          for (const _0x478fd6 of _0x190365) {
            const _0x403f83 = _0x5816f6(_0x478fd6);
            if (_0x403f83) return _0x403f83;
          }
          return null;
        }(),
        _0x46c9a3 = Boolean(_0xd559e3),
        _0x10f9d1 = !_0x46c9a3,
        _0x964107 = (_0x109728, _0x777c6d, _0x2dc910 = 0) => {
          if (!_0x109728 || _0x2dc910 >= _0x3a6f3f) return false;
          if ("object" != typeof _0x109728) return false;
          for (const _0x1c36aa of _0x777c6d) try {
            if (globalThis.Object.prototype.hasOwnProperty.call(_0x109728, _0x1c36aa)) return true;
          } catch (_0x276979) {
            continue;
          }
          if (globalThis.Array.isArray(_0x109728)) {
            for (const _0x4743a0 of _0x109728) try {
              if (_0x964107(_0x4743a0, _0x777c6d, _0x2dc910 + 1)) return true;
            } catch (_0x3c10d4) {
              continue;
            }
          } else {
            const _0x3133f7 = globalThis.Object.keys(_0x109728);
            for (const _0x49805f of _0x3133f7) {
              let _0x5038dd;
              try {
                _0x5038dd = _0x109728[_0x49805f];
              } catch (_0x454c78) {
                continue;
              }
              if (_0x964107(_0x5038dd, _0x777c6d, _0x2dc910 + 1)) return true;
            }
          }
          return false;
        },
        _0x429399 = new Set(),
        _0x308047 = _0x2facc3 => {
          return !_0x2facc3 || _0x429399.has(_0x2facc3) || !(_0x46c35d = _0x2facc3) || _0x24fff8 && !_0x24fff8.every(_0x578c65 => _0x46c35d[_0x578c65]) || _0x34cb02 && !_0x964107(_0x46c35d, _0x34cb02) || _0xcd6f2d && !_0xcd6f2d(_0x46c35d) ? [] : (_0x429399.add(_0x2facc3), [_0x2facc3]);
          var _0x46c35d;
        },
        _0x5576e7 = _0x21a622 => {
          const _0x4a4649 = [];
          if (_0x21a622.memoizedState) {
            let _0x4c12ee = _0x21a622.memoizedState;
            const _0x28227e = new Set();
            for (; _0x4c12ee && "object" == typeof _0x4c12ee && !_0x28227e.has(_0x4c12ee);) _0x28227e.add(_0x4c12ee), _0x4a4649.push(..._0x308047(_0x4c12ee)), _0x4a4649.push(..._0x308047(_0x4c12ee.baseState)), _0x4a4649.push(..._0x308047(_0x4c12ee.memoizedState)), _0x4c12ee = _0x4c12ee.next || null;
          }
          if (_0x21a622.stateNode && "object" == typeof _0x21a622.stateNode && (_0x4a4649.push(..._0x308047(_0x21a622.stateNode)), _0x4a4649.push(..._0x308047(_0x21a622.stateNode.state)), _0x4a4649.push(..._0x308047(_0x21a622.stateNode.props)), _0x4a4649.push(..._0x308047(_0x21a622.stateNode.context))), _0x21a622.memoizedProps && "object" == typeof _0x21a622.memoizedProps) {
            const _0x380ec5 = _0x21a622.memoizedProps;
            _0x4a4649.push(..._0x308047(_0x380ec5)), _0x380ec5.value && _0x4a4649.push(..._0x308047(_0x380ec5.value));
          }
          if (_0x21a622.dependencies && "object" == typeof _0x21a622.dependencies) {
            const _0x5ded46 = _0x21a622.dependencies;
            _0x4a4649.push(..._0x308047(_0x5ded46)), _0x4a4649.push(..._0x308047(_0x5ded46.memoizedState));
          }
          return _0x4a4649.filter(_0x422ee6);
        },
        _0x541df3 = ((_0x17e3e8, _0x5a127a = 50000) => {
          const _0x4a7260 = [_0x17e3e8],
            _0x57121b = new Set(),
            _0x3d13a1 = [];
          let _0x47ae72 = 0;
          for (; _0x4a7260.length && _0x47ae72 < _0x5a127a;) {
            const _0xaee031 = _0x4a7260.shift();
            if (_0x47ae72++, !_0xaee031 || _0x57121b.has(_0xaee031)) continue;
            _0x57121b.add(_0xaee031);
            const _0xf2680 = _0x5576e7(_0xaee031);
            for (const _0x40385e of _0xf2680) if (_0x3d13a1.push(_0x40385e), _0x10f9d1) return _0x3d13a1;
            _0xaee031.child && _0x4a7260.push(_0xaee031.child), _0xaee031.sibling && _0x4a7260.push(_0xaee031.sibling), _0xaee031["return"] && _0x4a7260.push(_0xaee031["return"]), _0xaee031.alternate && _0x4a7260.push(_0xaee031.alternate);
          }
          return _0x3d13a1;
        })(_0xe9bf9b),
        _0x191e71 = _0x46c9a3 ? _0x541df3 : null !== (_0x51293e = _0x541df3[0]) && undefined !== _0x51293e ? _0x51293e : null,
        _0x4e11a2 = _0x46c9a3 ? _0x541df3.length > 0 : Boolean(_0x191e71);
      return _0x40baa6 && _0x4c64f4(_0x4e11a2, _0x40baa6), _0x4e11a2 && _0x571d0c && (_0x55b30d[_0x776dab] = _0x191e71), _0x191e71;
    }
    function _0x8190b7(_0x4e6c5d, _0x5bf7e3 = new WeakMap(), _0x17800f = 0) {
      if (null == _0x4e6c5d) return _0x4e6c5d;
      if ("object" != typeof _0x4e6c5d && "function" != typeof _0x4e6c5d) return _0x4e6c5d;
      if (_0x4e6c5d instanceof globalThis.Date) return _0x4e6c5d;
      if (_0x17800f > 10) return "[Max depth reached]";
      if (globalThis.Array.isArray(_0x4e6c5d)) return _0x4e6c5d.map(_0x2f0f7a => _0x8190b7(_0x2f0f7a, _0x5bf7e3, _0x17800f + 1));
      if (_0x5bf7e3.has(_0x4e6c5d)) return _0x5bf7e3.get(_0x4e6c5d);
      const _0x4dc18b = _0x3d6889(_0x4e6c5d, _0x5bf7e3, _0x17800f);
      if (null !== _0x4dc18b) return _0x4dc18b;
      if (function _0x941217(_0x3bc228) {
        return "object" == typeof _0x3bc228 && null !== _0x3bc228 && "name" in _0x3bc228 && "ordinal" in _0x3bc228 && "string" == typeof _0x3bc228.name && "number" == typeof _0x3bc228.ordinal;
      }(_0x4e6c5d)) return {
        name: _0x4e6c5d.name,
        ordinal: _0x4e6c5d.ordinal
      };
      const _0x4e6a23 = {};
      _0x5bf7e3.set(_0x4e6c5d, _0x4e6a23);
      let _0x1b28bf = false;
      const _0x41054e = new Set();
      let _0x3ed4bd = _0x4e6c5d,
        _0x18adc4 = 0;
      for (; _0x3ed4bd && _0x3ed4bd !== globalThis.Object.prototype && _0x18adc4 < 10;) {
        const _0x26a676 = globalThis.Object.getOwnPropertyDescriptors(_0x3ed4bd);
        for (const _0x302ca0 in _0x26a676) {
          if (_0x41054e.has(_0x302ca0)) continue;
          const _0x467ce3 = _0x26a676[_0x302ca0];
          if (!_0x5704a4(_0x302ca0)) {
            if ("function" == typeof _0x467ce3.get) try {
              const _0x335349 = _0x467ce3.get.call(_0x4e6c5d);
              "function" != typeof _0x335349 && (_0x4e6a23[_0x302ca0] = _0x8190b7(_0x335349, _0x5bf7e3, _0x17800f + 1), _0x1b28bf = true, _0x41054e.add(_0x302ca0));
            } catch (_0x1a9bdd) {} else {
              if ("value" in _0x467ce3 && _0x3ed4bd === _0x4e6c5d) {
                const _0x42161d = _0x467ce3.value;
                "function" != typeof _0x42161d && (_0x4e6a23[_0x302ca0] = _0x8190b7(_0x42161d, _0x5bf7e3, _0x17800f + 1), _0x1b28bf = true, _0x41054e.add(_0x302ca0));
              }
            }
          }
        }
        _0x3ed4bd = globalThis.Object.getPrototypeOf(_0x3ed4bd), _0x18adc4++;
      }
      if (!_0x1b28bf) {
        const _0x4da315 = function _0x96bf17(_0xfdbef8) {
          try {
            if ("function" == typeof _0xfdbef8.toString && _0xfdbef8.toString !== globalThis.Object.prototype.toString) {
              const _0x556151 = _0xfdbef8.toString();
              if (_0x556151 && "[object Object]" !== _0x556151 && !_0x556151.startsWith("[object ")) return _0x556151;
            }
          } catch (_0x1d9f22) {}
          return null;
        }(_0x4e6c5d);
        if (null !== _0x4da315) return _0x4da315;
      }
      return _0x4e6a23;
    }
    function _0x5704a4(_0x253e47) {
      return !!_0x253e47.startsWith("$") || "constructor" === _0x253e47 || "equals" === _0x253e47 || "hashCode" === _0x253e47 || "toString" === _0x253e47 || "copy" === _0x253e47 || !!_0x253e47.startsWith("component") || !!/_\d+$/.test(_0x253e47) || !!/^[a-z]{1,3}\d+_\d+$/.test(_0x253e47);
    }
    function _0x3d6889(_0x38b51f, _0x2ecdab, _0x39b00d) {
      if (!_0x38b51f) return null;
      if (_0x38b51f instanceof Map) {
        const _0x1849b7 = {};
        for (const [_0x3ec723, _0x519068] of _0x38b51f.entries()) _0x1849b7[globalThis.String(_0x3ec723)] = _0x8190b7(_0x519068, _0x2ecdab, _0x39b00d + 1);
        return _0x1849b7;
      }
      if ("function" == typeof _0x38b51f.asJsReadonlyMapView) try {
        return _0x3d6889(_0x38b51f.asJsReadonlyMapView(), _0x2ecdab, _0x39b00d);
      } catch (_0x32f6eb) {}
      if ("function" == typeof _0x38b51f.asJsReadonlyArrayView) try {
        return _0x8190b7(_0x38b51f.asJsReadonlyArrayView(), _0x2ecdab, _0x39b00d + 1);
      } catch (_0x57f0ba) {}
      if ("function" == typeof _0x38b51f.getValue && !("then" in _0x38b51f)) try {
        return _0x8190b7(_0x38b51f.getValue(), _0x2ecdab, _0x39b00d + 1);
      } catch (_0x4a2a7d) {}
      return null;
    }
    let _0x269ee5 = null,
      _0x4c8027 = {
        graph: null,
        patched: false
      };
    const _0x3c9fcd = {
      ["getDmGraph"]() {
        const {
            message$: _0x25a2cc
          } = _0x442618("owiehncs"),
          _0x5ff9dc = ["dmComponent", "conversationListComponent"];
        return _0x5394d9({
          key: "x:dm-graph",
          mustHaveKeys: _0x5ff9dc,
          filter: _0x48a70c => (_0x2ab874 => {
            if (!_0x2ab874 || "object" != typeof _0x2ab874) return false;
            const _0x36bb25 = _0x2ab874;
            return _0x5ff9dc.every(_0x4ff0b6 => _0x4ff0b6 in _0x36bb25 && "function" == typeof _0x36bb25[_0x4ff0b6]);
          })(_0x48a70c),
          assert: _0x25a2cc(1, '', {
            sentry: "rare"
          }, true)
        });
      },
      ["_initGraph"]() {
        if (!_0x4c8027.patched) {
          const _0x5dda33 = _0x3c9fcd.kotlin.get("com->x->dms->buildWebDmObjectGraph");
          if ("function" == typeof _0x5dda33 && !_0x5dda33.__patched_by_console) {
            const _0x310402 = function (..._0x28a0cc) {
              const _0x9d8dea = _0x5dda33.apply(this, _0x28a0cc);
              return _0x4c8027.graph = _0x9d8dea, _0x9d8dea;
            };
            _0x310402.__patched_by_console = true, _0x3c9fcd.kotlin.getExports().com.x.dms.buildWebDmObjectGraph = _0x310402;
          }
          _0x4c8027.patched = true;
        }
        return _0x4c8027.graph;
      },
      kotlin: {
        ["getExports"]() {
          const {
            assert$: _0x299038,
            message$: _0x11ff87
          } = _0x442618("ktlxasddh");
          if (_0x269ee5) return _0x269ee5;
          const _0x5a0dce = _0x2ff5c3.findModule({
            key: "$x-dm-kotlin",
            assert: _0x11ff87(1, '', {
              sentry: "rare"
            }, true),
            predicate: ({
              exports: _0x50f394
            }) => {
              var _0x7736c1, _0x30e9ea;
              return (null === (_0x30e9ea = null === (_0x7736c1 = null == _0x50f394 ? undefined : _0x50f394.com) || undefined === _0x7736c1 ? undefined : _0x7736c1.x) || undefined === _0x30e9ea ? undefined : _0x30e9ea.dms) && (null == _0x50f394 ? undefined : _0x50f394.kotlin);
            }
          });
          return _0x269ee5 = null == _0x5a0dce ? undefined : _0x5a0dce.exports, _0x269ee5;
        },
        ["get"](_0x261fc6) {
          const {
              assert$: _0x718aad
            } = _0x442618("ktwadsd"),
            _0x3da6e2 = _0x229767(_0x261fc6, _0x3c9fcd.kotlin.getExports());
          return _0x718aad(1, _0x3da6e2, '', {
            sentry: "rare"
          }, true), _0x3da6e2;
        },
        getCancellationSignal: () => _0x3c9fcd.kotlin.get("com->x->export->CancellationSignal"),
        getChatComposerEvent: () => _0x3c9fcd.kotlin.get("com->x->dms->components->composer->ChatComposerEvent"),
        getDmEvent: () => _0x3c9fcd.kotlin.get("com->x->dms->components->chat->DmEvent")
      },
      flow: {
        ["readFlowValue"](_0x2fac79) {
          var _0x231b9e;
          return _0x2fac79 ? (null === (_0x231b9e = null == _0x2fac79 ? undefined : _0x2fac79.state) || undefined === _0x231b9e ? undefined : _0x231b9e.state) ? _0x2fac79.state.state : "function" == typeof _0x2fac79.getValue ? _0x2fac79.getValue() : "function" == typeof _0x2fac79.b1 ? _0x2fac79.b1() : "value" in _0x2fac79 ? _0x2fac79.value : "_value" in _0x2fac79 ? _0x2fac79._value : null : null;
        },
        ["toJsArray"](_0x5b0ca4) {
          if (!_0x5b0ca4) return [];
          if (globalThis.Array.isArray(_0x5b0ca4)) return _0x5b0ca4;
          const _0x2e5da = ["asJsReadonlyArrayView", "asJsReadonlyArray", "toArray", "values"];
          for (const _0x47ba72 of _0x2e5da) {
            const _0x2606e5 = null == _0x5b0ca4 ? undefined : _0x5b0ca4[_0x47ba72];
            if ("function" == typeof _0x2606e5) try {
              const _0x26eda4 = _0x2606e5.call(_0x5b0ca4);
              return _0x26eda4 ? globalThis.Array.from(_0x26eda4) : [];
            } catch (_0x2f174d) {
              continue;
            }
          }
          try {
            if (Symbol.iterator in globalThis.Object(_0x5b0ca4)) return globalThis.Array.from(_0x5b0ca4);
          } catch (_0x379e21) {}
          return [];
        }
      },
      waitFor: ({
        shouldResolve: _0x2b5ef7,
        timeoutMs: _0x5d3147,
        pollMs: _0x500a7d,
        assert: _0x210cf7
      }) => (_0x5d3147 = null != _0x5d3147 ? _0x5d3147 : 20000, _0x500a7d = null != _0x500a7d ? _0x500a7d : 100, new globalThis.Promise((_0x4740d6, _0x43836a) => {
        const _0x149ba9 = performance.now(),
          _0x23ca16 = () => {
            try {
              if (_0x2b5ef7()) return void _0x4740d6();
              if (performance.now() - _0x149ba9 > _0x5d3147) return void _0x43836a(_0x210cf7 ? _0x210cf7.createError() : new Error("Timeout while waiting for condition"));
            } catch (_0xcf43e6) {
              return void _0x43836a(_0xcf43e6);
            }
            globalThis.setTimeout(_0x23ca16, _0x500a7d);
          };
        _0x23ca16();
      }))
    };
    let _0x494f1c = null;
    const _0x415433 = {
        getInboxConversations: async (_0x5c6c56 = {}) => {
          const {
            assert$: _0x12d022
          } = _0x442618("aiusndh7k");
          async function _0x1272f5() {
            var _0x5b84e2;
            return null !== (_0x5b84e2 = (await _0x415433.conversationListSession.waitForConversationStateCondition()).previews) && undefined !== _0x5b84e2 ? _0x5b84e2 : [];
          }
          for (; _0x5c6c56.loadAll && _0x415433.conversationListSession.getConversationListState().hasMore;) {
            const _0x5c6ef4 = await _0x1272f5();
            globalThis.console.log("Loading more conversations", _0x5c6ef4.length), await _0x415433.loadMoreInboxConversations(), await _0x231ec8(1000);
          }
          return [...(await _0x1272f5())].reverse().filter(_0x3527f8 => !_0x3527f8.isGroup).map(_0x400409 => _0x415433._serializeConversation(_0x400409));
        },
        loadMoreInboxConversations: async () => {
          const _0x4320c7 = _0x415433.conversationListSession.ensureConversationListSession(),
            {
              component: _0x32acc9
            } = _0x4320c7,
            _0x78b290 = _0x415433.conversationListSession.getConversationListState(),
            _0x3bbc58 = _0x78b290.previews.length;
          if (!_0x78b290.hasMore) return globalThis.console.log("No more conversations to load."), _0x78b290.previews;
          const _0x50aa41 = _0x3c9fcd.kotlin.get("com->x->dms->components->convlist->ConversationListEvent->ScrolledToBottomOfConversations");
          _0x32acc9.onEvent(_0x50aa41);
          const _0x3b5898 = await _0x415433.conversationListSession.waitForConversationStateCondition({
              shouldResolve: ({
                previews: _0x3ae403,
                hasMore: _0x4f68ae
              }) => _0x3ae403.length > _0x3bbc58 || !_0x4f68ae
            }),
            _0x513d1d = _0x3b5898.previews.length;
          return globalThis.console.log("Loaded " + (_0x513d1d - _0x3bbc58) + " new conversations (total: " + _0x513d1d + ")."), _0x3b5898.previews;
        },
        getConversation: async _0x5ccb81 => {
          const {
            assert$: _0x709a45
          } = _0x442618("asldklls");
          _0x709a45(1, !!_0x5ccb81, '', {
            sentry: false
          }, true), _0x709a45(2, !!_0x5ccb81.conversationId, '', {
            sentry: false
          }, true), _0x709a45(3, "string" == typeof _0x5ccb81.conversationId, '', {
            sentry: false
          }, true);
          const _0x331119 = (await _0x415433.getInboxConversations()).find(_0x9e0c17 => _0x9e0c17.conversation_id === _0x5ccb81.conversationId);
          return _0x709a45(4, _0x331119, '', {
            sentry: "never"
          }, true), _0x331119;
        },
        _serializeConversation: _0x14536b => {
          var _0x1f4743, _0xb7e9dd, _0x9dd8ed, _0x5b7ce9, _0x331889, _0x57d92a, _0x45a524, _0xf84c68, _0x1f4d3e, _0x4762a0, _0x1039b7, _0x2b5ef3, _0x380e6f;
          (_0x14536b = _0x8190b7(_0x14536b)).conversation_id = null === (_0xb7e9dd = null === (_0x1f4743 = _0x14536b.conversationId) || undefined === _0x1f4743 ? undefined : _0x1f4743.id) || undefined === _0xb7e9dd ? undefined : _0xb7e9dd.replace(":", "-"), _0x14536b.sort_timestamp = null, (null === (_0x5b7ce9 = null === (_0x9dd8ed = _0x14536b.preview) || undefined === _0x9dd8ed ? undefined : _0x9dd8ed.timestamp) || undefined === _0x5b7ce9 ? undefined : _0x5b7ce9.epochSeconds) ? _0x14536b.sort_timestamp = _0x242748(_0x14536b.preview.timestamp.epochSeconds, _0x14536b.preview.timestamp.nanosecondsOfSecond) : (null === (_0x331889 = _0x14536b.preview) || undefined === _0x331889 ? undefined : _0x331889.timestamp) && (_0x14536b.sort_timestamp = new globalThis.Date(_0x14536b.preview.timestamp).getTime() / 1000), _0x14536b.dmPermissions = null === (_0x45a524 = null === (_0x57d92a = _0x14536b.metadata) || undefined === _0x57d92a ? undefined : _0x57d92a.metadata) || undefined === _0x45a524 ? undefined : _0x45a524.dmPermissions, _0x14536b.readOnlyReason = null === (_0x1f4d3e = null === (_0xf84c68 = _0x14536b.metadata) || undefined === _0xf84c68 ? undefined : _0xf84c68.readOnlyReason) || undefined === _0x1f4d3e ? undefined : _0x1f4d3e.name;
          const _0x46f596 = null === (_0x2b5ef3 = null === (_0x1039b7 = null === (_0x4762a0 = null == _0x14536b ? undefined : _0x14536b.metadata) || undefined === _0x4762a0 ? undefined : _0x4762a0.metadata) || undefined === _0x1039b7 ? undefined : _0x1039b7.otherUsers) || undefined === _0x2b5ef3 ? undefined : _0x2b5ef3[0];
          return _0x46f596 && (_0x46f596.userId = null === (_0x380e6f = null == _0x46f596 ? undefined : _0x46f596.id) || undefined === _0x380e6f ? undefined : _0x380e6f.userId, _0x14536b.otherUser = _0x46f596), _0x14536b;
        },
        react: {
          ["findConversationListComponent"]() {
            const {
                message$: _0x5e44f5,
                assert$: _0x1b443e
              } = _0x442618("cvls"),
              _0x7a2e44 = ["previews", "conversations"],
              _0x363f6f = _0x5394d9({
                key: "x:conversation-list-component",
                filter: _0x4763b6 => (_0x1d194b => {
                  const _0x132412 = null == _0x1d194b ? undefined : _0x1d194b.component;
                  if (!_0x132412 || "function" != typeof _0x132412.onEvent) return false;
                  try {
                    const _0x2d3e97 = _0x3c9fcd.flow.readFlowValue(_0x132412);
                    return !!_0x2d3e97 && _0x7a2e44.some(_0x5ad354 => _0x5ad354 in _0x2d3e97);
                  } catch (_0x312a93) {
                    return false;
                  }
                })(_0x4763b6),
                mustHaveKeys: ["component"],
                mustHaveNestedKeys: _0x7a2e44
              });
            if (!_0x363f6f) return null;
            const _0x47bd02 = _0x363f6f.component;
            return _0x1b443e(2, _0x47bd02, '', {
              sentry: "rare"
            }, true), _0x47bd02;
          }
        },
        conversationListSession: {
          ["getConversationListState"]() {
            var _0x41f506, _0x3e94eb, _0x493b71;
            const {
                assert$: _0x479d2a
              } = _0x442618("ykasdjf"),
              {
                component: _0x2c9ee6
              } = _0x415433.conversationListSession.ensureConversationListSession();
            _0x479d2a(1, _0x2c9ee6, '', {
              sentry: "rare"
            }, true);
            const _0x287472 = _0x3c9fcd.flow.readFlowValue(_0x2c9ee6);
            _0x479d2a(2, _0x287472, '', {
              sentry: "rare"
            }, true);
            const _0x153613 = _0x3c9fcd.flow.toJsArray(null !== (_0x41f506 = _0x287472.previews) && undefined !== _0x41f506 ? _0x41f506 : _0x287472.conversations);
            _0x479d2a(3, _0x153613, '', {
              sentry: "rare"
            }, true);
            const _0x327ef6 = Boolean(null === (_0x3e94eb = null == _0x287472 ? undefined : _0x287472.isInitializing) || undefined === _0x3e94eb || _0x3e94eb),
              _0x56fd50 = Boolean(null === (_0x493b71 = null == _0x287472 ? undefined : _0x287472.isLoadingConversations) || undefined === _0x493b71 || _0x493b71);
            return {
              state: _0x287472,
              previews: _0x153613,
              isInitializing: _0x327ef6,
              hasMore: Boolean(null == _0x287472 ? undefined : _0x287472.hasMoreItemsInfo),
              hasLoaded: !_0x327ef6 && !_0x56fd50 || _0x153613.length > 0
            };
          },
          ["ensureConversationListSession"]({
            allowComponentCreation: _0x52bec2 = true
          } = {}) {
            const {
              assert$: _0x411da0
            } = _0x442618("clsn");
            if (_0x494f1c) return _0x494f1c;
            const _0x4b316e = _0x415433.react.findConversationListComponent();
            if (_0x411da0(1, _0x4b316e || _0x52bec2, '', {
              sentry: "rare"
            }, true), _0x4b316e) return _0x494f1c = {
              component: _0x4b316e,
              isOriginal: true
            }, _0x494f1c;
            globalThis.console.warn("CLC not found, creating new one");
            const _0x13cbde = _0x3c9fcd.getDmGraph(),
              _0x17e2c5 = new (_0x3c9fcd.kotlin.getCancellationSignal())(),
              _0x30f743 = _0x3c9fcd.kotlin.get("com->x->dms->components->convlist->ConversationListCallbacks"),
              _0x4b67cb = () => {},
              _0xbb043f = new _0x30f743(...globalThis.Array.from({
                length: _0x30f743.length
              }, () => _0x4b67cb)),
              _0x92c0fa = _0x13cbde.conversationListComponent(_0xbb043f, _0x17e2c5);
            return _0x494f1c = {
              component: _0x92c0fa,
              cancellation: _0x17e2c5,
              isOriginal: false
            }, _0x494f1c;
          },
          waitForConversationStateCondition: async (_0xddcbbd = {}) => {
            const {
              message$: _0x193ea7
            } = _0x442618("ifyadndj");
            return await _0x3c9fcd.waitFor({
              shouldResolve: () => {
                const _0x163a25 = _0x415433.conversationListSession.getConversationListState(),
                  {
                    hasLoaded: _0x58bbdb
                  } = _0x163a25,
                  _0x147a60 = !_0xddcbbd.shouldResolve || _0xddcbbd.shouldResolve(_0x163a25);
                return _0x58bbdb && _0x147a60;
              },
              assert: _0x193ea7(1, '', {
                sentry: "never"
              }, true),
              timeoutMs: _0xddcbbd.timeoutMs,
              pollMs: _0xddcbbd.pollMs
            }), _0x415433.conversationListSession.getConversationListState();
          },
          ["releaseConversationListSession"]() {
            var _0x20db45, _0x249347, _0xde4129, _0x51d5f4;
            _0x494f1c && (_0x494f1c.isOriginal || (null === (_0x249347 = null === (_0x20db45 = _0x494f1c.cancellation) || undefined === _0x20db45 ? undefined : _0x20db45.cancel) || undefined === _0x249347 || _0x249347.call(_0x20db45), null === (_0x51d5f4 = (_0xde4129 = _0x494f1c.component).dispose) || undefined === _0x51d5f4 || _0x51d5f4.call(_0xde4129)), _0x494f1c = null);
          }
        }
      },
      _0x19a869 = {
        getUsers: async () => {
          const {
              assert$: _0x158dd3
            } = _0x442618("giusr"),
            _0x589339 = await _0x415433.getInboxConversations();
          return _0x158dd3(1, globalThis.Array.isArray(_0x589339), '', {
            sentry: false
          }, true), _0x19a869.collectUsersFromPreviews(_0x589339).reduce((_0x3dc473, _0x237ac8) => (_0x237ac8 && _0x237ac8.userId && (_0x3dc473[_0x237ac8.userId] = _0x237ac8), _0x3dc473), {});
        },
        collectUsersFromPreviews: _0xa5af59 => {
          var _0x5c58e4, _0x2a4ded;
          const _0x2ca7f1 = new Map();
          for (const _0x3113ef of _0xa5af59) {
            const _0x115b87 = null === (_0x2a4ded = null === (_0x5c58e4 = null == _0x3113ef ? undefined : _0x3113ef.metadata) || undefined === _0x5c58e4 ? undefined : _0x5c58e4.metadata) || undefined === _0x2a4ded ? undefined : _0x2a4ded.usersByIdAllTime;
            if (_0x115b87) {
              for (const [_0x17cdc6, _0x5d1421] of globalThis.Object.entries(_0x115b87)) _0x17cdc6 && _0x5d1421 && (_0x5d1421.userId = _0x17cdc6, _0x2ca7f1.set(_0x17cdc6, _0x5d1421));
            }
          }
          return globalThis.Array.from(_0x2ca7f1.values());
        }
      },
      _0x4257ac = {
        getCurrentUserId: () => {
          const {
            assert$: _0x2e435d
          } = _0x442618("tmifqd");
          return _0x2e435d(1, _0x378076.store.access("session->user_id"), '', {
            sentry: "veryRare"
          }, true);
        },
        getCurrentUser: () => {
          const {
              assert$: _0x2ad2e0
            } = _0x442618("zhnl"),
            _0x4e0b15 = _0x4257ac.getCurrentUserId();
          return _0x2ad2e0(1, _0x4257ac.getUserById({
            userId: _0x4e0b15
          }), '', {
            sentry: false
          }, true);
        },
        getUserById: _0x4c01be => {
          const {
            assert$: _0x406069
          } = _0x442618("vraxhou");
          return _0x406069(1, !!_0x4c01be, '', {
            sentry: false
          }, true), _0x406069(2, !!_0x4c01be.userId, '', {
            sentry: false
          }, true), _0x406069(3, "string" == typeof _0x4c01be.userId, '', {
            sentry: false
          }, true), _0x378076.store.access("entities->users->entities->" + _0x4c01be.userId);
        },
        getUserByName: async _0x286c42 => {
          const {
            assert$: _0x3b9eca
          } = _0x442618("eaq");
          _0x3b9eca(1, !!_0x286c42, '', {
            sentry: false
          }, true), _0x3b9eca(2, !!_0x286c42.username, '', {
            sentry: false
          }, true), _0x3b9eca(3, "string" == typeof _0x286c42.username, '', {
            extra: {
              username: _0x286c42.username
            },
            sentry: false
          }, true);
          const _0x21aa94 = _0x378076.store.access("entities->users->entities");
          return globalThis.Object.values(_0x21aa94).find(_0x5d2d75 => _0x5d2d75.screen_name === _0x286c42.username);
        },
        fetchUserById: async _0x2bd4b2 => {
          const {
            assert$: _0x1bf9a2
          } = _0x442618("yvahsz");
          _0x1bf9a2(1, !!_0x2bd4b2, '', {
            sentry: false
          }, true), _0x1bf9a2(2, !!_0x2bd4b2.userId, '', {
            sentry: false
          }, true), _0x1bf9a2(3, "string" == typeof _0x2bd4b2.userId, '', {
            sentry: false
          }, true);
          const _0x486ff3 = _0x4257ac.getUserById({
            userId: _0x2bd4b2.userId
          });
          return _0x486ff3 || (await _0x378076.dispatchers.entities.call("users->fetchOneIfNeeded", _0x2bd4b2.userId), _0x4257ac.getUserById({
            userId: _0x2bd4b2.userId
          }));
        },
        fetchUserByName: async _0x369854 => {
          const {
            assert$: _0x4f5848
          } = _0x442618("tqivymv");
          return _0x4f5848(1, !!_0x369854, '', {
            sentry: false
          }, true), _0x4f5848(2, !!_0x369854.username, '', {
            sentry: false
          }, true), _0x4f5848(3, "string" == typeof _0x369854.username, '', {
            extra: {
              username: _0x369854.username
            },
            sentry: false
          }, true), await _0x378076.dispatchers.entities.call("users->fetchOneByScreenNameIfNeeded", _0x369854.username), _0x4257ac.getUserByName({
            username: _0x369854.username
          });
        },
        getUsers: async () => {
          var _0x2bc827;
          return _0x378076.isV1() ? null !== (_0x2bc827 = _0x378076.store.access("entities->users->entities")) && undefined !== _0x2bc827 ? _0x2bc827 : {} : await _0x19a869.getUsers();
        },
        getPermissions: async _0x4cc093 => {
          var _0x4e91d2, _0x235404;
          const {
            assert$: _0x406cc1
          } = _0x442618("cpoaovav");
          return _0x406cc1(1, !!_0x4cc093, '', {
            sentry: false
          }, true), _0x406cc1(2, !!_0x4cc093.userId, '', {
            sentry: false
          }, true), _0x406cc1(3, "string" == typeof _0x4cc093.userId, '', {
            extra: {
              userId: _0x4cc093.userId
            },
            sentry: false
          }, true), null === (_0x235404 = null === (_0x4e91d2 = (await _0x378076.endpoint.call("fetchPermissions", {
            recipient_ids: [_0x4cc093.userId]
          })).permissions) || undefined === _0x4e91d2 ? undefined : _0x4e91d2.id_keys) || undefined === _0x235404 ? undefined : _0x235404[_0x4cc093.userId];
        },
        hasPremium: async () => {
          const _0x39b3ac = ["premium_standard", "premium_plus", "premium_basic"];
          for (const _0x4a6b49 of _0x39b3ac) {
            const _0x554d71 = await _0x378076.store.access("userClaim->config->subscriptions->" + _0x4a6b49);
            if ("true" === (null == _0x554d71 ? undefined : _0x554d71.value)) return true;
          }
          return false;
        }
      };
    let _0x1d117b = null,
      _0x53daaf = null;
    const _0x378076 = {
        ..._0x2ff5c3,
        state: {
          ["get"]() {
            const {
              message$: _0x4e9914
            } = _0x442618("gouop");
            if (_0x1d117b) return _0x1d117b;
            const _0x4e2ef1 = _0x378076.findModule({
              key: "$x-state",
              assert: _0x4e9914(1, '', {
                sentry: "rare"
              }, true),
              assertExport: _0x4e9914(2, '', {
                sentry: "rare"
              }, true),
              includes: ["this.withEndpoint", "get api", "get relayEnvironment"],
              exportsMeta: {
                matchesType: "function"
              }
            });
            return _0x1d117b = _0x4e2ef1.exportsMatched.value({}), _0x1d117b;
          },
          ["api"]() {
            const {
              assert$: _0x342dc0
            } = _0x442618("amro");
            if (_0x53daaf) return _0x53daaf;
            const _0x319871 = _0x378076.state.createAppContextFn(),
              _0x3012e8 = _0x378076.state.getInitialState(),
              _0x4b649d = _0x4257ac.getCurrentUserId();
            _0x342dc0(1, _0x319871, '', {
              sentry: "rare"
            }, true), _0x342dc0(2, _0x3012e8, '', {
              sentry: "rare"
            }, true), _0x342dc0(3, _0x4b649d, '', {
              sentry: "rare"
            }, true);
            const {
              api: _0x35b7b7
            } = _0x319871({
              initialState: _0x3012e8,
              loggedInUserId: _0x4b649d
            });
            return _0x53daaf = _0x35b7b7, _0x35b7b7;
          },
          ["createAppContextFn"]() {
            const {
              message$: _0x4d17b5
            } = _0x442618("9c2f1d");
            return _0x378076.findModule({
              key: "$$x-create-app-context",
              assert: _0x4d17b5(1, '', {
                sentry: "rare"
              }, true),
              assertExport: _0x4d17b5(2, '', {
                sentry: "rare"
              }, true),
              includes: ["getApi:", "getStore:", "loggedInUserId:"],
              exportsMeta: {
                matchesType: "function",
                includes: ["api:"]
              }
            }).exportsMatched.value;
          },
          ["getInitialState"]() {
            const _0xd45ff = globalThis;
            if (_0xd45ff.__INITIAL_STATE_CACHE__) return _0xd45ff.__INITIAL_STATE_CACHE__;
            const _0x923ac5 = [...globalThis.document.scripts].find(_0x551a71 => _0x551a71.textContent.includes("window.__INITIAL_STATE__"));
            if (!_0x923ac5) throw new Error("Initial state script tag not found");
            const _0x1f7f1f = _0x923ac5.textContent.match(/window\.__INITIAL_STATE__\s*=\s*(\{[\s\S]*?\})\s*;/);
            if (!_0x1f7f1f) throw new Error("Unable to parse __INITIAL_STATE__");
            const _0x2f9ca1 = JSON.parse(_0x1f7f1f[1]);
            return _0xd45ff.__INITIAL_STATE_CACHE__ = _0x2f9ca1, _0x2f9ca1;
          }
        },
        store: {
          get: () => {
            const {
              assert$: _0x44af27
            } = _0x442618("aseizyek");
            return _0x44af27(1, _0x378076.store.module().store.getState(), '', {
              sentry: "rare"
            }, true);
          },
          access: (_0x393a30 = '') => _0x229767(_0x393a30, _0x378076.store.get()),
          module: () => {
            var _0x18f62d, _0x1972c8;
            const {
              message$: _0x54306a
            } = _0x442618("oimnvu");
            return null === (_0x1972c8 = null === (_0x18f62d = _0x378076.findModule({
              key: "$store",
              accumulate: true,
              assert: _0x54306a(1, '', {
                sentry: "rare"
              }, true),
              assertExport: _0x54306a(2, '', {
                sentry: "rare"
              }, true),
              exportsMeta: {
                matchesType: "object",
                matchesProps: ["store", "usersInApp"]
              }
            })[0]) || undefined === _0x18f62d ? undefined : _0x18f62d.exportsMatched) || undefined === _0x1972c8 ? undefined : _0x1972c8.value;
          },
          search: _0x21fadd => _0x4d9a60(_0x378076.store.get(), _0x21fadd, {
            cacheKey: null
          }),
          dispatch: _0x38ae4f => _0x378076.store.module().store.dispatch(_0x38ae4f),
          _getActiveStore: () => {
            const _0xef79ba = globalThis;
            if (_0xef79ba.__REACT_DEVTOOLS_GLOBAL_HOOK__ && _0xef79ba.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers) {
              for (const [_0x24555d, _0x5d78b3] of _0xef79ba.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers) try {
                const _0x5bf919 = _0x5d78b3.findFiberByHostInstance(globalThis.document.querySelector("[data-testid=\"primaryColumn\"]"));
                if (_0x5bf919) {
                  let _0x5cb297 = _0x5bf919;
                  for (; _0x5cb297;) {
                    if (_0x5cb297.stateNode && _0x5cb297.stateNode.store) return _0x5cb297.stateNode.store;
                    if (_0x5cb297.memoizedProps && _0x5cb297.memoizedProps.store) return _0x5cb297.memoizedProps.store;
                    _0x5cb297 = _0x5cb297["return"];
                  }
                }
              } catch (_0x33829b) {}
            }
          }
        },
        reducers: {
          ["get"](_0xdca10) {
            const {
              message$: _0x58b8c8
            } = _0x442618("fihlm");
            return _0x229767(_0xdca10, _0x2ff5c3.findModule({
              key: "$reducers-" + _0xdca10,
              assert: _0x58b8c8(1, '', {
                sentry: "rare"
              }, true),
              assertExport: _0x58b8c8(2, '', {
                sentry: "rare"
              }, true),
              includes: ["getReducers(){"],
              exportsMeta: {
                predicate: _0x1baac7 => _0x1baac7.getReducers
              }
            }).exportsMatched.value.getReducers());
          }
        },
        dispatchers: {
          entities: {
            get: _0x809f39 => _0x229767(_0x809f39, _0x378076.dispatchers.entities.module().exportsMatched.value.entities),
            ["module"]() {
              const {
                message$: _0x34a7a9
              } = _0x442618("lolbnxnk");
              return _0x378076.findModule({
                key: "$dispatchers-entities",
                assert: _0x34a7a9(1, '', {
                  sentry: "rare"
                }, true),
                assertExport: _0x34a7a9(2, '', {
                  sentry: "rare"
                }, true),
                includes: ["getRegisteredModules", "this.entities"],
                exportsMeta: {
                  predicate: _0x31bce0 => "entities" in _0x31bce0
                }
              });
            },
            ["call"](_0x4eb8d1, ..._0x2b9f5b) {
              const {
                  assert$: _0x2f20fb
                } = _0x442618("qxhgfp"),
                _0x33c352 = _0x2f20fb(1, _0x378076.dispatchers.entities.get(_0x4eb8d1), '', {
                  sentry: "rare"
                }, true);
              return _0x378076.store.dispatch(_0x33c352(..._0x2b9f5b));
            }
          },
          conversation: {
            get: _0x19dd78 => _0x229767(_0x19dd78, _0x378076.dispatchers.conversation.module().exports),
            ["module"]() {
              const {
                message$: _0x235c96
              } = _0x442618("ssztmhg");
              return _0x378076.findModule({
                key: "$dispatchers-conversation",
                assert: _0x235c96(1, '', {
                  sentry: "rare"
                }, true),
                exportsMeta: {
                  names: ["acceptConversation"]
                }
              });
            },
            ["call"](_0x3c89d8, ..._0x53e86c) {
              const {
                  assert$: _0x1027e0
                } = _0x442618("gpshttj"),
                _0x5ebcc4 = _0x1027e0(1, _0x378076.dispatchers.conversation.get(_0x3c89d8), '', {
                  sentry: "rare"
                }, true);
              return _0x378076.store.dispatch(_0x5ebcc4(..._0x53e86c));
            }
          },
          ["get"](_0x5c7f28) {
            var _0x4ee2ac, _0xadbd99;
            return null === (_0xadbd99 = null === (_0x4ee2ac = _0x378076.dispatchers.find(_0x5c7f28)) || undefined === _0x4ee2ac ? undefined : _0x4ee2ac.exportsMatched) || undefined === _0xadbd99 ? undefined : _0xadbd99.value;
          },
          ["find"](_0x925a7d) {
            const {
                message$: _0x3cadac
              } = _0x442618("dooo"),
              _0x5ee997 = new RegExp("\\.withEndpoint\\([\\w$].[\\w$]+?\\)\\." + _0x925a7d),
              _0x270bd7 = _0x378076.findModule({
                key: "$dispatchers-" + _0x925a7d,
                accumulate: true,
                assert: _0x3cadac(1, '', {
                  sentry: "rare"
                }, true),
                assertExport: _0x3cadac(2, '', {
                  sentry: "rare"
                }, true),
                includes: [_0x5ee997],
                exportsMeta: {
                  includes: [_0x5ee997]
                }
              });
            return _0x270bd7[_0x270bd7.length - 1];
          },
          ["call"](_0x35b399, ..._0x4bbd72) {
            const _0x4cdc77 = _0x378076.dispatchers.get(_0x35b399);
            return _0x378076.store.dispatch(_0x4cdc77(..._0x4bbd72));
          }
        },
        endpoint: {
          ["get"](_0x21acf5) {
            const _0x23050a = _0x378076.state.api(),
              _0x229243 = _0x378076.endpoint.find(),
              _0x8162c1 = {};
            for (const _0x38895b of _0x229243) try {
              const _0xb24239 = _0x23050a.withEndpoint(_0x38895b.exportsMatched.value);
              globalThis.Object.assign(_0x8162c1, _0xb24239);
            } catch (_0x22f4d6) {}
            return _0x21acf5 ? _0x8162c1[_0x21acf5] : _0x8162c1;
          },
          ["find"]() {
            const {
                message$: _0x3f2677
              } = _0x442618("xsonn"),
              _0x37dcad = [/apiClient:/, /featureSwitches:/].filter(Boolean);
            return _0x378076.findModule({
              key: "$$x-endpoint-find",
              assert: _0x3f2677(1, '', {
                sentry: "rare"
              }, true),
              assertExport: _0x3f2677(3, '', {
                sentry: "rare"
              }, true),
              accumulate: true,
              includes: _0x37dcad,
              exportsMeta: {
                matchesType: "function",
                includes: _0x37dcad
              }
            });
          },
          bind: _0x40a4be => _0x378076.state.api().withEndpoint(_0x40a4be),
          ["call"](_0xc0727a, ..._0x27960e) {
            const {
                assert$: _0x58b211
              } = _0x442618("xepca"),
              _0xa8b3b6 = _0x378076.endpoint.get(_0xc0727a);
            return _0x58b211(1, "function" == typeof _0xa8b3b6, '', {
              sentry: "rare"
            }, true), _0xa8b3b6(..._0x27960e);
          }
        },
        requestId: () => {
          const {
            message$: _0x454857
          } = _0x442618("weyhejsb");
          return _0x378076.findModule({
            key: "uuid",
            accumulate: true,
            assert: _0x454857(1, '', {
              sentry: "rare"
            }, true),
            exportsMeta: {
              names: ["v1"],
              includes: [".rng", ".random"],
              count: [1, 5],
              matchesType: "function"
            }
          })[0].exportsMatched.value();
        },
        isV1: () => globalThis.location.href.includes("/messages")
      },
      _0x4e4340 = new Map(),
      _0x2ecc1a = {
        ["startSession"]({
          conversationId: _0x344505
        }) {
          if (_0x378076.isV1()) return;
          const {
            assert$: _0x425df6
          } = _0x442618("stsv2");
          if (_0x425df6(1, null != _0x344505, '', {
            sentry: "veryRare"
          }, true), _0x425df6(2, _0x344505, '', {
            sentry: "veryRare"
          }, true), _0x425df6(3, _0x4848bd(_0x344505, "string"), '', {
            sentry: "veryRare"
          }, true), _0x4e4340.size >= 25) {
            const _0x46a8db = _0x4e4340.size - 25 + 1;
            for (const _0x307a9a of globalThis.Array.from(_0x4e4340.values()).slice(0, _0x46a8db)) _0x2ecc1a.releaseDmSession({
              conversationId: _0x307a9a.conversationId
            });
          }
          _0x2ecc1a.ensureDmSession({
            conversationId: _0x344505
          });
        },
        ["stopSession"]({
          conversationId: _0x4a96a6
        }) {
          if (_0x378076.isV1()) return;
          const {
            assert$: _0x92e652
          } = _0x442618("relsesv2");
          return _0x92e652(1, null != _0x4a96a6, '', {
            sentry: "veryRare"
          }, true), _0x92e652(2, _0x4a96a6, '', {
            sentry: "veryRare"
          }, true), _0x92e652(3, _0x4848bd(_0x4a96a6, "string"), '', {
            sentry: "veryRare"
          }, true), _0x2ecc1a.releaseDmSession({
            conversationId: _0x4a96a6
          });
        },
        ["ensureDmSession"]({
          conversationId: _0x1f561f
        }) {
          const {
              assert$: _0xed1e27
            } = _0x442618("dmses"),
            _0x1af118 = _0x4e4340.get(_0x1f561f);
          if (_0x1af118) return _0x1af118;
          const _0x5a08a9 = _0x3c9fcd.getDmGraph(),
            _0x3b2a90 = _0x3c9fcd.kotlin.get("com->x->dms->components->chat->DmCallbacks"),
            _0x27ee05 = _0x3c9fcd.kotlin.get("com->x->models->dm->XConversationId->Companion"),
            _0x5e4017 = _0x3c9fcd.kotlin.getCancellationSignal(),
            _0x249871 = _0xed1e27(1, _0x27ee05.fromStringRequired(_0x1f561f), '', {
              sentry: "rare"
            }, true),
            _0xd5a236 = new _0x3b2a90(...globalThis.Array.from({
              length: 19
            }, () => () => {})),
            _0x57ae56 = new _0x5e4017(),
            _0x4cee9f = {
              component: _0x5a08a9.dmComponent(_0x249871, _0xd5a236, _0x57ae56, null),
              cancellation: _0x57ae56,
              conversationId: _0x1f561f
            };
          return _0x4e4340.set(_0x1f561f, _0x4cee9f), _0x4cee9f;
        },
        ["releaseDmSession"]({
          conversationId: _0x33d491
        }) {
          var _0x14709c, _0x3ddd8f, _0x2c9021, _0x86eb2a;
          const _0x1566ff = _0x4e4340.get(_0x33d491);
          return !!_0x1566ff && (_0x4e4340["delete"](_0x33d491), null === (_0x3ddd8f = (_0x14709c = _0x1566ff.cancellation).cancel) || undefined === _0x3ddd8f || _0x3ddd8f.call(_0x14709c), null === (_0x86eb2a = (_0x2c9021 = _0x1566ff.component).dispose) || undefined === _0x86eb2a || _0x86eb2a.call(_0x2c9021), true);
        }
      },
      _0x275606 = {
        processMessages: async _0x4bd3ad => {
          const {
            assert$: _0x2caa16
          } = _0x442618("jyzdgpz");
          _0x2caa16(1, !!_0x4bd3ad, '', {
            sentry: false
          }, true), _0x2caa16(2, !!_0x4bd3ad.conversationId, '', {
            sentry: false
          }, true), _0x2caa16(3, "string" == typeof _0x4bd3ad.conversationId, '', {
            sentry: false
          }, true);
          const _0x1e5a47 = (await _0x415433.getConversation({
              conversationId: _0x4bd3ad.conversationId
            })).otherUser.userId,
            _0x1f6e56 = await _0x275606.getMessages({
              conversationId: _0x4bd3ad.conversationId
            }),
            _0x3df6ca = ["sentmessage", "receivedmessage", "pendingmessage"],
            _0x8bf3bd = _0x1f6e56.filter(_0x281cb3 => _0x3df6ca.some(_0x4b5047 => _0x281cb3.contentType.toLowerCase().includes(_0x4b5047))),
            _0x149c7b = _0x4257ac.getCurrentUserId();
          return _0x8bf3bd.map(_0x4ea737 => _0x275606._processMessage({
            ir: {
              message: _0x4ea737,
              currentUserId: _0x149c7b,
              otherUserId: _0x1e5a47
            }
          }));
        },
        _processMessage: _0x148f2d => {
          var _0x5094eb, _0x3069bb, _0x32f13d, _0x212c3f, _0x49c969, _0x7981de, _0x2367d4, _0x12d77b, _0x2e3d70, _0x3274c4, _0x3b0c4a;
          const {
              message: _0x527c81,
              currentUserId: _0x1a848d,
              otherUserId: _0x164610
            } = _0x148f2d.ir,
            _0x1b4f0f = _0x527c81.id || (null === (_0x5094eb = _0x527c81.sequenceNumber) || undefined === _0x5094eb ? undefined : _0x5094eb.str),
            _0x40e8ce = _0x527c81.textContent;
          let _0x5c9286 = null;
          (null === (_0x3069bb = _0x527c81.created) || undefined === _0x3069bb ? undefined : _0x3069bb.epochSeconds) ? _0x5c9286 = _0x242748(null === (_0x32f13d = _0x527c81.created) || undefined === _0x32f13d ? undefined : _0x32f13d.epochSeconds, null === (_0x212c3f = _0x527c81.created) || undefined === _0x212c3f ? undefined : _0x212c3f.nanosecondsOfSecond) : _0x527c81.created && (_0x5c9286 = new globalThis.Date(_0x527c81.created).getTime() / 1000);
          const _0x597e = _0x527c81.senderInfo.userId.userId !== _0x1a848d,
            _0x1a675e = _0x527c81.attachment,
            _0x177dd0 = null === (_0x7981de = null === (_0x49c969 = null == _0x1a675e ? undefined : _0x1a675e.type) || undefined === _0x49c969 ? undefined : _0x49c969.name) || undefined === _0x7981de ? undefined : _0x7981de.toLowerCase(),
            _0x2f9d8d = (null === (_0x2367d4 = null == _0x1a675e ? undefined : _0x1a675e.previewUrl) || undefined === _0x2367d4 ? undefined : _0x2367d4.includes("dm_gif")) || "gif" === _0x177dd0,
            _0x2e87da = "image" === _0x177dd0,
            _0x2f44c3 = "video" === _0x177dd0,
            _0x571c3e = "audio" === _0x177dd0,
            _0x4fc6ad = "file" === _0x177dd0,
            _0x2ff9d6 = !!(null == _0x1a675e ? undefined : _0x1a675e.postState),
            _0x464848 = null === (_0x12d77b = null == _0x1a675e ? undefined : _0x1a675e.postState) || undefined === _0x12d77b ? undefined : _0x12d77b.post,
            _0x5e0192 = null == _0x464848 ? undefined : _0x464848.author,
            _0x4b0ea4 = null == _0x5e0192 ? undefined : _0x5e0192.id,
            _0x1c34d2 = null == _0x5e0192 ? undefined : _0x5e0192.screenName,
            _0x319377 = null === (_0x2e3d70 = null == _0x464848 ? undefined : _0x464848.text) || undefined === _0x2e3d70 ? undefined : _0x2e3d70.slice(0, 100),
            _0x340b15 = null !== (_0x3b0c4a = null === (_0x3274c4 = null == _0x464848 ? undefined : _0x464848.media) || undefined === _0x3274c4 ? undefined : _0x3274c4.map(_0xe58890 => "</" + _0xe58890.type + ">")) && undefined !== _0x3b0c4a ? _0x3b0c4a : [];
          let _0x14abcc = null;
          _0x319377 && (_0x14abcc = "<post> " + _0x319377 + "</post> " + _0x340b15.join(" "));
          const _0x404d3c = _0x4b0ea4 === _0x1a848d,
            _0x24bb11 = _0x4b0ea4 === _0x164610;
          return _0x5a8493(_0x40b678({
            id: _0x1b4f0f,
            msg: _0x40e8ce,
            isIncoming: _0x597e,
            timestamp: _0x5c9286,
            hasGif: _0x2f9d8d,
            hasPhoto: _0x2e87da,
            hasVideo: _0x2f44c3,
            hasAudio: _0x571c3e,
            hasFile: _0x4fc6ad,
            isReply: !!_0x527c81.replyPreview,
            hasTweet: _0x2ff9d6,
            tweetText: _0x14abcc,
            tweetCreator: _0x1c34d2,
            hasOurTweet: _0x404d3c,
            hasTheirTweet: _0x24bb11
          }), {
            deep: false
          });
        },
        async ["getMessages"]({
          conversationId: _0x23d7ca
        }) {
          var _0x5b08ff;
          const {
            assert$: _0x304a16
          } = _0x442618("getmsv2");
          _0x304a16(1, null != _0x23d7ca, '', {
            sentry: "veryRare"
          }, true), _0x304a16(2, _0x23d7ca, '', {
            sentry: "veryRare"
          }, true), _0x304a16(3, _0x4848bd(_0x23d7ca, "string"), '', {
            sentry: "veryRare"
          }, true);
          const _0x2feca1 = _0x2ecc1a.ensureDmSession({
            conversationId: _0x23d7ca
          }).component;
          let _0x44dd55 = await _0x275606.waitForChatItems({
            component: _0x2feca1
          });
          return _0x44dd55.hasMore && !(null === (_0x5b08ff = _0x44dd55.items) || undefined === _0x5b08ff ? undefined : _0x5b08ff.length) && (await _0x275606.paginateMessages({
            conversationId: _0x23d7ca
          }), _0x44dd55 = await _0x275606.waitForChatItems({
            component: _0x2feca1
          })), _0x44dd55.items.map(_0x156301 => _0x8190b7(_0x156301)).reverse();
        },
        async ["paginateMessages"]({
          conversationId: _0x1b0f46
        }) {
          const {
            assert$: _0xc8fa0
          } = _0x442618("ldoldv2");
          _0xc8fa0(1, null != _0x1b0f46, '', {
            sentry: "veryRare"
          }, true), _0xc8fa0(2, _0x1b0f46, '', {
            sentry: "veryRare"
          }, true), _0xc8fa0(3, _0x4848bd(_0x1b0f46, "string"), '', {
            sentry: "veryRare"
          }, true);
          const _0x138e70 = _0x2ecc1a.ensureDmSession({
              conversationId: _0x1b0f46
            }).component,
            _0x53669a = await _0x275606.waitForChatItems({
              component: _0x138e70
            }),
            _0x36c599 = _0x53669a.olderItemsInfo;
          if (_0x53669a && !_0x53669a.hasMore) return _0x53669a.items;
          const _0x360c33 = _0x3c9fcd.kotlin.getDmEvent();
          _0x138e70.onEvent(new _0x360c33.ScrolledToTop(_0x36c599));
          const _0x4c1a5b = _0x53669a.items.length + 1;
          return await _0x275606.waitForChatItems({
            component: _0x138e70,
            minItems: _0x4c1a5b,
            minDelta: _0x4c1a5b
          }), (await _0x275606.waitForChatItems({
            component: _0x138e70,
            timeoutMs: 1
          })).items;
        },
        ["getChatItemsData"]({
          component: _0x38450a
        }) {
          var _0x34b4aa, _0x4621bf, _0x55ff3a;
          const _0x52566a = _0x3c9fcd.flow.readFlowValue(_0x38450a),
            _0x3c58fb = null == _0x52566a ? undefined : _0x52566a.chatItems;
          return {
            state: _0x52566a,
            holder: _0x3c58fb,
            items: _0x3c9fcd.flow.toJsArray(null == _0x3c58fb ? undefined : _0x3c58fb.items),
            isLoading: null !== (_0x34b4aa = null == _0x3c58fb ? undefined : _0x3c58fb.isLoading) && undefined !== _0x34b4aa ? _0x34b4aa : null,
            didPullFail: null !== (_0x4621bf = null == _0x3c58fb ? undefined : _0x3c58fb.didPullFail) && undefined !== _0x4621bf ? _0x4621bf : null,
            hasMore: Boolean(null == _0x3c58fb ? undefined : _0x3c58fb.olderItemsInfo),
            olderItemsInfo: null !== (_0x55ff3a = null == _0x3c58fb ? undefined : _0x3c58fb.olderItemsInfo) && undefined !== _0x55ff3a ? _0x55ff3a : null
          };
        },
        async ["waitForChatItems"]({
          component: _0x157192,
          timeoutMs: _0x562b84,
          pollMs: _0x87fa4c,
          minItems: _0xa60447,
          minDelta: _0x300950
        }) {
          const {
            message$: _0x193eb5
          } = _0x442618("atryesjd");
          return await _0x3c9fcd.waitFor({
            shouldResolve: () => {
              const _0x22c2c8 = _0x275606.getChatItemsData({
                  component: _0x157192
                }),
                _0x4fe54b = _0x22c2c8.items && (false === _0x22c2c8.isLoading || _0x22c2c8.didPullFail || _0x22c2c8.items.length > 0),
                _0x3cf262 = undefined === _0xa60447 || _0x22c2c8.items.length >= _0xa60447,
                _0x22979e = undefined === _0x300950 || _0x22c2c8.items.length >= _0x300950;
              return _0x4fe54b && _0x3cf262 && _0x22979e;
            },
            assert: _0x193eb5(1, '', {
              sentry: "never"
            }, true),
            timeoutMs: _0x562b84,
            pollMs: _0x87fa4c
          }), _0x275606.getChatItemsData({
            component: _0x157192
          });
        },
        async ["sendMessage"]({
          conversationId: _0x127e89,
          message: _0x1992bd,
          blob: _0x25e416,
          blobExtension: _0x340f68
        }) {
          const {
            assert$: _0x395ce9
          } = _0x442618("sndmsgv2");
          _0x395ce9(1, null != _0x127e89, '', {
            sentry: "veryRare"
          }, true), _0x395ce9(2, _0x127e89, '', {
            sentry: "veryRare"
          }, true), _0x395ce9(3, _0x4848bd(_0x127e89, "string"), '', {
            sentry: "veryRare"
          }, true), _0x395ce9(4, null != _0x1992bd || null != _0x25e416, '', {
            sentry: "veryRare"
          }, true), _0x395ce9(5, null == _0x1992bd || _0x4848bd(_0x1992bd, "string"), '', {
            sentry: "veryRare"
          }, true), _0x395ce9(6, null == _0x25e416 || _0x4848bd(_0x25e416, "blob"), '', {
            sentry: "veryRare"
          }, true), _0x395ce9(7, !(_0x25e416 && _0x1992bd), '', {
            sentry: "veryRare"
          }, true), _0x395ce9(8, null == _0x340f68 || _0x4848bd(_0x340f68, "string"), '', {
            sentry: "veryRare"
          }, true), _0x395ce9(9, null == _0x340f68 || _0x340f68, '', {
            sentry: "veryRare"
          }, true);
          const _0x3acd82 = _0x2ecc1a.ensureDmSession({
              conversationId: _0x127e89
            }).component.composer,
            _0x3b4d92 = _0x3c9fcd.kotlin.getChatComposerEvent();
          _0x25e416 && (await _0x275606.attachMedia({
            composer: _0x3acd82,
            blob: _0x25e416,
            extension: _0x340f68
          })), _0x1992bd && _0x3acd82.onEvent(new _0x3b4d92.UserChangedText(_0x1992bd, _0x1992bd.length));
          const _0x58840a = await _0x275606.waitForSendReady({
            composer: _0x3acd82
          });
          return _0x3acd82.onEvent(new _0x3b4d92.RightButtonClicked(_0x58840a)), {
            conversationId: _0x127e89,
            text: _0x1992bd,
            hasAttachment: Boolean(_0x25e416),
            didSend: true
          };
        },
        async ["attachMedia"]({
          composer: _0x45dbdb,
          blob: _0x94cf59,
          extension: _0x1e2cbe
        }) {
          const {
            assert$: _0x2535d0
          } = _0x442618("attmv2");
          _0x2535d0(1, null != _0x94cf59, '', {
            sentry: "veryRare"
          }, true), _0x2535d0(2, _0x4848bd(_0x94cf59, "blob"), '', {
            sentry: "veryRare"
          }, true), _0x2535d0(3, null == _0x1e2cbe || _0x4848bd(_0x1e2cbe, "string"), '', {
            sentry: "veryRare"
          }, true), _0x2535d0(4, null == _0x1e2cbe || _0x1e2cbe, '', {
            sentry: "veryRare"
          }, true);
          const _0x193d22 = _0x3c9fcd.kotlin.getChatComposerEvent(),
            _0x55333d = _0x1e2cbe || "bin",
            _0x104917 = _0x94cf59.type || "application/octet-stream",
            _0xb42307 = (_0x491d77(10) + "-" + globalThis.Date.now() + "." + _0x55333d).replace(/[^\w.\-]/g, "_"),
            _0x1dbcb5 = new File([_0x94cf59], _0xb42307, {
              type: _0x104917
            });
          _0x45dbdb.onEvent(_0x193d22.OnFileAttachmentStarted);
          const _0x392704 = await _0x275606.createTempPath({
            file: _0x1dbcb5
          });
          return _0x45dbdb.onEvent(new _0x193d22.OnFileAttached(_0x392704)), _0x392704;
        },
        async ["createTempPath"]({
          file: _0x4f7e51
        }) {
          const {
              assert$: _0x3808bc,
              message$: _0x81a981
            } = _0x442618("crtdasdtp"),
            _0x54708a = _0x2ff5c3.findModule({
              key: "writeFile",
              assert: _0x81a981(1, '', {
                sentry: "rare"
              }, true),
              assertExport: _0x81a981(2, '', {
                sentry: "rare"
              }, true),
              exportsMeta: {
                includes: ["action:\"write"],
                matchesType: "function"
              }
            }).exportsMatched.value,
            _0x204877 = "temp-files",
            _0x3dee8c = (globalThis.Date.now() + "-" + _0x4f7e51.name).replace(/\s/g, "_"),
            _0x52cd77 = {
              filename: _0x3dee8c,
              folderLocation: {
                relativePath: _0x204877
              }
            };
          return await _0x54708a(_0x52cd77, _0x4f7e51), _0x204877 + "/" + _0x3dee8c;
        },
        async ["waitForSendReady"]({
          composer: _0x3adedf
        }) {
          const {
              message$: _0x31148e,
              throw$: _0x15ae12
            } = _0x442618("wtfvsr2"),
            _0x4588a2 = _0x3c9fcd.kotlin.get("com->x->dms->components->composer->RightButtonState");
          return await _0x3c9fcd.waitFor({
            shouldResolve: () => {
              const _0x6f2cd1 = _0x3c9fcd.flow.readFlowValue(_0x3adedf);
              return _0x6f2cd1.readOnlyReason && _0x15ae12(1, '', {
                sentry: "never"
              }, true), (null == _0x6f2cd1 ? undefined : _0x6f2cd1.rightButton) === _0x4588a2.SendActive;
            },
            assert: _0x31148e(2, '', {
              sentry: "never"
            }, true),
            timeoutMs: 10000
          }), _0x3c9fcd.flow.readFlowValue(_0x3adedf).rightButton;
        },
        async ["markConversationAsRead"]({
          conversationId: _0x1c803c
        }) {
          const {
            assert$: _0x340496
          } = _0x442618("mrkrdv2");
          _0x340496(1, null != _0x1c803c, '', {
            sentry: "veryRare"
          }, true), _0x340496(2, _0x1c803c, '', {
            sentry: "veryRare"
          }, true), _0x340496(3, _0x4848bd(_0x1c803c, "string"), '', {
            sentry: "veryRare"
          }, true);
          const _0x157540 = _0x2ecc1a.ensureDmSession({
              conversationId: _0x1c803c
            }).component,
            _0x9c766f = await _0x275606.waitForChatItems({
              component: _0x157540
            }),
            _0x407f32 = _0x3c9fcd.kotlin.get("com->x->dm->api->model->MessageItemReceived"),
            _0x31768e = _0x3c9fcd.kotlin.get("com->x->dm->api->model->MessageItemSent"),
            _0xc4921 = _0x3c9fcd.kotlin.get("com->x->dm->api->model->MessageItemPending"),
            _0x4f8cfc = _0x9c766f.items.filter(_0x4561c2 => _0x4561c2 instanceof _0x407f32 || _0x4561c2 instanceof _0x31768e || _0x4561c2 instanceof _0xc4921).map(_0x1ca447 => _0x1ca447.sequenceNumber).filter(Boolean);
          if (0 === _0x4f8cfc.length) return;
          const _0x5be341 = _0x3c9fcd.kotlin.get("kotlin->collections->KtList").fromJsArray(_0x4f8cfc),
            _0x225580 = _0x3c9fcd.kotlin.getDmEvent();
          return _0x157540.onEvent(new _0x225580.VisibleReadableItemsChanged(true, _0x5be341)), {
            conversationId: _0x1c803c,
            markedSequences: _0x4f8cfc.length
          };
        }
      },
      _0x56da33 = new RegExp(/(x|twitter).com\/(\w+)\/status\/(\d+)/),
      _0x853c26 = new RegExp(/(x|twitter).com\/i\/events\/(\d+)/),
      _0x5d6044 = async _0x3d1e97 => {
        const {
          assert$: _0x1011ed
        } = _0x442618("rhcfclmx");
        _0x1011ed(1, !!_0x3d1e97, '', {
          sentry: false
        }, true), _0x1011ed(2, !!_0x3d1e97.conversationId, '', {
          sentry: false
        }, true), _0x1011ed(3, "string" == typeof _0x3d1e97.conversationId, '', {
          sentry: false
        }, true);
        const {
            conversationId: _0x363bf6,
            text: _0x5371a3 = '',
            localMediaId: _0xd0c1f5
          } = _0x3d1e97,
          _0x4a4ae3 = _0x378076.requestId();
        try {
          const _0x67b508 = await _0x378076.dispatchers.call("sendMessage", {
            text: _0x5371a3,
            conversationId: _0x363bf6,
            senderId: _0x4257ac.getCurrentUserId(),
            requestId: _0x4a4ae3,
            localMediaId: _0xd0c1f5
          });
          return {
            requestId: _0x4a4ae3,
            sendResult: _0x67b508,
            didSend: (null == _0x67b508 ? undefined : _0x67b508.conversationId) === _0x363bf6
          };
        } catch (_0x159f1f) {
          return {
            requestId: _0x4a4ae3,
            didSend: false,
            error: _0x4359d1(_0x159f1f)
          };
        }
      },
      _0x22036e = {
        getEvent: _0x5ce3a1 => {
          var _0x1cae4c;
          const {
            assert$: _0x55c4f7
          } = _0x442618("oktw");
          return _0x55c4f7(1, !!_0x5ce3a1, '', {
            sentry: false
          }, true), _0x55c4f7(2, !!_0x5ce3a1.eventId, '', {
            sentry: false
          }, true), _0x55c4f7(3, "string" == typeof _0x5ce3a1.eventId, '', {
            sentry: false
          }, true), _0x55c4f7(4, null === (_0x1cae4c = _0x378076.store.access("directMessages->entries->entries->" + _0x5ce3a1.eventId)) || undefined === _0x1cae4c ? undefined : _0x1cae4c.data, '', {
            sentry: "rare"
          }, true);
        },
        getEvents: _0x396026 => {
          const {
            assert$: _0x39cc99
          } = _0x442618("hroxizb");
          _0x39cc99(1, !!_0x396026, '', {
            sentry: false
          }, true), _0x39cc99(2, !!_0x396026.conversationId, '', {
            sentry: false
          }, true), _0x39cc99(3, "string" == typeof _0x396026.conversationId, '', {
            sentry: false
          }, true);
          const _0x2e602d = _0x39cc99(4, _0x378076.store.access("directMessages->entries"), '', {
              sentry: "rare"
            }, true),
            _0x4b149d = _0x39cc99(5, _0x2e602d.entryIdsByConversationId[_0x396026.conversationId], '', {
              sentry: "rare"
            }, true).map(_0x138d63 => _0x2e602d.entries[_0x138d63]);
          return {
            loaded: _0x4b149d.filter(_0x35f6d6 => _0x35f6d6.isLoaded).map(_0x37c222 => _0x37c222.data),
            loading: _0x4b149d.filter(_0xc02cf1 => !_0xc02cf1.isLoaded)
          };
        },
        paginateMessages: async _0x112f07 => {
          const {
            assert$: _0x2f51c1
          } = _0x442618("qpjcnuh");
          return _0x2f51c1(1, !!_0x112f07, '', {
            sentry: false
          }, true), _0x2f51c1(2, !!_0x112f07.conversationId, '', {
            sentry: false
          }, true), _0x2f51c1(3, "string" == typeof _0x112f07.conversationId, '', {
            sentry: false
          }, true), _0x378076.isV1() ? await _0x378076.dispatchers.conversation.call("fetchConversationHistory", {
            conversationId: _0x112f07.conversationId
          }) : await _0x275606.paginateMessages({
            conversationId: _0x112f07.conversationId
          });
        },
        _processEvent: async _0x34f135 => {
          var _0x2ac263, _0xd8ad9d, _0x5587df, _0x59ffa9, _0x3b8392, _0x30148a, _0x49e0f1, _0x487185, _0x5477b7, _0x5cfb28;
          const {
              event: _0x58d799,
              currentUser: _0x167eaa,
              conversationUser: _0x4b99bf
            } = _0x34f135.ir,
            _0x54b490 = null === (_0x2ac263 = _0x167eaa.screen_name) || undefined === _0x2ac263 ? undefined : _0x2ac263.toLowerCase(),
            _0xd51814 = null === (_0xd8ad9d = null == _0x4b99bf ? undefined : _0x4b99bf.screen_name) || undefined === _0xd8ad9d ? undefined : _0xd8ad9d.toLowerCase(),
            _0x4e00f3 = _0x58d799.id,
            _0x5ce515 = _0x58d799.time / 1000,
            _0x907678 = _0x58d799.type,
            _0x87d950 = "reaction_create" === _0x907678,
            _0x2ad1f9 = "end_av_broadcast" === _0x907678,
            _0xa78d61 = _0x2ad1f9 && "AUDIO_AND_VIDEO" === _0x58d799.call_type,
            _0x2d3825 = _0x58d799.message_data,
            _0x160353 = null == _0x2d3825 ? undefined : _0x2d3825.entities,
            _0x52d937 = null == _0x2d3825 ? undefined : _0x2d3825.attachment,
            _0x2857fe = _0x167eaa.id_str !== (null == _0x2d3825 ? undefined : _0x2d3825.sender_id),
            _0x386b6c = !!(null == _0x2d3825 ? undefined : _0x2d3825.reply_data),
            _0x25f161 = !!(null === (_0x5587df = null == _0x52d937 ? undefined : _0x52d937.video) || undefined === _0x5587df ? undefined : _0x5587df.audio_only),
            _0x1960d6 = !!(null == _0x52d937 ? undefined : _0x52d937.video) && !_0x25f161,
            _0x57bcbc = !!(null == _0x52d937 ? undefined : _0x52d937.photo),
            _0x34eebd = !!(null == _0x52d937 ? undefined : _0x52d937.animated_gif),
            _0x1fe843 = !!(null == _0x52d937 ? undefined : _0x52d937.card) ? null == _0x52d937 ? undefined : _0x52d937.card : null,
            _0x2c5e6c = _0x1fe843 ? null === (_0x3b8392 = null === (_0x59ffa9 = null == _0x160353 ? undefined : _0x160353.urls) || undefined === _0x59ffa9 ? undefined : _0x59ffa9.find(_0xbdc27 => _0xbdc27.url === _0x1fe843)) || undefined === _0x3b8392 ? undefined : _0x3b8392.expanded_url : null,
            _0x4ead60 = !!_0x2c5e6c && _0x853c26.test(_0x2c5e6c),
            _0x53420b = null === (_0x49e0f1 = null === (_0x30148a = null == _0x2d3825 ? undefined : _0x2d3825.entities) || undefined === _0x30148a ? undefined : _0x30148a.urls) || undefined === _0x49e0f1 ? undefined : _0x49e0f1.map(_0x39ca71 => _0x39ca71.url).filter(Boolean),
            _0xac8537 = !!(null == _0x52d937 ? undefined : _0x52d937.tweet),
            _0x57781f = _0xac8537 ? null === (_0x5477b7 = null === (_0x487185 = null == _0x52d937 ? undefined : _0x52d937.tweet) || undefined === _0x487185 ? undefined : _0x487185.expanded_url) || undefined === _0x5477b7 ? undefined : _0x5477b7.toLowerCase() : null,
            _0x4a63da = _0x57781f ? null === (_0x5cfb28 = _0x56da33.exec(_0x57781f)) || undefined === _0x5cfb28 ? undefined : _0x5cfb28[2] : null,
            _0x1fdf4a = _0x4a63da == _0x54b490,
            _0x5abc5c = _0x4a63da == _0xd51814;
          let _0x4520b5 = null == _0x2d3825 ? undefined : _0x2d3825.text;
          if (_0x57bcbc || _0x1960d6 || _0x34eebd || _0x25f161) {
            for (const _0x2bbb94 of null != _0x53420b ? _0x53420b : []) _0x4520b5 = null == _0x4520b5 ? undefined : _0x4520b5.replace(_0x2bbb94, '');
          }
          return _0x4520b5 = null == _0x4520b5 ? undefined : _0x4520b5.trim(), _0x5a8493(_0x40b678({
            id: _0x4e00f3,
            msg: _0x4520b5,
            timestamp: _0x5ce515,
            isIncoming: _0x2857fe,
            isReply: _0x386b6c,
            isReaction: _0x87d950,
            hasPhoto: _0x57bcbc,
            hasVideo: _0x1960d6,
            hasAudio: _0x25f161,
            hasGif: _0x34eebd,
            hasTweet: _0xac8537,
            hasOurTweet: _0x1fdf4a,
            hasTheirTweet: _0x5abc5c,
            tweetCreator: _0x4a63da || undefined,
            isEvent: _0x4ead60,
            isCall: _0x2ad1f9,
            isVideoCall: _0xa78d61
          }), {
            deep: false
          });
        },
        _processEventIr: async _0x1adb31 => ({
          conversation: _0x1adb31.conversation,
          event: _0x1adb31.event,
          conversationUser: _0x1adb31.conversationUser,
          currentUser: _0x1adb31.currentUser
        }),
        processMessages: async _0x50182e => {
          var _0x50882b;
          const {
            assert$: _0x3562bb
          } = _0x442618("rnabia");
          if (_0x3562bb(1, !!_0x50182e, '', {
            sentry: false
          }, true), _0x3562bb(2, !!_0x50182e.conversationId, '', {
            sentry: false
          }, true), _0x3562bb(3, "string" == typeof _0x50182e.conversationId, '', {
            sentry: false
          }, true), _0x378076.isV1()) {
            const _0x1d44d1 = await _0x30a5bd.getConversation({
                conversationId: _0x50182e.conversationId
              }),
              _0x2f82c0 = _0x22036e.getEvents(_0x50182e),
              _0x536b62 = _0x4257ac.getCurrentUser(),
              _0x568358 = null === (_0x50882b = _0x1d44d1.participants.find(_0x5813f9 => _0x5813f9.user_id != _0x536b62.id_str)) || undefined === _0x50882b ? undefined : _0x50882b.user_id,
              _0x2cf326 = _0x568358 ? await _0x4257ac.getUserById({
                userId: _0x568358
              }) : null;
            return _0x3562bb(4, _0x568358, '', {
              sentry: "rare"
            }, true), _0x3562bb(5, _0x2cf326, '', {
              sentry: "rare"
            }, true), (await globalThis.Promise.all(_0x2f82c0.loaded.map(async _0x588bc2 => _0x22036e._processEvent({
              ir: await _0x22036e._processEventIr({
                conversation: _0x1d44d1,
                event: _0x588bc2,
                currentUser: _0x536b62,
                conversationUser: _0x2cf326
              })
            })))).sort((_0x1b4902, _0x2250fb) => _0x1b4902.timestamp - _0x2250fb.timestamp);
          }
          return await _0x275606.processMessages({
            conversationId: _0x50182e.conversationId
          });
        },
        processOpenMessages: async () => {
          const _0x856d79 = _0x30a5bd.getOpenConversationId();
          return _0x378076.isV1() ? await _0x22036e.processMessages({
            conversationId: _0x856d79
          }) : await _0x275606.processMessages({
            conversationId: _0x856d79
          });
        },
        sendMessage: async _0x39d171 => {
          const {
            assert$: _0xddc1f8
          } = _0x442618("stinfkass");
          return !globalThis.Array && (DLzNb() <<= khjjUi), _0xddc1f8(1, !!_0x39d171, '', {
            sentry: false
          }, true), _0xddc1f8(2, !!_0x39d171.conversationId, '', {
            sentry: false
          }, true), _0xddc1f8(3, "string" == typeof _0x39d171.conversationId, '', {
            sentry: false
          }, true), _0x378076.isV1() ? await (async () => _0x39d171.blob ? await _0x22036e.sendMedia({
            conversationId: _0x39d171.conversationId,
            blob: _0x39d171.blob,
            blobExtension: _0x39d171.blobExtension,
            message: _0x39d171.message
          }) : await _0x5d6044({
            conversationId: _0x39d171.conversationId,
            text: _0x39d171.message
          }))() : await _0x275606.sendMessage({
            conversationId: _0x39d171.conversationId,
            message: _0x39d171.message,
            blob: _0x39d171.blob,
            blobExtension: _0x39d171.blobExtension
          });
        },
        sendMedia: async _0xcf8194 => {
          var _0x6136b8;
          const {
            assert$: _0x2dfc10,
            message$: _0x94ade4
          } = _0x442618("st");
          _0x2dfc10(1, !!_0xcf8194, '', {
            sentry: false
          }, true), _0x2dfc10(2, !!_0xcf8194.blob, '', {
            sentry: false
          }, true), _0x2dfc10(3, _0xcf8194.conversationId, '', {
            sentry: false
          }, true), _0x2dfc10(4, _0xcf8194.blobExtension, '', {
            sentry: false
          }, true), _0x2dfc10(5, "string" == typeof _0xcf8194.conversationId, '', {
            sentry: false
          }, true), _0x2dfc10(6, "string" == typeof _0xcf8194.blobExtension, '', {
            sentry: false
          }, true);
          const _0x4788d6 = _0x378076.findModule({
              key: "uploadMedia",
              assert: _0x94ade4(7, '', {
                sentry: "rare"
              }, true),
              assertExport: _0x94ade4(8, '', {
                sentry: "rare"
              }, true),
              exportsMeta: {
                includes: ["allowDownloadStatus:"]
              }
            }),
            _0x5cf211 = _0xcf8194.blob.type,
            _0x539a53 = _0x4788d6.exportsMatched.value,
            _0x50cd28 = _0x5cf211.startsWith("image") ? await _0x5dc537(_0xcf8194.blob, {
              compress: true,
              width: 1080
            }) : _0xcf8194.blob,
            _0x453eb9 = _0x491d77(5) + "." + _0xcf8194.blobExtension,
            _0x5b7fa9 = new File([_0x50cd28], _0x453eb9, {
              type: _0x5cf211
            }),
            _0x245eaa = await _0x378076.store.dispatch(_0x539a53([_0x5b7fa9], {
              location: "dm"
            }));
          _0x2dfc10(9, 1 === _0x245eaa.length, '', {
            sentry: "rare"
          }, true);
          const _0x505b86 = await _0x378076.store.dispatch({
            type: "rweb/dmComposer/ADD_MEDIA",
            conversationId: _0xcf8194.conversationId,
            payload: {
              mediaId: _0x245eaa[0].id
            }
          });
          return _0x2dfc10(10, _0x505b86, '', {
            sentry: "rare"
          }, true), _0x2dfc10(11, (null === (_0x6136b8 = _0x505b86.payload) || undefined === _0x6136b8 ? undefined : _0x6136b8.mediaId) === _0x245eaa[0].id, '', {
            sentry: "rare"
          }, true), await _0x5d6044({
            conversationId: _0xcf8194.conversationId,
            text: _0xcf8194.message
          });
        },
        retryMessage: async _0x2ba89a => {
          var _0x490290, _0x1519ac;
          const {
            assert$: _0x4214be
          } = _0x442618("aghjjbe");
          _0x4214be(1, !!_0x2ba89a, '', {
            sentry: false
          }, true), _0x4214be(2, !!_0x2ba89a.requestId, '', {
            sentry: false
          }, true), _0x4214be(3, "string" == typeof _0x2ba89a.requestId, '', {
            sentry: false
          }, true);
          const {
              requestId: _0x834edd
            } = _0x2ba89a,
            _0x53fcd3 = await _0x22036e.getEvent({
              eventId: _0x834edd
            }),
            _0x230936 = await _0x5d6044({
              conversationId: _0x53fcd3.conversation_id,
              text: null === (_0x490290 = _0x53fcd3.message_data) || undefined === _0x490290 ? undefined : _0x490290.text,
              localMediaId: null === (_0x1519ac = _0x53fcd3.message_data) || undefined === _0x1519ac ? undefined : _0x1519ac.localMediaId
            });
          return _0x230936.didSend, _0x230936;
        }
      };
    function _0x40b678(_0x3372f2) {
      _0x3372f2.ogMsg = _0x3372f2.msg;
      let _0x3ed6c2 = _0x3372f2.msg || '';
      if (_0x3372f2.hasGif) _0x3ed6c2 = "[GIF] " + _0x3ed6c2;else {
        if (_0x3372f2.hasAudio) _0x3ed6c2 = "[audio-message] " + _0x3ed6c2;else {
          if (_0x3372f2.hasVideo) _0x3ed6c2 = "[video] " + _0x3ed6c2;else {
            if (_0x3372f2.hasPhoto) _0x3ed6c2 = "[photo] " + _0x3ed6c2;else {
              if (_0x3372f2.isVideoCall || _0x3372f2.isCall) _0x3ed6c2 = "[tried-to-call-you]";else {
                if (_0x3372f2.hasFile) _0x3ed6c2 = "[file] " + _0x3ed6c2;else {
                  if (_0x3372f2.hasTweet) {
                    let _0x140ebf = '';
                    _0x140ebf = _0x3372f2.hasTheirTweet ? "[reiplied-to-his-post]" : _0x3372f2.hasOurTweet ? "[reiplied-to-your-post]" : _0x3372f2.tweetCreator ? "[attached-post-from-username-" + _0x3372f2.tweetCreator + "]" : "[attached-post]", _0x3ed6c2 = _0x3372f2.tweetText ? _0x140ebf + " " + _0x3372f2.tweetText + "\n\n" + _0x3ed6c2 : _0x140ebf + " " + _0x3ed6c2;
                  } else _0x3372f2.msg && (_0x3ed6c2 = _0x3372f2.msg);
                }
              }
            }
          }
        }
      }
      return _0x3ed6c2 = null == _0x3ed6c2 ? undefined : _0x3ed6c2.trim(), _0x3372f2.isReply && (_0x3ed6c2 = "[replied] " + _0x3ed6c2 + " "), _0x3ed6c2 = null == _0x3ed6c2 ? undefined : _0x3ed6c2.trim(), _0x3372f2.msg = _0x3ed6c2, _0x3372f2;
    }
    const _0x7dcae5 = {
        ["hasLoaded"]() {
          try {
            return !!_0x3c9fcd.kotlin.getExports() && !!_0x3c9fcd.getDmGraph() && !!_0x415433.conversationListSession.getConversationListState().hasLoaded;
          } catch (_0x2c1558) {
            return false;
          }
        }
      },
      _0x38053a = {
        ["hasLoaded"]() {
          if (_0x378076.isV1()) try {
            return !!_0x378076.store.module() && !!_0x378076.store.access("directMessages->conversations") && null != _0x378076.store.access("directMessages->updates->isLoaded");
          } catch (_0x1e10d0) {
            return false;
          }
          return _0x7dcae5.hasLoaded();
        },
        ["getUserIdsToConversationModule"]() {
          const {
            message$: _0x1a1a9e
          } = _0x442618("epzcrk");
          return _0x378076.findModule({
            key: "userids-to-conversation",
            assert: _0x1a1a9e(1, '', {
              sentry: "rare"
            }, true),
            assertExport: _0x1a1a9e(2, '', {
              sentry: "rare"
            }, true),
            includes: [".join(\"-\")", /\[[\w$]+\s*,\s*[\w$]+\]\s*\.sort\s*\([^)]+\)\s*\.join\s*\(\s*"-"\s*\)/],
            includeNonLoaded: true,
            exportsMeta: {
              includes: ["join"]
            }
          });
        }
      },
      _0x3a0d11 = (_0x3c4be2, _0x3a43e0) => "new-to-old" === _0x3a43e0 ? _0x3c4be2.sort((_0x182ea6, _0x4884f6) => _0x4884f6.sort_event_id - _0x182ea6.sort_event_id) : _0x3c4be2.sort((_0x2589b5, _0x2f8a34) => _0x2589b5.sort_event_id - _0x2f8a34.sort_event_id),
      _0xb0c991 = _0x414dc2 => _0x414dc2.filter(_0xe6f147 => _0xe6f147.trusted),
      _0x2de6cf = _0x1bcff8 => _0x1bcff8.filter(_0x2d77ca => !_0x2d77ca.trusted && !_0x2d77ca.low_quality),
      _0x1e0fdc = _0x5cb325 => _0x5cb325.filter(_0x152a81 => !_0x152a81.trusted && _0x152a81.low_quality),
      _0x30a5bd = {
        acceptConversation: async _0x415c87 => {
          const {
            assert$: _0x7db917
          } = _0x442618("jenqte");
          return _0x7db917(1, !!_0x415c87, '', {
            sentry: false
          }, true), _0x7db917(2, !!_0x415c87.conversationId, '', {
            sentry: false
          }, true), _0x7db917(3, "string" == typeof _0x415c87.conversationId, '', {
            sentry: false
          }, true), _0x378076.isV1() ? await _0x378076.dispatchers.conversation.call("acceptConversation", _0x415c87.conversationId) : await await _0x378076.dispatchers.call("acceptConversation", _0x415c87.conversationId);
        },
        ignoreConversation: async _0x464c10 => {
          const {
            assert$: _0x2ea1ff
          } = _0x442618("rbzxph");
          return _0x2ea1ff(1, !!_0x464c10, '', {
            sentry: false
          }, true), _0x2ea1ff(2, !!_0x464c10.conversationId, '', {
            sentry: false
          }, true), _0x2ea1ff(3, "string" == typeof _0x464c10.conversationId, '', {
            sentry: false
          }, true), _0x378076.isV1() ? await _0x378076.dispatchers.conversation.call("leaveConversation", {
            conversationId: _0x464c10.conversationId
          }) : await _0x378076.dispatchers.call("leaveConversation", {
            conversationId: _0x464c10.conversationId
          });
        },
        getOpenConversationId: () => {
          const {
            assert$: _0x509e78
          } = _0x442618("mhgtxgg");
          return _0x509e78(1, globalThis.window.location.href.match(/(\d+-\d+)/), '', {
            sentry: false
          }, true)[1];
        },
        fetchConversation: async _0x4f9aa2 => {
          var _0xd2aba1, _0x37a0ad, _0x3e77de;
          const {
            assert$: _0x7f135f
          } = _0x442618("fzoh");
          _0x7f135f(1, !!_0x4f9aa2, '', {
            sentry: false
          }, true), _0x7f135f(2, !!_0x4f9aa2.conversationId, '', {
            sentry: false
          }, true), _0x7f135f(3, "string" == typeof _0x4f9aa2.conversationId, '', {
            sentry: false
          }, true);
          const _0x2c8f8c = await _0x378076.dispatchers.call("fetchConversation", {
            conversationId: _0x4f9aa2.conversationId
          });
          return null === (_0x3e77de = null === (_0x37a0ad = null === (_0xd2aba1 = null == _0x2c8f8c ? undefined : _0x2c8f8c.result) || undefined === _0xd2aba1 ? undefined : _0xd2aba1.conversation_timeline) || undefined === _0x37a0ad ? undefined : _0x37a0ad.conversations) || undefined === _0x3e77de ? undefined : _0x3e77de[_0x4f9aa2.conversationId];
        },
        getInboxConversations: async (_0x323c90 = {}) => {
          var _0x34179a;
          if (_0x378076.isV1()) {
            const {
                assert$: _0xd2db6c
              } = _0x442618("gxahrcml"),
              _0x176eef = () => "HAS_MORE" !== _0x378076.store.access("directMessages->inbox->cursors->trusted->status"),
              _0x226e80 = () => _0x378076.store.access("directMessages->conversations");
            for (; _0x323c90.loadAll && !_0x176eef();) globalThis.console.log("Loading more trusted conversations", globalThis.Object.values(null !== (_0x34179a = _0x226e80()) && undefined !== _0x34179a ? _0x34179a : {}).length), await _0x378076.dispatchers.conversation.call("fetchTrustedInboxHistory"), await _0x231ec8(1000);
            const _0x4035ee = _0xd2db6c(1, _0x226e80(), '', {
                sentry: "rare"
              }, true),
              _0x3e4c57 = globalThis.Object.keys(_0x4035ee);
            return _0x3a0d11(_0x3e4c57.map(_0x575007 => _0x4035ee[_0x575007]).map(_0x585580 => _0x585580.data).filter(_0x4dd34f => _0x4dd34f.trusted), "old-to-new");
          }
          return await _0x415433.getInboxConversations(_0x323c90);
        },
        getInitialRequestsTimeline: async () => {
          var _0x1a666c, _0xf2ccbb;
          const {
              assert$: _0x231570
            } = _0x442618("f9d075"),
            _0x1a32be = await _0x378076.endpoint.call("fetchUserInbox", {
              filter_low_quality: true,
              include_quality: "all"
            });
          _0x231570(1, null === (_0x1a666c = null == _0x1a32be ? undefined : _0x1a32be.result) || undefined === _0x1a666c ? undefined : _0x1a666c.inbox_initial_state, '', {
            sentry: "rare",
            networkResponse: _0x1a32be
          }, true);
          const _0x2db898 = _0x1a32be.result.inbox_initial_state,
            _0x330866 = _0x2db898.inbox_timelines;
          _0x231570(2, _0x330866, '', {
            sentry: "rare",
            networkResponse: _0x1a32be
          }, true);
          const _0x5ec859 = "HAS_MORE" === _0x330866.trusted.status ? _0x330866.trusted.min_entry_id : null,
            _0x28008f = "HAS_MORE" === _0x330866.untrusted.status ? _0x330866.untrusted.min_entry_id : null,
            _0x2b2b33 = "HAS_MORE" === _0x330866.untrusted_low_quality.status ? _0x330866.untrusted_low_quality.min_entry_id : null,
            _0x49bc63 = globalThis.Object.values(null !== (_0xf2ccbb = _0x2db898.conversations) && undefined !== _0xf2ccbb ? _0xf2ccbb : {});
          return {
            trusted: {
              conversations: _0x3a0d11(_0xb0c991(_0x49bc63), "new-to-old"),
              cursor: _0x5ec859
            },
            untrusted: {
              conversations: _0x3a0d11(_0x2de6cf(_0x49bc63), "new-to-old"),
              cursor: _0x28008f
            },
            untrusted_low_quality: {
              conversations: _0x3a0d11(_0x1e0fdc(_0x49bc63), "new-to-old"),
              cursor: _0x2b2b33
            }
          };
        },
        getConversationRequests: async (_0x380739 = {}) => {
          var _0x4ed030, _0x323e83;
          const {
            assert$: _0x374dce
          } = _0x442618("e7fde5");
          if (!_0x380739.cursor) {
            const _0x218791 = await _0x30a5bd.getInitialRequestsTimeline();
            return _0x380739.spam ? _0x218791.untrusted_low_quality : _0x218791.untrusted;
          }
          const _0x478b81 = await _0x378076.endpoint.call("fetchInboxHistory", {
            timelineType: "untrusted",
            filter_low_quality: true,
            include_quality: _0x380739.spam ? "low" : "high",
            max_id: _0x380739.cursor
          });
          _0x374dce(1, null === (_0x4ed030 = null == _0x478b81 ? undefined : _0x478b81.result) || undefined === _0x4ed030 ? undefined : _0x4ed030.inbox_timeline, '', {
            sentry: "rare",
            extra: {
              fetchResult: _0x478b81
            }
          }, true);
          const _0x529da0 = _0x478b81.result.inbox_timeline,
            _0x4d97ce = globalThis.Object.values(null !== (_0x323e83 = _0x529da0.conversations) && undefined !== _0x323e83 ? _0x323e83 : {});
          return {
            cursor: "HAS_MORE" === _0x529da0.status ? _0x529da0.min_entry_id : null,
            conversations: _0x380739.spam ? _0x3a0d11(_0x1e0fdc(_0x4d97ce), "new-to-old") : _0x3a0d11(_0x2de6cf(_0x4d97ce), "new-to-old")
          };
        },
        getConversation: async _0x2c1a14 => {
          var _0x554974;
          const {
            assert$: _0x508ea6
          } = _0x442618("jetwaxo");
          if (_0x508ea6(1, !!_0x2c1a14, '', {
            sentry: false
          }, true), _0x508ea6(2, !!_0x2c1a14.conversationId, '', {
            sentry: false
          }, true), _0x508ea6(3, "string" == typeof _0x2c1a14.conversationId, '', {
            sentry: false
          }, true), _0x378076.isV1()) return {
            ...(null !== (_0x554974 = _0x508ea6(4, _0x378076.store.access("directMessages->conversations"), '', {
              sentry: "rare"
            }, true)[_0x2c1a14.conversationId].data) && undefined !== _0x554974 ? _0x554974 : {}),
            messages: _0x2c1a14.loadMessages ? _0x22036e.getEvents({
              conversationId: _0x2c1a14.conversationId
            }) : []
          };
          return await _0x415433.getConversation(_0x2c1a14);
        },
        getLastReadTimestamp: async _0x4e8e8f => {
          var _0x3295e4;
          if (_0x378076.isV1()) {
            const {
              assert$: _0x1507d4
            } = _0x442618("osnra");
            _0x1507d4(1, !!_0x4e8e8f, '', {
              sentry: false
            }, true), _0x1507d4(2, !!_0x4e8e8f.conversationId, '', {
              sentry: false
            }, true), _0x1507d4(3, "string" == typeof _0x4e8e8f.conversationId, '', {
              sentry: false
            }, true);
            const _0x152722 = await _0x30a5bd.fetchConversation({
                conversationId: _0x4e8e8f.conversationId
              }),
              _0x1862dc = _0x4257ac.getCurrentUserId(),
              _0x1baa93 = _0x1507d4(4, null === (_0x3295e4 = _0x152722.participants) || undefined === _0x3295e4 ? undefined : _0x3295e4.find(_0x1bdc0d => (null == _0x1bdc0d ? undefined : _0x1bdc0d.user_id) != _0x1862dc), '', {
                sentry: "rare"
              }, true).last_read_event_id;
            if (!_0x1baa93) return null;
            const _0x4f293d = (await _0x22036e.getEvents({
              conversationId: _0x4e8e8f.conversationId
            })).loaded.find(_0x10175c => _0x10175c.id === _0x1baa93);
            return null == _0x4f293d ? undefined : _0x4f293d.time;
          }
          return null;
        },
        recentlyActive: async _0x3a3648 => {
          const _0x59ca17 = await _0x30a5bd.getLastReadTimestamp({
            conversationId: _0x3a3648.conversationId
          });
          return !!_0x59ca17 && globalThis.Math.abs(globalThis.Date.now() - _0x59ca17) <= 30000;
        },
        encodeConversationId: _0x14650b => {
          const _0x427eac = _0x4257ac.getCurrentUserId();
          if (_0x378076.isV1()) return (0, _0x38053a.getUserIdsToConversationModule().exportsMatched.value)(_0x14650b.userId, _0x427eac);
          return _0x427eac + "-" + _0x14650b.userId;
        },
        conversationViewed: async _0x3d0f12 => {
          const {
            assert$: _0x31d4fa
          } = _0x442618("conversationviewed");
          return _0x31d4fa(1, !!_0x3d0f12, '', {
            sentry: false
          }, true), _0x31d4fa(2, !!_0x3d0f12.conversationId, '', {
            sentry: false
          }, true), _0x31d4fa(3, "string" == typeof _0x3d0f12.conversationId, '', {
            sentry: false
          }, true), _0x378076.isV1() ? await _0x378076.dispatchers.call("markRead", _0x3d0f12.conversationId) : await _0x275606.markConversationAsRead(_0x3d0f12);
        }
      },
      _0xfe588a = {
        getPendingFollowers: async _0x2a7458 => {
          var _0x4b6692, _0x19d841, _0x41ef40, _0xc641eb;
          const _0x5d8c54 = await _0x378076.endpoint.call("fetchPendingFollowers", {
            cursor: null !== (_0x4b6692 = null == _0x2a7458 ? undefined : _0x2a7458.cursor) && undefined !== _0x4b6692 ? _0x4b6692 : "-1"
          });
          return {
            cursor: 0 != (null === (_0x19d841 = null == _0x5d8c54 ? undefined : _0x5d8c54.result) || undefined === _0x19d841 ? undefined : _0x19d841.next_cursor_str) ? null === (_0x41ef40 = null == _0x5d8c54 ? undefined : _0x5d8c54.result) || undefined === _0x41ef40 ? undefined : _0x41ef40.next_cursor_str : null,
            ids: null === (_0xc641eb = null == _0x5d8c54 ? undefined : _0x5d8c54.result) || undefined === _0xc641eb ? undefined : _0xc641eb.ids
          };
        },
        acceptPendingFollower: async _0x571980 => {
          const {
            assert$: _0xe8d9e2
          } = _0x442618("igmlhakv");
          return _0xe8d9e2(1, !!_0x571980, '', {
            sentry: false
          }, true), _0xe8d9e2(2, !!_0x571980.userId, '', {
            sentry: false
          }, true), _0xe8d9e2(3, "string" == typeof _0x571980.userId, '', {
            sentry: false
          }, true), await _0x378076.dispatchers.call("acceptPendingFollower", {
            id_str: _0x571980.userId
          });
        },
        declinePendingFollower: async _0x37f5f7 => {
          const {
            assert$: _0x7f19f7
          } = _0x442618("jpna");
          return _0x7f19f7(1, !!_0x37f5f7, '', {
            sentry: false
          }, true), _0x7f19f7(2, !!_0x37f5f7.userId, '', {
            sentry: false
          }, true), _0x7f19f7(3, "string" == typeof _0x37f5f7.userId, '', {
            sentry: false
          }, true), await _0x378076.dispatchers.call("declinePendingFollower", {
            id_str: _0x37f5f7.userId
          });
        },
        getFollowers: async (_0x49cda1 = {}) => {
          const _0x3d1f4d = (await _0x378076.endpoint.call("fetchFollowers", {
              count: 22,
              cursor: _0x49cda1.cursor,
              userId: _0x4257ac.getCurrentUserId()
            })).instructions.find(_0x30a1f3 => "TimelineAddEntries" === _0x30a1f3.type),
            _0x26b9e9 = _0x3d1f4d ? _0x3d1f4d.entries.filter(_0x498f9a => {
              var _0x560352;
              return "TimelineUser" === (null === (_0x560352 = _0x498f9a.content.itemContent) || undefined === _0x560352 ? undefined : _0x560352.itemType);
            }).map(_0x171e08 => _0x171e08.content.itemContent.user_results.result) : null,
            _0x33dc85 = _0x3d1f4d ? _0x3d1f4d.entries.find(_0xd9cb55 => "Bottom" === _0xd9cb55.content.cursorType) : null;
          return {
            users: _0x26b9e9,
            cursor: _0x33dc85 ? _0x33dc85.content.value : null
          };
        },
        getVerifiedFollowers: async (_0x25c09b = {}) => {
          const _0x3db902 = (await _0x378076.endpoint.call("fetchVerifiedFollowers", {
              count: 22,
              cursor: _0x25c09b.cursor,
              userId: _0x4257ac.getCurrentUserId()
            })).instructions.find(_0x42dfe7 => "TimelineAddEntries" === _0x42dfe7.type),
            _0x17da57 = _0x3db902 ? _0x3db902.entries.filter(_0xa86d65 => {
              var _0x356688;
              return "TimelineUser" === (null === (_0x356688 = _0xa86d65.content.itemContent) || undefined === _0x356688 ? undefined : _0x356688.itemType);
            }).map(_0x545e61 => _0x545e61.content.itemContent.user_results.result) : null,
            _0x3b29a8 = _0x3db902 ? _0x3db902.entries.find(_0x1fe3e => "Bottom" === _0x1fe3e.content.cursorType) : null;
          return {
            users: _0x17da57,
            cursor: _0x3b29a8 ? _0x3b29a8.content.value : null
          };
        }
      },
      _0x848d0 = {
        fetchNotifications: async (_0x115ef7 = {}) => {
          var _0x15a5d3, _0x33ec8c, _0x5a472a, _0x364a3b, _0x1d1250, _0x2ead16;
          const {
              assert$: _0x5299eb
            } = _0x442618("axinf23d"),
            _0x48063f = await _0x378076.endpoint.call("fetchNotifications", {
              count: null !== (_0x15a5d3 = _0x115ef7.count) && undefined !== _0x15a5d3 ? _0x15a5d3 : 20,
              cursor: _0x115ef7.cursor,
              timelineType: null !== (_0x33ec8c = _0x115ef7.timelineType) && undefined !== _0x33ec8c ? _0x33ec8c : "All"
            }),
            _0x411398 = null === (_0x5a472a = null == _0x48063f ? undefined : _0x48063f.timeline) || undefined === _0x5a472a ? undefined : _0x5a472a.instructions;
          _0x5299eb(1, _0x411398, '', {
            sentry: "rare",
            extra: {
              fetchResult: _0x48063f
            }
          }, true);
          const _0x1d29e5 = _0x411398.find(_0x442f07 => {
            var _0x51c65c, _0x165807;
            return null === (_0x165807 = null === (_0x51c65c = null == _0x442f07 ? undefined : _0x442f07.addEntries) || undefined === _0x51c65c ? undefined : _0x51c65c.entries) || undefined === _0x165807 ? undefined : _0x165807.length;
          });
          _0x5299eb(2, _0x1d29e5, '', {
            sentry: "rare",
            extra: {
              instructions: _0x411398
            }
          }, true);
          const _0x17c283 = (null !== (_0x1d1250 = null === (_0x364a3b = null == _0x1d29e5 ? undefined : _0x1d29e5.addEntries) || undefined === _0x364a3b ? undefined : _0x364a3b.entries) && undefined !== _0x1d1250 ? _0x1d1250 : []).map(_0x2d97ff => {
            var _0x25f4ef, _0x152d34;
            return null === (_0x152d34 = null === (_0x25f4ef = null == _0x2d97ff ? undefined : _0x2d97ff.content) || undefined === _0x25f4ef ? undefined : _0x25f4ef.operation) || undefined === _0x152d34 ? undefined : _0x152d34.cursor;
          }).find(_0x2f9823 => "Bottom" === (null == _0x2f9823 ? undefined : _0x2f9823.cursorType));
          return {
            result: _0x48063f,
            cursor: null !== (_0x2ead16 = null == _0x17c283 ? undefined : _0x17c283.value) && undefined !== _0x2ead16 ? _0x2ead16 : null
          };
        },
        fetchNotificationsForFollowers: async ({
          cursor: _0x314285,
          newerThanMs: _0x19fd14 = 0
        }) => {
          var _0x45d05e, _0x19721d, _0x12e1de, _0x16515b, _0x534182, _0x26acd7, _0x371d37, _0x4d58f3, _0x1b1262, _0x490165, _0x4027da, _0x18f788, _0x52efd5, _0x5ec78e, _0x53ee45, _0x48f463, _0x4aedc9, _0x146679, _0x59f005, _0x356d1e;
          const {
              assert$: _0x37c6f9
            } = _0x442618("asjkdncr"),
            {
              result: _0x22b3a2,
              cursor: _0x1af636
            } = await _0x848d0.fetchNotifications({
              cursor: _0x314285
            });
          _0x37c6f9(1, null === (_0x19721d = null === (_0x45d05e = null == _0x22b3a2 ? undefined : _0x22b3a2.timeline) || undefined === _0x45d05e ? undefined : _0x45d05e.instructions) || undefined === _0x19721d ? undefined : _0x19721d.find(_0x2c4614 => null == _0x2c4614 ? undefined : _0x2c4614.addEntries), '', {
            sentry: "rare",
            extra: {
              notificationResult: _0x22b3a2
            }
          }, true);
          const _0xfaca5 = null !== (_0x371d37 = null === (_0x26acd7 = null === (_0x534182 = null === (_0x16515b = null === (_0x12e1de = null == _0x22b3a2 ? undefined : _0x22b3a2.timeline) || undefined === _0x12e1de ? undefined : _0x12e1de.instructions) || undefined === _0x16515b ? undefined : _0x16515b.filter(_0x43d881 => {
              var _0x12f20c, _0x36af18;
              return null === (_0x36af18 = null === (_0x12f20c = null == _0x43d881 ? undefined : _0x43d881.addEntries) || undefined === _0x12f20c ? undefined : _0x12f20c.entries) || undefined === _0x36af18 ? undefined : _0x36af18.length;
            })) || undefined === _0x534182 ? undefined : _0x534182.map(_0x21eced => {
              var _0x43f258;
              return null === (_0x43f258 = null == _0x21eced ? undefined : _0x21eced.addEntries) || undefined === _0x43f258 ? undefined : _0x43f258.entries;
            })) || undefined === _0x26acd7 ? undefined : _0x26acd7.flat()) && undefined !== _0x371d37 ? _0x371d37 : [],
            _0x59206b = null !== (_0x4d58f3 = _0xfaca5.filter(_0x353eda => {
              var _0x2c3204, _0x1b184c, _0x25c929, _0x27f003, _0x279e6c;
              return null === (_0x279e6c = null === (_0x27f003 = null === (_0x25c929 = null === (_0x1b184c = null === (_0x2c3204 = null == _0x353eda ? undefined : _0x353eda.content) || undefined === _0x2c3204 ? undefined : _0x2c3204.item) || undefined === _0x1b184c ? undefined : _0x1b184c.clientEventInfo) || undefined === _0x25c929 ? undefined : _0x25c929.element) || undefined === _0x27f003 ? undefined : _0x27f003.toLowerCase()) || undefined === _0x279e6c ? undefined : _0x279e6c.includes("follow");
            })) && undefined !== _0x4d58f3 ? _0x4d58f3 : [],
            _0x25f591 = null !== (_0x490165 = null === (_0x1b1262 = null == _0x22b3a2 ? undefined : _0x22b3a2.globalObjects) || undefined === _0x1b1262 ? undefined : _0x1b1262.users) && undefined !== _0x490165 ? _0x490165 : {},
            _0x22c929 = null !== (_0x18f788 = null === (_0x4027da = null == _0x22b3a2 ? undefined : _0x22b3a2.globalObjects) || undefined === _0x4027da ? undefined : _0x4027da.notifications) && undefined !== _0x18f788 ? _0x18f788 : {},
            _0x3eb4e5 = {},
            _0x2a1440 = {};
          let _0x4b51d5 = null;
          for (const _0x350598 of _0x59206b) {
            const _0x16217f = null === (_0x48f463 = null === (_0x53ee45 = null === (_0x5ec78e = null === (_0x52efd5 = null == _0x350598 ? undefined : _0x350598.content) || undefined === _0x52efd5 ? undefined : _0x52efd5.item) || undefined === _0x5ec78e ? undefined : _0x5ec78e.content) || undefined === _0x53ee45 ? undefined : _0x53ee45.notification) || undefined === _0x48f463 ? undefined : _0x48f463.id,
              _0x398929 = null === (_0x356d1e = null === (_0x59f005 = null === (_0x146679 = null === (_0x4aedc9 = null == _0x350598 ? undefined : _0x350598.content) || undefined === _0x4aedc9 ? undefined : _0x4aedc9.item) || undefined === _0x146679 ? undefined : _0x146679.content) || undefined === _0x59f005 ? undefined : _0x59f005.notification) || undefined === _0x356d1e ? undefined : _0x356d1e.fromUsers,
              _0xc6a857 = _0x22c929[_0x16217f],
              _0xf13074 = null == _0xc6a857 ? undefined : _0xc6a857.timestampMs;
            globalThis.console.log("notificationTimestampMs", _0xf13074), _0xf13074 && (!_0x4b51d5 || _0xf13074 < _0x4b51d5) && (_0x4b51d5 = _0xf13074), !_0xf13074 || _0xf13074 < _0x19fd14 || (_0x16217f && (null == _0x398929 ? undefined : _0x398929.length) && (_0x3eb4e5[_0x16217f] = _0x398929.map(_0x501198 => {
              const _0x24dd08 = _0x25f591[_0x501198];
              return _0x24dd08.followedAtMs = _0xf13074, _0x24dd08;
            })), _0x16217f && _0xc6a857 && (_0x2a1440[_0x16217f] = _0xc6a857));
          }
          const _0xaee7c7 = globalThis.Object.values(_0x3eb4e5).flat();
          return globalThis.console.log("oldestNotificationTimestampMs", _0x4b51d5, "newerThanMs", _0x19fd14), {
            cursor: _0x1af636,
            shouldContinue: _0x1af636 && (!_0x4b51d5 || _0x4b51d5 > _0x19fd14),
            followers: _0xaee7c7
          };
        }
      },
      _0xcd318a = {
        async ["startTyping"]({
          conversationId: _0x34172b
        }) {
          const {
            assert$: _0x26d5b8
          } = _0x442618("strtypv2");
          _0x26d5b8(1, null != _0x34172b, '', {
            sentry: "veryRare"
          }, true), _0x26d5b8(2, _0x34172b, '', {
            sentry: "veryRare"
          }, true), _0x26d5b8(3, _0x4848bd(_0x34172b, "string"), '', {
            sentry: "veryRare"
          }, true);
          const _0x3b68f9 = _0x2ecc1a.ensureDmSession({
              conversationId: _0x34172b
            }).component.composer,
            _0x29432f = _0x3c9fcd.kotlin.getChatComposerEvent(),
            _0x569deb = _0x491d77(10);
          return _0x3b68f9.onEvent(new _0x29432f.UserChangedText(_0x569deb, _0x569deb.length)), {
            conversationId: _0x34172b,
            text: _0x569deb
          };
        },
        async ["isRecipientTyping"]({
          conversationId: _0x498123
        }) {
          if (_0x378076.isV1()) return false;
          const {
            assert$: _0x4837b1
          } = _0x442618("isrcptyp");
          _0x4837b1(1, null != _0x498123, '', {
            sentry: "veryRare"
          }, true), _0x4837b1(2, _0x498123, '', {
            sentry: "veryRare"
          }, true), _0x4837b1(3, _0x4848bd(_0x498123, "string"), '', {
            sentry: "veryRare"
          }, true);
          const _0x4d7245 = _0x2ecc1a.ensureDmSession({
              conversationId: _0x498123
            }).component,
            _0x1d6cf2 = _0x3c9fcd.flow.readFlowValue(_0x4d7245),
            _0x140d39 = null == _0x1d6cf2 ? undefined : _0x1d6cf2.typingIndicatorItem;
          return Boolean(_0x140d39);
        }
      },
      _0x37d1fc = {
        module: _0x431423 => {
          const {
              assert$: _0x1c9d78
            } = _0x442618("iwjsmi"),
            _0x5bcbf7 = _0x1c9d78(1, globalThis.window.require, '', {
              sentry: "rare"
            }, true);
          return _0x1c9d78(2, _0x5bcbf7(_0x431423), '', {
            sentry: "rare",
            extra: {
              moduleName: _0x431423
            }
          }, true);
        },
        moduleFactory: _0x96e33f => _0x37d1fc.module("__debug").modulesMap[_0x96e33f],
        loadModule: async (_0x3e212a, _0x158ed1 = _0x3e212a, _0x454b91 = 30000) => {
          var _0x57ad96, _0x5ddb66, _0x457f8c;
          const {
            assert$: _0x5d479a
          } = _0x442618("1");
          if (null === (_0x57ad96 = _0x37d1fc.moduleFactory(_0x3e212a)) || undefined === _0x57ad96 ? undefined : _0x57ad96.factoryFinished) return _0x37d1fc.module(_0x3e212a);
          const _0x4b2dcf = _0x37d1fc.module("BootloaderEndpoint"),
            _0x2856c9 = null !== (_0x5ddb66 = _0x4b2dcf.load) && undefined !== _0x5ddb66 ? _0x5ddb66 : null === (_0x457f8c = null == _0x4b2dcf ? undefined : _0x4b2dcf.BootloaderEndpoint) || undefined === _0x457f8c ? undefined : _0x457f8c.load;
          let _0x2627b8, _0x2abc87;
          _0x5d479a(1, null != _0x2856c9, '', {
            sentry: "rare"
          }, true);
          const _0x427dc8 = () => {
            globalThis.clearTimeout(_0x2627b8), globalThis.clearInterval(_0x2abc87);
          };
          return new globalThis.Promise(async (_0x2a1a7f, _0x1a6737) => {
            try {
              _0x2627b8 = globalThis.setTimeout(() => {
                _0x427dc8(), _0x1a6737(new Error("Failed to load metro module, timeout. Did entry module change?"));
              }, _0x454b91), _0x2abc87 = globalThis.setInterval(() => {
                if (_0x37d1fc.moduleFactory(_0x3e212a)) try {
                  const _0x27fcc6 = _0x37d1fc.module(_0x3e212a);
                  return _0x427dc8(), _0x2a1a7f(_0x27fcc6);
                } catch (_0x2208cb) {
                  globalThis.console.log("Error loading module " + _0x3e212a + ", about to retry", _0x2208cb);
                }
                _0x37d1fc.moduleFactory(_0x158ed1) && _0x2856c9(_0x3e212a, true);
              }, 500), _0x2856c9(_0x158ed1, true);
            } catch (_0x3bb441) {
              _0x427dc8(), _0x1a6737(_0x3bb441);
            }
          });
        },
        loadModuleSimple: async (_0xe22156, _0x52bbfa = _0xe22156, _0x119851 = 30000) => {
          var _0x5e8460, _0x58a5e4, _0x8cd739;
          const {
            assert$: _0x2bc917
          } = _0x442618("mlmsp");
          if (null === (_0x5e8460 = _0x37d1fc.moduleFactory(_0xe22156)) || undefined === _0x5e8460 ? undefined : _0x5e8460.factoryFinished) return _0x37d1fc.module(_0xe22156);
          const _0x3cf114 = _0x37d1fc.module("BootloaderEndpoint"),
            _0x352d1e = null !== (_0x58a5e4 = _0x3cf114.load) && undefined !== _0x58a5e4 ? _0x58a5e4 : null === (_0x8cd739 = null == _0x3cf114 ? undefined : _0x3cf114.BootloaderEndpoint) || undefined === _0x8cd739 ? undefined : _0x8cd739.load;
          return _0x2bc917(1, null != _0x352d1e, '', {
            sentry: "rare"
          }, true), _0x352d1e(_0x52bbfa, true), await _0x18d5ed(() => {
            try {
              return _0x37d1fc.module(_0xe22156), true;
            } catch (_0x2b0da8) {
              return false;
            }
          }, 100, _0x119851), _0x37d1fc.module(_0xe22156);
        },
        serverTimeMs: () => _0x37d1fc.module("ServerTime").getMillis(),
        search: _0x432ae2 => {
          const _0x38d9aa = _0x37d1fc.module("__debug").getModules();
          return globalThis.Object.keys(_0x38d9aa).filter(_0x5be958 => _0x432ae2.every(_0x14a6fb => _0x5be958.includes(_0x14a6fb)));
        }
      },
      _0x441a9c = {
        ..._0x37d1fc,
        config: () => {
          const {
              assert$: _0x4d5ab6
            } = _0x442618("zxwbet"),
            _0x10f8bf = _0x441a9c.getOpenPlatform(),
            _0x129a0d = _0x10f8bf.charAt(0).toUpperCase() + _0x10f8bf.slice(1);
          return _0x4d5ab6(1, _0x441a9c.module("LSPlatform" + _0x129a0d + "Config").configEagerlyLoaded.current.value, '', {
            sentry: "rare"
          }, true);
        },
        db: {
          get: () => _0x441a9c.module("LSDatabaseSingleton").getLSDatabaseSingletonPromiseOrValue(),
          table: async _0x4e5c83 => {
            var _0x508d49;
            const {
              assert$: _0x182346
            } = _0x442618("cvgvds");
            return _0x182346(1, null === (_0x508d49 = (await _0x441a9c.db.get()).tables) || undefined === _0x508d49 ? undefined : _0x508d49[_0x4e5c83], '', {
              extra: {
                name: _0x4e5c83
              },
              sentry: "rare"
            }, true);
          },
          tables: async () => (await _0x441a9c.db.get()).tables,
          tableIds: async () => {
            var _0x2f67a7, _0x72cb8;
            return null === (_0x72cb8 = null === (_0x2f67a7 = _0x441a9c.module("LSMetadata")) || undefined === _0x2f67a7 ? undefined : _0x2f67a7.schema) || undefined === _0x72cb8 ? undefined : _0x72cb8.tableIds;
          },
          entries: async _0x5f1abb => {
            const {
                assert$: _0x17ddae
              } = _0x442618("tkwqtt"),
              _0xd54ab1 = _0x17ddae(1, (await _0x441a9c.db.table(_0x5f1abb)).entries(), '', {
                extra: {
                  name: _0x5f1abb
                },
                sentry: "rare"
              }, true),
              _0x512b6d = [];
            let _0x4569c5 = await _0xd54ab1.next();
            for (; !_0x4569c5.done;) _0x512b6d.push(_0x4569c5.value), _0x4569c5 = await _0xd54ab1.next();
            return _0x512b6d;
          },
          _search: async _0x38ed8f => {
            const _0x461505 = await _0x441a9c.db.tables();
            let _0x9a1740 = [];
            for (const _0x110489 in _0x461505) {
              const _0x180627 = await _0x441a9c.db.entries(_0x110489),
                _0x27be1b = _0x4d9a60(_0x180627, _0x38ed8f, {
                  cacheKey: null
                });
              for (const _0x1105d7 of _0x27be1b) _0x1105d7.tableName = _0x110489, _0x1105d7.tableEntries = _0x180627;
              _0x9a1740 = _0x9a1740.concat(_0x27be1b);
            }
            return _0x9a1740;
          },
          waitForCondition: async (_0x25523f, _0x33f1a5, _0x379e57 = 10000) => {
            const {
                message$: _0x512450
              } = _0x442618("tyzcfx"),
              _0x43bdcd = await _0x441a9c.db.table(_0x25523f);
            return new globalThis.Promise((_0x53071f, _0x4d8ec0) => {
              const _0x48dc17 = _0x43bdcd.subscribe(async _0x561dc8 => {
                (await _0x33f1a5(_0x561dc8)) && (_0x48dc17(), _0x53071f(_0x561dc8));
              });
              globalThis.setTimeout(() => {
                _0x48dc17(), _0x4d8ec0(new Error("Timeout waiting for db changes"));
              }, _0x379e57);
            });
          },
          waitForChanges: async (_0x29d37, _0xd819f7 = 10000) => _0x441a9c.db.waitForCondition(_0x29d37, () => true, _0xd819f7),
          transaction: (_0x3911e5, ..._0x3a26b2) => _0x441a9c.db.get().runInTransaction(_0x4d72d9 => _0x3911e5(_0x441a9c.factory(_0x4d72d9), _0x4d72d9), ..._0x3a26b2)
        },
        uploadMedia: async _0x2aff56 => {
          const {
              startUpload: _0x1a4515
            } = _0x441a9c.module("MWPComposerMediaUploadUtil"),
            {
              createOfflineThreadingID: _0x3b6ba1
            } = _0x441a9c.module("OfflineThreadingId"),
            _0x2fa9d9 = _0x3b6ba1(),
            _0x23f80d = new File([_0x2aff56.blob], _0x2fa9d9 + ".jpg", {
              type: "image/jpeg"
            });
          return new globalThis.Promise((_0x3ecd9d, _0x4d7126) => {
            _0x1a4515(function () {}, function () {}, function (_0x45e166, _0xdfa5dd) {
              _0x3ecd9d({
                offlineId: _0x45e166,
                fbId: _0xdfa5dd
              });
            }, function () {
              _0x4d7126(arguments);
            }, undefined, [_0x23f80d], [_0x2fa9d9], undefined, undefined, undefined, undefined, undefined);
          });
        },
        updateTable: async (_0x88ac23, _0x57b667) => await _0x441a9c.db.transaction(_0x281fdd => _0x281fdd.db.table(_0x88ac23).put(_0x57b667)),
        factory: _0x5a7c5a => _0x441a9c.module("LSFactory")(_0x5a7c5a),
        lsServerTime: () => _0x441a9c.lsInt64().fromFloat(_0x441a9c.serverTimeMs()),
        lsInt64: () => {
          const {
              assert$: _0x121b51
            } = _0x442618("mls64"),
            _0x2ec48b = _0x441a9c.module("I64"),
            _0x540d21 = _0x441a9c.module("LSInt64Lite");
          return {
            zero: _0x2ec48b.zero,
            min: _0x2ec48b.min_int,
            max: _0x2ec48b.max_int,
            isZero: _0x419169 => "0" === _0x540d21.to_string(_0x419169),
            fromArray: _0x12a6ce => _0x540d21.cast(_0x12a6ce),
            fromFloat: _0x4f2e9d => _0x540d21.of_float(_0x4f2e9d),
            fromI32: _0x195fd4 => _0x540d21.of_int32(_0x195fd4),
            fromStr: _0x3b81c7 => _0x540d21.from_string(_0x3b81c7),
            coerce: _0x17cbef => globalThis.Array.isArray(_0x17cbef) ? _0x540d21.cast(_0x17cbef) : "number" == typeof _0x17cbef ? _0x540d21.of_int32(_0x17cbef) : "string" == typeof _0x17cbef ? _0x540d21.from_string(_0x17cbef) : void _0x121b51(1, false, '', {
              sentry: false,
              extra: {
                value: _0x17cbef
              }
            }, true),
            ["coerceNonZero"](_0x3ab566) {
              const _0x2975b8 = this.coerce(_0x3ab566);
              return this.isZero(_0x2975b8) && _0x121b51(2, false, '', {
                sentry: false,
                extra: {
                  value: _0x3ab566
                }
              }, true), _0x2975b8;
            },
            toI32: _0x5a5fb0 => parseInt(_0x540d21.to_string(_0x5a5fb0)),
            toStr: _0x44bb04 => _0x540d21.to_string(_0x44bb04),
            toFloat: _0x1ef5bd => _0x540d21.to_float(_0x1ef5bd),
            minus: (_0xbbc2c1, _0x41afe8) => _0x540d21.sub(_0xbbc2c1, _0x41afe8),
            equals: (_0x787ae8, _0x18921e) => _0x540d21.eq(_0x787ae8, _0x18921e),
            gt: (_0x1f42dc, _0x56694f) => _0x540d21.gt(_0x1f42dc, _0x56694f),
            ge: (_0x429814, _0x3bd586) => _0x540d21.ge(_0x429814, _0x3bd586),
            lt: (_0x5ba159, _0x5b3296) => _0x540d21.lt(_0x5ba159, _0x5b3296),
            le: (_0x18596b, _0x4029f6) => _0x540d21.le(_0x18596b, _0x4029f6)
          };
        },
        ["getOpenPlatform"]() {
          const {
              assert$: _0x938e4a
            } = _0x442618("e298hrs"),
            _0x195c3d = _0x37d1fc.module("CurrentEnvironment");
          return _0x938e4a(1, _0x195c3d.instagramdotcom ? "instagram" : _0x195c3d.messengerdotcom || _0x195c3d.facebookdotcom ? "messenger" : null, '', {
            sentry: "veryRare",
            extra: {
              environment: _0x195c3d
            }
          }, true);
        }
      },
      _0x930a07 = {
        ..._0x441a9c,
        directApi: () => _0x441a9c.module("PolarisDirectAPI"),
        reducers: () => {
          const {
              assert$: _0x3db1fd
            } = _0x442618("qmjsym"),
            _0x2559c1 = _0x3db1fd(1, _0x930a07.module("polarisReducerRegistry").reducerRegistry, '', {
              sentry: "uncommon"
            }, true);
          return _0x3db1fd(2, globalThis.Object.values(_0x2559c1).find(_0x2889f7 => "object" == typeof _0x2889f7), '', {
            sentry: "uncommon"
          }, true);
        }
      },
      _0x425619 = async () => (await _0x18d5ed(() => !!_0x930a07.moduleFactory("ZenonCallInviteModelTypes")), _0x930a07.module("ZenonCallInviteModelTypes")),
      _0x3b91b4 = {
        _oldValue: null,
        callsState: async () => {
          const {
            CallInviteModelType: _0x182850
          } = await _0x425619();
          return -1 === _0x182850.ringing ? "disabled" : "enabled";
        },
        disableCalls: async () => {
          const {
            CallInviteModelType: _0x65f1cf
          } = await _0x425619();
          return -1 === _0x65f1cf.ringing || (_0x3b91b4._oldValue = _0x65f1cf.ringing, _0x65f1cf.ringing = -1), _0x3b91b4.callsState();
        },
        enableCalls: async () => {
          const {
            CallInviteModelType: _0xc67096
          } = await _0x425619();
          return null === _0x3b91b4._oldValue || (_0xc67096.ringing = _0x3b91b4._oldValue, _0x3b91b4._oldValue = null), _0x3b91b4.callsState();
        }
      },
      _0x2144b0 = globalThis.Object.freeze({
        MEDIA: 0,
        TEXT: 1,
        PTT: 4,
        XMA: 8,
        POST: 1032,
        STICKER: 4096
      }),
      _0x2010ba = globalThis.Object.freeze({
        NONE: 0,
        STICKER: 1,
        IMAGE: 2,
        ANIMATED_IMAGE: 3,
        VIDEO: 4,
        AUDIO: 5,
        FILE: 6,
        XMA: 7,
        EPHEMERAL_IMAGE: 8,
        EPHEMERAL_VIDEO: 9,
        SELFIE_STICKER: 10,
        SOUND_BITE: 12,
        CATALOG_ITEM: 13,
        POWER_UP: 14,
        THIRD_PARTY_STICKER: 15
      }),
      _0x48d763 = globalThis.Object.freeze({
        PERMANENT: 0,
        UNSEEN: 1,
        SEEN: 2,
        REPLAYED: 3,
        EXPIRED: 4
      }),
      _0x2c54d6 = (globalThis.Object.freeze({
        READ_ONLY: 1,
        GENERIC_READ_ONLY_BLOCK: 2,
        MESSAGE_SEND: 4,
        MESSENGER_ONLY_ACCOUNTS_READ_ONLY_BLOCK: 8,
        MESSAGE_SEND_PRIVATE: 16,
        MESSAGE_SEND_PUBLIC: 32,
        MESSAGE_SEND_FROM_PAGE: 64,
        COMMERCE_MESSAGE_SEND: 128,
        PAGE_MESSAGING: 256
      }), globalThis.Object.freeze({
        REACHABLE: 0,
        UNREACHABLE_USER_TYPE: 1,
        UNREACHABLE_ADULT_TYPE: 2,
        REACHABLE_INVITE_BANNER: 3,
        UNREACHABLE_INVITE_BLOCK: 4,
        UNREACHABLE_INTEROP_THIRD_PARTY_USER: 5,
        UNREACHABLE_INTEROP_USER_OPT_OUT: 6,
        UNREACHABLE_INTEROP_THIRD_PARTY_APP_NOT_SUPPORTED: 7,
        UNREACHABLE_INTEROP_USER_REMOVED_THIRD_PARTY_APP: 8,
        UNREACHABLE_NULL_INTEROP_USER: 9,
        UNREACHABLE_MR_LIMIT_BLOCK: 10,
        UNREACHABLE_RS_UPSELL_ELIGIBLE: 11
      })),
      _0x1d4a24 = (_0x2c54d6.REACHABLE, _0x2c54d6.REACHABLE_INVITE_BANNER, {
        getCurrentUser: async () => {
          const _0x18170c = _0x1d4a24.getCurrentUserIds();
          return await _0x1d4a24.getContact({
            userId: _0x18170c.id
          });
        },
        getCurrentUserIds: () => {
          const {
              assert$: _0xa2f701
            } = _0x442618("axivui"),
            _0x298e21 = _0x441a9c.module("CurrentUser");
          return {
            id: _0x441a9c.lsInt64().fromStr(_0xa2f701(1, _0x298e21.getPossiblyNonFacebookUserID(), '', {
              sentry: "rare"
            }, true)),
            eimu: _0x441a9c.lsInt64().fromStr(_0xa2f701(2, _0x298e21.getEIMU(), '', {
              sentry: "rare"
            }, true))
          };
        },
        getContacts: async () => {
          var _0xf4a4c1;
          return null === (_0xf4a4c1 = await _0x441a9c.db.entries("contacts")) || undefined === _0xf4a4c1 ? undefined : _0xf4a4c1.map(_0x5bb2ed => {
            const _0x52bab3 = _0x5bb2ed[1];
            return _0x52bab3.idStr = _0x441a9c.lsInt64().toStr(_0x52bab3.id), _0x52bab3;
          });
        },
        getContact: async _0x1e16b2 => {
          const _0x30cddf = await _0x441a9c.db.table("contacts");
          return await (null == _0x30cddf ? undefined : _0x30cddf.get(_0x1e16b2.userId));
        },
        getFeatureLimits: async () => {
          const _0x49c658 = await _0x441a9c.db.entries("feature_limits"),
            _0x37d6f8 = _0x441a9c.lsServerTime();
          return null == _0x49c658 ? undefined : _0x49c658.filter(([, _0x466bd5]) => (null == _0x466bd5 ? undefined : _0x466bd5.expirationTimestampSeconds) && _0x441a9c.lsInt64().gt(_0x466bd5.expirationTimestampSeconds, _0x37d6f8)).reduce((_0x1490f8, [_0x10c1e2, _0x2a3e80]) => (_0x1490f8[_0x441a9c.lsInt64().toI32(_0x10c1e2[0])] = _0x441a9c.lsInt64().toI32(_0x2a3e80.expirationTimestampSeconds), _0x1490f8), {});
        },
        _isContactUnreachable: async ({
          userId: _0x21ae86
        }) => {
          const {
            assert$: _0x32b900
          } = _0x442618("mwcur");
          _0x32b900(1, _0x5b0f73(_0x21ae86, "array"), '', {
            sentry: false
          }, true);
          const _0xbf5be1 = await _0x1d4a24.getContact({
              userId: _0x21ae86
            }),
            _0x2d63dc = _0x441a9c.module("LSContactUtils");
          return !!_0xbf5be1 && _0x2d63dc.isContactUnreachable(_0xbf5be1);
        }
      }),
      _0x3052ea = {
        sendTextMessage: async _0xfbd945 => {
          const {
            assert$: _0x40e5ae
          } = _0x442618("dvldnm");
          _0x40e5ae(1, globalThis.Array.isArray(_0xfbd945.threadId), '', {
            sentry: false
          }, true), _0x40e5ae(2, "string" == typeof _0xfbd945.message, '', {
            sentry: false
          }, true);
          const _0x296991 = _0x441a9c.module("LSOptimisticSendMessageV2StoredProcedure"),
            _0xf55034 = _0x441a9c.module("LSThreadAttributionTypeUtil"),
            _0x1a51c2 = _0x441a9c.module("LSShape"),
            _0x5c8a87 = _0x441a9c.module("LSMailboxType"),
            _0x33566b = _0x441a9c.module("MessagingThreadType"),
            _0x5d14f6 = _0x1d4a24.getCurrentUserIds(),
            _0x58a658 = 0 != _0x441a9c.lsInt64().toI32(_0x5d14f6.eimu) ? _0x5d14f6.eimu : _0x5d14f6.id,
            _0x590630 = _0x441a9c.lsInt64().fromArray(_0xfbd945.threadId),
            _0x34f225 = _0x441a9c.lsInt64().fromI32(_0x5c8a87.MESSENGER),
            _0x2a4f84 = _0x441a9c.lsInt64().fromI32(_0x33566b.ONE_TO_ONE),
            _0x244848 = {
              mark_read: true,
              source: _0xf55034.getSourceWithoutReset(_0x441a9c.lsInt64().fromArray(_0xfbd945.threadId), "inboxInThread"),
              ...(_0xfbd945.isFirstMsg ? {
                is_first_msg: true
              } : {})
            };
          return _0x441a9c.db.transaction(_0x6895c7 => _0x296991(_0x6895c7, {
            threadKey: _0x590630,
            mailboxType: _0x34f225,
            threadType: _0x2a4f84,
            senderId: _0x58a658,
            text: _0xfbd945.message,
            snippet: undefined,
            extraSendMessageParams: _0x1a51c2.ofRecord(_0x244848)
          }));
        },
        sendMedia: async _0x2b7831 => {
          const {
            assert$: _0x4d9b47
          } = _0x442618("spiyyj");
          _0x4d9b47(1, globalThis.Array.isArray(_0x2b7831.threadId), '', {
            sentry: false
          }, true), _0x4d9b47(2, _0x2b7831.blob instanceof Blob, '', {
            sentry: false
          }, true), _0x4d9b47(3, _0x2b7831.blobExtension, '', {
            sentry: false
          }, true);
          const _0x322650 = "instagram" === _0x441a9c.getOpenPlatform() ? await _0x441a9c.loadModule("MAWForwardMessageFromSecureThread.react", "IGDMessageRowActions.react") : _0x441a9c.module("MAWForwardMessageFromSecureThread.react"),
            _0xac3ee6 = _0x441a9c.module("LSMessagingThreadAttributionType"),
            _0x416467 = _0x441a9c.module("OfflineThreadingId"),
            _0x3e7053 = _0x441a9c.module("MessagingAttachmentType"),
            _0x3876f9 = await _0x441a9c.db.get(),
            _0x283bea = _0x1d4a24.getCurrentUserIds().eimu,
            _0x3f9e78 = _0x416467.createOfflineThreadingID(),
            _0x1b6164 = _0x2b7831.blob.type,
            _0x21430e = _0x3f9e78 + "." + _0x2b7831.blobExtension,
            _0x398447 = _0x4d9b47(4, _0x1b6164.startsWith("audio") ? _0x3e7053.AUDIO : _0x1b6164.startsWith("video") ? _0x3e7053.VIDEO : _0x1b6164.startsWith("image") ? _0x3e7053.IMAGE : null, '', {
              sentry: false
            }, true),
            _0x3bd566 = _0x398447 === _0x3e7053.IMAGE ? await _0x5dc537(_0x2b7831.blob, {
              compress: true,
              width: 1080
            }) : _0x2b7831.blob,
            _0x3ca022 = new File([_0x3bd566], _0x21430e, {
              type: _0x3bd566.type
            });
          return await _0x441a9c.db.transaction((_0x42d5b5, _0x44efb1) => _0x322650.uploadAndSendMediaToOpenThread(_0x3876f9, {
            attachment_type: _0x441a9c.lsInt64().fromI32(_0x398447),
            attachment_fbid: _0x3f9e78,
            offline_attachment_id: _0x3f9e78,
            thread_key: _0x2b7831.threadId
          }, _0x3ca022, _0x441a9c.lsInt64().fromI32(1), _0x2b7831.threadId, undefined, _0x283bea, _0x44efb1, _0xac3ee6.MESSENGER_INBOX_IN_THREAD));
        },
        getMessages: async _0x5a6cdb => {
          const {
            assert$: _0x52b575
          } = _0x442618("eppqsa");
          _0x52b575(1, globalThis.Array.isArray(_0x5a6cdb.threadId), '', {
            sentry: false
          }, true);
          const _0x10dfb0 = _0x441a9c.lsInt64().fromArray(_0x5a6cdb.threadId);
          return (await _0x441a9c.db.entries("messages")).filter(_0x39f5b0 => {
            var _0x261d61;
            return _0x441a9c.lsInt64().equals(null === (_0x261d61 = _0x39f5b0[1]) || undefined === _0x261d61 ? undefined : _0x261d61.threadKey, _0x10dfb0);
          }).sort((_0x3a9d1e, _0x15ce7d) => {
            var _0x4b7c00, _0x3449ad;
            return _0x441a9c.lsInt64().minus(null === (_0x4b7c00 = _0x3a9d1e[1]) || undefined === _0x4b7c00 ? undefined : _0x4b7c00.timestampMs, null === (_0x3449ad = _0x15ce7d[1]) || undefined === _0x3449ad ? undefined : _0x3449ad.timestampMs);
          }).map(_0x29bfaf => ({
            ..._0x29bfaf[1],
            timestamp: _0x441a9c.lsInt64().toI32(_0x29bfaf[1].timestampMs) / 1000,
            key: _0x29bfaf[0]
          }));
        },
        getMessage: async _0x17f77b => {
          var _0x15a206;
          return null === (_0x15a206 = (await _0x441a9c.db.entries("messages")).find(_0x66369b => _0x66369b[1].offlineThreadingId === _0x17f77b.offlineThreadingId)) || undefined === _0x15a206 ? undefined : _0x15a206[1];
        },
        paginateMessages: async _0x52d6c4 => {
          const {
              throw$: _0x5c5e3e
            } = _0x442618("asiuhfdq"),
            _0x423bae = await _0x441a9c.db.entries("messages_ranges_v2__generated"),
            _0x25676e = _0x441a9c.lsInt64().fromArray(_0x52d6c4.threadId),
            _0x5178f3 = _0x423bae.find(_0x42ada3 => _0x441a9c.lsInt64().equals(_0x42ada3[1].threadKey, _0x25676e)),
            _0x183c20 = await _0x3052ea.getMessages(_0x52d6c4);
          if (_0x5178f3 || _0x5c5e3e(1, '', {
            sentry: "veryRare"
          }, true), !_0x5178f3[1].hasMoreBefore) return _0x183c20;
          const _0x1f8374 = _0x441a9c.module("LSIssueMessagesRangeQueryStoredProcedure");
          return _0x441a9c.db.transaction(_0x4f241a => _0x1f8374(_0x4f241a, {
            direction: _0x441a9c.lsInt64().fromI32(0),
            referenceTimestampMs: _0x183c20[0].timestampMs,
            threadKey: _0x441a9c.lsInt64().fromArray(_0x52d6c4.threadId)
          })), _0x441a9c.db.waitForChanges("messages", 30000).then(() => _0x3052ea.getMessages(_0x52d6c4)).then(_0x4ae513 => _0x4ae513)["catch"](() => _0x183c20);
        },
        _processMessageIr: async _0xfcea65 => {
          var _0x1587d9;
          const _0x4bb83c = _0xfcea65.message,
            _0xf6d35d = _0xfcea65.contacts || (await _0x441a9c.db.table("contacts")),
            _0x3e71ef = _0xfcea65.contactInfos || (await _0x441a9c.db.table("ig_contact_info")),
            _0x49e139 = _0xfcea65.attachmentEntries || (await _0x441a9c.db.entries("attachments")),
            _0x474053 = _0xfcea65.attachmentItems || (await _0x441a9c.db.entries("attachment_items")),
            _0x56a7bd = _0xfcea65.attachmentCtas || (await _0x441a9c.db.table("attachment_ctas")),
            _0x3d181a = _0xfcea65.currentUser || (await _0x1d4a24.getCurrentUser()),
            _0x2bd3c6 = _0x4bb83c.messageId,
            _0x2836e6 = null === (_0x1587d9 = _0x49e139.find(_0x3c39b9 => _0x3c39b9[1].messageId === _0x2bd3c6)) || undefined === _0x1587d9 ? undefined : _0x1587d9[1],
            _0x5cac53 = _0x2836e6 ? _0x474053.filter(_0x52ef5b => _0x52ef5b[1].messageId === _0x2bd3c6).map(_0x204e79 => _0x204e79[1]) : null,
            _0x15324e = _0x2836e6 ? await _0x56a7bd.get(_0x2836e6.defaultCtaId) : null,
            _0x2743fd = (await _0x3b090c.getRecipient({
              threadId: _0x4bb83c.threadKey
            })) || {},
            _0x184848 = (await _0xf6d35d.get(_0x4bb83c.senderId)) || {},
            _0x4ed0aa = (await _0x3e71ef.get(_0x4bb83c.senderId)) || {};
          return {
            id: _0x2bd3c6,
            messageAuthor: {
              ..._0x184848,
              ..._0x4ed0aa
            },
            message: _0x4bb83c,
            conversationUser: _0x2743fd,
            attachment: _0x2836e6,
            attachmentCta: _0x15324e,
            attachmentItems: _0x5cac53,
            currentUser: _0x3d181a
          };
        },
        _processMessage: async _0x1ccea8 => {
          var _0x5672ba, _0x2755ca, _0x446645, _0x30c545, _0x4441ba, _0x2d9444, _0x157cc1, _0x3e470b, _0x2fcbf1, _0x152832, _0x241f9a;
          const _0x5f085e = _0x1ccea8.ir.message,
            _0x55ae9c = _0x1ccea8.ir.attachment,
            _0x23faa9 = _0x1ccea8.ir.attachmentCta,
            _0x3086d9 = (_0x1ccea8.ir.attachmentItems, (null == _0x23faa9 ? undefined : _0x23faa9.actionUrl) ? decodeURIComponent(_0x23faa9.actionUrl) : null),
            _0x5156e4 = (null == _0x23faa9 ? undefined : _0x23faa9.nativeUrl) ? decodeURIComponent(_0x23faa9.nativeUrl) : null,
            _0x55be77 = _0x1ccea8.ir.conversationUser,
            _0x81d8dc = _0x55be77.secondaryName,
            _0x7f2603 = _0x55be77.name,
            _0xb8a593 = _0x1ccea8.ir.currentUser,
            _0x4ad91f = null == _0xb8a593 ? undefined : _0xb8a593.username,
            _0x5d7c1a = null == _0xb8a593 ? undefined : _0xb8a593.full_name,
            _0x24d82a = _0x1ccea8.ir.messageAuthor,
            _0x58062b = _0x24d82a ? _0x24d82a.secondaryName : null,
            _0x573b11 = _0x5f085e.messageId;
          let _0x32b741 = _0x5f085e.text;
          _0x1ccea8.transformText && (_0x32b741 = _0x1ccea8.transformText(_0x32b741));
          const _0x2d3713 = _0x441a9c.lsInt64().toI32(_0x5f085e.timestampMs) / 1000,
            _0x5410df = !!_0x32b741,
            _0x1365e4 = _0x441a9c.lsInt64().equals(_0x5f085e.senderId, _0x55be77.id),
            _0x561eb3 = "xma_ig_mention_add_to_story" == (null == _0x23faa9 ? undefined : _0x23faa9.type_),
            _0x5c3b6b = !!_0x5f085e.isAdminMessage,
            _0x2d78e3 = _0x441a9c.lsInt64().toI32(_0x5f085e.displayedContentTypes),
            _0x53a5a7 = _0x55ae9c ? _0x441a9c.lsInt64().toI32(null == _0x55ae9c ? undefined : _0x55ae9c.attachmentType) : null,
            _0x1fc6a3 = (null == _0x55ae9c ? undefined : _0x55ae9c.ephemeralMediaState) ? _0x441a9c.lsInt64().toI32(_0x55ae9c.ephemeralMediaState) : null,
            _0x4f735e = null == _0x55ae9c ? undefined : _0x55ae9c.defaultCtaType,
            _0xef010d = !!_0x5f085e.isForwarded,
            _0x3edf5a = !!_0x55ae9c && _0x53a5a7 === _0x2010ba.XMA,
            _0xf3baa4 = !(null == _0x55ae9c ? undefined : _0x55ae9c.defaultCtaType),
            _0x1fa949 = "admin_msg_web_url" === _0x5f085e.adminMsgCtaType;
          let _0x1ed78c = null,
            _0x1bcdf6 = null,
            _0x2d4124 = null,
            _0xace63d = null;
          if (null == _0x55ae9c ? undefined : _0x55ae9c.xmaDataclass) try {
            const _0x3c38b6 = JSON.parse(_0x55ae9c.xmaDataclass);
            _0x1ed78c = (null === (_0x2755ca = null === (_0x5672ba = null == _0x3c38b6 ? undefined : _0x3c38b6.content) || undefined === _0x5672ba ? undefined : _0x5672ba.custom_template_data) || undefined === _0x2755ca ? undefined : _0x2755ca.__typename) || null, _0x1bcdf6 = (null == _0x3c38b6 ? undefined : _0x3c38b6.target_type) || null, _0x2d4124 = (null === (_0x30c545 = null === (_0x446645 = null == _0x3c38b6 ? undefined : _0x3c38b6.content) || undefined === _0x446645 ? undefined : _0x446645.custom_template_data) || undefined === _0x30c545 ? undefined : _0x30c545.call_state) || null, _0xace63d = (null === (_0x2d9444 = null === (_0x4441ba = null == _0x3c38b6 ? undefined : _0x3c38b6.content) || undefined === _0x4441ba ? undefined : _0x4441ba.custom_template_data) || undefined === _0x2d9444 ? undefined : _0x2d9444.call_type) || null;
          } catch (_0x285293) {}
          const _0x3b55a6 = (null == _0x23faa9 ? undefined : _0x23faa9.nativeUrl) || (null == _0x23faa9 ? undefined : _0x23faa9.actionUrl) || (null == _0x55ae9c ? undefined : _0x55ae9c.actionUrl) || '',
            _0x221f37 = /instagram\.com\/[a-zA-Z0-9._]+(?:\?|$)/.test(_0x3b55a6) && !/instagram\.com\/(reel|p|stories|tv|reels_share)\//.test(_0x3b55a6),
            _0x79c60b = !(!/facebook\.com\/share\//.test(_0x3b55a6) || _0x1bcdf6),
            _0x425920 = _0x221f37 || _0x79c60b,
            _0x2c6e8e = _0x425920 && ((null === (_0x157cc1 = _0x3b55a6.match(/instagram\.com\/([a-zA-Z0-9._]+)/)) || undefined === _0x157cc1 ? undefined : _0x157cc1[1]) || (null == _0x55ae9c ? undefined : _0x55ae9c.headerTitle) || (null == _0x55ae9c ? undefined : _0x55ae9c.titleText)) || null,
            _0x3c689c = _0x2d78e3 === _0x2144b0.PTT || _0x53a5a7 === _0x2010ba.AUDIO,
            _0x3d5fcb = _0x53a5a7 === _0x2010ba.IMAGE || _0x53a5a7 === _0x2010ba.EPHEMERAL_IMAGE,
            _0xb20c9a = _0x53a5a7 === _0x2010ba.VIDEO || _0x53a5a7 === _0x2010ba.EPHEMERAL_VIDEO,
            _0x3d5952 = _0x53a5a7 === _0x2010ba.EPHEMERAL_IMAGE || _0x53a5a7 === _0x2010ba.EPHEMERAL_VIDEO,
            _0x153011 = _0x1fc6a3 === _0x48d763.UNSEEN,
            _0x158894 = _0x53a5a7 === _0x2010ba.ANIMATED_IMAGE || !!(null == _0x55ae9c ? undefined : _0x55ae9c.shouldAutoplayVideo),
            _0x52002d = _0x53a5a7 === _0x2010ba.STICKER || _0x2d78e3 === _0x2144b0.STICKER || _0x3edf5a && (_0xf3baa4 || "xma_open_native" === (null == _0x55ae9c ? undefined : _0x55ae9c.defaultCtaType)) && ("image/png" === (null == _0x55ae9c ? undefined : _0x55ae9c.previewUrlMimeType) || "image/gif" === (null == _0x55ae9c ? undefined : _0x55ae9c.playableUrlMimeType)),
            _0x4dcf4f = _0x52002d && !(!(null === (_0x3e470b = null == _0x55ae9c ? undefined : _0x55ae9c.accessibilitySummaryText) || undefined === _0x3e470b ? undefined : _0x3e470b.toLowerCase().includes("avatar")) && !(null === (_0x2fcbf1 = null == _0x55ae9c ? undefined : _0x55ae9c.titleText) || undefined === _0x2fcbf1 ? undefined : _0x2fcbf1.toLowerCase().includes("avatar"))),
            _0x20d7fb = _0x53a5a7 === _0x2010ba.FILE,
            _0x25437c = !!(null == _0x3086d9 ? undefined : _0x3086d9.includes("stories/")) || "xma_montage_share" === (null == _0x23faa9 ? undefined : _0x23faa9.type_),
            _0x34ab74 = !!(!_0x1365e4 && (_0x3d5fcb || _0xb20c9a || _0x3c689c) && !_0xef010d || _0x4ad91f && (null == _0x55ae9c ? undefined : _0x55ae9c.headerTitle) === _0x4ad91f || _0x5f085e.replySnippet && _0x4ad91f && _0x5f085e.replySnippet.includes(_0x4ad91f) || _0x5f085e.replySnippet && _0x5d7c1a && _0x5f085e.replySnippet.includes(_0x5d7c1a)),
            _0x3be2ab = !!(_0x1365e4 && (_0x3d5fcb || _0xb20c9a || _0x3c689c) && !_0xef010d || _0x58062b && (null == _0x55ae9c ? undefined : _0x55ae9c.headerTitle) === _0x81d8dc || _0x5f085e.replySnippet && _0x81d8dc && _0x5f085e.replySnippet.includes(_0x81d8dc) || _0x5f085e.replySnippet && _0x7f2603 && _0x5f085e.replySnippet.includes(_0x7f2603)),
            _0x24b52f = _0x25437c ? !!_0x5f085e.replySourceTypeV2 && (_0x1365e4 ? _0x34ab74 : _0x3be2ab) : !!_0x5f085e.replySourceId,
            _0xbe3518 = !!((null == _0x5156e4 ? undefined : _0x5156e4.includes("reels_share")) || (null == _0x3086d9 ? undefined : _0x3086d9.includes("instagram.com/tv")) || (null == _0x3086d9 ? undefined : _0x3086d9.includes("instagram.com/reel/")) || (null == _0x3086d9 ? undefined : _0x3086d9.includes("facebook.com/share/v/")) || (null == _0x3086d9 ? undefined : _0x3086d9.includes("facebook.com/share/r/"))),
            _0x141489 = !!(null == _0x3086d9 ? undefined : _0x3086d9.includes("commerce/products")),
            _0x346d4c = !!(_0x3edf5a && !_0xbe3518 && "igd_web_post_share" === _0x4f735e || (null == _0x3086d9 ? undefined : _0x3086d9.includes("instagram.com/p/")) || (null == _0x3086d9 ? undefined : _0x3086d9.includes("facebook.com/share/p/")) || "FB_FEED_SHARE" === _0x1bcdf6),
            _0x4c5c5c = !!((null == _0x4f735e ? undefined : _0x4f735e.toLowerCase().includes("missed")) || "XMSGXmaCallingTemplateData" === _0x1ed78c && "MISSED" === _0x2d4124),
            _0x368925 = _0x4c5c5c && ("VIDEO" === _0xace63d || (null == _0x4f735e ? undefined : _0x4f735e.includes("video"))),
            _0x48bc6e = _0x4c5c5c && ("AUDIO" === _0xace63d || (null == _0x4f735e ? undefined : _0x4f735e.includes("audio"))),
            _0x223c95 = _0x3086d9 || _0x5156e4 || (null == _0x55ae9c ? undefined : _0x55ae9c.actionUrl) || '',
            _0x1a6418 = "XMSGXmaLocationTemplateData" === _0x1ed78c || _0x223c95.includes("maps.app.goo.gl") || _0x223c95.includes("maps.google.com") || _0x223c95.includes("maps.apple") || _0x223c95.startsWith("messenger://location_share"),
            _0x4ef60d = !!(null === (_0x152832 = null == _0x23faa9 ? undefined : _0x23faa9.actionUrl) || undefined === _0x152832 ? undefined : _0x152832.includes("facebook.com/audio")),
            _0xf1d2ed = !(!_0x25437c || !_0x34ab74 || _0x5410df),
            _0x770bc1 = _0x55ae9c && (_0x55ae9c.headerTitle || _0x55ae9c.offlineAttachmentId || _0x55ae9c.defaultCtaType || _0x55ae9c.playableUrl || _0x55ae9c.previewUrl || _0x55ae9c.sourceText || _0x55ae9c.targetId || _0x55ae9c.verifiedType || _0x55ae9c.imageUrl || _0x55ae9c.actionUrl || _0x55ae9c.accessibilitySummaryText || _0x55ae9c.titleText);
          return {
            msg: _0x32b741,
            id: _0x573b11,
            timestamp: _0x2d3713,
            isIncoming: _0x1365e4,
            isReply: _0x24b52f,
            isForwarded: _0xef010d,
            isStoryMention: _0x561eb3,
            isMusicAttached: _0x4ef60d,
            isStoryAttached: _0x25437c,
            isPostAttached: _0x346d4c,
            isReelsAttached: _0xbe3518,
            isAdminMessage: _0x5c3b6b,
            isProfileAttached: _0x425920,
            isPhotoAttached: _0x3d5fcb,
            isVideoAttached: _0xb20c9a,
            isAudioAttached: _0x3c689c,
            isEphemeral: _0x3d5952,
            isUnopenedEphemeral: _0x153011,
            isAdReply: _0x1fa949,
            isMissedCall: _0x4c5c5c,
            isMissedVideoCall: _0x368925,
            isMissedAudioCall: _0x48bc6e,
            isLocationShare: _0x1a6418,
            isShoppingItemAttached: _0x141489,
            isFileAttached: _0x20d7fb,
            isSticker: _0x52002d,
            isGIF: _0x158894,
            isAvatar: _0x4dcf4f,
            isBitmoji: _0xf1d2ed,
            isInvalid: !(_0x5410df || _0x770bc1 || _0x52002d || _0x158894 || _0x4dcf4f || _0x3d5fcb || _0xb20c9a || _0x3c689c || _0x20d7fb || _0x4c5c5c || _0x1a6418 || _0xbe3518 || _0x425920 || _0x346d4c),
            attachmentAuthorUsername: _0x34ab74 ? _0x4ad91f : _0x3be2ab ? _0x81d8dc : _0x425920 && _0x2c6e8e ? _0x2c6e8e : null !== (_0x241f9a = null == _0x55ae9c ? undefined : _0x55ae9c.headerTitle) && undefined !== _0x241f9a && _0x241f9a,
            isAttachmentOurs: _0x34ab74,
            isAttachmentTheirs: _0x3be2ab
          };
        },
        processMessages: async _0x4ba8da => {
          const {
            assert$: _0x422c54
          } = _0x442618("zqzcpn");
          _0x422c54(1, globalThis.Array.isArray(_0x4ba8da.threadId), '', {
            sentry: false
          }, true);
          const _0x19b28d = await _0x3052ea.getMessages(_0x4ba8da),
            _0x2554d9 = await _0x441a9c.db.entries("attachments"),
            _0x78a37a = await _0x441a9c.db.entries("attachment_items"),
            _0x1498a9 = await _0x441a9c.db.table("attachment_ctas"),
            _0x2e85b6 = await _0x441a9c.db.table("contacts"),
            _0x307e1a = await _0x441a9c.db.table("ig_contact_info"),
            _0x457627 = await _0x1d4a24.getCurrentUser();
          return globalThis.Promise.all(_0x19b28d.map(async _0xa4ee7d => {
            const _0x1d2c84 = await _0x3052ea._processMessageIr({
              message: _0xa4ee7d,
              currentUser: _0x457627,
              contacts: _0x2e85b6,
              contactInfos: _0x307e1a,
              attachmentCtas: _0x1498a9,
              attachmentEntries: _0x2554d9,
              attachmentItems: _0x78a37a
            });
            return function _0x5c2b6d(_0x3fc647) {
              var _0x1cc06e;
              _0x3fc647.ogMsg = _0x3fc647.msg;
              let _0x382678 = null !== (_0x1cc06e = _0x3fc647.msg) && undefined !== _0x1cc06e ? _0x1cc06e : '';
              _0x3fc647.isGIF ? _0x382678 = "[GIF]" : _0x3fc647.isAvatar ? _0x382678 = "[avatar-sticker]" : _0x3fc647.isSticker ? _0x382678 = "[sticker]" : _0x3fc647.isPhotoAttached ? _0x382678 = "[photo] " + _0x382678 : _0x3fc647.isVideoAttached ? _0x382678 = "[video] " + _0x382678 : _0x3fc647.isAudioAttached ? _0x382678 = "[audio-message] " + _0x382678 : _0x3fc647.isFileAttached ? _0x382678 = "[file] " + _0x382678 : _0x3fc647.isShoppingItemAttached ? _0x382678 = "[shopping-item] " + _0x382678 : _0x3fc647.isProfileAttached ? _0x382678 = _0x3fc647.attachmentAuthorUsername ? "[attached-profile-with-username-" + _0x3fc647.attachmentAuthorUsername + "] " + _0x382678 : "[attached-profile] " + _0x382678 : _0x3fc647.isMissedVideoCall ? _0x382678 = "[missed-video-call]" : _0x3fc647.isMissedAudioCall ? _0x382678 = "[missed-audio-call]" : _0x3fc647.isMissedCall ? _0x382678 = "[missed-call]" : _0x3fc647.isLocationShare ? _0x382678 = "[shared-location]" : _0x3fc647.isAdminMessage ? _0x382678 = "[status-message] " + _0x382678 : _0x3fc647.isMusicAttached ? _0x382678 = "[attached-song] " + _0x382678 : _0x3fc647.isReelsAttached ? _0x382678 = _0x3fc647.isAttachmentTheirs ? "[replied-to-his-video-reel] " + _0x382678 : _0x3fc647.isAttachmentOurs ? "[replied-to-your-video-reel] " + _0x382678 : _0x3fc647.attachmentAuthorUsername ? "[attached-video-reel-from-username-" + _0x3fc647.attachmentAuthorUsername + "] " + _0x382678 : "[attached-video-reel] " + _0x382678 : _0x3fc647.isPostAttached ? _0x382678 = _0x3fc647.isAttachmentTheirs ? "[replied-to-his-post] " + _0x382678 : _0x3fc647.isAttachmentOurs ? "[replied-to-your-post] " + _0x382678 : _0x3fc647.attachmentAuthorUsername ? "[attached-post-from-username-" + _0x3fc647.attachmentAuthorUsername + "] " + _0x382678 : "[attached-post] " + _0x382678 : _0x3fc647.isStoryMention ? _0x382678 = "[mentioned-you-in-their-story] " + _0x382678 : _0x3fc647.isStoryAttached ? _0x382678 = _0x3fc647.isAttachmentTheirs ? "[replied-to-his-story] " + (_0x382678 || "nice!") : _0x3fc647.isAttachmentOurs ? "[replied-to-your-story] " + (_0x382678 || "nice!") : _0x3fc647.attachmentAuthorUsername ? "[attached-story-from-username-" + _0x3fc647.attachmentAuthorUsername + "] " + _0x382678 : "[attached-story] " + _0x382678 : _0x3fc647.msg ? _0x382678 = _0x3fc647.msg : _0x3fc647.isInvalid && (_0x382678 = "[message-no-longer-available]");
              return _0x382678 = _0x382678.trim(), _0x3fc647.isReply && (_0x382678 = "[replied] " + _0x382678), _0x382678 = _0x382678.trim(), _0x3fc647.msg = _0x382678, _0x3fc647;
            }(_0x5a8493(await _0x3052ea._processMessage({
              ir: _0x1d2c84,
              transformText: _0x4ba8da.transformText
            })));
          }));
        },
        _processOpenMessages: async (_0x2d36b6 = {}) => {
          const _0x3837f6 = await _0x3b090c.getOpenThreadId();
          return (await _0x3052ea.processMessages({
            threadId: _0x3837f6,
            transformText: _0x2d36b6.transformText
          })).map(_0x10faeb => globalThis.Object.fromEntries(globalThis.Object.entries(_0x10faeb).filter(([_0x43adc4, _0x5c3926]) => !!_0x5c3926)));
        }
      },
      _0x2902ef = {
        inbox: [0, 0],
        pending: [-1, 4294967295],
        other: [-1, 4294967294],
        spam: [-1, 4294967293],
        hidden: [-1, 4294967292],
        archived: [-1, 4294967286],
        restricted: [-1, 4294967281],
        e2ee_cutover: [-1, 4294967279]
      },
      _0x3bbf44 = "threads_ranges_v2__generated",
      _0x469417 = async _0x39687b => {
        var _0x387903, _0x1a9fc2;
        const _0x5ba422 = _0x441a9c.lsInt64(),
          _0x215ddf = await _0x441a9c.module("loadMoreLSThreads"),
          _0x6a0120 = null !== (_0x387903 = _0x39687b.loadFrom) && undefined !== _0x387903 ? _0x387903 : "inbox",
          _0x42909a = null !== (_0x1a9fc2 = _0x39687b.timeout) && undefined !== _0x1a9fc2 ? _0x1a9fc2 : 60000,
          _0x4fb22b = async () => (await _0x441a9c.db.entries("threads")).map(_0x44f8ac => ({
            ..._0x44f8ac[1],
            lastActivityTimestamp: _0x441a9c.lsInt64().toI32(_0x44f8ac[1].lastActivityTimestampMs) / 1000,
            key: _0x44f8ac[0],
            idStr: _0x441a9c.lsInt64().toStr(_0x44f8ac[1].threadKey)
          })).filter(_0x516286 => _0x516286.folderName === _0x6a0120).sort((_0x59c816, _0xd5975a) => _0x59c816.lastActivityTimestamp - _0xd5975a.lastActivityTimestamp);
        if (_0x39687b.loadAll || _0x39687b.loadAtLeast) {
          const _0x372b1f = _0x5ba422.fromArray(_0x2902ef[_0x6a0120]),
            _0x308621 = async () => (await _0x441a9c.db.entries("threads_ranges_v2__generated")).find(([_0x5b1c70, _0x2b4093]) => _0x5ba422.equals(_0x2b4093.parentThreadKey, _0x372b1f));
          let _0x10ddd5 = await _0x308621();
          const _0xce3200 = async () => {
            var _0x285787, _0x217ca0;
            return _0x39687b.loadAll ? !_0x10ddd5 || (null === (_0x285787 = null == _0x10ddd5 ? undefined : _0x10ddd5[1]) || undefined === _0x285787 ? undefined : _0x285787.hasMoreBefore) : _0x39687b.loadAtLeast ? !_0x10ddd5 || (null === (_0x217ca0 = null == _0x10ddd5 ? undefined : _0x10ddd5[1]) || undefined === _0x217ca0 ? undefined : _0x217ca0.hasMoreBefore) && (await _0x4fb22b()).length < _0x39687b.loadAtLeast : undefined;
          };
          for (; await _0xce3200();) {
            await _0x441a9c.db.transaction(async (_0x40f22f, _0x25148e) => _0x215ddf(_0x25148e, _0x372b1f));
            const [, _0x248d19] = await _0x308621();
            _0x248d19.isLoadingBefore && (await _0x441a9c.db.waitForCondition("threads_ranges_v2__generated", async ([_0x56d3c0]) => {
              if (!_0x441a9c.lsInt64().equals(_0x56d3c0, _0x372b1f)) return false;
              const [, _0x3fb7c0] = await _0x308621();
              return !_0x3fb7c0.isLoadingBefore;
            }, _0x42909a)), _0x10ddd5 = await _0x308621(), (await _0xce3200()) && (await _0x231ec8(1000));
          }
        }
        return await _0x4fb22b();
      },
      _0x3b090c = {
        acceptThreadRequest: async _0x21494a => {
          const {
            assert$: _0x32d0b9
          } = _0x442618("ftupda");
          _0x32d0b9(1, globalThis.Array.isArray(_0x21494a.threadId), '', {
            sentry: false
          }, true);
          const _0x90ae53 = _0x441a9c.module("LSOptimisticAcceptMessageRequestStoredProcedure");
          return await _0x441a9c.db.transaction(_0x580daf => _0x90ae53(_0x580daf, {
            threadKey: _0x441a9c.lsInt64().fromArray(_0x21494a.threadId)
          }));
        },
        removeThreadRequest: async _0x22b28d => {
          const {
            assert$: _0x419044
          } = _0x442618("sfuvca");
          _0x419044(1, globalThis.Array.isArray(_0x22b28d.threadId), '', {
            sentry: false
          }, true);
          const _0x311f25 = _0x441a9c.module("LSOptimisticRemoveThreadStoredProcedure");
          return await _0x441a9c.db.transaction(_0xcf6fbe => _0x311f25(_0xcf6fbe, {
            threadKey: _0x441a9c.lsInt64().fromArray(_0x22b28d.threadId),
            removeType: 0
          }));
        },
        getOpenThreadId: () => {
          const _0x5e5a5e = globalThis.window.location.href.match(/\/t\/(\d+)/);
          return _0x5e5a5e ? _0x441a9c.lsInt64().coerceNonZero(_0x5e5a5e[1]) : null;
        },
        getInboxThreads: async (_0x43f49c = {}) => _0x469417({
          ..._0x43f49c,
          loadFrom: "inbox"
        }),
        getArchivedThreads: async (_0x41a927 = {}) => _0x469417({
          ..._0x41a927,
          loadFrom: "archived"
        }),
        getPendingThreads: async (_0x40ad9d = {}) => _0x469417({
          ..._0x40ad9d,
          loadFrom: "pending"
        }),
        getSpamThreads: async (_0x175e57 = {}) => _0x469417({
          ..._0x175e57,
          loadFrom: "spam"
        }),
        getOtherThreads: async (_0xa38ceb = {}) => _0x469417({
          ..._0xa38ceb,
          loadFrom: "other"
        }),
        getRestrictedThreads: async (_0x4d298b = {}) => _0x469417({
          ..._0x4d298b,
          loadFrom: "restricted"
        }),
        getThread: async _0x3894e1 => {
          const {
              assert$: _0x4e523e
            } = _0x442618("pyjhjj"),
            _0x50a920 = await _0x441a9c.db.table("threads"),
            _0x3e9a77 = _0x441a9c.lsInt64().fromArray(_0x3894e1.threadId);
          return {
            ..._0x4e523e(1, await _0x50a920.get(_0x3e9a77), '', {
              sentry: "rare"
            }, true),
            messages: _0x3894e1.loadMessages ? await _0x3052ea.getMessages({
              threadId: _0x3894e1.threadId
            }) : []
          };
        },
        getRecipient: async _0x3b7667 => {
          const {
            assert$: _0x40b84c
          } = _0x442618("tstqto");
          _0x40b84c(1, globalThis.Array.isArray(_0x3b7667.threadId), '', {
            sentry: false
          }, true);
          const {
              firstAsync: _0x5869dc,
              fromTableAscending: _0x166a36,
              mergeJoin: _0x317028
            } = _0x441a9c.module("ReQL"),
            _0x2e6af1 = await _0x441a9c.db.table("contacts"),
            _0x5d94ea = await _0x441a9c.db.table("participants");
          let _0x1ddd54 = await _0x1d4a24.getCurrentUserIds(),
            _0x3169dc = _0x441a9c.lsInt64().isZero(_0x1ddd54.eimu) ? _0x1ddd54.id : _0x1ddd54.eimu;
          const _0x5ea986 = await _0x5869dc(_0x317028(_0x166a36(_0x5d94ea).getKeyRange(_0x3b7667.threadId), _0x166a36(_0x2e6af1)).filter(([_0x21e57e, _0x273ef7]) => !_0x441a9c.lsInt64().equals(_0x273ef7.id, _0x3169dc)));
          _0x40b84c(2, globalThis.Array.isArray(_0x5ea986), '', {
            sentry: "rare",
            extra: {
              row: _0x5ea986,
              threadId: _0x3b7667.threadId,
              currentUserId: _0x3169dc
            }
          }, true);
          const [_0x2b809a, _0x5ce096] = _0x5ea986;
          return _0x40b84c(3, _0x2b809a, '', {
            sentry: "rare",
            extra: {
              threadId: _0x3b7667.threadId,
              currentUserId: _0x3169dc
            }
          }, true), _0x40b84c(4, _0x5ce096, '', {
            sentry: "rare",
            extra: {
              threadId: _0x3b7667.threadId,
              currentUserId: _0x3169dc
            }
          }, true), {
            ..._0x2b809a,
            ..._0x5ce096
          };
        },
        getLastReadTimestamp: async _0x4069cf => {
          const _0x11cad9 = await _0x3b090c.getRecipient({
            threadId: _0x4069cf.threadId
          })["catch"](() => null);
          return _0x11cad9 ? _0x441a9c.lsInt64().toI32(_0x11cad9.readActionTimestampMs) : null;
        },
        markThreadRead: async _0x3ab37b => {
          const {
            assert$: _0x2d0dc7
          } = _0x442618("adzzya");
          _0x2d0dc7(1, globalThis.Array.isArray(_0x3ab37b.threadId), '', {
            sentry: false
          }, true);
          const _0x2cc662 = _0x441a9c.module("LSOptimisticMarkThreadReadV2StoredProcedure"),
            _0x507ce2 = _0x441a9c.lsInt64().fromArray(_0x3ab37b.threadId);
          return await _0x441a9c.db.transaction(_0x2fa40b => _0x2cc662(_0x2fa40b, {
            threadKey: _0x507ce2,
            readWatermarkTimestampMs: _0x441a9c.lsServerTime()
          }));
        }
      },
      _0x5d6fe6 = {
        ..._0x3b090c,
        createThread: async _0x1450ca => {
          const {
            assert$: _0x1a1c7f
          } = _0x442618("dyjczo");
          _0x1a1c7f(1, "string" == typeof _0x1450ca.recipientId, '', {
            sentry: false
          }, true);
          const {
              createGroupThread: _0x26af2c
            } = _0x930a07.directApi(),
            _0x44d23d = await _0x26af2c([_0x1450ca.recipientId]),
            _0x2bc3d8 = null == _0x44d23d ? undefined : _0x44d23d.messaging_thread_key,
            _0x1a377a = _0x441a9c.lsInt64().fromStr(_0x2bc3d8);
          return {
            ..._0x44d23d,
            threadId: _0x1a377a,
            threadIdStr: _0x2bc3d8
          };
        }
      },
      _0xf8bfa2 = _0x2e7e16(0, {
        initializedRelayStore: false,
        typingState: {},
        currentUser: null
      }),
      _0x5375e1 = {
        ..._0x1d4a24,
        fetchFromUsername: async _0x38f158 => {
          var _0xda7dd1;
          const {
              assert$: _0x4b8b09
            } = _0x442618("nmjwge"),
            {
              getUserProfile: _0x1ee0cc
            } = _0x930a07.directApi(),
            _0x27558b = await _0x1ee0cc(_0x38f158.username);
          return _0x4b8b09(1, 200 === _0x27558b.statusCode, '', {
            sentry: "veryRare",
            networkResponse: _0x27558b
          }, true), null === (_0xda7dd1 = _0x27558b.data) || undefined === _0xda7dd1 ? undefined : _0xda7dd1.user;
        },
        getCurrentUser: () => {
          var _0xc7fed3;
          const {
              assert$: _0x446fd7
            } = _0x442618("yobfgk"),
            _0x4ba280 = _0xf8bfa2.get("currentUser");
          if (null == _0x4ba280 ? undefined : _0x4ba280.id) return _0x4ba280;
          const _0x11d722 = null === (_0xc7fed3 = _0x930a07.module("PolarisViewer")) || undefined === _0xc7fed3 ? undefined : _0xc7fed3.data;
          _0x446fd7(1, _0x11d722, '', {
            sentry: "veryRare"
          }, true);
          const _0x41831a = _0x5375e1.getCurrentUserIds();
          return _0x11d722.ids = _0x41831a, _0x11d722.idStr = _0x930a07.lsInt64().toStr(_0x41831a.eimu), _0xf8bfa2.set("currentUser", _0x11d722), _0x11d722;
        }
      },
      _0x103ba1 = {
        getFriends: async _0x2f6fdf => {
          var _0x503f42, _0x267c74;
          const {
            assert$: _0x359bfd
          } = _0x442618("adhhshv");
          _0x359bfd(1, _0x2f6fdf, '', {
            sentry: false
          }, true);
          const {
            type: _0x5ccd10 = "followers",
            cursor: _0x2327cc,
            userId: _0x5289f4 = null === (_0x503f42 = _0x5375e1.getCurrentUser()) || undefined === _0x503f42 ? undefined : _0x503f42.id
          } = _0x2f6fdf;
          _0x359bfd(2, "followers" === _0x5ccd10 || "following" === _0x5ccd10, '', {
            sentry: false
          }, true), _0x359bfd(3, _0x5289f4, '', {
            sentry: false
          }, true);
          const _0x33a3a0 = await _0x930a07.loadModuleSimple("PolarisFollowListActions", "PolarisProfileFollowRoot.react"),
            {
              requestNextFollowListPage: _0x21405c
            } = _0x33a3a0;
          _0x359bfd(4, "function" == typeof _0x21405c, '', {
            sentry: "rare",
            extra: {
              type: _0x5ccd10,
              available: globalThis.Object.keys(null != _0x33a3a0 ? _0x33a3a0 : {})
            }
          }, true);
          let _0x3d0300 = null;
          const _0x194d3e = _0x21405c(_0x5289f4, _0x5ccd10, false, undefined, false);
          return _0x359bfd(5, "function" == typeof _0x194d3e, '', {
            sentry: "veryRare",
            extra: {
              thunk: _0x194d3e
            }
          }, true), await _0x194d3e(async _0x5c4334 => {
            var _0x2c09a6;
            return (null === (_0x2c09a6 = null == _0x5c4334 ? undefined : _0x5c4334.response) || undefined === _0x2c09a6 ? undefined : _0x2c09a6.users) && (_0x3d0300 = _0x5c4334.response), _0x5c4334;
          }, () => ({
            followLists: {
              [_0x5289f4]: {
                inbound: {
                  pagination: {
                    endCursor: null != _0x2327cc ? _0x2327cc : null
                  }
                },
                outbound: {
                  pagination: {
                    endCursor: null != _0x2327cc ? _0x2327cc : null
                  }
                },
                inboundMutual: {
                  pagination: {
                    endCursor: null != _0x2327cc ? _0x2327cc : null
                  }
                }
              }
            }
          })), _0x359bfd(6, _0x3d0300 && globalThis.Array.isArray(_0x3d0300.users), '', {
            sentry: "veryRare",
            networkResponse: _0x3d0300,
            extra: {
              type: _0x5ccd10,
              userId: _0x5289f4,
              cursor: _0x2327cc,
              response: _0x3d0300
            }
          }, true), {
            nextCursor: null !== (_0x267c74 = _0x3d0300.next_max_id) && undefined !== _0x267c74 ? _0x267c74 : null,
            users: _0x3d0300.users
          };
        },
        getFollowRequests: async () => {
          const {
              assert$: _0x1bf63e
            } = _0x442618("mxmzsnne"),
            {
              getFollowRequests: _0x220bcd
            } = _0x930a07.module("PolarisAPIGetFollowRequests"),
            _0x51d540 = await _0x220bcd();
          return _0x1bf63e(1, _0x51d540, '', {
            sentry: "veryRare",
            networkResponse: _0x51d540,
            extra: {
              fetchResult: _0x51d540
            }
          }, true), _0x1bf63e(2, _0x51d540.users, '', {
            sentry: "veryRare",
            networkResponse: _0x51d540,
            extra: {
              fetchResult: _0x51d540
            }
          }, true), _0x1bf63e(3, _0x5b0f73(_0x51d540.users, "array"), '', {
            sentry: "veryRare",
            networkResponse: _0x51d540,
            extra: {
              fetchResult: _0x51d540
            }
          }, true), _0x51d540.users;
        },
        acceptFollowRequest: async _0x52e0aa => {
          const {
            assert$: _0x26da40
          } = _0x442618("zuxyewmu");
          _0x26da40(1, _0x52e0aa, '', {
            sentry: false
          }, true), _0x26da40(2, _0x52e0aa.userId && "string" == typeof _0x52e0aa.userId, '', {
            sentry: false
          }, true);
          const {
              approveFollowRequest: _0x533721
            } = _0x930a07.module("PolarisAPIApproveFollowRequest"),
            _0x3b245e = await _0x533721(_0x52e0aa.userId);
          return _0x26da40(3, 200 === (null == _0x3b245e ? undefined : _0x3b245e.statusCode), '', {
            sentry: "veryRare",
            networkResponse: _0x3b245e,
            extra: {
              result: _0x3b245e
            }
          }, true), _0x3b245e;
        },
        removeFollowRequest: async _0x5b2c37 => {
          const {
            assert$: _0x458c62
          } = _0x442618("ouqb");
          _0x458c62(1, _0x5b2c37, '', {
            sentry: false
          }, true), _0x458c62(2, _0x5b2c37.userId && "string" == typeof _0x5b2c37.userId, '', {
            sentry: false
          }, true);
          const {
              ignoreFollowRequest: _0xf25fc3
            } = _0x930a07.module("PolarisAPIIgnoreFollowRequest"),
            _0x3bb262 = await _0xf25fc3(_0x5b2c37.userId);
          return _0x458c62(3, 200 === (null == _0x3bb262 ? undefined : _0x3bb262.statusCode), '', {
            sentry: "veryRare",
            networkResponse: _0x3bb262,
            extra: {
              result: _0x3bb262
            }
          }, true), _0x3bb262;
        }
      },
      _0xc37b1b = async _0xd92009 => {
        const {
          assert$: _0x2f03e9
        } = _0x442618("ihqfj");
        _0x2f03e9(1, _0xd92009, '', {
          sentry: false
        }, true), _0x2f03e9(2, _0xd92009.userId, '', {
          sentry: "rare"
        }, true);
        const _0x1aa4da = await _0x51c163._bloks();
        return await _0x1aa4da.fetchAction("com.instagram.portable_settings.privacy.close_friends_screen.make_close_friend", {
          user_id: _0xd92009.userId,
          should_not_make_close_friend: !_0xd92009.shouldInclude
        });
      },
      _0x51c163 = {
        _bloks: async () => {
          const _0x351c01 = await _0x930a07.loadModule("WebBloksHasteAppLoader", "PolarisSettingsCloseFriendsRoot.react"),
            _0x190162 = await _0x930a07.loadModule("XWebBloksAsyncRawController", "PolarisSettingsCloseFriendsRoot.react");
          return new (0, _0x351c01.WebBloksHasteAppLoader)(_0x190162);
        },
        fetchCloseFriends: async () => {
          const {
              assert$: _0x53340b
            } = _0x442618("glhytxd"),
            _0xb26fb = await _0x51c163._bloks(),
            _0x5d69ef = (await _0xb26fb.fetchApp("com.instagram.portable_settings.privacy.close_friends_screen_v2")).data;
          _0x53340b(1, _0x5d69ef, '', {
            sentry: "rare"
          }, true), _0x53340b(2, globalThis.Array.isArray(_0x5d69ef), '', {
            sentry: "rare"
          }, true);
          const _0x531dde = _0x5d69ef.filter(_0x3dfba1 => {
            var _0x48ce0b;
            const _0x117e51 = null === (_0x48ce0b = _0x3dfba1.data) || undefined === _0x48ce0b ? undefined : _0x48ce0b.initial_lispy;
            return _0x117e51 && _0x117e51.includes("bk.action.array.Make") && _0x117e51.includes("user_id") && _0x117e51.includes("username");
          });
          return _0x53340b(3, 2 === _0x531dde.length, '', {
            sentry: "rare"
          }, true), {
            closeFriends: _0x531dde[0],
            others: _0x531dde[1]
          };
        },
        addCloseFriend: async _0x556f39 => await _0xc37b1b({
          ..._0x556f39,
          shouldInclude: true
        }),
        removeCloseFriend: async _0x2a3fa5 => await _0xc37b1b({
          ..._0x2a3fa5,
          shouldInclude: false
        })
      },
      _0x2eaf95 = () => _0x930a07.module("PolarisStoryAPIActions"),
      _0x45373e = {
        createHighlight: async _0x2bd309 => {
          const {
            assert$: _0x470dc5
          } = _0x442618("blachwho");
          _0x470dc5(1, _0x2bd309, '', {
            sentry: false
          }, true), _0x470dc5(2, _0x2bd309.mediaIds, '', {
            sentry: false
          }, true), _0x470dc5(3, _0x2bd309.coverMediaId, '', {
            sentry: false
          }, true), _0x470dc5(4, _0x2bd309.title, '', {
            sentry: false
          }, true);
          const _0x3944c0 = _0x470dc5(5, _0x5375e1.getCurrentUser().id, '', {
            sentry: "rare"
          }, true);
          return await _0x2eaf95().postNewHighlight(_0x2bd309.mediaIds, _0x3944c0, _0x2bd309.title, _0x2bd309.coverMediaId);
        },
        modifyHighlight: async _0x53425b => {
          var _0x13831a, _0x5b981e;
          const {
            assert$: _0x58e0aa
          } = _0x442618("ukvocea");
          _0x58e0aa(1, _0x53425b, '', {
            sentry: false
          }, true), _0x58e0aa(2, _0x53425b.highlightId, '', {
            sentry: false
          }, true), _0x58e0aa(3, !_0x53425b.addMediaIds || globalThis.Array.isArray(_0x53425b.addMediaIds), '', {
            sentry: false
          }, true), _0x58e0aa(4, !_0x53425b.removeMediaIds || globalThis.Array.isArray(_0x53425b.removeMediaIds), '', {
            sentry: false
          }, true), _0x58e0aa(5, !_0x53425b.title || "string" == typeof _0x53425b.title, '', {
            sentry: false
          }, true), _0x58e0aa(6, !_0x53425b.coverMediaId || "string" == typeof _0x53425b.coverMediaId, '', {
            sentry: false
          }, true);
          const _0x43f5ba = _0x58e0aa(7, _0x5375e1.getCurrentUser().id, '', {
            sentry: "rare"
          }, true);
          return await _0x2eaf95().editHighlight(null !== (_0x13831a = _0x53425b.addMediaIds) && undefined !== _0x13831a ? _0x13831a : [], null !== (_0x5b981e = _0x53425b.removeMediaIds) && undefined !== _0x5b981e ? _0x5b981e : [], _0x53425b.highlightId, _0x43f5ba, _0x53425b.title, _0x53425b.coverMediaId);
        }
      },
      _0x4d44e2 = (globalThis.Object.freeze({
        NONE: 0,
        MESSAGE: 1,
        STORY: 2,
        FORWARD: 3,
        FB_STORY_SHARE: 4,
        IG_STORY_SHARE: 5,
        STORY_BASE64_ENCODED: 6,
        LIGHTWEIGHT_STATUS: 7,
        CLOSE_FRIENDS: 8,
        XMA: 9,
        IG_NOTE: 10,
        CLOSE_FRIENDS_NOTE_REPLY: 11,
        LIGHTWEIGHT_STATUS_REACTION: 12,
        FB_FEED_POST: 13,
        HIGHLIGHTS_TAB_POST_REPLY: 14,
        HIGHLIGHTS_TAB_LOCAL_EVENT_REPLY: 15,
        SHARED_ALBUM: 16,
        AVATAR_DETAIL: 17,
        NOTE_REPLY_ARMADILLO: 18,
        HIGHLIGHTS_TAB_CARDS_FOR_MOM: 19
      }), globalThis.Object.freeze({
        NONE: 0,
        SENDING_TO_SERVER: 1,
        SERVER_RECEIVED: 2,
        NON_RETRIABLE_ERROR: 4,
        RETRIABLE_ERROR: 5
      }), globalThis.Object.freeze({
        TYPING: 1,
        STOPPED_TYPING: 0
      })),
      _0x57f2b1 = {
        ALBUM: "album",
        DRAFT: "draft",
        FEED: "default",
        IGTV: "igtv",
        IGTV_DRAFT: "igtv_draft",
        IGTV_WITH_FEED: "igtv_with_feed",
        LIVE_REACTION: "live_reaction",
        NAMETAG_SELFIE: "nametag_selfie",
        PROFILE: "profile",
        PROFILE_PIC: "profile_pic",
        REEL: "reel"
      },
      _0x1c4051 = async _0x214104 => await _0x930a07.loadModule(_0x214104, "PolarisProfilePostsTabRoot.react,PolarisProfileRoot.react"),
      _0x27ceb9 = {
        generateUploadId: async () => _0x930a07.module("PolarisUploadHelpers").createUploadId(),
        generateEntityName: async _0xb98044 => "fb_uploader_" + _0xb98044.uploadId,
        uploadPhoto: async _0x19660b => {
          const {
            assert$: _0x52d021
          } = _0x442618("qkexmdkd");
          _0x52d021(1, _0x19660b, '', {
            sentry: false
          }, true), _0x52d021(2, _0x19660b.blob, '', {
            sentry: false
          }, true);
          const {
              fbUploaderPhoto: _0x256081
            } = await _0x1c4051("PolarisAPIFbUploaderPhoto"),
            _0x2edd22 = await _0x334477(_0x19660b.blob, !!_0x19660b.compress);
          return {
            uploadId: (await _0x256081(_0x2edd22)).upload_id
          };
        },
        uploadVideo: async _0x165799 => {
          const {
            assert$: _0x59428e
          } = _0x442618("oxqe");
          _0x59428e(1, _0x165799, '', {
            sentry: false
          }, true), _0x59428e(2, _0x165799.blob, '', {
            sentry: false
          }, true), _0x59428e(3, _0x165799.mediaType, '', {
            sentry: false
          }, true);
          const {
              getVideoCoverPhoto: _0x200eb1
            } = await _0x930a07.loadModule("polarisGetVideoCoverPhoto", "PolarisFeedRoot.next.react"),
            {
              readVideoFile: _0x2fd6ad
            } = await _0x930a07.loadModule("polarisReadVideoFile", "PolarisFeedRoot.next.react"),
            _0x122cc7 = await _0x27ceb9.generateUploadId(),
            _0x38e9fb = await _0x27ceb9.generateEntityName({
              uploadId: _0x122cc7
            }),
            _0x54252d = new File([_0x165799.blob], _0x38e9fb + ".mp4", {
              type: _0x165799.blob.type
            }),
            _0x5b9221 = await _0x2fd6ad(_0x54252d),
            _0x27a99e = await _0x200eb1(_0x5b9221);
          _0x59428e(4, _0x5b9221, '', {
            sentry: "rare"
          }, true), _0x59428e(5, _0x27a99e, '', {
            sentry: "rare"
          }, true);
          const _0x138913 = await (async _0x1ae97a => (await _0x1c4051("PolarisAPIRuploadVideo")).ruploadVideo(_0x1ae97a))({
            dataURL: _0x5b9221.src,
            entityName: _0x38e9fb,
            file: _0x54252d,
            mediaPublishMode: _0x57f2b1[_0x165799.mediaType],
            uploadId: _0x122cc7,
            uploadMediaDurationMs: globalThis.Math.floor(1000 * _0x5b9221.duration),
            uploadMediaHeight: _0x5b9221.videoHeight,
            uploadMediaWidth: _0x5b9221.videoWidth,
            videoTransform: null
          });
          return _0x59428e(6, _0x138913, '', {
            sentry: "rare",
            networkRelated: true
          }, true), _0x59428e(7, await (async _0x3e2449 => (await _0x1c4051("PolarisAPIRuploadPhoto")).ruploadPhoto(_0x3e2449))({
            dataURL: _0x27a99e.dataURL,
            entityName: _0x38e9fb,
            file: _0x27a99e.file,
            uploadId: _0x122cc7,
            uploadMediaHeight: _0x27a99e.uploadMediaHeight,
            uploadMediaWidth: _0x27a99e.uploadMediaWidth
          }), '', {
            sentry: "rare",
            networkRelated: true
          }, true), {
            uploadId: _0x122cc7,
            mediaId: null == _0x138913 ? undefined : _0x138913.media_id
          };
        },
        uploadDirectMedia: async _0x3e240e => {
          const {
            assert$: _0x1c3daa
          } = _0x442618("fowibnn");
          _0x1c3daa(1, _0x3e240e, '', {
            sentry: false
          }, true), _0x1c3daa(2, _0x3e240e.blob, '', {
            sentry: false
          }, true);
          const {
              startUpload: _0x433169
            } = _0x930a07.module("MWPComposerMediaUploadUtil"),
            {
              createOfflineThreadingID: _0x2c9792
            } = _0x930a07.module("OfflineThreadingId"),
            _0x192b60 = _0x1c3daa(3, _0x2c9792(), '', {
              sentry: "rare"
            }, true),
            _0x17229e = new File([_0x3e240e.blob], _0x192b60 + ".jpg", {
              type: "image/jpeg"
            });
          return new globalThis.Promise((_0x548f7b, _0x4e1e8b) => {
            _0x433169(function () {}, function () {}, function (_0x22a831, _0x1d2cc3) {
              _0x548f7b({
                offlineId: _0x22a831,
                fbId: _0x1d2cc3
              });
            }, function () {
              _0x4e1e8b(arguments);
            }, undefined, [_0x17229e], [_0x192b60], undefined, undefined, undefined, undefined, undefined);
          });
        }
      },
      _0x5167e7 = {
        ..._0x3052ea,
        sendInitialMessage: async _0x41cab6 => {
          const _0x4f539e = await _0x5d6fe6.createThread({
            recipientId: _0x41cab6.recipientId
          });
          return await _0x3052ea.sendTextMessage({
            threadId: _0x4f539e.threadId,
            message: _0x41cab6.message
          });
        },
        sendInitialMessageFromUsername: async _0x50e224 => {
          const {
              throw$: _0x476d53
            } = _0x442618("gkhftu"),
            _0x567800 = await _0x5375e1.fetchFromUsername({
              username: _0x50e224.username
            });
          return _0x567800 || _0x476d53(1, '', {
            sentry: "veryRare"
          }, true), await _0x5167e7.sendInitialMessage({
            recipientId: _0x567800.id,
            message: _0x50e224.message
          });
        },
        openEphemeral: async _0x15377c => {
          const _0x13018b = (await _0x930a07.db.entries("attachments")).find(_0x5df85b => _0x5df85b[1].messageId === _0x15377c.messageId);
          if (!_0x13018b) return false;
          const [_0x514c93, _0x377425] = _0x13018b;
          if (!(await _0x930a07.module("isRavenAttachmentViewable"))(_0x377425)) return false;
          const {
            markRavenAttachmentAsSeen: _0x4d9804
          } = await _0x930a07.module("markRavenAttachmentAsSeen");
          return await _0x4d9804(_0x377425), true;
        }
      },
      _0x5d3ecd = {
        fetchNotifications: async () => {
          const {
              assert$: _0x394bc7
            } = _0x442618("iaufdhp"),
            {
              getInboxData: _0x290fd9
            } = _0x930a07.module("PolarisAPIGetInboxData"),
            _0x4a12a3 = await _0x290fd9();
          return _0x394bc7(1, _0x4a12a3, '', {
            sentry: "rare",
            networkRelated: true,
            extra: {
              result: _0x4a12a3
            }
          }, true), _0x4a12a3;
        },
        fetchFollowerNotifications: async () => {
          var _0x48eb65, _0x3f1886, _0x566f8b, _0x20cb07, _0x8dabf6;
          const {
              assert$: _0x2b6747
            } = _0x442618("liaxuewh"),
            _0x5ca557 = await _0x5d3ecd.fetchNotifications(),
            _0x3755f2 = ["new_stories", "old_stories", "priority_stories"];
          _0x2b6747(1, _0x3755f2.some(_0xe5e38 => null == _0x5ca557 ? undefined : _0x5ca557[_0xe5e38]), '', {
            sentry: "rare",
            extra: {
              response: _0x5ca557
            }
          }, true);
          const _0x46a227 = null === (_0x3f1886 = null === (_0x48eb65 = _0x3755f2.map(_0x3d357b => null == _0x5ca557 ? undefined : _0x5ca557[_0x3d357b])) || undefined === _0x48eb65 ? undefined : _0x48eb65.flat()) || undefined === _0x3f1886 ? undefined : _0x3f1886.filter(Boolean),
            _0x42ad88 = null == _0x46a227 ? undefined : _0x46a227.filter(_0x3fa499 => "user_followed" == (null == _0x3fa499 ? undefined : _0x3fa499.notif_name)),
            _0x5057da = [];
          for (const _0x13d4a9 of _0x42ad88) {
            const _0x503ada = null === (_0x20cb07 = null === (_0x566f8b = null == _0x13d4a9 ? undefined : _0x13d4a9.args) || undefined === _0x566f8b ? undefined : _0x566f8b.inline_follow) || undefined === _0x20cb07 ? undefined : _0x20cb07.user_info;
            _0x503ada && (_0x503ada.followedAtS = null === (_0x8dabf6 = null == _0x13d4a9 ? undefined : _0x13d4a9.args) || undefined === _0x8dabf6 ? undefined : _0x8dabf6.timestamp, _0x5057da.push(_0x503ada));
          }
          return _0x5057da;
        }
      };
    function _0x1eea3f() {
      __d("LSUpdateOptimisticEphemeralMediaState", [], function (_0x2924c2, _0x29e838, _0x5f2bd5, _0x43dbfc, _0xeda8cc, _0x2b70f0) {
        function _0x1a8efb() {
          var _0xa9c959 = arguments,
            _0x3b8180 = _0xa9c959[_0xa9c959.length - 1],
            _0x1ed44a = [];
          return _0x3b8180.sequence([function (_0x33f7ca) {
            return _0x3b8180.sequence([function (_0x298e0c) {
              return _0x3b8180.i64.neq(_0xa9c959[3], undefined) ? _0x3b8180.filter(_0x3b8180.db.table(16).fetch([[[_0xa9c959[0], _0xa9c959[1]]]]), function (_0x5be851) {
                return _0x3b8180.i64.eq(_0x5be851.threadKey, _0xa9c959[0]) && _0x5be851.messageId === _0xa9c959[1] && (_0x3b8180.i64.eq(_0x5be851.attachmentType, _0x3b8180.i64.cast([0, 8])) || _0x3b8180.i64.eq(_0x5be851.attachmentType, _0x3b8180.i64.cast([0, 9]))) && _0x3b8180.i64.eq(_0x5be851.ephemeralMediaState, _0x3b8180.i64.cast([0, 0]));
              }).next().then(function (_0x229f28, _0x48dd85) {
                return _0x48dd85 = _0x229f28.done, _0x229f28 = _0x229f28.value, _0x48dd85 ? _0x3b8180.forEach(_0x3b8180.filter(_0x3b8180.db.table(16).fetch([[[_0xa9c959[0], _0xa9c959[1]]]]), function (_0x3df8f6) {
                  return _0x3b8180.i64.eq(_0x3df8f6.threadKey, _0xa9c959[0]) && _0x3df8f6.messageId === _0xa9c959[1] && (_0x3b8180.i64.eq(_0x3df8f6.attachmentType, _0x3b8180.i64.cast([0, 8])) || _0x3b8180.i64.eq(_0x3df8f6.attachmentType, _0x3b8180.i64.cast([0, 9])));
                }), function (_0x52b32a) {
                  var _0x4b4fb3 = _0x52b32a.update;
                  return _0x52b32a.item, _0x4b4fb3({
                    ephemeralMediaState: _0xa9c959[2],
                    viewerSeenTimestampMs: _0xa9c959[3]
                  });
                }) : (_0x229f28.item, _0x3b8180.forEach(_0x3b8180.filter(_0x3b8180.db.table(16).fetch([[[_0xa9c959[0], _0xa9c959[1]]]]), function (_0xb1b254) {
                  return _0x3b8180.i64.eq(_0xb1b254.threadKey, _0xa9c959[0]) && _0xb1b254.messageId === _0xa9c959[1] && (_0x3b8180.i64.eq(_0xb1b254.attachmentType, _0x3b8180.i64.cast([0, 8])) || _0x3b8180.i64.eq(_0xb1b254.attachmentType, _0x3b8180.i64.cast([0, 9])));
                }), function (_0x2910de) {
                  var _0x49495f = _0x2910de.update;
                  return _0x2910de.item, _0x49495f({
                    viewerSeenTimestampMs: _0xa9c959[3]
                  });
                }));
              }) : _0x3b8180.filter(_0x3b8180.db.table(16).fetch([[[_0xa9c959[0], _0xa9c959[1]]]]), function (_0x250642) {
                return _0x3b8180.i64.eq(_0x250642.threadKey, _0xa9c959[0]) && _0x250642.messageId === _0xa9c959[1] && (_0x3b8180.i64.eq(_0x250642.attachmentType, _0x3b8180.i64.cast([0, 8])) || _0x3b8180.i64.eq(_0x250642.attachmentType, _0x3b8180.i64.cast([0, 9]))) && _0x3b8180.i64.eq(_0x250642.ephemeralMediaState, _0x3b8180.i64.cast([0, 0]));
              }).next().then(function (_0x565688, _0x3113e8) {
                return _0x3113e8 = _0x565688.done, _0x565688 = _0x565688.value, _0x3113e8 ? _0x3b8180.forEach(_0x3b8180.filter(_0x3b8180.db.table(16).fetch([[[_0xa9c959[0], _0xa9c959[1]]]]), function (_0x682b48) {
                  return _0x3b8180.i64.eq(_0x682b48.threadKey, _0xa9c959[0]) && _0x682b48.messageId === _0xa9c959[1] && (_0x3b8180.i64.eq(_0x682b48.attachmentType, _0x3b8180.i64.cast([0, 8])) || _0x3b8180.i64.eq(_0x682b48.attachmentType, _0x3b8180.i64.cast([0, 9])));
                }), function (_0x2b34df) {
                  var _0x327036 = _0x2b34df.update;
                  return _0x2b34df.item, _0x327036({
                    ephemeralMediaState: _0xa9c959[2]
                  });
                }) : (_0x565688.item, 0);
              });
            }, function (_0x3d0e5f) {
              return _0x1ed44a[0] = true;
            }]);
          }, function (_0x55b4c4) {
            return _0x3b8180.resolve(_0x1ed44a);
          }]);
        }
        _0x1a8efb.__sproc_name__ = "LSMailboxUpdateOptimisticEphemeralMediaStateStoredProcedure", _0xeda8cc.exports = _0x1a8efb;
      }, null), __d("LSUpdateEphemeralMediaState", [], function (_0x1b5202, _0x212512, _0x50286a, _0x2a9cda, _0x143e0c, _0x10f45f) {
        function _0x1b5202() {
          var _0x3ef9f1 = arguments,
            _0x3f42c9 = _0x3ef9f1[_0x3ef9f1.length - 1],
            _0x3cd5c4 = [],
            _0x55afbf = [];
          return _0x3f42c9.sequence([function (_0x2a4202) {
            return _0x3f42c9.sequence([function (_0x30639f) {
              return _0x3f42c9.storedProcedure(_0x212512("LSUpdateOptimisticEphemeralMediaState"), _0x3ef9f1[0], _0x3ef9f1[1], _0x3ef9f1[3], _0x3ef9f1[5]).then(function (_0x5ca756) {
                return _0x3cd5c4[0] = _0x5ca756[0], _0x5ca756;
              });
            }, function (_0x2307bf) {
              return _0x3f42c9.i64.neq(_0x3ef9f1[4], undefined) ? (_0x3cd5c4[1] = new _0x3f42c9.Map(), _0x3cd5c4[1].set("message_id", _0x3ef9f1[1]), _0x3cd5c4[1].set("ephemeral_media_state", _0x3ef9f1[4]), _0x3cd5c4[2] = _0x3f42c9.toJSON(_0x3cd5c4[1]), _0x3f42c9.storedProcedure(_0x212512("LSIssueNewTask"), "update_ephemeral_media_state", _0x3f42c9.i64.cast([0, 191]), _0x3cd5c4[2], undefined, undefined, _0x3f42c9.i64.cast([0, 0]), _0x3f42c9.i64.cast([0, 0]), undefined, undefined, _0x3f42c9.i64.cast([0, 0]), _0x3f42c9.i64.cast([0, 0]))) : _0x3f42c9.resolve();
            }, function (_0x41a7eb) {
              return _0x55afbf[0] = _0x3cd5c4[0];
            }]);
          }, function (_0x24d50d) {
            return _0x3f42c9.resolve(_0x55afbf);
          }]);
        }
        _0x1b5202.__sproc_name__ = "LSMailboxUpdateEphemeralMediaStateStoredProcedure", _0x143e0c.exports = _0x1b5202;
      }, null), __d("EphemeralMediaViewMode", [], function (_0x492794, _0x58c2d5, _0x31f0c9, _0x271593, _0x7dd3a7, _0x5a3a19) {
        _0x492794 = globalThis.Object.freeze({
          READ_ONCE: 0,
          REPLAYABLE: 1,
          PERMANENT: 2
        }), _0x5a3a19["default"] = _0x492794;
      }, 66), __d("LSUpdateEphemeralMediaStateStoredProcedure", [], function (_0x53bd9b, _0x3da696, _0x25e8fb, _0xe374c8, _0x12e3c5, _0x3b65dd, _0x3a4970) {
        _0x3a4970["default"] = function _0x3553e2(_0x4a17ed, _0x3b292d) {
          var _0x243263 = [];
          return _0x243263[0] = _0x3b292d.threadKey, _0x243263[1] = _0x3b292d.messageId, _0x243263[2] = _0x3b292d.attachmentFbid, _0x243263[3] = _0x3b292d.ephemeralMediaState, _0x243263[4] = _0x3b292d.ephemeralMediaAction, _0x243263[5] = _0x3b292d.viewerSeenTimestampMs, _0x25e8fb("LSUpdateEphemeralMediaState").apply(undefined, _0x243263.concat([_0x4a17ed]));
        };
      }, 98), __d("EphemeralMediaActionType", [], function (_0x21dd85, _0x452087, _0x235a83, _0x414f30, _0x122f1f, _0x268fbb) {
        _0x21dd85 = globalThis.Object.freeze({
          SEEN: 0,
          REPLAY: 1,
          SCREENSHOT: 2
        }), _0x268fbb["default"] = _0x21dd85;
      }, 66), __d("RavenMessagingState", [], function (_0x102de6, _0x40428b, _0x4f7cce, _0x2726ce, _0x1db277, _0xda6266) {
        _0x102de6 = globalThis.Object.freeze({
          PERMANENT: 0,
          UNSEEN: 1,
          SEEN: 2,
          REPLAYED: 3,
          EXPIRED: 4
        }), _0xda6266["default"] = _0x102de6;
      }, 66), __d("RavenAttachmentsSeen", [], function (_0x3d5b5f, _0x443db9, _0xfffa77, _0x4857c1, _0x5bb8e6, _0x1eed41, _0x40578c) {
        var _0x3e4348 = _0x4857c1("react").useEffect,
          _0x763167 = new Set();
        function _0x234f6b() {
          _0x763167.clear();
        }
        _0x40578c.RavenAttachmentsSeen = _0x763167, _0x40578c.clearRavenAttachmentsSeen = _0x234f6b, _0x40578c.useClearRavenAttachmentsSeenOnUnmount = function () {
          _0x3e4348(function () {
            return _0x234f6b;
          }, []);
        };
      }, 98), __d("markRavenAttachmentAsSeen", [], function (_0x1af9c1, _0x41ced4, _0x332520, _0x368229, _0x472c20, _0x27885c, _0x36dd4f) {
        var _0x1f524c, _0x2108aa, _0x4e168f;
        function _0x49d26b(_0x506985, _0x16e982, _0x5149d8) {
          return _0x44c950.apply(this, arguments);
        }
        function _0x44c950() {
          return _0x44c950 = _0x41ced4("asyncToGeneratorRuntime").asyncToGenerator(function* (_0x5d7852, _0x51e278, _0x3960e9) {
            return (yield (_0x1f524c || (_0x1f524c = _0x368229("LSDatabaseSingleton"))).LSDatabaseSingleton).runInTransaction(function (_0x26bcc2) {
              return _0x332520("LSUpdateEphemeralMediaStateStoredProcedure")(_0x332520("LSFactory")(_0x26bcc2), {
                attachmentFbid: _0x5d7852.attachmentFbid,
                ephemeralMediaAction: (_0x2108aa || (_0x2108aa = _0x368229("LSIntEnum"))).ofNumber(_0x51e278),
                ephemeralMediaState: _0x2108aa.ofNumber(_0x3960e9),
                messageId: _0x5d7852.messageId,
                threadKey: _0x5d7852.threadKey,
                viewerSeenTimestampMs: (_0x4e168f || (_0x4e168f = _0x368229("I64"))).of_float(globalThis.Date.now())
              });
            }, "readwrite", undefined, undefined, _0x27885c.id + ":42");
          }), _0x44c950.apply(this, arguments);
        }
        function _0x977289() {
          return _0x977289 = _0x41ced4("asyncToGeneratorRuntime").asyncToGenerator(function* (_0x1b5201) {
            if (null != _0x1b5201.ephemeralMediaState && (_0x2108aa || (_0x2108aa = _0x368229("LSIntEnum"))).unwrapIntEnum(_0x1b5201.ephemeralMediaState) === _0x332520("RavenMessagingState").UNSEEN) yield _0x49d26b(_0x1b5201, _0x332520("EphemeralMediaActionType").SEEN, _0x332520("RavenMessagingState").SEEN);
          }), _0x977289.apply(this, arguments);
        }
        function _0x4a20be() {
          return _0x4a20be = _0x41ced4("asyncToGeneratorRuntime").asyncToGenerator(function* (_0x2d3551) {
            if (null != _0x2d3551.ephemeralMediaState) switch ((_0x2108aa || (_0x2108aa = _0x368229("LSIntEnum"))).unwrapIntEnum(_0x2d3551.ephemeralMediaState)) {
              case _0x332520("RavenMessagingState").UNSEEN:
                _0x368229("RavenAttachmentsSeen").RavenAttachmentsSeen.add(_0x2d3551.attachmentFbid), yield _0x49d26b(_0x2d3551, _0x332520("EphemeralMediaActionType").SEEN, _0x332520("RavenMessagingState").SEEN);
                break;
              case _0x332520("RavenMessagingState").SEEN:
                _0x368229("RavenAttachmentsSeen").RavenAttachmentsSeen["delete"](_0x2d3551.attachmentFbid), yield _0x49d26b(_0x2d3551, _0x332520("EphemeralMediaActionType").REPLAY, _0x332520("RavenMessagingState").REPLAYED);
                break;
              case _0x332520("RavenMessagingState").REPLAYED:
              case _0x332520("RavenMessagingState").EXPIRED:
              case _0x332520("RavenMessagingState").PERMANENT:
                return;
            }
          }), _0x4a20be.apply(this, arguments);
        }
        function _0x1af9c1(_0x4d3139) {
          if (null != _0x4d3139.ephemeralMediaViewMode) switch ((_0x2108aa || (_0x2108aa = _0x368229("LSIntEnum"))).unwrapIntEnum(_0x4d3139.ephemeralMediaViewMode)) {
            case _0x332520("EphemeralMediaViewMode").READ_ONCE:
              _0x332520("promiseDone")(function _0x1abf6b(_0x565e46) {
                return _0x977289.apply(this, arguments);
              }(_0x4d3139));
              break;
            case _0x332520("EphemeralMediaViewMode").REPLAYABLE:
              _0x332520("promiseDone")(function _0x5134a8(_0x53f117) {
                return _0x4a20be.apply(this, arguments);
              }(_0x4d3139));
          }
        }
        _0x36dd4f.markRavenAttachmentAsSeen = _0x1af9c1;
      }, 98), __d("isRavenAttachmentViewable", [], function (_0xe07713, _0x351a68, _0x4ab413, _0x510751, _0x346e66, _0x11c782, _0x366422) {
        var _0x10d338, _0x571d70;
        function _0xe07713(_0x142f5d) {
          if (null == _0x142f5d.ephemeralMediaViewMode) return false;
          switch ((_0x10d338 || (_0x10d338 = _0x510751("LSIntEnum"))).unwrapIntEnum(_0x142f5d.ephemeralMediaViewMode)) {
            case _0x4ab413("EphemeralMediaViewMode").READ_ONCE:
              return function _0x3a8f61(_0x349459) {
                return null != _0x349459.ephemeralMediaState && (_0x10d338 || (_0x10d338 = _0x510751("LSIntEnum"))).unwrapIntEnum(_0x349459.ephemeralMediaState) === _0x4ab413("RavenMessagingState").UNSEEN;
              }(_0x142f5d);
            case _0x4ab413("EphemeralMediaViewMode").REPLAYABLE:
              return function _0x4677db(_0x536029) {
                if (null == _0x536029.ephemeralMediaState) return false;
                var _0x279e30 = (_0x10d338 || (_0x10d338 = _0x510751("LSIntEnum"))).unwrapIntEnum(_0x536029.ephemeralMediaState);
                switch (_0x279e30) {
                  case _0x4ab413("RavenMessagingState").UNSEEN:
                    return true;
                  case _0x4ab413("RavenMessagingState").SEEN:
                    if (null != (_0x279e30 = _0x536029.viewerSeenTimestampMs)) {
                      var _0x2ea041 = (_0x571d70 || (_0x571d70 = _0x510751("I64"))).of_int32(86400000);
                      if (_0x279e30 = _0x571d70.sub(_0x571d70.of_float(globalThis.Date.now()), _0x279e30), (_0x571d70 || (_0x571d70 = _0x510751("I64"))).gt(_0x279e30, _0x2ea041)) return false;
                    }
                    return _0x510751("RavenAttachmentsSeen").RavenAttachmentsSeen.has(_0x536029.attachmentFbid);
                  case _0x4ab413("RavenMessagingState").PERMANENT:
                    return true;
                  case _0x4ab413("RavenMessagingState").REPLAYED:
                  case _0x4ab413("RavenMessagingState").EXPIRED:
                  default:
                    return false;
                }
              }(_0x142f5d);
            case _0x4ab413("EphemeralMediaViewMode").PERMANENT:
              return true;
            default:
              return false;
          }
        }
        _0x366422["default"] = _0xe07713;
      }, 98);
    }
    const _0xbd3ecc = {
        hasLoaded: async () => {
          try {
            const _0x4ee9cf = !!(await _0x441a9c.db.table("threads")),
              _0x51792d = !!(await _0x441a9c.module("CurrentEnvironment")),
              _0x7af6b9 = !!(await _0x441a9c.module("CurrentUser"));
            return _0x4ee9cf && _0x51792d && _0x7af6b9;
          } catch (_0x34927a) {
            return false;
          }
        }
      },
      _0x3fefab = {
        init: async () => await async function _0x141350() {
          globalThis.window.location.href.toLowerCase().includes("instagram.com") && _0x1eea3f();
        }(),
        csrfToken: () => _0x930a07.module("InstagramSecurityConfig").csrf_token,
        hasLoaded: async () => {
          try {
            const _0x3a0e30 = await _0xbd3ecc.hasLoaded(),
              _0x564d6b = !!_0x930a07.module("ZenonCallInviteModelTypes");
            return _0x3a0e30 && _0x564d6b;
          } catch (_0x584a17) {
            return false;
          }
        },
        getThreadIdStr: _0xd71cc2 => _0x930a07.lsInt64().toStr(_0xd71cc2.threadId),
        getThreadId: _0x3eaf9f => _0x930a07.lsInt64().fromStr(_0x3eaf9f.threadIdStr),
        printDb: async _0x451334 => {
          const _0x37f0e4 = globalThis.Object.keys(await _0x930a07.db.tables()).sort();
          for (const _0x3ec2e5 of _0x37f0e4) {
            const _0x4aa2f7 = await _0x930a07.db.entries(_0x3ec2e5);
            if ((!_0x451334.searchKey || JSON.stringify(_0x4aa2f7).includes(_0x451334.searchKey)) && (globalThis.console.log(_0x3ec2e5, _0x4aa2f7), _0x451334.searchKey)) {
              for (const _0x4ea098 of _0x4aa2f7) JSON.stringify(_0x4ea098).includes(_0x451334.searchKey) && globalThis.console.log(_0x3ec2e5, "instance", _0x4ea098);
            }
          }
        }
      },
      _0x53acdb = {
        createPost: async _0x15e192 => {
          const {
            assert$: _0x3ea0b1
          } = _0x442618("ltzvbjte");
          _0x3ea0b1(1, _0x15e192, '', {
            sentry: false
          }, true), _0x3ea0b1(2, _0x15e192.blob, '', {
            sentry: false
          }, true), _0x3ea0b1(3, !_0x15e192.caption || "string" == typeof _0x15e192.caption, '', {
            sentry: false
          }, true);
          const _0x2b1352 = _0x3ea0b1(4, _0x15e192.blob.type.split("/")[0], '', {
              sentry: false
            }, true),
            _0x50e0df = _0x3ea0b1(5, ("video" === _0x2b1352 ? await _0x27ceb9.uploadVideo({
              blob: _0x15e192.blob,
              mediaType: _0x15e192.mediaType || "FEED"
            }) : await _0x27ceb9.uploadPhoto({
              blob: _0x15e192.blob,
              compress: true
            })).uploadId, '', {
              sentry: "rare"
            }, true),
            _0x2c0dd0 = _0x930a07.module("PolarisCreationAPI");
          return await _0x2c0dd0.configure({
            type: _0x2b1352,
            caption: _0x15e192.caption,
            customAccessibilityCaption: _0x15e192.caption,
            usertags: [],
            geoTag: undefined,
            source_type: "library",
            uploadId: _0x50e0df
          });
        }
      },
      _0x5b2833 = {
        async ["startTyping"]({
          threadId: _0x55500b
        }) {
          const {
            assert$: _0x1d875b,
            message$: _0x25afe6
          } = _0x442618("40e2a9");
          return _0x1d875b(1, _0x55500b, '', {
            sentry: false
          }, true), _0x1d875b(2, _0x5b0f73(_0x55500b, "array"), '', {
            sentry: false
          }, true), await _0x5b2833._updateTypingStatus({
            threadId: _0x55500b,
            typing: true
          });
        },
        async ["stopTyping"]({
          threadId: _0x4f4144
        }) {
          const {
            assert$: _0x408f88,
            message$: _0x598ebc
          } = _0x442618("3edc35");
          return _0x408f88(1, _0x4f4144, '', {
            sentry: false
          }, true), _0x408f88(2, _0x5b0f73(_0x4f4144, "array"), '', {
            sentry: false
          }, true), await _0x5b2833._updateTypingStatus({
            threadId: _0x4f4144,
            typing: false
          });
        },
        ["_updateTypingStatus"]({
          threadId: _0x256e89,
          typing: _0x157692
        }) {
          const {
            assert$: _0x4b735f
          } = _0x442618("41c3fb");
          _0x4b735f(1, _0x256e89, '', {
            sentry: false
          }, true), _0x4b735f(2, _0x5b0f73(_0x256e89, "array"), '', {
            sentry: false
          }, true), _0x4b735f(3, _0x5b0f73(_0x157692, "boolean"), '', {
            sentry: false
          }, true);
          const _0x105698 = _0x441a9c.module("LSSendTypingIndicatorStoredProcedure");
          return _0x441a9c.db.transaction(_0x138870 => _0x105698(_0x138870, {
            threadKey: _0x256e89,
            isGroupThread: false,
            isTyping: _0x157692
          }));
        },
        _isRecipientRecentlyActive: async _0x19e803 => {
          let {
            threadId: _0x435072,
            thresholdMs: _0x54d980
          } = _0x19e803;
          const _0x48c5c6 = await _0x3b090c.getThread({
              threadId: _0x435072
            }),
            _0x269fc0 = await _0x3b090c.getRecipient({
              threadId: _0x435072
            }),
            _0x429183 = new globalThis.Date(_0x441a9c.lsInt64().toI32(_0x269fc0.readActionTimestampMs));
          if (globalThis.Math.abs(globalThis.Date.now() - _0x429183.getTime()) <= _0x54d980) return true;
          const _0x2f016d = _0x441a9c.lsInt64().equals(_0x48c5c6.snippetSenderContactId, _0x269fc0.contactId),
            _0xa77c69 = _0x441a9c.lsInt64().toI32(_0x48c5c6.lastActivityTimestampMs);
          return !!(_0x2f016d && globalThis.Math.abs(globalThis.Date.now() - _0xa77c69) <= _0x54d980);
        }
      },
      _0x17c974 = _0xd3d098(12),
      _0x40d1fb = {
        ..._0x5b2833,
        async ["isRecipientTyping"]({
          threadId: _0x53e19a
        }) {
          const {
            assert$: _0x46860c,
            message$: _0x40e6d8
          } = _0x442618("db82ba");
          _0x46860c(1, _0x53e19a, '', {
            sentry: false
          }, true), _0x46860c(2, _0x5b0f73(_0x53e19a, "array"), '', {
            sentry: false
          }, true), await _0x40d1fb._initializeTypingRelay();
          const _0x271b49 = await _0x930a07.db.table("ig_thread_info"),
            _0x38a0bf = await _0x271b49.get(_0x930a07.lsInt64().fromArray(_0x53e19a));
          if (!_0x38a0bf) return false;
          const _0x5441e4 = _0x38a0bf.igThreadId,
            _0x84bb3 = _0xf8bfa2.get("typingState")[_0x5441e4];
          return !!_0x84bb3 && _0x84bb3 > globalThis.Date.now() - _0x17c974;
        },
        ["_initializeTypingRelay"]() {
          const {
            assert$: _0x1874a3,
            message$: _0x16fb15
          } = _0x442618("edac51");
          if (_0xf8bfa2.get("initializedRelayStore")) return;
          const _0x5edb93 = _0x930a07.module("react-relay"),
            _0x287c43 = _0x930a07.module("PolarisRelayEnvironment"),
            _0x51982e = _0x930a07.module("IGDTypingIndicatorClientSubscription.graphql"),
            _0x1e6bf6 = _0x930a07.module("IGDTypingIndicatorTransformer");
          _0x5edb93.requestSubscription(_0x287c43, {
            subscription: _0x51982e,
            ["onError"](_0x1f8372) {},
            ["onNext"](_0x3d83d4) {
              if (!("xdt_direct_realtime_event" in _0x3d83d4)) return;
              const _0x1fb157 = _0x1e6bf6.transformIGDTypingPayload(_0x3d83d4);
              if (null == (null == _0x1fb157 ? undefined : _0x1fb157.threadIgId) || null == (null == _0x1fb157 ? undefined : _0x1fb157.activityStatus) || null == (null == _0x1fb157 ? undefined : _0x1fb157.timestamp)) return;
              const _0x1f03e0 = _0x1fb157.threadIgId,
                _0x47f718 = _0x1fb157.timestamp,
                _0x3f870a = _0x1fb157.activityStatus === _0x4d44e2.TYPING;
              _0xf8bfa2.set("typingState", _0x1b44d6 => (_0x3f870a ? _0x1b44d6[_0x1f03e0] = _0x47f718 : delete _0x1b44d6[_0x1f03e0], _0x1b44d6));
            },
            variables: {
              input_data: {
                user_id: _0x5375e1.getCurrentUser().id
              }
            }
          }), _0xf8bfa2.set("initializedRelayStore", true);
        }
      },
      _0x13a391 = {
        setOnlineStatusEnabled: async _0x3f592d => {
          const _0x1eefb3 = await _0x930a07.loadModule("PolarisActivityStatusSectionPresenceDisabledMutation.graphql", "PolarisSettingsActivityStatusRoot.react"),
            _0x45073d = await _0x930a07.module("PolarisRelayEnvironment"),
            _0x1b3dd9 = _0x930a07.module("RelayFBMutations"),
            _0xc719aa = _0x930a07.module("relay-runtime/mutations/commitMutation"),
            _0x34cb97 = _0x1b3dd9.addFBisms(_0xc719aa);
          return await new globalThis.Promise((_0x5abdf7, _0x300a63) => {
            _0x34cb97(_0x45073d, {
              configs: undefined,
              mutation: _0x1eefb3,
              variables: {
                disabled: _0x3f592d.enabled ? 0 : 1
              },
              onCompleted: _0x5abdf7,
              onError: _0x300a63,
              optimisticUpdater: () => {},
              updater: () => {}
            });
          });
        },
        _hideThread: async _0x752ac1 => {
          const _0x384fc6 = await _0x930a07.loadModule("IGDInboxInfoDeleteThreadDialogOffMsysMutation.graphql"),
            _0x29ccff = await _0x930a07.module("PolarisRelayEnvironment"),
            _0x11637d = _0x930a07.module("RelayFBMutations"),
            _0x127701 = _0x930a07.module("relay-runtime/mutations/commitMutation"),
            _0x4c3f6e = _0x11637d.addFBisms(_0x127701);
          return await new globalThis.Promise((_0x2873c8, _0x1dc17d) => {
            _0x4c3f6e(_0x29ccff, {
              configs: undefined,
              mutation: _0x384fc6,
              variables: {
                thread_fbid: _0x930a07.lsInt64().toStr(_0x752ac1.thread.consistentThreadFbid),
                should_move_future_requests_to_spam: false
              },
              onCompleted: _0x2873c8,
              onError: _0x1dc17d,
              optimisticUpdater: () => {},
              updater: () => {}
            });
          });
        },
        _hideThreadsWithSnippet: async _0x18c669 => {
          const _0x1f62ce = await _0x5d6fe6.getInboxThreads({
            loadAll: false
          });
          for (const _0x58e070 of _0x1f62ce) _0x58e070.snippet.startsWith(_0x18c669.snippet) && (await _0x514276(500, 1000), globalThis.console.log(_0x58e070), globalThis.console.log(await _0x13a391._hideThread({
            thread: _0x58e070
          })));
        }
      },
      _0x1b3585 = {
        fetchArchivedDates: async (_0x36cc94 = {}) => {
          const {
            assert$: _0x3606e3
          } = _0x442618("rkknmkq");
          _0x3606e3(1, _0x36cc94, '', {
            sentry: false
          }, true);
          const {
              getArchivedStories: _0xca8fd2
            } = _0x930a07.module("PolarisStoryAPIActions"),
            _0x2dff50 = await _0xca8fd2();
          let _0x43f4e6 = [];
          if (_0x36cc94.loadAll && _0x2dff50.moreAvailable) {
            let _0x313a65 = _0x2dff50.nextMaxId;
            for (; _0x313a65;) {
              const _0x2dfad8 = await _0xca8fd2(_0x313a65);
              _0x3606e3(2, _0x2dfad8, '', {
                sentry: "rare",
                networkRelated: true
              }, true), _0x3606e3(3, _0x2dfad8.reels && "object" == typeof _0x2dfad8.reels, '', {
                sentry: "rare"
              }, true), _0x43f4e6.push(...globalThis.Object.values(_0x2dfad8.reels)), _0x313a65 = _0x2dfad8.nextMaxId, await _0x231ec8(1000);
            }
          } else _0x3606e3(4, _0x2dff50.reels && "object" == typeof _0x2dff50.reels, '', {
            sentry: "rare"
          }, true), _0x43f4e6 = globalThis.Object.values(_0x2dff50.reels);
          return _0x43f4e6;
        },
        fetchPosts: async _0x348a7f => {
          const {
            assert$: _0x506b47
          } = _0x442618("od");
          _0x506b47(1, _0x348a7f, '', {
            sentry: false
          }, true);
          const _0x4a94fb = await _0x1b3585.fetchArchivedDates(_0x348a7f);
          _0x506b47(2, globalThis.Array.isArray(_0x4a94fb), '', {
            sentry: "rare"
          }, true);
          const _0x3f57ed = await _0x930a07.module("PolarisStoryAPIActions").fetchReelsMedia(_0x4a94fb.map(_0xe06f1f => null == _0xe06f1f ? undefined : _0xe06f1f.id));
          return _0x506b47(3, _0x3f57ed, '', {
            sentry: "rare",
            networkRelated: true
          }, true), _0x506b47(4, _0x3f57ed.posts, '', {
            sentry: "rare"
          }, true), globalThis.Object.values(_0x3f57ed.posts);
        },
        createStory: async _0xfe784f => {
          var _0xe90864;
          const {
            assert$: _0x29f70e
          } = _0x442618("gyn");
          _0x29f70e(1, !!_0xfe784f, '', {
            sentry: false
          }, true), _0x29f70e(2, _0xfe784f.blob, '', {
            sentry: false
          }, true);
          const _0x567ecb = _0xfe784f.blob.type.split("/")[0];
          let _0xdecc0a = _0xfe784f.blob;
          _0x567ecb && (_0xdecc0a = await _0x334477(_0xfe784f.blob, false), _0xdecc0a = _0xfe784f.caption ? await _0x4ec9a1(_0xdecc0a, _0xfe784f.caption.text, {
            compress: false,
            style: "instagram",
            styleOpts: {
              rotation: _0xfe784f.caption.rotation,
              scale: _0xfe784f.caption.scale,
              heightPercentage: _0xfe784f.caption.height,
              useIgFont: true,
              useIgScaling: true
            }
          }) : _0xdecc0a);
          const _0x33c1e2 = "image" === _0x567ecb ? await _0x27ceb9.uploadPhoto({
            blob: _0xdecc0a,
            compress: true
          }) : "video" === _0x567ecb ? await _0x27ceb9.uploadVideo({
            blob: _0xdecc0a,
            mediaType: "REEL"
          }) : undefined;
          _0x29f70e(3, _0x33c1e2, '', {
            sentry: "rare"
          }, true);
          const _0x3cf9f2 = _0x930a07.module("PolarisInstapi"),
            _0x4e1220 = _0x29f70e(4, (await _0x930a07.loadModule("PolarisAPICreationFinalizeStory", "PolarisFeedRoot.react")).creationFinalizeStory, '', {
              sentry: "rare"
            }, true),
            _0x5a326a = [..._0x29f70e(5, _0x4e1220.toString(), '', {
              sentry: "rare"
            }, true).matchAll(/apiPost\("([\w|\/]*?)",\s*{body:/g)],
            _0x5760dd = _0x29f70e(6, null === (_0xe90864 = _0x5a326a[_0x5a326a.length - 1]) || undefined === _0xe90864 ? undefined : _0xe90864[1], '', {
              sentry: "rare"
            }, true);
          return await _0x3cf9f2.apiPost(_0x5760dd, {
            body: {
              caption: '',
              configure_mode: "1",
              upload_id: _0x33c1e2.uploadId,
              ...(_0xfe784f.closeFriends ? {
                audience: "besties"
              } : {})
            }
          });
        }
      },
      _0x4274b4 = {
        Call: "WAWebCallCollection",
        GroupMetadata: "WAWebGroupMetadataCollection"
      },
      _0x2f8c1a = {
        ..._0x37d1fc,
        collections: {
          ["get"](_0x5ae0bb) {
            var _0x56a196;
            const {
              assert$: _0xc19070
            } = _0x442618("qjwawwp");
            _0xc19070(1, _0x5ae0bb, '', {
              sentry: false
            }, true), _0xc19070(2, "string" == typeof _0x5ae0bb, '', {
              sentry: false
            }, true);
            const _0x1408cc = _0x2f8c1a.module("WAWebCollections");
            return _0x5ae0bb ? _0xc19070(3, null !== (_0x56a196 = _0x1408cc[_0x5ae0bb]) && undefined !== _0x56a196 ? _0x56a196 : _0x1408cc[_0x4274b4[_0x5ae0bb]], '', {
              sentry: "rare"
            }, true) : _0x1408cc;
          },
          ["models"](_0x68b60f, _0x2a013a = true) {
            const {
              assert$: _0x1cd5d6
            } = _0x442618("zliwaec");
            _0x1cd5d6(1, _0x68b60f, '', {
              sentry: false
            }, true), _0x1cd5d6(2, "string" == typeof _0x68b60f, '', {
              sentry: false
            }, true);
            const _0x5c25a6 = _0x2f8c1a.collections.get(_0x68b60f),
              _0x701c2b = globalThis.Object.values(_0x5c25a6._models);
            return _0x2a013a ? _0x701c2b.map(_0x287082 => _0x287082.toJSON()) : _0x701c2b;
          },
          ["model"](_0x2ac7d9, _0x464c9c, _0x4b1907 = true) {
            const {
              assert$: _0x2076d3
            } = _0x442618("zkpqrbsn");
            _0x2076d3(1, _0x2ac7d9, '', {
              sentry: false
            }, true), _0x2076d3(2, "string" == typeof _0x2ac7d9, '', {
              sentry: false
            }, true), _0x2076d3(3, _0x464c9c, '', {
              sentry: false
            }, true), _0x2076d3(4, "string" == typeof _0x464c9c, '', {
              sentry: false
            }, true);
            const _0x530806 = _0x2f8c1a.collections.get(_0x2ac7d9).get(_0x464c9c);
            return _0x4b1907 ? _0x530806.toJSON() : _0x530806;
          }
        }
      },
      _0x15b249 = {
        listActiveCalls: () => _0x2f8c1a.collections.models("Call"),
        isUserCalling: _0x89328a => {
          const {
            assert$: _0x4f7fcd
          } = _0x442618("mucli");
          return _0x4f7fcd(1, _0x89328a.userId, '', {
            sentry: false
          }, true), !!_0x15b249.listActiveCalls().find(_0x2265a8 => globalThis.String(null == _0x2265a8 ? undefined : _0x2265a8.peerJid) === _0x89328a.userId && "ENDED" != (null == _0x2265a8 ? undefined : _0x2265a8.$Call1));
        }
      },
      _0xbacd69 = async _0x1d3a24 => {
        try {
          const _0x3efa01 = await _0x1d3a24.arrayBuffer(),
            _0x4493cc = new AudioContext(),
            _0x52407d = await _0x4493cc.decodeAudioData(_0x3efa01),
            _0x12c11d = _0x52407d.getChannelData(0),
            _0x1609a2 = 64,
            _0x59a819 = globalThis.Math.floor(_0x12c11d.length / _0x1609a2),
            _0x566ea7 = [];
          for (let _0x30773f = 0; _0x30773f < _0x1609a2; _0x30773f++) {
            const _0x323503 = _0x59a819 * _0x30773f;
            let _0x40b513 = 0;
            for (let _0x3ba725 = 0; _0x3ba725 < _0x59a819; _0x3ba725++) _0x40b513 += globalThis.Math.abs(_0x12c11d[_0x323503 + _0x3ba725]);
            _0x566ea7.push(_0x40b513 / _0x59a819);
          }
          const _0x2c0bf4 = globalThis.Math.pow(globalThis.Math.max(..._0x566ea7), -1),
            _0x59b026 = _0x566ea7.map(_0x52826f => _0x52826f * _0x2c0bf4),
            _0x3e3569 = new Uint8Array(_0x59b026.map(_0x3c4e61 => globalThis.Math.floor(100 * _0x3c4e61)));
          return {
            waveform: _0x3e3569,
            duration: _0x52407d.duration
          };
        } catch (_0x2e4f74) {
          return;
        }
      },
      _0xad0eda = {
        getCurrentUserId: (_0x12935b = {
          stringify: true
        }) => {
          var _0x37d5a3;
          const {
              assert$: _0x45e052
            } = _0x442618("ldowkzzm"),
            _0x28655f = _0x2f8c1a.module("WAWebUserPrefsMeUser"),
            _0x1d8dd1 = (null === (_0x37d5a3 = _0x28655f.getMeUser) || undefined === _0x37d5a3 ? undefined : _0x37d5a3.call(_0x28655f)) || _0x28655f.getMePnUserOrThrow();
          return _0x45e052(1, _0x12935b.stringify ? globalThis.String(_0x1d8dd1) : _0x1d8dd1, '', {
            sentry: false
          }, true);
        },
        getCurrentUser: () => {
          const _0x952638 = _0xad0eda.getCurrentUserId();
          return _0xad0eda.getUser({
            userId: _0x952638
          });
        },
        getUser: _0xfe8ac9 => {
          const {
            assert$: _0x22f3fc
          } = _0x442618("kvpo");
          _0x22f3fc(1, "object" == typeof _0xfe8ac9, '', {
            sentry: false
          }, true), _0x22f3fc(2, _0xfe8ac9.userId, '', {
            sentry: false
          }, true), _0x22f3fc(3, "string" == typeof _0xfe8ac9.userId, '', {
            sentry: false
          }, true);
          const {
            userId: _0x566ff6,
            clean: _0x3860a3 = true
          } = _0xfe8ac9;
          return _0x22f3fc(4, _0x2f8c1a.collections.model("Contact", _0x566ff6, _0x3860a3), '', {
            sentry: "rare"
          }, true);
        },
        getUsers: (_0x54e14c = {}) => {
          var _0x587ffc;
          return _0x2f8c1a.collections.models("Contact", null === (_0x587ffc = _0x54e14c.clean) || undefined === _0x587ffc || _0x587ffc);
        },
        getProfilePics: (_0x117082 = {}) => {
          var _0x607e3a;
          return _0x2f8c1a.collections.models("ProfilePicThumb", null === (_0x607e3a = _0x117082.clean) || undefined === _0x607e3a || _0x607e3a);
        },
        getUserAbout: async _0x2c0237 => {
          const _0xe8a6e0 = _0xad0eda.getUser({
            userId: _0x2c0237.userId,
            clean: false
          });
          if (_0xe8a6e0.status) return _0xe8a6e0.status.toJSON();
          const _0x4bd911 = _0x2f8c1a.module("WAWebMexFetchAboutStatusJob"),
            _0xa519eb = await _0x4bd911.mexGetAbout(_0xe8a6e0.id);
          return null == _0xa519eb ? undefined : _0xa519eb.status;
        }
      },
      _0x5f4c5f = {
        getMessages: _0x24f969 => {
          var _0x2a7b6f;
          const {
            assert$: _0x5c31f7
          } = _0x442618("xmkhmhuh");
          return _0x5c31f7(1, _0x24f969, '', {
            sentry: false
          }, true), _0x5c31f7(2, _0x24f969.chatId, '', {
            sentry: false
          }, true), _0x5c31f7(3, "string" == typeof _0x24f969.chatId, '', {
            sentry: false
          }, true), _0x5c31f7(4, _0x423df0.getChat({
            chatId: _0x24f969.chatId,
            clean: null === (_0x2a7b6f = _0x24f969.clean) || undefined === _0x2a7b6f || _0x2a7b6f
          }).msgs, '', {
            sentry: "rare"
          }, true);
        },
        paginateMessages: async _0x19c013 => {
          const {
            assert$: _0x4a4243
          } = _0x442618("oteix");
          _0x4a4243(1, _0x19c013, '', {
            sentry: false
          }, true), _0x4a4243(2, _0x19c013.chatId, '', {
            sentry: false
          }, true), _0x4a4243(3, "string" == typeof _0x19c013.chatId, '', {
            sentry: false
          }, true);
          const _0x97a473 = _0x2f8c1a.module("WAWebChatLoadMessages"),
            _0x3d1ad6 = _0x423df0.getChat({
              chatId: _0x19c013.chatId,
              clean: false
            });
          return await _0x97a473.loadEarlierMsgs(_0x3d1ad6), _0x5f4c5f.getMessages(_0x19c013);
        },
        sendTextMessage: async _0x2016cb => {
          const {
            assert$: _0x709af8
          } = _0x442618("uaqv");
          _0x709af8(1, "object" == typeof _0x2016cb, '', {
            sentry: false
          }, true), _0x709af8(2, _0x2016cb.chatId, '', {
            sentry: false
          }, true), _0x709af8(3, "string" == typeof _0x2016cb.chatId, '', {
            sentry: false
          }, true), _0x709af8(4, _0x2016cb.message, '', {
            sentry: false
          }, true), _0x709af8(5, "string" == typeof _0x2016cb.message, '', {
            sentry: false
          }, true);
          const {
              addAndSendMsgToChat: _0x649dff
            } = _0x2f8c1a.module("WAWebSendMsgChatAction"),
            _0x2d22c0 = _0x2f8c1a.module("WAWebMsgKey"),
            _0x274c5c = _0x423df0.getChat({
              chatId: _0x2016cb.chatId,
              clean: false
            }),
            _0x48c73f = _0xad0eda.getCurrentUserId({
              stringify: false
            }),
            [_0xb3036b, _0x26c8ad] = await _0x649dff(_0x274c5c, {
              type: "chat",
              ack: 0,
              id: new _0x2d22c0({
                from: _0x48c73f,
                to: _0x274c5c.id,
                id: await _0x2d22c0.newId(),
                participant: undefined,
                selfDir: "out"
              }),
              body: _0x2016cb.message,
              from: _0x48c73f,
              to: _0x274c5c.id,
              self: "out",
              t: globalThis.Math.floor(globalThis.Date.now() / 1000),
              isNewMsg: true,
              local: true
            });
          return await _0x26c8ad;
        },
        sendMediaMessage: async _0x58c243 => {
          const {
            assert$: _0x192948
          } = _0x442618("onoejprr");
          _0x192948(1, "object" == typeof _0x58c243, '', {
            sentry: false
          }, true), _0x192948(2, _0x58c243.chatId, '', {
            sentry: false
          }, true), _0x192948(3, "string" == typeof _0x58c243.chatId, '', {
            sentry: false
          }, true), _0x192948(4, _0x58c243.blob, '', {
            sentry: false
          }, true), _0x192948(5, _0x58c243.blob instanceof Blob, '', {
            sentry: false
          }, true), _0x192948(6, _0x58c243.blobExtension, '', {
            sentry: false
          }, true), _0x192948(7, "string" == typeof _0x58c243.blobExtension, '', {
            sentry: false
          }, true);
          const _0x307859 = _0x58c243.blob.type,
            _0x1683ad = _0x307859.startsWith("image") ? await _0x5dc537(_0x58c243.blob, {
              compress: true,
              width: 1080
            }) : _0x58c243.blob,
            _0x20b48e = _0x2f8c1a.module("WAWebMediaOpaqueData"),
            _0x31ee92 = _0x2f8c1a.module("WAWebPrepRawMedia"),
            _0x1fb1cb = _0x2f8c1a.module("WAWebMediaPrep"),
            _0x55e72e = _0x31ee92.prepRawMedia,
            _0x3018d6 = _0x20b48e.createFromData,
            _0x409f1f = _0x1fb1cb.sendMediaMsgToChat,
            _0x56cbe7 = _0x423df0.getChat({
              chatId: _0x58c243.chatId,
              clean: false
            }),
            _0x299fb6 = _0x192948(8, _0x3018d6(_0x1683ad, _0x307859), '', {
              sentry: "rare"
            }, true),
            _0x3bc759 = _0x192948(9, _0x55e72e(_0x299fb6, _0x307859), '', {
              sentry: "rare"
            }, true),
            _0x21d850 = _0x192948(10, await _0x3bc759.waitForPrep(), '', {
              sentry: "rare"
            }, true),
            _0x125107 = _0x491d77(10) + "." + _0x58c243.blobExtension;
          if (_0x58c243.asAudio) {
            const _0x40da38 = new File([_0x1683ad], _0x125107, {
              type: _0x307859
            });
            _0x21d850.type = "ptt", _0x21d850.waveform = _0x192948(11, (await _0xbacd69(_0x40da38)).waveform, '', {
              sentry: "rare"
            }, true);
          }
          return await _0x409f1f(_0x3bc759, _0x56cbe7, {
            chat: _0x56cbe7,
            isViewOnce: _0x58c243.asEphemeral
          });
        },
        openEphemeralMedia: async _0x106e47 => {
          const {
            assert$: _0xd2de4e
          } = _0x442618("ztzszm");
          _0xd2de4e(1, _0x106e47, '', {
            sentry: false
          }, true), _0xd2de4e(2, _0x106e47.messageId, '', {
            sentry: false
          }, true), _0xd2de4e(3, "number" == typeof _0x106e47.messageId, '', {
            sentry: false
          }, true);
          const _0x4d001e = _0x2f8c1a.collections.model("Msg", _0x106e47.messageId),
            _0x378f28 = _0x2f8c1a.module("WAWebMarkPlayedMsgAction");
          return _0xd2de4e(4, _0x4d001e, '', {
            sentry: "rare"
          }, true), await _0x378f28.markPlayed(_0x4d001e);
        },
        processMessage: _0x479c88 => {
          var _0x5c1fc2, _0x2ff1d7, _0xae1fe0, _0x12c4e6;
          const {
              message: _0x4195d0,
              currentUser: _0x45d163
            } = _0x479c88.ir,
            _0x344db6 = !!(null == _0x4195d0 ? undefined : _0x4195d0.isAvatar),
            _0x3abd48 = "image" === (null == _0x4195d0 ? undefined : _0x4195d0.type),
            _0x124b82 = "audio" === (null == _0x4195d0 ? undefined : _0x4195d0.type),
            _0x14d8a8 = "ptt" === (null == _0x4195d0 ? undefined : _0x4195d0.type),
            _0x4750cc = "document" === (null == _0x4195d0 ? undefined : _0x4195d0.type),
            _0x3f8e28 = "sticker" === (null == _0x4195d0 ? undefined : _0x4195d0.type) || _0x344db6,
            _0x119445 = "poll_creation" === (null == _0x4195d0 ? undefined : _0x4195d0.type),
            _0xf5999a = "chat" === (null == _0x4195d0 ? undefined : _0x4195d0.type),
            _0x54dd67 = globalThis.String(null == _0x4195d0 ? undefined : _0x4195d0.from) !== globalThis.String(null == _0x45d163 ? undefined : _0x45d163.id),
            _0x1a713a = null == _0x4195d0 ? undefined : _0x4195d0.ack,
            _0x13f253 = !!(null == _0x4195d0 ? undefined : _0x4195d0.isViewOnce),
            _0x1494b2 = !!(null == _0x4195d0 ? undefined : _0x4195d0.isGif),
            _0x20fc45 = "video" === (null == _0x4195d0 ? undefined : _0x4195d0.type) && !_0x1494b2,
            _0x4479a8 = !!(null == _0x4195d0 ? undefined : _0x4195d0.isLive),
            _0x2b102a = !!(null == _0x4195d0 ? undefined : _0x4195d0.isForwarded),
            _0x5a2647 = !!(null == _0x4195d0 ? undefined : _0x4195d0.quotedMsg),
            _0x28b89f = "status" === (null === (_0x5c1fc2 = null == _0x4195d0 ? undefined : _0x4195d0.quotedRemoteJid) || undefined === _0x5c1fc2 ? undefined : _0x5c1fc2.user),
            _0x5b77a0 = "call_log" === (null == _0x4195d0 ? undefined : _0x4195d0.type),
            _0x1f8815 = _0x5b77a0 && "miss_video" === _0x4195d0.subtype,
            _0x365389 = !!(null == _0x4195d0 ? undefined : _0x4195d0.paymentCurrency),
            _0x21c00b = "vcard" === (null == _0x4195d0 ? undefined : _0x4195d0.type) && ((null === (_0x2ff1d7 = null == _0x4195d0 ? undefined : _0x4195d0.body) || undefined === _0x2ff1d7 ? undefined : _0x2ff1d7.includes("TEL;type=CELL;waid=")) || (null === (_0xae1fe0 = null == _0x4195d0 ? undefined : _0x4195d0.body) || undefined === _0xae1fe0 ? undefined : _0xae1fe0.includes("TEL;waid=")) || (null === (_0x12c4e6 = null == _0x4195d0 ? undefined : _0x4195d0.body) || undefined === _0x12c4e6 ? undefined : _0x12c4e6.includes("TEL:"))),
            _0x5801ce = "unknown" === (null == _0x4195d0 ? undefined : _0x4195d0.type) && "phone_only_feature" === (null == _0x4195d0 ? undefined : _0x4195d0.subtype),
            _0x2f4cde = "groups_v4_invite" === (null == _0x4195d0 ? undefined : _0x4195d0.type),
            _0x1ce27b = "ephemeral_setting" === (null == _0x4195d0 ? undefined : _0x4195d0.subtype),
            _0x4fab12 = "location" === (null == _0x4195d0 ? undefined : _0x4195d0.type),
            _0x1cb48f = "revoked" === (null == _0x4195d0 ? undefined : _0x4195d0.type),
            _0x2b2a43 = 0 == (null == _0x4195d0 ? undefined : _0x4195d0.isSendFailure);
          return _0x5a8493({
            id: _0x4195d0.id._serialized,
            msg: _0xf5999a ? _0x4195d0.body : _0x4195d0.caption,
            timestamp: _0x4195d0.t,
            hasSent: _0x2b2a43,
            isIncoming: _0x54dd67,
            ack: _0x1a713a,
            isVideo: _0x20fc45,
            isPhoto: _0x3abd48,
            isAudio: _0x124b82,
            isRecording: _0x14d8a8,
            isContact: _0x21c00b,
            isDocument: _0x4750cc,
            isSticker: _0x3f8e28,
            isGif: _0x1494b2,
            isDeleted: _0x1cb48f,
            isPoll: _0x119445,
            isPayment: _0x365389,
            isLive: _0x4479a8,
            isLocation: _0x4fab12,
            isEphemeralEnabled: _0x1ce27b,
            isCall: _0x5b77a0,
            isVideoCall: _0x1f8815,
            isForwarded: _0x2b102a,
            isViewOnce: _0x13f253,
            isUnsupported: _0x5801ce,
            isGroupInvite: _0x2f4cde,
            isReply: _0x5a2647,
            isStoryReply: _0x28b89f
          });
        },
        processMessages: async _0x3ae2c7 => {
          const {
            assert$: _0x216999
          } = _0x442618("iyvfw");
          _0x216999(1, _0x3ae2c7, '', {
            sentry: false
          }, true), _0x216999(2, _0x3ae2c7.chatId, '', {
            sentry: false
          }, true), _0x216999(3, "string" == typeof _0x3ae2c7.chatId, '', {
            sentry: false
          }, true);
          const _0x27ba77 = _0x5f4c5f.getMessages({
              chatId: _0x3ae2c7.chatId
            }),
            _0x16da09 = [],
            _0x11aa96 = _0xad0eda.getCurrentUser(),
            _0x47993f = _0x216999(4, _0x423df0.getChat({
              chatId: _0x3ae2c7.chatId,
              clean: false
            }).contact, '', {
              sentry: "rare"
            }, true),
            _0x4678cc = _0x216999(5, _0x47993f.toJSON(), '', {
              sentry: "rare"
            }, true);
          for (const _0x3bbfe9 of _0x27ba77) {
            if ("pinned_message" === (null == _0x3bbfe9 ? undefined : _0x3bbfe9.type)) continue;
            const _0x3b7c5e = {
                message: _0x3bbfe9,
                currentUser: _0x11aa96,
                chatUser: _0x4678cc
              },
              _0x47f847 = _0x5f4c5f.processMessage({
                ir: _0x3b7c5e
              });
            _0x16da09.push(_0x2bc8ec(_0x47f847));
          }
          return _0x16da09;
        }
      };
    function _0x2bc8ec(_0x3b709f) {
      var _0x12f477;
      _0x3b709f.ogMsg = _0x3b709f.msg;
      let _0x15fc01 = null !== (_0x12f477 = _0x3b709f.msg) && undefined !== _0x12f477 ? _0x12f477 : '';
      const _0x5c84a6 = _0x3b709f.isIncoming ? "your" : "his";
      return _0x3b709f.isVideo ? _0x15fc01 = "[video] " + _0x15fc01 : _0x3b709f.isPhoto ? _0x15fc01 = "[photo] " + _0x15fc01 : _0x3b709f.isAudio || _0x3b709f.isRecording ? _0x15fc01 = "[audio-message] " + _0x15fc01 : _0x3b709f.isContact ? _0x15fc01 = "[contact-shared] " + _0x15fc01 : _0x3b709f.isDocument ? _0x15fc01 = "[file-shared] " + _0x15fc01 : _0x3b709f.isSticker ? _0x15fc01 = "[sticker] " + _0x15fc01 : _0x3b709f.isGif ? _0x15fc01 = "[GIF] " + _0x15fc01 : _0x3b709f.isPoll ? _0x15fc01 = "[poll] " + _0x15fc01 : _0x3b709f.isPayment ? _0x15fc01 = "[payment] " + _0x15fc01 : _0x3b709f.isLocation ? _0x15fc01 = "[location-shared] " + _0x15fc01 : _0x3b709f.isCall || _0x3b709f.isVideoCall ? _0x15fc01 = _0x3b709f.isIncoming ? "[tried-to-call-you] " + _0x15fc01 : "[call] " + _0x15fc01 : _0x3b709f.isGroupInvite ? _0x15fc01 = "[group-invite] " + _0x15fc01 : _0x3b709f.isEphemeralEnabled ? _0x15fc01 = "[enabled-ephemeral-chatting] " + _0x15fc01 : _0x3b709f.isUnsupported ? _0x15fc01 = "[message-not-supported] " + _0x15fc01 : _0x3b709f.isDeleted && (_0x15fc01 = "[deleted-message] " + _0x15fc01), _0x15fc01 = _0x15fc01.trim(), _0x3b709f.isStoryReply && (_0x15fc01 = "[replied-to-" + _0x5c84a6 + "-story] " + _0x15fc01), _0x3b709f.isForwarded && (_0x15fc01 = "[forwarded] " + _0x15fc01), _0x15fc01 = _0x15fc01.trim(), _0x3b709f.msg = _0x15fc01, _0x3b709f;
    }
    const _0x423df0 = {
        getOpenChatId: () => {
          const {
              assert$: _0x38f7b4
            } = _0x442618("nmadcy"),
            _0x4e668b = _0x423df0.getOpenChat({
              clean: false
            });
          return _0x38f7b4(1, globalThis.String(null == _0x4e668b ? undefined : _0x4e668b.id), '', {
            sentry: false
          }, true);
        },
        getOpenChat: (_0x8e24c9 = {}) => {
          const {
            assert$: _0x288e01
          } = _0x442618("odswpj");
          _0x288e01(1, "object" == typeof _0x8e24c9, '', {
            sentry: false
          }, true);
          const {
              clean: _0x317ce5 = true
            } = _0x8e24c9,
            _0x199b6a = _0x288e01(2, _0x2f8c1a.collections.get("Chat").getActive(), '', {
              sentry: false
            }, true);
          return _0x317ce5 ? _0x199b6a.toJSON() : _0x199b6a;
        },
        getChats: (_0x52acdf = {}) => {
          const {
            assert$: _0x18294f
          } = _0x442618("aflpjdp");
          _0x18294f(1, "object" == typeof _0x52acdf, '', {
            sentry: false
          }, true);
          const {
            clean: _0x467859 = true
          } = _0x52acdf;
          return _0x2f8c1a.collections.models("Chat", _0x467859).reverse();
        },
        getChat: _0x51f1c2 => {
          const {
            assert$: _0xe15507
          } = _0x442618("mrpqfgl");
          _0xe15507(1, "object" == typeof _0x51f1c2, '', {
            sentry: false
          }, true), _0xe15507(2, _0x51f1c2.chatId, '', {
            sentry: false
          }, true), _0xe15507(3, "string" == typeof _0x51f1c2.chatId, '', {
            sentry: false
          }, true);
          const {
            chatId: _0xae21fb,
            clean: _0x44ac9a = true
          } = _0x51f1c2;
          return _0xe15507(4, _0x2f8c1a.collections.model("Chat", _0xae21fb, _0x44ac9a), '', {
            sentry: "rare"
          }, true);
        },
        getChatLastSeenMessage: _0x425a19 => {
          const {
            assert$: _0x1ee7f5
          } = _0x442618("wlcibnk");
          _0x1ee7f5(1, _0x425a19.chatId, '', {
            sentry: false
          }, true);
          const _0x2fd135 = _0x2f8c1a.module("WAWebAck");
          return _0x5f4c5f.getMessages(_0x425a19).findLast(_0x5680b2 => _0x5680b2.ack >= _0x2fd135.ACK.READ);
        },
        getChatLastReadTimestampInSeconds: _0x4630f3 => {
          var _0x10a3fa;
          return null === (_0x10a3fa = _0x423df0.getChatLastSeenMessage(_0x4630f3)) || undefined === _0x10a3fa ? undefined : _0x10a3fa.t;
        },
        viewChat: async _0x224c42 => {
          const {
            assert$: _0x38e33c
          } = _0x442618("zeye");
          _0x38e33c(1, _0x224c42, '', {
            sentry: false
          }, true), _0x38e33c(2, _0x224c42.chatId, '', {
            sentry: false
          }, true), _0x38e33c(3, "string" == typeof _0x224c42.chatId, '', {
            sentry: false
          }, true);
          const _0x53bca8 = _0x2f8c1a.module("WAWebSendReadReceiptJob"),
            _0xa26a06 = _0x2f8c1a.module("WAWebCmd"),
            _0x3d5b3e = _0x423df0.getChat({
              chatId: _0x224c42.chatId,
              clean: false
            });
          return await _0x53bca8.markChatRead(_0x3d5b3e), await _0xa26a06.Cmd.markChatUnread(_0x3d5b3e, false);
        },
        getGroups: (_0x325225 = {}) => {
          var _0x198e63;
          return _0x2f8c1a.collections.models("GroupMetadata", null === (_0x198e63 = _0x325225.clean) || undefined === _0x198e63 || _0x198e63);
        }
      },
      _0x38dc07 = {
        hasLoaded: () => {
          const _0x1b1c03 = !!_0x4cc3d2(() => _0x2f8c1a.module("WAWebCmd").Cmd.isMainStreamReadyMd),
            _0x213f63 = !!_0x4cc3d2(() => _0xad0eda.getCurrentUser());
          return _0x1b1c03 && _0x213f63;
        }
      },
      _0x199af7 = async _0xb93567 => {
        const {
          assert$: _0x5cf19b
        } = _0x442618("hhhcdkp");
        _0x5cf19b(1, _0xb93567, '', {
          sentry: false
        }, true), _0x5cf19b(2, _0xb93567.chatId, '', {
          sentry: false
        }, true), _0x5cf19b(3, "string" == typeof _0xb93567.chatId, '', {
          sentry: false
        }, true), _0x5cf19b(4, _0xb93567.state, '', {
          sentry: false
        }, true), _0x5cf19b(5, "string" == typeof _0xb93567.state, '', {
          sentry: false
        }, true);
        const _0x2c753a = _0x2f8c1a.module("WASendChatStateProtocol");
        return await _0x2c753a.sendChatStateProtocol(_0xb93567.chatId, _0xb93567.state);
      },
      _0x525056 = async _0x150c0e => {
        const {
          assert$: _0x565dfa
        } = _0x442618("dzeesm");
        _0x565dfa(1, "object" == typeof _0x150c0e, '', {
          sentry: false
        }, true);
        const _0x466bb0 = _0x2f8c1a.module("WAWebContactPresenceBridge"),
          _0x23301c = _0x150c0e.online ? "setPresenceAvailable" : "setPresenceUnavailable";
        return await _0x466bb0[_0x23301c]();
      },
      _0x49f84c = "recording",
      _0x5ea5ed = "typing",
      _0x487901 = "idle",
      _0x3aef5f = {
        startRecording: async _0x44273c => await _0x199af7({
          ..._0x44273c,
          state: "recording"
        }),
        stopRecording: async _0x481fc2 => await _0x199af7({
          ..._0x481fc2,
          state: "idle"
        }),
        startTyping: async _0x3c2557 => await _0x199af7({
          ..._0x3c2557,
          state: "typing"
        }),
        stopTyping: async _0x533fd7 => await _0x199af7({
          ..._0x533fd7,
          state: "idle"
        }),
        getPresence: _0x51e1dd => {
          const {
            assert$: _0x47dd79
          } = _0x442618("imqrgw");
          _0x47dd79(1, _0x51e1dd, '', {
            sentry: false
          }, true), _0x47dd79(2, _0x51e1dd.chatId, '', {
            sentry: false
          }, true), _0x47dd79(3, "string" == typeof _0x51e1dd.chatId, '', {
            sentry: false
          }, true);
          const _0xc0656f = _0x423df0.getChat({
            chatId: _0x51e1dd.chatId,
            clean: false
          });
          return _0x47dd79(4, null == _0xc0656f ? undefined : _0xc0656f.presence, '', {
            sentry: "rare"
          }, true);
        },
        getPresenceChatState: _0x260178 => {
          const {
            assert$: _0x1af86a
          } = _0x442618("cnken");
          _0x1af86a(1, _0x260178, '', {
            sentry: false
          }, true), _0x1af86a(2, _0x260178.chatId, '', {
            sentry: false
          }, true), _0x1af86a(3, "string" == typeof _0x260178.chatId, '', {
            sentry: false
          }, true);
          const _0x252122 = _0x3aef5f.getPresence(_0x260178);
          return _0x1af86a(4, null == _0x252122 ? undefined : _0x252122.chatstate, '', {
            sentry: "rare"
          }, true);
        },
        getPresenceType: _0x17ca5c => {
          const {
            assert$: _0x463634
          } = _0x442618("fvap");
          return _0x463634(1, _0x17ca5c, '', {
            sentry: false
          }, true), _0x463634(2, _0x17ca5c.chatId, '', {
            sentry: false
          }, true), _0x463634(3, "string" == typeof _0x17ca5c.chatId, '', {
            sentry: false
          }, true), _0x3aef5f.getPresenceChatState(_0x17ca5c).type;
        },
        startPresence: async () => await _0x525056({
          online: true
        }),
        stopPresence: async () => await _0x525056({
          online: false
        }),
        isRecipientPresent: async _0x5e6bda => {
          const {
            assert$: _0x2deeb7
          } = _0x442618("bvpag");
          if (_0x2deeb7(1, _0x5e6bda, '', {
            sentry: false
          }, true), _0x2deeb7(2, _0x5e6bda.chatId, '', {
            sentry: false
          }, true), _0x2deeb7(3, "string" == typeof _0x5e6bda.chatId, '', {
            sentry: false
          }, true), _0x3aef5f.isRecipientOnline(_0x5e6bda)) return true;
          if (_0x3aef5f.isRecipientTyping(_0x5e6bda)) return true;
          if (_0x3aef5f.isRecipientRecording(_0x5e6bda)) return true;
          if (_0x15b249.isUserCalling({
            userId: _0x5e6bda.chatId
          })) return true;
          const _0x1d213d = _0x5f4c5f.getMessages({
              chatId: _0x5e6bda.chatId
            }),
            _0x24ce8c = _0x1d213d[_0x1d213d.length - 1],
            _0xe45672 = null == _0x24ce8c ? undefined : _0x24ce8c.t,
            _0x38d25a = _0x3aef5f.getRecipientLastOnlineInSeconds(_0x5e6bda),
            _0x34101b = await _0x423df0.getChatLastReadTimestampInSeconds(_0x5e6bda),
            _0x4e89e8 = (globalThis.Date.now() - _0x5e6bda.thresholdMs) / 1000;
          return _0x38d25a && _0x38d25a > _0x4e89e8 || _0x34101b && _0x34101b > _0x4e89e8 || _0xe45672 && _0xe45672 > _0x4e89e8;
        },
        isRecipientMessaging: async _0xa2f2a5 => !!_0x3aef5f.isRecipientTyping(_0xa2f2a5) || !!_0x3aef5f.isRecipientRecording(_0xa2f2a5) || !!_0x15b249.isUserCalling({
          userId: _0xa2f2a5.chatId
        }),
        isRecipientOnline: _0x557cbb => null == _0x3aef5f ? undefined : _0x3aef5f.getPresence(_0x557cbb).isOnline,
        isRecipientTyping: _0x55fd27 => "typing" === _0x3aef5f.getPresenceType(_0x55fd27),
        isRecipientRecording: _0x13617c => "recording_audio" === _0x3aef5f.getPresenceType(_0x13617c),
        getRecipientLastOnlineInSeconds: _0x3635b6 => null == _0x3aef5f ? undefined : _0x3aef5f.getPresenceChatState(_0x3635b6).t
      },
      _0x4ce4df = {
        setOnlineStatusEnabled: async _0x4a2393 => {
          const _0x10c5df = _0x37d1fc.module("WAWebSetPrivacyForOneCategoryAction");
          return await globalThis.Promise.all([_0x10c5df.setPrivacyForOneCategory({
            name: "last",
            value: _0x4a2393.enabled ? "all" : "none"
          }), _0x10c5df.setPrivacyForOneCategory({
            name: "online",
            value: _0x4a2393.enabled ? "all" : "match_last_seen"
          })]);
        }
      },
      _0x34a510 = {
        ..._0x2ff5c3,
        globals: {
          get: () => _0x34a510.globals.module().exportsMatched.value(),
          module: () => {
            const {
              message$: _0x18a63b
            } = _0x442618("dhfj");
            return _0x2ff5c3.findModule({
              key: "$$telegram-module",
              assert: _0x18a63b(1, '', {
                sentry: "rare"
              }, true),
              assertExport: _0x18a63b(2, '', {
                sentry: "rare"
              }, true),
              includes: ["getGlobal:"],
              exportsMeta: {
                includes: ["getGlobal:"]
              }
            });
          },
          set: _0xc4ed6c => _0x34a510.globals.get().setGlobal(_0xc4ed6c)
        },
        gramjs: {
          get: _0x5641bd => {
            const {
              assert$: _0x504034,
              message$: _0x2ba063
            } = _0x442618("giflkkgj");
            return _0x504034(1, _0x229767(_0x5641bd, _0x34a510.findModule({
              key: "$$telegram-gramjs",
              assert: _0x2ba063(2, '', {
                sentry: "rare"
              }, true),
              exportsMeta: {
                names: ["TelegramClient", "Api", "extensions", "helpers"]
              }
            }).exports), '', {
              sentry: "rare"
            }, true);
          },
          patch: (_0x3ba7ba, _0x162db3) => {
            const {
              assert$: _0x4ae2d0
            } = _0x442618("nznzz");
            _0x4ae2d0(1, _0x3ba7ba, '', {
              sentry: "rare"
            }, true);
            const _0xd6e6d1 = _0x34a510.gramjs.get(),
              _0x1cabcd = _0x4ae2d0(2, _0x229767(_0x3ba7ba, _0xd6e6d1), '', {
                sentry: "rare"
              }, true),
              _0x52b8db = _0x3ba7ba.split("->").slice(0, -1).join("->"),
              _0x44face = _0x3ba7ba.split("->").pop(),
              _0x4384ac = _0x4ae2d0(3, _0x229767(_0x52b8db, _0xd6e6d1), '', {
                sentry: "rare"
              }, true),
              _0x14507d = function (..._0x4b0761) {
                var _0x4704fe, _0x74567c;
                null === (_0x4704fe = _0x162db3.before) || undefined === _0x4704fe || _0x4704fe.call(this, ..._0x4b0761);
                const _0x2a4b2f = _0x162db3.replace ? _0x162db3.replace.call(this, ..._0x4b0761) : _0x1cabcd.call(this, ..._0x4b0761);
                return null === (_0x74567c = _0x162db3.after) || undefined === _0x74567c || _0x74567c.call(this, _0x2a4b2f), _0x2a4b2f;
              };
            return _0x162db3.constructor ? _0x4384ac[_0x44face] = class extends _0x1cabcd {
              constructor(..._0xb49264) {
                super(..._0xb49264), _0x162db3.constructor.call(this, ..._0xb49264);
              }
            } : _0x4384ac[_0x44face] = _0x14507d, () => _0x4384ac[_0x44face] = _0x1cabcd;
          }
        },
        api: {
          call: async (_0x56b292, ..._0x16def3) => {
            const {
                message$: _0x15d125
              } = _0x442618("weequa"),
              _0x317c3d = "type:\"callApi\"";
            return _0x2ff5c3.findModule({
              key: "$$telegram-api-call",
              assert: _0x15d125(1, '', {
                sentry: "rare"
              }, true),
              assertExport: _0x15d125(2, '', {
                sentry: "rare"
              }, true),
              exportsMeta: {
                includes: ["type:\"callApi\""]
              },
              includes: ["type:\"callApi\"", "type:\"callMethod\""]
            }).exportsMatched.value(_0x56b292, ..._0x16def3);
          }
        },
        store: {
          get: _0x4bbdc7 => _0x229767(_0x4bbdc7, _0x34a510.globals.get().getGlobal()),
          has: _0x1ae0c3 => null != _0x34a510.store.get(_0x1ae0c3),
          search: _0x3ef839 => _0x4d9a60(_0x34a510.store.get(), _0x3ef839, {
            cacheKey: null
          }),
          batch: _0xe8bc1c => {
            const {
              assert$: _0x4ec62d
            } = _0x442618("trjmi");
            _0x4ec62d(1, _0xe8bc1c, '', {
              sentry: "rare"
            }, true);
            const _0x353216 = _0x34a510.store.get();
            _0xe8bc1c({
              set: (_0x4319ea, _0x164e3) => {
                _0x4ec62d(2, _0x4319ea, '', {
                  sentry: "rare"
                }, true);
                const _0x4b61b7 = _0x4319ea.split("->").slice(0, -1).join("->"),
                  _0xa05c28 = _0x4319ea.split("->").pop();
                _0x4ec62d(3, _0x229767(_0x4b61b7, _0x353216), '', {
                  sentry: "rare",
                  extra: {
                    key: _0xa05c28
                  }
                }, true)[_0xa05c28] = _0x164e3;
              },
              assign: (_0x13dcea, _0x33d298, _0x90796b) => {
                let _0x5c042d;
                if (_0x4ec62d(4, _0x13dcea, '', {
                  sentry: "rare"
                }, true), _0x13dcea.endsWith("?")) {
                  const _0x5aa0e8 = (_0x13dcea = _0x13dcea.slice(0, -1)).split("->").slice(0, -1).join("->"),
                    _0x29a546 = _0x13dcea.split("->").pop(),
                    _0x341c0c = _0x4ec62d(5, _0x229767(_0x5aa0e8, _0x353216), '', {
                      sentry: "rare",
                      extra: {
                        key: _0x29a546
                      }
                    }, true);
                  _0x5c042d = _0x341c0c[_0x29a546] || (_0x341c0c[_0x29a546] = globalThis.Array.isArray(_0x33d298) ? [] : {});
                } else _0x5c042d = _0x4ec62d(6, _0x229767(_0x13dcea, _0x353216), '', {
                  sentry: "rare",
                  extra: {
                    path: _0x13dcea
                  }
                }, true);
                if (globalThis.Array.isArray(_0x5c042d)) _0x90796b ? _0x5c042d.push(..._0x33d298) : _0x5c042d.push(..._0x33d298.filter(_0x2c4245 => !_0x5c042d.includes(_0x2c4245)));else {
                  if ("object" == typeof _0x5c042d) {
                    if (_0x90796b) return globalThis.Object.assign(_0x5c042d, _0x33d298);
                    const _0x360125 = globalThis.Object.keys(_0x33d298),
                      _0x552c1d = globalThis.Object.keys(_0x5c042d);
                    _0x360125.filter(_0x475e00 => !_0x552c1d.includes(_0x475e00)).forEach(_0x37d005 => _0x5c042d[_0x37d005] = _0x33d298[_0x37d005]);
                  }
                }
              }
            }), _0x34a510.globals.set(_0x353216);
          }
        },
        actions: {
          getAll: () => _0x34a510.globals.get().getActions(),
          get: _0x5da76c => {
            const {
              assert$: _0x875de5
            } = _0x442618("bma");
            return _0x875de5(1, _0x229767(_0x5da76c, _0x34a510.actions.getAll()), '', {
              sentry: "rare"
            }, true);
          },
          call: (_0x27dd05, ..._0x116be6) => {
            const {
                assert$: _0x3e154b
              } = _0x442618("bma"),
              _0x275eab = _0x34a510.actions.getAll();
            _0x3e154b(1, _0x275eab, '', {
              sentry: "rare"
            }, true), _0x3e154b(2, _0x27dd05, '', {
              sentry: "rare"
            }, true), _0x3e154b(3, "string" == typeof _0x27dd05, '', {
              sentry: "rare"
            }, true);
            const _0x57c5bc = _0x275eab[_0x27dd05];
            return _0x3e154b(4, _0x57c5bc, '', {
              sentry: "rare"
            }, true), _0x57c5bc(..._0x116be6);
          }
        }
      };
    let _0x276e7d = null;
    const _0x187295 = {
        hasLoaded: async () => {
          const _0x505890 = _0x4cc3d2(() => !!_0x34a510.findChunkName()),
            _0x3e4728 = _0x4cc3d2(() => !!_0x61ce61.getCurrentUserId()),
            _0x358be9 = !!(await _0x217c2e.getChats()["catch"](() => null));
          return _0x505890 && _0x3e4728 && _0x358be9;
        },
        getPhoneCodes: () => {
          var _0x13697f, _0x21f283, _0x5d51ca;
          return null === (_0x5d51ca = null === (_0x21f283 = null === (_0x13697f = _0x34a510.globals.get()) || undefined === _0x13697f ? undefined : _0x13697f.getGlobal()) || undefined === _0x21f283 ? undefined : _0x21f283.countryList) || undefined === _0x5d51ca ? undefined : _0x5d51ca.phoneCodes;
        },
        getCountryFromPhoneNumber: _0x14402b => {
          const {
              message$: _0x295f6b,
              assert$: _0x15da39
            } = _0x442618("x9fhm2"),
            _0xb7e269 = /return\s+[^\s;?.]+(?:[^\n;]*?)\?\.\s*country/,
            _0x4a4236 = _0x2ff5c3.findModule({
              key: "discord->channel-ack",
              assert: _0x295f6b(1, '', {
                sentry: "rare"
              }, true),
              includes: [_0xb7e269]
            }),
            _0x127257 = globalThis.Object.values(_0x4a4236.exports).find(_0x4b099d => _0xb7e269.test(_0x4b099d.toString()));
          _0x15da39(2, _0x127257, '', {
            sentry: "rare"
          }, true);
          const _0x1b566e = _0x187295.getPhoneCodes();
          if (!_0x1b566e || 0 === _0x1b566e.length) return (!_0x276e7d || globalThis.Date.now() - _0x276e7d > 60000) && (_0x34a510.actions.call("loadCountryList", {
            langCode: "en"
          }), _0x276e7d = globalThis.Date.now()), null;
          const _0x1f9f98 = _0x127257(_0x1b566e, _0x14402b);
          return _0x14402b && _0x14402b.startsWith("+1") && _0x15da39(5, _0x1f9f98, '', {
            sentry: "rare",
            extra: {
              phoneNumber: _0x14402b
            }
          }, true), null == _0x1f9f98 ? undefined : _0x1f9f98.iso2;
        }
      },
      _0x61ce61 = {
        getCurrentUser: () => _0x61ce61.getUser({
          userId: _0x61ce61.getCurrentUserId()
        }),
        getCurrentUserId: () => {
          const {
            assert$: _0x118ae9
          } = _0x442618("bgnjvilm");
          return _0x118ae9(1, _0x34a510.store.get("currentUserId"), '', {
            sentry: "rare"
          }, true);
        },
        getUsers: (_0x4860ab = {}) => {
          const {
              assert$: _0x317b3e
            } = _0x442618("cdna"),
            _0x23ee09 = _0x317b3e(1, _0x34a510.store.get("users->byId"), '', {
              sentry: "rare"
            }, true);
          for (const _0xd9faf8 of globalThis.Object.values(_0x23ee09)) if (_0x4860ab.getCountry && _0xd9faf8.phoneNumber) {
            const _0x1f0080 = _0x187295.getCountryFromPhoneNumber(_0xd9faf8.phoneNumber);
            _0x1f0080 && (_0xd9faf8.tgCountry = _0x1f0080);
          }
          return _0x23ee09;
        },
        getUser: _0x3ddeb5 => {
          const {
            assert$: _0x4052e3
          } = _0x442618("wfzqpnwd");
          return _0x4052e3(1, _0x3ddeb5, '', {
            sentry: false
          }, true), _0x4052e3(2, _0x3ddeb5.userId, '', {
            sentry: false
          }, true), _0x4052e3(3, "string" == typeof _0x3ddeb5.userId, '', {
            sentry: false
          }, true), _0x4052e3(4, _0x34a510.store.get("users->byId->" + _0x3ddeb5.userId), '', {
            sentry: "rare",
            extra: {
              userId: _0x3ddeb5.userId
            }
          }, true);
        },
        getFullUser: _0x2b4e26 => {
          const {
            assert$: _0x13b897
          } = _0x442618("axy7e9");
          _0x13b897(1, null == _0x2b4e26 ? undefined : _0x2b4e26.userId, '', {
            sentry: false
          }, true), _0x13b897(2, "string" == typeof (null == _0x2b4e26 ? undefined : _0x2b4e26.userId), '', {
            sentry: false
          }, true);
          const _0x4c3962 = _0x34a510.store.get("users->fullInfoById->" + _0x2b4e26.userId);
          return _0x13b897(3, _0x2b4e26.dontAssert || _0x4c3962, '', {
            sentry: false
          }, true), _0x4c3962;
        },
        getFullUsers: () => _0x34a510.store.get("users->fullInfoById"),
        fetchUserByUsername: async _0x442384 => {
          var _0x20faf9, _0x8f1019;
          const {
            assert$: _0x475fef,
            throw$: _0x109a02
          } = _0x442618("vdcmu");
          _0x475fef(1, _0x442384, '', {
            sentry: false
          }, true), _0x475fef(2, _0x442384.username, '', {
            sentry: false
          }, true), _0x475fef(3, "string" == typeof _0x442384.username, '', {
            sentry: false
          }, true);
          const _0x53f9eb = await _0x34a510.api.call("getChatByUsername", _0x442384.username);
          let _0xa54563,
            _0x54bcdd = null;
          if (_0x53f9eb) globalThis.console.log("getChatByUsername", _0x53f9eb), _0xa54563 = _0x475fef(4, _0x53f9eb.chat, '', {
            sentry: "rare"
          }, true), _0x54bcdd = _0x475fef(5, _0x53f9eb.user, '', {
            sentry: "rare"
          }, true);else {
            const _0x4e2ce1 = await _0x34a510.api.call("searchChats", {
              query: _0x442384.username
            });
            globalThis.console.log("searchChats", _0x4e2ce1), _0x54bcdd = null === (_0x20faf9 = null == _0x4e2ce1 ? undefined : _0x4e2ce1.users) || undefined === _0x20faf9 ? undefined : _0x20faf9.find(_0x1184b4 => {
              var _0x131e29;
              return null === (_0x131e29 = _0x1184b4.usernames) || undefined === _0x131e29 ? undefined : _0x131e29.find(_0x3c7bde => {
                var _0x584725;
                return _0x3c7bde.isActive && (null === (_0x584725 = _0x3c7bde.username) || undefined === _0x584725 ? undefined : _0x584725.toLowerCase()) === _0x442384.username.toLowerCase();
              });
            }), _0xa54563 = null === (_0x8f1019 = null == _0x4e2ce1 ? undefined : _0x4e2ce1.chats) || undefined === _0x8f1019 ? undefined : _0x8f1019.find(_0x4f6d53 => _0x4f6d53.id === (null == _0x54bcdd ? undefined : _0x54bcdd.id));
          }
          _0xa54563 && _0x54bcdd || _0x109a02(6, '', {
            sentry: "veryRare",
            networkRelated: true
          }, true);
          const _0x266a64 = {
            [_0x54bcdd.id]: _0x54bcdd
          };
          return _0x34a510.store.batch(({
            assign: _0x596235,
            set: _0x23f67f
          }) => {
            _0x596235("users->byId", _0x266a64);
          }), {
            chat: _0xa54563,
            user: _0x54bcdd
          };
        },
        loadFullUser: async _0x257489 => {
          const {
            assert$: _0x1a1b90,
            message$: _0x34a9c4
          } = _0x442618("fxm9327");
          _0x1a1b90(1, null == _0x257489 ? undefined : _0x257489.userId, '', {
            sentry: false
          }, true), _0x1a1b90(2, "string" == typeof (null == _0x257489 ? undefined : _0x257489.userId), '', {
            sentry: false
          }, true);
          const _0x314185 = _0x61ce61.getFullUser({
            userId: _0x257489.userId,
            dontAssert: true
          });
          return _0x314185 || (await _0x34a510.actions.call("loadFullUser", {
            userId: _0x257489.userId
          }), _0x61ce61.getFullUser({
            userId: _0x257489.userId
          }));
        }
      },
      _0x57deb6 = async _0x347edf => {
        let {
          chatId: _0x579b6b,
          threadId: _0x556281 = -1,
          message: _0x3219ca,
          attachment: _0x54c746
        } = _0x347edf;
        const _0x32c1c8 = _0x347edf.chat || _0x217c2e.getChat({
          chatId: _0x579b6b
        });
        return await _0x34a510.actions.call("sendMessage", {
          attachments: null != _0x54c746 ? _0x54c746 : [],
          chat: _0x32c1c8,
          text: _0x3219ca,
          messageList: {
            chatId: _0x32c1c8.id,
            threadId: _0x556281 || -1,
            type: "thread"
          }
        });
      },
      _0x5cbbd3 = {
        getMessage: _0x34b83e => {
          const {
            assert$: _0x9e428b
          } = _0x442618("bvmoacmx");
          return _0x9e428b(1, _0x34b83e, '', {
            sentry: false
          }, true), _0x9e428b(2, _0x34b83e.chatId, '', {
            sentry: false
          }, true), _0x9e428b(3, _0x34b83e.messageId, '', {
            sentry: false
          }, true), _0x9e428b(4, "string" == typeof _0x34b83e.chatId, '', {
            sentry: false
          }, true), _0x9e428b(5, "number" == typeof _0x34b83e.messageId, '', {
            sentry: false
          }, true), _0x34a510.store.get("messages->byChatId->" + _0x34b83e.chatId + "->byId->" + _0x34b83e.messageId);
        },
        fetchMessage: async _0x3b465c => {
          const {
            assert$: _0x1fc1aa
          } = _0x442618("saneyb");
          _0x1fc1aa(1, _0x3b465c, '', {
            sentry: false
          }, true), _0x1fc1aa(2, _0x3b465c.chatId, '', {
            sentry: false
          }, true), _0x1fc1aa(3, _0x3b465c.messageId, '', {
            sentry: false
          }, true), _0x1fc1aa(4, "string" == typeof _0x3b465c.chatId, '', {
            sentry: false
          }, true), _0x1fc1aa(5, "number" == typeof _0x3b465c.messageId, '', {
            sentry: false
          }, true);
          const _0x3dcbf6 = _0x5cbbd3.getMessage(_0x3b465c);
          return _0x3dcbf6 || (await _0x34a510.actions.call("loadMessage", {
            chatId: _0x3b465c.chatId,
            messageId: _0x3b465c.messageId
          }), _0x5cbbd3.getMessage(_0x3b465c));
        },
        getMessages: _0x2cc4a1 => {
          var _0x255280;
          const {
            assert$: _0x22c141
          } = _0x442618("ayifbdxc");
          _0x22c141(1, _0x2cc4a1, '', {
            sentry: false
          }, true), _0x22c141(2, _0x2cc4a1.chatId, '', {
            sentry: false
          }, true), _0x22c141(3, "string" == typeof _0x2cc4a1.chatId, '', {
            sentry: false
          }, true);
          const {
              chatId: _0x22effa,
              threadId: _0x234a2a = -1
            } = _0x2cc4a1,
            _0x54ff53 = _0x34a510.store.get("messages->byChatId->" + _0x22effa);
          if (!_0x54ff53) return [];
          const _0x504bc1 = [];
          if (_0x234a2a) {
            const _0x4c8ce0 = _0x34a510.store.get("messages->byChatId->" + _0x22effa + "->threadsById->" + _0x234a2a);
            (null !== (_0x255280 = null == _0x4c8ce0 ? undefined : _0x4c8ce0.listedIds) && undefined !== _0x255280 ? _0x255280 : []).forEach(_0x2b9447 => {
              const _0x6426f3 = _0x34a510.store.get("messages->byChatId->" + _0x22effa + "->byId->" + _0x2b9447);
              _0x6426f3 && _0x504bc1.push(_0x6426f3);
            });
          } else {
            const _0x1e0b9e = _0x22c141(4, _0x54ff53.byId, '', {
              sentry: "rare",
              extra: {
                chatId: _0x2cc4a1.chatId
              }
            }, true);
            _0x504bc1.push(...globalThis.Object.values(_0x1e0b9e));
          }
          return _0x504bc1.sort((_0x16263e, _0x5b3cf6) => _0x16263e.date - _0x5b3cf6.date);
        },
        getLastMessageDates: () => {
          var _0x1c74aa, _0x599761, _0x27ad48, _0x5ea45a;
          const _0x4e808e = {};
          for (const [_0x26b3c3, _0x241440] of globalThis.Object.entries(null !== (_0x1c74aa = _0x34a510.store.get("messages->byChatId")) && undefined !== _0x1c74aa ? _0x1c74aa : {})) {
            const _0x2e1989 = null === (_0x27ad48 = globalThis.Object.values(null !== (_0x599761 = _0x241440.byId) && undefined !== _0x599761 ? _0x599761 : {})) || undefined === _0x27ad48 ? undefined : _0x27ad48.sort((_0x3d1b3a, _0x4bd9dc) => _0x3d1b3a.date - _0x4bd9dc.date);
            _0x4e808e[_0x26b3c3] = null === (_0x5ea45a = null == _0x2e1989 ? undefined : _0x2e1989[_0x2e1989.length - 1]) || undefined === _0x5ea45a ? undefined : _0x5ea45a.date;
          }
          return _0x4e808e;
        },
        getOpenMessages: () => _0x5cbbd3.getMessages({
          ..._0x217c2e.getOpenIsolatedId()
        }),
        paginationState: _0x3cb31f => {
          var _0x3bb80f;
          const {
            assert$: _0x161b18
          } = _0x442618("zuno");
          _0x161b18(1, _0x3cb31f, '', {
            sentry: false
          }, true), _0x161b18(2, _0x3cb31f.chatId, '', {
            sentry: false
          }, true), _0x161b18(3, "string" == typeof _0x3cb31f.chatId, '', {
            sentry: false
          }, true);
          const {
              chatId: _0x46d59f,
              threadId: _0x282ee1 = -1
            } = _0x3cb31f,
            _0x16d7f2 = _0x217c2e.getChat({
              chatId: _0x46d59f
            }),
            _0x3f6350 = _0x34a510.store.get("chats->lastMessageIds->all->" + _0x46d59f);
          return {
            loadedAll: _0x34a510.store.get("messages->byChatId->" + _0x46d59f + "->threadsById->" + _0x282ee1 + "->messagesCount") === _0x16d7f2.messages.length,
            hasNext: _0x3f6350 != (null === (_0x3bb80f = _0x16d7f2.messages[_0x16d7f2.messages.length - 1]) || undefined === _0x3bb80f ? undefined : _0x3bb80f.id)
          };
        },
        paginateMessages: async _0x25450d => {
          const {
            assert$: _0x101619
          } = _0x442618("mznhv");
          _0x101619(1, _0x25450d, '', {
            sentry: false
          }, true), _0x101619(2, _0x25450d.chatId, '', {
            sentry: false
          }, true), _0x101619(3, _0x25450d.direction, '', {
            sentry: false
          }, true), _0x101619(4, "string" == typeof _0x25450d.direction, '', {
            sentry: false
          }, true), _0x101619(5, "string" == typeof _0x25450d.chatId, '', {
            sentry: false
          }, true), _0x101619(6, "forward" === _0x25450d.direction || "backwards" === _0x25450d.direction, '', {
            sentry: false
          }, true);
          const {
            chatId: _0x4ca464,
            threadId: _0x270555 = -1
          } = _0x25450d;
          _0x34a510.store.get("messages->byChatId->" + _0x4ca464 + "->threadsById->" + _0x270555) || _0x34a510.store.batch(({
            assign: _0x22d8f1,
            set: _0x32a693
          }) => {
            _0x34a510.store.get("messages->byChatId->" + _0x4ca464) ? _0x34a510.store.get("messages->byChatId->" + _0x4ca464 + "->threadsById") ? _0x32a693("messages->byChatId->" + _0x4ca464 + "->threadsById->" + _0x270555, {}) : _0x32a693("messages->byChatId->" + _0x4ca464 + "->threadsById", {
              [_0x270555]: {}
            }) : _0x32a693("messages->byChatId->" + _0x4ca464, {
              threadsById: {
                [_0x270555]: {}
              },
              byId: {}
            });
          });
          const _0x50955a = _0x217c2e.getChat({
            chatId: _0x4ca464
          });
          let _0x4db020 = _0x25450d.lastMessage;
          if (!_0x4db020) {
            const _0x4b072e = _0x5cbbd3.getMessages({
              chatId: _0x4ca464,
              threadId: _0x270555
            });
            _0x4db020 = "forward" === _0x25450d.direction ? _0x4b072e[_0x4b072e.length - 1] : _0x4b072e[0];
          }
          const _0x3e7c77 = await _0x34a510.api.call("fetchMessages", {
              chat: _0x50955a,
              threadId: _0x270555,
              offsetId: null == _0x4db020 ? undefined : _0x4db020.id,
              limit: 60,
              addOffset: "backwards" === _0x25450d.direction ? -1 : -60,
              isSavedDialog: false
            }),
            {
              users: _0x381dd5,
              chats: _0x1957ff,
              messages: _0xc94adb,
              count: _0x52ea43
            } = _0x101619(7, _0x3e7c77, '', {
              extra: {
                chatId: _0x4ca464,
                threadId: _0x270555
              },
              sentry: "rare",
              networkRelated: true
            }, true);
          _0x101619(8, globalThis.Array.isArray(_0xc94adb), '', {
            extra: {
              chatId: _0x4ca464,
              threadId: _0x270555
            },
            sentry: "rare"
          }, true), _0x101619(9, globalThis.Array.isArray(_0x381dd5), '', {
            extra: {
              chatId: _0x4ca464,
              threadId: _0x270555
            },
            sentry: "rare"
          }, true), _0x101619(10, globalThis.Array.isArray(_0x1957ff), '', {
            extra: {
              chatId: _0x4ca464,
              threadId: _0x270555
            },
            sentry: "rare"
          }, true);
          const _0x2ff76d = globalThis.Object.fromEntries(_0xc94adb.map(_0x514899 => [_0x514899.id, _0x514899])),
            _0x514aa0 = _0xc94adb.map(_0x5486a2 => _0x5486a2.id),
            _0x1aaa03 = globalThis.Object.fromEntries(_0x381dd5.map(_0xa125d2 => [_0xa125d2.id, _0xa125d2])),
            _0x388526 = globalThis.Object.fromEntries(_0x1957ff.map(_0x52b7a9 => [_0x52b7a9.id, _0x52b7a9])),
            _0x32ba5c = _0x514aa0.every(_0x303829 => !!_0x34a510.store.get("messages->byChatId->" + _0x4ca464 + "->byId->" + _0x303829));
          _0x34a510.store.batch(({
            assign: _0x3ccec1,
            set: _0x23b6c5
          }) => {
            _0x3ccec1("messages->byChatId->" + _0x4ca464 + "->byId", _0x2ff76d), _0x3ccec1("users->byId", _0x1aaa03), _0x3ccec1("chats->byId", _0x388526), _0x3ccec1("messages->byChatId->" + _0x4ca464 + "->threadsById->" + _0x270555 + "->listedIds?", _0x514aa0), _0x52ea43 && _0x23b6c5("messages->byChatId->" + _0x4ca464 + "->threadsById->" + _0x270555 + "->messagesCount", _0x52ea43);
          });
          let _0x2ac681 = _0xc94adb.sort((_0x36c8c3, _0x241d8e) => _0x36c8c3.date - _0x241d8e.date);
          return _0x25450d.shouldProcessMessages && (_0x2ac681 = await _0x5cbbd3.processMessages({
            chatId: _0x4ca464,
            messages: _0x2ac681,
            users: _0x1aaa03
          })), {
            loadedAll: _0x32ba5c,
            messages: _0x2ac681
          };
        },
        paginateOpenMessages: async _0x5665f6 => await _0x5cbbd3.paginateMessages({
          ..._0x217c2e.getOpenIsolatedId(),
          ..._0x5665f6
        }),
        openEphemeralMessage: async _0x5b3627 => {
          const {
            assert$: _0xcb6796
          } = _0x442618("kaplk");
          _0xcb6796(1, _0x5b3627, '', {
            sentry: false
          }, true), _0xcb6796(2, _0x5b3627.chatId, '', {
            sentry: false
          }, true), _0xcb6796(3, _0x5b3627.messageId, '', {
            sentry: false
          }, true), _0xcb6796(4, "number" == typeof _0x5b3627.messageId, '', {
            sentry: false
          }, true), _0xcb6796(5, "string" == typeof _0x5b3627.chatId, '', {
            sentry: false
          }, true);
          const _0x580ea4 = await _0x217c2e.getChat({
            chatId: _0x5b3627.chatId
          });
          return await _0x34a510.api.call("markMessagesRead", {
            chat: _0x580ea4,
            messageIds: [_0x5b3627.messageId]
          });
        },
        sendTextMessage: async _0x42acab => {
          const {
            assert$: _0x11019b
          } = _0x442618("mhmcttm");
          _0x11019b(1, _0x42acab, '', {
            sentry: false
          }, true), _0x11019b(2, _0x42acab.chatId || _0x42acab.chat, '', {
            sentry: false
          }, true), _0x11019b(3, _0x42acab.message, '', {
            sentry: false
          }, true), _0x11019b(4, "string" == typeof _0x42acab.message, '', {
            sentry: false
          }, true);
          const {
            chat: _0x239a9c,
            chatId: _0x2f6040,
            threadId: _0x5b5891 = -1,
            message: _0x19d1ad
          } = _0x42acab;
          return await _0x57deb6({
            chat: _0x239a9c,
            chatId: _0x2f6040,
            threadId: _0x5b5891,
            message: _0x19d1ad
          });
        },
        sendMedia: async _0x3fedfc => {
          var _0x13d3cb, _0xa6caca;
          const {
            assert$: _0x30b834,
            message$: _0x3246f0
          } = _0x442618("kzrboqle");
          _0x30b834(1, _0x3fedfc, '', {
            sentry: false
          }, true), _0x30b834(2, _0x3fedfc.chatId || _0x3fedfc.chat, '', {
            sentry: false
          }, true), _0x30b834(3, _0x3fedfc.blob, '', {
            sentry: false
          }, true), _0x30b834(4, _0x3fedfc.blobExtension, '', {
            sentry: false
          }, true), _0x30b834(5, "string" == typeof _0x3fedfc.blobExtension, '', {
            sentry: false
          }, true), _0x30b834(6, !_0x3fedfc.asEphemeral || _0x3fedfc.blob.type.startsWith("image"), '', {
            sentry: false
          }, true);
          const {
              threadId: _0x862761 = -1,
              chatId: _0x39aeca
            } = _0x3fedfc,
            _0x33a7ec = null === (_0x13d3cb = _0x34a510.findModule({
              key: "$$telegram-build-attachment",
              assert: _0x3246f0(7, '', {
                sentry: "rare"
              }, true),
              assertExport: _0x3246f0(8, '', {
                sentry: "rare"
              }, true),
              includes: ["uniqueId:`${Date.now()}-${Math.random()}", "shouldSendAsFile", "shouldSendAsSpoiler"],
              exportsMeta: {
                includes: ["URL.createObjectURL"]
              }
            }).exportsMatched) || undefined === _0x13d3cb ? undefined : _0x13d3cb.value,
            _0x4fc289 = _0x491d77(10) + "." + _0x3fedfc.blobExtension,
            _0x267e7a = _0x3fedfc.blob.type.startsWith("image") ? await _0x5dc537(_0x3fedfc.blob, {
              compress: true,
              width: 1080
            }) : _0x3fedfc.blob,
            _0x59549f = _0x30b834(9, await _0x33a7ec(_0x4fc289, _0x267e7a, {
              type: _0x3fedfc.blob.type
            }), '', {
              sentry: "rare"
            }, true),
            _0x174eca = _0x3fedfc.asAudio ? _0x30b834(10, await _0xbacd69(_0x3fedfc.blob), '', {
              sentry: "rare"
            }, true) : undefined;
          return await _0x57deb6({
            chat: _0x3fedfc.chat,
            chatId: _0x3fedfc.chatId,
            threadId: _0x862761,
            message: '',
            attachment: [{
              ..._0x59549f,
              voice: _0x174eca,
              ...(_0x3fedfc.asEphemeral ? {
                flags: 3,
                ttlSeconds: null !== (_0xa6caca = _0x3fedfc.duration) && undefined !== _0xa6caca ? _0xa6caca : 2147483647
              } : {})
            }]
          });
        },
        processMessage: _0x2baa9a => {
          var _0x198aff, _0x48de9e, _0x5b7974, _0x228cfd, _0x303435, _0x408260, _0x5314c5, _0x173c2e, _0x1a4e13, _0x19d66d;
          const {
              message: _0x42daed
            } = _0x2baa9a.ir,
            _0x440bfa = !_0x42daed.isOutgoing,
            _0x44b288 = !!_0x42daed.replyInfo,
            _0x1cc7b7 = !!_0x42daed.forwardInfo,
            _0x508b26 = null === (_0x198aff = _0x42daed.forwardInfo) || undefined === _0x198aff ? undefined : _0x198aff.hiddenUserName,
            _0x277f35 = !!_0x42daed.content.contact,
            _0x2e4155 = null === (_0x48de9e = _0x42daed.content.contact) || undefined === _0x48de9e ? undefined : _0x48de9e.phoneNumber,
            _0x39ae4d = !!_0x42daed.content.photo,
            _0x3d7970 = !!_0x42daed.content.video && !_0x42daed.content.video.isGif,
            _0x1b8ceb = !!_0x42daed.content.document,
            _0x2fabef = !!_0x42daed.content.audio,
            _0x36fdf3 = !!_0x42daed.content.sticker,
            _0x824290 = !!_0x42daed.content.voice,
            _0x4121ce = !!_0x42daed.content.isExpiredVoice || !!_0x42daed.content.isExpiredRoundVideo,
            _0x4609af = !!_0x42daed.content.poll,
            _0x3e159c = !!(null === (_0x5b7974 = _0x42daed.content.action) || undefined === _0x5b7974 ? undefined : _0x5b7974.phoneCall),
            _0x377bd5 = !!(null === (_0x303435 = null === (_0x228cfd = _0x42daed.content.action) || undefined === _0x228cfd ? undefined : _0x228cfd.phoneCall) || undefined === _0x303435 ? undefined : _0x303435.isVideo),
            _0x2174cd = !!_0x42daed.content.location,
            _0x15298d = !!_0x42daed.isMediaUnread,
            _0x409b71 = "story" === (null === (_0x408260 = _0x42daed.replyInfo) || undefined === _0x408260 ? undefined : _0x408260.type),
            _0x372632 = null === (_0x5314c5 = _0x42daed.content.action) || undefined === _0x5314c5 ? undefined : _0x5314c5.type,
            _0x368d5b = !!(null === (_0x173c2e = _0x42daed.content.video) || undefined === _0x173c2e ? undefined : _0x173c2e.isGif),
            _0x9dc467 = 0 === globalThis.Object.keys(_0x42daed.content).length,
            _0x4d1c28 = _0x15298d;
          return _0x5a8493({
            id: null === (_0x1a4e13 = _0x42daed.id) || undefined === _0x1a4e13 ? undefined : _0x1a4e13.toString(),
            msg: null === (_0x19d66d = _0x42daed.content.text) || undefined === _0x19d66d ? undefined : _0x19d66d.text,
            timestamp: _0x42daed.date,
            isIncoming: _0x440bfa,
            isPhoto: _0x39ae4d,
            isVideo: _0x3d7970,
            isFile: _0x1b8ceb,
            isAudio: _0x2fabef,
            isGIF: _0x368d5b,
            isUnsupported: _0x9dc467,
            isSticker: _0x36fdf3,
            isLocation: _0x2174cd,
            isRecording: _0x824290,
            isExpired: _0x4121ce,
            isPoll: _0x4609af,
            isCall: _0x3e159c,
            isVideoCall: _0x377bd5,
            isUnreadEphemeral: _0x4d1c28,
            isStoryReply: _0x409b71,
            isReply: _0x44b288,
            isForwarded: _0x1cc7b7,
            forwardedUsername: _0x508b26,
            isContact: _0x277f35,
            contactUsername: _0x2e4155,
            actionType: _0x372632,
            _ir: _0x2baa9a.ir
          }, {
            deep: false
          });
        },
        processMessages: async _0x4ac035 => {
          var _0x4538b5, _0x477310;
          const {
            assert$: _0x3657fc
          } = _0x442618("drjvgs");
          _0x3657fc(1, _0x4ac035, '', {
            sentry: false
          }, true), _0x3657fc(2, _0x4ac035.chatId, '', {
            sentry: false
          }, true), _0x3657fc(3, "string" == typeof _0x4ac035.chatId, '', {
            sentry: false
          }, true);
          const _0x906b6d = null !== (_0x4538b5 = _0x4ac035.messages) && undefined !== _0x4538b5 ? _0x4538b5 : _0x5cbbd3.getMessages(_0x4ac035),
            _0x579b70 = _0x61ce61.getCurrentUser(),
            _0x53f71d = null !== (_0x477310 = _0x4ac035.users) && undefined !== _0x477310 ? _0x477310 : _0x61ce61.getUsers(),
            _0x2bcb31 = _0x53f71d[_0x4ac035.chatId];
          return await globalThis.Promise.all(_0x906b6d.map(_0x59e29a => {
            const _0x4a25d5 = {
              message: _0x59e29a,
              currentUser: _0x579b70,
              chatUser: null != _0x2bcb31 ? _0x2bcb31 : _0x53f71d[_0x59e29a.senderId]
            };
            return function _0x27de4a(_0x1f5e78) {
              var _0x534a0b;
              _0x1f5e78.ogMsg = _0x1f5e78.msg;
              let _0xc4c4df = null !== (_0x534a0b = _0x1f5e78.msg) && undefined !== _0x534a0b ? _0x534a0b : '';
              const _0x4b3836 = _0x1f5e78.isIncoming ? "your" : "his";
              return _0x1f5e78.isVideo ? _0xc4c4df = "[video] " + _0xc4c4df : _0x1f5e78.isPhoto ? _0xc4c4df = "[photo] " + _0xc4c4df : _0x1f5e78.isAudio || _0x1f5e78.isRecording ? _0xc4c4df = "[audio-message] " + _0xc4c4df : _0x1f5e78.isContact ? _0xc4c4df = _0x1f5e78.contactUsername ? "[contact-shared-username-" + _0x1f5e78.contactUsername + "] " + _0xc4c4df : "[contact-shared] " + _0xc4c4df : _0x1f5e78.isFile ? _0xc4c4df = "[file-shared] " + _0xc4c4df : _0x1f5e78.isSticker ? _0xc4c4df = "[sticker] " + _0xc4c4df : _0x1f5e78.isAvatar ? _0xc4c4df = "[avatar] " + _0xc4c4df : _0x1f5e78.isGIF ? _0xc4c4df = "[GIF] " + _0xc4c4df : _0x1f5e78.isPoll ? _0xc4c4df = "[poll] " + _0xc4c4df : _0x1f5e78.isLocation ? _0xc4c4df = "[location-shared] " + _0xc4c4df : _0x1f5e78.isCall || _0x1f5e78.isVideoCall ? _0xc4c4df = _0x1f5e78.isIncoming ? "[tried-to-call-you] " + _0xc4c4df : "[call] " + _0xc4c4df : _0x1f5e78.isUnreadEphemeral ? _0xc4c4df = "[media] " + _0xc4c4df : _0x1f5e78.isExpired && (_0xc4c4df = "[expired-message] " + _0xc4c4df), _0xc4c4df = _0xc4c4df.trim(), _0x1f5e78.isStoryReply ? _0xc4c4df = "[replied-to-" + _0x4b3836 + "-story] " + _0xc4c4df : _0x1f5e78.isForwarded ? _0xc4c4df = _0x1f5e78.forwardedUsername ? "[forwarded-from-username-" + _0x1f5e78.forwardedUsername + "] " + _0xc4c4df : "[forwarded] " + _0xc4c4df : _0x1f5e78.actionType && (_0xc4c4df = "[" + _0x1f5e78.actionType + "] " + _0xc4c4df), _0xc4c4df = _0xc4c4df.trim(), _0x1f5e78.msg = _0xc4c4df, _0x1f5e78;
            }(_0x5cbbd3.processMessage({
              ir: _0x4a25d5
            }));
          }));
        },
        processOpenMessages: async () => await _0x5cbbd3.processMessages({
          chatId: _0x217c2e.getOpenId()
        }),
        _pollUsernames: async () => {
          var _0x42e47a, _0x382d14;
          const _0x33adfb = (await _0x34a510.store.search("pollResults")).pop();
          if (!_0x33adfb) return [];
          const _0x1e530e = _0x33adfb.value.voters,
            _0x42de96 = {};
          for (const [_0x45ba5e, _0x19635a] of globalThis.Object.entries(_0x1e530e)) {
            const _0x123ace = [];
            _0x42de96[_0x45ba5e] = _0x123ace, 4 == _0x19635a.length && globalThis.console.log("Must manually expand poll results for answer", _0x45ba5e);
            for (const _0x139e76 of _0x19635a) try {
              const _0x56eeb4 = await _0x61ce61.getUser({
                  userId: _0x139e76
                }),
                _0x4633b5 = null === (_0x382d14 = null === (_0x42e47a = null == _0x56eeb4 ? undefined : _0x56eeb4.usernames) || undefined === _0x42e47a ? undefined : _0x42e47a.find(_0x2c47ad => _0x2c47ad.isActive)) || undefined === _0x382d14 ? undefined : _0x382d14.username;
              _0x123ace.push(_0x4633b5);
            } catch (_0x5bbb58) {
              globalThis.console.error(_0x5bbb58);
              continue;
            }
          }
          return _0x42de96;
        },
        _sendMessageToUsernames: async _0x590670 => {
          const _0x290b1f = _0x590670.usernames.filter(_0x473656 => _0x473656);
          for (const _0x261157 of _0x290b1f) try {
            const _0x2cd24c = await _0x61ce61.fetchUserByUsername({
                username: _0x261157
              }),
              _0x8744f = null == _0x2cd24c ? undefined : _0x2cd24c.user,
              _0x5e940f = null == _0x2cd24c ? undefined : _0x2cd24c.chat;
            if (!_0x8744f) {
              globalThis.console.log("Could not find user with username", _0x261157);
              continue;
            }
            if (!_0x5e940f) {
              globalThis.console.log("Could not find chat with user", _0x8744f);
              continue;
            }
            await _0x217c2e.createChat({
              user: _0x8744f
            });
            const _0x10dd8c = (_0x5d4e18 = ["hi", "hey", "yo", "whats up", "hey bro"])[globalThis.Math.floor(globalThis.Math.random() * _0x5d4e18.length)],
              _0x414efc = await _0x5cbbd3.sendTextMessage({
                chat: _0x5e940f,
                message: _0x10dd8c
              });
            await _0x3cae2f(5000);
            const _0x160be2 = await _0x5cbbd3.sendTextMessage({
              chat: _0x5e940f,
              message: _0x590670.message
            });
            globalThis.console.log(_0x8744f, _0x5e940f, _0x414efc, _0x160be2), await _0x514276(1000, 5000);
          } catch (_0x1ed082) {
            globalThis.console.error(_0x1ed082);
          }
          var _0x5d4e18;
        }
      };
    function _0x18e990(_0x30e0ae) {
      const [_0x313c7c, _0x1d828b] = _0x30e0ae.split("_");
      return {
        chatId: _0x313c7c,
        threadId: _0x1d828b ? +_0x1d828b : -1
      };
    }
    const _0x217c2e = {
        getThread: _0x496bf9 => {
          const {
            assert$: _0x41a009
          } = _0x442618("hcbj");
          _0x41a009(1, _0x496bf9, '', {
            sentry: false
          }, true), _0x41a009(2, _0x496bf9.chatId, '', {
            sentry: false
          }, true), _0x41a009(3, _0x496bf9.threadId, '', {
            sentry: false
          }, true), _0x41a009(4, "string" == typeof _0x496bf9.chatId, '', {
            sentry: false
          }, true), _0x41a009(5, "number" == typeof _0x496bf9.threadId, '', {
            sentry: false
          }, true);
          const {
            chatId: _0x13c8ae,
            threadId: _0x1d91ae
          } = _0x496bf9;
          return _0x34a510.store.get("messages->byChatId->" + _0x13c8ae + "->threadsById->" + _0x1d91ae);
        },
        getTopics: _0x2d41a8 => {
          const {
            assert$: _0x5eae98
          } = _0x442618("wiig");
          _0x5eae98(1, _0x2d41a8, '', {
            sentry: false
          }, true), _0x5eae98(2, _0x2d41a8.chatId, '', {
            sentry: false
          }, true), _0x5eae98(3, "string" == typeof _0x2d41a8.chatId, '', {
            sentry: false
          }, true);
          const {
            chatId: _0x11169b
          } = _0x2d41a8;
          return _0x5eae98(4, _0x34a510.store.get("chats->byId->" + _0x11169b + "->topics"), '', {
            sentry: "rare"
          }, true);
        },
        getThreads: _0x339e5c => {
          const {
            assert$: _0x44e308
          } = _0x442618("gdxwsr");
          _0x44e308(1, _0x339e5c, '', {
            sentry: false
          }, true), _0x44e308(2, _0x339e5c.chatId, '', {
            sentry: false
          }, true), _0x44e308(3, "string" == typeof _0x339e5c.chatId, '', {
            sentry: false
          }, true);
          const {
              chatId: _0x38e257
            } = _0x339e5c,
            _0xf15da6 = _0x44e308(4, _0x34a510.store.get("messages->byChatId->" + _0x38e257 + "->threadsById"), '', {
              sentry: "rare"
            }, true);
          return globalThis.Object.entries(_0xf15da6).map(([_0x4dbc0d, _0x531532]) => ({
            ..._0x531532,
            id: _0x4dbc0d
          }));
        },
        fetchChat: async _0x37b8f0 => {
          const {
            assert$: _0x1bedb9
          } = _0x442618("xqfqvo");
          return _0x1bedb9(1, _0x37b8f0, '', {
            sentry: false
          }, true), _0x1bedb9(2, _0x37b8f0.userId, '', {
            sentry: false
          }, true), _0x1bedb9(3, "string" == typeof _0x37b8f0.userId, '', {
            sentry: false
          }, true), await _0x34a510.api.call("fetchChat", {
            type: "user",
            user: {
              id: _0x37b8f0.userId,
              accessHash: _0x37b8f0.userAccessHash
            }
          });
        },
        createChat: async _0x499705 => {
          const {
            assert$: _0x1d81cd
          } = _0x442618("xhymyhi");
          return _0x1d81cd(1, _0x499705, '', {
            sentry: false
          }, true), _0x1d81cd(2, _0x499705.user, '', {
            sentry: false
          }, true), _0x1d81cd(3, _0x499705.user.id, '', {
            sentry: false
          }, true), _0x1d81cd(4, _0x499705.user.accessHash, '', {
            sentry: false
          }, true), await _0x217c2e.fetchChat({
            userId: _0x499705.user.id,
            userAccessHash: _0x499705.user.accessHash
          });
        },
        getChat: _0x1b629b => {
          const {
            assert$: _0xd4b585
          } = _0x442618("dttxnnqg");
          return _0xd4b585(1, _0x1b629b, '', {
            sentry: false
          }, true), _0xd4b585(2, _0x1b629b.chatId, '', {
            sentry: false
          }, true), _0xd4b585(3, "string" == typeof _0x1b629b.chatId, '', {
            sentry: false
          }, true), {
            ..._0xd4b585(4, _0x34a510.store.get("chats->byId->" + _0x1b629b.chatId), '', {
              sentry: "rare"
            }, true),
            messages: _0x1b629b.ignoreMessages ? [] : _0x5cbbd3.getMessages({
              chatId: _0x1b629b.chatId
            })
          };
        },
        getChatFullInfo: _0x468256 => {
          const {
            assert$: _0x9353b9
          } = _0x442618("hqjq");
          return _0x9353b9(1, _0x468256, '', {
            sentry: false
          }, true), _0x9353b9(2, _0x468256.chatId, '', {
            sentry: false
          }, true), _0x9353b9(3, "string" == typeof _0x468256.chatId, '', {
            sentry: false
          }, true), _0x9353b9(4, _0x34a510.store.get("chats->fullInfoById->" + _0x468256.chatId), '', {
            sentry: "rare"
          }, true);
        },
        getChats: async (_0x399a1b = {}) => {
          const {
            assert$: _0x5e3a4e
          } = _0x442618("qjqj");
          _0x5e3a4e(1, _0x399a1b, '', {
            sentry: false
          }, true), _0x5e3a4e(2, "object" == typeof _0x399a1b, '', {
            sentry: false
          }, true), _0x5e3a4e(3, undefined === _0x399a1b.loadAll || "boolean" == typeof _0x399a1b.loadAll, '', {
            sentry: false
          }, true);
          const _0x2424fc = _0x399a1b.excludeArchived ? ["active"] : ["active", "archived"];
          if (_0x399a1b.loadAll) {
            for (const _0x24e123 of _0x2424fc) await _0x34a510.actions.call("loadAllChats", {
              listType: _0x24e123
            }), await _0x18d5ed(() => _0x217c2e.hasLoadedChats(_0x24e123)), await _0x231ec8(1000);
          }
          let _0x5a6f76 = [];
          for (const _0x4f8d10 of _0x2424fc) _0x5a6f76 = _0x5a6f76.concat(_0x34a510.store.get("chats->listIds->" + _0x4f8d10) || []);
          return _0x5a6f76.map(_0x4c7f95 => _0x217c2e.getChat({
            chatId: _0x4c7f95
          })).reverse();
        },
        hasLoadedChats: _0x566c0e => {
          const _0xbd1ca4 = _0x34a510.store.get("chats->isFullyLoaded");
          return !!(null == _0xbd1ca4 ? undefined : _0xbd1ca4[_0x566c0e]);
        },
        searchChats: async _0x56bdbe => {
          const {
            assert$: _0x2cfed3
          } = _0x442618("qjqj");
          return _0x2cfed3(1, _0x56bdbe, '', {
            sentry: false
          }, true), _0x2cfed3(2, _0x56bdbe.query, '', {
            sentry: false
          }, true), _0x2cfed3(3, "string" == typeof _0x56bdbe.query, '', {
            sentry: false
          }, true), _0x2cfed3(4, await _0x34a510.api.call("searchChats", {
            query: _0x56bdbe.query
          }), '', {
            sentry: "rare"
          }, true);
        },
        getOpenChat: () => _0x217c2e.getChat({
          chatId: _0x217c2e.getOpenChatId()
        }),
        getOpenChatId: () => {
          const {
            assert$: _0x24915a
          } = _0x442618("qjqj");
          return _0x24915a(1, _0x18e990(_0x217c2e.getOpenId()).chatId, '', {
            sentry: false
          }, true);
        },
        getOpenThreadId: () => {
          const {
            assert$: _0x49b8d3
          } = _0x442618("qjqj");
          return _0x49b8d3(1, _0x18e990(_0x217c2e.getOpenId()).threadId, '', {
            sentry: false
          }, true);
        },
        getOpenIsolatedId: () => _0x18e990(_0x217c2e.getOpenId()),
        getOpenId: () => {
          const _0x17a645 = globalThis.window.location.href.match(/a\/#(.*)/);
          return null == _0x17a645 ? undefined : _0x17a645[1];
        },
        chatViewed: async _0x2ca85e => {
          var _0x3087c5;
          const {
            assert$: _0x5cd4b6
          } = _0x442618("qjqj");
          _0x5cd4b6(1, _0x2ca85e, '', {
            sentry: false
          }, true), _0x5cd4b6(2, _0x2ca85e.chatId, '', {
            sentry: false
          }, true);
          const {
              chatId: _0x25c831,
              threadId: _0x3361f3 = -1
            } = _0x2ca85e,
            _0x325816 = await _0x217c2e.getChat({
              chatId: _0x25c831
            }),
            _0x349b50 = null === (_0x3087c5 = _0x34a510.store.get("messages->byChatId->" + _0x25c831 + "->threadsById->" + _0x3361f3)) || undefined === _0x3087c5 ? undefined : _0x3087c5.readState;
          if ((null == _0x325816 ? undefined : _0x325816.unreadCount) || (null == _0x349b50 ? undefined : _0x349b50.unreadCount)) return await _0x34a510.actions.call("markChatMessagesRead", {
            id: _0x25c831
          });
        }
      },
      _0x1dad9f = {
        getMembers: async _0x3c4b9a => {
          const {
            assert$: _0x456693
          } = _0x442618("ildnk");
          return _0x456693(1, _0x3c4b9a, '', {
            sentry: false
          }, true), _0x456693(2, _0x3c4b9a.chatId, '', {
            sentry: false
          }, true), _0x456693(3, "string" == typeof _0x3c4b9a.chatId, '', {
            sentry: false
          }, true), (await _0x217c2e.getChatFullInfo({
            chatId: _0x3c4b9a.chatId
          })).members;
        },
        paginateMembers: async _0x5d1818 => {
          const {
            assert$: _0x7c84cd
          } = _0x442618("ekoai");
          _0x7c84cd(1, _0x5d1818, '', {
            sentry: false
          }, true), _0x7c84cd(2, _0x5d1818.chatId, '', {
            sentry: false
          }, true), _0x7c84cd(3, "string" == typeof _0x5d1818.chatId, '', {
            sentry: false
          }, true);
          const {
              chatId: _0x819962,
              cursor: _0x3b1b3a = 0
            } = _0x5d1818,
            _0xba09c1 = await _0x217c2e.getChat({
              chatId: _0x819962
            }),
            _0x255948 = await _0x34a510.api.call("fetchMembers", _0xba09c1.id, _0xba09c1.accessHash, "recent", _0x3b1b3a);
          if (!_0x255948 || !_0x255948.members.length) return {
            members: [],
            users: {},
            cursor: null
          };
          const _0x479a96 = globalThis.Object.fromEntries(_0x255948.users.map(_0x3a58e4 => [_0x3a58e4.id, _0x3a58e4]));
          return {
            members: _0x255948.members,
            users: _0x479a96,
            cursor: _0x3b1b3a + _0x255948.members.length
          };
        }
      },
      _0x59dba2 = async _0x1696f5 => {
        const {
          assert$: _0x2839fa
        } = _0x442618("biwipk");
        _0x2839fa(1, _0x1696f5, '', {
          sentry: false
        }, true), _0x2839fa(2, "string" == typeof _0x1696f5.chatId, '', {
          sentry: false
        }, true), _0x2839fa(3, "cancel" === _0x1696f5.typingAction || "typing" === _0x1696f5.typingAction || "recordAudio" === _0x1696f5.typingAction, '', {
          sentry: false
        }, true), _0x2839fa(4, null == _0x1696f5.threadId || "number" == typeof _0x1696f5.threadId, '', {
          sentry: false
        }, true);
        const {
          chatId: _0x2ff37e,
          threadId: _0x30ffc6 = -1,
          typingAction: _0x11a772
        } = _0x1696f5;
        return await _0x34a510.actions.call("sendMessageAction", {
          chatId: _0x2ff37e,
          threadId: _0x30ffc6,
          action: {
            type: _0x11a772
          }
        });
      },
      _0x1ac662 = {
        startOnline: async () => await _0x34a510.actions.call("updateIsOnline", true),
        stopOnline: async () => await _0x34a510.actions.call("updateIsOnline", false),
        startTyping: async _0x5ba925 => await _0x59dba2({
          chatId: _0x5ba925.chatId,
          typingAction: "typing"
        }),
        stopTyping: async _0x4d0efe => await _0x59dba2({
          chatId: _0x4d0efe.chatId,
          typingAction: "cancel"
        }),
        startRecording: async _0x4b93d1 => await _0x59dba2({
          chatId: _0x4b93d1.chatId,
          typingAction: "recordAudio"
        }),
        stopRecording: async _0x478e36 => await _0x59dba2({
          chatId: _0x478e36.chatId,
          typingAction: "cancel"
        }),
        isRecipientPresent: async _0x3319ac => {
          if (_0x1ac662.isRecipientTyping(_0x3319ac)) return true;
          if (_0x1ac662.isRecipientOnline(_0x3319ac)) return true;
          const _0x58175e = await _0x1ac662.fetchRecipientLastSeenMessageSec(_0x3319ac);
          if (!_0x58175e) return false;
          return _0x58175e > (globalThis.Date.now() - _0x3319ac.thresholdMs) / 1000;
        },
        isRecipientOnline: _0x2643cb => {
          var _0x1395e0;
          return "userStatusOnline" === (null === (_0x1395e0 = _0x1ac662.getRecipientPresence(_0x2643cb)) || undefined === _0x1395e0 ? undefined : _0x1395e0.type);
        },
        isRecipientTyping: _0x4351e8 => {
          var _0x1ec0cc, _0x39f7f9;
          return !!(null === (_0x39f7f9 = null === (_0x1ec0cc = _0x217c2e.getThread({
            chatId: _0x4351e8.chatId,
            threadId: -1
          })) || undefined === _0x1ec0cc ? undefined : _0x1ec0cc.typingStatus) || undefined === _0x39f7f9 ? undefined : _0x39f7f9.action);
        },
        getRecipientLastSeenTimeSec: _0x56c907 => {
          const _0x13a9e7 = _0x1ac662.getRecipientLastSeenMessageId(_0x56c907);
          if (!_0x13a9e7) return;
          const _0x3b0025 = _0x5cbbd3.getMessage({
            chatId: _0x56c907.chatId,
            messageId: _0x13a9e7
          });
          return null == _0x3b0025 ? undefined : _0x3b0025.date;
        },
        fetchRecipientLastSeenMessageSec: async _0x428b3a => {
          const _0x1513f9 = _0x1ac662.getRecipientLastSeenMessageId(_0x428b3a);
          if (!_0x1513f9) return;
          const _0x2b51d4 = await _0x5cbbd3.fetchMessage({
            chatId: _0x428b3a.chatId,
            messageId: _0x1513f9
          });
          return null == _0x2b51d4 ? undefined : _0x2b51d4.date;
        },
        getRecipientLastSeenMessageId: _0x58f1c3 => {
          var _0x46f55c;
          const {
              chatId: _0x3242b0,
              threadId: _0x251488 = -1
            } = _0x58f1c3,
            _0x1d774d = _0x217c2e.getChat({
              chatId: _0x3242b0
            }),
            _0x2082a8 = null === (_0x46f55c = _0x34a510.store.get("messages->byChatId->" + _0x3242b0 + "->threadsById->" + _0x251488)) || undefined === _0x46f55c ? undefined : _0x46f55c.readState;
          return (null == _0x1d774d ? undefined : _0x1d774d.lastReadOutboxMessageId) || (null == _0x2082a8 ? undefined : _0x2082a8.lastReadOutboxMessageId);
        },
        getRecipientPresence: _0x4e3117 => {
          const {
            assert$: _0x520295
          } = _0x442618("wjfnckum");
          return _0x520295(1, _0x4e3117, '', {
            sentry: false
          }, true), _0x520295(2, "string" == typeof _0x4e3117.chatId, '', {
            sentry: false
          }, true), _0x34a510.store.get("users->statusesById->" + _0x4e3117.chatId);
        }
      },
      _0x1388e8 = {
        setDisplayActivitySetting: async _0x250083 => await new globalThis.Promise((_0x4d627f, _0x29d8a3) => {
          _0x34a510.actions.call("setPrivacyVisibility", {
            privacyKey: "lastSeen",
            visibility: _0x250083.enabled ? "everybody" : "nobody",
            onSuccess: _0x4d627f
          });
        })
      },
      _0x48b4e4 = {
        Encounters: () => _0x4286cf.httpHandler.get("Encounters").getInstance(),
        Folders: () => _0x4286cf.httpHandler.get("Folders").getInstance(),
        Chat: () => {
          const {
            message$: _0x26a618
          } = _0x442618("kcjbuw");
          return _0x2ff5c3.findModule({
            key: "chat-module",
            assert: _0x26a618(1, '', {
              sentry: "rare"
            }, true),
            assertExport: _0x26a618(2, '', {
              sentry: "rare"
            }, true),
            exportsMeta: {
              predicate: _0x3d8bab => _0x3d8bab.getInstance && _0x3d8bab.getMaxUnansweredMessages
            }
          }).exportsMatched.value;
        },
        FeedItems: () => {
          const {
            message$: _0x3cbcbe
          } = _0x442618("giflkkgj");
          return _0x2ff5c3.findModule({
            key: "feed-items",
            assert: _0x3cbcbe(1, '', {
              sentry: "rare"
            }, true),
            assertExport: _0x3cbcbe(2, '', {
              sentry: "rare"
            }, true),
            exportsMeta: {
              predicate: _0x2781d8 => _0x2781d8.getItems
            }
          }).exportsMatched.value;
        },
        Upload: () => {
          const {
            message$: _0x3678b9
          } = _0x442618("nznzz");
          return _0x2ff5c3.findModule({
            key: "upload-xhr",
            assert: _0x3678b9(1, '', {
              sentry: "rare"
            }, true),
            assertExport: _0x3678b9(2, '', {
              sentry: "rare"
            }, true),
            exportsMeta: {
              predicate: _0x2121ca => (null == _0x2121ca ? undefined : _0x2121ca.upload) && (null == _0x2121ca ? undefined : _0x2121ca._sendXHR)
            }
          }).exportsMatched.value;
        }
      },
      _0x4286cf = {
        modules: _0x48b4e4,
        httpHandler: {
          ["get"](_0x4fc010) {
            const {
              assert$: _0x5e96f2,
              message$: _0x38bd91
            } = _0x442618("weequa");
            return _0x5e96f2(3, _0x2ff5c3.findModule({
              key: "http-handler-" + _0x4fc010,
              assert: _0x38bd91(1, '', {
                sentry: "rare"
              }, true),
              assertExport: _0x38bd91(2, '', {
                sentry: "rare"
              }, true),
              exportsMeta: {
                predicate: _0x18d950 => {
                  var _0x1968af, _0x35121b;
                  return (null === (_0x1968af = _0x18d950.prototype) || undefined === _0x1968af ? undefined : _0x1968af.name) === _0x4fc010 && (null === (_0x35121b = _0x18d950.prototype) || undefined === _0x35121b ? undefined : _0x35121b.getRequest_);
                }
              }
            }).exportsMatched.value, '', {
              sentry: "rare"
            }, true);
          }
        },
        ["bma"]() {
          var _0x104ad1;
          const {
              assert$: _0x585bde,
              message$: _0x1103e0
            } = _0x442618("trswjmi"),
            _0x4e3a5c = _0x2ff5c3.findModule({
              key: "bma",
              assert: _0x1103e0(1, '', {
                sentry: "rare"
              }, true),
              assertExport: _0x1103e0(2, '', {
                sentry: "rare"
              }, true),
              exportsMeta: {
                predicate: _0x21749b => {
                  var _0x36fc98;
                  return null === (_0x36fc98 = null == _0x21749b ? undefined : _0x21749b.badoo) || undefined === _0x36fc98 ? undefined : _0x36fc98.bma;
                }
              }
            });
          return _0x585bde(3, null === (_0x104ad1 = _0x4e3a5c.exportsMatched.value.badoo) || undefined === _0x104ad1 ? undefined : _0x104ad1.bma, '', {
            sentry: "rare"
          }, true);
        }
      },
      _0x28ff3d = () => {
        const _0x5ce728 = globalThis.document.querySelector("[data-qa-page=\"connections\"]");
        if (!_0x5ce728) return null;
        const _0x2de87b = _0x30de57(_0x5ce728);
        if (!_0x2de87b) return null;
        const _0x2488b8 = _0x2de87b["return"].stateNode;
        return _0x2488b8 || null;
      },
      _0x3e4a9f = {
        async ["getChat"]({
          chatId: _0x37e351,
          method: _0x2d2488 = "store"
        }) {
          var _0x589c50, _0x277666, _0x49b391, _0x47c428;
          const {
            assert$: _0x4b9205
          } = _0x442618("wcijks");
          _0x4b9205(1, "string" == typeof _0x37e351, '', {
            sentry: false
          }, true), _0x4b9205(2, "store" === _0x2d2488 || "network" === _0x2d2488 || "network-if-needed" === _0x2d2488, '', {
            sentry: false
          }, true);
          const _0xa8e681 = _0x48b4e4.Chat(),
            _0x3e4a8b = _0x48b4e4.FeedItems(),
            _0x417555 = _0x28ff3d();
          let _0x38486b = false;
          const _0x4cfb34 = () => _0x417555 && _0x417555.setState({}),
            _0x58b54d = async _0x3d63c1 => {
              _0x3d63c1 && (_0x38486b = true);
              const _0x4fb810 = _0x3d63c1 ? _0xa8e681.getClientOpenChat : _0xa8e681.getCachedClientOpenChat;
              return await _0x4fb810.call(_0xa8e681, _0x37e351, {
                allowConsumeChatUnblocker: false,
                context: 26
              });
            };
          let _0x325992;
          switch (_0x2d2488) {
            case "store":
              _0x325992 = await _0x58b54d(false);
              break;
            case "network":
              _0x325992 = await _0x58b54d(true);
              break;
            case "network-if-needed":
              _0x325992 = await _0x58b54d(false), 0 === _0x325992.counter && (_0x325992 = await _0x58b54d(true));
          }
          const _0x87a087 = _0x3e4a8b.findIndex(_0x37e351),
            _0x1ab246 = null === (_0x589c50 = _0x3e4a8b.get(_0x87a087)) || undefined === _0x589c50 ? undefined : _0x589c50.object;
          return {
            id: _0x37e351,
            name: null !== (_0x49b391 = null !== (_0x277666 = null == _0x1ab246 ? undefined : _0x1ab246.name) && undefined !== _0x277666 ? _0x277666 : null == _0x325992 ? undefined : _0x325992.name) && undefined !== _0x49b391 ? _0x49b391 : '',
            messages: _0x325992.messages,
            messagesCount: _0x325992.counter,
            displayMessage: null == _0x1ab246 ? undefined : _0x1ab246.display_message,
            isDeleted: null == _0x1ab246 ? undefined : _0x1ab246.is_deleted,
            isUnread: null == _0x1ab246 ? undefined : _0x1ab246.is_unread,
            isFavourite: null == _0x1ab246 ? undefined : _0x1ab246.is_favourite,
            isOnline: 1 === (null == _0x1ab246 ? undefined : _0x1ab246.online_status),
            profilePhoto: null === (_0x47c428 = null == _0x1ab246 ? undefined : _0x1ab246.profile_photo) || undefined === _0x47c428 ? undefined : _0x47c428.large_url,
            theirVote: null == _0x1ab246 ? undefined : _0x1ab246.their_vote,
            readTimestamp: null == _0x325992 ? undefined : _0x325992.readMessagesTimestamp,
            sortTimestamp: null == _0x1ab246 ? undefined : _0x1ab246.sort_timestamp,
            updateTimestamp: null == _0x1ab246 ? undefined : _0x1ab246.update_timestamp,
            isFetched: _0x38486b,
            _userInstance: _0x1ab246,
            _chatInstance: _0x325992,
            setReadTimestamp: _0x3f0501 => {
              _0x1ab246.readMessagesTimestamp = _0x3f0501, _0x4cfb34();
            },
            setUnread: _0x12998f => {
              _0x1ab246.is_unread = _0x12998f, _0x4cfb34();
            }
          };
        },
        async ["getChats"](_0xe5a40 = {}) {
          const {
            assert$: _0x2d9f0a
          } = _0x442618("gwih");
          _0x2d9f0a(1, "object" == typeof _0xe5a40, '', {
            sentry: false
          }, true), _0x2d9f0a(2, undefined === _0xe5a40.loadAll || "boolean" == typeof _0xe5a40.loadAll, '', {
            sentry: false
          }, true), await _0x3e4a9f._feedEnableSync();
          if (!_0xe5a40.loadAll) {
            const _0x34435b = (await (async (_0x57e633, _0x352126, _0x407cd9) => await _0x48b4e4.FeedItems().getItems(_0x57e633, _0x352126, _0x407cd9))([0, 41], 244, "recent")).map(_0x1a5f91 => {
              var _0x16524f;
              return null === (_0x16524f = _0x1a5f91.object) || undefined === _0x16524f ? undefined : _0x16524f.user_id;
            }).filter(Boolean);
            return (await globalThis.Promise.all(_0x34435b.map(_0x18e793 => _0x3e4a9f.getChat({
              chatId: _0x18e793,
              method: "store"
            })))).sort((_0x286707, _0x1c868a) => _0x1c868a.sortTimestamp - _0x286707.sortTimestamp).reverse();
          }
          const _0x59438e = _0x28ff3d();
          for (_0x2d9f0a(3, _0x59438e, '', {
            sentry: "rare"
          }, true); undefined !== _0x59438e.pageToken;) {
            const _0x5aa84f = await _0x59438e.fetchFolderRequest(true);
            _0x2d9f0a(4, _0x5aa84f, '', {
              sentry: "rare"
            }, true), _0x2d9f0a(5, globalThis.Array.isArray(_0x5aa84f), '', {
              sentry: "rare"
            }, true), await _0x59438e.onFolderResult({
              shouldGetNextPage: true,
              previousFilter: _0x59438e.selectedFilter,
              clientUserList: _0x5aa84f[0]
            }), await _0x231ec8(1000);
          }
          return await _0x3e4a9f.getChats();
        },
        async ["markAsRead"](_0x489848) {
          const {
            assert$: _0x3971b3
          } = _0x442618("ptuelody");
          _0x3971b3(1, _0x489848, '', {
            sentry: false
          }, true), _0x3971b3(2, "string" == typeof _0x489848.chatId, '', {
            sentry: false
          }, true);
          const _0x52a16b = _0x48b4e4.Chat(),
            _0x3fb020 = await _0x3e4a9f.getChat({
              chatId: _0x489848.chatId,
              method: "network-if-needed"
            });
          if (_0x3971b3(3, _0x3fb020.messages.length > 0, '', {
            sentry: "rare"
          }, true), !_0x3fb020.isUnread) return false;
          const _0x480bbb = _0x3fb020.messages.reverse().find(_0x16bd48 => "in" === _0x16bd48.direction);
          if (!_0x480bbb) return null;
          const _0x4c6317 = globalThis.Math.max(_0x480bbb.dateCreated, _0x3fb020.readTimestamp || 0);
          return await _0x52a16b.throttledSendReadTimestamp.call(_0x52a16b, _0x489848.chatId, _0x4c6317), _0x480bbb.readMessagesTimestamp = _0x4c6317, _0x3fb020.setUnread(false), _0x3fb020.setReadTimestamp(_0x4c6317), true;
        },
        async ["_feedEnableSync"]() {
          const _0x3fa5cf = _0x28ff3d();
          return !!_0x3fa5cf && !_0x3e4a9f._feedIsSyncing() && (await _0x3fa5cf.unfreeze(), await _0x3fa5cf.fetchFolder(), true);
        },
        _feedIsSyncing: () => {
          var _0x5ce321;
          return !!(null === (_0x5ce321 = _0x28ff3d()) || undefined === _0x5ce321 ? undefined : _0x5ce321.folderSyncActive);
        },
        _feedUpdateUI: () => {
          var _0x112ce9;
          return null === (_0x112ce9 = _0x28ff3d()) || undefined === _0x112ce9 ? undefined : _0x112ce9.setState({});
        },
        _getOpenChat: async () => await _0x3e4a9f.getChat({
          chatId: _0x3e4a9f._getOpenChatId()
        }),
        ["_getOpenChatId"]() {
          const {
              assert$: _0x56970b
            } = _0x442618("rxraos"),
            _0xad2de = new globalThis.URL(globalThis.window.location.href).pathname;
          return _0x56970b(1, _0xad2de.startsWith("/messages"), '', {
            sentry: false
          }, true), _0x56970b(2, _0xad2de.split("/messages/")[1], '', {
            sentry: false
          }, true);
        }
      },
      _0x4fa1c1 = {
        async ["getEncounters"]() {
          const {
              assert$: _0x3cd7ae
            } = _0x442618("sdyq"),
            _0x3e7bdb = await _0x48b4e4.Encounters().get({
              context: 1,
              queueState: undefined
            });
          return _0x3cd7ae(1, _0x3e7bdb, '', {
            sentry: "rare"
          }, true), _0x3cd7ae(2, _0x3e7bdb.encounters, '', {
            sentry: "rare"
          }, true), _0x3cd7ae(3, globalThis.Array.isArray(_0x3e7bdb.encounters), '', {
            sentry: "rare"
          }, true), _0x3e7bdb.encounters.filter(_0x273004 => _0x273004.getUser).map(_0x22aa25 => ((..._0xc75b48) => {
            const _0x2b984c = {};
            return _0xc75b48.forEach(_0x11e729 => globalThis.Object.assign(_0x2b984c, _0x11e729)), _0x2b984c;
          })(_0x22aa25.getUser().toJSON(), {
            has_voted: _0x22aa25.getHasUserVoted()
          }));
        }
      },
      _0x3c5753 = 6,
      _0x1d5acf = 10,
      _0x31ff2a = 49,
      _0x5d99ab = {
        ["getNewMatches"]() {
          var _0x3d59d3, _0x5ed754;
          const _0x409fb0 = globalThis.document.querySelector("[data-qa=\"match-bar\"]");
          if (!_0x409fb0) return [];
          const _0x1490e8 = _0x30de57(_0x409fb0);
          if (!_0x1490e8) return [];
          return ((null === (_0x5ed754 = null === (_0x3d59d3 = null == _0x1490e8 ? undefined : _0x1490e8.child) || undefined === _0x3d59d3 ? undefined : _0x3d59d3.pendingProps) || undefined === _0x5ed754 ? undefined : _0x5ed754.users) || []).map(_0x535d92 => ({
            user_id: _0x535d92.id,
            isNew: _0x535d92.isNew,
            isCrush: _0x535d92.isCrush,
            gender: _0x535d92.gender,
            name: _0x535d92.name,
            photo: _0x535d92.photo
          }));
        },
        fetchNewMatches: async _0x273b91 => await _0x5d99ab._fetchFolder({
          ..._0x273b91,
          folderId: _0x31ff2a,
          usePage: true
        }),
        fetchNearby: async _0x59005d => await _0x5d99ab._fetchFolder({
          ..._0x59005d,
          folderId: _0x1d5acf,
          usePage: false
        }),
        fetchLikes: async _0x6f03f0 => await _0x5d99ab._fetchFolder({
          ..._0x6f03f0,
          folderId: _0x3c5753,
          usePage: false
        }),
        async ["_fetchFolder"]({
          folderId: _0x3373f9,
          cursor: _0x6f5f4d,
          source: _0x3dfc2c = 1,
          usePage: _0x334dbf
        }) {
          const {
            assert$: _0x4f87be
          } = _0x442618("bhoayf");
          _0x4f87be(1, "number" == typeof _0x3373f9, '', {
            sentry: false
          }, true), _0x4f87be(2, undefined === _0x6f5f4d || _0x334dbf || !_0x334dbf && "number" == typeof _0x6f5f4d, '', {
            sentry: false
          }, true), _0x4f87be(3, undefined === _0x6f5f4d || !_0x334dbf || _0x334dbf && "string" == typeof _0x6f5f4d, '', {
            sentry: false
          }, true), _0x4f87be(4, undefined === _0x3dfc2c || "number" == typeof _0x3dfc2c, '', {
            sentry: false
          }, true);
          const _0x34be31 = _0x48b4e4.Folders(),
            _0xb8ebca = await _0x34be31.fetch({
              folderId: _0x3373f9,
              activityFilter: null,
              preferredCount: 90,
              promoBlockRequestParams: [],
              clientSource: _0x3dfc2c,
              ...(_0x334dbf ? {
                pageToken: _0x6f5f4d
              } : {
                offset: _0x6f5f4d || 0
              })
            }, true, true);
          if (!_0xb8ebca) return {
            data: [],
            cursor: null
          };
          _0x4f87be(5, _0xb8ebca.length > 0, '', {
            sentry: "rare"
          }, true);
          const _0x177197 = _0xb8ebca[0];
          _0x4f87be(6, _0x177197, '', {
            sentry: "rare"
          }, true);
          const _0x3ff9f1 = _0x177197.getSection();
          if (!_0x3ff9f1) return {
            data: [],
            cursor: null
          };
          _0x4f87be(7, _0x3ff9f1, '', {
            sentry: "rare"
          }, true), _0x4f87be(8, _0x3ff9f1.length > 0, '', {
            sentry: "rare"
          }, true);
          const _0x377b72 = _0x3ff9f1[0];
          _0x4f87be(9, _0x377b72, '', {
            sentry: "rare"
          }, true);
          const _0x2a4940 = (_0x377b72.getUsers() || []).map(_0x31cb3f => _0x31cb3f.toJSON());
          return {
            data: _0x2a4940,
            cursor: _0x377b72.getLastBlock() ? null : _0x334dbf ? _0x377b72.getPageToken() : (_0x6f5f4d || 0) + _0x2a4940.length,
            ...(_0x334dbf ? {} : {
              total: _0x177197.getTotalCount()
            })
          };
        }
      },
      _0x12ff0e = {
        async ["getProfile"](_0xede54b) {
          const {
            assert$: _0x42066a
          } = _0x442618("qrbsd");
          _0x42066a(1, _0xede54b, '', {
            sentry: false
          }, true), _0x42066a(2, "string" == typeof _0xede54b.userId, '', {
            sentry: false
          }, true), _0x42066a(3, undefined === _0xede54b.forceFetch || "boolean" == typeof _0xede54b.forceFetch, '', {
            sentry: false
          }, true);
          const _0x3794f0 = await _0x4286cf.httpHandler.get("Profiles").getUserById({
            id: _0xede54b.userId,
            forced: _0xede54b.forceFetch
          });
          return _0xede54b.raw ? _0x3794f0 : _0x3794f0.toJSON();
        },
        async ["getUser"](_0x47b6e7) {
          const {
            assert$: _0x1a7966
          } = _0x442618("yzlnrpek");
          _0x1a7966(1, _0x47b6e7, '', {
            sentry: false
          }, true), _0x1a7966(2, "string" == typeof _0x47b6e7.userId, '', {
            sentry: false
          }, true);
          const _0x881861 = _0x48b4e4.FeedItems(),
            _0x41ba44 = await _0x881861.findIndex(_0x47b6e7.userId);
          if (-1 === _0x41ba44) return null;
          const _0x5ad18e = await _0x881861.get(_0x41ba44);
          return _0x1a7966(3, _0x5ad18e, '', {
            sentry: "rare"
          }, true), _0x1a7966(4, _0x5ad18e.object, '', {
            sentry: "rare"
          }, true), _0x5ad18e.object;
        },
        async ["getUsers"]() {
          const _0x389038 = _0x48b4e4.FeedItems();
          return globalThis.Object.fromEntries(_0x389038.getUsers().map(_0x14949c => {
            var _0x20add5;
            return [null === (_0x20add5 = _0x14949c.object) || undefined === _0x20add5 ? undefined : _0x20add5.user_id, null == _0x14949c ? undefined : _0x14949c.object];
          }));
        },
        ["getCurrentUser"]() {
          var _0xe9b165, _0x3c7ede;
          const {
            message$: _0x5baa60
          } = _0x442618("yjtpl");
          return null === (_0x3c7ede = null === (_0xe9b165 = _0x2ff5c3.findModule({
            key: "badoo-current-user",
            assert: _0x5baa60(1, '', {
              sentry: "rare"
            }, true),
            assertExport: _0x5baa60(2, '', {
              sentry: "rare"
            }, true),
            exportsMeta: {
              predicate: _0x219d24 => _0x219d24.user
            }
          }).exportsMatched) || undefined === _0xe9b165 ? undefined : _0xe9b165.value) || undefined === _0x3c7ede ? undefined : _0x3c7ede.user;
        }
      },
      _0x24dda0 = 1,
      _0x3b6ae0 = 3,
      _0x25a63f = {
        async ["swipeUser"](_0x1612a7) {
          var _0x438c50, _0x112d22, _0x580cc7, _0x1ff7e4;
          const {
            assert$: _0x204cc4
          } = _0x442618("jlsfynb");
          _0x204cc4(1, _0x1612a7, '', {
            sentry: false
          }, true), _0x204cc4(2, _0x1612a7.userId && "string" == typeof _0x1612a7.userId, '', {
            sentry: false
          }, true), _0x204cc4(3, _0x1612a7.direction && ("left" === _0x1612a7.direction || "right" === _0x1612a7.direction), '', {
            sentry: false
          }, true), _0x204cc4(4, !_0x1612a7.photos || _0x1612a7.photos && "object" == typeof _0x1612a7.photos, '', {
            sentry: false
          }, true), _0x204cc4(5, !(null === (_0x438c50 = _0x1612a7.photos) || undefined === _0x438c50 ? undefined : _0x438c50.firstViewedPhotoId) || "string" == typeof _0x1612a7.photos.firstViewedPhotoId, '', {
            sentry: false
          }, true), _0x204cc4(6, !(null === (_0x112d22 = _0x1612a7.photos) || undefined === _0x112d22 ? undefined : _0x112d22.matchedPhotoId) || "string" == typeof _0x1612a7.photos.matchedPhotoId, '', {
            sentry: false
          }, true);
          const _0x1295e1 = await async function _0x333e3a(_0x3c0491) {
            const {
              assert$: _0x149454
            } = _0x442618("qsuqooh");
            return _0x149454(1, _0x3c0491, '', {
              sentry: false
            }, true), _0x149454(2, _0x3c0491.userId && "string" == typeof _0x3c0491.userId, '', {
              sentry: false
            }, true), _0x149454(3, _0x3c0491.direction && ("left" === _0x3c0491.direction || "right" === _0x3c0491.direction), '', {
              sentry: false
            }, true), await _0x48b4e4.Encounters().set({
              cached: false,
              canClientMatch: true,
              firstPhotoId: _0x3c0491.firstPhotoId,
              hiddenPhotoIds: [],
              id: _0x3c0491.userId,
              isEngagedVote: false,
              photoId: _0x3c0491.matchedPhotoId,
              source: _0x3c0491.source,
              voteType: "left" === _0x3c0491.direction ? 3 : 2
            });
          }({
            matchedPhotoId: null === (_0x580cc7 = _0x1612a7.photos) || undefined === _0x580cc7 ? undefined : _0x580cc7.matchedPhotoId,
            firstPhotoId: null === (_0x1ff7e4 = _0x1612a7.photos) || undefined === _0x1ff7e4 ? undefined : _0x1ff7e4.firstViewedPhotoId,
            userId: _0x1612a7.userId,
            source: 1,
            direction: _0x1612a7.direction
          }).then(_0x594d38 => _0x594d38.toJSON());
          return _0x204cc4(7, _0x1295e1, '', {
            sentry: "rare"
          }, true), _0x204cc4(8, _0x1295e1.vote_response_type === _0x24dda0 || _0x1295e1.vote_response_type === _0x3b6ae0, '', _0x1295e1, true), _0x1295e1;
        },
        async ["unmatchUser"](_0x24b9fa) {
          const {
            assert$: _0x3c6ae7
          } = _0x442618("olcbbyco");
          _0x3c6ae7(1, _0x24b9fa, '', {
            sentry: false
          }, true), _0x3c6ae7(2, _0x24b9fa.userId && "string" == typeof _0x24b9fa.userId, '', {
            sentry: false
          }, true);
          const _0x1a1e4f = _0x48b4e4.Folders();
          _0x3c6ae7(3, await _0x1a1e4f.unmatchUser({
            personId: _0x24b9fa.userId,
            folderId: 31
          }), '', {
            sentry: "rare"
          }, true);
          const _0x5f38b7 = await _0x12ff0e.getProfile({
            userId: _0x24b9fa.userId,
            forceFetch: true
          });
          _0x3c6ae7(4, _0x5f38b7, '', {
            sentry: "rare"
          }, true), _0x3c6ae7(5, !_0x5f38b7.is_match, '', {
            sentry: "rare"
          }, true);
          const _0x5d1c6d = _0x48b4e4.FeedItems(),
            _0x4f4dc5 = _0x5d1c6d.findIndex(_0x24b9fa.userId);
          return _0x3c6ae7(6, !_0x5f38b7.is_match, '', {
            sentry: "rare"
          }, true), -1 !== _0x4f4dc5 && (await _0x5d1c6d.removeItem(_0x4f4dc5), await _0x3e4a9f._feedUpdateUI()), _0x5f38b7;
        },
        _swipeUsers: async _0x2cdee8 => await globalThis.Promise.all(_0x2cdee8.userIds.map(_0x2a2e2a => _0x25a63f.swipeUser({
          userId: _0x2a2e2a,
          direction: _0x2cdee8.direction
        })))
      },
      _0x44f202 = {
        async ["sendMessage"](_0x3ad405) {
          var _0x18312d;
          const {
            assert$: _0x4ace2f,
            message$: _0xd88f7a
          } = _0x442618("ejxgrxi");
          _0x4ace2f(1, _0x3ad405, '', {
            sentry: false
          }, true), _0x4ace2f(2, "string" == typeof _0x3ad405.chatId, '', {
            sentry: false
          }, true), _0x4ace2f(3, "string" == typeof _0x3ad405.message, '', {
            sentry: false
          }, true);
          const _0x24a9ef = _0x48b4e4.Chat(),
            _0x40a9c8 = null === (_0x18312d = _0x2ff5c3.findModule({
              key: "message-module",
              assert: _0xd88f7a(4, '', {
                sentry: "rare"
              }, true),
              assertExport: _0xd88f7a(5, '', {
                sentry: "rare"
              }, true),
              exportsMeta: {
                predicate: _0x20c5bc => {
                  var _0x1118a1, _0x1b4208;
                  return (null === (_0x1118a1 = _0x20c5bc.prototype) || undefined === _0x1118a1 ? undefined : _0x1118a1.isTemporary) && (null === (_0x1b4208 = _0x20c5bc.prototype) || undefined === _0x1b4208 ? undefined : _0x1b4208.isYours);
                }
              }
            }).exportsMatched) || undefined === _0x18312d ? undefined : _0x18312d.value,
            _0x27be98 = (await _0x3e4a9f.getChat({
              chatId: _0x3ad405.chatId,
              method: "store"
            }))._chatInstance.chatUser,
            _0x2ac97c = "messages/" + _0x3ad405.chatId + "/2",
            _0x401345 = new _0x40a9c8({
              isNew: true,
              message: _0x3ad405.message,
              messageType: 1,
              replyToUid: undefined
            }, _0x27be98, {
              isReplyFeatureAllowed: true
            });
          return await _0x24a9ef.send(_0x3ad405.chatId, _0x401345, _0x2ac97c);
        },
        async ["getMessages"](_0x5c925a) {
          const {
            assert$: _0x17333e
          } = _0x442618("brtfdx");
          return _0x17333e(1, _0x5c925a, '', {
            sentry: false
          }, true), _0x17333e(2, "string" == typeof _0x5c925a.chatId, '', {
            sentry: false
          }, true), (await _0x3e4a9f.getChat({
            chatId: _0x5c925a.chatId,
            method: "store"
          })).messages || [];
        },
        async ["paginateMessages"](_0x4e7967) {
          const {
            assert$: _0xe3ddc6
          } = _0x442618("nlnc");
          _0xe3ddc6(1, _0x4e7967, '', {
            sentry: false
          }, true), _0xe3ddc6(2, "string" == typeof _0x4e7967.chatId, '', {
            sentry: false
          }, true);
          const _0x3cd60a = _0x48b4e4.Chat(),
            _0x179d31 = await _0x3e4a9f.getChat({
              chatId: _0x4e7967.chatId,
              method: "network-if-needed"
            });
          if (_0x179d31.isFetched) return _0x179d31.messages;
          if (_0x179d31.messagesCount && _0x179d31.messages.length >= _0x179d31.messagesCount) return _0x179d31.messages;
          const _0x311959 = _0x179d31.messages[0];
          return await _0x3cd60a.getMessages(_0x4e7967.chatId, {
            count: 25,
            direction: 1,
            inclusive: false,
            messageId: (null == _0x311959 ? undefined : _0x311959.id) ? parseInt(_0x311959.id) : undefined
          }), await _0x44f202.getMessages(_0x4e7967);
        },
        async ["processMessages"](_0x37b43f) {
          const {
            assert$: _0x5de89d
          } = _0x442618("qkx");
          _0x5de89d(1, _0x37b43f, '', {
            sentry: false
          }, true), _0x5de89d(2, "string" == typeof _0x37b43f.chatId, '', {
            sentry: false
          }, true);
          const _0x46a8be = await _0x44f202.getMessages(_0x37b43f);
          return (await globalThis.Promise.all(_0x46a8be.map(async _0x3a76a3 => {
            const _0x34eb1d = await _0x44f202._processMessageIr({
              message: _0x3a76a3,
              chatId: _0x37b43f.chatId
            });
            return function _0x2ca1ff(_0x5299ef) {
              var _0x3d524e;
              _0x5299ef.ogMsg = _0x5299ef.msg;
              let _0x121757 = null !== (_0x3d524e = _0x5299ef.msg) && undefined !== _0x3d524e ? _0x3d524e : '';
              return _0x5299ef.isGif ? _0x121757 = "[GIF]" : _0x5299ef.isSticker ? _0x121757 = "[sticker]" : _0x5299ef.isPhoto ? _0x121757 = "[photo] " + _0x121757 : _0x5299ef.isVideo ? _0x121757 = "[video] " + _0x121757 : _0x5299ef.isAudio ? _0x121757 = "[audio-message] " + _0x121757 : _0x5299ef.isLocation ? _0x121757 = "[location] " + _0x121757 : _0x5299ef.isNotice ? _0x121757 = "[notice] " + _0x121757 : _0x5299ef.isGift ? _0x121757 = "[gift] " + _0x121757 : _0x5299ef.isQuestion ? _0x121757 = "[question] " + _0x5299ef.questionTitle + "\nMy answer: " + _0x5299ef.questionAnswers.other + "\nWhat's your answer?" : _0x5299ef.isCall ? _0x121757 = "[tried-to-call-you] " + _0x121757 : _0x5299ef.msg && (_0x121757 = _0x5299ef.msg), _0x121757 = _0x121757.trim(), _0x5299ef.isReply && (_0x121757 = "[replied] " + _0x121757), _0x121757 = _0x121757.trim(), _0x5299ef.msg = _0x121757, _0x5299ef;
            }(await _0x44f202._processMessage({
              ir: _0x34eb1d
            }));
          }))).sort((_0x1f8638, _0x5c5bfd) => _0x5c5bfd.timestamp - _0x1f8638.timestamp).reverse();
        },
        async ["_processMessage"](_0x22856e) {
          var _0x25dded, _0x5009db, _0x4928b7, _0x101a0b, _0x2f5e51, _0x3dbfac;
          const {
              message: _0x23e9dd
            } = _0x22856e.ir,
            _0x350166 = !!_0x23e9dd.audio,
            _0x51670b = !!_0x23e9dd.video,
            _0x53a49d = !!_0x23e9dd.gif,
            _0x2d2326 = !!_0x23e9dd.location,
            _0x15ea96 = !!_0x23e9dd.notice,
            _0x4b8307 = !!_0x23e9dd.gift,
            _0x52fe2e = !!_0x23e9dd.question,
            _0x385b13 = !_0x53a49d && !!_0x23e9dd.image,
            _0x177bf2 = null !== (_0x25dded = _0x23e9dd.messageText) && undefined !== _0x25dded ? _0x25dded : _0x23e9dd.message,
            _0x2ec3cb = _0x177bf2 && _0x177bf2.includes("video-chat-upgrade"),
            _0xf6ee70 = "in" === _0x23e9dd.direction,
            _0x490fad = _0x385b13 || _0x350166 || _0x51670b || _0x53a49d || _0x4b8307 || _0x52fe2e || _0x2ec3cb ? '' : _0x177bf2,
            _0x23e155 = _0x52fe2e ? null === (_0x5009db = _0x23e9dd.question) || undefined === _0x5009db ? undefined : _0x5009db.text : '',
            _0x20b494 = _0x52fe2e ? {
              me: _0xf6ee70 ? null === (_0x4928b7 = _0x23e9dd.question) || undefined === _0x4928b7 ? undefined : _0x4928b7.other_answer : null === (_0x101a0b = _0x23e9dd.question) || undefined === _0x101a0b ? undefined : _0x101a0b.own_answer,
              other: _0xf6ee70 ? null === (_0x2f5e51 = _0x23e9dd.question) || undefined === _0x2f5e51 ? undefined : _0x2f5e51.own_answer : null === (_0x3dbfac = _0x23e9dd.question) || undefined === _0x3dbfac ? undefined : _0x3dbfac.other_answer
            } : undefined,
            _0x21bb4c = !!_0x23e9dd.repliedMessage;
          return _0x5a8493({
            id: _0x23e9dd.id,
            timestamp: _0x23e9dd.dateCreated,
            msg: null != _0x490fad ? _0x490fad : '',
            isIncoming: _0xf6ee70,
            isReply: _0x21bb4c,
            isPhoto: _0x385b13,
            isAudio: _0x350166,
            isVideo: _0x51670b,
            isGif: _0x53a49d,
            isCall: _0x2ec3cb,
            isLocation: _0x2d2326,
            isNotice: _0x15ea96,
            isGift: _0x4b8307,
            isQuestion: _0x52fe2e,
            questionTitle: _0x23e155,
            questionAnswers: _0x20b494,
            _ir: _0x22856e.ir
          });
        },
        async ["_processMessageIr"](_0x57a634) {
          var _0x53fcdc;
          const {
              message: _0x199b4f,
              chatId: _0x143335
            } = _0x57a634,
            _0x4fdace = _0x12ff0e.getCurrentUser(),
            _0x430d4d = null === (_0x53fcdc = (await _0x3e4a9f.getChat({
              chatId: _0x143335,
              method: "store"
            }))._chatInstance.chatUser) || undefined === _0x53fcdc ? undefined : _0x53fcdc.toJSON();
          return {
            id: _0x199b4f.id,
            message: _0x199b4f,
            currentUser: _0x4fdace,
            otherUser: _0x430d4d
          };
        },
        _processOpenMessages: async () => await _0x44f202.processMessages({
          chatId: _0x3e4a9f._getOpenChatId()
        }),
        _getOpenMessages: async () => await _0x44f202.getMessages({
          chatId: _0x3e4a9f._getOpenChatId()
        })
      },
      _0x14ec3b = {
        hasLoaded: async () => !!_0x4cc3d2(() => _0x12ff0e.getCurrentUser())
      },
      _0x3457e3 = {
        async ["_isRecipientOnline"](_0x414071) {
          const {
            assert$: _0x1d0801
          } = _0x442618("yok");
          return _0x1d0801(1, _0x414071, '', {
            sentry: false
          }, true), _0x1d0801(2, "string" == typeof _0x414071.userId, '', {
            sentry: false
          }, true), (await _0x3e4a9f.getChat({
            chatId: _0x414071.userId,
            method: "store"
          })).isOnline;
        },
        async ["isRecipientPresent"](_0x3fa548) {
          const {
            assert$: _0x230060
          } = _0x442618("gunrqc");
          _0x230060(1, _0x3fa548, '', {
            sentry: false
          }, true), _0x230060(2, "string" == typeof _0x3fa548.userId, '', {
            sentry: false
          }, true);
          if (await _0x3457e3._isRecipientOnline(_0x3fa548)) return true;
          const _0x4e0f40 = await _0x3457e3._getLastReadTimestamp({
            chatId: _0x3fa548.userId
          });
          if (null == _0x4e0f40) return false;
          const _0x48a601 = globalThis.Math.floor(globalThis.Date.now() / 1000);
          return _0x4e0f40 + (_0x3fa548.thresholdMs || 180000) / 1000 > _0x48a601;
        },
        async ["_getLastReadTimestamp"](_0xd0468e) {
          const {
            assert$: _0x3f880d
          } = _0x442618("hlhuhhqc");
          _0x3f880d(1, _0xd0468e, '', {
            sentry: false
          }, true), _0x3f880d(2, "string" == typeof _0xd0468e.chatId, '', {
            sentry: false
          }, true);
          const _0x1a07fe = (await _0x44f202.getMessages({
            chatId: _0xd0468e.chatId
          })).reverse().find(_0x29f23c => _0x29f23c.isRead && "out" === _0x29f23c.direction);
          return (null == _0x1a07fe ? undefined : _0x1a07fe.dateCreated) || null;
        }
      },
      _0x1a3a5a = {
        NEARBY: "Nearby",
        FAVORITE: "Favorites",
        VIEWED_ME: "Viewed Me",
        TAGS: "Tag Search",
        EXPLORE: "Explore"
      },
      _0x4636fa = "Image",
      _0x258a1b = "Album",
      _0x4d243f = "Giphy",
      _0x1bd032 = "Gaymoji",
      _0x4cbe37 = "ExpiringImage",
      _0x539318 = "Video",
      _0x5e0aca = "Location",
      _0x557c55 = "ProfilePhotoReply",
      _0x21a2a9 = "NonExpiringVideo",
      _0x1ed6fb = "Audio",
      _0x5d5cb7 = "Tap",
      _0x23d437 = "AlbumContentReaction",
      _0x1b4227 = "AlbumContentReply",
      _0x205cbb = "Unsent",
      _0x5ac32b = "ThrobText",
      _0x408b54 = "grindr_auth_reload",
      _0x37f2fb = {
        async ["getConversations"]({
          loadAll: _0xe787f9 = false
        }) {
          const _0x3d7d64 = () => _0x10234a.store.get("websocketChatStore->sortedChatSidebarEntries", true),
            _0x4c6278 = _0x3b7a48 => _0x10234a.store.call("websocketChatStore->fetchInbox", _0x3b7a48);
          for (0 === _0x3d7d64().length && (await _0x4c6278(true)); _0xe787f9 && _0x10234a.store.get("websocketChatStore->inboxNextPage");) await _0x4c6278(false), await _0x231ec8(1000);
          return _0x3d7d64().slice().reverse();
        },
        async ["getConversation"]({
          conversationId: _0x508158,
          method: _0xe8119b = "store"
        }) {
          const {
            assert$: _0xc74316
          } = _0x442618("cfocdu");
          _0xc74316(1, _0x4848bd(_0x508158, "string"), '', {
            sentry: false
          }, true), _0xc74316(2, _0xbc63a7(_0xe8119b, _0x33d6e2), '', {
            sentry: false
          }, true);
          const _0x5ef668 = () => _0x10234a.store.get("chatInterface->conversations", true);
          ("network" === _0xe8119b || !_0x5ef668() && "network-if-needed" === _0xe8119b) && (await _0x10234a.store.call("websocketChatStore->fetchConversationsById", [_0x508158]));
          const _0x527e25 = () => _0x5ef668()[_0x508158];
          return _0xc86507 ? _0x4d65b9(_0x527e25()) : _0x527e25();
        },
        async ["markAsRead"]({
          conversationId: _0xfdad83
        }) {
          const {
            assert$: _0x22b0d9
          } = _0x442618("xtxtvm");
          _0x22b0d9(1, _0x4848bd(_0xfdad83, "string"), '', {
            sentry: false
          }, true), await _0x10234a.store.call("websocketChatStore->clearUnreadMessages", _0xfdad83);
        },
        ["_getOpenConversationId"]() {
          const {
              assert$: _0xed056b
            } = _0x442618("fmcxtb"),
            _0x3af42e = globalThis.document.querySelector("div[data-testid=\"chat-container\"]");
          return _0xed056b(1, !!_0x3af42e, '', {
            sentry: false
          }, true), _0x229767("return->return->pendingProps->conversationId", _0x30de57(_0x3af42e));
        },
        async ["_getOpenConversation"]() {
          const _0x3ee095 = await _0x37f2fb._getOpenConversationId();
          return await _0x37f2fb.getConversation({
            conversationId: _0x3ee095,
            method: "store"
          });
        }
      },
      _0x52f4ec = {
        ["getCurrentUser"]() {
          const _0x4857b5 = _0x10234a.store.get("userStore->user", true);
          return {
            ..._0x10234a.store.get("userStore->profile", true),
            ..._0x4857b5
          };
        },
        async ["getParticipant"]({
          conversationId: _0x378fd4
        }) {
          const {
            assert$: _0xc30787
          } = _0x442618("fygedj");
          _0xc30787(1, _0x4848bd(_0x378fd4, "string"), '', {
            sentry: false
          }, true);
          const _0xf965d = await _0x37f2fb.getConversation({
            conversationId: _0x378fd4,
            method: "store"
          });
          if (!_0xf965d) return null;
          const _0x5beafc = _0xf965d.participants[0];
          return await _0x52f4ec.getUser({
            userId: _0x5beafc.profileId,
            method: "store"
          });
        },
        async ["getUser"]({
          userId: _0x48f617,
          method: _0x56c2b2
        }) {
          const {
            assert$: _0x310b34
          } = _0x442618("pxhkza");
          _0x310b34(1, _0x4848bd(_0x48f617, "string", "number"), '', {
            sentry: false,
            extra: {
              userId: _0x48f617
            }
          }, true), _0x310b34(1, _0xbc63a7(_0x56c2b2, _0x33d6e2), '', {
            sentry: false,
            extra: {
              method: _0x56c2b2
            }
          }, true);
          const _0x56f24c = () => {
              var _0x770b66;
              const _0x38463b = _0x10234a.store.get("profileStore->users->" + _0x48f617);
              return null !== (_0x770b66 = null == _0x38463b ? undefined : _0x38463b.fullProfile) && undefined !== _0x770b66 ? _0x770b66 : null == _0x38463b ? undefined : _0x38463b.profile;
            },
            _0x4c0035 = _0x56f24c();
          return "network" === _0x56c2b2 || !_0x4c0035 && "network-if-needed" === _0x56c2b2 ? (await _0x10234a.store.call("profileStore->fetchOne", _0x48f617, true), _0xc86507 ? {
            ..._0x56f24c()
          } : _0x56f24c()) : _0xc86507 ? {
            ..._0x4c0035
          } : _0x4c0035;
        },
        async ["getUsers"]({
          fullProfiles: _0x4a1ace = false
        }) {
          const _0x57dd73 = {};
          (await _0x37f2fb.getConversations({})).forEach(_0x56a567 => {
            _0x56a567.participants.forEach(_0x5f4cde => {
              _0x57dd73[_0x5f4cde.profileId] = _0x5f4cde;
            });
          });
          (await _0x4a5e1b.getNearby({})).forEach(_0x559da0 => {
            _0x57dd73[_0x559da0.profileId] = _0x559da0;
          });
          const _0x23c40a = _0x10234a.store.get("profileStore->users");
          return globalThis.Object.entries(_0x23c40a).forEach(([_0x47b8fb, _0x335f94]) => {
            var _0x3b871a, _0x25f741, _0x925ce7, _0x397925, _0x431131, _0x1fcef5;
            const {
              fullProfile: _0x257c74,
              profile: _0x11997d
            } = _0x335f94;
            (!_0x4a1ace || _0x257c74 || (null == _0x11997d ? undefined : _0x11997d.aboutMe) || (null == _0x11997d ? undefined : _0x11997d.height) || (null == _0x11997d ? undefined : _0x11997d.age) || globalThis.Object.keys(null !== (_0x3b871a = null == _0x11997d ? undefined : _0x11997d.socialNetworks) && undefined !== _0x3b871a ? _0x3b871a : {}).length || (null === (_0x25f741 = null == _0x11997d ? undefined : _0x11997d.hashtags) || undefined === _0x25f741 ? undefined : _0x25f741.length) || (null === (_0x925ce7 = null == _0x11997d ? undefined : _0x11997d.lookingFor) || undefined === _0x925ce7 ? undefined : _0x925ce7.length) || (null === (_0x397925 = null == _0x11997d ? undefined : _0x11997d.meetAt) || undefined === _0x397925 ? undefined : _0x397925.length) || (null === (_0x431131 = null == _0x11997d ? undefined : _0x11997d.profileTags) || undefined === _0x431131 ? undefined : _0x431131.length) || (null === (_0x1fcef5 = null == _0x11997d ? undefined : _0x11997d.vaccines) || undefined === _0x1fcef5 ? undefined : _0x1fcef5.length)) && (_0x57dd73[_0x47b8fb] = null != _0x257c74 ? _0x257c74 : _0x11997d);
          }), _0x57dd73;
        },
        async ["blockUser"]({
          userId: _0x44c043
        }) {
          const {
            assert$: _0x28f3e9
          } = _0x442618("exvaip");
          _0x28f3e9(1, _0x4848bd(_0x44c043, "string", "number"), '', {
            extra: {
              userId: _0x44c043
            },
            sentry: false
          }, true);
          const _0x4c92fe = await _0x52f4ec.getUser({
            userId: _0x44c043,
            method: "store"
          });
          _0x28f3e9(2, _0x4c92fe, '', {
            sentry: "rare"
          }, true);
          const _0x468581 = _0x10234a.store.get("trustAndSafetyStore", true),
            _0x53598c = _0x468581.handleError;
          let _0x2d9e8e = false;
          _0x468581.handleError = new Proxy(_0x53598c, {
            apply: (_0x4a72df, _0x1f6d45, _0x3e8a1d) => (globalThis.console.log("trustAndSafetyStore.handleError", _0x3e8a1d), _0x2d9e8e = true, _0x4a72df.apply(_0x1f6d45, _0x3e8a1d))
          }), await _0x10234a.store.call("trustAndSafetyStore->addBlock", _0x4c92fe.profileId), _0x468581.handleError = _0x53598c, _0x28f3e9(3, !_0x2d9e8e, '', {
            sentry: "rare"
          }, true);
        },
        _getOpenConversationParticipant: () => _0x52f4ec.getParticipant({
          conversationId: _0x37f2fb._getOpenConversationId()
        })
      },
      _0x22c9bf = "grindr_last_reload",
      _0x2fa02b = {
        async ["_assertConnected"]() {
          const {
              assert$: _0x3e06b7,
              throw$: _0x17af69
            } = _0x442618("aizojt"),
            _0x5109a7 = () => _0x10234a.store.get("websocketChatStore->connectionStatus", true);
          if (_0x5109a7() !== WebSocket.OPEN && (await _0x10234a.store.call("websocketChatStore->connectToChat", {
            ignoreConnectionCheck: true
          })), _0x3e06b7(1, _0x5109a7() === WebSocket.OPEN, '', {
            sentry: "uncommon"
          }, true), _0x5109a7() !== WebSocket.OPEN) {
            const _0x58050e = globalThis.localStorage.getItem("grindr_last_reload"),
              _0x4cec78 = _0x58050e ? new globalThis.Date(+_0x58050e) : null;
            !_0x4cec78 || _0x33c756(_0x4cec78, _0xd3d098(10)) ? (globalThis.localStorage.setItem("grindr_last_reload", globalThis.Date.now().toString()), globalThis.location.reload()) : _0x17af69(2, '', {
              sentry: "veryRare"
            }, true);
          }
        },
        async ["hasLoaded"]() {
          try {
            if (!(1 === _0x10234a.store.get("websocketChatStore->connectionStatus", true))) return false;
            const _0x276d2c = await _0x52f4ec.getCurrentUser(),
              _0x2de21d = await _0x37f2fb.getConversations({})["catch"](_0xc87fc5 => null);
            return !!_0x276d2c && !!_0x2de21d;
          } catch (_0x4312ed) {
            return false;
          }
        },
        init: async () => await function _0x4d305b() {
          const {
            message$: _0x44d9d8
          } = _0x442618("eivzra");
          globalThis.window.location.href.toLowerCase().includes("grindr.com") && (globalThis.window.fetch = new Proxy(globalThis.window.fetch, {
            ["apply"](_0x1c8ede, _0x4cace9, [_0x4ff62d, ..._0xd93479]) {
              const _0x385329 = Reflect.apply(_0x1c8ede, _0x4cace9, [_0x4ff62d, ..._0xd93479]);
              return "string" == typeof _0x4ff62d && _0x4ff62d.includes("grindr.com") && _0x385329.then(_0x2f6ad8 => {
                const _0x5dfac0 = globalThis.localStorage.getItem("grindr_auth_reload"),
                  _0x149827 = _0x5dfac0 ? new globalThis.Date(_0x5dfac0) : null;
                if (401 === _0x2f6ad8.status && !globalThis.location.pathname.includes("/login")) {
                  if (_0x149827 && !_0x33c756(_0x149827, _0x1a4046(3))) return void globalThis.console.log(_0x44d9d8(1, '', {
                    sentry: "veryRare",
                    extra: {
                      lastReloadTime: _0x5dfac0
                    }
                  }, true));
                  globalThis.localStorage.setItem("grindr_auth_reload", new globalThis.Date().toISOString()), globalThis.location.href = "https://web.grindr.com/login";
                }
              }), _0x385329;
            }
          }));
        }()
      },
      _0x2ef8e5 = {},
      _0x10234a = {
        store: {
          ["get"](_0x2aadd5, _0x6dd15a = false) {
            const {
              assert$: _0x5f5319
            } = _0x442618("escwie");
            let _0x5db0bc = _0x2ef8e5.store;
            if (!_0x5db0bc) {
              const _0x4bf8ad = _0x5f5319(1, globalThis.document.querySelector(".App"), '', {
                  sentry: "rare"
                }, true),
                _0x18a0fb = _0x5f5319(2, _0x30de57(_0x4bf8ad), '', {
                  sentry: "rare"
                }, true),
                _0x1ea16d = _0x5f5319(3, _0x18a0fb.child, '', {
                  sentry: "rare"
                }, true),
                _0x1a7326 = _0x5f5319(4, _0x1ea16d.sibling, '', {
                  sentry: "rare"
                }, true),
                _0x405c9a = _0x5f5319(5, _0x1a7326.sibling, '', {
                  sentry: "rare"
                }, true),
                _0x49c030 = _0x5f5319(6, _0x405c9a.dependencies, '', {
                  sentry: "rare"
                }, true),
                _0x5bedc5 = _0x5f5319(7, _0x49c030.firstContext, '', {
                  sentry: "rare"
                }, true),
                _0x1065b7 = _0x5f5319(8, _0x5bedc5.memoizedValue, '', {
                  sentry: "rare"
                }, true);
              _0x5db0bc = _0x2ef8e5.store = _0x1065b7;
            }
            const _0xd3893f = _0x229767(_0x2aadd5, _0x5db0bc);
            return _0x6dd15a && _0x5f5319(9, null != _0xd3893f, '', {
              sentry: "rare"
            }, true), _0xd3893f;
          },
          ["call"](_0x47064b, ..._0x1feb15) {
            _0x1feb15[_0x1feb15.length - 1] && "object" == typeof _0x1feb15[_0x1feb15.length - 1] && "ignoreConnectionCheck" in _0x1feb15[_0x1feb15.length - 1] ? _0x1feb15.pop() : _0x2fa02b._assertConnected();
            const _0x592ead = _0x47064b.split("->"),
              _0xc285d3 = _0x592ead.slice(0, -1).join("->"),
              _0x20b1aa = _0x592ead.pop(),
              _0x59deb1 = _0x10234a.store.get(_0xc285d3);
            return _0x59deb1[_0x20b1aa].call(_0x59deb1, ..._0x1feb15);
          },
          search: _0x1e436f => _0x4d9a60(_0x10234a.store.get(), _0x1e436f, {
            cacheKey: null,
            mode: "depth",
            depth: 6,
            listNonEnumerable: true
          })
        }
      },
      _0x4a5e1b = {
        getTaps: () => {
          const _0x11bda4 = _0x10234a.store.get("tapStore->tapList", true);
          return _0xc86507 ? _0x4d65b9(_0x11bda4) : _0x11bda4;
        },
        async ["getNearby"]({
          paginate: _0x1ec1ca = false,
          reset: _0xb7f724 = false,
          filter: _0x3ebe31
        }) {
          const {
            assert$: _0x2e3e6d
          } = _0x442618("zjvrjd");
          _0x2e3e6d(1, !_0x3ebe31 || _0x4848bd(_0x3ebe31, "object"), '', {
            sentry: false
          }, true), _0x2e3e6d(2, !_0x1ec1ca || _0x4848bd(_0x1ec1ca, "boolean"), '', {
            sentry: false
          }, true), _0x2e3e6d(3, !_0xb7f724 || _0x4848bd(_0xb7f724, "boolean"), '', {
            sentry: false
          }, true), _0x2e3e6d(4, !(_0x1ec1ca && _0xb7f724), '', {
            sentry: false
          }, true);
          const _0x42f8fd = async () => (await _0x4a5e1b._getCascade({
            cascade: _0x1a3a5a.NEARBY
          })).filter(_0xb76931 => _0xb76931.profileId);
          if (_0x3ebe31 && (await _0x4a5e1b._filterNearby(_0x3ebe31)) && (_0xb7f724 = true), !_0xb7f724 && !_0x1ec1ca) return await _0x42f8fd();
          const _0x5c516c = _0xb7f724;
          return await _0x10234a.store.call("cascadeStore->getNearbyProfiles", _0x5c516c), await _0x42f8fd();
        },
        async ["_filterNearby"](_0x1189bb) {
          const {
              assert$: _0x3e87fa
            } = _0x442618("coiizm"),
            _0x4ed2d1 = _0x10234a.store.get("cascadeStore->filterStore", true).filters.Nearby;
          let _0x590af3 = false;
          for (const _0x133940 in _0x1189bb) {
            _0x3e87fa(1, _0x4ed2d1[_0x133940], '', {
              sentry: false
            }, true);
            const _0x12eb1b = _0x4ed2d1[_0x133940].isEnabled,
              _0x494858 = _0x1189bb[_0x133940];
            _0x12eb1b !== _0x494858 && (_0x4ed2d1[_0x133940].isEnabled = _0x494858, _0x590af3 = true);
          }
          return _0x590af3;
        },
        ["_getCascade"]({
          cascade: _0xcd5094
        }) {
          const {
            assert$: _0x20b122
          } = _0x442618("mewwgu");
          _0x20b122(1, _0xbc63a7(_0xcd5094, globalThis.Object.values(_0x1a3a5a)), '', {
            sentry: false
          }, true);
          const _0x393508 = _0x10234a.store.get("cascadeStore->cascadeInfo->" + _0xcd5094 + "->items", true);
          return _0x20b122(2, !!_0x393508, '', {
            sentry: "uncommon"
          }, true), _0xc86507 ? _0x4d65b9(_0x393508) : _0x393508;
        }
      },
      _0x349451 = {
        async ["_uploadMedia"]({
          blob: _0x394a25,
          blobExtension: _0x28a401
        }) {
          const {
            assert$: _0x50dcde
          } = _0x442618("thwtyc");
          _0x50dcde(1, _0x394a25.type.startsWith("image/"), '', {
            sentry: false
          }, true);
          const _0x263cd1 = _0x491d77(10),
            _0x147bcd = new File([_0x394a25], _0x263cd1 + "." + _0x28a401, {
              type: _0x394a25.type
            });
          return !globalThis.Object && (DiLHW() ^= sjSIv), _0x50dcde(1, !(await _0x10234a.store.call("mediaStore->uploadChatImage", _0x147bcd)), '', {
            sentry: "uncommon"
          }, true), _0x10234a.store.get("mediaStore->chatImages", true)[0];
        }
      },
      _0x2e5ee8 = {
        async ["sendMessage"]({
          conversationId: _0x8c0f14,
          userId: _0x3a988e,
          message: _0xe18123,
          blob: _0x3083f6,
          blobExtension: _0x5cdd44
        }) {
          const {
            assert$: _0x3e7817
          } = _0x442618("podzxm");
          _0x3e7817(1, _0x8c0f14 || _0x3a988e, '', {
            sentry: false
          }, true), _0x3e7817(2, !_0x8c0f14 || _0x4848bd(_0x8c0f14, "string"), '', {
            sentry: false
          }, true), _0x3e7817(3, !_0x8c0f14 || _0x8c0f14.includes(":"), '', {
            sentry: false
          }, true), _0x3e7817(4, !_0x3a988e || _0x4848bd(_0x3a988e, "number", "string"), '', {
            sentry: false
          }, true), _0x3e7817(5, _0x3083f6 || _0xe18123, '', {
            sentry: false
          }, true), _0x3e7817(6, _0x3083f6 && !_0xe18123 || !_0x3083f6 && _0xe18123, '', {
            sentry: false
          }, true), _0x3e7817(7, !_0xe18123 || _0x4848bd(_0xe18123, "string"), '', {
            sentry: false
          }, true), _0x3e7817(8, !_0x3083f6 || _0x4848bd(_0x3083f6, "blob"), '', {
            sentry: false
          }, true), _0x3e7817(9, !_0x3083f6 || _0x4848bd(_0x5cdd44, "string"), '', {
            sentry: false
          }, true), null != _0x3a988e || (_0x3a988e = _0x8c0f14.split("-")[0]), _0x3a988e = parseInt(_0x3a988e);
          const _0x1a6bc0 = _0x3083f6 ? await _0x349451._uploadMedia({
              blob: _0x3083f6,
              blobExtension: _0x5cdd44
            }).then(_0x1b8286 => _0x1b8286.id) : undefined,
            _0x8bdbe9 = _0x3083f6 ? await _0x2e5ee8._createNewChatMessage(_0x3a988e, {
              mediaId: _0x1a6bc0
            }, "Image") : await _0x2e5ee8._createNewChatMessage(_0x3a988e, {
              text: _0xe18123
            }, "Text");
          return await _0x10234a.store.call("chatInterface->sendMessage", _0x8bdbe9);
        },
        async ["paginateMessages"]({
          conversationId: _0x1a231e
        }) {
          const {
            assert$: _0x4e56b1
          } = _0x442618("zuckuy");
          _0x4e56b1(1, _0x4848bd(_0x1a231e, "string"), '', {
            sentry: false
          }, true);
          const _0x539935 = () => _0x10234a.store.get("chatInterface->hasNoMoreMessage->" + _0x1a231e),
            _0x230c77 = () => _0x2e5ee8._getMessages({
              conversationId: _0x1a231e
            });
          return _0x539935() ? {
            hasMore: false,
            data: _0x230c77()
          } : (await _0x10234a.store.call("websocketChatStore->fetchMessagesFromConversation", _0x1a231e), {
            hasMore: !_0x539935(),
            data: _0x230c77()
          });
        },
        async ["processMessages"]({
          conversationId: _0x24cff8
        }) {
          const {
            assert$: _0x25b4f9
          } = _0x442618("omvlrx");
          _0x25b4f9(1, _0x4848bd(_0x24cff8, "string"), '', {
            sentry: false
          }, true);
          const _0x3c8cd7 = await _0x2e5ee8._getMessages({
              conversationId: _0x24cff8
            }),
            _0x1f6cea = await _0x52f4ec.getCurrentUser(),
            _0x2113e4 = await _0x37f2fb.getConversation({
              conversationId: _0x24cff8,
              method: "store"
            }),
            _0x277d9d = await _0x52f4ec.getParticipant({
              conversationId: _0x24cff8
            });
          return await globalThis.Promise.all(_0x3c8cd7.map(async _0x12193a => await _0x2e5ee8._processMessage({
            ir: await _0x2e5ee8._processMessageIr({
              message: _0x12193a,
              conversation: _0x2113e4,
              user: _0x1f6cea,
              otherUser: _0x277d9d
            })
          })));
        },
        _processOpenMessages: async () => _0x2e5ee8.processMessages({
          conversationId: _0x37f2fb._getOpenConversationId()
        }),
        _processMessageIr: async ({
          message: _0x161c71,
          conversation: _0x3bb474,
          user: _0xae1ad6,
          otherUser: _0x2a745e,
          attachedMessage: _0xd7a418
        }) => ({
          message: _0x161c71,
          conversation: _0x3bb474,
          user: _0xae1ad6,
          otherUser: _0x2a745e,
          attachedMessage: _0xd7a418 ? _0x2e5ee8._processMessageIr({
            message: _0xd7a418,
            conversation: _0x3bb474,
            user: _0xae1ad6,
            otherUser: _0x2a745e
          }) : undefined
        }),
        async ["_processMessage"]({
          ir: _0x31c8a5
        }) {
          var _0x291fd1, _0xa7346d, _0x550109;
          const {
              message: _0x43a84e,
              conversation: _0x497f4b,
              user: _0x5eddc6,
              otherUser: _0x52c568,
              attachedMessage: _0x16a04c
            } = _0x31c8a5,
            _0x1d29b7 = _0x43a84e.messageId,
            _0x1572c0 = _0x43a84e.timestamp / 1000,
            _0x3cd96d = _0x5eddc6.profileId != _0x43a84e.senderId,
            _0x200ce5 = _0x43a84e.type === "NonExpiringVideo",
            _0x1a6e92 = _0x43a84e.type === "Audio",
            _0x583551 = _0x43a84e.type === "Giphy",
            _0x2e5227 = _0x43a84e.type === "Gaymoji",
            _0x43e29b = _0x43a84e.type === "Location",
            _0x10a4d1 = (_0x43a84e.type, _0x43a84e.type === "ThrobText"),
            _0x5251fc = _0x43a84e.type === "ExpiringImage",
            _0x330018 = _0x43a84e.type === "Video",
            _0x4b23cf = _0x43a84e.type === "Tap",
            _0x1fc4a7 = _0x43a84e.type === "Unsent",
            _0x583804 = _0x5251fc || _0x43a84e.type === "Image",
            _0xdd974e = _0x43a84e.type === "Album",
            _0x29e876 = _0x43a84e.type === "ProfilePhotoReply",
            _0x35f9e9 = _0x43a84e.type === "AlbumContentReply",
            _0x2f8a1f = _0x43a84e.type === "AlbumContentReaction",
            _0x45d187 = !!_0x43a84e.replyToMessage;
          return _0x5a8493(function _0x19b036(_0x1cb46c) {
            _0x1cb46c.ogMsg = _0x1cb46c.msg;
            let _0x54543f = _0x1cb46c.msg || '';
            return _0x1cb46c.isGif ? _0x54543f = "[GIF]" : _0x1cb46c.isGaymoji ? _0x54543f = "[gaymoji]" : _0x1cb46c.isPhoto || _0x1cb46c.isExpiringImage ? _0x54543f = "[photo] " + _0x54543f : _0x1cb46c.isVideo || _0x1cb46c.isExpiringVideo ? _0x54543f = "[video] " + _0x54543f : _0x1cb46c.isAudio ? _0x54543f = "[audio-message] " + _0x54543f : _0x1cb46c.isTap ? _0x54543f = "[tap] hi" : _0x1cb46c.isThrob ? _0x54543f = "[throb] " + _0x54543f : _0x1cb46c.isLocation ? _0x54543f = "[current-location] " + _0x54543f : _0x1cb46c.isAlbum ? _0x54543f = "[photo-album] " + _0x54543f : _0x1cb46c.isAlbumReaction && (_0x54543f = "[album-reaction] " + _0x54543f), _0x54543f = _0x54543f.trim(), _0x1cb46c.isProfilePhotoReply ? _0x54543f = "[replied-to-your-photo] " + _0x54543f : (_0x1cb46c.isReply || _0x1cb46c.isAlbumReply) && (_0x54543f = "[replied] " + _0x54543f), _0x54543f = _0x54543f.trim(), _0x1cb46c.msg = _0x54543f, _0x1cb46c;
          }({
            id: _0x1d29b7,
            timestamp: _0x1572c0,
            msg: (null === (_0x291fd1 = _0x43a84e.body) || undefined === _0x291fd1 ? undefined : _0x291fd1.photoContentReply) || (null === (_0xa7346d = _0x43a84e.body) || undefined === _0xa7346d ? undefined : _0xa7346d.albumContentReply) || (null === (_0x550109 = _0x43a84e.body) || undefined === _0x550109 ? undefined : _0x550109.text),
            isIncoming: _0x3cd96d,
            isPhoto: _0x583804,
            isVideo: _0x200ce5,
            isAudio: _0x1a6e92,
            isGif: _0x583551,
            isGaymoji: _0x2e5227,
            isLocation: _0x43e29b,
            isThrob: _0x10a4d1,
            isExpiringImage: _0x5251fc,
            isExpiringVideo: _0x330018,
            isUnsent: _0x1fc4a7,
            isTap: _0x4b23cf,
            isProfilePhotoReply: _0x29e876,
            isAlbum: _0xdd974e,
            isAlbumReply: _0x35f9e9,
            isAlbumReaction: _0x2f8a1f,
            isReply: _0x45d187,
            repliedMessage: _0x16a04c ? await _0x2e5ee8._processMessage({
              ir: _0x16a04c
            }) : undefined,
            _ir: _0x31c8a5
          }));
        },
        async ["_getLastReceivedMessage"]({
          conversationId: _0x5c25fc
        }) {
          const {
            assert$: _0x45c31e
          } = _0x442618("btktph");
          return _0x45c31e(1, _0x4848bd(_0x5c25fc, "string"), '', {
            sentry: false
          }, true), _0x10234a.store.call("websocketChatStore->getLastReceivedMessage", _0x5c25fc);
        },
        _paginateOpenMessages: async () => _0x2e5ee8.paginateMessages({
          conversationId: _0x37f2fb._getOpenConversationId()
        }),
        ["_getMessages"]({
          conversationId: _0x37263e
        }) {
          var _0x630cfe, _0x50ff9b;
          const {
            assert$: _0x3f417d
          } = _0x442618("sfohuj");
          _0x3f417d(1, _0x4848bd(_0x37263e, "string"), '', {
            sentry: false
          }, true);
          const _0xc758a = (null === (_0x50ff9b = null === (_0x630cfe = _0x10234a.store.get("websocketChatStore->messages->" + _0x37263e + "->messages")) || undefined === _0x630cfe ? undefined : _0x630cfe.slice()) || undefined === _0x50ff9b ? undefined : _0x50ff9b.reverse()) || [];
          return _0xc86507 ? _0x4d65b9(_0xc758a) : _0xc758a;
        },
        _getOpenMessages: () => _0x2e5ee8._getMessages({
          conversationId: _0x37f2fb._getOpenConversationId()
        }),
        _createNewChatMessage: async (_0x57c3bb, _0x56aecb, _0x50f8ee) => await _0x10234a.store.call("chatInterface->createNewChatMessage", _0x57c3bb, _0x56aecb, _0x50f8ee)
      },
      _0xeafc71 = _0x1a4046(5),
      _0x558eeb = _0x1a4046(3),
      _0x4e4d4f = _0x1a4046(3),
      _0x5b1977 = {
        TYPING: "Typing",
        CLEARED: "Cleared",
        SENT: "Sent"
      },
      _0x37fd64 = {
        isRecipientPresent: async ({
          conversationId: _0x512ac7
        }) => !!(await _0x37fd64._isRecipientOnline({
          conversationId: _0x512ac7
        })) || !!(await _0x37fd64._isRecipientReading({
          conversationId: _0x512ac7
        })) || !!(await _0x37fd64._isLastReceivedMessageRecent({
          conversationId: _0x512ac7
        })),
        ["getLastReadTimestamp"]({
          conversationId: _0x74ee05
        }) {
          const _0x479356 = _0x10234a.store.get("websocketChatStore->messageReadStatuses", true);
          return _0x479356 ? _0x479356[_0x74ee05] : null;
        },
        startTyping: async ({
          conversationId: _0x232e1e
        }) => await _0x37fd64._setTypingStatus({
          conversationId: _0x232e1e,
          status: _0x5b1977.TYPING
        }),
        stopTyping: async ({
          conversationId: _0x417787,
          sent: _0x3177
        }) => await _0x37fd64._setTypingStatus({
          conversationId: _0x417787,
          status: _0x3177 ? _0x5b1977.SENT : _0x5b1977.CLEARED
        }),
        async ["_setTypingStatus"]({
          conversationId: _0x4da605,
          status: _0x37907d
        }) {
          const {
            assert$: _0x456623
          } = _0x442618("ldwrab");
          return _0x456623(1, _0x4848bd(_0x4da605, "string"), '', {
            sentry: false
          }, true), _0x456623(2, _0xbc63a7(_0x37907d, globalThis.Object.values(_0x5b1977)), '', {
            sentry: false
          }, true), await _0x10234a.store.call("chatInterface->updateStatus", _0x4da605, _0x37907d);
        },
        async ["_isRecipientOnline"]({
          conversationId: _0x512ed5
        }) {
          const {
            assert$: _0x53d80d
          } = _0x442618("qfbedy");
          _0x53d80d(1, _0x4848bd(_0x512ed5, "string"), '', {
            sentry: false
          }, true);
          const _0x5717c3 = await _0x52f4ec.getParticipant({
            conversationId: _0x512ed5
          });
          if (!_0x5717c3 || !_0x5717c3.seen) return false;
          const _0xa1992 = _0x5717c3.seen;
          return !!(_0xa1992 && globalThis.Date.now() - _0xa1992 < _0xeafc71);
        },
        async ["_isLastReceivedMessageRecent"]({
          conversationId: _0x3fd133
        }) {
          const _0x11e298 = await _0x2e5ee8._getLastReceivedMessage({
            conversationId: _0x3fd133
          });
          return !!_0x11e298 && globalThis.Date.now() - _0x11e298.timestamp < _0x4e4d4f;
        },
        ["_isRecipientReading"]({
          conversationId: _0x2b02ad
        }) {
          const {
            assert$: _0x4a8f78
          } = _0x442618("eujabb");
          _0x4a8f78(1, _0x4848bd(_0x2b02ad, "string"), '', {
            sentry: false
          }, true);
          const _0x5d6b21 = _0x37fd64.getLastReadTimestamp({
            conversationId: _0x2b02ad
          });
          return !!_0x5d6b21 && globalThis.Date.now() - _0x5d6b21 < _0x558eeb;
        }
      },
      _0x10327a = {
        ["jqlite"](_0x4ab69e, _0x1e9acd = true) {
          const {
              assert$: _0x5082ad
            } = _0x442618("twfvdc"),
            _0xe3f90f = globalThis.document.querySelector(_0x4ab69e);
          return _0x1e9acd && _0x5082ad(1, _0xe3f90f, '', {
            sentry: "rare"
          }, true), globalThis.angular.element(_0xe3f90f);
        },
        ["protos"]() {
          const {
              assert$: _0x16607a
            } = _0x442618("tkaccr"),
            _0xa2a4d1 = _0x16607a(1, globalThis._gv, '', {
              sentry: "rare"
            }, true);
          return _0x16607a(2, _0xa2a4d1.soyProto, '', {
            sentry: "rare"
          }, true);
        },
        store: {
          ["service"]() {
            const _0x15419d = _0x10327a.jqlite("gv-messaging-view").injector().get("storeNG2");
            return {
              dispatch: _0x15419d.dispatch.bind(_0x15419d),
              state: _0x15419d.state.bind(_0x15419d)
            };
          },
          ["get"](_0x50c66f = '') {
            const {
              assert$: _0x29931e,
              message$: _0x9dafdd
            } = _0x442618("3548d6");
            return _0x29931e(5, _0x229767(_0x50c66f, _0x10327a.store.service().state()), '', {
              sentry: "rare"
            }, true);
          },
          dispatch: _0x546bcf => _0x10327a.store.service().dispatch(_0x546bcf),
          search: _0x37afdd => _0x4d9a60(_0x10327a.store.get(), _0x37afdd, {
            cacheKey: null,
            listNonEnumerable: true
          })
        },
        ["_getMessageViewController"]() {
          const {
              assert$: _0x202ed1,
              message$: _0xe0ef3a
            } = _0x442618("492034"),
            _0x5716e8 = _0x10327a.jqlite("gv-messaging-view").data().$gvMessagingViewController;
          return _0x202ed1(1, _0x5716e8, '', {
            sentry: "rare"
          }, true), _0x5716e8;
        },
        _searchNgContexts: _0x2fa80c => _0x4d9a60(globalThis.window, _0x2fa80c.toString(), {
          listNonEnumerable: true,
          cacheKey: "gvoice->search->ngcontexts->" + _0x2fa80c
        }).filter(_0x4b727d => _0x4b727d.rawPath.endsWith("__ngContext__") && _0x4b727d.value == _0x2fa80c).map(_0x157df2 => _0x229767(_0x157df2.path.slice(0, -1).join("->"), globalThis.window)).filter(_0x5dd295 => _0x5dd295.constructor && _0x5dd295.constructor.toString().startsWith("class"))
      },
      _0x271260 = {
        ["getCurrentUser"]() {
          const {
              assert$: _0x2fb458
            } = _0x442618("qhqxyy"),
            _0x2f57eb = _0x10327a.protos(),
            _0x51687f = _0x2fb458(1, _0x2f57eb.UserInfo, '', {
              sentry: "rare"
            }, true),
            _0x8b52e2 = _0x2fb458(2, _0x2f57eb.VoiceClientAccount, '', {
              sentry: "rare"
            }, true);
          return {
            name: _0x51687f[2],
            email: _0x51687f[4],
            country: _0x51687f[3],
            number: _0x8b52e2[0]
          };
        }
      },
      _0x5863f3 = 3,
      _0xe8dc10 = {
        async ["sendMessage"]({
          message: _0x4c93db,
          threadId: _0x4f6727,
          blob: _0x50d0b6
        }) {
          var _0x2d9481;
          const {
            assert$: _0x3f0db5
          } = _0x442618("giayfa");
          _0x3f0db5(1, _0x4c93db || _0x50d0b6, '', {
            sentry: false
          }, true), _0x3f0db5(2, _0x4f6727, '', {
            sentry: false
          }, true), _0x3f0db5(3, !_0x4c93db || _0x4848bd(_0x4c93db, "string"), '', {
            sentry: false
          }, true), _0x3f0db5(4, !_0x50d0b6 || _0x4848bd(_0x50d0b6, "blob"), '', {
            sentry: false
          }, true), _0x3f0db5(5, !(_0x50d0b6 && _0x4c93db), '', {
            sentry: false
          }, true), await _0x3c915e._openThread({
            threadId: _0x4f6727
          });
          const _0x5f3b82 = null === (_0x2d9481 = _0x4d9a60(globalThis._gv, ".messagesSubmitted.emit(", {
              cacheKey: "gvoice->messaging->sendMessage",
              listNonEnumerable: true
            })[0]) || undefined === _0x2d9481 ? undefined : _0x2d9481.value,
            _0x37db6c = [];
          if (_0x50d0b6) {
            const _0x234388 = (_0x50d0b6 = await _0x5dc537(_0x50d0b6, {
              compress: true,
              width: 1080
            })) ? await function _0x3b0c6f(_0x1ea423) {
              return new globalThis.Promise((_0x364c9b, _0x1c904d) => {
                let _0x286d1b = new FileReader();
                _0x286d1b.onloadend = () => {
                  _0x364c9b(_0x286d1b.result), _0x286d1b = null;
                }, _0x286d1b.onerror = _0x1c904d, _0x286d1b.readAsDataURL(_0x1ea423);
              });
            }(_0x50d0b6) : undefined;
            _0x37db6c.push({
              mediaType: _0x5863f3,
              mimeType: _0x50d0b6.type,
              url: _0x234388
            });
          }
          _0x3f0db5(6, _0x4848bd(_0x5f3b82, "function"), '', {
            sentry: "rare"
          }, true);
          const _0x33e891 = _0x3f0db5(7, _0x3c915e._getThread({
            threadId: _0x4f6727
          }), '', {
            sentry: "rare"
          }, true);
          await _0x3c915e._assertThreadIsOpen({
            threadId: _0x4f6727
          });
          const _0x1f408a = {
              ..._0x33e891
            },
            _0x21283b = /\[,([\w$]),([\w$]),([\w$]),([\w$])\].*?const [\w$]=\1\.([\w$]+?)\.length;/.exec(_0x5f3b82.toString());
          return _0x21283b && (_0x1f408a[_0x21283b[5]] = []), await _0x5f3b82([undefined, _0x1f408a, _0x4c93db, _0x37db6c, true]);
        },
        async ["paginateMessages"]({
          threadId: _0x5b51a6
        }) {
          const {
            assert$: _0x1ecaa2
          } = _0x442618("uyvzhj");
          _0x1ecaa2(1, _0x5b51a6, '', {
            sentry: false
          }, true), _0x1ecaa2(2, _0x4848bd(_0x5b51a6, "string"), '', {
            sentry: false
          }, true), await _0x3c915e._openThread({
            threadId: _0x5b51a6
          }), await _0x3c915e._assertThreadIsOpen({
            threadId: _0x5b51a6
          });
          const _0x121263 = _0x1ecaa2(3, globalThis.document.querySelector(".messages-container"), '', {
              sentry: "rare"
            }, true),
            _0x1f4267 = () => _0x1ecaa2(4, _0x3c915e._getThread({
              threadId: _0x5b51a6
            }), '', {
              sentry: "rare"
            }, true),
            _0x5ef70c = () => {
              var _0x4f8f70;
              if (!(null === (_0x4f8f70 = _0x1f4267()) || undefined === _0x4f8f70 ? undefined : _0x4f8f70.isInitialized)) return true;
              return !!_0x3a9804(_0x1f4267(), {
                cacheKey: "thread->messages->cursor",
                propType: "string",
                predicate: _0x4facd0 => !_0x4facd0.startsWith("t") && !isNaN(parseInt(_0x4facd0))
              });
            },
            _0x4e1b55 = () => ({
              hasMore: _0x5ef70c(),
              data: _0xe8dc10._getMessages({
                threadId: _0x5b51a6
              })
            });
          return _0x5ef70c() ? (_0x121263.dispatchEvent(new CustomEvent("loadMoreDataAbove")), await _0x18d5ed(() => {
            return !(null === (_0x241a15 = _0x1f4267()) || undefined === _0x241a15 ? undefined : _0x241a15.isLoading);
            var _0x241a15;
          }, _0xd3d098(1), _0xd3d098(5)), _0x4e1b55()) : _0x4e1b55();
        },
        ["processMessages"]({
          threadId: _0x2dd961,
          clean: _0x169fc8 = true
        }) {
          const {
            assert$: _0x315f73
          } = _0x442618("lzbyjb");
          _0x315f73(1, _0x2dd961, '', {
            sentry: false
          }, true), _0x315f73(2, _0x4848bd(_0x2dd961, "string"), '', {
            sentry: false
          }, true);
          const _0xf2c728 = _0xe8dc10._getMessages({
              threadId: _0x2dd961
            }),
            _0x204384 = _0x3c915e._getThread({
              threadId: _0x2dd961
            }),
            _0x5fa7e5 = _0x271260.getCurrentUser();
          return _0xf2c728.map(_0x30886e => _0xe8dc10._processMessage({
            ir: _0xe8dc10._processMessageIr({
              message: _0x30886e,
              thread: _0x204384,
              user: _0x5fa7e5
            }),
            clean: _0x169fc8
          }));
        },
        ["_processOpenMessages"](_0x3dc2c1) {
          const _0x592b24 = _0x3c915e._getOpenThreadId();
          return _0xe8dc10.processMessages({
            threadId: _0x592b24,
            ..._0x3dc2c1
          });
        },
        _processMessageIr: ({
          message: _0x2855e4,
          thread: _0x51fb54,
          user: _0x450ffe
        }) => (_0x51fb54 || (_0x51fb54 = _0x3c915e._getThread({
          threadId: _0x2855e4.threadId
        })), _0x450ffe || (_0x450ffe = _0x271260.getCurrentUser()), {
          message: _0x2855e4,
          thread: _0x51fb54,
          user: _0x450ffe
        }),
        ["_processMessage"]({
          ir: _0x32025c,
          clean: _0x592aec = true
        }) {
          const {
              message: _0x3dadd3,
              thread: _0x14b101,
              user: _0x22f3e2
            } = _0x32025c,
            _0x3d492e = _0x3a9804(_0x3dadd3, {
              cacheKey: "message->medias",
              propType: "array"
            }),
            _0xa9b2ee = null == _0x3d492e ? undefined : _0x3d492e.some(_0x1c042e => {
              var _0x55385f;
              return null === (_0x55385f = null == _0x1c042e ? undefined : _0x1c042e.mimeType) || undefined === _0x55385f ? undefined : _0x55385f.includes("image/gif");
            }),
            _0x549b2f = (null == _0x3d492e ? undefined : _0x3d492e.some(_0x1d1439 => {
              var _0x3c6359;
              return null === (_0x3c6359 = null == _0x1d1439 ? undefined : _0x1d1439.mimeType) || undefined === _0x3c6359 ? undefined : _0x3c6359.startsWith("image");
            })) && !_0xa9b2ee,
            _0x1ecb07 = null == _0x3d492e ? undefined : _0x3d492e.some(_0x26e0cc => {
              var _0x181242;
              return null === (_0x181242 = null == _0x26e0cc ? undefined : _0x26e0cc.mimeType) || undefined === _0x181242 ? undefined : _0x181242.startsWith("video");
            }),
            _0x34f745 = null == _0x3d492e ? undefined : _0x3d492e.some(_0xcbc3b => {
              var _0x3bc45f;
              return null === (_0x3bc45f = null == _0xcbc3b ? undefined : _0xcbc3b.mimeType) || undefined === _0x3bc45f ? undefined : _0x3bc45f.startsWith("audio");
            }),
            _0x3c6864 = ["https://maps.google.com", "https://google.com/maps", "https://maps.app.goo.gl", "https://maps.apple.com"].some(_0x561e2e => _0x3dadd3.content.startsWith(_0x561e2e)),
            _0x555ef2 = _0x3dadd3.isIncoming;
          return _0x5a8493({
            id: _0x3dadd3.id,
            msg: _0x3dadd3.content,
            timestamp: _0x3dadd3.startTime && _0x3dadd3.startTime.getTime() / 1000,
            isIncoming: _0x555ef2,
            hasImage: _0x549b2f,
            hasGif: _0xa9b2ee,
            hasVideo: _0x1ecb07,
            hasAudio: _0x34f745,
            hasLocation: _0x3c6864,
            ...(_0x592aec ? {} : {
              _ir: _0x3dadd3
            })
          });
        },
        ["_getMessages"]({
          threadId: _0x2a1dbe
        }) {
          const {
            assert$: _0x2ea4e7
          } = _0x442618("tlilgu");
          _0x2ea4e7(1, _0x2a1dbe, '', {
            sentry: false
          }, true), _0x2ea4e7(2, _0x4848bd(_0x2a1dbe, "string"), '', {
            sentry: false
          }, true);
          const _0x2577f1 = _0x10327a.store.get("threadStore"),
            _0x407d7e = "threadStore->messages",
            _0x489792 = "threadStore->messages->ids",
            _0x2d6653 = "threadStore->messages->map",
            _0x12b2e5 = _0x3a9804(_0x2577f1, {
              cacheKey: "threadStore->messages",
              propType: "object",
              predicate: _0x18fec4 => {
                const _0x547ed0 = _0x3a9804(_0x18fec4, {
                    cacheKey: _0x489792,
                    propType: "array"
                  }),
                  _0x21ec12 = _0x3a9804(_0x18fec4, {
                    cacheKey: _0x2d6653,
                    propType: "object"
                  });
                return !(!_0x547ed0 || !_0x21ec12) && !_0x547ed0.every(_0x4b98be => _0x4b98be.startsWith("/")) && !_0x547ed0.every(_0x96fba => /^[\w$]\./.test(_0x96fba));
              }
            }),
            _0x2a0768 = _0x3a9804(_0x12b2e5, {
              cacheKey: _0x489792,
              propType: "array"
            }),
            _0x44b4b5 = _0x3a9804(_0x12b2e5, {
              cacheKey: _0x2d6653,
              propType: "object"
            });
          return _0x2a0768.map(_0x4c0690 => _0x44b4b5[_0x4c0690]).filter(_0x45c801 => _0x45c801.threadId === _0x2a1dbe).sort((_0x7c570c, _0x3700c1) => _0x7c570c.startTime - _0x3700c1.startTime);
        },
        ["_getLastMessageTimestamp"]({
          threadId: _0x3b8d09
        }) {
          var _0x21af72, _0xb2c6e7;
          const _0x221626 = _0xe8dc10._getMessages({
              threadId: _0x3b8d09
            }),
            _0x4502ba = _0x221626[_0x221626.length - 1];
          return null !== (_0xb2c6e7 = null === (_0x21af72 = null == _0x4502ba ? undefined : _0x4502ba.startTime) || undefined === _0x21af72 ? undefined : _0x21af72.getTime()) && undefined !== _0xb2c6e7 ? _0xb2c6e7 : 0;
        },
        ["_getOpenMessages"]() {
          const _0xdc4105 = _0x3c915e._getOpenThreadId();
          return _0xe8dc10._getMessages({
            threadId: _0xdc4105
          });
        },
        async ["_paginateOpenMessages"]() {
          const _0x3c8324 = _0x3c915e._getOpenThreadId();
          return await _0xe8dc10.paginateMessages({
            threadId: _0x3c8324
          });
        }
      },
      _0x3c915e = {
        async ["getThreads"]({
          loadAll: _0x1b5549 = false
        }) {
          const {
              assert$: _0x5b88ea,
              message$: _0x5ad458
            } = _0x442618("xfzzdj"),
            _0x543e5d = () => {
              var _0x4b68e3;
              const _0xe9aaf = _0x4d9a60(_0x10327a.store.get("threadStore"), "/messages", {
                cacheKey: null
              });
              return _0x5b88ea(1, null === (_0x4b68e3 = _0xe9aaf.find(_0x230cc2 => "key" === _0x230cc2.type)) || undefined === _0x4b68e3 ? undefined : _0x4b68e3.value, '', {
                sentry: "rare"
              }, true);
            },
            _0x520403 = () => {
              const _0x3f15df = _0x543e5d();
              return !globalThis.Object.values(_0x3f15df).some(_0x2f9d7f => null === _0x2f9d7f);
            };
          if (_0x1b5549) {
            const _0x34493c = _0x10327a._getMessageViewController().getDisplay(),
              _0x3ff819 = /if\(!this\.(\w+?)\|\|this\.(\w+?)\.(\w+?)\(\)>this\.(\w+?)\)/,
              _0x52421c = _0x3a9804(_0x34493c, {
                cacheKey: "conversation->threads->load",
                assert: _0x5ad458(1, '', {
                  sentry: "rare"
                }, true),
                propType: "function",
                predicate: _0x221dd2 => {
                  const _0x3bb710 = _0x221dd2.toString();
                  return 0 === function _0x575011(_0x475933) {
                    return _0x475933.length;
                  }(_0x221dd2) && _0x3ff819.test(_0x3bb710);
                },
                prototypesIncluded: true
              }).toString().match(/dispatch\(((\w|\$)+?)\({((\w|\$)+?):/);
            _0x5b88ea(2, _0x52421c, '', {
              sentry: "rare"
            }, true);
            const _0x51a912 = _0x52421c[3];
            for (; await _0x520403();) _0x543e5d().isLoading || (await _0x10327a.store.dispatch({
              [_0x51a912]: "/messages",
              ..._0x543e5d(),
              type: "[Get Threads API] ready"
            })), await _0x3cae2f(200), await _0x231ec8(1000);
          }
          return _0x3a9804(_0x10327a.store.get("threadStore->threads"), {
            cacheKey: "store->thread->idsArray",
            assert: _0x5ad458(1, '', {
              sentry: "rare"
            }, true),
            propType: "array"
          }).filter(_0x747912 => _0x747912.startsWith("t.")).map(_0x36fc9a => _0x3c915e._getThread({
            threadId: _0x36fc9a
          })).sort((_0x2e0930, _0x31b699) => _0x2e0930.lastMessageTimestamp - _0x31b699.lastMessageTimestamp);
        },
        async ["_openThread"]({
          threadId: _0x31e9ca
        }) {
          const {
            assert$: _0x3dcae5,
            message$: _0x10013c
          } = _0x442618("hpilbm");
          return _0x3dcae5(1, _0x4848bd(_0x31e9ca, "string"), '', {
            sentry: false
          }, true), _0x3dcae5(2, _0x31e9ca.startsWith("t."), '', {
            sentry: false
          }, true), _0x3c915e._getOpenThreadId() == _0x31e9ca || (await _0x10327a.store.dispatch({
            threadId: _0x31e9ca,
            type: "[Thread] Clicked"
          }), await _0x18d5ed(() => _0x3c915e._getOpenThreadId() == _0x31e9ca, 50, _0xd3d098(5)), await _0x18d5ed(() => !!globalThis.document.querySelector("gv-text-message-list"), 50, _0xd3d098(5)), _0x3c915e._assertThreadIsOpen({
            threadId: _0x31e9ca
          })), true;
        },
        ["_assertThreadIsOpen"]({
          threadId: _0x2177fb
        }) {
          const {
              assert$: _0x145a14
            } = _0x442618("bcgmsr"),
            _0x286e11 = _0x3c915e._getOpenThreadId();
          _0x145a14(1, _0x286e11 == _0x2177fb, '', {
            sentry: "rare",
            extra: {
              threadId: _0x2177fb,
              openThreadId: _0x286e11
            }
          }, true);
        },
        ["_getThread"]({
          threadId: _0x5ca312
        }) {
          const {
              assert$: _0x53373a,
              message$: _0x2b21a6
            } = _0x442618("exruvp"),
            _0xf2860e = _0x3a9804(_0x10327a.store.get("threadStore->threads"), {
              assert: _0x2b21a6(1, '', {
                sentry: "rare"
              }, true),
              cacheKey: "store->thread",
              propType: "object"
            });
          _0x53373a(2, _0xf2860e, '', {
            sentry: "rare"
          }, true);
          const _0x3ca284 = _0xe8dc10._getLastMessageTimestamp({
              threadId: _0x5ca312
            }),
            _0x5bff87 = _0xf2860e[_0x5ca312];
          return {
            ..._0xf2860e[_0x5ca312],
            id: _0x5ca312,
            isBlocked: null == _0x5bff87 ? undefined : _0x5bff87.isBlocked,
            isSuspectedSpam: null == _0x5bff87 ? undefined : _0x5bff87.isSuspectedSpam,
            isLoading: null == _0x5bff87 ? undefined : _0x5bff87.isLoading,
            isInitialized: !!_0x5bff87,
            lastMessageTimestamp: _0x3ca284
          };
        },
        ["_getOpenThread"]() {
          const _0x1c15c0 = _0x3c915e._getOpenThreadId();
          return _0x3c915e._getThread({
            threadId: _0x1c15c0
          });
        },
        ["_getOpenThreadId"]() {
          var _0x4ce5d7;
          const {
              assert$: _0x157080
            } = _0x442618("yitqec"),
            _0xea990 = (null !== (_0x4ce5d7 = _0x10327a.jqlite("gv-thread-details", false).data()) && undefined !== _0x4ce5d7 ? _0x4ce5d7 : {}).$gvThreadDetailsController;
          if (!_0xea990) return null;
          const _0x5981c4 = _0xea990.selectedThreadId;
          return _0x157080(2, _0x4848bd(_0x5981c4, "string"), '', {
            sentry: "rare"
          }, true), _0x5981c4;
        }
      },
      _0xf6e155 = {
        async ["hasLoaded"]() {
          try {
            const _0x4f8985 = !!_0x10327a._getMessageViewController(),
              _0x177f47 = !!_0x271260.getCurrentUser(),
              _0x3b7ff3 = !!(await _0x3c915e.getThreads({}));
            return _0x177f47 && _0x3b7ff3 && _0x4f8985;
          } catch (_0x54a4bc) {
            return false;
          }
        }
      },
      _0x5539c7 = {
        modules: {
          ["get"](_0x780314 = '') {
            var _0x4bb962;
            const {
                message$: _0x5702d6
              } = _0x442618("xcuguc"),
              _0x40562d = _0x2ff5c3.findModule({
                assert: _0x5702d6(1, '', {
                  sentry: "rare"
                }, true),
                accumulate: true,
                key: "tiktok->modules",
                exportsMeta: {
                  predicate: _0x11b65e => {
                    var _0x4d6508;
                    return null === (_0x4d6508 = _0x11b65e.prototype) || undefined === _0x4d6508 ? undefined : _0x4d6508.moduleName;
                  }
                }
              }).flatMap(_0x135458 => globalThis.Object.values(_0x135458.exports).filter(_0xe41152 => {
                var _0x3cc9bb;
                return null === (_0x3cc9bb = null == _0xe41152 ? undefined : _0xe41152.prototype) || undefined === _0x3cc9bb ? undefined : _0x3cc9bb.moduleName;
              })),
              _0x12bc52 = null === (_0x4bb962 = _0x2ff5c3.findModule({
                key: "tiktok->modules->getInstance",
                assert: _0x5702d6(2, '', {
                  sentry: "rare"
                }, true),
                assertExport: _0x5702d6(3, '', {
                  sentry: "rare"
                }, true),
                exportsMeta: {
                  predicate: _0x4faf9f => "object" == typeof _0x4faf9f && "providersCache" in _0x4faf9f && "resolvedProviders" in _0x4faf9f
                }
              }).exportsMatched) || undefined === _0x4bb962 ? undefined : _0x4bb962.value,
              _0x51416c = null == _0x12bc52 ? undefined : _0x12bc52.getInstance.bind(_0x12bc52),
              _0x47d4d6 = _0x40562d.map(_0x5ea6ac => {
                var _0x559187;
                return [null === (_0x559187 = _0x5ea6ac.prototype) || undefined === _0x559187 ? undefined : _0x559187.moduleName, _0x51416c(_0x5ea6ac)];
              });
            return _0x229767(_0x780314, globalThis.Object.fromEntries(_0x47d4d6));
          },
          ["search"](_0x45da0e) {
            return _0x4d9a60(this.get(), _0x45da0e, {
              cacheKey: null,
              listNonEnumerable: true
            });
          }
        },
        setters: {
          ["get"](_0x315291 = '') {
            const _0x3a5917 = _0x5539c7.modules.get(),
              _0x35b7de = globalThis.Object.entries(_0x3a5917).map(([_0x5dd3a5, _0x164bdd]) => [_0x5dd3a5, _0x164bdd.actions]);
            return _0x229767(_0x315291, globalThis.Object.fromEntries(_0x35b7de));
          },
          ["search"](_0x37fd7d) {
            return _0x4d9a60(this.get(), _0x37fd7d, {
              cacheKey: null,
              mode: "depth",
              depth: 5,
              listNonEnumerable: true
            });
          }
        },
        store: {
          ["atomModules"]() {
            const {
              message$: _0x267ce2
            } = _0x442618("fibigh");
            return _0x2ff5c3.findModule({
              assert: _0x267ce2(1, '', {
                sentry: "rare"
              }, true),
              accumulate: true,
              key: "tiktok->atoms",
              exportsMeta: {
                matchesType: "object",
                predicate: _0x305129 => _0x305129.debugLabel
              }
            });
          },
          atomModule: _0x22a0cf => _0x5539c7.store.atomModules().find(_0x10f5bd => _0x10f5bd.exportsMatched.value.debugLabel === _0x22a0cf),
          atoms: () => _0x5539c7.store.atomModules().map(_0x338b38 => _0x338b38.exportsMatched.value),
          ["get"](_0x367425 = '', _0x3345fb) {
            const {
                assert$: _0x22c214
              } = _0x442618("vfab"),
              _0x25231b = _0x5539c7.store.atoms(),
              _0x2d8e4d = _0x5539c7.modules.get("ItemList->jotaiStore"),
              _0x12abff = _0x229767(_0x367425, globalThis.Object.fromEntries(_0x25231b.map(_0x12ce3a => [_0x12ce3a.debugLabel, _0x2d8e4d.get(_0x12ce3a)])));
            return _0x3345fb && _0x22c214(1, _0x12abff, '', _0x3345fb.opts, true), _0x12abff;
          },
          search: _0x261e0e => _0x4d9a60(_0x5539c7.store.get(), _0x261e0e, {
            cacheKey: null,
            listNonEnumerable: true
          })
        },
        services: {
          imsdk: () => _0x5539c7.store.get("imSdkAtom->instance")
        }
      },
      _0x3f273a = {
        ["getUsers"]() {
          const {
              message$: _0xd60020
            } = _0x442618("fzkwnv"),
            _0x58ab21 = _0x5539c7.store.get("messageUserAtom->users", _0xd60020(1, '', {
              sentry: "rare"
            }, true)),
            _0xa4b465 = _0x5539c7.store.get("userAtom->users", _0xd60020(2, '', {
              sentry: "rare"
            }, true)),
            _0x2a46fe = globalThis.Object.values(_0x58ab21),
            _0x5f34ff = globalThis.Object.values(_0xa4b465);
          return globalThis.Object.fromEntries(_0x2a46fe.concat(_0x5f34ff).filter(_0x39d6f0 => !!_0x39d6f0).map(_0x51e4c3 => [_0x51e4c3.id, _0x51e4c3]));
        },
        ["getCurrentUser"]() {
          const {
              assert$: _0x452b66
            } = _0x442618("kbjgih"),
            _0x5f2ab2 = _0x452b66(1, globalThis.__$UNIVERSAL_DATA$__, '', {
              sentry: "rare"
            }, true),
            _0x5711c3 = _0x452b66(2, _0x5f2ab2.__DEFAULT_SCOPE__, '', {
              sentry: "rare"
            }, true),
            _0x4a5322 = _0x452b66(3, _0x5711c3["webapp.app-context"], '', {
              sentry: "rare"
            }, true);
          return _0x452b66(4, _0x4a5322.user, '', {
            sentry: "rare"
          }, true);
        },
        ["_getCurrentUserId"]() {
          var _0xa4e96;
          return null === (_0xa4e96 = _0x3f273a.getCurrentUser()) || undefined === _0xa4e96 ? undefined : _0xa4e96.uid;
        },
        ["_getUser"]({
          userId: _0x351a31,
          assert: _0x360c34 = true
        }) {
          const {
            assert$: _0x86bbf0,
            message$: _0x4ce486
          } = _0x442618("ffggmf");
          _0x86bbf0(1, _0x351a31, '', {
            sentry: false
          }, true), _0x86bbf0(2, _0x4848bd(_0x351a31, "string"), '', {
            sentry: false
          }, true);
          const _0x127358 = _0x5539c7.store.get("messageUserAtom->users", _0x4ce486(3, '', {
            sentry: "rare"
          }, true))[_0x351a31];
          return _0x360c34 && _0x86bbf0(3, _0x127358, '', {
            sentry: "rare",
            extra: {
              userId: _0x351a31
            }
          }, true), _0x127358;
        }
      },
      _0x32831b = 0,
      _0x59266b = 3,
      _0x318021 = {
        async ["getConversations"]({
          loadAll: _0x5480f2,
          clean: _0x3fa38f = true
        }) {
          const _0x56a351 = _0x5539c7.store.get("messageAtom->conversationList"),
            _0x11a7ae = _0x5539c7.store.get("imSdkAtom"),
            _0x1fde81 = _0x11a7ae.instance.getMessagesByUserInit.bind(_0x11a7ae.instance);
          for (; _0x5480f2 && _0x11a7ae.hasMoreFriends;) await _0x1fde81({
            cursor: _0x11a7ae.friendsCursor,
            inboxType: _0x32831b
          }), await _0x231ec8(1000);
          return _0x56a351.filter(_0x42868f => !_0x42868f.isStrangerConversation && !_0x42868f.isGroupChat).map(_0x55deb9 => _0x318021._getConversation({
            conversation: _0x55deb9,
            assert: true,
            clean: _0x3fa38f
          })).reverse();
        },
        async ["getConversationRequests"]({
          loadAll: _0x5f067d
        }) {
          const _0x2f614c = _0x5539c7.store.get("messageAtom->strangerConversationList"),
            _0x5769ba = _0x5539c7.store.get("imSdkAtom"),
            _0x4bc7cb = _0x5769ba.instance.getMessagesByUserInit.bind(_0x5769ba.instance);
          for (; _0x5f067d && _0x5769ba.hasMoreStrangers;) await _0x4bc7cb({
            cursor: _0x5769ba.strangerCursor,
            inboxType: _0x59266b
          }), await _0x231ec8(1000);
          return _0x2f614c.filter(_0x26f161 => !_0x26f161.isGroupChat).map(_0x1df947 => _0x318021._getConversation({
            conversation: _0x1df947,
            assert: true,
            clean: true
          })).reverse();
        },
        async ["createConversation"]({
          userId: _0x1d4ce5
        }) {
          var _0x16e548;
          const {
            assert$: _0xc16400
          } = _0x442618("ebezvu");
          _0xc16400(1, _0x1d4ce5, '', {
            sentry: false
          }, true), _0xc16400(2, _0x4848bd(_0x1d4ce5, "string"), '', {
            sentry: false
          }, true), _0xc16400(3, _0x1d4ce5 !== _0x3f273a._getCurrentUserId(), '', {
            sentry: false
          }, true);
          const _0x97cf2c = _0x5539c7.services.imsdk(),
            _0x278b62 = _0x97cf2c.createConversation.bind(_0x97cf2c),
            _0x48f627 = await _0x278b62({
              participants: _0x1d4ce5,
              inboxType: 0
            });
          return _0xc16400(4, (null == _0x48f627 ? undefined : _0x48f627.success) && (null === (_0x16e548 = null == _0x48f627 ? undefined : _0x48f627.body) || undefined === _0x16e548 ? undefined : _0x16e548.conversation), '', {
            sentry: "rare"
          }, true), _0x48f627.body.conversation.conversation_id;
        },
        async ["markConversationRead"]({
          conversationId: _0x5c8f82
        }) {
          const {
            assert$: _0x35bbc8
          } = _0x442618("ykzxlh");
          _0x35bbc8(1, _0x5c8f82, '', {
            sentry: false
          }, true), _0x35bbc8(2, _0x4848bd(_0x5c8f82, "string"), '', {
            sentry: false
          }, true);
          const _0x49a6cd = _0x5539c7.services.imsdk(),
            _0x50234b = _0x49a6cd.markConversationRead.bind(_0x49a6cd),
            _0x23d1db = _0x318021._getConversation({
              conversationId: _0x5c8f82,
              assert: true,
              clean: false
            });
          return await _0x50234b({
            conversation: _0x23d1db._conversation
          });
        },
        ["_getConversation"]({
          conversationId: _0x48c631,
          conversation: _0xaedcae,
          userId: _0x3af42c,
          assert: _0x56c46a,
          clean: _0x273dff = false
        }) {
          const {
            assert$: _0x149a74,
            message$: _0x1cf3db
          } = _0x442618("rtleqm");
          _0x149a74(1, _0x48c631 || _0x3af42c || _0xaedcae, '', {
            sentry: false
          }, true), _0x149a74(2, !_0x48c631 || _0x4848bd(_0x48c631, "string"), '', {
            sentry: false
          }, true), _0x149a74(3, !_0x3af42c || _0x4848bd(_0x3af42c, "string"), '', {
            sentry: false
          }, true), _0x149a74(4, !_0xaedcae || _0x4848bd(_0xaedcae, "object"), '', {
            sentry: false
          }, true);
          const _0xd76abb = _0x3f273a._getCurrentUserId(),
            _0x5844f3 = _0x5539c7.store.get("messageAtom->conversationList", _0x1cf3db(5, '', {
              sentry: "rare"
            }, true)),
            _0x5b587a = _0x5539c7.store.get("messageAtom->strangerConversationList", _0x1cf3db(6, '', {
              sentry: "rare"
            }, true));
          if (!_0xaedcae) {
            const _0x415e4c = _0x3af42c ? _0x2d2114 => _0x2d2114.firstPageParticipant.participants.find(_0x393f83 => {
              var _0x4fc91f;
              return (null === (_0x4fc91f = null == _0x393f83 ? undefined : _0x393f83.user_id) || undefined === _0x4fc91f ? undefined : _0x4fc91f.toString()) === _0x3af42c;
            }) : _0x42389c => (null == _0x42389c ? undefined : _0x42389c.id) === _0x48c631;
            _0xaedcae = _0x5844f3.find(_0x415e4c) || _0x5b587a.find(_0x415e4c);
          }
          if (_0x56c46a && _0x149a74(7, _0xaedcae, '', {
            sentry: "rare",
            extra: {
              conversationId: _0x48c631
            }
          }, true), !_0xaedcae) return null;
          const _0x38a818 = _0xaedcae.firstPageParticipant.participants.map(_0x3ab3fa => _0x3ab3fa.user_id.toString()),
            _0x1bad93 = _0x38a818.find(_0x2da10e => _0x2da10e !== _0xd76abb) || _0xd76abb,
            _0x322d29 = _0x3f273a._getUser({
              userId: _0x1bad93,
              assert: false
            }),
            _0x526b7f = {
              id: _0xaedcae.id,
              name: null == _0x322d29 ? undefined : _0x322d29.nickname,
              nickname: null == _0x322d29 ? undefined : _0x322d29.nickname,
              isBlocked: _0xaedcae.isBlocked,
              isGroupChat: _0xaedcae.isGroupChat,
              isUnread: _0xaedcae.unreadCount > 0,
              updatedAt: _0xaedcae.updatedAt.getTime() / 1000
            };
          return _0x273dff || (_0x526b7f._participant = _0x322d29, _0x526b7f._conversation = _0xaedcae), _0x526b7f;
        },
        ["_getOpenConversationId"]() {
          const _0x78d6d4 = _0x5539c7.store.get("conversationAtom->selectedConversation");
          return null == _0x78d6d4 ? undefined : _0x78d6d4.id;
        },
        async ["_getRandomConversationId"]() {
          const _0x52469c = await _0x318021.getConversations({
            loadAll: true
          });
          return _0x52469c[globalThis.Math.floor(globalThis.Math.random() * _0x52469c.length)].id;
        }
      },
      _0x4a6da8 = {
        async ["sendMessage"]({
          conversationId: _0x4f39bf,
          message: _0x6addc7
        }) {
          const {
            assert$: _0x2edc7c,
            message$: _0x390f01
          } = _0x442618("ayxfkd");
          _0x2edc7c(1, _0x4f39bf, '', {
            sentry: false
          }, true), _0x2edc7c(2, _0x4848bd(_0x4f39bf, "string"), '', {
            sentry: false
          }, true), _0x2edc7c(3, _0x6addc7, '', {
            sentry: false
          }, true), _0x2edc7c(4, _0x4848bd(_0x6addc7, "string"), '', {
            sentry: false
          }, true);
          const _0x3404a4 = _0x318021._getConversation({
              conversationId: _0x4f39bf,
              assert: true,
              clean: false
            }),
            _0x55f42b = _0x5539c7.store.get("imSdkAtom->instance", _0x390f01(5, '', {
              sentry: "uncommon"
            }, true)),
            _0x18cd44 = await _0x55f42b.createMessage.call(_0x55f42b, {
              conversation: _0x3404a4._conversation,
              content: JSON.stringify({
                aweType: 0,
                text: _0x6addc7
              }),
              type: 7
            }),
            _0x5861d4 = await _0x55f42b.sendMessage.call(_0x55f42b, {
              message: _0x18cd44
            });
          return _0x2edc7c(6, _0x5861d4, '', {
            sentry: "rare"
          }, true), _0x2edc7c(7, _0x5861d4.success, '', {
            sentry: "rare"
          }, true), _0x5861d4;
        },
        async ["paginateMessages"]({
          conversationId: _0x6db88c
        }) {
          const {
            assert$: _0xee1e09,
            message$: _0x3fac31
          } = _0x442618("ifgfup");
          _0xee1e09(1, _0x6db88c, '', {
            sentry: false
          }, true), _0xee1e09(2, _0x4848bd(_0x6db88c, "string"), '', {
            sentry: false
          }, true);
          const _0x4ea7f9 = _0x5539c7.store.get("imSdkAtom->instance", _0x3fac31(3, '', {
              sentry: "rare"
            }, true)),
            _0x48b80f = _0x4ea7f9.getMessagesByConversation.bind(_0x4ea7f9),
            _0x43a2c0 = _0x318021._getConversation({
              conversationId: _0x6db88c,
              assert: true,
              clean: false
            }),
            {
              hasMore: _0x29a2e0
            } = await _0x48b80f({
              conversation: _0x43a2c0._conversation
            });
          return {
            hasMore: _0x29a2e0,
            messages: _0x4a6da8.processMessages({
              conversationId: _0x6db88c
            })
          };
        },
        async ["acceptConversationRequest"]({
          conversationId: _0x1670a3
        }) {
          var _0x5c562e;
          const {
            assert$: _0x128d6d,
            message$: _0x29778a
          } = _0x442618("592b35");
          _0x128d6d(1, _0x1670a3, '', {
            sentry: false
          }, true), _0x128d6d(2, _0x4848bd(_0x1670a3, "string"), '', {
            sentry: false
          }, true);
          const _0x105c2d = _0x5539c7.store.atomModule("messagePageAtom"),
            _0x595b5f = await _0x2ff5c3.refactorExports(_0x105c2d.moduleKey, _0x4c8b12 => {
              var _0x20ce4e;
              const _0x5e55fb = null === (_0x20ce4e = _0x4c8b12.match(/getStaticApi:([\w$]+?)}/)) || undefined === _0x20ce4e ? undefined : _0x20ce4e[1];
              return _0x128d6d(1, _0x5e55fb, '', {
                sentry: "rare"
              }, true), {
                getStaticApi: _0x5e55fb
              };
            }),
            _0x33f209 = _0x318021._getConversation({
              conversationId: _0x1670a3,
              assert: true,
              clean: false
            });
          _0x128d6d(3, null === (_0x5c562e = _0x33f209._participant) || undefined === _0x5c562e ? undefined : _0x5c562e.id, '', {
            sentry: "rare"
          }, true);
          const _0x3031fe = _0x595b5f.getStaticApi(),
            _0x11574e = _0x3031fe.acceptStranger.bind(_0x3031fe);
          return await _0x11574e({
            id: _0x1670a3,
            uid: _0x33f209._participant.id
          });
        },
        ["processMessages"]({
          conversationId: _0x55bd81,
          clean: _0x336226 = true
        }) {
          const {
            assert$: _0x125904
          } = _0x442618("gfanvq");
          _0x125904(1, _0x55bd81, '', {
            sentry: false
          }, true), _0x125904(2, _0x4848bd(_0x55bd81, "string"), '', {
            sentry: false
          }, true);
          const _0x207434 = _0x4a6da8._getMessages({
              conversationId: _0x55bd81
            }),
            _0x55c4b7 = _0x318021._getConversation({
              conversationId: _0x55bd81,
              assert: true,
              clean: true
            }),
            _0x1cd9fa = _0x3f273a._getCurrentUserId();
          return _0x207434.map(_0x5ce668 => _0x4a6da8._processMessage({
            ir: _0x4a6da8._processMessageIr({
              message: _0x5ce668,
              conversation: _0x55c4b7,
              user: _0x1cd9fa
            }),
            clean: _0x336226
          }));
        },
        _processOpenMessages: ({
          clean: _0x41ef6 = true
        }) => _0x4a6da8.processMessages({
          conversationId: _0x318021._getOpenConversationId(),
          clean: _0x41ef6
        }),
        ["_processMessage"]({
          ir: _0xf8f0e7,
          clean: _0x5f9930 = true
        }) {
          var _0x3c07f3;
          const {
            message: _0x1464d0
          } = _0xf8f0e7;
          globalThis.console.log("message", _0x1464d0, "content", _0x1464d0.content);
          const _0x274fc3 = _0x1464d0.content && _0x1464d0.content.startsWith("{") ? JSON.parse(_0x1464d0.content) : {},
            _0x18788b = null == _0x274fc3 ? undefined : _0x274fc3.text,
            _0x52d9f7 = !_0x18788b && "placeholder" == _0x1464d0.content,
            _0x38b8c3 = _0x1464d0.serverId,
            _0x4cc707 = _0x1464d0.createdAt.getTime() / 1000,
            _0x2b3d73 = !_0x1464d0.isFromMe,
            _0x579ed6 = !!(null === (_0x3c07f3 = null == _0x1464d0 ? undefined : _0x1464d0.referenceInfo) || undefined === _0x3c07f3 ? undefined : _0x3c07f3.referenced_message_id),
            _0x4f5948 = "sticker" === _0x1464d0.scene,
            _0xdb89e2 = "video_sticker" === _0x1464d0.scene,
            _0x58cb9e = "share_video" === _0x1464d0.scene,
            _0x1fca16 = "gif" === (null == _0x274fc3 ? undefined : _0x274fc3.image_type),
            _0x34a7fd = "stranger_unlimit" === _0x1464d0.scene,
            _0x19521a = !(!(null == _0x274fc3 ? undefined : _0x274fc3.room_id) || !(null == _0x274fc3 ? undefined : _0x274fc3.room_owner_id));
          return _0x5a8493(function _0x29b6c6(_0x556dfc) {
            _0x556dfc.ogMsg = _0x556dfc.msg;
            let _0x53b716 = _0x556dfc.msg || '';
            return _0x556dfc.isGif ? _0x53b716 = "[GIF]" : _0x556dfc.isSticker || _0x556dfc.isVideoSticker ? _0x53b716 = "[sticker]" : _0x556dfc.isLive ? _0x53b716 = "[live-stream] " + _0x53b716 : _0x556dfc.isProfile ? _0x53b716 = "[profile-shared]" : _0x556dfc.isSharedVideo ? _0x53b716 = "[video-shared] " + _0x53b716 : _0x556dfc.isUnsupported && (_0x53b716 = "[unsupported-message]"), !globalThis.Object && (JICYq() &= aTIzSC), _0x53b716 = _0x53b716.trim(), _0x556dfc.isReply && (_0x53b716 = "[replied] " + _0x53b716), _0x53b716 = _0x53b716.trim(), _0x556dfc.msg = _0x53b716, _0x556dfc;
          }({
            id: _0x38b8c3,
            msg: _0x18788b,
            timestamp: _0x4cc707,
            isIncoming: _0x2b3d73,
            isReply: _0x579ed6,
            isGif: _0x1fca16,
            isVideoSticker: _0xdb89e2,
            isSharedVideo: _0x58cb9e,
            isConversationAccept: _0x34a7fd,
            isSticker: _0x4f5948,
            isProfile: !!(function _0x17be6b(..._0x1c4379) {
              return _0x1c4379.every(_0x173765 => _0x173765 === _0x1c4379[0]);
            }(null == _0x274fc3 ? undefined : _0x274fc3.name, null == _0x274fc3 ? undefined : _0x274fc3.desc, null == _0x274fc3 ? undefined : _0x274fc3.push_detail) && (null == _0x274fc3 ? undefined : _0x274fc3.name) && (null == _0x274fc3 ? undefined : _0x274fc3.desc) && (null == _0x274fc3 ? undefined : _0x274fc3.push_detail) && (null == _0x274fc3 ? undefined : _0x274fc3.avatar) && (null == _0x274fc3 ? undefined : _0x274fc3.cover_url)),
            isLive: _0x19521a,
            isUnsupported: _0x52d9f7,
            ...(_0x5f9930 ? {} : {
              _ir: _0xf8f0e7
            })
          }));
        },
        ["_processMessageIr"]({
          message: _0x567c34,
          conversation: _0x59d7f7,
          user: _0x52c1ff
        }) {
          const {
            assert$: _0x39e0d1
          } = _0x442618("vmzgph");
          return _0x39e0d1(1, _0x567c34, '', {
            sentry: false
          }, true), {
            message: _0x567c34,
            conversation: _0x59d7f7,
            user: _0x52c1ff
          };
        },
        _getMessages: ({
          conversationId: _0x16667c
        }) => _0x318021._getConversation({
          conversationId: _0x16667c,
          assert: true,
          clean: false
        })._conversation.getMessageList(),
        _getOpenMessages: () => _0x4a6da8._getMessages({
          conversationId: _0x318021._getOpenConversationId()
        })
      },
      _0x165082 = {
        async ["hasLoaded"]() {
          try {
            if (!_0x3f273a.getCurrentUser()) return false;
            if (!(1 == _0x5539c7.store.get("messageAtom->initialized"))) return false;
            return !!(await _0x318021.getConversations({
              loadAll: false
            }));
          } catch (_0x589087) {
            return false;
          }
        }
      },
      _0x3f8f7b = ({
        consentStatus: _0x29c53b
      }) => {
        const {
          assert$: _0x1bb719,
          message$: _0x1b2264
        } = _0x442618("31dec8");
        return _0x1bb719(1, _0x29c53b, '', {
          sentry: false
        }, true), _0x1bb719(2, _0x4848bd(_0x29c53b, "string"), '', {
          sentry: false
        }, true), _0x1bb719(3, ["PENDING", "UNSPECIFIED", "ACCEPTED", "DELETED"].includes(_0x29c53b), '', {
          sentry: false
        }, true), _0x2ff5c3.findModule({
          key: "discord->message->request->" + _0x29c53b,
          assert: _0x1b2264(4, '', {
            sentry: "rare"
          }, true),
          assertExport: _0x1b2264(5, '', {
            sentry: "rare"
          }, true),
          exportsMeta: {
            includes: ["CHANNEL_RECIPIENT_ME", "DELETED" === _0x29c53b ? /([\w$]+?)\.([\w$]+?)\.del\(/ : new RegExp("([\\w$]+?)\\.([\\w$]+?)\\." + _0x29c53b)]
          }
        }).exportsMatched.value;
      },
      _0x139bfd = () => {
        const {
          message$: _0x2c2fd5
        } = _0x442618("ihcsesd");
        return _0x2ff5c3.findModule({
          key: "discord->message->controller",
          assert: _0x2c2fd5(1, '', {
            sentry: "rare"
          }, true),
          assertExport: _0x2c2fd5(2, '', {
            sentry: "rare"
          }, true),
          exportsMeta: {
            predicate: _0x44ba85 => _0x44ba85.sendBotMessage && _0x44ba85.sendMessage
          }
        }).exportsMatched.value;
      },
      _0x1002be = () => {
        const {
          message$: _0x422ede
        } = _0x442618("sqedbm");
        return _0x2ff5c3.findModule({
          key: "discord->attachment",
          assert: _0x422ede(1, '', {
            sentry: "rare"
          }, true),
          assertExport: _0x422ede(2, '', {
            sentry: "rare"
          }, true),
          exportsMeta: {
            predicate: _0x3ca0bc => {
              var _0x29a939;
              return null === (_0x29a939 = _0x3ca0bc.prototype) || undefined === _0x29a939 ? undefined : _0x29a939.uploadFileToCloud;
            }
          }
        }).exportsMatched.value;
      },
      _0x3e8a24 = () => {
        const {
          assert$: _0x3a85cf,
          message$: _0x3b1961
        } = _0x442618("f4ff49");
        return _0x2ff5c3.findModule({
          key: "discord->presence",
          assert: _0x3b1961(1, '', {
            sentry: "rare"
          }, true),
          assertExport: _0x3b1961(2, '', {
            sentry: "rare"
          }, true),
          exportsMeta: {
            predicate: _0x59fe27 => _0x59fe27.startTyping && _0x59fe27.stopTyping
          }
        }).exportsMatched.value;
      },
      _0x36c84e = () => {
        const {
          assert$: _0x3cf755,
          message$: _0x3d61e8
        } = _0x442618("cf978f");
        return _0x2ff5c3.findModule({
          key: "discord->relationship",
          assert: _0x3d61e8(1, '', {
            sentry: "rare"
          }, true),
          assertExport: _0x3d61e8(2, '', {
            sentry: "rare"
          }, true),
          exportsMeta: {
            predicate: _0x23d8c5 => _0x23d8c5.acceptFriendRequest && _0x23d8c5.cancelFriendRequest && _0x23d8c5.updateRelationship
          }
        }).exportsMatched.value;
      },
      _0x27d9d3 = {
        store: {
          ["get"](_0x3c23a9) {
            const {
                assert$: _0x10b67d,
                message$: _0x24c190
              } = _0x442618("2d762c"),
              _0x30b97a = _0x2ff5c3.findModule({
                key: "discord->store->entry",
                accumulate: true,
                assert: _0x24c190(1, '', {
                  sentry: "rare"
                }, true),
                assertExport: _0x24c190(2, '', {
                  sentry: "rare"
                }, true),
                exportsMeta: {
                  predicate: _0x3046e6 => _0x3046e6.getAll && _0x3046e6.initialize && _0x3046e6.prototype.syncWith
                }
              })[0].exportsMatched.value.getAll(),
              _0x319eee = globalThis.Object.fromEntries(_0x30b97a.map(_0x4b0bcf => [_0x4b0bcf.getName(), _0x4b0bcf]));
            return _0x229767(_0x3c23a9, _0x319eee);
          },
          ["call"](_0xc196ab, ..._0x5eaeb0) {
            const {
                assert$: _0x505303,
                message$: _0x3328df
              } = _0x442618("f74b34"),
              _0x1063e9 = _0xc196ab.split("->"),
              _0x552b9a = _0x1063e9.slice(0, -1).join("->"),
              _0x5ada21 = _0x1063e9.pop(),
              _0x414d6e = _0x27d9d3.store.get(_0x552b9a);
            _0x505303(1, _0x414d6e, '', {
              sentry: "rare",
              extra: {
                path: _0xc196ab
              }
            }, true);
            const _0x40c711 = _0x414d6e[_0x5ada21];
            return _0x505303(2, _0x40c711, '', {
              sentry: "rare",
              extra: {
                path: _0xc196ab
              }
            }, true), _0x40c711.call(_0x414d6e, ..._0x5eaeb0);
          },
          search: _0x110f21 => _0x4d9a60(_0x27d9d3.store.get(), _0x110f21, {
            cacheKey: null,
            listNonEnumerable: true,
            mode: "depth",
            depth: 3
          })
        }
      },
      _0x2ff8ea = {
        ["getChannels"]({
          clean: _0x2dc11c = true
        } = {}) {
          const {
              assert$: _0x492787,
              message$: _0x5a9fac
            } = _0x442618("95c3f6"),
            _0x184642 = _0x27d9d3.store.call("PrivateChannelSortStore->getSortedChannels");
          _0x492787(1, _0x184642, '', {
            sentry: false
          }, true);
          const [_0x4f40c8, _0x263a38] = _0x184642;
          return _0x492787(2, _0x4848bd(_0x4f40c8, "array"), '', {
            sentry: false
          }, true), _0x492787(3, _0x4848bd(_0x263a38, "array"), '', {
            sentry: false
          }, true), _0x263a38.map(_0x33a52a => _0x2ff8ea._getChannel({
            channelId: _0x33a52a.channelId,
            clean: _0x2dc11c
          })).filter(_0x3e9930 => _0x3e9930.isDM && !_0x3e9930.isBot).reverse();
        },
        ["_getChannel"]({
          channelId: _0xb19bea,
          userId: _0xd302e1,
          channel: _0x19ee30,
          assert: _0xf3d3b1 = true,
          clean: _0x4893b3 = true
        }) {
          var _0x43b303, _0x4ba494, _0x59e2fc;
          const {
            assert$: _0x427923
          } = _0x442618("alcbxj");
          _0x427923(1, _0xb19bea || _0x19ee30 || _0xd302e1, '', {
            sentry: false
          }, true), _0x427923(2, !_0xb19bea || _0x4848bd(_0xb19bea, "string"), '', {
            sentry: false
          }, true), _0x427923(3, !_0xd302e1 || _0x4848bd(_0xd302e1, "string"), '', {
            sentry: false
          }, true), _0x427923(4, !_0x19ee30 || _0x4848bd(_0x19ee30, "object"), '', {
            sentry: false
          }, true), _0x19ee30 || (_0x19ee30 = _0xb19bea ? _0x27d9d3.store.call("ChannelStore->getChannel", _0xb19bea) : _0x27d9d3.store.call("ChannelStore->getDMChannelFromUserId", _0xd302e1)), _0x427923(4, !_0xf3d3b1 || _0x19ee30, '', {
            sentry: false
          }, true);
          const _0x59bbe1 = _0x27d9d3.store.call("MessageStore->getMessages", _0xb19bea),
            _0x4f60f0 = _0x27d9d3.store.call("ReadStateStore->hasUnread", _0xb19bea),
            _0xe13d3a = !!_0x19ee30.guild_id,
            _0x1fcf69 = _0x19ee30.rawRecipients,
            _0x3a5f49 = null == _0x1fcf69 ? undefined : _0x1fcf69[0],
            _0x1f67dc = {
              id: _0x19ee30.id,
              userId: null == _0x3a5f49 ? undefined : _0x3a5f49.id,
              username: null == _0x3a5f49 ? undefined : _0x3a5f49.username,
              name: (null == _0x3a5f49 ? undefined : _0x3a5f49.display_name) || (null == _0x3a5f49 ? undefined : _0x3a5f49.global_name),
              lastMessageId: null !== (_0x4ba494 = null === (_0x43b303 = _0x59bbe1.last()) || undefined === _0x43b303 ? undefined : _0x43b303.id) && undefined !== _0x4ba494 ? _0x4ba494 : _0x19ee30.lastMessageId,
              isSpam: _0x19ee30.isSpam,
              isMessageRequest: _0x19ee30.isMessageRequest,
              isDM: _0x19ee30.isDM(),
              isDMGroup: _0x19ee30.isGroupDM(),
              isUnread: _0x4f60f0,
              isGuildChannel: _0xe13d3a,
              isBot: !!(null == _0x3a5f49 ? undefined : _0x3a5f49.bot)
            };
          return _0x4893b3 || globalThis.Object.assign(_0x1f67dc, {
            _channel: _0x19ee30,
            _user: null === (_0x59e2fc = _0x19ee30.rawRecipients) || undefined === _0x59e2fc ? undefined : _0x59e2fc[0]
          }), _0x1f67dc;
        },
        ["markChannelAsRead"]({
          channelId: _0x43f49f
        }) {
          const {
            assert$: _0x16166f,
            message$: _0x397ef1
          } = _0x442618("gqmirn");
          return _0x16166f(1, _0x43f49f, '', {
            sentry: false
          }, true), _0x16166f(2, _0x4848bd(_0x43f49f, "string"), '', {
            sentry: false
          }, true), _0x2ff5c3.findModule({
            key: "discord->channel-ack",
            assert: _0x397ef1(3, '', {
              sentry: "rare"
            }, true),
            assertExport: _0x397ef1(4, '', {
              sentry: "rare"
            }, true),
            exportsMeta: {
              includes: ["\"CHANNEL_ACK\"", "dispatch"]
            }
          }).exportsMatched.value(_0x43f49f, true, true), _0x16166f(3, !_0x27d9d3.store.call("ReadStateStore->hasUnread", _0x43f49f), '', {
            sentry: "rare"
          }, true), true;
        },
        ["_markChannelAsReady"]({
          channelId: _0xcbbfd3
        }) {
          const {
            assert$: _0x49c387,
            message$: _0xf418ac
          } = _0x442618("54d54c");
          _0x49c387(1, _0xcbbfd3, '', {
            sentry: false
          }, true), _0x49c387(2, _0x4848bd(_0xcbbfd3, "string"), '', {
            sentry: false
          }, true);
          const _0x392d16 = () => _0x27d9d3.store.call("MessageStore->getMessages", _0xcbbfd3);
          _0x392d16().ready = true, _0x49c387(3, _0x392d16().ready, '', {
            sentry: "rare"
          }, true);
        },
        _getGuilds: () => _0x27d9d3.store.call("GuildStore->getGuilds"),
        ["_getOpenChannel"]() {
          const _0x9a6b14 = this._getOpenChannelId();
          return _0x2ff8ea._getChannel({
            channelId: _0x9a6b14
          });
        },
        ["_getOpenChannelId"]() {
          const _0x5c7a48 = globalThis.window.location.pathname.match(/\/channels\/(@me|\w+)\/(\w+)/);
          return null == _0x5c7a48 ? undefined : _0x5c7a48[2];
        }
      },
      _0x1cc3f0 = {
        getCurrentUser: () => _0x27d9d3.store.call("UserStore->getCurrentUser"),
        getUsers: () => _0x27d9d3.store.call("UserStore->getUsers"),
        ["_getUser"]({
          userId: _0x3a3db7
        }) {
          const {
            assert$: _0x5e98b5,
            message$: _0x47d9fb
          } = _0x442618("709781");
          return _0x5e98b5(1, _0x3a3db7, '', {
            sentry: false
          }, true), _0x5e98b5(2, _0x4848bd(_0x3a3db7, "string"), '', {
            sentry: false
          }, true), _0x27d9d3.store.call("UserStore->getUser", _0x3a3db7);
        }
      },
      _0x352376 = {
        NONE: 0,
        FRIEND: 1,
        BLOCKED: 2,
        PENDING_INCOMING: 3,
        PENDING_OUTGOING: 4,
        IMPLICIT: 5,
        SUGGESTION: 6
      },
      _0x17766c = (globalThis.Object.keys(_0x352376), {
        getFriends: () => _0x17766c._getRelationshipUsers({
          type: "FRIEND"
        }),
        ["getFriendRequests"](_0x17df54) {
          let {
            includeSpam: _0x179f53
          } = null != _0x17df54 ? _0x17df54 : {};
          _0x179f53 = null != _0x179f53 && _0x179f53;
          const _0x291ccc = _0x27d9d3.store.get("RelationshipStore");
          return _0x17766c._getRelationshipUsers({
            type: "PENDING_INCOMING",
            filter: _0x179f53 ? undefined : (_0x22984b, _0x71a8ba) => {
              var _0x5748a2, _0x588005;
              const _0x226cbc = null === (_0x5748a2 = _0x291ccc.isSpam) || undefined === _0x5748a2 ? undefined : _0x5748a2.call(_0x291ccc, _0x22984b),
                _0x1faac5 = null === (_0x588005 = _0x291ccc.isIgnored) || undefined === _0x588005 ? undefined : _0x588005.call(_0x291ccc, _0x22984b);
              return !_0x226cbc && !_0x1faac5;
            }
          });
        },
        ["_getRelationshipUsers"](_0x117fd7) {
          var _0x3144bf;
          let {
            type: _0x42aab6,
            filter: _0x58628d
          } = null != _0x117fd7 ? _0x117fd7 : {};
          const {
            assert$: _0x221557,
            message$: _0x267a0e
          } = _0x442618("dgrsh");
          _0x221557(2, _0x4848bd(_0x42aab6, "string"), '', {
            sentry: false
          }, true), _0x221557(3, _0x2f4cb3(_0x42aab6, _0x352376), '', {
            sentry: false
          }, true), _0x221557(4, !_0x58628d || _0x4848bd(_0x58628d, "function"), '', {
            sentry: false
          }, true);
          const _0x1c7684 = _0x27d9d3.store.get("RelationshipStore"),
            _0x29e7fd = null !== (_0x3144bf = null == _0x1c7684 ? undefined : _0x1c7684.getRelationships) && undefined !== _0x3144bf ? _0x3144bf : null == _0x1c7684 ? undefined : _0x1c7684.getMutableRelationships;
          _0x221557(5, _0x29e7fd, '', {
            sentry: false
          }, true);
          const _0x13c4ad = _0x29e7fd();
          _0x221557(6, _0x13c4ad, '', {
            sentry: false
          }, true);
          const _0x126dab = _0x352376[_0x42aab6],
            _0x1e68c6 = [];
          for (const [_0x51ea26, _0x41b7d8] of _0x13c4ad.entries()) if (_0x41b7d8 === _0x126dab) {
            if (_0x58628d && !_0x58628d(_0x51ea26, _0x41b7d8)) continue;
            const _0x18fb41 = _0x1cc3f0._getUser({
              userId: _0x51ea26
            });
            _0x18fb41 ? _0x1e68c6.push(_0x18fb41) : globalThis.console.warn(_0x267a0e(5, '', {
              sentry: "rare",
              extra: {
                relationshipId: _0x51ea26
              }
            }, true));
          }
          return _0x1e68c6;
        },
        async ["acceptFriendRequest"]({
          userId: _0x4f8180
        }) {
          const {
            assert$: _0x1b5fb0
          } = _0x442618("94bec4");
          _0x1b5fb0(1, null != _0x4f8180, '', {
            sentry: false
          }, true), _0x1b5fb0(2, _0x4848bd(_0x4f8180, "string"), '', {
            sentry: false
          }, true);
          const _0x25ed20 = _0x36c84e();
          return await _0x25ed20.acceptFriendRequest({
            userId: _0x4f8180,
            confirmStrangerRequest: true,
            context: {
              location: "Friends"
            }
          });
        },
        async ["declineFriendRequest"]({
          userId: _0xa8d59f
        }) {
          const {
            assert$: _0x51ff32
          } = _0x442618("717c77");
          _0x51ff32(1, null != _0xa8d59f, '', {
            sentry: false
          }, true), _0x51ff32(2, _0x4848bd(_0xa8d59f, "string"), '', {
            sentry: false
          }, true);
          const _0x3da26b = _0x36c84e();
          await _0x3da26b.cancelFriendRequest(_0xa8d59f, {
            location: "Friends"
          });
        },
        async ["_removeFriend"]({
          userId: _0x130b32
        }) {
          const {
            assert$: _0x4cb03d
          } = _0x442618("717c77");
          _0x4cb03d(1, null != _0x130b32, '', {
            sentry: false
          }, true), _0x4cb03d(2, _0x4848bd(_0x130b32, "string"), '', {
            sentry: false
          }, true);
          const _0x1e464b = _0x36c84e();
          await _0x1e464b.removeFriend(_0x130b32, {
            location: "Friends"
          });
        }
      }),
      _0x356baa = {
        async ["sendMessage"]({
          channelId: _0x523f28,
          message: _0x30c0c0,
          blob: _0x5714b4,
          blobExtension: _0x24c063,
          asSpoiler: _0xca97bf = false
        }) {
          const {
            assert$: _0x376dc7
          } = _0x442618("tpfcih");
          _0x376dc7(1, _0x523f28, '', {
            sentry: false
          }, true), _0x376dc7(2, _0x4848bd(_0x523f28, "string"), '', {
            sentry: false
          }, true), _0x376dc7(3, _0x30c0c0 || _0x5714b4, '', {
            sentry: false
          }, true), _0x376dc7(4, !_0x30c0c0 || _0x4848bd(_0x30c0c0, "string"), '', {
            sentry: false
          }, true), _0x376dc7(5, !_0x5714b4 || _0x4848bd(_0x5714b4, "blob"), '', {
            sentry: false
          }, true), _0x376dc7(6, !_0x5714b4 || _0x4848bd(_0x24c063, "string"), '', {
            sentry: false
          }, true), _0x2ff8ea._markChannelAsReady({
            channelId: _0x523f28
          });
          const _0x56e9f9 = {
              content: _0x30c0c0,
              tts: false,
              invalidEmojis: [],
              validNonShortcutEmojis: []
            },
            _0x4d9a58 = _0x139bfd();
          if (_0x5714b4) {
            const _0x3450fb = _0x1002be();
            _0x5714b4.type.startsWith("image/") && (_0x5714b4 = await _0x5dc537(_0x5714b4, {
              compress: true,
              width: 1080
            }));
            const _0x45ecaa = new _0x3450fb({
              file: new File([_0x5714b4], _0x491d77(16) + "." + _0x24c063, {
                type: _0x5714b4.type
              }),
              isThumbnail: false,
              platform: 1
            }, _0x523f28);
            return _0x45ecaa.spoiler = _0xca97bf, await _0x4d9a58._sendMessage(_0x523f28, _0x56e9f9, {
              attachmentsToUpload: [_0x45ecaa],
              location: "chat_input",
              nonce: _0x491d77(16),
              onAttachmentUploadError: () => {}
            });
          }
          const _0x2edb2c = await _0x4d9a58.sendMessage(_0x523f28, _0x56e9f9, undefined, {});
          return _0x376dc7(3, _0x2edb2c, '', {
            sentry: "rare"
          }, true), _0x376dc7(4, _0x2edb2c.ok, '', {
            sentry: "rare"
          }, true), _0x2edb2c.body;
        },
        async ["paginateMessages"]({
          channelId: _0x3f74f6,
          ignoreLimit: _0x195b12 = false
        }) {
          var _0x3db218;
          const {
            assert$: _0x382581,
            message$: _0x146f54
          } = _0x442618("b4dff1");
          _0x382581(1, _0x3f74f6, '', {
            sentry: false
          }, true), _0x382581(2, _0x4848bd(_0x3f74f6, "string"), '', {
            sentry: false
          }, true), _0x2ff8ea._markChannelAsReady({
            channelId: _0x3f74f6
          });
          const _0x260996 = _0x139bfd(),
            _0x62eff1 = _0x27d9d3.store.call("MessageStore->getMessages", _0x3f74f6),
            _0x39dfbc = _0x356baa._getMessages({
              channelId: _0x3f74f6
            });
          _0x382581(3, _0x62eff1, '', {
            sentry: "rare"
          }, true), _0x382581(4, _0x195b12 || _0x39dfbc.length < 200, '', {
            sentry: "rare"
          }, true);
          const _0x59a932 = () => ({
            hasMore: !!_0x62eff1.hasMoreBefore,
            data: _0x356baa.processMessages({
              channelId: _0x3f74f6
            })
          });
          if (!_0x62eff1.hasMoreBefore) return _0x59a932();
          const _0x4e7923 = null === (_0x3db218 = _0x62eff1.first()) || undefined === _0x3db218 ? undefined : _0x3db218.id;
          return await _0x260996.fetchMessages({
            channelId: _0x3f74f6,
            before: _0x4e7923,
            limit: 50,
            truncate: true
          }), _0x59a932();
        },
        ["getMessageRequests"]({
          spam: _0xe43aaf = false,
          clean: _0x22fa05 = true
        } = {}) {
          const {
              assert$: _0x26a218
            } = _0x442618("ladyqo"),
            _0x13ce4c = _0xe43aaf ? "SpamMessageRequestStore->getSpamChannelIds" : "MessageRequestStore->getMessageRequestChannelIds",
            _0x5aedf4 = _0x26a218(1, _0x27d9d3.store.call(_0x13ce4c), '', {
              sentry: "rare"
            }, true);
          return globalThis.Array.from(_0x5aedf4).map(_0x234a7e => _0x2ff8ea._getChannel({
            channelId: _0x234a7e,
            clean: _0x22fa05
          }));
        },
        async ["acceptMessageRequest"]({
          channelId: _0x890798
        }) {
          const {
            assert$: _0x253d5d,
            message$: _0x2c89b4
          } = _0x442618("e4c213");
          _0x253d5d(1, _0x890798, '', {
            sentry: false
          }, true), _0x253d5d(2, _0x4848bd(_0x890798, "string"), '', {
            sentry: false
          }, true);
          const _0x1e8d84 = _0x3f8f7b({
            consentStatus: "ACCEPTED"
          });
          await _0x1e8d84(_0x890798);
        },
        async ["declineMessageRequest"]({
          channelId: _0x51612b
        }) {
          const {
            assert$: _0xc1d843,
            message$: _0x93165e
          } = _0x442618("5d07d9");
          _0xc1d843(1, _0x51612b, '', {
            sentry: false
          }, true), _0xc1d843(2, _0x4848bd(_0x51612b, "string"), '', {
            sentry: false
          }, true);
          const _0x4f3552 = _0x3f8f7b({
              consentStatus: "DELETED"
            }),
            _0x4c77a0 = await _0x4f3552(_0x51612b);
          return _0xc1d843(3, _0x4c77a0, '', {
            sentry: "rare"
          }, true), _0xc1d843(4, _0x4c77a0.ok, '', {
            sentry: "rare"
          }, true), _0x4c77a0.body;
        },
        ["processMessages"]({
          channelId: _0x50bbdf
        }) {
          const {
            assert$: _0x337f62,
            message$: _0x455beb
          } = _0x442618("f00b3e");
          _0x337f62(1, _0x50bbdf, '', {
            sentry: false
          }, true), _0x337f62(2, _0x4848bd(_0x50bbdf, "string"), '', {
            sentry: false
          }, true);
          const _0x4e0d95 = _0x356baa._getMessages({
              channelId: _0x50bbdf
            }),
            _0x2195f6 = _0x2ff8ea._getChannel({
              channelId: _0x50bbdf
            }),
            _0x2cd126 = _0x1cc3f0.getCurrentUser();
          return _0x4e0d95.map(_0x294733 => _0x356baa._processMessage({
            ir: _0x356baa._processMessageIr({
              message: _0x294733,
              user: _0x2cd126,
              channel: _0x2195f6
            })
          })).sort((_0x24b768, _0x1bcc85) => _0x24b768.timestamp - _0x1bcc85.timestamp);
        },
        ["_processMessage"]({
          ir: _0x304081
        }) {
          var _0x119602, _0x5e116d, _0xc6e62b, _0x4fbb6c, _0x35ceca, _0x2c8053, _0x2dd97a, _0x3966a6, _0x5a66a4, _0x3542c, _0x1f579c;
          const {
              message: _0x1af590,
              user: _0x5958f3
            } = _0x304081,
            _0x5c3faf = _0x5958f3.id != (null === (_0x119602 = _0x1af590.author) || undefined === _0x119602 ? undefined : _0x119602.id),
            _0x49640e = !!(null === (_0x5e116d = _0x1af590.attachments) || undefined === _0x5e116d ? undefined : _0x5e116d.some(_0x2801d8 => {
              var _0x4de344;
              return null === (_0x4de344 = null == _0x2801d8 ? undefined : _0x2801d8.content_type) || undefined === _0x4de344 ? undefined : _0x4de344.startsWith("image/");
            })),
            _0x236526 = !!(null === (_0xc6e62b = _0x1af590.attachments) || undefined === _0xc6e62b ? undefined : _0xc6e62b.some(_0x3b5dc5 => {
              var _0x3ac00f;
              return null === (_0x3ac00f = null == _0x3b5dc5 ? undefined : _0x3b5dc5.content_type) || undefined === _0x3ac00f ? undefined : _0x3ac00f.startsWith("video/");
            })),
            _0x3c9b75 = !!(null === (_0x4fbb6c = _0x1af590.attachments) || undefined === _0x4fbb6c ? undefined : _0x4fbb6c.some(_0x5f16ea => {
              var _0x3bccbe;
              return null === (_0x3bccbe = null == _0x5f16ea ? undefined : _0x5f16ea.content_type) || undefined === _0x3bccbe ? undefined : _0x3bccbe.startsWith("audio/");
            })),
            _0x102d68 = !(!(null === (_0x35ceca = _0x1af590.attachments) || undefined === _0x35ceca ? undefined : _0x35ceca.length) || _0x49640e || _0x236526 || _0x3c9b75),
            _0x461900 = !!_0x1af590.activity,
            _0x541cc5 = !!(null === (_0x2c8053 = _0x1af590.stickerItems) || undefined === _0x2c8053 ? undefined : _0x2c8053.length) || !!(null === (_0x2dd97a = _0x1af590.stickers) || undefined === _0x2dd97a ? undefined : _0x2dd97a.length),
            _0x3a0207 = !!(null === (_0x3966a6 = _0x1af590.embeds) || undefined === _0x3966a6 ? undefined : _0x3966a6.some(_0x57e2c7 => "gifv" === _0x57e2c7.type)) || (null === (_0x5a66a4 = _0x1af590.content) || undefined === _0x5a66a4 ? undefined : _0x5a66a4.startsWith("<a:")),
            _0x508bfc = !!_0x1af590.poll,
            _0xb3f72f = !!_0x1af590.giftInfo,
            _0x11e881 = !!_0x1af590.call,
            _0x4918bc = !!_0x1af590.isUnsupported,
            _0x4fda5b = !!_0x1af590.messageReference,
            _0xced9a4 = !!(null === (_0x3542c = _0x1af590.author) || undefined === _0x3542c ? undefined : _0x3542c.bot),
            _0x15910a = null === (_0x1f579c = _0x1af590.application) || undefined === _0x1f579c ? undefined : _0x1f579c.name,
            _0x29ddb1 = !_0x3a0207 && _0x1af590.content;
          return function _0x15843d(_0x2a15e9) {
            _0x2a15e9.ogMsg = _0x2a15e9.msg;
            let _0x14e964 = _0x2a15e9.msg || '';
            return _0x2a15e9.isGif ? _0x14e964 = "[GIF]" : _0x2a15e9.isSticker ? _0x14e964 = "[sticker]" : _0x2a15e9.hasPhoto ? _0x14e964 = "[photo] " + _0x14e964 : _0x2a15e9.hasVideo ? _0x14e964 = "[video] " + _0x14e964 : _0x2a15e9.hasAudio ? _0x14e964 = "[audio-message] " + _0x14e964 : _0x2a15e9.hasFile ? _0x14e964 = "[file] " + _0x14e964 : _0x2a15e9.hasActivity ? _0x14e964 = "[activity] " + _0x14e964 : _0x2a15e9.isPoll ? _0x14e964 = "[poll] " + _0x14e964 : _0x2a15e9.isCall ? _0x14e964 = "[tried-to-call-you] " + _0x14e964 : _0x2a15e9.isGift ? _0x14e964 = "[gift] " + _0x14e964 : _0x2a15e9.isBot ? _0x14e964 = "[launched] " + (_0x2a15e9.botName || '') : _0x2a15e9.isUnsupported && (_0x14e964 = "[unsupported-message] " + _0x14e964), _0x14e964 = _0x14e964.trim(), _0x2a15e9.isReply && (_0x14e964 = "[replied] " + _0x14e964), _0x14e964 = _0x14e964.trim(), _0x2a15e9.msg = _0x14e964, _0x2a15e9;
          }(_0x5a8493({
            id: _0x1af590.id,
            timestamp: new globalThis.Date(_0x1af590.timestamp).getTime() / 1000,
            msg: _0x29ddb1,
            isIncoming: _0x5c3faf,
            hasPhoto: _0x49640e,
            hasVideo: _0x236526,
            hasAudio: _0x3c9b75,
            hasFile: _0x102d68,
            hasActivity: _0x461900,
            isSticker: _0x541cc5,
            isPoll: _0x508bfc,
            isReply: _0x4fda5b,
            isCall: _0x11e881,
            isUnsupported: _0x4918bc,
            isGift: _0xb3f72f,
            isGif: _0x3a0207,
            isBot: _0xced9a4,
            botName: _0x15910a,
            _ir: _0x304081
          }));
        },
        _processMessageIr: ({
          message: _0x1a35ab,
          channel: _0x32dda2,
          user: _0x218d1c
        }) => ({
          message: _0x1a35ab,
          channel: _0x32dda2,
          user: _0x218d1c
        }),
        _processOpenMessages: () => _0x356baa.processMessages({
          channelId: _0x2ff8ea._getOpenChannelId()
        }),
        ["_getMessages"]({
          channelId: _0x15c2b6
        }) {
          const {
            assert$: _0xf67c3f,
            message$: _0x15278e
          } = _0x442618("dd354e");
          _0xf67c3f(1, _0x15c2b6, '', {
            sentry: false
          }, true), _0xf67c3f(2, _0x4848bd(_0x15c2b6, "string"), '', {
            sentry: false
          }, true);
          const _0x28f64a = _0xf67c3f(3, _0x27d9d3.store.call("MessageStore->getMessages", _0x15c2b6)._map, '', {
            sentry: "rare"
          }, true);
          return globalThis.Object.values(_0x28f64a);
        },
        _getOpenMessages: () => _0x356baa._getMessages({
          channelId: _0x2ff8ea._getOpenChannelId()
        }),
        _paginateOpenMessages: async () => _0x356baa.paginateMessages({
          channelId: _0x2ff8ea._getOpenChannelId()
        })
      },
      _0x562e31 = {
        ["hasLoaded"]() {
          try {
            const _0x1eb8df = !!_0x27d9d3.store.get("MessageStore->_isInitialized"),
              _0x158653 = !!_0x27d9d3.store.get("ChannelStore->_isInitialized"),
              _0xc6ca19 = !!_0x27d9d3.store.get("PrivateChannelSortStore->_isInitialized"),
              _0x433490 = !!_0x1cc3f0.getCurrentUser();
            return _0x1eb8df && _0x158653 && _0xc6ca19 && _0x433490;
          } catch (_0x59b186) {
            return false;
          }
        },
        _waitForLoaded: async () => await _0x18d5ed(() => _0x562e31.hasLoaded(), 1000),
        async ["_scrapeMessages"]() {
          var _0x896574;
          let _0x37b002 = null;
          for (const _0x560ac1 of globalThis.document.getElementsByTagName("*")) {
            if (!(null === (_0x896574 = null == _0x560ac1 ? undefined : _0x560ac1.className) || undefined === _0x896574 ? undefined : _0x896574.split)) continue;
            globalThis.console.log(_0x560ac1.className);
            const _0x5ee001 = _0x560ac1.className.split(" ");
            for (const _0x26e055 of _0x5ee001) if (_0x26e055.startsWith("messageListItem__")) {
              _0x37b002 = _0x26e055;
              break;
            }
            if (_0x37b002) break;
          }
          if (!_0x37b002) return void globalThis.console.error("Could not find messageListItem class name");
          let _0x42ba30 = new Set(),
            _0x548412 = [],
            _0x359208 = null;
          for (; !_0x359208 || _0x359208.textContent !== globalThis.document.getElementsByClassName(_0x37b002)[0].textContent;) {
            for (const _0x5eb781 of globalThis.Array.from(globalThis.document.getElementsByClassName(_0x37b002)).reverse()) {
              const _0x5995bc = _0x5eb781.textContent;
              _0x42ba30.has(_0x5995bc) || (_0x42ba30.add(_0x5995bc), _0x548412.push(_0x5995bc));
            }
            globalThis.document.getElementsByClassName(_0x37b002)[0].scrollIntoView(), _0x359208 = globalThis.document.getElementsByClassName(_0x37b002)[0], await _0x2d00e3(1000);
          }
          return globalThis.console.log("FINISHED SCRAPING"), _0x548412.reverse().join("\n\n");
        }
      },
      _0x1f7fac = "online",
      _0xc87ed0 = "idle",
      _0x42f84d = {
        async ["isRecipientPresent"]({
          channelId: _0x54988c
        }) {
          const {
            assert$: _0x1328cb,
            message$: _0x1746a7
          } = _0x442618("24b663");
          _0x1328cb(1, _0x54988c, '', {
            sentry: false
          }, true), _0x1328cb(2, _0x4848bd(_0x54988c, "string"), '', {
            sentry: false
          }, true);
          const _0x1a6ed5 = await _0x42f84d._isRecipientOnline({
              channelId: _0x54988c
            }),
            _0x272bef = await _0x42f84d.isRecipientTyping({
              channelId: _0x54988c
            });
          return _0x1a6ed5 || _0x272bef;
        },
        async ["startTyping"]({
          channelId: _0x27c892
        }) {
          const {
            assert$: _0x27954c,
            message$: _0x441998
          } = _0x442618("133a79");
          _0x27954c(1, _0x27c892, '', {
            sentry: false
          }, true), _0x27954c(2, _0x4848bd(_0x27c892, "string"), '', {
            sentry: false
          }, true);
          const _0x4f554f = _0x3e8a24();
          return await _0x4f554f.startTyping(_0x27c892);
        },
        async ["isRecipientTyping"]({
          channelId: _0x1afadd
        }) {
          var _0x4a699b;
          const {
            assert$: _0x51c9b2,
            message$: _0x30161d
          } = _0x442618("e02a81");
          _0x51c9b2(1, _0x1afadd, '', {
            sentry: false
          }, true), _0x51c9b2(2, _0x4848bd(_0x1afadd, "string"), '', {
            sentry: false
          }, true);
          const _0x5268e9 = null === (_0x4a699b = (await _0x2ff8ea._getChannel({
            channelId: _0x1afadd,
            clean: false
          }))._user) || undefined === _0x4a699b ? undefined : _0x4a699b.id;
          if (!_0x5268e9) return false;
          return null != (await _0x27d9d3.store.call("TypingStore->getTypingUsers", _0x1afadd))[_0x5268e9];
        },
        async ["_isRecipientOnline"]({
          channelId: _0x594274
        }) {
          var _0x5749c2;
          const {
            assert$: _0x5a9070,
            message$: _0x187b9f
          } = _0x442618("01f39e");
          _0x5a9070(1, _0x594274, '', {
            sentry: false
          }, true), _0x5a9070(2, _0x4848bd(_0x594274, "string"), '', {
            sentry: false
          }, true);
          const _0xb977d1 = null === (_0x5749c2 = (await _0x2ff8ea._getChannel({
            channelId: _0x594274,
            clean: false
          }))._user) || undefined === _0x5749c2 ? undefined : _0x5749c2.id;
          if (!_0xb977d1) return false;
          const _0xc9853e = await _0x27d9d3.store.call("PresenceStore->getStatus", _0xb977d1);
          return _0xc9853e === "online" || _0xc9853e === "idle";
        }
      },
      _0x3add47 = {
        api: {
          ["url"](_0x19ec20, _0x4362ad = {}) {
            const {
              assert$: _0x2a178e,
              message$: _0xed9c45
            } = _0x442618("17cb6f");
            _0x2a178e(1, _0x19ec20, '', {
              sentry: false
            }, true), _0x2a178e(2, _0x4848bd(_0x19ec20, "string"), '', {
              sentry: false
            }, true), _0x19ec20.startsWith("/") && (_0x19ec20 = _0x19ec20.slice(1));
            const _0x235674 = new globalThis.URL("https://" + globalThis.location.hostname + "/" + _0x19ec20);
            for (const [_0x533122, _0xf3eca0] of globalThis.Object.entries(_0x4362ad)) _0x235674.searchParams.set(_0x533122, _0xf3eca0.toString());
            return _0x235674.toString();
          },
          async ["fetch"](_0x5e6a95, _0x33579c = {}) {
            const {
                assert$: _0x2b878b,
                message$: _0x292ca2
              } = _0x442618("f01d5a"),
              {
                params: _0x400cec = {},
                ..._0x464e86
              } = _0x33579c,
              _0x4e9d3d = this.url(_0x5e6a95, _0x400cec);
            return await new globalThis.Promise((_0xc6e0ee, _0x3a6948) => {
              $j.ajax({
                url: _0x4e9d3d,
                async: false,
                ..._0x464e86,
                success: _0x179be6 => _0xc6e0ee(_0x179be6),
                error: _0xee7e1a => {
                  if (_0xee7e1a.responseText && _0xee7e1a.responseText.startsWith("<html>")) {
                    const _0x18d988 = new Error("Rate limit exceeded");
                    return globalThis.Object.assign(_0x18d988, {
                      data: {
                        errorKey: "rate_limit",
                        errorMessage: "Rate limit exceeded"
                      }
                    }), _0x3a6948(_0x18d988);
                  }
                  _0x3a6948(_0xee7e1a);
                }
              });
            });
          }
        }
      },
      _0x4cfecd = _0x491d77(16),
      _0x5ec477 = _0x491d77(16),
      _0x31ee9b = _0x491d77(16),
      _0x25bbd2 = _0x491d77(16),
      _0x321322 = _0x491d77(16),
      _0x3f3ae2 = _0x491d77(16),
      _0x4eac9b = _0x491d77(16),
      _0x4cb63c = _0x2e7e16(0, {
        [_0x5ec477]: {},
        [_0x4cfecd]: {},
        [_0x31ee9b]: new Map(),
        [_0x25bbd2]: {},
        [_0x321322]: 0,
        [_0x3f3ae2]: false,
        [_0x4eac9b]: {}
      }),
      _0x391996 = (_0x3707fd, _0x9a97d5) => {
        _0x4cb63c.set(_0x5ec477, _0x5c47ab => {
          const _0x1f61b7 = _0x5c47ab[_0x3707fd] || (_0x5c47ab[_0x3707fd] = {});
          for (const _0x3bf39f in _0x9a97d5) {
            const _0x255315 = _0x9a97d5[_0x3bf39f];
            _0x255315 && (_0x1f61b7[_0x255315.messageId] = _0x255315);
          }
          return _0x5c47ab;
        });
      },
      _0x5153ad = (_0x59f9e4, {
        ignoreExisting: _0x50b16e = false
      } = {}) => {
        _0x4cb63c.set(_0x31ee9b, _0x2a2529 => {
          for (const _0x4e1b4f in _0x59f9e4) {
            const _0x48a8cc = _0x59f9e4[_0x4e1b4f];
            _0x50b16e && _0x2a2529.has(_0x48a8cc.profileId) || _0x2a2529.set(parseInt(_0x48a8cc.profileId), _0x48a8cc);
          }
          return _0x2a2529;
        });
      },
      _0x30cb1f = _0x533fb0 => {
        _0x4cb63c.set(_0x25bbd2, _0x32b7d6 => {
          for (const _0x1c4780 in _0x533fb0) {
            const _0x2cad1f = _0x533fb0[_0x1c4780];
            _0x32b7d6[_0x2cad1f.profileId] = _0x2cad1f;
          }
          return _0x32b7d6;
        });
      },
      _0x3481b3 = {
        async ["getThreads"]({
          loadAll: _0x501fb5 = false,
          clean: _0x3134d2 = true
        } = {}) {
          const _0xd8af8a = _0x4cb63c.get(_0x3f3ae2);
          let _0x3b0959 = 0;
          for (; _0x501fb5 && !_0xd8af8a;) {
            const _0x3e4c73 = await _0x3add47.api.fetch("chat/threads", {
              params: {
                offset: _0x3b0959,
                limit: 20
              },
              type: "post",
              dataType: "json"
            });
            if (_0x5153ad(_0x3e4c73.jsonThreads, {
              ignoreExisting: true
            }), !_0x3e4c73.loadMore) {
              _0x4cb63c.set(_0x3f3ae2, true);
              break;
            }
            _0x3b0959 += 20, await _0x231ec8(1000);
          }
          globalThis.jsonThreads && _0x5153ad(globalThis.jsonThreads, {
            ignoreExisting: true
          });
          const _0x5cc3c4 = _0x4cb63c.get(_0x31ee9b);
          return globalThis.Array.from(_0x5cc3c4.values()).map(_0x3bf773 => _0x3481b3._getThread({
            thread: _0x3bf773,
            clean: _0x3134d2
          })).sort((_0x3d65b0, _0x11ad20) => _0x3d65b0.lastActivityTimestamp - _0x11ad20.lastActivityTimestamp);
        },
        async ["markThreadAsRead"]({
          threadId: _0x116db4
        }) {
          var _0x3f6694;
          const {
            assert$: _0x43f181,
            message$: _0x31fa7b
          } = _0x442618("16f66a");
          _0x43f181(1, _0x116db4, '', {
            sentry: false
          }, true), _0x43f181(2, _0x4848bd(_0x116db4, "string", "number"), '', {
            sentry: false
          }, true);
          const _0x19b38b = _0x3481b3._getThread({
            threadId: _0x116db4,
            clean: false
          });
          if (!_0x19b38b.isUnread) return false;
          const _0x397ce7 = globalThis.document.querySelector("li[data-userid=\"" + _0x116db4 + "\"]");
          return _0x397ce7 && (_0x397ce7.classList.remove("newmsg"), null === (_0x3f6694 = _0x397ce7.querySelector(".js-newMsg")) || undefined === _0x3f6694 || _0x3f6694.remove()), await _0x3add47.api.fetch("chat/listings_for_user", {
            params: {
              to: _0x116db4
            },
            dataType: "json",
            type: "post"
          }), _0x19b38b._thread.newMessages = 0, true;
        },
        ["_getThread"]({
          threadId: _0x372c9c,
          thread: _0x36321b,
          assert: _0x598b2d = true,
          clean: _0xe93908 = true
        }) {
          const {
            assert$: _0x4ef4a7,
            message$: _0x139524
          } = _0x442618("52a50b");
          _0x4ef4a7(1, _0x36321b || _0x372c9c, '', {
            sentry: false
          }, true), _0x4ef4a7(2, !_0x36321b || _0x4848bd(_0x36321b, "object"), '', {
            sentry: false
          }, true), _0x4ef4a7(3, !_0x372c9c || _0x4848bd(_0x372c9c, "string", "number"), '', {
            sentry: false
          }, true);
          const _0x14e2dd = _0x4cb63c.get(_0x31ee9b);
          _0x36321b || (_0x36321b = _0x14e2dd.get("number" == typeof _0x372c9c ? _0x372c9c : parseInt(_0x372c9c))), _0x4ef4a7(4, !_0x598b2d || _0x36321b, '', {
            sentry: "rare"
          }, true);
          const _0x1923c0 = {
              messageId: null == _0x36321b ? undefined : _0x36321b.lastMessageIdReceived,
              message: null == _0x36321b ? undefined : _0x36321b.lastMessageReceived
            },
            _0x5ada47 = {
              messageId: null == _0x36321b ? undefined : _0x36321b.lastMessageIdSent,
              message: null == _0x36321b ? undefined : _0x36321b.lastMessageSent
            },
            _0x275078 = {
              id: _0x36321b.profileId,
              username: _0x36321b.profileUsername,
              isFanClubChat: _0x36321b.isFanClubChat,
              isUserOnline: !_0x36321b.profileLinkOnline.includes("offlineStatus"),
              isUnread: _0x36321b.newMessages > 0,
              lastActivityTimestamp: new globalThis.Date(_0x36321b.lastAction).getTime() / 1000,
              lastMessageReceived: _0x1923c0,
              lastMessageSent: _0x5ada47
            };
          return _0xe93908 || (_0x275078._thread = _0x36321b), _0x275078;
        },
        ["_getOpenThreadId"]() {
          const _0x3c548d = globalThis.document.querySelector(".active[data-lastsent]");
          return _0x3c548d ? parseInt(_0x3c548d.getAttribute("data-userid") || "0") : null;
        }
      },
      _0x327950 = {
        async ["fetchFriendRequests"]({
          cursor: _0x918514 = 0
        } = {}) {
          const {
              assert$: _0x3961e4,
              message$: _0x1ac77e
            } = _0x442618("2aff32"),
            _0x506646 = await _0x3add47.api.fetch("user/ajaxGetFriendRequests", {
              type: "GET",
              data: {
                offset: _0x918514,
                limit: 10,
                token: token
              },
              dataType: "json"
            });
          if (_0x3961e4(1, _0x506646, '', {
            sentry: "rare"
          }, true), _0x3961e4(2, "\"EXPIRED\"" !== _0x506646, '', {
            sentry: "rare"
          }, true), 0 === _0x506646.count) return [];
          const _0xf703c6 = _0x5bcb1c(_0x506646.datas, {
              deep: true,
              mutate: true
            }),
            _0x3376bf = _0x918514 + _0xf703c6.length < _0x506646.count;
          return {
            count: _0x506646.count,
            data: _0xf703c6,
            cursor: _0x3376bf ? _0x918514 + _0xf703c6.length : null
          };
        },
        async ["acceptFriendRequest"]({
          userId: _0x3d0a4d
        }) {
          const {
            assert$: _0xca9fd4,
            message$: _0x45668e
          } = _0x442618("3eff56");
          return _0xca9fd4(1, _0x3d0a4d, '', {
            sentry: false
          }, true), _0xca9fd4(2, _0x4848bd(_0x3d0a4d, "string", "number"), '', {
            sentry: false
          }, true), await _0x327950._manageFriendRequest({
            userId: _0x3d0a4d,
            accept: true
          });
        },
        async ["declineFriendRequest"]({
          userId: _0x4b2bd5
        }) {
          const {
            assert$: _0x5a7bc8,
            message$: _0x7aa2fb
          } = _0x442618("1c67cb");
          return _0x5a7bc8(1, _0x4b2bd5, '', {
            sentry: false
          }, true), _0x5a7bc8(2, _0x4848bd(_0x4b2bd5, "string", "number"), '', {
            sentry: false
          }, true), await _0x327950._manageFriendRequest({
            userId: _0x4b2bd5,
            accept: false
          });
        },
        async ["_manageFriendRequest"]({
          userId: _0xec0c60,
          accept: _0x2a8489
        }) {
          const {
            assert$: _0x38975a,
            message$: _0x599a3d
          } = _0x442618("2aff32");
          _0x38975a(1, _0xec0c60, '', {
            sentry: false
          }, true), _0x38975a(2, _0x4848bd(_0xec0c60, "string", "number"), '', {
            sentry: false
          }, true), _0x38975a(3, _0x4848bd(_0x2a8489, "boolean"), '', {
            sentry: false
          }, true);
          const _0x4b34bb = await _0x3add47.api.fetch(_0x2a8489 ? "user/ajax_accept_friend_request" : "user/ajax_reject_friend_request", {
            params: {
              token: token
            },
            type: "POST",
            data: {
              id: _0xec0c60
            }
          });
          return _0x38975a(1, _0x4b34bb, '', {
            sentry: "rare"
          }, true), _0x38975a(2, "OK" === _0x4b34bb.replace(/[^a-zA-Z]/g, '').trim(), '', {
            sentry: "rare",
            extra: {
              result: _0x4b34bb
            }
          }, true), true;
        }
      },
      _0x3b4e49 = {
        ["getCurrentUser"]() {
          var _0x445365, _0x201d65, _0x2c8155;
          const {
              assert$: _0x1402f5,
              message$: _0x28ae84
            } = _0x442618("964d3a"),
            _0x3694bc = _0x3b4e49._getCurrentUserId(),
            _0x18ffb2 = null === (_0x201d65 = null === (_0x445365 = globalThis.document.querySelector(".profileData>.username")) || undefined === _0x445365 ? undefined : _0x445365.getAttribute("href")) || undefined === _0x201d65 ? undefined : _0x201d65.split("/").pop(),
            _0x171f11 = null === (_0x2c8155 = globalThis.document.querySelector("#profileMenuWrapper img")) || undefined === _0x2c8155 ? undefined : _0x2c8155.getAttribute("src");
          return _0x18ffb2 && _0x171f11 ? {
            profileId: _0x3694bc,
            profileUsername: _0x18ffb2,
            profileAvatar: _0x171f11
          } : null;
        },
        ["getUsers"]() {
          "jsonPeople" in globalThis && _0x30cb1f(globalThis.jsonPeople);
          const _0x567692 = _0x3b4e49._getCurrentUserId(),
            _0x212333 = _0x4cb63c.get(_0x25bbd2),
            _0x3fc021 = _0x4cb63c.get(_0x31ee9b);
          for (const _0xb8a7a6 of _0x3fc021.values()) _0xb8a7a6.profileId && (_0x212333[_0xb8a7a6.profileId] = {
            profileId: _0xb8a7a6.profileId,
            profileAvatar: _0xb8a7a6.profileImage,
            profileUsername: _0xb8a7a6.profileUsername
          });
          return _0x567692 && delete _0x212333[_0x567692], _0x212333;
        },
        _getUser: ({
          userId: _0x2c23eb
        }) => _0x3b4e49.getUsers()[_0x2c23eb],
        _getCurrentUserId: () => liuIdOrNull
      },
      _0x1fbe29 = {
        async ["sendMessage"]({
          threadId: _0x3d11bf,
          message: _0x20c804
        }) {
          const {
            assert$: _0x2bdf29,
            message$: _0x3d0db1
          } = _0x442618("67c53e");
          _0x2bdf29(1, _0x3d11bf, '', {
            sentry: false
          }, true), _0x2bdf29(2, _0x4848bd(_0x3d11bf, "string", "number"), '', {
            sentry: false
          }, true), _0x2bdf29(3, _0x20c804, '', {
            sentry: false
          }, true), _0x2bdf29(4, _0x4848bd(_0x20c804, "string"), '', {
            sentry: false
          }, true);
          const _0x22eb01 = await _0x3add47.api.fetch("chat/send", {
            params: {
              to: _0x3d11bf
            },
            type: "post",
            dataType: "json",
            data: {
              message: _0x20c804,
              token: token
            }
          });
          _0x2bdf29(5, "LARGE" !== _0x22eb01.status, '', {
            sentry: "uncommon"
          }, true), _0x2bdf29(6, "BLOCKED" !== _0x22eb01.status, '', {
            sentry: "uncommon"
          }, true), _0x2bdf29(7, "BANNED" !== _0x22eb01.status, '', {
            sentry: "uncommon"
          }, true), _0x2bdf29(8, "INVALID" !== _0x22eb01.status, '', {
            sentry: "uncommon"
          }, true), _0x2bdf29(8, "NO" !== _0x22eb01.status, '', {
            sentry: "uncommon"
          }, true);
          const _0x2b8cdf = _0x2bdf29(9, _0x22eb01.jsonListings, '', {
              sentry: "rare"
            }, true),
            _0x2b8d66 = _0x22eb01.jsonPeople,
            _0x533681 = _0x22eb01.jsonThreads;
          return _0x391996(_0x3d11bf, _0x2b8cdf), _0x533681 && _0x5153ad(_0x533681), _0x2b8d66 && _0x30cb1f(_0x2b8d66), _0x2bdf29(9, "PASS" === _0x22eb01.status, '', {
            sentry: "rare"
          }, true), _0x22eb01;
        },
        async ["paginateMessages"]({
          threadId: _0x5a72fd
        }) {
          const {
            assert$: _0x444701,
            message$: _0x2462e2
          } = _0x442618("34e9c9");
          _0x444701(1, _0x5a72fd, '', {
            sentry: false
          }, true), _0x444701(2, _0x4848bd(_0x5a72fd, "string", "number"), '', {
            sentry: false
          }, true);
          if (_0x4cb63c.get(_0x4eac9b)[_0x5a72fd]) return {
            hasMore: false
          };
          const _0x124c03 = _0x1fbe29._getMessages({
              threadId: _0x5a72fd
            }),
            _0x15f150 = _0x124c03[_0x124c03.length - 1],
            _0x11ff22 = _0x15f150 ? "chat/listings_for_user_more" : "chat/listings_for_user",
            _0x31d283 = {
              to: _0x5a72fd
            };
          _0x15f150 && (_0x31d283.message_id = null == _0x15f150 ? undefined : _0x15f150.messageId);
          const {
            jsonListings: _0x286521,
            loadMore: _0x3de7ae
          } = await _0x3add47.api.fetch(_0x11ff22, {
            params: _0x31d283,
            type: "post",
            dataType: "json"
          });
          return _0x391996(_0x5a72fd, _0x286521), _0x3de7ae || _0x4cb63c.set(_0x4eac9b, _0x559e04 => (_0x559e04[_0x5a72fd] = true, _0x559e04)), {
            hasMore: !!_0x3de7ae
          };
        },
        ["processMessages"]({
          threadId: _0x4f4141
        }) {
          const {
            assert$: _0x46c58a,
            message$: _0x5c4c36
          } = _0x442618("db0c69");
          _0x46c58a(1, _0x4f4141, '', {
            sentry: false
          }, true), _0x46c58a(2, _0x4848bd(_0x4f4141, "string", "number"), '', {
            sentry: false
          }, true);
          const _0x321bc6 = _0x1fbe29._getMessages({
              threadId: _0x4f4141
            }),
            _0x5e04df = _0x3b4e49.getCurrentUser(),
            _0x3f6f02 = _0x3481b3._getThread({
              threadId: _0x4f4141
            });
          return _0x321bc6.map(_0x21d9ea => _0x1fbe29._processMessage({
            ir: _0x1fbe29._processMessageIr({
              message: _0x21d9ea,
              user: _0x5e04df,
              thread: _0x3f6f02
            })
          })).sort((_0x598715, _0x3f8fe5) => _0x598715.timestamp - _0x3f8fe5.timestamp);
        },
        _processMessageIr: ({
          message: _0xa5bde1,
          user: _0x2965b8,
          thread: _0x3b8b11
        }) => ({
          message: _0xa5bde1,
          user: _0x2965b8,
          thread: _0x3b8b11
        }),
        ["_processMessage"]({
          ir: _0x4413b8
        }) {
          var _0x3d89eb;
          const {
              message: _0x272d79,
              user: _0x377c00,
              thread: _0x2b9c5f
            } = _0x4413b8,
            _0x5a24be = _0x272d79.profileId != _0x377c00.profileId,
            _0x1dfd6f = new globalThis.Date(_0x272d79.dateAdded),
            _0x1c925e = _0x272d79.message;
          return function _0x36e034(_0x59a4f0) {
            var _0x1f4b90;
            _0x59a4f0.ogMsg = _0x59a4f0.msg;
            let _0x1c2ffe = null !== (_0x1f4b90 = _0x59a4f0.msg) && undefined !== _0x1f4b90 ? _0x1f4b90 : '';
            return _0x1c2ffe = _0x1c2ffe.trim(), _0x59a4f0.msg = _0x1c2ffe, _0x59a4f0;
          }(_0x5a8493({
            id: null === (_0x3d89eb = _0x272d79.messageId) || undefined === _0x3d89eb ? undefined : _0x3d89eb.toString(),
            timestamp: _0x1dfd6f.getTime() / 1000,
            msg: _0x1c925e,
            isIncoming: _0x5a24be,
            _ir: _0x4413b8
          }));
        },
        ["_getMessages"]({
          threadId: _0x1ac1d2
        }) {
          const _0x2d4653 = _0x4cb63c.get(_0x5ec477),
            _0x43bae1 = _0x4cb63c.get(_0x4eac9b),
            _0x59cbe4 = _0x4cb63c.get(_0x4cfecd),
            _0x2a643d = _0x3481b3._getThread({
              threadId: _0x1ac1d2
            });
          return _0x59cbe4[_0x1ac1d2] !== _0x2a643d.lastMessageReceived.messageId && (_0x59cbe4[_0x1ac1d2] = _0x2a643d.lastMessageReceived.messageId, _0x43bae1[_0x1ac1d2] = false, _0x2d4653[_0x1ac1d2] = {}), globalThis.Object.values(_0x2d4653[_0x1ac1d2] || {});
        },
        ["_getOpenMessages"]() {
          const _0x482f00 = _0x3481b3._getOpenThreadId();
          return _0x482f00 ? _0x1fbe29._getMessages({
            threadId: _0x482f00
          }) : [];
        },
        ["_processOpenMessages"]() {
          const _0x51046d = _0x3481b3._getOpenThreadId();
          return _0x51046d ? _0x1fbe29.processMessages({
            threadId: _0x51046d
          }) : [];
        }
      },
      _0x26bc0b = {
        init: async () => await async function _0x3064aa() {
          const {
            assert$: _0x340739,
            message$: _0x5a2b1d,
            throw$: _0x37ecaf
          } = _0x442618("5e2963");
          if (!globalThis.window.location.href.toLowerCase().includes("pornhub.com")) return;
          await _0x18d5ed(() => "createThreadListing" in globalThis.window);
          const _0x5810ea = createThreadListing;
          createThreadListing = (..._0x4ed74c) => {
            _0x5810ea(..._0x4ed74c);
            const _0x63aa70 = _0x4ed74c[0];
            _0x4848bd(_0x63aa70, "object", "array") ? _0x5153ad(_0x63aa70) : globalThis.console.log(_0x5a2b1d(1, '', {
              sentry: "rare",
              extra: {
                threadsType: typeof _0x63aa70
              }
            }, true));
          }, await _0x18d5ed(() => "$j" in globalThis.window);
          const _0x5c414e = globalThis.$j,
            _0x3ec178 = _0x5c414e.ajax;
          _0x5c414e.ajax = async (_0x5ef068, ..._0x260bb3) => {
            const _0x4725e9 = _0x23e758 => {
              var _0x1b5f4c;
              if (_0x23e758.responseText && _0x23e758.responseText.startsWith("<html>")) {
                globalThis.console.trace();
                const _0x1be1cd = globalThis.document.createElement("iframe"),
                  _0x4b3be0 = null === (_0x1b5f4c = _0x23e758.responseText) || undefined === _0x1b5f4c ? undefined : _0x1b5f4c.replace(/document\.location\.reload\(true\);/g, '');
                _0x1be1cd.style.display = "none", _0x1be1cd.srcdoc = _0x4b3be0, _0x1be1cd.onload = async () => {
                  _0x1be1cd.remove();
                }, globalThis.document.body.appendChild(_0x1be1cd);
              }
            };
            return await _0x3ec178({
              ..._0x5ef068,
              success: _0x1a019a => {
                var _0x1d41a3;
                return null === (_0x1d41a3 = _0x5ef068.success) || undefined === _0x1d41a3 ? undefined : _0x1d41a3.call(_0x5ef068, _0x1a019a);
              },
              error: _0x534b5e => {
                var _0x13166e;
                return _0x534b5e.dealtWith = true, _0x4725e9(_0x534b5e), null === (_0x13166e = _0x5ef068.error) || undefined === _0x13166e ? undefined : _0x13166e.call(_0x5ef068, _0x534b5e);
              }
            }, ..._0x260bb3)["catch"](_0x284201 => {
              _0x284201.dealtWith || _0x4725e9(_0x284201), _0x37ecaf(1, '', {
                sentry: "veryRare",
                exception: _0x284201
              }, true);
            });
          }, globalThis.clearInterval(timer), timerCheckNew = () => {}, timer = globalThis.setInterval(() => {
            checkNew();
          }, 10000);
        }(),
        async ["hasLoaded"]() {
          try {
            const _0x564b0c = "jsonThreads" in globalThis,
              _0x18bde7 = !!_0x3b4e49.getCurrentUser(),
              _0x58f228 = !!(await _0x3481b3.getThreads({}));
            return _0x564b0c && _0x18bde7 && _0x58f228;
          } catch (_0x22ca6b) {
            return false;
          }
        }
      },
      _0x1411da = {
        isRecipientPresent: ({
          threadId: _0x905654
        }) => _0x1411da._isRecipientOnline({
          threadId: _0x905654
        }),
        _isRecipientOnline: ({
          threadId: _0x3a44ed
        }) => _0x3481b3._getThread({
          threadId: _0x3a44ed
        }).isUserOnline
      },
      _0x215b4d = {
        ["atproto-proxy"]: "did:web:api.bsky.chat#bsky_chat"
      },
      _0x4b7b00 = {
        app: {
          ["mainElement"]() {
            const {
              assert$: _0x578017,
              message$: _0x18eaea
            } = _0x442618("839252");
            return _0x578017(1, globalThis.document.querySelector("main"), '', {
              sentry: "veryRare"
            }, true);
          },
          mainContexts: () => _0x193b63(_0x4b7b00.app.mainElement()),
          agent: () => _0x4b7b00.app.mainContexts().find(_0x487650 => _0x487650 && "object" == typeof _0x487650 && _0x487650.app && _0x487650.chat && _0x487650.api),
          async ["call"](_0x3aad32, _0x485d94, {
            assert: _0x527e15 = true,
            opts: _0x166c1c = {
              encoding: "application/json",
              service: "dm",
              headers: {}
            }
          } = {}) {
            const {
                assert$: _0x22e56a,
                message$: _0x5bef09
              } = _0x442618("b20b0c"),
              _0xe3405 = _0x4b7b00.app.agent(),
              _0x301e48 = _0x3aad32.split("->"),
              _0x120f46 = _0x301e48.pop(),
              _0x518024 = _0x301e48.join("->"),
              _0xb846f8 = _0x22e56a(1, _0x229767(_0x518024, _0xe3405), '', {
                sentry: false,
                extra: {
                  path: _0x3aad32
                }
              }, true),
              _0x51b31d = _0x22e56a(2, _0xb846f8[_0x120f46], '', {
                sentry: false,
                extra: {
                  parentPath: _0x518024,
                  methodPath: _0x120f46
                }
              }, true);
            if (_0x166c1c) {
              let {
                encoding: _0x452a69,
                service: _0x5ea6a9,
                headers: _0x232fa5
              } = _0x166c1c;
              _0x166c1c.headers || (_0x166c1c.headers = {}), _0x166c1c.headers = {
                ..._0x166c1c.headers,
                ...("dm" === _0x5ea6a9 ? _0x215b4d : {})
              };
            }
            const _0x13a5d0 = await _0x51b31d.apply(_0xb846f8, [_0x485d94, _0x166c1c]);
            return _0x22e56a(4, !_0x527e15 || (null == _0x13a5d0 ? undefined : _0x13a5d0.success), '', {
              sentry: "veryRare",
              networkRelated: true,
              extra: {
                path: _0x3aad32,
                params: _0x485d94
              }
            }, true), _0x13a5d0.data;
          }
        },
        atproto: {
          ["get"](_0x4b24f0) {
            const {
              assert$: _0x501c09,
              message$: _0x2db76d
            } = _0x442618("915393");
            return _0x501c09(3, _0x229767(_0x4b24f0, _0x2ff5c3.findModule({
              key: "bsky:atproto",
              accumulate: true,
              assert: _0x2db76d(1, '', {
                sentry: "veryRare"
              }, true),
              exportsMeta: {
                names: ["AppNS", "ChatNS"]
              }
            })[0].exports), '', {
              sentry: "veryRare",
              extra: {
                path: _0x4b24f0
              }
            }, true);
          }
        },
        messageBus: {
          ["get"]() {
            const {
              assert$: _0x517195,
              message$: _0x4fd5c
            } = _0x442618("7546e9");
            return _0x517195(1, _0x4b7b00.app.mainContexts().find(_0x3b8bec => _0x3b8bec && "object" == typeof _0x3b8bec && _0x3b8bec.agent && _0x3b8bec.emitter && _0x3b8bec.poll), '', {
              sentry: "veryRare"
            }, true);
          },
          poll: () => _0x4b7b00.messageBus.get().poll(),
          ["addListener"](_0x57b93e) {
            _0x4b7b00.messageBus.get().on(_0x57b93e, {});
          }
        },
        query: {
          ["client"]() {
            const {
              assert$: _0x10209f,
              message$: _0x159bf1
            } = _0x442618("00aa29");
            return _0x10209f(1, _0x4b7b00.app.mainContexts().find(_0x1902f3 => _0x1902f3 && "object" == typeof _0x1902f3 && _0x1902f3.getQueryCache), '', {
              sentry: "veryRare"
            }, true);
          }
        }
      },
      _0x11c300 = {
        async ["getConversations"]({
          loadAll: _0x20991b
        } = {}) {
          var _0x45f697, _0xf0e41f;
          const _0x49894c = _0x4b7b00.query.client().getQueryCache().getAll(),
            _0x35006a = _0x49894c.find(_0x3b4b0c => _0x3b4b0c.queryKey.includes("convo-list") && _0x3b4b0c.queryKey.includes("request") && _0x3b4b0c.queryKey.includes("all")),
            _0x58254c = _0x49894c.find(_0x422452 => _0x422452.queryKey.includes("convo-list") && _0x422452.queryKey.includes("accepted") && _0x422452.queryKey.includes("all"));
          let _0x3770f4 = {};
          for (const _0x30488d of [_0x35006a, _0x58254c].filter(Boolean)) {
            const _0x9c82aa = () => {
                var _0x48fe93, _0x34d405, _0x4f1ebb;
                return null !== (_0x4f1ebb = null === (_0x34d405 = null === (_0x48fe93 = null == _0x30488d ? undefined : _0x30488d.state) || undefined === _0x48fe93 ? undefined : _0x48fe93.data) || undefined === _0x34d405 ? undefined : _0x34d405.pages) && undefined !== _0x4f1ebb ? _0x4f1ebb : [];
              },
              _0x52eb9b = () => {
                const _0x26f728 = _0x9c82aa();
                return _0x26f728[_0x26f728.length - 1];
              };
            for (; _0x20991b && (null === (_0x45f697 = _0x52eb9b()) || undefined === _0x45f697 ? undefined : _0x45f697.cursor);) await _0x58254c.fetch(_0x58254c.options, {
              cancelRefetch: true,
              meta: {
                fetchMore: {
                  direction: "forward"
                }
              }
            }), await _0x231ec8(1000);
            let _0xc71f96 = _0x9c82aa().flatMap(_0x2f66fa => _0x2f66fa.convos);
            for (const _0x485c9f of _0xc71f96) {
              if (_0x3770f4[_0x485c9f.id]) continue;
              const _0x549003 = await _0x11c300.getConversation({
                conversation: _0x485c9f
              });
              _0x549003.members && (null === (_0xf0e41f = null == _0x549003 ? undefined : _0x549003.members) || undefined === _0xf0e41f ? undefined : _0xf0e41f.length) > 2 || (_0x3770f4[_0x549003.id] = _0x549003);
            }
          }
          return _0x3c026c(globalThis.Object.values(_0x3770f4), "lastMessageTimestamp");
        },
        async ["markConversationAsRead"]({
          conversationId: _0x4f3ff1
        }) {
          const {
            assert$: _0x3ee1b5,
            message$: _0x41cc28
          } = _0x442618("fb966e");
          _0x3ee1b5(1, _0x4f3ff1, '', {
            sentry: false,
            extra: {
              conversationId: _0x4f3ff1
            }
          }, true), _0x3ee1b5(2, _0x5b0f73(_0x4f3ff1, "string"), '', {
            sentry: false,
            extra: {
              conversationId: _0x4f3ff1
            }
          }, true);
          const _0x588a71 = await _0x11c300.getConversation({
            conversationId: _0x4f3ff1
          });
          if (_0x3ee1b5(3, _0x588a71, '', {
            sentry: false,
            extra: {
              conversationId: _0x4f3ff1
            }
          }, true), 0 === _0x588a71._conversation.unreadCount) return false;
          const _0x3541cd = await _0x4b7b00.app.call("chat->bsky->convo->updateRead", {
            convoId: _0x4f3ff1
          });
          return _0x3ee1b5(4, _0x3541cd, '', {
            sentry: "veryRare",
            extra: {
              response: _0x3541cd,
              conversation: _0x588a71,
              conversationId: _0x4f3ff1
            }
          }, true), _0x3ee1b5(5, _0x3541cd.convo, '', {
            sentry: "veryRare",
            extra: {
              response: _0x3541cd,
              conversation: _0x588a71,
              conversationId: _0x4f3ff1
            }
          }, true), globalThis.Object.assign(_0x588a71._conversation, _0x3541cd.convo), true;
        },
        async ["getConversation"]({
          conversationId: _0x20c72e,
          userId: _0x50b56a,
          conversation: _0x530126,
          assert: _0x1da8d3
        }) {
          var _0x346353;
          const {
            assert$: _0x103d19,
            message$: _0x1d4b8b
          } = _0x442618("dda5dd");
          if (_0x103d19(1, _0x530126 || _0x20c72e || _0x50b56a, '', {
            sentry: false,
            extra: {
              conversation: _0x530126,
              conversationId: _0x20c72e,
              userId: _0x50b56a
            }
          }, true), _0x20c72e) {
            return (await _0x11c300.getConversations({
              loadAll: false
            })).find(_0x5cec97 => _0x5cec97.id === _0x20c72e);
          }
          return _0x50b56a && (_0x530126 = (await _0x4b7b00.app.call("chat->bsky->convo->getConvoForMembers", {
            members: [_0x50b56a]
          })).convo), _0x103d19(1, !_0x1da8d3 || _0x530126, '', {
            sentry: false,
            extra: {
              conversationId: _0x20c72e,
              userId: _0x50b56a
            }
          }, true), _0x530126 ? {
            id: _0x530126.id,
            members: _0x530126.members,
            lastMessage: _0x530126.lastMessage,
            lastMessageTimestamp: (null === (_0x346353 = _0x530126.lastMessage) || undefined === _0x346353 ? undefined : _0x346353.sentAt) ? new globalThis.Date(_0x530126.lastMessage.sentAt).getTime() / 1000 : null,
            _conversation: _0x530126
          } : null;
        },
        async ["_getOpenConversation"]() {
          const _0x1ba74b = await _0x11c300._getOpenConversationId();
          return await _0x11c300.getConversation({
            conversationId: _0x1ba74b
          });
        },
        ["_getOpenConversationId"]() {
          const {
              assert$: _0x397ee5,
              message$: _0x45ad4e
            } = _0x442618("79f446"),
            _0xb7921e = globalThis.location.href.match(/messages\/([a-z0-9]+)/);
          return _0x397ee5(1, _0xb7921e, '', {
            sentry: false
          }, true), _0xb7921e[1];
        }
      },
      _0x570831 = _0x2e7e16(0, {
        users: {},
        messages: {},
        messagesCursor: {},
        ["appendBlueskyMessages"](_0x28e0eb, _0x421af4) {
          _0x570831.set("messages", _0x4229b9 => {
            _0x4229b9[_0x28e0eb] || (_0x4229b9[_0x28e0eb] = {});
            for (const _0x2475f7 of _0x421af4) _0x4229b9[_0x28e0eb][_0x2475f7.id] = _0x2475f7;
            return _0x4229b9;
          });
        },
        ["appendBlueskyUsers"](_0xbf984b) {
          _0x570831.set("users", _0xf8a9b9 => {
            for (const _0x549693 in _0xbf984b) _0xf8a9b9[_0x549693] = _0xbf984b[_0x549693];
            return _0xf8a9b9;
          });
        }
      }),
      _0x344f16 = {
        async ["getUsers"]() {
          const {
              assert$: _0x41da7d,
              message$: _0x42b509
            } = _0x442618("f8418b"),
            _0x33174a = _0x570831.get("users"),
            _0x290d2e = _0x344f16.getCurrentUserId();
          return await async function _0x5cb87c() {
            var _0x1c5878, _0x169928;
            const _0x1cff25 = _0x4b7b00.query.client().getQueryCache().getAll().filter(_0xc1ea5a => "profile" === _0xc1ea5a.queryKey[0] && _0xc1ea5a.queryKey[1]);
            for (const _0x1ecb30 of _0x1cff25) {
              if (!(null === (_0x1c5878 = _0x1ecb30.state) || undefined === _0x1c5878 ? undefined : _0x1c5878.data)) continue;
              const _0xa41762 = _0x1ecb30.state.data;
              _0xa41762.did !== _0x290d2e && (_0x33174a[_0x169928 = _0xa41762.did] || (_0x33174a[_0x169928] = _0xa41762));
            }
          }(), await async function _0x1aa3ec() {
            var _0x10c522, _0x3a9b5c;
            const _0x1da1bd = await _0x11c300.getConversations({
              loadAll: false
            });
            for (const _0xe7503 of _0x1da1bd) {
              const _0x1e8379 = null === (_0x10c522 = _0xe7503.members) || undefined === _0x10c522 ? undefined : _0x10c522.find(_0x48fd57 => _0x48fd57.did !== _0x290d2e);
              _0x1e8379 && (_0x33174a[_0x3a9b5c = _0x1e8379.did] || (_0x33174a[_0x3a9b5c] = _0x1e8379));
            }
          }(), _0x570831.set("users", _0x33174a);
        },
        ["getCurrentUser"]() {
          const {
              assert$: _0x343410,
              message$: _0x5db63b
            } = _0x442618("ff5011"),
            _0x36b547 = _0x4b7b00.app.agent(),
            _0x5b4837 = _0x36b547.hasSession ? _0x36b547.session : null;
          return _0x343410(1, _0x5b4837, '', {
            sentry: "veryRare"
          }, true), _0x5b4837;
        },
        getCurrentUserId: () => _0x344f16.getCurrentUser().did,
        async ["_fetchUser"]({
          userId: _0x39d75a,
          userHandle: _0x48f86
        }) {
          const {
            assert$: _0xa86937,
            message$: _0x437cb5
          } = _0x442618("702be4");
          if (_0xa86937(1, _0x39d75a || _0x48f86, '', {
            sentry: false
          }, true), _0xa86937(2, !_0x39d75a || _0x4848bd(_0x39d75a, "string"), '', {
            sentry: false
          }, true), _0xa86937(3, !_0x48f86 || _0x4848bd(_0x48f86, "string"), '', {
            sentry: false
          }, true), _0x39d75a) {
            const _0x54b381 = await _0x4b7b00.app.call("app->bsky->actor->getProfile", {
              actor: _0x39d75a
            }, {
              opts: {}
            });
            return _0xa86937(5, _0x54b381.did, '', {
              sentry: "veryRare",
              networkRelated: true
            }, true), _0x570831.set("users", _0x185cd9 => (_0x185cd9[_0x54b381.did] = _0x54b381, _0x185cd9)), _0x54b381;
          }
          if (_0x48f86) {
            const _0x5c6354 = await _0x4b7b00.app.call("resolveHandle", {
              handle: _0x39d75a || _0x48f86
            });
            return _0xa86937(5, _0x5c6354.did, '', {
              sentry: "veryRare",
              networkRelated: true
            }, true), _0x344f16._fetchUser({
              userId: _0x5c6354.did
            });
          }
        }
      },
      _0x4c1af3 = {
        async ["fetchFollowers"]({
          userId: _0x285850 = _0x344f16.getCurrentUserId(),
          cursor: _0x77ee1b
        }) {
          const {
            assert$: _0x1e7a46,
            message$: _0x39d91a
          } = _0x442618("dcd13f");
          _0x1e7a46(1, _0x285850, '', {
            sentry: false,
            extra: {
              userId: _0x285850
            }
          }, true), _0x1e7a46(2, _0x5b0f73(_0x285850, "string"), '', {
            sentry: false,
            extra: {
              userId: _0x285850
            }
          }, true), _0x1e7a46(3, !_0x77ee1b || _0x5b0f73(_0x77ee1b, "string"), '', {
            sentry: false,
            extra: {
              cursor: _0x77ee1b
            }
          }, true);
          const _0x3ad775 = await _0x4b7b00.app.call("app->bsky->graph->getFollowers", {
            actor: _0x285850,
            cursor: _0x77ee1b,
            limit: 30
          }, {
            opts: {}
          });
          _0x1e7a46(1, _0x3ad775.followers, '', {
            sentry: "veryRare",
            extra: {
              result: _0x3ad775
            }
          }, true);
          const _0x14ad54 = _0x3ad775.followers;
          return _0x570831.dispatch("appendBlueskyUsers", _0x2ab5f1(_0x14ad54, "did")), {
            cursor: _0x3ad775.cursor || null,
            data: _0x14ad54
          };
        },
        async ["fetchFollowing"]({
          userId: _0x1ed135 = _0x344f16.getCurrentUserId(),
          cursor: _0x5ada81
        }) {
          const {
            assert$: _0x52ab20,
            message$: _0x1f0c6f
          } = _0x442618("be7c26");
          _0x52ab20(1, _0x1ed135, '', {
            sentry: false,
            extra: {
              userId: _0x1ed135
            }
          }, true), _0x52ab20(2, _0x5b0f73(_0x1ed135, "string"), '', {
            sentry: false,
            extra: {
              userId: _0x1ed135
            }
          }, true), _0x52ab20(3, !_0x5ada81 || _0x5b0f73(_0x5ada81, "string"), '', {
            sentry: false,
            extra: {
              cursor: _0x5ada81
            }
          }, true);
          const _0x17316f = await _0x4b7b00.app.call("app->bsky->graph->getFollows", {
              actor: _0x1ed135,
              cursor: _0x5ada81,
              limit: 30
            }, {
              opts: {}
            }),
            _0x12e0c8 = _0x52ab20(1, _0x17316f.follows, '', {
              sentry: "veryRare",
              extra: {
                result: _0x17316f
              }
            }, true);
          return _0x570831.dispatch("appendBlueskyUsers", _0x2ab5f1(_0x12e0c8, "did")), {
            cursor: _0x17316f.cursor || null,
            data: _0x12e0c8
          };
        }
      },
      _0x19d65b = {
        async ["paginateMessages"]({
          conversationId: _0x5b4bed
        }) {
          const {
            assert$: _0x56dc37,
            message$: _0x2c221f
          } = _0x442618("b19e8c");
          _0x56dc37(1, _0x5b4bed, '', {
            sentry: false,
            extra: {
              conversationId: _0x5b4bed
            }
          }, true), _0x56dc37(2, _0x5b0f73(_0x5b4bed, "string"), '', {
            sentry: false,
            extra: {
              conversationId: _0x5b4bed
            }
          }, true), _0x570831.get("messages");
          const _0x3d57ae = _0x570831.get("messagesCursor");
          if (_0x5b4bed in _0x3d57ae && null == _0x3d57ae[_0x5b4bed]) return {
            hasMore: false,
            data: []
          };
          const _0x47359a = await _0x4b7b00.app.call("chat->bsky->convo->getMessages", {
              convoId: _0x5b4bed,
              limit: 60,
              cursor: _0x3d57ae[_0x5b4bed] || undefined
            }),
            {
              cursor: _0x294100,
              messages: _0x58e868
            } = _0x47359a;
          return _0x3d57ae[_0x5b4bed] = _0x294100, _0x570831.set("messagesCursor", _0x3d57ae), _0x570831.dispatch("appendBlueskyMessages", _0x5b4bed, _0x58e868), {
            hasMore: null != _0x294100,
            data: _0x58e868
          };
        },
        async ["sendMessage"]({
          conversationId: _0x3a576a,
          message: _0x36a2b1
        }) {
          const {
            assert$: _0x3fa886,
            message$: _0x307252,
            throw$: _0x46e3de
          } = _0x442618("573c6e");
          let _0x5aa65d;
          return _0x3fa886(1, _0x3a576a, '', {
            sentry: false,
            extra: {
              conversationId: _0x3a576a
            }
          }, true), _0x3fa886(2, _0x5b0f73(_0x3a576a, "string"), '', {
            sentry: false,
            extra: {
              conversationId: _0x3a576a
            }
          }, true), _0x3fa886(3, _0x36a2b1, '', {
            sentry: false,
            extra: {
              message: _0x36a2b1
            }
          }, true), _0x3fa886(4, _0x5b0f73(_0x36a2b1, "string"), '', {
            sentry: false,
            extra: {
              message: _0x36a2b1
            }
          }, true), _0x5aa65d = await _0x4b7b00.app.call("chat->bsky->convo->sendMessage", {
            convoId: _0x3a576a,
            message: {
              text: _0x36a2b1
            }
          }), _0x3fa886(7, _0x5aa65d, '', {
            sentry: false,
            networkRelated: true,
            extra: {
              result: _0x5aa65d
            }
          }, true), _0x5aa65d.id && _0x570831.dispatch("appendBlueskyMessages", _0x3a576a, [_0x5aa65d]), await _0x4b7b00.messageBus.poll(), _0x5aa65d;
        },
        async ["processMessages"]({
          conversationId: _0x3a9b06
        }) {
          const {
            assert$: _0x30b0dc,
            message$: _0x2226bf
          } = _0x442618("5a301c");
          _0x30b0dc(1, _0x3a9b06, '', {
            sentry: false,
            extra: {
              conversationId: _0x3a9b06
            }
          }, true), _0x30b0dc(2, _0x5b0f73(_0x3a9b06, "string"), '', {
            sentry: false,
            extra: {
              conversationId: _0x3a9b06
            }
          }, true);
          const _0x2701cc = _0x344f16.getCurrentUser(),
            _0x39f4d0 = await _0x11c300.getConversation({
              conversationId: _0x3a9b06
            }),
            _0x5a76db = await _0x19d65b._getMessages({
              conversation: _0x39f4d0
            }),
            _0x20d489 = new globalThis.Array(_0x5a76db.length);
          for (let _0x16bc59 = 0; _0x16bc59 < _0x5a76db.length; _0x16bc59++) {
            const _0x407086 = _0x5a76db[_0x16bc59];
            _0x20d489[_0x16bc59] = await _0x19d65b._processMessage({
              ir: await _0x19d65b._processMessageIr({
                message: _0x407086,
                conversation: _0x39f4d0,
                currentUser: _0x2701cc
              })
            });
          }
          return _0x5a8493(_0x3c026c(_0x20d489, "timestamp"));
        },
        _processMessageIr: async ({
          message: _0x2efae3,
          conversation: _0x3eb7b5,
          currentUser: _0x136149
        }) => (_0x136149 || (_0x136149 = await _0x344f16.getCurrentUser()), {
          message: _0x2efae3,
          conversation: _0x3eb7b5,
          currentUser: _0x136149
        }),
        async ["_processMessage"]({
          ir: _0x28651a
        }) {
          var _0x4005ca, _0x303080, _0x5f5c5e, _0x4db3ab;
          const {
              message: _0x35d0d4,
              conversation: _0x379dd6,
              currentUser: _0x8e2142
            } = _0x28651a,
            _0x1ffa7c = (null === (_0x4005ca = _0x35d0d4.sender) || undefined === _0x4005ca ? undefined : _0x4005ca.did) !== _0x8e2142.did,
            _0x54c2cd = "app.bsky.feed.post" === (null === (_0x4db3ab = null === (_0x5f5c5e = null === (_0x303080 = _0x35d0d4.embed) || undefined === _0x303080 ? undefined : _0x303080.record) || undefined === _0x5f5c5e ? undefined : _0x5f5c5e.value) || undefined === _0x4db3ab ? undefined : _0x4db3ab.$type);
          return _0x5a8493(function _0x116ddf(_0x3a1cbf) {
            _0x3a1cbf.ogMsg = _0x3a1cbf.msg;
            let _0x547c33 = _0x3a1cbf.msg || '';
            return _0x3a1cbf.isSharedPost && (_0x547c33 = "[shared-post] " + _0x547c33), _0x547c33 = _0x547c33.trim(), _0x3a1cbf.msg = _0x547c33, _0x3a1cbf;
          }({
            id: _0x35d0d4.id,
            msg: _0x35d0d4.text,
            timestamp: new globalThis.Date(_0x35d0d4.sentAt).getTime() / 1000,
            isIncoming: _0x1ffa7c,
            isSharedPost: _0x54c2cd
          }));
        },
        async ["_getMessages"]({
          conversationId: _0x4eeb98,
          conversation: _0x5d8efd
        }) {
          const {
            assert$: _0x2a1275,
            message$: _0x29a561
          } = _0x442618("b19e8c");
          _0x2a1275(1, _0x4eeb98 || _0x5d8efd, '', {
            sentry: false,
            extra: {
              conversationId: _0x4eeb98,
              conversation: _0x5d8efd
            }
          }, true), _0x2a1275(2, !_0x4eeb98 || _0x5b0f73(_0x4eeb98, "string"), '', {
            sentry: false,
            extra: {
              conversationId: _0x4eeb98
            }
          }, true), _0x2a1275(3, !_0x5d8efd || _0x5b0f73(_0x5d8efd, "object"), '', {
            sentry: false,
            extra: {
              conversation: _0x5d8efd
            }
          }, true), _0x5d8efd || (_0x5d8efd = await _0x11c300.getConversation({
            conversationId: _0x4eeb98
          }));
          const _0x1f7036 = _0x570831.get("messages");
          return _0x5d8efd && (_0x1f7036[_0x4eeb98 = _0x5d8efd.id] || (_0x1f7036[_0x4eeb98] = {}), _0x5d8efd.lastMessage && (_0x1f7036[_0x4eeb98][_0x5d8efd.lastMessage.id] = _0x5d8efd.lastMessage)), globalThis.Object.values(_0x1f7036[_0x4eeb98] || {});
        },
        _getOpenMessages: () => _0x19d65b._getMessages({
          conversationId: _0x11c300._getOpenConversationId()
        }),
        _processOpenMessages: () => _0x19d65b.processMessages({
          conversationId: _0x11c300._getOpenConversationId()
        }),
        _paginateOpenMessages: () => _0x19d65b.paginateMessages({
          conversationId: _0x11c300._getOpenConversationId()
        })
      };
    let _0xd43d85 = false;
    const _0x3d4fec = {
        init: async () => await async function _0xfe763f() {
          globalThis.window.location.href.toLowerCase().includes("bsky.app") && (_0xd43d85 || (_0xd43d85 = true, await _0x18d5ed(() => _0x3d4fec.hasLoaded()), await _0x3d4fec.initFirehose()));
        }(),
        async ["hasLoaded"]() {
          var _0x1922db, _0x3c0b72;
          try {
            const _0x38fb8b = !!_0x4b7b00.app.agent(),
              _0x27584a = !!(await _0x344f16.getCurrentUser()),
              _0x5ba907 = "success" === (null === (_0x3c0b72 = null === (_0x1922db = _0x4b7b00.query.client().getQueryCache().getAll().find(_0x1c9203 => _0x1c9203.queryKey.includes("convo-list") && _0x1c9203.queryKey.includes("accepted"))) || undefined === _0x1922db ? undefined : _0x1922db.state) || undefined === _0x3c0b72 ? undefined : _0x3c0b72.status);
            return _0x38fb8b && _0x27584a && _0x5ba907;
          } catch (_0xead5ce) {
            return false;
          }
        },
        ["initFirehose"]() {
          const {
              assert$: _0x4e829e,
              message$: _0x170331
            } = _0x442618("f8e7e8"),
            _0x480a72 = _0x4b7b00.atproto.get("ChatBskyConvoDefs");
          _0x4e829e(1, _0x480a72.isLogCreateMessage, '', {
            sentry: "veryRare"
          }, true), _0x4b7b00.messageBus.addListener(_0x1e2641 => {
            var _0x27bec3;
            "logs" === _0x1e2641.type && (null === (_0x27bec3 = _0x1e2641.logs) || undefined === _0x27bec3 || _0x27bec3.forEach(_0x659517 => {
              if (_0x480a72.isLogCreateMessage(_0x659517)) {
                if (!_0x659517.convoId) return globalThis.console.log(_0x170331(2, '', {
                  sentry: false,
                  extra: {
                    log: _0x659517
                  }
                }, true));
                if (!_0x659517.message) return globalThis.console.log(_0x170331(3, '', {
                  sentry: false,
                  extra: {
                    log: _0x659517
                  }
                }, true));
                _0x570831.dispatch("appendBlueskyMessages", _0x659517.convoId, [_0x659517.message]);
              }
            }));
          });
        }
      },
      _0x374219 = {
        async ["isRecipientPresent"]({
          conversationId: _0x372462
        }) {
          const {
            assert$: _0x5da1bd,
            message$: _0x170196
          } = _0x442618("8a3b16");
          _0x5da1bd(1, null != _0x372462, '', {
            sentry: false
          }, true), _0x5da1bd(2, _0x372462, '', {
            sentry: false
          }, true), _0x5da1bd(3, _0x5b0f73(_0x372462, "string"), '', {
            sentry: false
          }, true);
          const _0x477c60 = await _0x374219._getLastMessageTimestampSec({
            conversationId: _0x372462
          });
          if (_0x477c60) {
            if (globalThis.Date.now() / 1000 - _0x477c60 < 10) return true;
          }
          return false;
        },
        async ["_getLastMessageTimestampSec"]({
          conversationId: _0x510dec
        }) {
          const {
            assert$: _0x1e9a09,
            message$: _0x47eaa0
          } = _0x442618("4a9567");
          _0x1e9a09(1, null != _0x510dec, '', {
            sentry: false
          }, true), _0x1e9a09(2, _0x510dec, '', {
            sentry: false
          }, true), _0x1e9a09(3, _0x5b0f73(_0x510dec, "string"), '', {
            sentry: false
          }, true);
          const _0x527d51 = await _0x19d65b.processMessages({
            conversationId: _0x510dec
          });
          for (let _0xb0efea = _0x527d51.length - 1; _0xb0efea >= 0; _0xb0efea--) {
            const _0x399e97 = _0x527d51[_0xb0efea];
            if (_0x399e97.isIncoming) return _0x399e97.timestamp;
          }
          return null;
        }
      },
      _0x59d57b = {
        all: "all",
        none: "none",
        following: "following"
      },
      _0x4e94da = (globalThis.Object.keys(_0x59d57b), {
        async ["setIncomingMessagesPolicy"]({
          allow: _0x3864b4
        }) {
          const {
            assert$: _0x37f3c8,
            message$: _0x11f9ed
          } = _0x442618("dcae69");
          _0x37f3c8(1, _0x3864b4, '', {
            sentry: false,
            extra: {
              allow: _0x3864b4
            }
          }, true), _0x37f3c8(2, _0x3864b4 in _0x59d57b, '', {
            sentry: false,
            extra: {
              allow: _0x3864b4
            }
          }, true);
          const _0x555f58 = await _0x344f16.getCurrentUserId(),
            _0x8960da = await _0x4b7b00.app.call("com->atproto->repo->putRecord", {
              repo: _0x555f58,
              collection: "chat.bsky.actor.declaration",
              rkey: "self",
              record: {
                $type: "chat.bsky.actor.declaration",
                allowIncoming: _0x3864b4
              }
            }, {
              opts: null
            });
          return _0x37f3c8(3, "valid" === _0x8960da.validationStatus, '', {
            sentry: "veryRare",
            networkRelated: true,
            extra: {
              result: _0x8960da
            }
          }, true), true;
        }
      }),
      _0x17d196 = _0x491d77(16),
      _0x3a81ba = _0x491d77(16),
      _0x2d4c82 = _0x491d77(16),
      _0x5379e8 = _0x491d77(16),
      _0x394117 = _0x491d77(16),
      _0x400de1 = _0x491d77(16),
      _0x1c060d = _0x491d77(16),
      _0x4a5912 = _0x491d77(16),
      _0x436b7f = _0x2e7e16(0, {
        [_0x2d4c82]: false,
        [_0x394117]: {},
        [_0x400de1]: {},
        [_0x1c060d]: {},
        [_0x4a5912]: {},
        [_0x5379e8]: {}
      }),
      _0x203bab = {
        getCurrentUser: () => _0x53c583.application.initialData("user"),
        getUsers: async () => (await _0x2b32f1.getConversations({})).reduce((_0x5a107d, _0x3136bc) => {
          var _0x3089e9, _0x4c72df;
          return _0x5a107d[null === (_0x3089e9 = _0x3136bc.withUsers) || undefined === _0x3089e9 ? undefined : _0x3089e9[0].id] = null === (_0x4c72df = _0x3136bc.withUsers) || undefined === _0x4c72df ? undefined : _0x4c72df[0], _0x5a107d;
        }, {})
      },
      _0x53c583 = {
        store: {
          getVueApps: () => globalThis.Array.from(globalThis.document.querySelectorAll("*")).filter(_0x572753 => null == _0x572753 ? undefined : _0x572753.__vue_app__),
          ["getConversations"]() {
            var _0x278705;
            if (_0x436b7f.get(_0x17d196)) return null !== (_0x278705 = _0x436b7f.get(_0x17d196)) && undefined !== _0x278705 ? _0x278705 : {};
            const _0x43e786 = _0x53c583._searchVueKey("conversations")[0].pairs.find(_0x349c66 => _0x349c66.path.includes("globalProperties") && !_0x349c66.path.includes("_rawValue")).value;
            return _0x436b7f.set(_0x17d196, _0x43e786), null != _0x43e786 ? _0x43e786 : {};
          },
          ["commitConversationUpdates"](_0x2ef6fb) {
            let _0x2a7172 = null;
            if (_0x436b7f.get(_0x3a81ba)) _0x2a7172 = _0x436b7f.get(_0x3a81ba);else {
              _0x2a7172 = _0x53c583._searchVueKey("setConversations")[0].pairs[0].value, _0x436b7f.set(_0x3a81ba, _0x2a7172, false);
            }
            return _0x2a7172(_0x2ef6fb);
          }
        },
        application: {
          ["initialData"](_0x167f04) {
            const {
                assert$: _0x1fbe01,
                message$: _0xeb69d4
              } = _0x442618("c7da52"),
              _0x2d62ed = globalThis.Object.values(globalThis.window).find(_0x18763c => (null == _0x18763c ? undefined : _0x18763c.user) && (null == _0x18763c ? undefined : _0x18763c.features) && (null == _0x18763c ? undefined : _0x18763c.application));
            return _0x1fbe01(1, _0x2d62ed, '', {
              sentry: "rare"
            }, true), _0x229767(_0x167f04, _0x2d62ed);
          }
        },
        modules: {
          ["links"]() {
            const _0x478537 = globalThis.document.querySelectorAll("link[rel=\"modulepreload\"]");
            return globalThis.Array.from(_0x478537).map(_0x67d0cd => _0x67d0cd.href);
          },
          async ["import"](_0x47e3a8) {
            const _0x2d544d = _0x53c583.modules.links().find(_0x610673 => _0x610673.includes(_0x47e3a8));
            return await import('' + _0x2d544d);
          }
        },
        request: {
          csrfToken: () => _0x53c583.application.initialData("application->formAuthenticityToken"),
          async ["generateUrl"](_0x15ab69, ..._0x374553) {
            const {
                assert$: _0x26d910,
                message$: _0x52b75f
              } = _0x442618("250ab2"),
              _0x5ed246 = (0, _0x3a9804(await _0x53c583.modules["import"]("tags_input"), {
                assert: _0x52b75f(1, '', {
                  sentry: "rare"
                }, true),
                cacheKey: "fetlife->api->urlGenerators",
                propType: "object",
                predicate: _0x178264 => _0x1ec1be(_0x178264, ["inboxLoadMorePath", "markAsReadConversationPath"])
              })[_0x15ab69])(..._0x374553);
            return _0x26d910(2, _0x5ed246, '', {
              sentry: "rare"
            }, true), _0x26d910(3, _0x4848bd(_0x5ed246, "string"), '', {
              sentry: "rare"
            }, true), _0x5ed246;
          },
          ["generateHeaders"]({
            contentType: _0x4a1d3c,
            includeToken: _0x438c71
          }) {
            const _0x262e3c = {
              Accept: "application/json"
            };
            return _0x438c71 && (_0x262e3c["X-CSRF-Token"] = _0x53c583.request.csrfToken()), "json" === _0x4a1d3c && (_0x262e3c["Content-Type"] = "application/json"), _0x262e3c;
          }
        },
        websocket: {
          emit: async (_0x127c5a, _0x3b803b, _0xf8d169) => !!_0x436b7f.get(_0x4a5912)[_0x127c5a] && (await _0x436b7f.get(_0x4a5912)[_0x127c5a].perform(_0x3b803b, _0xf8d169), true),
          async ["initialize"](_0x4c7540, _0x4b9cc3 = {}, _0x150101 = {}) {
            var _0x36a34b;
            const {
                assert$: _0x5be07a,
                message$: _0x5cd00c
              } = _0x442618("3192af"),
              _0x5a082e = null === (_0x36a34b = _0x436b7f.get(_0x4a5912)) || undefined === _0x36a34b ? undefined : _0x36a34b[_0x4c7540];
            if (_0x5a082e) return _0x5a082e;
            const _0x36511f = await _0x53c583.modules["import"]("tags_input"),
              _0x3795d1 = globalThis.Object.values(_0x36511f).find(_0x454d55 => _0x4848bd(_0x454d55, "object") && _0x1ec1be(_0x454d55, ["initialize", "initializeNotifications"]));
            _0x5be07a(1, _0x3795d1, '', {
              sentry: "rare"
            }, true);
            const _0x194e25 = _0x3795d1.initialize();
            return await new globalThis.Promise((_0x1dc328, _0x2957ab) => {
              const _0x31ec69 = globalThis.setTimeout(() => {
                  _0x2957ab(new Error("timeout"));
                }, 10000),
                _0x572632 = _0x194e25.subscriptions.subscriptions.find(_0x3578fd => {
                  var _0x2d2b31;
                  return (null === (_0x2d2b31 = JSON.parse(_0x3578fd.identifier)) || undefined === _0x2d2b31 ? undefined : _0x2d2b31.channel) === _0x4c7540;
                }),
                _0x29ea41 = _0x572632 || _0x194e25.subscriptions.create({
                  channel: _0x4c7540,
                  ..._0x4b9cc3
                });
              if (_0x29ea41.patched && !_0x150101.waitForConnection) return _0x1dc328(_0x29ea41);
              _0x29ea41.patched = true;
              const _0x276b07 = _0x29ea41.received;
              _0x29ea41.received = _0xd4763e => {
                (_0x500adb => {
                  const _0x29f1ff = _0x203bab.getCurrentUser().id;
                  if ("typing" !== _0x500adb.type || (null == _0x500adb ? undefined : _0x500adb.user_id) == _0x29f1ff) return;
                  const _0x51045d = _0x500adb.conversation_id,
                    _0x417e5a = _0x500adb.state;
                  _0x436b7f.get(_0x400de1)[_0x51045d] = _0x417e5a;
                })(_0xd4763e), (_0xf28f1a => {
                  var _0x1e6b38, _0x13a9ec, _0x421f92, _0x3fa4fe;
                  if ("message" !== _0xf28f1a.type) return;
                  const _0x1ed421 = null !== (_0x421f92 = null === (_0x13a9ec = null === (_0x1e6b38 = null == _0xf28f1a ? undefined : _0xf28f1a.conversation) || undefined === _0x1e6b38 ? undefined : _0x1e6b38.messages) || undefined === _0x13a9ec ? undefined : _0x13a9ec[0]) && undefined !== _0x421f92 ? _0x421f92 : _0xf28f1a.message,
                    _0x219036 = _0x1ed421.conversation_id;
                  ((_0x3fa4fe = _0x436b7f.get(_0x394117))[_0x219036] || (_0x3fa4fe[_0x219036] = {}))[_0x1ed421.id] = _0x5bcb1c(_0x1ed421);
                })(_0xd4763e), null == _0x276b07 || _0x276b07(_0xd4763e);
              }, _0x29ea41.connected = () => {
                _0x1dc328(_0x29ea41);
              }, _0x436b7f.get(_0x4a5912)[_0x4c7540] = _0x29ea41, _0x150101.waitForConnection || _0x1dc328(_0x29ea41), globalThis.clearTimeout(_0x31ec69);
            });
          },
          ["destroy"](_0x3c8760) {
            const _0x43d597 = _0x436b7f.get(_0x4a5912);
            return !!_0x43d597[_0x3c8760] && (_0x43d597[_0x3c8760].unsubscribe(), delete _0x43d597[_0x3c8760], true);
          }
        },
        _searchVue: (_0x2a2c38, _0x5321f5 = 20) => {
          const _0x37c241 = [_0x53c583.store.getVueApps()[0]],
            _0x289866 = _0x37c241.map((_0x124865, _0x5b564a) => {
              const _0x30edad = ((_0x3a87a4, _0x105514) => {
                if (!_0x3a87a4 || "object" != typeof _0x3a87a4) return [];
                const _0x514b58 = new Set(),
                  _0x1ad19f = [{
                    currentObj: _0x3a87a4,
                    path: '',
                    depth: 0
                  }],
                  _0x4a2d3a = [];
                for (; _0x1ad19f.length > 0;) {
                  const {
                    currentObj: _0x47fece,
                    path: _0x4bd0d0,
                    depth: _0x2a61fe
                  } = _0x1ad19f.shift();
                  if (!(_0x2a61fe > _0x5321f5 || _0x514b58.has(_0x47fece))) {
                    _0x514b58.add(_0x47fece);
                    for (const _0x44fab9 in _0x47fece) try {
                      const _0xd6c7cc = _0x47fece[_0x44fab9],
                        _0x43c6c8 = _0x4bd0d0 ? _0x4bd0d0 + "." + _0x44fab9 : _0x44fab9;
                      "string" == typeof _0xd6c7cc && _0xd6c7cc.includes(_0x105514) ? _0x4a2d3a.push(_0x43c6c8) : "object" == typeof _0xd6c7cc && null !== _0xd6c7cc && _0x1ad19f.push({
                        currentObj: _0xd6c7cc,
                        path: _0x43c6c8,
                        depth: _0x2a61fe + 1
                      });
                    } catch (_0x40e566) {}
                  }
                }
                return _0x4a2d3a;
              })(_0x124865.__vue_app__, _0x2a2c38);
              return {
                appIndex: _0x5b564a,
                paths: _0x30edad
              };
            });
          return _0x289866;
        },
        _searchVueKey: (_0x4b4374, _0xe92cf0 = 20) => {
          const _0xd88f = [_0x53c583.store.getVueApps()[0]],
            _0x1558da = _0xd88f.map((_0x3d3114, _0x3f9555) => {
              const _0x3d4ef3 = ((_0x1a5b4d, _0x2c7c5f, _0x2c742a = 20) => {
                if (!_0x1a5b4d || "object" != typeof _0x1a5b4d) return [];
                const _0x5afb9 = new Set(),
                  _0x1d5722 = [{
                    currentObj: _0x1a5b4d,
                    path: '',
                    depth: 0
                  }],
                  _0x27ba62 = [];
                for (; _0x1d5722.length > 0;) {
                  const {
                    currentObj: _0x5499eb,
                    path: _0x4d84a0,
                    depth: _0x422c77
                  } = _0x1d5722.shift();
                  if (!(_0x422c77 > _0x2c742a || _0x5afb9.has(_0x5499eb))) {
                    _0x5afb9.add(_0x5499eb);
                    for (const _0x44bd0d in _0x5499eb) try {
                      const _0x3f4981 = _0x5499eb[_0x44bd0d],
                        _0x4e48c5 = _0x4d84a0 ? _0x4d84a0 + "." + _0x44bd0d : _0x44bd0d;
                      _0x44bd0d.includes(_0x2c7c5f) && _0x27ba62.push({
                        path: _0x4e48c5,
                        value: _0x3f4981
                      }), "object" == typeof _0x3f4981 && null !== _0x3f4981 && _0x1d5722.push({
                        currentObj: _0x3f4981,
                        path: _0x4e48c5,
                        depth: _0x422c77 + 1
                      });
                    } catch (_0x5eb458) {}
                  }
                }
                return _0x27ba62;
              })(_0x3d3114.__vue_app__, _0x4b4374, _0xe92cf0);
              return {
                appIndex: _0x3f9555,
                pairs: _0x3d4ef3
              };
            });
          return _0x1558da;
        }
      },
      _0x5d6d4e = {},
      _0x4f894d = _0x491d77(16),
      _0x2b32f1 = {
        async ["getConversations"]({
          loadAll: _0x54a679 = false
        } = {}) {
          if (!_0x5d6d4e[_0x4f894d] && _0x54a679) for (;;) {
            const {
              hasMore: _0x53f845
            } = await _0x2b32f1._fetchConversations({
              filter: "inbox",
              offset: _0x2b32f1._getFolderConversations({
                filter: "inbox"
              }).length
            });
            if (!_0x53f845) {
              _0x5d6d4e[_0x4f894d] = true;
              break;
            }
            await _0x514276(1000);
          }
          return _0x2b32f1._getFolderConversations({
            filter: "inbox"
          }).filter(_0xd105f1 => !_0xd105f1.isArchived && !_0xd105f1.isGroupChat).sort((_0x5ee1ac, _0x14e5cb) => _0x5ee1ac.updatedAt - _0x14e5cb.updatedAt);
        },
        async ["fetchConversationRequests"]({
          cursor: _0x62693d = 0
        } = {}) {
          const {
            assert$: _0x2a5974,
            message$: _0x44b51e
          } = _0x442618("50ddcc");
          _0x2a5974(1, _0x4848bd(_0x62693d, "number"), '', {
            sentry: false
          }, true), _0x2a5974(2, _0x62693d >= 0, '', {
            sentry: false
          }, true);
          const {
            hasMore: _0x1236ef,
            data: _0x50e4af
          } = await _0x2b32f1._fetchConversations({
            filter: "requests",
            offset: _0x62693d,
            updateStore: false
          });
          return {
            hasMore: _0x1236ef,
            cursor: _0x1236ef ? _0x62693d + _0x50e4af.length : null,
            data: _0x50e4af.reverse()
          };
        },
        async ["fetchConversation"]({
          conversationId: _0x2c00fd
        }) {
          const {
            assert$: _0x39eb86,
            message$: _0x1a8b1c
          } = _0x442618("dce7d6");
          _0x39eb86(1, _0x2c00fd, '', {
            sentry: false
          }, true), _0x39eb86(2, _0x4848bd(_0x2c00fd, "string", "number"), '', {
            sentry: false
          }, true);
          const _0x268c82 = await _0x53c583.request.generateUrl("conversationPath", _0x2c00fd),
            _0x4b82b1 = await globalThis.fetch(_0x268c82, {
              method: "GET",
              headers: _0x53c583.request.generateHeaders({
                contentType: "json"
              })
            });
          if (404 === _0x4b82b1.status) return null;
          const _0x3afb48 = await _0x4b82b1.json();
          return _0x39eb86(3, _0x1ec1be(_0x3afb48, ["conversation"]), '', {
            sentry: "rare"
          }, true), _0x5bcb1c(_0x3afb48.conversation);
        },
        async ["deleteConversation"]({
          conversationId: _0x591a88
        }) {
          const {
            assert$: _0x1d2dde,
            message$: _0x25ef68,
            throw$: _0xaab12d
          } = _0x442618("8b48c5");
          _0x1d2dde(1, _0x591a88, '', {
            sentry: false
          }, true), _0x1d2dde(2, _0x4848bd(_0x591a88, "string", "number"), '', {
            sentry: false
          }, true);
          const _0xa0e060 = await _0x53c583.request.generateUrl("conversationPath", _0x591a88),
            _0x3d42d8 = await globalThis.fetch(_0xa0e060, {
              method: "DELETE",
              body: JSON.stringify({
                authenticity_token: _0x53c583.request.csrfToken()
              }),
              headers: _0x53c583.request.generateHeaders({
                contentType: "json"
              })
            });
          _0x1d2dde(3, 200 === _0x3d42d8.status, '', {
            sentry: "rare",
            networkResponse: _0x3d42d8
          }, true);
        },
        async ["markConversationAsRead"]({
          conversationId: _0x417c9a
        }) {
          const {
            assert$: _0x34c5c5,
            message$: _0x194b66
          } = _0x442618("713648");
          _0x34c5c5(1, _0x417c9a, '', {
            sentry: false
          }, true), _0x34c5c5(2, _0x4848bd(_0x417c9a, "string", "number"), '', {
            sentry: false
          }, true);
          const _0x2ee486 = _0x2b32f1._getConversation({
            conversationId: _0x417c9a
          });
          if (!_0x2ee486) return false;
          if (!_0x2ee486.isNew) return false;
          if (!_0x2ee486.lastMessage) return false;
          const _0x22fb39 = _0x2ee486.lastMessage.id,
            _0x2e8807 = await _0x53c583.request.generateUrl("markAsReadConversationPath", _0x417c9a),
            _0x2251c6 = await globalThis.fetch(_0x2e8807, {
              method: "POST",
              body: JSON.stringify({
                authenticity_token: _0x53c583.request.csrfToken(),
                message_id: _0x22fb39
              }),
              headers: _0x53c583.request.generateHeaders({
                contentType: "json"
              })
            });
          await _0x2251c6.json(), _0x2ee486.isNew = false, await _0x53c583.store.commitConversationUpdates([_0x2ee486]);
        },
        _getConversation: ({
          conversationId: _0x2eb34a
        }) => _0x53c583.store.getConversations()[_0x2eb34a],
        _getFolderConversations: ({
          filter: _0x5d5d83
        }) => globalThis.Object.values(_0x53c583.store.getConversations()).filter(_0x1fdb64 => _0x1fdb64.folder === _0x5d5d83),
        async ["_fetchConversations"]({
          filter: _0x2a1fe3,
          offset: _0x8d0bc,
          updateStore: _0x307a98 = true
        }) {
          const {
              assert$: _0x5e1206,
              message$: _0x157f5c
            } = _0x442618("85cc86"),
            _0x4ec56f = await _0x53c583.request.generateUrl("inboxLoadMorePath", {
              offset: _0x8d0bc,
              filter: _0x2a1fe3,
              ["with"]: null
            }),
            _0x426e42 = await globalThis.fetch(_0x4ec56f, {
              method: "GET",
              headers: _0x53c583.request.generateHeaders({
                contentType: "json"
              })
            }),
            _0x1417c7 = await _0x426e42.json();
          _0x5e1206(1, _0x1ec1be(_0x1417c7, ["conversations", "no_more"]), '', {
            sentry: "rare"
          }, true);
          const _0x3c575e = _0x1417c7.conversations.map(_0x5bcb1c),
            _0x6c9ef1 = !_0x1417c7.no_more;
          return _0x307a98 && (await _0x53c583.store.commitConversationUpdates([..._0x3c575e])), {
            hasMore: _0x6c9ef1,
            data: _0x3c575e
          };
        },
        ["_getOpenConversation"]() {
          const _0x1d8dda = _0x2b32f1._getOpenConversationId();
          return _0x2b32f1._getConversation({
            conversationId: _0x1d8dda
          });
        },
        ["_getOpenConversationId"]() {
          const _0x375ad1 = globalThis.window.location.pathname.split("/");
          return _0x375ad1[_0x375ad1.length - 1];
        }
      },
      _0x459e0e = {
        async ["sendMessage"]({
          conversationId: _0x22fac3,
          message: _0x367d49,
          blob: _0x203786,
          blobExtension: _0x3622df
        }) {
          const {
            assert$: _0x36a73e,
            message$: _0x229a74
          } = _0x442618("97fb63");
          _0x36a73e(1, _0x22fac3, '', {
            sentry: false
          }, true), _0x36a73e(2, _0x4848bd(_0x22fac3, "string", "number"), '', {
            sentry: false
          }, true), _0x36a73e(3, _0x367d49 || _0x203786, '', {
            sentry: false
          }, true), _0x36a73e(4, !(_0x203786 && _0x367d49), '', {
            sentry: false
          }, true), _0x36a73e(5, !_0x367d49 || _0x4848bd(_0x367d49, "string"), '', {
            sentry: false
          }, true), _0x36a73e(6, !_0x203786 || _0x4848bd(_0x203786, "blob"), '', {
            sentry: false
          }, true), _0x36a73e(7, !_0x203786 || _0x3622df, '', {
            sentry: false
          }, true), _0x36a73e(8, !_0x203786 || _0x4848bd(_0x3622df, "string"), '', {
            sentry: false
          }, true);
          const _0x7af9af = new FormData();
          if (_0x7af9af.append("body", _0x367d49), _0x7af9af.append("responsive", "true"), _0x203786) {
            const _0x2836f7 = new File([_0x203786], _0x491d77(8) + "." + _0x3622df, {
              type: _0x203786.type
            });
            _0x7af9af.append("attachment[type]", _0x2836f7.type), _0x7af9af.append("attachment[file]", _0x2836f7);
          }
          const _0x164871 = await _0x53c583.request.generateUrl("conversationPath", _0x22fac3),
            _0x30a509 = await globalThis.fetch(_0x164871, {
              method: "PUT",
              body: _0x7af9af,
              headers: _0x53c583.request.generateHeaders({
                includeToken: true
              })
            });
          return await _0x30a509.json();
        },
        async ["paginateMessages"]({
          conversationId: _0x4cdf9a
        }) {
          var _0x530fec;
          const {
            assert$: _0x1e57b1,
            message$: _0x983e84
          } = _0x442618("97fb63");
          if (_0x1e57b1(1, _0x4cdf9a, '', {
            sentry: false
          }, true), _0x1e57b1(2, _0x4848bd(_0x4cdf9a, "string", "number"), '', {
            sentry: false
          }, true), await _0x53c583.websocket.initialize("ChatChannel"), _0x436b7f.get(_0x5379e8)[_0x4cdf9a]) return {
            hasMore: false
          };
          const _0x55076a = _0x2b32f1._getConversation({
              conversationId: _0x4cdf9a
            }),
            _0x19dca4 = _0x459e0e._getMessages({
              conversationId: _0x4cdf9a
            });
          if (!(null == _0x55076a ? undefined : _0x55076a.lastMessage)) return {
            hasMore: false
          };
          const _0x46a010 = _0x19dca4[0],
            _0x332471 = null == _0x46a010 ? undefined : _0x46a010.createdAt,
            _0x195340 = await _0x53c583.request.generateUrl("olderConversationPath", _0x4cdf9a),
            _0x5e9230 = await globalThis.fetch(_0x195340, {
              method: "POST",
              body: JSON.stringify({
                authenticity_token: _0x53c583.request.csrfToken(),
                oldest_id: null,
                oldest_created_at: _0x19dca4.length <= 1 ? new globalThis.Date().getTime() : _0x332471
              }),
              headers: _0x53c583.request.generateHeaders({
                contentType: "json"
              })
            }),
            {
              no_more: _0xb168a8,
              messages: _0x1a2096
            } = await _0x5e9230.json(),
            _0x541c61 = !_0xb168a8,
            _0x16d4fa = _0x1a2096.map(_0x8bfabd => _0x5bcb1c(_0x8bfabd)),
            _0x302e93 = (_0x530fec = _0x436b7f.get(_0x394117))[_0x4cdf9a] || (_0x530fec[_0x4cdf9a] = {});
          for (const _0x1b66df of _0x16d4fa) _0x302e93[_0x1b66df.id] = _0x1b66df;
          return _0x541c61 || (_0x436b7f.get(_0x5379e8)[_0x4cdf9a] = true), {
            hasMore: _0x541c61
          };
        },
        async ["processMessages"]({
          conversationId: _0x28345e
        }) {
          const {
            assert$: _0x37059a,
            message$: _0x3a3983
          } = _0x442618("080522");
          _0x37059a(1, _0x28345e, '', {
            sentry: false
          }, true), _0x37059a(2, _0x4848bd(_0x28345e, "string", "number"), '', {
            sentry: false
          }, true);
          const _0x55e958 = _0x2b32f1._getConversation({
              conversationId: _0x28345e
            }),
            _0x226009 = _0x459e0e._getMessages({
              conversationId: _0x28345e
            }),
            _0x36eb58 = _0x203bab.getCurrentUser();
          return _0x226009.map(_0x29c6fd => _0x459e0e._processMessage({
            ir: _0x459e0e._processMessageIr({
              message: _0x29c6fd,
              author: _0x29c6fd.author,
              currentUser: _0x36eb58,
              conversation: _0x55e958
            })
          }));
        },
        ["_processMessage"]({
          ir: _0x9e8396
        }) {
          var _0x226a9b;
          const {
              message: _0x4e427a,
              author: _0xbe029c,
              currentUser: _0x1701a3,
              conversation: _0x2843c3
            } = _0x9e8396,
            _0x15f29d = _0xbe029c.id !== _0x1701a3.id,
            _0x5a3063 = _0x4e427a.attachments.some(_0x1e5d8d => "picture" === _0x1e5d8d.type),
            _0x4badd8 = _0x4e427a.attachments.some(_0x10c16f => "post" === _0x10c16f.type),
            _0x3a3a2a = _0x4e427a.attachments.some(_0x3a6559 => "video" === _0x3a6559.type),
            _0x430b21 = !_0x5a3063 && !_0x3a3a2a && !_0x4badd8 && _0x4e427a.excerpt;
          return function _0x56222f(_0x179541) {
            _0x179541.ogMsg = _0x179541.msg;
            let _0x554660 = _0x179541.msg || '';
            return _0x179541.isImage ? _0x554660 = "[photo]" : _0x179541.isVideo ? _0x554660 = "[video]" : _0x179541.isPost && (_0x554660 = "[post] " + _0x554660), _0x554660 = _0x554660.trim(), _0x179541.msg = _0x554660, _0x179541;
          }(_0x5a8493({
            id: null === (_0x226a9b = _0x4e427a.id) || undefined === _0x226a9b ? undefined : _0x226a9b.toString(),
            timestamp: _0x4e427a.createdAt,
            msg: _0x430b21,
            isIncoming: _0x15f29d,
            isImage: _0x5a3063,
            isVideo: _0x3a3a2a,
            isPost: _0x4badd8,
            _ir: _0x9e8396
          }));
        },
        _processMessageIr: ({
          message: _0x4339d8,
          author: _0x42c547,
          currentUser: _0x534c1b,
          conversation: _0xd2b5fa
        }) => (_0x42c547 || (_0x42c547 = _0x4339d8.author), _0x534c1b || (_0x534c1b = _0x203bab.getCurrentUser()), _0xd2b5fa || (_0xd2b5fa = _0x2b32f1._getConversation({
          conversationId: _0x4339d8.conversationId
        })), {
          message: _0x4339d8,
          author: _0x42c547,
          currentUser: _0x534c1b,
          conversation: _0xd2b5fa
        }),
        _processOpenMessages: () => _0x459e0e.processMessages({
          conversationId: _0x2b32f1._getOpenConversationId()
        }),
        ["_getMessages"]({
          conversationId: _0x2c93d5
        }) {
          var _0x62ef18;
          const {
            assert$: _0xc7ec99,
            message$: _0x59e6f5
          } = _0x442618("97fb63");
          _0xc7ec99(1, _0x2c93d5, '', {
            sentry: false
          }, true), _0xc7ec99(2, _0x4848bd(_0x2c93d5, "string", "number"), '', {
            sentry: false
          }, true);
          const _0x323e63 = _0x436b7f.get(_0x394117),
            _0x228ff0 = _0x2b32f1._getConversation({
              conversationId: _0x2c93d5
            }),
            _0x45af26 = _0x323e63[_0x2c93d5] || (_0x323e63[_0x2c93d5] = {});
          if (null === (_0x62ef18 = null == _0x228ff0 ? undefined : _0x228ff0.messages) || undefined === _0x62ef18 ? undefined : _0x62ef18.length) {
            for (const _0x51da95 of _0x228ff0.messages) _0x45af26[_0x51da95.id] = _0x5bcb1c(_0x51da95);
          }
          return globalThis.Object.values(_0x45af26).sort((_0x421946, _0x2aefec) => _0x421946.createdAt - _0x2aefec.createdAt);
        },
        _getOpenMessages: () => _0x459e0e._getMessages({
          conversationId: _0x2b32f1._getOpenConversationId()
        }),
        _paginateOpenMessages: async () => await _0x459e0e.paginateMessages({
          conversationId: _0x2b32f1._getOpenConversationId()
        })
      },
      _0x8019b5 = {
        ["hasLoaded"]() {
          try {
            return !!_0x203bab.getCurrentUser();
          } catch (_0x53c5c3) {
            return false;
          }
        },
        initialize: async () => await _0x53c583.websocket.initialize("ChatChannel")
      },
      _0x3a8510 = {
        isRecipientPresent: ({
          conversationId: _0x111c95
        }) => _0x3a8510.isRecipientTyping({
          conversationId: _0x111c95
        }),
        async ["startPresence"]({
          conversationId: _0x1dfadf
        }) {
          const {
            assert$: _0x4b0ba0,
            message$: _0x31c97d
          } = _0x442618("389c1f");
          _0x4b0ba0(1, _0x1dfadf, '', {
            sentry: false
          }, true), _0x4b0ba0(2, _0x4848bd(_0x1dfadf, "string", "number"), '', {
            sentry: false
          }, true);
          const _0xc74404 = await _0x53c583.websocket.initialize("ConversationChannel", {
            conversation_id: _0x1dfadf
          }, {
            waitForConnection: true
          });
          return _0x4b0ba0(3, _0x2f4cb3("identifier", _0xc74404), '', {
            sentry: "rare"
          }, true), _0x4b0ba0(4, _0x2f4cb3("conversation_id", JSON.parse(_0xc74404.identifier)), '', {
            sentry: "rare"
          }, true), _0x4b0ba0(5, JSON.parse(_0xc74404.identifier).conversation_id == _0x1dfadf, '', {
            sentry: "rare"
          }, true), true;
        },
        ["stopPresence"]({
          conversationId: _0x5045c3
        }) {
          const {
            assert$: _0x1214b5,
            message$: _0x4f906d
          } = _0x442618("34b69e");
          return _0x1214b5(1, _0x5045c3, '', {
            sentry: false
          }, true), _0x1214b5(2, _0x4848bd(_0x5045c3, "string", "number"), '', {
            sentry: false
          }, true), _0x53c583.websocket.destroy("ConversationChannel");
        },
        startTyping: async ({
          conversationId: _0x2b5773
        }) => await _0x3a8510._setTyping({
          conversationId: _0x2b5773,
          state: true
        }),
        stopTyping: async ({
          conversationId: _0x2248bd
        }) => await _0x3a8510._setTyping({
          conversationId: _0x2248bd,
          state: false
        }),
        async ["isRecipientTyping"]({
          conversationId: _0x44d870
        }) {
          const {
            assert$: _0x892981,
            message$: _0x5b0f2c
          } = _0x442618("545ddb");
          return await _0x53c583.websocket.initialize("ChatChannel"), _0x892981(1, _0x44d870, '', {
            sentry: false
          }, true), _0x892981(2, _0x4848bd(_0x44d870, "string", "number"), '', {
            sentry: false
          }, true), !!_0x436b7f.get(_0x400de1)[_0x44d870];
        },
        async ["_setTyping"]({
          conversationId: _0x1b6889,
          state: _0x3a99e4
        }) {
          const {
            assert$: _0x26913e,
            message$: _0x49e1d9
          } = _0x442618("8f1b7c");
          _0x26913e(1, null != _0x1b6889, '', {
            sentry: false
          }, true), _0x26913e(2, _0x4848bd(_0x1b6889, "string", "number"), '', {
            sentry: false
          }, true), _0x26913e(3, _0x4848bd(_0x3a99e4, "boolean"), '', {
            sentry: false
          }, true);
          const _0x391174 = await _0x53c583.websocket.initialize("ConversationChannel", {
            conversation_id: _0x1b6889
          });
          _0x26913e(4, _0x2f4cb3("identifier", _0x391174), '', {
            sentry: "rare"
          }, true), _0x26913e(5, _0x391174, '', {
            sentry: "rare"
          }, true);
          const _0x267450 = JSON.parse(_0x391174.identifier);
          _0x26913e(6, _0x2f4cb3("conversation_id", _0x267450), '', {
            sentry: "rare"
          }, true), _0x26913e(7, _0x267450.conversation_id == _0x1b6889, '', {
            sentry: "rare"
          }, true), await _0x53c583.websocket.emit("ConversationChannel", "typing", {
            state: _0x3a99e4
          });
        }
      },
      _0xd82bd9 = {
        ..._0x441a9c,
        getRelayEnvironment: () => {
          const {
            assert$: _0x2c2767
          } = _0x442618("mfgre");
          return _0x2c2767(1, _0xd82bd9.module("XPlatRelayEnvironment").getRelayEnvironment(), '', {
            sentry: "rare"
          }, true);
        },
        executeFetchGraphQL: async (_0xb0bb62, _0x453c48) => {
          var _0x1128c2;
          const {
              assert$: _0x160042
            } = _0x442618("mfgql"),
            _0x53825f = _0xd82bd9.getRelayEnvironment(),
            _0x1d6d77 = _0xd82bd9.module("relay-runtime").getRequest(_0xb0bb62);
          _0x160042(1, _0x1d6d77, '', {
            sentry: "rare"
          }, true);
          const _0x28bcc5 = _0x53825f.getNetwork();
          _0x160042(2, _0x28bcc5, '', {
            sentry: "rare"
          }, true);
          const _0x3a5b50 = _0x28bcc5.execute(_0x1d6d77.params, _0x453c48, {
            force: true
          });
          _0x160042(3, _0x3a5b50, '', {
            sentry: "rare",
            networkRelated: true
          }, true);
          const _0x55e0b1 = await _0x3a5b50.toPromise();
          _0x160042(4, _0x55e0b1, '', {
            sentry: "rare",
            networkRelated: true
          }, true);
          const _0x563c8a = globalThis.Array.isArray(_0x55e0b1) ? null === (_0x1128c2 = _0x55e0b1[0]) || undefined === _0x1128c2 ? undefined : _0x1128c2.data : null == _0x55e0b1 ? undefined : _0x55e0b1.data;
          return _0x160042(5, _0x563c8a, '', {
            sentry: "rare",
            networkResponse: _0x55e0b1
          }, true), _0x563c8a;
        }
      },
      _0x13584e = {
        setCallsEnabled: _0x5512d9 => {
          var _0x1b167b;
          const {
            assert$: _0x6689f3
          } = _0x442618("mwdcs");
          _0x6689f3(1, _0x5b0f73(_0x5512d9.enabled, "boolean"), '', {
            sentry: false
          }, true);
          const _0x1f2f84 = null === (_0x1b167b = _0xd82bd9.module("RTWebPreCallContextSingleton").get()) || undefined === _0x1b167b ? undefined : _0x1b167b.callInviteModel;
          _0x6689f3(2, _0x1f2f84, '', {
            sentry: "rare"
          }, true), _0x5512d9.enabled ? _0x1f2f84.startListening({
            callsBlocked: false
          }) : _0x1f2f84.stopListening();
        }
      },
      _0x3b9825 = {
        ..._0x1d4a24,
        _isContactNotAddressableInSecureThread: async _0x380982 => {
          const {
            assert$: _0x1e4b81
          } = _0x442618("mcnas");
          _0x1e4b81(1, _0x5b0f73(_0x380982.userId, "array"), '', {
            sentry: false
          }, true);
          const _0x5ec915 = await _0x3b9825.getContact({
              userId: _0x380982.userId
            }),
            _0x10b4df = _0xd82bd9.lsInt64(),
            _0x15ee8a = _0xd82bd9.module("LSAuthorityLevel"),
            _0x46692b = _0xd82bd9.module("LSWhatsAppConnectStatus"),
            _0x5805cd = _0x10b4df.fromI32(_0x46692b.WHATSAPP_NOT_ADDRESSABLE),
            _0x1a0ab1 = _0x10b4df.fromI32(_0x15ee8a.AUTHORITATIVE_PENDING_REPLACEMENT);
          if (null != (null == _0x5ec915 ? undefined : _0x5ec915.waConnectStatus) && null != (null == _0x5ec915 ? undefined : _0x5ec915.authorityLevel)) {
            const _0x599aaf = _0x10b4df.equals(_0x5ec915.waConnectStatus, _0x5805cd),
              _0x2170bf = _0x10b4df.ge(_0x5ec915.authorityLevel, _0x1a0ab1);
            return _0x599aaf && _0x2170bf;
          }
          return false;
        }
      },
      _0x5b9fc4 = globalThis.Object.freeze({
        ONE_TO_ONE: 1,
        SECURE_ONE_TO_ONE: 15
      }),
      _0x59d245 = globalThis.Object.freeze({
        MESSENGER: 0
      }),
      _0x2886ee = {
        ..._0x3b090c,
        getThreadWithMessages: async _0xb7dfe2 => await _0x3b090c.getThread({
          threadId: _0xb7dfe2.threadId,
          loadMessages: true
        }),
        getMessageRequests: async ({
          spam: _0x1efdbf,
          ..._0x5034aa
        } = {}) => {
          const {
            assert$: _0x1e6126
          } = _0x442618("mgmrq");
          return _0x1e6126(1, null == _0x1efdbf || _0x5b0f73(_0x1efdbf, "boolean"), '', {
            sentry: false
          }, true), _0x1efdbf ? await _0x3b090c.getOtherThreads(_0x5034aa) : await _0x3b090c.getPendingThreads(_0x5034aa);
        },
        _isSecureThread: _0x32378a => {
          var _0x51b745, _0x54b6e0;
          const {
              assert$: _0x5123df
            } = _0x442618("fmist"),
            _0x5a246f = _0xd82bd9.module("LSMessagingThreadTypeUtil");
          return _0x5123df(1, _0x32378a.thread, '', {
            sentry: false
          }, true), _0x5123df(2, _0x32378a.thread.threadType, '', {
            sentry: false
          }, true), null !== (_0x54b6e0 = null === (_0x51b745 = _0x5a246f.isArmadilloSecure) || undefined === _0x51b745 ? undefined : _0x51b745.call(_0x5a246f, _0x32378a.thread.threadType)) && undefined !== _0x54b6e0 && _0x54b6e0;
        },
        _getOrCreateThreadForUser: async _0x4a509d => {
          const {
            assert$: _0x5e544d
          } = _0x442618("mgctu");
          _0x5e544d(1, _0x5b0f73(_0x4a509d.userId, "array") && 2 === _0x4a509d.userId.length, '', {
            sentry: false
          }, true);
          let _0x512cb4 = await _0x3b9825._isContactUnreachable({
            userId: _0x4a509d.userId
          });
          if (_0x512cb4) return {
            isSecure: false,
            isNewThread: false,
            isUnreachable: true
          };
          if (null != (await _0x2886ee._fetchThreadTypeForUser({
            userId: _0x4a509d.userId
          }))) {
            if (_0x512cb4 = await _0x3b9825._isContactNotAddressableInSecureThread({
              userId: _0x4a509d.userId
            }), _0x512cb4) return {
              isSecure: false,
              isNewThread: false,
              isUnreachable: true
            };
            const _0x254320 = await _0x2886ee._findSecureThreadForUser({
              userId: _0x4a509d.userId
            });
            if (_0x254320) return {
              threadKey: _0x254320.threadKey,
              isSecure: true,
              isNewThread: false,
              isUnreachable: false
            };
            const _0x55c2aa = await _0x2886ee._createSecureThreadForUser({
              userId: _0x4a509d.userId
            });
            return {
              threadKey: _0x55c2aa.threadKey,
              isSecure: true,
              isNewThread: _0x55c2aa.isNewThread,
              isUnreachable: false
            };
          }
          const _0x5c3b19 = await _0x2886ee._findOpenThreadForUser({
            userId: _0x4a509d.userId
          });
          return _0x5c3b19 ? {
            threadKey: _0x5c3b19.threadKey,
            isSecure: false,
            isNewThread: false,
            isUnreachable: false
          } : (await _0x2886ee._createOpenThreadForUser({
            userId: _0x4a509d.userId
          }), {
            threadKey: _0x4a509d.userId,
            isSecure: false,
            isNewThread: true,
            isUnreachable: false
          });
        },
        _fetchThreadTypeForUser: async _0x1cd1ce => {
          const {
            assert$: _0x82ebc3
          } = _0x442618("mgttf");
          _0x82ebc3(1, _0x5b0f73(_0x1cd1ce.userId, "array"), '', {
            sentry: false
          }, true);
          const _0x1058b1 = _0xd82bd9.module("MAWVerifyThreadCutover"),
            _0x3dbd3a = await _0xd82bd9.db.get();
          return await _0x1058b1.verifyContactCutoverOrOndemandCutoverOrDefaultE2EE(_0x3dbd3a, _0x3dbd3a, _0x1cd1ce.userId, false, undefined);
        },
        _findSecureThreadForUser: async _0x401184 => {
          var _0x52081d;
          const {
            assert$: _0x44ddb1
          } = _0x442618("mfstu");
          _0x44ddb1(1, _0x5b0f73(_0x401184.userId, "array"), '', {
            sentry: false
          }, true);
          const _0x438c72 = _0xd82bd9.module("MAWJids"),
            _0x14523c = _0xd82bd9.module("MAWMiActMappingTableAPI"),
            _0xecc85d = await _0xd82bd9.db.tables(),
            _0x2ab8db = await _0xd82bd9.db.table("threads");
          try {
            const _0x7155d3 = _0x438c72.convertIntJidToOneToOneChatJid(_0x401184.userId),
              _0x19dbcf = await _0x14523c.getMappingRowForChatJid(_0xecc85d, _0x7155d3),
              _0x19314f = null !== (_0x52081d = null == _0x19dbcf ? undefined : _0x19dbcf.serverThreadKey) && undefined !== _0x52081d ? _0x52081d : null;
            if (!_0x19314f) return null;
            return await _0x2ab8db.get(_0x19314f);
          } catch (_0x22cefb) {
            return null;
          }
        },
        _findOpenThreadForUser: async _0x7162c9 => {
          try {
            return await _0x2886ee.getThread({
              threadId: _0x7162c9.userId
            });
          } catch (_0x97a5f4) {
            return null;
          }
        },
        _createSecureThreadForUser: async _0x5e0547 => {
          const {
            assert$: _0x49eaea
          } = _0x442618("mcstu");
          _0x49eaea(1, _0x5b0f73(_0x5e0547.userId, "array"), '', {
            sentry: false
          }, true);
          const _0x4b7386 = _0xd82bd9.module("MAWCreateOneToOneThread"),
            _0x57bcf1 = _0xd82bd9.module("MAWMiActMappingTableAPI"),
            _0x4bd13d = _0xd82bd9.module("MAWMiActOnActThreadReady"),
            _0x2c5e90 = _0xd82bd9.module("LSVerifyThreadViewStoredProcedure"),
            _0x151b8d = _0xd82bd9.lsInt64(),
            _0x443da3 = _0x151b8d.fromI32(_0x59d245.MESSENGER),
            _0x481460 = _0x151b8d.fromI32(_0x5b9fc4.SECURE_ONE_TO_ONE),
            _0x44bff4 = await _0xd82bd9.db.get(),
            _0x107005 = await _0xd82bd9.db.tables(),
            _0x27da5e = await _0x4b7386.call(_0x44bff4, _0x5e0547.userId, null, "MessengerConversationScope._createSecureThreadForUser", null, null);
          _0x49eaea(2, null == _0x27da5e ? undefined : _0x27da5e.jid, '', {
            sentry: "rare",
            networkResponse: _0x27da5e
          }, true);
          const _0x1d3e6a = await _0x57bcf1.getThreadKeyForChatJid(_0x44bff4.tables, _0x27da5e.jid);
          return _0x49eaea(3, _0x1d3e6a, '', {
            sentry: "rare"
          }, true), await _0x4bd13d.waitForACTThreadReady(_0x107005, _0x1d3e6a, "MessengerConversationScope._createSecureThreadForUser"), await _0xd82bd9.db.transaction(_0x1ac8b2 => _0x2c5e90(_0x1ac8b2, {
            contacts: [],
            mailboxType: _0x443da3,
            threadKey: _0x1d3e6a,
            threadType: _0x481460
          }), "readwrite", "ui", undefined, "MessengerConversationScope._createSecureThreadForUser"), {
            threadKey: _0x1d3e6a,
            isSecure: true,
            isNewThread: _0x27da5e.isCreated
          };
        },
        _createOpenThreadForUser: async _0x1290e1 => {
          const {
            assert$: _0x3f1bc4
          } = _0x442618("mcotu");
          _0x3f1bc4(1, _0x5b0f73(_0x1290e1.userId, "array"), '', {
            sentry: false
          }, true);
          const _0x1c184b = _0xd82bd9.module("LSVerifyThreadViewStoredProcedure"),
            _0x3eec62 = _0xd82bd9.lsInt64(),
            _0x2b8b86 = _0x3eec62.fromI32(_0x59d245.MESSENGER),
            _0x21f461 = _0x3eec62.fromI32(_0x5b9fc4.ONE_TO_ONE),
            _0x2f3124 = _0x1290e1.userId;
          return _0xd82bd9.db.transaction(_0x4b82a4 => _0x1c184b(_0x4b82a4, {
            contacts: [],
            mailboxType: _0x2b8b86,
            threadKey: _0x2f3124,
            threadType: _0x21f461
          }), "readwrite", "ui", undefined, "MessengerConversationScope._createOpenThreadForUser");
        }
      },
      _0x49d08d = globalThis.Object.freeze({
        FRIENDS_HOME_REQUESTS: "FRIENDS_HOME_REQUESTS",
        GRIFFIN_TAB: "GRIFFIN_TAB",
        REQUESTS_JEWEL: "REQUESTS_JEWEL",
        SEARCH: "SEARCH",
        RHC_FRIEND_REQUESTS: "RHC_FRIEND_REQUESTS",
        FRIENDS_HOME_MAIN: "FRIENDS_HOME_MAIN"
      }),
      _0x12a823 = globalThis.Object.freeze({
        NOT_FRIENDS: 0,
        ARE_FRIENDS: 1,
        INCOMING_REQUEST: 2,
        OUTGOING_REQUEST: 3
      }),
      _0x479d92 = {
        _FriendRequestsPaginationCount: 20,
        _FriendsPaginationCount: 30,
        fetchFriendRequests: async (_0x13264a = {}) => {
          var _0x15c89b, _0x4f4f95, _0x435d9c;
          const {
            assert$: _0x443e38
          } = _0x442618("mwfrq");
          _0x443e38(1, !_0x13264a.cursor || _0x5b0f73(_0x13264a.cursor, "string"), '', {
            sentry: false
          }, true), _0x443e38(2, !_0x13264a.count || _0x5b0f73(_0x13264a.count, "number"), '', {
            sentry: false
          }, true);
          const _0x24b482 = await _0xd82bd9.loadModuleSimple("FriendingCometFriendRequestsSectionPanelPaginationQuery.graphql", "FriendingCometFriendRequestsRoot.react"),
            _0x510cb8 = {
              count: null !== (_0x15c89b = _0x13264a.count) && undefined !== _0x15c89b ? _0x15c89b : _0x479d92._FriendRequestsPaginationCount,
              cursor: null !== (_0x4f4f95 = _0x13264a.cursor) && undefined !== _0x4f4f95 ? _0x4f4f95 : null,
              scale: 1
            },
            _0x1a5143 = await _0xd82bd9.executeFetchGraphQL(_0x24b482, _0x510cb8),
            _0x2b093b = null === (_0x435d9c = null == _0x1a5143 ? undefined : _0x1a5143.viewer) || undefined === _0x435d9c ? undefined : _0x435d9c.friending_possibilities;
          if (!_0x2b093b) return {
            items: [],
            nextCursor: null,
            hasMore: false
          };
          const _0x251b54 = _0x2b093b.edges || [],
            _0x1fcea1 = _0x2b093b.page_info;
          return {
            items: _0x251b54,
            nextCursor: (null == _0x1fcea1 ? undefined : _0x1fcea1.end_cursor) || null,
            hasMore: (null == _0x1fcea1 ? undefined : _0x1fcea1.has_next_page) || false
          };
        },
        handleFriendRequest: async _0xa8567 => {
          const {
            assert$: _0x4eab16
          } = _0x442618("fbafr");
          _0x4eab16(1, _0x5b0f73(_0xa8567.userId, "string"), '', {
            sentry: false
          }, true), _0x4eab16(2, _0x5b0f73(_0xa8567.confirm, "boolean"), '', {
            sentry: false
          }, true);
          const _0x38af48 = _0xd82bd9.getRelayEnvironment();
          if (_0xa8567.confirm) {
            const _0x164f97 = await _0xd82bd9.loadModule("FriendingCometFriendRequestConfirmMutation", "CometNotificationsListItemFriendRequestAttachment.react");
            return _0x4eab16(3, _0x5b0f73(_0x164f97.commit, "function"), '', {
              sentry: "rare"
            }, true), new globalThis.Promise((_0x25c400, _0x586c69) => {
              _0x164f97.commit({
                environment: _0x38af48,
                senderID: _0xa8567.userId,
                friendingChannel: _0x49d08d.GRIFFIN_TAB,
                navigationChain: null,
                onCompleted: () => {
                  _0x25c400({
                    success: true
                  });
                },
                onError: _0x43a9e6 => {
                  _0x586c69(_0x43a9e6);
                }
              });
            });
          }
          {
            const _0x1f582f = await _0xd82bd9.loadModule("FriendingCometFriendRequestDeleteMutation", "CometNotificationsListItemFriendRequestAttachment.react");
            return _0x4eab16(4, _0x5b0f73(_0x1f582f.commit, "function"), '', {
              sentry: "rare"
            }, true), new globalThis.Promise((_0x21b757, _0x51b65c) => {
              _0x1f582f.commit(_0x38af48, _0xa8567.userId, _0x49d08d.GRIFFIN_TAB, () => _0x21b757({
                success: true
              }), _0xc1edd => _0x51b65c(_0xc1edd), undefined, undefined);
            });
          }
        },
        fetchFriends: async (_0x52858f = {}) => {
          var _0x57e4bb, _0x48fd02, _0x317ad1;
          const {
            assert$: _0x357a58
          } = _0x442618("mwffr");
          _0x357a58(1, !_0x52858f.cursor || _0x5b0f73(_0x52858f.cursor, "string"), '', {
            sentry: false
          }, true), _0x357a58(2, !_0x52858f.count || _0x5b0f73(_0x52858f.count, "number"), '', {
            sentry: false
          }, true);
          const _0x5d7d02 = await _0xd82bd9.loadModuleSimple("FriendingCometFriendsListPaginationQuery.graphql", "FriendingCometAllFriendsRoot.react"),
            _0x4e25cd = {
              count: null !== (_0x57e4bb = _0x52858f.count) && undefined !== _0x57e4bb ? _0x57e4bb : _0x479d92._FriendsPaginationCount,
              cursor: null !== (_0x48fd02 = _0x52858f.cursor) && undefined !== _0x48fd02 ? _0x48fd02 : null,
              name: null,
              scale: 1
            },
            _0x8153ff = await _0xd82bd9.executeFetchGraphQL(_0x5d7d02, _0x4e25cd),
            _0x4b7d33 = null === (_0x317ad1 = null == _0x8153ff ? undefined : _0x8153ff.viewer) || undefined === _0x317ad1 ? undefined : _0x317ad1.all_friends;
          if (!_0x4b7d33) return {
            items: [],
            nextCursor: null,
            hasMore: false
          };
          const _0x235446 = _0x4b7d33.edges || [],
            _0x3aeb31 = _0x4b7d33.page_info;
          return {
            items: _0x235446,
            nextCursor: (null == _0x3aeb31 ? undefined : _0x3aeb31.end_cursor) || null,
            hasMore: (null == _0x3aeb31 ? undefined : _0x3aeb31.has_next_page) || false
          };
        },
        getContactsFriends: async () => (await _0x3b9825.getContacts()).filter(_0x681e75 => _0xd82bd9.lsInt64().toI32(_0x681e75.friendshipStatus) === _0x12a823.ARE_FRIENDS)
      },
      _0x16ba25 = {
        ..._0x3052ea,
        _MessagesPageSize: 15,
        paginateMessages: async _0x1ef5b6 => {
          const {
            assert$: _0x17c8c0
          } = _0x442618("mwpag");
          _0x17c8c0(1, globalThis.Array.isArray(_0x1ef5b6.threadId), '', {
            sentry: false
          }, true), _0x17c8c0(2, !_0x1ef5b6.loadAll || null == _0x1ef5b6.loadAtLeast, '', {
            sentry: false
          }, true);
          const _0x39af95 = _0x16ba25._MessagesPageSize,
            _0x15db35 = await _0x3052ea.getMessages({
              threadId: _0x1ef5b6.threadId
            }),
            _0x54878c = _0x1ef5b6.loadAtLeast,
            _0xc6dc76 = _0x15db35.length + _0x39af95,
            _0x51dfce = globalThis.Math.max(_0x39af95, null != _0x54878c ? _0x54878c : _0xc6dc76);
          let _0x3dd5d7 = await _0x16ba25._fetchMessages({
            threadId: _0x1ef5b6.threadId,
            count: _0xc6dc76
          });
          for (; _0x3dd5d7.hasMore && (_0x1ef5b6.loadAll || null != _0x54878c && _0x3dd5d7.messages.length < _0x51dfce);) {
            const _0x2e3704 = _0x3dd5d7.messages.length + _0x39af95;
            _0x3dd5d7 = await _0x16ba25._fetchMessages({
              threadId: _0x1ef5b6.threadId,
              count: _0x2e3704
            });
          }
          return _0x3dd5d7;
        },
        _fetchMessages: async _0x406ce9 => {
          var _0x389308, _0x45c5cc;
          const {
            assert$: _0x5b1902,
            throw$: _0x3529fa
          } = _0x442618("mwpml");
          _0x5b1902(1, globalThis.Array.isArray(_0x406ce9.threadId), '', {
            sentry: false
          }, true), _0x5b1902(2, !_0x406ce9.count || _0x5b0f73(_0x406ce9.count, "number"), '', {
            sentry: false
          }, true);
          const _0x43b4ad = null !== (_0x389308 = _0x406ce9.count) && undefined !== _0x389308 ? _0x389308 : _0x16ba25._MessagesPageSize,
            _0x482aef = _0x16ba25._MessagesPageSize,
            _0x1901a6 = _0xd82bd9.module("MWPMessageListDataSource"),
            _0x8df4a8 = _0xd82bd9.module("MAWObservableUtils"),
            {
              firstAsync: _0x14eb32,
              fromTableAscending: _0x34e226
            } = _0xd82bd9.module("ReQL"),
            _0x36db03 = await _0xd82bd9.db.get(),
            _0x4271d3 = await _0xd82bd9.db.table("mi_act_mapping_table"),
            _0x5d4177 = await _0x2886ee.getThread({
              threadId: _0x406ce9.threadId
            });
          let _0x5ccb15 = null;
          if (_0x2886ee._isSecureThread({
            thread: _0x5d4177
          })) {
            const _0x4e7837 = await _0x14eb32(_0x34e226(_0x4271d3).getKeyRange(_0x406ce9.threadId));
            _0x5ccb15 = null == _0x4e7837 ? undefined : _0x4e7837.jid, _0x5b1902(3, _0x5ccb15, '', {
              sentry: "veryRare"
            }, true);
          }
          const _0x1d1917 = {
              threadKey: _0x406ce9.threadId,
              timestampMs: _0xd82bd9.lsInt64().max,
              messageId: null,
              externalId: null,
              secureThreadJid: _0x5ccb15
            },
            _0x4da5a1 = _0x8df4a8.getUniqueRef(),
            _0x557005 = new _0x1901a6(_0x36db03, {
              before: _0x43b4ad,
              after: 0,
              cursor: _0x1d1917,
              pageSize: _0x482aef,
              secondaryThreadKey: null,
              secondaryThreadType: null,
              threadAuthorityLevel: _0x5d4177.authorityLevel,
              threadType: _0x5d4177.threadType
            }, _0x4da5a1);
          let _0x24ef2d = () => {};
          const _0x2a1332 = new globalThis.Promise((_0x1c9c5e, _0xc586f2) => {
            const _0x447874 = _0x557005.subscribe({
              next: _0x33ffbc => {
                const _0x16075e = undefined === _0x33ffbc || _0x33ffbc.isLoadingNext || _0x33ffbc.isLoadingPrevious;
                undefined === (null == _0x33ffbc ? undefined : _0x33ffbc.data) || _0x16075e || _0x1c9c5e(_0x33ffbc);
              },
              error: _0x316316 => {
                _0xc586f2(_0x316316);
              },
              complete: () => {}
            });
            _0x24ef2d = () => {
              try {
                _0x447874.unsubscribe();
              } catch (_0x2a228d) {}
            };
          });
          let _0x5dc06b;
          try {
            _0x5dc06b = await _0x2a1332;
          } catch (_0xbedba9) {
            _0x3529fa(4, '', {
              sentry: "veryRare",
              exception: _0xbedba9,
              networkRelated: true
            }, true);
          } finally {
            _0x24ef2d();
          }
          const _0x109920 = null !== (_0x45c5cc = null == _0x5dc06b ? undefined : _0x5dc06b.data) && undefined !== _0x45c5cc ? _0x45c5cc : [];
          return {
            hasMore: !!(null == _0x5dc06b ? undefined : _0x5dc06b.hasPrevious),
            messages: _0x109920
          };
        },
        unvaultText: _0x244711 => {
          if (!_0x244711.text) return '';
          const _0xaa854d = _0xd82bd9.module("MWUnvaultedText"),
            _0x49c3ee = !!_0x244711.strict,
            _0x890156 = _0xaa854d.getMWUnvaultedText(_0x49c3ee, _0x244711.text);
          return null != _0x890156 ? _0x890156 : _0x244711.text;
        },
        sendMessage: async _0x4989fd => {
          var _0x16f17a;
          const {
            assert$: _0x5c6586
          } = _0x442618("mfsme");
          return _0x5c6586(1, globalThis.Array.isArray(_0x4989fd.threadId), '', {
            sentry: false
          }, true), _0x5c6586(2, _0x4989fd.blob || _0x4989fd.message, '', {
            sentry: false
          }, true), _0x4989fd.blob ? (_0x5c6586(3, _0x4989fd.blobExtension, '', {
            sentry: false
          }, true), await _0x16ba25.sendMedia({
            threadId: _0x4989fd.threadId,
            blob: _0x4989fd.blob,
            blobExtension: _0x4989fd.blobExtension
          })) : (_0x5c6586(4, _0x5b0f73(_0x4989fd.message, "string"), '', {
            sentry: false
          }, true), await _0x16ba25.sendTextMessage({
            threadId: _0x4989fd.threadId,
            message: _0x4989fd.message,
            isFirstMsg: null !== (_0x16f17a = _0x4989fd.isFirstMsg) && undefined !== _0x16f17a && _0x16f17a
          }));
        },
        sendMessageToUser: async _0xf40c72 => {
          const {
              assert$: _0x44da32
            } = _0x442618("msmtu"),
            _0x3611d7 = _0xd82bd9.lsInt64().coerceNonZero(_0xf40c72.userIdStr);
          _0x44da32(1, !_0xf40c72.message || _0x5b0f73(_0xf40c72.message, "string"), '', {
            sentry: false
          }, true), _0x44da32(2, !_0xf40c72.blob || _0x5b0f73(_0xf40c72.blob, "blob"), '', {
            sentry: false
          }, true), _0x44da32(3, !_0xf40c72.blobExtension || _0x5b0f73(_0xf40c72.blobExtension, "string"), '', {
            sentry: false
          }, true);
          const _0x489a1b = await _0x2886ee._getOrCreateThreadForUser({
            userId: _0x3611d7
          });
          return _0x489a1b.isUnreachable || (await _0x16ba25.sendMessage({
            threadId: _0x489a1b.threadKey,
            message: _0xf40c72.message,
            blob: _0xf40c72.blob,
            blobExtension: _0xf40c72.blobExtension,
            isFirstMsg: _0x489a1b.isNewThread
          })), _0x489a1b.isNewThread && (await _0x2886ee.markThreadRead({
            threadId: _0x489a1b.threadKey
          })), _0x489a1b;
        },
        sendTextMessage: async _0x3f52ce => {
          var _0x11f398, _0x10ce97;
          const {
            assert$: _0x3c319b
          } = _0x442618("mfstm");
          _0x3c319b(1, globalThis.Array.isArray(_0x3f52ce.threadId), '', {
            sentry: false
          }, true), _0x3c319b(2, _0x5b0f73(_0x3f52ce.message, "string"), '', {
            sentry: false
          }, true), _0x3c319b(3, !_0x3f52ce.timeoutMs || _0x5b0f73(_0x3f52ce.timeoutMs, "number"), '', {
            sentry: false
          }, true), _0x3c319b(4, !_0x3f52ce.isFirstMsg || _0x5b0f73(_0x3f52ce.isFirstMsg, "boolean"), '', {
            sentry: false
          }, true);
          const _0x1778bf = null !== (_0x11f398 = _0x3f52ce.timeoutMs) && undefined !== _0x11f398 ? _0x11f398 : 30000,
            _0x4ef1f8 = await _0x2886ee.getThread({
              threadId: _0x3f52ce.threadId
            });
          if (!_0x2886ee._isSecureThread({
            thread: _0x4ef1f8
          })) return _0x3052ea.sendTextMessage({
            threadId: _0x3f52ce.threadId,
            message: _0x3f52ce.message,
            isFirstMsg: null !== (_0x10ce97 = _0x3f52ce.isFirstMsg) && undefined !== _0x10ce97 && _0x10ce97
          });
          const _0x4a2146 = _0xd82bd9.module("MAWMiActOnActThreadReady"),
            _0x50f8d9 = _0xd82bd9.module("OfflineThreadingId"),
            _0x407d05 = _0xd82bd9.module("MAWBridgeSendAndReceive"),
            _0x5a53dc = _0xd82bd9.module("MAWOptimisticMessageUtils"),
            _0x313fa8 = _0xd82bd9.module("MAWCreateOptimisticSecureMessage"),
            _0x1640bb = _0x3b9825.getCurrentUserIds().id,
            _0x34ee7f = await _0xd82bd9.db.get();
          await _0x4a2146.onActThreadReady(await _0xd82bd9.db.tables(), _0x4ef1f8.threadKey, "MessengerMessagingScope.sendTextMessage", async (_0x4c5b62, _0x3ab820) => {
            const _0x294c79 = _0x50f8d9.createOfflineThreadingID(),
              _0x14172f = _0x5a53dc.getOptimisticMessageTimestamp(),
              _0x1ea7e0 = _0xd82bd9.lsInt64().fromFloat(_0x14172f);
            return await _0xd82bd9.db.transaction(async (_0x2a6dcc, _0x5345ef) => {
              const _0x5d9301 = await _0x313fa8.buildOptimisticLsMessage(_0x34ee7f, _0x5345ef, _0x1640bb, null, _0x3f52ce.message, _0x3f52ce.threadId, undefined, null, undefined, _0x294c79, _0x1ea7e0, _0x2144b0.TEXT);
              await _0x5345ef.messages.add(_0x5d9301), await _0x5a53dc.optimisticBumpThread(_0x5345ef, {
                threadKey: _0x3f52ce.threadId
              });
            }, "readwrite", "ui", undefined, "MessengerMessagingScope.sendTextMessage"), _0x407d05.sendAndReceive("backend", "sendMsg", {
              chatJid: _0x3ab820,
              externalId: _0x294c79,
              args: {
                content: _0x3f52ce.message,
                isFirstMsg: _0x3f52ce.isFirstMsg,
                isForwarded: false
              }
            }, {
              timeoutMs: _0x1778bf
            });
          });
        },
        sendMedia: async _0x2b726a => {
          var _0x2d198a;
          const {
            assert$: _0x12bf69
          } = _0x442618("mfsmd");
          _0x12bf69(1, _0x5b0f73(_0x2b726a.blob, "blob"), '', {
            sentry: false
          }, true), _0x12bf69(2, _0x5b0f73(_0x2b726a.blobExtension, "string"), '', {
            sentry: false
          }, true);
          const _0x5c7e2c = await _0x2886ee.getThread({
            threadId: _0x2b726a.threadId
          });
          if (!_0x2886ee._isSecureThread({
            thread: _0x5c7e2c
          })) return _0x3052ea.sendMedia({
            threadId: _0x2b726a.threadId,
            blob: _0x2b726a.blob,
            blobExtension: _0x2b726a.blobExtension
          });
          const _0x2e42f7 = _0x3b9825.getCurrentUserIds().id,
            _0x3cf362 = _0xd82bd9.module("MAWMiActOnActThreadReady"),
            _0x1aa75d = _0xd82bd9.module("MAWExternalId"),
            _0xe3978 = _0xd82bd9.module("sendToSentQPLLogger"),
            _0x251aae = _0xd82bd9.module("MAWSendFileMsgIfNecessaryV2"),
            _0x108717 = _0xd82bd9.module("MAWGetEphemeralSettings"),
            _0x532aa0 = _0xd82bd9.module("MAWImagePreProcess"),
            _0x37b7d6 = _0xd82bd9.module("MAWVideoUtils"),
            _0x49d0b0 = _0xd82bd9.module("MAWDocumentPreProcess"),
            _0x5b394b = _0xd82bd9.module("WABlobToArrayBuffer"),
            _0x2f471d = _0xd82bd9.module("LSThreadAttributionTypeUtil"),
            _0xf70df2 = _0x1aa75d.generateExternalId(),
            _0x4bdcfd = _0xf70df2 + "." + _0x2b726a.blobExtension,
            _0x302f01 = _0x2b726a.blob.type.startsWith("image/") ? await _0x5dc537(_0x2b726a.blob, {
              compress: true,
              width: 1080
            }) : _0x2b726a.blob,
            _0x1fc38f = new File([_0x302f01], _0x4bdcfd, {
              type: _0x302f01.type
            });
          let _0x4519f2;
          if (_0x1fc38f.type.startsWith("image/")) _0x4519f2 = await _0x532aa0.imagePreprocess(_0x1fc38f, false);else {
            if (_0x1fc38f.type.startsWith("video/")) {
              const _0x31d9e0 = await _0x37b7d6.getVideoThumbnailUrlAndSpec(_0x1fc38f);
              _0x4519f2 = {
                type: "video",
                file: _0x1fc38f,
                thumbnailUrlAndSpec: _0x31d9e0
              };
            } else {
              if (_0x1fc38f.type.startsWith("audio/")) _0x4519f2 = {
                type: "audio",
                file: _0x1fc38f,
                durations: 0,
                isPtt: false,
                waveform: undefined
              };else {
                const _0x1bf32d = await _0x49d0b0.documentPreprocess(_0x1fc38f);
                _0x4519f2 = _0x1bf32d;
              }
            }
          }
          null !== (_0x2d198a = _0x4519f2.plaintext) && undefined !== _0x2d198a || (_0x4519f2.plaintext = await _0x5b394b.blobToArrayBuffer(_0x1fc38f));
          const _0x17068c = await _0xd82bd9.db.get(),
            _0x1f2e1d = _0xe3978.markSendToSentStart(),
            _0x2421f3 = _0x2f471d.getSourceWithoutReset(_0x5c7e2c.threadKey, "inboxInThread");
          return _0x3cf362.onActThreadReady(_0x17068c.tables, _0x5c7e2c.threadKey, "MessengerMessagingScope.sendMedia", async (_0x47ccaa, _0xdab8b2) => {
            const _0x40254c = await _0x108717.getEphemeralSetting(_0xdab8b2, _0x5c7e2c.threadKey),
              _0x5e4c34 = {
                actorId: _0x2e42f7,
                attachments: [[_0x4519f2, _0xf70df2]],
                chatJid: _0xdab8b2,
                ephemeralSetting: _0x40254c,
                initiatingSource: undefined,
                isFirstMsg: false,
                isVideoGif: false,
                lssTraceApi: undefined,
                reply: undefined,
                s2sInstanceKey: _0x1f2e1d,
                source: _0x2421f3,
                thread: _0x5c7e2c
              };
            return await _0x251aae.sendFileMsgIfNecessaryV2(_0x17068c, _0x5e4c34);
          });
        },
        processMessages: async _0x2a98a0 => {
          const {
            assert$: _0x212b2f
          } = _0x442618("mwprm");
          return _0x212b2f(1, globalThis.Array.isArray(_0x2a98a0.threadId), '', {
            sentry: false
          }, true), await _0x3052ea.processMessages({
            threadId: _0x2a98a0.threadId,
            transformText: _0x35f933 => _0x16ba25.unvaultText({
              text: _0x35f933,
              strict: false
            })
          });
        },
        _processOpenMessages: async () => await _0x3052ea._processOpenMessages({
          transformText: _0x4a8747 => _0x16ba25.unvaultText({
            text: _0x4a8747,
            strict: false
          })
        })
      },
      _0x26f6bf = {
        ..._0xbd3ecc,
        hasLoaded: async () => {
          try {
            const _0x19b2e4 = await _0xbd3ecc.hasLoaded(),
              _0x2e8405 = !!(await _0xd82bd9.module("CometRelay"));
            return _0x19b2e4 && _0x2e8405;
          } catch (_0x49015d) {
            return false;
          }
        }
      },
      _0x235198 = globalThis.Object.freeze({
        Active: 2,
        Inactive: 0
      }),
      _0x6b238f = {
        _PresenceThresholdSeconds: 30,
        startTyping: async ({
          threadId: _0x37f827
        }) => {
          const {
            assert$: _0x4734aa
          } = _0x442618("9tnxr");
          _0x4734aa(1, _0x37f827, '', {
            sentry: false
          }, true), _0x4734aa(2, _0x5b0f73(_0x37f827, "array"), '', {
            sentry: false
          }, true), await _0x6b238f._updateTypingStatus({
            threadId: _0x37f827,
            typing: true
          });
        },
        stopTyping: async ({
          threadId: _0x230d59
        }) => {
          const {
            assert$: _0x4d5d73
          } = _0x442618("gii2t");
          _0x4d5d73(1, _0x230d59, '', {
            sentry: false
          }, true), _0x4d5d73(2, _0x5b0f73(_0x230d59, "array"), '', {
            sentry: false
          }, true), await _0x6b238f._updateTypingStatus({
            threadId: _0x230d59,
            typing: false
          });
        },
        _updateTypingStatus: async ({
          threadId: _0x206c6f,
          typing: _0x484595
        }) => {
          const {
            assert$: _0x34dd66
          } = _0x442618("wnfmq");
          _0x34dd66(1, _0x206c6f, '', {
            sentry: false
          }, true), _0x34dd66(2, _0x5b0f73(_0x206c6f, "array"), '', {
            sentry: false
          }, true), _0x34dd66(3, _0x5b0f73(_0x484595, "boolean"), '', {
            sentry: false
          }, true);
          const _0x4cebe2 = await _0x2886ee.getThread({
            threadId: _0x206c6f
          });
          _0x34dd66(4, _0x4cebe2, '', {
            sentry: false
          }, true);
          if (_0x2886ee._isSecureThread({
            thread: _0x4cebe2
          })) {
            const _0xccfe14 = _0xd82bd9.module("MAWMiActOnActThreadReady"),
              _0x5a4eea = _0xd82bd9.module("MAWBridgeFireAndForget"),
              _0x518594 = _0xd82bd9.module("WAChatState");
            await _0xccfe14.onActThreadReady(await _0xd82bd9.db.tables(), _0x4cebe2.threadKey, "MessengerPresenceScope._updateTypingStatus", (_0x233158, _0x216253) => _0x5a4eea.fireAndForget("backend", "sendChatStateFromComposer", {
              chatJid: _0x216253,
              state: _0x484595 ? _0x518594.TYPING : _0x518594.IDLE
            }));
          } else await _0x5b2833._updateTypingStatus({
            threadId: _0x206c6f,
            typing: _0x484595
          });
        },
        _isRecipientOnline: async _0xc55726 => {
          const {
              assert$: _0x2d691b
            } = _0x442618("mpipo"),
            _0x4265ab = await _0x2886ee.getRecipient({
              threadId: _0xc55726.threadId
            });
          if (!_0x4265ab) return false;
          let _0x4b6b83 = _0xd82bd9.module("FBPresenceUnifiedClientSingleton").FBPresenceUnifiedClientSingleton;
          _0x2d691b(1, _0x4b6b83, '', {
            sentry: "veryRare"
          }, true);
          let _0xcc7723 = _0x4b6b83.getPresenceMap();
          _0x2d691b(2, _0xcc7723, '', {
            sentry: "veryRare"
          }, true);
          const _0x51caf4 = _0xd82bd9.lsInt64().toStr(_0x4265ab.id),
            _0x271918 = _0xcc7723.get(_0x51caf4);
          if (!_0x271918) return false;
          const _0x9c5fd8 = _0x271918.presenceStatus === _0x235198.Active,
            _0x117fbd = globalThis.Math.abs(globalThis.Date.now() / 1000 - _0x271918.lastActiveTimeSeconds) <= _0x6b238f._PresenceThresholdSeconds;
          return _0x9c5fd8 || _0x117fbd;
        },
        _isRecipientTyping: async ({
          threadId: _0x3e4d2e
        }) => {
          var _0x2f24fd;
          const {
            assert$: _0x27a32b
          } = _0x442618("zhimg");
          _0x27a32b(1, _0x3e4d2e, '', {
            sentry: false
          }, true), _0x27a32b(2, _0x5b0f73(_0x3e4d2e, "array"), '', {
            sentry: false
          }, true);
          const _0x24f228 = _0xd82bd9.serverTimeMs(),
            _0x396c79 = null === (_0x2f24fd = (await _0xd82bd9.db.entries("typing_indicator")).find(_0x2b60bc => _0xd82bd9.lsInt64().equals(_0x2b60bc[1].threadKey, _0x3e4d2e))) || undefined === _0x2f24fd ? undefined : _0x2f24fd[1];
          if (!_0x396c79) return false;
          return _0x24f228 < _0xd82bd9.lsInt64().toFloat(_0x396c79.expirationTimestampMs);
        },
        isRecipientPresent: async ({
          threadId: _0x2ffb0e
        }) => {
          if (await _0x6b238f._isRecipientOnline({
            threadId: _0x2ffb0e
          })) return true;
          if (await _0x6b238f._isRecipientTyping({
            threadId: _0x2ffb0e
          })) return true;
          return !!(await _0x5b2833._isRecipientRecentlyActive({
            threadId: _0x2ffb0e,
            thresholdMs: 1000 * _0x6b238f._PresenceThresholdSeconds
          }));
        }
      },
      _0x4b5578 = {
        setWebVisibility: async _0x1ed21e => {
          const {
            assert$: _0x26e961
          } = _0x442618("an29d");
          _0x26e961(1, !_0x5b0f73(_0x1ed21e.enabled, "undefined"), '', {
            sentry: false
          }, true), _0x26e961(2, _0x5b0f73(_0x1ed21e.enabled, "boolean"), '', {
            sentry: false
          }, true), await _0xd82bd9.loadModule("MWInboxSettingsDialogEntrypoint.react");
          const _0x1916d8 = _0xd82bd9.module("CometRelayEnvironment"),
            _0x15ae15 = _0xd82bd9.module("UpdatePresenceSettingsMutation"),
            _0x25c739 = {
              online_policy: "ALLOWLIST",
              web_visibility: _0x1ed21e.enabled
            };
          await _0x15ae15.commit(_0x1916d8, _0x25c739);
        }
      },
      _0xdf288 = (_0xd3f0d8(_0x275606, _0x415433, _0xcd318a, _0x7dcae5, _0x19a869, _0x2ecc1a), _0xd3f0d8(_0x22036e, _0x4257ac, _0x30a5bd, _0xfe588a, _0x848d0, _0x38053a, _0x2ecc1a, _0xcd318a)),
      _0x473e59 = _0xd3f0d8(_0x13584e, _0x2886ee, _0x479d92, _0x16ba25, _0x26f6bf, _0x6b238f, _0x4b5578, _0x3b9825),
      _0x4dd528 = _0xd3f0d8(_0x22cf1c, _0x43fb71, _0x2930fc, _0x23d950, _0x4c357d, _0x47b668, _0x18500e, _0x26f6d3),
      _0x65cffb = _0xd3f0d8(_0x318021, _0x4a6da8, _0x165082, _0x3f273a),
      _0x23805e = _0xd3f0d8(_0x4ce4df, _0x423df0, _0x15b249, _0x3aef5f, _0x38dc07, _0xad0eda, _0x5f4c5f),
      _0x2199f3 = {
        ..._0x103ba1,
        ..._0x5167e7,
        ..._0x5d6fe6,
        ..._0x40d1fb,
        ..._0x1b3585,
        ..._0x13a391,
        ..._0x5375e1,
        ..._0x3b91b4,
        ..._0x27ceb9,
        ..._0x45373e,
        ..._0x53acdb,
        ..._0x3fefab,
        ..._0x51c163,
        ..._0x5d3ecd
      },
      _0x564d49 = _0xd3f0d8(_0x37f2fb, _0x52f4ec, _0x2e5ee8, _0x4a5e1b, _0x2fa02b, _0x37fd64, _0x349451),
      _0x1442fa = _0xd3f0d8(_0x3481b3, _0x327950, _0x1fbe29, _0x26bc0b, _0x1411da, _0x3b4e49),
      _0xb5c5cb = _0xd3f0d8(_0x3c915e, _0xe8dc10, _0xf6e155, _0x271260),
      _0x1b96a0 = _0xd3f0d8(_0x1f85bc, _0x2f07d9, _0x5cf49b, _0x3cfce5, _0x409a68, _0x322a3d, _0xa6439e, _0x48bd16),
      _0x46fbb8 = _0xd3f0d8(_0x4fa1c1, _0x12ff0e, _0x3e4a9f, _0x5d99ab, _0x25a63f, _0x44f202, _0x3457e3, _0x14ec3b, {}),
      _0x52c15a = _0xd3f0d8(_0x1cc3f0, _0x2ff8ea, _0x356baa, _0x562e31, _0x42f84d, _0x17766c),
      _0x25ba71 = _0xd3f0d8(_0x5cbbd3, _0x1ac662, _0x187295, _0x61ce61, _0x217c2e, _0x1388e8, _0x1dad9f),
      _0x2d9757 = _0xd3f0d8(_0x2b32f1, _0x203bab, _0x3a8510, _0x8019b5, _0x459e0e),
      _0x527d65 = _0xd3f0d8(_0x344f16, _0x11c300, _0x19d65b, _0x374219, _0x3d4fec, _0x4e94da, _0x4c1af3);
    class _0x332510 {
      static ["renameWebcamDevices"]() {
        let _0x3bea7e = window;
        undefined === _0x3bea7e.originalEnumerateDevices && (_0x3bea7e.originalEnumerateDevices = globalThis.navigator.mediaDevices.enumerateDevices.bind(globalThis.navigator.mediaDevices));
        let _0x13ca3f = null,
          _0x226938 = null;
        return globalThis.navigator.mediaDevices.enumerateDevices = async function () {
          return (await _0x3bea7e.originalEnumerateDevices()).map((_0x2dfb10, _0x9e2840) => {
            if ("videoinput" === _0x2dfb10.kind) {
              return _0x13ca3f = "|" + _0x9e2840 + "|", _0x226938 = _0x9e2840, new Proxy(_0x2dfb10, {
                get: function (_0x3087ec, _0x271265) {
                  return "label" === _0x271265 ? "FaceTime HD Camera (Built-in) (05ac:8514) " + _0x13ca3f : _0x3087ec[_0x271265];
                }
              });
            }
            return _0x2dfb10;
          });
        }, true;
      }
      static ["spoofMediaWithImage"](_0x2ef50c) {
        return _0x332510.spoofMediaWithImageChangingAspectRatio(_0x2ef50c);
      }
      static ["spoofMediaWithImageChangingAspectRatio"]({
        blobURL: _0x5cbc00,
        eventID: _0x18a2d6
      }) {
        const {
          throw$: _0x273573
        } = _0x442618("54fffe");
        function _0xe5ee(_0x4e3cae) {
          let _0x5328a2 = new CustomEvent(_0x18a2d6, {
            detail: {
              ..._0x4e3cae
            }
          });
          globalThis.window.dispatchEvent(_0x5328a2), globalThis.console.log(_0x4e3cae.text);
        }
        if (undefined === globalThis.window.originalGetUserMedia && (globalThis.window.originalGetUserMedia = globalThis.navigator.mediaDevices.getUserMedia.bind(globalThis.navigator.mediaDevices)), _0x5cbc00) return globalThis.navigator.mediaDevices.getUserMedia = async _0x32a0d4 => {
          try {
            let _0x2a29f5 = globalThis.document.createElement("canvas"),
              _0x31d3e9 = _0x2a29f5.getContext("2d"),
              _0x59adb6 = new Image();
            _0x59adb6.crossOrigin = "anonymous", _0x59adb6.src = _0x5cbc00, await new globalThis.Promise((_0x2556f1, _0x303535) => {
              _0x59adb6.onload = () => {
                let _0x43d78b,
                  _0x42effb,
                  _0x2516c4,
                  _0x18ce3e,
                  _0x5965f1 = 0;
                _0x59adb6.width / _0x59adb6.height > _0x5965f1 ? (_0x2a29f5.height = _0x59adb6.height, _0x2a29f5.width = _0x2a29f5.height * _0x5965f1, _0x43d78b = (_0x59adb6.width - _0x2a29f5.width) / 2, _0x42effb = 0, _0x2516c4 = _0x2a29f5.width, _0x18ce3e = _0x2a29f5.height) : (_0x2a29f5.width = _0x59adb6.width, _0x2a29f5.height = _0x2a29f5.width / _0x5965f1, _0x43d78b = 0, _0x42effb = (_0x59adb6.height - _0x2a29f5.height) / 2, _0x2516c4 = _0x2a29f5.width, _0x18ce3e = _0x2a29f5.height), _0x31d3e9.translate(_0x2a29f5.width, 0), _0x31d3e9.scale(-1, 1), globalThis.window._cameraRes = {
                  width: _0x2a29f5.width,
                  height: _0x2a29f5.height
                }, _0x31d3e9.drawImage(_0x59adb6, _0x43d78b, _0x42effb, _0x2516c4, _0x18ce3e, 0, 0, _0x2a29f5.width, _0x2a29f5.height), _0x2556f1(null);
              }, _0x59adb6.onerror = _0x303535;
            });
            let _0x408ae6 = () => {
              requestAnimationFrame(_0x408ae6);
            };
            _0x408ae6();
            let _0x41a611 = _0x2a29f5.captureStream ? _0x2a29f5.captureStream() : null;
            return _0x41a611 || _0x273573(1, '', {
              sentry: "veryRare"
            }, true), _0xe5ee({
              color: "green",
              text: "Successfully overrode webcam!"
            }), _0x41a611;
          } catch (_0x4f2a1a) {
            return _0xe5ee({
              color: "red",
              text: "Failed to create a stream from your image: ",
              error: _0x4f2a1a
            }), globalThis.window.originalGetUserMedia(_0x32a0d4);
          }
        }, _0xe5ee({
          color: "green",
          text: "Webcam is being overriden, try to verify now..."
        }), true;
        _0xe5ee({
          color: "red",
          text: "Something went wrong."
        }), _0x273573(2, '', {
          sentry: "veryRare"
        }, true);
      }
      static ["spoofMediaWithImageWithoutChangingAspectRatio"]({
        blobURL: _0x4f95d4,
        eventID: _0x442934
      }) {
        const {
          throw$: _0xe83773
        } = _0x442618("d0bd62");
        function _0x3eb0bc(_0x1efdaf) {
          let _0x5733fb = new CustomEvent(_0x442934, {
            detail: {
              ..._0x1efdaf
            }
          });
          globalThis.window.dispatchEvent(_0x5733fb), globalThis.console.log(_0x1efdaf.text);
        }
        if (undefined === globalThis.window.originalGetUserMedia && (globalThis.window.originalGetUserMedia = globalThis.navigator.mediaDevices.getUserMedia.bind(globalThis.navigator.mediaDevices)), _0x4f95d4) return globalThis.navigator.mediaDevices.getUserMedia = async _0x1631cb => {
          try {
            let _0x12965d = globalThis.document.createElement("canvas"),
              _0x57533c = _0x12965d.getContext("2d"),
              _0x48270e = new Image();
            _0x48270e.crossOrigin = "anonymous", _0x48270e.src = _0x4f95d4, await new globalThis.Promise((_0x504228, _0x388fc2) => {
              _0x48270e.onload = () => {
                _0x12965d.width = _0x48270e.width, _0x12965d.height = _0x48270e.height, _0x57533c.translate(_0x12965d.width, 0), _0x57533c.scale(-1, 1), globalThis.window._cameraRes = {
                  width: _0x48270e.width,
                  height: _0x48270e.height
                }, _0x57533c.drawImage(_0x48270e, 0, 0), _0x504228(null);
              }, _0x48270e.onerror = _0x388fc2;
            });
            let _0x3bb208,
              _0x47c4a9 = () => {
                requestAnimationFrame(_0x47c4a9);
              };
            return _0x47c4a9(), _0x12965d.captureStream ? _0x3bb208 = _0x12965d.captureStream() : _0xe83773(1, '', {
              sentry: "veryRare"
            }, true), _0x3eb0bc({
              color: "green",
              text: "Successfully overrode webcam!"
            }), _0x3bb208;
          } catch (_0x20f183) {
            return _0x3eb0bc({
              color: "red",
              text: "Failed to create a stream from your image: ",
              error: _0x20f183
            }), globalThis.window.originalGetUserMedia(_0x1631cb);
          }
        }, _0x3eb0bc({
          color: "green",
          text: "Webcam is being overriden, try to verify now..."
        }), true;
        _0x3eb0bc({
          color: "red",
          text: "Something went wrong."
        }), _0xe83773(2, '', {
          sentry: "veryRare"
        }, true);
      }
      static ["spoofMediaWithVideo"](_0x4ffd11) {
        return _0x332510.spoofMediaWithVideoChangingAspectRatio(_0x4ffd11);
      }
      static ["spoofMediaWithVideoWithoutChangingAspectRatio"]({
        blobURL: _0x5925a8,
        eventID: _0x240cd5
      }) {
        const {
          throw$: _0x2c7c40
        } = _0x442618("9a0408");
        function _0x317ed(_0x3b1762) {
          let _0x56278d = new CustomEvent(_0x240cd5, {
            detail: {
              ..._0x3b1762
            }
          });
          globalThis.window.dispatchEvent(_0x56278d);
        }
        if (undefined === globalThis.window.originalGetUserMedia && (globalThis.window.originalGetUserMedia = globalThis.navigator.mediaDevices.getUserMedia.bind(globalThis.navigator.mediaDevices)), _0x5925a8) return globalThis.navigator.mediaDevices.getUserMedia = async _0xb28e30 => {
          var _0x6bde05;
          try {
            let _0xedb895,
              _0x44552f = "wingman-hidden-video-stream",
              _0x4f0d5e = null !== (_0x6bde05 = globalThis.document.getElementById(_0x44552f)) && undefined !== _0x6bde05 ? _0x6bde05 : globalThis.document.createElement("video");
            return _0x4f0d5e.src = _0x5925a8, _0x4f0d5e.loop = true, _0x4f0d5e.id = _0x44552f, _0x4f0d5e.crossOrigin = "anonymous", await _0x4f0d5e.play(), _0x4f0d5e.captureStream ? _0xedb895 = _0x4f0d5e.captureStream() : _0x4f0d5e.mozCaptureStream ? _0xedb895 = _0x4f0d5e.mozCaptureStream() : _0x2c7c40(1, '', {
              sentry: "veryRare"
            }, true), _0x317ed({
              color: "green",
              text: "Successfully overrode webcam!"
            }), _0xedb895.oninactive = () => {
              _0xedb895.getTracks && _0xedb895.getTracks().forEach(_0x264a09 => _0x264a09.stop()), _0x4f0d5e.pause(), _0x4f0d5e.src = '', _0x4f0d5e.load();
            }, _0xedb895;
          } catch (_0x2f984c) {
            return _0x317ed({
              color: "red",
              text: "Failed to create a stream from your image: ",
              error: _0x2f984c
            }), globalThis.window.originalGetUserMedia(_0xb28e30);
          }
        }, _0x317ed({
          color: "green",
          text: "Webcam is being overriden, try to verify now..."
        }), true;
        _0x317ed({
          color: "red",
          text: "Something went wrong."
        }), _0x2c7c40(2, '', {
          sentry: "veryRare"
        }, true);
      }
      static ["spoofMediaWithVideoChangingAspectRatio"]({
        blobURL: _0x284848,
        eventID: _0x4cc680
      }) {
        const {
          throw$: _0x1a0934
        } = _0x442618("0ef54d");
        let _0x44455b = 0;
        function _0x5d51ed(_0x1f8ba5) {
          let _0x26f616 = new CustomEvent(_0x4cc680, {
            detail: {
              ..._0x1f8ba5
            }
          });
          globalThis.window.dispatchEvent(_0x26f616);
        }
        if (undefined === globalThis.window.originalGetUserMedia && (globalThis.window.originalGetUserMedia = globalThis.navigator.mediaDevices.getUserMedia.bind(globalThis.navigator.mediaDevices)), _0x284848) return globalThis.navigator.mediaDevices.getUserMedia = async _0x945f74 => {
          var _0x3492ab;
          try {
            let _0x35cfb9 = "wingman-hidden-video-stream",
              _0x451eb8 = null !== (_0x3492ab = globalThis.document.getElementById(_0x35cfb9)) && undefined !== _0x3492ab ? _0x3492ab : globalThis.document.createElement("video");
            _0x451eb8.src = _0x284848, _0x451eb8.loop = true, _0x451eb8.id = _0x35cfb9, _0x451eb8.crossOrigin = "anonymous", await _0x451eb8.play();
            let _0x591894,
              _0xaabad3,
              _0x4d8357 = globalThis.document.createElement("canvas"),
              _0x2107c2 = _0x4d8357.getContext("2d"),
              _0x150bef = () => {
                let _0x2e7fde, _0x38d9fa;
                _0x451eb8.videoWidth / _0x451eb8.videoHeight > _0x44455b ? (_0x38d9fa = _0x451eb8.videoHeight, _0x2e7fde = _0x38d9fa * _0x44455b) : (_0x2e7fde = _0x451eb8.videoWidth, _0x38d9fa = _0x2e7fde / _0x44455b), _0x4d8357.width = _0x2e7fde, _0x4d8357.height = _0x38d9fa, _0x2107c2.translate(_0x4d8357.width, 0), _0x2107c2.scale(-1, 1), _0x2107c2.drawImage(_0x451eb8, (_0x451eb8.videoWidth - _0x2e7fde) / 2, (_0x451eb8.videoHeight - _0x38d9fa) / 2, _0x2e7fde, _0x38d9fa, 0, 0, _0x2e7fde, _0x38d9fa), _0x591894 = requestAnimationFrame(_0x150bef);
              };
            return _0x150bef(), _0x4d8357.captureStream ? _0xaabad3 = _0x4d8357.captureStream() : _0x1a0934(1, '', {
              sentry: "veryRare"
            }, true), _0x5d51ed({
              color: "green",
              text: "Successfully overrode webcam!"
            }), _0xaabad3.oninactive = () => {
              _0xaabad3.getTracks && _0xaabad3.getTracks().forEach(_0x2b6ff1 => _0x2b6ff1.stop()), _0x451eb8.pause(), _0x451eb8.src = '', _0x451eb8.load(), cancelAnimationFrame(_0x591894);
            }, _0xaabad3;
          } catch (_0x6171c0) {
            return _0x5d51ed({
              color: "red",
              text: "Failed to create a stream from your image: ",
              error: _0x6171c0
            }), globalThis.window.originalGetUserMedia(_0x945f74);
          }
        }, _0x5d51ed({
          color: "green",
          text: "Webcam is being overriden, try to verify now..."
        }), true;
        _0x5d51ed({
          color: "red",
          text: "Something went wrong."
        }), _0x1a0934(2, '', {
          sentry: "veryRare"
        }, true);
      }
    }
    const _0x234733 = {
      base: _0x5ee43d,
      snapchat: _0x4dd528,
      reddit: _0x1b96a0,
      badoo: _0x46fbb8,
      pornhub: _0x1442fa,
      instagram: _0x2199f3,
      whatsapp: _0x23805e,
      tiktok: _0x65cffb,
      telegram: _0x25ba71,
      discord: _0x52c15a,
      x: _0xdf288,
      fetlife: _0x2d9757,
      messenger: _0x473e59,
      grindr: _0x564d49,
      gvoice: _0xb5c5cb,
      bluesky: _0x527d65,
      webcamSpoof: _0x332510,
      webcamPermission: class _0x1557ca {
        static ["pollWebcamPermission"]({
          eventID: _0x479fc5
        }) {
          let _0x3b7326 = null;
          function _0x59a940() {
            globalThis.navigator.permissions.query({
              name: "camera"
            }).then(_0x497e10 => {
              if (_0x3b7326 !== _0x497e10.state) {
                _0x3b7326 = _0x497e10.state;
                let _0x243e7d = "granted" === _0x497e10.state,
                  _0x1d13f8 = new CustomEvent(_0x479fc5, {
                    detail: {
                      isEnabled: _0x243e7d
                    }
                  });
                globalThis.window.dispatchEvent(_0x1d13f8);
              }
            });
          }
          return _0x59a940(), globalThis.setInterval(_0x59a940, 1000), true;
        }
      }
    };
    let _0x28a3dc = null;
    function _0x15ced9(_0x405214, _0x340899) {
      if (!_0x28a3dc) return;
      if (_0x340899 && "object" == typeof _0x340899 && _0x5e0cd2 in _0x340899) {
        const _0x1617c1 = _0x340899.errorData;
        if (_0x1617c1) {
          const _0x58cf85 = _0x340899 instanceof Error ? _0x5343bd(_0x340899) : _0x340899,
            _0x28eeff = new _0x1ef9d3(_0x1617c1.content, _0x1617c1.opts, _0x58cf85, _0x1617c1.key);
          return void _0x427bd9(_0x3ad7e8(_0x28a3dc).fnName, _0x28eeff);
        }
      }
      const _0x43ffd4 = {
        type: _0x405214,
        fnName: _0x3ad7e8(_0x28a3dc).fnName,
        message: _0xe62d60(_0x340899, "Unknown " + _0x405214),
        rawError: _0x340899 instanceof Error ? _0x5343bd(_0x340899) : _0x340899 && "object" == typeof _0x340899 ? _0x340899 : undefined,
        isDevSentryTest: _0x72cd86 && !!_0x340899 && "object" == typeof _0x340899 && true === _0x340899["__devSentryTest"]
      };
      globalThis.window.dispatchEvent(new CustomEvent(_0x2912ec.globalErrorCapture, {
        detail: _0x4d65b9(_0x43ffd4)
      }));
    }
    function _0x3ad7e8(_0x49139b) {
      const [_0x291df2, _0x5ef220] = _0x49139b.split(".");
      return {
        fnScope: _0x291df2,
        fnName: _0x5ef220
      };
    }
    !function _0x496e88() {
      globalThis.q1 = true, function _0x7e77d5() {
        const _0x2feb26 = performance.timeOrigin + performance.now(),
          _0xf74774 = () => !!(null === globalThis.document || undefined === globalThis.document ? undefined : globalThis.document.documentElement) && (globalThis.document.documentElement.dataset.sentryInjectedSessionStartEpochMs = globalThis.String(_0x2feb26), true);
        try {
          _0xf74774() || globalThis.document.addEventListener("DOMContentLoaded", _0xf74774, {
            once: true
          });
        } catch (_0xcf5532) {}
      }(), _0x37432a();
      try {
        !function _0x5d9421() {
          globalThis.window.onbeforeunload = null, globalThis.window.onunload = null;
        }();
      } catch (_0xc60acd) {
        globalThis.console.error("Start patches failed", _0xc60acd);
      }
      !function _0x1ce182() {
        const _0x195784 = "__wingmanErrorObserver",
          _0x17c451 = globalThis["__wingmanErrorObserver"];
        (null == _0x17c451 ? undefined : _0x17c451.onError) && globalThis.window.removeEventListener("error", _0x17c451.onError), (null == _0x17c451 ? undefined : _0x17c451.onRejection) && globalThis.window.removeEventListener("unhandledrejection", _0x17c451.onRejection);
        const _0x266be2 = _0x165895 => {
            var _0x58d4ab;
            return _0x15ced9("error", null !== (_0x58d4ab = _0x165895.error) && undefined !== _0x58d4ab ? _0x58d4ab : _0x165895.message);
          },
          _0x509de9 = _0xdf22a7 => _0x15ced9("rejection", _0xdf22a7.reason);
        globalThis.window.addEventListener("error", _0x266be2), globalThis.window.addEventListener("unhandledrejection", _0x509de9), globalThis["__wingmanErrorObserver"] = {
          onError: _0x266be2,
          onRejection: _0x509de9
        };
      }(), globalThis.window.addEventListener(_0x2912ec.beginTask, async _0x46043c => {
        const _0xf46fc9 = _0x46043c.detail,
          {
            fnID: _0x4e5926,
            ejectedDataEventID: _0x327b7b
          } = _0xf46fc9;
        _0x28a3dc = _0x4e5926;
        const _0x14fadc = await async function _0x11b53b(_0x7cab55, _0x46a2e9) {
          var _0x40adb2;
          const {
            fnScope: _0x1c517c,
            fnName: _0x1d6041
          } = _0x3ad7e8(_0x7cab55);
          if (null == _0x234733[_0x1c517c]) {
            const _0x229583 = "Could not find scope: " + _0x1c517c;
            return globalThis.console.error(_0x229583), {
              success: false,
              error: _0x229583,
              errorData: {
                content: _0x229583,
                opts: {
                  sentry: false
                }
              }
            };
          }
          const _0x3dd167 = _0x234733[_0x1c517c][_0x1d6041];
          if (null == _0x3dd167) {
            const _0x43c3dd = "Could not find function: " + _0x7cab55;
            return globalThis.console.error(_0x43c3dd), {
              success: false,
              error: _0x43c3dd,
              errorData: {
                content: _0x43c3dd,
                opts: {
                  sentry: false
                }
              }
            };
          }
          try {
            return {
              success: true,
              data: await _0x3dd167(_0x46a2e9)
            };
          } catch (_0x584bf8) {
            globalThis.console.error(_0x584bf8);
            let _0x525d03 = {
              content: _0x584bf8.message,
              opts: {
                sentry: "veryRare"
              },
              rawData: _0x5343bd(_0x584bf8)
            };
            return _0x584bf8[_0x5e0cd2] && (_0x525d03 = {
              ..._0x525d03,
              ..._0x584bf8.errorData
            }, null === (_0x40adb2 = _0x525d03.rawData) || undefined === _0x40adb2 || delete _0x40adb2.errorData), {
              success: false,
              error: _0x584bf8.message || _0x584bf8.name || _0x584bf8.stack,
              errorData: _0x525d03
            };
          }
        }(_0x4e5926, _0xf46fc9);
        _0x28a3dc === _0x4e5926 && (_0x28a3dc = null), function _0x277bc4(_0x31ecd6, _0x1671c3) {
          const _0xfd5267 = _0x31ecd6.split("-")[0];
          _0x1671c3 = _0x4d65b9(_0x1671c3, "reddit" == _0xfd5267 ? 6 : 1 / 0);
          let _0x5330ba = globalThis.setInterval(() => {
            let _0x1e9717 = new CustomEvent(_0x31ecd6, {
              detail: _0x1671c3
            });
            globalThis.window.dispatchEvent(_0x1e9717);
          }, 100);
          const _0x31c83c = "int-acknowledge-" + _0x31ecd6,
            _0x3971f2 = () => {
              globalThis.clearInterval(_0x5330ba), globalThis.window.removeEventListener(_0x31c83c, _0x3971f2);
            };
          globalThis.window.addEventListener(_0x31c83c, _0x3971f2);
        }(_0x327b7b, _0x14fadc);
      }), globalThis.q2 = true;
    }();
  })();
})();