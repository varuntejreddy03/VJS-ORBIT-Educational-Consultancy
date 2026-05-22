import { Link } from 'react-router-dom'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  href, 
  onClick, 
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  loading = false,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#F5A623] to-[#F7B84E] text-[#0A0F2E] hover:shadow-lg hover:shadow-[#F5A623]/25 hover:-translate-y-0.5 focus:ring-[#F5A623]',
    secondary: 'bg-gradient-to-r from-[#00C9A7] to-[#00E4BF] text-[#0A0F2E] hover:shadow-lg hover:shadow-[#00C9A7]/25 hover:-translate-y-0.5 focus:ring-[#00C9A7]',
    outline: 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 focus:ring-white',
    'outline-amber': 'border-2 border-[#F5A623]/30 text-[#F5A623] hover:bg-[#F5A623]/10 hover:border-[#F5A623]/50 focus:ring-[#F5A623]',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
    dark: 'bg-[#0A0F2E] text-white hover:bg-[#1B2459] focus:ring-[#0A0F2E]',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  const content = (
    <>
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {Icon && !loading && <Icon size={size === 'sm' ? 16 : 18} />}
      {children}
    </>
  )
  
  if (to) {
    return <Link to={to} className={classes} {...props}>{content}</Link>
  }
  
  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>{content}</a>
  }
  
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={classes} {...props}>
      {content}
    </button>
  )
}
