// import { notFound } from "next/navigation";
// import { getRequestConfig } from "next-intl/server";
// import { routing } from "./routing";

// export default getRequestConfig(async ({ locale }) => {
//   // Validate that the incoming `locale` parameter is valid
//   if (!routing.locales.includes(locale as any)) notFound();

//   return {
//     messages: (await import(`../../messages/${locale}.json`)).default,
//   };
// });

import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
