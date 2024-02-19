import Header from "./page/Header";
import Header2 from "./page/Header2";
import Heading3 from "./page/Heading3";
import Header4 from "./page/Header4";

const page = () => {
  return (
    <>
      <div className=" w-full h-screen  m-auto flex items-center flex-col">
        <Header />
        <Header2 />
        <Heading3 />
        <img
          style={{ margin: "3rem", width: "84%" }}
          src="https://assets.oyoroomscdn.com/cmsMedia/6e9d9804-9c6f-4b18-a5d5-5e9a8f9815e5.jpg"
        />
        <img
          style={{ margin: "3rem", width: "84%" }}
          src="https://assets.oyoroomscdn.com/cmsMedia/b4462e5e-fd6b-44e4-99d7-fc83767ed892.png"
        />
        <Header4 />
      </div>
    </>
  );
};

export default page;
