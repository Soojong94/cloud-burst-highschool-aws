import { motion } from "framer-motion";
import { Cpu, Zap, Shield, DollarSign, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page05EC2 = () => {
  const features = [
    {
      icon: Cpu,
      title: "확장성",
      description: "몇 분 만에 수천 개의 인스턴스 시작 가능",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Zap,
      title: "성능",
      description: "다양한 인스턴스 유형으로 최적화된 성능",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Shield,
      title: "보안",
      description: "VPC와 보안 그룹으로 네트워크 보안 제어",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: DollarSign,
      title: "비용 효율성",
      description: "사용한 만큼만 지불하는 유연한 요금제",
      color: "text-emerald-400",
      cardStyle: "card-ai"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

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
              EC2 (Elastic Compute Cloud)
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-green-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
            클라우드에서 안전하고 크기 조정이 가능한 컴퓨팅 용량을 제공하는 가상 서버 서비스
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${feature.cardStyle} hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <feature.icon className={`w-12 h-12 mx-auto ${feature.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page05EC2;