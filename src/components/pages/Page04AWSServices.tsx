import { motion } from "framer-motion";
import { Cloud, Database, Cpu, Shield, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page04AWSServices = () => {
  const services = [
    {
      icon: Cpu,
      title: "EC2",
      description: "확장 가능한 가상 서버",
      category: "컴퓨팅",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Database,
      title: "S3",
      description: "무제한 객체 스토리지",
      category: "스토리지",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Database,
      title: "RDS",
      description: "관리형 관계형 데이터베이스",
      category: "데이터베이스",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Shield,
      title: "IAM",
      description: "보안 및 액세스 관리",
      category: "보안",
      color: "text-red-400",
      cardStyle: "card-security"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-purple-900/30 bg-tech-pattern relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-32 left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />

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
              AWS 핵심 서비스
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/3 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/3 text-blue-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
            200개 이상의 서비스 중 가장 핵심적이고 많이 사용되는 서비스들
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
              <Card className={`h-full ${service.cardStyle} hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <service.icon className={`w-12 h-12 mx-auto ${service.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{service.category}</span>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page04AWSServices;