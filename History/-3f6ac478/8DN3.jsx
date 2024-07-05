/* eslint-disable react/prop-types */
const Button = ({ text, color }) => {
  return (
    <button className="" style={{ color: `${color}` }}>
      {text}
    </button>
  );
};

export default Button;
