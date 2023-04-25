export const getUsers = page => {
  const BASE_URL = 'https://64416d22792fe886a8a7575a.mockapi.io/users';

  return fetch(`${BASE_URL}?page&p=${page}&limit=3&l=3`);
};
