export default function Skills() {
  const skills = ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Git & GitHub"];

  return (
    <section id="skills" className="bg-burgundy text-ivory py-16 px-8">
      <h2 className="text-3xl font-bold text-gold text-center mb-8">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <span key={index} className="border border-gold px-5 py-2 rounded-full text-lg">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}