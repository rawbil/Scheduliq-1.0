export default function AdminStudents() {
  return (
    <div className="max-768px:mt-10">
      <h1 className="text-xl font-serif border-b mb-5 text-center w-fit mx-auto">
        Student Details{" "}
      </h1>
      <section className="max-w-xl w-full mx-auto">
        <form className="">
            <label htmlFor="studentName" className="text-gray">Student Name: </label>
          <input
            type="text"
            name="studentName"
            id="studentName"
            placeholder="Enter Student Name"
            className="w-full p-[8px] mb-5 rounded-[4px] text-black border-[1px] border-red"
          />
          <label htmlFor="regNo" className="text-gray">Enter Student Registration No:</label>
          <input
            type="text"
            name="regNo"
            id="regNo"
            placeholder="Enter Student Registration No."
            className="w-full p-2 mb-5 rounded-[4px] text-black border-[1px] border-red"
          />

          <label htmlFor="year" className="text-gray">Year of Study: </label>
          <input type="number" name="year" id="year" placeholder="Enter Student's Year" className="w-full p-2 mb-5 rounded-[4px] text-black border-[1px] border-red" />

          <button type="submit" className="mx-auto grid bg-purple p-1.5 rounded-[4px]">Submit</button>
        </form>
      </section>
    </div>
  );
}
