import { IParameter } from './parameter_interfaces';

export interface ITheme {
  id: number;
  title: string;
  author: string;
  urlLocationYoutube: string;
  allowedGroup: IParameter
}

export interface IFormCreateTheme {

  title: string;
  author: string;
  urlLocationYoutube: string;
  idAllowedGroup: number;
}

export interface IFormUpdateTheme {

  id: number;
  title: string;
  author: string;
  urlLocationYoutube: string;
  idAllowedGroup: number;

}