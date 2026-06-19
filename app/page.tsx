"use client";

import { useState } from "react";
import SubjectCard from "@/components/SubjectCard";
import AddSubjectForm from "@/components/AddSubjectForm";
import { Subject } from "@/types/subject";

export default function Home() {
  const [subjects, setSubjects] = useState<Subject[]>([
    {
      id: "1",
      name: "MERN Stack",
      attended: 28,
      total: 35,
    },
    {
      id: "2",
      name: "Subject_2",
      attended: 20,
      total: 35,
    },
  ]);

  const addSubject = (
    name: string,
    attended: number,
    total: number
  ) => {
    const newSubject: Subject = {
      id: crypto.randomUUID(),
      name,
      attended,
      total,
    };

    setSubjects((prevSubjects) => [
      ...prevSubjects,
      newSubject,
    ]);
  };

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        Attendance Manager
      </h1>

      <AddSubjectForm onAddSubject={addSubject} />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
          />
        ))}
      </div>
    </main>
  );
}