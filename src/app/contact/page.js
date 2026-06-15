'use client';

export default function Contact() {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Ricardo's Contact */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Bryan Hyacinth B. Narte.</h2>
          <p><strong>Email:</strong> bryanhyacinth.narte@gmail.com</p>
          <p><strong>Mobile:</strong> +63 9207847507</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/bryannarte" target="_blank" className="text-blue-500 hover:underline">github.com/ricardoabao</a></p>
          <p><strong>Facebook:</strong> <a href="#" className="text-blue-500 hover:underline">Bryan Hyacinth Narte</a></p>
        </div>

        {/* Joshua's Contact */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Mark Dapat</h2>
            <p><strong>Email:</strong> markdapat@gmail.com</p>
            <p><strong>Mobile:</strong> +63 9238157313</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/markdapat" target="_blank" className="text-blue-500 hover:underline">github.com/markdapat</a></p>
          <p><strong>LinkedIn:</strong> <a href="#" className="text-blue-500 hover:underline">Mark Dapat</a></p>
        </div>
      </div>
    </section>
  );
}