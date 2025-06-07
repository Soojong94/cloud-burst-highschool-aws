import { motion } from "framer-motion";
import { Cloud, Zap, Building, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page02CloudIntro = () => {
  const benefits = [
    {
      icon: Cloud,
      title: "확장성",
      description: "필요에 따라 리소스를 즉시 확장하거나 축소할 수 있습니다.",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Zap,
      title: "성능",
      description: "전 세계에 분산된 데이터 센터로 빠른 응답 속도를 제공합니다.",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Building,
      title: "비용 효율성",
      description: "사용한 만큼만 지불하는 종량제 요금으로 비용을 절약합니다.",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Users,
      title: "안정성",
      description: "99.9% 이상의 가용성을 보장하는 안정적인 인프라를 제공합니다.",
      color: "text-purple-400",
      cardStyle: "card-ai"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-green title-main title-section">
              클라우드 컴퓨팅이란?
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
            클라우드 컴퓨팅은 인터넷을 통해 서버, 스토리지, 데이터베이스, 네트워킹, 소프트웨어,
            분석, 인텔리전스 등의 컴퓨팅 서비스를 제공하는 것입니다. 이를 통해 더 빠른 혁신,
            유연한 리소스, 규모의 경제를 실현할 수 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${benefit.cardStyle} hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <benefit.icon className={`w-12 h-12 mx-auto ${benefit.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gradient-orange title-section">
            클라우드의 3가지 서비스 모델
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-900/20 rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-lg mb-2 text-blue-400">IaaS (Infrastructure as a Service)</h4>
              <p className="text-muted-foreground">가상 머신, 스토리지, 네트워크 등 인프라 제공</p>
            </div>
            <div className="text-center p-4 bg-green-900/20 rounded-xl border border-green-500/30">
              <h4 className="font-semibold text-lg mb-2 text-green-400">PaaS (Platform as a Service)</h4>
              <p className="text-muted-foreground">애플리케이션 개발 및 배포 플랫폼 제공</p>
            </div>
            <div className="text-center p-4 bg-purple-900/20 rounded-xl border border-purple-500/30">
              <h4 className="font-semibold text-lg mb-2 text-purple-400">SaaS (Software as a Service)</h4>
              <p className="text-muted-foreground">완전한 소프트웨어 솔루션을 서비스로 제공</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page02CloudIntro;