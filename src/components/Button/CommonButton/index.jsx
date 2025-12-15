import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./CommonButton.module.scss";

function CommonButton({
  children,
  round = false,
  border = false,
  textColor,
  bgColor,
  size = "medium",
  disabled = false,
  href,
  className,
  ...restProps
}) {
  const Element = href ? "a" : "button";

  const cssVars = {
    ...(textColor ? { "--btn-text": textColor } : {}),
    ...(bgColor ? { "--btn-bg": bgColor } : {}),
  };

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
    style: cssVars,
    ...(href
      ? { href, target: "_blank", rel: "noopener noreferrer" }
      : { type: "button", disabled }),
    ...restProps,
  };

  return <Element {...elementProps}>{children}</Element>;
}

CommonButton.propTypes = {
  children: PropTypes.node.isRequired,
  round: PropTypes.bool,
  border: PropTypes.bool,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default CommonButton;
