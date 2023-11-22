// eslint-disable-next-line react/prop-types
export default function Text({ title, content }) {
  return (
    <div className="py-24 px-4">
      <div className=" text-[#033360] text-3xl py-7">{title}</div>
      <div className="mb-3 text-base text-gray-600"> {content}</div>
    </div>
  );
}
