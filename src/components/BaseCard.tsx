import React from "react";

type Props = {
  children: React.ReactNode;
};

const BaseCard = ({ children }: Props) => {
  return (
    <div className="p-4 shadow-md rounded-md border border-stone-200 h-full w-full">
      {children}
    </div>
  );
};

export default BaseCard;
