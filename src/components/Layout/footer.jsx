import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { Copyright } from "../../data";
import { FooterPages } from "../../data";
import TextField from '@mui/material/TextField';

export default function Footer() {
  let navigate = useNavigate();

  const goToPage = (e) => {
    navigate(e);
  };

  return (
    <div className="w-full h-full flex lg:justify-center justify-between bg-gradient-to-tr to-[#029797] via-[#12468f] from-[#003073]">
      <div className="lg:w-[1170px] w-full py-8 px-4 text-white">
        {/* header */}
        <div className="md:flex md:justify-between text-center">
          <div className="text-white text-[20px] py-3 md:py-0">P & A</div>
          <div className="flex justify-center p-3 md:p-0">
            <IconButton sx={{ px: "12px", py: "6px" }}>
              <TwitterIcon className="w-[44px] h-[34px] text-white hover:text-gray-600" />
            </IconButton>
            <IconButton sx={{ px: "12px", py: "6px" }}>
              <LinkedInIcon className="w-[44px] h-[34px] text-white hover:text-gray-600" />
            </IconButton>
            <IconButton sx={{ px: "12px", py: "6px" }}>
              <MailIcon className="w-[44px] h-[34px] text-white hover:text-gray-600" />
            </IconButton>
            <IconButton sx={{ px: "12px", py: "6px" }}>
              <PhoneIcon className="w-[44px] h-[34px] text-white hover:text-gray-600" />
            </IconButton>
          </div>
        </div>
        <hr
          className="h-[1px] w-full mt-8 mb-2"
          style={{
            border: 0,
            height: "1px",
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 1.0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
          }}
        />
        <div className="flex flex-col md:flex-row-reverse py-8 md:px-4">
          <div className="md:w-1/3 my-2 px-[40px]">
            <div className="mb-[10px] text-[20px]  text-[#bedaf4]">
              Newsletter
            </div>
            <div className="py-1 text-[15px] text-white">
              Subscribe to our newsletter and updates .
            </div>
            <TextField size="small" className="w-full" sx={{my: '10.5px',bgcolor:'white'}} id="outlined-basic" label="Full name" variant="filled" />
            <TextField size="small" className="w-full" sx={{bgcolor:'white'}} id="outlined-basic" label="Email address" variant="filled" />
            {/* <input
              className="my-[10.5px] py-2 px-4 w-full text-gray-600"
              placeholder="Full name"
              type="text"
            /> */}
            {/* <input
              className="my-[10.5px] py-2 px-4 w-full text-gray-600"
              placeholder="Email address"
              type="text"
            /> */}
            <Button
              sx={{
                color: "black",
                bgcolor: "#bedaf4",
                "&:hover": { bgcolor: "lightskyblue" },
                mt: "10px",
                mb: "40px",
              }}
              className="w-full"
            >
              SUBSCRIBE
            </Button>
          </div>
          <div className="md:w-2/3 md:text-start text-center">
            <div className="grid md:grid-cols-4 grid-cols-1 ">
              {FooterPages.map((item, i) => (
                <div key={item.name + "_" + i} className="px-4">
                  <div className="mb-[10px] text-[20px]  text-[#bedaf4]">
                    {item.name}
                  </div>
                  {item.data.map((data, i) => (
                    <div
                      key={data.name + "_" + i}
                      onClick={() => goToPage(data.url)}
                      className="py-1 text-[14px] text-white hover:text-gray-300 cursor-pointer"
                    >
                      {data.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {Copyright.map((item, i) => (
          <div key={item.name + "_" + i} className="text-[13px] mb-[10px]">{item.content}</div>
        ))}
        <div className="text-[16px] pt-4 pb-4 text-center">
          Terms of Use - Privacy Policy
        </div>
      </div>
    </div>
  );
}
