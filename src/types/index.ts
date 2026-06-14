export interface ServiceType {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  metadata: {
    title: string;
    description: string;
  };
}

export interface CaseType {
  slug: string;
  title: string;
  industry: string;
  description: string;
  metadata: {
    title: string;
    description: string;
  };
}

export interface SolutionType {
  slug: string;
  title: string;
  description: string;
  metadata: {
    title: string;
    description: string;
  };
}
