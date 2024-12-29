import { IoIosCheckmarkCircle } from "react-icons/io";

const Experience = () => {
  return (
    <div id="Experience" className="flex flex-col items-center xl:mt-20">
      <p className="text-[#353535] text-lg"> Explore My</p>
      <h1 className="text-4xl font-bold md:text-6xl xl:mb-10">Experience</h1>

     <div className="flex flex-col items-center w-full  md:flex-row">

     <div className="border-2 border-[#353535] border-opacity-50 p-6 my-8 rounded-2xl md:mx-4 md:shadow-2xl w-[90%] md:w-[60%] flex flex-col items-center">
        <h1 className="text-[#353535]  text-xl font-semibold">
          FullStack Development
        </h1>

        <div className="flex justify-between w-[90%] mt-6">
          <article className="flex ">
            <IoIosCheckmarkCircle className="text-2xl mr-4 " />
            <div>
              <h1 className="font-extrabold ">HTML</h1>
              <p className="text-[#353535] ">Experienced</p>
            </div>
          </article>
          <article className="flex ">
            <IoIosCheckmarkCircle className="text-2xl mr-4 " />
            <div>
              <h1 className="font-extrabold ">CSS</h1>
              <p className="text-[#353535] ">Experienced</p>
            </div>
          </article>
        </div>

        <div className="flex justify-between w-[90%] mt-6">
          <article className="flex ">
            <IoIosCheckmarkCircle className="text-2xl mr-4 " />
            <div>
              <h1 className="font-extrabold ">React</h1>
              <p className="text-[#353535] ">Intermediate</p>
            </div>
          </article>
          <article className="flex ">
            <IoIosCheckmarkCircle className="text-2xl mr-4 " />
            <div>
              <h1 className="font-extrabold ">Javascript</h1>
              <p className="ttext-[#353535] ">Intermediate</p>
            </div>
          </article>
        </div>

        <div className="flex justify-between w-[90%] mt-6">
          <article className="flex ">
            <IoIosCheckmarkCircle className="text-2xl mr-4 " />
            <div>
              <h1 className="font-extrabold ">MongoDb</h1>
              <p className="text-[#353535] ">Basic</p>
            </div>
          </article>
          <article className="flex ">
            <IoIosCheckmarkCircle className="text-2xl mr-4 " />
            <div>
              <h1 className="font-extrabold ">Node.js</h1>
              <p className="text-[#353535] ">Intermediate</p>
            </div>
          </article>
        </div>
      </div>

      {/* second container  */}

      <div className=" border-opacity-50 p-6 mb-8 border-[#353535] border-2 rounded-2xl w-[90%] md:shadow-2xl md:w-[60%] md:mx-4  flex flex-col items-center">
        <h1 className="text-[#353535]  text-xl font-semibold">
          FullStack Development
        </h1>

        <div className="flex justify-between w-[90%] mt-6">
          <article className="flex ">
            <IoIosCheckmarkCircle className="text-2xl mr-4 " />
            <div>
              <h1 className="font-extrabold ">HTTPS</h1>
              <p className="text-[#353535] ">Basic</p>
            </div>
          </article>
          <article className="flex ">
            <IoIosCheckmarkCircle className="text-2xl mr-4 " />
            <div>
              <h1 className="font-extrabold ">Express</h1>
              <p className="text-[#353535] ">Intermediate</p>
            </div>
          </article>
        </div>

        <div className="flex justify-between w-[90%] mt-6">
          <article className="flex ">
            <IoIosCheckmarkCircle className="text-2xl mr-4 " />
            <div>
              <h1 className="font-extrabold ">Tailwind</h1>
              <p className="text-[#353535] ">Experienced</p>
            </div>
          </article>
          <article className="flex ">
            <IoIosCheckmarkCircle className="text-2xl mr-4 " />
            <div>
              <h1 className="font-extrabold ">TypeScript</h1>
              <p className="text-[#353535] ">Basic</p>
            </div>
          </article>
        </div>
      </div>





     </div>

     
    </div>
  );
};

export default Experience;
