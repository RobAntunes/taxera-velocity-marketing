import { defineType, defineField, type ValidationRule } from 'sanity'

export default defineType({
  name: 'callToAction',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link URL',
      description: 'Internal path (e.g., /about) or external URL (https://example.com)',
      type: 'url',
      validation: (Rule: ValidationRule) => Rule.uri({
        allowRelative: true,
        scheme: ['http', 'https', 'mailto', 'tel']
      }).required()
    }),
    defineField({
      name: 'isDownload',
      title: 'Is Download Link?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'targetBlank',
      title: 'Open in New Tab?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'buttonVariant',
      title: 'Button Variant/Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Link', value: 'link' },
        ],
        layout: 'radio',
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'iconName',
      title: 'Button Icon (Optional)',
      description: 'Name of the Lucide icon (e.g., ArrowRight).',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: '' },
          { title: 'Arrow Right', value: 'ArrowRight' },
          { title: 'Play Circle', value: 'PlayCircle' },
        ],
      },
    }),
  ],
}) 