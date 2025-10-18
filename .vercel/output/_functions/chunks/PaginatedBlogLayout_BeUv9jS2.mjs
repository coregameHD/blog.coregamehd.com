import { c as createComponent, b as createAstro, r as renderComponent, m as maybeRenderHead, a as renderTemplate, d as addAttribute, e as renderScript } from './astro/server_BAfHFqsZ.mjs';
import 'kleur/colors';
import { c as $$, $ as $$Layout, a as $$Button } from './Layout_C9lO7SRe.mjs';
import { $ as $$CategoryPill, a as $$Date, g as getCollection } from './Date_DG8DK6b9.mjs';
import './index_l143NPzF.mjs';
import { $ as $$Image } from './_astro_assets_DNjvqCD7.mjs';
/* empty css                          */

const $$Astro$5 = createAstro();
const $$ChevronLeft = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ChevronLeft;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-left", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m15 18-6-6 6-6"></path> ` })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/node_modules/lucide-astro/dist/ChevronLeft.astro", void 0);

const $$Astro$4 = createAstro();
const $$ChevronRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ChevronRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m9 18 6-6-6-6"></path> ` })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/node_modules/lucide-astro/dist/ChevronRight.astro", void 0);

const categories = [
  {
    name: "General",
    slug: "general",
    description: "เรื่องสัพเพเหระทั่วไป"
  },
  {
    name: "Language",
    slug: "language",
    description: "เรื่องเกี่ยวกับภาษา (โดยเฉพาะภาษาญี่ปุ่น)"
  },
  {
    name: "Thoughts",
    slug: "thoughts",
    description: "บทความแสดงทรรศนะ"
  },
  {
    name: "Visual Novel",
    slug: "visual-novel",
    description: "เกมวิชวลโนเวลและเอโรเกะ"
  }
];

const $$Astro$3 = createAstro();
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, featuredImage, publishDate, categories: postCategories, slug, index, isHome } = Astro2.props;
  const validCategories = postCategories.filter(
    (categoryName) => categories.some((category) => category.name === categoryName)
  );
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${slug}`, "href")} class="group flex flex-col h-full overflow-hidden bg-white rounded-lg border border-black transition-all duration-300 hover:border-primary"> <div class="relative aspect-[16/9] overflow-hidden border-black border-b group-hover:border-primary transition-colors duration-300"> ${featuredImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": featuredImage, "alt": "", "width": 600, "height": 338, "class": "object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" })}`} <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>  <div class="absolute bottom-3 left-3 flex flex-wrap gap-2 z-10"> ${validCategories.map((categoryName) => renderTemplate`<div class="category-tag"> ${renderComponent($$result, "CategoryPill", $$CategoryPill, { "category": categoryName })} </div>`)} </div> </div> <div class="py-4 px-4 flex flex-col flex-grow relative">  <div class="text-sm text-gray-600 mb-3 group-hover:text-primary/80 transition-colors duration-300"> ${renderComponent($$result, "Date", $$Date, { "date": publishDate })} </div> <h2${addAttribute(`text-xl ${isHome ? "font-semibold" : "font-bold"} text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300`, "class")}> ${title} </h2> </div> </a> ${renderScript($$result, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/components/blog/BlogPost.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/components/blog/BlogPost.astro", void 0);

const $$Astro$2 = createAstro();
const $$BlogList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogList;
  const { posts, currentCategory, isHome } = Astro2.props;
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.publish !== false;
  });
  const activeCategories = categories.filter(
    (category) => allPosts.some((post) => post.data.categories?.includes(category.name))
  );
  const totalPosts = currentCategory ? allPosts.filter((post) => post.data.categories?.includes(currentCategory)).length : allPosts.length;
  return renderTemplate`${maybeRenderHead()}<section class="site-container mx-auto px-4 py-base" data-astro-cid-so7tgn4m> <div class="mb-16 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6" data-astro-cid-so7tgn4m> <div class="w-full" data-astro-cid-so7tgn4m> <h2 class="text-lg font-semibold mb-4" data-astro-cid-so7tgn4m>ประเภทบทความ</h2> <div class="flex flex-wrap gap-2" data-astro-cid-so7tgn4m> <a href="/"${addAttribute(`px-4 sm:px-6 py-2 sm:py-3 leading-none rounded-full text-small flex items-center justify-center transition-colors border border-primary duration-200 ${!currentCategory ? "bg-primary text-body-dark shadow-md" : "bg-background text-body-base hover:bg-background-light hover:text-body-light"}`, "class")} data-astro-cid-so7tgn4m>
ทุกประเภท
</a> ${activeCategories.map((category) => renderTemplate`<div class="relative category-button" data-astro-cid-so7tgn4m> <a${addAttribute(`/category/${category.slug}`, "href")}${addAttribute(`px-4 sm:px-6 py-2 sm:py-3 leading-none rounded-full text-small flex items-center justify-center transition-colors border border-primary duration-200 ${currentCategory === category.name ? "bg-primary text-body-dark shadow-md" : "bg-background text-body-base hover:bg-background-light hover:text-body-light"}`, "class")} data-astro-cid-so7tgn4m> ${category.name} </a> <div class="category-tooltip" data-astro-cid-so7tgn4m> ${category.description} </div> </div>`)} </div> </div> <p class="text-small text-body-base text-left sm:text-right whitespace-nowrap" data-astro-cid-so7tgn4m>
แสดง <span class="font-bold text-primary" data-astro-cid-so7tgn4m>${posts.length}</span> จากทั้งหมด <span class="font-bold text-primary" data-astro-cid-so7tgn4m>${totalPosts}</span> บทความ
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-astro-cid-so7tgn4m> ${posts.map((post, index) => renderTemplate`<div data-astro-cid-so7tgn4m> ${renderComponent($$result, "BlogPost", $$BlogPost, { "title": post.data.title, "featuredImage": post.data.featuredImage || "", "publishDate": post.data.publishDate, "categories": post.data.categories || [], "slug": post.id, "index": index, "isHome": isHome, "data-astro-cid-so7tgn4m": true })} </div>`)} </div> ${posts.length === 0 && renderTemplate`<p class="text-center text-gray-500 py-8" data-astro-cid-so7tgn4m>No posts found in this category.</p>`} </section> `;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/components/blog/BlogList.astro", void 0);

