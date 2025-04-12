import { motion } from 'framer-motion';

interface NikeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: 'solid' | 'outline';
  color?: 'red' | 'black' | 'white';
}

const NikeButton = ({
  children,
  href,
  variant = 'solid',
  color = 'black',
  type = 'button',
  ...props
}: NikeButtonProps) => {
  // Define style variations
  const getBackgroundColor = () => {
    if (variant === 'outline') return 'bg-transparent';
    
    switch (color) {
      case 'red': return 'bg-[hsl(var(--nike-red))]';
      case 'black': return 'bg-black';
      case 'white': return 'bg-white';
      default: return 'bg-black';
    }
  };
  
  const getTextColor = () => {
    if (variant === 'outline') return 'text-white';
    
    return color === 'white' ? 'text-black' : 'text-white';
  };
  
  const getBorderStyle = () => {
    return variant === 'outline' ? 'border-2 border-white' : '';
  };
  
  // Compose class names
  const className = `${getBackgroundColor()} ${getTextColor()} ${getBorderStyle()} nike-button relative overflow-hidden px-10 py-4 font-bold text-lg tracking-wider hover:shadow-lg transition duration-300`;
  
  // Motion variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.97 }
  };
  
  // Button hover effect
  const hoverTransition = {
    x: [-100, 0],
    opacity: [0, 1]
  };

  // Determine if button or anchor
  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <motion.span 
          className={`absolute inset-0 ${color === 'white' ? 'bg-black' : 'bg-white'} transition-transform duration-300`}
          initial={{ x: '-100%' }}
          whileHover={{ x: '0%' }}
          style={{ originX: 0 }}
        />
      </motion.a>
    );
  }
  
  return (
    <motion.button
      type={type}
      className={className}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.span 
        className={`absolute inset-0 ${color === 'white' ? 'bg-black' : 'bg-white'} transition-transform duration-300`}
        initial={{ x: '-100%' }}
        whileHover={{ x: '0%' }}
        style={{ originX: 0 }}
      />
    </motion.button>
  );
};

export default NikeButton;
