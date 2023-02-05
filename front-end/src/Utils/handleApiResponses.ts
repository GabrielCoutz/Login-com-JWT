export const responseIs200 = (response: Response) => response.status === 200;
export const jsonHasError = (json: any) => !!json.errors;
