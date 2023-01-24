import { ICity } from "./i-city";

export interface IUser {
  id?: number;
  firstName?: String;
  lastName?: String;
  email?: String;
  userName?: String;
  BirthDate?: String;
  city?: ICity;
  country?: String;
}
