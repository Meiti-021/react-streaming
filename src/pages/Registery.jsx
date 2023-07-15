import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Wrapper from "../components/Wrapper";
import Plan from "../components/Plan";
import AccountDetails from "../components/AccountDetails";
const steps = ["Select Plan", "Acccount Detaile", "Order Summury"];
const plans = [
  {
    type: "Free",
    price: "0",
    options: ["Ads free movies and shows"],
    nonOptions: [
      "Watch on TV or Laptop",
      "Streamit Special",
      "Max video quality",
    ],
  },
  {
    type: "Premium",
    price: "39",
    options: [
      "Ads free movies and shows",
      "Watch on TV or Laptop",
      "Streamit Special",
      "Max video quality",
    ],
    nonOptions: [],
  },
  {
    type: "Basic",
    price: "19",
    options: [
      "Ads free movies and shows",
      "Watch on TV or Laptop",
      "Streamit Special",
      "Max video quality",
    ],
    nonOptions: [],
  },
];
const Registery = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [myPlan, setMyplan] = useState(null);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Wrapper>
      <div className="min-h-screen pt-24">
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{ maxWidth: "1000px", margin: "20px auto" }}
        >
          {steps.map((label) => {
            return (
              <Step
                key={label}
                sx={{
                  "& .MuiStepLabel-root .Mui-completed": {
                    color: "#E50914", // circle color (COMPLETED)
                  },
                  "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                    {
                      color: "white", // Just text label (COMPLETED)
                    },
                  "& .MuiStepLabel-root .Mui-active": {
                    color: "#E50914", // circle color (ACTIVE)
                  },
                  "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                    {
                      color: "red", // Just text label (ACTIVE)
                    },
                  "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                    fill: "white", // circle's number (ACTIVE)
                  },
                  "& 	.MuiStepLabel-label": { color: "white" },
                }}
              >
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 0 ? (
          <div className="grid grid-cols-1 mdp:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
            {plans.map((item, index) => {
              return (
                <Plan
                  {...item}
                  handleNext={handleNext}
                  setMyplan={setMyplan}
                  key={item.type + index}
                />
              );
            })}
          </div>
        ) : activeStep === 1 ? (
          <AccountDetails myPlan={myPlan} />
        ) : (
          <div className="">3</div>
        )}
      </div>
    </Wrapper>
  );
};

export default Registery;
