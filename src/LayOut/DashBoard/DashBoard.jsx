
import useCart from "../../hooks/useCart";
import useAxiosPublic from "../../hooks/useAxiosPublic";
//https://e-commerce-webapp-7daf8.web.app/


const DashBoard = () => {

    const [cart, refetch] = useCart()

    const axiosPublic = useAxiosPublic()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const tax = totalPrice * 10 / 100;

    const totalProduct = cart.length;

    const grandTotal = totalPrice + totalProduct + tax;

  

    const handleDelete = (id) => {

        axiosPublic.delete(`/carts/${id}`)

            .then(res => {
                console.log(res.data)

                refetch()
            })
            .catch(error => {
                console.log(error)
            })





    }
    return (
        <div className="ml-12">
            <h2 className="font-bold text-2xl mt-12">An overview of your order </h2>

            <div className="flex">
                <div className="w-3/4">

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>



                                {
                                    cart.map(item => <tr key={item._id}>

                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-100 w-28">
                                                        <img
                                                            src={item.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {
                                                item.price
                                            }
                                        </td>
                                        <th>
                                            {/* <button onClick= {() => handleDelete(item._id)} className="btn btn-ghost btn-xs">Delte</button> */}

                                            <button onClick={() => handleDelete(item._id)} className="btn btn-square btn-sm sm:btn-sm md:btn-md lg:btn-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </th>
                                    </tr>)
                                }




                            </tbody>
                            {/* foot */}

                        </table>
                    </div>

                </div>
                <div className="w-1/4 -mt-8 mr-12">
                    <h2 className="text-2xl font-bold text-center">Order Details</h2>
                    <hr />
                    <div className=" w-auto bg-gray-100">
                        <h2 className="text-2xl font-bold mt-2">Order:{totalProduct}</h2>

                        <h2 className="text-2xl font-bold mt-2">TotalPrice:{totalPrice}</h2>

                        <h2 className="text-2xl font-bold mt-2">Tax:{tax}</h2>

                        <h2 className="text-2xl font-bold mt-2">GarndTotal:{grandTotal}</h2>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashBoard;