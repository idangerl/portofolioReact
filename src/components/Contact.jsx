import React, { useState } from "react";
import "../stylesheets/Contact.css";
import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from "react-icons/fa";
import shapeOne from "../assets/shape-1.png";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/1258849a-6d43-4ee1-95f3-efdb78644d64",
        form
      )
      .then((response) => {
        console.log(response);
        alert("mensaje enviado");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      });
  };

  return (
    <section className="contact section">
      <h2 className="section-title text-cs">Contacto</h2>
      <p className="section-subtitle">
        hablame <span>sobre tus ideas</span>
      </p>
      <div className="contact-container container grid">
        <div className="contact-content">
          <div className="contact-card">
            <span className="contact-card-icon">
              <FaRegMap />
            </span>
            <h3 className="contact-card-title">Direccion</h3>
            <p className="contact-card-data">La Paz, Bolivia</p>
          </div>
          <div className="contact-card">
            <span className="contact-card-icon">
              <FaRegUser />
            </span>
            <h3 className="contact-card-title">Disponible</h3>
            <p className="contact-card-data">disponible ahora</p>
          </div>
          <div className="contact-card">
            <span className="contact-card-icon">
              <FaRegEnvelope />
            </span>
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-data">oscaracho132@gmail.com</p>
          </div>
          <div className="contact-card">
            <span className="contact-card-icon">
              <FaRegAddressBook />
            </span>
            <h3 className="contact-card-title">Telefono</h3>
            <p className="contact-card-data">+591 - 62586828</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label className="contact-form-tag text text-cs">
                Tu nombre completo <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                className="contact-form-input"
              />
            </div>
            <div className="contact-form-div">
              <label className="contact-form-tag text text-cs">
                Tu correo electronico <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                className="contact-form-input"
              />
            </div>
          </div>
          <div className="contact-form-div">
            <label className="contact-form-tag text text-cs">
              Asunto<b>*</b>
            </label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              value={form.subject}
              className="contact-form-input"
            />
          </div>
          <div className="contact-form-div contact-form-area">
            <label className="contact-form-tag text text-cs">
              Tu mensaje <b>*</b>
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              className="contact-form-input"
            ></textarea>
          </div>
          <div className="contact-submit">
            <button type="submit" className="btn text-cs">
              Enviar mensage
            </button>
          </div>
        </form>
      </div>
      <div className="section-deco deco-left">
        <img src={shapeOne} alt="" className="shape" />
      </div>
      <div className="section-bg-wrapper">
        <span className="bg-title">Contact</span>
      </div>
    </section>
  );
}

export default Contact;
