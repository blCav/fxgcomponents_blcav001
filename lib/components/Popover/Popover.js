import { Button, Popover } from "antd";
import PropTypes from "prop-types";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export const MyPopover = ({trigger, label}) => {
  return (
    <>
      <Popover content={content} title="Title" trigger={trigger}>
        <Button>{label}</Button>
      </Popover>
    </>
  );
};

MyPopover.propTypes = {
    trigger: PropTypes.string,
    label: PropTypes.string,
};