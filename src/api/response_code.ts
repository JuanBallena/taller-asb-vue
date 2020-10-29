export function responseCodeOk(code: number): boolean {
  return code === 200;
}

export function getMessageErrorResponseCode(code: number): string {

  switch (code) {
    case 400:
      return "BAD REQUEST";  
    default:
      return "Error general del sistema";
  }

}