import { Link } from 'react-router-dom';
import { cn } from '../../../utils/cn';

export default function Logo({ compact = false }) {
  return (
    <Link
      to="/"
      aria-label="Deepak Raikwar Portfolio"
      className="group flex select-none items-center gap-3"
    >
      <div
        className="
          flex h-10 w-10 shrink-0 items-center justify-center
          rounded-full border border-white/15
          font-mono text-sm font-semibold text-white/80
          transition-colors duration-300
          group-hover:border-primary group-hover:text-primary
        "
      >
        DR
      </div>

      <div
        className={cn(
          'hidden flex-col leading-none sm:flex',
          compact && 'sm:hidden'
        )}
      >
        <span className="text-base font-bold tracking-tight text-white">
          Deepak Raikwar
        </span>
        <span className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Software Engineer
        </span>
      </div>
    </Link>
  );
}
