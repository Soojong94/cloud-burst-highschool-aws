import { motion } from "framer-motion";
import { Rocket, Brain, Zap, Globe, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Page20Future = () => {
  const trends = [
    {
      icon: Brain,
      title: "AI/ML 통합",
      description: "모든 서비스에 AI 기능 내장",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Zap,
      title: "서버리스 확산",
      description: "더 많은 완전 관리형 서비스",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Globe,
      title: "엣지 컴퓨팅",
      description: "지연 시간 최소화",
      color: "text-cyan-400",
      cardStyle: "card-tech"
    },
    {
      icon: Rocket,
      title: "양자 컴퓨팅",
      description: "Amazon Braket의 발전",
      color: "text-orange-400",
      cardStyle: "card-data"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-purple-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-32 left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-purple title-main title-section">
              AWS의 미래
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
            클라우드 컴퓨팅의 미래와 AWS가 나아가는 방향
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {trends.map((trend, index) => (
            <motion.div
              key={trend.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${trend.cardStyle} hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <trend.icon className={`w-12 h-12 mx-auto ${trend.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{trend.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{trend.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


      </div>
    </motion.section>
  );
};

export default Page20Future;