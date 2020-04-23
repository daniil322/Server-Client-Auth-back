export default interface User {
  company: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  postalCode: string;
  about: string;
  _id?: string;
  token?: string;
}
