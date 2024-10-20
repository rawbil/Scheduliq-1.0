export default function AdminProfile() {
  return (
    <div className="max-768px:mt-20">
      <div className="mb-5">
        <p>Name: </p>
      </div>
      <div className="mb-5">
        <p>Email: </p>
      </div>
      <div className="mb-5">
        <p>Phone: </p>
      </div>
      <div className="mb-5">
        <p>Address: </p>
      </div>
      <div className="mb-5">
        <p>Qualifications: </p>
      </div>

      <button type="submit" className="w-[150px] bg-purple p-1.5 rounded-[4px]">
        Submit
      </button>
    </div>
  );
}
