// src/components/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-header">
        Our page has come to an end, but our relationship with you has not.
      </h2>
      <p className="footer-subscribe-text">Stay sustainable and subscribe now</p>
      
      <div className="footer-subscribe">
        <input type="email" placeholder="Enter your email address" />
        <button>SUBSCRIBE</button>
      </div>

      <div className="footer-container">
        {/* SHOP BY STYLE */}
        <FooterColumn
          title="SHOP BY STYLE"
          items={["Sports shoes", "Formal shoes", "Walking shoes", "Canvas shoes", "Trending shoes"]}
        />

        {/* INFORMATION */}
        <FooterColumn
          title="INFORMATION"
          items={["Track Your Order", "Contact us", "Why Ket Walk", "Student Discount", "Blog"]}
        />

        {/* GUIDES */}
        <FooterColumn
          title="GUIDES"
          items={["Returns Policy", "Privacy Policy", "Terms & Conditions", "Shoe Care"]}
        />

        {/* COLLECTIONS */}
        <FooterColumn
          title="COLLECTIONS"
          items={["Sneakers", "Sandals", "Slip ons", "Clogs", "Slippers"]}
        />

        {/* SHOES COLLECTION */}
        <FooterColumn
          title="SHOES COLLECTION"
          items={["Shoes", "Men", "Women", "All products", "Men shoes", "Women shoes"]}
          tag="h4"
        />

        {/* FLIP FLOPS COLLECTION */}
        <FooterColumn
          title="FLIP FLOPS COLLECTION"
          items={[
            "Flip Flops",
            "Flip flops for women",
            "Extra soft flip flops for women",
            "Flip flops for men",
            "Extra soft flip flops for men",
            "Daily use flip flops for men"
          ]}
          tag="h5"
        />

        {/* CLOGS COLLECTION */}
        <FooterColumn
          title="CLOGS COLLECTION"
          items={[
            "Newly Launched Clogs",
            "Clogs for Men",
            "Clogs for Women",
            "Outdoor Clogs for Women",
            "Outdoor Clogs for Men"
          ]}
          tag="h6"
        />
      </div>

      <hr className="footer-line" />

      {/* Contact & Social */}
      <div className="footer-contact-info">
        <p><strong>CONTACT US -</strong></p>
        <p>WhatsApp: +91 90599-38941</p>
        <p>(9:30AM to 9:00PM)</p>
        <div className="footer-social-icons">
          <i className="fa fa-instagram"></i>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-youtube"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>

      <hr className="footer-line" />

      {/* Payment Line */}
      <div className="secure-line">
        <hr />
        <p>100% Secure Transaction</p>
        <hr />
      </div>

      {/* Payment Icons */}
      <div className="payment-icons-single">
        <img src="/images/payments/payment-options.png" alt="Payment Methods" />
      </div>

      <p className="footer-bottom">
        Handcrafted with care at Ket Walk – just for your feet. 🧡
      </p>
    </footer>
  );
}

// 🔸 Small reusable component
function FooterColumn({ title, items, tag = "h3" }) {
  const Heading = tag;
  return (
    <div className="footer-column">
      <Heading>{title}</Heading>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
