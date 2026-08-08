import { Stagger, StaggerItem } from "@/components/motion";
import { processSteps } from "@/data/process";

import { TimelineStep } from "./timeline-step";

export function ProcessTimeline() {
  return (
    <div className="relative">
      <Stagger
        slow
        className="grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-20 xl:grid-cols-6 xl:gap-x-8"
      >
        {processSteps.map((step, index) => (
          <StaggerItem key={step.id} className="h-full">
            <TimelineStep
              step={step}
              isLast={index === processSteps.length - 1}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
