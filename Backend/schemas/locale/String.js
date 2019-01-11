import langs from './langs'

export default {
  title: 'Locale String',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      type: 'object',
      options: { collapsible: false },
    },
  ],
  fields: langs.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
   })),
}
