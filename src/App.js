import { useState } from "react";

import Container from "./components/Container";
import AppBar from "./components/AppBar";
import FilterMenuBar from "./components/FilterMenuBar";
import LocationModal from "./components/LocationModal";
import ShoppingCart from "./components/ShoppingCart";
import FoodCardList from "./components/FoodCardList";

const FOODS = [
  {
    name: "Roasted Chicken with Scrambled Egg",
    rating: 4.5,
    price: 35_000,
  },
  {
    name: "Roasted Chicken with Scrambled Egg",
    rating: 3.5,
    price: 35_000,
  },
  {
    name: "Roasted Chicken with Scrambled Egg",
    rating: 2,
    price: 35_000,
  },
];

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [location, setLocation] = useState("Kulina");
  const [dateSelected, setDateSelected] = useState(new Date());
  const [cartItems, setCartItems] = useState([]);

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const changeLocation = (loc) => {
    setLocation(loc);
  };

  const addItems = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const changeDateSelected = (date) => {
    setDateSelected(date);
  };

  return (
    <div className="App">
      <Container>
        {/* Appbar */}
        <AppBar location={location} handleOpenModal={toggleModal} />
        <div style={{ width: "100%", height: "138px" }}></div>

        {/* FilterMenuBar */}
        <FilterMenuBar date={dateSelected} changeDate={changeDateSelected} />

        {/* FoodCard List */}
        <FoodCardList
          items={FOODS}
          handleAddItem={addItems}
          date={dateSelected}
        />

        {/* Fixed Cart */}
        <ShoppingCart items={cartItems} />
        {/* prevent overlap between shopping cart and food card */}
        {cartItems.length > 0 && (
          <div style={{ width: "100%", height: "50px" }}></div>
        )}
      </Container>
      <LocationModal
        open={openModal}
        handleCloseModal={toggleModal}
        changeLocation={changeLocation}
      />
    </div>
  );
}

export default App;
