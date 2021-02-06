import React, { useMemo, memo, useState, useCallback } from 'react';
import cn from 'classnames';
import uniqueId from 'lodash/uniqueId';

// import Icon from '@src/components/Icon';

import { Props } from './types';

import styles from './Input.scss';

const Input: Props = ({
  className,
  label,
  inputRef,
  icon,
  allowClear,
  value,
  onChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value ?? '');

  const id = useMemo(() => {
    return uniqueId();
  }, []);

  const inputIcon = useMemo(() => {
    switch (icon) {
      case 'search':
        return null;
      // return <Icon name={icon} className={styles.inputIcon} />;

      default:
        return null;
    }
  }, [icon]);

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    },
    []
  );

  const onCLearInput = useCallback(() => {
    setInputValue('');
  }, []);

  const clearIcon = useMemo(() => {
    if (allowClear && inputValue) {
      return (
        <button
          type="button"
          onClick={onCLearInput}
          className={styles.clearButton}
          title="Очистить"
        >
          &#10005;
        </button>
      );
    }

    return null;
  }, [inputValue, allowClear]);

  const inputComponent = useMemo(() => {
    return (
      <span className={styles.inputWrapper}>
        {inputIcon}

        <input
          {...props}
          id={id}
          ref={inputRef}
          className={cn(
            styles.input,
            className,
            icon === 'search' && styles.input__withIcon,
            allowClear && styles.input__withClear
          )}
          value={inputValue}
          onChange={onInputChange}
        />

        {clearIcon}
      </span>
    );
  }, [props, icon, inputValue]);

  return (
    <label htmlFor={id} className={styles.label}>
      {label}
      {inputComponent}
    </label>
  );
};
export default memo(Input);
