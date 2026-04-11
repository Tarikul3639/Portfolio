"use client";
interface Props {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    type?: string;
    textarea?: boolean;
}

export const ContactInput = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    textarea,
}: Props) => (
    <div className="space-y-2">
        <label className="text-sm font-light text-foreground">{label}</label>

        {textarea ? (
            <textarea
                rows={4}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full bg-background text-sm font-light px-4 py-2.5 mt-2 rounded-lg focus:outline-none border border-accent/60 focus:ring-2 focus:ring-accent transition-all placeholder:text-muted-foreground/70"
            />
        ) : (
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full bg-background text-sm font-light px-4 py-2.5 mt-2 rounded-lg focus:outline-none border border-accent/60 focus:ring-2 focus:ring-accent transition-all placeholder:text-muted-foreground/70"
            />
        )}
    </div>
);