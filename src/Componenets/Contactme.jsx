import { BsLinkedin } from "react-icons/bs";
import { IoMailOpenSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <div>
        <div id="Contact" className="flex flex-col items-center mt-10">
          <p className="text-[#353535]">Get in Touch</p>
          <p className="font-bold text-4xl font-sans-serief mb-10  md:mt-2 md:text-6xl">Contact Me</p>

          <div className="flex  md:shadow-2xl text-center border-2 border-[#353535] border-opacity-50 rounded-full py-1 md:w-[50%] xl:w-[40%] md:py-3 md:px-6 md:rounded-3xl  md:justify-between   px-2">
            <div className="flex items-center mr-2">
              <IoMailOpenSharp className="text-[29px] rounded-full cursor-pointer mr-2   " />
              <p
                onClick={() => {
                    window.open("mailto:noattacklost@gmail.com?subject=Contact%20from%20Website&body=Hi%20there,%20I%20wanted%20to%20reach%20out...", "_blank")
               
                }}
                className="py-3 hover:border-b-2 border-b-2 border-transparent hover:border-[#353535] hover:border-opacity-50 hover:text-[#353535] hover:text-opacity-30  cursor-pointer"
              >
                NoAttackLost@gmail.com
              </p>
            </div>

            <div className="flex items-center ">
              <BsLinkedin className="text-[29px] rounded-full  " />
              <p
                onClick={() => {
                    window.open("https://www.linkedin.com/in/aman-adhikari-52b4042a2/", "_blank")
                 
                }}
                className="py-3 hover:border-b-2 border-b-2 border-transparent hover:border-[#353535] hover:border-opacity-30 hover:text-[#353535] hover:text-opacity-50  cursor-pointer"
              >
                LinkedIn
              </p>
            </div>
          </div>

          <div className="flex mt-8  flex-col my-4 w-full items-center font-poppins md:flex-row md:justify-between md:w-[70%] xl:w-[50%] md:mt-16 md:mb-12 md:text-2xl xl:mt-40 ">

            <p1 className="py-3 pt-8 md:pt-3 hover:border-b-2 border-b-2 border-transparent hover:border-[#353535] hover:border-opacity-50 hover:text-[#353535] hover:text-opacity-50 ">
            <a href="#about">About</a>
                </p1>
            <p1 className="py-3 hover:border-b-2 border-b-2 border-transparent hover:border-[#353535] hover:border-opacity-50 hover:text-[#353535] hover:text-opacity-50 ">
            <a href="#Experience">Experience</a>
                </p1>
            <p1 className="py-3 hover:border-b-2 border-b-2 border-transparent hover:border-[#353535] hover:border-opacity-50 hover:text-[#353535] hover:text-opacity-50 ">
            <a href="#Project">Projects</a>
                </p1>
            <p1 className="py-3 mb-4 md:mb-0 hover:border-b-2 border-b-2 border-transparent hover:border-[#353535] hover:border-opacity-50 hover:text-[#353535] hover:text-opacity-50 ">
            <a href="#Contact">Contact</a>
                </p1>
          </div>

          <p className="mb-10">Copyright © 2024 Aman Adhikari. All Rights Reserved. </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
