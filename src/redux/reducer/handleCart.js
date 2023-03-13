const cart=[]

const handleCart=(state=cart,action)=>
{
    const product=auction.payload;
    switch (action.type) {
        case ADDITEM:
            const exist=state.find((x)=>x.id===product.id);
            if (exist){
                return state.map((x)=>x.id ===product.id?{...x,qty:x.qty+1}:x);
            }
            break;
    
        default:
            break;
    }

}
export default handleCart;