import { defineType, defineField, type ValidationRule } from 'sanity'

export default defineType({
  name: 'heroContent',
  title: 'Hero Section Content',
  type: 'object',
  fields: [
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'subHeading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'primaryCallToAction',
      title: 'Primary Call to Action',
      type: 'callToAction',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryCallToAction',
      title: 'Secondary Call to Action (Optional)',
      type: 'callToAction',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'videoPlaybackId',
      title: 'Video Playback ID (Optional)',
      type: 'string',
      description: 'For background or prominent hero video.'
    }),
  ],
}) 