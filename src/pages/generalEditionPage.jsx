import Navbar from "../components/navbar/navbar";
import demoImg from "../assets/demoIMG.png";
import { ArrowRight, BarChart2, Cpu, Dna, Sun } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import MonthlyArticles from "../components/storeEdition/monthlyArticles";
import { useNavigate } from "react-router-dom";
export default function GeneralEditionPage() {
  const navigate = useNavigate();
  const features = [
    {
      title: "Natural Sciences",
      description:
        "Uncover the mysteries of the universe with cutting-edge insights into planetary systems, gravitational waves, and cosmic phenomena.",
      icon: <Sun className="w-8 h-8 text-blue-500" />,
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
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
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
      icon: <Dna className="w-8 h-8 text-green-500" />,
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
      icon: <BarChart2 className="w-8 h-8 text-yellow-500" />,
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
    <div className="w-full flex flex-col items-center gap-8 overflow-x-hidden">
      <Navbar />

      <div className="relative w-full flex flex-col items-center">
        <section className="w-full bg-[#2c2c2c] min-h-48 flex items-center justify-center my-16">
          <div className="w-mainWidth h-full  flex flex-col items-center md:items-start md:flex-row gap-4">
            <img
              src={demoImg}
              className="w-coverImage h-coverImage relative top-8 md:top-16 left-0"
            />
            <div className="flex flex-col items-center h-72 md:items-start gap-4 text-white relative top-4 md:top-16 z-30 left-0">
              <p className="text-2xl font-bold text-center">
                Coherence Applied: General Edition
              </p>
              <p className="text-sm">November 2024 Edition</p>
              <p
                className="text-sm md:text-base lg:text-lg"
                style={{ lineHeight: 1.2 }}
              >
                Step into a world where research meets real-world application
                and stay ahead in your educational journey with Coherence
                Applied, the essential journal designed for teens and young
                adults passionate about science, technology, and personal
                growth.
              </p>
            </div>
          </div>
        </section>
        <section className="w-mainWidth flex flex-col items-center flex-wrap  gap-4 mt-8">
          <p className="text-2xl font-bold underline underline-offset-2 mb-4">
            Featured Articles:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center ">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`rounded-xl ${feature.bgColor} border-2 ${feature.borderColor} ${feature.hoverColor} transition-all duration-300 hover:shadow-lg p-6 group flex flex-col items-start gap-4`}
              >
                <div className="mb-4">{feature.icon}</div>

                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h4>

                <p className="text-gray-600 mb-4">{feature.description}</p>

                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm ">
                      <ArrowRight className="w-4 h-4 mr-2 text-important_text" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <button
                  className="px-4 py-2 rounded-lg bg-secondary text-lg text-white flex items-center gap-2 font-semibold hover:shadow-cta_button_shadow"
                  onClick={() => {
                    navigate("/article");
                  }}
                >
                  Access <FaArrowRight style={{ width: "25px" }} />
                </button>
              </div>
            ))}
          </div>
        </section>
        <div className="w-full flex items-center justify-center mt-12">
          <button
            className="px-16 py-2 rounded-lg text-lg font-bold bg-secondary text-white hover:shadow-cta_button_shadow"
            onClick={() => {
              navigate("/payment");
            }}
          >
            Buy Now - $20
          </button>
        </div>
        <section className="w-mainWidth flex flex-col items-start gap-4 mt-12 ">
          <div className="flex w-full flex-col items-center md:items-start gap-4 mt-2 overflow-y-hidden scrollbarHide">
            <p className="text-2xl font-bold underline -ml-16 md:ml-0">
              Previous Editions:
            </p>

            {/* Horizontal scrolling wrapper */}
            <div className="ml-40 md:ml-0 flex  overflow-x-scroll  h-[500px]  gap-4 lg:justify-between scrollbarHide">
              <MonthlyArticles />
              <MonthlyArticles />
              <MonthlyArticles />
              <MonthlyArticles />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
