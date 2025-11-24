import React, { useEffect } from "react";
<<<<<<< HEAD
import logo2 from "../assets/logo2.png";
import "./PageStyles.css";
=======
import logo from "../assets/logo.png";
import "./PageStyles.css"; // ✅ ensure the path is correct
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35

import desc1a from "../assets/blank_image.jpg";
import desc1b from "../assets/blank_image.jpg";
import desc1c from "../assets/blank_image.jpg";

import c1 from "../assets/blank_image.jpg";
import c2 from "../assets/blank_image.jpg";

<<<<<<< HEAD
const sealingImages = [desc1a, desc1b, desc1c];
const CustomerFeedback = [c2, c1];
=======
const sealingImages = [desc1a,desc1b,desc1c];
const CustomerFeedback = [c2,c1];



>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35

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
<<<<<<< HEAD
        
        {/* ABOUT US */}
=======
        <img
          src={logo}
          alt="Company Logo"
          style={{ height: "70px", marginBottom: "10px" }}
        />
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Saipher CG</div>

>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
        <div
          style={{
            textAlign: "justify",
            fontSize: "1rem",
<<<<<<< HEAD
            color: "#4b3419",
=======
            color: "#ccc",
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
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
<<<<<<< HEAD
            About Us
          </div>

          Saipher CG is a trusted supplier of high–quality packaging solutions
          designed for food, retail, and industrial applications. Our product
          line includes shrinkable film cap seals, induction seals,
          microwavable container seals, packaging rolls, and other essential
          sealing materials. Saipher CG focuses on dependable quality, fast
          response, and customer–centered service to ensure that businesses
          receive secure and professional packaging support.
          <br />
          <br />
          Our journey began with a goal of helping small and growing businesses
          achieve safe and efficient packaging without unnecessary complications.
          We continue to grow alongside our customers and remain committed to
          offering dependable packaging supplies at fair and competitive prices.
        </div>
      </div>

      {/* MISSION */}
=======
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

>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            textAlign: "justify",
            fontSize: "1rem",
<<<<<<< HEAD
            color: "#4b3419",
=======
            color: "#ccc",
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
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
<<<<<<< HEAD
              color: "#4b3419",
=======
              color: "#ddd",
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
              textAlign: "justify",
              margin: 0,
            }}
          >
<<<<<<< HEAD
            Saipher CG aims to provide durable, reliable, and affordable
            packaging products that help businesses protect their goods and
            enhance product presentation. We strive to deliver consistent
            quality, excellent customer service, and fast transactions while
            supporting businesses of all sizes with practical and effective
            packaging solutions.
=======
           .......
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
          </p>
        </div>
      </div>

<<<<<<< HEAD
      {/* VISION */}
=======
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            textAlign: "justify",
            fontSize: "1rem",
<<<<<<< HEAD
            color: "#4b3419",
=======
            color: "#ccc",
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
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
<<<<<<< HEAD

=======
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
<<<<<<< HEAD
              color: "#4b3419",
=======
              color: "#ddd",
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
              textAlign: "justify",
              margin: 0,
            }}
          >
<<<<<<< HEAD
            Saipher CG envisions becoming a leading packaging supplier recognized
            for integrity, quality, and customer satisfaction. We aim to expand
            our product range and distribution while maintaining strong
            relationships with clients built on trust and reliability.
          </p>

=======
           ......
          </p>
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
<<<<<<< HEAD
              color: "#4b3419",
=======
              color: "#ddd",
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
              textAlign: "justify",
              marginTop: "15px",
            }}
          >
<<<<<<< HEAD
            We work toward a future where every business—from small home brands
            to established companies—can access professional and dependable
            packaging that elevates their brand and ensures consumer safety.
          </p>
        </div>
      </div>

      {/* CUSTOMER FEEDBACK */}
      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            textAlign: "justify",
            fontSize: "1rem",
            color: "#4b3419",
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
            Customer Feedback Highlights
          </div>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: "#4b3419",
              textAlign: "justify",
              margin: "0 0 20px 0",
            }}
          >
            We value every customer we serve and continuously work to provide
            fast, friendly, and reliable service. Here are some customer
            highlights and product shots shared with us.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "flex-start",
            }}
          >
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
      </div>

      {/* CUSTOMER GUIDE */}
      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            textAlign: "justify",
            fontSize: "1rem",
            color: "#4b3419",
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
              color: "#4b3419",
              textAlign: "justify",
              margin: "0 0 20px 0",
            }}
          >
            Follow these simple steps to ensure a perfect seal every time when
            using our packaging products.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "flex-start",
            }}
          >
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

      {/* FOOTER */}
=======
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



     
    
   


























>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
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
