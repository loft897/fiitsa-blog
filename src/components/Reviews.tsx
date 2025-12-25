import { Star } from "lucide-react";
import { LocalizedDate } from "@/components/LocalizedDate";
import { Pagination } from "@/components/Pagination";
import { ReviewForm } from "@/components/ReviewForm";
import { Trans } from "@/components/Trans";
import type { Review } from "@/lib/types";

export function Reviews({
  postId,
  postSlug,
  reviews,
  count,
  page,
  pageSize,
}: {
  postId: string;
  postSlug: string;
  reviews: Review[];
  count: number | null;
  page: number;
  pageSize: number;
}) {
  const totalPages = count ? Math.ceil(count / pageSize) : 1;

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary">
          <Trans fr="Avis des lecteurs" en="Reader reviews" />
          {typeof count === "number" && (
            <span className="ml-2 text-sm font-medium text-primary/80">({count})</span>
          )}
        </h2>
        <p className="text-sm text-primary/80">
          <Trans
            fr="Partagez votre expérience et aidez la communauté."
            en="Share your experience and help the community."
          />
        </p>
      </div>
      <div className="max-h-[500px] overflow-y-auto pr-2">
        <div className="grid gap-4 md:grid-cols-2">
          {reviews.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              <Trans
                fr="Aucun avis approuvé pour le moment."
                en="No approved reviews yet."
              />
            </p>
          ) : (
            reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl border border-border/60 bg-background/80 p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">
                    {review.name || <Trans fr="Lecteur anonyme" en="Anonymous reader" />}
                  </p>
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{review.message}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  <LocalizedDate date={review.created_at} includeTime />
                </p>
              </div>
            ))
          )}
        </div>
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        basePath={`/articles/${postSlug}`}
        pageParam="reviewsPage"
      />
      <div className="rounded-3xl border border-border/60 bg-background/80 p-6">
        <h3 className="text-lg font-semibold text-primary">
          <Trans fr="Laisser un avis" en="Leave a review" />
        </h3>
        <p className="text-sm text-primary/80">
          <Trans
            fr="Votre message sera vérifié avant publication."
            en="Your message will be reviewed before publication."
          />
        </p>
        <div className="mt-4">
          <ReviewForm postId={postId} />
        </div>
      </div>
    </section>
  );
}