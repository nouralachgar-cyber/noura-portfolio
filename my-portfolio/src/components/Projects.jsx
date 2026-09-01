export default function Projects() {
  const myProjects = [
    { title: "Maladh Platform", desc: "An interactive web platform built with React and modern UI components.", tech: "React - Tailwind" },
    { title: "Nebras Coffee Shop", desc: "A clean and modern website design for a business showcase.", tech: "React - CSS" }
  ];

  return (
    <section id="projects" className="bg-ivory text-charcoal py-16 px-8">
      <h2 className="text-3xl font-bold text-burgundy text-center mb-10">Projects</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {myProjects.map((item, index) => (
          <div key={index} className="border border-gold/30 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-burgundy mb-2">{item.title}</h3>
            <p className="mb-4">{item.desc}</p>
            <span className="text-sm bg-ivory text-burgundy px-3 py-1 rounded border border-gold">{item.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}