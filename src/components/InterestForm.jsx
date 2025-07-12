import { useState } from "react"

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
        if(name === "pin") {
            const digits = value.replace(/\D/g, '').slice(0, 16);
            const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1-');
            setFormData((prevData) => ({...prevData,[name]: formatted}));
        } else if(name === "guess") {
            if (/^\d*$/.test(value)) {
                setFormData({ ...formData, guess: value });
            }
        } else {
            setFormData((prevData) => ({...prevData,[name]: value}));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedPhone = formData.phone.replace(/\D/g, '');
        const formattedPin = formData.pin.replace(/-/g, '');

        console.log("Form Submitted:", {formData});

        setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            guess: "",
            pin: "",
        });
    }

    return (
        <form className="interest-form" onSubmit={handleSubmit}>
            <h2>Reserve Your Spidr Air Fryer</h2>
            <div className="field-group">
                <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required/>
                <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required/>
            </div>
            <div className="field-group">
                <input name="phone" placeholder="Phone No." value={formData.phone} onChange={handleChange} required/>
                <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="field-group">
                <input name="guess" placeholder="Air Fryer Cost ($)" value={formData.guess} inputMode="numeric" onChange={handleChange} required/>
                <input name="pin" placeholder="Spidr PIN" value={formData.pin} onChange={handleChange} required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}