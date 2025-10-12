
interface StarProps {
  fillPercent: number; // 0..100
  size: number;
  idx: number;
}

export function Star({ fillPercent, size, idx }: StarProps) {

  const clipId = `star-clip-${idx}-${size}-${Math.round(fillPercent)}`;

  const starPath =
    "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
      className="inline-block"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width={`${fillPercent}%`} height="100%" />
        </clipPath>
      </defs>

      <path
        d={starPath}
        fill="none"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />

      <g clipPath={`url(#${clipId})`}>
        <path d={starPath} fill="#F6C948" stroke="none" />
      </g>

      <path d={starPath} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="0.3" />
    </svg>
  );
}