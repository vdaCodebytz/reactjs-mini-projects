import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <>
      <ThemeToggle />
      <h1 className="title">Unsplash Images</h1>
      <SearchForm />
      <Gallery />
    </>
  );
};
export default App;
