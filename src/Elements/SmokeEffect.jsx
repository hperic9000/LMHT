import React from 'react';

export default function SmokeEffect() {
  const rand = (min, max) => min + Math.random() * (max - min);
  const puffs = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: rand(-30, 30),        // horizontal start offset — spreads the source
    drift: rand(-120, 120),  // sideways travel as it rises — fans them out
    scale: rand(2, 15),     // final size
    dur: rand(6, 11),        // duration, so they're not in lockstep
    delay: rand(-12, 0),     // negative → staggered and already mid-flight on load
  }));

  return (
    <div className="smoke-container">
      {puffs.map((p) => (
        <span
          key={p.id}
          style={{
            '--x': `${p.x}px`,
            '--drift': `${p.drift}px`,
            '--scale': p.scale,
            '--dur': `${p.dur}s`,
            '--delay': `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}