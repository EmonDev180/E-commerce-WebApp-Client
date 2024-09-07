import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/images/product13.jpg'
import SocialSignin from '../../Components/SocialSignin/SocialSignin';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;

        const name = form.name.value;


        const  email = form.email.value;

        const password = form.password.value;

        console.log(name,email,password)

        createUser(email,password)
        .then((user) => {
            console.log(user)
            navigate("/")
        })
        .catch((error) => {
            console.log(error)
        })




    }
    return (
        <div>
            <div>
                <div className='flex'>
                    <div className=" w-1/2 ml-12 ">
                        <img className='mt-24 w-full' src={img1} alt="" />
                    </div>


                    <div className=" bg-base-100 h-auto  w-2/4   mt-24">
                        <form onSubmit={handleSubmit} className="card-body mt-24">
                            <h1 className="text-3xl font-bold text-center">Welcome to back!</h1>
                            <h2 className='text-3xl font-bold text-center'>Farni<span className='text-blue-500'>Flex</span></h2>
                            <p className="text-gray-400 text-center">Enter your Credentials to access your account </p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6 bg-black p-4">
                                <button className="text-white">Login</button>
                            </div>

                            <SocialSignin></SocialSignin>


                            <p className='my-4 text-center'>have a no  account  <Link className='text-black font-bold' to='/login'>Signin</Link></p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;