'use client';

export default function Skills() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold text-center mb-12">Our Skills</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Ricardo's Skills */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Ricardo's Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Programming:</strong> HTML, CSS, JavaScript, PHP</li>
            <li><strong>Frameworks:</strong> Bootstrap, Tailwind CSS</li>
            <li><strong>Databases:</strong> MySQL</li>
            <li><strong>Tools:</strong> Photoshop, Premiere Pro, VS Code, Hardware Troubleshooting</li>
          </ul>
        </div>

        {/* Joshua's Skills */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Joshua's Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Programming:</strong> HTML, CSS, JavaScript, Python, Java</li>
            <li><strong>Frameworks:</strong> Next.js, React, Tailwind CSS</li>
            <li><strong>Databases:</strong> MySQL, Firebase</li>
            <li><strong>Tools:</strong> Figma, Git, GitHub, VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
}