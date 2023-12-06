import Layout from "../../components/Layout";
import { Terms } from "../../data";

export default function Product() {
  return (
    <Layout>
      <div>
        {/* <div className="z-[0] bg-[url('/images/hftCrypto.jpg')] flex justify-center "> */}
        <div className="z-[0] bg-gradient-to-tr to-violet-50 via-slate-200 from-blue-100 flex justify-center ">
          {/* <Slide duration={2000} direction="top"> */}
          <div className="text-gray-600 lg:w-[1170px] w-full  p-4 my-32">
            <p className="font-[Playfair] text-[2.5rem]  pb-5">
              Crypto Market-Neutral
            </p>
            <p className="text-[1.25rem]">
              We aim to deliver you uncorrelated returns in the crypto space
              independent of market directionality
            </p>
          </div>
          {/* </Slide> */}
        </div>
      </div>

      {/* <hr
            className="h-[1px] w-full mt-8 mb-2"
            style={{
              border: 0,
              height: "1px",
              backgroundImage:
                "linear-gradient(to right, rgba(3, 51, 96, 1.0), rgba(3, 51, 96, 0.2), rgba(3, 51, 96, 0))",
            }}
          /> */}

      <div className="z-[999] bg-gray-50 flex justify-center">
        <div className="py-10 md:py-32  px-4 text-3xl w-[1170px] text-[#033360]">
          <p className="pt-6 pb-5">Investment Philosophy</p>
          <p className="mb-3 text-base text-gray-700">
            Exceptional levels of volatility and market drops of around 80%
            present in the cryptocurrency space highlight the need for holders
            of cryptocurrencies and investors in the space for a market-neutral
            crypto investment strategy, capable of generating returns
            independent of market directionality. In addition, lack of
            institutional liquidity on crypto exchanges, combined to substantial
            discrepancies in prices on different exchanges at various times,
            provide oppportunities for market-makers and arbitrageurs across
            exchanges to collect the spread through a market-neutral approach.
            We aim at exploiting these market inefficiencies by providing
            liquidity on several crypto exchanges to collect a spread through a
            market-neutral approach.
          </p>
          <p className="mb-3 text-base text-gray-700">
            Disclaimer: these investment products involve substantial risks of
            loss.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 flex justify-center">
        <div className="py-12 md:py-32  px-4 text-3xl w-[1170px] text-blue-900">
          <p className="pt-6 pb-5">Major Beneficiaries</p>
          <p className="mb-3 text-base text-gray-700">
            Potential clients for our Crypto Market-Neutral program include
            HNWI&apos;s who want to achieve an active exposure to the crypto
            market, investors who already own cryptocurrencies and want to have
            an alpha overlay on top of their long-term holdings, family offices,
            and institutional investors. In particular, HNWI&apos;s usually do
            not have the time and resources to perform financial research and
            constantly monitor their investments, so it is preferable for them
            to delegate the management of their capital to investment
            professionals. Family offices can invest in the strategy in an optic
            of portfolio diversification to benefit from investing in an
            investment product with performance uncorrelated to their current
            holdings. Lastly, institutional investors can allocate to a
            market-neutral crypto investment product in a core-satellite
            approach to achieve exposure to the cryptocurrency market through an
            actively managed investment product.
          </p>
        </div>
      </div>

      <div className="w-screen bg-white flex md:flex-row flex-col justify-center">
        <div className="lg:ml-72 flex py-12 md:py-32 lg:justify-center px-4 w-full lg:w-[1170px] text-blue-900">
          <div className="">
            <p className="text-3xl mt-[25.6px] mb-5">Summary of Terms</p>
            <table className="mt-4 text-gray-800" cellPadding={0}>
              <tbody className="text-md ">
                {Terms.map((item, i) => (
                  <tr
                    key={item.name + i}
                    className="border-[1px] border-gray-200 "
                  >
                    <td className="p-3 pr-[2em] border-[1px] border-gray-200 text-[1em] font-bold">
                      {item.name}
                    </td>
                    <td className=" p-1 border-[1px] border-gray-200">
                      {item.content}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="">
          <img
            className="w-full md:w-[960px] h-full md:h-[768px] object-contain"
            src="/images/blockchain.jpg"
            alt="blockchain"
          />
        </div>
      </div>

      <div className="bg-gray-50 flex justify-center">
        <div className="flex md:flex-row flex-col w-[1170px] py-12 md:py-32  px-4  text-gray-800">
          <div className="md:w-1/2">
            <p className="pt-6 pb-5 text-3xl ">Investment Technology</p>
            <p className="mb-3 text-base">
              The trading strategy needs a fast and stable technological
              infrastructure to be able anticipate the competition and capture
              opportunities that only exist for a fraction of a second. We have
              invested a substantial amount of time and resources in developing
              a fully proprietary high-speed technology able to capture these
              opportunities by achieving latencies at the microsecond level.
            </p>
            <p className="mb-3 text-bas">
              Disclaimer: these investment products involve substantial risks of
              loss.
            </p>
          </div>
          <div className="md:w-1/2 ml-0 lg:ml-[220px]">
            <img
              className="w-full md:w-[609px] h-full md:h-[400px] object-contain"
              src="/images/hftTechnology2.jpg"
              alt="blockchain"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
