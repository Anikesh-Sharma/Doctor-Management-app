"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Dashboard from "@/app/_components/Dashboard";

// Separate component so that useSearchParams is inside a Suspense boundary.
function DashboardPageContent() {
  const searchParams = useSearchParams();
  const userType = searchParams.get("userType") || "patient";

  // Simulated appointment data; replace with your API or localStorage data as needed.
  const appointments =
    userType === "doctor"
      ? [
          {
            id: 1,
            date: new Date("2025-03-15T09:00:00"),
            time: "09:00 AM",
            doctorName: "Dr. John Doe",
            title: "Appointment with Patient A",
            patientName: "Alice Johnson",
            status: "confirmed",
            notes: "Discuss lab results",
          },
          {
            id: 2,
            date: new Date("2025-03-20T11:00:00"),
            time: "11:00 AM",
            doctorName: "Dr. John Doe",
            title: "Appointment with Patient B",
            patientName: "Bob Smith",
            status: "confirmed",
          },
          {
            id: 3,
            date: new Date(new Date().setHours(14, 30, 0, 0)),
            time: "02:30 PM",
            doctorName: "Dr. John Doe",
            title: "Urgent Consultation",
            patientName: "Charlie Brown",
            status: "pending",
          },
        ]
      : [
          {
            id: 1,
            date: new Date("2025-03-12T10:00:00"),
            time: "10:00 AM",
            doctorName: "Dr. Jane Smith",
            title: "Consultation with Dr. Jane Smith",
            type: "check-up",
            status: "confirmed",
          },
          {
            id: 2,
            date: new Date("2025-03-18T14:00:00"),
            time: "02:00 PM",
            doctorName: "Dr. Mark Brown",
            title: "Follow-up with Dr. Mark Brown",
            type: "follow-up",
            status: "confirmed",
          },
          {
            id: 3,
            date: new Date(new Date().setHours(15, 0, 0, 0)),
            time: "03:00 PM",
            doctorName: "Dr. Jane Smith",
            title: "Annual Physical",
            type: "physical",
            status: "pending",
            notes: "Patient feeling dizzy",
          },
        ];

  return <Dashboard appointments={appointments} userType={userType} />;
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading Dashboard...</div>}>
      <DashboardPageContent />
    </Suspense>
  );
}
