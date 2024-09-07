import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useCart from "../../hooks/useCart";



const ProductsCard = ({ product }) => {
    const axiosPublic = useAxiosPublic()
    const [,refetch] = useCart()

    const { _id, title, description, image, price,category } = product;

    const handleAddToCart = (item) => {

        console.log(item)

        const cartItems = {
            productId : _id,
            title,
            image,
            price
        }

        axiosPublic.post('/carts',cartItems)
        .then(res=> {
            
            console.log(res.data)
            toast("Added sucessfully")
            refetch();
        })
   


    }
    return (
        <div>
            <div className="card bg-base-100 w-72 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h4 className=" text-center text-3xl font-bold">${price}</h4>
                    <p>{description}</p>
                
                    <div className="form-control mt-6 bg-black p-4">
                        <button onClick={() => handleAddToCart(product) } className="text-white font-bold">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;