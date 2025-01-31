 const productSchema = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'id',
        type: 'string',
        title: 'ID'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'quantity',
        type: 'number',
        title: 'quantity',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'discountPercentage',
        type: 'number',
        title: 'Discount Percentage',
      },
      {
        name: 'isFeaturedProduct',
        type: 'boolean',
        title: 'Featured Product',
      },
      {
        name: 'stockLevel',
        type: 'number',
        title: 'Stock Level',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
      },

    ],
  };
  
  export default productSchema;