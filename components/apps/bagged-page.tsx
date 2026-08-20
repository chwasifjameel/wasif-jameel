import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

type BaggedPageProps = {
  children: ReactNode;
};

export default function BaggedPage({ children }: BaggedPageProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A2E] font-lato">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {children}
      </div>
    </div>
  );
}

export function BaggedKicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold tracking-wide text-[#2563EB] uppercase">
      {children}
    </p>
  );
}

export function BaggedSection({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={className ?? 'mt-12 sm:mt-16'}>
      {children}
    </section>
  );
}

export function BaggedCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        'rounded-2xl border border-[#E6E9F2] bg-white',
        'p-5 sm:p-6',
        className ?? '',
      ].join(' ')}
    >
      {children}
    </div>
  );
}

export function BaggedButtonLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2';

  const variantClasses =
    variant === 'primary'
      ? 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
      : 'bg-white text-[#1A1A2E] border border-[#E6E9F2] hover:bg-[#EDF1FD]';

  return (
    <Link href={href} className={`${base} ${variantClasses}`}>
      {children}
    </Link>
  );
}

export function BaggedTextLink({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={[
        'text-[#2563EB] underline decoration-[#D6E3FF] underline-offset-4 hover:text-[#1D4ED8]',
        className ?? '',
      ].join(' ')}
    />
  );
}

