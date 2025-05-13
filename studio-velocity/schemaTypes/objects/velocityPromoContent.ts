import { defineType, defineField, type ValidationRule } from 'sanity'

export default defineType({
  name: 'velocityPromoContent',
  title: 'Velocity Promo Section',
  type: 'object',
  fields: [
    defineField({
      name: 'mainTitleLeft',
      title: 'Main Title (Left Side, e.g., Velocity)',
      type: 'string',
    }),
    defineField({
      name: 'subTitleLeft',
      title: 'Subtitle (Left Side, e.g., by Taxera)',
      type: 'string',
    }),
    defineField({
      name: 'mainTitleRight',
      title: 'Main Title (Right Side, e.g., There\'s no going back.)',
      type: 'string',
    }),
    defineField({
      name: 'videoSection',
      title: 'Video Section (e.g., Blast off button)',
      type: 'videoEmbed', // Reference to videoEmbed object
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'rocketImage',
      title: 'Rocket Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
  ],
}) 