import React, { useEffect, useState } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const [showImage, setShowImage] = useState(false);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  useEffect(() => {
    const url = "https://api.npoint.io/d8c0635b132f2141a5ed";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  if (!products.length) {
    return <h1>Loading........</h1>;
  }

  return (
    <div className="d-flex">
      <Section1
        products={products}
        setProducts={setProducts}
        setSelectedProduct={setSelectedProduct}
        setShowImage={setShowImage}
        setShouldUpdate={setShouldUpdate}
      />
      <Section2
        selectedProduct={selectedProduct}
        setShowImage={setShowImage}
        setShouldUpdate={setShouldUpdate}
        shouldUpdate={shouldUpdate}
        setProducts={setProducts}
        products={products}
      />
      <Section3 imgUrl={showImage ? selectedProduct.imgUrl : null} />
    </div>
  );
}
export default App;

// https://api.npoint.io/d8c0635b132f2141a5ed
