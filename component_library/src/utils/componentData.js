// Component library data structure
export const componentCategories = [
  {
    name: 'Navigation',
    components: [
      { 
        name: 'Navbar', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Standard', 'Scroll Effect', 'Side Menu', 'Split Menu', 'Dropdown']
      }
    ]
  },
  {
    name: 'Buttons',
    components: [
      { 
        name: 'Button', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Primary', 'Outlined', 'Gradient', 'Icon', '3D']
      }
    ]
  },
  {
    name: 'Cards',
    components: [
      { 
        name: 'Card', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Standard', 'Flip', 'Glass', 'Minimal', 'Interactive']
      }
    ]
  },
  {
    name: 'Forms',
    components: [
      { 
        name: 'Login', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Standard', 'Split Layout', 'Centered', 'Modern', 'Glow Effect']
      },
      { 
        name: 'Signup', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Standard', 'Progress Steps', 'Split Layout', 'Modern', 'Animated']
      }
    ]
  },
  {
    name: 'Content',
    components: [
      { 
        name: 'FAQ', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Standard', 'Sidebar', 'Tabs', 'Minimal', 'Card Style']
      },
      { 
        name: 'Accordion', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Single Open', 'Multiple Open', 'Minimal', 'Card Style', 'Animated']
      },
      { 
        name: 'Testimonials', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Grid', 'Carousel', 'List', 'Masonry', 'Stack']
      },
      {
        name: 'AnimatedText',
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Blur to Focus', 'Gradient Flow', 'Typewriter', 'Frost', 'Glassy']
      }
    ]
  },
  {
    name: 'Layout',
    components: [
      { 
        name: 'ImageLayout', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Grid', 'Masonry', 'Carousel', 'Gallery', 'Mosaic']
      },
      { 
        name: 'Footer', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Standard', 'Minimal', 'Multi-Column', 'Gradient', 'Modern']
      }
    ]
  },
  {
    name: 'Backgrounds',
    components: [
      {
        name: 'Background',
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Variant 1', 'Variant 2', 'Variant 3', 'Variant 4', 'Variant 5']
      }
    ]
  },
  {
    name: 'Data Display',
    components: [
      { 
        name: 'Table', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Standard', 'Striped', 'Hover', 'Card Style', 'Minimal']
      },
      { 
        name: 'Pricing', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Cards', 'List', 'Toggle', 'Featured Cards', 'Table']
      },
      { 
        name: 'Pagination', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Standard', 'Numbered', 'Compact', 'Minimal', 'Simple']
      },
      { 
        name: 'Progress', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['Bar', 'Circles', 'Steps', 'Animated', 'Indeterminate']
      }
    ]
  },
  {
    name: 'Feedback',
    components: [
      { 
        name: 'Notification', 
        variants: [1, 2, 3, 4, 5],
        variantNames: ['List', 'Grid', 'Stack', 'Toast', 'Horizontal']
      }
    ]
  }
];

// Flatten all components for easy iteration
export const allComponents = componentCategories.flatMap(category =>
  category.components.flatMap(comp =>
    comp.variants.map((variant, index) => ({
      name: comp.name,
      variant,
      variantName: comp.variantNames[index],
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

