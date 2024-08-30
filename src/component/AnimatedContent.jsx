import React from 'react'

import { useInView } from 'react-intersection-observer';

export default function AnimatedContent({children}) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });

  return (
    <div
    ref={ref}
    className={`transform transition-all duration-1000 ease-in-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
>
    {children}
</div>
  )
}
