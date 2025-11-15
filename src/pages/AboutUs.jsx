import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import "./PageStyles.css"; // ✅ ensure the path is correct

import desc1a from "../assets/blank_image.jpg";
import desc1b from "../assets/blank_image.jpg";
import desc1c from "../assets/blank_image.jpg";

import c1 from "../assets/blank_image.jpg";
import c2 from "../assets/blank_image.jpg";

const sealingImages = [desc1a,desc1b,desc1c];
const CustomerFeedback = [c2,c1];




export default function AboutUs() {
  useEffect(() => {
    document.body.classList.add("aboutus-bg");
    return () => {
      document.body.classList.remove("aboutus-bg");
    };
  }, []);

  return (
    <div className="page-content-container">
      <div style={{ marginBottom: "30px" }}>
        <img
          src={logo}
          alt="Company Logo"
          style={{ height: "70px", marginBottom: "10px" }}
        />
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Saipher CG</div>

        <div
          style={{
            textAlign: "justify",
            fontSize: "1rem",
            color: "#ccc",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: "orange",
              marginBottom: "10px",
            }}
          >
            Profile
          </div>
          .......

          <br />
          <br />

         ........

          <br />
          <br />

          .......
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            textAlign: "justify",
            fontSize: "1rem",
            color: "#ccc",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: "orange",
              marginBottom: "10px",
            }}
          >
            Mission
          </div>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#ddd",
              textAlign: "justify",
              margin: 0,
            }}
          >
           .......
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            textAlign: "justify",
            fontSize: "1rem",
            color: "#ccc",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: "orange",
              marginBottom: "10px",
            }}
          >
            Vision
          </div>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#ddd",
              textAlign: "justify",
              margin: 0,
            }}
          >
           ......
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#ddd",
              textAlign: "justify",
              marginTop: "15px",
            }}
          >
          ..............
          </p>
        </div>
      </div>
      



<div style={{ marginBottom: "30px" }}>

    </div>
 <div
    style={{
      textAlign: "justify",
      fontSize: "1rem",
      color: "#ccc",
      marginBottom: "30px",
    }}
  >
    <div
      style={{
        fontSize: "1.4rem",
        fontWeight: "bold",
        color: "orange",
        marginBottom: "10px",
      }}
    >
      ........
    </div>

    <p
      style={{
        fontSize: "1rem",
        lineHeight: "1.6",
        color: "#ddd",
        textAlign: "justify",
        margin: "0 0 20px 0",
      }}
    >
      
    </p>

    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "flexstart" }}>
      {CustomerFeedback.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Customer Feedback ${i + 1}`}
          style={{
            maxWidth: "300px",
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            border: "1px solid #444",
          }}
        />
      ))}
    </div>
  </div>
































     <div style={{ marginBottom: "30px" }}>
  <div
    style={{
      textAlign: "justify",
      fontSize: "1rem",
      color: "#ccc",
      marginBottom: "30px",
    }}
  >
    <div
      style={{
        fontSize: "1.4rem",
        fontWeight: "bold",
        color: "orange",
        marginBottom: "10px",
      }}
    >
      Customer Guide: How to Measure Your Container for the Perfect Seal?
    </div>

    <p
      style={{
        fontSize: "1rem",
        lineHeight: "1.6",
        color: "#ddd",
        textAlign: "justify",
        margin: "0 0 20px 0",
      }}
    >
      Follow these simple steps to ensure a perfect seal every time when using
      our packaging products.
    </p>

    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "flexstart" }}>
      {sealingImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Sealing Guide Step ${i + 1}`}
          style={{
            maxWidth: "300px",
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            border: "1px solid #444",
          }}
        />
      ))}
    </div>
  </div>
   </div>



     
    
   


























      <div
        style={{
          textAlign: "center",
          paddingTop: "20px",
          fontSize: "0.9rem",
          color: "#aaa",
          borderTop: "1px solid #333",
        }}
      >
        &copy; {new Date().getFullYear()} Saipher CG. All rights reserved.
      </div>
    </div>
  );
}
