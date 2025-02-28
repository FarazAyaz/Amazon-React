import { CiLocationOn } from "react-icons/ci";

const DeliveredLocation = () => {
  return (
      <div className="xl:flex gap-1 items-center cursor-pointer">
            <div className="self-end">
              <CiLocationOn className="size-6 text-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-white">Delivered To</p>
              <p className="text-white font-bold">Pakistan</p>
            </div>
          </div>
  )
}

export default DeliveredLocation
