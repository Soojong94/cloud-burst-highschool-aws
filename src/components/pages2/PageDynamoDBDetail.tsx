import { motion } from "framer-motion";
import { Zap, Globe, Database, TrendingUp, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageDynamoDBDetail = () => {
  const features = [
    {
      icon: Zap,
      title: "초저지연",
      description: "어떤 규모에서도 한 자릿수 밀리초(ms) 응답. 초당 수백만 건 요청 처리 가능",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: TrendingUp,
      title: "자동 확장",
      description: "트래픽에 따라 용량을 자동으로 늘리고 줄임. 피크 대비 초과 예약 불필요",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Globe,
      title: "글로벌 테이블",
      description: "여러 AWS 리전에 자동 복제. 전 세계 어디서나 가장 가까운 리전에서 읽고 쓰기",
      color: "text-cyan-400",
      cardStyle: "card-data"
    },
    {
      icon: Database,
      title: "서버리스",
      description: "서버 프로비저닝, 패치, 클러스터 관리 불필요. 온디맨드 또는 프로비저닝 용량 선택",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
  ];

  const vsRDS = [
    { item: "데이터 구조", dynamo: "유연한 키-값·문서 구조 (JSON)", rds: "고정된 스키마 (테이블·행·열)" },
    { item: "관계 모델링", dynamo: "비정형, JOIN 없음", rds: "정형, 복잡한 JOIN 지원" },
    { item: "확장 방식", dynamo: "수평 확장 (자동)", rds: "수직 확장 (인스턴스 업그레이드)" },
    { item: "적합한 데이터", dynamo: "세션, 장바구니, 게임 데이터", rds: "금융 거래, ERP, 복잡한 관계 데이터" },
    { item: "AWS 무료 티어", dynamo: "항상 무료 25GB", rds: "12개월 750시간" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-emerald-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-yellow-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main title-section">
              DynamoDB 상세
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-yellow-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-emerald-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-emerald-500/20">
            완전 관리형 NoSQL — 아마존 자체 쇼핑카트·주문 시스템에서 시작된 서비스
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
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
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/20"
        >
          <h3 className="text-lg font-bold text-center text-yellow-400 mb-4">DynamoDB vs RDS 비교</h3>
          <div className="space-y-2">
            {vsRDS.map((row) => (
              <div key={row.item} className="grid grid-cols-3 gap-3">
                <div className="bg-slate-800/30 rounded-lg px-3 py-2 flex items-center">
                  <span className="text-slate-300 text-xs font-medium">{row.item}</span>
                </div>
                <div className="bg-yellow-900/10 rounded-lg px-3 py-2 border border-yellow-500/10">
                  <span className="text-yellow-300 text-xs">{row.dynamo}</span>
                </div>
                <div className="bg-blue-900/10 rounded-lg px-3 py-2 border border-blue-500/10">
                  <span className="text-blue-300 text-xs">{row.rds}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageDynamoDBDetail;
