import { IArticleThumbnail, IProduct, ITestimonial } from "./types";
import { faker } from "@faker-js/faker";

export const products: IProduct[] = [
  {
    id: 1,
    name: "Wooden Bookshelf",
    category: "Living Room",
    description: "Combination of wood and wool",
    image: "/assets/images/product-1.png",
    price: 62.23,
  },
  {
    id: 2,
    name: "White Aesthetic Chair",
    category: "Chair",
    description: "Combination of wood and wool",
    image: "/assets/images/product-2.png",
    price: 63.47,
  },
  {
    id: 3,
    name: "Bardono Smart Lamp",
    category: "Lamp",
    description: "Easy to use with bluetooth connection",
    image: "/assets/images/product-3.png",
    price: 62.23,
  },
  {
    id: 4,
    name: "Sofa Empuk Banget",
    category: "Sofa",
    description: "Using kapuk randu material",
    image: "/assets/images/product-4.png",
    price: 58.39,
  },
];

export const testimonials: ITestimonial[] = [
  {
    content:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
    name: "Berry Gunawan",
    rating: 3.5,
    image: "/assets/images/testimonial-avatar-1.png",
  },

  {
    content:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
    name: "Janne Cooper",
    rating: 4.3,
    image: "/assets/images/testimonial-avatar-2.png",
  },

  {
    content:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
    name: "Cobocannaeru",
    rating: 4.0,
    image: "/assets/images/testimonial-avatar-2.png",
  },
];

export const articles: IArticleThumbnail[] = [
  {
    category: faker.helpers.arrayElement([
      "Tips and Trick",
      "Design Inspiration",
    ]),
    title: "6 ways to give your home minimalistic vibes",
    summary: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
    author: faker.person.fullName(),
    date: "Friday, 1 April 2022",
    image: "/assets/images/article-image-1.png",
    authorImage: "/assets/images/article-avatar-1.png",
  },

  {
    category: faker.helpers.arrayElement([
      "Tips and Trick",
      "Design Inspiration",
    ]),
    title: "How to make your interiors cooler and more stylish",
    summary: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
    author: faker.person.fullName(),
    date: "Friday, 1 April 2022",
    image: "/assets/images/article-image-2.png",
    authorImage: "/assets/images/article-avatar-2.png",
  },

  {
    category: "Tips and Trick",
    title: "Elements to add character to your space",
    summary: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
    author: "Kim Gurameh",
    date: "Friday, 1 April 2022",
    image: "/assets/images/article-image-3.png",
    authorImage: "/assets/images/article-avatar-3.png",
  },
];

export const articleCategories = [
  "All",
  "Tips and Trick",
  "Interior Design",
  "Design Inspiration",
  "Color Guide",
];

export const teamMembers = [
  {
    image: "/assets/images/team-member-1.png",
    designation: "Founder & CEO",
    name: "Jesse Depp",
  },
  {
    image: "/assets/images/team-member-2.png",
    designation: "COO",
    name: "Margareth Carter",
  },
  {
    image: "/assets/images/team-member-3.png",
    designation: "Developer",
    name: "Andrew Taggart",
  },
  {
    image: "/assets/images/team-member-4.png",
    designation: "Manager",
    name: "Grace Marie",
  },
  {
    image: "/assets/images/team-member-5.png",
    designation: "Senior Designer",
    name: "Jesse Depp",
  },
  {
    image: "/assets/images/team-member-6.png",
    designation: "Manager",
    name: "Jesse Depp",
  },
];
