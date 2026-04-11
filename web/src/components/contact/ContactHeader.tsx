import { TrueFocus } from "@/components/ui/TrueFocus";

export const ContactHeader = () => (
    <div className="space-y-10">
        <div className="flex justify-center sm:justify-start ml-3">
            <TrueFocus
                sentence="CONTACT ME"
                manualMode
                blurAmount={5}
                borderColor="var(--primary)"
            />
        </div>

        <div className="max-w-150 text-center sm:text-left">
            <p className="text-muted-foreground text-lg leading-relaxed font-serif">
                We are always looking for ways to improve our products and services.
                Contact us and let us know how we can help you.
            </p>
        </div>

    </div>
);