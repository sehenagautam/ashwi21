export type CategoryLanding = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  keywordTheme: string;
  match: (category: string, subcategory: string, name: string) => boolean;
};

export const categoryLandings: CategoryLanding[] = [
  {
    slug: 'sofas',
    title: 'Sofas in Nepal',
    subtitle: 'Modern and Premium Sofa Collection',
    description:
      'Browse modern sofas in Nepal with premium finishing, comfortable seating, and factory-direct support from Ashwi Furniture.',
    keywordTheme: 'sofa set nepal, modern sofa kathmandu, premium sofa nepal',
    match: (_category, subcategory, name) =>
      subcategory.toLowerCase().includes('sofa') || name.toLowerCase().includes('sofa')
  },
  {
    slug: 'beds',
    title: 'Beds in Kathmandu',
    subtitle: 'King, Queen and Modern Bed Designs',
    description:
      'Explore bed options in Kathmandu including king beds, queen beds, and modern low-bed collections made with quality finishing.',
    keywordTheme: 'bed price nepal, buy bed kathmandu, king bed nepal, queen bed nepal',
    match: (category, subcategory, name) => {
      const c = category.toLowerCase();
      const s = subcategory.toLowerCase();
      const n = name.toLowerCase();
      return c.includes('bedroom') || s.includes('bed') || n.includes('bed');
    }
  },
  {
    slug: 'dining',
    title: 'Dining Furniture in Nepal',
    subtitle: 'Dining Sets and Dining Tables',
    description:
      'Find dining furniture in Nepal including modern dining sets and practical table designs with factory-direct support.',
    keywordTheme: 'dining table nepal, dining set kathmandu, dining furniture nepal',
    match: (category, subcategory, name) => {
      const c = category.toLowerCase();
      const s = subcategory.toLowerCase();
      const n = name.toLowerCase();
      return c.includes('dining') || s.includes('dining') || n.includes('dining');
    }
  }
];

export function getCategoryLanding(slug: string): CategoryLanding | undefined {
  return categoryLandings.find((item) => item.slug === slug);
}
