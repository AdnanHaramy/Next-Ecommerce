export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    // the fields of our schema 
    fields: [
        {
            name: 'image',
            title: 'Image',
            // an array of images
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                // enables cropping the image (making the optimazation of the image easier)
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            // a type that is built in 
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        }

    ]
}