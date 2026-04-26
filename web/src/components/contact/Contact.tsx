"use client";

import React, { useState } from "react";
import { ContactHeader } from "./ContactHeader";
import { ContactInfo } from "./ContactInfo";
import { ContactMap } from "./ContactMap";
import { ContactForm } from "./ContactForm";
import { SectionId } from "@/types/section";
import { toast } from "sonner"

// API
import { apiClient, getErrorMessage } from "@/api/axios";

export interface ContactFormData {
    name: string;
    email: string;
    company: string;
    message: string;
}

export const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            if (!formData.name || !formData.email || !formData.message) {
                throw new Error("Please fill in all required fields");
            }

            if (!/\S+@\S+\.\S+/.test(formData.email)) {
                throw new Error("Please enter a valid email address");
            }

            if (formData.message.length < 10) {
                throw new Error("Message should be at least 10 characters long");
            }
            
            const { data } = await apiClient.post("/contact", formData);

            if (!data?.success) {
                throw new Error(data?.message || "Failed to send message");
            }

            // Optionally, you can show a success toast here
            toast.success(data.message || "Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                company: "",
                message: "",
            });
        } catch (err) {
            const error = getErrorMessage(err);
            toast.error(error || "Failed to send message");
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section
            id={SectionId.Contact}
            className="relative flex min-h-screen max-w-7xl w-full overflow-hidden bg-background px-4 md:px-6 py-16"
        >
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                <div className="space-y-8">
                    <ContactHeader />
                    <ContactInfo />
                    <ContactMap />
                </div>

                <ContactForm
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleSubmit}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </section>
    );
};
