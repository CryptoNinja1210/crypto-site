import Layout from "../../components/Layout";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import { PeterInfo } from "../../data";
import { CareerInfos } from "../../data";

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

      <div className="bg-white flex justify-center">
        <div className="py-32  px-4 text-3xl w-full lg:w-[1170px] text-[#033360]">
          {CareerInfos.map((item, i) => (
            <p key={item.name + "_i"} className="pt-6 pb-5">{   i+1 + '.' +item.name}</p>
          ))}
        </div>
      </div>
    </Layout>
  );
}
