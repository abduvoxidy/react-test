import Product from "./components/Product";
import { ProductType } from "./global.types";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "./hooks/useDebounce";
import Loader from "./components/ui/loader";
import { useRef, ChangeEvent, FC } from "react";
import { Suspense } from "react";

const App: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState<ProductType[]>([]);
  const [loader, setLoader] = useState(false);

  const debouncedValue = useDebounce(searchText, 1000);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setItems(res.data.products);
    });
  }, []);

  useEffect(() => {
    if (debouncedValue) {
      setLoader(true);

      axios
        .get(`https://dummyjson.com/products/search?q=${debouncedValue}`)
        .then((res) => {
          setItems(res.data.products);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  }, [debouncedValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="container m-auto max-w-[1200px]">
        <input
          ref={inputRef}
          placeholder="Search products"
          className="border p-3 w-1/2 my-3"
          value={searchText}
          type="text"
          onChange={handleChange}
        />

        <div className="grid grid-cols-4 gap-3">
          {loader ? (
            <Loader />
          ) : (
            items.map((el: ProductType) => (
              <Product title={el.title} price={el.price} image={el.thumbnail} />
            ))
          )}
        </div>
      </div>
    </Suspense>
  );
};
export default App;
