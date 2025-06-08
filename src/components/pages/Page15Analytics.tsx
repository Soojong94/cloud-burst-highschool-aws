import { motion } from "framer-motion";
import { BarChart3, Database, Zap, Search, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page15Analytics = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Redshift",
      description: "데이터 웨어하우스",
      detail: "페타바이트 규모 분석",
      color: "text-red-400",
      cardStyle: "card-security"
    },
    {
      icon: Database,
      title: "Athena",
      description: "서버리스 쿼리",
      detail: "S3 데이터 직접 분석",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Zap,
      title: "Kinesis",
      description: "실시간 데이터 스트리밍",
      detail: "실시간 데이터 수집 및 처리",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Search,
      title: "Elasticsearch",
      description: "검색 및 분석",
      detail: "로그 분석 및 검색 엔진",
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
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-tech-pattern relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-yellow-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

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
              분석 및 빅데이터
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/3 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/3 text-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20">
            대용량 데이터를 수집, 저장, 처리, 분석할 수 있는 완전 관리형 서비스들
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
              <Card className={`h-full ${service.cardStyle} hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-105`}>
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

export default Page15Analytics;