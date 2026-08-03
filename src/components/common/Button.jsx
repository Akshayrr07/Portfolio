import { Link } from 'react-router-dom';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';

const Button = ({ children, variant = 'primary', onClick, href, to, className = '', showIcon = true }) => {
  const baseClasses = 'relative min-w-[140px] sm:min-w-[150px] h-[46px] sm:h-[48px] px-6 sm:px-7 rounded-xl cursor-pointer overflow-hidden flex items-center justify-center gap-2 font-semibold text-sm sm:text-[15px] transition-all duration-200 transform hover:scale-[1.02] active:scale-95 no-underline';

  const variants = {
    primary: 'bg-accent text-white border border-accent hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-[0_0_24px_rgba(37,211,102,0.45)]',
    outline: 'bg-white dark:bg-[#141414] text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700/90 hover:border-accent dark:hover:border-accent hover:bg-neutral-100 dark:hover:bg-neutral-800/90 shadow-sm dark:shadow-md',
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
