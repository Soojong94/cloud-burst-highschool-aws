import { motion } from "framer-motion";
import { Code, Server, Shield, BarChart3, Cpu, Cloud, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page19Careers = () => {
  const careers = [
    {
      icon: Cloud,
      title: "클라우드 아키텍트",
      description: "클라우드 인프라 설계 및 구축",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Code,
      title: "DevOps 엔지니어",
      description: "개발과 운영의 자동화 및 통합",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Server,
      title: "SRE",
      description: "시스템 안정성 및 확장성 관리",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Shield,
      title: "클라우드 보안 전문가",
      description: "클라우드 환경의 보안 설계 및 관리",
      color: "text-red-400",
      cardStyle: "card-security"
    },
    {
      icon: BarChart3,
      title: "데이터 엔지니어",
      description: "빅데이터 파이프라인 구축 및 관리",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Cpu,
      title: "ML 엔지니어",
      description: "머신러닝 모델 개발 및 운영",
      color: "text-cyan-400",
      cardStyle: "card-tech"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-tech-pattern relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main title-section">
              AWS 관련 직업
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/3 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/3 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
            클라우드 기술의 확산으로 새롭게 주목받는 직업들
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((career, index) => (
            <motion.div
              key={career.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${career.cardStyle} hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <career.icon className={`w-12 h-12 mx-auto ${career.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{career.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{career.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page19Careers;