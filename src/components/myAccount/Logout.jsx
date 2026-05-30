import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold">
        Logout
      </h2>

      <p className="text-zinc-500">
        Are you sure you want to logout?
      </p>

      <button
        onClick={handleLogout}
        className="bg-primary text-white px-8 py-4 rounded-full hover:opacity-90 transition"
      >
        Yes, Logout
      </button>
    </div>
  );
};

export default Logout;