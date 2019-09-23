export const fetchProductList = (id) => {
  const url = `https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${id}`
  return fetch(url).then(response => response.json());
 };