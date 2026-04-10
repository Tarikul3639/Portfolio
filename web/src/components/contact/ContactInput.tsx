interface Props {
    label: string;
    placeholder?: string;
    type?: string;
    textarea?: boolean;
}

export const ContactInput = ({
    label,
    placeholder,
    type = "text",
    textarea,
}: Props) => (
    <div className="space-y-2">
        <label className="text-sm font-light text-foreground">{label}</label>

        {textarea ? (
            <textarea
                rows={4}
                placeholder={placeholder}
                className="w-full bg-background text-sm font-light px-4 py-2.5 mt-2 rounded-lg focus:outline-none border border-accent/60 focus:ring-2 focus:ring-accent transition-all placeholder:text-muted-foreground/70"
            />
        ) : (
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-background text-sm font-light px-4 py-2.5 mt-2 rounded-lg focus:outline-none border border-accent/60 focus:ring-2 focus:ring-accent transition-all placeholder:text-muted-foreground/70"
            />
        )}
    </div>
);