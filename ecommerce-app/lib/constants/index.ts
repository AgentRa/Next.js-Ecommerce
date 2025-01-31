export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "eProstore";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern e commerce application build with next 15 and react 19";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: "rose@example.com",
  password: "123456",
};

export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const shippingAddressDefaultValues = {
  fullName: "John Doe",
  streetAddress: "123 main street",
  city: "New York",
  postalCode: "10001",
  country: "USA",
};
