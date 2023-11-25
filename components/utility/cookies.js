import Cookies from 'js-cookie';

//these function are for garage
const GARAGE_COOKIE_NAME = 'garage';

export const getGarageFromCookie = () => {
  const garage = Cookies.get(GARAGE_COOKIE_NAME);
  return garage ? JSON.parse(garage) : [];
};

export const setGarageCookie = (garage) => {
  Cookies.set(GARAGE_COOKIE_NAME, JSON.stringify(garage), { expires: 100 }); // Set expiration as needed
};

// export const addGarageToCookie = (newGarage) => {
//   const existingGarage = getGarageFromCookie();
//   // Check if the garage already exists based on company and model
//   const isGarageUnique = !existingGarage.some(
//       (garage) => garage.company === newGarage.company && garage.model === newGarage.model
//   );
//   if(isGarageUnique){
//     const garage = getGarageFromCookie();
//     garage.push(newGarage);
//     setGarageCookie(garage);
//
//   }
// };
export const addGarageToCookie = (newGarage) => {
  const existingGarage = getGarageFromCookie();

  // Check if the garage already exists based on company and model
  const isGarageUnique = !existingGarage.some(
      (garage) => garage.company === newGarage.company && garage.model === newGarage.model
  );

  if (isGarageUnique) {
    // Make is_selected false for all existing garages
    const updatedGarageList = existingGarage.map((garage) => ({
      ...garage,
      is_selected: false,
    }));

    // Set is_selected to true for the new garage
    const updatedNewGarage = { ...newGarage, is_selected: true };

    // Add the new garage to the updated garage list
    updatedGarageList.push(updatedNewGarage);

    // Store the updated garage list in the cookie
    setGarageCookie(updatedGarageList);
  } else {
    // If garage already exists, update is_selected field accordingly
    const updatedGarageList = existingGarage.map((garage) => ({
      ...garage,
      is_selected: garage.company === newGarage.company && garage.model === newGarage.model,
    }));

    // Store the updated garage list in the cookie
    setGarageCookie(updatedGarageList);
  }
};
export const removeGarageFromCookie = (index) => {
  const garage = getGarageFromCookie();
  garage.splice(index, 1);
  setGarageCookie(garage);
};

//these function are for add to cart

const AddToCart_COOKIE_NAME = 'cart';
const CART_TOTAL_COOKIE_NAME = 'total';

export const getCartFromCookie = () => {
  const cart = Cookies.get(AddToCart_COOKIE_NAME);
  return cart ? JSON.parse(cart) : [];
};
export const getCartTotalPriceFromCookie = () => {
  const cart = Cookies.get(CART_TOTAL_COOKIE_NAME);
  return cart ? JSON.parse(cart) : 0;
};
export const setCartTotalCookie = (amount) => {
  Cookies.set(CART_TOTAL_COOKIE_NAME, amount, { expires: 100 }); // Set expiration as needed
};

export const addToCartToCockie = (newCart, quantity = 1) => {
  let cartTotal = getCartTotalPriceFromCookie();
  if(cartTotal){
    cartTotal = parseInt(cartTotal) + (parseInt(newCart.price) * quantity)
    setCartTotalCookie(cartTotal);
  }else
  {
    let total = parseInt(newCart.price) * quantity;
    setCartTotalCookie(total);
  }
  const existingCart = getCartFromCookie();
  newCart.quantity = quantity;
  // Check if the cart already exists based on company and model
  const existingItemIndex = existingCart.findIndex((item) => item.id === newCart.id);
  if (existingItemIndex !== -1) {
    // const updatedCart = [...newCart];
    existingCart[existingItemIndex].quantity = parseInt(existingCart[existingItemIndex].quantity) + parseInt(newCart.quantity);
    setCartCookie(existingCart);
  }else {
    const cart = getCartFromCookie();
    cart.push(newCart);
    setCartCookie(cart);

  }
  // if(isCartUnique){
  //   const cart = getCartFromCookie();
  //   cart.push(newCart);
  //   setCartCookie(cart);
  // }else {
  //   console.log('idar aya?')
  // }
};
export const setCartCookie = (cart) => {
  Cookies.set(AddToCart_COOKIE_NAME, JSON.stringify(cart), { expires: 100 }); // Set expiration as needed
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

export const clearAllGaragesFromCookie = () => {
  // Clear the garage data in cookies
  // (Note: Replace the removeCookie function with your actual implementation)
  Cookies.remove('garage'); // Assuming 'garage' is the cookie key
};

export const getSelectedGarageFromCookie = () => {
  const allGarages = getGarageFromCookie();
  return allGarages.find((garage) => garage.is_selected) || [];
};
