import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ fieldName, value, label, error, type, onChange }) => {
  return (
    <div className={classnames("form-group", { 'has-error': error })}>
      <label className="control-label">{label}</label>
      <input
        type={type}
        name={fieldName}
        className="form-control"
        onChange={onChange}
        value={value}
      />
      {error && <span className="help-block">{error}</span>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  fieldName: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.string.isRequired
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
