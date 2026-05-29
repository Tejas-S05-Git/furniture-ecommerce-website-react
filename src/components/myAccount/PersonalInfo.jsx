import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";

const PersonalInfo = () => {
    const fileInputRef = useRef(null);

    const [profileImage, setProfileImage] = useState(
        "https://randomuser.me/api/portraits/women/44.jpg"
    );

    const [formData, setFormData] = useState({
        firstName: "Leslie",
        lastName: "Cooper",
        email: "example@gmail.com",
        phone: "+0123-456-789",
        gender: "Female",
    });

    const [loading, setLoading] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            toast.error("Please upload an image file");
            return;
        }

        const imageUrl = URL.createObjectURL(file);
        setProfileImage(imageUrl);
        toast.success("Profile photo updated");
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.success("Profile updated successfully");
        }, 1500);
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative w-fit">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-md"
                    />

                    <button
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="absolute bottom-0 right-0 w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center border-4 border-white"
                    >
                        <i className="ri-pencil-line"></i>
                    </button>

                    <input
                        type="file"
                        ref={fileInputRef}
                        hidden
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Field
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />

                    <Field
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <Field
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <div>
                    <label className="block mb-3 font-medium">Gender *</label>

                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full h-14 rounded-full border border-zinc-200 px-5"
                    >
                        <option>Female</option>
                        <option>Male</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary text-white px-8 h-14 rounded-full"
                >
                    {loading ? "Updating..." : "Update Changes"}
                </button>
            </form>
        </div>
    );
};

function Field({ label, name, type = "text", value, onChange }) {
    return (
        <div>
            <label className="block mb-3 font-medium">
                {label} *
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full h-14 rounded-full border border-zinc-200 px-5"
            />
        </div>
    );
}

export default PersonalInfo;