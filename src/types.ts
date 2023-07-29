export interface IProduct {
  id: string | number;
  image: string;
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
  category: string;
  summary: string;
  author: string;
  date: string;
  image: string;
  authorImage: string;
}

export interface ITeamMember {
  name: string;
  designation: string;
  image: string;
}
