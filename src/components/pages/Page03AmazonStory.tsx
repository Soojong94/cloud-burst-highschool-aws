import { motion } from "framer-motion";
import { Building, TrendingUp, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page03AmazonStory = () => {
  const timeline = [
    {
      icon: Building,
      title: "1994-2000: 시작",
      description: "온라인 서점으로 시작한 Amazon",
      detail: "Jeff Bezos가 차고에서 시작한 혁신",
      color: "text-orange-400",
      cardStyle: "card-tech"
    },
    {
      icon: TrendingUp,
      title: "2000-2010: 확장",
      description: "전자상거래 플랫폼으로 성장",
      detail: "AWS 기반 기술 개발 시작",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Users,
      title: "2010-현재: 혁신",
      description: "세계 1위 클라우드 서비스",
      detail: "AI, ML, IoT 기술 선도",
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
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-orange-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5" />
      <div className="absolute top-24 left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-24 right-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />

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
              Amazon의 성장 스토리
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-red-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20">
            1994년 온라인 서점으로 시작하여 세계 최대 클라우드 서비스로 성장한 Amazon의 여정
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {timeline.map((period, index) => (
            <motion.div
              key={period.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${period.cardStyle} hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <period.icon className={`w-16 h-16 mx-auto ${period.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{period.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="font-semibold text-white mb-3">{period.description}</h3>
                  <p className="text-muted-foreground">{period.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page03AmazonStory;