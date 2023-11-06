

export default function TextBoxt ({ bgColor, title, description}) {
  return(
    <div className={`${bgColor } text-white flex justify-center`}>
      <div className="py-32  px-4 text-3xl w-[1170px] text-[#033360]">
        <p className="pt-6 pb-5">{title}</p>
        <p className="mb-3 text-base text-black">
          {description}
        </p>
      </div>
    </div>
  )
}