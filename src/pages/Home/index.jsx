import Layout from "../../components/Layout";
import Text from "../../components/Home/text";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Slides } from "../../data";
import { useState } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

// const CustomRightArrow = ({ onClick, ...rest }) => {
//   const {
//     onMove,
//     carouselState: { currentSlide, deviceType },
//   } = rest;
//   // onMove means if dragging or swiping in progress.
//   return <button onClick={() => onClick()} />;
// };

// const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//   const {
//     carouselState: { currentSlide },
//   } = rest;
//   return (
//     <div className="carousel-button-group">
//       {" "}
//       // remember to give it position:absolute
//       <ButtonOne
//         className={currentSlide === 0 ? "disable" : ""}
//         onClick={() => previous()}
//       />
//       <ButtonTwo onClick={() => next()} />
//       <ButtonThree onClick={() => goToSlide(currentSlide + 1)}>
//         {" "}
//         Go to any slide{" "}
//       </ButtonThree>
//     </div>
//   );
// };
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

  //   .site-1yws7e1 {
  //     z-index: 10;
  //     pointer-events: none;
  //     position: absolute;
  //     top: -250px;
  //     left: 50%;
  //     transform: translateX(-50%) scale(1.5);
  //     width: 600px;
  //     height: 400px;
  //     opacity: 0.2;
  //     filter: blur(69px);
  //     will-change: transform;
  //     animation-timeline: auto;
  //     animation-range-start: normal;
  //     animation-range-end: normal;
  //     background: linear-gradient(135deg, rgb(114, 46, 209) 0%, rgb(22, 119, 255) 30%, rgb(245, 34, 45) 70%, rgb(19, 194, 194) 100%) 0% 0% / 200% 200%;
  //     animation: 10s ease 0s infinite normal none running glow;
  // }
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
          <p className="md:mx-0 mx-2 font-[Playfair] text-slate-500 text-[2.5rem] pt-10 pb-5 ">
            Leading Global Investment Manager and Crypto Market Maker
          </p>
        </div>
      </div>

      <div className="bg-white flex justify-center">
        <div className="md:mx-0 mx-4 font-serif leading-10 tracking-wider py-32 text-xl md:text-2xl lg:text-3xl lg:w-[1170px] text-[#033360]">
          P&A is the Digital Asset Management Division Arm of Coban Capital. We
          focus on digital asset allocation with mitigated risk to our overall
          platform. Our core team members are from world-leading internet and
          finance companies, including the earliest adopters and professionals
          of cryptocurrency who boast rich experience in global operations and
          services in the industry. With our proprietary risk mitigation
          platform system and excellent experience, we are dedicated to building
          a highly 24% secure, stable and efficient cryptocurrency
          multi-strategy fund.
        </div>
        {/* </Fade> */}
      </div>

      <div className="w-full bg-[#eee] flex justify-center">
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
                className="duration-500 w-32 mx-4 px-2 my-auto py-3 rounded-md cursor-pointer text-white bg-[#00306e] hover:opacity-70 hover:shadow-2xl"
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
              alt="investment"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex absoulte">
        <div className="flex flex-col md:flex-row-reverse justify-end">
          <div className="lg:w-2/5">
            <Text
              title="Investment capital"
              content="Focuses on investment in Web 3.0, Layer 2 and DApps combining DeFi, NFT or DAO elements"
            />
            <div className=" pb-16 px-4">
              <div
                className=" duration-500 w-32 mx-4 px-2 my-auto py-3 rounded-md cursor-pointer text-white bg-[#00306e] hover:opacity-70 hover:shadow-2xl"
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
              alt="investment"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#033360] flex justify-center">
        <div className="flex flex-col md:flex-row justify-end">
          <div className="lg:w-2/5">
            <div className="py-24 px-4">
              <div className=" text-[#bedaf4] text-3xl py-7">
                Crypto Market Maker for Token Projects and Cryptocurrency
                Exchanges
              </div>
              <div className="mb-5 text-base text-white">
                Crypto Market Making. We provide you the liquidity needed to
                grow your token project and cryptocurrency exchange.
              </div>
              <div className=" pt-6 px-4">
                <div
                  className="w-32 mx-4 px-2 my-auto py-3 rounded-md cursor-pointer text-[#00306e] bg-white hover:bg-gray-500 hover:drop-shadow-xl duration-500"
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
      <div className="w-full bg-white flex justify-center">
        <div className="md:py-24 md:px-4 w-full lg:w-[1170px] md:m-0 m-4">
          <p className="md:font-bold text-2xl md:text-3xl mt-6 mb-5 text-center md:text-start">
            Our Competitive Advantage
          </p>
          <div className="flex">
            <hr className="h-[5px] w-8 my-5 bg-[rgb(3,51,96)] mx-auto md:mx-0" />
          </div>
          <div className="grid md:grid-cols-4">
            <div className="">
              <p className="text-2xl  my-4">Team</p>
              <p className="py-7 ">
                Our team comprises seasoned financial experts and crypto
                enthusiasts from around the world, offering a comprehensive
                understanding of global markets and local nuances. This
                expertise empowers us to make well-informed investment decisions
                that capitalize on unique opportunities in various regions.
              </p>
            </div>
            <div className="px-4">
              <p className="text-2xl my-3">Advanced Analytical Tools</p>
              <p className=" ">
                Leveraging cutting-edge data analytics and AI-driven
                technologies, we stay ahead of market trends and identify
                potential shifts in the cryptocurrency landscape. This enables
                us to make strategic adjustments to our investment strategies,
                optimizing returns and mitigating risks.
              </p>
            </div>
            <div className="px-4">
              <p className="text-2xl my-3">Strategic Risk Management</p>
              <p className=" ">
                Our holistic approach to risk management involves not only
                market analysis but also regulatory assessment and security
                evaluation. By proactively navigating regulatory changes and
                prioritizing robust security measures, we ensure the safety of
                our investors&apos; assets and maintain compliance with evolving
                standards.
              </p>
            </div>
            <div className="px-4">
              <p className="text-2xl my-3">Global Network and Partnerships</p>
              <p className=" ">
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
      <div className="w-full bg-[#033360] flex justify-center">
        <div className="py-20 lg:pl-32 px-4 w-full lg:w-[1170px]">
          <p className="md:font-bold text-2xl md:text-3xl text-center text-white">
            Our Partners
          </p>
          <div className="flex">
            <hr className="h-[5px] w-8 my-6 bg-white mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="flex justify-center items-center w-full sm:w-52 md:w-44 lg:w-52 h-20 px-2 py-4 mx-auto rounded-md border-2 border-cyan-500 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-500 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="m-auto w-full "
                src="/images/partner1.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center w-full sm:w-52 md:w-44 lg:w-52 h-20 px-2 py-4 mx-auto rounded-md border-2 border-cyan-500 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-500 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="m-auto sm:scale-x-150 h-full"
                src="/images/partner2.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center w-full sm:w-52 md:w-44 lg:w-52 h-20 px-2 py-4 mx-auto rounded-md border-2 border-cyan-500 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-500 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="m-auto  h-full"
                src="/images/partner3.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center w-full sm:w-52 md:w-44 lg:w-52 h-20 px-2 py-4 mx-auto rounded-md border-2 border-cyan-500 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-500 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="m-auto lg:scale-x-150 h-full"
                src="/images/partner4.png"
                alt=""
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

      <div className="w-full bg-white flex justify-center">
        <div className="my-own-custom-container my-7 md:py-20 md:px-4 w-full lg:w-[1170px] md:m-0 m-4">
          <div className="text-blue-950 text-3xl md:text-4xl font-bold my-6">
            Latest insights from 26 Degrees
          </div>
          <div className="my-own-custom-container">
            <Carousel
              // renderButtonGroupOutside={true}
              // arrows={false}
              // customButtonGroup={<ButtonGroup />}
              // customRightArrow={<CustomRightArrow />}
              swipeable={false}
              draggable={false}
              centerMode={true}
              // showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              keyBoardControl={true}
              customTransition="all .5"
              containerClass="carousel-container"
              removeArrowOnDeviceType={"mobile"}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {Slides.map((item, i) => (
                <a key={item.title + i} href={item.href}>
                  <div className=" cursor-pointer group">
                    <div className="w-full h-full overflow-hidden relative">
                      <div className="rounded-sm flex z-20 w-32 h-9 bg-white absolute top-3 md:top-6 left-[-5px]">
                        <p className="m-auto self-center font-bold">
                          expert voice
                        </p>
                      </div>
                      <img
                        className=" h-full w-ful group-hover:scale-110 duration-500"
                        src={item.image}
                        alt=""
                      />
                      <div className="flex w-36 h-10 md:h-16 bg-amber-700 absolute bottom-0 left-0 -translate-x-16 group-hover:translate-x-0 duration-500">
                        <div className="m-auto self-center mr-0 ml-auto w-16 text-white text-3xl">
                          &#x2192;
                        </div>
                      </div>
                    </div>
                    <p className=" z-10 group-hover:underline text-sm sm:text-md md:text-2xl font-bold pt-4">
                      {i + 1}.Melissa Downes Speaks on marketing panel at
                      Finance Magnates London Summit 2-23
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
