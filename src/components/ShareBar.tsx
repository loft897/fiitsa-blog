"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Code, Copy, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { useUTMTracking } from "@/hooks/useUTMTracking";

const icons = {
  whatsapp: "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/whatsapp.png",
  facebook: "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Facebook_icon.svg.png",
  linkedin: "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/LinkedIn_icon.svg.png",
};

const copy = {
  fr: {
    share: "Partager",
    copyLink: "Copier le lien",
    copied: "Lien copié",
    shareOn: "Partager sur",
    copyEmbed: "Code embed copié",
  },
  en: {
    share: "Share",
    copyLink: "Copy link",
    copied: "Link copied",
    shareOn: "Share on",
    copyEmbed: "Embed code copied",
  },
} as const;

export function ShareBar({
  url,
  title,
  embedSlug,
}: {
  url: string;
  title: string;
  embedSlug?: string;
}) {
  const { language } = useLanguage();
  const { addUTMToUrl } = useUTMTracking();
  const t = copy[language];
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const shareUrl = addUTMToUrl(url);
  const embedCode = embedSlug
    ? `<iframe src="${process.env.NEXT_PUBLIC_SITE_URL || "https://blog.fiitsa.com"}/embed/${embedSlug}" width="100%" height="720" style="border:0;border-radius:16px;overflow:hidden" loading="lazy"></iframe>`
    : null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!panelRef.current) return;
      if (panelRef.current.contains(event.target as Node)) return;
      setOpen(false);
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    toast.success(t.copied);
    setOpen(false);
  };

  const handleCopyEmbed = async () => {
    if (!embedCode) return;
    await navigator.clipboard.writeText(embedCode);
    toast.success(t.copyEmbed);
    setOpen(false);
  };

  const openShare = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="relative flex justify-center" ref={panelRef}>
      <Button
        size="sm"
        className="bg-[#FFD700] text-[#2D0A49] hover:bg-[#FFD700]/90"
        onClick={() => setOpen((value) => !value)}
      >
        <Share2 className="mr-2 h-4 w-4" />
        {t.share}
      </Button>

      {open && (
        <div className="absolute left-0 top-full z-30 mt-2 w-64 rounded-2xl border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="text-[#2D0A49] hover:bg-[#FFD700]/20"
              onClick={handleCopyLink}
              aria-label={t.copyLink}
            >
              <Copy className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hover:bg-[#FFD700]/20"
              onClick={() =>
                openShare(
                  `https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`
                )
              }
              aria-label={`${t.shareOn} WhatsApp`}
            >
              <Image src={icons.whatsapp} alt="WhatsApp" width={18} height={18} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hover:bg-[#FFD700]/20"
              onClick={() =>
                openShare(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
                )
              }
              aria-label={`${t.shareOn} Facebook`}
            >
              <Image src={icons.facebook} alt="Facebook" width={18} height={18} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hover:bg-[#FFD700]/20"
              onClick={() =>
                openShare(
                  `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`
                )
              }
              aria-label={`${t.shareOn} LinkedIn`}
            >
              <Image src={icons.linkedin} alt="LinkedIn" width={18} height={18} />
            </Button>
            {embedCode && (
              <Button
                size="icon"
                variant="ghost"
                className="text-[#2D0A49] hover:bg-[#FFD700]/20"
                onClick={handleCopyEmbed}
                aria-label="Copier le code embed"
              >
                <Code className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
