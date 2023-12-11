const dotenv = require("dotenv");
dotenv.config();

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.VITE_AIRTABLE_TOKEN })
  .base(process.env.VITE_AIRTABLE_BASE_ID)
  .table(process.env.VITE_AIRTABLE_TABLE_ID);

export const handler = async (event, context, callback) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const products = response.records.map((product) => {
      const { id, fields } = product;
      const {
        name,
        price,
        featured,
        images,
        description,
        colors,
        company,
        category,
        shipping,
      } = fields;
      const image = images[0].url;

      return {
        id,
        name,
        price,
        image,
        colors,
        company,
        description,
        category,
        shipping,
        featured,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
