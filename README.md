# My React Multistep Form

A React multi-step form hook with TypeScript support.

## Installation

```bash
npm install react-multi-step-hook-form
```

## Usage
```
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMultistepForm, FormButtons, StepIndicator } from 'react-multi-step-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  // other fields
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  // other fields
};

function App() {
  const { register, handleSubmit } = useForm<FormData>();
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData(prev => ({ ...prev, ...fields }));
  }

  const onSubmit: SubmitHandler<FormData> = data => {
    alert("Successful Account Creation");
    console.log(data);
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next, submit } = useMultistepForm<FormData>(
    [
      <UserForm {...data} updateFields={updateFields} register={register} />,
      <AddressForm {...data} updateFields={updateFields} register={register} />,
      <AccountForm {...data} updateFields={updateFields} register={register} />,
    ],
    onSubmit
  );

  const handleNext = handleSubmit(data => {
    submit(data);
  });

  return (
    <form onSubmit={handleNext}>
      <StepIndicator stepsCount={steps.length} currentStepIndex={currentStepIndex} />
      {step}
      <FormButtons isFirstStep={isFirstStep} isLastStep={isLastStep} back={back} />
    </form>
  );
}

export default App;

```
