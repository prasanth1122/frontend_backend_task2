import Navbar from "../components/navbar/navbar";
import demoImg from "../assets/demoIMG.png";
import { Eye } from "lucide-react";
export default function Paymentpage() {
  return (
    <div className="w-screen  ">
      <Navbar />
      <main className="w-full mt-16  gap-8 flex flex-col items-start ">
        <section className="w-full py-4 bg-[#2c2c2c] flex items-center justify-center">
          <div className="w-mainWidth flex items-center flex-col md:flex-row md:items-start gap-8">
            <img src={demoImg} className="w-coverImage h-coverImage " />
            <div className="min-h-coverImage md:h-coverImage flex flex-col items-start gap-2 md:justify-between text-white">
              <p className="text-2xl font-bold">
                Coherence Applied : Natural Sciences
              </p>
              <p className="text-base">November 2024 Edition</p>
              <p className="flex items-center gap-2 text-lg">
                <Eye style={{ width: "25px", height: "25px" }} />
                2,300 Views
              </p>
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center text-black md:gap-4  ">
                <p className="p-2 bg-white text-sm rounded-lg font-bold">
                  Natural Sciences
                </p>
                <p className="p-2 bg-white text-sm rounded-lg font-bold">
                  Medical Sciences
                </p>
                <p className="p-2 bg-white text-sm rounded-lg font-bold">
                  Computer Sciences
                </p>
                <p className="p-2 bg-white text-sm rounded-lg font-bold">
                  Economical Sciences
                </p>
              </div>
              <p className="text-lg" style={{ lineHeight: 1.2 }}>
                Dive deep into the latest breakthroughs in quantum physics,
                astrology, and biotechnology. This edition features
                groundbreaking research and expert analysis.
              </p>
            </div>
          </div>
        </section>
        <section className="w-screen flex items-center justify-center">
          <div className="w-mainWidth   flex items-start flex-col lg:flex-row lg:gap-20">
            <div className="w-full lg:min-w-1/2 flex flex-col items-start gap-4 ">
              <p className="text-2xl text-important_text font-bold">
                Customer details:
              </p>
              <div className="w-full flex items-start flex-col gap-2">
                <p className="text-lg font-bold">Name:</p>
                <input
                  type="text"
                  className="p-2  text-lg border-2 border-black w-full  rounded-lg shadow-input_shadow"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="w-full flex items-start flex-col gap-2">
                <p className="text-lg font-bold">Email:</p>
                <input
                  type="email"
                  className="p-2 text-lg border-2 border-black w-full  rounded-lg shadow-input_shadow"
                  placeholder="Enter Your Email Id"
                />
              </div>
              <div className="w-full flex items-start flex-col gap-2">
                <p className="text-lg font-bold">Address:</p>
                <input
                  type="text"
                  className="p-2 text-lg border-2 border-black w-full  rounded-lg shadow-input_shadow"
                  placeholder="Enter Billing Address"
                />
              </div>
              <div className="w-full flex items-start flex-col gap-2">
                <p className="text-lg font-bold">Payment Method:</p>
                <input
                  type="text"
                  className="p-2 text-lg border-2 border-black w-full  rounded-lg shadow-input_shadow"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div className="w-full lg:min-w-1/2 flex flex-col items-start gap-4 mt-8  lg:mt-0">
              <p className="text-2xl text-important_text font-bold ">
                Order Summary:
              </p>
              <div className="w-full flex flex-col items-start gap-2 ">
                <p className="text-lg font-bold">Coupon Code:</p>
                <div className="w-full flex items-center justify-between">
                  <input
                    type="text"
                    className="p-2  text-lg border-2 border-black w-3/4  rounded-lg shadow-input_shadow"
                    placeholder="Enter Your Name"
                  />
                  <button className="py-2 px-4 text-white text-lg rounded-lg bg-secondary hover:shadow-cta_button_shadow">
                    Apply
                  </button>
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="text-lg font-bold">Duration:</p>
                <p className="text-2xl font-bold">1 Month</p>
              </div>
              <div className="w-full flex flex-col items-start gap-4 py-4 border-t-2 border-b-2 border-black">
                <div className="w-full flex items-center justify-between">
                  <p className="text-lg font-bold">Price:</p>
                  <p className="text-2xl font-bold">$ 20</p>
                </div>
                <div className="w-full flex items-center justify-between">
                  <p className="text-lg font-bold">Coupon Discount:</p>
                  <p className="text-2xl font-bold">$ 0</p>
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="text-lg font-bold">Total:</p>
                <p className="text-2xl font-bold">$ 20</p>
              </div>
              <div className="w-full flex items-center justify-center">
                <button className="px-12 py-2 text-white text-lg rounded-lg bg-secondary hover:shadow-cta_button_shadow">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
