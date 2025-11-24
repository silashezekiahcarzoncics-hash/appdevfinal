//\src\pages\Home.jsx
import React, { useState,useEffect } from "react";
import "./PageStyles.css"; 
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ShrinkWrapFilm from "./ShrinkWrapFilm";
import Roll from "./Roll";
import PackagingSupplies from "./PackagingSupplies";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import CartSidebar from "../components/CartSideBar";
import useCart from "./UseCart";
import Liners from "./Liners";
import Others from "./Others";




// Import product lists
import { products as shrinkProducts } from "./ShrinkWrapFilm";  //H
import { products as rollProducts } from "./Roll";
import { products as linersProducts } from "./Liners";
import { products as packagingProducts } from "./PackagingSupplies";
import { products as othersProducts } from "./Others";

import ProductModal from "../components/ProductModal";
import ProductModalV2 from "../components/ProductModalv2";

function Home() {
   useEffect(() => {
    document.body.classList.add("home-bg");
    return () => {
      document.body.classList.remove("home-bg");
    };
  }, []);

  const [mainTab, setMainTab] = useState("home");
  const [selectedTab, setSelectedTab] = useState("ShrinkWrapFilm"); //H
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [modalType, setModalType] = useState(""); // "v1" or "v2"

  const {
    cart,
    addToCart,
    handleQuantityChange,
    handleRemove,
    computeSubtotal,
  } = useCart();

  const allProducts = [
    ...shrinkProducts.map((p) => ({ ...p, category: "ShrinkWrapFilm" })), //H
    ...rollProducts.map((p) => ({ ...p, category: "Roll" })),
    ...linersProducts.map((p) => ({ ...p, category: "Liners" })),
    ...packagingProducts.map((p) => ({ ...p, category: "PackagingSupplies" })),
    ...othersProducts.map((p) => ({ ...p, category: "Others" })),
  ];

  const filteredResults = searchQuery
    ? allProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

    //const openModal = (product) => {
      //const usesV2 = product.category === "PackagingSupplies";
      //setModalType(usesV2 ? "v2" : "v1");
      //setModalProduct(product);
    //};

  const closeModal = () => {
    setModalProduct(null);
    setModalType("");
  };

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <TopNavbar
        onViewCart={() => setShowCart((prev) => !prev)}
        selectedMainTab={mainTab}
        setSelectedMainTab={setMainTab}
        cart={cart}
      />

      {mainTab === "home" && (
        <>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Navbar onSelectTab={setSelectedTab} selectedTab={selectedTab} />

          {filteredResults ? (
            <>
              <h2>Search Results for "{searchQuery}"</h2>
              {filteredResults.length === 0 ? (
                <p>No products found.</p>
              ) : (
                <>
                  {["ShrinkWrapFilm", "Roll", "Liners", "PackagingSupplies", "Others"].map(  //H
                    (category) => {
                      const categoryProducts = filteredResults.filter(
                        (p) => p.category === category
                      );
                      if (categoryProducts.length === 0) return null;

                      const props = {
                        addToCart,
                        searchQuery,
                        overrideData: categoryProducts,
                      };

                      return ( //H
                        <div key={category}>
                          <h3>{category}</h3>
                          {category === "ShrinkWrapFilm" && <ShrinkWrapFilm {...props} />} 
                          {category === "Roll" && <Roll {...props} />}
                          {category === "Liners" && <Liners {...props} />}
                          {category === "PackagingSupplies" && (
                            <PackagingSupplies {...props} />
                          )}
                          {category === "Others" && <Others {...props} />}
                        </div>
                      );
                    }
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {selectedTab === "ShrinkWrapFilm" && ( //H
                <ShrinkWrapFilm addToCart={addToCart} searchQuery={searchQuery} />
              )}
              {selectedTab === "Roll" && (
                <Roll addToCart={addToCart} searchQuery={searchQuery} />
              )}
              {selectedTab === "Liners" && (
                <Liners addToCart={addToCart} searchQuery={searchQuery} />
              )}
              {selectedTab === "PackagingSupplies" && (
                <PackagingSupplies
                  addToCart={addToCart}
                  searchQuery={searchQuery}
                />
              )}
              {selectedTab === "Others" && (
                <Others addToCart={addToCart} searchQuery={searchQuery} />
              )}
            </>
          )}
        </>
      )}

      {mainTab === "contact" && <Contact />}
      {mainTab === "about" && <AboutUs />}

      {showCart && (
        <CartSidebar
          cart={cart}
          onQtyChange={handleQuantityChange}
          onRemove={handleRemove}
          computeSubtotal={computeSubtotal}
           onClose={() => setShowCart(false)}  //experiment
        />
      )}

      {/* Modal */}
      {modalProduct && modalType === "v1" && (
        <ProductModal
          product={modalProduct}
          onClose={closeModal}
          addToCart={addToCart}
        />
      )}
      {modalProduct && modalType === "v2" && (
        <ProductModalV2
          product={modalProduct}
          onClose={closeModal}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}

export default Home;
