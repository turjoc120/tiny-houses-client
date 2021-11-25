import axios from "axios";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initApp from "../Components/Firebase/firebase.init";

initApp()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [errMess, setError] = useState('')
    const [isLoading, setLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError(" ")
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }


    const logInUser = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError("")
                history.replace(location.state?.from || "/")
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribed
    }, [])


    useEffect(() => {
        axios.get(`https://guarded-spire-09139.herokuapp.com/user/${user.email}`).then(res => {
            setAdmin(res.data.admin)
        })
    }, [user.email])

    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        axios.post("https://guarded-spire-09139.herokuapp.com/adduser", user).then(res => console.log(res))
    }


    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }

    return {
        admin,
        isLoading,
        logOut,
        errMess, setError,
        user,
        registerUser, logInUser,
    }

};

export default useFirebase;