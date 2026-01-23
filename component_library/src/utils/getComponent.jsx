// Dynamic component importer
import Navbar from '../components/Navbar.jsx';
import Navbar_2 from '../components/Navbar_2.jsx';
import Navbar_3 from '../components/Navbar_3.jsx';
import Navbar_4 from '../components/Navbar_4.jsx';
import Navbar_5 from '../components/Navbar_5.jsx';
import Button from '../components/Button.jsx';
import Button_2 from '../components/Button_2.jsx';
import Button_3 from '../components/Button_3.jsx';
import Button_4 from '../components/Button_4.jsx';
import Button_5 from '../components/Button_5.jsx';
import Card from '../components/Card.jsx';
import Card_2 from '../components/Card_2.jsx';
import Card_3 from '../components/Card_3.jsx';
import Card_4 from '../components/Card_4.jsx';
import Card_5 from '../components/Card_5.jsx';
import Login from '../components/Login.jsx';
import Login_2 from '../components/Login_2.jsx';
import Login_3 from '../components/Login_3.jsx';
import Login_4 from '../components/Login_4.jsx';
import Login_5 from '../components/Login_5.jsx';
import Signup from '../components/Signup.jsx';
import Signup_2 from '../components/Signup_2.jsx';
import Signup_3 from '../components/Signup_3.jsx';
import Signup_4 from '../components/Signup_4.jsx';
import Signup_5 from '../components/Signup_5.jsx';
import FAQ from '../components/FAQ.jsx';
import FAQ_2 from '../components/FAQ_2.jsx';
import FAQ_3 from '../components/FAQ_3.jsx';
import FAQ_4 from '../components/FAQ_4.jsx';
import FAQ_5 from '../components/FAQ_5.jsx';
import Accordion from '../components/Accordion.jsx';
import Accordion_2 from '../components/Accordion_2.jsx';
import Accordion_3 from '../components/Accordion_3.jsx';
import Accordion_4 from '../components/Accordion_4.jsx';
import Accordion_5 from '../components/Accordion_5.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Testimonials_2 from '../components/Testimonials_2.jsx';
import Testimonials_3 from '../components/Testimonials_3.jsx';
import Testimonials_4 from '../components/Testimonials_4.jsx';
import Testimonials_5 from '../components/Testimonials_5.jsx';
import ImageLayout from '../components/ImageLayout.jsx';
import ImageLayout_2 from '../components/ImageLayout_2.jsx';
import ImageLayout_3 from '../components/ImageLayout_3.jsx';
import ImageLayout_4 from '../components/ImageLayout_4.jsx';
import ImageLayout_5 from '../components/ImageLayout_5.jsx';
import Footer from '../components/Footer.jsx';
import Footer_2 from '../components/Footer_2.jsx';
import Footer_3 from '../components/Footer_3.jsx';
import Footer_4 from '../components/Footer_4.jsx';
import Footer_5 from '../components/Footer_5.jsx';
import Table from '../components/Table.jsx';
import Table_2 from '../components/Table_2.jsx';
import Table_3 from '../components/Table_3.jsx';
import Table_4 from '../components/Table_4.jsx';
import Table_5 from '../components/Table_5.jsx';
import Pricing from '../components/Pricing.jsx';
import Pricing_2 from '../components/Pricing_2.jsx';
import Pricing_3 from '../components/Pricing_3.jsx';
import Pricing_4 from '../components/Pricing_4.jsx';
import Pricing_5 from '../components/Pricing_5.jsx';
import Pagination from '../components/Pagination.jsx';
import Pagination_2 from '../components/Pagination_2.jsx';
import Pagination_3 from '../components/Pagination_3.jsx';
import Pagination_4 from '../components/Pagination_4.jsx';
import Pagination_5 from '../components/Pagination_5.jsx';
import Progress from '../components/Progress.jsx';
import Progress_2 from '../components/Progress_2.jsx';
import Progress_3 from '../components/Progress_3.jsx';
import Progress_4 from '../components/Progress_4.jsx';
import Progress_5 from '../components/Progress_5.jsx';
import Notification from '../components/Notification.jsx';
import Notification_2 from '../components/Notification_2.jsx';
import Notification_3 from '../components/Notification_3.jsx';
import Notification_4 from '../components/Notification_4.jsx';
import Notification_5 from '../components/Notification_5.jsx';
import Background from '../components/Background.jsx';
import Background_2 from '../components/Background_2.jsx';
import Background_3 from '../components/Background_3.jsx';
import Background_4 from '../components/Background_4.jsx';
import Background_5 from '../components/Background_5.jsx';

const componentMap = {
  Navbar: { 1: Navbar, 2: Navbar_2, 3: Navbar_3, 4: Navbar_4, 5: Navbar_5 },
  Button: { 1: Button, 2: Button_2, 3: Button_3, 4: Button_4, 5: Button_5 },
  Card: { 1: Card, 2: Card_2, 3: Card_3, 4: Card_4, 5: Card_5 },
  Login: { 1: Login, 2: Login_2, 3: Login_3, 4: Login_4, 5: Login_5 },
  Signup: { 1: Signup, 2: Signup_2, 3: Signup_3, 4: Signup_4, 5: Signup_5 },
  FAQ: { 1: FAQ, 2: FAQ_2, 3: FAQ_3, 4: FAQ_4, 5: FAQ_5 },
  Accordion: { 1: Accordion, 2: Accordion_2, 3: Accordion_3, 4: Accordion_4, 5: Accordion_5 },
  Testimonials: { 1: Testimonials, 2: Testimonials_2, 3: Testimonials_3, 4: Testimonials_4, 5: Testimonials_5 },
  ImageLayout: { 1: ImageLayout, 2: ImageLayout_2, 3: ImageLayout_3, 4: ImageLayout_4, 5: ImageLayout_5 },
  Footer: { 1: Footer, 2: Footer_2, 3: Footer_3, 4: Footer_4, 5: Footer_5 },
  Table: { 1: Table, 2: Table_2, 3: Table_3, 4: Table_4, 5: Table_5 },
  Pricing: { 1: Pricing, 2: Pricing_2, 3: Pricing_3, 4: Pricing_4, 5: Pricing_5 },
  Pagination: { 1: Pagination, 2: Pagination_2, 3: Pagination_3, 4: Pagination_4, 5: Pagination_5 },
  Progress: { 1: Progress, 2: Progress_2, 3: Progress_3, 4: Progress_4, 5: Progress_5 },
  Notification: { 1: Notification, 2: Notification_2, 3: Notification_3, 4: Notification_4, 5: Notification_5 },
  Background: { 1: Background, 2: Background_2, 3: Background_3, 4: Background_4, 5: Background_5 }
};

export const getComponent = (name, variant) => {
  const component = componentMap[name]?.[variant];
  if (!component) {
    console.error(`Component not found: ${name} variant ${variant}`);
    return null;
  }
  return component;
};

