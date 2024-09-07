import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GiShoppingCart } from "react-icons/gi";
import useCart from "../../hooks/useCart";

const Navber = () => {

  const { user, logOut } = useContext(AuthContext);
const [cart] = useCart();
  const handleLogOut = () => {

    logOut()
      .then(() => {

      })
      .catch((error) => {
        console.log(error)
      })
  }

  const navLinks = <>



    <li className="mt-2 text-xl text-black font-bold "><Link to='/'>Products</Link></li>
    <li className="mt-2 text-xl text-black font-bold"><Link to='/categories'>Categories</Link></li>
    <li className="mt-2 text-xl text-black font-bold"><Link to='/custom'>Custom</Link></li>
    <li className="mt-2 text-xl text-black font-bold"><Link to='/blog'>Blog</Link></li>


    {
      user ? <>

        <li className="mt-2 text-xl text-black font-bold"><button onClick={handleLogOut}>LogOut</button></li>

      </> :

        <>

          <li className="mt-2 text-xl text-black font-bold"><Link to='/login'>Login</Link></li>

        </>
    }



  </>



  return (
    <div className="navbar  bg-white  bg-opacity-30 text-center ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-10 shadow bg-white text-blue-500 ">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl font-bold">Furni<span className="text-blue-500">Flex</span></a>
      </div>
      <div className="navbar-center  hidden lg:flex ">
        <ul className="menu menu-horizontal py-0 px-1">

          {navLinks}

        </ul>
      </div>

      <div className="navbar-end px-24">

       
          <Link to="/dashboard">

          
              <GiShoppingCart   className="h-8 w-8 mt-2"  />
              <h2 className=" -mt-8 ml-4 badge badge-secondary rounded-full">+{cart.length}</h2>
              
              

             
           

          </Link>
      

      </div>



    </div>
  );
};

export default Navber;