import Header from '@/components/Header';
import React, {  FC, ReactNode } from 'react';

const RootLayout:FC<{children:ReactNode}> = ({children}) => {
  return (
    <div>
        <Header/>
      {children}
    </div>
  );
};

export default RootLayout;
