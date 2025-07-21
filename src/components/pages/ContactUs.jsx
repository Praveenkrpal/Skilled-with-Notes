import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      setIsLoading(false);
      setIsSubmitted(true);
      form.current.reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error("Email sending failed:", err);
      setIsLoading(false);
      setError(
        `Failed to send message (${
          err.text || err.message
        }). Please try again later or email us directly at contact@skilledwithnotes.com`
      );
    }
  };

  const handleMailTo = (e) => {
    e.preventDefault();
    window.location.href = "mailto:contact@skilledwithnotes.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Compact Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Compact Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <FiMail className="text-blue-600 text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Email Us</h3>
                  <p className="text-gray-600 text-sm">
                    contact@skilledwithnotes.com
                  </p>
                  <button
                    onClick={handleMailTo}
                    className="text-blue-600 hover:underline text-xs mt-1 inline-block cursor-pointer bg-transparent border-none"
                  >
                    Send a message
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <FiPhone className="text-green-600 text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Call Us</h3>
                  <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Mon-Fri, 9am-5pm EST
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <FiMapPin className="text-purple-600 text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Our Office</h3>
                  <p className="text-gray-600 text-sm">Gurugram, India</p>
                  <p className="text-gray-600 text-sm">New Delhi 122016</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-2">
                <h3 className="font-medium text-gray-800 mb-2">Follow Us</h3>
                <div className="flex space-x-3">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-blue-700 text-lg" />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-gray-800 text-lg" />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-50 hover:bg-blue-100 p-2 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-blue-400 text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compact Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Send a Message
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
              >
                <FiCheckCircle className="text-green-500 text-3xl mx-auto mb-2" />
                <h3 className="font-medium text-green-800 mb-1">Thank You!</h3>
                <p className="text-green-700 text-sm">
                  Your message has been sent successfully.
                </p>
              </motion.div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-2 rounded-md text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm ${
                      isLoading ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Compact Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Our Location</h3>
            <p className="text-gray-600 text-sm">Gurugram Tech City, India</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
