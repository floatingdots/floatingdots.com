import { MdDesktopMac } from 'react-icons/md/'

export default {
  title: 'Projects',
  name: 'projects',
  type: 'document',
  icon: MdDesktopMac,
  fields: [
    {
      name: 'availability',
      title: 'Available',
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
      name: 'priority',
      title: 'Priority',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Sub Title',
      name: 'subtitle',
      type: 'localeString',
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
        {
          name: 'maxWidth',
          title: 'Max Width',
          type: 'number',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'mainImage',
      title: 'Maing Image',
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      title: 'Platforms',
      name: 'platforms',
      type: 'string',
    },
    {
      title: 'Deliverables',
      name: 'deliverables',
      type: 'string',
    },
    {
      title: 'Techs',
      name: 'techs',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
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
