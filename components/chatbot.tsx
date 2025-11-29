"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hi! I'm Rahul's AI assistant. Ask me anything about Rahul Arora, his skills, projects, or experience!",
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getResponse = (question: string): string => {
        const lowerQuestion = question.toLowerCase();

        // Personal Info
        if (lowerQuestion.includes("who") || lowerQuestion.includes("about") || lowerQuestion.includes("introduce")) {
            return "Rahul is a BTech AI/ML student from Chandigarh, India. He&apos;s a full-stack developer passionate about building innovative web applications using modern technologies like Next.js, TypeScript, React, and Node.js. He&apos;s actively learning GenAI and DevOps while participating in tech events and hackathons.";
        }

        // Education
        if (lowerQuestion.includes("education") || lowerQuestion.includes("study") || lowerQuestion.includes("college") || lowerQuestion.includes("btech")) {
            return "Rahul is currently pursuing BTech in AI/ML (Artificial Intelligence and Machine Learning) from Chandigarh, India. He's passionate about combining his AI/ML knowledge with full-stack development skills.";
        }

        // Skills
        if (lowerQuestion.includes("skill") || lowerQuestion.includes("technology") || lowerQuestion.includes("tech stack")) {
            return "Rahul specializes in:\n• Frontend: React, Next.js, TypeScript, Tailwind CSS\n• Backend: Node.js, MongoDB, NextAuth.js\n• Real-time: Socket.io, Server-Sent Events (SSE)\n• AI/ML: Python, AI Vision, OpenAI API\n• Others: GenAI, DevOps, Git\nHe's constantly learning and expanding his expertise in modern web technologies and AI/ML.";
        }

        // Projects
        if (lowerQuestion.includes("project")) {
            if (lowerQuestion.includes("attendance") || lowerQuestion.includes("ikgptu") || lowerQuestion.includes("ptu")) {
                return "IK Gujral PTU Attendance Management System is one of Rahul's flagship projects. It's built with Next.js, TypeScript, MongoDB, and NextAuth.js. Features include real-time attendance tracking using SSE, leave management, marks upload, and advanced analytics for students, teachers, and admins. Check it out at: https://ikgptu-seven.vercel.app/";
            }
            if (lowerQuestion.includes("vision") || lowerQuestion.includes("ai") || lowerQuestion.includes("image")) {
                return "Vision AI is an image analysis platform that transforms images into actionable insights using cutting-edge AI technology. Built with Next.js, TypeScript, and OpenAI's vision models. Visit: https://vision-ai-theta.vercel.app/";
            }
            if (lowerQuestion.includes("chat") || lowerQuestion.includes("baatein")) {
                return "Baatein is a real-time chat room application built with Next.js, Socket.io, and MongoDB. It's fully serverless with features like multiple chat rooms, Google authentication, message reactions, and typing indicators. Check it out: https://baatchit-seven.vercel.app/";
            }
            return "Rahul has built 8 impressive projects including:\n1. IK Gujral PTU - Attendance Management System\n2. Vision AI - Image Analysis Platform\n3. Baatein - Real-Time Chat Application\n4. Nike Webpage Redesign\n5. Mocha Muse - Coffee Website\n6. AI Serv - AI Services Platform\n7. Rekha Sutra - Web Application\n8. SkyGuard - Dynamic Web Platform\n\nAll projects showcase his expertise in Next.js, React, TypeScript, and modern web technologies!";
        }

        // Experience
        if (lowerQuestion.includes("experience") || lowerQuestion.includes("intern") || lowerQuestion.includes("work")) {
            return "Rahul has completed two internships:\n\n1. Infosys Springboard (Dec 2024 - Feb 2025)\n   • Project Intern in Artificial Intelligence\n   • Working on real-world AI projects\n\n2. FullScore (Apr 2024 - Sep 2024)\n   • Project Intern\n   • Provided in-depth analysis and insights\n   • Worked on research, documentation, and problem-solving\n\nHe's seeking more internship opportunities to gain real-world experience!";
        }

        // Contact
        if (lowerQuestion.includes("contact") || lowerQuestion.includes("email") || lowerQuestion.includes("reach")) {
            return "You can reach Rahul at:\n📧 Email: createsrahul@gmail.com\n🐦 X: @CreatesRahul\n💼 LinkedIn: linkedin.com/in/rahul-26b19a320/\n🐙 GitHub: github.com/CreatesRahul-Lab\n\nHe typically responds within 1 hour!";
        }

        // Social Media
        if (lowerQuestion.includes("social") || lowerQuestion.includes("linkedin") || lowerQuestion.includes("github") || lowerQuestion.includes("twitter")) {
            return "Follow Rahul on:\n• GitHub: github.com/CreatesRahul-Lab\n• LinkedIn: linkedin.com/in/rahul-26b19a320/\n• X: @CreatesRahul\n\nConnect with him to see his latest projects and updates!";
        }

        // Interests
        if (lowerQuestion.includes("interest") || lowerQuestion.includes("hobby") || lowerQuestion.includes("free time")) {
            return "Outside of coding, Rahul enjoys watching movies, following tech trends, and reading. These activities help him relax while keeping him inspired with fresh ideas. He believes in continuous learning, community, and collaboration!";
        }

        // Default response
        return "I can tell you about Rahul's projects, skills, experience, education, or how to contact him. What would you like to know?";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const response = getResponse(input);
            const assistantMessage: Message = { role: "assistant", content: response };
            setMessages((prev) => [...prev, assistantMessage]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <>
            {/* Chatbot Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 z-50 p-3 sm:p-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Toggle chatbot"
            >
                {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

            {/* Chatbot Window */}
            {isOpen && (
                <div className="fixed bottom-20 sm:bottom-24 right-2 sm:right-5 z-50 w-[calc(100vw-16px)] sm:w-[380px] h-[calc(100vh-100px)] sm:h-[500px] max-h-[600px] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-lg shadow-2xl flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-purple-600 to-blue-600 rounded-t-lg">
                        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                            <Bot className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white font-semibold">Rahul&apos;s AI Assistant</h3>
                            <p className="text-xs text-white/80">Ask me anything about Rahul!</p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-lg p-3 ${message.role === "user"
                                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                                        : "bg-gray-100 dark:bg-[#141414] text-[#08090a] dark:text-slate-200"
                                        }`}
                                >
                                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 dark:bg-[#141414] rounded-lg p-3">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about Rahul..."
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-[#141414] text-[#08090a] dark:text-slate-200 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
