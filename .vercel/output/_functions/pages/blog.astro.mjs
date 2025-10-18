import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BAfHFqsZ.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/Date_DG8DK6b9.mjs';
import { b as blogSetting } from '../chunks/Layout_C9lO7SRe.mjs';
import { $ as $$PaginatedBlogLayout } from '../chunks/PaginatedBlogLayout_BeUv9jS2.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const filteredPosts = allPosts.filter((post) => {
    return post.data.publish !== false;
  });
  const sortedPosts = filteredPosts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  const posts = sortedPosts.slice(0, blogSetting.postsPerPage);
  const totalPages = Math.ceil(sortedPosts.length / blogSetting.postsPerPage);
  return renderTemplate`${renderComponent($$result, "PaginatedBlogLayout", $$PaginatedBlogLayout, { "posts": posts, "currentPage": 1, "totalPages": totalPages, "baseUrl": "/blog", "title": "Blog", "subtitle": "Latest articles and news from the team" })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/blog/index.astro", void 0);
const $$file = "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
