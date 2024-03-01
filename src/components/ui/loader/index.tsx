import React from "react";

const Loader: React.FC = ({ className }: any) => {
  return (
    <div className={`flex justify-center items-center h-[300px] ${className}`}>
      <div className="border-t-8  border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Loader;
