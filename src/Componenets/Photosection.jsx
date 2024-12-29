import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

const Photo = () => {
  return (
    <div className="">



      <div className="p-6 items-center  xl:justify-center xl:mt-10 xl:pt-10 xl:pb-10 xl:mb-10 flex flex-col xl:flex-row xl:text-center   w-[100%]">
      

          <img
            className=" h-[350px] rounded-full xl:mr-10 "
            src="https://preview.redd.it/boywithuke-updated-his-instagram-profile-picture-v0-aacn3jd23jhc1.jpeg?auto=webp&s=b4573ea815cc08ecaacfc75fdcea66b153aa9b86"
          />

        <div className="xl:ml-20   flex flex-col items-center   text-center py-4  ">
          <h1 className="pt-8 md:pb-2 text-lg font-poppins  text-gray-500">
            Hello,I'm
          </h1>
          <h1 className="font-extrabold md:font-bold md:mb-2  text-4xl font-sans-serif pb-2">
            Aman Adhikari
          </h1>
          <h1 className="text-2xl  text-gray-500 font-poppins font-semibold">
            FullStack Devloper
          </h1>
          <div className="flex  m-2 items-center justify-between  w-[100%] ">
            <p className="border-2 cursor-pointer rounded-full p-2 px-4 border-[#353535] hover:bg-[#353535] hover:text-white ">
              <a
                href="/resume.pdf" // Path to your resume in the public folder
                download="My_Resume.pdf" // Optional: Rename the downloaded file
              >
                Download Cv
              </a>
            </p>
            <p className="border-2 cursor-pointer rounded-full p-[12px] px-4 text-white bg-[#353535] hover:bg-black">
              <a href="#Contact">Contact info</a>
            </p>
          </div>
          <div className="flex ml-2 justify-between  w-[25%] ">
            <BsLinkedin
              onClick={() => {
                window.open("https://www.linkedin.com/in/aman-adhikari-52b4042a2/", "_blank")
              }}
              className="text-[29px] rounded-full cursor-pointer "
            />
            <FaGithub
              onClick={() => {
                window.open("https://github.com/Aman981749", "_blank")
            
              }}
              className="text-[29px] rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Photo;
