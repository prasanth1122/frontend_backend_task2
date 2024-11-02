import Navbar from "../components/navbar/navbar";
import demoImg from "../assets/demoIMG.png";
import MonthlyArticles from "../components/storeEdition/monthlyArticles";

export default function SubArticlePage() {
  return (
    <div className="w-full flex flex-col items-center gap-8 overflow-x-hidden">
      <Navbar />

      <div className="relative w-full flex flex-col items-center">
        {/* First section */}
        <section className="w-full bg-[#2c2c2c] min-h-48 flex items-center justify-center my-16">
          <div className="w-mainWidth h-full  flex flex-col items-center md:items-start md:flex-row gap-4">
            <img
              src={demoImg}
              className="w-coverImage h-coverImage relative top-8 md:top-16 left-0"
            />
            <div className="flex flex-col items-center h-72 md:items-start gap-4 text-white relative top-4 md:top-16 z-30 left-0">
              <p className="text-2xl font-bold text-center">
                Coherence Applied: Natural Sciences
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

        {/* Second section */}
        <section className="w-mainWidth flex flex-col items-start gap-8 mt-8">
          <p className="text-lg md:text-2xl font-bold text-important_text">
            Coherence Applied: Empowering the Next Generation with Cutting-Edge
            Knowledge
          </p>
          <p className="text-sm md:text-lg">
            Step into a world where research meets real-world application and
            stay ahead in your educational journey with Coherence Applied, the
            essential journal designed for teens and young adults passionate
            about science, technology, and personal growth. Published by the
            Coherence Educational Society, this magazine connects students with
            the latest research, practical learning, and the life skills needed
            to thrive in today s fast-evolving world. Stay at the Forefront of
            Knowledge Coherence Applied brings the latest advancements in
            science, technology, and innovation directly to students, shortening
            the traditional lag between groundbreaking research and classroom
            learning. From physical sciencesand computer science to
            environmental science and citizen science, we ensure that students
            are updated with research that shapes the future. Our unique
            approach turns complex research papers into easy-to-understand
            insights, providing timely access to cutting-edge knowledge
          </p>
          <p className="text-sm md:text-lg">
            Step into a world where research meets real-world application and
            stay ahead in your educational journey with Coherence Applied, the
            essential journal designed for teens and young adults passionate
            about science, technology, and personal growth. Published by the
            Coherence Educational Society, this magazine connects students with
            the latest research, practical learning, and the life skills needed
            to thrive in today s fast-evolving world. Stay at the Forefront of
            Knowledge Coherence Applied brings the latest advancements in
            science, technology, and innovation directly to students, shortening
            the traditional lag between groundbreaking research and classroom
            learning. From physical sciencesand computer science to
            environmental science and citizen science, we ensure that students
            are updated with research that shapes the future. Our unique
            approach turns complex research papers into easy-to-understand
            insights, providing timely access to cutting-edge knowledge
          </p>
          <p className="text-sm md:text-lg">
            Step into a world where research meets real-world application and
            stay ahead in your educational journey with Coherence Applied, the
            essential journal designed for teens and young adults passionate
            about science, technology, and personal growth. Published by the
            Coherence Educational Society, this magazine connects students with
            the latest research, practical learning, and the life skills needed
            to thrive in today s fast-evolving world. Stay at the Forefront of
            Knowledge Coherence Applied brings the latest advancements in
            science, technology, and innovation directly to students, shortening
            the traditional lag between groundbreaking research and classroom
            learning. From physical sciencesand computer science to
            environmental science and citizen science, we ensure that students
            are updated with research that shapes the future. Our unique
            approach turns complex research papers into easy-to-understand
            insights, providing timely access to cutting-edge knowledge
          </p>
          <div className="w-full flex items-center justify-center">
            <button className="px-16 py-2 rounded-lg text-lg font-bold bg-secondary text-white hover:shadow-cta_button_shadow">
              Buy Now - $20
            </button>
          </div>
        </section>
        <section className="w-mainWidth flex flex-col items-start gap-4 mt-8">
          <div className="flex w-full flex-col items-center md:items-start gap-4 mt-2 overflow-y-hidden scrollbarHide">
            <p className="text-2xl font-bold underline">Monthly articles:</p>

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
