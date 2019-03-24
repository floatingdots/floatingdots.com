import { MdMail } from 'react-icons/md'

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: '_blank',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
          {
            title: 'Mail To',
            name: 'mailTo',
            type: 'object',
            blockEditor: {
              icon: MdMail
            },
            fields: [
              {
                title: 'Email',
                name: 'email',
                type: 'string',
              },
            ],
          },
        ],
      },
    },

    {
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
