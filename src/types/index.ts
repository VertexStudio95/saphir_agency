export interface Projet {
  id: string;
  titre: string;
  description: string;
  tags: string[];
  lien?: string;
  repo?: string;
  image: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  titre: string;
  description: string;
  icone: string;
  points: string[];
}

export interface Article {
  slug: string;
  titre: string;
  description: string;
  date: string;
  tags: string[];
  tempsLecture: number;
}

export interface ArticleMetadata {
  titre: string;
  description: string;
  date: string;
  tags: string[];
  tempsLecture: number;
}
