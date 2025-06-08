import { motion } from "framer-motion";
import { Zap, Database, Cloud, Code, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page13Serverless = () => {
  const services = [
    {
      icon: Zap,
      title: "Lambda",
      description: "함수 실행 서비스",
      detail: "이벤트 기반 코드 실행",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Database,
      title: "DynamoDB",
      description: "NoSQL 데이터베이스",
      detail: "완전 관리형 서버리스 DB",
      color: "text-orange-400",
      cardStyle: "card-data"
    },
    {
      icon: Cloud,
      title: "API Gateway",
      description: "API 관리 서비스",
      detail: "RESTful API 생성 및 관리",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Code,
      title: "Step Functions",
      description: "워크플로우 오케스트레이션",
      detail: "서버리스 함수 조정",
      color: "text-green-400",
      cardStyle: "card-neon"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-purple-900/30 bg-mesh-gradient relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-16 left-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-16 right-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-purple title-main title-section">
              서버리스 아키텍처
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/3 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/3 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
            서버 관리 없이 애플리케이션을 구축하고 실행할 수 있는 완전 관리형 서비스들
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
              <Card className={`h-full ${service.cardStyle} hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105`}>
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

export default Page13Serverless;