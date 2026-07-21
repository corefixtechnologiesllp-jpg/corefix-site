export interface ProductImage {
  id: string;
  src: string;
  alt: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;

  category: string;

  shortDescription: string;

  description: string;

  images: ProductImage[];

  specifications: ProductSpecification[];

  features: string[];

  faq: ProductFAQ[];

  featured?: boolean;

  showOnHome?: boolean;

  homeOrder?: number;
}