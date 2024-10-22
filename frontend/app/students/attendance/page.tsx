

export default function StudentAttendance() {
    const attendance = [
        {id: 1, date: "2024-03/01", present: true},
        {id: 2, date: "2024-03/02", present: false},
        {id: 3, date: "2024-03/03", present: true},
        {id: 4, date: "2024-03/04", present: true},
        {id: 5, date: "2024-03/05", present: false},
    ]
    return (
        <div className="max-768px:mt-10">
            <h1 className="text-center text-2xl w-fit mx-auto font-serif font-bold">This Week's Attendance</h1>
            {attendance.map(item => (
                <div key={item.id} className="flex justify-between gap-2 w-[600px] max-w-[90%] mx-auto my-5 border p-2 rounded shadow shadow-slate-500">
                    <p>{item.date}</p>
                    <p className={`font-semibold ${item.present ? "text-green" : "text-red"}`}>{item.present ? "Present" : "Absent"}</p>
                </div>
            ))}
        </div>
    )
}