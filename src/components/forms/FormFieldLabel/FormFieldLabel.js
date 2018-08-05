import React from 'react';
import { bool, string } from 'prop-types';
import cx from 'classnames';
import styles from './FormFieldLabel.scss';

const FormFieldLabel = ({
  active,
  invalid,
  disabled,
  htmlFor,
  label,
}) => (
  <label
    className={
      cx('FormFieldLabel', {
        'is-active': active,
        'is-invalid': invalid,
        'is-disabled': disabled,
      })
    }
    htmlFor={htmlFor}
  >
    {label}
  </label>
);

FormFieldLabel.propTypes = {
  active: bool,
  invalid: bool,
  disabled: bool,
  htmlFor: string.isRequired,
  label: string.isRequired,
};

FormFieldLabel.defaultProps = {
  active: false,
  invalid: false,
  disabled: false,
};

export default FormFieldLabel;
