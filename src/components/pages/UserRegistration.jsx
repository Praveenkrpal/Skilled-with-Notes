import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UseUser } from "../../context/UserContext";

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isAlreadyLoggedIn, setIsAlreadyLoggedIn] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
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

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newUser = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${formData.email}`,
        bio: "New member",
        joinedDate: new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        }),
      };

      loginUser(newUser);
      setRegistrationSuccess(true);

      // Show success message for 3 seconds before redirecting
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  if (isAlreadyLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            You're already registered successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            You can access all features or{" "}
            <Link to="/profile" className="text-blue-600 hover:underline">
              view your profile
            </Link>
            .
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Go to Home
            </Link>
            <Link
              to="/profile"
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
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
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Graphic Image */}
        <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-6">
          <img
            src="https://i.pinimg.com/originals/78/5a/1b/785a1b9c359640da6bc9cfe3670b42ba.png"
            alt="Person working on computer"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Side - Registration Form */}
        <div className="md:w-3/5 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Create an Account
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Join our community of skilled learners
          </p>

          {registrationSuccess && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
              Registration successful! Redirecting you to the home page...
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-3">
              <label
                htmlFor="name"
                className="block text-gray-700 mb-1 text-sm"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 text-sm ${
                  errors.name
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-1 text-sm"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 text-sm ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="mb-3">
              <label
                htmlFor="phone"
                className="block text-gray-700 mb-1 text-sm"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 text-sm ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-gray-700 mb-1 text-sm"
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
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 text-sm ${
                    errors.password
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={14} />
                  ) : (
                    <FaEye size={14} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 mb-1 text-sm"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 text-sm ${
                    errors.confirmPassword
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-blue-200"
                  }`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash size={14} />
                  ) : (
                    <FaEye size={14} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 text-sm"
              disabled={registrationSuccess}
            >
              {registrationSuccess ? "Registration Successful!" : "Register"}
            </button>

            {/* Already Registered Link */}
            <div className="mt-3 text-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
