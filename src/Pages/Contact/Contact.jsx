import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_bi56zcn", 
        "template_sycap9h", 
        templateParams,
        "bNht-iqjfzokWhBEw"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        toast.error("Failed to send your message. Please try again later.");
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-red-500">Let's talk</h1>
          <p className="text-lg">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="space-y-4 ">
            <div className="flex items-center space-x-3">
              <img
                src="https://placehold.co/24x24"
                alt="email"
                className="w-6 h-6"
              />
              <a href="mailto:habibleo861@gmail.com" className="text-lg">
                habibleo861@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src="https://placehold.co/24x24"
                alt="phone"
                className="w-6 h-6"
              />
              <span className="text-lg">+880 1709 004842</span>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src="https://placehold.co/24x24"
                alt="location"
                className="w-6 h-6"
              />
              <span className="text-lg">CUMILLA, BANGLADESH</span>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center items-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full md:w-96 lg:w-96 bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full md:w-96 lg:w-96 bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Message:</label>
              <textarea
                name="message"
                rows="4"
                className="mt-1 block w-full md:w-96 lg:w-96 bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full lg:w-96 md:w-96 py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" reverseOrder={true} />
    </div>
  );
};

export default Contact;
