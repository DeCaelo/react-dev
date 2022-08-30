import './switch.styles.css';
import * as React from 'react';

class Switch extends React.Component<
  { on: boolean } & Omit<JSX.IntrinsicElements['button'], 'ref'>,
  {}
> {
  render() {
    const {
      on,
      className = '',
      'aria-label': ariaLabel,
      onClick,
      ...props
    } = this.props;
    const btnClassName = [
      className,
      'toggle-btn',
      on ? 'toggle-btn-on' : 'toggle-btn-off',
    ]
      .filter(Boolean)
      .join(' ');
    return (
      <button
        aria-label={ariaLabel ?? 'Toggle'}
        aria-pressed={on}
        onClick={onClick}
        className={btnClassName}
        data-testid="toggle-button"
        {...props}
      />
    );
  }
}

export { Switch };
