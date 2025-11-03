/**
 * Legal Constants
 * URLs and configuration for Privacy Policy and Terms of Service
 */

/**
 * Legal document URLs
 * These should be updated to point to your hosted privacy policy and terms of service
 * Required for App Store and Google Play Store submissions
 */
export const LEGAL_URLS = {
  /**
   * Privacy Policy URL (REQUIRED for app store submissions)
   * Replace with your actual hosted privacy policy URL
   * Example: 'https://www.yourcompany.com/privacy-policy'
   */
  PRIVACY_POLICY: 'https://www.astrologyapp.com/privacy-policy',

  /**
   * Terms of Service URL (REQUIRED for app store submissions)
   * Replace with your actual hosted terms of service URL
   * Example: 'https://www.yourcompany.com/terms-of-service'
   */
  TERMS_OF_SERVICE: 'https://www.astrologyapp.com/terms-of-service',

  /**
   * Support/Contact Email
   * Used for privacy inquiries and support
   */
  SUPPORT_EMAIL: 'support@astrologyapp.com',

  /**
   * Privacy Contact Email
   * Used specifically for privacy-related inquiries
   */
  PRIVACY_EMAIL: 'privacy@astrologyapp.com',
} as const;

/**
 * Legal document metadata
 */
export const LEGAL_METADATA = {
  /**
   * Last updated date for legal documents
   * Update this whenever you modify the privacy policy or terms of service
   */
  LAST_UPDATED: new Date().toISOString(),

  /**
   * App name for legal documents
   */
  APP_NAME: 'AstrologyApp',

  /**
   * Company/Developer name
   * Update with your actual company or developer name
   */
  COMPANY_NAME: 'AstrologyApp',

  /**
   * Jurisdiction for legal disputes
   * Update with your actual jurisdiction
   */
  JURISDICTION: '[Your Jurisdiction]',
} as const;

/**
 * Data collection categories for privacy disclosures
 * Used for App Store Privacy Nutrition Labels and Google Play Data Safety
 */
export const DATA_COLLECTION = {
  /**
   * Data types collected by the app
   */
  COLLECTED_DATA: [
    {
      category: 'Contact Info',
      types: ['Email Address (Optional)', 'Name (Optional)'],
      purpose: 'App Functionality, User Account',
      linkedToUser: true,
      usedForTracking: false,
    },
    {
      category: 'User Content',
      types: ['Birth Date', 'Birth Time', 'Birth Location'],
      purpose: 'App Functionality, Astrological Calculations',
      linkedToUser: true,
      usedForTracking: false,
    },
    {
      category: 'User Content',
      types: ['Chat Messages', 'Questions to AI'],
      purpose: 'App Functionality, AI Response Generation',
      linkedToUser: true,
      usedForTracking: false,
    },
    {
      category: 'Identifiers',
      types: ['Device ID', 'User ID'],
      purpose: 'App Functionality, Analytics',
      linkedToUser: true,
      usedForTracking: false,
    },
    {
      category: 'Usage Data',
      types: ['Product Interaction', 'App Usage'],
      purpose: 'Analytics, App Functionality',
      linkedToUser: true,
      usedForTracking: false,
    },
    {
      category: 'Purchases',
      types: ['Purchase History', 'Subscription Status'],
      purpose: 'App Functionality, Customer Support',
      linkedToUser: true,
      usedForTracking: false,
    },
  ],

  /**
   * Data NOT collected
   */
  NOT_COLLECTED: [
    'Precise Location (GPS)',
    'Browsing History',
    'Search History',
    'Health & Fitness Data',
    'Financial Info (other than via payment processor)',
    'Contacts',
    'Photos',
    'Audio Data',
    'Sensitive Info',
  ],
} as const;

/**
 * Third-party services integrated in the app
 * Used for privacy policy disclosures
 */
export const THIRD_PARTY_SERVICES = [
  {
    name: 'RevenueCat',
    purpose: 'Subscription and Payment Processing',
    privacyPolicy: 'https://www.revenuecat.com/privacy',
    dataShared: ['Device ID', 'Purchase History', 'Subscription Status'],
  },
  {
    name: 'Chat Services',
    purpose: 'Horoscope Generation and Chat Functionality',
    privacyPolicy: 'https://www.example.com/privacy',
    dataShared: ['Chat Messages', 'Birth Chart Data for Context'],
  },
  {
    name: 'Expo Platform',
    purpose: 'App Updates and Push Notifications',
    privacyPolicy: 'https://expo.dev/privacy',
    dataShared: ['Device ID', 'Push Notification Tokens'],
  },
] as const;

/**
 * User rights under GDPR, CCPA, and similar regulations
 */
export const USER_RIGHTS = {
  ACCESS: {
    title: 'Right to Access',
    description: 'Request a copy of your personal data',
  },
  CORRECTION: {
    title: 'Right to Correction',
    description: 'Update or correct your personal information',
  },
  DELETION: {
    title: 'Right to Deletion',
    description: 'Delete all your data from the app',
  },
  PORTABILITY: {
    title: 'Right to Data Portability',
    description: 'Request a machine-readable copy of your data',
  },
  OPT_OUT: {
    title: 'Right to Opt-Out',
    description: 'Disable notifications or specific features',
  },
  WITHDRAW_CONSENT: {
    title: 'Right to Withdraw Consent',
    description: 'Revoke previously granted permissions',
  },
} as const;
