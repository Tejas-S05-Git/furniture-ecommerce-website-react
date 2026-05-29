import React, { useState } from "react";
import { toast } from "react-hot-toast";

const PasswordManager = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      toast.error(
        "Please fill all fields"
      );
      return;
    }

    if (
      formData.newPassword !==
      formData.confirmPassword
    ) {
      toast.error(
        "Passwords do not match"
      );
      return;
    }

    if (
      formData.newPassword.length < 6
    ) {
      toast.error(
        "Password must be at least 6 characters"
      );
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      toast.success(
        "Password updated successfully"
      );
    }, 1500);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        {/* Current Password */}
        <PasswordField
          label="Password"
          name="currentPassword"
          value={
            formData.currentPassword
          }
          onChange={handleChange}
          visible={showPassword}
          setVisible={
            setShowPassword
          }
        />

        {/* Forgot */}
        <div className="flex justify-end -mt-4">
          <button
            type="button"
            className="text-primary underline font-medium"
          >
            Forgot Password?
          </button>
        </div>

        {/* New Password */}
        <PasswordField
          label="New Password"
          name="newPassword"
          value={
            formData.newPassword
          }
          onChange={handleChange}
          visible={
            showNewPassword
          }
          setVisible={
            setShowNewPassword
          }
        />

        {/* Confirm */}
        <PasswordField
          label="Confirm New Password"
          name="confirmPassword"
          value={
            formData.confirmPassword
          }
          onChange={handleChange}
          visible={
            showConfirmPassword
          }
          setVisible={
            setShowConfirmPassword
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white px-8 h-14 rounded-full font-medium hover:opacity-90 transition disabled:opacity-70"
        >
          {loading
            ? "Updating..."
            : "Update Password"}
        </button>
      </form>
    </div>
  );
};

function PasswordField({
  label,
  name,
  value,
  onChange,
  visible,
  setVisible,
}) {
  return (
    <div>
      <label className="block mb-3 text-2xl md:text-[18px] font-medium text-zinc-900">
        {label} *
      </label>

      <div className="relative">
        <input
          type={
            visible
              ? "text"
              : "password"
          }
          name={name}
          value={value}
          onChange={onChange}
          placeholder="Enter Password"
          className="w-full h-14 rounded-full border border-zinc-200 px-6 pr-14 outline-none focus:border-primary transition"
        />

        <button
          type="button"
          onClick={() =>
            setVisible(
              !visible
            )
          }
          className="absolute right-5 top-1/2 -translate-y-1/2 text-primary text-xl"
        >
          <i
            className={
              visible
                ? "ri-eye-line"
                : "ri-eye-off-line"
            }
          ></i>
        </button>
      </div>
    </div>
  );
}

export default PasswordManager;