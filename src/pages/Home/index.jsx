import Layout from "../../components/Layout";
import Text from "../../components/Home/text";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Slides } from "../../data";
import { useState } from "react";
import "./carousel-with-custom-dots.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Home() {
  let navigate = useNavigate();
  const goTopage = (e) => {
    navigate(e);
  };

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };
  document.addEventListener("mousemove", handleMouseMove);

  return (
    <Layout>
      <div></div>
      <div className=" w-full h-screen flex justify-center">
        <div className="w-[1170px] p-4 mt-[200px] ">
          <object
            className={`duration-700 pointer-events-none absolute w-[50%] scale-150 lg:w-[700px] h-1/2 lg:h-[500px] opacity-20 blur-3xl will-change-transform`}
            style={{
              animationTimeline: "auto",
              animationRangeStart: "normal",
              animationRangeEnd: "normal",
              top: `${mouseY / 2}px`,
              left: `${mouseX / 2}px`,
              background:
                "linear-gradient(135deg, rgb(114, 46, 209) 0%, rgb(22, 119, 255) 30%, rgb(245, 34, 45) 70%, rgb(19, 194, 194) 100%) 0% 0% / 200% 200%",
              animation: "3s ease 0s infinite normal none running glow",
            }}
          ></object>
          <p className="md:mx-0 mx-2 font-[Playfair] text-gray-600 text-[2.5rem] pt-10 pb-5 ">
            Leading Global Investment Manager and Crypto Market Maker
          </p>
        </div>
      </div>

      <div className="bg-white flex justify-center">
        <div className="md:mx-0 mx-4 text-4xl font-[Playfair] py-32 text-blue-900">
          About Us
          <div className="pt-8 font-serif text-gray-600 text-base lg:text-xl lg:w-[1170px]">
            P&A is the Digital Asset Management Division Arm of Coban Capital.
            We focus on digital asset allocation with mitigated risk to our
            overall platform. Our core team members are from world-leading
            internet and finance companies, including the earliest adopters and
            professionals of cryptocurrency who boast rich experience in global
            operations and services in the industry. With our proprietary risk
            mitigation platform system and excellent experience, we are
            dedicated to building a highly secure, stable and efficient
            cryptocurrency multi-strategy fund.
          </div>
        </div>
        {/* </Fade> */}
      </div>

      <div className="w-full bg-gray-200 flex justify-center">
        <div className="flex flex-col md:flex-row justify-end">
          <div className="lg:w-2/5">
            <Text
              title="Investment Management"
              content="We seek to deliver you uncorrelated superior risk-adjusted returns
                through our actively managed sophisticated investment
                products."
            />
            <div className=" pb-16 px-4">
              <div
                className="duration-500 w-32 mx-4 px-2 my-auto py-3 rounded-md cursor-pointer text-white bg-blue-900 hover:bg-blue-800 hover:shadow-2xl"
                onClick={() => {
                  goTopage("/product");
                }}
              >
                LEARN MORE
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 h-full w-full overflow-hidden">
            <img
              className=" md:h-full w-full"
              src="/images/Home/skys1_rect.jpg"
              alt="investment architecture"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 flex absoulte">
        <div className="flex flex-col md:flex-row-reverse justify-end">
          <div className="lg:w-2/5">
            <Text
              title="Investment capital"
              content="Focuses on investment in Web 3.0, Layer 2 and DApps combining DeFi, NFT or DAO elements"
            />
            <div className=" pb-16 px-4">
              <div
                className=" duration-500 w-32 mx-4 px-2 my-auto py-3 rounded-md cursor-pointer text-white bg-blue-900 hover:bg-blue-800 hover:shadow-2xl"
                onClick={() => {
                  goTopage("/portfolio");
                }}
              >
                LEARN MORE
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 h-full w-full overflow-hidden mr-24">
            <img
              className=" md:h-full w-full"
              src="/images/Home/architecture4_rect.jpg"
              alt="investment architecture"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-tr to-gray-200 via-gray-300 from-gray-200 flex justify-center">
        <div className="flex flex-col md:flex-row justify-end">
          <div className="lg:w-2/5">
            <div className="py-24 px-4">
              <div className=" text-blue-900 text-3xl py-7">
                Crypto Market Maker for Token Projects and Cryptocurrency
                Exchanges
              </div>
              <div className="mb-5 text-base text-gray-500">
                Crypto Market Making. We provide you the liquidity needed to
                grow your token project and cryptocurrency exchange.
              </div>
              <div className=" pt-6 px-4">
                <div
                  className="duration-500 w-32 mx-4 px-2 my-auto py-3 rounded-md cursor-pointer text-white bg-blue-900 hover:bg-blue-800 hover:shadow-2xl"
                  onClick={() => {
                    goTopage("/market");
                  }}
                >
                  LEARN MORE
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 h-full w-full overflow-hidden">
            <img
              className=" md:h-full w-full"
              src="/images/Home/architecture1_rect.jpg"
              alt="investment"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 flex justify-center">
        <div className="py-16 md:px-4 w-full lg:w-[1170px] md:m-0 m-4">
          <p className="text-blue-900 text-2xl md:text-3xl my-6 text-center md:text-start">
            Our Competitive Advantage
          </p>
          {/* <div className="flex">
            <hr className="h-[5px] w-8 my-5 bg-[rgb(3,51,96)] mx-auto md:mx-0" />
          </div> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <div className="bg-white shadow-lg rounded-lg p-8 h-full">
              <p className="h-1/6 flex items-center text-2xl my-3">Team</p>
              <p className="text-gray-500 ">
                Our team comprises seasoned financial experts and crypto
                enthusiasts from around the world, offering a comprehensive
                understanding of global markets and local nuances. This
                expertise empowers us to make well-informed investment decisions
                that capitalize on unique opportunities in various regions.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 h-full">
              <p className="h-1/6 flex items-center text-2xl my-3">
                Advanced Analytical Tools
              </p>
              <p className=" text-gray-500">
                Leveraging cutting-edge data analytics and AI-driven
                technologies, we stay ahead of market trends and identify
                potential shifts in the cryptocurrency landscape. This enables
                us to make strategic adjustments to our investment strategies,
                optimizing returns and mitigating risks.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 h-full ">
              <p className="h-1/6 flex items-center text-2xl my-3">
                Strategic Risk Management
              </p>
              <p className="text-gray-500 ">
                Our holistic approach to risk management involves not only
                market analysis but also regulatory assessment and security
                evaluation. By proactively navigating regulatory changes and
                prioritizing robust security measures, we ensure the safety of
                our investors&apos; assets and maintain compliance with evolving
                standards.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 h-full">
              <p className="h-1/6 flex items-center text-2xl my-3">
                Global Network and Partnerships
              </p>
              <p className="text-gray-500 ">
                We&apos;ve cultivated strong relationships with key players in
                the cryptocurrency ecosystem, including exchanges, blockchain
                projects, and industry influencers. This network grants us
                access to exclusive insights, early-stage investment
                opportunities, and valuable partnerships that enhance our
                ability to generate superior returns.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-tr to-gray-200 via-gray-300 from-gray-400 flex justify-center">
        <div className="py-16 lg:pl-32 px-4 w-full lg:w-[1170px]">
          <p className="text-2xl md:text-3xl text-center text-blue-400">
            Our Partners
          </p>
          <div className="flex">
            <hr className="h-[5px] w-8 my-6 bg-blue-400 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="flex justify-center items-center px-2 py-4 mx-auto rounded-md border-2 border-blue-300 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-500 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="w-52 h-16"
                src="/images/partner1.png "
                alt="partner"
              />
            </div>
            <div className="flex justify-center items-center px-2 py-4 mx-auto rounded-md border-2 border-blue-300 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-500 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="w-52 h-16"
                src="/images/partner2.jpg"
                alt="partner"
              />
            </div>
            <div className="flex justify-center items-center px-2 py-4 mx-auto rounded-md border-2 border-blue-300 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-500 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="w-52 h-16"
                src="/images/partner3.png"
                alt="partner"
              />
            </div>
            <div className="flex justify-center items-center px-2 py-4 mx-auto rounded-md border-2 border-blue-300 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-500 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="w-52 h-16"
                src="/images/partner4.png"
                alt="partner"
              />
            </div>
            <div className="flex items-center px-2 py-2 mx-auto rounded-md border-2 border-blue-300 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-3 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="w-52 h-16 rounded-md"
                src="/images/partner5.jfif"
                alt="partner"
              />
            </div>
            <div className="flex justify-center items-center px-2 py-4 mx-auto rounded-md border-2 border-blue-300 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-500 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="w-52 h-16"
                src="/images/partner6.jfif"
                alt="partner"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full bg-[#eee] flex justify-center">
        <div className="flex flex-col md:flex-row justify-end">
          <div className="lg:w-2/5">
            <Text
              title="Crypto Market Maker for Token Projects and Cryptocurrency Exchanges"
              content="Crypto Market Making. We provide you the liquidity needed to grow your token project and cryptocurrency exchange."
            />
            <Button 
              sx={{
                color: "white",
                bgcolor: "#00306e",
                "&:hover": { bgcolor: "#00306e " },
              }}
              className="w-33 h-12">
              LEARN MORE
            </Button>
          </div>
          <div className="lg:w-2/5 h-full w-full overflow-hidden">
            <img
              className=" md:h-full w-full"
              src="/images/Home/skys9.jpg"
              alt="investment"
            />
          </div>
        </div>
      </div> */}

      <div className="w-full bg-gray-100 flex justify-center">
        <div className=" my-own-custom-container my-7 md:py-20 md:px-4 w-full lg:w-[1170px] md:m-0 m-4">
          <div className="flex justify-between my-6 md:mx-0 mx-3">
            <div className="text-blue-950 text-2xl md:text-3xl lg:text-4xl font-[Playfair] ">
              Latest insights from P&A
            </div>
            <div
              onClick={() => {
                goTopage("/news");
              }}
              className="duration-500 w-32 px-2 text-center py-3 rounded-md cursor-pointer text-white bg-violet-900 hover:bg-violet-800 active:bg-violet-950 hover:shadow-2xl"
            >
              View All
            </div>
          </div>
          <div className="my-own-custom-container carousel-with-custom-dots.css">
            <Carousel
              responsive={responsive}
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              focusOnSelect={false}
              infinite
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              showDots
              slidesToSlide={1}
            >
              {Slides.map((item, i) => (
                <a key={item.title + i} href={item.href}>
                  <div className=" cursor-pointer group mx-2 py-6">
                    <div className="w-full h-full overflow-hidden relative">
                      <div className=" object-fill rounded-sm flex z-20 w-32 h-9 bg-white absolute top-3 md:top-6 left-[-5px]">
                        <p className="m-auto self-center font-bold">
                          expert voice
                        </p>
                      </div>
                      <img
                        className="  w-96 h-64 group-hover:scale-110 duration-500"
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="flex w-32 h-10 lg:36 lg:h-16 bg-amber-700 absolute bottom-0 left-0 -translate-x-16 group-hover:translate-x-0 duration-500">
                        <div className="ml-auto absolute right-[-10px] self-center w-16 text-white text-xl lg:text-3xl">
                          &#x2192;
                        </div>
                      </div>
                    </div>
                    <p className=" z-10 group-hover:underline text-sm sm:text-md md:text-md pt-4">
                      {item.desc}
                    </p>
                  </div>
                </a>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </Layout>
  );
}
