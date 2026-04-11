"use client";

import { ContactInput } from "./ContactInput";
import { OctagonAlert } from "lucide-react";

export interface ContactFormData {
    name: string;
    email: string;
    company: string;
    message: string;
}
export interface ContactFormProps {
    formData: ContactFormData;
    setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
    onSubmit: (e: React.FormEvent) => void;
    isLoading?: boolean;
    error?: string | null;
}

export const ContactForm = ({
    formData,
    setFormData,
    onSubmit,
    isLoading,
    error,
}: ContactFormProps) => {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="relative bg-card/70 border border-border/20 p-8 rounded-2xl backdrop-blur-sm shadow-xl">
            {/* grid effect */}
            <div
                className="absolute top-0 right-0 w-2/3 h-2/3 opacity-20 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                    maskImage: "linear-gradient(to bottom left, black, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom left, black, transparent)",
                }}
            />

            <form className="space-y-6 relative z-10" onSubmit={onSubmit}>
                <ContactInput
                    label="Full name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tarikul Islam"
                />
                <ContactInput
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nexion@gmail.com"
                    type="email"
                />
                <ContactInput
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nexion Inc."
                />
                <ContactInput
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    textarea
                    placeholder="Type your message here"
                />

                {error && (
                    <div className="flex items-center gap-2 px-4 py-3 rounded-(--radius) border border-destructive/20 bg-destructive/10 text-destructive animate-in fade-in zoom-in-95 duration-200">
                        {/* Minimalist Error Icon */}
                        <OctagonAlert className="w-4 h-4" />

                        <p className="text-xs font-medium leading-none tracking-wide">
                            {error}
                        </p>
                    </div>
                )}

                <button
                    disabled={isLoading}
                    className="inline-flex items-center justify-center bg-primary text-sm text-primary-foreground font-medium px-5 py-2.5 rounded-sm hover:bg-primary/90 transition-colors active:scale-[0.98]"
                >
                    {isLoading ? "Sending..." : "Send Mail"}
                </button>
            </form>
        </div>
    );
};
