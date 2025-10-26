import { useUser } from '../contexts/UserContext';

export default function Dashboard() {
  const { user } = useUser();

  if (!user) {
    return <p>Please login to view your dashboard.</p>;
  }

  return (
    <div>
      <h2>User Dashboard</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Add shipment or order history here */}
    </div>
  );
}
