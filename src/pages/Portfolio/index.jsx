import Layout from "../../components/Layout";
import { Slide } from "react-awesome-reveal";
import { PeterInfo } from "../../data";

export default function Portfolio() {
  return (
    <Layout>
      <div className="bg-gradient-to-bl from-[#0aa7f0] via-[#085988] to-[#01314d] w-full h-[668px] flex justify-center">
        <div className="lg:w-[1170px] w-full px-4 self-center">
          <Slide duration={2000} triggerOnce direction="right">
            <p className="text-white text-[2.5rem] pt-10 pb-5">
              Investment capital
            </p>
            <p className="text-white text-[1.25rem]">
              Focuses on investment in Web 3.0, Layer 2 and DApps combining
              DeFi, NFT or DAO elements
            </p>
          </Slide>
        </div>
      </div>

      <div className="w-full bg-white flex justify-center">
        <div className="py-32 px-4 w-full lg:w-[1170px]">
          <p className="text-2xl mt-6 mb-5 text-center text-black">
            Portfolio
          </p>
          <div className="flex">
            <hr className="h-[5px] w-8 my-6 bg-black mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 ">
            {Array(4).fill('').map(() => (
              <div className="group flex flex-col px-2 py-4 mx-auto border-[1px] rounded-xl hover:scale-[120%] transition-all duration-700 ease-in-out border-[#eee] bg-white w-52 h-70 object-cover items-center">
                <img
                  className="w-2/3"
                  src="/images/web3Fortune_logo.jpg"
                  alt=""
                />
                <div className="flex flex-col overflow-hidden text-center">
                  <p className="font-sans font-bold pt-5">Web 3.0</p>
                  <p className="mt-2 font-sans p-1 line-clamp-5" title="Singapore-based startup W3 Fortune PTE. LTD. (led by CEO Takashi Sugai) has raised 120 million yen in seed round funding from Relic Inc. and angel investors; its first project to be released will be CatRescue collectible NFTs.">
                    Singapore-based startup W3 Fortune PTE. LTD. (led by CEO Takashi Sugai) has raised 120 million yen in seed round funding from Relic Inc. and angel investors; its first project to be released will be CatRescue collectible NFTs.
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
