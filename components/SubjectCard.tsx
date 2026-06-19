import { Subject } from "@/types/subject";
import {
  calculateAttendance,
  classesNeededFor75,
} from "@/lib/calculations";

interface SubjectCardProps {
  subject: Subject;
}

export default function SubjectCard({
  subject,
}: SubjectCardProps) {
  const attendance = calculateAttendance(
    subject.attended,
    subject.total
  );

  const needed = classesNeededFor75(
    subject.attended,
    subject.total
  );

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-bold">
        {subject.name}
      </h2>

      <p>
        {subject.attended}/{subject.total}
      </p>

      <p>Attendance: {attendance}%</p>

      {attendance < 75 && (
        <p>
          Need {needed} more classes to reach
          75%
        </p>
      )}
    </div>
  );
}