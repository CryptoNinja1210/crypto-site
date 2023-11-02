import { Button, InputBase } from "@mui/material";
import Layout from "../../components/Layout";
import { ContactInfo } from "../../data";
import { Terms } from "../../data";
import { Slide } from "react-awesome-reveal";

export default function Product() {
  return (
    <Layout>
      <div>
        <div className="z-[0] bg-[url('/images/hftCrypto.jpg')] bg-no-repeat  w-full h-screen flex justify-center ">
          <Slide duration={2000} direction="top">
            <div className="lg:w-[1170px] w-full h-[668px] p-4 mt-[300px]">
              <p className="text-white text-[2.5rem] pt-10 pb-5">
                Crypto Market-Neutral
              </p>
              <p className="text-white text-[1.25rem]">
                We aim to deliver you uncorrelated returns in the crypto space
                independent of market directionality
              </p>
            </div>
          </Slide>
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

      <div className="z-[999] bg-white flex justify-center">
        <div className="py-32  px-4 text-3xl w-[1170px] text-[#033360]">
          <p className="pt-6 pb-5">Investment Philosophy</p>
          <p className="mb-3 text-base text-black">
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
          <p className="mb-3 text-base text-black">
            Disclaimer: these investment products involve substantial risks of
            loss.
          </p>
        </div>
      </div>

      <div className="bg-[#eee] flex justify-center">
        <div className="py-32  px-4 text-3xl w-[1170px] text-[#033360]">
          <p className="pt-6 pb-5">Major Beneficiaries</p>
          <p className="mb-3 text-base text-black">
            Potential clients for our Crypto Market-Neutral program include
            HNWI's who want to achieve an active exposure to the crypto market,
            investors who already own cryptocurrencies and want to have an alpha
            overlay on top of their long-term holdings, family offices, and
            institutional investors. In particular, HNWI's usually do not have
            the time and resources to perform financial research and constantly
            monitor their investments, so it is preferable for them to delegate
            the management of their capital to investment professionals. Family
            offices can invest in the strategy in an optic of portfolio
            diversification to benefit from investing in an investment product
            with performance uncorrelated to their current holdings. Lastly,
            institutional investors can allocate to a market-neutral crypto
            investment product in a core-satellite approach to achieve exposure
            to the cryptocurrency market through an actively managed investment
            product.
          </p>
        </div>
      </div>

      <div className="w-screen bg-white flex md:flex-row flex-col justify-center">
        <div className="lg:ml-72 flex py-32 lg:justify-center px-4 w-full lg:w-[1170px] text-[#033360]">
          <div className="">
            <p className="text-3xl mt-[25.6px] mb-5">Summary of Terms</p>
            <table className="mt-4" border={0} cellPadding={0} cellsapcing={0}>
              <tbody className="text-[1em]">
                {Terms.map((item, i) => (
                  <tr
                    key={item.name + i}
                    className="border-b-2 border-[#b3cce6]"
                  >
                    <td className="py-[0.5em] pr-[2em] border-t-2 border-[#b3cce6] text-[1em] font-bold">
                      {item.name}
                    </td>
                    <td className="border-t-2 border-[#b3cce6]">
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

      <div className="bg-[#033360] flex justify-center">
        <div className="flex md:flex-row flex-col w-[1170px] py-32  px-4  text-white">
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

      <div className="w-full bg-[#eee] flex justify-center">
        <div className="lg:w-[1170px] w-full py-6 px-4 ">
          <p className="mt-6 mb-5 text-2xl">Contact Form</p>
          <div className="text-[16px] mb-3">
            <p className="text-[black]">
              For more information on our products, please fill out the form
              below. . A member of our team will be in touch with you shortly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-bold text-[#337ab7]">
            {ContactInfo.map((item) => (
              <div key={item.name + "_product"} className="mb-3">
                <p className="mb-1 text-base text-bold text-[#3298eb]">
                  {item.name}
                </p>
                <input
                  className="w-full h-11 mt-1 py-[10px] px-5"
                  placeholder={item.name}
                  type="text"
                />
              </div>
            ))}
          </div>
          <div className="mb-3">
            <label> Message (optional)</label>
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
    </Layout>
  );
}