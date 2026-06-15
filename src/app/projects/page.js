'use client';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "  inventory Management System",
      description: "A system to manage items and their prices.",
      tech: "PHP, MySQL, HTML, CSS",
      image: "/InventorySystemImage.jpg",
      owner: "Bryan Narte"
    },
    {
      title: " Selling Coffee Website",
      description: "List of yummy and healthy variaties of coffees .",
      tech: "Photoshop, Illustrator, Canva",
      image: "/SellingCoffeeWebsite.jpg",
      owner: "Bryan Narte"
    },
    {
      title: "Crud App",
      description: "List of gender and information of users.",
      tech: "HTML, CSS, JavaScript",
      image: "/project3.jpg",
      owner: "Bryan Narte"
    },
    {
      title: "E-Commerce Website",
      description: "Online store with product listing, cart, and checkout features.",
      tech: "Next.js, React, Tailwind CSS, Firebase",
      image: "/project1.jpg",
      owner: "Mark Dapat"
    },
    {
      title: "Task Manager App",
      description: "Web app to organize daily tasks, set deadlines, and track progress.",
      tech: "JavaScript, LocalStorage, CSS",
      image: "/project2.jpg",
      owner: "Mark Dapat"
    },
    {
      title: "Personal Blog Platform",
      description: "Simple blog where users can write, edit, and publish articles.",
      tech: "Next.js, Markdown, Tailwind",
      image: "/project3.jpg",
      owner: "Mark Dapat"
    }
  ];

  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold text-center mb-12">Our Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
            <Image
              src={proj.image}
              alt={proj.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl font-bold text-blue-600">{proj.title}</h5>
              <p className="text-sm text-gray-600 mt-1">By {proj.owner}</p>
              <p className="mt-2 text-gray-700">{proj.description}</p>
              <p className="mt-2 text-sm"><strong>Technologies:</strong> {proj.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}