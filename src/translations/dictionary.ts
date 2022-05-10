export interface Dictionary {
  "header": {
    "sign_off": string
  },
  "filters": {
    "filters": string,
    "categories": string,
    "locations": string,
    "time": string,
    "compared_to": string
  },
  "main_menu": {
    "main_menu": string,
    "dashboard": string,
    "locations": string,
  },
  "section": {
    "objectives": string,
    "demographics": string,
  },
  "titles": {
    "shop": string,
    "objectives_store": string,
  },
  "tabs": {
    "tickets_hour": string,
    "inputs": string,
    "customers": string,
    "gender": string,
    "age": string
  },
  "cards": {
    "visitors": string,
    "transactions": string,
    "conversion": string,
    "women": string,
    "mens": string,
    "total": string,
  },
  "time": {
    "yesterday": string,
    "current_week": string,
    "last_week": string,
    "current_month": string,
    "last_month": string,
    "q_current": string,
    "previous_q": string,
    "current_year": string,
    "last_year": string,
    "exact_day": string,
    "date_range": string,
    "month_previous_year": string,
    "q_previous_year": string,
    "week_previous_year": string,
    "same_day_previous_week": string,
    "same_day_previous_year": string,
    "without_comparison": string,
  },
  "labels": string[],
  "categories": string[]
  "difference": string,
  "heatmapLabels": {
    "visitors": string,
    "transactions": string,
    "conversions": string,
  },
  "day_week": string[],
}