const $$Astro$1 = createAstro();
const $$InnerHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InnerHero;
  const { content } = Astro2.props;
  const opacity = content.overlayOpacity ?? 1;
  return renderTemplate`${maybeRenderHead()}<section class="w-full border-b pt-38 pb-18 relative"> <div class="absolute inset-0 left-0 top-0 w-full h-full overflow-hidden"> ${content.backgroundImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": content.backgroundImage, "alt": "", "width": 1920, "height": 1080, "class": "w-full h-full object-cover", "quality": 70, "format": "webp" })}`} <div class="hero-background absolute inset-0 left-0 top-0 w-full h-full overflow-hidden"${addAttribute(`opacity: ${opacity};`, "style")}></div> </div> <div class="site-container mx-auto px-4 relative z-10"> <div> <h1 class="text-white">${content.title}</h1> ${content.description && renderTemplate`<p class="subtitle text-white">${content.description}</p>`} </div> </div> </section>`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/components/sections/InnerHero.astro", void 0);

const blogHeroImage = new Proxy({"src":"/_astro/background6.CeLGFJzi.jpg","width":3826,"height":1200,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/assets/images/background6.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$PaginatedBlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PaginatedBlogLayout;
  const seoDescription = "Our blog is where we share our thoughts and ideas about the latest trends in the web development industry.";
  const {
    posts: paginatedPosts,
    currentPage,
    totalPages,
    baseUrl,
    title,
    subtitle,
    currentCategory
  } = Astro2.props;
  const seoTitle = title;
  const nextPage = currentPage < totalPages ? baseUrl.startsWith("/category") ? `${baseUrl}/${currentPage + 1}` : `/${currentPage + 1}` : null;
  const prevPage = currentPage > 1 ? currentPage - 1 === 1 ? baseUrl.startsWith("/category") ? baseUrl : "/" : baseUrl.startsWith("/category") ? `${baseUrl}/${currentPage - 1}` : `/${currentPage - 1}` : null;
  const heroContent = {
    title,
    description: subtitle,
    backgroundImage: blogHeroImage,
    overlayOpacity: 0.2
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${renderComponent($$result2, "BlogList", $$BlogList, { "posts": paginatedPosts, "currentCategory": currentCategory, "isHome": baseUrl === "" })} ${totalPages > 1 && renderTemplate`<nav class="pagination-nav" aria-label="Blog pagination"> <div class="container mx-auto px-4 py-12"> <div class="flex items-center justify-center gap-6"> ${prevPage && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": prevPage, "variant": "primary", "class": "flex items-center gap-2" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ChevronLeft", $$ChevronLeft, { "size": 20 })}
Previous
` })}`} <div class="flex items-center gap-2"> ${Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => renderTemplate`<a${addAttribute(
    pageNum === 1 ? baseUrl.startsWith("/category") ? baseUrl : "/" : baseUrl.startsWith("/category") ? `${baseUrl}/${pageNum}` : `/${pageNum}`,
    "href"
  )}${addAttribute(`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${currentPage === pageNum ? "bg-primary text-white" : "hover:bg-white hover:text-body-base"}`, "class")}${addAttribute(currentPage === pageNum ? "page" : void 0, "aria-current")}> ${pageNum} </a>`)} </div> ${nextPage && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": nextPage, "variant": "primary" }, { "default": ($$result3) => renderTemplate`
Next
${renderComponent($$result3, "ChevronRight", $$ChevronRight, { "size": 20 })} ` })}`} </div> </div> </nav>`} </main> ` })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/components/blog/PaginatedBlogLayout.astro", void 0);

export { $$PaginatedBlogLayout as $, categories as c };
