import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React, { FC, ReactNode } from 'react';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>

      <div>
        <header className="flex justify-between items-center p-4 gap-4 h-14  shadow-md">
          <div>
            <Image src={"/images/mainIcons.png"} alt='logo' width={30} height={30} />
          </div>
          <div>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

        </header>
        <div className='w-full flex '>
          <aside className='w-[200px] bg-gray-300' >
            hello
          </aside>
          {children}
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
