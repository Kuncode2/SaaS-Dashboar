import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlanDetails } from "../store/planDetailsSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const { plan, loading, error } = useSelector((state) => state.planDetails);

  useEffect(() => {
    dispatch(getPlanDetails());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const daysLeft = plan ? plan["days-left"] : 0;
  const maxSurveys = plan ? plan["max-surveys"] : 100;
  const progressWidth = (daysLeft / maxSurveys) * 100;

  return (
    <>
      <div className="w-full h-[136px] rounded-lg bg-white mt-[5vh] shadow-md p-4">
        <div className="w-full h-auto gap-4">
          <div className="w-full h-auto">
            <p className="text-black font-semibold ">You're on the {plan ? plan.plan : "Free"} Plan</p>
          </div>
          <div className="w-full h-[36px] gap-[12px] mt-3">
            <div className="w-full h-[16px]">
              <p className="text-[14px] ">No. of days left: {daysLeft}/{maxSurveys}</p>
            </div>
            <div className="bg-gray-200 rounded-full w-full mt-[12px]">
              <div
                className="bg-black h-[8px] rounded-full"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>
          </div>
          <div className="w-full h-[20px] gap-[4px]">
            <p className="text-gray-700 mt-3 font-medium">
              Upgrade to our{" "}
              <a href="#"
                className="text-blue-600 underline hover:text-blue-800">
                premium
              </a>{" "}
              plans to get more benefits!
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[781px] mt-[2vh] mb-6 ">
        <span className="text-black">
          Need a hand?{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            Check out our docs
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
