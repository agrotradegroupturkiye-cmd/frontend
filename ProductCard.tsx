interface Product { name: string; price: number; }
interface Props { product: Product; }
export default function ProductCard({ product }: Props) {
  return <div className="border p-2 rounded">{product.name} - ${product.price}</div>;
}
