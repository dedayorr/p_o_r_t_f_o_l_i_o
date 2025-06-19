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
              Hi, I'm Elijah &#128075;
            </h1>
            <p className="text-[] text-justify lg:text-[20px]">
              I'm a Front-end Developer specializing in creating interactive
              digital experiences. My focus is on developing high-quality
              websites and web applications that are visually appealing,
              user-friendly, and accessible. I'm a Cybersecurity enthusiast.
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
              href="https://www.linkedin.com/in/elijah-adeyeye-software-developer/"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* ============Section Two============== */}

      <div
        id="about"
        className="bg-[#111827] py-[60px] text-textColor px-[16px] text-justify lg:px-[6%]"
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
              Curious about me? Here you have it:
            </p>
            <p className="text-[18px]">
              I'm a passionate, self-proclaimed front-end developer who
              specializes in full stack development (React.js & Node.js). I am
              very enthusiastic about bringing the technical and visual aspects
              of digital products to life. User experience, pixel perfect
              design, and writing clear, readable, highly performant code
              matters to me.
            </p>
            <p className="text-[18px]">
              I began my journey as a web developer in 2020, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way. I'm
              building cutting-edge web applications using modern technologies
              such as Next.js, TypeScript, Tailwindcss, and much more.
            </p>
            <p className="text-[18px]">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
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
              alt="Figma"
            />
            <p>Wordpress</p>
          </div>
        </div>
      </div>

      {/* ==========Section Four============= */}
      <div
        id="experience"
        className="bg-[#111827] py-[60px] text-textColor px-[16px] text-justify flex flex-col gap-[20px]"
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
            <p className="font-bold text-[25px] text-[#14A800]">Rentree</p>
            <p className="font- text-[18px] font-bold">Contract</p>
            <p className="italic font-thin text-[14px]">
              Sept 2024 - March 2025
            </p>
            <p className="font- text-[18px] font-semibold">
              Front-end Engineer
            </p>
            <ul className="list-disc flex flex-col gap-[10px]">
              <li className="text-[14px]">
                Developed complex UI interactions including tabbed navigation
                with dynamic borders.
              </li>
              <li className="text-[14px]">
                Worked on a multi-step form flow with contextual navigation,
                enabling smooth progression through components like Basic Info,
                Property Setup, Photos, Pricing, and Legal Info.
              </li>
              <li className="text-[14px]">
                Integrated Redux Toolkit (RTK) for global state management with
                persistence, improving scalability and reducing boilerplate
                compared to Context API.
              </li>
              <li className="text-[14px]">
                Created reusable components and layout templates with
                accessibility and responsiveness in mind, improving development
                speed and UI consistency.
              </li>
              <li className="text-[14px]">
                Collaborate with the backend developer to create Functional and
                Responsive web projects and consume necessary API
              </li>
              <li className="text-[14px]">
                Contributed to a shared GitHub organization repository,
                practicing clean code principles, version control with Git, and
                pull request workflows.
              </li>
            </ul>
          </div>
          <br />
          <div className="h-[] bg-[#1F2937]  p-5 rounded-[15px] flex flex-col gap-[10px] lg:p-[5%]">
            <p className="font-bold text-[25px] text-[#14A800]">AremxyPlug</p>
            <p className="font- text-[18px] font-bold">Remote</p>
            <p className="italic font-thin text-[14px]">
              June 12 2023 - January 10 2024
            </p>
            <p className="font- text-[18px] font-semibold">
              Front-end Developer
            </p>
            <ul className="list-disc flex flex-col gap-[10px]">
              <li className="text-[14px]">
                Built a Fintech, Telecom and Digital Service platform to develop
                and provide innovative products and services that combine
                financial technology with telecommunications technology
              </li>
              <li className="text-[14px]">
                Design and update layouts to meet usability and performance
                requirements.
              </li>
              <li className="text-[14px]">
                Collaborate with team to create Functional and Responsive web
                projects using React.js and Tailwind Css
              </li>
              <li className="text-[14px]">
                Develop and maintain courteous and effective working
                relationships.
              </li>
              <li className="text-[14px]">
                Paid attention to detail while completing assignments.
              </li>
              <li className="text-[14px]">
                Cultivate interpersonal skills by building positive
                relationships with others.
              </li>
            </ul>
          </div>
          <br />
          <div className="h-[] bg-[#1F2937]  p-5 rounded-[15px] flex flex-col gap-[10px] lg:p-[5%]">
            <p className="font-bold text-[25px] text-[#14A800]">
              ITSkillsCenter
            </p>
            <p className="italic font-thin text-[14px]">
              November 22 2020 - May 2023
            </p>
            <p className="font- text-[18px] font-semibold">
              Software Developer
            </p>
            <ul className="list-disc flex flex-col gap-[10px]">
              <li className="text-[14px]">
                Designed intuitive graphical user interfaces to improve user
                experience.
              </li>
              <li className="text-[14px]">
                Designed reusable and reliable code for use within distributed
                cloud environments.
              </li>
              <li className="text-[14px]">
                Developed responsive software for desktop and mobile view.
              </li>
              <li className="text-[14px]">
                Contributed ideas and suggestions in team meetings and delivered
                updates on deadlines, designs, and enhancements.
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
              <a
                href="https://www.therentree.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px] lg:rounded-[20px]"
                  src="./front-page.png"
                  alt="project-one"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px] lg:w-1/2">
              <p className="font-extrabold text-[18px] lg:text-[24px]">
                RENTREE
              </p>{" "}
              <p className="font-light text-justify lg:text-[20px]">
                Rentree is a modern booking platform designed to streamline
                short-term rentals and cruise bookings. It features two user
                roles: Buyers, who can browse listings, make reservations, and
                complete secure payments; and Sellers, who can upload and manage
                their properties—whether apartments, hotels, or boat cruises.
                The platform also includes a Marketplace section, allowing users
                to advertise various products such as food, gadgets, fashion
                items, and more. Rentree offers a seamless experience for both
                travelers and business owners in the hospitality space.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] px-1 h-[28px] rounded-[12px] flex justify-center items-center">
                  React + Typescript + Vite
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwind css
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Ant Design
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Redux Toolkit
                </p>
              </div>
              <a
                href="https://www.therentree.com"
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
              <a href="https://gailymaids.com" target="_blank" rel="noreferrer">
                {" "}
                <img
                  className="rounded-[10px] lg:rounded-[20px]"
                  src="./gailymaids.png"
                  alt="project-two"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px] lg:w-1/2">
              <p className="font-extrabold text-[18px] lg:text-[24px]">
                Gaily Maids
              </p>{" "}
              <p className="font-light text-justify lg:text-[20px]">
                An all-encompassing cleaning service platform designed to
                provide exceptional cleaning solutions for residential,
                commercial, and industrial clients. Our website serves as a
                one-stop destination for booking professional cleaning services,
                ensuring a sparkling clean environment for homes, offices, and
                other spaces.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Next.Js
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwind css
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  EmailJs
                </p>
              </div>
              <a
                href=" https://gailymaids.com"
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
          <div className="bg-[#1F2937] lg:flex lg:flex-row-reverse">
            <div className="bg-[#374151] p-5 lg:p-9 lg:w-1/2">
              <a
                href="https://multi-enterprise.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px]"
                  src="./aremxyplug.png"
                  alt="project-three"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px] lg:w-1/2">
              <p className="font-extrabold text-[18px] lg:text-[24px]">
                AremxyPlug
              </p>{" "}
              <p className="font-light text-justify lg:text-[20px]">
                AremxyPlug is a business enterprise and telecommunication
                service provider that offers individuals and businesses full
                access to quick, secure, and dependable solutions for their
                digital and telecommunication service needs.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  React
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwind css
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Context Api
                </p>
              </div>
              <a
                href="https://multi-enterprise.vercel.app/"
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
          <div className="bg-[#1F2937] lg:flex">
            <div className="bg-[#374151] p-5 lg:p-9 lg:w-1/2">
              <a
                href="https://prismatic-entremet-275fdf.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px]"
                  src="./blogify.png"
                  alt="project-four"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px] lg:w-1/2">
              <p className="font-extrabold text-[18px] lg:text-[24px]">
                Blogify
              </p>{" "}
              <p className="font-light text-justify lg:text-[20px]">
                An app that contains blogs and section to add blogs. Has a Store
                to buy books with integration of flutterwave to make payment.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  React
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwind css
                </p>
              </div>
              <a
                href="https://prismatic-entremet-275fdf.netlify.app/"
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
          <div className="bg-[#1F2937] lg:flex lg:flex-row-reverse">
            <div className="bg-[#374151] p-5 lg:p-9 lg:w-1/2">
              <a
                href="https://renttreeapp.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px]"
                  src="./rentree.png"
                  alt="project-five"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px] lg:w-1/2">
              <p className="font-extrabold text-[18px] lg:text-[24px]">
                Rentree Advertising
              </p>{" "}
              <p className="font-light text-justify lg:text-[20px]">
                A landing page conveying information about Rentree. Rentree is
                your go-to platform for booking hotels and renting apartments in
                Lagos for all your needs—whether it&apos;s a lodge, a getaway, a
                party, or any special event. We also offer boats for water
                voyages, ensuring your experience is seamless and memorable.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  React
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwindcss
                </p>
              </div>
              <a
                href="https://renttreeapp.com"
                className="underline flex items-center gap-[10px] justify-center"
              >
                <CiLink className="text-3xl" />
                <p>Link</p>{" "}
              </a>
            </div>
          </div>

          <br />
          <div className="bg-[#1F2937] lg:flex ">
            <div className="bg-[#374151] p-5 lg:p-9 lg:w-1/2">
              <a
                href="https://d-gadgets-store.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px]"
                  src="./d-gadget.png"
                  alt="project-five"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px] lg:w-1/2">
              <p className="font-extrabold text-[18px] lg:text-[24px]">
                D-gadget
              </p>{" "}
              <p className="font-light text-justify lg:text-[20px]">
                An e-commerce site to buy gadgets, customers are able to
                navigate through different gadgets and then add items to cart as
                well as remove items from cart. Purchase is made possible with
                the integration of flutterwave.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Html
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Css
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Javascript
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Tailwindcss
                </p>
              </div>
              <a
                href="https://d-gadgets-store.netlify.app/"
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
          <div className="bg-[#1F2937] lg:flex lg:flex-row-reverse">
            <div className="bg-[#374151] p-5 lg:p-9 lg:w-1/2">
              <a
                href="https://purple-web.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px]"
                  src="./purple.png"
                  alt="project-six"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px] lg:w-1/2">
              <p className="font-extrabold text-[18px] lg:text-[24px]">
                Purple
              </p>{" "}
              <p className="font-light text-justify lg:text-[20px]">
                A single page website template.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Html
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Css
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Javascript
                </p>
              </div>
              <a
                href="https://purple-web.netlify.app/"
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
          <div className="bg-[#1F2937] lg:flex">
            <div className="bg-[#374151] p-5 lg:p-9 lg:w-1/2">
              <a
                href="https://smart-invest-hub.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="rounded-[10px]"
                  src="./smarthubinvest.png"
                  alt="project-eight"
                />
              </a>
            </div>
            <div className=" p-5 flex flex-col gap-[18px] lg:w-1/2">
              <p className="font-extrabold text-[18px] lg:text-[24px]">
                Smart Invest Hub
              </p>{" "}
              <p className="font-light text-justify lg:text-[20px]">
                Unlock smarter investing with our AI-powered robo-advisor with a
                section where users can select their risk tolerance.
              </p>
              <div className="flex flex-wrap gap-[15px]">
                {" "}
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  Vite
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  React
                </p>
                <p className=" text-textColor bg-[#374151] w-[105px] h-[28px] rounded-[12px] flex justify-center items-center">
                  TailwindCss
                </p>
              </div>
              <a
                href="https://smart-invest-hub.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="underline flex items-center gap-[10px] justify-center"
              >
                <CiLink className="text-3xl" />
                <p>Link</p>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =============Section Six============== */}
      <div
        id="contact"
        className="bg-[#1F2937] px-[5%] mt-[20%] py-[15%] text-[#fff] lg:text-[25px] lg:mt-[10%] lg:py-[10%]"
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
            <div ref={textRef}>dedayo16@gmail.com</div>
            <RiFileCopyFill className="text-[20px]" onClick={handleCopyClick} />
          </div>
          <div className="flex justify-center items-center gap-[15px] font-semibold">
            <BsTelephone className="text-[24px]" />
            <div ref={textRef}>+2349127563048</div>
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
          href="https://www.linkedin.com/in/elijah-adeyeye-software-developer/"
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
