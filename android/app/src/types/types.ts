import {NavigatorScreenParams} from '@react-navigation/native';

export type userparams = {
  name: string;
  email: string;
  password: string | number | any;
};

export type ModalNavigatorParamsList = {
  Loginpage: {
        name?: String;
        city?: String;
        phone?: Number | String;
        email?: string;
        password?: String | Number;
      }
    | undefined;
  Visitpage: undefined;
  Signuppage: undefined;
  Home: {
        total: Number;
      }
    | undefined;
  Details: {
    imageurl: String;
    dataurl: String;
  };
  Totalpage: undefined;
};

export type BasicDetails = [] | undefined;
