import emailjs from "@emailjs/browser";

export const handleSubmit = (e, formData, setFormData) => {
  e.preventDefault();

  emailjs
    .send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message.");
    });
};