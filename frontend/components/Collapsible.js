import { Root, Trigger, Content } from '@radix-ui/react-collapsible';
import PropTypes from 'prop-types';

function Collapsible({ defaultOpen, trigger, children }) {
  return (
    <Root defaultOpen={defaultOpen}>
      <Trigger>{trigger}</Trigger>
      <Content>{children}</Content>
    </Root>
  );
}

Collapsible.defaultProps = {
  defaultOpen: false,
};

Collapsible.propTypes = {
  defaultOpen: PropTypes.bool,
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapsible;
