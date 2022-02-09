/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/prefer-default-export
export const cleanNulls = (data: any) =>
  Object.keys(data).forEach((key: any) => data[key] == null && delete data[key]);
