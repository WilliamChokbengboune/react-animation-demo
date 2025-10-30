import React, {useState} from "react";
import {motion} from "framer-motion";
import './Dice.css';

const faces = {
  1: ["center-middle"],
  2: ["top-left", "bottom-right"],
  3: ["top-left", "center-middle", "bottom-right"],
  4: ["top-left", "top-right", "bottom-left", "bottom-right"],
  5: ["top-left", "top-right", "center-middle", "bottom-left", "bottom-right"],
  6: ["top-left", "top-right", "center-left", "center-right", "bottom-left", "bottom-right"],
};
const Dice = () => {
  const [roll, setRoll] = useState(1);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const rollDice = () => {
    const newRoll = Math.floor(Math.random() * 6) + 1;
    setRoll(newRoll);
    setRotation({
      x: rotation.x + 720 + Math.floor(Math.random() * 360),
      y: rotation.y + 720 + Math.floor(Math.random() * 360),
    });
  };

// This is for the nonreact animation
//   const faces = {
//   1: ["center-middle"],
//   2: ["top-left", "bottom-right"],
//   3: ["top-left", "center-middle", "bottom-right"],
//   4: ["top-left", "top-right", "bottom-left", "bottom-right"],
//   5: ["top-left", "top-right", "center-middle", "bottom-left", "bottom-right"],
//   6: ["top-left", "top-right", "center-left", "center-right", "bottom-left", "bottom-right"],
// };

// const Dice = () => {
//   const [roll, setRoll] = useState(1);
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });

//   const rollDice = () => {
//     const newRoll = Math.floor(Math.random() * 6) + 1;
//     setRoll(newRoll);
//     setRotation(prev => ({
//       x: prev.x + 720 + Math.floor(Math.random() * 360),
//       y: prev.y + 720 + Math.floor(Math.random() * 360),
//     }));
//   };

//   const cubeStyle = {
//     transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
//     transition: 'transform 1s ease-out',
//   };


  return (
    <div className="scene" onClick={rollDice} role="button" tabIndex={0}>
      <motion.div
        className={`cube show-${roll}`}
        animate={{ rotateX: rotation.x, rotateY: rotation.y }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {Object.entries(faces).map(([faceNum, dots]) => (
          <div key={faceNum} className={`face face-${faceNum}`}>
            {dots.map((pos, i) => (
              <span key={i} className={`dot ${pos}`}></span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );

  // This is for the non react animation version
  // <div className="scene" onClick={rollDice} role="button" tabIndex={0}>
  //     <div className={`cube show-${roll}`} style={cubeStyle}>
  //       {Object.entries(faces).map(([faceNum, dots]) => (
  //         <div key={faceNum} className={`face face-${faceNum}`}>
  //           {dots.map((pos, i) => (
  //             <span key={i} className={`dot ${pos}`}></span>
  //           ))}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Dice;