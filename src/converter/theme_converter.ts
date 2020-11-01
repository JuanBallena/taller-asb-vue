import { ITheme, IFormCreateTheme, IFormUpdateTheme } from '@/interfaces/theme_interfaces';
import { Theme } from '@/models/Theme';

export function toThemeModel(data: ITheme): Theme {

  const themeModel = new Theme(
    data.id,
    data.title,
    data.author,
    data.urlLocationYoutube,
    data.allowedGroup
  )
  return themeModel;
}

export function toCreateThemeFormDto(form: IFormCreateTheme): object {

  const createThemeFormDto = {
    theme: {
      data: {
        title: form.title,
        author: form.author,
        urlLocationYoutube: form.urlLocationYoutube,
        idAllowedGroup: form.idAllowedGroup
      }
    }
  }
  return createThemeFormDto;
}

export function toUpdateThemeFormDto(form: IFormUpdateTheme): object {
  const updateThemeFormDto = {
    theme: {
      data: {
        idTheme: form.id,
        title: form.title,
        author: form.author,
        urlLocationYoutube: form.urlLocationYoutube,
        idAllowedGroup: form.idAllowedGroup
      }
    }
  }
  return updateThemeFormDto;
}