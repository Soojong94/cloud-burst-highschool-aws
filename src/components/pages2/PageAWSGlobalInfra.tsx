import { motion } from "framer-motion";
import { Globe, Server, Radio, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageAWSGlobalInfra = () => {
  const infraItems = [
    {
      icon: Globe,
      title: "리전 (Region)",
      count: "34개",
      color: "text-orange-400",
      cardStyle: "card-tech",
      description: "지리적으로 독립된 데이터센터 클러스터. 한국 서울, 미국 버지니아, 유럽 아일랜드 등 전 세계 배치",
      examples: ["ap-northeast-2 (서울)", "us-east-1 (버지니아)", "eu-west-1 (아일랜드)"],
      tip: "데이터 레이턴시와 규정 준수를 고려해 리전 선택"
    },
    {
      icon: Server,
      title: "가용 영역 (AZ)",
      count: "108개",
      color: "text-blue-400",
      cardStyle: "card-data",
      description: "리전 내 물리적으로 분리된 데이터센터. 독립 전원·냉각·네트워크로 한 AZ 장애 시 다른 AZ가 대체",
      examples: ["서울 리전에 4개 AZ", "각 AZ는 수km 이상 이격", "광케이블로 초저지연 연결"],
      tip: "Multi-AZ 배포로 고가용성 확보 — 실무 필수"
    },
    {
      icon: Radio,
      title: "엣지 로케이션",
      count: "600+개",
      color: "text-purple-400",
      cardStyle: "card-ai",
      description: "사용자와 가장 가까운 지점에서 콘텐츠를 캐싱·전송. CloudFront CDN·Route53 DNS가 활용",
      examples: ["서울·부산·인천 등 국내 다수", "콘텐츠 응답 속도 1/10 단축", "DDoS 방어도 엣지에서 처리"],
      tip: "넷플릭스 영상이 빠른 이유 — CloudFront 엣지 캐싱"
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
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl float-animation" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-orange title-main title-section">
              AWS 글로벌 인프라
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20">
            전 세계 어디서나 빠르고 안전한 서비스를 가능하게 하는 3단계 구조
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {infraItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${item.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center">
                  <item.icon className={`w-12 h-12 mx-auto ${item.color} mb-2 drop-shadow-lg`} />
                  <p className={`text-4xl font-bold ${item.color}`}>{item.count}</p>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">{item.description}</p>
                  <div className="space-y-1">
                    {item.examples.map((ex) => (
                      <div key={ex} className="bg-black/20 rounded-lg px-3 py-1.5">
                        <p className="text-xs text-white font-mono">{ex}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-black/30 rounded-xl p-3 border border-white/5">
                    <p className={`text-xs ${item.color} font-semibold`}>💡 {item.tip}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-orange-500/20 text-center"
        >
          <p className="text-white font-semibold">
            <span className="text-orange-400">서울 리전 (ap-northeast-2)</span>은 2016년 개설 — 4개 AZ, 국내 주요 기업 대부분이 사용
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageAWSGlobalInfra;
