export const cleanNulls = (data: any) => Object.keys(data).forEach((key: any) => (data[key] == null) && delete data[key]);
