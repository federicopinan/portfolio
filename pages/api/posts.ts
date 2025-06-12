import type { NextApiRequest, NextApiResponse } from 'next'
import { getSubstackPosts } from '../../services/substackPosts'
import dbConnect from 'utils/mongoClient'
import Post from 'models/Post'
import { getToken } from 'next-auth/jwt'

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const substackPosts = await getSubstackPosts()
                const localPosts = await Post.find({}).sort({ date: -1 })

                const formattedSubstackPosts = substackPosts.map((post, index) => ({
                    id: `substack-${index}`,
                    title: post.title,
                    content: post.description,
                    date: post.pubDate,
                    imageURL: post.thumbnail || '/img/writing-placeholder.jpg',
                    url: post.link,
                    isExternal: true,
                }))

                // Combine local posts with Substack posts and sort by date
                const allPosts = [...formattedSubstackPosts, ...localPosts].sort(
                    (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                )

                return res.status(200).json(allPosts)
            } catch (error) {
                console.error('Error in posts API:', error)
                return res.status(500).json({ error: 'Error fetching posts' })
            }

        case 'POST':
            try {
                const token = await getToken({ req })
                if (!token) {
                    return res.status(401).json({ message: 'Unauthorized' })
                }

                const post = await Post.create(req.body)
                return res.status(201).json(post)
            } catch (error: any) {
                return res.status(400).json({ message: error.message })
            }

        default:
            res.setHeader('Allow', ['GET', 'POST'])
            return res.status(405).json({ message: `Method ${method} Not Allowed` })
    }
}

export default handler
