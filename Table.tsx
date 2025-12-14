import { ReactNode } from 'react';
interface Props { children: ReactNode; }
export default function Table({ children }: Props) {
  return <table className="min-w-full border">{children}</table>;
}
