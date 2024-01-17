import React from "react";

type Props = {
  children: React.ReactNode;
};

const BaseContainer = ({ children }: Props) => {
  return (
    <div className="container mx-auto h-full">
      {children}
    </div>
  );
};

export default BaseContainer;
