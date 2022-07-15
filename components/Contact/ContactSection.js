import React from "react";

function ContactSection() {
  return (
    <div className="contact__section__container">
      <h1 className="contact__store__name">Decoras</h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10443.483530914145!2d-74.26992649194928!3d40.88335617835552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3010512a35a9f%3A0xee7b1dffacfac2f5!2s12%20Daniel%20Rd%2C%20Fairfield%2C%20NJ%2007004%2C%20USA!5e0!3m2!1sen!2sin!4v1657876979751!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contact__store__details">
        <h1>Decoras</h1>

        <div className="contact__store__info">
          <h4>Address</h4>
          <p>12, Daniel Road, Fairfield, New Jersey 07004</p>
          <h4>Phone Number</h4>
          <p>+1-862-505-1710</p>
          {/* <h4>HOURS</h4>
          <p>9:00-7:00</p>
          <p>9:00-7:00</p>
          <p>9:00-7:00</p> */}

          <h4>EMAIL</h4>
          <p>info@decorasusa.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
