import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center mt-[10vh] gap-6">
      <Image
        src={"/logo.png"}
        width={200}
        height={100}
        alt="schedulr"
        className="w-[200px] h-auto max-540px:w-[150px] max-230px:w-[100px]"
      />
      <h1 className="font-extrabold text-4xl max-540px:text-2xl max-230px:text-lg text-purple">
        Welcome to Scheduliq
      </h1>
      <p className="text-gray text-2xl max-540px:text-xl max-230px:text-lg max-540px:text-center">
        Manage your schedules, events and deadlines with ease.
      </p>
    </div>
  );
}
