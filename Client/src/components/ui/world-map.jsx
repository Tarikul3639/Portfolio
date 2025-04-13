"use client";
import { useRef, useId } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

export default function WorldMap({ dots = [], lineColor = "#0ea5e9" }) {
  const svgRef = useRef(null);
  const gradientId = useId();
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#ffffff40", // lighter dots for dark mode
    shape: "circle",
    backgroundColor: "transparent", // transparent background
  });

  const SVG_WIDTH = 800;
  const SVG_HEIGHT = 400;

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (SVG_WIDTH / 360);
    const y = (90 - lat) * (SVG_HEIGHT / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] bg-transparent rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />

      <svg
        ref={svgRef}
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <motion.path
              key={`path-${i}`}
              d={createCurvedPath(start, end)}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                delay: 0.5 * i,
                ease: "easeOut",
              }}
            />
          );
        })}

        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-${i}`}>
              <circle cx={start.x} cy={start.y} r="2" fill={lineColor} />
              <circle cx={start.x} cy={start.y} r="2" fill={lineColor} opacity="0.5">
                <animate attributeName="r" from="2" to="8" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx={end.x} cy={end.y} r="2" fill={lineColor} />
              <circle cx={end.x} cy={end.y} r="2" fill={lineColor} opacity="0.5">
                <animate attributeName="r" from="2" to="8" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}