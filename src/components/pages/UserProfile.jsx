import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseUser } from "../../context/UserContext";
import {
  FiEdit,
  FiLogOut,
  FiUser,
  FiMail,
  FiPhone,
  FiCamera,
  FiCheck,
  FiSave,
  FiX,
  FiAward,
} from "react-icons/fi";

const UserProfile = () => {
  const { user, updateProfile } = UseUser();
  const [isEditing, setIsEditing] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [editData, setEditData] = useState({ ...user });

  // Cartoon avatar options using DiceBear's adventurer style
  const avatarOptions = [
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Molly",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Lucy",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Charlie",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Max",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Bella",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Oliver",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Luna",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Leo",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Milo",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Chloe",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Jack",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Zoe",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Simba",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Lily",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Oscar",
    "https://api.dicebear.com/7.x/adventurer/svg?seed=Ruby",
  ];

  const handleAvatarSelect = (avatarUrl) => {
    setEditData({ ...editData, avatar: avatarUrl });
    setShowAvatarModal(false);
  };

  const handleEdit = () => {
    setEditData({ ...user });
    setIsEditing(true);
  };

  const handleSave = () => {
    updateProfile(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Avatar Selection Modal */}
      {showAvatarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Choose Your Avatar
              </h3>
              <button
                onClick={() => setShowAvatarModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {avatarOptions.map((avatar, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-1 rounded-full transition-all ${
                    editData.avatar === avatar
                      ? "ring-2 ring-blue-500 ring-offset-2"
                      : "hover:ring-1 hover:ring-gray-300"
                  }`}
                  onClick={() => handleAvatarSelect(avatar)}
                >
                  <div className="relative">
                    <img
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      className="w-full h-auto rounded-full aspect-square object-cover"
                    />
                    {editData.avatar === avatar && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full">
                        <FiCheck className="text-white text-2xl" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        {/* <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FiLogOut className="mr-2" />
            Back to Home
          </Link>
        </div> */}

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1 text-center">
            {" "}
            {/* Added container div with text-center */}
            <h1 className="text-3xl font-bold text-gray-800 inline-block">
              {" "}
              {/* Added inline-block */}
              My Profile
            </h1>
          </div>
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FiLogOut className="mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Left Side - Avatar */}
            <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center p-8">
              <div className="relative mb-6">
                <img
                  src={isEditing ? editData.avatar : user.avatar}
                  alt="User Avatar"
                  className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
                />
                {isEditing && (
                  <button
                    className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all shadow-md transform hover:scale-110"
                    onClick={() => setShowAvatarModal(true)}
                    title="Change avatar"
                  >
                    <FiCamera size={16} />
                  </button>
                )}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                {isEditing ? editData.name : user.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4 text-center max-w-xs">
                {isEditing ? editData.bio : user.bio || "No bio yet"}
              </p>

              <div className="flex items-center text-sm text-gray-500 mt-auto">
                <FiAward className="mr-2" />
                <span>Member since {user.joinedDate}</span>
              </div>
            </div>

            {/* Right Side - Profile Info */}
            <div className="md:w-2/3 p-8">
              {isEditing ? (
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Edit Profile
                    </h2>
                    <div className="flex space-x-3">
                      <button
                        onClick={handleCancel}
                        className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <FiX className="mr-2" /> Cancel
                      </button>
                      <button
                        onClick={handleSave}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                      >
                        <FiSave className="mr-2" /> Save Changes
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={editData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={editData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={editData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700">
                        About You
                      </label>
                      <textarea
                        name="bio"
                        value={editData.bio}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Tell us a little about yourself..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      Personal Information
                    </h2>
                    <button
                      onClick={handleEdit}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                    >
                      <FiEdit className="mr-2" /> Edit Profile
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <FiUser className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Full Name</p>
                        <p className="text-gray-800 font-medium">{user.name}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <FiMail className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          Email Address
                        </p>
                        <p className="text-gray-800 font-medium">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <FiPhone className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          Phone Number
                        </p>
                        <p className="text-gray-800 font-medium">
                          {user.phone || "Not provided"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="text-blue-600 w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">About</p>
                        <p className="text-gray-800">
                          {user.bio || "No bio provided"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
