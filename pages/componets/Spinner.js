import React from "react";
import spiner from "../../public/spiner.gif";
import Image from "next/image";

const Spinner = () => {
  return (
    <>
      <Image className="w-[200px] m-auto block"  src={spiner} slt='loading...' />
    </>
  );
};

export default Spinner;
