import React, { useContext, useEffect, useReducer, useRef } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper';
import Title from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
  checked: false,
};

const actionTypes = {
  inputChange: 'INPUT_CHANGE',
  clearValues: 'CLEAR_VALUES',
  consentToggle: 'CONSENT_TOGGLE',
  throwError: 'THROW_ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearValues:
      return initialFormState;

    case actionTypes.consentToggle:
      return { ...state, consent: !state.consent, checked: true };
    case actionTypes.throwError:
      return { ...state, error: action.errorValue };
    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);

  const context = useContext(UsersContext);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const handleInputChange = (e) => {
    dispatch({
      type: 'INPUT_CHANGE',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      context.handleAddUser(formValues);
      dispatch({ type: 'CLEAR_VALUES' });
    } else {
      dispatch({ type: 'THROW_ERROR', errorValue: 'fill all fields' });
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>{'Form'}</Title>
      <FormField
        ref={ref}
        label="Name"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <FormField
        label="Consent"
        type="checkbox"
        id="consent"
        name="consent"
        onChange={() => dispatch({ type: 'CONSENT_TOGGLE' })}
        checked={formValues.checked}
      />
      <Button type={'submit'}>Add </Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
