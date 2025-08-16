import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export type ContactFormProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

export const ContactForm = ({ id, className, children }: ContactFormProps) => {
  const componentName = 'ContactForm';
  const rootId = id ?? componentName;
  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn(
        'w-full max-w-screen-sm mx-auto flex flex-col items-center',
        className
      )}
    >
      <div className="relative w-full flex justify-center items-center">
        <Image
          src="/images/landing/white-suv.png"
          alt="Contact Car"
          width={350}
          height={140}
          className="object-contain rotate-90 scale-100 mx-auto"
          priority
        />
      </div>
      {children}
    </section>
  );
};
