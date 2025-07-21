import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Default demo user data with dynamic date
  const DEMO_USER = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Alex",
    bio: "Frontend Developer | React Enthusiast",
    joinedDate: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  // Initialize state from localStorage or null
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Persist user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // For updating profile - optimized version
  const updateProfile = (updatedData) => {
    setUser((prev) => {
      const updatedUser = { ...prev, ...updatedData };
      return updatedUser;
    });
  };

  // Enhanced login function with proper date handling
  const loginUser = (userData) => {
    const loginDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const userToSet = {
      ...(userData || DEMO_USER),
      // Preserve existing joinedDate if available, otherwise use current date
      joinedDate:
        userData?.joinedDate ||
        (user?.joinedDate ? user.joinedDate : loginDate),
    };

    setUser(userToSet);
  };

  // For logging out
  const logoutUser = () => {
    setUser(null);
  };

  // Demo login with current date
  const demoLogin = () => {
    setUser({
      ...DEMO_USER,
      joinedDate: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateProfile,
        loginUser,
        logoutUser,
        demoLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Standard hook naming convention (useUser instead of UseUser)
export const UseUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
