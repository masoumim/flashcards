// page.js - This is the main page or root page that is first reached when accessing the site
import Image from "next/image"
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center bg-purple-100 w-fit p-10 mx-auto mt-16 gap-4 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">        
          <p className="text-6xl text-purple-800">Flashcards</p>
          <Image src='/img/idea.png' alt="picture of lightbulb" priority={true} width={100} height={100}></Image>
          <p className="text-xl text-purple-800">Easily create <i>custom</i> <b className=" text-orange-500">topics</b>, <b className=" text-orange-500">flashcards</b> and <b className=" text-orange-500">quizzes</b>!</p>
      </div>
      <p className="font-bold">TEST</p>
    </>
  )
}