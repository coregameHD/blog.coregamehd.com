import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, i as renderSlot, e as renderScript, j as renderHead } from './astro/server_CBlHAyeV.mjs';
import 'kleur/colors';
/* empty css                          */
import './index_DW4HPV0C.mjs';
import { $ as $$Image } from './_astro_assets_PcLluLAs.mjs';
import 'clsx';
import { Analytics } from '@vercel/analytics/react';

const headerMenu = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Profile", link: "https://coregamehd.com" },
  {
    name: "Projects",
    showArrow: true,
    children: [
      { name: "Kagami Visual Novel", link: "https://www.facebook.com/kagamivisualnovel" },
      { name: "Kagami Nihongo", link: "https://www.facebook.com/kagaminihongo" }
    ]
  }
];
const legalMenu = [
  { name: "Docs", link: "https://docs.coregamehd.com" },
  { name: "Template", link: "https://template.coregamehd.com" },
  { name: "Github", link: "https://github.com/coregameHD/blog.coregamehd.com" }
];

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const logo = createSvgComponent({"meta":{"src":"/_astro/astro.Dm8K3lV8.svg","width":115,"height":48,"format":"svg"},"attributes":{"fill":"none","width":"115","height":"48"},"children":"<path fill=\"#17191E\" d=\"M7.77 36.35C6.4 35.11 6 32.51 6.57 30.62c.99 1.2 2.35 1.57 3.75 1.78 2.18.33 4.31.2 6.33-.78.23-.12.44-.27.7-.42.18.55.23 1.1.17 1.67a4.56 4.56 0 0 1-1.94 3.23c-.43.32-.9.61-1.34.91-1.38.94-1.76 2.03-1.24 3.62l.05.17a3.63 3.63 0 0 1-1.6-1.38 3.87 3.87 0 0 1-.63-2.1c0-.37 0-.74-.05-1.1-.13-.9-.55-1.3-1.33-1.32a1.56 1.56 0 0 0-1.63 1.26c0 .06-.03.12-.05.2Z\" /><path fill=\"url(#a)\" d=\"M7.77 36.35C6.4 35.11 6 32.51 6.57 30.62c.99 1.2 2.35 1.57 3.75 1.78 2.18.33 4.31.2 6.33-.78.23-.12.44-.27.7-.42.18.55.23 1.1.17 1.67a4.56 4.56 0 0 1-1.94 3.23c-.43.32-.9.61-1.34.91-1.38.94-1.76 2.03-1.24 3.62l.05.17a3.63 3.63 0 0 1-1.6-1.38 3.87 3.87 0 0 1-.63-2.1c0-.37 0-.74-.05-1.1-.13-.9-.55-1.3-1.33-1.32a1.56 1.56 0 0 0-1.63 1.26c0 .06-.03.12-.05.2Z\" /><path fill=\"#17191E\" d=\"M.02 30.31s4.02-1.95 8.05-1.95l3.04-9.4c.11-.45.44-.76.82-.76.37 0 .7.31.82.76l3.04 9.4c4.77 0 8.05 1.95 8.05 1.95L17 11.71c-.2-.56-.53-.91-.98-.91H7.83c-.44 0-.76.35-.97.9L.02 30.31Zm42.37-5.97c0 1.64-2.05 2.62-4.88 2.62-1.85 0-2.5-.45-2.5-1.41 0-1 .8-1.49 2.65-1.49 1.67 0 3.09.03 4.73.23v.05Zm.03-2.04a21.37 21.37 0 0 0-4.37-.36c-5.32 0-7.82 1.25-7.82 4.18 0 3.04 1.71 4.2 5.68 4.2 3.35 0 5.63-.84 6.46-2.92h.14c-.03.5-.05 1-.05 1.4 0 1.07.18 1.16 1.06 1.16h4.15a16.9 16.9 0 0 1-.36-4c0-1.67.06-2.93.06-4.62 0-3.45-2.07-5.64-8.56-5.64-2.8 0-5.9.48-8.26 1.19.22.93.54 2.83.7 4.06 2.04-.96 4.95-1.37 7.2-1.37 3.11 0 3.97.71 3.97 2.15v.57Zm11.37 3c-.56.07-1.33.07-2.12.07-.83 0-1.6-.03-2.12-.1l-.02.58c0 2.85 1.87 4.52 8.45 4.52 6.2 0 8.2-1.64 8.2-4.55 0-2.74-1.33-4.09-7.2-4.39-4.58-.2-4.99-.7-4.99-1.28 0-.66.59-1 3.65-1 3.18 0 4.03.43 4.03 1.35v.2a46.13 46.13 0 0 1 4.24.03l.02-.55c0-3.36-2.8-4.46-8.2-4.46-6.08 0-8.13 1.49-8.13 4.39 0 2.6 1.64 4.23 7.48 4.48 4.3.14 4.77.62 4.77 1.28 0 .7-.7 1.03-3.71 1.03-3.47 0-4.35-.48-4.35-1.47v-.13Zm19.82-12.05a17.5 17.5 0 0 1-6.24 3.48c.03.84.03 2.4.03 3.24l1.5.02c-.02 1.63-.04 3.6-.04 4.9 0 3.04 1.6 5.32 6.58 5.32 2.1 0 3.5-.23 5.23-.6a43.77 43.77 0 0 1-.46-4.13c-1.03.34-2.34.53-3.78.53-2 0-2.82-.55-2.82-2.13 0-1.37 0-2.65.03-3.84 2.57.02 5.13.07 6.64.11-.02-1.18.03-2.9.1-4.04-2.2.04-4.65.07-6.68.07l.07-2.93h-.16Zm13.46 6.04a767.33 767.33 0 0 1 .07-3.18H82.6c.07 1.96.07 3.98.07 6.92 0 2.95-.03 4.99-.07 6.93h5.18c-.09-1.37-.11-3.68-.11-5.65 0-3.1 1.26-4 4.12-4 1.33 0 2.28.16 3.1.46.03-1.16.26-3.43.4-4.43-.86-.25-1.81-.41-2.96-.41-2.46-.03-4.26.98-5.1 3.38l-.17-.02Zm22.55 3.65c0 2.5-1.8 3.66-4.64 3.66-2.81 0-4.61-1.1-4.61-3.66s1.82-3.52 4.61-3.52c2.82 0 4.64 1.03 4.64 3.52Zm4.71-.11c0-4.96-3.87-7.18-9.35-7.18-5.5 0-9.23 2.22-9.23 7.18 0 4.94 3.49 7.59 9.21 7.59 5.77 0 9.37-2.65 9.37-7.6Z\" /><defs><linearGradient id=\"a\" x1=\"6.33\" x2=\"19.43\" y1=\"40.8\" y2=\"34.6\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#D83333\" /><stop offset=\"1\" stop-color=\"#F041FF\" /></linearGradient></defs>"});

