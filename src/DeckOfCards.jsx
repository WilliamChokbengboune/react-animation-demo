import React, { useState } from "react";
import { useSprings, animated, to } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import './DeckOfCards.css';

const suits = ["♠", "♥", "♦", "♣"];
const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const deck = [];
suits.forEach(suit => {
  values.forEach(value => {
    deck.push({ suit, value });
  });
});

const Deck = () => {
  const [gone] = useState(() => new Set());

  const [springs, api] = useSprings(deck.length, i => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  }));

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2;
    if (!down && trigger) gone.add(index);

    api.start(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * xDir : down ? mx : 0;
      const rot = mx / 100 + (isGone ? xDir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return { x, rot, scale, config: { friction: 50, tension: 500 } };
    });
  });

  return springs.map(({ x, y, rot, scale }, i) => (
    <animated.div
        {...bind(i)}
        style={{
        transform: to(
            [x, y, rot, scale],
            (x, y, r, s) =>
                `translate3d(${x}px,${y}px,0) rotate(${r}deg) scale(${s})`
        ),
    }}
    className="card"
    >
    {deck[i].value}{deck[i].suit}
    </animated.div>
  ));
};

export default Deck;
