import { IParameter } from '@/interfaces/parameter_interfaces';
import { Parameter } from '@/models/Parameter';

export function toParameterModel(data: IParameter): Parameter {

  const parameterModel = new Parameter(
    data.id,
    data.description
  );
  return parameterModel;
}