import { defineType, defineField, type ValidationRule } from 'sanity'

export default defineType({
  name: 'videoEmbed',
  title: 'Video Embed Section',
  type: 'object',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title (CMS Only)',
      type: 'string',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text (Video Trigger)',
      type: 'string',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color (Button/Caption)',
      type: 'string',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Blue (Dark)', value: 'blue-700' },
          { title: 'Black', value: 'black' },
        ],
      },
      initialValue: 'white',
    }),
    defineField({
      name: 'buttonBgColor',
      title: 'Button Background (Optional)',
      type: 'string',
      options: {
        list: [
          { title: 'None (Transparent)', value: '' },
          { title: 'Blue (Dark)', value: 'blue-700' },
          { title: 'White', value: 'white' },
        ],
      },
    }),
    defineField({
      name: 'playbackId',
      title: 'Mux Playback ID',
      type: 'string',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'captionText',
      title: 'Caption Text (Optional)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'autoPlay',
      title: 'Auto Play Video?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'buttonText',
      playbackId: 'playbackId',
    },
    prepare(selection) {
      const { title, subtitle, playbackId } = selection
      return {
        title: title || 'Video Embed',
        subtitle: `${subtitle || 'Video'} (ID: ${playbackId || 'Not set'})`,
      }
    },
  },
}) 