import { MdCreate } from 'react-icons/md'

export default {
  title: 'Blog',
  name: 'blog',
  type: 'document',
  icon: MdCreate,
  fields: [
    {
      name: 'availability',
      title: 'Availability',
      type: 'boolean',
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Slug(URL)',
      name: 'slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title.en',
        maxLength: 96,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category',
          },
        },
      ],
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent',
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      category: 'catigories',
    },
  },
}
