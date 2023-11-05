import Layout from "../../components/Layout";
import { CareerInfos } from "../../data";
import { Button } from "@mui/material";

export default function Careers() {
  return (
    <Layout>
      <div className="bg-gradient-to-bl from-[#0aa7f0] via-[#085988] to-[#01314d] w-full flex justify-center">
        <div className="my-24 lg:w-[1170px] w-full px-4 self-center">
          {/* <Slide duration={2000} triggerOnce direction="right"> */}
            <p className="text-white text-[2.5rem] pt-10 pb-5">Careers</p>
            <p className="text-white text-[1.25rem]">
            Join us to shape the financial future. 
            </p>
          {/* </Slide> */}
        </div>
      </div>

      <div className="bg-[#eee] flex justify-center">
        <div className="py-20  px-4 text-3xl w-full lg:w-[1170px] text-[#033360]">
          
          <div className="bg-white my-5 flex justify-between">
            <p className="self-center px-4">Engineering</p>
            <div className=" py-7 px-4">
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
          </div>
          <div className="bg-white my-5 flex justify-between">
            <p className="self-center px-4">Compilance office</p>
            <div className=" py-7 px-4">
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
          </div>
          <div className="bg-white my-5 flex justify-between">
            <p className="self-center px-4">Business development</p>
            <div className=" py-7 px-4">
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
          </div>
          <div className="bg-white my-5 flex justify-between">
            <p className="self-center px-4">Head operations</p>
            <div className=" py-7 px-4">
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
          </div>
          <div className="bg-white my-5 flex justify-between">
            <p className="self-center px-4">Legal officer</p>
            <div className=" py-7 px-4">
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
          </div>
          <div className="bg-white my-5 flex justify-between">
            <p className="self-center px-4">Software developer</p>
            <div className=" py-7 px-4">
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
          </div>
          <div className="bg-white my-5 flex justify-between">
            <p className="self-center px-4">Software Designer</p>
            <div className=" py-7 px-4">
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
          </div>
          <div className="bg-white my-5 flex justify-between">
            <p className="self-center px-4">Portfolio</p>
            <div className=" py-7 px-4">
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
