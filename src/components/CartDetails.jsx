
const CartDetails = ({person}) => {
    const {name}=person ;
    return (
        <div className="my-3"> 

           <li className="bg-rose-200 px-4 py-4 ">{name}</li>
        </div>
    );
};

export default CartDetails;