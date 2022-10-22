import { Root, Trigger, Portal, Content } from '@radix-ui/react-popover';
import PropTypes from 'prop-types';

function Popover({ trigger, children }) {
  return (
    <Root>
      <Trigger>{trigger}</Trigger>
      <Portal>
        <Content className="mt-4 bg-neutral-900 text-white border border-neutral-800 p-4 rounded max-w-full w-64 shadow-xl shadow-neutral-900/60">
          {children}
        </Content>
      </Portal>
    </Root>
  );
}

Popover.defaultProps = {};

Popover.propTypes = {
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popover;
