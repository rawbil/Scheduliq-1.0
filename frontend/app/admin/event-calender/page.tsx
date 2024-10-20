export default function EventCalender() {
  return (
    <div className="max-768px:mt-20">
      <h1 className="text-xl w-fit mx-auto mb-10 border-b font-serif font-bold">Events and Calender</h1>
      <p className=" mb-10 border-[1.5px] w-fit ml-[60%] max-230px:ml-[10%] p-2 rounded-xl">Current Time: {`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`}</p>
      <div className="flex max-sm:flex-col max-sm:gap-[100px] items-center justify-between">
      <h1>Calender</h1>
      <form>
        <h2 className="mb-5">Add New Event</h2>
        <label htmlFor="event" className="text-gray">
          Event:{" "}
        </label>
        <input
          type="text"
          name="event"
          id="event"
          placeholder="Enter Event"
          className="w-full p-[8px] mb-5 rounded-[4px] text-black border-[1px] border-red"
        />
        <button
          type="submit"
          className="w-[150px] bg-purple p-1.5 rounded-[4px]"
        >
          Add Event
        </button>
      </form>
      </div>
      {/* Display all events */}
      <h1>Display all events</h1>
    </div>
  );
}
