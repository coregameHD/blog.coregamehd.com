import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BAfHFqsZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C9lO7SRe.mjs';
import '../chunks/index_l143NPzF.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DNjvqCD7.mjs';
export { renderers } from '../renderers.mjs';

const aboutImage = new Proxy({"src":"/_astro/background4.CywUWvHe.webp","width":5760,"height":3240,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/assets/images/background4.webp";
							}
							
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  const title = "About";
  const description = "Learn more about coregameHD and the Kagami Blog.";
  const image = "/src/assets/images/background4.webp";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-4xl mx-auto px-4 pt-32 pb-8"> <div class="mb-8"> <h1 class="text-4xl font-bold mb-6">About Me</h1> <div class="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": aboutImage, "alt": "About Background", "width": 1200, "height": 675, "class": "w-full h-full object-cover" })} </div> <div class="prose prose-lg max-w-none"> <div class="bg-gray-100 p-6 rounded-lg mb-8"> <p class="text-xl mb-6"> <strong>ปกิณกะ</strong> /ปะ-กิน-นะ-กะ/<br> <em>(คำวิเศษณ์)</em><br>
เบ็ดเตล็ด, เรี่ยราย, เล็ก ๆ น้อย, คละกัน, (มักใช้ประกอบหน้าศัพท์) เช่น ปกิณกคดี.
</p> </div> <p class="mb-6"> <strong>ปกิณกะคางามิ (Miscellaneous of Kagami)</strong> เป็นเว็บบล็อกที่รวบรวมเรื่องราวจิปาถะตามใจผู้เขียนที่ใช้นามแฝงบนโลกอินเทอร์เน็ตว่า coregameHD หรือที่รู้จักกันในฐานะแอดมินเพจ <a href="https://www.facebook.com/kagamivisualnovel" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Kagami Visual Novel</a> และ <a href="https://www.facebook.com/kagaminihongo/" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Kagami Nihongo</a> </p> <p class="mb-6">
บทความทั้งหมดแบ่งออกเป็น 4 ประเภทใหญ่ ดังนี้
</p> <ol class="list-decimal pl-6 mb-6 space-y-2"> <li><strong>General</strong> เรื่องทั่วไปไม่สังกัดหมวดหมู่ เช่น คำแนะนำ องค์ความรู้ใหม่ รวมถึงเรื่องที่ได้พบเจอในชีวิตประจำวัน</li> <li><strong>Language</strong> ประเด็นเกี่ยวกับภาษา(โดยเฉพาะภาษาญี่ปุ่น) ทฤษฎีการแปล ภาษาศาสตร์ และความเป็นมนุษย์</li> <li><strong>Thoughts</strong> บทความแสดงทรรศนะ ความคิดเห็นที่เกิดจากประสบการณ์ที่สั่งสมเป็นระยะเวลายาวนานหลายปี หรือบางทีอาจจะเป็นตลอดทั้งชีวิตของผมเลยก็ได้</li> <li><strong>Visual Novel</strong> ทุกเรื่องเกี่ยวกับเกมวิชวลโนเวลและเอโรเกะ</li> </ol> <p class="mb-8">
ทุกบทความที่ผมเขียนเปรียบเสมือนจุดเล็กๆ ที่เป็นเอกเทศแยกจากกัน อาจจะมีสาระหรือไม่มีก็ได้ แต่เมื่อนำมารวมกัน จุดเหล่านี้สามารถเชื่อมโยง connect the dot กลายเป็นกระจกเงา (คางามิ) ที่สะท้อนตัวตนของผมรวมถึงผู้อ่าน ทำให้ได้รับแง่คิดใหม่ เปิดโลกทัศน์ใหม่ เห็นมุมมองที่ไม่เคยเห็นมาก่อน รวมทั้งเป็นโอกาสใหม่ที่นำพาไปสู่ความเป็นไปได้ไม่มีที่สิ้นสุด
</p> <p class="mb-8 italic">
ปล. ปกิณกะคางามิแปลเป็นภาษาญี่ปุ่นว่า Kagamiの雑記ブログ
</p> <hr class="my-8 border-gray-200"> <h2 class="text-2xl font-bold mb-4">เกี่ยวกับผู้เขียนบล็อก</h2> <p class="mb-6">
ใช้นามแฝงบนโลกอินเทอร์เน็ตว่า <strong>coregameHD</strong> ปัจจุบันเป็นแอดมินผู้ดูแลเพจ Kagami Visual Novel และ Kagami Nihongo สนใจเกี่ยวกับเกมวิชวลโนเวล ภาษาญี่ปุ่น เทคโนโลยี และความเป็นมนุษย์
</p> <p class="mb-6">
ตอนเด็กชอบเล่นดินน้ำมัน ใฝ่ฝันอยากเป็นนักปั้นมืออาชีพ ปัจจุบันทำได้เพียงปั้นน้ำเป็นตัว เรียนจบวิศวะคอมฯ จากมหาวิทยาลัยในกลุ่ม 8 เกียร์ ทำงานเป็นโปรแกรมเมอร์ (Back-end web developer) ตรงสายงานตามที่เรียนมา
</p> <p class="mb-6">
ครั้งหนึ่งในอดีต ผมได้รู้จักเกมวิชวลโนเวลโดยบังเอิญ ผมอยากเล่นเกมนั้นมากแต่ติดปัญหาตรงที่ผมอ่านภาษาญี่ปุ่นไม่ออก ในช่วงนั้นผมมีแค่สองทางเลือก ー ไม่ต้องเล่น หรือ เรียนภาษาญี่ปุ่น
</p> <p class="mb-6">
ผมเลือกเรียนภาษาญี่ปุ่นแต่ทางบ้านไม่สนับสนุนแม้แต่น้อย ด้วยเหตุนี้ผมจึงไม่เหลือทางเลือกอื่นนอกจากเรียนด้วยตัวเอง 100% โดยไม่มีครูสอน
</p> <p class="mb-6">
แน่นอนว่าการเรียนภาษาที่ขึ้นชื่อว่ายากเป็นอันดับต้นๆ ของโลกไม่ใช่เรื่องง่าย แต่ความพยายามตลอดระยะเวลา 4 ปีไม่เคยทรยศใคร ในที่สุดผมก็สอบ JLPT N2 ผ่าน และสามารถเล่นเกมวิชวลโนเวลภาษาญี่ปุ่นได้ตามที่เคยใฝ่ฝันไว้ (ปัจจุบันสอบ N1 ผ่านแล้ว)
</p> <p class="mb-8">
ผมรู้ดีว่าการเรียนภาษาญี่ปุ่นไม่ใช่เรื่องง่ายและไม่มีทางกลายเป็นเรื่องง่าย ด้วยเหตุนี้ผมจึงเปิด<a href="https://www.facebook.com/kagaminihongo/" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">เพจ Kagami Nihongo</a> เพื่อสอนภาษาญี่ปุ่นจากการใช้งานจริงในเกมและอนิเมะ ไม่ใช่แบบฝึกหัดหรือตำราที่น่าเบื่อ รวมทั้ง<a href="https://www.facebook.com/kagamivisualnovel" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">เพจ Kagami Visual Novel</a> เพื่อโปรโมทและเผยแพร่เกมวิชวลโนเวลให้เป็นที่รู้จักมากขึ้น
</p> <div class="bg-gray-100 p-6 rounded-lg mb-8"> <h3 class="text-xl font-semibold mb-4">ช่องทางติดต่อ</h3> <p class="mb-4">ทุกท่านสามารถติดต่อผมได้ผ่านทางหลังไมค์ (inbox) เพจไหนก็ได้ แอดมินเพจมีเพียงแค่ผมแค่คนเดียวเท่านั้น</p> <ul class="space-y-2"> <li><strong>Website</strong> - <a href="https://coregamehd.com" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://coregamehd.com</a></li> <li><strong>Blog</strong> - <a href="https://blog.coregamehd.com" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://blog.coregamehd.com</a></li> <li><strong>Facebook</strong> - <a href="https://facebook.com/coregameHD" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://facebook.com/coregameHD</a></li> <li><strong>Twitter</strong> - <a href="https://twitter.com/coregameHD" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://twitter.com/coregameHD</a></li> <li><strong>Github</strong> - <a href="https://github.com/coregameHD" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/coregameHD</a></li> <li><strong>Email</strong> - <a href="mailto:contact@coregamehd.com" class="text-primary hover:underline">contact [at] coregamehd.com</a></li> </ul> </div> </div> </div> </article> ` })}`;
}, "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/about.astro", void 0);

const $$file = "/Users/coregamehd/Documents/Github/blog.coregamehd.com/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
