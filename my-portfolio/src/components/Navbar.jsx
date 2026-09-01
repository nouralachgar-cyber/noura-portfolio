export default function Navbar() {
  return (
    <nav className="bg-burgundy text-ivory p-5 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">Portfolio</h1>
      <ul className="flex gap-6 font-medium">
        <li><a href="#about" className="hover:text-gold transition">About</a></li>
        <li><a href="#projects" className="hover:text-gold transition">Projects</a></li>
        <li><a href="#skills" className="hover:text-gold transition">Skills</a></li>
        <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
      </ul>
    </nav>
  );
}