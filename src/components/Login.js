import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";
import { addUser } from "../reduxSlice/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState({});

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // Validate form input
    const validationErrors = checkValidData(
      email.current.value,
      password.current.value,
      !isSignInForm ? name.current.value : undefined // Pass name only for
    );
    // console.log(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});

      if (!isSignInForm) {
        // Signup logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: USER_AVATAR,
            }).then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            });
            toast.success("Registration successful!");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorCode + "-" + errorMessage);
            setErrors(errorCode + "-" + errorMessage);
            // ..
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            toast.success("Welcome back!");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrors(errorCode + "-" + errorMessage);
            toast.error(errorCode + "-" + errorMessage);
          });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover w-screen"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
