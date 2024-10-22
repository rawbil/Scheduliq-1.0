import React from "react";

const Teachers = () => {
  return (
    <div className="">
      <h1 className="max-768px:pt-4 text-center text-2xl">
        Welcome <span className="text-orange font-bold font-mono">Teacher</span>
      </h1>
      <div className="grid grid-cols-3 justify-items-center mt-10 gap-[5%] max-540px:grid-cols-1">
        <section className="hover:scale-105 transition-all duration-200 cursor-text shadow shadow-red text-center bg-alt p-2 rounded-md w-[100%] flex flex-col items-center gap-[20px]">
          <h2 className="text-xl font-semibold font-serif text-gray pt-2.5">
            Teacher Id
          </h2>
          <p className="text-[22px] pb-2.5 text-orange font-semibold">13</p>
        </section>
        <section className="hover:scale-105 transition-all duration-200 cursor-text shadow shadow-red text-center bg-alt p-2 rounded-md w-[100%] flex flex-col items-center gap-[20px]">
          <h2 className="text-xl font-semibold font-serif text-gray pt-2.5">
            Total Classes
          </h2>
          <p className="text-[22px] pb-2.5 text-orange font-semibold">6</p>
        </section>
        <section className="hover:scale-105 transition-all duration-200 cursor-text shadow shadow-red text-center bg-alt p-2 rounded-md w-[100%] flex flex-col items-center gap-[20px]">
          <h2 className="text-xl font-semibold font-serif text-gray pt-2.5">
            Total Students
          </h2>
          <p className="text-[22px] pb-2.5 text-orange font-semibold">200</p>
        </section>
      </div>
      <div className="grid grid-cols-2 max-540px:grid-cols-1 justify-items-center mt-10">
        {/* Recent Activities */}
        <section>
          <h1 className="text-center text-xl text-orange">
            Recent Activities
          </h1>
        </section>
        {/*Announcements */}
        <section>
          <h1 className="text-center text-xl text-orange">Announcements</h1>
        </section>
      </div>
    </div>
  );
};

export default Teachers;
