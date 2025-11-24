// src/pages/Roll.jsx
import React, { useState } from "react";
import ProductModal from "../components/ProductModalv2"; 


import product1a from "../assets/blank_image.jpg";
import product1b from "../assets/blank_image.jpg";
import product2a from "../assets/blank_image.jpg";








export const products = [
  

//1
{
    name: "Premium Sando Plastic Bag in Different  Sizes"
   ,images: [product1a,product1b]
   ,price: ""
   ,types: {
    "Jumper Mini":207,
    "Jumper Tiny":245,
    "Jumper Medium":440,
    

      
    }

    ,multipliers: {
    "1000pcs": 1,         
  }
   ,description:` bla bla`
   ,QuantityNote: "1000 pcs per quantity"
   
}
,
//2
{
    name: "yap yap"
   ,images: [product2a]
   ,price: ""
   ,types: {
    "8x11\" 1000pcs": 110,
    "10x14\" 1000pcs": 160,
    "12x18\" 1000pcs": 313,
    "14x20\" 1000pcs": 431,
   
      
    }
     ,multipliers: {
    "1000pcs": 1,         
  }
   ,description:`bla bla`


 ,QuantityNote: "1000pcs per quantity"
   
}



];

function PackagingSupplies({ addToCart, searchQuery = "", overrideData }) {
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

export default PackagingSupplies;
