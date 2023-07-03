import { IconCheck, IconDeny } from "../utils/icons";
import PropTypes from "prop-types";
const Plan = ({ type, price, options, nonOptions, handleNext, setMyplan }) => {
  return (
    <div className="p-1 bg-gradient-to-b from-light-red to to-black">
      <div className="bg-darker-gray h-full">
        <div className="bg-black p-10 h-56 flex flex-col gap-5 justify-center">
          <p className="text-lg">{type}</p>
          <p className="text-4xl">
            <span className="text-light-red">${price} </span>/ Month
          </p>
        </div>
        <div className="p-10 py-20 flex flex-col gap-10">
          <ul className="flex flex-col gap-7">
            {options.map((item, index) => {
              return (
                <li className="flex text-xl" key={item + index + type}>
                  <IconCheck className="w-7 h-7 mr-2 text-light-red" /> {item}
                </li>
              );
            })}
            {nonOptions.map((item, index) => {
              return (
                <li className="flex text-xl" key={item + index + type}>
                  <IconDeny className="w-7 h-7 mr-2 text-gray" /> {item}
                </li>
              );
            })}
          </ul>
          <button
            className="h-12 w-full bg-light-red rounded-md text-sm"
            onClick={() => {
              setMyplan(type);
              handleNext();
            }}
          >
            Select {type}
          </button>
        </div>
      </div>
    </div>
  );
};

Plan.propTypes = {
  type: PropTypes.string,
  price: PropTypes.string,
  options: PropTypes.array,
  nonOptions: PropTypes.array,
  setMyplan: PropTypes.func,
  handleNext: PropTypes.func,
};

export default Plan;
