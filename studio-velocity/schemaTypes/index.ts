// schemas/index.ts
import { type SchemaTypeDefinition } from 'sanity'

// Import object types
import callToAction from './objects/callToAction'
import seoSettings from './objects/seoSettings'
import heroContent from './objects/heroContent'
import productIntroContent from './objects/productIntroContent'
import videoEmbed from './objects/videoEmbed'
import complianceCategoriesContent from './objects/complianceCategoriesContent'
import insightPacksContent from './objects/insightPacksContent'
import velocityPromoContent from './objects/velocityPromoContent'
import howItWorksStep from './objects/howItWorksStep'
import howItWorksContent from './objects/howItWorksContent'

// Import document types
import homePage from './documents/homePage'
import clientLogo from './documents/clientLogo'
import complianceCategory from './documents/complianceCategory'
import insightPack from './documents/insightPack'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Object types
    callToAction,
    seoSettings,
    heroContent,
    productIntroContent,
    videoEmbed,
    complianceCategoriesContent,
    insightPacksContent,
    velocityPromoContent,
    howItWorksStep,
    howItWorksContent,

    // Document types
    homePage,
    clientLogo,
    complianceCategory,
    insightPack,
  ],
} 