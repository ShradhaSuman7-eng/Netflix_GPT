
import React, { useEffect } from "react";
import logo from "../assets/NetFlixLogo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser,removeUser}  from "../utils/userSlice"
import { LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid,email,displayName,photoURL}=user;
        dispatch(
           addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      }else{
        dispatch(removeUser());
        navigate("/")
      }
    })

    // Unsubscribe when component unmounts from
     return () => unsubscribe();
  },[])

  return (
    <div className="absolute flex justify-between w-screen z-20 py-2 bg-gradient-to-b from-black/80">
      <img src={logo} alt="Netflix Logo" className="w-32" />

      {user && (
        <div className="flex p-2 items-center gap-2">
          <img
            className="h-12 rounded"
            src={user.photoURL || LOGO}
            alt="User Avatar"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white hover:underline"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
   