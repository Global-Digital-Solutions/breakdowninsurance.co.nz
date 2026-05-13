export default function Logo({ variant = 'default' }: { variant?: 'default' | 'white' }) {
  const primaryColor = variant === 'white' ? 'text-white' : 'text-slate-900';
  const mutedColor = variant === 'white' ? 'text-slate-400' : 'text-slate-400';

  return (
    <div className="flex items-center gap-0">
      <span className={`text-xl font-extrabold tracking-tight leading-none ${primaryColor}`}>
        Breakdown<span className="text-amber-500">Insurance</span><span className={`${mutedColor} font-medium text-base`}>.co.nz</span>
      </span>
    </div>
  );
}
