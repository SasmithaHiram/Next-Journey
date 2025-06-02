import React from "react";
import UserTable from "./UserTable";
interface Props {
  searchParams: {sortOrder: string}
}
const UserPage = ({searchParams: {sortOrder}}: Props) => {
  console.log(sortOrder);
  
  return (
    <>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UserPage;
