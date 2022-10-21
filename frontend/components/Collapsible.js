import { Root, Trigger, Content } from '@radix-ui/react-collapsible';
import { useState, useEffect } from 'react';

function Collapsible({ defaultOpen, trigger, children }) {
  return (
    <Root defaultOpen={defaultOpen}>
      <Trigger>{trigger}</Trigger>
      <Content>{children}</Content>
    </Root>
  );
}

export default Collapsible;
