export type DownloadStatus = 'idle' | 'loading' | 'success' | 'error';

export interface SocialIcon {
    icon: React.ComponentType<{ className?: string }>;
    link: string;
    img: string;
}

import type React from "react";

export interface SmartDownloadButtonProps {
    status: DownloadStatus;
    onClick: () => void;
}