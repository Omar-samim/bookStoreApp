import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState(""); // For displaying toast
  const [toastType, setToastType] = useState(""); // For setting toast type (success or error)
  const [lineWidth, setLineWidth] = useState("100%"); // For controlling the line width

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_6487wg8",
        "template_ikvfuvx",
        formData,
        "9uN_UOSiEhWqvISnH"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setToastMessage("Message sent successfully!"); // Set success toast message
          setToastType("success"); // Set toast type to success
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
          setLineWidth("0%"); // Start shrinking the line from right to left
          setTimeout(() => setToastMessage(""), 3000); // Hide toast after 5 seconds
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setToastMessage("Failed to send message."); // Set error toast message
          setToastType("error"); // Set toast type to error
          setLoading(false);
          setLineWidth("0%"); // Start shrinking the line from right to left
          setTimeout(() => setToastMessage(""), 3000); // Hide toast after 5 seconds
        }
      );
  };
  return (
    <div className="flex justify-center mx-auto mt-10 md:mt-5">
      <div className="max-w-screen-2xl container mx-auto md:px-20 md:py-20 py-30 px-4 flex flex-col my-10">
        <h1 className="text-4xl font-bold-1000">
          Contact <span className="text-pink-500">Us</span>{" "}
        </h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <label htmlFor="name" className="text-2xl">
                Name
              </label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered w-full max-w-xs mt-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-5">
              <label htmlFor="email" className="text-2xl">
                Email
              </label>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full max-w-xs mt-2"
                value={formData.email}
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-2xl">
                Your Message
              </label>
              <br />
              <textarea
                type="text"
                placeholder="Enter Your Message"
                className="textarea textarea-bordered textarea-lg p-2 w-full max-w-xs mt-2"
                value={formData.message}
                onChange={handleChange}
                required
                name="message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-success text-white mt-4"
            >
              {loading == true ? (
                <span className="loading loading-spinner text-secondary"></span>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>

        {/* Toast Notifications */}
        {toastMessage && (
          <div
            className={`toast toast-top toast-center mt-20 p-4 rounded-lg shadow-lg ${
              toastType === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
            style={{
              borderBottom: `4px solid ${
                toastType === "success" ? "red" : "red"
              }`,
              width: lineWidth,
              transition: "width 0.5s ease-out", // Smooth shrinking transition
            }}
          >
            <div>{toastMessage}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;

// services id  : service_6487wg8
// public key : 9uN_UOSiEhWqvISnH
// tempate id : template_ikvfuvx
