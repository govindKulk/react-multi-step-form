import React from 'react'

const StepIndicator = ({
    currentStepIndex,
    stepsCount,
    stepIndicatorClass
    }: {
    currentStepIndex: number
    stepsCount: number
    stepIndicatorClass?: string
}) => {
  return (
    <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }} className={stepIndicatorClass}>
    {currentStepIndex + 1} / {stepsCount}
  </div>
  )
}

export default StepIndicator
