export default function AdminAnnouncements() {
  return (
    <div className="max-768px:mt-20">
      <h1 className="w-fit mx-auto text-xl border-b mb-10">Announcements</h1>
      <form>
        <label htmlFor="announcement" className="text-gray">
          Announcement:{" "}
        </label>
        <textarea
          name="announcement"
          id="announcement"
          rows={4}
          className="w-full p-[8px] mb-5 rounded-[4px] text-black border-[1px] border-red"
        ></textarea>

        <button
          type="submit"
          className="bg-purple p-1.5 rounded-[4px] w-[100px] "
        >
          Submit
        </button>
      </form>

      {/* Display Announcements */}
      <h1>Display Announcements</h1>
    </div>
  );
}
