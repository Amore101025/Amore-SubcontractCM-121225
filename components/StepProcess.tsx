import React, { useState } from 'react';
import { Lock, MousePointer, FileText, PenTool, Send } from 'lucide-react';
import { ThemeColors, Translation } from '../types';

interface StepProcessProps {
  colors: ThemeColors;
  t: Translation;
  borderRadius: string;
}

const StepProcess: React.FC<StepProcessProps> = ({ colors, t, borderRadius }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { icon: Lock, label: t.step1, desc: "Use Citizen/Business Cert" },
    { icon: MousePointer, label: t.step2, desc: "Select 'New Application'" },
    { icon: FileText, label: t.step3, desc: "Fill forms & upload PDF" },
    { icon: PenTool, label: t.step4, desc: "Digital Signature" },
    { icon: Send, label: t.step5, desc: "Submit to FDA" },
  ];

  return (
    <div className="w-full py-4">
      <div className="flex justify-between items-start relative">
        {/* Progress Line */}
        <div className={`absolute top-5 left-0 w-full h-1 ${colors.border} bg-opacity-20`} style={{ backgroundColor: 'currentColor', opacity: 0.2 }}></div>
        <div 
          className={`absolute top-5 left-0 h-1 transition-all duration-500 ${colors.accent}`} 
          style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((step, index) => {
          const isActive = index <= activeStep;
          const isCurrent = index === activeStep;
          const Icon = step.icon;

          return (
            <div 
              key={index} 
              className="relative flex flex-col items-center cursor-pointer group"
              onClick={() => setActiveStep(index)}
            >
              <div 
                className={`
                  w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
                  transition-all duration-300 z-10 border-2
                  ${borderRadius}
                  ${isActive ? `${colors.accent} text-white border-transparent` : `${colors.cardBg} ${colors.text} ${colors.border}`}
                  ${isCurrent ? 'scale-110 shadow-lg ring-2 ring-offset-2 ring-current' : ''}
                `}
              >
                <Icon size={20} />
              </div>
              <div className="mt-2 text-center max-w-[80px]">
                <p className={`text-xs md:text-sm font-bold ${isActive ? colors.text : colors.subText}`}>
                  {step.label}
                </p>
              </div>
              
              {/* Tooltip for current step */}
              {isCurrent && (
                 <div className={`
                    absolute top-16 w-32 p-2 text-xs text-center z-20
                    ${colors.cardBg} ${colors.text} ${colors.border} border shadow-lg
                    ${borderRadius}
                    animate-bounce
                 `}>
                   {step.desc}
                 </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepProcess;