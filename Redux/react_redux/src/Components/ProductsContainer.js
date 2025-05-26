import { useDispatch, useSelector } from "react-redux";
import { fetchProduts } from "./Redux";
import { useEffect } from "react";

function ProductContainer() {

    const productData = useSelector((state) => state.product);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduts());
  }, []);

  return (
    <div>
      {productData.loading && <p>loading...</p>}
      {productData.error && <p>{productData.error}</p>}

      <ul>
        {productData.products.map((product) => (
          <li>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     productData: state.product,
//   };
// };

// const mapStateToDisptch = (dispatch) => {
//   return {
//     fetchProduts: () => dispatch(fetchProduts()),
//   };
// };

//export default connect(mapStateToProps, mapStateToDisptch)(ProductContainer);
export default ProductContainer;
