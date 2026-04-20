type Props = {
  children: React.ReactNode;
  tilt?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};
export default function Ribbon({ children, tilt = -1, className = '', size = 'md' }: Props) {
  const sizeClass =
    size === 'sm' ? 'ribbon-sm' : size === 'lg' ? 'ribbon' : 'ribbon';
  const padClass = size === 'lg' ? 'px-10 py-5' : size === 'sm' ? '' : '';
  return (
    <span
      className={`${sizeClass} ${padClass} ${className}`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {children}
    </span>
  );
}
