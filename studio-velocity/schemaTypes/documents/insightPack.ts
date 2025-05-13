import { defineType, defineField, type ValidationRule } from 'sanity'

export default defineType({
  name: 'insightPack',
  title: 'Insight Pack',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'points',
      title: 'Bullet Points',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key features or points for this pack.',
      validation: (Rule: ValidationRule) => Rule.min(1),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image for Card',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    // If each pack has a unique CTA different from the main brochure CTA:
    // defineField({
    //   name: 'callToAction',
    //   title: 'Individual Pack Call to Action (Optional)',
    //   type: 'callToAction',
    // }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'backgroundImage',
    },
  },
}) 