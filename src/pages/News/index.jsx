import Layout from "../../components/Layout";
import "react-multi-carousel/lib/styles.css";
import { Slides } from "../../data";

export default function News() {
  return (
    <Layout>
      <div className="w-full bg-gray-100 flex justify-center">
        <div className="mx-2 my-own-custom-container py-16  md:py-28 md:px-4 w-full lg:w-[1170px]">
          <div className="my-12 md:mx-0 mx-3 text-blue-950 text-2xl md:text-3xl lg:text-4xl font-[Playfair] ">
            Latest insights from P&A
          </div>
          <div className="my-own-custom-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {Slides.map((item, i) => (
                <a key={item.title + i} href={item.href}>
                  <div className=" cursor-pointer group ">
                    <div className="w-full h-full overflow-hidden relative">
                      <div className=" object-fill rounded-sm flex z-20 w-32 h-9 bg-white absolute top-3 md:top-6 left-[-5px]">
                        <p className="m-auto self-center font-bold">
                          expert voice
                        </p>
                      </div>
                      <img
                        className="  w-96 h-64 group-hover:scale-110 duration-500"
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="flex w-32 h-10 lg:36 lg:h-16 bg-amber-700 absolute bottom-0 left-0 -translate-x-16 group-hover:translate-x-0 duration-500">
                        <div className="ml-auto absolute right-[-10px] self-center w-16 text-white text-xl lg:text-3xl">
                          &#x2192;
                        </div>
                      </div>
                    </div>
                    <p className=" z-10 group-hover:underline text-sm sm:text-md md:text-md pt-4">
                      {item.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
