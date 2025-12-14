interface TableProps {
  children: React.ReactNode;
}
export default function Table({ children }: TableProps) {
  return <table className="min-w-full border">{children}</table>;
}
