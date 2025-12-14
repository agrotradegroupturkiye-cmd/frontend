interface UserCardProps {
  user: { name: string };
}
export default function UserCard({ user }: UserCardProps) {
  return <div className="border p-2 rounded">{user.name}</div>;
}
