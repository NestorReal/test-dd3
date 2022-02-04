export const getCategories =  (data: any) => Object.keys(data).map(categories => Object.keys(data[categories].pop()));
