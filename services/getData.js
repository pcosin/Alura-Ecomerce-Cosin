const API = "http://localhost:3000/products";

export const getData = async () => {
  const response = await fetch(API);
  const data = await response.json();
  return data;
};
