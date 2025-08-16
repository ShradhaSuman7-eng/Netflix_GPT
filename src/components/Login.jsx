import React, { useRef, useState } from "react";
import bg from "../assets/bg.jpg";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignIn = (e) => {
    e.preventDefault();
    setIsSignIn((prev) => !prev);
    setErrorMessage(null);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    const validationMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validationMessage);

    if (validationMessage) return;

    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value || "New User",
            photoURL: LOGO,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(`${error.code} - ${error.message}`);
            });
        })
        .catch((error) => {
          setErrorMessage(`${error.code} - ${error.message}`);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(`${error.code} - ${error.message}`);
        });
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleButtonClick}
          className="relative z-10 bg-[rgba(0,0,0,0.9)] backdrop-blur-sm p-12 rounded-lg w-[350px]"
        >
          <h1 className="text-white text-3xl font-bold mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              ref={name}
              type="text"
              required
              className="w-full p-3 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            type="email"
            required
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Email"
          />
          <input
            ref={password}
            type="password"
            required
            className="w-full p-3 mb-6 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Password"
          />

          {errorMessage && (
            <p className="text-red-500 py-4 font-bold">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex justify-between items-center text-gray-400 text-sm mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <span className="hover:underline cursor-pointer">Need help?</span>
          </div>

          <p className="text-gray-400 mt-6 text-sm">
            {isSignIn ? "New to Netflix?" : "Already a user?"}{" "}
            <button
              onClick={toggleSignIn}
              className="text-white hover:underline"
              type="button"
            >
              {isSignIn ? "Sign up now." : "Sign in now."}
            </button>
          </p>

          <p className="text-gray-500 text-xs mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
