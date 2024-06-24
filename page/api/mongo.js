import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const db = client.db(process.env.MONGODB_DB);
      const collection = db.collection('formData');
      
      // Insert data into MongoDB
      const result = await collection.insertOne(data);
      console.log(`Inserted ${result.insertedCount} documents into the collection`);

      res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error saving form data' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default handler;
