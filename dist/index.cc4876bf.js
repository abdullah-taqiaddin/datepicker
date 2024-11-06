// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5bQMp":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "72f85a3bcc4876bf";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"Zsu0b":[function(require,module,exports) {
var _temporalPolyfill = require("temporal-polyfill");
const localizationObject = {
    ar: {
        label: "\u0627\u0644\u062A\u0642\u0648\u064A\u0645",
        calendar: "\u0627\u0644\u062A\u0642\u0648\u064A\u0645",
        month: "\u0634\u0647\u0631",
        year: "\u0633\u0646\u0629",
        previousMonth: "\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0633\u0627\u0628\u0642",
        nextMonth: "\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u062A\u0627\u0644\u064A",
        previousYear: "\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629",
        nextYear: "\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",
        previousDecade: "\u0627\u0644\u0639\u0642\u062F \u0627\u0644\u0633\u0627\u0628\u0642",
        nextDecade: "\u0627\u0644\u0639\u0642\u062F \u0627\u0644\u062A\u0627\u0644\u064A",
        today: "\u0627\u0644\u064A\u0648\u0645",
        selected: "\u062A\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062F",
        focused: "\u0645\u0631\u0643\u0632",
        switchTo: "\u0627\u0644\u062A\u0628\u062F\u064A\u0644 \u0625\u0644\u0649",
        hours: "\u0633\u0627\u0639\u0627\u062A",
        minutes: "\u062F\u0642\u0627\u0626\u0642",
        "islamic-umalqura": {
            label: "\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0647\u062C\u0631\u064A",
            1: "\u0645\u062D\u0631\u0645",
            2: "\u0635\u0641\u0631",
            3: "\u0631\u0628\u064A\u0639 \u0627\u0644\u0623\u0648\u0644",
            4: "\u0631\u0628\u064A\u0639 \u0627\u0644\u062B\u0627\u0646\u064A",
            5: "\u062C\u0645\u0627\u062F\u0649 \u0627\u0644\u0623\u0648\u0644\u0649",
            6: "\u062C\u0645\u0627\u062F\u0649 \u0627\u0644\u0622\u062E\u0631\u0629",
            7: "\u0631\u062C\u0628",
            8: "\u0634\u0639\u0628\u0627\u0646",
            9: "\u0631\u0645\u0636\u0627\u0646",
            10: "\u0634\u0648\u0627\u0644",
            11: "\u0630\u0648 \u0627\u0644\u0642\u0639\u062F\u0629",
            12: "\u0630\u0648 \u0627\u0644\u062D\u062C\u0629"
        },
        gregory: {
            label: "\u0627\u0644\u062A\u0642\u0648\u064A\u0645 \u0627\u0644\u0645\u064A\u0644\u0627\u062F\u064A",
            1: "\u064A\u0646\u0627\u064A\u0631",
            2: "\u0641\u0628\u0631\u0627\u064A\u0631",
            3: "\u0645\u0627\u0631\u0633",
            4: "\u0623\u0628\u0631\u064A\u0644",
            5: "\u0645\u0627\u064A\u0648",
            6: "\u064A\u0648\u0646\u064A\u0648",
            7: "\u064A\u0648\u0644\u064A\u0648",
            8: "\u0623\u063A\u0633\u0637\u0633",
            9: "\u0633\u0628\u062A\u0645\u0628\u0631",
            10: "\u0623\u0643\u062A\u0648\u0628\u0631",
            11: "\u0646\u0648\u0641\u0645\u0628\u0631",
            12: "\u062F\u064A\u0633\u0645\u0628\u0631"
        },
        weekdays: {
            1: {
                short: "\u0627\u0644\u0627\u062B\u0646\u064A\u0646",
                long: "\u0627\u0644\u0627\u062B\u0646\u064A\u0646"
            },
            2: {
                short: "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621",
                long: "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621"
            },
            3: {
                short: "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
                long: "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621"
            },
            4: {
                short: "\u0627\u0644\u062E\u0645\u064A\u0633",
                long: "\u0627\u0644\u062E\u0645\u064A\u0633"
            },
            5: {
                short: "\u0627\u0644\u062C\u0645\u0639\u0629",
                long: "\u0627\u0644\u062C\u0645\u0639\u0629"
            },
            6: {
                short: "\u0627\u0644\u0633\u0628\u062A",
                long: "\u0627\u0644\u0633\u0628\u062A"
            },
            7: {
                short: "\u0627\u0644\u0623\u062D\u062F",
                long: "\u0627\u0644\u0623\u062D\u062F"
            }
        }
    },
    en: {
        label: "Calendar",
        calendar: "Calendar",
        month: "Month",
        year: "Year",
        previousMonth: "Previous month",
        nextMonth: "Next month",
        previousYear: "Previous year",
        nextYear: "Next year",
        previousDecade: "Previous decade",
        nextDecade: "Next decade",
        today: "Today",
        selected: "Selected",
        focused: "Focused",
        switchTo: "Switch to",
        hours: "Hours",
        minutes: "Minutes",
        "islamic-umalqura": {
            label: "Hijri Calendar",
            1: "Muharram",
            2: "Safar",
            3: "Rabi I",
            4: "Rabi II",
            5: "Jumada I",
            6: "Jumada II",
            7: "Rajab",
            8: "Sha'ban",
            9: "Ramadan",
            10: "Shawwal",
            11: "Dhu al-Qi'dah",
            12: "Dhu al-Hijjah"
        },
        gregory: {
            label: "Gregorian Calendar",
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        },
        weekdays: {
            1: {
                short: "Mon",
                long: "Monday"
            },
            2: {
                short: "Tue",
                long: "Tuesday"
            },
            3: {
                short: "Wed",
                long: "Wednesday"
            },
            4: {
                short: "Thu",
                long: "Thursday"
            },
            5: {
                short: "Fri",
                long: "Friday"
            },
            6: {
                short: "Sat",
                long: "Saturday"
            },
            7: {
                short: "Sun",
                long: "Sunday"
            }
        }
    }
};
class AccessibleDatePicker {
    constructor(config = {}){
        this.config = {
            dateFormat: "long",
            locale: "ar",
            calendar: "gregory",
            ...config
        };
        this.datePickers = [];
        this.localizationObject = localizationObject;
        this.initializePickers();
    }
    initializePickers() {
        const dateInputs = document.querySelectorAll('input[data-datepicker="true"]');
        dateInputs.forEach((input)=>{
            const datePickerInstance = new DatePickerInstance(input, this.config);
            this.datePickers.push(datePickerInstance);
        });
    }
}
class DatePickerInstance {
    constructor(input, globalConfig){
        this.input = input;
        this.config = this.getConfig(input, globalConfig);
        this.locale = this.config.locale;
        this.currentCalendar = this.config.calendar;
        this.today = (0, _temporalPolyfill.Temporal).Now.plainDate(this.currentCalendar);
        this.focusedDate = this.today;
        this.selectedDates = [];
        this.selectedTime = null;
        this.templates = {
            renderHeader: this.defaultRenderHeader.bind(this),
            renderCell: this.defaultRenderCell.bind(this),
            renderCalendar: this.defaultRenderCalendar.bind(this),
            renderOpenButton: this.defaultRenderOpenButton.bind(this),
            renderDatePicker: this.defaultRenderDatePicker.bind(this),
            renderTimePicker: this.defaultRenderTimePicker.bind(this)
        };
        this.setupPicker();
    }
    getConfig(input, globalConfig) {
        const defaultConfig = {
            todayClass: "today",
            selectedClass: "selected",
            focusedClass: "focused",
            calendarClasses: "calendar",
            rowClasses: "row",
            cellClasses: "cell",
            dateClasses: "date",
            availableCalendars: [
                "gregory",
                "islamic-umalqura"
            ],
            dateFormat: "long",
            minDate: input.min ? (0, _temporalPolyfill.Temporal).PlainDate.from(input.min) : null,
            maxDate: input.max ? (0, _temporalPolyfill.Temporal).PlainDate.from(input.max) : null,
            weekStartsOn: 7,
            enableTime: input.dataset.datepickerEnableTime === "true",
            enableRange: input.dataset.datepickerEnableRange === "true",
            enableMultipleDates: input.dataset.datepickerEnableMultipleDates === "true",
            disabledTimes: input.dataset.datepickerDisabledTimes ? input.dataset.datepickerDisabledTimes.split(",") : [],
            locale: globalConfig.locale || "ar",
            calendar: globalConfig.calendar || input.dataset.datepickerCalendar || "gregory"
        };
        const weekStartsOnInput = parseInt(input.dataset.datepickerWeekStartsOn) || defaultConfig.weekStartsOn;
        const weekStartsOnNumber = weekStartsOnInput >= 1 && weekStartsOnInput <= 7 ? weekStartsOnInput : defaultConfig.weekStartsOn;
        return {
            ...defaultConfig,
            todayClass: input.dataset.datepickerConfigTodayClass || defaultConfig.todayClass,
            selectedClass: input.dataset.datepickerConfigSelectedClass || defaultConfig.selectedClass,
            focusedClass: input.dataset.datepickerConfigFocusedClass || defaultConfig.focusedClass,
            calendarClasses: input.dataset.datepickerConfigCalendarClasses || defaultConfig.calendarClasses,
            rowClasses: input.dataset.datepickerConfigRowClasses || defaultConfig.rowClasses,
            cellClasses: input.dataset.datepickerConfigCellClasses || defaultConfig.cellClasses,
            dateClasses: input.dataset.datepickerConfigDateClasses || defaultConfig.dateClasses,
            availableCalendars: input.dataset.datepickerConfigCalendars ? input.dataset.datepickerConfigCalendars.split(",") : defaultConfig.availableCalendars,
            dateFormat: input.dataset.datepickerFormat || globalConfig.dateFormat || defaultConfig.dateFormat,
            minDate: defaultConfig.minDate,
            maxDate: defaultConfig.maxDate,
            weekStartsOn: weekStartsOnNumber,
            enableTime: defaultConfig.enableTime,
            enableRange: defaultConfig.enableRange,
            enableMultipleDates: defaultConfig.enableMultipleDates,
            disabledTimes: defaultConfig.disabledTimes,
            locale: input.dataset.datepickerLocale || globalConfig.locale || defaultConfig.locale,
            calendar: input.dataset.datepickerCalendar || globalConfig.calendar || defaultConfig.calendar
        };
    }
    setupPicker() {
        this.datePicker = this.templates.renderDatePicker();
        this.openButton = this.templates.renderOpenButton();
        this.input.parentNode.insertBefore(this.openButton, this.input.nextSibling);
        this.input.parentNode.insertBefore(this.datePicker, this.openButton.nextSibling);
        this.input.placeholder = this.getPlaceholderText();
        this.setupEventListeners();
    }
    getPlaceholderText() {
        if ([
            "full",
            "long",
            "medium",
            "short"
        ].includes(this.config.dateFormat)) {
            const exampleDate = (0, _temporalPolyfill.Temporal).PlainDate.from({
                year: 2023,
                month: 12,
                day: 31
            });
            return exampleDate.toLocaleString(this.locale, {
                dateStyle: this.config.dateFormat,
                calendar: "gregory",
                timeZone: "UTC"
            });
        } else return this.config.dateFormat;
    }
    defaultRenderOpenButton() {
        const openButton = document.createElement("button");
        openButton.type = "button";
        //changed from icon to svg icon, used innerHTML 
        openButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style="pointer-events: none;">
        <path d="M12 19C12.1978 19 12.3911 18.9414 12.5556 18.8315C12.72 18.7216 12.8482 18.5654 12.9239 18.3827C12.9996 18.2 13.0194 17.9989 12.9808 17.8049C12.9422 17.6109 12.847 17.4327 12.7071 17.2929C12.5673 17.153 12.3891 17.0578 12.1951 17.0192C12.0011 16.9806 11.8 17.0004 11.6173 17.0761C11.4346 17.1518 11.2784 17.28 11.1685 17.4444C11.0586 17.6089 11 17.8022 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19ZM17 19C17.1978 19 17.3911 18.9414 17.5556 18.8315C17.72 18.7216 17.8482 18.5654 17.9239 18.3827C17.9996 18.2 18.0194 17.9989 17.9808 17.8049C17.9422 17.6109 17.847 17.4327 17.7071 17.2929C17.5673 17.153 17.3891 17.0578 17.1951 17.0192C17.0011 16.9806 16.8 17.0004 16.6173 17.0761C16.4346 17.1518 16.2784 17.28 16.1685 17.4444C16.0586 17.6089 16 17.8022 16 18C16 18.2652 16.1054 18.5196 16.2929 18.7071C16.4804 18.8946 16.7348 19 17 19ZM17 15C17.1978 15 17.3911 14.9414 17.5556 14.8315C17.72 14.7216 17.8482 14.5654 17.9239 14.3827C17.9996 14.2 18.0194 13.9989 17.9808 13.8049C17.9422 13.6109 17.847 13.4327 17.7071 13.2929C17.5673 13.153 17.3891 13.0578 17.1951 13.0192C17.0011 12.9806 16.8 13.0004 16.6173 13.0761C16.4346 13.1518 16.2784 13.28 16.1685 13.4444C16.0586 13.6089 16 13.8022 16 14C16 14.2652 16.1054 14.5196 16.2929 14.7071C16.4804 14.8946 16.7348 15 17 15ZM12 15C12.1978 15 12.3911 14.9414 12.5556 14.8315C12.72 14.7216 12.8482 14.5654 12.9239 14.3827C12.9996 14.2 13.0194 13.9989 12.9808 13.8049C12.9422 13.6109 12.847 13.4327 12.7071 13.2929C12.5673 13.153 12.3891 13.0578 12.1951 13.0192C12.0011 12.9806 11.8 13.0004 11.6173 13.0761C11.4346 13.1518 11.2784 13.28 11.1685 13.4444C11.0586 13.6089 11 13.8022 11 14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15ZM19 3H18V2C18 1.73478 17.8946 1.48043 17.7071 1.29289C17.5196 1.10536 17.2652 1 17 1C16.7348 1 16.4804 1.10536 16.2929 1.29289C16.1054 1.48043 16 1.73478 16 2V3H8V2C8 1.73478 7.89464 1.48043 7.70711 1.29289C7.51957 1.10536 7.26522 1 7 1C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V20C2 20.7956 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H19C19.7956 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7956 22 20V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7956 3 19 3ZM20 20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V11H20V20ZM20 9H4V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H6V6C6 6.26522 6.10536 6.51957 6.29289 6.70711C6.48043 6.89464 6.73478 7 7 7C7.26522 7 7.51957 6.89464 7.70711 6.70711C7.89464 6.51957 8 6.26522 8 6V5H16V6C16 6.26522 16.1054 6.51957 16.2929 6.70711C16.4804 6.89464 16.7348 7 17 7C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V9ZM7 15C7.19778 15 7.39112 14.9414 7.55557 14.8315C7.72002 14.7216 7.84819 14.5654 7.92388 14.3827C7.99957 14.2 8.01937 13.9989 7.98079 13.8049C7.9422 13.6109 7.84696 13.4327 7.70711 13.2929C7.56725 13.153 7.38907 13.0578 7.19509 13.0192C7.00111 12.9806 6.80004 13.0004 6.61732 13.0761C6.43459 13.1518 6.27841 13.28 6.16853 13.4444C6.05865 13.6089 6 13.8022 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15ZM7 19C7.19778 19 7.39112 18.9414 7.55557 18.8315C7.72002 18.7216 7.84819 18.5654 7.92388 18.3827C7.99957 18.2 8.01937 17.9989 7.98079 17.8049C7.9422 17.6109 7.84696 17.4327 7.70711 17.2929C7.56725 17.153 7.38907 17.0578 7.19509 17.0192C7.00111 16.9806 6.80004 17.0004 6.61732 17.0761C6.43459 17.1518 6.27841 17.28 6.16853 17.4444C6.05865 17.6089 6 17.8022 6 18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19Z" fill="#1A1C1F"/>
        </svg>`;
        openButton.setAttribute("aria-label", localizationObject[this.locale].label);
        openButton.classList.add("datepicker-open-button");
        //added a classname here
        openButton.classList.add("datepicker-button");
        return openButton;
    }
    defaultRenderDatePicker() {
        const datePicker = document.createElement("div");
        datePicker.classList.add(this.config.calendarClasses, "modal", "fade");
        datePicker.setAttribute("role", "dialog");
        datePicker.setAttribute("aria-modal", "true");
        datePicker.setAttribute("aria-label", this.input.ariaLabel || localizationObject[this.locale].calendar);
        datePicker.setAttribute("tabindex", "-1");
        datePicker.style.display = "none";
        datePicker.setAttribute("dir", this.getDirAttribute());
        this.templates.renderCalendar(datePicker, this.focusedDate);
        if (this.config.enableTime) {
            const timePicker = this.templates.renderTimePicker();
            datePicker.appendChild(timePicker);
        }
        return datePicker;
    }
    defaultRenderCalendar(container, date) {
        container.innerHTML = "";
        if (this.config.availableCalendars.length > 1) {
            const switchButton = this.createCalendarSwitchButton();
            container.appendChild(switchButton);
        }
        container.appendChild(this.templates.renderHeader(date));
        if (!this.calendarTable) {
            this.calendarTable = this.createCalendarTable(date);
            container.appendChild(this.calendarTable);
        } else {
            this.updateCalendarTable(this.calendarTable, date);
            container.appendChild(this.calendarTable);
        }
    }
    createCalendarSwitchButton() {
        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("btn", "btn-secondary", "mb-2");
        button.style.display = "block";
        button.style.marginLeft = "auto";
        const nextCalendar = this.getNextCalendar();
        button.textContent = `${localizationObject[this.locale].switchTo} ${localizationObject[this.locale][nextCalendar].label}`;
        button.addEventListener("click", ()=>this.toggleCalendar(button));
        button.setAttribute("aria-label", `${localizationObject[this.locale].switchTo} ${localizationObject[this.locale][nextCalendar].label}`);
        return button;
    }
    getNextCalendar() {
        const currentIndex = this.config.availableCalendars.indexOf(this.currentCalendar);
        const nextIndex = (currentIndex + 1) % this.config.availableCalendars.length;
        return this.config.availableCalendars[nextIndex];
    }
    toggleCalendar(button) {
        this.currentCalendar = this.getNextCalendar();
        const nextCalendar = this.getNextCalendar();
        button.textContent = `${localizationObject[this.locale].switchTo} ${localizationObject[this.locale][nextCalendar].label}`;
        button.setAttribute("aria-label", `${localizationObject[this.locale].switchTo} ${localizationObject[this.locale][nextCalendar].label}`);
        this.focusedDate = this.focusedDate.withCalendar(this.currentCalendar);
        this.today = (0, _temporalPolyfill.Temporal).Now.plainDate(this.currentCalendar);
        this.updateCalendar(this.datePicker, this.focusedDate, false);
    }
    defaultRenderHeader(date) {
        const header = document.createElement("div");
        header.classList.add("calendar-header", "d-flex", "justify-content-between", "align-items-center", "mb-2");
        const prevButton = this.createNavButton("previousMonth", "btn", ()=>this.navigateCalendar(-1, "months"));
        const nextButton = this.createNavButton("nextMonth", "btn", ()=>this.navigateCalendar(1, "months"));
        const monthSelect = this.createMonthSelect(date);
        const yearSelect = this.createYearSelect(date);
        const selectsContainer = document.createElement("div");
        selectsContainer.appendChild(monthSelect);
        selectsContainer.appendChild(yearSelect);
        selectsContainer.classList.add("d-flex", "align-items-center");
        const monthNavContainer = document.createElement("div");
        monthNavContainer.appendChild(prevButton);
        monthNavContainer.appendChild(nextButton);
        header.appendChild(selectsContainer);
        header.appendChild(monthNavContainer);
        monthNavContainer.classList.add("d-flex", "align-items-center");
        monthNavContainer.style.gap = "0.3rem";
        // header.appendChild(prevButton);
        // header.appendChild(nextButton);
        return header;
    }
    defaultRenderCell(currentDate, isCurrentMonth) {
        const dateCell = document.createElement("div");
        dateCell.setAttribute("role", "gridcell");
        dateCell.classList.add(this.config.cellClasses, this.config.dateClasses, "col");
        dateCell.classList.add(this.config.cellClasses, this.config.dateClasses, "my-custom-cell-class");
        const dateButton = document.createElement("button");
        dateButton.classList.add("btn", "btn-link");
        dateButton.textContent = currentDate.day;
        dateButton.setAttribute("aria-label", this.localizeDate(currentDate));
        dateButton.setAttribute("data-date", currentDate.toString());
        dateButton.addEventListener("click", ()=>this.selectDate(dateButton));
        dateButton.setAttribute("role", "button");
        dateButton.setAttribute("tabindex", "-1");
        this.highlightDates(dateButton, dateCell, currentDate, isCurrentMonth);
        dateCell.appendChild(dateButton);
        return dateCell;
    }
    defaultRenderTimePicker() {
        if (this.timePicker) return this.timePicker;
        const timePicker = document.createElement("div");
        timePicker.classList.add("time-picker", "d-flex", "justify-content-center", "align-items-center", "mt-2");
        const hourSelect = this.createTimeSelect(24, "hours");
        const minuteSelect = this.createTimeSelect(60, "minutes");
        timePicker.appendChild(hourSelect);
        timePicker.appendChild(document.createTextNode(":"));
        timePicker.appendChild(minuteSelect);
        this.timePicker = timePicker;
        return timePicker;
    }
    createTimeSelect(max, labelKey) {
        const select = document.createElement("select");
        select.classList.add("form-select", "me-2");
        select.setAttribute("aria-label", localizationObject[this.locale][labelKey]);
        for(let i = 0; i < max; i++){
            const opt = document.createElement("option");
            opt.value = i;
            opt.textContent = i.toString().padStart(2, "0");
            select.appendChild(opt);
        }
        select.addEventListener("change", ()=>this.updateTime());
        return select;
    }
    updateTime() {
        const hourSelect = this.timePicker.querySelector("select:nth-of-type(1)");
        const minuteSelect = this.timePicker.querySelector("select:nth-of-type(2)");
        this.selectedTime = {
            hour: parseInt(hourSelect.value),
            minute: parseInt(minuteSelect.value)
        };
        this.updateInputValue();
    }
    createNavButton(label, btnClass, onClick) {
        const button = document.createElement("button");
        button.classList.add("btn", btnClass);
        button.textContent = localizationObject[this.locale][label];
        button.addEventListener("click", onClick);
        button.setAttribute("aria-label", localizationObject[this.locale][label]);
        return button;
    }
    createSelect(options, selectedValue, onChange) {
        const select = document.createElement("select");
        select.classList.add("form-select", "me-2");
        options.forEach((option)=>{
            const opt = document.createElement("option");
            opt.value = option.value;
            opt.textContent = option.label;
            if (option.value === selectedValue) opt.selected = true;
            select.appendChild(opt);
        });
        select.addEventListener("change", onChange);
        return select;
    }
    createMonthSelect(date) {
        const options = Array.from({
            length: 12
        }, (_, i)=>({
                value: i + 1,
                label: localizationObject[this.locale][this.currentCalendar][i + 1]
            }));
        const select = this.createSelect(options, date.month, (event)=>this.updateMonth(parseInt(event.target.value)));
        select.classList.add("month-select");
        return select;
    }
    createYearSelect(date) {
        const options = Array.from({
            length: 21
        }, (_, i)=>({
                value: date.year - 10 + i,
                label: date.year - 10 + i
            }));
        const select = this.createSelect(options, date.year, (event)=>this.updateYear(parseInt(event.target.value)));
        select.classList.add("year-select");
        return select;
    }
    updateMonth(newMonth) {
        this.focusedDate = this.focusedDate.with({
            month: newMonth
        });
        this.updateCalendar(this.datePicker, this.focusedDate, false);
    }
    updateYear(newYear) {
        this.focusedDate = this.focusedDate.with({
            year: newYear
        });
        this.updateCalendar(this.datePicker, this.focusedDate, false);
    }
    createCalendarTable(date) {
        const table = document.createElement("div");
        table.classList.add("calendar-table", "table-responsive", "table-borderless");
        table.setAttribute("role", "application");
        table.setAttribute("aria-label", `${localizationObject[this.locale][this.currentCalendar][date.month]} ${date.year}`);
        this.updateCalendarTable(table, date);
        return table;
    }
    updateCalendar(container, date, fullRender = false) {
        if (fullRender) this.templates.renderCalendar(container, date);
        else {
            this.updateCalendarTable(this.calendarTable, date);
            this.updateMonthSelect(container.querySelector(".month-select"), date);
            this.updateYearSelect(container.querySelector(".year-select"), date);
        }
    }
    updateMonthSelect(monthSelect, date) {
        //reset the month select to the current month
        //it needs to be recreated because the month names might have changed
        const newMonthSelect = this.createMonthSelect(date);
        //get the options from the new select and replace them in the old select
        monthSelect.innerHTML = newMonthSelect.innerHTML;
        monthSelect.value = date.month;
    }
    updateYearSelect(yearSelect, date) {
        //reset the year select to the current year
        //it needs to be recreated because the year values might have changed
        const newYearSelect = this.createYearSelect(date);
        //get the options from the new select and replace them in the old select
        yearSelect.innerHTML = newYearSelect.innerHTML;
        yearSelect.value = date.year;
    }
    updateCalendarTable(table, date) {
        table.innerHTML = "";
        const body = this.createCalendarBody(date);
        table.appendChild(body);
        table.setAttribute("aria-label", `${localizationObject[this.locale][this.currentCalendar][date.month]} ${date.year}`);
    }
    createCalendarBody(date) {
        const body = document.createElement("div");
        body.classList.add("calendar-body", "table", "table-bordered", "text-center");
        body.setAttribute("role", "grid");
        const weekdaysRow = document.createElement("div");
        weekdaysRow.classList.add("row");
        weekdaysRow.setAttribute("role", "row");
        const weekdays = this.getWeekdaysArray();
        weekdays.forEach((day)=>{
            const cell = document.createElement("div");
            cell.classList.add("col");
            cell.setAttribute("role", "columnheader");
            cell.textContent = day.short;
            weekdaysRow.appendChild(cell);
        });
        body.appendChild(weekdaysRow);
        const firstDayOfMonth = (0, _temporalPolyfill.Temporal).PlainDate.from({
            year: date.year,
            month: date.month,
            day: 1,
            calendar: this.currentCalendar
        });
        const daysInMonth = firstDayOfMonth.daysInMonth;
        const startDayOfWeek = (firstDayOfMonth.dayOfWeek - this.config.weekStartsOn + 7) % 7;
        this.appendDateCells(body, date, daysInMonth, startDayOfWeek);
        return body;
    }
    getWeekdaysArray() {
        const weekdays = [];
        const startDay = this.config.weekStartsOn;
        for(let i = 0; i < 7; i++){
            const dayNumber = (startDay + i - 1) % 7 + 1;
            weekdays.push(localizationObject[this.locale].weekdays[dayNumber]);
        }
        return weekdays;
    }
    appendDateCells(container, date, daysInMonth, startDayOfWeek) {
        let row = document.createElement("div");
        row.classList.add(this.config.rowClasses, "row");
        row.setAttribute("role", "row");
        for(let i = 0; i < startDayOfWeek; i++){
            const emptyCell = document.createElement("div");
            emptyCell.classList.add(this.config.cellClasses, "col", "empty-cell");
            emptyCell.setAttribute("role", "gridcell");
            row.appendChild(emptyCell);
        }
        for(let day = 1; day <= daysInMonth; day++){
            const currentDate = (0, _temporalPolyfill.Temporal).PlainDate.from({
                year: date.year,
                month: date.month,
                day,
                calendar: this.currentCalendar
            });
            if ((startDayOfWeek + day - 1) % 7 === 0 && day !== 1) {
                container.appendChild(row);
                row = document.createElement("div");
                row.classList.add(this.config.rowClasses, "row");
                row.setAttribute("role", "row");
            }
            const dateCell = this.templates.renderCell(currentDate, true);
            row.appendChild(dateCell);
        }
        const totalCells = startDayOfWeek + daysInMonth;
        const remainingCells = totalCells % 7 === 0 ? 0 : 7 - totalCells % 7;
        for(let i = 0; i < remainingCells; i++){
            const emptyCell = document.createElement("div");
            emptyCell.classList.add(this.config.cellClasses, "col", "empty-cell");
            emptyCell.setAttribute("role", "gridcell");
            row.appendChild(emptyCell);
        }
        container.appendChild(row);
    }
    navigateCalendar(value, unit) {
        this.focusedDate = this.focusedDate.add({
            [unit]: value
        });
        this.updateCalendar(this.datePicker, this.focusedDate, false);
    }
    selectDate(button) {
        const selectedDateStr = button.getAttribute("data-date");
        const selectedDate = (0, _temporalPolyfill.Temporal).PlainDate.from(selectedDateStr).withCalendar("gregory");
        if (this.config.enableMultipleDates || this.config.enableRange) this.handleMultipleDateSelection(selectedDate);
        else {
            this.selectedDates = [
                selectedDate
            ];
            if (!this.config.enableTime) this.hideDatePicker();
        }
        this.updateInputValue();
        this.updateCalendar(this.datePicker, this.focusedDate, false);
    }
    handleMultipleDateSelection(selectedDate) {
        const dateIndex = this.selectedDates.findIndex((date)=>date.equals(selectedDate));
        if (dateIndex >= 0) this.selectedDates.splice(dateIndex, 1);
        else if (this.config.enableRange && this.selectedDates.length === 1) {
            this.selectedDates.push(selectedDate);
            this.selectedDates.sort((a, b)=>(0, _temporalPolyfill.Temporal).PlainDate.compare(a, b));
            if (!this.config.enableTime) this.hideDatePicker();
        } else this.selectedDates = [
            selectedDate
        ];
    }
    updateInputValue() {
        let formattedDates = "";
        if (this.config.enableRange && this.selectedDates.length === 2) formattedDates = `${this.formatDate(this.selectedDates[0])} - ${this.formatDate(this.selectedDates[1])}`;
        else if (this.config.enableMultipleDates) formattedDates = this.selectedDates.map((date)=>this.formatDate(date)).join(", ");
        else if (this.selectedDates.length === 1) formattedDates = this.formatDate(this.selectedDates[0]);
        if (this.config.enableTime && this.selectedTime) {
            const timeString = (0, _temporalPolyfill.Temporal).PlainTime.from({
                hour: this.selectedTime.hour,
                minute: this.selectedTime.minute
            }).toLocaleString(this.locale, {
                hour: "numeric",
                minute: "numeric"
            });
            formattedDates += ` ${timeString}`;
        }
        this.input.value = formattedDates;
    }
    formatDate(date) {
        if ([
            "full",
            "long",
            "medium",
            "short"
        ].includes(this.config.dateFormat)) return date.toLocaleString(this.locale, {
            dateStyle: this.config.dateFormat,
            calendar: "gregory",
            timeZone: "UTC"
        });
        else return this.customFormatDate(date, this.config.dateFormat);
    }
    customFormatDate(date, formatString) {
        const tokens = {
            "YYYY": date.year.toString().padStart(4, "0"),
            "YY": date.year.toString().slice(-2).padStart(2, "0"),
            "MM": date.month.toString().padStart(2, "0"),
            "M": date.month.toString(),
            "DD": date.day.toString().padStart(2, "0"),
            "D": date.day.toString()
        };
        let formattedDate = formatString;
        for (const [token, value] of Object.entries(tokens))formattedDate = formattedDate.replace(new RegExp(token, "g"), value);
        return formattedDate;
    }
    setupEventListeners() {
        this.openButton.addEventListener("click", ()=>this.showDatePicker());
        this.input.addEventListener("input", ()=>this.handleManualInput());
        this.datePicker.addEventListener("keydown", (e)=>this.handleKeyboardNavigation(e));
    }
    documentClickHandler(event) {
        if (!this.datePicker.contains(event.target) && event.target !== this.openButton && event.target !== this.input) this.hideDatePicker();
    }
    handleManualInput(event) {
        const inputValue = this.input.value;
        // Get caret position
        const caretPosition = this.input.selectionStart;
        // Get expected format and separator positions
        const { separatorPositions, separators } = this.getSeparatorPositions(this.config.dateFormat);
        // Insert separators automatically
        if (separatorPositions.includes(caretPosition - 1)) {
            const separatorIndex = separatorPositions.indexOf(caretPosition - 1);
            const expectedSeparator = separators[separatorIndex];
            if (inputValue[caretPosition - 1] !== expectedSeparator) {
                // Insert the expected separator
                this.input.value = inputValue.slice(0, caretPosition - 1) + expectedSeparator + inputValue.slice(caretPosition - 1);
                // Move caret forward
                this.input.selectionStart = this.input.selectionEnd = caretPosition + 1;
            }
        }
        // Parse the date from the input
        const parsedDate = this.parseInputDate(this.input.value);
        if (parsedDate) {
            // Valid date parsed
            this.selectedDates = [
                parsedDate
            ];
            this.focusedDate = parsedDate.withCalendar(this.currentCalendar);
        }
    }
    // Returns positions of separators in the format string
    getSeparatorPositions(formatString) {
        const tokens = [
            "yyyy",
            "yy",
            "MM",
            "M",
            "dd",
            "d"
        ];
        const separators = [];
        const separatorPositions = [];
        let position = 0;
        let inToken = false;
        for(let i = 0; i < formatString.length; i++){
            let char = formatString[i];
            // Check if current position is a token
            let isTokenChar = false;
            for (let token of tokens)if (formatString.substr(i, token.length) === token) {
                i += token.length - 1;
                position += token.length;
                isTokenChar = true;
                inToken = true;
                break;
            }
            if (!isTokenChar) {
                // It's a separator
                if (inToken) {
                    separatorPositions.push(position);
                    separators.push(char);
                }
                position++;
                inToken = false;
            }
        }
        return {
            separatorPositions,
            separators
        };
    }
    parseInputDate(inputValue) {
        const formatString = this.config.dateFormat;
        const tokens = [];
        const regexParts = [];
        const tokenPatterns = {
            "YYYY": "(\\d{4})",
            "YY": "(\\d{2})",
            "MM": "(\\d{2})",
            "M": "(\\d{1,2})",
            "DD": "(\\d{2})",
            "D": "(\\d{1,2})"
        };
        let regexString = "";
        let position = 0;
        while(position < formatString.length){
            let matched = false;
            for (let [token, pattern] of Object.entries(tokenPatterns))if (formatString.substr(position, token.length) === token) {
                tokens.push(token);
                regexParts.push(pattern);
                position += token.length;
                matched = true;
                break;
            }
            if (!matched) {
                // Non-token character (separator)
                regexParts.push(`\\${formatString[position]}`);
                position++;
            }
        }
        const regex = new RegExp(`^${regexParts.join("")}$`);
        const matches = inputValue.match(regex);
        if (matches) {
            const dateParts = {};
            tokens.forEach((token, index)=>{
                dateParts[token] = matches[index + 1];
            });
            const year = dateParts["yyyy"] || "20" + dateParts["yy"];
            const month = dateParts["MM"] || dateParts["M"];
            const day = dateParts["dd"] || dateParts["d"];
            try {
                return (0, _temporalPolyfill.Temporal).PlainDate.from({
                    year: parseInt(year),
                    month: parseInt(month),
                    day: parseInt(day)
                });
            } catch (e) {
                // Invalid date
                return null;
            }
        }
        return null;
    }
    showDatePicker() {
        this.datePicker.style.display = "block";
        this.datePicker.classList.add("show");
        if (this.selectedDates.length > 0) this.focusedDate = this.selectedDates[0].withCalendar(this.currentCalendar);
        else {
            const inputValue = this.input.value.trim();
            const parsedDate = this.parseInputDate(inputValue);
            if (parsedDate) {
                this.selectedDates = [
                    parsedDate
                ];
                this.focusedDate = parsedDate.withCalendar(this.currentCalendar);
            } else this.focusedDate = this.today;
        }
        this.today = (0, _temporalPolyfill.Temporal).Now.plainDate(this.currentCalendar);
        this.updateCalendar(this.datePicker, this.focusedDate, true);
        this.focusNewDate(this.datePicker, this.focusedDate);
        document.addEventListener("click", this.documentClickHandler.bind(this));
    }
    hideDatePicker() {
        this.datePicker.style.display = "none";
        this.datePicker.classList.remove("show");
        document.removeEventListener("click", this.documentClickHandler);
    }
    handleKeyboardNavigation(event) {
        if (event.key === "Tab") {
            this.trapFocus(event);
            return;
        } else if (event.key === "Escape") {
            this.hideDatePicker();
            this.openButton.focus();
            return;
        }
        if (!this.datePicker.querySelector(".calendar-table").contains(event.target)) return;
        if (event.ctrlKey && event.key === "Home") {
            event.preventDefault();
            this.focusedDate = this.today;
            this.updateCalendar(this.datePicker, this.focusedDate, false);
            this.focusNewDate(this.datePicker, this.focusedDate);
        } else if (event.ctrlKey && event.key === "End") {
            event.preventDefault();
            const switchButton = this.datePicker.querySelector(".btn.btn-secondary.mb-2");
            if (switchButton) {
                this.toggleCalendar(switchButton);
                this.focusNewDate(this.datePicker, this.focusedDate);
            }
        } else switch(event.key){
            case "ArrowUp":
            case "ArrowDown":
            case "ArrowLeft":
            case "ArrowRight":
                this.navigateWithKeyboard(event);
                event.preventDefault();
                break;
            case "Home":
                event.preventDefault();
                this.focusedDate = this.focusedDate.with({
                    day: 1
                });
                this.focusNewDate(this.datePicker, this.focusedDate);
                break;
            case "End":
                event.preventDefault();
                this.focusedDate = this.focusedDate.with({
                    day: this.focusedDate.daysInMonth
                });
                this.focusNewDate(this.datePicker, this.focusedDate);
                break;
            case "PageUp":
                event.preventDefault();
                if (event.shiftKey) this.focusedDate = this.focusedDate.subtract({
                    years: 1
                });
                else this.focusedDate = this.focusedDate.subtract({
                    months: 1
                });
                this.updateCalendar(this.datePicker, this.focusedDate, false);
                this.focusNewDate(this.datePicker, this.focusedDate);
                break;
            case "PageDown":
                event.preventDefault();
                if (event.shiftKey) this.focusedDate = this.focusedDate.add({
                    years: 1
                });
                else this.focusedDate = this.focusedDate.add({
                    months: 1
                });
                this.updateCalendar(this.datePicker, this.focusedDate, false);
                this.focusNewDate(this.datePicker, this.focusedDate);
                break;
            default:
                break;
        }
    }
    navigateWithKeyboard(event) {
        const navigationMap = {
            "ArrowUp": {
                days: -7
            },
            "ArrowDown": {
                days: 7
            },
            "ArrowLeft": {
                days: -1
            },
            "ArrowRight": {
                days: 1
            }
        };
        const action = navigationMap[event.key];
        if (action) {
            this.focusedDate = this.focusedDate.add(action);
            this.updateCalendar(this.datePicker, this.focusedDate, false);
            this.focusNewDate(this.datePicker, this.focusedDate);
        }
    }
    focusNewDate(container, date) {
        const buttons = container.querySelectorAll(".calendar-table button");
        buttons.forEach((button)=>{
            const buttonDate = (0, _temporalPolyfill.Temporal).PlainDate.from(button.getAttribute("data-date"));
            if (buttonDate.equals(date)) button.focus();
        });
    }
    highlightDates(button, cell, currentDate, isCurrentMonth) {
        const gregorianDate = currentDate.withCalendar("gregory");
        if (currentDate.equals(this.focusedDate)) {
            button.classList.add(this.config.focusedClass);
            button.setAttribute("tabindex", "0");
            button.setAttribute("aria-selected", "true");
        } else {
            button.setAttribute("tabindex", "-1");
            button.setAttribute("aria-selected", "false");
        }
        if (currentDate.equals(this.today)) {
            cell.classList.add(this.config.todayClass);
            button.setAttribute("aria-label", `${localizationObject[this.locale].today}, ${button.getAttribute("aria-label")}`);
        }
        if (this.config.minDate && gregorianDate < this.config.minDate || this.config.maxDate && gregorianDate > this.config.maxDate) {
            button.setAttribute("aria-disabled", "true");
            button.disabled = true;
        }
        const isSelected = this.selectedDates.some((date)=>date.equals(gregorianDate));
        if (isSelected) button.classList.add(this.config.selectedClass);
    }
    localizeDate(date) {
        const year = date.year;
        const month = localizationObject[this.locale][this.currentCalendar][date.month];
        const day = date.day;
        const weekday = localizationObject[this.locale].weekdays[date.dayOfWeek].long;
        return `${weekday}, ${day} ${month} ${year}`;
    }
    getDirAttribute() {
        return this.locale === "ar" ? "rtl" : "ltr";
    }
    trapFocus(event) {
        if (event.key !== "Tab") return;
        const focusableElements = this.datePicker.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
        const focusArray = Array.prototype.slice.call(focusableElements);
        const firstFocusable = focusArray[0];
        const lastFocusable = focusArray[focusArray.length - 1];
        if (event.shiftKey) {
            if (document.activeElement === firstFocusable) {
                event.preventDefault();
                lastFocusable.focus();
            }
        } else if (document.activeElement === lastFocusable) {
            event.preventDefault();
            firstFocusable.focus();
        }
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    new AccessibleDatePicker({
        dateFormat: "DD/MM/YYYY",
        //calendar: 'islamic-umalqura',
        locale: "en"
    });
});

},{"temporal-polyfill":"bPXis"}],"bPXis":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Intl", ()=>(0, _classApiJs.IntlExtended));
parcelHelpers.export(exports, "Temporal", ()=>(0, _classApiJs.Temporal));
parcelHelpers.export(exports, "toTemporalInstant", ()=>(0, _classApiJs.toTemporalInstant));
var _classApiJs = require("./chunks/classApi.js");

},{"./chunks/classApi.js":"FLUjp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"FLUjp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DateTimeFormat", ()=>Sr);
parcelHelpers.export(exports, "IntlExtended", ()=>Tr);
parcelHelpers.export(exports, "Temporal", ()=>mr);
parcelHelpers.export(exports, "toTemporalInstant", ()=>toTemporalInstant);
var _internalJs = require("./internal.js");
function createSlotClass(e, t, n, o, r) {
    function Class(...e) {
        if (!(this instanceof Class)) throw new TypeError((0, _internalJs.invalidCallingContext));
        oo(this, t(...e));
    }
    function bindMethod(e, t) {
        return Object.defineProperties(function(...t) {
            return e.call(this, getSpecificSlots(this), ...t);
        }, (0, _internalJs.createNameDescriptors)(t));
    }
    function getSpecificSlots(t) {
        const n = no(t);
        if (!n || n.branding !== e) throw new TypeError((0, _internalJs.invalidCallingContext));
        return n;
    }
    return Object.defineProperties(Class.prototype, {
        ...(0, _internalJs.createGetterDescriptors)((0, _internalJs.mapProps)(bindMethod, n)),
        ...(0, _internalJs.createPropDescriptors)((0, _internalJs.mapProps)(bindMethod, o)),
        ...(0, _internalJs.createStringTagDescriptors)("Temporal." + e)
    }), Object.defineProperties(Class, {
        ...(0, _internalJs.createPropDescriptors)(r),
        ...(0, _internalJs.createNameDescriptors)(e)
    }), [
        Class,
        (e)=>{
            const t = Object.create(Class.prototype);
            return oo(t, e), t;
        },
        getSpecificSlots
    ];
}
function createProtocolValidator(e) {
    return e = e.concat("id").sort(), (t)=>{
        if (!(0, _internalJs.hasAllPropsByName)(t, e)) throw new TypeError((0, _internalJs.invalidProtocol));
        return t;
    };
}
function rejectInvalidBag(e) {
    if (no(e) || void 0 !== e.calendar || void 0 !== e.timeZone) throw new TypeError((0, _internalJs.invalidBag));
    return e;
}
function createCalendarFieldMethods(e, t) {
    const n = {};
    for(const o in e)n[o] = ({ F: e }, n)=>{
        const r = no(n) || {}, { branding: a } = r, i = a === (0, _internalJs.PlainDateBranding) || t.includes(a) ? r : toPlainDateSlots(n);
        return e[o](i);
    };
    return n;
}
function createCalendarGetters(e) {
    const t = {};
    for(const n in e)t[n] = (e)=>{
        const { calendar: t } = e;
        var o, r;
        return (o = t, "string" == typeof o ? (0, _internalJs.createNativeStandardOps)(o) : (r = o, Object.assign(Object.create(co), {
            C: r
        })))[n](e);
    };
    return t;
}
function neverValueOf() {
    throw new TypeError((0, _internalJs.forbiddenValueOf));
}
function createCalendarFromSlots({ calendar: e }) {
    return "string" == typeof e ? new lr(e) : e;
}
function toPlainMonthDaySlots(e, t) {
    if (t = (0, _internalJs.copyOptions)(t), (0, _internalJs.isObjectLike)(e)) {
        const n = no(e);
        if (n && n.branding === (0, _internalJs.PlainMonthDayBranding)) return (0, _internalJs.refineOverflowOptions)(t), n;
        const o = extractCalendarSlotFromBag(e);
        return (0, _internalJs.refinePlainMonthDayBag)(Qo(o || (0, _internalJs.isoCalendarId)), !o, e, t);
    }
    const n = (0, _internalJs.parsePlainMonthDay)((0, _internalJs.createNativeStandardOps), e);
    return (0, _internalJs.refineOverflowOptions)(t), n;
}
function getOffsetNanosecondsForAdapter(e, t, n) {
    var o;
    return o = t.call(e, Co((0, _internalJs.createInstantSlots)(n))), (0, _internalJs.validateTimeZoneOffset)((0, _internalJs.requireInteger)(o));
}
function createAdapterOps(e, t = ho) {
    const n = Object.keys(t).sort(), o = {};
    for (const r of n)o[r] = (0, _internalJs.bindArgs)(t[r], e, (0, _internalJs.requireFunction)(e[r]));
    return o;
}
function createTimeZoneOps(e, t) {
    return "string" == typeof e ? (0, _internalJs.queryNativeTimeZone)(e) : createAdapterOps(e, t);
}
function createTimeZoneOffsetOps(e) {
    return createTimeZoneOps(e, Do);
}
function toInstantSlots(e) {
    if ((0, _internalJs.isObjectLike)(e)) {
        const t = no(e);
        if (t) switch(t.branding){
            case 0, _internalJs.InstantBranding:
                return t;
            case 0, _internalJs.ZonedDateTimeBranding:
                return (0, _internalJs.createInstantSlots)(t.epochNanoseconds);
        }
    }
    return (0, _internalJs.parseInstant)(e);
}
function toTemporalInstant() {
    return Co((0, _internalJs.createInstantSlots)((0, _internalJs.numberToBigNano)(this.valueOf(), (0, _internalJs.nanoInMilli))));
}
function getImplTransition(e, t, n) {
    const o = t.B(toInstantSlots(n).epochNanoseconds, e);
    return o ? Co((0, _internalJs.createInstantSlots)(o)) : null;
}
function refineTimeZoneSlot(e) {
    return (0, _internalJs.isObjectLike)(e) ? (no(e) || {}).timeZone || Fo(e) : ((e)=>(0, _internalJs.resolveTimeZoneId)((0, _internalJs.parseTimeZoneId)((0, _internalJs.requireString)(e))))(e);
}
function toPlainTimeSlots(e, t) {
    if ((0, _internalJs.isObjectLike)(e)) {
        const n = no(e) || {};
        switch(n.branding){
            case 0, _internalJs.PlainTimeBranding:
                return (0, _internalJs.refineOverflowOptions)(t), n;
            case 0, _internalJs.PlainDateTimeBranding:
                return (0, _internalJs.refineOverflowOptions)(t), (0, _internalJs.createPlainTimeSlots)(n);
            case 0, _internalJs.ZonedDateTimeBranding:
                return (0, _internalJs.refineOverflowOptions)(t), (0, _internalJs.zonedDateTimeToPlainTime)(createTimeZoneOffsetOps, n);
        }
        return (0, _internalJs.refinePlainTimeBag)(e, t);
    }
    return (0, _internalJs.refineOverflowOptions)(t), (0, _internalJs.parsePlainTime)(e);
}
function optionalToPlainTimeFields(e) {
    return void 0 === e ? void 0 : toPlainTimeSlots(e);
}
function toPlainYearMonthSlots(e, t) {
    if (t = (0, _internalJs.copyOptions)(t), (0, _internalJs.isObjectLike)(e)) {
        const n = no(e);
        return n && n.branding === (0, _internalJs.PlainYearMonthBranding) ? ((0, _internalJs.refineOverflowOptions)(t), n) : (0, _internalJs.refinePlainYearMonthBag)(Ho(getCalendarSlotFromBag(e)), e, t);
    }
    const n = (0, _internalJs.parsePlainYearMonth)((0, _internalJs.createNativeStandardOps), e);
    return (0, _internalJs.refineOverflowOptions)(t), n;
}
function toPlainDateTimeSlots(e, t) {
    if (t = (0, _internalJs.copyOptions)(t), (0, _internalJs.isObjectLike)(e)) {
        const n = no(e) || {};
        switch(n.branding){
            case 0, _internalJs.PlainDateTimeBranding:
                return (0, _internalJs.refineOverflowOptions)(t), n;
            case 0, _internalJs.PlainDateBranding:
                return (0, _internalJs.refineOverflowOptions)(t), (0, _internalJs.createPlainDateTimeSlots)({
                    ...n,
                    ...(0, _internalJs.isoTimeFieldDefaults)
                });
            case 0, _internalJs.ZonedDateTimeBranding:
                return (0, _internalJs.refineOverflowOptions)(t), (0, _internalJs.zonedDateTimeToPlainDateTime)(createTimeZoneOffsetOps, n);
        }
        return (0, _internalJs.refinePlainDateTimeBag)(Ko(getCalendarSlotFromBag(e)), e, t);
    }
    const n = (0, _internalJs.parsePlainDateTime)(e);
    return (0, _internalJs.refineOverflowOptions)(t), n;
}
function toPlainDateSlots(e, t) {
    if (t = (0, _internalJs.copyOptions)(t), (0, _internalJs.isObjectLike)(e)) {
        const n = no(e) || {};
        switch(n.branding){
            case 0, _internalJs.PlainDateBranding:
                return (0, _internalJs.refineOverflowOptions)(t), n;
            case 0, _internalJs.PlainDateTimeBranding:
                return (0, _internalJs.refineOverflowOptions)(t), (0, _internalJs.createPlainDateSlots)(n);
            case 0, _internalJs.ZonedDateTimeBranding:
                return (0, _internalJs.refineOverflowOptions)(t), (0, _internalJs.zonedDateTimeToPlainDate)(createTimeZoneOffsetOps, n);
        }
        return (0, _internalJs.refinePlainDateBag)(Ko(getCalendarSlotFromBag(e)), e, t);
    }
    const n = (0, _internalJs.parsePlainDate)(e);
    return (0, _internalJs.refineOverflowOptions)(t), n;
}
function dayAdapter(e, t, n) {
    return (0, _internalJs.requirePositiveInteger)(t.call(e, Yo((0, _internalJs.createPlainDateSlots)(n, e))));
}
function createCompoundOpsCreator(e) {
    return (t)=>"string" == typeof t ? (0, _internalJs.createNativeStandardOps)(t) : ((e, t)=>{
            const n = Object.keys(t).sort(), o = {};
            for (const r of n)o[r] = (0, _internalJs.bindArgs)(t[r], e, e[r]);
            return o;
        })(t, e);
}
function toDurationSlots(e) {
    if ((0, _internalJs.isObjectLike)(e)) {
        const t = no(e);
        return t && t.branding === (0, _internalJs.DurationBranding) ? t : (0, _internalJs.refineDurationBag)(e);
    }
    return (0, _internalJs.parseDuration)(e);
}
function refinePublicRelativeTo(e) {
    if (void 0 !== e) {
        if ((0, _internalJs.isObjectLike)(e)) {
            const t = no(e) || {};
            switch(t.branding){
                case 0, _internalJs.ZonedDateTimeBranding:
                case 0, _internalJs.PlainDateBranding:
                    return t;
                case 0, _internalJs.PlainDateTimeBranding:
                    return (0, _internalJs.createPlainDateSlots)(t);
            }
            const n = getCalendarSlotFromBag(e);
            return {
                ...(0, _internalJs.refineMaybeZonedDateTimeBag)(refineTimeZoneSlot, createTimeZoneOps, Ko(n), e),
                calendar: n
            };
        }
        return (0, _internalJs.parseRelativeToSlots)(e);
    }
}
function getCalendarSlotFromBag(e) {
    return extractCalendarSlotFromBag(e) || (0, _internalJs.isoCalendarId);
}
function extractCalendarSlotFromBag(e) {
    const { calendar: t } = e;
    if (void 0 !== t) return refineCalendarSlot(t);
}
function refineCalendarSlot(e) {
    return (0, _internalJs.isObjectLike)(e) ? (no(e) || {}).calendar || cr(e) : ((e)=>(0, _internalJs.resolveCalendarId)((0, _internalJs.parseCalendarId)((0, _internalJs.requireString)(e))))(e);
}
function toZonedDateTimeSlots(e, t) {
    if (t = (0, _internalJs.copyOptions)(t), (0, _internalJs.isObjectLike)(e)) {
        const n = no(e);
        if (n && n.branding === (0, _internalJs.ZonedDateTimeBranding)) return (0, _internalJs.refineZonedFieldOptions)(t), n;
        const o = getCalendarSlotFromBag(e);
        return (0, _internalJs.refineZonedDateTimeBag)(refineTimeZoneSlot, createTimeZoneOps, Ko(o), o, e, t);
    }
    return (0, _internalJs.parseZonedDateTime)(e, t);
}
function adaptDateMethods(e) {
    return (0, _internalJs.mapProps)((e)=>(t)=>e(slotsToIso(t)), e);
}
function slotsToIso(e) {
    return (0, _internalJs.zonedEpochSlotsToIso)(e, createTimeZoneOffsetOps);
}
function createDateTimeFormatClass() {
    const e = (0, _internalJs.RawDateTimeFormat).prototype, t = Object.getOwnPropertyDescriptors(e), n = Object.getOwnPropertyDescriptors((0, _internalJs.RawDateTimeFormat)), DateTimeFormat = function(e, t = {}) {
        if (!(this instanceof DateTimeFormat)) return new DateTimeFormat(e, t);
        Or.set(this, ((e, t = {})=>{
            const n = new (0, _internalJs.RawDateTimeFormat)(e, t), o = n.resolvedOptions(), r = o.locale, a = (0, _internalJs.pluckProps)(Object.keys(t), o), i = (0, _internalJs.memoize)(createFormatPrepperForBranding), prepFormat = (...e)=>{
                let t;
                const o = e.map((e, n)=>{
                    const o = no(e), r = (o || {}).branding;
                    if (n && t && t !== r) throw new TypeError((0, _internalJs.mismatchingFormatTypes));
                    return t = r, o;
                });
                return t ? i(t)(r, a, ...o) : [
                    n,
                    ...e
                ];
            };
            return prepFormat.U = n, prepFormat;
        })(e, t));
    };
    for(const e in t){
        const n = t[e], o = e.startsWith("format") && createFormatMethod(e);
        "function" == typeof n.value ? n.value = "constructor" === e ? DateTimeFormat : o || createProxiedMethod(e) : o && (n.get = function() {
            return o.bind(this);
        });
    }
    return n.prototype.value = Object.create(e, t), Object.defineProperties(DateTimeFormat, n), DateTimeFormat;
}
function createFormatMethod(e) {
    return function(...t) {
        const n = Or.get(this), [o, ...r] = n(...t);
        return o[e](...r);
    };
}
function createProxiedMethod(e) {
    return function(...t) {
        return Or.get(this).U[e](...t);
    };
}
function createFormatPrepperForBranding(t) {
    const n = xn[t];
    if (!n) throw new TypeError((0, _internalJs.invalidFormatType)(t));
    return (0, _internalJs.createFormatPrepper)(n, (0, _internalJs.memoize)((0, _internalJs.createFormatForPrep)));
}
const xn = {
    Instant: (0, _internalJs.instantConfig),
    PlainDateTime: (0, _internalJs.dateTimeConfig),
    PlainDate: (0, _internalJs.dateConfig),
    PlainTime: (0, _internalJs.timeConfig),
    PlainYearMonth: (0, _internalJs.yearMonthConfig),
    PlainMonthDay: (0, _internalJs.monthDayConfig)
}, Rn = /*@__PURE__*/ (0, _internalJs.createFormatPrepper)((0, _internalJs.instantConfig)), Wn = /*@__PURE__*/ (0, _internalJs.createFormatPrepper)((0, _internalJs.zonedConfig)), Gn = /*@__PURE__*/ (0, _internalJs.createFormatPrepper)((0, _internalJs.dateTimeConfig)), Un = /*@__PURE__*/ (0, _internalJs.createFormatPrepper)((0, _internalJs.dateConfig)), zn = /*@__PURE__*/ (0, _internalJs.createFormatPrepper)((0, _internalJs.timeConfig)), Hn = /*@__PURE__*/ (0, _internalJs.createFormatPrepper)((0, _internalJs.yearMonthConfig)), Kn = /*@__PURE__*/ (0, _internalJs.createFormatPrepper)((0, _internalJs.monthDayConfig)), Qn = {
    era: (0, _internalJs.requireStringOrUndefined),
    eraYear: (0, _internalJs.requireIntegerOrUndefined),
    year: (0, _internalJs.requireInteger),
    month: (0, _internalJs.requirePositiveInteger),
    daysInMonth: (0, _internalJs.requirePositiveInteger),
    daysInYear: (0, _internalJs.requirePositiveInteger),
    inLeapYear: (0, _internalJs.requireBoolean),
    monthsInYear: (0, _internalJs.requirePositiveInteger)
}, Xn = {
    monthCode: (0, _internalJs.requireString)
}, $n = {
    day: (0, _internalJs.requirePositiveInteger)
}, _n = {
    dayOfWeek: (0, _internalJs.requirePositiveInteger),
    dayOfYear: (0, _internalJs.requirePositiveInteger),
    weekOfYear: (0, _internalJs.requirePositiveIntegerOrUndefined),
    yearOfWeek: (0, _internalJs.requireIntegerOrUndefined),
    daysInWeek: (0, _internalJs.requirePositiveInteger)
}, eo = /*@__PURE__*/ Object.assign({}, Qn, Xn, $n, _n), to = /*@__PURE__*/ new WeakMap, no = /*@__PURE__*/ to.get.bind(to), oo = /*@__PURE__*/ to.set.bind(to), ro = {
    ...createCalendarFieldMethods(Qn, [
        (0, _internalJs.PlainYearMonthBranding)
    ]),
    ...createCalendarFieldMethods(_n, []),
    ...createCalendarFieldMethods(Xn, [
        (0, _internalJs.PlainYearMonthBranding),
        (0, _internalJs.PlainMonthDayBranding)
    ]),
    ...createCalendarFieldMethods($n, [
        (0, _internalJs.PlainMonthDayBranding)
    ])
}, ao = /*@__PURE__*/ createCalendarGetters(eo), io = /*@__PURE__*/ createCalendarGetters({
    ...Qn,
    ...Xn
}), so = /*@__PURE__*/ createCalendarGetters({
    ...Xn,
    ...$n
}), lo = {
    calendarId: (e)=>(0, _internalJs.getId)(e.calendar)
}, co = /*@__PURE__*/ (0, _internalJs.mapProps)((e, t)=>function(n) {
        const { C: o } = this;
        return e(o[t](Yo((0, _internalJs.createPlainDateSlots)(n, o))));
    }, eo), uo = /*@__PURE__*/ (0, _internalJs.mapPropNames)((e)=>(t)=>t[e], (0, _internalJs.durationFieldNamesAsc).concat("sign")), fo = /*@__PURE__*/ (0, _internalJs.mapPropNames)((e, t)=>(e)=>e[(0, _internalJs.isoTimeFieldNamesAsc)[t]], (0, _internalJs.timeFieldNamesAsc)), mo = {
    epochSeconds: (0, _internalJs.getEpochSec),
    epochMilliseconds: (0, _internalJs.getEpochMilli),
    epochMicroseconds: (0, _internalJs.getEpochMicro),
    epochNanoseconds: (0, _internalJs.getEpochNano)
}, So = /*@__PURE__*/ (0, _internalJs.bindArgs)((0, _internalJs.excludePropsByName), new Set([
    "branding"
])), [Oo, To, po] = createSlotClass((0, _internalJs.PlainMonthDayBranding), (0, _internalJs.bindArgs)((0, _internalJs.constructPlainMonthDaySlots), refineCalendarSlot), {
    ...lo,
    ...so
}, {
    getISOFields: So,
    getCalendar: createCalendarFromSlots,
    with (e, t, n) {
        return To((0, _internalJs.plainMonthDayWithFields)(_o, e, this, rejectInvalidBag(t), n));
    },
    equals: (e, t)=>(0, _internalJs.plainMonthDaysEqual)(e, toPlainMonthDaySlots(t)),
    toPlainDate (e, t) {
        return Yo((0, _internalJs.plainMonthDayToPlainDate)($o, e, this, t));
    },
    toLocaleString (e, t, n) {
        const [o, r] = Kn(t, n, e);
        return o.format(r);
    },
    toString: (0, _internalJs.formatPlainMonthDayIso),
    toJSON: (e)=>(0, _internalJs.formatPlainMonthDayIso)(e),
    valueOf: neverValueOf
}, {
    from: (e, t)=>To(toPlainMonthDaySlots(e, t))
}), ho = {
    getOffsetNanosecondsFor: getOffsetNanosecondsForAdapter,
    getPossibleInstantsFor (e, t, n) {
        const o = [
            ...t.call(e, No((0, _internalJs.createPlainDateTimeSlots)(n, (0, _internalJs.isoCalendarId))))
        ].map((e)=>go(e).epochNanoseconds), r = o.length;
        return r > 1 && (o.sort((0, _internalJs.compareBigNanos)), (0, _internalJs.validateTimeZoneGap)((0, _internalJs.bigNanoToNumber)((0, _internalJs.diffBigNanos)(o[0], o[r - 1])))), o;
    }
}, Do = {
    getOffsetNanosecondsFor: getOffsetNanosecondsForAdapter
}, [Po, Co, go] = createSlotClass((0, _internalJs.InstantBranding), (0, _internalJs.constructInstantSlots), mo, {
    add: (e, t)=>Co((0, _internalJs.moveInstant)(0, e, toDurationSlots(t))),
    subtract: (e, t)=>Co((0, _internalJs.moveInstant)(1, e, toDurationSlots(t))),
    until: (e, t, n)=>ar((0, _internalJs.diffInstants)(0, e, toInstantSlots(t), n)),
    since: (e, t, n)=>ar((0, _internalJs.diffInstants)(1, e, toInstantSlots(t), n)),
    round: (e, t)=>Co((0, _internalJs.roundInstant)(e, t)),
    equals: (e, t)=>(0, _internalJs.instantsEqual)(e, toInstantSlots(t)),
    toZonedDateTime (e, t) {
        const n = (0, _internalJs.requireObjectLike)(t);
        return dr((0, _internalJs.instantToZonedDateTime)(e, refineTimeZoneSlot(n.timeZone), refineCalendarSlot(n.calendar)));
    },
    toZonedDateTimeISO: (e, t)=>dr((0, _internalJs.instantToZonedDateTime)(e, refineTimeZoneSlot(t))),
    toLocaleString (e, t, n) {
        const [o, r] = Rn(t, n, e);
        return o.format(r);
    },
    toString: (e, t)=>(0, _internalJs.formatInstantIso)(refineTimeZoneSlot, createTimeZoneOffsetOps, e, t),
    toJSON: (e)=>(0, _internalJs.formatInstantIso)(refineTimeZoneSlot, createTimeZoneOffsetOps, e),
    valueOf: neverValueOf
}, {
    from: (e)=>Co(toInstantSlots(e)),
    fromEpochSeconds: (e)=>Co((0, _internalJs.epochSecToInstant)(e)),
    fromEpochMilliseconds: (e)=>Co((0, _internalJs.epochMilliToInstant)(e)),
    fromEpochMicroseconds: (e)=>Co((0, _internalJs.epochMicroToInstant)(e)),
    fromEpochNanoseconds: (e)=>Co((0, _internalJs.epochNanoToInstant)(e)),
    compare: (e, t)=>(0, _internalJs.compareInstants)(toInstantSlots(e), toInstantSlots(t))
}), [Zo, bo] = createSlotClass("TimeZone", (e)=>{
    const t = (0, _internalJs.refineTimeZoneId)(e);
    return {
        branding: "TimeZone",
        id: t,
        F: (0, _internalJs.queryNativeTimeZone)(t)
    };
}, {
    id: (e)=>e.id
}, {
    getPossibleInstantsFor: ({ F: e }, t)=>e.getPossibleInstantsFor(toPlainDateTimeSlots(t)).map((e)=>Co((0, _internalJs.createInstantSlots)(e))),
    getOffsetNanosecondsFor: ({ F: e }, t)=>e.getOffsetNanosecondsFor(toInstantSlots(t).epochNanoseconds),
    getOffsetStringFor (e, t) {
        const n = toInstantSlots(t).epochNanoseconds, o = createAdapterOps(this, Do).getOffsetNanosecondsFor(n);
        return (0, _internalJs.formatOffsetNano)(o);
    },
    getPlainDateTimeFor (e, t, n = (0, _internalJs.isoCalendarId)) {
        const o = toInstantSlots(t).epochNanoseconds, r = createAdapterOps(this, Do).getOffsetNanosecondsFor(o);
        return No((0, _internalJs.createPlainDateTimeSlots)((0, _internalJs.epochNanoToIso)(o, r), refineCalendarSlot(n)));
    },
    getInstantFor (e, t, n) {
        const o = toPlainDateTimeSlots(t), r = (0, _internalJs.refineEpochDisambigOptions)(n), a = createAdapterOps(this);
        return Co((0, _internalJs.createInstantSlots)((0, _internalJs.getSingleInstantFor)(a, o, r)));
    },
    getNextTransition: ({ F: e }, t)=>getImplTransition(1, e, t),
    getPreviousTransition: ({ F: e }, t)=>getImplTransition(-1, e, t),
    equals (e, t) {
        return !!(0, _internalJs.isTimeZoneSlotsEqual)(this, refineTimeZoneSlot(t));
    },
    toString: (e)=>e.id,
    toJSON: (e)=>e.id
}, {
    from (e) {
        const t = refineTimeZoneSlot(e);
        return "string" == typeof t ? new Zo(t) : t;
    }
}), Fo = /*@__PURE__*/ createProtocolValidator(Object.keys(ho)), [Io, vo] = createSlotClass((0, _internalJs.PlainTimeBranding), (0, _internalJs.constructPlainTimeSlots), fo, {
    getISOFields: So,
    with (e, t, n) {
        return vo((0, _internalJs.plainTimeWithFields)(this, rejectInvalidBag(t), n));
    },
    add: (e, t)=>vo((0, _internalJs.movePlainTime)(0, e, toDurationSlots(t))),
    subtract: (e, t)=>vo((0, _internalJs.movePlainTime)(1, e, toDurationSlots(t))),
    until: (e, t, n)=>ar((0, _internalJs.diffPlainTimes)(0, e, toPlainTimeSlots(t), n)),
    since: (e, t, n)=>ar((0, _internalJs.diffPlainTimes)(1, e, toPlainTimeSlots(t), n)),
    round: (e, t)=>vo((0, _internalJs.roundPlainTime)(e, t)),
    equals: (e, t)=>(0, _internalJs.plainTimesEqual)(e, toPlainTimeSlots(t)),
    toZonedDateTime: (e, t)=>dr((0, _internalJs.plainTimeToZonedDateTime)(refineTimeZoneSlot, toPlainDateSlots, createTimeZoneOps, e, t)),
    toPlainDateTime: (e, t)=>No((0, _internalJs.plainTimeToPlainDateTime)(e, toPlainDateSlots(t))),
    toLocaleString (e, t, n) {
        const [o, r] = zn(t, n, e);
        return o.format(r);
    },
    toString: (0, _internalJs.formatPlainTimeIso),
    toJSON: (e)=>(0, _internalJs.formatPlainTimeIso)(e),
    valueOf: neverValueOf
}, {
    from: (e, t)=>vo(toPlainTimeSlots(e, t)),
    compare: (e, t)=>(0, _internalJs.compareIsoTimeFields)(toPlainTimeSlots(e), toPlainTimeSlots(t))
}), [wo, jo, Mo] = createSlotClass((0, _internalJs.PlainYearMonthBranding), (0, _internalJs.bindArgs)((0, _internalJs.constructPlainYearMonthSlots), refineCalendarSlot), {
    ...lo,
    ...io
}, {
    getISOFields: So,
    getCalendar: createCalendarFromSlots,
    with (e, t, n) {
        return jo((0, _internalJs.plainYearMonthWithFields)(Xo, e, this, rejectInvalidBag(t), n));
    },
    add: (e, t, n)=>jo((0, _internalJs.movePlainYearMonth)(nr, 0, e, toDurationSlots(t), n)),
    subtract: (e, t, n)=>jo((0, _internalJs.movePlainYearMonth)(nr, 1, e, toDurationSlots(t), n)),
    until: (e, t, n)=>ar((0, _internalJs.diffPlainYearMonth)(or, 0, e, toPlainYearMonthSlots(t), n)),
    since: (e, t, n)=>ar((0, _internalJs.diffPlainYearMonth)(or, 1, e, toPlainYearMonthSlots(t), n)),
    equals: (e, t)=>(0, _internalJs.plainYearMonthsEqual)(e, toPlainYearMonthSlots(t)),
    toPlainDate (e, t) {
        return Yo((0, _internalJs.plainYearMonthToPlainDate)($o, e, this, t));
    },
    toLocaleString (e, t, n) {
        const [o, r] = Hn(t, n, e);
        return o.format(r);
    },
    toString: (0, _internalJs.formatPlainYearMonthIso),
    toJSON: (e)=>(0, _internalJs.formatPlainYearMonthIso)(e),
    valueOf: neverValueOf
}, {
    from: (e, t)=>jo(toPlainYearMonthSlots(e, t)),
    compare: (e, t)=>(0, _internalJs.compareIsoDateFields)(toPlainYearMonthSlots(e), toPlainYearMonthSlots(t))
}), [yo, No] = createSlotClass((0, _internalJs.PlainDateTimeBranding), (0, _internalJs.bindArgs)((0, _internalJs.constructPlainDateTimeSlots), refineCalendarSlot), {
    ...lo,
    ...ao,
    ...fo
}, {
    getISOFields: So,
    getCalendar: createCalendarFromSlots,
    with (e, t, n) {
        return No((0, _internalJs.plainDateTimeWithFields)($o, e, this, rejectInvalidBag(t), n));
    },
    withCalendar: (e, t)=>No((0, _internalJs.slotsWithCalendar)(e, refineCalendarSlot(t))),
    withPlainDate: (e, t)=>No((0, _internalJs.plainDateTimeWithPlainDate)(e, toPlainDateSlots(t))),
    withPlainTime: (e, t)=>No((0, _internalJs.plainDateTimeWithPlainTime)(e, optionalToPlainTimeFields(t))),
    add: (e, t, n)=>No((0, _internalJs.movePlainDateTime)(er, 0, e, toDurationSlots(t), n)),
    subtract: (e, t, n)=>No((0, _internalJs.movePlainDateTime)(er, 1, e, toDurationSlots(t), n)),
    until: (e, t, n)=>ar((0, _internalJs.diffPlainDateTimes)(tr, 0, e, toPlainDateTimeSlots(t), n)),
    since: (e, t, n)=>ar((0, _internalJs.diffPlainDateTimes)(tr, 1, e, toPlainDateTimeSlots(t), n)),
    round: (e, t)=>No((0, _internalJs.roundPlainDateTime)(e, t)),
    equals: (e, t)=>(0, _internalJs.plainDateTimesEqual)(e, toPlainDateTimeSlots(t)),
    toZonedDateTime: (e, t, n)=>dr((0, _internalJs.plainDateTimeToZonedDateTime)(createTimeZoneOps, e, refineTimeZoneSlot(t), n)),
    toPlainDate: (e)=>Yo((0, _internalJs.createPlainDateSlots)(e)),
    toPlainTime: (e)=>vo((0, _internalJs.createPlainTimeSlots)(e)),
    toPlainYearMonth (e) {
        return jo((0, _internalJs.plainDateTimeToPlainYearMonth)(Ho, e, this));
    },
    toPlainMonthDay (e) {
        return To((0, _internalJs.plainDateTimeToPlainMonthDay)(Qo, e, this));
    },
    toLocaleString (e, t, n) {
        const [o, r] = Gn(t, n, e);
        return o.format(r);
    },
    toString: (0, _internalJs.formatPlainDateTimeIso),
    toJSON: (e)=>(0, _internalJs.formatPlainDateTimeIso)(e),
    valueOf: neverValueOf
}, {
    from: (e, t)=>No(toPlainDateTimeSlots(e, t)),
    compare: (e, t)=>(0, _internalJs.compareIsoDateTimeFields)(toPlainDateTimeSlots(e), toPlainDateTimeSlots(t))
}), [Bo, Yo, Ao] = createSlotClass((0, _internalJs.PlainDateBranding), (0, _internalJs.bindArgs)((0, _internalJs.constructPlainDateSlots), refineCalendarSlot), {
    ...lo,
    ...ao
}, {
    getISOFields: So,
    getCalendar: createCalendarFromSlots,
    with (e, t, n) {
        return Yo((0, _internalJs.plainDateWithFields)($o, e, this, rejectInvalidBag(t), n));
    },
    withCalendar: (e, t)=>Yo((0, _internalJs.slotsWithCalendar)(e, refineCalendarSlot(t))),
    add: (e, t, n)=>Yo((0, _internalJs.movePlainDate)(er, 0, e, toDurationSlots(t), n)),
    subtract: (e, t, n)=>Yo((0, _internalJs.movePlainDate)(er, 1, e, toDurationSlots(t), n)),
    until: (e, t, n)=>ar((0, _internalJs.diffPlainDates)(tr, 0, e, toPlainDateSlots(t), n)),
    since: (e, t, n)=>ar((0, _internalJs.diffPlainDates)(tr, 1, e, toPlainDateSlots(t), n)),
    equals: (e, t)=>(0, _internalJs.plainDatesEqual)(e, toPlainDateSlots(t)),
    toZonedDateTime (e, t) {
        const n = !(0, _internalJs.isObjectLike)(t) || t instanceof Zo ? {
            timeZone: t
        } : t;
        return dr((0, _internalJs.plainDateToZonedDateTime)(refineTimeZoneSlot, toPlainTimeSlots, createTimeZoneOps, e, n));
    },
    toPlainDateTime: (e, t)=>No((0, _internalJs.plainDateToPlainDateTime)(e, optionalToPlainTimeFields(t))),
    toPlainYearMonth (e) {
        return jo((0, _internalJs.plainDateToPlainYearMonth)(Ho, e, this));
    },
    toPlainMonthDay (e) {
        return To((0, _internalJs.plainDateToPlainMonthDay)(Qo, e, this));
    },
    toLocaleString (e, t, n) {
        const [o, r] = Un(t, n, e);
        return o.format(r);
    },
    toString: (0, _internalJs.formatPlainDateIso),
    toJSON: (e)=>(0, _internalJs.formatPlainDateIso)(e),
    valueOf: neverValueOf
}, {
    from: (e, t)=>Yo(toPlainDateSlots(e, t)),
    compare: (e, t)=>(0, _internalJs.compareIsoDateFields)(toPlainDateSlots(e), toPlainDateSlots(t))
}), Eo = {
    fields (e, t, n) {
        return [
            ...t.call(e, n)
        ];
    }
}, Vo = /*@__PURE__*/ Object.assign({
    dateFromFields (e, t, n, o) {
        return Ao(t.call(e, Object.assign(Object.create(null), n), o));
    }
}, Eo), Jo = /*@__PURE__*/ Object.assign({
    yearMonthFromFields (e, t, n, o) {
        return Mo(t.call(e, Object.assign(Object.create(null), n), o));
    }
}, Eo), Lo = /*@__PURE__*/ Object.assign({
    monthDayFromFields (e, t, n, o) {
        return po(t.call(e, Object.assign(Object.create(null), n), o));
    }
}, Eo), qo = {
    mergeFields (e, t, n, o) {
        return (0, _internalJs.requireObjectLike)(t.call(e, Object.assign(Object.create(null), n), Object.assign(Object.create(null), o)));
    }
}, ko = /*@__PURE__*/ Object.assign({}, Vo, qo), xo = /*@__PURE__*/ Object.assign({}, Jo, qo), Ro = /*@__PURE__*/ Object.assign({}, Lo, qo), Wo = {
    dateAdd (e, t, n, o, r) {
        return Ao(t.call(e, Yo((0, _internalJs.createPlainDateSlots)(n, e)), ar((0, _internalJs.createDurationSlots)(o)), r));
    }
}, Go = /*@__PURE__*/ Object.assign({}, Wo, {
    dateUntil (e, t, n, o, r, a) {
        return ir(t.call(e, Yo((0, _internalJs.createPlainDateSlots)(n, e)), Yo((0, _internalJs.createPlainDateSlots)(o, e)), Object.assign(Object.create(null), a, {
            largestUnit: (0, _internalJs.unitNamesAsc)[r]
        })));
    }
}), Uo = /*@__PURE__*/ Object.assign({}, Wo, {
    day: dayAdapter
}), zo = /*@__PURE__*/ Object.assign({}, Go, {
    day: dayAdapter
}), Ho = /*@__PURE__*/ createCompoundOpsCreator(Jo), Ko = /*@__PURE__*/ createCompoundOpsCreator(Vo), Qo = /*@__PURE__*/ createCompoundOpsCreator(Lo), Xo = /*@__PURE__*/ createCompoundOpsCreator(xo), $o = /*@__PURE__*/ createCompoundOpsCreator(ko), _o = /*@__PURE__*/ createCompoundOpsCreator(Ro), er = /*@__PURE__*/ createCompoundOpsCreator(Wo), tr = /*@__PURE__*/ createCompoundOpsCreator(Go), nr = /*@__PURE__*/ createCompoundOpsCreator(Uo), or = /*@__PURE__*/ createCompoundOpsCreator(zo), [rr, ar, ir] = createSlotClass((0, _internalJs.DurationBranding), (0, _internalJs.constructDurationSlots), {
    ...uo,
    blank: (0, _internalJs.getDurationBlank)
}, {
    with: (e, t)=>ar((0, _internalJs.durationWithFields)(e, t)),
    negated: (e)=>ar((0, _internalJs.negateDuration)(e)),
    abs: (e)=>ar((0, _internalJs.absDuration)(e)),
    add: (e, t, n)=>ar((0, _internalJs.addDurations)(refinePublicRelativeTo, tr, createTimeZoneOps, 0, e, toDurationSlots(t), n)),
    subtract: (e, t, n)=>ar((0, _internalJs.addDurations)(refinePublicRelativeTo, tr, createTimeZoneOps, 1, e, toDurationSlots(t), n)),
    round: (e, t)=>ar((0, _internalJs.roundDuration)(refinePublicRelativeTo, tr, createTimeZoneOps, e, t)),
    total: (e, t)=>(0, _internalJs.totalDuration)(refinePublicRelativeTo, tr, createTimeZoneOps, e, t),
    toLocaleString (e, t, n) {
        return Intl.DurationFormat ? new Intl.DurationFormat(t, n).format(this) : (0, _internalJs.formatDurationIso)(e);
    },
    toString: (0, _internalJs.formatDurationIso),
    toJSON: (e)=>(0, _internalJs.formatDurationIso)(e),
    valueOf: neverValueOf
}, {
    from: (e)=>ar(toDurationSlots(e)),
    compare: (e, t, n)=>(0, _internalJs.compareDurations)(refinePublicRelativeTo, er, createTimeZoneOps, toDurationSlots(e), toDurationSlots(t), n)
}), sr = {
    toString: (e)=>e.id,
    toJSON: (e)=>e.id,
    ...ro,
    dateAdd: ({ id: e, F: t }, n, o, r)=>Yo((0, _internalJs.createPlainDateSlots)(t.dateAdd(toPlainDateSlots(n), toDurationSlots(o), r), e)),
    dateUntil: ({ F: e }, t, n, o)=>ar((0, _internalJs.createDurationSlots)(e.dateUntil(toPlainDateSlots(t), toPlainDateSlots(n), (0, _internalJs.refineDateDiffOptions)(o)))),
    dateFromFields: ({ id: e, F: t }, n, o)=>Yo((0, _internalJs.refinePlainDateBag)(t, n, o, (0, _internalJs.getRequiredDateFields)(e))),
    yearMonthFromFields: ({ id: e, F: t }, n, o)=>jo((0, _internalJs.refinePlainYearMonthBag)(t, n, o, (0, _internalJs.getRequiredYearMonthFields)(e))),
    monthDayFromFields: ({ id: e, F: t }, n, o)=>To((0, _internalJs.refinePlainMonthDayBag)(t, 0, n, o, (0, _internalJs.getRequiredMonthDayFields)(e))),
    fields ({ F: e }, t) {
        const n = new Set((0, _internalJs.dateFieldNamesAlpha)), o = [];
        for (const e of t){
            if ((0, _internalJs.requireString)(e), !n.has(e)) throw new RangeError((0, _internalJs.forbiddenField)(e));
            n.delete(e), o.push(e);
        }
        return e.fields(o);
    },
    mergeFields: ({ F: e }, t, n)=>e.mergeFields((0, _internalJs.excludeUndefinedProps)((0, _internalJs.requireNonNullish)(t)), (0, _internalJs.excludeUndefinedProps)((0, _internalJs.requireNonNullish)(n)))
}, [lr] = createSlotClass("Calendar", (e)=>{
    const t = (0, _internalJs.refineCalendarId)(e);
    return {
        branding: "Calendar",
        id: t,
        F: (0, _internalJs.createNativeStandardOps)(t)
    };
}, {
    id: (e)=>e.id
}, sr, {
    from (e) {
        const t = refineCalendarSlot(e);
        return "string" == typeof t ? new lr(t) : t;
    }
}), cr = /*@__PURE__*/ createProtocolValidator(Object.keys(sr).slice(4)), [ur, dr] = createSlotClass((0, _internalJs.ZonedDateTimeBranding), (0, _internalJs.bindArgs)((0, _internalJs.constructZonedDateTimeSlots), refineCalendarSlot, refineTimeZoneSlot), {
    ...mo,
    ...lo,
    ...adaptDateMethods(ao),
    ...adaptDateMethods(fo),
    offset: (e)=>(0, _internalJs.formatOffsetNano)(slotsToIso(e).offsetNanoseconds),
    offsetNanoseconds: (e)=>slotsToIso(e).offsetNanoseconds,
    timeZoneId: (e)=>(0, _internalJs.getId)(e.timeZone),
    hoursInDay: (e)=>(0, _internalJs.computeZonedHoursInDay)(createTimeZoneOps, e)
}, {
    getISOFields: (e)=>(0, _internalJs.buildZonedIsoFields)(createTimeZoneOffsetOps, e),
    getCalendar: createCalendarFromSlots,
    getTimeZone: ({ timeZone: e })=>"string" == typeof e ? new Zo(e) : e,
    with (e, t, n) {
        return dr((0, _internalJs.zonedDateTimeWithFields)($o, createTimeZoneOps, e, this, rejectInvalidBag(t), n));
    },
    withCalendar: (e, t)=>dr((0, _internalJs.slotsWithCalendar)(e, refineCalendarSlot(t))),
    withTimeZone: (e, t)=>dr((0, _internalJs.slotsWithTimeZone)(e, refineTimeZoneSlot(t))),
    withPlainDate: (e, t)=>dr((0, _internalJs.zonedDateTimeWithPlainDate)(createTimeZoneOps, e, toPlainDateSlots(t))),
    withPlainTime: (e, t)=>dr((0, _internalJs.zonedDateTimeWithPlainTime)(createTimeZoneOps, e, optionalToPlainTimeFields(t))),
    add: (e, t, n)=>dr((0, _internalJs.moveZonedDateTime)(er, createTimeZoneOps, 0, e, toDurationSlots(t), n)),
    subtract: (e, t, n)=>dr((0, _internalJs.moveZonedDateTime)(er, createTimeZoneOps, 1, e, toDurationSlots(t), n)),
    until: (e, t, n)=>ar((0, _internalJs.createDurationSlots)((0, _internalJs.diffZonedDateTimes)(tr, createTimeZoneOps, 0, e, toZonedDateTimeSlots(t), n))),
    since: (e, t, n)=>ar((0, _internalJs.createDurationSlots)((0, _internalJs.diffZonedDateTimes)(tr, createTimeZoneOps, 1, e, toZonedDateTimeSlots(t), n))),
    round: (e, t)=>dr((0, _internalJs.roundZonedDateTime)(createTimeZoneOps, e, t)),
    startOfDay: (e)=>dr((0, _internalJs.computeZonedStartOfDay)(createTimeZoneOps, e)),
    equals: (e, t)=>(0, _internalJs.zonedDateTimesEqual)(e, toZonedDateTimeSlots(t)),
    toInstant: (e)=>Co((0, _internalJs.zonedDateTimeToInstant)(e)),
    toPlainDateTime: (e)=>No((0, _internalJs.zonedDateTimeToPlainDateTime)(createTimeZoneOffsetOps, e)),
    toPlainDate: (e)=>Yo((0, _internalJs.zonedDateTimeToPlainDate)(createTimeZoneOffsetOps, e)),
    toPlainTime: (e)=>vo((0, _internalJs.zonedDateTimeToPlainTime)(createTimeZoneOffsetOps, e)),
    toPlainYearMonth (e) {
        return jo((0, _internalJs.zonedDateTimeToPlainYearMonth)(Ho, e, this));
    },
    toPlainMonthDay (e) {
        return To((0, _internalJs.zonedDateTimeToPlainMonthDay)(Qo, e, this));
    },
    toLocaleString (e, t, n = {}) {
        const [o, r] = Wn(t, n, e);
        return o.format(r);
    },
    toString: (e, t)=>(0, _internalJs.formatZonedDateTimeIso)(createTimeZoneOffsetOps, e, t),
    toJSON: (e)=>(0, _internalJs.formatZonedDateTimeIso)(createTimeZoneOffsetOps, e),
    valueOf: neverValueOf
}, {
    from: (e, t)=>dr(toZonedDateTimeSlots(e, t)),
    compare: (e, t)=>(0, _internalJs.compareZonedDateTimes)(toZonedDateTimeSlots(e), toZonedDateTimeSlots(t))
}), fr = /*@__PURE__*/ Object.defineProperties({}, {
    ...(0, _internalJs.createStringTagDescriptors)("Temporal.Now"),
    ...(0, _internalJs.createPropDescriptors)({
        timeZoneId: ()=>(0, _internalJs.getCurrentTimeZoneId)(),
        instant: ()=>Co((0, _internalJs.createInstantSlots)((0, _internalJs.getCurrentEpochNano)())),
        zonedDateTime: (e, t = (0, _internalJs.getCurrentTimeZoneId)())=>dr((0, _internalJs.createZonedDateTimeSlots)((0, _internalJs.getCurrentEpochNano)(), refineTimeZoneSlot(t), refineCalendarSlot(e))),
        zonedDateTimeISO: (e = (0, _internalJs.getCurrentTimeZoneId)())=>dr((0, _internalJs.createZonedDateTimeSlots)((0, _internalJs.getCurrentEpochNano)(), refineTimeZoneSlot(e), (0, _internalJs.isoCalendarId))),
        plainDateTime: (e, t = (0, _internalJs.getCurrentTimeZoneId)())=>No((0, _internalJs.createPlainDateTimeSlots)((0, _internalJs.getCurrentIsoDateTime)(createTimeZoneOffsetOps(refineTimeZoneSlot(t))), refineCalendarSlot(e))),
        plainDateTimeISO: (e = (0, _internalJs.getCurrentTimeZoneId)())=>No((0, _internalJs.createPlainDateTimeSlots)((0, _internalJs.getCurrentIsoDateTime)(createTimeZoneOffsetOps(refineTimeZoneSlot(e))), (0, _internalJs.isoCalendarId))),
        plainDate: (e, t = (0, _internalJs.getCurrentTimeZoneId)())=>Yo((0, _internalJs.createPlainDateSlots)((0, _internalJs.getCurrentIsoDateTime)(createTimeZoneOffsetOps(refineTimeZoneSlot(t))), refineCalendarSlot(e))),
        plainDateISO: (e = (0, _internalJs.getCurrentTimeZoneId)())=>Yo((0, _internalJs.createPlainDateSlots)((0, _internalJs.getCurrentIsoDateTime)(createTimeZoneOffsetOps(refineTimeZoneSlot(e))), (0, _internalJs.isoCalendarId))),
        plainTimeISO: (e = (0, _internalJs.getCurrentTimeZoneId)())=>vo((0, _internalJs.createPlainTimeSlots)((0, _internalJs.getCurrentIsoDateTime)(createTimeZoneOffsetOps(refineTimeZoneSlot(e)))))
    })
}), mr = /*@__PURE__*/ Object.defineProperties({}, {
    ...(0, _internalJs.createStringTagDescriptors)("Temporal"),
    ...(0, _internalJs.createPropDescriptors)({
        PlainYearMonth: wo,
        PlainMonthDay: Oo,
        PlainDate: Bo,
        PlainTime: Io,
        PlainDateTime: yo,
        ZonedDateTime: ur,
        Instant: Po,
        Calendar: lr,
        TimeZone: Zo,
        Duration: rr,
        Now: fr
    })
}), Sr = /*@__PURE__*/ createDateTimeFormatClass(), Or = /*@__PURE__*/ new WeakMap, Tr = /*@__PURE__*/ Object.defineProperties(Object.create(Intl), (0, _internalJs.createPropDescriptors)({
    DateTimeFormat: Sr
}));

},{"./internal.js":"cEK56","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cEK56":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DurationBranding", ()=>qt);
parcelHelpers.export(exports, "InstantBranding", ()=>Oe);
parcelHelpers.export(exports, "PlainDateBranding", ()=>J);
parcelHelpers.export(exports, "PlainDateTimeBranding", ()=>We);
parcelHelpers.export(exports, "PlainMonthDayBranding", ()=>q);
parcelHelpers.export(exports, "PlainTimeBranding", ()=>xe);
parcelHelpers.export(exports, "PlainYearMonthBranding", ()=>L);
parcelHelpers.export(exports, "RawDateTimeFormat", ()=>En);
parcelHelpers.export(exports, "ZonedDateTimeBranding", ()=>Te);
parcelHelpers.export(exports, "absDuration", ()=>Rt);
parcelHelpers.export(exports, "addDurations", ()=>Wt);
parcelHelpers.export(exports, "bigNanoToNumber", ()=>oe);
parcelHelpers.export(exports, "bindArgs", ()=>E);
parcelHelpers.export(exports, "buildZonedIsoFields", ()=>mn);
parcelHelpers.export(exports, "compareBigNanos", ()=>te);
parcelHelpers.export(exports, "compareDurations", ()=>$t);
parcelHelpers.export(exports, "compareInstants", ()=>Ze);
parcelHelpers.export(exports, "compareIsoDateFields", ()=>rt);
parcelHelpers.export(exports, "compareIsoDateTimeFields", ()=>gt);
parcelHelpers.export(exports, "compareIsoTimeFields", ()=>He);
parcelHelpers.export(exports, "compareZonedDateTimes", ()=>yn);
parcelHelpers.export(exports, "computeZonedHoursInDay", ()=>dn);
parcelHelpers.export(exports, "computeZonedStartOfDay", ()=>Cn);
parcelHelpers.export(exports, "constructDurationSlots", ()=>Lt);
parcelHelpers.export(exports, "constructInstantSlots", ()=>Se);
parcelHelpers.export(exports, "constructPlainDateSlots", ()=>Nt);
parcelHelpers.export(exports, "constructPlainDateTimeSlots", ()=>pt);
parcelHelpers.export(exports, "constructPlainMonthDaySlots", ()=>G);
parcelHelpers.export(exports, "constructPlainTimeSlots", ()=>ke);
parcelHelpers.export(exports, "constructPlainYearMonthSlots", ()=>tt);
parcelHelpers.export(exports, "constructZonedDateTimeSlots", ()=>vn);
parcelHelpers.export(exports, "copyOptions", ()=>U);
parcelHelpers.export(exports, "createDurationSlots", ()=>Vt);
parcelHelpers.export(exports, "createFormatForPrep", ()=>qn);
parcelHelpers.export(exports, "createFormatPrepper", ()=>e);
parcelHelpers.export(exports, "createGetterDescriptors", ()=>O);
parcelHelpers.export(exports, "createInstantSlots", ()=>_);
parcelHelpers.export(exports, "createNameDescriptors", ()=>D);
parcelHelpers.export(exports, "createNativeStandardOps", ()=>Y);
parcelHelpers.export(exports, "createPlainDateSlots", ()=>v);
parcelHelpers.export(exports, "createPlainDateTimeSlots", ()=>ee);
parcelHelpers.export(exports, "createPlainTimeSlots", ()=>Ge);
parcelHelpers.export(exports, "createPropDescriptors", ()=>p);
parcelHelpers.export(exports, "createStringTagDescriptors", ()=>h);
parcelHelpers.export(exports, "createZonedDateTimeSlots", ()=>Yn);
parcelHelpers.export(exports, "dateConfig", ()=>o);
parcelHelpers.export(exports, "dateFieldNamesAlpha", ()=>en);
parcelHelpers.export(exports, "dateTimeConfig", ()=>n);
parcelHelpers.export(exports, "diffBigNanos", ()=>re);
parcelHelpers.export(exports, "diffInstants", ()=>le);
parcelHelpers.export(exports, "diffPlainDateTimes", ()=>ut);
parcelHelpers.export(exports, "diffPlainDates", ()=>Ft);
parcelHelpers.export(exports, "diffPlainTimes", ()=>Ae);
parcelHelpers.export(exports, "diffPlainYearMonth", ()=>Xe);
parcelHelpers.export(exports, "diffZonedDateTimes", ()=>Dn);
parcelHelpers.export(exports, "durationFieldNamesAsc", ()=>F);
parcelHelpers.export(exports, "durationWithFields", ()=>kt);
parcelHelpers.export(exports, "epochMicroToInstant", ()=>Ce);
parcelHelpers.export(exports, "epochMilliToInstant", ()=>Pe);
parcelHelpers.export(exports, "epochNanoToInstant", ()=>ge);
parcelHelpers.export(exports, "epochNanoToIso", ()=>Ie);
parcelHelpers.export(exports, "epochSecToInstant", ()=>De);
parcelHelpers.export(exports, "excludePropsByName", ()=>V);
parcelHelpers.export(exports, "excludeUndefinedProps", ()=>nn);
parcelHelpers.export(exports, "forbiddenField", ()=>tn);
parcelHelpers.export(exports, "forbiddenValueOf", ()=>A);
parcelHelpers.export(exports, "formatDurationIso", ()=>zt);
parcelHelpers.export(exports, "formatInstantIso", ()=>me);
parcelHelpers.export(exports, "formatOffsetNano", ()=>Fe);
parcelHelpers.export(exports, "formatPlainDateIso", ()=>yt);
parcelHelpers.export(exports, "formatPlainDateTimeIso", ()=>Tt);
parcelHelpers.export(exports, "formatPlainMonthDayIso", ()=>W);
parcelHelpers.export(exports, "formatPlainTimeIso", ()=>qe);
parcelHelpers.export(exports, "formatPlainYearMonthIso", ()=>et);
parcelHelpers.export(exports, "formatZonedDateTimeIso", ()=>In);
parcelHelpers.export(exports, "getCurrentEpochNano", ()=>Bn);
parcelHelpers.export(exports, "getCurrentIsoDateTime", ()=>An);
parcelHelpers.export(exports, "getCurrentTimeZoneId", ()=>Nn);
parcelHelpers.export(exports, "getDurationBlank", ()=>Jt);
parcelHelpers.export(exports, "getEpochMicro", ()=>N);
parcelHelpers.export(exports, "getEpochMilli", ()=>y);
parcelHelpers.export(exports, "getEpochNano", ()=>B);
parcelHelpers.export(exports, "getEpochSec", ()=>M);
parcelHelpers.export(exports, "getId", ()=>I);
parcelHelpers.export(exports, "getRequiredDateFields", ()=>ln);
parcelHelpers.export(exports, "getRequiredMonthDayFields", ()=>cn);
parcelHelpers.export(exports, "getRequiredYearMonthFields", ()=>un);
parcelHelpers.export(exports, "getSingleInstantFor", ()=>we);
parcelHelpers.export(exports, "hasAllPropsByName", ()=>C);
parcelHelpers.export(exports, "instantConfig", ()=>t);
parcelHelpers.export(exports, "instantToZonedDateTime", ()=>fe);
parcelHelpers.export(exports, "instantsEqual", ()=>ue);
parcelHelpers.export(exports, "invalidBag", ()=>Z);
parcelHelpers.export(exports, "invalidCallingContext", ()=>P);
parcelHelpers.export(exports, "invalidFormatType", ()=>Ln);
parcelHelpers.export(exports, "invalidProtocol", ()=>g);
parcelHelpers.export(exports, "isObjectLike", ()=>z);
parcelHelpers.export(exports, "isTimeZoneSlotsEqual", ()=>je);
parcelHelpers.export(exports, "isoCalendarId", ()=>X);
parcelHelpers.export(exports, "isoTimeFieldDefaults", ()=>Dt);
parcelHelpers.export(exports, "isoTimeFieldNamesAsc", ()=>j);
parcelHelpers.export(exports, "mapPropNames", ()=>b);
parcelHelpers.export(exports, "mapProps", ()=>T);
parcelHelpers.export(exports, "memoize", ()=>Jn);
parcelHelpers.export(exports, "mismatchingFormatTypes", ()=>kn);
parcelHelpers.export(exports, "monthDayConfig", ()=>i);
parcelHelpers.export(exports, "moveInstant", ()=>se);
parcelHelpers.export(exports, "movePlainDate", ()=>bt);
parcelHelpers.export(exports, "movePlainDateTime", ()=>ct);
parcelHelpers.export(exports, "movePlainTime", ()=>Ye);
parcelHelpers.export(exports, "movePlainYearMonth", ()=>Qe);
parcelHelpers.export(exports, "moveZonedDateTime", ()=>hn);
parcelHelpers.export(exports, "nanoInMilli", ()=>be);
parcelHelpers.export(exports, "negateDuration", ()=>xt);
parcelHelpers.export(exports, "numberToBigNano", ()=>he);
parcelHelpers.export(exports, "parseCalendarId", ()=>sn);
parcelHelpers.export(exports, "parseDuration", ()=>Kt);
parcelHelpers.export(exports, "parseInstant", ()=>pe);
parcelHelpers.export(exports, "parsePlainDate", ()=>At);
parcelHelpers.export(exports, "parsePlainDateTime", ()=>Ct);
parcelHelpers.export(exports, "parsePlainMonthDay", ()=>Q);
parcelHelpers.export(exports, "parsePlainTime", ()=>ze);
parcelHelpers.export(exports, "parsePlainYearMonth", ()=>ot);
parcelHelpers.export(exports, "parseRelativeToSlots", ()=>Xt);
parcelHelpers.export(exports, "parseTimeZoneId", ()=>Ne);
parcelHelpers.export(exports, "parseZonedDateTime", ()=>Mn);
parcelHelpers.export(exports, "plainDateTimeToPlainMonthDay", ()=>Ot);
parcelHelpers.export(exports, "plainDateTimeToPlainYearMonth", ()=>St);
parcelHelpers.export(exports, "plainDateTimeToZonedDateTime", ()=>mt);
parcelHelpers.export(exports, "plainDateTimeWithFields", ()=>at);
parcelHelpers.export(exports, "plainDateTimeWithPlainDate", ()=>st);
parcelHelpers.export(exports, "plainDateTimeWithPlainTime", ()=>lt);
parcelHelpers.export(exports, "plainDateTimesEqual", ()=>ft);
parcelHelpers.export(exports, "plainDateToPlainDateTime", ()=>wt);
parcelHelpers.export(exports, "plainDateToPlainMonthDay", ()=>Mt);
parcelHelpers.export(exports, "plainDateToPlainYearMonth", ()=>jt);
parcelHelpers.export(exports, "plainDateToZonedDateTime", ()=>vt);
parcelHelpers.export(exports, "plainDateWithFields", ()=>Zt);
parcelHelpers.export(exports, "plainDatesEqual", ()=>It);
parcelHelpers.export(exports, "plainMonthDayToPlainDate", ()=>R);
parcelHelpers.export(exports, "plainMonthDayWithFields", ()=>k);
parcelHelpers.export(exports, "plainMonthDaysEqual", ()=>x);
parcelHelpers.export(exports, "plainTimeToPlainDateTime", ()=>Le);
parcelHelpers.export(exports, "plainTimeToZonedDateTime", ()=>Je);
parcelHelpers.export(exports, "plainTimeWithFields", ()=>Be);
parcelHelpers.export(exports, "plainTimesEqual", ()=>Ve);
parcelHelpers.export(exports, "plainYearMonthToPlainDate", ()=>_e);
parcelHelpers.export(exports, "plainYearMonthWithFields", ()=>Ke);
parcelHelpers.export(exports, "plainYearMonthsEqual", ()=>$e);
parcelHelpers.export(exports, "pluckProps", ()=>Vn);
parcelHelpers.export(exports, "queryNativeTimeZone", ()=>ie);
parcelHelpers.export(exports, "refineCalendarId", ()=>rn);
parcelHelpers.export(exports, "refineDateDiffOptions", ()=>_t);
parcelHelpers.export(exports, "refineDurationBag", ()=>Ht);
parcelHelpers.export(exports, "refineEpochDisambigOptions", ()=>ve);
parcelHelpers.export(exports, "refineMaybeZonedDateTimeBag", ()=>Qt);
parcelHelpers.export(exports, "refineOverflowOptions", ()=>H);
parcelHelpers.export(exports, "refinePlainDateBag", ()=>Yt);
parcelHelpers.export(exports, "refinePlainDateTimeBag", ()=>Pt);
parcelHelpers.export(exports, "refinePlainMonthDayBag", ()=>K);
parcelHelpers.export(exports, "refinePlainTimeBag", ()=>Ue);
parcelHelpers.export(exports, "refinePlainYearMonthBag", ()=>nt);
parcelHelpers.export(exports, "refineTimeZoneId", ()=>Me);
parcelHelpers.export(exports, "refineZonedDateTimeBag", ()=>jn);
parcelHelpers.export(exports, "refineZonedFieldOptions", ()=>wn);
parcelHelpers.export(exports, "requireBoolean", ()=>f);
parcelHelpers.export(exports, "requireFunction", ()=>$);
parcelHelpers.export(exports, "requireInteger", ()=>u);
parcelHelpers.export(exports, "requireIntegerOrUndefined", ()=>c);
parcelHelpers.export(exports, "requireNonNullish", ()=>on);
parcelHelpers.export(exports, "requireObjectLike", ()=>de);
parcelHelpers.export(exports, "requirePositiveInteger", ()=>d);
parcelHelpers.export(exports, "requirePositiveIntegerOrUndefined", ()=>S);
parcelHelpers.export(exports, "requireString", ()=>m);
parcelHelpers.export(exports, "requireStringOrUndefined", ()=>l);
parcelHelpers.export(exports, "resolveCalendarId", ()=>an);
parcelHelpers.export(exports, "resolveTimeZoneId", ()=>ye);
parcelHelpers.export(exports, "roundDuration", ()=>Gt);
parcelHelpers.export(exports, "roundInstant", ()=>ce);
parcelHelpers.export(exports, "roundPlainDateTime", ()=>dt);
parcelHelpers.export(exports, "roundPlainTime", ()=>Ee);
parcelHelpers.export(exports, "roundZonedDateTime", ()=>Pn);
parcelHelpers.export(exports, "slotsWithCalendar", ()=>it);
parcelHelpers.export(exports, "slotsWithTimeZone", ()=>On);
parcelHelpers.export(exports, "timeConfig", ()=>r);
parcelHelpers.export(exports, "timeFieldNamesAsc", ()=>w);
parcelHelpers.export(exports, "totalDuration", ()=>Ut);
parcelHelpers.export(exports, "unitNamesAsc", ()=>Et);
parcelHelpers.export(exports, "validateTimeZoneGap", ()=>ne);
parcelHelpers.export(exports, "validateTimeZoneOffset", ()=>ae);
parcelHelpers.export(exports, "yearMonthConfig", ()=>a);
parcelHelpers.export(exports, "zonedConfig", ()=>s);
parcelHelpers.export(exports, "zonedDateTimeToInstant", ()=>Zn);
parcelHelpers.export(exports, "zonedDateTimeToPlainDate", ()=>Bt);
parcelHelpers.export(exports, "zonedDateTimeToPlainDateTime", ()=>ht);
parcelHelpers.export(exports, "zonedDateTimeToPlainMonthDay", ()=>Fn);
parcelHelpers.export(exports, "zonedDateTimeToPlainTime", ()=>Re);
parcelHelpers.export(exports, "zonedDateTimeToPlainYearMonth", ()=>bn);
parcelHelpers.export(exports, "zonedDateTimeWithFields", ()=>Sn);
parcelHelpers.export(exports, "zonedDateTimeWithPlainDate", ()=>Tn);
parcelHelpers.export(exports, "zonedDateTimeWithPlainTime", ()=>pn);
parcelHelpers.export(exports, "zonedDateTimesEqual", ()=>gn);
parcelHelpers.export(exports, "zonedEpochSlotsToIso", ()=>fn);
function clampProp(e, n, t, o, r) {
    return clampEntity(n, getDefinedProp(e, n), t, o, r);
}
function clampEntity(e, n, t, o, r, i) {
    const a = clampNumber(n, t, o);
    if (r && n !== a) throw new RangeError(numberOutOfRange(e, n, t, o, i));
    return a;
}
function getDefinedProp(e, n) {
    const t = e[n];
    if (void 0 === t) throw new TypeError(missingField(n));
    return t;
}
function z(e) {
    return null !== e && /object|function/.test(typeof e);
}
function Jn(e, n = Map) {
    const t = new n;
    return (n, ...o)=>{
        if (t.has(n)) return t.get(n);
        const r = e(n, ...o);
        return t.set(n, r), r;
    };
}
function D(e) {
    return p({
        name: e
    }, 1);
}
function p(e, n) {
    return T((e)=>({
            value: e,
            configurable: 1,
            writable: !n
        }), e);
}
function O(e) {
    return T((e)=>({
            get: e,
            configurable: 1
        }), e);
}
function h(e) {
    return {
        [Symbol.toStringTag]: {
            value: e,
            configurable: 1
        }
    };
}
function zipProps(e, n) {
    const t = {};
    let o = e.length;
    for (const r of n)t[e[--o]] = r;
    return t;
}
function T(e, n, t) {
    const o = {};
    for(const r in n)o[r] = e(n[r], r, t);
    return o;
}
function b(e, n, t) {
    const o = {};
    for(let r = 0; r < n.length; r++){
        const i = n[r];
        o[i] = e(i, r, t);
    }
    return o;
}
function remapProps(e, n, t) {
    const o = {};
    for(let r = 0; r < e.length; r++)o[n[r]] = t[e[r]];
    return o;
}
function Vn(e, n) {
    const t = {};
    for (const o of e)t[o] = n[o];
    return t;
}
function V(e, n) {
    const t = {};
    for(const o in n)e.has(o) || (t[o] = n[o]);
    return t;
}
function nn(e) {
    e = {
        ...e
    };
    const n = Object.keys(e);
    for (const t of n)void 0 === e[t] && delete e[t];
    return e;
}
function C(e, n) {
    for (const t of n){
        if (!(t in e)) return 0;
    }
    return 1;
}
function allPropsEqual(e, n, t) {
    for (const o of e){
        if (n[o] !== t[o]) return 0;
    }
    return 1;
}
function zeroOutProps(e, n, t) {
    const o = {
        ...t
    };
    for(let t = 0; t < n; t++)o[e[t]] = 0;
    return o;
}
function E(e, ...n) {
    return (...t)=>e(...n, ...t);
}
function capitalize(e) {
    return e[0].toUpperCase() + e.substring(1);
}
function sortStrings(e) {
    return e.slice().sort();
}
function padNumber(e, n) {
    return String(n).padStart(e, "0");
}
function compareNumbers(e, n) {
    return Math.sign(e - n);
}
function clampNumber(e, n, t) {
    return Math.min(Math.max(e, n), t);
}
function divModFloor(e, n) {
    return [
        Math.floor(e / n),
        modFloor(e, n)
    ];
}
function modFloor(e, n) {
    return (e % n + n) % n;
}
function divModTrunc(e, n) {
    return [
        divTrunc(e, n),
        modTrunc(e, n)
    ];
}
function divTrunc(e, n) {
    return Math.trunc(e / n) || 0;
}
function modTrunc(e, n) {
    return e % n || 0;
}
function hasHalf(e) {
    return .5 === Math.abs(e % 1);
}
function givenFieldsToBigNano(e, n, t) {
    let o = 0, r = 0;
    for(let i = 0; i <= n; i++){
        const n = e[t[i]], a = Xr[i], s = Qr / a, [c, u] = divModTrunc(n, s);
        o += u * a, r += c;
    }
    const [i, a] = divModTrunc(o, Qr);
    return [
        r + i,
        a
    ];
}
function nanoToGivenFields(e, n, t) {
    const o = {};
    for(let r = n; r >= 0; r--){
        const n = Xr[r];
        o[t[r]] = divTrunc(e, n), e = modTrunc(e, n);
    }
    return o;
}
function un(e) {
    return e === X ? si : [];
}
function cn(e) {
    return e === X ? li : [];
}
function ln(e) {
    return e === X ? [
        "year",
        "day"
    ] : [];
}
function l(e) {
    if (void 0 !== e) return m(e);
}
function S(e) {
    if (void 0 !== e) return d(e);
}
function c(e) {
    if (void 0 !== e) return u(e);
}
function d(e) {
    return requireNumberIsPositive(u(e));
}
function u(e) {
    return requireNumberIsInteger(Ni(e));
}
function on(e) {
    if (null == e) throw new TypeError("Cannot be null or undefined");
    return e;
}
function requirePropDefined(e, n) {
    if (null == n) throw new RangeError(missingField(e));
    return n;
}
function de(e) {
    if (!z(e)) throw new TypeError(hr);
    return e;
}
function requireType(e, n, t = e) {
    if (typeof n !== e) throw new TypeError(invalidEntity(t, n));
    return n;
}
function requireNumberIsInteger(e, n = "number") {
    if (!Number.isInteger(e)) throw new RangeError(expectedInteger(n, e));
    return e || 0;
}
function requireNumberIsPositive(e, n = "number") {
    if (e <= 0) throw new RangeError(expectedPositive(n, e));
    return e;
}
function toString(e) {
    if ("symbol" == typeof e) throw new TypeError(pr);
    return String(e);
}
function toStringViaPrimitive(e, n) {
    return z(e) ? String(e) : m(e, n);
}
function toBigInt(e) {
    if ("string" == typeof e) return BigInt(e);
    if ("bigint" != typeof e) throw new TypeError(invalidBigInt(e));
    return e;
}
function toNumber(e, n = "number") {
    if ("bigint" == typeof e) throw new TypeError(forbiddenBigIntToNumber(n));
    if (e = Number(e), !Number.isFinite(e)) throw new RangeError(expectedFinite(n, e));
    return e;
}
function toInteger(e, n) {
    return Math.trunc(toNumber(e, n)) || 0;
}
function toStrictInteger(e, n) {
    return requireNumberIsInteger(toNumber(e, n), n);
}
function toPositiveInteger(e, n) {
    return requireNumberIsPositive(toInteger(e, n), n);
}
function createBigNano(e, n) {
    let [t, o] = divModTrunc(n, Qr), r = e + t;
    const i = Math.sign(r);
    return i && i === -Math.sign(o) && (r -= i, o += i * Qr), [
        r,
        o
    ];
}
function addBigNanos(e, n, t = 1) {
    return createBigNano(e[0] + n[0] * t, e[1] + n[1] * t);
}
function moveBigNano(e, n) {
    return createBigNano(e[0], e[1] + n);
}
function re(e, n) {
    return addBigNanos(n, e, -1);
}
function te(e, n) {
    return compareNumbers(e[0], n[0]) || compareNumbers(e[1], n[1]);
}
function bigNanoOutside(e, n, t) {
    return -1 === te(e, n) || 1 === te(e, t);
}
function bigIntToBigNano(e, n = 1) {
    const t = BigInt(Qr / n);
    return [
        Number(e / t),
        Number(e % t) * n
    ];
}
function he(e, n = 1) {
    const t = Qr / n, [o, r] = divModTrunc(e, t);
    return [
        o,
        r * n
    ];
}
function bigNanoToBigInt(e, n = 1) {
    const [t, o] = e, r = Math.floor(o / n), i = Qr / n;
    return BigInt(t) * BigInt(i) + BigInt(r);
}
function oe(e, n = 1, t) {
    const [o, r] = e, [i, a] = divModTrunc(r, n);
    return o * (Qr / n) + (i + (t ? a / n : 0));
}
function divModBigNano(e, n, t = divModFloor) {
    const [o, r] = e, [i, a] = t(r, n);
    return [
        o * (Qr / n) + i,
        a
    ];
}
function hashIntlFormatParts(e, n) {
    const t = e.formatToParts(n), o = {};
    for (const e of t)o[e.type] = e.value;
    return o;
}
function checkIsoYearMonthInBounds(e) {
    return clampProp(e, "isoYear", Wi, Li, 1), e.isoYear === Wi ? clampProp(e, "isoMonth", 4, 12, 1) : e.isoYear === Li && clampProp(e, "isoMonth", 1, 9, 1), e;
}
function checkIsoDateInBounds(e) {
    return checkIsoDateTimeInBounds({
        ...e,
        ...Dt,
        isoHour: 12
    }), e;
}
function checkIsoDateTimeInBounds(e) {
    const n = clampProp(e, "isoYear", Wi, Li, 1), t = n === Wi ? 1 : n === Li ? -1 : 0;
    return t && checkEpochNanoInBounds(isoToEpochNano({
        ...e,
        isoDay: e.isoDay + t,
        isoNanosecond: e.isoNanosecond - t
    })), e;
}
function checkEpochNanoInBounds(e) {
    if (!e || bigNanoOutside(e, Ui, Ai)) throw new RangeError(Cr);
    return e;
}
function isoTimeFieldsToNano(e) {
    return givenFieldsToBigNano(e, 5, j)[1];
}
function nanoToIsoTimeAndDay(e) {
    const [n, t] = divModFloor(e, Qr);
    return [
        nanoToGivenFields(t, 5, j),
        n
    ];
}
function epochNanoToSec(e) {
    return epochNanoToSecMod(e)[0];
}
function epochNanoToSecMod(e) {
    return divModBigNano(e, _r);
}
function isoToEpochMilli(e) {
    return isoArgsToEpochMilli(e.isoYear, e.isoMonth, e.isoDay, e.isoHour, e.isoMinute, e.isoSecond, e.isoMillisecond);
}
function isoToEpochNano(e) {
    const n = isoToEpochMilli(e);
    if (void 0 !== n) {
        const [t, o] = divModTrunc(n, Gr);
        return [
            t,
            o * be + (e.isoMicrosecond || 0) * Vr + (e.isoNanosecond || 0)
        ];
    }
}
function isoToEpochNanoWithOffset(e, n) {
    const [t, o] = nanoToIsoTimeAndDay(isoTimeFieldsToNano(e) - n);
    return checkEpochNanoInBounds(isoToEpochNano({
        ...e,
        isoDay: e.isoDay + o,
        ...t
    }));
}
function isoArgsToEpochSec(...e) {
    return isoArgsToEpochMilli(...e) / Hr;
}
function isoArgsToEpochMilli(...e) {
    const [n, t] = isoToLegacyDate(...e), o = n.valueOf();
    if (!isNaN(o)) return o - t * Gr;
}
function isoToLegacyDate(e, n = 1, t = 1, o = 0, r = 0, i = 0, a = 0) {
    const s = e === Wi ? 1 : e === Li ? -1 : 0, c = new Date;
    return c.setUTCHours(o, r, i, a), c.setUTCFullYear(e, n - 1, t + s), [
        c,
        s
    ];
}
function Ie(e, n) {
    let [t, o] = moveBigNano(e, n);
    o < 0 && (o += Qr, t -= 1);
    const [r, i] = divModFloor(o, be), [a, s] = divModFloor(i, Vr);
    return epochMilliToIso(t * Gr + r, a, s);
}
function epochMilliToIso(e, n = 0, t = 0) {
    const o = Math.ceil(Math.max(0, Math.abs(e) - qi) / Gr) * Math.sign(e), r = new Date(e - o * Gr);
    return zipProps(Bi, [
        r.getUTCFullYear(),
        r.getUTCMonth() + 1,
        r.getUTCDate() + o,
        r.getUTCHours(),
        r.getUTCMinutes(),
        r.getUTCSeconds(),
        r.getUTCMilliseconds(),
        n,
        t
    ]);
}
function computeIsoDateParts(e) {
    return [
        e.isoYear,
        e.isoMonth,
        e.isoDay
    ];
}
function computeIsoMonthsInYear() {
    return $i;
}
function computeIsoDaysInMonth(e, n) {
    switch(n){
        case 2:
            return computeIsoInLeapYear(e) ? 29 : 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
    }
    return 31;
}
function computeIsoDaysInYear(e) {
    return computeIsoInLeapYear(e) ? 366 : 365;
}
function computeIsoInLeapYear(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function computeIsoDayOfWeek(e) {
    const [n, t] = isoToLegacyDate(e.isoYear, e.isoMonth, e.isoDay);
    return modFloor(n.getUTCDay() - t, 7) || 7;
}
function computeGregoryEraParts({ isoYear: e }) {
    return e < 1 ? [
        "bce",
        1 - e
    ] : [
        "ce",
        e
    ];
}
function computeJapaneseEraParts(e) {
    const n = isoToEpochMilli(e);
    if (n < Gi) return computeGregoryEraParts(e);
    const t = hashIntlFormatParts(Wa(Ti), n), { era: o, eraYear: r } = parseIntlYear(t, Ti);
    return [
        o,
        r
    ];
}
function checkIsoDateTimeFields(e) {
    return checkIsoDateFields(e), constrainIsoTimeFields(e, 1), e;
}
function checkIsoDateFields(e) {
    return constrainIsoDateFields(e, 1), e;
}
function isIsoDateFieldsValid(e) {
    return allPropsEqual(wi, e, constrainIsoDateFields(e));
}
function constrainIsoDateFields(e, n) {
    const { isoYear: t } = e, o = clampProp(e, "isoMonth", 1, computeIsoMonthsInYear(), n);
    return {
        isoYear: t,
        isoMonth: o,
        isoDay: clampProp(e, "isoDay", 1, computeIsoDaysInMonth(t, o), n)
    };
}
function constrainIsoTimeFields(e, n) {
    return zipProps(j, [
        clampProp(e, "isoHour", 0, 23, n),
        clampProp(e, "isoMinute", 0, 59, n),
        clampProp(e, "isoSecond", 0, 59, n),
        clampProp(e, "isoMillisecond", 0, 999, n),
        clampProp(e, "isoMicrosecond", 0, 999, n),
        clampProp(e, "isoNanosecond", 0, 999, n)
    ]);
}
function H(e) {
    return void 0 === e ? 0 : la(de(e));
}
function wn(e, n = 0) {
    e = normalizeOptions(e);
    const t = fa(e), o = da(e, n);
    return [
        la(e),
        o,
        t
    ];
}
function ve(e) {
    return fa(normalizeOptions(e));
}
function _t(e) {
    return e = normalizeOptions(e), ca(e, 9, 6, 1);
}
function refineDiffOptions(e, n, t, o = 9, r = 0, i = 4) {
    n = normalizeOptions(n);
    let a = ca(n, o, r), s = parseRoundingIncInteger(n), c = ga(n, i);
    const u = sa(n, o, r, 1);
    return null == a ? a = Math.max(t, u) : checkLargestSmallestUnit(a, u), s = refineRoundingInc(s, u, 1), e && (c = ((e)=>e < 4 ? (e + 2) % 4 : e)(c)), [
        a,
        u,
        s,
        c
    ];
}
function refineRoundingOptions(e, n = 6, t) {
    let o = parseRoundingIncInteger(e = normalizeOptionsOrString(e, Vi));
    const r = ga(e, 7);
    let i = sa(e, n);
    return i = requirePropDefined(Vi, i), o = refineRoundingInc(o, i, void 0, t), [
        i,
        o,
        r
    ];
}
function refineDateDisplayOptions(e) {
    return ma(normalizeOptions(e));
}
function refineTimeDisplayOptions(e, n) {
    return refineTimeDisplayTuple(normalizeOptions(e), n);
}
function refineTimeDisplayTuple(e, n = 4) {
    const t = refineSubsecDigits(e);
    return [
        ga(e, 4),
        ...refineSmallestUnitAndSubsecDigits(sa(e, n), t)
    ];
}
function refineSmallestUnitAndSubsecDigits(e, n) {
    return null != e ? [
        Xr[e],
        e < 4 ? 9 - 3 * e : -1
    ] : [
        void 0 === n ? 1 : 10 ** (9 - n),
        n
    ];
}
function parseRoundingIncInteger(e) {
    const n = e[Ji];
    return void 0 === n ? 1 : toInteger(n, Ji);
}
function refineRoundingInc(e, n, t, o) {
    const r = o ? Qr : Xr[n + 1];
    if (r) {
        const t = Xr[n];
        if (r % ((e = clampEntity(Ji, e, 1, r / t - (o ? 0 : 1), 1)) * t)) throw new RangeError(invalidEntity(Ji, e));
    } else e = clampEntity(Ji, e, 1, t ? 10 ** 9 : 1, 1);
    return e;
}
function refineSubsecDigits(e) {
    let n = e[Ki];
    if (void 0 !== n) {
        if ("number" != typeof n) {
            if ("auto" === toString(n)) return;
            throw new RangeError(invalidEntity(Ki, n));
        }
        n = clampEntity(Ki, Math.floor(n), 0, 9, 1);
    }
    return n;
}
function normalizeOptions(e) {
    return void 0 === e ? {} : de(e);
}
function normalizeOptionsOrString(e, n) {
    return "string" == typeof e ? {
        [n]: e
    } : de(e);
}
function U(e) {
    if (void 0 !== e) {
        if (z(e)) return Object.assign(Object.create(null), e);
        throw new TypeError(hr);
    }
}
function overrideOverflowOptions(e, n) {
    return e && Object.assign(Object.create(null), e, {
        overflow: ea[n]
    });
}
function refineUnitOption(e, n, t = 9, o = 0, r) {
    let i = n[e];
    if (void 0 === i) return r ? o : void 0;
    if (i = toString(i), "auto" === i) return r ? o : null;
    let a = $r[i];
    if (void 0 === a && (a = Si[i]), void 0 === a) throw new RangeError(invalidChoice(e, i, $r));
    return clampEntity(e, a, o, t, 1, Et), a;
}
function refineChoiceOption(e, n, t, o = 0) {
    const r = t[e];
    if (void 0 === r) return o;
    const i = toString(r), a = n[i];
    if (void 0 === a) throw new RangeError(invalidChoice(e, i, n));
    return a;
}
function checkLargestSmallestUnit(e, n) {
    if (n > e) throw new RangeError(Ur);
}
function _(e) {
    return {
        branding: Oe,
        epochNanoseconds: e
    };
}
function Yn(e, n, t) {
    return {
        branding: Te,
        calendar: t,
        timeZone: n,
        epochNanoseconds: e
    };
}
function ee(e, n = e.calendar) {
    return {
        branding: We,
        calendar: n,
        ...Vn(Ci, e)
    };
}
function v(e, n = e.calendar) {
    return {
        branding: J,
        calendar: n,
        ...Vn(ki, e)
    };
}
function createPlainYearMonthSlots(e, n = e.calendar) {
    return {
        branding: L,
        calendar: n,
        ...Vn(ki, e)
    };
}
function createPlainMonthDaySlots(e, n = e.calendar) {
    return {
        branding: q,
        calendar: n,
        ...Vn(ki, e)
    };
}
function Ge(e) {
    return {
        branding: xe,
        ...Vn(Yi, e)
    };
}
function Vt(e) {
    return {
        branding: qt,
        sign: computeDurationSign(e),
        ...Vn(yi, e)
    };
}
function M(e) {
    return epochNanoToSec(e.epochNanoseconds);
}
function y(e) {
    return divModBigNano(e.epochNanoseconds, be)[0];
}
function N(e) {
    return bigNanoToBigInt(e.epochNanoseconds, Vr);
}
function B(e) {
    return bigNanoToBigInt(e.epochNanoseconds);
}
function extractEpochNano(e) {
    return e.epochNanoseconds;
}
function I(e) {
    return "string" == typeof e ? e : m(e.id);
}
function isIdLikeEqual(e, n) {
    return e === n || I(e) === I(n);
}
function Ut(e, n, t, o, r) {
    const i = getLargestDurationUnit(o), [a, s] = ((e, n)=>{
        const t = n((e = normalizeOptionsOrString(e, _i))[Qi]);
        let o = ua(e);
        return o = requirePropDefined(_i, o), [
            o,
            t
        ];
    })(r, e);
    if (isUniformUnit(Math.max(a, i), s)) return ((e, n)=>oe(durationFieldsToBigNano(e), Xr[n], 1))(o, a);
    if (!s) throw new RangeError(zr);
    const [c, u, l] = createMarkerSystem(n, t, s), f = createMarkerToEpochNano(l), d = createMoveMarker(u, l);
    return ((e, n, t, o, r, i)=>{
        const a = computeDurationSign(e), [s, c] = clampRelativeDuration(Oi(t, e), t, a, o, r, i), u = computeEpochNanoFrac(n, s, c);
        return e[F[t]] + u * a;
    })(...spanDuration(o, a, c, f, d, createDiffMarkers(u, l)), a, c, f, d);
}
function clampRelativeDuration(e, n, t, o, r, i) {
    const a = {
        ...Fi,
        [F[n]]: t
    }, s = i(o, e), c = i(s, a);
    return [
        r(s),
        r(c)
    ];
}
function computeEpochNanoFrac(e, n, t) {
    const o = oe(re(n, t));
    if (!o) throw new RangeError(vr);
    return oe(re(n, e)) / o;
}
function ce(e, n) {
    const [t, o, r] = refineRoundingOptions(n, 5, 1);
    return _(roundBigNano(e.epochNanoseconds, t, o, r, 1));
}
function Pn(e, n, t) {
    let { epochNanoseconds: o, timeZone: r, calendar: i } = n;
    const [a, s, c] = refineRoundingOptions(t);
    if (0 === a && 1 === s) return n;
    const u = e(r);
    if (6 === a) o = ((e, n, t, o)=>{
        const r = fn(t, n), [i, a] = e(r), s = t.epochNanoseconds, c = we(n, i), u = we(n, a);
        if (bigNanoOutside(s, c, u)) throw new RangeError(vr);
        return roundWithMode(computeEpochNanoFrac(s, c, u), o) ? u : c;
    })(computeDayInterval, u, n, c);
    else {
        const e = u.getOffsetNanosecondsFor(o);
        o = getMatchingInstantFor(u, roundDateTime(Ie(o, e), a, s, c), e, 2, 0, 1);
    }
    return Yn(o, r, i);
}
function dt(e, n) {
    return ee(roundDateTime(e, ...refineRoundingOptions(n)), e.calendar);
}
function Ee(e, n) {
    const [t, o, r] = refineRoundingOptions(n, 5);
    var i;
    return Ge((i = r, roundTimeToNano(e, computeNanoInc(t, o), i)[0]));
}
function dn(e, n) {
    const t = e(n.timeZone), o = fn(n, t), [r, i] = computeDayInterval(o), a = oe(re(we(t, r), we(t, i)), Kr, 1);
    if (a <= 0) throw new RangeError(vr);
    return a;
}
function Cn(e, n) {
    const { timeZone: t, calendar: o } = n, r = ((e, n, t)=>we(n, e(fn(t, n))))(computeDayFloor, e(t), n);
    return Yn(r, t, o);
}
function roundDateTime(e, n, t, o) {
    return roundDateTimeToNano(e, computeNanoInc(n, t), o);
}
function roundDateTimeToNano(e, n, t) {
    const [o, r] = roundTimeToNano(e, n, t);
    return checkIsoDateTimeInBounds({
        ...moveByDays(e, r),
        ...o
    });
}
function roundTimeToNano(e, n, t) {
    return nanoToIsoTimeAndDay(roundByInc(isoTimeFieldsToNano(e), n, t));
}
function roundToMinute(e) {
    return roundByInc(e, Jr, 7);
}
function computeNanoInc(e, n) {
    return Xr[e] * n;
}
function computeDayInterval(e) {
    const n = computeDayFloor(e);
    return [
        n,
        moveByDays(n, 1)
    ];
}
function computeDayFloor(e) {
    return Zi(6, e);
}
function roundDayTimeDurationByInc(e, n, t) {
    const o = Math.min(getLargestDurationUnit(e), 6);
    return nanoToDurationDayTimeFields(roundBigNanoByInc(durationFieldsToBigNano(e, o), n, t), o);
}
function roundRelativeDuration(e, n, t, o, r, i, a, s, c) {
    if (0 === o && 1 === r) return e;
    const u = o > 6 ? nudgeRelativeDuration : isZonedEpochSlots(a) && o < 6 ? nudgeZonedTimeDuration : nudgeDayTimeDuration;
    let [l, f, d] = u(e, n, t, o, r, i, a, s, c);
    return d && (l = ((e, n, t, o, r, i, a)=>{
        const s = computeDurationSign(e);
        for(let c = o + 1; c <= t; c++){
            if (7 === c && 7 !== t) continue;
            const o = Oi(c, e);
            o[F[c]] += s;
            const u = oe(re(i(a(r, o)), n));
            if (u && Math.sign(u) !== s) break;
            e = o;
        }
        return e;
    })(l, f, t, Math.max(6, o), a, s, c)), l;
}
function roundBigNano(e, n, t, o, r) {
    if (6 === n) {
        const n = ((e)=>e[0] + e[1] / Qr)(e);
        return [
            roundByInc(n, t, o),
            0
        ];
    }
    return roundBigNanoByInc(e, computeNanoInc(n, t), o, r);
}
function roundBigNanoByInc(e, n, t, o) {
    let [r, i] = e;
    o && i < 0 && (i += Qr, r -= 1);
    const [a, s] = divModFloor(roundByInc(i, n, t), Qr);
    return createBigNano(r + a, s);
}
function roundByInc(e, n, t) {
    return roundWithMode(e / n, t) * n;
}
function roundWithMode(e, n) {
    return Ta[n](e);
}
function nudgeDayTimeDuration(e, n, t, o, r, i) {
    const a = computeDurationSign(e), s = durationFieldsToBigNano(e), c = roundBigNano(s, o, r, i), u = re(s, c), l = Math.sign(c[0] - s[0]) === a, f = nanoToDurationDayTimeFields(c, Math.min(t, 6));
    return [
        {
            ...e,
            ...f
        },
        addBigNanos(n, u),
        l
    ];
}
function nudgeZonedTimeDuration(e, n, t, o, r, i, a, s, c) {
    const u = computeDurationSign(e);
    let [l, f] = durationFieldsToBigNano(e, 5);
    const d = computeNanoInc(o, r);
    let m = roundByInc(f, d, i);
    const [p, h] = clampRelativeDuration({
        ...e,
        ...bi
    }, 6, u, a, s, c), g = m - oe(re(p, h));
    g && Math.sign(g) !== u ? n = moveBigNano(p, m) : (l += u, m = roundByInc(g, d, i), n = moveBigNano(h, m));
    const T = nanoToDurationTimeFields(m);
    return [
        {
            ...e,
            ...T,
            days: e.days + l
        },
        n,
        Boolean(l)
    ];
}
function nudgeRelativeDuration(e, n, t, o, r, i, a, s, c) {
    const u = computeDurationSign(e), l = F[o], f = Oi(o, e), d = divTrunc(e[l], r) * r;
    f[l] = d;
    const [m, p] = clampRelativeDuration(f, o, r * u, a, s, c), h = d + computeEpochNanoFrac(n, m, p) * u * r, g = roundByInc(h, r, i), T = Math.sign(g - h) === u;
    return f[l] = g, [
        f,
        T ? p : m,
        T
    ];
}
function me(e, n, t, o) {
    const [r, i, a, s] = ((e)=>{
        const n = refineTimeDisplayTuple(e = normalizeOptions(e));
        return [
            e.timeZone,
            ...n
        ];
    })(o), c = void 0 !== r;
    return ((e, n, t, o, r, i)=>{
        t = roundBigNanoByInc(t, r, o, 1);
        const a = n.getOffsetNanosecondsFor(t);
        return formatIsoDateTimeFields(Ie(t, a), i) + (e ? Fe(roundToMinute(a)) : "Z");
    })(c, n(c ? e(r) : Da), t.epochNanoseconds, i, a, s);
}
function In(e, n, t) {
    const [o, r, i, a, s, c] = ((e)=>{
        e = normalizeOptions(e);
        const n = ma(e), t = refineSubsecDigits(e), o = ha(e), r = ga(e, 4), i = sa(e, 4);
        return [
            n,
            pa(e),
            o,
            r,
            ...refineSmallestUnitAndSubsecDigits(i, t)
        ];
    })(t);
    return ((e, n, t, o, r, i, a, s, c, u)=>{
        o = roundBigNanoByInc(o, c, s, 1);
        const l = e(t).getOffsetNanosecondsFor(o);
        return formatIsoDateTimeFields(Ie(o, l), u) + Fe(roundToMinute(l), a) + ((e, n)=>1 !== n ? "[" + (2 === n ? "!" : "") + I(e) + "]" : "")(t, i) + formatCalendar(n, r);
    })(e, n.calendar, n.timeZone, n.epochNanoseconds, o, r, i, a, s, c);
}
function Tt(e, n) {
    const [t, o, r, i] = ((e)=>(e = normalizeOptions(e), [
            ma(e),
            ...refineTimeDisplayTuple(e)
        ]))(n);
    var a, s, c;
    return a = e.calendar, s = t, c = i, formatIsoDateTimeFields(roundDateTimeToNano(e, r, o), c) + formatCalendar(a, s);
}
function yt(e, n) {
    var t, o, r;
    return t = e.calendar, o = e, r = refineDateDisplayOptions(n), formatIsoDateFields(o) + formatCalendar(t, r);
}
function et(e, n) {
    return formatDateLikeIso(e.calendar, formatIsoYearMonthFields, e, refineDateDisplayOptions(n));
}
function W(e, n) {
    return formatDateLikeIso(e.calendar, formatIsoMonthDayFields, e, refineDateDisplayOptions(n));
}
function qe(e, n) {
    const [t, o, r] = refineTimeDisplayOptions(n);
    var i;
    return i = r, formatIsoTimeFields(roundTimeToNano(e, o, t)[0], i);
}
function zt(e, n) {
    const [t, o, r] = refineTimeDisplayOptions(n, 3);
    return o > 1 && (e = {
        ...e,
        ...roundDayTimeDurationByInc(e, o, t)
    }), ((e, n)=>{
        const { sign: t } = e, o = -1 === t ? negateDurationFields(e) : e, { hours: r, minutes: i } = o, [a, s] = divModBigNano(durationFieldsToBigNano(o, 3), _r, divModTrunc);
        checkDurationTimeUnit(a);
        const c = formatSubsecNano(s, n), u = n >= 0 || !t || c;
        return (t < 0 ? "-" : "") + "P" + formatDurationFragments({
            Y: formatDurationNumber(o.years),
            M: formatDurationNumber(o.months),
            W: formatDurationNumber(o.weeks),
            D: formatDurationNumber(o.days)
        }) + (r || i || a || u ? "T" + formatDurationFragments({
            H: formatDurationNumber(r),
            M: formatDurationNumber(i),
            S: formatDurationNumber(a, u) + c
        }) : "");
    })(e, r);
}
function formatDateLikeIso(e, n, t, o) {
    const r = I(e), i = o > 1 || 0 === o && r !== X;
    return 1 === o ? r === X ? n(t) : formatIsoDateFields(t) : i ? formatIsoDateFields(t) + formatCalendarId(r, 2 === o) : n(t);
}
function formatDurationFragments(e) {
    const n = [];
    for(const t in e){
        const o = e[t];
        o && n.push(o, t);
    }
    return n.join("");
}
function formatIsoDateTimeFields(e, n) {
    return formatIsoDateFields(e) + "T" + formatIsoTimeFields(e, n);
}
function formatIsoDateFields(e) {
    return formatIsoYearMonthFields(e) + "-" + xr(e.isoDay);
}
function formatIsoYearMonthFields(e) {
    const { isoYear: n } = e;
    return (n < 0 || n > 9999 ? getSignStr(n) + padNumber(6, Math.abs(n)) : padNumber(4, n)) + "-" + xr(e.isoMonth);
}
function formatIsoMonthDayFields(e) {
    return xr(e.isoMonth) + "-" + xr(e.isoDay);
}
function formatIsoTimeFields(e, n) {
    const t = [
        xr(e.isoHour),
        xr(e.isoMinute)
    ];
    return -1 !== n && t.push(xr(e.isoSecond) + ((e, n, t, o)=>formatSubsecNano(e * be + n * Vr + t, o))(e.isoMillisecond, e.isoMicrosecond, e.isoNanosecond, n)), t.join(":");
}
function Fe(e, n = 0) {
    if (1 === n) return "";
    const [t, o] = divModFloor(Math.abs(e), Kr), [r, i] = divModFloor(o, Jr), [a, s] = divModFloor(i, _r);
    return getSignStr(e) + xr(t) + ":" + xr(r) + (a || s ? ":" + xr(a) + formatSubsecNano(s) : "");
}
function formatCalendar(e, n) {
    if (1 !== n) {
        const t = I(e);
        if (n > 1 || 0 === n && t !== X) return formatCalendarId(t, 2 === n);
    }
    return "";
}
function formatCalendarId(e, n) {
    return "[" + (n ? "!" : "") + "u-ca=" + e + "]";
}
function formatSubsecNano(e, n) {
    let t = padNumber(9, e);
    return t = void 0 === n ? t.replace(ya, "") : t.slice(0, n), t ? "." + t : "";
}
function getSignStr(e) {
    return e < 0 ? "-" : "+";
}
function formatDurationNumber(e, n) {
    return e || n ? e.toLocaleString("fullwide", {
        useGrouping: 0
    }) : "";
}
function _zonedEpochSlotsToIso(e, n) {
    const { epochNanoseconds: t } = e, o = (n.getOffsetNanosecondsFor ? n : n(e.timeZone)).getOffsetNanosecondsFor(t), r = Ie(t, o);
    return {
        calendar: e.calendar,
        ...r,
        offsetNanoseconds: o
    };
}
function mn(e, n) {
    const t = fn(n, e);
    return {
        calendar: n.calendar,
        ...Vn(Ci, t),
        offset: Fe(t.offsetNanoseconds),
        timeZone: n.timeZone
    };
}
function getMatchingInstantFor(e, n, t, o = 0, r = 0, i, a) {
    if (void 0 !== t && 1 === o && (1 === o || a)) return isoToEpochNanoWithOffset(n, t);
    const s = e.getPossibleInstantsFor(n);
    if (void 0 !== t && 3 !== o) {
        const e = ((e, n, t, o)=>{
            const r = isoToEpochNano(n);
            o && (t = roundToMinute(t));
            for (const n of e){
                let e = oe(re(n, r));
                if (o && (e = roundToMinute(e)), e === t) return n;
            }
        })(s, n, t, i);
        if (void 0 !== e) return e;
        if (0 === o) throw new RangeError(kr);
    }
    return a ? isoToEpochNano(n) : we(e, n, r, s);
}
function we(e, n, t = 0, o = e.getPossibleInstantsFor(n)) {
    if (1 === o.length) return o[0];
    if (1 === t) throw new RangeError(Yr);
    if (o.length) return o[3 === t ? 1 : 0];
    const r = isoToEpochNano(n), i = ((e, n)=>{
        const t = e.getOffsetNanosecondsFor(moveBigNano(n, -Qr));
        return ne(e.getOffsetNanosecondsFor(moveBigNano(n, Qr)) - t);
    })(e, r), a = i * (2 === t ? -1 : 1);
    return (o = e.getPossibleInstantsFor(Ie(r, a)))[2 === t ? 0 : o.length - 1];
}
function ae(e) {
    if (Math.abs(e) >= Qr) throw new RangeError(wr);
    return e;
}
function ne(e) {
    if (e > Qr) throw new RangeError(Br);
    return e;
}
function se(e, n, t) {
    return _(checkEpochNanoInBounds(addBigNanos(n.epochNanoseconds, ((e)=>{
        if (durationHasDateParts(e)) throw new RangeError(qr);
        return durationFieldsToBigNano(e, 5);
    })(e ? negateDurationFields(t) : t))));
}
function hn(e, n, t, o, r, i = Object.create(null)) {
    const a = n(o.timeZone), s = e(o.calendar);
    return {
        ...o,
        ...moveZonedEpochs(s, a, o, t ? negateDurationFields(r) : r, i)
    };
}
function ct(e, n, t, o, r = Object.create(null)) {
    const { calendar: i } = t;
    return ee(moveDateTime(e(i), t, n ? negateDurationFields(o) : o, r), i);
}
function bt(e, n, t, o, r) {
    const { calendar: i } = t;
    return v(moveDate(e(i), t, n ? negateDurationFields(o) : o, r), i);
}
function Qe(e, n, t, o, r = Object.create(null)) {
    const i = t.calendar, a = e(i);
    let s = moveToDayOfMonthUnsafe(a, t);
    n && (o = xt(o)), o.sign < 0 && (s = a.dateAdd(s, {
        ...Fi,
        months: 1
    }), s = moveByDays(s, -1));
    const c = a.dateAdd(s, o, r);
    return createPlainYearMonthSlots(moveToDayOfMonthUnsafe(a, c), i);
}
function Ye(e, n, t) {
    return Ge(moveTime(n, e ? negateDurationFields(t) : t)[0]);
}
function moveZonedEpochs(e, n, t, o, r) {
    const i = durationFieldsToBigNano(o, 5);
    let a = t.epochNanoseconds;
    if (durationHasDateParts(o)) {
        const s = fn(t, n);
        a = addBigNanos(we(n, {
            ...moveDate(e, s, {
                ...o,
                ...bi
            }, r),
            ...Vn(j, s)
        }), i);
    } else a = addBigNanos(a, i), H(r);
    return {
        epochNanoseconds: checkEpochNanoInBounds(a)
    };
}
function moveDateTime(e, n, t, o) {
    const [r, i] = moveTime(n, t);
    return checkIsoDateTimeInBounds({
        ...moveDate(e, n, {
            ...t,
            ...bi,
            days: t.days + i
        }, o),
        ...r
    });
}
function moveDate(e, n, t, o) {
    if (t.years || t.months || t.weeks) return e.dateAdd(n, t, o);
    H(o);
    const r = t.days + durationFieldsToBigNano(t, 5)[0];
    return r ? checkIsoDateInBounds(moveByDays(n, r)) : n;
}
function moveToDayOfMonthUnsafe(e, n, t = 1) {
    return moveByDays(n, t - e.day(n));
}
function moveTime(e, n) {
    const [t, o] = durationFieldsToBigNano(n, 5), [r, i] = nanoToIsoTimeAndDay(isoTimeFieldsToNano(e) + o);
    return [
        r,
        t + i
    ];
}
function moveByDays(e, n) {
    return n ? {
        ...e,
        ...epochMilliToIso(isoToEpochMilli(e) + n * Gr)
    } : e;
}
function createMarkerSystem(e, n, t) {
    const o = e(t.calendar);
    return isZonedEpochSlots(t) ? [
        t,
        o,
        n(t.timeZone)
    ] : [
        {
            ...t,
            ...Dt
        },
        o
    ];
}
function createMarkerToEpochNano(e) {
    return e ? extractEpochNano : isoToEpochNano;
}
function createMoveMarker(e, n) {
    return n ? E(moveZonedEpochs, e, n) : E(moveDateTime, e);
}
function createDiffMarkers(e, n) {
    return n ? E(diffZonedEpochsExact, e, n) : E(diffDateTimesExact, e);
}
function isZonedEpochSlots(e) {
    return e && e.epochNanoseconds;
}
function isUniformUnit(e, n) {
    return e <= 6 - (isZonedEpochSlots(n) ? 1 : 0);
}
function spanDuration(e, n, t, o, r, i) {
    const a = r(t, e);
    return [
        i(t, a, n),
        o(a)
    ];
}
function Wt(e, n, t, o, r, i, a) {
    const s = e(normalizeOptions(a).relativeTo), c = Math.max(getLargestDurationUnit(r), getLargestDurationUnit(i));
    if (isUniformUnit(c, s)) return Vt(checkDurationUnits(((e, n, t, o)=>{
        const r = addBigNanos(durationFieldsToBigNano(e), durationFieldsToBigNano(n), o ? -1 : 1);
        if (!Number.isFinite(r[0])) throw new RangeError(Cr);
        return {
            ...Fi,
            ...nanoToDurationDayTimeFields(r, t)
        };
    })(r, i, c, o)));
    if (!s) throw new RangeError(zr);
    o && (i = negateDurationFields(i));
    const [u, l, f] = createMarkerSystem(n, t, s), d = createMoveMarker(l, f), m = createDiffMarkers(l, f), p = d(u, r);
    return Vt(m(u, d(p, i), c));
}
function Gt(e, n, t, o, r) {
    const i = getLargestDurationUnit(o), [a, s, c, u, l] = ((e, n, t)=>{
        e = normalizeOptionsOrString(e, Vi);
        let o = ca(e);
        const r = t(e[Qi]);
        let i = parseRoundingIncInteger(e);
        const a = ga(e, 7);
        let s = sa(e);
        if (void 0 === o && void 0 === s) throw new RangeError(Ar);
        return null == s && (s = 0), null == o && (o = Math.max(s, n)), checkLargestSmallestUnit(o, s), i = refineRoundingInc(i, s, 1), [
            o,
            s,
            i,
            a,
            r
        ];
    })(r, i, e);
    if (isUniformUnit(Math.max(i, a), l)) return Vt(checkDurationUnits(((e, n, t, o, r)=>{
        const i = roundBigNano(durationFieldsToBigNano(e), t, o, r);
        return {
            ...Fi,
            ...nanoToDurationDayTimeFields(i, n)
        };
    })(o, a, s, c, u)));
    if (!l) throw new RangeError(zr);
    const [f, d, m] = createMarkerSystem(n, t, l), p = createMarkerToEpochNano(m), h = createMoveMarker(d, m), g = createDiffMarkers(d, m);
    let T = 0;
    o.weeks && 7 === s && (T = o.weeks, o = {
        ...o,
        weeks: 0
    });
    let [D, I] = spanDuration(o, a, f, p, h, g);
    const M = o.sign, N = computeDurationSign(D);
    if (M && N && M !== N) throw new RangeError(vr);
    return N && (D = roundRelativeDuration(D, I, a, s, c, u, f, p, h)), D.weeks += T, Vt(D);
}
function Rt(e) {
    return -1 === e.sign ? xt(e) : e;
}
function xt(e) {
    return Vt(negateDurationFields(e));
}
function negateDurationFields(e) {
    const n = {};
    for (const t of F)n[t] = -1 * e[t] || 0;
    return n;
}
function Jt(e) {
    return !e.sign;
}
function computeDurationSign(e, n = F) {
    let t = 0;
    for (const o of n){
        const n = Math.sign(e[o]);
        if (n) {
            if (t && t !== n) throw new RangeError(Rr);
            t = n;
        }
    }
    return t;
}
function checkDurationUnits(e) {
    for (const n of Ei)clampEntity(n, e[n], -Pa, Pa, 1);
    return checkDurationTimeUnit(oe(durationFieldsToBigNano(e), _r)), e;
}
function checkDurationTimeUnit(e) {
    if (!Number.isSafeInteger(e)) throw new RangeError(Zr);
}
function durationFieldsToBigNano(e, n = 6) {
    return givenFieldsToBigNano(e, n, F);
}
function nanoToDurationDayTimeFields(e, n = 6) {
    const [t, o] = e, r = nanoToGivenFields(o, n, F);
    if (r[F[n]] += t * (Qr / Xr[n]), !Number.isFinite(r[F[n]])) throw new RangeError(Cr);
    return r;
}
function nanoToDurationTimeFields(e, n = 5) {
    return nanoToGivenFields(e, n, F);
}
function durationHasDateParts(e) {
    return Boolean(computeDurationSign(e, vi));
}
function getLargestDurationUnit(e) {
    let n = 9;
    for(; n > 0 && !e[F[n]]; n--);
    return n;
}
function createSplitTuple(e, n) {
    return [
        e,
        n
    ];
}
function computePeriod(e) {
    const n = Math.floor(e / Ia) * Ia;
    return [
        n,
        n + Ia
    ];
}
function pe(e) {
    const n = parseDateTimeLike(e = toStringViaPrimitive(e));
    if (!n) throw new RangeError(failedParse(e));
    let t;
    if (n.O) t = 0;
    else {
        if (!n.offset) throw new RangeError(failedParse(e));
        t = parseOffsetNano(n.offset);
    }
    return n.timeZone && parseOffsetNanoMaybe(n.timeZone, 1), _(isoToEpochNanoWithOffset(checkIsoDateTimeFields(n), t));
}
function Xt(e) {
    const n = parseDateTimeLike(m(e));
    if (!n) throw new RangeError(failedParse(e));
    if (n.timeZone) return finalizeZonedDateTime(n, n.offset ? parseOffsetNano(n.offset) : void 0);
    if (n.O) throw new RangeError(failedParse(e));
    return finalizeDate(n);
}
function Mn(e, n) {
    const t = parseDateTimeLike(m(e));
    if (!t || !t.timeZone) throw new RangeError(failedParse(e));
    const { offset: o } = t, r = o ? parseOffsetNano(o) : void 0, [, i, a] = wn(n);
    return finalizeZonedDateTime(t, r, i, a);
}
function parseOffsetNano(e) {
    const n = parseOffsetNanoMaybe(e);
    if (void 0 === n) throw new RangeError(failedParse(e));
    return n;
}
function Ct(e) {
    const n = parseDateTimeLike(m(e));
    if (!n || n.O) throw new RangeError(failedParse(e));
    return ee(finalizeDateTime(n));
}
function At(e) {
    const n = parseDateTimeLike(m(e));
    if (!n || n.O) throw new RangeError(failedParse(e));
    return v(n.I ? finalizeDateTime(n) : finalizeDate(n));
}
function ot(e, n) {
    const t = parseYearMonthOnly(m(n));
    if (t) return requireIsoCalendar(t), createPlainYearMonthSlots(checkIsoYearMonthInBounds(checkIsoDateFields(t)));
    const o = At(n);
    return createPlainYearMonthSlots(moveToDayOfMonthUnsafe(e(o.calendar), o));
}
function requireIsoCalendar(e) {
    if (e.calendar !== X) throw new RangeError(invalidSubstring(e.calendar));
}
function Q(e, n) {
    const t = parseMonthDayOnly(m(n));
    if (t) return requireIsoCalendar(t), createPlainMonthDaySlots(checkIsoDateFields(t));
    const o = At(n), { calendar: r } = o, i = e(r), [a, s, c] = i.v(o), [u, l] = i.$(a, s), [f, d] = i.k(u, l, c);
    return createPlainMonthDaySlots(checkIsoDateInBounds(i.L(f, d, c)), r);
}
function ze(e) {
    let n, t = ((e)=>{
        const n = Za.exec(e);
        return n ? (organizeAnnotationParts(n[10]), organizeTimeParts(n)) : void 0;
    })(m(e));
    if (!t) {
        if (t = parseDateTimeLike(e), !t) throw new RangeError(failedParse(e));
        if (!t.I) throw new RangeError(failedParse(e));
        if (t.O) throw new RangeError(invalidSubstring("Z"));
        requireIsoCalendar(t);
    }
    if ((n = parseYearMonthOnly(e)) && isIsoDateFieldsValid(n)) throw new RangeError(failedParse(e));
    if ((n = parseMonthDayOnly(e)) && isIsoDateFieldsValid(n)) throw new RangeError(failedParse(e));
    return Ge(constrainIsoTimeFields(t, 1));
}
function Kt(e) {
    const n = ((e)=>{
        const n = qa.exec(e);
        return n ? ((e)=>{
            function parseUnit(e, r, i) {
                let a = 0, s = 0;
                if (i && ([a, o] = divModFloor(o, Xr[i])), void 0 !== e) {
                    if (t) throw new RangeError(invalidSubstring(e));
                    s = ((e)=>{
                        const n = parseInt(e);
                        if (!Number.isFinite(n)) throw new RangeError(invalidSubstring(e));
                        return n;
                    })(e), n = 1, r && (o = parseSubsecNano(r) * (Xr[i] / _r), t = 1);
                }
                return a + s;
            }
            let n = 0, t = 0, o = 0, r = {
                ...zipProps(F, [
                    parseUnit(e[2]),
                    parseUnit(e[3]),
                    parseUnit(e[4]),
                    parseUnit(e[5]),
                    parseUnit(e[6], e[7], 5),
                    parseUnit(e[8], e[9], 4),
                    parseUnit(e[10], e[11], 3)
                ]),
                ...nanoToGivenFields(o, 2, F)
            };
            if (!n) throw new RangeError(noValidFields(F));
            return parseSign(e[1]) < 0 && (r = negateDurationFields(r)), r;
        })(n) : void 0;
    })(m(e));
    if (!n) throw new RangeError(failedParse(e));
    return Vt(checkDurationUnits(n));
}
function sn(e) {
    const n = parseDateTimeLike(e) || parseYearMonthOnly(e) || parseMonthDayOnly(e);
    return n ? n.calendar : e;
}
function Ne(e) {
    const n = parseDateTimeLike(e);
    return n && (n.timeZone || n.O && Da || n.offset) || e;
}
function finalizeZonedDateTime(e, n, t = 0, o = 0) {
    const r = ye(e.timeZone), i = ie(r);
    return Yn(getMatchingInstantFor(i, checkIsoDateTimeFields(e), n, t, o, !i.R, e.O), r, an(e.calendar));
}
function finalizeDateTime(e) {
    return resolveSlotsCalendar(checkIsoDateTimeInBounds(checkIsoDateTimeFields(e)));
}
function finalizeDate(e) {
    return resolveSlotsCalendar(checkIsoDateInBounds(checkIsoDateFields(e)));
}
function resolveSlotsCalendar(e) {
    return {
        ...e,
        calendar: an(e.calendar)
    };
}
function parseDateTimeLike(e) {
    const n = Ca.exec(e);
    return n ? ((e)=>{
        const n = e[10], t = "Z" === (n || "").toUpperCase();
        return {
            isoYear: organizeIsoYearParts(e),
            isoMonth: parseInt(e[4]),
            isoDay: parseInt(e[5]),
            ...organizeTimeParts(e.slice(5)),
            ...organizeAnnotationParts(e[16]),
            I: Boolean(e[6]),
            O: t,
            offset: t ? void 0 : n
        };
    })(n) : void 0;
}
function parseYearMonthOnly(e) {
    const n = ka.exec(e);
    return n ? ((e)=>({
            isoYear: organizeIsoYearParts(e),
            isoMonth: parseInt(e[4]),
            isoDay: 1,
            ...organizeAnnotationParts(e[5])
        }))(n) : void 0;
}
function parseMonthDayOnly(e) {
    const n = Ya.exec(e);
    return n ? ((e)=>({
            isoYear: xi,
            isoMonth: parseInt(e[1]),
            isoDay: parseInt(e[2]),
            ...organizeAnnotationParts(e[3])
        }))(n) : void 0;
}
function parseOffsetNanoMaybe(e, n) {
    const t = Ra.exec(e);
    return t ? ((e, n)=>{
        const t = e[4] || e[5];
        if (n && t) throw new RangeError(invalidSubstring(t));
        return ae((parseInt0(e[2]) * Kr + parseInt0(e[3]) * Jr + parseInt0(e[4]) * _r + parseSubsecNano(e[5] || "")) * parseSign(e[1]));
    })(t, n) : void 0;
}
function organizeIsoYearParts(e) {
    const n = parseSign(e[1]), t = parseInt(e[2] || e[3]);
    if (n < 0 && !t) throw new RangeError(invalidSubstring(-0));
    return n * t;
}
function organizeTimeParts(e) {
    const n = parseInt0(e[3]);
    return {
        ...nanoToIsoTimeAndDay(parseSubsecNano(e[4] || ""))[0],
        isoHour: parseInt0(e[1]),
        isoMinute: parseInt0(e[2]),
        isoSecond: 60 === n ? 59 : n
    };
}
function organizeAnnotationParts(e) {
    let n, t;
    const o = [];
    if (e.replace(za, (e, r, i)=>{
        const a = Boolean(r), [s, c] = i.split("=").reverse();
        if (c) {
            if ("u-ca" === c) o.push(s), n || (n = a);
            else if (a || /[A-Z]/.test(c)) throw new RangeError(invalidSubstring(e));
        } else {
            if (t) throw new RangeError(invalidSubstring(e));
            t = s;
        }
        return "";
    }), o.length > 1 && n) throw new RangeError(invalidSubstring(e));
    return {
        timeZone: t,
        calendar: o[0] || X
    };
}
function parseSubsecNano(e) {
    return parseInt(e.padEnd(9, "0"));
}
function createRegExp(e) {
    return new RegExp(`^${e}$`, "i");
}
function parseSign(e) {
    return e && "+" !== e ? -1 : 1;
}
function parseInt0(e) {
    return void 0 === e ? 0 : parseInt(e);
}
function Me(e) {
    return ye(m(e));
}
function ye(e) {
    const n = getTimeZoneEssence(e);
    return "number" == typeof n ? Fe(n) : n ? ((e)=>{
        if (Ua.test(e)) throw new RangeError(br);
        return e.toLowerCase().split("/").map((e, n)=>(e.length <= 3 || /\d/.test(e)) && !/etc|yap/.test(e) ? e.toUpperCase() : e.replace(/baja|dumont|[a-z]+/g, (e, t)=>e.length <= 2 && !n || "in" === e || "chat" === e ? e.toUpperCase() : e.length > 2 || !t ? capitalize(e).replace(/island|noronha|murdo|rivadavia|urville/, capitalize) : e)).join("/");
    })(e) : Da;
}
function getTimeZoneAtomic(e) {
    const n = getTimeZoneEssence(e);
    return "number" == typeof n ? n : n ? n.resolvedOptions().timeZone : Da;
}
function getTimeZoneEssence(e) {
    const n = parseOffsetNanoMaybe(e = e.toUpperCase(), 1);
    return void 0 !== n ? n : e !== Da ? Aa(e) : void 0;
}
function Ze(e, n) {
    return te(e.epochNanoseconds, n.epochNanoseconds);
}
function yn(e, n) {
    return te(e.epochNanoseconds, n.epochNanoseconds);
}
function $t(e, n, t, o, r, i) {
    const a = e(normalizeOptions(i).relativeTo), s = Math.max(getLargestDurationUnit(o), getLargestDurationUnit(r));
    if (allPropsEqual(F, o, r)) return 0;
    if (isUniformUnit(s, a)) return te(durationFieldsToBigNano(o), durationFieldsToBigNano(r));
    if (!a) throw new RangeError(zr);
    const [c, u, l] = createMarkerSystem(n, t, a), f = createMarkerToEpochNano(l), d = createMoveMarker(u, l);
    return te(f(d(c, o)), f(d(c, r)));
}
function gt(e, n) {
    return rt(e, n) || He(e, n);
}
function rt(e, n) {
    return compareNumbers(isoToEpochMilli(e), isoToEpochMilli(n));
}
function He(e, n) {
    return compareNumbers(isoTimeFieldsToNano(e), isoTimeFieldsToNano(n));
}
function ue(e, n) {
    return !Ze(e, n);
}
function gn(e, n) {
    return !yn(e, n) && !!je(e.timeZone, n.timeZone) && isIdLikeEqual(e.calendar, n.calendar);
}
function ft(e, n) {
    return !gt(e, n) && isIdLikeEqual(e.calendar, n.calendar);
}
function It(e, n) {
    return !rt(e, n) && isIdLikeEqual(e.calendar, n.calendar);
}
function $e(e, n) {
    return !rt(e, n) && isIdLikeEqual(e.calendar, n.calendar);
}
function x(e, n) {
    return !rt(e, n) && isIdLikeEqual(e.calendar, n.calendar);
}
function Ve(e, n) {
    return !He(e, n);
}
function je(e, n) {
    if (e === n) return 1;
    const t = I(e), o = I(n);
    if (t === o) return 1;
    try {
        return getTimeZoneAtomic(t) === getTimeZoneAtomic(o);
    } catch (e) {}
}
function le(e, n, t, o) {
    const r = refineDiffOptions(e, U(o), 3, 5), i = diffEpochNanos(n.epochNanoseconds, t.epochNanoseconds, ...r);
    return Vt(e ? negateDurationFields(i) : i);
}
function Dn(e, n, t, o, r, i) {
    const a = getCommonCalendarSlot(o.calendar, r.calendar), s = U(i), [c, u, l, f] = refineDiffOptions(t, s, 5), d = o.epochNanoseconds, m = r.epochNanoseconds, p = te(m, d);
    let h;
    if (p) {
        if (c < 6) h = diffEpochNanos(d, m, c, u, l, f);
        else {
            const t = n(((e, n)=>{
                if (!je(e, n)) throw new RangeError(Fr);
                return e;
            })(o.timeZone, r.timeZone)), i = e(a);
            h = diffZonedEpochsBig(i, t, o, r, p, c, s), h = roundRelativeDuration(h, m, c, u, l, f, o, extractEpochNano, E(moveZonedEpochs, i, t));
        }
    } else h = Fi;
    return Vt(t ? negateDurationFields(h) : h);
}
function ut(e, n, t, o, r) {
    const i = getCommonCalendarSlot(t.calendar, o.calendar), a = U(r), [s, c, u, l] = refineDiffOptions(n, a, 6), f = isoToEpochNano(t), d = isoToEpochNano(o), m = te(d, f);
    let p;
    if (m) {
        if (s <= 6) p = diffEpochNanos(f, d, s, c, u, l);
        else {
            const n = e(i);
            p = diffDateTimesBig(n, t, o, m, s, a), p = roundRelativeDuration(p, d, s, c, u, l, t, isoToEpochNano, E(moveDateTime, n));
        }
    } else p = Fi;
    return Vt(n ? negateDurationFields(p) : p);
}
function Ft(e, n, t, o, r) {
    const i = getCommonCalendarSlot(t.calendar, o.calendar), a = U(r);
    return diffDateLike(n, ()=>e(i), t, o, ...refineDiffOptions(n, a, 6, 9, 6), a);
}
function Xe(e, n, t, o, r) {
    const i = getCommonCalendarSlot(t.calendar, o.calendar), a = U(r), s = refineDiffOptions(n, a, 9, 9, 8), c = e(i);
    return diffDateLike(n, ()=>c, moveToDayOfMonthUnsafe(c, t), moveToDayOfMonthUnsafe(c, o), ...s, a);
}
function diffDateLike(e, n, t, o, r, i, a, s, c) {
    const u = isoToEpochNano(t), l = isoToEpochNano(o);
    let f;
    if (te(l, u)) {
        if (6 === r) f = diffEpochNanos(u, l, r, i, a, s);
        else {
            const e = n();
            f = e.dateUntil(t, o, r, c), 6 === i && 1 === a || (f = roundRelativeDuration(f, l, r, i, a, s, t, isoToEpochNano, E(moveDate, e)));
        }
    } else f = Fi;
    return Vt(e ? negateDurationFields(f) : f);
}
function Ae(e, n, t, o) {
    const r = U(o), [i, a, s, c] = refineDiffOptions(e, r, 5, 5), u = roundByInc(diffTimes(n, t), computeNanoInc(a, s), c), l = {
        ...Fi,
        ...nanoToDurationTimeFields(u, i)
    };
    return Vt(e ? negateDurationFields(l) : l);
}
function diffZonedEpochsExact(e, n, t, o, r, i) {
    const a = te(o.epochNanoseconds, t.epochNanoseconds);
    return a ? r < 6 ? diffEpochNanosExact(t.epochNanoseconds, o.epochNanoseconds, r) : diffZonedEpochsBig(e, n, t, o, a, r, i) : Fi;
}
function diffDateTimesExact(e, n, t, o, r) {
    const i = isoToEpochNano(n), a = isoToEpochNano(t), s = te(a, i);
    return s ? o <= 6 ? diffEpochNanosExact(i, a, o) : diffDateTimesBig(e, n, t, s, o, r) : Fi;
}
function diffZonedEpochsBig(e, n, t, o, r, i, a) {
    const [s, c, u] = ((e, n, t, o)=>{
        function updateMid() {
            return l = {
                ...moveByDays(a, c++ * -o),
                ...i
            }, f = we(e, l), te(s, f) === -o;
        }
        const r = fn(n, e), i = Vn(j, r), a = fn(t, e), s = t.epochNanoseconds;
        let c = 0;
        const u = diffTimes(r, a);
        let l, f;
        if (Math.sign(u) === -o && c++, updateMid() && (-1 === o || updateMid())) throw new RangeError(vr);
        const d = oe(re(f, s));
        return [
            r,
            l,
            d
        ];
    })(n, t, o, r);
    var l, f;
    return {
        ...6 === i ? (l = s, f = c, {
            ...Fi,
            days: diffDays(l, f)
        }) : e.dateUntil(s, c, i, a),
        ...nanoToDurationTimeFields(u)
    };
}
function diffDateTimesBig(e, n, t, o, r, i) {
    let a = n, s = diffTimes(n, t);
    return Math.sign(s) === -o && (a = moveByDays(n, o), s += Qr * o), {
        ...e.dateUntil(a, t, r, i),
        ...nanoToDurationTimeFields(s)
    };
}
function diffEpochNanos(e, n, t, o, r, i) {
    return {
        ...Fi,
        ...nanoToDurationDayTimeFields(roundBigNano(re(e, n), o, r, i), t)
    };
}
function diffEpochNanosExact(e, n, t) {
    return {
        ...Fi,
        ...nanoToDurationDayTimeFields(re(e, n), t)
    };
}
function diffDays(e, n) {
    return diffEpochMilliByDay(isoToEpochMilli(e), isoToEpochMilli(n));
}
function diffEpochMilliByDay(e, n) {
    return Math.trunc((n - e) / Gr);
}
function diffTimes(e, n) {
    return isoTimeFieldsToNano(n) - isoTimeFieldsToNano(e);
}
function getCommonCalendarSlot(e, n) {
    if (!isIdLikeEqual(e, n)) throw new RangeError(Er);
    return e;
}
function createIntlCalendar(e) {
    function epochMilliToIntlFields(e) {
        return ((e, n)=>({
                ...parseIntlYear(e, n),
                o: e.month,
                day: parseInt(e.day)
            }))(hashIntlFormatParts(n, e), t);
    }
    const n = Wa(e), t = computeCalendarIdBase(e);
    return {
        id: e,
        h: createIntlFieldCache(epochMilliToIntlFields),
        l: createIntlYearDataCache(epochMilliToIntlFields)
    };
}
function createIntlFieldCache(e) {
    return Jn((n)=>{
        const t = isoToEpochMilli(n);
        return e(t);
    }, WeakMap);
}
function createIntlYearDataCache(e) {
    const n = e(0).year - ji;
    return Jn((t)=>{
        let o, r = isoArgsToEpochMilli(t - n);
        const i = [], a = [];
        do r += 400 * Gr;
        while ((o = e(r)).year <= t);
        do r += (1 - o.day) * Gr, o.year === t && (i.push(r), a.push(o.o)), r -= Gr;
        while ((o = e(r)).year >= t);
        return {
            i: i.reverse(),
            u: Wr(a.reverse())
        };
    });
}
function parseIntlYear(e, n) {
    let t, o, r = parseIntlPartsYear(e);
    if (e.era) {
        const a = Di[n];
        void 0 !== a && (i = (i = e.era).normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), t = Ii[i] || i, o = r, r = eraYearToYear(o, a[t] || 0));
    }
    var i;
    return {
        era: t,
        eraYear: o,
        year: r
    };
}
function parseIntlPartsYear(e) {
    return parseInt(e.relatedYear || e.year);
}
function computeIntlDateParts(e) {
    const { year: n, o: t, day: o } = this.h(e), { u: r } = this.l(n);
    return [
        n,
        r[t] + 1,
        o
    ];
}
function computeIntlEpochMilli(e, n = 1, t = 1) {
    return this.l(e).i[n - 1] + (t - 1) * Gr;
}
function computeIntlLeapMonth(e) {
    const n = queryMonthStrings(this, e), t = queryMonthStrings(this, e - 1), o = n.length;
    if (o > t.length) {
        const e = getCalendarLeapMonthMeta(this);
        if (e < 0) return -e;
        for(let e = 0; e < o; e++){
            if (n[e] !== t[e]) return e + 1;
        }
    }
}
function computeIntlDaysInYear(e) {
    return diffEpochMilliByDay(computeIntlEpochMilli.call(this, e), computeIntlEpochMilli.call(this, e + 1));
}
function computeIntlDaysInMonth(e, n) {
    const { i: t } = this.l(e);
    let o = n + 1, r = t;
    return o > t.length && (o = 1, r = this.l(e + 1).i), diffEpochMilliByDay(t[n - 1], r[o - 1]);
}
function computeIntlMonthsInYear(e) {
    return this.l(e).i.length;
}
function queryMonthStrings(e, n) {
    return Object.keys(e.l(n).u);
}
function rn(e) {
    return an(m(e));
}
function an(e) {
    if ((e = e.toLowerCase()) !== X && e !== gi && computeCalendarIdBase(e) !== computeCalendarIdBase(Wa(e).resolvedOptions().calendar)) throw new RangeError(invalidCalendar(e));
    return e;
}
function computeCalendarIdBase(e) {
    return "islamicc" === e && (e = "islamic"), e.split("-")[0];
}
function computeNativeWeekOfYear(e) {
    return this.m(e)[0];
}
function computeNativeYearOfWeek(e) {
    return this.m(e)[1];
}
function computeNativeDayOfYear(e) {
    const [n] = this.v(e);
    return diffEpochMilliByDay(this.p(n), isoToEpochMilli(e)) + 1;
}
function parseMonthCode(e) {
    const n = ja.exec(e);
    if (!n) throw new RangeError(invalidMonthCode(e));
    return [
        parseInt(n[1]),
        Boolean(n[2])
    ];
}
function monthCodeNumberToMonth(e, n, t) {
    return e + (n || t && e >= t ? 1 : 0);
}
function monthToMonthCodeNumber(e, n) {
    return e - (n && e >= n ? 1 : 0);
}
function eraYearToYear(e, n) {
    return (n + e) * (Math.sign(n) || 1) || 0;
}
function getCalendarEraOrigins(e) {
    return Di[getCalendarIdBase(e)];
}
function getCalendarLeapMonthMeta(e) {
    return Mi[getCalendarIdBase(e)];
}
function getCalendarIdBase(e) {
    return computeCalendarIdBase(e.id || X);
}
function Qt(e, n, t, o) {
    const r = refineCalendarFields(t, o, en, [], ri);
    if (void 0 !== r.timeZone) {
        const o = t.dateFromFields(r), i = refineTimeBag(r), a = e(r.timeZone);
        return {
            epochNanoseconds: getMatchingInstantFor(n(a), {
                ...o,
                ...i
            }, void 0 !== r.offset ? parseOffsetNano(r.offset) : void 0),
            timeZone: a
        };
    }
    return {
        ...t.dateFromFields(r),
        ...Dt
    };
}
function jn(e, n, t, o, r, i) {
    const a = refineCalendarFields(t, r, en, ti, ri), s = e(a.timeZone), [c, u, l] = wn(i), f = t.dateFromFields(a, overrideOverflowOptions(i, c)), d = refineTimeBag(a, c);
    return Yn(getMatchingInstantFor(n(s), {
        ...f,
        ...d
    }, void 0 !== a.offset ? parseOffsetNano(a.offset) : void 0, u, l), s, o);
}
function Pt(e, n, t) {
    const o = refineCalendarFields(e, n, en, [], w), r = H(t);
    return ee(checkIsoDateTimeInBounds({
        ...e.dateFromFields(o, overrideOverflowOptions(t, r)),
        ...refineTimeBag(o, r)
    }));
}
function Yt(e, n, t, o = []) {
    const r = refineCalendarFields(e, n, en, o);
    return e.dateFromFields(r, t);
}
function nt(e, n, t, o) {
    const r = refineCalendarFields(e, n, fi, o);
    return e.yearMonthFromFields(r, t);
}
function K(e, n, t, o, r = []) {
    const i = refineCalendarFields(e, t, en, r);
    return n && void 0 !== i.month && void 0 === i.monthCode && void 0 === i.year && (i.year = xi), e.monthDayFromFields(i, o);
}
function Ue(e, n) {
    const t = H(n);
    return Ge(refineTimeBag(refineFields(e, ei, [], 1), t));
}
function Ht(e) {
    const n = refineFields(e, yi);
    return Vt(checkDurationUnits({
        ...Fi,
        ...n
    }));
}
function refineCalendarFields(e, n, t, o = [], r = []) {
    return refineFields(n, [
        ...e.fields(t),
        ...r
    ].sort(), o);
}
function refineFields(e, n, t, o = !t) {
    const r = {};
    let i, a = 0;
    for (const o of n){
        if (o === i) throw new RangeError(duplicateFields(o));
        if ("constructor" === o || "__proto__" === o) throw new RangeError(tn(o));
        let n = e[o];
        if (void 0 !== n) a = 1, Ha[o] && (n = Ha[o](n, o)), r[o] = n;
        else if (t) {
            if (t.includes(o)) throw new TypeError(missingField(o));
            r[o] = hi[o];
        }
        i = o;
    }
    if (o && !a) throw new TypeError(noValidFields(n));
    return r;
}
function refineTimeBag(e, n) {
    return constrainIsoTimeFields(Va({
        ...hi,
        ...e
    }), n);
}
function Sn(e, n, t, o, r, i) {
    const a = U(i), { calendar: s, timeZone: c } = t;
    return Yn(((e, n, t, o, r)=>{
        const i = mergeCalendarFields(e, t, o, en, oi, ni), [a, s, c] = wn(r, 2);
        return getMatchingInstantFor(n, {
            ...e.dateFromFields(i, overrideOverflowOptions(r, a)),
            ...refineTimeBag(i, a)
        }, parseOffsetNano(i.offset), s, c);
    })(e(s), n(c), o, r, a), c, s);
}
function at(e, n, t, o, r) {
    const i = U(r);
    return ee(((e, n, t, o)=>{
        const r = mergeCalendarFields(e, n, t, en, w), i = H(o);
        return checkIsoDateTimeInBounds({
            ...e.dateFromFields(r, overrideOverflowOptions(o, i)),
            ...refineTimeBag(r, i)
        });
    })(e(n.calendar), t, o, i));
}
function Zt(e, n, t, o, r) {
    const i = U(r);
    return ((e, n, t, o)=>{
        const r = mergeCalendarFields(e, n, t, en);
        return e.dateFromFields(r, o);
    })(e(n.calendar), t, o, i);
}
function Ke(e, n, t, o, r) {
    const i = U(r);
    return createPlainYearMonthSlots(((e, n, t, o)=>{
        const r = mergeCalendarFields(e, n, t, fi);
        return e.yearMonthFromFields(r, o);
    })(e(n.calendar), t, o, i));
}
function k(e, n, t, o, r) {
    const i = U(r);
    return ((e, n, t, o)=>{
        const r = mergeCalendarFields(e, n, t, en);
        return e.monthDayFromFields(r, o);
    })(e(n.calendar), t, o, i);
}
function Be(e, n, t) {
    return Ge(((e, n, t)=>{
        const o = H(t);
        return refineTimeBag({
            ...Vn(ei, e),
            ...refineFields(n, ei)
        }, o);
    })(e, n, t));
}
function kt(e, n) {
    var t, o;
    return Vt((t = e, o = n, checkDurationUnits({
        ...t,
        ...refineFields(o, yi)
    })));
}
function mergeCalendarFields(e, n, t, o, r = [], i = []) {
    const a = [
        ...e.fields(o),
        ...r
    ].sort();
    let s = refineFields(n, a, i);
    const c = refineFields(t, a);
    return s = e.mergeFields(s, c), refineFields(s, a, []);
}
function convertToPlainMonthDay(e, n) {
    const t = refineCalendarFields(e, n, pi);
    return e.monthDayFromFields(t);
}
function convertToPlainYearMonth(e, n, t) {
    const o = refineCalendarFields(e, n, di);
    return e.yearMonthFromFields(o, t);
}
function convertToIso(e, n, t, o, r) {
    n = Vn(t = e.fields(t), n), o = refineFields(o, r = e.fields(r), []);
    let i = e.mergeFields(n, o);
    return i = refineFields(i, [
        ...t,
        ...r
    ].sort(), []), e.dateFromFields(i);
}
function refineYear(e, n) {
    let { era: t, eraYear: o, year: r } = n;
    const i = getCalendarEraOrigins(e);
    if (void 0 !== t || void 0 !== o) {
        if (void 0 === t || void 0 === o) throw new TypeError(Dr);
        if (!i) throw new RangeError(gr);
        const e = i[t];
        if (void 0 === e) throw new RangeError(invalidEra(t));
        const n = eraYearToYear(o, e);
        if (void 0 !== r && r !== n) throw new RangeError(Ir);
        r = n;
    } else if (void 0 === r) throw new TypeError(missingYear(i));
    return r;
}
function refineMonth(e, n, t, o) {
    let { month: r, monthCode: i } = n;
    if (void 0 !== i) {
        const n = ((e, n, t, o)=>{
            const r = e.P(t), [i, a] = parseMonthCode(n);
            let s = monthCodeNumberToMonth(i, a, r);
            if (a) {
                const n = getCalendarLeapMonthMeta(e);
                if (void 0 === n) throw new RangeError(Pr);
                if (n > 0) {
                    if (s > n) throw new RangeError(Pr);
                    if (void 0 === r) {
                        if (1 === o) throw new RangeError(Pr);
                        s--;
                    }
                } else {
                    if (s !== -n) throw new RangeError(Pr);
                    if (void 0 === r && 1 === o) throw new RangeError(Pr);
                }
            }
            return s;
        })(e, i, t, o);
        if (void 0 !== r && r !== n) throw new RangeError(Mr);
        r = n, o = 1;
    } else if (void 0 === r) throw new TypeError(Nr);
    return clampEntity("month", r, 1, e.j(t), o);
}
function refineDay(e, n, t, o, r) {
    return clampProp(n, "day", 1, e.N(o, t), r);
}
function spliceFields(e, n, t, o) {
    let r = 0;
    const i = [];
    for (const e of t)void 0 !== n[e] ? r = 1 : i.push(e);
    if (Object.assign(e, n), r) for (const n of o || i)delete e[n];
}
function Se(e) {
    return _(checkEpochNanoInBounds(bigIntToBigNano(toBigInt(e))));
}
function vn(e, n, t, o, r = X) {
    return Yn(checkEpochNanoInBounds(bigIntToBigNano(toBigInt(t))), n(o), e(r));
}
function pt(e, n, t, o, r = 0, i = 0, a = 0, s = 0, c = 0, u = 0, l = X) {
    return ee(checkIsoDateTimeInBounds(checkIsoDateTimeFields(T(toInteger, zipProps(Bi, [
        n,
        t,
        o,
        r,
        i,
        a,
        s,
        c,
        u
    ])))), e(l));
}
function Nt(e, n, t, o, r = X) {
    return v(checkIsoDateInBounds(checkIsoDateFields(T(toInteger, {
        isoYear: n,
        isoMonth: t,
        isoDay: o
    }))), e(r));
}
function tt(e, n, t, o = X, r = 1) {
    const i = toInteger(n), a = toInteger(t), s = e(o);
    return createPlainYearMonthSlots(checkIsoYearMonthInBounds(checkIsoDateFields({
        isoYear: i,
        isoMonth: a,
        isoDay: toInteger(r)
    })), s);
}
function G(e, n, t, o = X, r = xi) {
    const i = toInteger(n), a = toInteger(t), s = e(o);
    return createPlainMonthDaySlots(checkIsoDateInBounds(checkIsoDateFields({
        isoYear: toInteger(r),
        isoMonth: i,
        isoDay: a
    })), s);
}
function ke(e = 0, n = 0, t = 0, o = 0, r = 0, i = 0) {
    return Ge(constrainIsoTimeFields(T(toInteger, zipProps(j, [
        e,
        n,
        t,
        o,
        r,
        i
    ])), 1));
}
function Lt(e = 0, n = 0, t = 0, o = 0, r = 0, i = 0, a = 0, s = 0, c = 0, u = 0) {
    return Vt(checkDurationUnits(T(toStrictInteger, zipProps(F, [
        e,
        n,
        t,
        o,
        r,
        i,
        a,
        s,
        c,
        u
    ]))));
}
function fe(e, n, t = X) {
    return Yn(e.epochNanoseconds, n, t);
}
function Zn(e) {
    return _(e.epochNanoseconds);
}
function ht(e, n) {
    return ee(fn(n, e));
}
function Bt(e, n) {
    return v(fn(n, e));
}
function bn(e, n, t) {
    return convertToPlainYearMonth(e(n.calendar), t);
}
function Fn(e, n, t) {
    return convertToPlainMonthDay(e(n.calendar), t);
}
function Re(e, n) {
    return Ge(fn(n, e));
}
function mt(e, n, t, o) {
    const r = ((e, n, t, o)=>{
        const r = ve(o);
        return we(e(n), t, r);
    })(e, t, n, o);
    return Yn(checkEpochNanoInBounds(r), t, n.calendar);
}
function St(e, n, t) {
    const o = e(n.calendar);
    return createPlainYearMonthSlots({
        ...n,
        ...convertToPlainYearMonth(o, t)
    });
}
function Ot(e, n, t) {
    return convertToPlainMonthDay(e(n.calendar), t);
}
function vt(e, n, t, o, r) {
    const i = e(r.timeZone), a = r.plainTime, s = void 0 !== a ? n(a) : Dt;
    return Yn(we(t(i), {
        ...o,
        ...s
    }), i, o.calendar);
}
function wt(e, n = Dt) {
    return ee(checkIsoDateTimeInBounds({
        ...e,
        ...n
    }));
}
function jt(e, n, t) {
    return convertToPlainYearMonth(e(n.calendar), t);
}
function Mt(e, n, t) {
    return convertToPlainMonthDay(e(n.calendar), t);
}
function _e(e, n, t, o) {
    return ((e, n, t)=>convertToIso(e, n, di, de(t), li))(e(n.calendar), t, o);
}
function R(e, n, t, o) {
    return ((e, n, t)=>convertToIso(e, n, pi, de(t), si))(e(n.calendar), t, o);
}
function Je(e, n, t, o, r) {
    const i = de(r), a = n(i.plainDate), s = e(i.timeZone);
    return Yn(we(t(s), {
        ...a,
        ...o
    }), s, a.calendar);
}
function Le(e, n) {
    return ee(checkIsoDateTimeInBounds({
        ...e,
        ...n
    }));
}
function De(e) {
    return _(checkEpochNanoInBounds(he(e, _r)));
}
function Pe(e) {
    return _(checkEpochNanoInBounds(he(e, be)));
}
function Ce(e) {
    return _(checkEpochNanoInBounds(bigIntToBigNano(toBigInt(e), Vr)));
}
function ge(e) {
    return _(checkEpochNanoInBounds(bigIntToBigNano(toBigInt(e))));
}
function pn(e, n, t = Dt) {
    const o = n.timeZone, r = e(o), i = {
        ...fn(n, r),
        ...t
    };
    return Yn(getMatchingInstantFor(r, i, i.offsetNanoseconds, 2), o, n.calendar);
}
function Tn(e, n, t) {
    const o = n.timeZone, r = e(o), i = {
        ...fn(n, r),
        ...t
    }, a = getPreferredCalendarSlot(n.calendar, t.calendar);
    return Yn(getMatchingInstantFor(r, i, i.offsetNanoseconds, 2), o, a);
}
function lt(e, n = Dt) {
    return ee({
        ...e,
        ...n
    });
}
function st(e, n) {
    return ee({
        ...e,
        ...n
    }, getPreferredCalendarSlot(e.calendar, n.calendar));
}
function it(e, n) {
    return {
        ...e,
        calendar: n
    };
}
function On(e, n) {
    return {
        ...e,
        timeZone: n
    };
}
function getPreferredCalendarSlot(e, n) {
    if (e === n) return e;
    const t = I(e), o = I(n);
    if (t === o || t === X) return n;
    if (o === X) return e;
    throw new RangeError(Er);
}
function createNativeOpsCreator(e, n) {
    return (t)=>t === X ? e : t === gi || t === Ti ? Object.assign(Object.create(e), {
            id: t
        }) : Object.assign(Object.create(n), La(t));
}
function createOptionsTransformer(e, n, t) {
    const o = new Set(t);
    return (r)=>(((e, n)=>{
            for (const t of n){
                if (t in e) return 1;
            }
            return 0;
        })(r = V(o, r), e) || Object.assign(r, n), t && (r.timeZone = Da, [
            "full",
            "long"
        ].includes(r.timeStyle) && (r.timeStyle = "medium")), r);
}
function e(e, n = qn) {
    const [t, , , o] = e;
    return (r, i = ys, ...a)=>{
        const s = n(o && o(...a), r, i, t), c = s.resolvedOptions();
        return [
            s,
            ...toEpochMillis(e, c, a)
        ];
    };
}
function qn(e, n, t, o) {
    if (t = o(t), e) {
        if (void 0 !== t.timeZone) throw new TypeError(Lr);
        t.timeZone = e;
    }
    return new En(n, t);
}
function toEpochMillis(e, n, t) {
    const [, o, r] = e;
    return t.map((e)=>(e.calendar && ((e, n, t)=>{
            if ((t || e !== X) && e !== n) throw new RangeError(Er);
        })(I(e.calendar), n.calendar, r), o(e, n)));
}
function An(e) {
    const n = Bn();
    return Ie(n, e.getOffsetNanosecondsFor(n));
}
function Bn() {
    return he(Date.now(), be);
}
function Nn() {
    return Ps || (Ps = (new En).resolvedOptions().timeZone);
}
const expectedInteger = (e, n)=>`Non-integer ${e}: ${n}`, expectedPositive = (e, n)=>`Non-positive ${e}: ${n}`, expectedFinite = (e, n)=>`Non-finite ${e}: ${n}`, forbiddenBigIntToNumber = (e)=>`Cannot convert bigint to ${e}`, invalidBigInt = (e)=>`Invalid bigint: ${e}`, pr = "Cannot convert Symbol to string", hr = "Invalid object", numberOutOfRange = (e, n, t, o, r)=>r ? numberOutOfRange(e, r[n], r[t], r[o]) : invalidEntity(e, n) + `; must be between ${t}-${o}`, invalidEntity = (e, n)=>`Invalid ${e}: ${n}`, missingField = (e)=>`Missing ${e}`, tn = (e)=>`Invalid field ${e}`, duplicateFields = (e)=>`Duplicate field ${e}`, noValidFields = (e)=>"No valid fields: " + e.join(), Z = "Invalid bag", invalidChoice = (e, n, t)=>invalidEntity(e, n) + "; must be " + Object.keys(t).join(), A = "Cannot use valueOf", P = "Invalid calling context", gr = "Forbidden era/eraYear", Dr = "Mismatching era/eraYear", Ir = "Mismatching year/eraYear", invalidEra = (e)=>`Invalid era: ${e}`, missingYear = (e)=>"Missing year" + (e ? "/era/eraYear" : ""), invalidMonthCode = (e)=>`Invalid monthCode: ${e}`, Mr = "Mismatching month/monthCode", Nr = "Missing month/monthCode", yr = "Cannot guess year", Pr = "Invalid leap month", g = "Invalid protocol", vr = "Invalid protocol results", Er = "Mismatching Calendars", invalidCalendar = (e)=>`Invalid Calendar: ${e}`, Fr = "Mismatching TimeZones", br = "Forbidden ICU TimeZone", wr = "Out-of-bounds offset", Br = "Out-of-bounds TimeZone gap", kr = "Invalid TimeZone offset", Yr = "Ambiguous offset", Cr = "Out-of-bounds date", Zr = "Out-of-bounds duration", Rr = "Cannot mix duration signs", zr = "Missing relativeTo", qr = "Cannot use large units", Ar = "Required smallestUnit or largestUnit", Ur = "smallestUnit > largestUnit", failedParse = (e)=>`Cannot parse: ${e}`, invalidSubstring = (e)=>`Invalid substring: ${e}`, Ln = (e)=>`Cannot format ${e}`, kn = "Mismatching types for formatting", Lr = "Cannot specify TimeZone", Wr = /*@__PURE__*/ E(b, (e, n)=>n), jr = /*@__PURE__*/ E(b, (e, n, t)=>t), xr = /*@__PURE__*/ E(padNumber, 2), $r = {
    nanosecond: 0,
    microsecond: 1,
    millisecond: 2,
    second: 3,
    minute: 4,
    hour: 5,
    day: 6,
    week: 7,
    month: 8,
    year: 9
}, Et = /*@__PURE__*/ Object.keys($r), Gr = 864e5, Hr = 1e3, Vr = 1e3, be = 1e6, _r = 1e9, Jr = 6e10, Kr = 36e11, Qr = 864e11, Xr = [
    1,
    Vr,
    be,
    _r,
    Jr,
    Kr,
    Qr
], w = /*@__PURE__*/ Et.slice(0, 6), ei = /*@__PURE__*/ sortStrings(w), ni = [
    "offset"
], ti = [
    "timeZone"
], oi = /*@__PURE__*/ w.concat(ni), ri = /*@__PURE__*/ oi.concat(ti), ii = [
    "era",
    "eraYear"
], ai = /*@__PURE__*/ ii.concat([
    "year"
]), si = [
    "year"
], ci = [
    "monthCode"
], ui = /*@__PURE__*/ [
    "month"
].concat(ci), li = [
    "day"
], fi = /*@__PURE__*/ ui.concat(si), di = /*@__PURE__*/ ci.concat(si), en = /*@__PURE__*/ li.concat(fi), mi = /*@__PURE__*/ li.concat(ui), pi = /*@__PURE__*/ li.concat(ci), hi = /*@__PURE__*/ jr(w, 0), X = "iso8601", gi = "gregory", Ti = "japanese", Di = {
    [gi]: {
        bce: -1,
        ce: 0
    },
    [Ti]: {
        bce: -1,
        ce: 0,
        meiji: 1867,
        taisho: 1911,
        showa: 1925,
        heisei: 1988,
        reiwa: 2018
    },
    ethioaa: {
        era0: 0
    },
    ethiopic: {
        era0: 0,
        era1: 5500
    },
    coptic: {
        era0: -1,
        era1: 0
    },
    roc: {
        beforeroc: -1,
        minguo: 0
    },
    buddhist: {
        be: 0
    },
    islamic: {
        ah: 0
    },
    indian: {
        saka: 0
    },
    persian: {
        ap: 0
    }
}, Ii = {
    bc: "bce",
    ad: "ce"
}, Mi = {
    chinese: 13,
    dangi: 13,
    hebrew: -6
}, m = /*@__PURE__*/ E(requireType, "string"), f = /*@__PURE__*/ E(requireType, "boolean"), Ni = /*@__PURE__*/ E(requireType, "number"), $ = /*@__PURE__*/ E(requireType, "function"), F = /*@__PURE__*/ Et.map((e)=>e + "s"), yi = /*@__PURE__*/ sortStrings(F), Pi = /*@__PURE__*/ F.slice(0, 6), vi = /*@__PURE__*/ F.slice(6), Ei = /*@__PURE__*/ vi.slice(1), Si = /*@__PURE__*/ Wr(F), Fi = /*@__PURE__*/ jr(F, 0), bi = /*@__PURE__*/ jr(Pi, 0), Oi = /*@__PURE__*/ E(zeroOutProps, F), j = [
    "isoNanosecond",
    "isoMicrosecond",
    "isoMillisecond",
    "isoSecond",
    "isoMinute",
    "isoHour"
], wi = [
    "isoDay",
    "isoMonth",
    "isoYear"
], Bi = /*@__PURE__*/ j.concat(wi), ki = /*@__PURE__*/ sortStrings(wi), Yi = /*@__PURE__*/ sortStrings(j), Ci = /*@__PURE__*/ sortStrings(Bi), Dt = /*@__PURE__*/ jr(Yi, 0), Zi = /*@__PURE__*/ E(zeroOutProps, Bi), En = Intl.DateTimeFormat, Ri = "en-GB", zi = 1e8, qi = zi * Gr, Ai = [
    zi,
    0
], Ui = [
    -zi,
    0
], Li = 275760, Wi = -271821, ji = 1970, xi = 1972, $i = 12, Gi = /*@__PURE__*/ isoArgsToEpochMilli(1868, 9, 8), Hi = /*@__PURE__*/ Jn(computeJapaneseEraParts, WeakMap), Vi = "smallestUnit", _i = "unit", Ji = "roundingIncrement", Ki = "fractionalSecondDigits", Qi = "relativeTo", Xi = {
    constrain: 0,
    reject: 1
}, ea = /*@__PURE__*/ Object.keys(Xi), na = {
    compatible: 0,
    reject: 1,
    earlier: 2,
    later: 3
}, ta = {
    reject: 0,
    use: 1,
    prefer: 2,
    ignore: 3
}, oa = {
    auto: 0,
    never: 1,
    critical: 2,
    always: 3
}, ra = {
    auto: 0,
    never: 1,
    critical: 2
}, ia = {
    auto: 0,
    never: 1
}, aa = {
    floor: 0,
    halfFloor: 1,
    ceil: 2,
    halfCeil: 3,
    trunc: 4,
    halfTrunc: 5,
    expand: 6,
    halfExpand: 7,
    halfEven: 8
}, sa = /*@__PURE__*/ E(refineUnitOption, Vi), ca = /*@__PURE__*/ E(refineUnitOption, "largestUnit"), ua = /*@__PURE__*/ E(refineUnitOption, _i), la = /*@__PURE__*/ E(refineChoiceOption, "overflow", Xi), fa = /*@__PURE__*/ E(refineChoiceOption, "disambiguation", na), da = /*@__PURE__*/ E(refineChoiceOption, "offset", ta), ma = /*@__PURE__*/ E(refineChoiceOption, "calendarName", oa), pa = /*@__PURE__*/ E(refineChoiceOption, "timeZoneName", ra), ha = /*@__PURE__*/ E(refineChoiceOption, "offset", ia), ga = /*@__PURE__*/ E(refineChoiceOption, "roundingMode", aa), L = "PlainYearMonth", q = "PlainMonthDay", J = "PlainDate", We = "PlainDateTime", xe = "PlainTime", Te = "ZonedDateTime", Oe = "Instant", qt = "Duration", Ta = [
    Math.floor,
    (e)=>hasHalf(e) ? Math.floor(e) : Math.round(e),
    Math.ceil,
    (e)=>hasHalf(e) ? Math.ceil(e) : Math.round(e),
    Math.trunc,
    (e)=>hasHalf(e) ? Math.trunc(e) || 0 : Math.round(e),
    (e)=>e < 0 ? Math.floor(e) : Math.ceil(e),
    (e)=>Math.sign(e) * Math.round(Math.abs(e)) || 0,
    (e)=>hasHalf(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)
], Da = "UTC", Ia = 5184e3, Ma = /*@__PURE__*/ isoArgsToEpochSec(1847), Na = /*@__PURE__*/ isoArgsToEpochSec(/*@__PURE__*/ /*@__PURE__*/ (new Date).getUTCFullYear() + 10), ya = /0+$/, fn = /*@__PURE__*/ Jn(_zonedEpochSlotsToIso, WeakMap), Pa = 2 ** 32 - 1, ie = /*@__PURE__*/ Jn((e)=>{
    const n = getTimeZoneEssence(e);
    return "object" == typeof n ? new IntlTimeZone(n) : new FixedTimeZone(n || 0);
});
class FixedTimeZone {
    constructor(e){
        this.R = e;
    }
    getOffsetNanosecondsFor() {
        return this.R;
    }
    getPossibleInstantsFor(e) {
        return [
            isoToEpochNanoWithOffset(e, this.R)
        ];
    }
    B() {}
}
class IntlTimeZone {
    constructor(e){
        this.q = ((e)=>{
            function getOffsetSec(e) {
                const i = clampNumber(e, o, r), [a, s] = computePeriod(i), c = n(a), u = n(s);
                return c === u ? c : pinch(t(a, s), c, u, e);
            }
            function pinch(n, t, o, r) {
                let i, a;
                for(; (void 0 === r || void 0 === (i = r < n[0] ? t : r >= n[1] ? o : void 0)) && (a = n[1] - n[0]);){
                    const t = n[0] + Math.floor(a / 2);
                    e(t) === o ? n[1] = t : n[0] = t + 1;
                }
                return i;
            }
            const n = Jn(e), t = Jn(createSplitTuple);
            let o = Ma, r = Na;
            return {
                J (e) {
                    const n = getOffsetSec(e - 86400), t = getOffsetSec(e + 86400), o = e - n, r = e - t;
                    if (n === t) return [
                        o
                    ];
                    const i = getOffsetSec(o);
                    return i === getOffsetSec(r) ? [
                        e - i
                    ] : n > t ? [
                        o,
                        r
                    ] : [];
                },
                _: getOffsetSec,
                B (e, i) {
                    const a = clampNumber(e, o, r);
                    let [s, c] = computePeriod(a);
                    const u = Ia * i, l = i < 0 ? ()=>c > o || (o = a, 0) : ()=>s < r || (r = a, 0);
                    for(; l();){
                        const o = n(s), r = n(c);
                        if (o !== r) {
                            const n = t(s, c);
                            pinch(n, o, r);
                            const a = n[0];
                            if ((compareNumbers(a, e) || 1) === i) return a;
                        }
                        s += u, c += u;
                    }
                }
            };
        })(((e)=>(n)=>{
                const t = hashIntlFormatParts(e, n * Hr);
                return isoArgsToEpochSec(parseIntlPartsYear(t), parseInt(t.month), parseInt(t.day), parseInt(t.hour), parseInt(t.minute), parseInt(t.second)) - n;
            })(e));
    }
    getOffsetNanosecondsFor(e) {
        return this.q._(epochNanoToSec(e)) * _r;
    }
    getPossibleInstantsFor(e) {
        const [n, t] = [
            isoArgsToEpochSec((o = e).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond),
            o.isoMillisecond * be + o.isoMicrosecond * Vr + o.isoNanosecond
        ];
        var o;
        return this.q.J(n).map((e)=>checkEpochNanoInBounds(moveBigNano(he(e, _r), t)));
    }
    B(e, n) {
        const [t, o] = epochNanoToSecMod(e), r = this.q.B(t + (n > 0 || o ? 1 : 0), n);
        if (void 0 !== r) return he(r, _r);
    }
}
const va = "([+\u2212-])", Ea = "(?:[.,](\\d{1,9}))?", Sa = `(?:(?:${va}(\\d{6}))|(\\d{4}))-?(\\d{2})`, Fa = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + Ea + ")?)?", ba = va + Fa, Oa = Sa + "-?(\\d{2})(?:[T ]" + Fa + "(Z|" + ba + ")?)?", wa = "\\[(!?)([^\\]]*)\\]", Ba = `((?:${wa}){0,9})`, ka = /*@__PURE__*/ createRegExp(Sa + Ba), Ya = /*@__PURE__*/ createRegExp("(?:--)?(\\d{2})-?(\\d{2})" + Ba), Ca = /*@__PURE__*/ createRegExp(Oa + Ba), Za = /*@__PURE__*/ createRegExp("T?" + Fa + "(?:" + ba + ")?" + Ba), Ra = /*@__PURE__*/ createRegExp(ba), za = /*@__PURE__*/ new RegExp(wa, "g"), qa = /*@__PURE__*/ createRegExp(`${va}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${Ea}H)?(?:(\\d+)${Ea}M)?(?:(\\d+)${Ea}S)?)?`), Aa = /*@__PURE__*/ Jn((e)=>new En(Ri, {
        timeZone: e,
        era: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    })), Ua = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, La = /*@__PURE__*/ Jn(createIntlCalendar), Wa = /*@__PURE__*/ Jn((e)=>new En(Ri, {
        calendar: e,
        timeZone: Da,
        era: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    })), ja = /^M(\d{2})(L?)$/, xa = {
    era: toStringViaPrimitive,
    eraYear: toInteger,
    year: toInteger,
    month: toPositiveInteger,
    monthCode: toStringViaPrimitive,
    day: toPositiveInteger
}, $a = /*@__PURE__*/ jr(w, toInteger), Ga = /*@__PURE__*/ jr(F, toStrictInteger), Ha = /*@__PURE__*/ Object.assign({}, xa, $a, Ga, {
    offset: toStringViaPrimitive
}), Va = /*@__PURE__*/ E(remapProps, w, j), _a = {
    dateAdd (e, n, t) {
        const o = H(t);
        let r, { years: i, months: a, weeks: s, days: c } = n;
        if (c += durationFieldsToBigNano(n, 5)[0], i || a) r = ((e, n, t, o, r)=>{
            let [i, a, s] = e.v(n);
            if (t) {
                const [n, o] = e.$(i, a);
                i += t, a = monthCodeNumberToMonth(n, o, e.P(i)), a = clampEntity("month", a, 1, e.j(i), r);
            }
            return o && ([i, a] = e.G(i, a, o)), s = clampEntity("day", s, 1, e.N(i, a), r), e.p(i, a, s);
        })(this, e, i, a, o);
        else {
            if (!s && !c) return e;
            r = isoToEpochMilli(e);
        }
        return r += (7 * s + c) * Gr, checkIsoDateInBounds(epochMilliToIso(r));
    },
    dateUntil (e, n, t) {
        if (t <= 7) {
            let o = 0, r = diffDays({
                ...e,
                ...Dt
            }, {
                ...n,
                ...Dt
            });
            return 7 === t && ([o, r] = divModTrunc(r, 7)), {
                ...Fi,
                weeks: o,
                days: r
            };
        }
        const o = this.v(e), r = this.v(n);
        let [i, a, s] = ((e, n, t, o, r, i, a)=>{
            let s = r - n, c = i - t, u = a - o;
            if (s || c) {
                const l = Math.sign(s || c);
                let f = e.N(r, i), d = 0;
                if (Math.sign(u) === -l) {
                    const o = f;
                    [r, i] = e.G(r, i, -l), s = r - n, c = i - t, f = e.N(r, i), d = l < 0 ? -o : f;
                }
                if (u = a - Math.min(o, f) + d, s) {
                    const [o, a] = e.$(n, t), [u, f] = e.$(r, i);
                    if (c = u - o || Number(f) - Number(a), Math.sign(c) === -l) {
                        const t = l < 0 && -e.j(r);
                        s = (r -= l) - n, c = i - monthCodeNumberToMonth(o, a, e.P(r)) + (t || e.j(r));
                    }
                }
            }
            return [
                s,
                c,
                u
            ];
        })(this, ...o, ...r);
        return 8 === t && (a += this.V(i, o[0]), i = 0), {
            ...Fi,
            years: i,
            months: a,
            days: s
        };
    },
    dateFromFields (e, n) {
        const t = H(n), o = refineYear(this, e), r = refineMonth(this, e, o, t), i = refineDay(this, e, r, o, t);
        return v(checkIsoDateInBounds(this.L(o, r, i)), this.id || X);
    },
    yearMonthFromFields (e, n) {
        const t = H(n), o = refineYear(this, e), r = refineMonth(this, e, o, t);
        return createPlainYearMonthSlots(checkIsoYearMonthInBounds(this.L(o, r, 1)), this.id || X);
    },
    monthDayFromFields (e, n) {
        const t = H(n), o = !this.id, { monthCode: r, year: i, month: a } = e;
        let s, c, u, l, f;
        if (void 0 !== r) {
            [s, c] = parseMonthCode(r), f = getDefinedProp(e, "day");
            const n = this.k(s, c, f);
            if (!n) throw new RangeError(yr);
            if ([u, l] = n, void 0 !== a && a !== l) throw new RangeError(Mr);
            o && (l = clampEntity("month", l, 1, $i, 1), f = clampEntity("day", f, 1, computeIsoDaysInMonth(void 0 !== i ? i : u, l), t));
        } else {
            u = void 0 === i && o ? xi : refineYear(this, e), l = refineMonth(this, e, u, t), f = refineDay(this, e, l, u, t);
            const n = this.P(u);
            c = l === n, s = monthToMonthCodeNumber(l, n);
            const r = this.k(s, c, f);
            if (!r) throw new RangeError(yr);
            [u, l] = r;
        }
        return createPlainMonthDaySlots(checkIsoDateInBounds(this.L(u, l, f)), this.id || X);
    },
    fields (e) {
        return getCalendarEraOrigins(this) && e.includes("year") ? [
            ...e,
            ...ii
        ] : e;
    },
    mergeFields (e, n) {
        const t = Object.assign(Object.create(null), e);
        return spliceFields(t, n, ui), getCalendarEraOrigins(this) && (spliceFields(t, n, ai), this.id === Ti && spliceFields(t, n, mi, ii)), t;
    },
    inLeapYear (e) {
        const [n] = this.v(e);
        return this.K(n);
    },
    monthsInYear (e) {
        const [n] = this.v(e);
        return this.j(n);
    },
    daysInMonth (e) {
        const [n, t] = this.v(e);
        return this.N(n, t);
    },
    daysInYear (e) {
        const [n] = this.v(e);
        return this.X(n);
    },
    dayOfYear: computeNativeDayOfYear,
    era (e) {
        return this.nn(e)[0];
    },
    eraYear (e) {
        return this.nn(e)[1];
    },
    monthCode (e) {
        const [n, t] = this.v(e), [o, r] = this.$(n, t);
        return ((e, n)=>"M" + xr(e) + (n ? "L" : ""))(o, r);
    },
    dayOfWeek: computeIsoDayOfWeek,
    daysInWeek () {
        return 7;
    }
}, Ja = {
    dayOfYear: computeNativeDayOfYear,
    v: computeIsoDateParts,
    p: isoArgsToEpochMilli
}, Ka = /*@__PURE__*/ Object.assign({}, Ja, {
    weekOfYear: computeNativeWeekOfYear,
    yearOfWeek: computeNativeYearOfWeek,
    m (e) {
        function computeWeekShift(e) {
            return (7 - e < n ? 7 : 0) - e;
        }
        function computeWeeksInYear(e) {
            const n = computeIsoDaysInYear(l + e), t = e || 1, o = computeWeekShift(modFloor(a + n * t, 7));
            return c = (n + (o - s) * t) / 7;
        }
        const n = this.id ? 1 : 4, t = computeIsoDayOfWeek(e), o = this.dayOfYear(e), r = modFloor(t - 1, 7), i = o - 1, a = modFloor(r - i, 7), s = computeWeekShift(a);
        let c, u = Math.floor((i - s) / 7) + 1, l = e.isoYear;
        return u ? u > computeWeeksInYear(0) && (u = 1, l++) : (u = computeWeeksInYear(-1), l--), [
            u,
            l,
            c
        ];
    }
}), Qa = {
    dayOfYear: computeNativeDayOfYear,
    v: computeIntlDateParts,
    p: computeIntlEpochMilli,
    weekOfYear: computeNativeWeekOfYear,
    yearOfWeek: computeNativeYearOfWeek,
    m () {
        return [];
    }
}, Y = /*@__PURE__*/ createNativeOpsCreator(/*@__PURE__*/ Object.assign({}, _a, Ka, {
    v: computeIsoDateParts,
    nn (e) {
        return this.id === gi ? computeGregoryEraParts(e) : this.id === Ti ? Hi(e) : [];
    },
    $: (e, n)=>[
            n,
            0
        ],
    k (e, n) {
        if (!n) return [
            xi,
            e
        ];
    },
    K: computeIsoInLeapYear,
    P () {},
    j: computeIsoMonthsInYear,
    V: (e)=>e * $i,
    N: computeIsoDaysInMonth,
    X: computeIsoDaysInYear,
    L: (e, n, t)=>({
            isoYear: e,
            isoMonth: n,
            isoDay: t
        }),
    p: isoArgsToEpochMilli,
    G: (e, n, t)=>(e += divTrunc(t, $i), (n += modTrunc(t, $i)) < 1 ? (e--, n += $i) : n > $i && (e++, n -= $i), [
            e,
            n
        ]),
    year (e) {
        return e.isoYear;
    },
    month (e) {
        return e.isoMonth;
    },
    day: (e)=>e.isoDay
}), /*@__PURE__*/ Object.assign({}, _a, Qa, {
    v: computeIntlDateParts,
    nn (e) {
        const n = this.h(e);
        return [
            n.era,
            n.eraYear
        ];
    },
    $ (e, n) {
        const t = computeIntlLeapMonth.call(this, e);
        return [
            monthToMonthCodeNumber(n, t),
            t === n
        ];
    },
    k (e, n, t) {
        let [o, r, i] = computeIntlDateParts.call(this, {
            isoYear: xi,
            isoMonth: $i,
            isoDay: 31
        });
        const a = computeIntlLeapMonth.call(this, o), s = r === a;
        1 === (compareNumbers(e, monthToMonthCodeNumber(r, a)) || compareNumbers(Number(n), Number(s)) || compareNumbers(t, i)) && o--;
        for(let r = 0; r < 100; r++){
            const i = o - r, a = computeIntlLeapMonth.call(this, i), s = monthCodeNumberToMonth(e, n, a);
            if (n === (s === a) && t <= computeIntlDaysInMonth.call(this, i, s)) return [
                i,
                s
            ];
        }
    },
    K (e) {
        const n = computeIntlDaysInYear.call(this, e);
        return n > computeIntlDaysInYear.call(this, e - 1) && n > computeIntlDaysInYear.call(this, e + 1);
    },
    P: computeIntlLeapMonth,
    j: computeIntlMonthsInYear,
    V (e, n) {
        const t = n + e, o = Math.sign(e), r = o < 0 ? -1 : 0;
        let i = 0;
        for(let e = n; e !== t; e += o)i += computeIntlMonthsInYear.call(this, e + r);
        return i;
    },
    N: computeIntlDaysInMonth,
    X: computeIntlDaysInYear,
    L (e, n, t) {
        return epochMilliToIso(computeIntlEpochMilli.call(this, e, n, t));
    },
    p: computeIntlEpochMilli,
    G (e, n, t) {
        if (t) {
            if (n += t, !Number.isSafeInteger(n)) throw new RangeError(Cr);
            if (t < 0) for(; n < 1;)n += computeIntlMonthsInYear.call(this, --e);
            else {
                let t;
                for(; n > (t = computeIntlMonthsInYear.call(this, e));)n -= t, e++;
            }
        }
        return [
            e,
            n
        ];
    },
    year (e) {
        return this.h(e).year;
    },
    month (e) {
        const { year: n, o: t } = this.h(e), { u: o } = this.l(n);
        return o[t] + 1;
    },
    day (e) {
        return this.h(e).day;
    }
})), Xa = "numeric", es = [
    "timeZoneName"
], ns = {
    month: Xa,
    day: Xa
}, ts = {
    year: Xa,
    month: Xa
}, os = /*@__PURE__*/ Object.assign({}, ts, {
    day: Xa
}), rs = {
    hour: Xa,
    minute: Xa,
    second: Xa
}, is = /*@__PURE__*/ Object.assign({}, os, rs), as = /*@__PURE__*/ Object.assign({}, is, {
    timeZoneName: "short"
}), ss = /*@__PURE__*/ Object.keys(ts), cs = /*@__PURE__*/ Object.keys(ns), us = /*@__PURE__*/ Object.keys(os), ls = /*@__PURE__*/ Object.keys(rs), fs = [
    "dateStyle"
], ds = /*@__PURE__*/ ss.concat(fs), ms = /*@__PURE__*/ cs.concat(fs), ps = /*@__PURE__*/ us.concat(fs, [
    "weekday"
]), hs = /*@__PURE__*/ ls.concat([
    "dayPeriod",
    "timeStyle"
]), gs = /*@__PURE__*/ ps.concat(hs), Ts = /*@__PURE__*/ gs.concat(es), Ds = /*@__PURE__*/ es.concat(hs), Is = /*@__PURE__*/ es.concat(ps), Ms = /*@__PURE__*/ es.concat([
    "day",
    "weekday"
], hs), Ns = /*@__PURE__*/ es.concat([
    "year",
    "weekday"
], hs), ys = {}, t = [
    /*@__PURE__*/ createOptionsTransformer(gs, is),
    y
], s = [
    /*@__PURE__*/ createOptionsTransformer(Ts, as),
    y,
    0,
    (e, n)=>{
        const t = I(e.timeZone);
        if (n && I(n.timeZone) !== t) throw new RangeError(Fr);
        return t;
    }
], n = [
    /*@__PURE__*/ createOptionsTransformer(gs, is, es),
    isoToEpochMilli
], o = [
    /*@__PURE__*/ createOptionsTransformer(ps, os, Ds),
    isoToEpochMilli
], r = [
    /*@__PURE__*/ createOptionsTransformer(hs, rs, Is),
    (e)=>isoTimeFieldsToNano(e) / be
], a = [
    /*@__PURE__*/ createOptionsTransformer(ds, ts, Ms),
    isoToEpochMilli,
    1
], i = [
    /*@__PURE__*/ createOptionsTransformer(ms, ns, Ns),
    isoToEpochMilli,
    1
];
let Ps;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["5bQMp","Zsu0b"], "Zsu0b", "parcelRequire94c2")

//# sourceMappingURL=index.cc4876bf.js.map
