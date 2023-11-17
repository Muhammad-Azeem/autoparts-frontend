import Cookies from 'js-cookie';

//these function are for garage
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

//these function are for add to cart

const AddToCart_COOKIE_NAME = 'cart';

export const getCartFromCookie = () => {
  const cart = Cookies.get(AddToCart_COOKIE_NAME);
  return cart ? JSON.parse(cart) : [];
};

export const setCartCookie = (cart) => {
  Cookies.set(AddToCart_COOKIE_NAME, JSON.stringify(cart), { expires: 7 }); // Set expiration as needed
};

export const addCartToCookie = (newCart) => {
  const cart = getCartFromCookie();
  cart.push(newCart);
  setCartCookie(cart);
};

export const removeCartFromCookie = (index) => {
  const cart = getCartFromCookie();
  cart.splice(index, 1);
  setCartCookie(cart);
};