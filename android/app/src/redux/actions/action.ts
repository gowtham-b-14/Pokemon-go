export const FETCH_PRODUCTS_BEGIN="FETCH_PRODUCTS_BEGIN"


export const fetchProductsBegin=(number:number)=>{
    //console.log(number)
    return{
        type:"FETCH_PRODUCTS_BEGIN",
        payload:number
    }
}