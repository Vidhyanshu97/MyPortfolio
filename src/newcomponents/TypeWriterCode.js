import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriterCode = (props) => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(props.data)
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
