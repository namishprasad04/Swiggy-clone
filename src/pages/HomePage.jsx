import Category from "../components/Category";
import OnlineDelivery from "../components/OnlineDelivery";
import TopResturants from "../components/TopResturants";
import Footer from "../components/Footer"
export default function HomePage() {
  return (
    <>
      <Category />
      <TopResturants />
      <OnlineDelivery />
      <Footer/>
    </>
  );
}
