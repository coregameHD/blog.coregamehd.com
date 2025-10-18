import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_CBlHAyeV.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/Date_BJcvHOZx.mjs';
import { $ as $$PaginatedBlogLayout, c as categories } from '../../../chunks/PaginatedBlogLayout_Q7tYAQPr.mjs';
import { b as blogSetting } from '../../../chunks/Layout_D-rVrUyA.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const allPosts = await getCollection("blog", ({ data }) => {
    return data.publish !== false;
  });
  const activeCategories = categories.filter(
    (category) => allPosts.some((post) => post.data.categories?.includes(category.name))
  );
  return activeCategories.flatMap((category) => {
    const categoryPosts = allPosts.filter((post) => {
      const isPublished = post.data.publish !== false;
      const hasCategory = post.data.categories?.includes(category.name);
      return isPublished && hasCategory;
    });
    const sortedPosts = categoryPosts.sort(
      (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
    );
    const totalPosts = sortedPosts.length;
    const totalPages = Math.ceil(totalPosts / blogSetting.postsPerPage);
    return Array.from({ length: totalPages - 1 }, (_, i) => {
      const page = i + 2;
      const start = (page - 1) * blogSetting.postsPerPage;
      const end = start + blogSetting.postsPerPage;
      return {
        params: {
          slug: category.slug,
          page: String(page)
        },
        props: {
          category,
          page,
          totalPages,
          posts: sortedPosts.slice(start, end)
        }
      };
    });
  });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { category, page, totalPages, posts } = Astro2.props;
  if (page === 1) {
    return Astro2.redirect(`/category/${category.slug}`);
  }
  return renderTemplate`${renderComponent($$result, "PaginatedBlogLayout", $$PaginatedBlogLayout, { "posts": posts, "currentPage": page, "totalPages": totalPages, "baseUrl": `/category/${category.slug}`, "title": category.name, "subtitle": category.description, "currentCategory": category.name })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/category/[slug]/[page].astro", void 0);
const $$file = "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/category/[slug]/[page].astro";
const $$url = "/category/[slug]/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$page,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
