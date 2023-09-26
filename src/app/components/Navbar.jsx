import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-black  shadow-xl p-4">
      <ul className="flex justify-evenly text-2xl font-bold">
        <li>
          <Link
            className="hover:text-black hover:bg-white text-white shadow-white"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black hover:bg-white text-white shadow-white"
            href="/api/auth/signin"
          >
            Sign In
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black hover:bg-white text-white shadow-white"
            href="/api/auth/signout"
          >
            Sign Out
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black hover:bg-white text-white shadow-white"
            href="/products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-black hover:bg-white text-white shadow-white"
            href="/addProduct"
          >
            Add Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}
