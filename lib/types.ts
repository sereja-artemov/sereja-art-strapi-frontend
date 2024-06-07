import { Variants } from 'framer-motion';
import React from 'react';
import CSS from 'csstype';
import { StaticImageData } from 'next/image';

/* Custom Animated Components types */
export type AnimatedTAGProps = {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
  style?: CSS.Properties;
};

export type ProjectType = {
  name: string;
  description: string;
  date: number | string | Date;
  cost: number;
  links: {
    [key: string]: string;
  };
  image: string | StaticImageData;
  previewImage: string | StaticImageData;
  tools: string[];
  year?: number;
  active: boolean;
};

export type ServicesProps = {
  group: string;
  services: [
    {
      [index: string]: string;
    },
  ];
};

export type skillsType = {
  name: string;
  active: boolean;
};

export type PostType = {
  id: string | number;
  attributes: attributes;
};

export interface TableOfContents {
  heading: string;
  level: number;
  slugifyHeading: string;
}

export interface attributes {
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  body: string;
  tableOfContents: TableOfContents[];
  readingTime: { readingTimeText: string; wordsQuantityStr: string };
  coverImage: object;
  categories: {
    data: [];
  };
  tags: {
    data: [];
  };
}

export type NoteType = {
  attributes: any;
  id: number | string;
};
