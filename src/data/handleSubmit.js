import emailjs from "@emailjs/browser";

export const handleSubmit = (e, formData, setFormData) => {
  e.preventDefault();

  emailjs
    .send(
      "service_gko01q7",
      "__ejs-test-mail-service__",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "hPmx1Rf-Y0lD3zDmo"
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