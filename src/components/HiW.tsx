import { Check as CheckIcon, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const steps = [
    {
        id: "01",
        name: "Connect",
        description: "your SAP system",
        detailedDescription: "Securely link your SAP environment to Taxera using our certified connectors. It's a quick setup process.",
        benefit: "Seamless data integration.",
    },
    {
        id: "02",
        name: "Subscribe",
        description: "to Insight Packs",
        detailedDescription: "Choose from a growing library of Insight Packs tailored for specific tax regulations and business processes.",
        benefit: "Targeted compliance checks.",
    },
    {
        id: "03",
        name: "Monitor",
        description: "your company codes",
        detailedDescription: "Taxera continuously monitors your selected company codes against the rules in your subscribed Insight Packs.",
        benefit: "Proactive issue detection.",
    },
    {
        id: "04",
        name: "Scale",
        description: "with usage-based pricing",
        detailedDescription: "Our flexible pricing adapts to your usage, ensuring you only pay for what you need as your business evolves.",
        benefit: "Cost-effective compliance.",
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function HiW() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [expandedStepIndex, setExpandedStepIndex] = useState<number | null>(null);

    const handleStepClick = (index: number) => {
        setCurrentStepIndex(index);
        setExpandedStepIndex(prevExpandedIndex => prevExpandedIndex === index ? null : index);
    };

    return (
        <div className="lg:border-b lg:border-gray-200 w-screen pb-16">
            <nav
                aria-label="Progress"
                className="mx-auto w-full px-4 sm:px-6 lg:px-8"
            >
                <ol
                    role="list"
                    className="overflow-hidden rounded-md lg:flex lg:items-start lg:rounded-none lg:border-r lg:border-l lg:border-gray-200"
                >
                    {steps.map((step, stepIdx) => {
                        const status = stepIdx < currentStepIndex
                            ? "complete"
                            : stepIdx === currentStepIndex
                            ? "current"
                            : "upcoming";
                        const isExpanded = expandedStepIndex === stepIdx;

                        const previousStepComplete = stepIdx > 0 && (stepIdx -1) < currentStepIndex;

                        return (
                            <li
                                key={step.id}
                                className="relative overflow-hidden lg:flex-1 cursor-pointer group transition-colors duration-200 ease-in-out"
                                onClick={() => handleStepClick(stepIdx)}
                            >
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        "absolute top-0 left-0 h-full w-1 lg:hidden transition-colors duration-200 ease-in-out",
                                        status === 'current' ? 'bg-blue-700' :
                                        status === 'complete' ? 'bg-blue-700' :
                                        'bg-gray-300 group-hover:bg-gray-400'
                                    )}
                                />
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        "absolute top-0 left-0 hidden h-1 w-full lg:block lg:top-auto lg:bottom-0 transition-colors duration-200 ease-in-out",
                                        status === 'current' ? 'bg-blue-700' :
                                        status === 'complete' ? 'bg-blue-700' :
                                        'bg-transparent group-hover:bg-gray-200'
                                    )}
                                />

                                <div
                                    className={classNames(
                                        stepIdx === 0 ? "border-b-0 rounded-t-md" : "",
                                        stepIdx === steps.length - 1 ? "border-t-0 rounded-b-md" : "",
                                        "border border-gray-200 lg:border-0 p-6"
                                    )}
                                >
                                    <div className={classNames(
                                        stepIdx !== 0 ? "lg:pl-9" : "",
                                        "flex items-start"
                                    )}>
                                        <span className="shrink-0">
                                            <span className={classNames(
                                                "flex size-10 items-center justify-center rounded-full",
                                                status === 'complete' ? 'bg-blue-700' :
                                                status === 'current' ? 'border-2 border-blue-700' :
                                                'border-2 border-gray-300'
                                            )}>
                                                {status === 'complete' ? (
                                                    <CheckIcon aria-hidden="true" className="size-6 text-white" />
                                                ) : (
                                                    <span className={classNames(
                                                        status === 'current' ? 'text-blue-700' : 'text-gray-500'
                                                    )}>
                                                        {step.id}
                                                    </span>
                                                )}
                                            </span>
                                        </span>

                                        <div className="ml-4 flex min-w-0 flex-1 flex-col">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <span className={classNames(
                                                        "text-sm font-medium",
                                                        status === 'current' ? 'text-blue-700' :
                                                        status === 'complete' ? 'text-gray-900' :
                                                        'text-gray-500'
                                                    )}>
                                                        {step.name}
                                                    </span>
                                                    <span className="block text-sm font-medium text-gray-500">
                                                        {step.description}
                                                    </span>
                                                </div>
                                                <span className="ml-2 shrink-0">
                                                    {isExpanded ? (
                                                        <ChevronDown className="size-5 text-gray-500" />
                                                    ) : (
                                                        <ChevronRight className="size-5 text-gray-500" />
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Collapsible Detailed Content - Moved mt-4 outside */}
                                    <div className={classNames(
                                        "grid transition-[grid-template-rows] duration-300 ease-in-out",
                                        isExpanded ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]" // Add mt-4 only when expanded
                                    )}>
                                        {/* Wrapper div necessary for grid animation */}
                                        <div className="overflow-hidden">
                                            <div className="pl-14">
                                                <p className="text-sm text-gray-600">
                                                    {step.detailedDescription}
                                                </p>
                                                <p className="mt-2 text-sm font-semibold italic text-gray-700">
                                                    {step.benefit}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {stepIdx !== 0 ? (
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
                                                    previousStepComplete ? "text-blue-700" : "text-gray-300"
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
                                ) : null}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}
