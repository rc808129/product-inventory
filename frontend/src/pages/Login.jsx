import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import AuthLayout from "../components/auth/AuthLayout";

import { loginUser } from "../services/authService";

import useAuth from "../hooks/useAuth";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {

    try {

      setLoading(true);

      const response =
        await loginUser(data);

      login(
        response.data.token,
        response.data.user
      );

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <AuthLayout title="Login">

      <form className="login-form"
        onSubmit={handleSubmit(
          onSubmit
        )}
      >

        <div className="login-group">

          <label className="login-label">Email</label>

          <input
            type="email"
            className="
            login-input"
            {...register(
              "email",
              {
                required:
                  "Email required"
              }
            )}
          />

          <p className="error-text">
            {errors.email?.message}
          </p>

        </div>

        <div className="login-group">

          <label className="login-label">Password</label>

          <input
            type="password"
            className="
            login-input"
            {...register(
              "password",
              {
                required:
                  "Password required"
              }
            )}
          />

          <p className="error-text">
            {errors.password?.message}
          </p>

        </div>

        <button
          disabled={loading}
          className="
          login-btn"
        >
          {
            loading
              ? "Logging..."
              : "Login"
          }
        </button>

      </form>

      <div
        className="
        login-footer"
      >

        <Link
          to="/register"
          className="
          register-link"
        >
          Create Account
        </Link>

      </div>

    </AuthLayout>
  );
}

export default Login;