import { motion } from "framer-motion";
import { Globe, Lock, GitMerge, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageCloudDeployment = () => {
  const models = [
    {
      icon: Globe,
      title: "퍼블릭 클라우드",
      subtitle: "Public Cloud",
      color: "text-blue-400",
      cardStyle: "card-tech",
      features: ["AWS·Azure·GCP 등 CSP가 제공", "인터넷으로 누구나 접근 가능", "초기 비용 없음, 종량제 과금", "빠른 도입, 높은 확장성"],
      example: "스타트업·이커머스·모바일 앱",
      who: "대부분의 기업이 시작하는 방식"
    },
    {
      icon: Lock,
      title: "프라이빗 클라우드",
      subtitle: "Private Cloud",
      color: "text-purple-400",
      cardStyle: "card-ai",
      features: ["자사 데이터센터 내 클라우드 구축", "외부 접근 차단, 완전한 통제권", "높은 초기 비용, 전담 인력 필요", "보안·규제 요건이 엄격한 경우"],
      example: "금융권·군·의료·공공기관",
      who: "AWS Outposts로 온프레미스에 AWS 구축 가능"
    },
    {
      icon: GitMerge,
      title: "하이브리드 클라우드",
      subtitle: "Hybrid Cloud",
      color: "text-green-400",
      cardStyle: "card-data",
      features: ["퍼블릭 + 프라이빗 혼합 운영", "민감 데이터는 온프레미스 유지", "일반 워크로드는 클라우드 활용", "AWS Direct Connect로 전용선 연결"],
      example: "신한은행·삼성전자·LG CNS",
      who: "국내 대기업 70% 이상이 채택하는 전략"
    }
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
      <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main title-section">
              클라우드 배포 모델
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
            어떤 방식으로 클라우드를 쓸지 — 상황에 맞는 배포 전략 선택
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${model.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center pb-4">
                  <model.icon className={`w-14 h-14 mx-auto ${model.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{model.title}</CardTitle>
                  <p className={`text-sm ${model.color} font-mono`}>{model.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {model.features.map((f, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className={`${model.color} font-bold flex-shrink-0`}>·</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-black/20 rounded-xl p-3 mt-3">
                    <p className="text-xs text-slate-400 mb-1">적합한 곳</p>
                    <p className={`text-sm font-semibold ${model.color}`}>{model.example}</p>
                  </div>
                  <p className="text-xs text-muted-foreground italic">{model.who}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageCloudDeployment;
