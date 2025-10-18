import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_CBlHAyeV.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/Date_BJcvHOZx.mjs';
import { $ as $$PaginatedBlogLayout, c as categories } from '../../chunks/PaginatedBlogLayout_Q7tYAQPr.mjs';
import { b as blogSetting } from '../../chunks/Layout_D-rVrUyA.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.publish !== false;
  });
  const activeCategories = categories.filter(
    (category) => allPosts.some((post) => post.data.categories?.includes(category.name))
  );
  return activeCategories.map((category) => ({
    params: { slug: category.slug },
    props: { category }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { category } = Astro2.props;
  const currentPage = parseInt(Astro2.url.searchParams.get("page") || "1");
  const posts = await getCollection("blog", ({ data }) => {
    const isPublished = data.publish !== false;
    const hasCategory = data.categories?.includes(category.name);
    return isPublished && hasCategory;
  });
  const sortedPosts = posts.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / blogSetting.postsPerPage);
  const start = (currentPage - 1) * blogSetting.postsPerPage;
  const end = start + blogSetting.postsPerPage;
  const paginatedPosts = sortedPosts.slice(start, end);
  return renderTemplate`${renderComponent($$result, "PaginatedBlogLayout", $$PaginatedBlogLayout, { "posts": paginatedPosts, "currentPage": currentPage, "totalPages": totalPages, "baseUrl": `/category/${category.slug}`, "title": category.name, "subtitle": category.description, "currentCategory": category.name })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/category/[...slug].astro", void 0);
const $$file = "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/category/[...slug].astro";
const $$url = "/category/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
