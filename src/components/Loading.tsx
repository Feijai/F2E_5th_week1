import loading from "@/assets/loading.gif";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[calc(100%-52px)] md:h-[calc(100%-99px)] ">
      <img src={loading} alt="" />
    </div>
  );
}
