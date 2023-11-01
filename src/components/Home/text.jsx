import { Button } from "@mui/material";
export default function Text({ title, content }) {
  return (
    <div className="py-24 px-4">
      <div className=" text-[#033360] text-3xl py-7">{title}</div>
      <div className="mb-3 text-base text-black">{content}</div>
      {/* <div className="mb-3 text-base text-black">
        Disclaimer: commodity trading involves a substantial risk of loss.{content2}
      </div> */}
      <Button sx={{ bgcolor: "#033360", color: "white" }} className="w-33 h-12">
        LEARN MORE
      </Button>
    </div>
  );
}
