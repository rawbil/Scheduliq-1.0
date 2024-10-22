export default function TeacherProfile() {
  const studentProfile = {
    name: "Bildad",
    school: "ICI",
    email: "bildadsimiyu6@gmail.com",
    teacherId: 13,
  };
  return (
    <div className="max-768px:mt-10">
      <h2 className="text-center font-serif font-semibold text-xl mb-5">
        My Profile
      </h2>
      <div className="grid mx-auto max-w-[600px] w-full border rounded p-2">
        <p className="font-bold text-lg text-purple mb-5">
          Name:{" "}
          <span className="text-gray font-medium">{studentProfile.name}</span>
        </p>
        <p className="font-bold text-lg text-purple mb-5">
          Teacher Id:{" "}
          <span className="text-gray font-medium">{studentProfile.teacherId}</span>
        </p>
        <p className="font-bold text-lg text-purple mb-5">
          Email:{" "}
          <span className="text-gray font-medium">{studentProfile.email}</span>
        </p>
        <p className="font-bold text-lg text-purple mb-5">
          School:{" "}
          <span className="text-gray font-medium">{studentProfile.school}</span>
        </p>
      </div>
    </div>
  );
}
