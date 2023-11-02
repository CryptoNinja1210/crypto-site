import { Button, InputBase } from "@mui/material";
import Layout from "../../components/Layout";
import { ContactInfo } from "../../data";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function Contacts() {
  return (
    <Layout>
      {/* Contact begins */}
      <div className="bg-gradient-to-bl from-[#029797] via-[#01547a] to-[#003073] w-full h-screen flex justify-center">
        <div className="lg:w-[1170px] w-full p-4 mt-[200px]">
          <p className="mt-6 mb-5 text-2xl text-white">Contact Us</p>
          <div className="text-[16px] mb-3">
            <p className="text-white">
              Contact us now by filling out the contact form below for more info
              regarding our products and services.
            </p>
          </div>
          <p className="text-white text-[16px] mb-3">
            For a complete list of{" "}
            <span className="text-slate-400">contact</span> information, visit
            our contact page.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {ContactInfo.map((item) => (
              <div key={item.name} className="mb-3">
                <span className="mb-1 text-bold text-white text-base">
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
              <span className="mb-1 text-bold text-white text-base">
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
            <label className="text-white"> Message (optional)</label>
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
      {/* Email Contact ends */}
    </Layout>
  );
}