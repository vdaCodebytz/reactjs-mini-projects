import { useQuery } from "@tanstack/react-query";
import customFetch from "../customFetch";
import { useGlobalContext } from "../context";

export const fetchImages = (searchTerm) => {
  const { formSubmit } = useGlobalContext();
  const result = useQuery({
    queryKey: ["images", formSubmit],
    queryFn: async () => {
      const response = await customFetch.get(
        searchTerm === ""
          ? "/photos/random?count=15"
          : `/search/photos?page=1&per_page=15&query=${searchTerm}`
      );
      return response.data;
    },
  });

  const { data, isLoading, isError, error } = result;
  return { data, isLoading, isError, error };
};
