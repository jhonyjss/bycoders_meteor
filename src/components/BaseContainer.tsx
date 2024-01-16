import React from "react";

type Props = {
  children: React.ReactNode;
};

const BaseContainer = ({ children }: Props) => {
  return (
    <div className="container mx-auto">{children}</div>
  );
};

export default BaseContainer;
