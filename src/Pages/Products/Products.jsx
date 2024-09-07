import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { useLoaderData } from "react-router-dom";
import './Products.css'




const Products = () => {



    const [products, setProducts] = useState([0])

    const { count } = useLoaderData()

  





    const [itemsPerPage, setItemsPerPage] = useState(10)

    const [currentPage, setCurrentPage] = useState(0)

    const numberOfPages = Math.ceil(count / itemsPerPage)

    const pages = [...Array(numberOfPages).keys()]

    useEffect(() => {

        fetch(`https://e-commerce-web-app-server-fawn.vercel.app/products?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [currentPage, itemsPerPage])

    const handleItemsPerPage = e => {

        console.log(e.target.value)
        const val = parseInt(e.target.value)
        setItemsPerPage(val)
        setCurrentPage(0)

    }

    const handlePreviousPage = () => {

        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }

    }

    const handleNextPage = () => {

        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }

    }

    return (

        <div>
            <div className="  ml-12 mt-12">
                

                <div className="w-full ml-4">


                    <div className="grid grid-cols-3 gap-4">

                        {
                            products.map((product) => <ProductsCard key={product.id} product={product}></ProductsCard>)
                        }
                    </div>
                </div>

            </div>
            <div className="pagination ">
                <button onClick={handlePreviousPage}>prev</button>
                {

                    pages.map(page => <button className={currentPage === page ? 'selected' : undefined} onClick={() => setCurrentPage(page)} key={page}> {page} </button>)
                }
                <button onClick={handleNextPage}>Next</button>

                <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>

            </div>


        </div>
    );
};

export default Products;