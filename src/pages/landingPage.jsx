import Navbar from "../components/navbar/navbar";
import demoImg from "../assets/demoIMG.png";
import { FaArrowRight } from "react-icons/fa";
import ProblemStatement from "../components/problemSatement/problemStatement";
import { BsGraphDownArrow } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { GiDna2 } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { IoIosPricetag } from "react-icons/io";
import Footer from "../components/footer/footer";
import { FaFileAlt, FaRegBookmark, FaUserFriends } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="w-screen  ">
      <Navbar />
      <main className="w-full flex items-center flex-col gap-12">
        <section className="w-mainWidth flex flex-col items-center gap-4 justify-center mt-20">
          <p className="text-4xl md:text-6xl pt-4 font-bold text-important_text text-center">
            Coherence Biosphere
          </p>
          <p
            className="text-lg font-semibold lg:text-2xl  text-center"
            style={{ lineHeight: "1.2" }}
          >
            Empowering open-access research and connecting innovators across
            disciplines for a sustainable future.
          </p>
          <p className="text-sm lg:text-base text-center text-black/[0.6]">
            Building bridges between research and real-world impact through
            accessible knowledge.
          </p>
        </section>
        <section className="w-full bg-terinary py-8 flex items-center justify-center ">
          <section className="w-full bg-terinary flex items-center justify-center">
            <div className="w-mainWidth flex flex-col md:flex-row items-center md:items-center md:justify-between gap-8 md:gap-0">
              <div className="flex flex-col items-center gap-2">
                <FaFileAlt className="w-12 h-12 text-important_text" />
                <p className="text-2xl font-bold text-black">3800+ Articles</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaRegBookmark className="w-12 h-12 text-important_text" />
                <p className="text-2xl font-bold text-blackt">123 Citations</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaUserFriends className="w-12 h-12 text-important_text" />
                <p className="text-2xl font-bold text-black">400+ Readers</p>
              </div>
            </div>
          </section>
        </section>
        <section className="w-full bg-highlight_background flex justify-center py-8">
          <div className="w-mainWidth flex flex-col items-center gap-4">
            <div className="w-full flex flex-col items-center  justify-center gap-4 ">
              <p className="text-2xl  md:text-center font-semibold text-important_text">
                Over 50% of university students and faculty are unaware of
                significant R&D projects happening within their own institutions
              </p>
              <p className="text-base font-semibold md:mr-8">
                - World Economic Forum
              </p>
            </div>
            <div className="w-full md:w-screen lg:w-full flex flex-col gap-8 items-start md:flex-row md:justify-center md:gap-2 lg:justify-center lg:gap-8  md:flex-wrap   mt-8">
              <ProblemStatement
                icon={
                  <BsGraphDownArrow style={{ width: "48px", height: "48px" }} />
                }
                problem={"Public Awareness"}
                statement={"Limited awareness of scientific breakthroughs"}
                data={"30% of the public can name a recent breakthrough"}
              />
              <ProblemStatement
                icon={
                  <IoBookOutline style={{ width: "48px", height: "48px" }} />
                }
                problem={"Interdisciplinary Barriers"}
                statement={"Challenges in understanding cross-discipline work"}
                data={
                  "37% of researchers struggle with interdisciplinary studies"
                }
              />
              <ProblemStatement
                icon={<IoPeople style={{ width: "48px", height: "48px" }} />}
                problem={"Access Restrictions"}
                statement={"Significant research articles behind paywalls"}
                data={"40% of articles are restricted by paywalls"}
              />
              <ProblemStatement
                icon={<FaGlobe style={{ width: "48px", height: "48px" }} />}
                problem={"Broader Impact"}
                statement={
                  "Research findings fail to reach the general community"
                }
                data={"60% of researchers believe their work lacks impact"}
              />
            </div>
          </div>
        </section>
        <section className="w-screen text-white flex items-center justify-center py-12 bg-primary">
          <p className="text-lg md:text-2xl font-semibold text-center w-mainWidth">
            &ldquo;The future of research demands inclusive access and
            collaborative innovation across all disciplines.&rdquo;
          </p>
        </section>
        <section className="w-screen bg-[#2c2c2c] py-8 h-auto  flex  text-white justify-center">
          <div className="w-mainWidth flex flex-col-reverse items-center md:flex-row md:items-start gap-6 md:justify-between  ">
            <div className="w-full md:h-coverImage md:w-2/3 flex flex-col items-center md:items-start md:gap-4 lg:gap-8 gap-4">
              <p className="text-2xl md:text-4xl font-bold ">
                Coherence Applied
              </p>
              <p className="text-sm lg:text-lg  " style={{ lineHeight: "1.2" }}>
                Coherence Applied He is a periodical released monthly by the
                coherence editorial board collecting the scientific and
                technological development happened across the globe in last 90
                days and communicating it to the audience in a very simple
                comprehensive and concise form.
              </p>
              <div className="w-full flex flex-col items-start md:flex-row md:flex-wrap gap-4 lg:gap-8 text-white">
                <p
                  className="text-lg font-bold flex items-center gap-2 hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-secondary"
                  onClick={() => {
                    navigate("/article");
                  }}
                >
                  <FaGlobe style={{ width: "20px", height: "20px" }} />
                  Natural
                </p>
                <p
                  className="text-lg font-bold flex items-center gap-2 hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-secondary"
                  onClick={() => {
                    navigate("/article");
                  }}
                >
                  <RiComputerFill style={{ width: "20px", height: "20px" }} />
                  Computers
                </p>
                <p
                  className="text-lg font-bold flex items-center gap-2 hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-secondary"
                  onClick={() => {
                    navigate("/article");
                  }}
                >
                  <IoIosPricetag style={{ width: "20px", height: "20px" }} />
                  Economics
                </p>
                <p
                  className="text-lg font-bold flex items-center gap-2 hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-secondary"
                  onClick={() => {
                    navigate("/article");
                  }}
                >
                  <GiDna2 style={{ width: "20px", height: "20px" }} />
                  Medical
                </p>
              </div>
              <div className="flex flex-col items-start w-full gap-4 md:flex-row  ">
                <button
                  className="px-4 py-2 md:text-sm lg:text-lg bg-secondary rounded-lg text-lg font-semibold flex items-center gap-4 group"
                  onClick={() => {
                    navigate("/coherenceapplied");
                  }}
                >
                  Access Now
                  <FaArrowRight
                    style={{ width: "25px" }}
                    className="transition-transform duration-300 group-hover:-rotate-45"
                  />
                </button>
                <button
                  className="px-4 py-2 md:text-sm lg:text-lg rounded-lg font-lg bg-white text-black font-bold flex items-center gap-4 group"
                  onClick={() => {
                    navigate("/store");
                  }}
                >
                  Visit Store
                  <FaArrowRight
                    style={{ width: "25px" }}
                    className="transition-transform duration-300 group-hover:-rotate-45"
                  />
                </button>
              </div>
            </div>
            <img src={demoImg} className="w-coverImage h-coverImage " />
          </div>
        </section>
        <section className="w-screen py-8 bg-highlight_background flex items-center justify-center">
          <div className="w-mainWidth flex flex-col items-center md:items-start gap-6">
            <p className="text-important_text text-2xl font-bold text-center md:text-4xl mb-8">
              Coherence Educational Scociety
            </p>
            <p className="text-lg ">
              Coherence Educational Society is a global scientific conglomerate,
              committed to advancing knowledge and innovation across an
              extensive range of disciplines. We conduct deep, interdisciplinary
              research, from understanding complex diseases like polycystic
              kidney disease to mapping the vast depths of space and the ocean
              floor. Our team continuously pushes the frontiers in
              energy-efficient devices, aiming to create technologies that
              balance progress with sustainability
            </p>
            <p className="text-lg">
              Operating worldwide, we work closely with top universities and
              leading research institutions, fostering collaborations that drive
              meaningful discoveries and technological breakthroughs. Our
              partnerships extend to the world’s largest and most influential
              commercial enterprises, ensuring that our research is not only
              academically rigorous but also practical and commercially
              relevant.
            </p>
            <p className="text-lg">
              At the core of our mission lies a focus on education and R&D,
              blending scientific inquiry with real-world applications. We are
              dedicated to fostering knowledge-sharing ecosystems that bring
              academic and commercial entities together, creating a synergistic
              impact across industries. Whether it’s in healthcare, energy,
              environmental studies, or engineering, our organization is at the
              forefront of scientific exploration and applied research, aiming
              to leave a lasting impact on the world.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
