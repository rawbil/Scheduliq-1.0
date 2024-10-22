

export default function Assignments() {
    return (
        <div className="max-768px:mt-10">
            <h2 className="text-center text-xl font-serif font-semibold mb-5">Assignments</h2>
            <form className="max-w-[600px] w-full mx-auto">
                <input type="text" name="assignmentTitle" id="assignmentTitle" placeholder="Enter Assignment Title" className="w-full border-[1.5px] border-purple rounded p-2 mb-5 text-black" />

                <textarea name="assignmentDescription" id="assignmentDescription" className="w-full p-2 border-[1.5px] border-purple rounded text-black mb-5" rows={4} placeholder="Enter Assignment Description"></textarea>

                <input type="text" name="assignmentGrade" id="assignmentGrade" placeholder="Enter Assignment Grade" className="w-full border-[1.5px] border-purple rounded p-2 mb-5 text-black" />

                <input type="date" name="assignmentDeadline" id="assignmentDeadline" placeholder="Enter Assignment Deadline" className="w-full border-[1.5px] border-purple rounded p-2 mb-5 text-black" />

                <button type="submit" className="bg-purple mt-5 rounded p-1.5 hover:bg-purple/90">Submit Assignment</button>
            </form>
            <hr className="mt-10" />

            {/* Assignment List */}
            <div className="mt-10">
                <h2 className="text-center font-serif font-semibold text-xl">Assignment List</h2>
                {/* add assignment list here */}
            </div>
        </div>
    )
}