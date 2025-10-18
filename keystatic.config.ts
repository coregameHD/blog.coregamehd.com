import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'coregameHD/blog.coregamehd.com',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'slug',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { isRequired: true },
          },
        }),
        slug: fields.text({
          label: 'Slug',
          validation: { isRequired: true },
        }),
        featuredImage: fields.url({
          label: 'Featured Image URL',
          validation: { isRequired: false },
        }),
        publishDate: fields.date({
          label: 'Publish Date',
          validation: { isRequired: true },
        }),
        publish: fields.checkbox({
          label: 'Publish',
          defaultValue: true,
        }),
        categories: fields.array(
          fields.select({
            label: 'Category',
            options: [
              { label: 'General', value: 'General' },
              { label: 'Technology', value: 'Technology' },
              { label: 'Programming', value: 'Programming' },
              { label: 'Tutorial', value: 'Tutorial' },
              { label: 'Review', value: 'Review' },
              { label: 'Personal', value: 'Personal' },
            ],
            defaultValue: 'General',
          }),
          {
            label: 'Categories',
            itemLabel: (props) => props.value,
          }
        ),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/blog',
              publicPath: '/images/blog/',
            },
          },
        }),
      },
    }),
    legal: collection({
      label: 'Legal Pages',
      slugField: 'slug',
      path: 'src/content/legal/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { isRequired: true },
          },
        }),
        slug: fields.text({
          label: 'Slug',
          validation: { isRequired: true },
        }),
        content: fields.mdx({
          label: 'Content',
        }),
      },
    }),
  },
});
