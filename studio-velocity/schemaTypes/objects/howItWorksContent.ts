import { defineType, defineField, type ValidationRule } from 'sanity'

export default defineType({
  name: 'howItWorksContent',
  title: 'How It Works Section',
  type: 'object',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'stepsTitle',
      title: 'Steps Title (e.g., Four steps for success)',
      type: 'string',
    }),
    defineField({
      name: 'hiwSteps',
      title: 'Steps',
      type: 'array',
      of: [{ type: 'howItWorksStep' }], // Array of the object type defined above
      description: 'Define the steps for the How It Works section.',
      validation: (Rule: ValidationRule) => Rule.min(1).max(6).warning('Usually 3-4 steps are optimal.'),
    }),
    // Add more fields if HiW.svelte component takes more distinct props from CMS
  ],
}) 