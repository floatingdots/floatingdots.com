import { MdPermMedia } from 'react-icons/md'

export default {
  title: 'Media',
  name: 'media',
  type: 'document',
  icon: MdPermMedia,
  fields: [
    {
      name: 'page',
      Title: 'Page',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      title: 'Image',
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
  ],
  preview: {
    select: {
      title: 'image.alt',
      media: 'image',
    },
  },
}
