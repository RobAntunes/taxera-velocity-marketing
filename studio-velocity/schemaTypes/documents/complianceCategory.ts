import { defineType, defineField, type ValidationRule } from 'sanity'

const iconList = [
  { title: 'Receipt Icon', value: 'Receipt' },
  { title: 'ChartBar Icon', value: 'ChartBar' },
  { title: 'PackageCheck Icon', value: 'PackageCheck' },
  { title: 'Truck Icon', value: 'Truck' },
  { title: 'ShoppingCart Icon', value: 'ShoppingCart' },
  { title: 'Factory Icon', value: 'Factory' },
  { title: 'Calculator Icon', value: 'Calculator' },
  { title: 'Store Icon', value: 'Store' },
  // Add any other icons your CategoryCard might use
];

export default defineType({
  name: 'complianceCategory',
  title: 'Compliance Category',
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
      title: 'Short Description (for card)',
      type: 'text',
      rows: 3,
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon',
      type: 'string',
      options: {
        list: iconList,
        layout: 'dropdown',
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active?',
      description: 'Inactive categories will be greyed out and not clickable for modal content.',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'hasVideo',
      title: 'Has Video Content in Modal?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'videoPlaybackId',
      title: 'Mux Playback ID (for modal video)',
      type: 'string',
      hidden: ({ parent }) => !parent?.hasVideo, // Show only if hasVideo is true
      description: 'Required if \'Has Video Content\' is checked.',
      validation: (Rule: ValidationRule) => Rule.custom((value, context) => {
        const { parent } = context as { parent: { hasVideo?: boolean } };
        if (parent?.hasVideo && !value) {
          return 'Playback ID is required if the category has video content.'
        }
        return true;
      })
    }),
    defineField({
      name: 'modalText',
      title: 'Modal Rich Text Content',
      type: 'array', // For Sanity's Portable Text / Block Content
      of: [
        { 
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H4', value: 'h4'},
            {title: 'H5', value: 'h5'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Numbered', value: 'number'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}, {title:'Code', value:'code'}],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [{name: 'href', type: 'url', title: 'URL'}]
              }
            ]
          }
        }
      ],
      description: 'Detailed content to display in the modal alongside the video (if any).',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'iconName',
      active: 'isActive',
    },
    prepare(selection) {
      const { title, icon, active } = selection;
      return {
        title: title,
        subtitle: `Icon: ${icon || 'N/A'}${active ? '' : ' (Inactive)'}`,
        // media: <LucideIconComponent name={icon} /> // Requires a way to render Svelte/Lucide in preview
      };
    },
  },
}) 