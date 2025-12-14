interface User { name: string; }
interface Props { user: User; }
export default function UserCard({ user }: Props) {
  return <div className="border p-2 rounded">{user.name}</div>;
}
