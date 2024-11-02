import Navbar from "../components/navbar/navbar";
import demoIMG from "../assets/demoIMG.png";
import { GiDna2 } from "react-icons/gi";
import { IoIosPricetag } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { BarChart2, Cpu, Dna, Sun } from "lucide-react";

import CoherenceSimilar from "../components/appliedPageSimilar/CoherentSimilar";
import { useNavigate } from "react-router-dom";
export default function CoherenceApplied() {
  const navigate = useNavigate();
  const features = [
    {
      title: "Natural Sciences",
      description:
        "Uncover the mysteries of the universe with cutting-edge insights into planetary systems, gravitational waves, and cosmic phenomena.",
      icon: <Sun className="w-36 h-36 text-blue-500" />,
      highlights: [
        "Planetary alignment effects",
        "Gravitational wave discoveries",
        "Dark matter exploration",
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverColor: "hover:border-blue-300",
    },
    {
      title: "Computer Sciences",
      description:
        "Dive into the transformative power of quantum mechanics in computing, exploring entanglement and its technological breakthroughs.",
      icon: <Cpu className="w-36 h-36 text-purple-500" />,
      highlights: [
        "Quantum teleportation applications",
        "Advances in entanglement",
        "Quantum computing impact",
      ],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-300",
    },
    {
      title: "Medical Sciences",
      description:
        "Discover how CRISPR and genetic research are reshaping health and enabling new frontiers in medical science.",
      icon: <Dna className="w-36 h-36 text-green-500" />,
      highlights: [
        "CRISPR in genetic therapy",
        "Radiation resistance research",
        "Advances in synthetic biology",
      ],
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      hoverColor: "hover:border-green-300",
    },
    {
      title: "Economic and Behaviour Sciences",
      description:
        "Analyze the synergy between economic dynamics and behavioral patterns to better understand market and societal trends.",
      icon: <BarChart2 className="w-36 h-36 text-yellow-500" />,
      highlights: [
        "Behavioral economics insights",
        "Market psychology analysis",
        "Socioeconomic impact studies",
      ],
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      hoverColor: "hover:border-yellow-300",
    },
  ];
  return (
    <div className="w-screen  ">
      <Navbar />
      <main className="w-full ">
        <section className="w-full flex items-center justify-center mt-16 bg-[#2c2c2c] py-4">
          <div className="w-mainWidth flex flex-col items-center md:flex-row md:items-start gap-8">
            <img src={demoIMG} className="w-coverImage h-coverImage" />
            <div className="flex flex-col items-start text-white gap-4">
              <p className="text-2xl font-bold">Coherence Applied</p>
              <p className="text-sm  ">Monthly Edition</p>
              <div className="w-full flex flex-col items-start md:flex-row md:items-center gap-4">
                <p className="text-lg font-bold flex items-center gap-2  ">
                  <FaGlobe style={{ width: "20px", height: "20px" }} />
                  Natural
                </p>
                <p className="text-lg font-bold flex items-center gap-2  ">
                  <RiComputerFill style={{ width: "20px", height: "20px" }} />
                  Computers
                </p>
                <p className="text-lg font-bold flex items-center gap-2  ">
                  <IoIosPricetag style={{ width: "20px", height: "20px" }} />
                  Economics
                </p>
                <p className="text-lg font-bold flex items-center gap-2  ">
                  <GiDna2 style={{ width: "20px", height: "20px" }} />
                  Medical
                </p>
              </div>
              <p className="text-base" style={{ lineHeight: 1.2 }}>
                Coherence Applied is a monthly journal designed to bridge the
                gap between scientific exploration and practical knowledge,
                presenting key topics in natural sciences, medical research,
                computer technology, and economics. It’s crafted for inquisitive
                readers, including teens and young adults, who are eager to
                deepen their understanding of the world’s most transformative
                ideas and discoveries. Each edition goes beyond traditional
                learning, fostering curiosity and critical thinking by
                connecting readers with experts and innovations that shape our
                future.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center mt-8">
          <div className="w-mainWidth flex flex-col items-center gap-4">
            <p className="text-2xl font-bold text-center text-important_text">
              Dive deep into the latest breakthroughs in quantum physics,
              astrology, and biotechnology.
            </p>
            <p className="text-lg  text-center w-full">
              Each edition transforms complex concepts into accessible insights,
              making it an essential resource for anyone passionate about
              learning, growth, and real-world application.
            </p>
          </div>
        </section>
        <section className="w-full flex items-center justify-center mt-8">
          <div className="w-mainWidth flex flex-col items-start gap-4 ">
            <p className="text-2xl lg:text-4xl font-bold text-important_text w-full text-center underline underline-offset-2 mb-4 mt-2">
              Featured Editions
            </p>
            <div className="flex flex-col w-full gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-6 md:justify-between p-4 border rounded-lg ${
                    feature.bgColor
                  } ${feature.borderColor} ${feature.hoverColor} ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-gray-800">
                      {feature.title}
                    </p>
                    <p className="text-gray-700">{feature.description}</p>
                    <ul className="list-disc pl-4 text-gray-600">
                      {feature.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                className="px-8 text-white py-2 text-lg font-semibold bg-secondary rounded-lg mt-4 hover:shadow-cta_button_shadow"
                onClick={() => {
                  navigate("/generaledition");
                }}
              >
                View Latest Article
              </button>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center justify-center">
          <div className="w-mainWidth flex flex-col items-start gap-4 mt-12 ">
            <div className="flex w-full flex-col items-center md:items-start gap-4 mt-2 overflow-y-hidden scrollbarHide">
              <p className="text-2xl font-bold underline -ml-16 md:ml-0">
                Previous Editions:
              </p>

              {/* Horizontal scrolling wrapper */}
              <div className="ml-40 md:ml-0 flex  overflow-x-scroll  h-[500px]  gap-4 lg:justify-between scrollbarHide">
                <CoherenceSimilar />
                <CoherenceSimilar />
                <CoherenceSimilar />
                <CoherenceSimilar />
              </div>
            </div>
          </div>
        </section>
        <div className="w-full flex items-center justify-center">
          <button
            className="px-16 py-2 text-white text-lg font-semibold bg-secondary rounded-lg my-2 hover:shadow-cta_button_shadow"
            onClick={() => {
              navigate("/store");
            }}
          >
            Visit Store
          </button>
        </div>
      </main>
    </div>
  );
}
