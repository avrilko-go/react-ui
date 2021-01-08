import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'danger' | 'default' | 'link';

interface BaseButtonType {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonType & ButtonHTMLAttributes<HTMLElement>; // 原生button组件和基础属性
type AnchorButtonProps = BaseButtonType & AnchorHTMLAttributes<HTMLElement>; // 原生a链接和基础属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
const Button: React.FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, href, ...restProps } = props;

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a href={href} {...restProps} className={classes}>
        {children}
      </a>
    );
  } else {
    return (
      <button disabled={disabled} className={classes} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  btnType: 'default',
  disabled: false,
};

export default Button;
