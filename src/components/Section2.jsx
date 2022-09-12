import { useState } from "react";
import { Button } from "react-bootstrap";

function Section2(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function submitForm(e) {
    e.preventDefault();
    const previousData = [...props.products];
    const product = previousData.find(
      (pro) => pro.name === props.selectedProduct.name
    );
    if (product) {
      product.name = name;
      product.price = price;
      props.setProducts(previousData);
    }
  }

  if (!props.selectedProduct) {
    return <div style={{ color: "gray" }}>Please select Product first</div>;
  }

  if (props.shouldUpdate) {
    return (
      <form onSubmit={submitForm}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="price"
          value={price}
          type="number"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <Button variantt="secondary" type="submit" onClick={() => {}}>
          Update Product
        </Button>
      </form>
    );
  }

  return (
    <div className="d-flex flex-column">
      <h1>Details for {props.selectedProduct.name}</h1>
      <h4>Price: {props.selectedProduct.price}</h4>
      <Button
        variant="primary"
        onClick={() => {
          props.setShowImage(true);
        }}
      >
        Photo Dhikaho
      </Button>{" "}
    </div>
  );
}
export default Section2;
