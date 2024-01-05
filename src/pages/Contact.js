import React from 'react';
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";
export default function Contact() {
  return (
    <div className="contact">
      <div className="leftSide"
      style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div classNAme="rightSide">
        <h1>Contact US</h1>

        <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full Name..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
            <label htmlFor="message">Message</label>
            <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}
