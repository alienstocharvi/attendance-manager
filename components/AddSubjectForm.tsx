"use client";

import { useState } from "react";

interface AddSubjectFormProps {
  onAddSubject: (
    name: string,
    attended: number,
    total: number
  ) => void;
}

export default function AddSubjectForm({
  onAddSubject,
}: AddSubjectFormProps) {
  const [name, setName] = useState("");
  const [attended, setAttended] = useState("");
  const [total, setTotal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !attended || !total) return;

    onAddSubject(
      name,
      Number(attended),
      Number(total)
    );

    setName("");
    setAttended("");
    setTotal("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-lg p-4 mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        Add Subject
      </h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Subject Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Attended Classes"
          value={attended}
          onChange={(e) => setAttended(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Total Classes"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="border rounded p-2"
        >
          Add Subject
        </button>
      </div>
    </form>
  );
}