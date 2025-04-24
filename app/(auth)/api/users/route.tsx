import { NextRequest, NextResponse } from "next/server";

// Sample user data type
type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

// Mock database of users
const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
  },
];

// GET handler to fetch all users
export async function GET(request: NextRequest) {
  console.log("url is", request.url);
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get("id"));

  if (id) {
    const user = users.find((user) => user.id === id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  }
  return NextResponse.json(users);
}

// POST handler to create new user
export async function POST(request: Request) {
  const body = await request.json();

  const newUser: User = {
    id: users.length + 1,
    name: body.name,
    email: body.email,
    role: body.role || "user",
  };

  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}

// PUT handler to update user
export async function PUT(request: Request) {
  const body = await request.json();
  const userIndex = users.findIndex((user) => user.id === body.id);

  if (userIndex === -1) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  users[userIndex] = { ...users[userIndex], ...body };
  return NextResponse.json(users[userIndex]);
}

// DELETE handler to remove user
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get("id"));

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const deletedUser = users.splice(userIndex, 1);
  return NextResponse.json(deletedUser[0]);
}
