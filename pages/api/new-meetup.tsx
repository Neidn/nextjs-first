import {MongoClient} from 'mongodb';

import {NextApiRequest, NextApiResponse} from 'next';

const MONGODB_URI: string = `${process.env.DB_HOST}meetups?retryWrites=true&w=majority`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {title, image, address, description} = req.body;

    const client: MongoClient = await MongoClient.connect(MONGODB_URI);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    await meetupsCollection.insertOne(
        {
          title: title,
          image: image,
          address: address,
          description: description,
        }
    );

    await client.close();

    res.status(201).json({message: 'Meetup inserted!'});
  }
}

export default handler;
