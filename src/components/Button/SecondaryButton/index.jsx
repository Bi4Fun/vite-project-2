import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./SecondaryButton.module.scss";

function SecondaryButton({
  children,
  round = false,
  border = false,
  size = "medium",
  disabled = false,
  href,
  className,
  ...restProps
}) {
  const Element = href ? "a" : "button";

  const buttonClass = clsx(
    styles.button,
    {
      [styles.round]: round,
      [styles.border]: border,
      [styles.small]: size === "small",
      [styles.medium]: size === "medium",
      [styles.large]: size === "large",
      [styles.disabled]: disabled,
    },
    className
  );

  const elementProps = {
    className: buttonClass,
    ...(href ? { href } : { type: "button", disabled }),
    ...restProps,
  };

  return <Element {...elementProps}>{children}</Element>;
}

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  round: PropTypes.bool,
  border: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default SecondaryButton;
