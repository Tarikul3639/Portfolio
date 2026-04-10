import { ContactHeader } from "./ContactHeader";
import { ContactInfo } from "./ContactInfo";
import { ContactMap } from "./ContactMap";
import { ContactForm } from "./ContactForm";
import { SectionId } from "@/types/section";

export const Contact = () => {
    return (
        <section id={SectionId.Contact} className="relative flex min-h-screen max-w-7xl w-full overflow-hidden bg-background px-4 md:px-6 py-16">

            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                <div className="space-y-8">
                    <ContactHeader />
                    <ContactInfo />
                    <ContactMap />
                </div>

                <ContactForm />

            </div>
        </section>
    );
};