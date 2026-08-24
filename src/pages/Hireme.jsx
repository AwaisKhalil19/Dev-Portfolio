import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { handleSubmit } from "../data/handleSubmit";

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col gap-8 sm:mb-12 md:flex-row md:items-start md:justify-between">

          {/* Left */}
          <div className="w-full md:w-1/2">
            <p className="font-body text-lg font-bold uppercase tracking-widest text-gray-400 sm:text-2xl">
              Hire Me
            </p>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-hc sm:text-5xl md:mt-5 md:text-7xl">
              Let&apos;s Work Together
            </h1>

            <p className="mt-5 max-w-2xl font-body text-sm leading-6 text-gray-500 sm:mt-8 sm:text-base sm:leading-7">
              Have a project in mind or looking for a developer to bring your
              idea to life? Feel free to get in touch. I&apos;d love to discuss
              your project and see how I can help.
            </p>
          </div>

          {/* Home Button */}
          <div className="flex w-full justify-start md:w-1/2 md:justify-end">
            <Link
              to="/"
              className="flex w-fit items-center gap-2 rounded-lg border border-border-custom px-4 py-2.5 font-body text-sm font-bold text-hc transition duration-300 hover:bg-hc hover:text-white sm:px-5 sm:text-base"
            >
              <FaArrowLeft />
              <span>Home</span>
            </Link>
          </div>

        </div>

        {/* Contact Form */}
        <div className="mx-auto w-full rounded-xl border border-border-custom p-4 shadow-md sm:p-6 md:p-10">

          <form
            onSubmit={(e) => handleSubmit(e, formData, setFormData)}
            className="flex flex-col gap-5 sm:gap-6"
          >

            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-bold text-hc sm:text-base">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-border-custom px-4 py-3 font-body text-sm outline-none transition focus:border-hc sm:text-base"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-bold text-hc sm:text-base">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-lg border border-border-custom px-4 py-3 font-body text-sm outline-none transition focus:border-hc sm:text-base"
                />
              </div>

            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="font-body text-sm font-bold text-hc sm:text-base">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What do you want to build?"
                required
                className="w-full rounded-lg border border-border-custom px-4 py-3 font-body text-sm outline-none transition focus:border-hc sm:text-base"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="font-body text-sm font-bold text-hc sm:text-base">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
                className="w-full resize-none rounded-lg border border-border-custom px-4 py-3 font-body text-sm outline-none transition focus:border-hc sm:text-base"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-hc px-6 py-3 font-body text-sm font-bold text-white transition hover:opacity-90 sm:w-fit sm:text-base"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default HireMe;
