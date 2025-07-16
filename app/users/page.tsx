import UserTable from "./UserTable";

interface User {
  id: number;
  name: string;
}
const UserPage = async () => {
  
  return (
    <>
    <h1></h1>
      <UserTable/>
    </>
  );
};

export default UserPage;
