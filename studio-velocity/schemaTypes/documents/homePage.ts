// schemas/documents/homePage.ts
import { defineType, defineField, type ValidationRule } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page Content',
  type: 'document',
  // You can only have one instance of this document type
  // __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title (CMS Only)',
      type: 'string',
      initialValue: 'Homepage',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seoSettings', // Reference to seoSettings object
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'heroContent', // Reference to heroContent object
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'clientMarqueeLogos',
      title: 'Client Marquee Logos',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'clientLogo' }] }],
      description: 'Logos to display in the scrolling marquee.',
      validation: (Rule: ValidationRule) => Rule.min(1),
    }),
    defineField({
      name: 'productIntroSection',
      title: 'Product Introduction Section',
      type: 'productIntroContent',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'complianceCategoriesSection',
      title: 'Compliance Categories Section',
      type: 'complianceCategoriesContent',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'insightPacksSection',
      title: 'Insight Packs Section',
      type: 'insightPacksContent',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'velocityPromoSection',
      title: 'Velocity Promo Section',
      type: 'velocityPromoContent',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'howItWorksSection',
      title: 'How It Works Section',
      type: 'howItWorksContent',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Home Page Content',
      }
    },
  },
}) 