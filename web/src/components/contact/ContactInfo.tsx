import { Mail, Phone } from "lucide-react";

export const ContactInfo = () => (
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-muted-foreground text-sm font-heading">

        {/* Email */}
        <div className="flex items-center gap-2">
            <Mail size={14} className="text-primary" />
            <span>tarikulislam3639@gmail.com</span>
        </div>

        {/* Divider */}
        <span className="w-1 h-1 bg-border rounded-full" />

        {/* Phone */}
        <div className="flex items-center gap-2">
            <Phone size={14} className="text-primary" />
            <span>01909290959</span>
        </div>

    </div>
);