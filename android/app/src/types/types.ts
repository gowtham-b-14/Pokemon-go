import { NavigatorScreenParams } from "@react-navigation/native";

export type userparams = {
    name: string
    city: String
    phone: Number
    email: string
    password: String | number
}

export type ModalNavigatorParamsList = {


    Loginpage: {
        name?: String
        city?: String
        phone?: Number | String
        email?: string
        password?: String | Number
    } | undefined
    Visitpage: undefined
    Signuppage: undefined
    Home: {
        total:Number
    } | undefined
    Details: {
        imageurl: String
        dataurl: String
    } 
    Totalpage:undefined
}

export type BasicDetails=[] | undefined

