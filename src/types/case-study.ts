export type CaseStudy = {
  teaser: Teaser;
  detail: Detail;
};

export type Teaser = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  tag?: string;
  facts: string[];
  buttonLabel: string;
};

export type Detail = {
  title: string;
  images: {
    src: string;
    alt: string;
    copyright: string;
  }[];
  facts: {
    key: string;
    value: string;
  }[];
  links: {
    src: string;
    label: string;
  }[];
  text: {
    pre: string;
    quote?: {
      phrase: string;
      author: string;
    };
    post?: string;
  };
};
