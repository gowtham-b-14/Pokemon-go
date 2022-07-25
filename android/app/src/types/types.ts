import { NavigatorScreenParams } from "@react-navigation/native";

export type userparams = {
    name: String
    city: string
    phone: number
    email: string
    password: string | number
}

export type ModalNavigatorParamsList = {


    Loginpage: {
        name?: String
        city?: string
        phone?: number | String
        email?: string
        password?: string | number
    } | undefined
    Visitpage: undefined
    Signuppage: undefined
    Home: undefined
    Details: {
        imageurl: string
        dataurl: String
    } 
}

