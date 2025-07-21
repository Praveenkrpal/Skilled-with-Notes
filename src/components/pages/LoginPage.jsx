import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UseUser } from "../../context/UserContext";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [isAlreadyLoggedIn, setIsAlreadyLoggedIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { user, loginUser } = UseUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setIsAlreadyLoggedIn(true);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const authenticatedUser = {
        name: formData.email.split("@")[0],
        email: formData.email,
        avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${formData.email}`,
        phone: "",
        bio: "",
        joinedDate: currentDate,
      };

      loginUser(authenticatedUser);
      setLoginSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  const handleSocialLogin = (provider) => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const socialUser = {
      name: provider === "github" ? "GitHub User" : "Google User",
      email: `${provider}@example.com`,
      avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${provider}`,
      phone: "",
      bio: `Signed in with ${provider}`,
      joinedDate: currentDate,
    };

    loginUser(socialUser);
    setLoginSuccess(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  if (isAlreadyLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-xs sm:max-w-md bg-white rounded-xl shadow-md p-6 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3">
            You're already logged in!
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Member since: {user?.joinedDate}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            <Link
              to="/"
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go to Home
            </Link>
            <Link
              to="/profile"
              className="px-3 py-1.5 sm:px-4 sm:py-2 border border-blue-600 text-blue-600 text-sm rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-4xl bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row mx-2">
        {/* Left Side - Graphic Image (Hidden on mobile) */}
        <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-blue-500 to-purple-600 p-4">
          <div className="h-full flex items-center justify-center">
            <img
              src="https://i.pinimg.com/originals/78/5a/1b/785a1b9c359640da6bc9cfe3670b42ba.png"
              alt="Person logging in"
              className="w-full h-auto max-h-64 object-contain"
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-3/5 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
            Welcome Back
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-4">
            Sign in to access your account
          </p>

          {loginSuccess && (
            <div className="mb-3 p-2 bg-green-100 text-green-700 text-xs sm:text-sm rounded-lg">
              Login successful! Redirecting you to the home page...
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-1 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
                placeholder="Enter your email"
                autoComplete="username"
                disabled={loginSuccess}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-xs sm:text-sm text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-1 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={loginSuccess}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loginSuccess}
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-4 h-4" />
                  ) : (
                    <FaEye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  disabled={loginSuccess}
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-xs sm:text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline text-xs"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white text-sm rounded-lg font-medium hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 mb-3"
              disabled={loginSuccess}
            >
              {loginSuccess ? "Success!" : "Sign in"}
            </button>

            {/* Social Login Options */}
            <div className="mb-4">
              <div className="relative flex justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative bg-white px-2 text-xs text-gray-500">
                  Or continue with
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleSocialLogin("github")}
                  className="w-full flex justify-center items-center py-2 px-2 sm:px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  disabled={loginSuccess}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin("google")}
                  className="w-full flex justify-center items-center py-2 px-2 sm:px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  disabled={loginSuccess}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Google
                </button>
              </div>
            </div>

            {/* Create Account Link */}
            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 hover:underline">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
