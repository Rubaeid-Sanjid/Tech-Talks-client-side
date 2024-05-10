import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebaseConfig";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser);
            }
        })

        return ()=>{
            unSubscribe();
        }
    }, [])

    const authInfo = {user, createUser, loginUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;