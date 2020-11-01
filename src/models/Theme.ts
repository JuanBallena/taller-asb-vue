import { Parameter } from "./Parameter";

export class Theme {
  public id: number;
  public title: string;
  public author: string;
  public urlLocationYoutube: string;
  public allowedGroup: Parameter;

  constructor(
    id: number,
    title: string,
    author: string,
    urlLocationYoutube: string,
    allowedGroup: Parameter
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.urlLocationYoutube = urlLocationYoutube;
    this.allowedGroup = allowedGroup;
  }
}