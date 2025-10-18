import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CBlHAyeV.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Button } from '../chunks/Layout_D-rVrUyA.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Page Not Found";
  const seoDescription = "The page you're looking for doesn't exist or has been moved.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full min-h-[80vh] flex items-center"> <div class="site-container mx-auto px-4 py-base text-center"> <div class="max-w-2xl mx-auto"> <h1 class="mb-4 text-9xl font-bold text-primary">404</h1> <h2 class="mb-8">Page Not Found</h2> <p class="text-body-base mb-12">
The page you're looking for doesn't exist or has been moved. 
                    Please check the URL or navigate back to our homepage.
</p> <div> ${renderComponent($$result2, "Button", $$Button, { "href": "/", "variant": "primary", "size": "lg" }, { "default": ($$result3) => renderTemplate`
Back to Homepage
` })} </div> </div> </div> </div> ` })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/404.astro", void 0);

const $$file = "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
