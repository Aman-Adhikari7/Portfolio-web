import { RiMedalFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";

const AboutMe = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-[#353535] md:text-xl">Get To Know More</p>
        <p className="font-bold text-4xl md:text-6xl font-sans-serief pb-2">
          About Me
        </p>
      </div>

      <div
        id="about"
        className="items-center flex flex-col my-10 px-4 xl:flex-row xl:justify-between "
      >
        <img
          className="rounded-2xl shadow-sm border xl:h-[350px]  xl:ml-40  "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgEgJC0wQ5H1qGGXk_16HY1lQG25uUgNjpw&s"
        />

        <div className="xl:flex xl:flex-col xl:ml-10 ">

        <div className="flex  my-6 justify-between md:w-full  xl:w-[90%]    ">
          <div className="p-10 md:p-6  rounded-2xl w-[45%] md:w-[47%] shadow-lg  md:shadow-2xl xl:shadow  border-opacity-50   border-2  border-[#353535] flex flex-col items-center text-center">
            <RiMedalFill className="text-4xl" />

            <h1 className="font-bold text-lg pt-4">Experience</h1>
            <p className=" text-[#353535]">"Fresher"</p>
            <p className=" text-[#353535]">Mern Development</p>
          </div>

          <div className="p-10  w-[45%] md:p-6 md:w-[47%] rounded-2xl border-opacity-50  md:shadow-2xl xl:shadow  border-[#353535]  shadow-lg border-2 flex flex-col items-center text-center">
            <IoPeopleSharp className="text-4xl" />

            <h1 className="font-bold text-lg pt-4">Education</h1>
            <p className=" text-[#353535]">"High School Graduate"</p>
          </div>


        </div>


        <p className="font-sans-serif   text-[#353535] shadow-lg xl:shadow font-semibold rounded-2xl p-4 md:p-6">
          I love solving problems—not just coding ones, but also real-world
          challenges. I have a deep curiosity about learning how things work
          under the hood. This curiosity is the reason I chose coding, as it
          allows me to explore what makes those bits and transistors so
          fascinating and helpful. I am always excited about new technology and
          advancements happening nowadays, especially the evolution of AI. I am
          a self-driven and focused learner, ready to work in any condition.
          Solving problems feels like a fun game to me, and I truly enjoy it—it
          has even become one of my hobbies. That’s it for now. We’ll talk more
          when we meet! :)
        </p>

            
        </div>

       

       
      </div>
    </div>
  );
};

export default AboutMe;
