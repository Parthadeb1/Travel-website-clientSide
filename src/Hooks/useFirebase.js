import { useEffect, useState } from "react"
import initAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile , signOut   } from "firebase/auth";


initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] =useState('')
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //using google 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })
        .finally(()=> setIsLoading(false));
    }
    //user email password
    const customSignUpWithEmailAndPassword =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const customSignInWithEmailAndPassword =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //set name
    const handleName=(e)=>{
        setName(e.target.value)
        console.log(name)
    }
    const displayName =()=>{
        updateProfile(auth.currentUser, {
            displayName: name})
            .then(()=>{});
         
    }
    //logout
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(() =>{
            setUser({})
        })
        .finally(()=> setIsLoading(false));
    }
// observe whether user auth state change or not//
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth,(user) =>{
            if (user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[auth])

    return{
        user,
        error,
        name,
        setUser,
        logOut,
        signInUsingGoogle,
        handleName,
        displayName,
        isLoading,
        customSignUpWithEmailAndPassword,
        customSignInWithEmailAndPassword
    }

}
export default useFirebase;