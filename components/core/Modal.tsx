import { IconHeartFilled } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Modal = ({ onClose }: { onClose: () => void }) => {
  const [remainingTime, setRemainingTime] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        onClose();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime, onClose]);

  return (
    <div className="fixed inset-0  bg-secondary-900 flex justify-center  z-50 bg-black bg-opacity-75">
      <div className="bg-secondary-900 translate-y-9  shadow-lg shadow-primary-500 border-t   ease-in duration-300 flex flex-col  items-center justify-center  w-[60%] h-[50%] rounded-lg p-6">
        <h2 className="font-bold mt-10 flex gap-3 justify-center text-6xl mb-4">
          THANK YOU
          <span className="font-bold  text-red-dark justify-center items-center text-6xl  text-center mb-4">
            {" "}
            <IconHeartFilled size={60} />{" "}
          </span>
        </h2>
        {/* <h2 className="font-bold text-center text-3xl mb-4">
          {" "}
          FOR YOUR TIME TO VISTING
        </h2> */}
        <h2 className="text-2xl px-5 w-[50%] flex justify-center items-center  font-bold mb-4">
          <TypeAnimation
            sequence={[
              "   FOR YOUR TIME TO VISTING WELCOME TO MY WEBSITE 🎉",
              1000,
            ]}
            speed={50}
            className="text-md text-center  font-bold transition-all duration-700 "
          />
        </h2>
        <p className="text-gray-700 text-center mt-5 mb-4">
          <span className="font-bold text-6xl ">{remainingTime}</span> seconds.
        </p>
        {/* <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={onClose}
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default Modal;
