import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Cloud, Server, Database, Shield, Zap, Globe, Users, TrendingUp, BookOpen, Award, Target, Bell, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const slides = [
    {
        title: 'Welcome to Our Platform',
        description: 'Discover the power of our services and solutions.',
        icon: Cloud,
        color: 'bg-blue-500',
    },
    {
        title: 'Data Storage Solutions',
        description: 'Securely store and manage your data with our robust database services.',
        icon: Database,
        color: 'bg-green-500',
    },
    {
        title: 'Server Infrastructure',
        description: 'Reliable and scalable server solutions for your business needs.',
        icon: Server,
        color: 'bg-yellow-500',
    },
    {
        title: 'Security & Protection',
        description: 'Protect your assets with our advanced security measures and protocols.',
        icon: Shield,
        color: 'bg-red-500',
    },
    {
        title: 'Global Reach',
        description: 'Connect with users worldwide through our global network infrastructure.',
        icon: Globe,
        color: 'bg-purple-500',
    },
    {
        title: 'User Management',
        description: 'Efficiently manage your user base with our comprehensive tools.',
        icon: Users,
        color: 'bg-orange-500',
    },
    {
        title: 'Performance Analytics',
        description: 'Track and analyze your performance metrics to optimize your strategies.',
        icon: TrendingUp,
        color: 'bg-teal-500',
    },
    {
        title: 'Knowledge Base',
        description: 'Access a wealth of information and resources to enhance your understanding.',
        icon: BookOpen,
        color: 'bg-indigo-500',
    },
    {
        title: 'Awards & Recognition',
        description: 'Recognized for excellence and innovation in our industry.',
        icon: Award,
        color: 'bg-pink-500',
    },
    {
        title: 'Targeted Solutions',
        description: 'Customized solutions designed to meet your specific business objectives.',
        icon: Target,
        color: 'bg-gray-500',
    },
    {
        title: 'Real-time Notifications',
        description: 'Stay informed with instant updates and alerts.',
        icon: Bell,
        color: 'bg-lime-500',
    },
    {
        title: 'Comprehensive Documentation',
        description: 'Detailed guides and documentation to help you get started.',
        icon: Book,
        color: 'bg-cyan-500',
    },
];

const Index = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-4">
                <Card className="shadow-xl rounded-lg overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-2xl font-semibold">
                            {slides[currentSlide].title}
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                            <Button variant="outline" size="icon" onClick={goToPreviousSlide}>
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={goToNextSlide}>
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-full ${slides[currentSlide].color} text-white`}>
                                <slides[currentSlide].icon className="h-8 w-8" />
                            </div>
                            <div>
                                <p className="text-gray-700">
                                    {slides[currentSlide].description}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Index;
