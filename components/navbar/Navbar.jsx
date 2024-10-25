import NavbarLogo from "@/icons/NavbarLogo";
import Button from "./Button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-5">
      
      <Link 
        className="cursor-pointer"
        href="/"
      >
        <NavbarLogo />
      </Link>
      
      <Button />
      
    </nav>
  )
}
