import demoImg from "../../assets/demoIMG.png";
import { FaReadme } from "react-icons/fa";
import MonthlyArticles from "./monthlyArticles";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function MonthlyEdition({ edition }) {
  const navigate = useNavigate();
  return (
    <section className="w-full flex flex-col items-start md:items-start gap-4">
      <p className="text-2xl font-semibold text-important_text  ">
        {`${edition} 2024 Edition:`}
      </p>

      <div className="flex flex-col items-center md:flex-row md:items-start w-full xl:w-2/3 gap-4 md:gap-8">
        <img src={demoImg} alt="demo" className="w-[200px] h-[300px]" />

        <div className="flex flex-col items-start gap-4 md:gap-0 md:justify-between flex-1 h-[300px]">
          <div className="flex flex-col items-start gap-2">
            <p
              className="text-xl md:text-2xl font-bold text-important_text hover:cursor-pointer hover:underline hover:underline-offset-2 "
              style={{ lineHeight: "1.1" }}
              onClick={() => {
                navigate("/generaledition");
              }}
            >
              Coherence Applied: General Edition
            </p>
            <p className="text-sm md:text-lg">{`${edition} Edition`}</p>
          </div>

          <div className="flex items-center gap-4">
            <FaReadme className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-sm md:text-lg">2,300 Views</p>
          </div>

          <p className="text-lg  " style={{ lineHeight: "1.1" }}>
            Sunlight is essential for life, providing the energy needed for
            plants to grow and helping humans produce vitamin D, which is
            crucial for bone health and immune function.
          </p>

          <button
            className="w-full md:w-auto text-lg font-semibold bg-secondary px-4 py-2 rounded-md text-white hover:shadow-cta_button_shadow"
            onClick={() => {
              navigate("/payment");
            }}
          >
            Buy Now - $20
          </button>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-4 mt-2 overflow-y-hidden scrollbarHide">
        <p className="text-lg font-semibold underline">Monthly articles:</p>

        {/* Horizontal scrolling wrapper */}
        <div className=" flex  overflow-x-scroll  h-[500px]  gap-4 lg:justify-between scrollbarHide">
          <MonthlyArticles />
          <MonthlyArticles />
          <MonthlyArticles />
          <MonthlyArticles />
        </div>
      </div>
    </section>
  );
}

MonthlyEdition.propTypes = {
  edition: PropTypes.string.isRequired,
};
