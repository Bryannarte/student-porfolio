'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="text-center py-16">
      <p className="text-blue-600 font-medium mb-2">Double Portfolio</p>
      <h1 className="text-4xl font-bold mb-3">Two Creators, One Vision</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-16">
        A shared showcase of technical expertise and creative storytelling from<br />
        <strong>Bryan and Mark</strong>
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Partner 1 */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-blue-100 shadow-lg mb-4">
            <Image
              src="/profile.jpg"
              alt="Bryan Hyacinth B. Narte"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-xl font-bold">Bryan Hyacinth B. Narte.</h2>
          <p className="text-sm text-gray-600 mt-1 max-w-xs">
             Website Developer & BSCS Student<br />
            • Graphic Design • Video & Photo Manipulation
          </p>
        </div>

        {/* Partner 2 */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-blue-100 shadow-lg mb-4">
            <Image
              src="/joshua.jpg"
              alt="Mark Dapat"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-xl font-bold">Mark Dapat</h2>
          <p className="text-sm text-gray-600 mt-1 max-w-xs">
            Bachelor of Science in Computer Science<br />
            • Web Development • UI/UX Design • Problem Solving
          </p>
        </div>
      </div>
    </section>
  );
}