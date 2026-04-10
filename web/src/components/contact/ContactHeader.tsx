import { Mail } from "lucide-react";
import { TrueFocus } from "@/components/ui/TrueFocus";

export const ContactHeader = () => (
    <div className="space-y-10 text-left">
        <div className="flex ml-3">
            <TrueFocus
                sentence="CONTACT ME"
                manualMode
                blurAmount={5}
                borderColor="var(--primary)"
            />
        </div>

        <p className="text-muted-foreground text-lg leading-relaxed font-serif">
            We are always looking for ways to improve our products and services.
            Contact us and let us know how we can help you.
        </p>
    </div>
);