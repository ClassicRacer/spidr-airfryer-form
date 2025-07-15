import { useState } from "react";
import "../styles/form.css";
import background from "../assets/background.jpg";

export default function InterestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    guess: "",
    pin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pin") {
      const digits = value.replace(/\D/g, "").slice(0, 16);
      const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1-");
      setFormData((prevData) => ({ ...prevData, [name]: formatted }));
    } else if (name === "guess") {
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, guess: value });
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", { formData });

    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      guess: "",
      pin: "",
    });
  };

  return (
    <div className="form-layout">
      <div className="image-container">
        <img className="background-image" src={background} alt="Background" />
        <form className="form-overlay" onSubmit={handleSubmit}>
          <h1>Reserve Your Spidr Air Fryer</h1>
          <hr className="title-underline" />
          <div className="field-group-row">
            <div className="field-group-column">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field-group-column">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field-group-row">
            <div className="field-group-column">
              <label htmlFor="firstName">Phone No.</label>
              <input
                name="phone"
                type="tel"
                pattern="^\+?\d[\d\s\-]{8,14}\d$"
                placeholder="+1 555 123 4567"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field-group-column">
              <label htmlFor="lastName">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field-group-row">
            <div className="field-group-column">
              <label htmlFor="firstName">Estimated Air Fryer Cost in US dollars</label>
              <input
                name="guess"
                value={formData.guess}
                inputMode="numeric"
                onChange={handleChange}
                required
              />
            </div>
            <div className="field-group-column">
              <label htmlFor="lastName">Spidr PIN</label>
              <input
                name="pin"
                inputMode="numeric"
                value={formData.pin}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
