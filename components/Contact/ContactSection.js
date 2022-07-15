import React from "react";

function ContactSection() {
  return (
    <div className="contact__section__container">
      <h1 className="contact__store__name">Store Name</h1>

      <iframe
        src="https://www.google.com/maps/place/12+Daniel+Rd,+Fairfield,+NJ+07004,+USA/@40.8842547,-74.277157,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3010569fc04f5:0x8f5062f512bb5bae!8m2!3d40.8842507!4d-74.2749683"
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
          <p>12, Daniel Road, Fairfield, New Jersey 07004</p>
          <h4>Phone Number</h4>
          <p>+1-862-505-1710</p>
          <h4>HOURS</h4>
          <p>9:00-7:00</p>
          <p>9:00-7:00</p>
          <p>9:00-7:00</p>

          <h4>EMAIL</h4>
          <p>info@decorasusa.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
