export default function Exams() {

  return (
    <div className="max-768px:mt-10">
      <h2 className="w-fit mx-auto border-b mb-10 text-xl">Exam Details</h2>
      <form>
        <label htmlFor="examName" className="text-gray">
          Name:{" "}
        </label>
        <input
          type="text"
          name="examName"
          id="examName"
          placeholder="Enter Exam Name"
          className="w-full p-[8px] mb-5 rounded-[4px] text-black border-[1px] border-red"
        />

        <label htmlFor="examClass" className="text-gray">
          Class:{" "}
        </label>
        <input
          type="text"
          name="examClass"
          id="examClass"
          placeholder="Enter Exam Class"
          className="w-full p-[8px] mb-5 rounded-[4px] text-black border-[1px] border-red"
        />

        <label htmlFor="examMarks" className="text-gray">
          Marks:{" "}
        </label>
        <input
          type="text"
          name="examMarks"
          id="examMarks"
          placeholder="Enter Exam Marks"
          className="w-full p-[8px] mb-5 rounded-[4px] text-black border-[1px] border-red"
        />

        <button
          type="submit"
          className="mx-auto mb-5 grid bg-purple p-1.5 rounded-[4px]"
        >
          Submit
        </button>

        <h2>Total Marks: </h2>
        <h2>Exam Details: </h2>
        <ul>

        </ul>
      </form>
    </div>
  );
}
