import Navbar from "../components/navbar/navbar";
import MonthlyEdition from "../components/storeEdition/monthlyEdition";

export default function StorePage() {
  return (
    <div className="w-full flex flex-col items-center gap-8  overflow-x-hidden ">
      <Navbar />
      <section className="flex flex-col w-mainWidth mt-20  gap-8 ">
        <p className="text-4xl font-bold ">Store</p>
        <div className="flex flex-col items-start gap-8">
          <MonthlyEdition edition="November" />
          <MonthlyEdition edition="October" />
        </div>
      </section>
    </div>
  );
}
