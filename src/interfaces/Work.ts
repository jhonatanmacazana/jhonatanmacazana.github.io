interface DataStruct {
  title: string;
  year: string;
  date: string;
  client?: string;
  services: string;
  tech: string;
  website?: string;
  images: string;
  featuredImg?: string;
}

export interface DocumentStruct {
  content: string;
  data: DataStruct;
  isEmpty?: boolean;
  excerpt?: string;
  // orig?: Buffer;
}

export interface WorkStruct {
  document: DocumentStruct;
  images: DocumentStruct;
  slug: string;
}

export default WorkStruct;
