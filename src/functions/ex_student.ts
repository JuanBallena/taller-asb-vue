import { PARAMETER_ACTIVE } from '@/definitions/parameter_definition';


export function getStatusColor(idStatus: number): string {

  return idStatus == PARAMETER_ACTIVE ? 'successColor' : 'dangerColor';
}