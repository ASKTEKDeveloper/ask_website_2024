const brochureApiUrls = {
  local: process.env.PRODUCT_BROCHURE_API_URL_LOCAL || "http://localhost:1311/api",
  live: process.env.PRODUCT_BROCHURE_API_URL_LIVE || "https://live.asktek.net/asktek.net_website_manager_api/api",
};

export const getProductBrochureApiBaseUrl = () => {
  const environment = String(process.env.PRODUCT_BROCHURE_API_ENV || "local")
    .trim()
    .toLowerCase();
  const configuredUrl = String(process.env.PRODUCT_BROCHURE_API_URL || "").trim();
  const baseUrl = configuredUrl || brochureApiUrls[environment] || brochureApiUrls.local;

  return baseUrl.replace(/\/$/, "");
};

export const getProductBrochureFileUrl = (storedFileName) => {
  const normalizedPath = String(storedFileName || "")
    .replace(/\\/g, "/")
    .replace(/^\/+/, "");

  if (!normalizedPath.toLowerCase().startsWith("productbrochures/")) {
    return null;
  }

  return `${getProductBrochureApiBaseUrl()}/${normalizedPath}`;
};
