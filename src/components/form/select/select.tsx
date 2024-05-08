import { Icon } from '@/components/common/icon/icon';
import { Option as MuiOption } from '@mui/base/Option';
import { Select as MuiSelect, SelectRootSlotProps } from '@mui/base/Select';
import React from 'react';
import "./select.scss";

type Option = {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  onChange?: ((event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | React.FocusEvent<Element, Element> | null, value: string | null) => void) | undefined;
}

export const Select = ({ label, options, onChange }: SelectProps) => {

  const Button = React.forwardRef(function Button<
    TValue extends {},
    Multiple extends boolean,
  >(
    props: SelectRootSlotProps<TValue, Multiple>,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) {
    const { ownerState, ...other } = props;
    return (
      <button type="button" {...other} ref={ref}>
        {other.children}
        <Icon icon='chevron-down' color='red' />
      </button>
    );
  });
  return (
    <div className="select">
      <label className='select__label' htmlFor="select">{label}</label>
      <MuiSelect
        placeholder="Bitte auswählen"
        id="select-button"
        name="select"
        onChange={onChange}
        slots={{
          root: Button,
        }}
        slotProps={{
          popup: { disablePortal: true }
        }}>
        {options.map(option => <MuiOption value={option.value} key={option.label} >{option.label}</MuiOption>)}
      </MuiSelect>
    </div>
  )
}