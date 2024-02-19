import Hotels from "@/Hotels";
import Header from "../page/Header";
function hotel() {
  return (
    <>
      <Header />

      <div className="border-red-500 border-2 h-96 w-full mb-5">
        <Hotels />
        <Hotels />
      </div>
    </>
  );
}

export default hotel;
