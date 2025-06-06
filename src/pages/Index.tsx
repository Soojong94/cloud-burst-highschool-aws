
import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Globe, 
  Shield, 
  Code, 
  Database, 
  Cpu, 
  HardDrive,
  Brain,
  Users,
  Trophy,
  ChevronRight,
  Target,
  Smartphone,
  Camera,
  Zap,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Building,
  Gamepad2
} from 'lucide-react';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    {
      id: 'intro',
      title: '일상 속 클라우드',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'generation-comparison',
      title: '세대별 기술 변화',
      icon: Camera,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'cloud-definition',
      title: '클라우드란 무엇인가',
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'cloud-benefits',
      title: '클라우드의 장점',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'amazon-story',
      title: '아마존의 변신',
      icon: Building,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'aws-birth',
      title: 'AWS의 탄생',
      icon: Lightbulb,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'aws-numbers',
      title: 'AWS의 위상',
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'daily-aws',
      title: '일상 속 AWS',
      icon: Gamepad2,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'ec2-intro',
      title: 'EC2 - 클라우드 컴퓨터',
      icon: Cpu,
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'ec2-demo',
      title: 'EC2 실제 사례',
      icon: Code,
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 's3-intro',
      title: 'S3 - 무제한 저장소',
      icon: HardDrive,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 's3-cases',
      title: 'S3 활용 사례',
      icon: HardDrive,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'rds-intro',
      title: 'RDS - 관리형 데이터베이스',
      icon: Database,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'ai-services',
      title: 'AWS AI 서비스',
      icon: Brain,
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'new-careers',
      title: '새로운 직업들',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      id: 'career-paths',
      title: '구체적인 진로',
      icon: Target,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'student-action',
      title: '고등학생 실천 방안',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'security-basics',
      title: '보안 기본 원칙',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'learning-roadmap',
      title: '학습 로드맵',
      icon: Users,
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const scrollToSection = (sectionIndex: number) => {
    setTimeout(() => {
      const element = sectionRefs.current[sectionIndex];
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const goToNextSection = () => {
    const nextSection = currentSection + 1;
    if (nextSection < sections.length) {
      setCurrentSection(nextSection);
      scrollToSection(nextSection);
    }
  };

  const goToPreviousSection = () => {
    const prevSection = currentSection - 1;
    if (prevSection >= 0) {
      setCurrentSection(prevSection);
      scrollToSection(prevSection);
    }
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
    scrollToSection(index);
  };

  const renderSection = () => {
    const section = sections[currentSection];
    const IconComponent = section.icon;

    return (
      <div className="space-y-8">
        {/* Section Header */}
        <div 
          ref={(el) => sectionRefs.current[currentSection] = el}
          className={`bg-gradient-to-r ${section.color} p-12 rounded-2xl text-white text-center`}
        >
          <div className="flex flex-col items-center gap-6">
            <IconComponent className="w-20 h-20" />
            <h2 className="text-4xl font-bold">{section.title}</h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              고등학생을 위한 특강
            </h1>
            <p className="text-2xl text-gray-600 font-semibold">
              AWS 입문
            </p>
          </div>

          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">진행도</span>
              <span className="text-sm text-gray-600">
                {currentSection + 1} / {sections.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <Button 
              onClick={goToPreviousSection}
              disabled={currentSection === 0}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              이전
            </Button>
            
            <div className="text-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {sections[currentSection].title}
              </Badge>
            </div>
            
            <Button 
              onClick={goToNextSection}
              disabled={currentSection === sections.length - 1}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              다음
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {renderSection()}
          </div>

          {/* Section Navigation Dots */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2 flex-wrap">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSection(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSection 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
