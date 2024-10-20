export default function AdminAssignments() {
  return (
    <div className="max-768px:mt-10">
      <h1 className="text-xl font-serif border-b mb-5 text-center w-fit mx-auto">
        Assignments
      </h1>
      <section className="max-w-xl w-full mx-auto">
        <form className="">
          <label htmlFor="assignmentTitle" className="text-gray">
            Title:
          </label>
          <input
            type="text"
            name="assignmentTitle"
            id="assignmentTitle"
            placeholder="Add Assignment Title"
            className="w-full p-[8px] mb-5 rounded-[4px] text-black border-[1px] border-red"
          />
          <fieldset className="border border-red rounded-[4px] bg-white mb-5">
            <legend className="text-gray bg-default pt-2 rounded-md">
              Description:{" "}
            </legend>
            <textarea
              name="assignmentDescription"
              id="assignmentDescription"
              className="w-full rounded-[6px] border-0 px-2 text-black outline-0"
              placeholder="Add Assignment Description"
              rows={4}
            ></textarea>
          </fieldset>

          <label htmlFor="assignmentMarks" className="text-gray">
            Marks:{" "}
          </label>
          <input
            type="text"
            name="assignmentMarks"
            id="assignmentMarks"
            placeholder="Add Assigment's Total Marks"
            className="w-full p-[8px] mb-5 rounded-[4px] text-black border-[1px] border-red"
          />

          <label htmlFor="assignmentDeadline" className="text-gray">
            Deadline:{" "}
          </label>
          <input
            type="text"
            name="assignmentDeadline"
            id="assignmentDeadline"
            placeholder="Enter Assigment Deadline"
            className="w-full p-[8px] mb-5 rounded-[4px] text-black border-[1px] border-red"
          />

          <button
            type="submit"
            className="mx-auto grid bg-purple p-1.5 rounded-[4px]"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