const $$Astro$7 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Logo;
  const { variant = "header" } = Astro2.props;
  const getLogoClass = () => {
    switch (variant) {
      case "header":
        return "text-header-logo hover:text-primary";
      case "footer":
        return "text-footer-logo hover:text-primary";
      case "dark":
        return "text-body-base hover:text-primary";
      default:
        return "text-body-base hover:text-primary";
    }
  };
  return renderTemplate`${maybeRenderHead()}<a href="/"${addAttribute(["logo font-medium transition-colors duration-200", getLogoClass()], "class:list")}>  ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "", "class": "hidden" })} <span class="font-bold">Kagami Blog</span> (ปกิณกะคางามิ)
</a>`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/components/Logo.astro", void 0);

const $$Astro$6 = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$5 = createAstro();
const $$ChevronDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ChevronDown;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-down", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m6 9 6 6 6-6"></path> ` })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/node_modules/lucide-astro/dist/ChevronDown.astro", void 0);

const $$Astro$4 = createAstro();
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "menu", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<line x1="4" x2="20" y1="12" y2="12"></line> <line x1="4" x2="20" y1="6" y2="6"></line> <line x1="4" x2="20" y1="18" y2="18"></line> ` })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/node_modules/lucide-astro/dist/Menu.astro", void 0);

