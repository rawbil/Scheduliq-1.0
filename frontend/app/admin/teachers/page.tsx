export default function AdminTeachers() {
  return (
    <div className="max-768px:mt-10">
      <h1 className="text-xl font-serif border-b mb-5 text-center w-fit mx-auto">
        Teachers Details{" "}
      </h1>
      <section className="max-w-xl w-full mx-auto">
        <form className="">
          <label htmlFor="studentName" className="text-gray">
            Teacher's Name:{" "}
          </label>
          <input
            type="text"
            name="teacherName"
            id="teacherName"
            placeholder="Enter Teacher's Name"
            className="w-full p-[8px] mb-5 rounded-[4px] text-black border-[1px] border-red"
          />
          <label htmlFor="email" className="text-gray">
             Teacher's Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Teacher's Email"
            className="w-full p-2 mb-5 rounded-[4px] text-black border-[1px] border-red"
          />

          <label htmlFor="subject" className="text-gray">
           Teacher's Subject:{" "}
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter Teacher's Subject"
            className="w-full p-2 mb-5 rounded-[4px] text-black border-[1px] border-red"
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
