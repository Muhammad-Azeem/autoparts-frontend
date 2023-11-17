import Cookies from 'js-cookie';

const GARAGE_COOKIE_NAME = 'garage';

export const getGarageFromCookie = () => {
  const garage = Cookies.get(GARAGE_COOKIE_NAME);
  return garage ? JSON.parse(garage) : [];
};

export const setGarageCookie = (garage) => {
  Cookies.set(GARAGE_COOKIE_NAME, JSON.stringify(garage), { expires: 7 }); // Set expiration as needed
};

export const addGarageToCookie = (newGarage) => {
  const garage = getGarageFromCookie();
  garage.push(newGarage);
  setGarageCookie(garage);
};

export const removeGarageFromCookie = (index) => {
  const garage = getGarageFromCookie();
  garage.splice(index, 1);
  setGarageCookie(garage);
};