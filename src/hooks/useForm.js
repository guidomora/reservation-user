import { useEffect, useMemo, useState } from "react";

const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);


  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if ( formValidation[formValue] !== null) return false;
    }
    return true
  }, [formValidation]);

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const onReset = () => {
    setFormState(initialForm)
  }

  const createValidators = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = "Este campo es requerido."] = formValidations[
        formField
      ];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    inputChange,
    onReset,
    isFormValid,
    setFormState,

    ...formValidation
  };
};

export default useForm;