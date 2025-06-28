import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiEdit,
  FiLogOut,
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiCheck,
  FiCamera,
  FiSave,
  FiX,
} from "react-icons/fi";

const UserProfile = () => {
  // Dummy user data with initial DiceBear avatar
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Alex",
    bio: "Frontend Developer | React Enthusiast",
    joinedDate: "January 2023",
  });

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
    setUser(editData);
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
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">
              Choose Your Cartoon Avatar
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {avatarOptions.map((avatar, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-1 rounded-full border-2 transition-all ${
                    editData.avatar === avatar
                      ? "border-blue-500 scale-105"
                      : "border-transparent hover:border-blue-300"
                  }`}
                  onClick={() => handleAvatarSelect(avatar)}
                >
                  <div className="relative">
                    <img
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      className="w-full h-auto rounded-full"
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
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowAvatarModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex-1 text-center">My Profile</h1>

          <Link
            to="/"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <FiLogOut className="mr-1" />
            Logout
          </Link>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Left Side - Avatar */}
            <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center p-8">
              <div className="relative mb-4">
                <img
                  src={isEditing ? editData.avatar : user.avatar}
                  alt="User Avatar"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md bg-white"
                />
                {isEditing && (
                  <button
                    className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition shadow-md"
                    onClick={() => setShowAvatarModal(true)}
                    title="Change avatar"
                  >
                    <FiCamera size={16} />
                  </button>
                )}
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {isEditing ? editData.name : user.name}
              </h2>
              <p className="text-gray-600 text-sm mt-1 text-center">
                {isEditing ? editData.bio : user.bio}
              </p>
              <p className="text-gray-500 text-xs mt-4">
                Member since {user.joinedDate}
              </p>
              {isEditing && (
                <button
                  onClick={() => setShowAvatarModal(true)}
                  className="mt-4 text-sm text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <FiEdit className="mr-1" /> Change Avatar
                </button>
              )}
            </div>

            {/* Right Side - Profile Info */}
            <div className="md:w-2/3 p-8">
              {isEditing ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Edit Profile</h2>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleCancel}
                        className="flex items-center px-3 py-1 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                      >
                        <FiX className="mr-1" /> Cancel
                      </button>
                      <button
                        onClick={handleSave}
                        className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        <FiSave className="mr-1" /> Save
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={editData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={editData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={editData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={editData.bio}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">
                      Profile Information
                    </h2>
                    <button
                      onClick={handleEdit}
                      className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <FiEdit className="mr-1" /> Edit Profile
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FiUser className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="text-gray-800">{user.name}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <FiMail className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-gray-800">{user.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <FiPhone className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="text-gray-800">{user.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <FiLock className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Password</p>
                        <p className="text-gray-800">••••••••</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mt-1 mr-3 w-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="text-gray-400 w-5 h-5"
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
                        <p className="text-sm text-gray-500">Bio</p>
                        <p className="text-gray-800">{user.bio}</p>
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

// --------------------------------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
// import { updateAvatar, updateProfile } from '../redux/userSlice';
// import {
//   FiEdit,
//   FiLogOut,
//   FiUser,
//   FiMail,
//   FiPhone,
//   FiLock,
//   FiCheck,
//   FiCamera,
//   FiSave,
//   FiX,
// } from "react-icons/fi";

// const UserProfile = () => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();
  
//   const [isEditing, setIsEditing] = useState(false);
//   const [showAvatarModal, setShowAvatarModal] = useState(false);
//   const [editData, setEditData] = useState({ ...user });

//   // Cartoon avatar options using DiceBear's adventurer style
//   const avatarOptions = [
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Molly",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Lucy",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Charlie",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Max",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Bella",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Oliver",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Luna",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Leo",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Milo",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Chloe",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Jack",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Zoe",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Simba",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Lily",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Oscar",
//     "https://api.dicebear.com/7.x/adventurer/svg?seed=Ruby",
//   ];

//   const handleAvatarSelect = (avatarUrl) => {
//     dispatch(updateAvatar(avatarUrl));
//     setEditData({ ...editData, avatar: avatarUrl });
//     setShowAvatarModal(false);
//   };

//   const handleEdit = () => {
//     setEditData({ ...user });
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     dispatch(updateProfile(editData));
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditData({ ...editData, [name]: value });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       {/* Avatar Selection Modal */}
//       {showAvatarModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
//             <h3 className="text-xl font-bold mb-4">Choose Your Cartoon Avatar</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//               {avatarOptions.map((avatar, index) => (
//                 <div
//                   key={index}
//                   className={`cursor-pointer p-1 rounded-full border-2 transition-all ${
//                     editData.avatar === avatar
//                       ? "border-blue-500 scale-105"
//                       : "border-transparent hover:border-blue-300"
//                   }`}
//                   onClick={() => handleAvatarSelect(avatar)}
//                 >
//                   <div className="relative">
//                     <img
//                       src={avatar}
//                       alt={`Avatar ${index + 1}`}
//                       className="w-full h-auto rounded-full"
//                     />
//                     {editData.avatar === avatar && (
//                       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full">
//                         <FiCheck className="text-white text-2xl" />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-6 flex justify-end">
//               <button
//                 onClick={() => setShowAvatarModal(false)}
//                 className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 flex-1 text-center">My Profile</h1>
//           <Link
//             to="/"
//             className="flex items-center text-blue-600 hover:text-blue-800"
//           >
//             <FiLogOut className="mr-1" />
//             Logout
//           </Link>
//         </div>

//         {/* Profile Card */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="md:flex">
//             {/* Left Side - Avatar */}
//             <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center p-8">
//               <div className="relative mb-4">
//                 <img
//                   src={isEditing ? editData.avatar : user.avatar}
//                   alt="User Avatar"
//                   className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md bg-white"
//                 />
//                 {isEditing && (
//                   <button
//                     className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition shadow-md"
//                     onClick={() => setShowAvatarModal(true)}
//                     title="Change avatar"
//                   >
//                     <FiCamera size={16} />
//                   </button>
//                 )}
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 {isEditing ? editData.name : user.name}
//               </h2>
//               <p className="text-gray-600 text-sm mt-1 text-center">
//                 {isEditing ? editData.bio : user.bio}
//               </p>
//               <p className="text-gray-500 text-xs mt-4">
//                 Member since {user.joinedDate}
//               </p>
//               {isEditing && (
//                 <button
//                   onClick={() => setShowAvatarModal(true)}
//                   className="mt-4 text-sm text-blue-600 hover:text-blue-800 flex items-center"
//                 >
//                   <FiEdit className="mr-1" /> Change Avatar
//                 </button>
//               )}
//             </div>

//             {/* Right Side - Profile Info */}
//             <div className="md:w-2/3 p-8">
//               {isEditing ? (
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-xl font-semibold">Edit Profile</h2>
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={handleCancel}
//                         className="flex items-center px-3 py-1 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
//                       >
//                         <FiX className="mr-1" /> Cancel
//                       </button>
//                       <button
//                         onClick={handleSave}
//                         className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                       >
//                         <FiSave className="mr-1" /> Save
//                       </button>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Full Name
//                       </label>
//                       <div className="relative">
//                         <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                         <input
//                           type="text"
//                           name="name"
//                           value={editData.name}
//                           onChange={handleChange}
//                           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Email
//                       </label>
//                       <div className="relative">
//                         <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                         <input
//                           type="email"
//                           name="email"
//                           value={editData.email}
//                           onChange={handleChange}
//                           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Phone
//                       </label>
//                       <div className="relative">
//                         <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={editData.phone}
//                           onChange={handleChange}
//                           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Bio
//                       </label>
//                       <textarea
//                         name="bio"
//                         value={editData.bio}
//                         onChange={handleChange}
//                         rows="3"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                       ></textarea>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="space-y-6">
//                   <div className="flex justify-between items-center">
//                     <h2 className="text-xl font-semibold">Profile Information</h2>
//                     <button
//                       onClick={handleEdit}
//                       className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                     >
//                       <FiEdit className="mr-1" /> Edit Profile
//                     </button>
//                   </div>

//                   <div className="space-y-4">
//                     <div className="flex items-start">
//                       <FiUser className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
//                       <div>
//                         <p className="text-sm text-gray-500">Full Name</p>
//                         <p className="text-gray-800">{user.name}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start">
//                       <FiMail className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
//                       <div>
//                         <p className="text-sm text-gray-500">Email</p>
//                         <p className="text-gray-800">{user.email}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start">
//                       <FiPhone className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
//                       <div>
//                         <p className="text-sm text-gray-500">Phone</p>
//                         <p className="text-gray-800">{user.phone}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start">
//                       <FiLock className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
//                       <div>
//                         <p className="text-sm text-gray-500">Password</p>
//                         <p className="text-gray-800">••••••••</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start">
//                       <div className="mt-1 mr-3 w-5 flex-shrink-0">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           className="text-gray-400 w-5 h-5"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                           />
//                         </svg>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Bio</p>
//                         <p className="text-gray-800">{user.bio}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
