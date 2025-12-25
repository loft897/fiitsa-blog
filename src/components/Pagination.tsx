import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trans } from "@/components/Trans";

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  queryString,
  pageParam = "page",
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
  queryString?: string;
  pageParam?: string;
}) {
  if (totalPages <= 1) return null;

  const buildHref = (page: number) => {
    const params = new URLSearchParams(queryString || "");
    params.set(pageParam, String(page));
    return `${basePath}?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-between">
      {currentPage <= 1 ? (
        <Button
          disabled
          className="border-[#FFD700] bg-[#FFD700] text-[#2D0A49] hover:bg-[#FFD700]/90"
        >
          <Trans fr="Précédent" en="Previous" />
        </Button>
      ) : (
        <Button
          asChild
          className="border-[#FFD700] bg-[#FFD700] text-[#2D0A49] hover:bg-[#FFD700]/90"
        >
          <Link href={buildHref(currentPage - 1)}>
            <Trans fr="Précédent" en="Previous" />
          </Link>
        </Button>
      )}
      <span className="text-sm text-muted-foreground">
        <Trans
          fr={`Page ${currentPage} sur ${totalPages}`}
          en={`Page ${currentPage} of ${totalPages}`}
        />
      </span>
      {currentPage >= totalPages ? (
        <Button
          disabled
          className="border-[#FFD700] bg-[#FFD700] text-[#2D0A49] hover:bg-[#FFD700]/90"
        >
          <Trans fr="Suivant" en="Next" />
        </Button>
      ) : (
        <Button
          asChild
          className="border-[#FFD700] bg-[#FFD700] text-[#2D0A49] hover:bg-[#FFD700]/90"
        >
          <Link href={buildHref(currentPage + 1)}>
            <Trans fr="Suivant" en="Next" />
          </Link>
        </Button>
      )}
    </div>
  );
}
