import { motion } from "framer-motion";
import { Cloud, Shield, Zap, Building, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page08Network = () => {
  const services = [
    {
      icon: Building,
      title: "VPC",
      description: "가상 프라이빗 클라우드",
      detail: "격리된 네트워크 환경 구성",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Zap,
      title: "CloudFront",
      description: "콘텐츠 전송 네트워크",
      detail: "전 세계 빠른 콘텐츠 배포",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Cloud,
      title: "Route 53",
      description: "DNS 웹 서비스",
      detail: "확장 가능한 도메인 네임 시스템",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Shield,
      title: "API Gateway",
      description: "API 관리 서비스",
      detail: "REST 및 WebSocket API 생성",
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
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-cyan-900/30 bg-elegant-lines relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-16 right-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-16 left-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />

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
              AWS 네트워킹 서비스
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/3 text-cyan-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/3 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
            안전하고 확장 가능한 네트워크 인프라를 구축할 수 있는 서비스들
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
              <Card className={`h-full ${service.cardStyle} hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105`}>
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

export default Page08Network;