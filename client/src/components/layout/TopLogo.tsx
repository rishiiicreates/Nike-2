import React from 'react';
import { Link } from 'wouter';
import NewNikeLogo from '@/assets/NewNikeLogo';

const TopLogo: React.FC = () => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <Link href="/">
        <NewNikeLogo className="w-16 h-16" />
      </Link>
    </div>
  );
};

export default TopLogo;