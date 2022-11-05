import { Collapse } from "antd";
const { Panel } = Collapse;
import PropTypes from "prop-types";

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Quisque purus nulla, aliquet vitae ligula nec, venenatis hendrerit lorem.
`;

export const Accordion = ({ bordered, show, item }) => {

  const onChange = (key) => {
    console.log(key);
  };
  
  return (
    <>
      <Collapse
        defaultActiveKey={item}
        onChange={onChange}
        bordered={bordered}
      >
        <Panel showArrow={show} header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </>
  );
};

Accordion.propTypes = {
  item: PropTypes.string,
  bordered: PropTypes.bool,
  show: PropTypes.bool,
};