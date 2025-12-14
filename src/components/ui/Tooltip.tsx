interface TooltipProps {
  text: string;
  children: React.ReactNode;
}
export default function Tooltip({ text, children }: TooltipProps) {
  return <span title={text}>{children}</span>;
}
