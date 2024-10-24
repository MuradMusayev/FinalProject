import Categories from "./components/categories/page";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Categories/>
      <Footer />
    </>
  );
}
