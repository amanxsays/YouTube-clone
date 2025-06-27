import React from 'react'
import ShimmerCard from './ShimmerCard';

const HomeShimmer = () => {
  const dummy=[0,1,2,3,4,5];
  return (
    <div className='px-14'>
      <div className='flex flex-wrap gap-3'>
        {dummy.map((i)=><ShimmerCard key={i} />)}
    </div>
    </div>
  )
}

export default HomeShimmer