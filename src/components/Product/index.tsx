import { FC } from "react";

type ProductProps = {
  title: string;
  price: number;
  image: string;
};

const Product: FC<ProductProps> = ({ title, price, image }) => {
  return (
    <div className="border border-[gray] rounded shadow-sm p-3 flex flex-col justify-between items-center">
      <img width="200px" height="200px" src={image} alt="product" />

      <div>
        <p>Title: {title}</p>
        <p>Price: {price}$</p>
      </div>
    </div>
  );
};

export default Product;
