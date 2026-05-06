import AddCompanyBtn from "./components/add-company-btn";
import Header from "./components/header";


export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyBtn/>
      <Header>Companies</Header>
    </main>
  );
}
