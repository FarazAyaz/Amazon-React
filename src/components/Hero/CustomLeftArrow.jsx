import { BiLeftArrowCircle } from "react-icons/bi";
import { FaChevronCircleLeft } from "react-icons/fa";
export const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className="absolute left-8 cursor-pointer" onClick={() => onClick()} >
     <FaChevronCircleLeft className="w-10 h-10"/>
    </button>;
  };