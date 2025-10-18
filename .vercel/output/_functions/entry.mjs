import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C8KMIZNU.mjs';
import { manifest } from './manifest_U3feuIbJ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/blog/_page_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/category/_slug_/_page_.astro.mjs');
const _page7 = () => import('./pages/category/_---slug_.astro.mjs');
const _page8 = () => import('./pages/keystatic.astro.mjs');
const _page9 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page10 = () => import('./pages/keystatic/_---params_.astro2.mjs');
const _page11 = () => import('./pages/_page_.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const _page13 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page3],
    ["src/pages/blog/[page].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/category/[slug]/[page].astro", _page6],
    ["src/pages/category/[...slug].astro", _page7],
    ["src/pages/keystatic/index.astro", _page8],
    ["src/pages/keystatic/[...params].ts", _page9],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page10],
    ["src/pages/[page].astro", _page11],
    ["src/pages/index.astro", _page12],
    ["src/pages/[...slug].astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9a410164-c6b6-43e0-8244-84873f1400dc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
