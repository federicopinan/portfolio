import axios from 'axios'
import {XMLParser} from 'fast-xml-parser'

const parser = new XMLParser()

export interface SubstackPost {
    title: string
    link: string
    pubDate: string
    description: string
    creator: string
    thumbnail?: string
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
    try {
        const response = await axios.get(
            'https://federicopinan.substack.com/feed'
        ) // Ajusta la URL a tu Substack
        const xmlData = response.data
        const jsonData = parser.parse(xmlData)

        const items = jsonData.rss.channel.item
        return items.map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item['content:encoded'] || item.description,
            creator: item['dc:creator'],
            thumbnail: item['media:content']?.$.url,
        }))
    } catch (error) {
        console.error('Error fetching Substack posts:', error)
        return []
    }
}
