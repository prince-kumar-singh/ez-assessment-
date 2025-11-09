import React, { useState } from "react";
import FooterVector from "../assets/FooterVector.png"; // top-right mandala
import FooterVector1 from "../assets/FooterVector1.png"; // bottom-left mandala

const ContactSection = () => {
  // States for input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // States for UI feedback
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    const { name, email, phone, message } = formData;

    // Front-end Validation
    if (!name || !email || !message) {
      setErrorMsg("Please fill out all required fields (*)");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    // Loading state
    setLoading(true);

    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form submitted:", data);
        setSuccessMsg("Form Submitted ✅");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        setErrorMsg("Something went wrong! Please try again.");
      }
    } catch (error) {
      setErrorMsg("Network error. Please check your connection.");
    }

    setLoading(false);
  };

  return (
    <section className="relative bg-[#FFF7F2] py-20 px-6 md:px-20 overflow-hidden">
      {/* Decorative Mandala Corners */}
      <img
        src={FooterVector}
        alt="Top-right Mandala"
        className="absolute top-0 right-0 w-60 md:w-80 opacity-90 pointer-events-none"
      />
      <img
        src={FooterVector1}
        alt="Bottom-left Mandala"
        className="absolute bottom-0 left-0 w-60 md:w-80 opacity-90 pointer-events-none"
      />

      <div className="flex flex-col md:flex-row justify-between items-start gap-10 relative z-10">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-[#0E1F33] text-base md:text-lg leading-relaxed max-w-md">
            Whether you have an idea, a question, or simply want to explore how
            we can work together, we’re just a message away. <br />
            Let’s catch up over coffee ☕ <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="w-full md:w-1/2 bg-transparent border border-[#0E1F33] p-6 md:p-10 text-center md:text-left">
          <h2 className="text-[#0E1F33] text-2xl font-serif mb-2">
            Join the Story
          </h2>
          <p className="text-gray-700 mb-6">
            Ready to bring your vision to life? Let’s talk.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name*"
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-[#E25D34]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email*"
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-[#E25D34]"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-[#E25D34]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message*"
              rows="4"
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-[#E25D34]"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`bg-[#E25D34] text-white px-6 py-2 rounded-full shadow hover:bg-[#cf4b24] transition-all ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {/* Success or Error Message */}
          {successMsg && (
            <p className="text-green-600 mt-4 text-center animate-fade-in">
              {successMsg}
            </p>
          )}
          {errorMsg && (
            <p className="text-red-600 mt-4 text-center animate-fade-in">
              {errorMsg}
            </p>
          )}

          {/* Contact Info */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-[#E25D34] font-medium text-sm md:text-base">
            <a
              href="mailto:vernita@varnanfilms.co.in"
              className="hover:underline"
            >
              vernita@varnanfilms.co.in
            </a>
            <span className="hidden md:block border-l border-[#E25D34] h-5 mx-3"></span>
            <p>+91 98736 84567</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
