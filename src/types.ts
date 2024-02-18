import { Image } from "sanity";

export interface IProduct {
  _id: string;
  image: Image;
  description: string;
  price: number;
  category: string;
  name: string;
}

export interface ITestimonial {
  name: string;
  rating: number;
  content: string;
  image: string;
}

export interface IArticleThumbnail {
  title: string;
  categories: { name: string }[];
  excerpt: string;
  author: { name: string; image: Image };
  date: string;
  coverImage: Image;
  authorImage: Image;
}

export interface ITeamMember {
  name: string;
  designation: string;
  image: string;
}