const $$Astro$3 = createAstro();
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "x", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> ` })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/node_modules/lucide-astro/dist/X.astro", void 0);

const $$Astro$2 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    variant = "primary",
    size = "md",
    disabled = false,
    class: className = "",
    type = "button",
    target,
    ...rest
  } = Astro2.props;
  const baseStyles = "group relative inline-flex overflow-hidden items-center justify-center rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex items-center gap-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light focus-visible:ring-primary hover:ring-2 hover:ring-primary hover:ring-offset-2",
    secondary: "bg-secondary text-white hover:bg-secondary-light focus-visible:ring-secondary hover:ring-2 hover:ring-secondary hover:ring-offset-2",
    accent: "bg-accent text-white hover:opacity-90 focus-visible:ring-accent hover:ring-2 hover:ring-accent hover:ring-offset-2",
    ghostLight: "text-white ring-2 ring-white focus-visible:ring-white hover:ring-2 hover:ring-black hover:ring-offset-2",
    ghostDark: "text-body-base ring-2 ring-text focus-visible:ring-text hover:ring-2 hover:ring-black hover:ring-offset-2"
  };
  const sizes = {
    sm: "h-9 px-3 text-xsmall",
    md: "h-10 px-4 py-2 text-small",
    lg: "h-11 px-8 text-base"
  };
  const classes = [
    baseStyles,
    variants[variant],
    sizes[size],
    className
  ].join(" ");
  const Element = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Element", Element, { ...rest, "href": href, "type": !href ? type : void 0, "class": classes, "disabled": disabled, "aria-disabled": disabled, ...target && { target, rel: target === "_blank" ? "noopener noreferrer" : void 0 } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span class="absolute left-0 -mt-12 h-32 w-1/2 translate-x-[250%] rotate-12 bg-white opacity-20 transition-all duration-250 ease-out group-hover:translate-x-[2%]"></span> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/components/ui/Button.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const ctaButton = {
    name: "Facebook",
    link: "https://www.facebook.com/coregameHD"
  };
  const currentPath = Astro2.url.pathname;
  const isCurrentPage = (link) => {
    if (link === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(link);
  };
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-50 w-full left-0"> <div class="site-container mx-auto px-4 mt-4"> <div class="flex justify-between items-center bg-white py-4 rounded-lg px-4 border-black border"> ${renderComponent($$result, "Logo", $$Logo, {})} <nav class="relative flex items-center gap-2 lg:gap-8" aria-label="Site Navigation">  <ul class="hidden lg:flex lg:gap-8 items-center"> ${headerMenu.map((item, index) => renderTemplate`<li class="relative group"> <div class="flex items-center gap-1"> <a${addAttribute(item.link, "href")}${addAttribute([
    "text-[18px] font-medium rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-nav-text-active",
    isCurrentPage(item.link) ? "text-nav-text-current font-semibold" : "text-nav-text hover:text-nav-text-hover"
  ], "class:list")}${addAttribute(isCurrentPage(item.link) ? "page" : void 0, "aria-current")}> ${item.name} ${item.children && item.showArrow && renderTemplate`${renderComponent($$result, "ChevronDown", $$ChevronDown, { "size": 16, "class": "transform transition-transform inline-block ml-1", "aria-hidden": "true" })}`} </a> ${item.children && renderTemplate`<button type="button" class="sr-only" aria-expanded="false"${addAttribute(item.name, "aria-label")}></button>`} </div> ${item.children && renderTemplate`<ul${addAttribute([
    "submenu absolute mt-2 bg-nav-submenu-bg border-black border rounded-md min-w-[300px] transition-all duration-200 opacity-0 invisible overflow-hidden z-50",
    index === headerMenu.length - 1 ? "right-0" : "left-0"
  ], "class:list")}> ${item.children.map((child) => renderTemplate`<li> <a${addAttribute(child.link, "href")}${addAttribute([
    "block px-4 text-[18px] py-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nav-text-active",
    isCurrentPage(child.link) ? "text-nav-text-current font-semibold" : "text-nav-text hover:text-nav-text-hover"
  ], "class:list")}${addAttribute(isCurrentPage(child.link) ? "page" : void 0, "aria-current")}> ${child.name} </a> </li>`)} </ul>`} </li>`)} </ul> ${renderComponent($$result, "Button", $$Button, { "href": ctaButton.link, "variant": "primary" }, { "default": ($$result2) => renderTemplate`${ctaButton.name}` })}  <button class="mobile-menu-button relative z-30 p-2 border-none cursor-pointer bg-transparent lg:hidden" aria-label="Toggle Menu" aria-expanded="false"> <span class="menu-icon block"> ${renderComponent($$result, "Menu", $$Menu, { "size": 24, "class": "text-body-base" })} </span> <span class="close-icon hidden"> ${renderComponent($$result, "X", $$X, { "size": 24, "class": "text-white" })} </span> </button>  <div class="mobile-menu fixed inset-0 z-20 px-8 pt-20 bg-primary lg:hidden hidden opacity-0 scale-95 transform transition-all duration-200 ease-out overflow-y-auto"> <ul class="flex flex-col gap-4"> ${headerMenu.map((item) => renderTemplate`<li> <div class="text-white"> <div class="flex items-center justify-between"> <a${addAttribute(item.link, "href")}${addAttribute([
    "py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-nav-mobile-text-active",
    isCurrentPage(item.link) ? "text-nav-mobile-text-current font-semibold" : "text-nav-mobile-text hover:text-nav-mobile-text-hover"
  ], "class:list")}${addAttribute(isCurrentPage(item.link) ? "page" : void 0, "aria-current")}> ${item.name} </a> ${item.children && renderTemplate`<button${addAttribute([
    "mobile-submenu-button p-2 -mr-2 rounded-full focus:outline-none focus:ring-2 focus:ring-nav-mobile-text-active",
    isCurrentPage(item.link) ? "text-nav-mobile-text-current" : "text-nav-mobile-text hover:text-nav-mobile-text-hover"
  ], "class:list")}${addAttribute(`Toggle ${item.name} submenu`, "aria-label")} aria-expanded="false"> ${renderComponent($$result, "ChevronDown", $$ChevronDown, { "size": 16, "class": "transform transition-transform duration-200" })} </button>`} </div> ${item.children && renderTemplate`<ul class="mobile-submenu ml-4 mt-2 space-y-2 hidden" role="menu"> ${item.children.map((child) => renderTemplate`<li role="none"> <a${addAttribute(child.link, "href")}${addAttribute([
    "block py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-nav-mobile-text-active",
    isCurrentPage(child.link) ? "text-nav-mobile-text-current font-semibold" : "text-nav-mobile-text hover:text-nav-mobile-text-hover"
  ], "class:list")} role="menuitem"${addAttribute(
    isCurrentPage(child.link) ? "page" : void 0,
    "aria-current"
  )}> ${child.name} </a> </li>`)} </ul>`} </div> </li>`)} </ul>  <div class="mt-8 pb-8"> ${renderComponent($$result, "Button", $$Button, { "href": ctaButton.link, "variant": "ghostLight" }, { "default": ($$result2) => renderTemplate`${ctaButton.name}` })} </div> </div> </nav> </div> </div> </header> ${renderScript($$result, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`bg-black text-white pb-4`, "class")}> <div class="site-container mx-auto px-4"> <div class="mt-4 flex flex-col md:flex-row justify-between items-center"> <div class="text-body-dark text-sm"> <!--{currentYear} {siteConfig.companyName}. All rights reserved.-->
恋は一瞬、妹は一生。<br>Build with 💜 by <b>coregameHD</b>.
</div> <nav class="mt-3 md:mt-0"> <ul class="flex flex-wrap gap-6"> ${legalMenu.map((item) => renderTemplate`<li> <a${addAttribute(item.link, "href")} class="text-sm text-body-dark hover:text-white transition-colors"> ${item.name} </a> </li>`)} </ul> </nav> </div> </div> </footer>`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/components/Footer.astro", void 0);

