const sanityClient = require('@sanity/client')

if (process.env.NODE_ENV !== 'production' && !process.env.DATASET) {
  process.env.DATASET = 'dev'
}

export const sanity = sanityClient({
  projectId: '5ckaios9',
  dataset: process.env.DATASET || 'production',
  useCdn: true,
})

export const sanityPreview = sanityClient({
  projectId: '5ckaios9',
  dataset: process.env.DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_TOKEN_PREVIEW,
})
