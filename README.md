# RUSocial Chrome Extension

Professional Social Media Services — a Chrome extension (Manifest V3) that automates messaging and engagement across 16+ social and dating platforms.

## Supported Platforms

| Social | Dating |
|--------|--------|
| Snapchat | Tinder |
| Instagram | Bumble |
| X (Twitter) | Badoo |
| Reddit | Hinge |
| WhatsApp | |
| Telegram | |
| Discord | |
| TikTok | |
| Messenger | |
| Google Voice | |
| Grindr | |
| FetLife | |
| PornHub | |
| Bluesky | |
| LinkedIn | |

## Project Structure

```
remade/
├── public/                          # Static assets copied to dist/
│   ├── manifest.json                # Chrome extension manifest (MV3)
│   ├── popup.html                   # Extension popup shell
│   ├── popup-app.html               # Local popup app host (iframe target)
│   ├── options.html                  # Options page
│   ├── newTab.html                   # New tab override
│   └── rusocial.png                  # Extension icon
│
├── src/
│   ├── shared/                      # Shared constants and config
│   │   ├── branding.js              # Brand config, API URLs, Sentry DSN
│   │   ├── constants.js             # Platform URLs, event names, enums
│   │   └── deepClone.js             # Deep clone utility
│   │
│   ├── background/                  # Service worker (bootstrap)
│   │   ├── index.js                 # Entry — alarms, message routing, script loading
│   │   ├── api.js                   # API client for CupidBot backend
│   │   ├── scriptLoader.js          # Downloads/decrypts dynamic scripts (AIR mode)
│   │   ├── storage.js               # chrome.storage wrapper with caching
│   │   ├── profiles.js              # User profile normalization
│   │   ├── chromiumBugFix.js        # Workaround for Chromium storage bug
│   │   ├── sentry.js                # Sentry error reporting setup
│   │   └── utils.js                 # Logging, timing, misc helpers
│   │
│   ├── actualBackground/            # Background bot coordination (clean rewrite)
│   │   ├── index.js                 # Entry — message router, nav listeners, debugger
│   │   ├── chromeProxy.js           # Forwards chrome API calls from content scripts
│   │   ├── networkInterceptor.js    # Network interception via chrome.debugger
│   │   ├── networkMonitor.js        # Request/response monitoring
│   │   ├── fetchProxy.js            # Proxied fetch for content scripts
│   │   ├── scriptInjector.js        # Content script injection into tabs
│   │   ├── tabManager.js            # Tab lifecycle management
│   │   ├── crashDetector.js         # Crash detection and auto-recovery
│   │   ├── platforms.js             # Platform domain configs
│   │   └── encryption.js            # AES-GCM decryption, RSA-OAEP for Sentry
│   │
│   ├── contentScript/               # Content script (bootstrap, runs on all pages)
│   │   ├── index.js                 # Entry — injects worker, loads dynamic scripts
│   │   ├── scriptInjection.js       # Loads actualContent/Injected/Popup scripts
│   │   ├── messaging.js             # Message bridge (popup <-> background)
│   │   ├── platformDetect.js        # URL-based platform detection
│   │   ├── storage.js               # Content script storage helpers
│   │   ├── settings.js              # Settings load/save, presets
│   │   └── conversations.js         # Conversation state helpers
│   │
│   ├── actualContent/               # DOM automation engine (clean rewrite)
│   │   ├── index.js                 # Entry — task dispatcher setup
│   │   ├── taskDispatcher.js        # Routes bot tasks to platform handlers
│   │   ├── messageHandler.js        # Chrome message listener
│   │   ├── bridge.js                # IPC bridge to injected script
│   │   ├── sentry.js                # Sentry forwarding from injected script
│   │   ├── dom.js                   # DOM query/manipulation utilities
│   │   ├── navigation.js            # Page navigation helpers
│   │   ├── storage.js               # Storage access from content context
│   │   ├── api.js                   # API communication
│   │   └── platforms/               # Per-platform DOM automation
│   │       ├── index.js             # Platform registry
│   │       ├── snapchat.js          # Snapchat Web automation
│   │       ├── instagram.js         # Instagram DM automation
│   │       ├── x.js                 # X/Twitter DM automation
│   │       ├── reddit.js            # Reddit chat automation
│   │       ├── messenger.js         # Messenger automation
│   │       ├── whatsapp.js          # WhatsApp Web automation
│   │       ├── telegram.js          # Telegram Web automation
│   │       ├── discord.js           # Discord automation
│   │       ├── tiktok.js            # TikTok DM automation
│   │       ├── grindr.js            # Grindr Web automation
│   │       ├── gvoice.js            # Google Voice automation
│   │       ├── fetlife.js           # FetLife automation
│   │       ├── pornhub.js           # PornHub automation
│   │       ├── bluesky.js           # Bluesky automation
│   │       ├── bumble.js            # Bumble automation
│   │       ├── tinder.js            # Tinder automation
│   │       ├── badoo.js             # Badoo automation
│   │       └── linkedin.js          # LinkedIn automation
│   │
│   ├── actualInjected/              # Page-context SDK (clean rewrite)
│   │   ├── index.js                 # Entry — platform detection, SDK init
│   │   ├── config.js                # Constants, event names, enums
│   │   ├── bridge.js                # CustomEvent IPC with content script
│   │   ├── sentry.js                # Sentry forwarding and debug IDs
│   │   ├── webpack/
│   │   │   ├── base.js              # WebpackBase — dynamic module introspection
│   │   │   └── helpers.js           # Webpack chunk/module search utilities
│   │   ├── utils/
│   │   │   ├── errors.js            # ErrorMessage, assert, assertion groups
│   │   │   ├── types.js             # Type checking helpers
│   │   │   ├── store.js             # Reactive key-value store
│   │   │   ├── async.js             # sleep, waitUntil
│   │   │   ├── objects.js           # deepSearch, accessPath, camelCase
│   │   │   ├── serialize.js         # Safe serialization
│   │   │   └── misc.js              # randomString, getReactFiber, etc.
│   │   └── platforms/
│   │       ├── stubs.js             # Empty exports for simple platforms
│   │       ├── webcam.js            # Webcam spoofing (getUserMedia, enumerateDevices)
│   │       ├── snapchat/            # Snapchat Zustand store + RPC integration
│   │       │   ├── index.js
│   │       │   ├── webpack.js       # SnapchatWebpack module finder
│   │       │   ├── constants.js     # FriendType, ConversationType, etc.
│   │       │   ├── users.js         # getCurrentUser, getCurrentUserId
│   │       │   ├── friends.js       # Friend requests, sync, accept/ignore
│   │       │   ├── conversations.js # Feed, conversations, enter/exit
│   │       │   ├── messages.js      # Send, save, open, paginate messages
│   │       │   ├── presence.js      # Typing indicators, online presence
│   │       │   ├── stories.js       # View, post, list stories
│   │       │   └── patches.js       # Canvas, MessagePort, hasFocus patches
│   │       ├── reddit/index.js      # Reddit GraphQL + React fiber traversal
│   │       ├── x/index.js           # X/Twitter Redux + Kotlin DM graph
│   │       ├── instagram/index.js   # Instagram Metro modules + LS Database
│   │       ├── messenger/index.js   # Messenger Metro + E2EE support
│   │       └── shared/
│   │           └── instagram-messenger-ls.js  # Shared LS DB helpers
│   │
│   ├── actualPopup/                 # Popup dashboard UI (React + MUI Joy)
│   │   ├── index.js                 # Entry — React root, Sentry, message listeners
│   │   ├── App.jsx                  # Router, theme provider, auth gating
│   │   ├── theme.js                 # MUI Joy dark theme config
│   │   ├── api.js                   # postMessage communication with content script
│   │   ├── utils.js                 # Formatting, platform icons/names
│   │   ├── context/
│   │   │   ├── AppContext.jsx       # Global state (user, settings, platforms)
│   │   │   └── MessageContext.jsx   # Task dispatch context
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx        # Platform status, bot controls
│   │   │   ├── Settings.jsx         # General + platform-specific settings
│   │   │   ├── Conversations.jsx    # Conversation viewer + reply
│   │   │   └── Login.jsx            # Access token input + subscription links
│   │   └── components/
│   │       ├── Layout.jsx           # Nav sidebar, content area, footer
│   │       ├── PlatformCard.jsx     # Platform status card with toggle
│   │       ├── ConversationList.jsx  # Scrollable conversation list
│   │       └── MessageBubble.jsx    # Message display component
│   │
│   ├── popup/                       # Extension popup (iframe loader)
│   │   ├── index.jsx                # Creates iframe to popup-app.html
│   │   ├── LoadingScreen.jsx        # Loading spinner overlay
│   │   └── popup-iframe.css         # Iframe sizing styles
│   │
│   ├── options/                     # Options page (placeholder)
│   │   ├── index.jsx
│   │   └── App.jsx
│   │
│   └── newTab/                      # New tab override
│       └── index.jsx
│
├── webpack.config.js                # Webpack build config (8 entry points)
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

## Architecture

The extension runs across four execution contexts:

```
┌─────────────────────────────────────────────────────────────┐
│  Service Worker (background)                                │
│  ┌─────────────┐  ┌──────────────────────────────────────┐  │
│  │ background/  │  │ actualBackground/                    │  │
│  │ (bootstrap)  │──│ Chrome API proxy, network intercept, │  │
│  │              │  │ crash detection, tab management      │  │
│  └─────────────┘  └──────────────────────────────────────┘  │
└─────────────────────────┬───────────────────────────────────┘
                          │ chrome.runtime messages
