const {MongoClient} = require('mongodb');

async function main() {
    const uri = "mongodb+srv://jfmcrae:3nTD3WrTyzzQ8wdC@musiclisteningdb.1qmy9w8.mongodb.net/?retryWrites=true&w=majority&appName=MusicListeningDB";

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await waitForPing(client);
        await findOneAlbum(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function waitForPing(client) {
    await client.db("admin").command({ ping: 1 });
    try {
        console.log("Ping successful!");
    }
    catch (e) {
        console.log("Ping not successful");
        console.error(e)
    }
}

async function findOneAlbum(client) {
    try {
        const database = client.db(ListeningTracker);
        const myList = database.collection(JohnListening);

        const query = { release: "Vernal Equinox" };
        const album = await myList.findOne(query);
        
        console.log(`I found: ${album}`);
    }
    catch (e) {
        console.error(e);
    }
}