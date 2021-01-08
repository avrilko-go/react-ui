import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-in-bottom';

type TransitionBaseProps = {
  animation?: AnimationName;
};

type TransitionProps = TransitionBaseProps & CSSTransitionProps;

const Transition: React.FC<TransitionProps> = (props) => {
  const { children, classNames, animation, ...restProps } = props;
  return (
    <CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
      {children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  appear: true,
  unmountOnExit: true,
};

export default Transition;
