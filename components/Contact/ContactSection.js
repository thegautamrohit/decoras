import React from "react";

function ContactSection() {
  return (
    <div className="contact__section__container">
      <h1 className="contact__store__name">Store Name</h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230959.4016437163!2d77.09242456354774!3d28.509442124431633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1656588791043!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contact__store__details">
        <h1>Store Name</h1>

        <div className="contact__store__info">
          <h4>Address</h4>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          <h4>Phone Number</h4>
          <p>9876543210</p>
          <h4>HOURS</h4>
          <p>9:00-7:00</p>
          <p>9:00-7:00</p>
          <p>9:00-7:00</p>

          <h4>EMAIL</h4>
          <p>email@email.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
