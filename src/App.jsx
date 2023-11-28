import { useState } from "react";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import PopupBox from "./PopupBox";

function App() {
  const [item, setItem] = useState(null);

  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery setItem={setItem} />
      {item && <PopupBox item={item} setItem={setItem} />}
    </main>
  );
}

export default App;
