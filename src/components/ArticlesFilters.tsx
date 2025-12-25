"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/hooks/useLanguage";

const copy = {
  fr: {
    searchPlaceholder: "Rechercher un article",
    categoryPlaceholder: "Catégorie",
    allCategories: "Toutes les catégories",
    tagPlaceholder: "Tag",
    allTags: "Tous les tags",
    sortPlaceholder: "Trier",
    sortRecent: "Plus récents",
    sortPopular: "Plus populaires",
    apply: "Appliquer",
  },
  en: {
    searchPlaceholder: "Search an article",
    categoryPlaceholder: "Category",
    allCategories: "All categories",
    tagPlaceholder: "Tag",
    allTags: "All tags",
    sortPlaceholder: "Sort",
    sortRecent: "Most recent",
    sortPopular: "Most popular",
    apply: "Apply",
  },
} as const;

export function ArticlesFilters({
  categories,
  tags,
}: {
  categories: string[];
  tags: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const t = copy[language];

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [tag, setTag] = useState("all");
  const [sort, setSort] = useState("recent");

  useEffect(() => {
    setQuery(searchParams.get("query") || "");
    setCategory(searchParams.get("category") || "all");
    setTag(searchParams.get("tag") || "all");
    setSort(searchParams.get("sort") || "recent");
  }, [searchParams]);

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    if (category && category !== "all") params.set("category", category);
    if (tag && tag !== "all") params.set("tag", tag);
    if (sort) params.set("sort", sort);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-4 md:grid-cols-4">
      <div className="relative md:col-span-2">
        <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t.searchPlaceholder}
          className="pl-9"
        />
      </div>
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger>
          <SelectValue placeholder={t.categoryPlaceholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t.allCategories}</SelectItem>
          {categories.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={tag} onValueChange={setTag}>
        <SelectTrigger>
          <SelectValue placeholder={t.tagPlaceholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t.allTags}</SelectItem>
          {tags.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="md:col-span-3">
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger>
            <SelectValue placeholder={t.sortPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">{t.sortRecent}</SelectItem>
            <SelectItem value="popular">{t.sortPopular}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="bg-[#FFD700] text-[#2D0A49] hover:bg-[#FFD700]/90" onClick={applyFilters}>
        {t.apply}
      </Button>
    </div>
  );
}
