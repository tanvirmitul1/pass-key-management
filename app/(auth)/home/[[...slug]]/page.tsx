"use client";
import React from "react";

interface Address {
  street: string;
  city: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}

const Page: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        setError(null);
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: User[] = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("Invalid data: Expected a non-empty array of users");
        }

        setUsers(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Dummy User Data
      </h1>

      {error && (
        <div className="text-red-600 font-semibold text-center mb-4">
          Error: {error}
        </div>
      )}

      {loading && (
        <div className="text-gray-600 italic text-center mb-4">Loading...</div>
      )}

      {!loading && !error && (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <p>
                <strong>Name:</strong> {user.name || "Unknown Name"}
              </p>
              <p>
                <strong>Email:</strong> {user.email || "Unknown Email"}
              </p>
              <p>
                <strong>Address:</strong>{" "}
                {user.address
                  ? `${user.address.street || ""}, ${user.address.city || ""}`
                  : "Unknown Address"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
