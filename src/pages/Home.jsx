import BestSellings from "../components/BestSellings";
import CatalogInfo from "../components/CatalogInfo";
import Collection from "../components/Collection";
import CollectionList from "../components/CollectionList";
import FeatureCards from "../components/FeatureCards";
import FiltersBar from "../components/FilterBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SupportSection from "../components/SupportSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FiltersBar />
      <Hero />
      <Collection />
      <SupportSection />
      <FeatureCards />
      <BestSellings />
      <CatalogInfo />
      <CollectionList />
      <Footer />
    </div>
  );
};

export default Home;
