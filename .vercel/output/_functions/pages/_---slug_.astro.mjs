import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_CBlHAyeV.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection, a as $$Date, $ as $$CategoryPill } from '../chunks/Date_BJcvHOZx.mjs';
import { $ as $$Layout } from '../chunks/Layout_D-rVrUyA.mjs';
import '../chunks/index_DW4HPV0C.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_PcLluLAs.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  const seoTitle = post.data.seo?.title || post.data.title;
  const seoDescription = post.data.seo?.description || "Read more about " + post.data.title;
  let seoImage = post.data.seo?.image;
  if (seoImage && !seoImage.startsWith("http")) {
    const siteUrl = "http://localhost:4321";
    seoImage = new URL(seoImage.startsWith("/") ? seoImage : `/${seoImage}`, siteUrl).toString();
  } else if (!seoImage && post.data.featuredImage) {
    const siteUrl = "http://localhost:4321";
    seoImage = new URL(post.data.featuredImage.src, siteUrl).toString();
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription, "image": seoImage }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-120 absolute top-0 left-0 z-0 overflow-hidden border-b border-black"> ${post.data.featuredImage && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": post.data.featuredImage, "alt": "", "width": 1920, "height": 1080, "class": "w-full h-full object-cover grayscale opacity-20", "quality": 60 })} <div class="absolute inset-0 bg-primary/10 backdrop-blur-md"></div> ` })}`} </div> <article class="site-container--small mx-auto px-4 prose relative z-10 pb-base"> <div class="mt-42 mb-12 text-center"> <h1>${post.data.title}</h1> <div class="flex items-center justify-center gap-4 text-gray-600"> ${renderComponent($$result2, "Date", $$Date, { "date": post.data.publishDate })} ${post.data.categories && renderTemplate`<div class="flex flex-wrap gap-2"> ${post.data.categories.map((category) => renderTemplate`${renderComponent($$result2, "CategoryPill", $$CategoryPill, { "category": category })}`)} </div>`} </div> </div> ${post.data.featuredImage && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": post.data.featuredImage, "alt": "", "width": 1920, "height": 1080, "class": "w-full h-auto rounded-lg border mb-12 border-black", "quality": 95, "format": "webp" })}`} <div class="mt-8"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> ` })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/[...slug].astro", void 0);
const $$file = "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
