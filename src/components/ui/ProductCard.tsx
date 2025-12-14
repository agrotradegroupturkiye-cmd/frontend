interface ProductCardProps {
  product: { name: string; price: number };
}
export default function ProductCard({ product }: ProductCardProps) {
  return <div className="border p-2 rounded">{product.name} - ${product.price}</div>;
}
