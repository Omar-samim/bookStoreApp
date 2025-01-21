import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [reg, setReg] = useState("Login");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{reg}</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {reg === "Signup" ? (
              <div className="mt-4 space-y-2">
                {/* Email  */}
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">Name is required</span>
                )}
              </div>
            ) : (
              ""
            )}
            <div className="mt-4 space-y-2">
              {/* Email  */}
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">Email is required</span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              {/* Email  */}
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  Password is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-14">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-500 duration-200">
                {reg}
              </button>
              <p>
                {reg == "Login" ? "Not registered?" : "Already have accound?"}
                <span
                  onClick={() => setReg(reg == "Login" ? "Signup" : "Login")}
                  className="underline text-blue-500 cursor-pointer"
                >
                  {reg == "Login" ? "Signup" : "Login"}
                </span>
              </p>
            </div>
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Login;
