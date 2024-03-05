import prisma from "@/prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res){
    try {
        // Retrieve data from the Prisma database
        const data = await prisma.psychologist.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                experience: true,
                avatar:true,
                university: true,
                category: true,
                createdAt:true,
                updatedAt: true
            }
        }); // Replace 'yourModelName' with the actual name of your model
        
        // Respond with the retrieved data
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({error})
    }
}
