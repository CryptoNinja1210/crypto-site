import Layout from "../../components/Layout";
// import { Slide } from "react-awesome-reveal";
// import { Fade } from "react-awesome-reveal";
import { PeterInfo } from "../../data";

export default function Team() {
  return (
    <Layout>
      {/* <div className="bg-gradient-to-bl from-[#0aa7f0] via-[#085988] to-[#01314d] w-full flex justify-center"> */}
      <div className="bg-gradient-to-tr to-lime-50 via-gray-200 from-blue-100  w-full flex justify-center">
        <div className="my-24 text-gray-500 lg:w-[1170px] w-full px-4 self-center">
          {/* <Slide duration={2000} triggerOnce direction="right"> */}
          <p className="font-[Playfair] text-[2.5rem] pt-10 pb-5">Team</p>
          <p className="text-[1.25rem]">
            Our team brings you a substantial amount of experience
          </p>
          {/* </Slide> */}
        </div>
      </div>

      <div className="bg-white flex justify-center">
        <div className="py-32  px-4 text-3xl w-full lg:w-[1170px] text-[#033360]">
          <p className="pt-6 pb-5">Leadership</p>
          <p className="mb-3 text-base text-gray-700">
            Our experienced team has the goal of delivering you superior and
            long-lasting value. We aim at understanding unique needs and offer
            you the right product.
          </p>
          <hr
            className="h-[1px] w-full mt-8 mb-2"
            style={{
              border: 0,
              height: "1px",
              backgroundImage:
                "linear-gradient(to right, rgba(3, 51, 96, 1.0), rgba(3, 51, 96, 0.2), rgba(3, 51, 96, 0))",
            }}
          />
          <div className="grid md:grid-cols-3 grid-cols-1">
            <div className=" mt-8 px-4 object-contain">
              {/* <Slide duration={2000} direction="up"> */}
              {/* <Fade duration={4000}> */}
              <img
                className="md:w-full w-[200px] h-[300px] md:h-full  object-contain"
                src="/images/Dr_Peter.jpg"
                alt="Dr peter"
              />
              {/* </Fade> */}
              {/* </Slide> */}
            </div>
            <div className="self-center col-span-2 px-4 lg:ml-[97.5px]">
              {/* <Fade duration={2000} triggerOnce damping={1}> */}
              <p className="my-5 text-4xl text-[#033360]">Dr. Peter</p>
              <p className="my-4 text-[24px] text-gray-700 italic font-['Playfair Display']">
                Senior Advisor
              </p>
              {/* </Fade> */}
              {/* <Fade delay={1e3} triggerOnce cascade damping={1e-1}> */}
              {PeterInfo.map((item, i) => (
                // <Fade
                //   triggerOnce
                //   key={"peter_" + i}
                //   delay={1e3 + i * 1000}
                //   damping={1}
                //   cascade
                // >
                <p key={item.content + i} className="text-base mb-3">
                  {item.content}
                </p>
                // </Fade>
              ))}
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
