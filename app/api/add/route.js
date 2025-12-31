import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise;
    const db = client.db('linktree')
    const collection = db.collection('links')

    const doc = await collection.findOne({handle: body.handle})

    if(doc) {
        return Response.json({ success: false, message: 'This LinkTree already exist', result: result, error: true })
    }

    const result = await collection.insertOne(body)

    return Response.json({ success: true, message: 'Your LinkTree has been generated. Enjoy!', result: result, error: false })
}
// 52:29