import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <section className="w-screen flex flex-col items-center justify-center py-8 bg-important_text text-white">
      <div className="w-mainWidth h-64 flex flex-col md:flex-row items-start justify-between">
        <div className="flex flex-col items-start gap-6">
          <p className="text-2xl font-bold">Coherence Society</p>
          <div className="flex flex-col items-start gap-2">
            <p className="text-lg ">Redbridge, London</p>
            <p className="text-lg ">United Kingdom</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <PiInstagramLogoFill
            style={{ fill: "white", width: "30px", height: "30px" }}
          />
          <FaTwitter style={{ fill: "white", width: "30px", height: "30px" }} />
          <FaLinkedin
            style={{ fill: "white", width: "30px", height: "30px" }}
          />
        </div>
      </div>
      <p className="w-full text-center text-lg font-semibold ">
        © 2024 All rights reserved | Coherence
      </p>
    </section>
  );
}
