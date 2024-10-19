

export default function AdminClasses() {
    return (
        <div className="max-768px:mt-10">
            {/* add class */}
            <section className="max-w-xl w-full mx-auto">
            <form className="flex items-center gap-2 rounded-md max-320px:flex-col">
                <input type="text" name="className" id="className" placeholder="Enter Class Name" className="flex-1 p-2 rounded-md text-black border-[2px] border-red" />
                <button type="submit" className=" bg-purple p-2 rounded-md border-2 border-purple hover:bg-purple/50">Add Class</button>
            </form>
            </section>
         
        </div>
    )
}