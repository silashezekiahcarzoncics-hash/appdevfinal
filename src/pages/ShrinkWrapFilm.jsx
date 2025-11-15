//src\pages\ShrinkWrapFilm.jsx


import React, { useState } from "react";
import ProductModalWithPieces from "../components/ProductModalv2";
import "../pages/ProductGrid.css";


import product41a from "../assets/blank_image.jpg";
import product42a from "../assets/blank_image.jpg";
import product42b from "../assets/blank_image.jpg";
import product42c from "../assets/blank_image.jpg";
import product42d from "../assets/blank_image.jpg";
import product42e from "../assets/blank_image.jpg";
import product42f from "../assets/blank_image.jpg";
import product42g from "../assets/blank_image.jpg";
import product42h from "../assets/blank_image.jpg";
import product42i from "../assets/blank_image.jpg";
import product43a from "../assets/blank_image.jpg";
import product43b from "../assets/blank_image.jpg";


export const products = [

//1
{
    name: "Premium Shrinkable Film Cap Seal 43mm-82mm"
   ,images: [product41a]
   ,price: ""
   ,types: {
 "43mm clear": 0,
"43mm white": 0,
"43mm Clear w/ black print": 0,

      
    }

 ,multipliers: {
    "1000pcs": 1,         
  }
   ,description:`Shrink wrap film is a heat-shrinking material used to tightly cover and protect items. It's like a snug, transparent layer that keeps things safe and secure, commonly used for packaging and shipping goods.

PVC Shrinkable Plastic Sealer Tape - Advantages and benefits:
-Impeccable Adhesion
-Versatile Application
-Crystal-Clear Transparency
-Efficient Heat Activation
-Weather-Resistant Shield
-Eco-Friendly Design
-Cost-Effective Excellence

Descriptions:
-High quality shrink film;
-Made of PVC plastic 35-40 microns;
-Has a shrinkable property and creases as natural appearance but eliminate upon shrinking;
-Pre-cut and ready to use seal;
-Use to seal the container;
- Made from PVC plastic;
- Transparent in color;
- Can use blower or heat gun in appropriate heat according to thickness of plastic film;
-Please check the circumference and measurements indicated in photo before placing an order;
Note: Allow +/- 1-2% difference as these products are being counted manually.`
   ,QuantityNote: ""
   
}
,
//2
{
    name: "Shrinkable Film Cap Seal for Microwavable Round and Rectangular Tub Containers"
   ,images: [product42a,product42b,product42c,product42d,product42e,product42f,product42g,product42h,product42i]
   ,price: ""
   ,types: {
    "190x40 Clear 40mics": 0,
"190x40 Clear 30mics": 0,
"190x40 Yellow": 0,
"190x40 Red": 0,

      
    }

 ,multipliers: {
    "1000pcs": 1,
    
    
                
  }
   ,description:`Product Description`
   ,QuantityNote: ""
   
}
,

//3
{
    name: "Shrinkable Film Cap Seal & Induction for Jerry's can"
   ,images: [product43a,product43b]
   ,price: ""
   ,types: {
    "Seal Clear ": 0,
"Seal Black ": 0,
"Seal Red ": 0,

    }

 ,multipliers: {
    "1000pcs": 1,
                
  }
   ,description:`Product Description`
   ,QuantityNote: ""
   
}


];

function ShrinkWrapFilm({ addToCart, searchQuery = "", overrideData }) {
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

      <ProductModalWithPieces
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        product={selectedProduct}
        addToCart={addToCart}
      />
    </div>
  );
}

export default ShrinkWrapFilm;
