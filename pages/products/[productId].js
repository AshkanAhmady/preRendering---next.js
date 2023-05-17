import axios from "axios";
import { useRouter } from "next/router";

//this component is for faallback: blocking
const SingleProduct = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>price: {product.price}</p>
      <p>description: {product.description}</p>
    </div>
  );
};

export default SingleProduct;

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    `http://localhost:4000/products/${params.productId}`
  );

  return {
    props: {
      product: data,
    },
    revalidate: 2,
  };
}
