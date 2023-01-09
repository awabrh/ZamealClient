import React from "react";

interface StepIndicatorProps {
  step: 1 | 2 | 3;
}

function StepIndicator({ step }: StepIndicatorProps) {
  var step2: string = "bg-white";
  var step3: string = "bg-white";

  var text2: string = "text-white";
  var text3: string = "text-white";

  switch (step) {
    case 1:
      step2 = "bg-white";
      step3 = "bg-white";
      text2 = "text-white";
      text3 = "text-white";
      break;
    case 2:
      step2 = "bg-primary";
      step3 = "bg-white";
      text2 = "text-primary";
      text3 = "text-white";
      break;
    case 3:
      step2 = "bg-primary";
      step3 = "bg-primary";
      text2 = "text-primary";
      text3 = "text-primary";
      break;
    default:
      break;
  }

  return (
    <div className="relative -z-10 flex w-72 md:w-96 justify-between">
      <div
        className={`absolute z-10 w-28 md:w-40 right-8 top-3.5 h-1 ${step2}`}
      ></div>

      <div
        className={`absolute z-10 w-28 md:w-40 left-8 top-3.5 h-1 ${step3}`}
      ></div>

      <div className="flex flex-col items-center z-20">
        <div className={`bg-primary h-6 w-6 rounded-full m-1`} />
        <p className="text-primary w-20 text-center font-thin">
          معلوماتك الشخصية
        </p>
      </div>

      <div className="flex flex-col items-center z-20">
        <div
          className={`${step2} h-6 w-6 rounded-full m-1 transition-all duration-500`}
        />
        <p
          className={`${text2} w-20 text-center font-thin transition-all duration-500`}
        >
          معلومات المركبة
        </p>
      </div>

      <div className="flex flex-col items-center z-20">
        <div
          className={`${step3} h-6 w-6 rounded-full m-1 transition-all duration-500`}
        />
        <p
          className={`${text3} w-20 text-center font-thin transition-all duration-500`}
        >
          معلومات الترحيل
        </p>
      </div>
    </div>
  );
}

export default StepIndicator;
