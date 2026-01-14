// Component library data structure
export const componentCategories = [
  {
    name: 'Navigation',
    components: [
      { name: 'Navbar', variants: [1, 2, 3, 4, 5] }
    ]
  },
  {
    name: 'Buttons',
    components: [
      { name: 'Button', variants: [1, 2, 3, 4, 5] }
    ]
  },
  {
    name: 'Cards',
    components: [
      { name: 'Card', variants: [1, 2, 3, 4, 5] }
    ]
  },
  {
    name: 'Forms',
    components: [
      { name: 'Login', variants: [1, 2, 3, 4, 5] },
      { name: 'Signup', variants: [1, 2, 3, 4, 5] }
    ]
  },
  {
    name: 'Content',
    components: [
      { name: 'FAQ', variants: [1, 2, 3, 4, 5] },
      { name: 'Accordion', variants: [1, 2, 3, 4, 5] },
      { name: 'Testimonials', variants: [1, 2, 3, 4, 5] }
    ]
  },
  {
    name: 'Layout',
    components: [
      { name: 'ImageLayout', variants: [1, 2, 3, 4, 5] },
      { name: 'Footer', variants: [1, 2, 3, 4, 5] }
    ]
  },
  {
    name: 'Data Display',
    components: [
      { name: 'Table', variants: [1, 2, 3, 4, 5] },
      { name: 'Pricing', variants: [1, 2, 3, 4, 5] },
      { name: 'Pagination', variants: [1, 2, 3, 4, 5] },
      { name: 'Progress', variants: [1, 2, 3, 4, 5] }
    ]
  },
  {
    name: 'Feedback',
    components: [
      { name: 'Notification', variants: [1, 2, 3, 4, 5] }
    ]
  }
];

// Flatten all components for easy iteration
export const allComponents = componentCategories.flatMap(category =>
  category.components.flatMap(comp =>
    comp.variants.map(variant => ({
      name: comp.name,
      variant,
      category: category.name,
      fullName: `${comp.name}_${variant === 1 ? '' : variant}`
    }))
  )
);

// Helper to get component by name and variant
export const getComponentPath = (name, variant) => {
  const variantSuffix = variant === 1 ? '' : `_${variant}`;
  return `${name}${variantSuffix}`;
};

