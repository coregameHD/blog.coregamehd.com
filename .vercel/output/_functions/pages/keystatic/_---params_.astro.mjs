import { m as makeHandler, k as keystaticConfig } from '../../chunks/keystatic.config_CKObLKtO.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const ALL = makeHandler({
  config: keystaticConfig
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
