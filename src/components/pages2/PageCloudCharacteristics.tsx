import { motion } from "framer-motion";
import { MousePointerClick, Wifi, Layers, Zap, BarChart3, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageCloudCharacteristics = () => {
  const characteristics = [
    {
      icon: MousePointerClick,
      title: "온디맨드 셀프서비스",
      subtitle: "On-demand Self-service",
      description: "사람의 개입 없이 필요할 때 즉시 컴퓨팅 자원을 프로비저닝. AWS 콘솔에서 클릭 한 번으로 서버 생성",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Wifi,
      title: "광대역 네트워크 접근",
      subtitle: "Broad Network Access",
      description: "인터넷이 되는 곳이라면 어디서든 스마트폰·PC·태블릿으로 접근 가능. 장소 제약 없는 업무 환경",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Layers,
      title: "리소스 풀링",
      subtitle: "Resource Pooling",
      description: "물리 자원을 여러 고객이 공유(멀티테넌시). 각 고객은 논리적으로 격리된 환경에서 독립적으로 사용",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Zap,
      title: "신속한 탄력성",
      subtitle: "Rapid Elasticity",
      description: "트래픽 급증 시 자동 확장, 감소 시 자동 축소. 배민 점심시간·쿠팡 세일 때도 장애 없이 대응",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: BarChart3,
      title: "측정 가능한 서비스",
      subtitle: "Measured Service",
      description: "CPU·스토리지·네트워크 사용량을 실시간 모니터링 및 정확하게 과금. 낭비 없이 쓴 만큼만 지불",
      color: "text-orange-400",
      cardStyle: "card-tech"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-pattern-grid relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main title-section">
              클라우드 5대 특성
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
            미국 국립표준기술연구소(NIST)가 정의한 클라우드 컴퓨팅의 필수 조건
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {characteristics.map((char, index) => (
            <motion.div
              key={char.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${char.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center pb-2">
                  <div className={`w-10 h-10 rounded-full bg-black/20 flex items-center justify-center mx-auto mb-3`}>
                    <span className={`text-lg font-bold ${char.color}`}>{index + 1}</span>
                  </div>
                  <char.icon className={`w-10 h-10 mx-auto ${char.color} mb-3 drop-shadow-lg`} />
                  <CardTitle className="text-sm">{char.title}</CardTitle>
                  <p className={`text-xs ${char.color} font-mono opacity-80`}>{char.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-xs text-center leading-relaxed">{char.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageCloudCharacteristics;
