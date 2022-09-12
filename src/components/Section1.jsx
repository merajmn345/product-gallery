import { ListGroup, Button } from "react-bootstrap";

function Section1(props) {
  const deleteProduct = (product) => {
    const remainingProducts = props.products.filter((pro) => {
      return pro.name !== product.name;
    });
    props.setProducts(remainingProducts);
  };
  return (
    <>
      <ListGroup>
        {props.products.map((product) => {
          return (
            <ListGroup.Item
              key={product.name}
              onClick={() => {
                props.setSelectedProduct(product);
                props.setShowImage(false);
                props.setShouldUpdate(false);
              }}
            >
              {product.name}
              <Button
                variant="danger"
                className="ml-4"
                onClick={() => {
                  deleteProduct(product);
                }}
              >
                Delete
              </Button>

              <Button
                variant="warning"
                className="ml-5"
                onClick={(e) => {
                  e.stopPropagation();
                  props.setShouldUpdate(true);
                }}
              >
                Update
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}
export default Section1;
