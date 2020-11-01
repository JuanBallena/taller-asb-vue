import { IParameter } from '@/interfaces/parameter_interfaces';
import { Option } from '@/models/Option';

export function toOptionModel(data: IParameter): Option {

  const optionModel = new Option(
    data.description,
    data.id
  );
  return optionModel;
}