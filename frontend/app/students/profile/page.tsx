export default function StudentProfile() {
  const studentProfile = {
    name: "Bildad",
    age: 20,
    grade: "A",
    school: "ICI",
    email: "bildadsimiyu6@gmail.com",
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
          Age:{" "}
          <span className="text-gray font-medium">{studentProfile.age}</span>
        </p>
        <p className="font-bold text-lg text-purple mb-5">
          Email:{" "}
          <span className="text-gray font-medium">{studentProfile.email}</span>
        </p>
        <p className="font-bold text-lg text-purple mb-5">
          School:{" "}
          <span className="text-gray font-medium">{studentProfile.school}</span>
        </p>
        <p className="font-bold text-lg text-purple mb-5">
          Grade:{" "}
          <span className="text-gray font-medium">{studentProfile.grade}</span>
        </p>
      </div>
    </div>
  );
}
