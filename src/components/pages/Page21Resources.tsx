// src/components/pages/Page21Resources.tsx
import { motion } from "framer-motion";
import { ExternalLink, Globe, GraduationCap, Users, BookOpen, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Page21Resources = () => {
  const resources = [
    {
      icon: Globe,
      title: "AWS 홈페이지",
      description: "AWS의 모든 서비스와 정보의 시작점",
      url: "https://aws.amazon.com/ko/",
      color: "text-orange-400",
      bgColor: "from-orange-900/20 to-orange-800/20",
      borderColor: "border-orange-500/30",
      features: ["200+ 서비스 소개", "가격 정보", "고객 사례", "무료 계정 생성"],
      highlight: "가장 기본이 되는 사이트"
    },
    {
      icon: BookOpen,
      title: "AWS Skill Builder",
      description: "600개 이상의 무료 온라인 강의",
      url: "https://skillbuilder.aws/",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      borderColor: "border-blue-500/30",
      features: ["무료 디지털 강의", "실습 환경", "자격증 준비", "한국어 지원"],
      highlight: "체계적인 학습의 시작"
    },
    {
      icon: Users,
      title: "AWS Tech Camp",
      description: "특별 프로그램",
      url: "https://aws.amazon.com/ko/events/seminars/aws-techcamp/",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      borderColor: "border-green-500/30",
      features: ["온오프라인", "무료 참가", "실습 중심", "진로 멘토링"],
      highlight: "맞춤 프로그램"
    },
    {
      icon: GraduationCap,
      title: "AWS Educate",
      description: "학생 전용 무료 클라우드 크레딧",
      url: "https://aws.amazon.com/ko/education/awseducate/",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      borderColor: "border-purple-500/30",
      features: ["100달러 크레딧", "신용카드 불필요", "학생 인증", "실습 환경"],
      highlight: "실제 AWS 서비스 체험"
    }
  ];

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main">
              바로 시작하기
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
            오늘 밤부터 AWS 여정을 시작할 수 있는 4가지 필수 사이트
          </p>
        </motion.div>

        {/* 리소스 카드들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${resource.bgColor} p-6 rounded-2xl border ${resource.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer group`}
              onClick={() => handleCardClick(resource.url)}
            >
              {/* 아이콘과 제목 */}
              <div className="text-center mb-4">
                <div className="relative mb-3">
                  <resource.icon className={`w-16 h-16 ${resource.color} mx-auto group-hover:scale-110 transition-transform duration-300`} />
                  <ExternalLink className="w-4 h-4 text-white absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className={`text-xl font-bold ${resource.color} mb-2`}>
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {resource.description}
                </p>
              </div>

              {/* 하이라이트 */}
              <div className="mb-4">
                <div className={`bg-gradient-to-r ${resource.bgColor} p-3 rounded-lg border ${resource.borderColor}`}>
                  <p className={`${resource.color} font-semibold text-sm text-center`}>
                    {resource.highlight}
                  </p>
                </div>
              </div>

              {/* 주요 기능들 */}
              <div className="space-y-2">
                {resource.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full ${resource.color.replace('text-', 'bg-')} mr-2 flex-shrink-0`} />
                    <span className="text-muted-foreground text-xs">{feature}</span>
                  </div>
                ))}
              </div>

              {/* 버튼 */}
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full ${resource.color} border-current hover:bg-current hover:text-black transition-all duration-300`}
                >
                  바로 가기
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </motion.section>
  );
};

export default Page21Resources;