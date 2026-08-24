
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
    <section className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

          {/* Left */}
          <div className="w-full md:w-1/2">
            <p className="font-body text-2xl font-bold uppercase tracking-widest text-gray-400">
              Hire Me
            </p>

            <h1 className="mt-5 font-heading text-5xl font-bold leading-[1.5em] text-hc md:text-7xl">
              Let&apos;s Work Together
            </h1>

            <p className="mt-8 max-w-2xl font-body text-gray-500">
              Have a project in mind or looking for a developer to bring your
              idea to life? Feel free to get in touch. I&apos;d love to discuss
              your project and see how I can help.
            </p>
          </div>

          {/* Home Button */}
          <div className="w-full flex justify-start md:w-1/2 md:justify-end">
            <Link
              to="/"
              className="flex w-fit items-center gap-2 rounded-lg border border-border-custom px-5 py-2.5 font-body font-bold text-hc transition duration-300 hover:bg-hc hover:text-white"
            >
              <FaArrowLeft />
              <span>Home</span>
            </Link>
          </div>

        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-6xl rounded-xl border border-border-custom p-6 shadow-md md:p-10">

          <form
            onSubmit={(e) => handleSubmit(e, formData, setFormData)}
            className="flex flex-col gap-6"
          >

            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <div className="flex flex-col gap-2">
                <label className="font-body font-bold text-hc">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="rounded-lg border border-border-custom px-4 py-3 font-body outline-none transition focus:border-hc"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body font-bold text-hc">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="rounded-lg border border-border-custom px-4 py-3 font-body outline-none transition focus:border-hc"
                />
              </div>

            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="font-body font-bold text-hc">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What do you want to build?"
                required
                className="rounded-lg border border-border-custom px-4 py-3 font-body outline-none transition focus:border-hc"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="font-body font-bold text-hc">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
                className="resize-none rounded-lg border border-border-custom px-4 py-3 font-body outline-none transition focus:border-hc"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-fit items-center gap-3 rounded-lg bg-hc px-6 py-3 font-body font-bold text-white transition hover:opacity-90"
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


















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
// import { handleSubmit } from "../utils/handleSubmit";

// const HireMe = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);

//     // Backend / Email service yahan connect kar sakte ho
//   };

//   return (
//     <section className="min-h-screen px-6 py-10">
//       <div className="mx-auto max-w-6xl">

//         {/* Heading */}
//         <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

//           {/* Left */}
//           <div className="w-[70%] md:w-1/2">
//             <p className="font-body text-2xl font-bold uppercase tracking-widest text-gray-400">
//               Hire Me
//             </p>

//             <h1 className="mt-5 font-heading text-md leading-[1.4em] font-bold text-hc md:text-7xl">
//               Let&apos;s Work Together
//             </h1>

//             <p className="mt-8 max-w-2xl font-body text-gray-500">
//               Have a project in mind or looking for a developer to bring your
//               idea to life? Feel free to get in touch. I&apos;d love to discuss
//               your project and see how I can help.
//             </p>
//           </div>

//           {/* Home Button */}
//           <div className="w-[30%] md:w-1/2 flex justify-start md:justify-end">
//             <Link
//               to="/"
//               className="flex w-fit items-center gap-2 rounded-lg border border-border-custom px-5 py-2.5 font-body font-bold text-hc transition duration-300 hover:bg-hc hover:text-white"
//             >
//               <FaArrowLeft />
//               <span>Home</span>
//             </Link>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="mx-auto max-w-6xl rounded-xl border border-border-custom p-6 shadow-md md:p-10">

//           <form 
//           onSubmit={(e) => handleSubmit(e, formData, setFormData)} 
//           className="flex flex-col gap-6"
//           >

//             {/* Name + Email */}
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

//               <div className="flex flex-col gap-2">
//                 <label className="font-body font-bold text-hc">
//                   Name
//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your name"
//                   required
//                   className="font-body rounded-lg border border-border-custom px-4 py-3 outline-none transition focus:border-hc"
//                 />
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label className="font-body font-bold text-hc">
//                   Email
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="your@email.com"
//                   required
//                   className="font-body rounded-lg border border-border-custom px-4 py-3 outline-none transition focus:border-hc"
//                 />
//               </div>

//             </div>

//             {/* Subject */}
//             <div className="flex flex-col gap-2">
//               <label className="font-body font-bold text-hc">
//                 Subject
//               </label>

//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="What do you want to build?"
//                 required
//                 className="font-body rounded-lg border border-border-custom px-4 py-3 outline-none transition focus:border-hc"
//               />
//             </div>

//             {/* Message */}
//             <div className="flex flex-col gap-2">
//               <label className="font-body font-bold text-hc">
//                 Message
//               </label>

//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Tell me about your project..."
//                 rows="6"
//                 required
//                 className="font-body resize-none rounded-lg border border-border-custom px-4 py-3 outline-none transition focus:border-hc"
//               />
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="flex w-fit items-center gap-3 rounded-lg bg-hc px-6 py-3 font-body font-bold text-white transition hover:opacity-90"
//             >
//               <FaPaperPlane />
//               Send Message
//             </button>

//           </form>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HireMe;