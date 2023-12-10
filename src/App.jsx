import PricingCard from "./component/pricingcard/pricingcard";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.prices}>
      <PricingCard
        label="Start-Up"
        price="Free"
        image="/image/bike3.jpg"
        imageAlt="Moving bike with clouds"
      />
      <PricingCard
        label="Pro"
        price="49$"
        duration="/Year"
        image="/image/bike2.jpeg"
        imageAlt="Moving bike with clouds"
      />
      <PricingCard
        label="Enterprise"
        price="99$"
        image="/image/bike1.jpeg"
        imageAlt="Moving bike with clouds"
      />
    </div>
  );
}
export default App;
