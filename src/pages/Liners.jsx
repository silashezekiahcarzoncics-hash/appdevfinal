//\pages\Liners.jsx
import React, { useState } from "react";
import ProductModalWithPieces from "../components/ProductModalv2";
import "../pages/ProductGrid.css";

//product1
import product1a from "../assets/L1.PNG";
import product1b from "../assets/L1.PNG";
import product1c from "../assets/L1.PNG";
import product1d from "../assets/L1.PNG";
import product1e from "../assets/L1.PNG";
import product1f from "../assets/L1.PNG";
import product1g from "../assets/L1.PNG";
import product81a from "../assets/L2.PNG";


export const products = [
  //1
    { 
      name: "High Quality PE/ PET Aluminum Induction Liner/ Pressure Seal Liner for Bottle, Container, Foil Seal",
      images: [product1a,product1b,product1c,product1d,product1e,product1f,product1g],
      price: "",
      types: {  
        "PressureA35.5 100pcs": 90,
        "PressureA42 100pcs": 130,
        "Induction26.5 100pcs":95,
        "Induction35.8 100pcs":115,
        "Induction 42 100pcs":170,
        "Induction 50.2 100pc":230,
        "Induction 56.6 100pcs":295,
        "Induction 62.5 100pcs":370,
        "Induction 67.7 100pcs":395,
        "Induction 72.6 100pcs ":415,
        "Induction 88 50pcs":300,
       
  
      }

      ,multipliers: {
    "1000pcs": 1,         
  }
      ,description:`
  `
      
  ,QuantityNote: ""
    },
  
  
  
  //2
    {
    name: " High Quality Pressure Seal Liner",
    images: [product81a],
    price:"",
    types: {
"35.5mm for 38mm Cap": 0,
"42mm for 43mm Cap": 0
    },
    multipliers: {
    "1000pcs": 1,         
  },
    description: `The POF heat shrink film is a non-toxic, eco-friendly multi-layer co-extruded film that offers high transparency, flexibility, durability, and tear resistance. Utilizing heat shrink technology, the film tightly wraps around products, providing comprehensive protection against moisture, dust, and impact. Compared to PVC shrink film, POF film features superior low-temperature resistance, ensuring it does not become brittle in cold conditions. Its high toughness makes it suitable for packaging irregularly shaped products, such as figurines, toys, and uniquely shaped items.`,
    QuantityNote: "1000 pieces/Bundle per Quantity",
  },



//3
//productfirstline





];

function Liners({ addToCart, searchQuery = "", overrideData }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  // ✅ Flexible source of products
  const itemsToShow = overrideData || products;

  // ✅ Apply search if no overrideData is provided
  const filteredItems = overrideData
    ? itemsToShow
    : itemsToShow.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}> {/* vacant */} </h2>
      <div className="product-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((product, index) => (
            <div className="product-card" key={index}>
              <img
                src={product.images[0]}
                alt={product.name}
                onClick={() => handleProductClick(product)}
                className="product-image"
              />
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>   
              <button
                onClick={() => handleProductClick(product)}
                className="product-button"
              >
                View Product
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No products match your search.</p>
        )}
      </div>

      <ProductModalWithPieces
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        product={selectedProduct}
        addToCart={addToCart}
      />
    </div>
  );
}

export default Liners;
