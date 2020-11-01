export function responseCodeOk(code: number): boolean {

  const codes = [200, 201, 204];
  return codes.includes(code);
}

export function getMessageErrorResponseCode(code: number): string {

  switch (code) {
    case 400:
      return "BAD REQUEST";  
    default:
      return "Error general del sistema";
  }

}