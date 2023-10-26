import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link
      to={"/"}
      className="w-[229px] h-[50px] bg-violet-500 rounded-[10px] flex justify-center items-center space-x-2"
    >
      <BiArrowBack className="scale-150 text-white" />
      <span className="text-center text-white text-lg font-medium font-['SF Pro Text']">
        Back to Homepage
      </span>
    </Link>
  );
};

export default Button;
