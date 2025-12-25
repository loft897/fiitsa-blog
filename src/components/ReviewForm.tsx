"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/hooks/useLanguage";

const clientReviewSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  rating: z.string().min(1),
  message: z.string().min(10).max(2000),
  website: z.string().optional(),
});

type ReviewFormValues = z.infer<typeof clientReviewSchema>;

const copy = {
  fr: {
    nameLabel: "Nom et prénom",
    namePlaceholder: "Votre nom",
    emailLabel: "Email",
    emailPlaceholder: "vous@email.com",
    ratingLabel: "Note",
    ratingPlaceholder: "Choisir",
    messageLabel: "Message",
    messagePlaceholder: "Votre retour",
    submit: "Envoyer mon avis",
    submitting: "Envoi...",
    error: "Erreur lors de l'envoi",
    success: "Merci pour votre avis. Il sera publié après modération.",
    unexpected: "Erreur inattendue",
  },
  en: {
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    ratingLabel: "Rating",
    ratingPlaceholder: "Choose",
    messageLabel: "Message",
    messagePlaceholder: "Your feedback",
    submit: "Submit review",
    submitting: "Sending...",
    error: "Error while sending",
    success: "Thanks for your review. It will be published after moderation.",
    unexpected: "Unexpected error",
  },
} as const;

export function ReviewForm({ postId }: { postId: string }) {
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();
  const t = copy[language];
  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(clientReviewSchema),
    defaultValues: { rating: "5" },
    mode: "onChange",
  });

  const onSubmit = async (values: ReviewFormValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          postId,
          rating: Number(values.rating),
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || t.error);
      }

      form.reset({ rating: "5", message: "", name: "", email: "", website: "" });
      toast.success(t.success);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t.unexpected);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t.nameLabel}</Label>
          <Input id="name" placeholder={t.namePlaceholder} {...form.register("name")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t.emailLabel}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t.emailPlaceholder}
            {...form.register("email")}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="rating">{t.ratingLabel}</Label>
        <Select
          value={form.watch("rating")}
          onValueChange={(value) => form.setValue("rating", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder={t.ratingPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 5 }).map((_, index) => {
              const value = String(index + 1);
              return (
                <SelectItem key={value} value={value}>
                  {value} / 5
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t.messageLabel}</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder={t.messagePlaceholder}
          {...form.register("message")}
        />
      </div>
      <div className="hidden">
        <Label htmlFor="website">Website</Label>
        <Input id="website" autoComplete="off" {...form.register("website")} />
      </div>
      <Button
        type="submit"
        disabled={loading || !form.formState.isValid}
        className="bg-[#FFD700] text-[#2D0A49] hover:bg-[#FFD700]/90 disabled:opacity-50"
      >
        {loading ? t.submitting : t.submit}
      </Button>
    </form>
  );
}
