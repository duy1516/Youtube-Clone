"use client";

import MuxPlayer from "@mux/mux-player-react"

interface VideoPlayerProps {
    playbackId?: string | null | undefined;
    thumbnailUrl?: string | null | undefined;
    autoPlay?: boolean;
    onPlay?: () => void;
};

export const VideoPlayer = ({
    playbackId,
    thumbnailUrl,
    autoPlay,
    onPlay,
}: VideoPlayerProps) => {
    if (!playbackId)
        return (
            <div className="w-full h-full rounded-xl bg-[#989898] flex items-center justify-center">
                <p className="text-sm text-white">Error loading video!</p>
            </div>
        );

    return (
        <MuxPlayer
            playbackId={playbackId}
            poster={thumbnailUrl || "/placeholder.svg"}
            playerInitTime={0}
            autoPlay={autoPlay}
            thumbnailTime={0}
            className="w-full h-full object-contain"
            accentColor="#ff2056"
            onPlay={onPlay}
        />
    );
};