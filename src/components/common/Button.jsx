import { Link } from 'react-router-dom';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';

const Button = ({ children, variant = 'primary', onClick, href, to, className = '', showIcon = true, size = 'default' }) => {
  const sizeClasses = size === 'large'
    ? 'min-w-[160px] sm:min-w-[180px] h-[56px] px-8 sm:px-10 rounded-2xl text-base sm:text-[16px]'
    : 'min-w-[140px] sm:min-w-[150px] h-[46px] sm:h-[48px] px-6 sm:px-7 rounded-xl text-sm sm:text-[15px]';

  const baseClasses = `relative ${sizeClasses} cursor-pointer overflow-hidden flex items-center justify-center gap-2.5 font-semibold transition-all duration-300 transform hover:scale-[1.03] active:scale-95 no-underline group`;

  const variants = {
    primary: 'bg-accent text-neutral-950 font-bold border border-accent hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-[0_0_32px_rgba(37,211,102,0.5)]',
    outline: 'bg-white dark:bg-[#141414] text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700/90 hover:border-accent dark:hover:border-accent hover:bg-neutral-100 dark:hover:bg-neutral-800/90 shadow-sm dark:shadow-md hover:shadow-[0_0_24px_rgba(37,211,102,0.22)]',
    glass: 'bg-white/80 dark:bg-white/10 text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/20 backdrop-blur-md',
  };

  const targetPath = to || (href && href.startsWith('/') ? href : null);

  if (targetPath) {
    return (
      <Link
        to={targetPath}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        <span>{children}</span>
        {showIcon && <ArrowRightIcon className="w-[18px] h-[18px] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />}
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
      {showIcon && <ArrowRightIcon className="w-[18px] h-[18px] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />}
    </Component>
  );
};

export default Button;
