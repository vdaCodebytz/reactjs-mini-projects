import { fetchImages } from "./Hooks/useFetchImages";
import { useGlobalContext } from "./context";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const { data, isLoading, isError, error } = fetchImages(searchTerm);

  if (isLoading) {
    return <h2 className="image-container">Loading...</h2>;
  }
  if (isError) {
    console.log(error);
    return <h2>Error</h2>;
  }

  return (
    <section className="image-container">
      {data.results
        ? data.results.map((item) => {
            return (
              <img className="img" src={item.urls.regular} key={item.id} />
            );
          })
        : data.map((item) => {
            return (
              <img className="img" src={item.urls.regular} key={item.id} />
            );
          })}
    </section>
  );
};
export default Gallery;
