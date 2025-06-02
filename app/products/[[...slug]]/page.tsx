import React from "react";

interface Props {
  params: { slug: string[] };
}
const ProductPage = ({ params: { slug } }: Props) => {
  return (
    <>
      <h1>ProductPage</h1>
      <h1>{slug}</h1>
    </>
  );
};

export default ProductPage;
