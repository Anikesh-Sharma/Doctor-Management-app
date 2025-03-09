"use client";

import React from "react";
import DoctorData from "@/app/_components/DoctorData";

export default function DoctorsPage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Doctors</h1>
      {/* This component shows the doctor cards as seen on the main page */}
      <DoctorData />
    </main>
  );
}
