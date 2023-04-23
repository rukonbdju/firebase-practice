import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

const useFirebase = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider(auth);

    const createUserByEmailAndPassword = async (name, email, password,navigate) => {
        try {
            setLoading(true);
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateUserName(name)
            setLoading(false);
            navigate('/')
            navigate(0)
        } catch {
            (err) => {
                console.error(err);
            }
        }

    }
    const signInByEmailAndPassword = async (email, password,navigate) => {
        try {
            setLoading(true)
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result?.user)
            setLoading(false)
            navigate('/')
            navigate(0)

        } catch {
            (err) => {
                console.error(err);
            }
        }

    }
    useEffect(() => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setLoading(false)
        });
    }, [auth])

    const googleSignUp = async (navigate) => {
        try {
            setLoading(true)
            const result = await signInWithPopup(auth, provider)
            setUser(result?.user)
            setLoading(false)
            navigate('/')
            navigate(0)

        } catch {
            err => {
                console.error(err)
            }
        }
    }

    const handleSignOut = async (callback) => {
        try {
            setLoading(true)
            await signOut(auth)
            setUser(null)
            setLoading(false)
            callback()
        } catch { err => console.error(err) }

    }

    const updateUserName = async (name) => {
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
            })
        } catch {
            err => { console.error(err) }
        }
    }

    return { createUserByEmailAndPassword, signInByEmailAndPassword, googleSignUp, handleSignOut, user, loading };
}
export default useFirebase;
