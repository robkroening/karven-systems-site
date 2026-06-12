import { useState } from "react";

const API_URL = "https://0vpjrjg1x2.execute-api.us-east-1.amazonaws.com/leads";

export default function ContractorLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Submitting request...");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("Request submitted successfully! The contractor has been notified.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        description: "",
      });
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="lead-demo-section" id="contractor-demo">
      <div className="lead-demo-card">
        <p className="eyebrow">AWS Automation Demo</p>
        <h2>Contractor Lead Automation</h2>
        <p>
          This demo captures a customer project request, stores it in DynamoDB,
          and sends an automatic email notification through AWS.
        </p>

        <form onSubmit={handleSubmit} className="lead-form">
          <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />

          <select name="projectType" value={formData.projectType} onChange={handleChange} required>
            <option value="">Select Project Type</option>
            <option value="Kitchen Remodel">Kitchen Remodel</option>
            <option value="Bathroom Remodel">Bathroom Remodel</option>
            <option value="Deck Build">Deck Build</option>
            <option value="Basement Renovation">Basement Renovation</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="description"
            placeholder="Describe the project"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Request</button>
        </form>

        {status && <p className="form-status">{status}</p>}
      </div>
    </section>
  );
}