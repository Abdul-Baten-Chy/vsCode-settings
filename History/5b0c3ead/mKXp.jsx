/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div className="max-w-[1280px] px-4 md:px-8 lg:px-14 mx-auto">
      {children}
    </div>
  );
};

export default Container;
