/**
 * src/utils/formatters.js
 *
 * Utility functions for formatting dates, numbers, currencies, and strings.
 * Uses the native Intl API for robust localization.
 */

/**
 * Formats a date object, timestamp, or date string into a localized readable format.
 * @param {Date | string | number} dateInput The date value to format.
 * @param {string} [locale='en-US'] The locale string (e.g., 'ar-SA', 'en-US').
 * @param {Intl.DateTimeFormatOptions} [options] Custom formatting options.
 * @returns {string} The formatted date string, or an empty string if invalid.
 */
export const formatDate = (dateInput, locale = 'en-US', options = {}) => {
  if (!dateInput) {
    return '';
  }

  try {
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) {
      return '';
    }

    const defaultOptions = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: undefined, // Explicitly remove seconds by default
    };

    const formatOptions = { ...defaultOptions, ...options };

    return new Intl.DateTimeFormat(locale, formatOptions).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return String(dateInput); // Return original input as fallback
  }
};

/**
 * Formats a number into a localized currency string.
 * @param {number} amount The monetary value.
 * @param {string} [locale='en-US'] The locale string.
 * @param {string} [currency='USD'] The currency code (e.g., 'SAR', 'EUR').
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (amount, locale = 'en-US', currency = 'USD') => {
  if (amount === null || amount === undefined || isNaN(Number(amount))) {
    return '';
  }

  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return String(amount);
  }
};

/**
 * Formats a number with locale-specific separators (e.g., thousands separator).
 * @param {number} number The number to format.
 * @param {string} [locale='en-US'] The locale string.
 * @param {Intl.NumberFormatOptions} [options] Custom formatting options.
 * @returns {string} The formatted number string.
 */
export const formatNumber = (number, locale = 'en-US', options = {}) => {
  if (number === null || number === undefined || isNaN(Number(number))) {
    return '';
  }

  try {
    const defaultOptions = {
      style: 'decimal',
      useGrouping: true,
    };

    const formatOptions = { ...defaultOptions, ...options };

    return new Intl.NumberFormat(locale, formatOptions).format(number);
  } catch (error) {
    console.error('Error formatting number:', error);
    return String(number);
  }
};

/**
 * Truncates a string to a specified maximum length, adding a suffix if truncated.
 * @param {string} str The input string.
 * @param {number} [maxLength=50] The maximum length before truncation.
 * @param {string} [suffix='...'] The suffix to append if truncated.
 * @returns {string} The truncated or original string.
 */
export const truncateString = (str, maxLength = 50, suffix = '...') => {
  if (!str || typeof str !== 'string') {
    return '';
  }

  if (str.length <= maxLength) {
    return str;
  }

  return str.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} str The input string.
 * @returns {string} The capitalized string.
 */
export const capitalize = (str) => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Converts a string to Title Case (Capitalizes the first letter of every word).
 * @param {string} str The input string.
 * @returns {string} The string in Title Case.
 */
export const toTitleCase = (str) => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};