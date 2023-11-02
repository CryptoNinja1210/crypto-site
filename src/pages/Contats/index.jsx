import { Button, InputBase } from "@mui/material";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import Layout from "../../components/Layout";
import { ContactInfo } from "../../data";
import { MuiTelInput } from 'mui-tel-input'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Contacts() {

  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [phone, setPhone] = useState('');

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e);
  };

  


  return (
    <Layout>

      <div className="bg-gradient-to-bl from-[#029797] via-[#01547a] to-[#003073] w-full h-80 flex justify-center">
        <div className="lg:w-[1170px] w-full px-4 self-center">
          <Slide duration={2000} triggerOnce direction="right">
            <p className="text-white text-[2.5rem] pt-10 pb-5">Contact Us</p>
            <p className="text-white text-[1.25rem]">
              Contact us now by filling out the contact form below for more info
              regarding our products and services.
            </p>
          </Slide>
        </div>
      </div>

      {/* Contact begins */}
      <div className="bg-[#eee] w-full flex justify-center">
        <div className="lg:w-[1170px] w-full p-4 mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {/* <div className=" text-[16px] mr-5">
              <p className="py-4">
                For a complete list of{" "}
                <span className="text-[#01547a]">contact</span> information, visit
                our contact page.
              </p>
            </div> */}
            <div className="text-[16px]  mb-3">
              <p className="text-3xl">Get in touch</p>
              <p className="py-4">
                Cactus Custoody is trusted qualified custodian for institutional digital asset management and financial services. 
              </p>
              <p className="py-4">
                Reach out to learn more about our services,schedule a demo, or explore a partnership with us. Please complete the form below and our sales team will be in touch shortly. 
              </p>
              <p className="py-4">
                Cactus Custoody is trusted qualified custodian for institutional digital asset management and financial services. 
              </p>
              <p className="py-4">
                We will strictly protect your privacy in accordance with our <a className="underline text-blue-400" href="#policy">privacy policy</a>
              </p>
            </div>
            <div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="">
                  <div className="mt-8">
                    <span className="mb-1 text-bold  text-base">
                      Country
                    </span><span className="text-red-600"> * </span>
                    {/* <Select defaultValue={1}  id="countries" className="bg-gray-50 border text-gray-900 text-sm focus:ring-blue-500 focus:border-gray-600 block w-full p-2.5 h-12 ">
                      <Option defaultValue={1}>Choose a country</Option>
                      <Option value="US">United States</Option>
                      <Option value="CA">Canada</Option>
                      <Option value="FR">France</Option>
                      <Option value="DE">Germany</Option>
                    </Select> */}
                    <FormControl fullWidth>
                      <Select
                        sx={{height: '44px', bgcolor: 'white'}}
                        value={country}
                        onChange={handleCountry}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="">
                          <em>Please Select</em>
                        </MenuItem>
                        <MenuItem value={10}>United States</MenuItem>
                        <MenuItem value={20}>United Kingdom</MenuItem>
                        <MenuItem value={30}>Singapore</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="">
                  <div className="mt-8">
                    <span className="mb-1 text-bold  text-base">
                      Business Type
                    </span><span className="text-red-600"> * </span>
                    <FormControl fullWidth>
                      <Select
                        sx={{height: '44px', bgcolor: 'white'}}
                        value={type}
                        onChange={handleType}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="">
                          <em>Please Select</em>
                        </MenuItem>
                        <MenuItem value={10}>A</MenuItem>
                        <MenuItem value={20}>B</MenuItem>
                        <MenuItem value={30}>C</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                {ContactInfo.map((item) => (
                  <div key={item.name} className="mb-3">
                    <span className="mb-1 text-bold  text-base">
                      {item.name} 
                    </span><span className="text-red-700"> * </span>
                    <input
                      className="border-[1px] border-slate-300 focus:outline-sky-600 w-full h-11 mt-1 py-[10px] px-5"
                      type="text"
                    />
                  </div>
                ))}
              </div>
              <div className="mb-3">
                <span className="mb-1 text-bold  text-base">
                  Business Email
                </span><span className="text-red-700"> * </span>
                <input
                  className="border-[1px] border-slate-300 focus:outline-sky-600 w-full h-11 mt-1 py-[10px] px-5"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <span className="mb-1 text-bold  text-base">
                  Phone number
                </span><span className="text-red-600"> * </span>
                <MuiTelInput sx={{width: '100%', bgcolor: 'white'}} defaultCountry="US" value={phone} onChange={handlePhone} />
              </div>
            </div>
            
          </div>

          <div className="mb-3">
            <label className=""> Message (optional)</label>
            <InputBase
            className="focus:outline-black"
              id="user_message"
              multiline
              rows={7}
              variant="filled"
              placeholder=""
              sx={{
                width: "100%",
                height: "200px",
                border: "1px solid #CAD0D8",
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
            <div className="bg-white my-3 group flex flex-col px-2 py-4 mx-auto border-[1px] rounded-xl hover:scale-[120%] transition-all duration-500 ease-in-out border-[#eee] w-64 h-52 object-cover items-center">
              <div className="m-3 p-5 bg-[#eee] rounded-full"><AttachMoneyIcon/></div>
              <div className="flex flex-col overflow-hidden text-center">
                <p className="pt-5">Sales</p>
                <a href="#sales" className="p-1 text-blue-400">sales@matrixport.com</a>
              </div>
            </div>
            <div className="bg-white my-3 group flex flex-col px-2 py-4 mx-auto border-[1px] rounded-xl hover:scale-[120%] transition-all duration-500 ease-in-out border-[#eee] w-64 h-52 object-cover items-center">
              <div className="m-3 p-5 bg-[#eee] rounded-full"><SupportAgentIcon/></div>
              <div className="flex flex-col overflow-hidden text-center">
                <p className="pt-5">Support(Help Center)</p>
                <a href="#support" className="p-1 text-blue-400">support@matrixport.com</a>
              </div>
            </div>
            <div className="bg-white my-3 group flex flex-col px-2 py-4 mx-auto border-[1px] rounded-xl hover:scale-[120%] transition-all duration-500 ease-in-out border-[#eee] w-64 h-52 object-cover items-center">
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
