import Image from "next/image";

export default function ProjectCard({ title, description, tech, image, imageAlt }) {
  return (
    <article className="card bg-white rounded-xl shadow-md overflow-hidden border border-indigo-100">
      <div className="relative h-44 bg-indigo-50">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-primary-700">{title}</h2>
        <p className="text-slate-600 mt-2 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((item) => (
            <span
              key={item}
              className="badge-indigo px-3 py-1 rounded-full text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
