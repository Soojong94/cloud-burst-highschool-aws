import { motion } from "framer-motion";
import { Search, Star, DollarSign, Terminal, MapPin, Bell, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageAWSConsole = () => {
  const features = [
    {
      icon: Search,
      title: "서비스 검색",
      description: "상단 검색창에 서비스명 입력 — EC2, S3, Lambda 등 200+ 서비스를 즉시 찾고 이동",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Star,
      title: "즐겨찾기 설정",
      description: "자주 사용하는 서비스를 북마크. 네비게이션 바에 고정해 원클릭 접근",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: DollarSign,
      title: "비용 대시보드",
      description: "이번 달 청구 예정 금액 실시간 확인. 서비스별 비용 내역 및 사용량 그래프 제공",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Terminal,
      title: "CloudShell",
      description: "브라우저 안에 내장된 터미널. AWS CLI 설치 없이 바로 명령어 실행 가능",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: MapPin,
      title: "리전 전환",
      description: "우측 상단에서 클릭 한 번으로 글로벌 리전 전환. 서울, 도쿄, 버지니아 등 즉시 이동",
      color: "text-orange-400",
      cardStyle: "card-tech"
    },
    {
      icon: Bell,
      title: "알림 & 이벤트",
      description: "서비스 이슈, 비용 초과 경보, 보안 권장 사항을 콘솔에서 실시간 확인",
      color: "text-cyan-400",
      cardStyle: "card-data"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-orange-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl float-animation" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-orange title-main title-section">
              AWS Management Console
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20">
            모든 AWS 서비스를 관리하는 웹 기반 통합 관리 화면 — <span className="text-orange-400 font-bold">console.aws.amazon.com</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${feature.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center">
                  <feature.icon className={`w-12 h-12 mx-auto ${feature.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-orange-500/20"
        >
          <p className="text-center text-white">
            💡 콘솔 외에도 <span className="text-orange-400 font-bold">AWS CLI</span> (터미널 명령어),{" "}
            <span className="text-orange-400 font-bold">SDK</span> (Python·Java·Go 등),{" "}
            <span className="text-orange-400 font-bold">CloudFormation</span> (코드로 인프라 관리) 방식도 있습니다
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageAWSConsole;
