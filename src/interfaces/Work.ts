import { GrayMatterFile } from "gray-matter";

export interface DataStruct extends Record<string, any> {
  /**
  Title of the work
  */
  title: string;

  /**
   Date when the work started
   */
  date: string;

  /**
  Year extracted from the date
  */
  year: string;

  /**
  Services performed on this work
  */
  services: string;

  /**
  Technologies used
  */
  tech: string;

  /**
  String of images
  */
  images: string;

  /**
  Client of this work
  */
  client?: string;

  /**
  Website where people can see more info of the related work
  */
  website?: string;

  /**
  String to the route with a preview image to be shown on the main page
  */
  featuredImg?: string;
}

export interface DocumentStruct extends GrayMatterFile<string> {
  data: DataStruct;
  isEmpty?: boolean;
}

export interface ImageStruct extends GrayMatterFile<string> {
  isEmpty?: boolean;
}

export interface WorkStruct {
  work: DocumentStruct;
  images: ImageStruct;
  slug: string;
}

export default WorkStruct;
