// for add item in cart
export const addCart=(product)=>
{
    return{
        type: "ADDCART",
        payload : product
    }
}

// for add item in cart
export const delCart=(product)=>
{
    return{
        type: "DELITEM",
        payload : product
    }
}