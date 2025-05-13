import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schemaTypes/index'

export default defineConfig({
  name: 'default',
  title: 'Velocity',

  projectId: 'dnouayr4',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema.types,
  },
})
