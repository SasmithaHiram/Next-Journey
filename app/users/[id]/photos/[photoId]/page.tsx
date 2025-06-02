import React from "react";
interface Props {
  params: { id: number; photoId: number };
}
const PhtoDetailPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      <h1>PhtoDetail</h1>
      <h2>{id}</h2>
      <h2>{photoId}</h2>
    </div>
  );
};

export default PhtoDetailPage;
