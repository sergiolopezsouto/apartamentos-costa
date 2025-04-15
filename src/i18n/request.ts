import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    locale = 'en'; // Default to English if locale is undefined
  }
  
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  };
}); 