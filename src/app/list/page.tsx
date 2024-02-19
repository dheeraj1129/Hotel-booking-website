import React from "react";

function Single() {
  return (
    <>
      <div className="container mx-auto mt-8 justify-center w-[77%] flex flex-col items-center">
        <img
          className="w-full h-auto "
          src="https://images.oyoroomscdn.com/uploads/hotel_image/35886/large/kfkkrgmegxfc.jpg"
          alt="placeholder"
          style={{ Width: "300", maxHeight: "300px" }}
        />
        <div className="mt-4  text-start">
          <h1 className="text-3xl font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            possimus soluta omnis.
          </h1>
          <p className="mt-4 text-sm text-balance">
            This is a Tailwind CSS example Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Necessitatibus, numquam esse facere
            animi aut cupiditate molestiae nemo sint dolor iste. Perspiciatis
            iusto tempore voluptates enim, corporis nisi ab aspernatur porro
            dignissimos dicta. Nihil! animi aut cupiditate molestiae nemo sint
            dolor iste. Perspiciatis iusto tempore voluptates enim, corporis
            nisi ab aspernatur porro dignissimos dicta. Nihil!
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Price 4338
          </button>
          <h1 className="text-3xl font-semibold">Faclities:</h1>
          <div className="flex  text-start">
            <ul className="flex flex-wrap justify-center">
              <li className="mx-4 my-2 bg-gray-300 px-4 py-2 rounded-lg">
                Swimming Pool
              </li>
              <li className="mx-4 my-2 bg-gray-300 px-4 py-2 rounded-lg">
                Dog
              </li>
              <li className="mx-4 my-2 bg-gray-300 px-4 py-2 rounded-lg">
                Garden
              </li>
              <li className="mx-4 my-2 bg-gray-300 px-4 py-2 rounded-lg">
                Loundry
              </li>
              <li className="mx-4 my-2 bg-gray-300 px-4 py-2 rounded-lg">
                Crickit
              </li>
            </ul>
          </div>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
            Buy Now
          </button>
        </div>{" "}
      </div>
    </>
  );
}

export default Single;
