import { MdPeople } from 'react-icons/md'

export default {
  title: 'Careers',
  name: 'careers',
  type: 'document',
  icon: MdPeople,
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'localeText',
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
    },
  },
}
