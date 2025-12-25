"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const copy = {
  fr: {
    title: "Code embed",
    copy: "Copier le code",
    copied: "Code embed copié",
  },
  en: {
    title: "Embed code",
    copy: "Copy code",
    copied: "Embed code copied",
  },
} as const;

export function EmbedCode({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const t = copy[language];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blog.fiitsa.com";
  const embed = `<iframe src="${baseUrl}/embed/${slug}" width="100%" height="720" style="border:0;border-radius:16px;overflow:hidden" loading="lazy"></iframe>`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(embed);
    toast.success(t.copied);
  };

  return (
    <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
      <p className="text-sm font-semibold">{t.title}</p>
      <pre className="mt-3 overflow-x-auto rounded-xl bg-muted/70 p-3 text-xs text-muted-foreground">
        {embed}
      </pre>
      <Button
        size="sm"
        className="mt-3 bg-[#FFD700] text-[#2D0A49] hover:bg-[#FFD700]/90"
        onClick={handleCopy}
      >
        <Copy className="mr-2 h-4 w-4" />
        {t.copy}
      </Button>
    </div>
  );
}
