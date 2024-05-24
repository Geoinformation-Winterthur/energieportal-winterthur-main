import { Icon } from '@/components/common/icon/icon';
import { Option as MuiOption } from '@mui/base/Option';
import { Select as MuiSelect, SelectRootSlotProps } from '@mui/base/Select';
import React from 'react';
import "./select.scss";
import { useTranslation } from '../../../../i18n';

type Option = {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  defaultValue?: string;
  onChange?: ((event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | React.FocusEvent<Element, Element> | null, value: string | null) => void) | undefined;
}

export const Select = ({ label, options, defaultValue, onChange }: SelectProps) => {
  const { t } = useTranslation();

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
        <span>{other.children}</span>
        <span className="select__icon">
          <Icon icon='chevron-down' color='red' />
        </span>
      </button>
    );
  });
  return (
    <div className="select">
      <label className='select__label' htmlFor="select">{label}</label>
      <MuiSelect
        defaultValue={defaultValue}
        placeholder={defaultValue ?? t("my_property.refurbishment_efficiency_calculator.form.pladeholder")}
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