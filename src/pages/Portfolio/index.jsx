import Layout from "../../components/Layout";
// import { PeterInfo } from "../../data";
import { ContactInfo } from "../../data";
import { Companies } from "../../data";
import { InputBase } from "@mui/material";
import { useState } from "react";

export default function Portfolio() {
  const [show, setShow] = useState(false);
  const Form = () => {
    return (
      <div>
        <div className="text-[16px] mb-3">
          <p className="text-gray-700">
            For more information on our products, please fill out the form
            below. . A member of our team will be in touch with you shortly.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-bold text-[#337ab7]">
          {ContactInfo.map((item, i) => (
            <div key={item.name + "_product"} className="mb-3">
              <p className="mb-1 text-base text-bold text-[#3298eb]">
                {item.name}
              </p>
              <input
                id={i + "contact"}
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
        <div className=" duration-500 w-32 mx-4 px-7 my-auto py-3 rounded-md cursor-pointer text-white bg-[#00306e] hover:bg-blue-950 hover:shadow-red-900">
          SUBMIT
        </div>
      </div>
    );
  };
  return (
    <Layout>
      {/* <div className="bg-gradient-to-bl from-[#0aa7f0] via-[#085988] to-[#01314d] w-full flex justify-center"> */}
      <div className="bg-gradient-to-tr to-lime-50 via-gray-200 from-yellow-50 w-full flex justify-center">
        <div className="my-24 lg:w-[1170px] w-full px-4 self-center">
          {/* <Slide duration={2000} triggerOnce direction="right"> */}
          <p className="font-[Playfair] text-[2.5rem] pt-10 pb-5">
            Investment capital
          </p>
          <p className="text-[1.25rem]">
            Focuses on investment in Web 3.0, Layer 2 and DApps combining DeFi,
            NFT or DAO elements
          </p>
          {/* </Slide> */}
        </div>
      </div>

      <div className="w-full bg-white flex justify-center">
        <div className="py-8 md:py-16 px-4 w-full lg:w-[1170px]">
          <p className="text-3xl font-bold mt-6 mb-5 text-center text-gray-700">
            Portfolio
          </p>
          <div className="flex">
            <hr className="h-[5px] w-8 my-4 bg-gray-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {Companies.map((data) => (
              <div
                key={data.name}
                className="my-7 group flex flex-col px-2 py-4 mx-auto border-[1px] rounded-xl hover:scale-[120%] transition-all duration-700 ease-in-out border-[#eee] bg-white w-56 h-70 object-cover items-center"
              >
                <div className="w-full h-20 flex">
                  <img
                    className="object-contain h-16 mx-auto my-auto"
                    src={data.logo}
                    alt="company logo"
                  />
                </div>
                <div className="flex flex-col overflow-hidden text-center">
                  <p className="font-sans font-bold pt-5 text-gray-600">
                    {data.name}
                  </p>
                  <p className="mt-2 font-sans p-1 line-clamp-5 text-gray-500">
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
          <div
            onClick={() => setShow(true)}
            className="my-16 rounded-md text-gray-50 w-24 text-center hover:bg-blue-500 cursor-pointer p-3 bg-blue-600"
            hidden={show}
          >
            Apply
          </div>
          <p className="italic my-3">To apply click here.</p>
          {show ? <Form /> : ""}
        </div>
      </div>
      {/* Contact ends */}
    </Layout>
  );
}
