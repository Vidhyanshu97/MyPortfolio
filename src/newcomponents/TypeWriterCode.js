import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriterCode = () => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Vidhyanshu Mishra.")
            .callFunction(() => {
              console.log("String typed out!");
            })
            // .pauseFor(25000)
            // .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </div>
  );
};

export default TypeWriterCode;
