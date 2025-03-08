"use client"; // if you need client-side interactivity

import Hero from "./_components/Hero";
import DoctorData from "./_components/DoctorData";

export default function HomePage() {
  return (
    <main className="p-4">
      {/* You can include a Hero banner, search bar, doctor list, etc. */}
      <Hero />
      <DoctorData />
    </main>
  );
}
