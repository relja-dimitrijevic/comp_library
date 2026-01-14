import { 
  FaBars,           // Navbar
  FaMousePointer,   // Button
  FaIdCard,         // Card
  FaSignInAlt,      // Login
  FaUserPlus,       // Signup
  FaQuestionCircle, // FAQ
  FaChevronDown,    // Accordion
  FaQuoteLeft,      // Testimonials
  FaImages,         // ImageLayout
  FaInfoCircle,     // Footer
  FaTable,          // Table
  FaDollarSign,     // Pricing
  FaEllipsisH,      // Pagination
  FaSpinner,        // Progress
  FaBell            // Notification
} from 'react-icons/fa';

export const getComponentIcon = (componentName) => {
  const iconMap = {
    'Navbar': FaBars,
    'Button': FaMousePointer,
    'Card': FaIdCard,
    'Login': FaSignInAlt,
    'Signup': FaUserPlus,
    'FAQ': FaQuestionCircle,
    'Accordion': FaChevronDown,
    'Testimonials': FaQuoteLeft,
    'ImageLayout': FaImages,
    'Footer': FaInfoCircle,
    'Table': FaTable,
    'Pricing': FaDollarSign,
    'Pagination': FaEllipsisH,
    'Progress': FaSpinner,
    'Notification': FaBell
  };

  const Icon = iconMap[componentName] || FaIdCard;
  return Icon;
};

