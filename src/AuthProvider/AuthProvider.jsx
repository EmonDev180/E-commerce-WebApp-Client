import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebaseConfic';



export const AuthContext = createContext()

const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()


    const createUser = (email,password) => {
         
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signin = (email,password) => {

   

        return signInWithEmailAndPassword( auth,email,password)
    }
    const logOut = () => {
    
        return signOut(auth);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
        })

        return () => {
            return unsubscribe;
        }

    })

    const googleSignin = () => {
        return signInWithPopup(auth,googleProvider)
    }




    const authInfo = {

        user,
        createUser,
        signin,
        googleSignin,
        logOut,
        

    }

    return (
      <AuthContext.Provider value={authInfo}>

        {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;