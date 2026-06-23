import { useState } from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  useForm
} from "react-hook-form";

import AuthLayout
from "../components/auth/AuthLayout";

import {
  registerUser
} from "../services/authService";

function Register() {

  const navigate =
    useNavigate();

  const [loading,setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm();

  const onSubmit =
  async(data)=>{

    try{

      setLoading(true);

      await registerUser(data);

      navigate("/login");

    }catch(error){

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );

    }finally{

      setLoading(false);

    }
  };

  return (

    <AuthLayout
      title="Register"
    >


      <form
      className="register-form"
        onSubmit={
          handleSubmit(onSubmit)
        }
      >

        <div  className="form-group">

          <label className="form-label">
            Full Name
          </label>

          <input
          className="form-input"
            
            {...register(
              "fullName",
              {
                required:
                "Full Name Required"
              }
            )}
          />

        </div>

        <div className="form-group">

          <label className="form-label">Email</label>

          <input
          className="form-input"
            type="email"
           
            {...register(
              "email",
              {
                required:
                "Email Required"
              }
            )}
          />

        </div>

        <div className="form-group">

          <label className="form-label">Password</label>

          <input
          className="form-input"
            type="password"
           
            {...register(
              "password",
              {
                required:
                "Password Required",
                minLength:8
              }
            )}
          />

        </div>

        <button
        className="register-btn"
          disabled={loading}
          
        >
          {
            loading
            ? "Creating..."
            : "Register"
          }
        </button>

      </form>

      <div
      className="register-footer"
        
      >

        <Link
        className="login-link"
          to="/login"
         
        >
          Already have account?
        </Link>

      </div>

    </AuthLayout>

  );
}

export default Register;