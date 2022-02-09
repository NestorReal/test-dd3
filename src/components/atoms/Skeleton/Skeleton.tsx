import React from 'react';
import StyledSkeleton from './styled';

interface ISkeletonProps {
  width: number | string;
  height: number;
  borderRadius: number;
}

const Skeleton = ({ width, height, borderRadius }: ISkeletonProps) => (
  <StyledSkeleton width={width} height={height} borderRadius={borderRadius} />
);

export default Skeleton;
