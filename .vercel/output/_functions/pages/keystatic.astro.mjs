import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CBlHAyeV.mjs';
import 'kleur/colors';
import { $ as $$KeystaticAstroPage } from '../chunks/keystatic-astro-page_CDuufYtY.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", $$KeystaticAstroPage, {})}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/keystatic/index.astro", void 0);

const $$file = "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/keystatic/index.astro";
const $$url = "/keystatic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
