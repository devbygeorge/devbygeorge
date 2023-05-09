interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  about: string;
}

export interface Project extends SanityBody {
  _type: "project";
  category: string;
  title: string;
  description: string;
  image: Image;
  demo: string;
  github: string;
  categories: Category[];
}

export interface Social extends SanityBody {
  _type: "social";
  name: string;
  slug: string;
  url: string;
  icon: Image;
}

export interface Category extends SanityBody {
  name: string;
  slug: string;
  icon: Image;
}

export interface ContactFields {
  name: string;
  email: string;
  message: string;
}
