import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const LogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if(user){
    console.log(user);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center font-bold">LogIn</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="divider">OR</div>
          <button 
          onClick={() => signInWithGoogle()}
          className="btn btn-outline">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
