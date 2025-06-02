import Link from "next/link";
import ProdcutCard from "./components/ProdcutCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href={"/users/new"}>Create User</Link>
      <ProdcutCard/>
    </main>
  );
}
