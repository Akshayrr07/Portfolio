import { ArrowRight as ArrowRightIcon } from 'lucide-react';

const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const baseClasses = 'relative min-w-[170px] h-[52px] px-6 rounded-xl cursor-pointer overflow-hidden flex items-center justify-center gap-2 font-bold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 no-underline';

  const variants = {
    primary: 'bg-accent text-white border-2 border-accent hover:bg-accent/90',
    outline: 'bg-transparent text-accent border-2 border-accent hover:bg-accent/10',
    glass: 'bg-white/5 text-white border border-white/10 hover:bg-white/10',
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowRightIcon className="w-[18px] h-[18px] shrink-0" />
    </Component>
  );
};

export default Button;
