import PropTypes from "prop-types";
const Wrapper = ({ children, className }) => {
  return (
    <section className="p-5">
      <div className={`max-w-screen-2xl relative mx-auto ${className}`}>
        {children}
      </div>
    </section>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Wrapper;
