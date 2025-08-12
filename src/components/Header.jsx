// import React from "react";
// import logo from "../assets/NetFlixLogo.png";
// import {signOut} from "firebase/auth"
// import {auth} from "../utils/fireBase"
// import {useNavigate} from "react-router-dom"
// import { useSelector } from "react-redux";

// const Header = () => {

//   const user=useSelector(store=>store.user)

// const navigate=useNavigate();
//   function handleSignOut(){
//     signOut(auth)
//     .then(()=>{
//       navigate("/")
//     })
//     .catch((error)=>{
//       navigate("/error")
//     })
//   }


//   return (
//     <div className="absolute flex justify-between w-screen  z-20 py-2 bg-gradient-to-b from-black/80 ">
//       <img src={logo} alt="Netflix Logo" className="w-32" />

//       (user && (
//         <div className="flex p-2">
//         <img className="h-12" src={user.photoURL}/>
//         <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
//       </div>
//       ))
//     </div>
//   );
// };

// export default Header;







import React from "react";
import logo from "../assets/NetFlixLogo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  }

  return (
    <div className="absolute flex justify-between w-screen z-20 py-2 bg-gradient-to-b from-black/80">
      <img src={logo} alt="Netflix Logo" className="w-32" />

      {user && (
        <div className="flex p-2 items-center gap-2">
          <img
            className="h-12 rounded"
            src={user.photoURL}
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
