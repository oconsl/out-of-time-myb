import Image from "next/image";

export default function ReviewCard({ title, content, avatar }) {
  return (
    <div className="p-6 rounded-lg shadow-lg my-10 w-80 mx-4 backdrop-blur-md bg-black/40 border border-blue-500">
      <div className="flex items-center mb-4">
        <div className="w-24 h-24 bg-blue-700 rounded-full mr-4 overflow-hidden shadow-md border-2 border-blue-600">
          <Image src={avatar} alt={`${title} Avatar`} width={200} height={200}/>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-blue-500">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
      <p className="text-gray-300">{content}</p>
    </div>
  );
}
