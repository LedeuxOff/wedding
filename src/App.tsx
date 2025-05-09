import { CalendarSection } from "./ui/calendar-section";
import { DayPlanSection } from "./ui/day-plan-section";
import { DetailsSection } from "./ui/details-section";
import { DressCodeSection } from "./ui/dress-code-section";
import { FormApproveSection } from "./ui/form-approve-section";
import { GuestChatSection } from "./ui/guest-chat-section";
import { LocationSection } from "./ui/location-section";
import { TimerSection } from "./ui/timer-section";
import { WelcomeSection } from "./ui/welcome-section";

export const App = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 overflow-x-hidden">
      <WelcomeSection />
      <CalendarSection />
      <TimerSection />
      <LocationSection />
      <DayPlanSection />
      <DressCodeSection />
      <FormApproveSection />
      <DetailsSection />
      <GuestChatSection />
    </div>
  );
};
