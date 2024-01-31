import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" bg-gray-300 p-4 sticky top-0 left-0 right-0 z-10">
      <div className=" container mx-auto flex items-center justify-center">
        <ul className="flex items-center justify-center gap-4">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/todos">
            <li>Todo</li>
          </Link>
          <Link href="/login">
            <li>Login</li>
          </Link>
          <Link href="/todolist">
            <li>TodoList</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
