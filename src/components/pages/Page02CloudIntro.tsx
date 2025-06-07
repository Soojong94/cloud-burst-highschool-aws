
import { motion } from "framer-motion";
import { Cloud, Zap, Building, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page02CloudIntro = () => {
  const benefits = [
    {
      icon: Cloud,
      title: "확장성",
      description: "필요에 따라 리소스를 즉시 확장하거나 축소할 수 있습니다."
    },
    {
      icon: Zap,
      title: "성능",
      description: "전 세계에 분산된 데이터 센터로 빠른 응답 속도를 제공합니다."
    },
    {
      icon: Building,
      title: "비용 효율성",
      description: "사용한 만큼만 지불하는 종량제 요금으로 비용을 절약합니다."
    },
    {
      icon: Users,
      title: "안정성",
      description: "99.9% 이상의 가용성을 보장하는 안정적인 인프라를 제공합니다."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">클라우드 컴퓨팅이란?</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            클라우드 컴퓨팅은 인터넷을 통해 서버, 스토리지, 데이터베이스, 네트워킹, 소프트웨어, 
            분석, 인텔리전스 등의 컴퓨팅 서비스를 제공하는 것입니다. 이를 통해 더 빠른 혁신, 
            유연한 리소스, 규모의 경제를 실현할 수 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <benefit.icon className="w-12 h-12 mx-auto text-primary mb-4" />
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
          className="mt-16 bg-muted p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">클라우드의 3가지 서비스 모델</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-2">IaaS (Infrastructure as a Service)</h4>
              <p className="text-muted-foreground">가상 머신, 스토리지, 네트워크 등 인프라 제공</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-2">PaaS (Platform as a Service)</h4>
              <p className="text-muted-foreground">애플리케이션 개발 및 배포 플랫폼 제공</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-2">SaaS (Software as a Service)</h4>
              <p className="text-muted-foreground">완전한 소프트웨어 솔루션을 서비스로 제공</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page02CloudIntro;
