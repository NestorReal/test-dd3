import React from 'react';
import Skeleton from '../../atoms/Skeleton';
import Container from '../../reusableStyledComponents/Container';

const SelectorSkeleton = () => (
  <div>
    <Container marginBottom={2}>
      <Skeleton width={80} height={20} borderRadius={5} />
    </Container>

    <Skeleton width={260} height={36} borderRadius={5} />
  </div>
);

export default SelectorSkeleton;
