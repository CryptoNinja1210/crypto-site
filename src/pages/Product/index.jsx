import Layout from "../../components/Layout";
import { Terms } from "../../data";
import TextBox from "../../components/Team/TextBox";
import { ProductInfos } from "../../data";
// import { Slide } from "react-awesome-reveal";

export default function Product() {
  return (
    <Layout>
      <div>
        <div className="z-[0] bg-[url('/images/hftCrypto.jpg')] flex justify-center ">
          {/* <Slide duration={2000} direction="top"> */}
          <div className="lg:w-[1170px] w-full  p-4 my-32">
            <p className="font-[Playfair] text-white text-[2.5rem]  pb-5">
              Crypto Market-Neutral
            </p>
            <p className="text-white text-[1.25rem]">
              We aim to deliver you uncorrelated returns in the crypto space
              independent of market directionality
            </p>
          </div>
          {/* </Slide> */}
        </div>
      </div>

      {ProductInfos.map((item, i) =>(
        <TextBox
          key={item.title + i}
          bgColor={item.bgColor}
          title={item.title}
          description={item.description}
        />
      ))}

      <div className="w-screen bg-white flex md:flex-row flex-col justify-center">
        <div className="lg:ml-72 flex py-32 lg:justify-center px-4 w-full lg:w-[1170px] text-[#033360]">
          <div className="">
            <p className="text-3xl mt-[25.6px] mb-5">Summary of Terms</p>
            <table className="mt-4" border={0} cellPadding={0} cellSpacing={0}>
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
    </Layout>
  );
}
