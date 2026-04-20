type Props = {
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
  stroke?: string;
  variant?: 1 | 2 | 3;
};

export default function Swoosh({
  className = '',
  style,
  opacity = 0.14,
  stroke = '#35C451',
  variant = 1,
}: Props) {
  const paths: Record<number, string> = {
    1: 'M 10 140 C 120 20, 280 260, 420 90 S 680 30, 790 180',
    2: 'M 10 90 C 160 200, 300 -40, 440 150 S 700 220, 790 60',
    3: 'M 10 120 C 90 40, 220 210, 380 120 S 620 50, 790 150',
  };
  return (
    <svg
      viewBox="0 0 800 200"
      className={`swoosh ${className}`}
      style={{ opacity, color: stroke, ...style }}
      aria-hidden="true"
      fill="none"
    >
      <path
        d={paths[variant]}
        stroke={stroke}
        strokeWidth={70}
        strokeLinecap="round"
      />
    </svg>
  );
}
