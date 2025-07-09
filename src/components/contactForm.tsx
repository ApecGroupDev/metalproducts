'use client'; // Only needed if you're using Next.js app directory

import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/xovwoppj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-2 scrn-600:space-y-3 scrn-750:space-y-4 scrn-900:space-y-2 scrn-1000:space-y-4 scrn-1250:space-y-2 scrn-1400:space-y-4 scrn-1500:space-y-8 scrn-1900:space-y-12 mt-6 scrn-750:mt-8 scrn-800:mt-6 scrn-900:mt-12 scrn-300:text-xs scrn-450:text-sm scrn-600:text-base scrn-750:text-sm scrn-800:text-base scrn-1000:text-lg scrn-1700:text-xl'>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className='w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-600'
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className='w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-600'
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className='w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-600'
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className='w-full border-b border-gray-400 bg-transparent outline-none py-2 text-gray-900 placeholder-gray-600'
        required
      />
      <button
        type="submit"
        className='w-2/5 bg-[#c62931] text-white py-3 rounded-md font-semibold hover:bg-red-500 transition'
      >
        SUBMIT
      </button>

      {submitted && (
        <p className='mt-4 text-green-600 font-medium'>Thank you! Message sent.</p>
      )}
      {error && (
        <p className='mt-4 text-red-600 font-medium'>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
