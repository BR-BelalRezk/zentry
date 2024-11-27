import Button from "../ui/Button";
import { TiLocationArrow } from "react-icons/ti";

export default function ProductsButton({ className }: { className: string }) {
  return (
    <Button
      id="product-btn"
      title="Products"
      rightIcon={<TiLocationArrow />}
      className={`bg-blue-50  items-center justify-center gap-1 ${className}`}
    />
  );
}
