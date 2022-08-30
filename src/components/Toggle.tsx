import { ToggleAction, ToggleState, useToggle } from '../hooks/useToggle';
import { useControlPropWarnings } from '../utils/utils';
import { Switch } from './Switch';

function Toggle({
  on: controlledOn,
  onChange,
  readOnly,
}: {
  on?: boolean;
  onChange?: (state: ToggleState, action: ToggleAction) => void;
  readOnly?: boolean;
}) {
  useControlPropWarnings({
    readOnly,
    controlPropValue: controlledOn,
    hasOnChange: Boolean(onChange),
    controlPropName: 'on',
    componentName: 'Toggle',
    readOnlyProp: 'readOnly',
    initialValueProp: 'initialOn',
    onChangeProp: 'onChange',
  });

  const { on, getTogglerProps } = useToggle({ on: controlledOn, onChange });
  const props = getTogglerProps({ on });
  return <Switch {...props} />;
}

export { Toggle };
