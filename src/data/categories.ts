interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: 'General',
    slug: 'general',
    description: 'เรื่องทั่วไป'
  },
  {
    name: 'Language',
    slug: 'language',
    description: 'ภาษา'
  },
  {
    name: 'Thoughts',
    slug: 'thoughts',
    description: 'ความคิด'
  },
  {
    name: 'Visual Novel',
    slug: 'visual-novel',
    description: 'วิชวลโนเวล'
  }
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}