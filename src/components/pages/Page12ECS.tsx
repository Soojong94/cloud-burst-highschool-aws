import { motion } from "framer-motion";
import { Container, Shield, Zap, Settings, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page12ECS = () => {
  const services = [
    {
      icon: Container,
      title: "ECS",
      description: "Elastic Container Service",
      detail: "완전 관리형 컨테이너 오케스트레이션",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Shield,
      title: "EKS",
      description: "Elastic Kubernetes Service",
      detail: "관리형 Kubernetes 서비스",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Zap,
      title: "Fargate",
      description: "서버리스 컨테이너",
      detail: "인프라 관리 없는 컨테이너 실행",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Settings,
      title: "ECR",
      description: "Elastic Container Registry",
      detail: "컨테이너 이미지 저장소",
      color: "text-orange-400",
      cardStyle: "card-neon"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5" />
      <div className="absolute top-32 right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-32 left-32 w-48 h-48 bg-green-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">
              ECS/EKS (컨테이너 서비스)
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-green-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
            컨테이너화된 애플리케이션을 쉽게 배포, 관리, 확장할 수 있는 서비스
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${service.cardStyle} hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <service.icon className={`w-12 h-12 mx-auto ${service.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-2">{service.description}</p>
                  <p className="text-sm text-muted-foreground text-center">{service.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page12ECS;