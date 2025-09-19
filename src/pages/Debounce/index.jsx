import { useEffect, useState, useRef } from "react";

function Debounce() {
  const [product, setProduct] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const timeoutId = useRef();

  useEffect(() => {
    fetch(`https://api01.f8team.dev/api/products?q=${searchValue}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result.data.items);
      });
  }, []);

  useEffect(() => {
    if (!searchValue) return;
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      fetch(`https://api01.f8team.dev/api/products?q=${searchValue}`)
        .then((res) => res.json())
        .then((result) => {
          setProduct(result.data.items);
        });
    }, 700);
  }, [searchValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search product..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ul>
        {product.map((product) => (
          <li key={product.id}>
            {product.id}. {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Debounce;
