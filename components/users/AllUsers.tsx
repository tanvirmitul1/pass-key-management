// components/users/AllUsers.tsx
import React from "react";

type User = {
  id: number;
  email: string;
  name: string | null;
};

type AllUsersProps = {
  users: User[];
};

const AllUsers: React.FC<AllUsersProps> = ({ users }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded shadow-sm">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Name:</strong> {user.name || "No name provided"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
