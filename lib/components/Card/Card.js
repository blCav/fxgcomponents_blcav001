import { Card } from "antd";
import PropTypes from "prop-types";

export const MyCard = ({ title, size }) => {
  return (
    <>
      <Card
        size={size}
        title={title}
        style={{
          width: 300,
        }}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque purus nulla, aliquet vitae ligula nec, venenatis hendrerit lorem.</p>
      </Card>
    </>
  );
};

MyCard.PropTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
};