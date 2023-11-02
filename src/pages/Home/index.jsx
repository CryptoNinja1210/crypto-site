import { Button, InputBase } from "@mui/material";
import Layout from "../../components/Layout";
import Text from "../../components/Home/text";
import { ContactInfo } from "../../data";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-bl from-[#029797] via-[#01547a] to-[#003073] w-full h-screen flex justify-center">
        <div className="w-[1170px] p-4 mt-[200px]">
          <Slide duration={2000} direction="down">
            <p className="text-white text-[2.5rem] pt-10 pb-5">
              Leading Global Investment Manager and Crypto Market Maker
            </p>
          </Slide>
        </div>
      </div>

      <div className="bg-white flex justify-center">
        <Fade cascade duration={2000}>
          <div className="py-32 md:pl-32 px-4 text-3xl lg:w-[1170px] text-[#033360]">
            We act as a trusted partner for institutions and individuals
            globally looking to deploy their capital and enhance their
            liquidity.
          </div>
        </Fade>
      </div>

      {/* <div className="w-full bg-[#abb8c3] flex justify-center">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5">
            <Text />
          </div>
          <div className="md:w-2/5 h-full overflow-hidden absolute right-0">
            <img
              className=" md:h-[428px] w-full"
              src="/images/Home/skys1_rect.jpg"
              alt="investment"
            />
          </div>
        </div>
      </div> */}
      <div className="w-full bg-[#eee] flex justify-center">
        <div className="flex flex-col md:flex-row justify-end">
          <div className="lg:w-2/5">
            <Text
              title="Investment Management"
              content="We seek to deliver you uncorrelated superior risk-adjusted returns
                through our actively managed sophisticated investment
                products."
            />
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
                Bluequant Accelerator
              </div>
              <div className="mb-3 text-base text-white">
                Focused on Investment capital to exceptional proprietary teams
                enabling them to manage their digital assets investment process.
              </div>
              <Button
                sx={{
                  color: "white",
                  bgcolor: "#00306e",
                  "&:hover": { bgcolor: "#00306e " },
                }}
                className="w-33 h-12"
              >
                LEARN MORE
              </Button>
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
          <p className="text-2xl mt-6 mb-5 text-center md:text-start">
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
                We&apos;ve cultivated strong relationships with key players in the
                cryptocurrency ecosystem, including exchanges, blockchain
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
        <div className="py-32 lg:pl-32 px-4 w-full lg:w-[1170px]">
          <p className="text-2xl mt-6 mb-5 text-center text-white">
            Our Partners
          </p>
          <div className="flex">
            <hr className="h-[5px] w-8 my-6 bg-white mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="flex justify-center items-center w-full sm:w-52 md:w-44 lg:w-52 h-20 px-2 py-4 mx-auto rounded-md border-2 border-cyan-500 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-100 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="m-auto w-full "
                src="/images/partner1.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center w-full sm:w-52 md:w-44 lg:w-52 h-20 px-2 py-4 mx-auto rounded-md border-2 border-cyan-500 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-100 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="m-auto sm:scale-x-150 h-full"
                src="/images/partner2.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center w-full sm:w-52 md:w-44 lg:w-52 h-20 px-2 py-4 mx-auto rounded-md border-2 border-cyan-500 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-100 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="m-auto  h-full"
                src="/images/partner3.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center w-full sm:w-52 md:w-44 lg:w-52 h-20 px-2 py-4 mx-auto rounded-md border-2 border-cyan-500 shadow-md hover:shadow-red-300 shadow-white bg-white transition duration-100 hover:-hue-rotate-90 hover:scale-110">
              <img
                className="m-auto lg:scale-x-150 h-full"
                src="/images/partner4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#eee] flex justify-center">
        <div className="flex flex-col md:flex-row justify-end">
          <div className="lg:w-2/5">
            <Text
              title="Crypto Market Maker for Token Projects and Cryptocurrency Exchanges"
              content="Crypto Market Making. We provide you the liquidity needed to grow your token project and cryptocurrency exchange."
            />
          </div>
          <div className="lg:w-2/5 h-full w-full overflow-hidden">
            <img
              className=" md:h-full w-full"
              src="/images/Home/skys9.jpg"
              alt="investment"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white flex justify-center">
        <div className="md:py-24 md:px-4 w-full lg:w-[1170px] md:m-0 m-4">
          <p className="text-2xl mt-6 mb-5 text-center md:text-start">
            Media Coverage
          </p>
          <div className="flex">
            <hr className="h-[5px] w-8 my-6 bg-[rgb(3,51,96)] mx-auto md:mx-0" />
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1">
            {/* <div className="">
              <img
                className="w-full md:w-[263px] md:h-[138px]"
                src="/images/Home/hedgeweek.png"
                alt=""
              />
            </div> */}
            <p className="self-center text-[26px] text-[rgb(3,51,96)] mt-5 mb-4">
              News
            </p>
            <div className="col-span-3">
              <p className="text-[26px] mt-5 mb-4">
                Collaboration announcement
              </p>
              <p className="text-[16px] mb-3">
                In this press release . We Announced today our collaborations …
              </p>
              <p className="text-[13px] mb-[10px]">INVESTMENT RELATIONS TEAM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact begins */}
      <div className="w-full bg-[#eee] flex justify-center">
        <div className="lg:w-[1170px] w-full py-6 px-4 ">
          <p className="mt-6 mb-5 text-2xl">Contact</p>
          <div className="text-[16px] mb-3">
            <p className="text-[black]">
              Contact us now by filling out the contact form below for more info
              regarding our products and services.
            </p>
          </div>
          <p className="text-[16px] mb-3">
            For a complete list of{" "}
            <span className="text-[#337ab7]">contact</span> information, visit
            our contact page.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {ContactInfo.map((item) => (
              <div key={item.name} className="mb-3">
                <span className="mb-1 text-bold text-[#3298eb] text-base">
                  {item.name} 
                </span><span className="text-red-700"> * </span>
                <input
                  className="w-full h-11 mt-1 py-[10px] px-5"
                  type="text"
                />
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="my-3">
              <span className="mb-1 text-bold text-[#3298eb] text-base">
                Country
              </span><span className="text-red-600"> * </span>
              <select id="countries" class="bg-gray-50 border text-gray-900 text-sm focus:ring-blue-500 focus:border-gray-600 block w-full p-2.5 h-12 ">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label> Message (optional)</label>
            <InputBase
              id="user_message"
              multiline
              rows={7}
              variant="filled"
              placeholder=""
              sx={{
                width: "100%",
                height: "200px",
                border: "1px solid #CAD0D8",
                "&:focus": {
                  borderColor: "black",
                },
                borderRadius: "10px",
                background: "#F9FBFF",
                boxSizing: "border-box",
                mt: "4px",
                mb: "24px",
                p: "11px 21px",
              }}
            />
          </div>
          <Button
            sx={{
              color: "white",
              bgcolor: "#00306e",
              "&:hover": { bgcolor: "#00306e " },
            }}
            className="mt-[10px] mb-[14px] py-3 px-5 w-[94px] h-[47px]"
          >
            SUBMIT
          </Button>
        </div>
      </div>
      {/* Contact ends */}

      {/* Email Contact begins */}
      <div className="w-full bg-[#eee] flex justify-center">
        <div className="py-12 px-4 w-full lg:w-[1170px]">
          <p className="text-2xl mt-8 mb-7 text-center text-black">
            Email Contact
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="bg-white m-1 group flex flex-col px-2 py-4 mx-auto border-[1px] rounded-xl hover:scale-[120%] transition-all duration-500 ease-in-out border-[#eee] w-64 h-52 object-cover items-center">
              <div className="m-3 p-5 bg-[#eee] rounded-full"><AttachMoneyIcon/></div>
              <div className="flex flex-col overflow-hidden text-center">
                <p className="pt-5">Sales</p>
                <a href="#sales" className="p-1 text-blue-400">sales@matrixport.com</a>
              </div>
            </div>
            <div className="bg-white m-1 group flex flex-col px-2 py-4 mx-auto border-[1px] rounded-xl hover:scale-[120%] transition-all duration-500 ease-in-out border-[#eee] w-64 h-52 object-cover items-center">
              <div className="m-3 p-5 bg-[#eee] rounded-full"><SupportAgentIcon/></div>
              <div className="flex flex-col overflow-hidden text-center">
                <p className="pt-5">Support(Help Center)</p>
                <a href="#support" className="p-1 text-blue-400">support@matrixport.com</a>
              </div>
            </div>
            <div className="bg-white m-1 group flex flex-col px-2 py-4 mx-auto border-[1px] rounded-xl hover:scale-[120%] transition-all duration-500 ease-in-out border-[#eee] w-64 h-52 object-cover items-center">
              <div className="m-3 p-5 bg-[#eee] rounded-full"><AutoStoriesIcon /></div>
              <div className="flex flex-col overflow-hidden text-center">
                <p className="pt-5">Press</p>
                <a href="#press" className="p-1 text-blue-400">pr@matrixport.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
