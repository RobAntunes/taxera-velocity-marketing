import { defineType, defineField, type ValidationRule } from 'sanity'

export default defineType({
  name: 'howItWorksStep',
  title: 'How It Works - Step',
  type: 'object',
  fields: [
    defineField({
      name: 'stepTitle',
      title: 'Step Title',
      type: 'string',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'stepDescription',
      title: 'Step Description',
      type: 'text',
      rows: 3,
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: "infoText",
      title: "Info Text",
      type: "text",
      rows: 1,
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'stepIcon',
      title: 'Step Icon (Optional)',
      description: 'Name of the Lucide icon for this step.',
      type: 'string',
      // Optionally, make this a select list if you have a predefined set of icons for steps
      // options: {
      //   list: [
      //     { title: 'Check Circle', value: 'CheckCircle' },
      //     { title: 'Cog', value: 'Cog' },
      //   ],
      // },
    }),
  ],
  preview: {
    select: {
      title: 'stepTitle',
      subtitle: 'stepDescription',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title,
        subtitle: subtitle.substring(0, 50) + (subtitle.length > 50 ? '...' : ''),
      }
    }
  }
}) 