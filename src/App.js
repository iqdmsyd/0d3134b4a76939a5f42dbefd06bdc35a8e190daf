import AppBar from "./components/AppBar";
import Container from "./components/Container";
import FoodCard from "./components/FoodCard";
import HeaderText from "./components/HeaderText";

const FOODS = [
  {
    name: "Roasted Chicken with Scrambled Egg",
    rating: 4.5,
    price: 35_000,
  },
  {
    name: "Roasted Chicken with Scrambled Egg",
    rating: 4.5,
    price: 35_000,
  },
  {
    name: "Roasted Chicken with Scrambled Egg",
    rating: 4.5,
    price: 35_000,
  },
];

function App() {
  return (
    <div className="App">
      <Container>
        <AppBar location="Tokopedia Tower" />
        <div style={{ width: "100%", height: "50px" }}></div>
        <HeaderText size={14}>Kamis, 22 April 2021</HeaderText>
        {FOODS.map((food, idx) => (
          <FoodCard key={idx} food={food} />
        ))}
      </Container>
    </div>
  );
}

export default App;
