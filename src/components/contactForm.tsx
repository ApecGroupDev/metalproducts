"use client";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .cf-mono { font-family: 'Space Mono', monospace; }
        .cf-display { font-family: 'Oswald', sans-serif; }

        .cf-input {
          border-bottom: 1px solid rgba(0,0,0,0.15);
          transition: border-color 0.3s;
        }
        .cf-input:focus {
          border-color: #c62931;
        }

        .cf-btn {
          background: #c62931;
          color: #fff;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          padding: 14px 32px;
          transition: background 0.3s;
        }
        .cf-btn:hover { background: #a91f27; }
      `}</style>

      <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        <div>
          <label className="cf-mono text-[#c62931] text-[10px] tracking-widest uppercase block mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="cf-mono cf-input w-full bg-transparent outline-none py-3 text-[#1a1a1a] text-sm placeholder-[#999]"
            required
          />
        </div>
        <div>
          <label className="cf-mono text-[#c62931] text-[10px] tracking-widest uppercase block mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="cf-mono cf-input w-full bg-transparent outline-none py-3 text-[#1a1a1a] text-sm placeholder-[#999]"
            required
          />
        </div>
        <div>
          <label className="cf-mono text-[#c62931] text-[10px] tracking-widest uppercase block mb-2">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="cf-mono cf-input w-full bg-transparent outline-none py-3 text-[#1a1a1a] text-sm placeholder-[#999]"
          />
        </div>
        <div>
          <label className="cf-mono text-[#c62931] text-[10px] tracking-widest uppercase block mb-2">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="cf-mono cf-input w-full bg-transparent outline-none py-3 text-[#1a1a1a] text-sm placeholder-[#999] resize-none"
            required
          />
        </div>
        <button type="submit" className="cf-btn">
          Submit
        </button>

        {submitted && (
          <p className="cf-mono mt-4 text-green-600 text-sm">
            Thank you! Message sent.
          </p>
        )}
        {error && (
          <p className="cf-mono mt-4 text-[#c62931] text-sm">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </>
  );
}
