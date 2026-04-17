import { motion } from "framer-motion";
import { BarChart3, Bell, FileText, Layout, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageCloudWatch = () => {
  const features = [
    {
      icon: BarChart3,
      title: "메트릭",
      description: "EC2 CPU 사용률, RDS 쿼리 응답시간, Lambda 오류율 등 200+ 서비스의 성능 지표를 1분 단위로 수집",
      example: "EC2 CPU > 80% 지속 시 알람",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: FileText,
      title: "로그",
      description: "애플리케이션·인프라의 모든 로그를 중앙 수집. Lambda·EC2·ECS 로그를 한 곳에서 검색·분석",
      example: "에러 로그 필터링 → SNS 알림",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Bell,
      title: "알람",
      description: "메트릭이 임계값 초과 시 이메일·SMS·Slack 알림. Auto Scaling 트리거로도 활용",
      example: "비용 $50 초과 → 담당자 메일",
      color: "text-orange-400",
      cardStyle: "card-neon"
    },
    {
      icon: Layout,
      title: "대시보드",
      description: "커스텀 대시보드로 서비스 전체 현황을 한눈에 파악. 팀별·서비스별 뷰 구성 가능",
      example: "주요 KPI 실시간 모니터링",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
  ];

  const alarmExample = [
    { metric: "EC2 CPU 사용률", threshold: "> 80% (5분 연속)", action: "Auto Scaling 트리거", severity: "text-yellow-400" },
    { metric: "RDS 연결 수", threshold: "> 100개", action: "Slack 알림 발송", severity: "text-orange-400" },
    { metric: "월 청구 예상액", threshold: "> $100", action: "담당자 이메일", severity: "text-red-400" },
    { metric: "Lambda 오류율", threshold: "> 1%", action: "PagerDuty 긴급 알람", severity: "text-red-400" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-indigo-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">
              CloudWatch 모니터링
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-indigo-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-indigo-500/20">
            AWS 전체 서비스의 관제탑 — 메트릭·로그·알람·대시보드를 통합 관리
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                  <feature.icon className={`w-12 h-12 mx-auto ${feature.color} mb-4`} />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground text-sm text-center">{feature.description}</p>
                  <div className="bg-black/20 rounded-xl p-2">
                    <p className={`text-xs text-center ${feature.color}`}>예시: {feature.example}</p>
                  </div>
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
          className="bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-indigo-500/20"
        >
          <h3 className="text-indigo-400 font-bold mb-4 text-center">실전 알람 설정 예시</h3>
          <div className="space-y-2">
            {alarmExample.map(a => (
              <div key={a.metric} className="grid grid-cols-3 gap-3">
                <div className="bg-slate-800/30 rounded-lg px-3 py-2">
                  <span className="text-white text-xs font-semibold">{a.metric}</span>
                </div>
                <div className="bg-slate-800/20 rounded-lg px-3 py-2">
                  <span className={`text-xs font-mono ${a.severity}`}>{a.threshold}</span>
                </div>
                <div className="bg-slate-800/20 rounded-lg px-3 py-2">
                  <span className="text-muted-foreground text-xs">→ {a.action}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageCloudWatch;
