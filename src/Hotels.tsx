import React from "react";
import Link from "next/link";
function Hotels() {
  return (
    <>
      <div className="border-red-500 border-1 h-96 w-72 mb-5 p-8 m-2 rounded-lg ">
        <div className="flex  h-full w-full  ">
          <img
            src="https://images.oyoroomscdn.com/uploads/hotel_image/106719/large/fd9ab957301726f3.jpg"
            alt="eror"
            width={500}
            height={200}
          />
          <div className="grid grid-cols-5 px-8">
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/106719/thumb/c64c9166ac4a8e31.jpg"
              alt="roro"
              width={100}
              height={20}
            />
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/106719/thumb/c64c9166ac4a8e31.jpg"
              alt="roro"
              width={100}
              height={20}
            />
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/106719/thumb/c64c9166ac4a8e31.jpg"
              alt="roro"
              width={100}
              height={20}
            />
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/106719/thumb/c64c9166ac4a8e31.jpg"
              alt="roro"
              width={100}
              height={20}
            />
          </div>
          {/* heading */}
          <div className="flex flex-col justify-between absolute ">
            <div className="">
              <h1 className="text-xl font-bold">Super Nova Delhi</h1>
              <p>Janakpuri West 12</p>
            </div>
            {/* button */}
            <div className="flex flex-row justify-between">
              <button className=" bg-yellow-600">4.2</button>
              <p>(2226 Rating) Very Good</p>
            </div>

            {/* item */}
            <div className="flex flex-row">
              <h2>Wifi </h2>
              <h2>CCTV Cameras</h2>
              <p></p>
              <p>aily Hoouse Keeping</p>
            </div>
            <div>
              <h2>
                3437$ <span>32% Off</span>
              </h2>
            </div>
            {/* lheas */}
            <div className="flex justify-between b  w-[100]">
              {" "}
              <p className="text-sm">+ ₹140 taxes & fees per room per night</p>
              {/* Link */}
              {/* Link */}
              {/* Link */}
              {/* Link */}
              <Link href={"/list"}>
                <button className="border-r-yellow-400 border-2">
                  View Details
                </button>
              </Link>
              <button className="bg-red-700 text-sm font-bold text-white p-4  rounded-sm">
                Book Now
              </button>
            </div>
          </div>

          {/* last */}
        </div>
      </div>
    </>
  );
}

export default Hotels;
