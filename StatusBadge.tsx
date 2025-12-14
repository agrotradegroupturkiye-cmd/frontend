interface Props { status: string; }
export default function StatusBadge({ status }: Props) {
  return <span className="px-2 py-1 rounded bg-gray-200">{status}</span>;
}
