// Client-side token — safe to expose in the browser, not a secret.
// Paddle dashboard: Developer Tools → Authentication → Client-side tokens.
//
// Sandbox and Live are two entirely separate Paddle accounts (separate
// catalog, separate tokens). Live account is now set up with real
// products/prices — checkout runs against production.
export const PADDLE_CLIENT_TOKEN = "live_488083c69396d8bc7516d2a5775";
export const PADDLE_ENVIRONMENT: "sandbox" | "production" = "production";
