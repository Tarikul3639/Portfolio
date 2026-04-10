import { ContactInput } from "./ContactInput";

export const ContactForm = () => (
    <div className="relative bg-card/70 border border-border/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl">

        {/* grid effect */}
        <div
            className="absolute top-0 right-0 w-2/3 h-2/3 opacity-20 pointer-events-none"
            style={{
                backgroundImage:
                    "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
                maskImage: "linear-gradient(to bottom left, black, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom left, black, transparent)",
            }}
        />

        <form className="space-y-6 relative z-10">
            <ContactInput label="Full name" placeholder="Tarikul Islam" />
            <ContactInput label="Email Address" placeholder="nexion@gmail.com" type="email" />
            <ContactInput label="Company" placeholder="Nexion Inc." />
            <ContactInput label="Message" textarea placeholder="Type your message here"/>

            <button className="inline-flex items-center justify-center bg-primary text-sm text-primary-foreground font-medium px-5 py-2.5 rounded-sm hover:bg-primary/90 transition-colors active:scale-[0.98]">
                Submit
            </button>
        </form>
    </div>
);