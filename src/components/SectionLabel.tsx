type Props = {
  number: string;
  text: string;
  light?: boolean;
  className?: string;
};
export default function SectionLabel({ number, text, light = false, className = '' }: Props) {
  return (
    <span className={`section-label ${light ? 'section-label-light' : ''} ${className}`}>
      SECTION {number} · {text}
    </span>
  );
}
