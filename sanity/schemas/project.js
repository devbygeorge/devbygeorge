export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "demo",
      title: "Demo Url",
      type: "string",
    },
    {
      name: "github",
      title: "Github Url",
      type: "string",
    },
    {
      title: "Tech",
      name: "tech",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Name",
              name: "name",
              type: "string",
            },
            {
              title: "Slug",
              name: "slug",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
