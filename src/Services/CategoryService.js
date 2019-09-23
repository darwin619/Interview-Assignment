export const fetchCategory = () => {
  const url = `https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob`
  return fetch(url).then(response => response.json());
 };