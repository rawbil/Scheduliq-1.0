export default function TeacherExams() {
  return (
    <div className="max-768px:mt-20">
      <h1 className="text-center text-semibold font-serif text-xl mb-5">
        Exam Details
      </h1>
      <form className="max-w-[600px] w-full mx-auto">
        <input
          type="text"
          name="examName"
          placeholder="Exam Name"
          className="w-full border-[1.5px] border-purple rounded p-2 mb-5 text-black"
        />

        <input
          type="text"
          name="examClass"
          placeholder="Exam Class"
          className="w-full border-[1.5px] border-purple rounded p-2 mb-5 text-black"
        />

        <input
          type="number"
          name="examMarks"
          placeholder="Exam Marks"
          className="w-full border-[1.5px] border-purple rounded p-2 mb-5 text-black"
        />

        <button
          type="submit"
          className="bg-purple mt-5 rounded p-1.5 hover:bg-purple/90"
        >
          Add Exam
        </button>
      </form>
    </div>
  );
}
