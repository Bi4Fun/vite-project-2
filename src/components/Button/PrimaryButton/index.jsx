import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./PrimaryButton.module.scss";

function PrimaryButton({
  children,
  round = false,
  border = false,
  size = "large",
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
    ...(href
      ? { href, target: "_blank", rel: "noopener noreferrer" }
      : { type: "button", disabled }),
    ...restProps,
  };

  return <Element {...elementProps}>{children}</Element>;
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  round: PropTypes.bool,
  border: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default PrimaryButton;
