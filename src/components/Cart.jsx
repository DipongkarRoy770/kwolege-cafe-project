
import { useEffect } from "react";
import { useState } from "react";
import Carts from "./Carts";
import CartDetails from "./CartDetails";
import Swal from "sweetalert2";

const Cart = () => {
    const [actors, setActor] = useState([])
    const [data, setData] = useState([])
    const [remaining, setRemaining] = useState(0)
    const [cost, setCost] = useState(0)

    useEffect(() => {
        fetch('bangladeshTeam.json')
            .then(res => res.json())
            .then(data => setActor(data))

    }, [])


    const actorData = (title) => {
        const remaining = data.find(actor => actor.id == title.id)
        console.log(remaining)


        let cound = title.salary;

        if (remaining) {
            return Swal.fire(
                'Wow!',
                'You allready bookmark added !',
                'success'
            )
        }
        else {
            data.forEach(items => {
                cound = cound + items.salary;
            })
            const totalRemaing = 30000 - cound;
            if (cound > 30000) {
                return Swal.fire(
                    'Good job!',
                    'tomar kase tk nai add korte parbe na',
                    'error'
                )
            }
            setRemaining(totalRemaing)
            setCost(cound)
            setData([...data, title])
        }

    }

    return (
        <div className="mt-10 flex">
            <div className="w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-4">
                {
                    actors.map(actor => <Carts
                        key={actor.id}
                        actor={actor}
                        actorData={actorData}
                    ></Carts>)
                }

            </div>
            <div className="w-[25%]">

                <div className="bg-rose-100 px-2 py-4">

                    <h2 className="text-3xl stroke-lime-400 font-semibold ">serial no : {data.length}</h2>
                    <h3 className="text-xl text-orange-400 ">totalRemaing : {remaining}</h3>
                    <h3 className="text-xl text-orange-500 ">total balance : {cost}</h3>
                    <div>
                        {
                            data.map(person => <CartDetails
                                key={person}
                                person={person}
                                remaining={remaining}
                                cost={cost}
                            >
                            </CartDetails>)
                        }


                    </div>
                </div>

            </div>

        </div>
    );
};

export default Cart;