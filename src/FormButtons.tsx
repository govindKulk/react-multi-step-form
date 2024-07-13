import React from 'react'

const FormButtons = ({
  isFirstStep,
  back,
  isLastStep,
  backButtonClass,
  nextButtonClass,
}: {
  isFirstStep: boolean
  back: () => void
  isLastStep: boolean
  backButtonClass?: string
  nextButtonClass?: string
}) => {
  return (
    <>
          {!isFirstStep && (
            <button
              className={backButtonClass} 
             type="button" onClick={back}>
              Back
            </button>
          )}
          <button 
          className={nextButtonClass}
          type="submit">{isLastStep ? "Finish" : "Next"}</button>
    </>
  )
}

export default FormButtons
