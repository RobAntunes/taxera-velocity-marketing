import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'complianceCategoriesContent',
  title: 'Compliance Categories Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title (Optional)',
      description: 'E.g., Explore Our Compliance Categories',
      type: 'string',
    }),
    defineField({
      name: 'introductionText',
      title: 'Introduction Text',
      description: 'Text displayed above the category cards.',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'complianceCategory' }] }],
      description: 'Select and order the compliance categories to display.',
    }),
  ],
}) 