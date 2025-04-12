import React from 'react';

interface NewNikeLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const NewNikeLogo: React.FC<NewNikeLogoProps> = ({ className, ...props }) => {
  return (
    <div className={className} {...props}>
      <img 
        src="/nike-just-do-it-swoosh-logo-brand-nike-logo-free-png-image-0b97ead7f6104e90b9fea674d7594be1.png" 
        alt="Nike Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default NewNikeLogo;