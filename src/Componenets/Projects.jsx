const Project = () => {
  return (
    <div className="flex flex-col items-center">
        <p className="text-gray-700 text-lg">Browse My Recent</p>
      <h1 className="text-4xl font-bold mb-6 md:text-6xl">Projects</h1>

<div id="Project" className="flex items-center flex-col xl:flex-row p-6 xl:mt-10 xl:px-20 ">
      

      <div className="flex justify-between w-full mt-4 ">
        <div className="px-8  md:shadow-2xl py-6 border-2 flex flex-col items-center xl:mx-4 w-[46%] rounded-3xl border-opacity-50 4 border-[#353535]">
          <img
            className="rounded-[30%] h-[90%] w-[100%] mb-4"
            src="https://tangerine-hummingbird-1479b6.netlify.app/assets/project-1.png"
          />
          <h1 className="mb-4  font-semibold text-xl font-poppins  md:text-3xl">
            Project One
          </h1>
          <div className="flex flex-col text-center md:flex-row  md:w-full md:justify-between">
            <a
              href="https://github.com/Aman981749"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 font-semibold border-2 border-opacity-50 rounded-full md:px-8 py-3 px-6 border-[#353535] hover:bg-[#353535] hover:text-white"
            >
              Github
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" md:mb-4 font-semibold border-2 border-opacity-50 rounded-full py-3 px-6 border-[#353535]  hover:bg-[#353535] hover:text-white"
            >
              Live Demo
            </a>
          </div>
        </div>


        <div className="  md:shadow-2xl px-8 py-6 border-2 flex flex-col items-center w-[46%] xl:mx-4 rounded-3xl border-opacity-50 4 border-[#353535]">
          <img
            className="rounded-[30%] h-[90%] w-[100%] mb-4"
            src="https://tangerine-hummingbird-1479b6.netlify.app/assets/project-2.png"
          />
          <h1 className="mb-4 font-semibold text-xl font-poppins md:text-3xl">
            Project Two
          </h1>
          <div className="flex flex-col text-center md:flex-row  md:w-full md:justify-between">
            <a
              href="https://github.com/Aman981749"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 font-semibold border-2 border-opacity-50 rounded-full py-3 px-6 md:px-8 border-[#353535] hover:bg-[#353535] hover:text-white"
            >
              Github
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" md:mb-4 font-semibold border-2 border-opacity-50 rounded-full py-3 px-6 border-[#353535]  hover:bg-[#353535] hover:text-white"
            >
              Live Demo
            </a>
          </div>
        </div>
      


        <div className="hidden  md:shadow-2xl px-8 py-6 border-2 xl:flex flex-col items-center xl:mx-4 w-[46%] rounded-3xl border-opacity-50 4 border-[#353535]">
          <img
            className="rounded-[30%] h-[90%] w-[100%] mb-4"
            src="https://tangerine-hummingbird-1479b6.netlify.app/assets/project-2.png"
          />
          <h1 className="mb-4 font-semibold text-xl font-poppins md:text-3xl">
            Project Two
          </h1>
          <div className="flex flex-col text-center md:flex-row  md:w-full md:justify-between">
            <a
              href="https://github.com/Aman981749"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 font-semibold border-2 border-opacity-50 rounded-full py-3 px-6 md:px-8 border-[#353535] hover:bg-[#353535] hover:text-white"
            >
              Github
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" md:mb-4 font-semibold border-2 border-opacity-50 rounded-full py-3 px-6 border-[#353535]  hover:bg-[#353535] hover:text-white"
            >
              Live Demo
            </a>
          </div>
        </div>
        </div>
      

      {/* outside big div  */}

































      <div className=" xl:hidden  md:shadow-2xl px-10 mt-6 py-6 border-2 flex flex-col items-center rounded-3xl border-opacity-50 4 border-[#353535]">
        <img
          className="rounded-[10%] h-[90%] w-[100%]  mb-4"
          src="https://tangerine-hummingbird-1479b6.netlify.app/assets/project-3.png"
        />
        <h1 className="mb-4 font-semibold text-xl font-poppins  md:text-3xl">
          Project Three
        </h1>
        <div className="flex  text-center items-center justify-between w-[80%]  ">
          <a
            href="https://github.com/Aman981749"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold border-2 w-[45%] border-opacity-50 rounded-full py-3 border-[#353535] hover:bg-[#353535] hover:text-white"
          >
            Github
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" font-semibold border-2 w-[45%] border-opacity-50 rounded-full py-3  border-[#353535]  hover:bg-[#353535] hover:text-white"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>



    </div>
   
  );
};

export default Project;
