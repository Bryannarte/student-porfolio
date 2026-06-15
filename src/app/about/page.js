'use client';

export default function About() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold text-center mb-12">About Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Ricardo's Profile */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Bryan Hyacinth B. Narte.</h2>
          <p className="mb-3"><strong>Personal Background:</strong> Hardworking student passionate about technology, troubleshooting, and creative design.</p>
          <p className="mb-3"><strong>Educational Background:</strong> Currently student of BS Computer Science.</p>
          <p className="mb-3"><strong>Career Goals:</strong> To become a full-stack developer and IT specialist.</p>
          <p><strong>Interests & Hobbies:</strong> Gaming, video editing, picture editing, programming.</p>
        </div>

        {/* Joshua's Profile */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Mark Dapat</h2>
          <p className="mb-3"><strong>Personal Background:</strong> Detail-oriented developer who building websites.</p>
          <p className="mb-3"><strong>Educational Background:</strong> BS Computer Science student with strong foundation in programming.</p>
          <p className="mb-3"><strong>Career Goals:</strong> To work as a professional web developer.</p>
          <p><strong>Interests & Hobbies:</strong> Coding, gaming, and programming.</p>
        </div>
      </div>
    </section>
  );
}