interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: 'General',
    slug: 'general',
    description: 'เรื่องสัพเพเหระทั่วไป'
  },
  {
    name: 'Language',
    slug: 'language',
    description: 'เรื่องเกี่ยวกับภาษา (โดยเฉพาะภาษาญี่ปุ่น)'
  },
  {
    name: 'Thoughts',
    slug: 'thoughts',
    description: 'บทความแสดงทรรศนะ'
  },
  {
    name: 'Visual Novel',
    slug: 'visual-novel',
    description: 'เกมวิชวลโนเวลและเอโรเกะ'
  }
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}