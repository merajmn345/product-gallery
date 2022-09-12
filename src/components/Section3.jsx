function Section3(props) {
  if (props.imgUrl) {
    return (
      <img src={props.imgUrl} alt="product" width="200px" height="200px" />
    );
  }
  return null;
}
export default Section3;
