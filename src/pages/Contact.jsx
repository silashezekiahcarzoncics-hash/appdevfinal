import React, { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookMessenger,
} from "react-icons/fa";
<<<<<<< HEAD
import { SiViber } from "react-icons/si"; // Viber icon
import "./PageStyles.css"; // Ensure this matches your AboutUs styling

// Import QR images
=======
import { SiViber } from "react-icons/si"; // ✅ Viber icon
import "./PageStyles.css"; // ✅ ensure this matches your AboutUs styling

// ✅ Import images properly
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
import WhatsAppQR from "../assets/blank_image.jpg";
import ViberQR from "../assets/blank_image.jpg";

const Contact = () => {
  useEffect(() => {
    document.body.classList.add("aboutus-bg");
    return () => {
      document.body.classList.remove("aboutus-bg");
    };
  }, []);

  return (
    <div className="page-content-container">
      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "orange",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Contact Us
        </div>

        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "1rem",
            marginLeft: "auto",
<<<<<<< HEAD
            color: "#a6a6a6", // Updated gray color
=======
            color: "#ddd",
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
            lineHeight: "1.8",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div>
<<<<<<< HEAD
            <FaEnvelope style={{ marginRight: "10px", color: "#ffbd59" }} />
=======
            <FaEnvelope style={{ marginRight: "10px", color: "#ffa94d" }} />
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
            xxxx@gmail.com
          </div>

          <div>
<<<<<<< HEAD
            <FaFacebook style={{ marginRight: "10px", color: "#ffbd59" }} />
=======
            <FaFacebook style={{ marginRight: "10px", color: "#ffa94d" }} />
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              style={{ color: "#a6a6a6", textDecoration: "none" }}
=======
              style={{ color: "#ccc", textDecoration: "none" }}
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
            >
              facebook.com/idk
            </a>
          </div>

          <div>
<<<<<<< HEAD
            <FaFacebookMessenger style={{ marginRight: "10px", color: "#ffbd59" }} />
=======
            <FaFacebookMessenger
              style={{ marginRight: "10px", color: "#ffa94d" }}
            />
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
            <a
              href="https://m.me/"
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              style={{ color: "#a6a6a6", textDecoration: "none" }}
=======
              style={{ color: "#ccc", textDecoration: "none" }}
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
            >
              FacebookMessenger.com/idk
            </a>
          </div>

          <div>
<<<<<<< HEAD
            <FaPhoneAlt style={{ marginRight: "10px", color: "#ffbd59" }} />
            0990000000
          </div>

          {/* WhatsApp + Viber side by side */}
=======
            <FaPhoneAlt style={{ marginRight: "10px", color: "#ffa94d" }} />
            0990000000
          </div>

          {/* ✅ WhatsApp + Viber side by side */}
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            {/* WhatsApp */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "10px",
                }}
              >
<<<<<<< HEAD
                <FaWhatsapp style={{ color: "#ffbd59", fontSize: "1.3rem" }} />
                <span style={{ fontWeight: "bold", color: "#ffbd59" }}>
=======
                <FaWhatsapp style={{ color: "#ffa94d", fontSize: "1.3rem" }} />
                <span style={{ fontWeight: "bold", color: "#ffa94d" }}>
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
                  WhatsApp
                </span>
              </div>
              <img
<<<<<<< HEAD
                src={WhatsAppQR}
=======
                src={WhatsAppQR} // ✅ imported image
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
                alt="WhatsApp QR"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "8px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>

            {/* Viber */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "10px",
                }}
              >
<<<<<<< HEAD
                <SiViber style={{ color: "#ffbd59", fontSize: "1.3rem" }} />
                <span style={{ fontWeight: "bold", color: "#ffbd59" }}>Viber</span>
              </div>
              <img
                src={ViberQR}
=======
                <SiViber style={{ color: "#ffa94d", fontSize: "1.3rem" }} />
                <span style={{ fontWeight: "bold", color: "#ffa94d" }}>
                  Viber
                </span>
              </div>
              <img
                src={ViberQR} // ✅ imported image
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
                alt="Viber QR"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "8px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          paddingTop: "20px",
          fontSize: "0.9rem",
<<<<<<< HEAD
          color: "#a6a6a6", // Updated gray color
=======
          color: "#aaa",
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
          borderTop: "1px solid #333",
        }}
      >
        &copy; {new Date().getFullYear()} Saipher CG. All rights reserved.
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
