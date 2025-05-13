import { defineType, defineField, type ValidationRule } from 'sanity'

export default defineType({
  name: 'insightPacksContent',
  title: 'Insight Packs Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title (e.g., Insight Packs)',
      type: 'string',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 4,
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "text",
      rows: 1,  
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'brochureCallToAction',
      title: 'Brochure Call to Action (e.g., Find my pack)',
      type: 'callToAction', // Reference to callToAction object
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'packs',
      title: 'Insight Packs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'insightPack' }] }],
      description: 'Select and order the insight packs to display.',
      validation: (Rule: ValidationRule) => Rule.min(1),
    }),
  ],
}) 