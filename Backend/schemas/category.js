import { MdClass } from 'react-icons/md'

export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  icon: MdClass,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 32,
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      media: '',
    },
  },
}
