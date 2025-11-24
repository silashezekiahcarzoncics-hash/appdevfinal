// src/pages/Roll.jsx
import React, { useState } from "react";
import ProductModal from "../components/ProductModalv2"; 
import "../pages/ProductGrid.css";

//product1
import product1a from "../assets/SWR1.PNG";
import product1b from "../assets/SWR1.PNG";
import product1c from "../assets/SWR1.PNG";
import product1d from "../assets/SWR1.PNG";
import product1e from "../assets/SWR1.PNG";
import product1f from "../assets/SWR1.PNG";
import product1g from "../assets/SWR1.PNG";

//product2
import product2a from "../assets/SWR2.PNG";
import product2b from "../assets/SWR2.PNG";
import product2c from "../assets/SWR2.PNG";
import product2d from "../assets/SWR2.PNG";






/*
//1
//productfirstline
{
    name: ""
   ,images: []
   ,price: "58-330"
   ,types: {
    "2 inches": 58,
    "2.5 inches":65,
      
    }
   ,description:`...`
   ,QuantityNote: "..."
   
}
//productendline
,
*/


export const products = [

//1
//productfirstline
{
    name: " PVC PREMIUM TUBE ROLL WRAP SHRINKABLE PLASTIC SEAL/ SHRINK WRAP FILM (10yards) FOR CONTAINER & BOTTLE",
    images: [product1a, product1b,product1c,product1d,product1e,product1f,product1g],
    price: "",
    types: {
      "2 inches": 58,
      "2.5 inches":65
      
    }
,description:`Product Description`
,multipliers: {
    "1000pcs": 1,         
  }
,QuantityNote: "10 yards/Roll per Quantity",
},


//2
//productfirstline
{
    name: " PVC 5KGS Roll Shrink Wrap Plastic Packaging /Shrinkable Plastic Sealer Tape for Bottle Containers",
    images: [product2a,product2b,product1b,product1c,product2c,product2d,product1f,product1g],
    price: "",
    types: {
      "2 inches": 2890,
      "2.5 inches":2890,
      "3 inches": 2890,
    }
,description:
`Product Description`
,multipliers: {
    "5 KGS": 1,         
  } 

,QuantityNote: "5 kg / Roll per Quantity",
}





];// End line of productlisting

function Roll({ addToCart, searchQuery = "", overrideData }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  // Use overrideData if passed, else use local products
  const itemsToShow = overrideData || products;

  // Only filter when overrideData is not used
  const filteredItems = overrideData
    ? itemsToShow
    : itemsToShow.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}></h2>
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

      <ProductModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        product={selectedProduct}
        addToCart={addToCart}
      />
    </div>
  );
}

export default Roll;