const siteConfig = {
  siteUrl: "https://blog.coregamehd.com"};
const SEO = {
  Separator: "|",
  SiteName: "Kagami Blog (ปกิณกะคางามิ)",
  defaultDescription: "เล่าบ่นก่นด่า ประสาคนไอที"
};
const blogSetting = {
  postsPerPage: 24
};
const themeSetting = {
  theme: "hades"
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { theme } = themeSetting;
  const { SiteName, Separator, defaultDescription } = SEO;
  const { title, description, image, footerCta, canonicalUrl } = Astro2.props;
  const pageTitle = title === "Kagami Blog" ? SiteName : title ? `${title} ${Separator} ${SiteName}` : SiteName;
  const pageDescription = description || defaultDescription;
  const pageImage = image || "";
  const canonicalPath = canonicalUrl || Astro2.url.pathname;
  const fullCanonicalUrl = new URL(canonicalPath, siteConfig.siteUrl).toString();
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="sitemap" href="/sitemap-index.xml"><link rel="canonical"${addAttribute(fullCanonicalUrl, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title><meta name="description"${addAttribute(pageDescription, "content")}><meta name="robots" content="index, follow"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@100..900&display=swap" rel="stylesheet"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(fullCanonicalUrl, "content")}><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description"${addAttribute(pageDescription, "content")}>${pageImage && renderTemplate`<meta property="og:image"${addAttribute(new URL(pageImage, siteConfig.siteUrl).toString(), "content")}>`}<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(fullCanonicalUrl, "content")}><meta property="twitter:title"${addAttribute(pageTitle, "content")}><meta property="twitter:description"${addAttribute(pageDescription, "content")}>${pageImage && renderTemplate`<meta property="twitter:image"${addAttribute(new URL(pageImage, siteConfig.siteUrl).toString(), "content")}>`}${renderHead()}</head> <body${addAttribute(theme, "data-theme")}> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "footerCta": footerCta })} ${renderComponent($$result, "Analytics", Analytics, {})} </body></html>`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Button as a, blogSetting as b, $$ as c };