┌─────────────────────────┴───────────────────────────────────┐
│  Content Script (isolated world, per tab)                   │
│  ┌─────────────┐  ┌──────────────────────────────────────┐  │
│  │contentScript/│  │ actualContent/                       │  │
│  │ (bootstrap)  │──│ DOM automation, task dispatch,       │  │
│  │              │  │ platform-specific handlers           │  │
│  └─────────────┘  └──────────────────────────────────────┘  │
└─────────────────────────┬───────────────────────────────────┘
                          │ CustomEvent IPC
┌─────────────────────────┴───────────────────────────────────┐
│  Page Context (main world, per tab)                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ actualInjected/                                      │   │
│  │ Webpack introspection, platform SDK hooks,           │   │
│  │ Zustand/Redux/Metro store access, API interception   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Popup (extension popup iframe)                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ actualPopup/                                         │   │
│  │ React 18 + MUI Joy dashboard, settings, login        │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Build

```bash
# Install dependencies
npm install

# Development build (watch mode)
npm run dev

# Production build
npm run build
```

Output goes to `dist/`. Load it in Chrome via `chrome://extensions` > "Load unpacked" > select the `dist/` folder.

## Configuration

All branding and API configuration lives in `src/shared/branding.js`:

| Setting | Value |
|---------|-------|
| Brand name | RUSocial |
| API server | `https://cupidbot-382905.uc.r.appspot.com` |
| AIR mode | Disabled (scripts load from local build) |
| Popup | Local `popup-app.html` (no remote iframe) |

## Credits

Special thanks to **BruhM** for providing the deobfuscated scripts.

## Contact

- **Website**: [rusocial.io](https://rusocial.io/purchase.html)
- **Discord**: [discord.gg/rusocial](https://discord.gg/rusocial)
- **Telegram**: [t.me/rusocial_io](https://t.me/rusocial_io)
- **Subscription Management**: [Stripe Portal](https://billing.stripe.com/p/login/5kA8wx1uwgWQgHmfYY)
