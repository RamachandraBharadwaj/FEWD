// ContactUs.js
import { useState } from "react";

function ContactUs({ user, onLogout }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, your message has been received.`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome {user.name}, Contact Us</h2>
      <button onClick={onLogout}>Logout</button>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        /><br /><br />
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        /><br /><br />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        /><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
