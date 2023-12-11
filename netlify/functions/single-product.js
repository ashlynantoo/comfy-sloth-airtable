const dotenv = require("dotenv");
dotenv.config();

const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.VITE_AIRTABLE_TOKEN })
  .base(process.env.VITE_AIRTABLE_BASE_ID)
  .table(process.env.VITE_AIRTABLE_TABLE_ID);

export const handler = async (event, context, callback) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const response = await airtable.retrieve(id);
      if (response.error) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: `No product with ID ${id}` }),
        };
      }
      const product = { id, ...response.fields };

      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server Error" }),
      };
    }
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Please provide a valid product ID" }),
    };
  }
};
