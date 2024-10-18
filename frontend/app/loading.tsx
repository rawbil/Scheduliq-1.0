import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
             <Image src={'/loader.svg'} width={100} height={100} alt="loading..." />
        </div>
       
    )
}