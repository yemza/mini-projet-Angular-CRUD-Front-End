import { ICity } from "./i-city";

export interface IUser {
  id?: number;
  firstName?: String;
  lastName?: String;
  email?: String;
  userName?: String;
  birthDate?: Date ;
  city?: ICity;
  country?: String;
}
