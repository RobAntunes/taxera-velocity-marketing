import * as Popover from "@radix-ui/react-popover";
import { Check as CheckIcon, Info } from "lucide-react";
import { useState } from "react";

interface StepData {
  stepTitle?: string;
  stepDescription?: string;
  infoText?: string;
  stepIcon?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HiW({ steps }: { steps: StepData[] }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleStepClick = (index: number) => {
    setCurrentStepIndex(index);
  };

  return (
    <div className="lg:border-b lg:border-gray-200 w-screen pb-16">
      <nav
        aria-label="Progress"
        className="mx-auto w-full px-4 sm:px-6 lg:px-8"
      >
        <ol
          role="list"
          className="rounded-md lg:flex lg:items-start lg:rounded-none lg:border-r lg:border-l lg:border-gray-200"
        >
          {steps.map((step, stepIdx) => {
            const status = stepIdx < currentStepIndex
              ? "complete"
              : stepIdx === currentStepIndex
              ? "current"
              : "upcoming";

            const previousStepComplete = stepIdx > 0 &&
              (stepIdx - 1) < currentStepIndex;

            return (
              <li
                key={step.stepTitle}
                className={classNames(
                  "relative lg:flex-1 group transition-colors duration-200 ease-in-out",
                )}
              >
                <div
                  className={classNames(
                    stepIdx === 0 ? "border-b-0 rounded-t-md" : "",
                    stepIdx === steps.length - 1
                      ? "border-t-0 rounded-b-md"
                      : "",
                    "border border-gray-200 lg:border-0 p-6 cursor-pointer",
                    "relative",
                  )}
                  onClick={() => handleStepClick(stepIdx)}
                >
                  <div
                    className={classNames(
                      stepIdx !== 0 ? "lg:pl-9" : "",
                      "flex items-start",
                    )}
                  >
                    <span className="shrink-0">
                      <span
                        className={classNames(
                          "flex size-10 items-center justify-center rounded-full",
                          status === "complete"
                            ? "bg-blue-700"
                            : status === "current"
                            ? "border-2 border-blue-700"
                            : "border-2 border-gray-300",
                        )}
                      >
                        {status === "complete"
                          ? (
                            <CheckIcon
                              aria-hidden="true"
                              className="size-6 text-white"
                            />
                          )
                          : (
                            <span
                              className={classNames(
                                status ===
                                    "current"
                                  ? "text-blue-700"
                                  : "text-gray-500",
                              )}
                            >
                              {stepIdx + 1}
                            </span>
                          )}
                      </span>
                    </span>
                    <div className="ml-4 flex min-w-0 flex-1 flex-row items-center justify-between">
                      <div>
                        <span
                          className={classNames(
                            "text-sm font-medium",
                            status === "current" ? "text-blue-700" : status ===
                                "complete"
                              ? "text-gray-900"
                              : "text-gray-500",
                          )}
                        >
                          {step.stepTitle}
                        </span>
                        <span className="block text-sm font-medium text-gray-500">
                          {step.stepDescription}
                        </span>
                      </div>
                      <Popover.Root>
                        <Popover.Trigger asChild>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStepClick(
                                stepIdx,
                              );
                            }}
                            aria-label="Show details"
                            className="ml-2 shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                            <Info className="size-5" />
                          </button>
                        </Popover.Trigger>
                        <Popover.Portal>
                          <Popover.Content
                            sideOffset={8}
                            align="end"
                            className={classNames(
                              "z-20 w-72 max-w-[calc(100vw-2rem)]",
                              "rounded-md border border-gray-200 bg-white p-4 shadow-md",
                              "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                            )}
                          >
                            <div>
                              <p className="text-sm text-gray-600">
                                {step.infoText}
                              </p>
                            </div>
                            <Popover.Arrow className="fill-white stroke-gray-200 stroke-1" />
                          </Popover.Content>
                        </Popover.Portal>
                      </Popover.Root>
                    </div>
                  </div>
                </div>
                {stepIdx !== 0
                  ? (
                    <>
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 top-0 left-0 hidden w-3 lg:block"
                      >
                        <svg
                          fill="none"
                          viewBox="0 0 12 82"
                          preserveAspectRatio="none"
                          className={classNames(
                            "size-full transition-colors duration-200 ease-in-out",
                            status === "current" ||
                              status ===
                                "complete"
                              ? "text-blue-700"
                              : "text-gray-300",
                          )}
                        >
                          <path
                            d="M0.5 0V31L10.5 41L0.5 51V82"
                            stroke="currentcolor"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </div>
                    </>
                  )
                  : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
