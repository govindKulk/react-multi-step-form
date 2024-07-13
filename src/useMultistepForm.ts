import { ReactElement, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export function useMultistepForm<T extends FieldValues>(steps: ReactElement[], onSubmit: SubmitHandler<T>) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex(i => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  function submit(data: T) {
    if (currentStepIndex === steps.length - 1) {
      onSubmit(data);
    } else {
      next();
    }
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
    submit,
  };
}
