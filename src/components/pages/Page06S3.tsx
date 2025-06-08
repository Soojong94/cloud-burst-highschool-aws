import { motion } from "framer-motion";
import { Database, Shield, Zap, Cloud, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page06S3 = () => {
  const features = [
    {
      icon: Database,
      title: "무제한 저장",
      description: "99.999999999%의 내구성으로 안전한 데이터 보관",
      color: "text-orange-400",
      cardStyle: "card-data"
    },
    {
      icon: Shield,
      title: "보안",
      description: "암호화, 액세스 제어, 감사 기능 제공",
      color: "text-red-400",
      cardStyle: "card-security"
    },
    {
      icon: Zap,
      title: "성능",
      description: "전 세계 어디서나 빠른 액세스 가능",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Cloud,
      title: "다양한 스토리지 클래스",
      description: "용도에 맞는 최적화된 스토리지 옵션",
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
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-orange-900/30 bg-tech-pattern relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-orange title-main title-section">
              S3 (Simple Storage Service)
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/3 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/3 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20">
            업계 최고의 확장성, 데이터 가용성, 보안 및 성능을 제공하는 객체 스토리지 서비스
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
              <Card className={`h-full ${feature.cardStyle} hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105`}>
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

export default Page06S3;