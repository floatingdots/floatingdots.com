// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import media from './media'
import blockContent from './blockContent'
import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/blockContent'

import category from './category'

import projects from './projects'
import blog from './blog'
import careers from './careers'
import pages from './pages'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    media,
    blockContent,
    localeString,
    localeText,
    localeBlockContent,
    projects,
    blog,
    careers,
    pages,
    category,
  ]),
})
