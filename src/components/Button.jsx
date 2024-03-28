import React from "react";

const Button = ({ text }) => {
    return (
        <button className="buttons hover:buttons bg-orange text-white font-mono mt-1 py-[6px] px-[8px] rounded focus:outline-none focus:shadow-outline w-[100%]">
            {text}
        </button>
    );
};

export default Button;