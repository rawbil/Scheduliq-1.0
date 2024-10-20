

export default function Performance() {
    const grades = {
        "A": "70-100",
        "B": "60-70",
        "C": "50-60",
        "D": "40-50",
        "E": "Below 40"
    }
    return (
        <div className="max-768px:mt-20">
       <h2 className="text-center text-xl font-serif font-bold border-b w-fit mx-auto mb-10">School Performance</h2>
       <div className="bg-purple w-[230px] max-w-full p-4 rounded-md shadow shadow-slate-400">
       <h3 className="text-lg font-mono  mb-2 w-fit font-semibold">Our Grades</h3>
       <ul className="font-mono">
        <li><span>A: </span><span>{grades.A}</span></li>
        <li><span>B: </span><span>{grades.B}</span></li>
        <li><span>C: </span><span>{grades.C}</span></li>
        <li><span>D: </span><span>{grades.D}</span></li>
        <li><span>E: </span><span>{grades.E}</span>
        <span className="ml-3 text-red border-red border-2 px-1 py-1 rounded-md bg-white/80 animate-pingp">Passmark</span></li>
       </ul>
       </div>
      </div>
    )
}