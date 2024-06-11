import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req,res, {params}) => {
    try {
        await connectToDB();
        const posts = Prompt.find({
            creator: params.id
        }).populate('creator')
        return new Response(JSON.stringify(posts), {status:200})
    } catch (error) {
        return new Response("Faild to load my posts", {status:500})
    }
}