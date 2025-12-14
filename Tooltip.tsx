import { ReactNode } from 'react';
interface Props { text: string; children: ReactNode; }
export default function Tooltip({ text, children }: Props) {
  return <span title={text}>{children}</span>;
}
