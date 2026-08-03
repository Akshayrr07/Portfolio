import { Link } from 'react-router-dom';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';

const Button = ({ children, variant = 'primary', onClick, href, to, className = '', showIcon = true }) => {
  const baseClasses = 'relative min-w-[170px] h-[52px] px-6 rounded-xl cursor-pointer overflow-hidden flex items-center justify-center gap-2 font-bold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 no-underline';

  const variants = {
    primary: 'bg-accent text-white border-2 border-accent hover:bg-accent/90 shadow-lg shadow-accent/20',
    outline: 'bg-transparent text-accent border-2 border-accent hover:bg-accent/10',
    glass: 'bg-white/5 dark:bg-white/10 text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/20 backdrop-blur-md',
  };

  const targetPath = to || (href && href.startsWith('/') ? href : null);

  if (targetPath) {
    return (
      <Link
        to={targetPath}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        <span>{children}</span>
        {showIcon && <ArrowRightIcon className="w-[18px] h-[18px] shrink-0" />}
      </Link>
    );
  }

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick };

  return (
    <Component
      {...props}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {showIcon && <ArrowRightIcon className="w-[18px] h-[18px] shrink-0" />}
    </Component>
  );
};

export default Button;
