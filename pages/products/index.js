import axios from "axios";
import Link from "next/link";

const Products = ({ products }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Product list</h1>
      {products.map((product) => {
        return (
          <h3 key={product.id}>
            title: {product.title} - price: {product.price}
          </h3>
        );
      })}
    </div>
  );
};

export default Products;

export async function getStaticProps() {
  const { data } = await axios.get("http://localhost:4000/products");

  return {
    props: {
      products: data,
    },
    revalidate: 2
  };
}
