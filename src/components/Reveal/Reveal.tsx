import { type ReactNode, type ElementType } from 'react';
import { useScrollReveal } from 'hooks/useScrollReveal';

type Props = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
  as?: ElementType;
};

export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: Props) {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const delayClass = delay > 0 ? ` d${delay}` : '';
  const combined = `reveal${delayClass}${visible ? ' in' : ''}${className ? ` ${className}` : ''}`;
  return (
    <Tag ref={ref} className={combined}>
      {children}
    </Tag>
  );
}
