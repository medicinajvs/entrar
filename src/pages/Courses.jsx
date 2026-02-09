import { MOCK_COURSES } from "../data/courses";

export default function Courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {MOCK_COURSES.map(course => (
        <div key={course.id} className="bg-white rounded-xl shadow-sm">
          <div
            className="h-32 flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: course.color }}
          >
            {course.specialty}
          </div>
          <div className="p-4">
            <h3 className="font-bold">{course.title}</h3>
            <p className="text-sm text-slate-500">{course.teacher}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
