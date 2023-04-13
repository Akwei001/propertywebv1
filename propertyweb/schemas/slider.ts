export default {
  name: 'slider',
  title: 'Slider',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    },
    {
      name: 'largeText1',
      title: 'LargeText1',
      type: 'string',
    },
    {
      name: 'midText',
      title: 'MidText',
      type: 'string',
    },
    {
      name: 'smallText',
      title: 'SmallText',
      type: 'string',
    },
  ],
}
