export type PartnerType = "freight" | "local";
export type PartnerStatus = "pending" | "approved" | "rejected" | "suspended";
export type QuoteStatus = "pending" | "quoted" | "accepted" | "rejected" | "expired";

export interface LogisticsPartner {
  id: string;
  partner_type: PartnerType;
  company_name: string;
  logo_url?: string;
  cover_image_url?: string;
  description?: string;
  email: string;
  phone: string;
  whatsapp?: string;
  website?: string;
  countries: string[];
  cities: string[];
  headquarters_address?: string;
  languages: string[];
  is_verified: boolean;
  is_sponsored: boolean;
  status: PartnerStatus;
  submitted_by_user_id?: string;
  approved_by_user_id?: string;
  approved_at?: string;
  rejection_reason?: string;
  rating: number;
  review_count: number;
  quote_request_count: number;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export interface FreightDetails {
  id: string;
  partner_id: string;
  incoterms: string[];
  shipping_methods: string[];
  certifications: string[];
  avg_delivery_days?: number;
  min_weight_kg?: number;
  max_weight_kg?: number;
  price_range_min?: number;
  price_range_max?: number;
  currency: string;
  required_documents: string[];
  created_at: string;
  updated_at: string;
}

export interface LocalDeliveryDetails {
  id: string;
  partner_id: string;
  service_types: string[];
  storage_capacity_sqm?: number;
  vehicle_fleet_size?: number;
  vehicle_types: string[];
  same_day_delivery: boolean;
  delivery_time_hours?: number;
  price_per_delivery?: number;
  price_per_sqm_storage?: number;
  currency: string;
  coverage_zones: string[];
  created_at: string;
  updated_at: string;
}

export interface PartnerMedia {
  id: string;
  partner_id: string;
  media_type: "image" | "document" | "certificate";
  media_url: string;
  title?: string;
  description?: string;
  sort_order: number;
  created_at: string;
}

export interface PartnerReview {
  id: string;
  partner_id: string;
  user_id?: string;
  rating: number;
  title?: string;
  comment?: string;
  service_used?: string;
  delivery_date?: string;
  is_verified: boolean;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
}

export interface PartnerQuoteRequest {
  id: string;
  partner_id: string;
  user_id?: string;
  company_name?: string;
  contact_name: string;
  email: string;
  phone: string;
  service_type: string;
  description: string;
  origin_country?: string;
  origin_city?: string;
  destination_country?: string;
  destination_city?: string;
  cargo_type?: string;
  weight_kg?: number;
  volume_m3?: number;
  quantity?: number;
  preferred_shipping_date?: string;
  delivery_deadline?: string;
  status: QuoteStatus;
  metadata: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface PartnerFavorite {
  id: string;
  partner_id: string;
  user_id: string;
  created_at: string;
}

export interface PartnerFilters {
  type?: PartnerType;
  countries?: string[];
  cities?: string[];
  search?: string;
  languages?: string[];
  minRating?: number;
  verifiedOnly?: boolean;
  incoterms?: string[];
  shippingMethods?: string[];
  maxDeliveryDays?: number;
  serviceTypes?: string[];
  sameDayDelivery?: boolean;
  minStorageCapacity?: number;
  page?: number;
  limité: number;
}

export type SortOption = "relevance" | "rating" | "recent";

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface EnrichedPartner extends LogisticsPartner {
  freight_details?: FreightDetails;
  local_delivery_details?: LocalDeliveryDetails;
  media?: PartnerMedia[];
  is_favorite?: boolean;
}
