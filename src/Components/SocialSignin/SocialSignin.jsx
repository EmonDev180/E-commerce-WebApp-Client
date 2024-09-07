import  { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialSignin = () => {
    const {googleSignin} = useContext(AuthContext)
    // const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleSignin()
        .then(result => {
            console.log(result.user)
            navigate('/')

        })
        .catch((error) => {
            console.log(error)
        })


      

    }
    return (
        <div>
            <div>

                <button onClick={handleGoogleLogin} className="btn btn-block">
                    <FaGoogle></FaGoogle>
                    Google
                </button>


            </div>

        </div>
    );
};

export default SocialSignin;