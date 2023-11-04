import Layout from "../../components/Layout";
import { Slide } from "react-awesome-reveal";
// import { PeterInfo } from "../../data";
import { ContactInfo } from "../../data";
import { Companies } from "../../data";
import { Button, InputBase } from "@mui/material";



export default function Portfolio() {
  return (
    <Layout>
      <div className="bg-gradient-to-bl from-[#0aa7f0] via-[#085988] to-[#01314d] w-full h-80 flex justify-center">
        <div className="lg:w-[1170px] w-full px-4 self-center">
          {/* <Slide duration={2000} triggerOnce direction="right"> */}
            <p className="text-white text-[2.5rem] pt-10 pb-5">
              Investment capital
            </p>
            <p className="text-white text-[1.25rem]">
              Focuses on investment in Web 3.0, Layer 2 and DApps combining
              DeFi, NFT or DAO elements
            </p>
          {/* </Slide> */}
        </div>
      </div>

      <div className="w-full bg-white flex justify-center">
        <div className="py-20 px-4 w-full lg:w-[1170px]">
          <p className="text-2xl mt-6 mb-5 text-center text-black">
            Portfolio
          </p>
          <div className="flex">
            <hr className="h-[5px] w-8 my-6 bg-black mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {Companies.map((data) => (
              <div key={data.name} className="my-7 group flex flex-col px-2 py-4 mx-auto border-[1px] rounded-xl hover:scale-[120%] transition-all duration-700 ease-in-out border-[#eee] bg-white w-56 h-70 object-cover items-center">
                <div className="w-full h-20 flex">
                  <img
                    className="object-contain h-16 mx-auto my-auto"
                    src={data.logo}
                    alt=""
                  />
                </div>
                <div className="flex flex-col overflow-hidden text-center">
                  <p className="font-sans font-bold pt-5">{data.name}</p>
                  <p className="mt-2 font-sans p-1 line-clamp-5">
                    {data.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact begins */}
      <div className="w-full bg-[#eee] flex justify-center">
        <div className="lg:w-[1170px] w-full py-6 px-4 ">
          <p className="mt-6 mb-5 text-2xl">Apply for Investment Capital</p>
          <div className="text-[16px] mb-3">
            <p className="text-[black]">
              For more information on our products, please fill out the form
              below. . A member of our team will be in touch with you shortly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-bold text-[#337ab7]">
            {ContactInfo.map((item,i) => (
              <div key={item.name + "_product"} className="mb-3">
                <p className="mb-1 text-base text-bold text-[#3298eb]">
                  {item.name}
                </p>
                <input
                  id={i+"contact"}
                  className="w-full h-11 mt-1 py-[10px] px-5"
                  placeholder={item.name}
                  type="text"
                />
              </div>
            ))}
          </div>
          <div className="mb-3">
            <label htmlFor="user_message2"> Message (optional)</label>
            <InputBase
              id="user_message2"
              multiline
              rows={7}
              variant="filled"
              placeholder=""
              sx={{
                width: "100%",
                height: "200px",
                border: "1px solid #CAD0D8",
                "&focus": { border: "1px solid black" },
                "&active": { border: "1px solid black" },
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

      
    </Layout>
  );
}
