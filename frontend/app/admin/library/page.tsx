export default function Library() {
  return (
    <div className="max-768px:mt-10">
      <h1 className="w-fit mx-auto border-b text-xl mb-5 font-serif font-bold">Library Management</h1>
      <h3 className="text-lg mb-5">Add New Book</h3>
      <form>
      <label htmlFor="bookTitle" className="text-gray">
        Book Title:{" "}
      </label>
      <input
        type="text"
        name="bookTitle"
        id="bookTitle"
        placeholder="Enter Book Title"
        className="w-full p-[8px] mb-5 rounded-[4px] text-black border-[1px] border-red"
      />

      <label htmlFor="bookAuthor" className="text-gray">
        Book Author:{" "}
      </label>
      <input
        type="text"
        name="bookTitle"
        id="bookTitle"
        placeholder="Enter Book Title"
        className="w-full p-[8px] mb-5 rounded-[4px] text-black border-[1px] border-red"
      />

      <button
        type="submit"
        className="mx-auto grid bg-purple p-1.5 rounded-[4px]"
      >
        Submit
      </button>
      </form>
    </div>
  );
}
