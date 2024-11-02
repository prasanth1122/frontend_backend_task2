import PropTypes from "prop-types";

export default function ProblemStatement({ icon, problem, statement, data }) {
  return (
    <div className="w-full px-8 md:w-ProblemStatement_md lg:w-ProblemStatement_lg xl:w-ProblemStatement_xl min-h-48 border-l-4 border-important_text flex gap-4 md:gap-8">
      <span>{icon}</span>
      <div className="flex items-start flex-col gap-4">
        <p className="text-2xl lg:text-3xl text-important_text font-bold">
          {problem}
        </p>
        <p className="text-lg " style={{ lineHeight: "1.1" }}>
          {statement}
        </p>
        <p
          className="text-lg lg:text-2xl font-semibold text-important_text"
          style={{ lineHeight: "1.1" }}
        >
          {data}
        </p>
      </div>
    </div>
  );
}

ProblemStatement.propTypes = {
  icon: PropTypes.element.isRequired, // icon must be a React element
  problem: PropTypes.string.isRequired, // problem must be a string
  statement: PropTypes.string.isRequired, // statement must be a string
  data: PropTypes.oneOfType([
    // data can be a string or a number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};
