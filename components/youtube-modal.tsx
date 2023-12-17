"use client";

import {
  Dialog,
  DialogTrigger,
  VideoDialogContent,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Play } from "lucide-react";

export const YoutubeModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Play className="w-4 h-4 mr-2" /> Play Video
        </Button>
      </DialogTrigger>
      <VideoDialogContent className="max-w-4xl">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube-nocookie.com/embed/LFwDynO5PZk?si=X2l4kG0BIH3EUzdI&amp;controls=0&autoplay=1&modestbranding=1&showinfo=0"
          title="YouTube video player"
          allow="modestbranding; showinfo; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </VideoDialogContent>
    </Dialog>
  );
};
