import { motion } from "framer-motion";
import { Shield, Users, FileText, Building, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page09Security = () => {
  const principles = [
    {
      icon: Shield,
      title: "심층 방어",
      description: "다중 보안 계층으로 포괄적 보호",
      color: "text-red-400",
      cardStyle: "card-security"
    },
    {
      icon: Users,
      title: "최소 권한 원칙",
      description: "필요한 최소한의 권한만 부여",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: FileText,
      title: "보안 모니터링",
      description: "지속적인 보안 상태 모니터링",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Building,
      title: "규정 준수",
      description: "국제 보안 표준 및 인증 준수",
      color: "text-green-400",
      cardStyle: "card-data"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-24 right-24 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-24 left-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-orange title-main title-section">
              AWS 보안 원칙
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-orange-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20">
            AWS는 보안을 최우선으로 고려하여 다양한 보안 서비스와 모범 사례를 제공합니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${principle.cardStyle} hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <principle.icon className={`w-12 h-12 mx-auto ${principle.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{principle.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page09Security;