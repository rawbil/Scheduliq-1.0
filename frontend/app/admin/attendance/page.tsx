export default function AdminAttendance() {
  return (
    <div className="max-768px:mt-10">
      <h2 className="w-fit border-b font-serif font-bold mx-auto text-xl mb-10">
        Attendance
      </h2>
      <div className="flex gap-2">
        <input className="" type="checkbox" name="presentCheck" id="presentCheck" />
        <label htmlFor="presentCheck">Present</label>
      </div>
      <div className="flex gap-2">
        <input className="" type="checkbox" name="absentCheck" id="absentCheck" />
        <label htmlFor="absentCheck">Absent</label>
      </div>
      <div className="flex gap-2">
        <input className=""
          type="checkbox"
          name="absentWithApology"
          id="absentWithApology"
        />
        <label htmlFor="absentWithApology">Absent with apology</label>
      </div>

      <button
            type="submit"
            className="mt-5 bg-purple p-1 rounded-[4px]"
          >
            Submit
          </button>
    </div>
  );
}
