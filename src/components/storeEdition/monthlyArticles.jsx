import { useNavigate } from "react-router-dom";
import demoImg from "../../assets/demoIMG.png";
import { FaReadme } from "react-icons/fa";
export default function MonthlyArticles() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start gap-2 w-coverImage h-coverImage">
      <img src={demoImg} alt="" className="w-full h-full" />
      <p
        className="text-lg font-semibold hover:cursor-pointer hover:underline hover:underline-offset-2 "
        onClick={() => {
          navigate("/article");
        }}
      >
        Natural Sciences
      </p>
      <div className="flex items-center gap-4">
        <FaReadme className="w-5 h-5 md:w-6 md:h-6" />
        <p className="text-sm md:text-lg">2,300 Views</p>
      </div>
      <p className="text-2xl font-bold">$ 20</p>
      <button
        className=" py-2 bg-secondary rounded-lg text-white text-lg font-semibold w-full align-middle hover:shadow-cta_button_shadow  "
        onClick={() => {
          navigate("/payment");
        }}
      >
        Buy Now
      </button>
    </div>
  );
}
