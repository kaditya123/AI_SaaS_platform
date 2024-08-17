import axios from 'axios';
import { NextResponse } from 'next/server';
import { auth } from "@clerk/nextjs/server";
import { CreateChatCompletionRequestMessage } from 'openai/resources/index.mjs'; // Replace with actual type

const instructionMessage: CreateChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code. Use code comments for explanations"
};

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const newMessages = [instructionMessage, ...messages];

        const response = await axios.post("http://localhost:11434/api/chat", {
            model: "phi3",
            stream: false,
            messages: newMessages,
        });

        const generatedMessage = response.data.message;

        // Assuming you have a function to update messages
        messages((current: any) => [...current, ...newMessages, generatedMessage]);

        return new NextResponse(JSON.stringify(generatedMessage), { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

// import { auth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// import { OpenAI } from 'openai';
// import { CreateChatCompletionRequestMessage } from "openai/resources/index.mjs";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
// });
// // import { Configuration, OpenAIApi } from "openai";

// // const configuration = new Configuration({
// //     apiKey: process.env.OPENAI_API_KEY,
// // });

// // const openai = new OpenAIApi(configuration);

// const instructionMessage: CreateChatCompletionRequestMessage = {
//     role: "system",
//     content: "You are a code generator. You must answer only in markdown code. Use code comments for explanations"
// };

// export async function POST(
//     req: Request
// ) {
//     try{
//         const { userId } = auth();
//         const body = await req.json();
//         const { messages } = body;

//         if(!userId){
//             return new NextResponse("Unauthorized", { status: 401 });
//         }

//         if(!openai.apiKey){
//             return new NextResponse("OpenAI API Key not configured", { status: 500 });
//         }        

//         if(! messages){
//             return new NextResponse("Messages are required", { status: 400 });
//         }

//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: [instructionMessage, ...messages]
//         });

//         return NextResponse.json(response.choices[0].message);

//     } catch (error){

//         console.log("[CODE_ERROR]", error);
//         return new NextResponse("Internal error", { status: 500 });
//     }
// }