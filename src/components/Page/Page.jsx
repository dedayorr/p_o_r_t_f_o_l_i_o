import React, { useRef } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { RiFileCopyFill } from "react-icons/ri";

function Page() {
  const textRef = useRef(null);

  const handleCopyClick = () => {
    const text = textRef.current.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };
  return (
    <div className="">
      {/* ==============Scetion One============== */}
      <div className=" py-[120px] px-[16px] md:flex flex-row-reverse md:px-[6%] gap-[30px] lg:mt-[5%]">
        <div className="relative bg-[#374151] h-[280px] w-[78%] mx-auto mb-[15%] object-cover md:w-[19%] md:h-[300px]">
          <img
            className="absolute w-[85%] h-[300px] bottom-[25px] right-[19px] mx-auto border-bgColor1 border-[10px] md:w-[450px] md:border-[5px] md:h-[320px] md:right-[8%] md:bottom-[5%]"
            src="./dp-two.png"
            alt="profile-picture"
          />
        </div>

        <div className="md:w-1/2 ">
          {" "}
          <div className="text-textColor">
            <h1 className="text-textColor font-semibold text-[36px] lg:text-[50px]">
              Hi, I'm Olayinka &#128075;
            </h1>
            <p className="text-[] text- lg:text-[20px]">
              A passionate web developer with a growing focus on frontend
              technologies. I enjoy building clean, user-focused digital
              experiences using tools like HTML, CSS, JavaScript, React, and
              WordPress. I am driven by growth, purpose, and a desire to use
              tech to empower people and transform ideas into reality
            </p>
            <div className="flex flex-col gap-[5px] mt-[10%] lg:text-[18px] lg:font-thin">
              <div className="flex items-center gap-[10px]">
                <IoLocationSharp className="" />
                <p>Lagos, Nigeria.</p>
              </div>
              <div className="flex items-center gap-[10px] ">
                <GoDotFill className="text-green-700" />
                <p>Available for new projects</p>
              </div>
            </div>
          </div>
          <div className="flex text-textColor mt-[10%] text-[25px] gap-[5%] lg:text-[30px]">
            <a className="" href="https://github.com/dedayorr">
              <AiFillGithub />
            </a>
            <a
              className=""
              href="https://ng.linkedin.com/in/aliu-oluwabunmi-42ab00235"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* ============Section Two============== */}

      <div
        id="about"
        className="bg-[#fff] py-[60px] text- px-[16px] lg:px-[6%]"
      >
        <p className="mx-auto text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center lg:text-[25px] lg:w-[170px] lg:h-[38px] lg:rounded-[16px]">
          About me
        </p>

        <div className="md:flex lg:mt-[15%] lg:gap-[40px]">
          {" "}
          <div className="relative bg-[#374151] h-[360px] w-[78%] mx-auto mb-[15%] object-cover mt-[25%] lg:mt-0 lg:w-[28%] lg:h-[500px]">
            <img
              className="absolute w-[87%] h-[390px] bottom-[17px] right-[19px] mx-auto border-[#111827] border-[10px] object-cover lg:w-[100%] lg:h-[530px] lg:border-[5px] lg:left-[10%] lg:bottom-[6%]"
              src="./dp-two.png"
              alt="profile-picture"
            />
          </div>
          <div className="flex flex-col gap-[20px] lg:w-1/2">
            {" "}
            <p className="font-semibold text-[32px] lg:text-[40px] lg:my-[3%]">
              About Me
            </p>
            <p className="text-[18px]">
              I am Olayimika Aliu, a passionate and driven individual with a
              growing interest in tech. I began my journey at ITSkills Centre,
              where I was trained in web development.
            </p>
            <p className="text-[18px]">
              I&apos;ve worked as a WordPress Developer at Iksha, a tech school,
              where I built and managed their official website—enhancing course
              visibility and streamlining student registration.
            </p>
            <p className="text-[18px]">
              I specialize in WordPress, and I&apos;m currently learning
              frontend development using tools like HTML, CSS, JavaScript,
              React, and Node.js. I&apos;m passionate about using technology to
              create meaningful impact and inspire growth.
            </p>
          </div>
        </div>
      </div>

      {/* ===============Section Three========  */}
      <div
        id="skills"
        className="bg-bgColor1 pt-[70px] pb-[50%] flex flex-col gap-[40px] text-textColor px-[16px] lg:px-[6%] lg:pb-[15%]"
      >
        <p className="mx-auto text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center lg:text-[25px] lg:w-[170px] lg:h-[38px] lg:rounded-[16px]">
          Skills
        </p>
        <p className="lg:text-[25px] lg:my-[3%]">
          The skills, tools and technologies I am good at:
        </p>
        <div className="grid grid-cols-3 gap-[10%] lg:grid-cols-5 lg:gap-[17%]">
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./HTML5.png" alt="Html" />
            <p>HTML</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./CSS.png" alt="Css" />
            <p>CSS</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img
              className="w-[64px] h-[64px]"
              src="./javascript.png"
              alt="Javascript"
            />
            <p>Javascript</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./react.png" alt="React" />
            <p>React</p>
          </div>
          {/* <div className="items-center flex flex-col justify-center gap-3">
            <img
              className="w-[64px] h-[64px]"
              src="./typescript.png"
              alt="Typescript"
            />
            <p>Typescript</p>
          </div> */}
          {/* <div className="items-center flex flex-col justify-center gap-3">
            <img
              className="w-[64px] h-[64px]"
              src="./vite.js.png"
              alt="Vite.js"
            />
            <p>Vite</p>
          </div> */}
          {/* <div className="items-center flex flex-col justify-center gap-3">
            <img
              className="w-[64px] h-[64px]"
              src="./nextjs.png"
              alt="Nextjs"
            />
            <p>Next.js</p>
          </div> */}
          {/* <div className="items-center flex flex-col justify-center gap-3">
            <img
              className="w-[64px] h-[64px]"
              src="./nodejs.png"
              alt="Nodejs"
            />
            <p>Node.js</p>
          </div> */}
          {/* <div className="items-center flex flex-col justify-center gap-3">
            <img
              className="w-[64px] h-[64px]"
              src="./express.png"
              alt="Expressjs"
            />
            <p>Express.js</p>
          </div> */}
          {/* <div className="items-center flex flex-col justify-center gap-3">
            <img
              className="w-[64px] h-[64px]"
              src="./mongodb.png"
              alt="MongoDb"
            />
            <p>MongoDB</p>
          </div> */}
          {/* <div className="items-center flex flex-col justify-center gap-3">
            <img
              className="w-[64px] h-[64px]"
              src="./tailwind.png"
              alt="Tailwind"
            />
            <p>Tailwindcss</p>
          </div> */}
          {/* <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./git.png" alt="Git" />
            <p>Git</p>
          </div> */}
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./github.png" alt="Figma" />
            <p>Github</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img
              className="w-[64px] h-[64px]"
              src="./wordpress.png"
              alt="Wordpress"
            />
            <p>Wordpress</p>
          </div>
          <div className="items-center flex flex-col justify-center gap-3">
            <img className="w-[64px] h-[64px]" src="./figma.png" alt="Figma" />
            <p>Figma</p>
          </div>
        </div>
      </div>

      {/* ==========Section Four============= */}
      <div
        id="experience"
        className="bg-[#fff] py-[60px] text-textColor px-[16px] flex flex-col gap-[20px]"
      >
        {" "}
        <p className="mx-auto text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center lg:text-[25px] lg:w-[170px] lg:h-[38px] lg:rounded-[16px]">
          Experience
        </p>
        <p className="text-center lg:text-[25px] lg:my-[3%]">
          Here is a quick summary of my experience
        </p>
        <div className="lg:w-[60%] lg:mx-auto ">
          <div className="h-[] bg-[#1F2937]  p-5 rounded-[15px] flex flex-col gap-[10px] lg:p-[5%]">
            <p className="font-bold text-[25px] text-[#14A800]">ITSkills</p>
            <p className="font- text-[18px] font-bold">Student Intern</p>
            <p className="italic font-thin text-[14px]">09/2022 - 06/2023</p>
            <p className="font- text-[18px] font-semibold">Developer</p>
            <ul className="list-disc flex flex-col gap-[10px]">
              <li className="text-[14px]">
                Gained hands-on experience in web development using HTML, CSS,
                JavaScript, and WordPress.
              </li>
              <li className="text-[14px]">
                Assisted in developing and updating websites for clients and
                in-house projects.
              </li>
            </ul>
          </div>
          <br />
          <div className="h-[] bg-[#1F2937]  p-5 rounded-[15px] flex flex-col gap-[10px] lg:p-[5%]">
            <p className="font-bold text-[25px] text-[#14A800]">
              Freelance Developer
            </p>
            {/* <p className="font- text-[18px] font-bold">Remote</p> */}
            <p className="italic font-thin text-[14px]">10/23 - 01/25</p>
            <p className="font- text-[18px] font-semibold">
              Front-end Developer
            </p>
            <ul className="list-disc flex flex-col gap-[10px]">
              <li className="text-[14px]">
                Designed, developed, and maintained custom WordPress websites
                for individual clients and a tech school platform.
              </li>
              <li className="text-[14px]">
                Customized themes and plugins to meet unique project
                requirements.
              </li>
              <li className="text-[14px]">
                Implemented responsive design and optimized performance to
                enhance user experience.
              </li>
              <li className="text-[14px]">
                Collaborated with design and content teams to ensure consistent
                branding across all deliverables.
              </li>
            </ul>
          </div>
          <br />
          <div className="h-[] bg-[#1F2937]  p-5 rounded-[15px] flex flex-col gap-[10px] lg:p-[5%]">
            <p className="font-bold text-[25px] text-[#14A800]">Iksha</p>
            <p className="italic font-thin text-[14px]">02/25 - 05/25</p>
            <p className="font- text-[18px] font-semibold">Developer</p>
            <ul className="list-disc flex flex-col gap-[10px]">
              <li className="text-[14px]">
                Designed, developed, and maintained custom WordPress websites
                for clients and the company&apos;s tech school platform.
              </li>
              <li className="text-[14px]">
                Customized themes and plugins to meet specific client needs.
              </li>
              <li className="text-[14px]">
                Implemented responsive design and optimized website performance
                for better user experience.
              </li>
              <li className="text-[14px]">
                Collaborated with the design and content teams to ensure brand
                consistency across all projects.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* =========Section Five=============== */}
      <div
        id="work"
        className="bg-bgColor1 pt-[70px] text-textColor px-[16px] flex flex-col gap-[15px]"
      >
        <p className="mx-auto text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center lg:text-[25px] lg:w-[170px] lg:h-[38px] lg:rounded-[16px]">
          Work
        </p>
        <p className="text-center lg:text-[20px] lg:my-[3%]">
          Some of the noteworthy projects I have built:
        </p>
        <div className="lg:mx-[5%] ">
          <div className="bg-[#1F2937] lg:flex lg:flex-row-reverse">
            <div className="bg-[#374151] p-6 lg:p-9 lg:w-1/2">
              <a href="https://www.iksha.ng/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  className="rounded-[10px] lg:rounded-[20px]"
                  src="./iksha.png"
                  alt="project-one"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px] lg:w-1/2">
              <p className="font-extrabold text-[18px] lg:text-[24px]">Iksha</p>{" "}
              <p className="font-light lg:text-[20px]">
                Iksha is a fast-growing tech school focused on equipping
                beginners and professionals with digital skills in areas like
                web development, design, and data. They needed a professional
                and functional website to represent their brand, attract
                students, and manage program registrations online.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] px-1 h-[28px] rounded-[12px] flex justify-center items-center">
                  WORDPRESS
                </p>
                {/* <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwind css
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Ant Design
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Redux Toolkit
                </p> */}
              </div>
              <a
                href="https://www.iksha.ng/"
                target="_blank"
                rel="noreferrer"
                className="underline flex items-center gap-[10px] justify-center"
              >
                <CiLink className="text-3xl" />
                <p>Link</p>{" "}
              </a>
            </div>
          </div>
          <div className="bg-[#1F2937] lg:flex ">
            <div className="bg-[#374151] p-6 lg:p-9 lg:w-1/2">
              <a
                href="https://crayondevelopment.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px] lg:rounded-[20px]"
                  src="./crayon.png"
                  alt="project-two"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px] lg:w-1/2">
              <p className="font-extrabold text-[18px] lg:text-[24px]">
                Crayon Development
              </p>{" "}
              <p className="font-lightlg:text-[20px]">
                Crayon Development is a real estate company focused on providing
                innovative, modern housing solutions in Nigeria. The brand
                needed a functional and visually appealing website to showcase
                its properties, build credibility, and generate client leads.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  WORDPRESS
                </p>
                {/* <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwind css
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  EmailJs
                </p> */}
              </div>
              <a
                href=" https://crayondevelopment.com/"
                target="_blank"
                rel="noreferrer"
                className="underline flex items-center gap-[10px] justify-center"
              >
                <CiLink className="text-3xl" />
                <p>Link</p>{" "}
              </a>
            </div>
          </div>
          <br />
        </div>
      </div>

      {/* =============Section Six============== */}
      <div
        id="contact"
        className="bg-[#fff] px-[5%] mt-[20%] py-[15%] text-[#] lg:text-[25px] lg:mt-[10%] lg:py-[10%]"
      >
        <p className="mx-auto text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center lg:text-[25px] lg:w-[170px] lg:h-[38px] lg:rounded-[16px]">
          Get in touch
        </p>
        <div className="mt-[5%] flex flex-col gap-[15px] font-extralight">
          <p className="text-center">
            What&apos;s next? Feel free to reach out to me if you&apos;re
            looking for a developer, have a query, or simply want to connect.
          </p>
          <div className="flex justify-center items-center gap-[15px] font-semibold">
            <CgMail className="text-[24px]" />
            <div ref={textRef}>Olayinkaaliu2019@gmail.com</div>
            <RiFileCopyFill className="text-[20px]" onClick={handleCopyClick} />
          </div>
          <div className="flex justify-center items-center gap-[15px] font-semibold">
            <BsTelephone className="text-[24px]" />
            <div ref={textRef}>+2349023139032</div>
            <RiFileCopyFill className="text-[20px]" onClick={handleCopyClick} />
          </div>
        </div>
      </div>

      <div className="flex text-textColor mt-[10%] text-[25px] gap-[5%] justify-center lg:mt-[5%] lg:text-[35px]">
        <a
          className=""
          href="https://github.com/dedayorr"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          className=""
          href="https://ng.linkedin.com/in/aliu-oluwabunmi-42ab00235"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Page;
