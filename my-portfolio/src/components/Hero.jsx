export default function Hero() {
  return (
    <section className="bg-ivory text-charcoal min-h-[70vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-extrabold text-burgundy mb-4">Web Developer</h1>
      <p className="text-xl max-w-xl mb-6">Building modern, responsive, and user-friendly web applications.</p>
      <a href="#projects" className="bg-gold text-burgundy font-bold px-6 py-3 rounded-md hover:opacity-90 transition">
        View My Work
      </a>
    </section>
  );
}
