import { defineType, defineField, type ValidationRule } from 'sanity'

export default defineType({
  name: 'seoSettings',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Recommended: 50-60 chars. For browser tabs & search results.',
      validation: (Rule: ValidationRule) => Rule.max(70).warning('Title ideally < 70 chars.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 150-160 chars. For search results.',
      validation: (Rule: ValidationRule) => Rule.max(170).warning('Description ideally < 170 chars.'),
    }),
    defineField({
      name: 'metaImage',
      title: 'Meta Image (Social Sharing)',
      type: 'image',
      description: 'Recommended: 1200x630 pixels.',
      options: {
        hotspot: true,
      },
    }),
  ],
}) 