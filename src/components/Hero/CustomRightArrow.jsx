import { FaChevronCircleRight } from "react-icons/fa";

export const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className="absolute right-8 cursor-pointer " onClick={() => onClick()} >
      <FaChevronCircleRight className="w-10 h-10"/>
    </button>;
  };