"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Antonio",
        avatar: "A",
        title: "Software Engineer, Oracle",
        description: "Amazing Site !! and a great tool for developers."
    },
    {
        name: "Jack",
        avatar: "A",
        title: "Software Engineer, Google",
        description: "Eagerly waiting for Image & Video generation services to be added."
    },
    {
        name: "Mike",
        avatar: "A",
        title: "Software Engineer, Microsoft",
        description: "This is the best application I've used!"
    },
    {
        name: "Aditya",
        avatar: "A",
        title: "Software Engineer Intern, Samsung",
        description: "This is the best application I've used!"
    }
]

const Services = [
    {
        name: "Conversation Bot",
        avatar: "A",
        title: "Uses phi-3 model by Microsoft",
        description: "You chat with the bot after you have locally downloaded Ollama phi-3 model in your device."
    },
    {
        name: "Code Generator",
        avatar: "A",
        title: "Uses phi-3 model by Microsoft",
        description: "It generates the well-formated and explained code for any programming language you want."
    }
]

const credit = [
    {
        name: "Aditya Kulkarni",
        avatar: "A",
        title: "Student at IIT Kharagpur",
        description: "My AIM is to make Nexus.AI to be one of the most advanced one stop AI solution platform."
    }
]


export const LandingContent = () => {
    const { isSignedIn } = useAuth();
    return (
        <div className="px-10 pb-20">
            <div className="flex flex-col items-center mb-10">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
            Currently Available Services
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Services.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                            <div>
                                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                                    <Button variant="default" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                                        Get Started !
                                    </Button>
                                </Link>
                            </div>
                        </CardHeader>
                    </Card>
                )
            )}
                </div>
          </div>


           <h2 className="text-center text-4xl text-white font-extrabold mb-10">
            Testimonials
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                )
            )}
           </div>
            

           <div className="flex flex-col items-center mb-10">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
            Credits...
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {credit.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                            <div>
                                <Link href="https://www.linkedin.com/in/aditya-kulkarni-0a028922a/">
                                    <Button variant="default" className="md:text-lg p-4 md:p-6 rounded-full">
                                        My LinkedIn
                                    </Button>
                                </Link>
                            </div>
                        </CardHeader>
                    </Card>
                )
            )}
                </div>
          </div>
        


        </div>
    )
}