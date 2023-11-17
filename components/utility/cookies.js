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
  const existingGarage = getGarageFromCookie();
  // Check if the garage already exists based on company and model
  const isGarageUnique = !existingGarage.some(
      (garage) => garage.company === newGarage.company && garage.model === newGarage.model
  );
  if(isGarageUnique){
    const garage = getGarageFromCookie();
    garage.push(newGarage);
    setGarageCookie(garage);

  }
};

export const removeGarageFromCookie = (index) => {
  const garage = getGarageFromCookie();
  garage.splice(index, 1);
  setGarageCookie(garage);
};
export const clearAllGaragesFromCookie = () => {
  // Clear the garage data in cookies
  // (Note: Replace the removeCookie function with your actual implementation)
  Cookies.remove('garage'); // Assuming 'garage' is the cookie key
};
