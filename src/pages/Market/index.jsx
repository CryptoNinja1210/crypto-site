import Layout from "../../components/Layout";
import { Services } from "../../data";
import { Exchanges } from "../../data";

export default function Market() {
  return (
    <Layout>
      <div className=" bg-gradient-to-tr to-blue-50 via-gray-200 from-blue-50 w-full flex justify-center">
        {/* <div className=" bg-gradient-to-bl from-[#0aa7f0] via-[#085988] to-[#01314d] w-full flex justify-center"> */}
        <div className="my-16 md:my-40 lg:w-[1170px] w-full px-4 self-center">
          {/* <Slide duration={2000} triggerOnce direction="right"> */}
          <p className="font-[Playfair] text-3xl md:text-[2.5rem] pt-10 pb-5 leading-10">
            Crypto Market Maker for Token Projects and Cryptocurrency Exchanges
          </p>
          <p className="text-[1.25rem]">
            Crypto Market Making. We provide you the liquidity needed to grow
            your token project and cryptocurrency exchange.
          </p>
          {/* </Slide> */}
        </div>
      </div>

      <div className="z-[999] bg-white flex justify-center">
        <div className="py-8 md:py-24  px-4 text-3xl w-[1170px] text-blue-900">
          <p className="my-6 pb-5">Crypto currency market maker </p>
          <p className="mb-3 text-base text-gray-700">
            We are committed to excellence in offering premium market-making
            services, continuously advancing our expertise in algorithmic
            trading, and seamlessly integrating state-of-the-art technology
            across more than 100 exchanges. This unwavering dedication ensures
            that we provide unparalleled global market coverage, tailored to the
            unique and ever-evolving requirements of our esteemed clients,
            setting us apart in the financial industry.
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-200 flex justify-center">
        <div className="py-8 md:py-16 px-4 w-full lg:w-[1170px]">
          <p className="text-2xl mt-6 mb-5 text-center text-gray-700">
            Our Service
          </p>
          <div className="flex">
            <hr className="h-[5px] w-8 my-4 bg-gray-700 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {Services.map((data) => (
              <div
                key={data.name}
                className="group flex flex-col px-2 py-4 mx-auto border-[1px] rounded-xl hover:scale-[120%] transition-all duration-700 ease-in-out border-[#eee] bg-white w-56 h-70 object-cover items-center"
              >
                <div className="w-full h-20 flex">
                  <div
                    className="flex m-auto flex-col bg-cover bg-clip-text bg-center text-transparent text-5xl sm:text-6xl font-extrabold tracking-wide font-[Playfair] antialiased"
                    style={{
                      backgroundImage:
                        "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)",
                    }}
                  >
                    {data.icon}
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden text-center">
                  <p className="font-sans  py-2">{data.name}</p>
                  {/* <p className="mt-2 font-sans p-1 line-clamp-5">
                    {data.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 flex justify-center">
        <div className="py-8 md:py-20 px-4 w-full lg:w-[1170px]">
          <p className="text-2xl mb-10 text-center text-gray-700">
            Partner Exchanges
          </p>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Exchanges.map((data) => (
              <div
                key={data.name}
                className="rounded-2xl shadow-2xl bg-white  group flex flex-col px-2 py-4 mx-auto hover:scale-[120%] transition-all duration-700 ease-in-out after w-48 h-70 object-cover items-center"
              >
                <div className="w-full h-20 flex">
                  <img
                    className="object-contain h-16 mx-auto my-auto"
                    src={data.icon}
                    alt="coin logo"
                  />
                </div>
                <div className="flex flex-col overflow-hidden text-center">
                  <p className="font-sans font-bold pt-5">{data.name}</p>
                  {/* <p className="mt-2 font-sans p-1 line-clamp-5">
                    {data.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
          <div className="flex-col">
            <hr className="h-[4px] w-32 my-10 bg-gray-700 mx-auto" />
            <p className="font-bold text-center">AND 100+ MORE</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
