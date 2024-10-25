import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-5 px-8">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* Logo Placeholder */}
        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
        <h1 className="text-2xl font-semibold">bg.removal</h1>
      </div>

      <Button />
      
    </nav>
  )
}
