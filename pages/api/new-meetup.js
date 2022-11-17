import { MongoClient } from 'mongodb';
import { mongoPassword } from '../../private/keys';

const mongoUrl =  `mongodb+srv://pius_gori:${mongoPassword}@piuscluster.wvoqx.mongodb.net/spare-me?retryWrites=true&w=majority`

const handler = async (req, res) => {
    if (req.method === 'POST' ) {
        const data = req.body;
        const client = await MongoClient.connect(mongoUrl);
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({ message: "Meetup inserted" });
    }
};

export default handler;