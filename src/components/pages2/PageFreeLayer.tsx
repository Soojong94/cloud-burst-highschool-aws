import { motion } from "framer-motion";
import { Gift, Clock, Infinity, Sparkles } from "lucide-react";

const PageFreeLayer = () => {
  const tiers = [
    {
      icon: Clock,
      title: "12개월 무료",
      subtitle: "신규 가입 후 1년간",
      color: "text-blue-400",
      bg: "from-blue-900/20 to-blue-800/20",
      border: "border-blue-500/20",
      items: [
        { service: "EC2", detail: "t2.micro 인스턴스 월 750시간" },
        { service: "S3", detail: "5GB 스탠다드 스토리지" },
        { service: "RDS", detail: "db.t2.micro 월 750시간" },
        { service: "CloudFront", detail: "매월 1TB 데이터 전송" },
        { service: "Lambda", detail: "월 100만 건 요청 포함" },
      ]
    },
    {
      icon: Infinity,
      title: "항상 무료",
      subtitle: "기간 제한 없이 영구 무료",
      color: "text-green-400",
      bg: "from-green-900/20 to-green-800/20",
      border: "border-green-500/20",
      items: [
        { service: "Lambda", detail: "월 100만 건 요청, 400,000GB-초 컴퓨팅" },
        { service: "DynamoDB", detail: "25GB 스토리지, 읽기/쓰기 용량 포함" },
        { service: "SNS", detail: "월 100만 건 게시 무료" },
        { service: "CloudWatch", detail: "10개 메트릭, 10개 알람" },
        { service: "Cognito", detail: "월간 활성 사용자 5만 명" },
      ]
    },
    {
      icon: Gift,
      title: "단기 체험",
      subtitle: "60~90일 한시적 제공",
      color: "text-orange-400",
      bg: "from-orange-900/20 to-orange-800/20",
      border: "border-orange-500/20",
      items: [
        { service: "Redshift", detail: "DC2.Large 노드 2개월 무료" },
        { service: "SageMaker", detail: "노트북·훈련·추론 2개월 무료" },
        { service: "Comprehend", detail: "NLP API 첫 3개월 무료" },
        { service: "Rekognition", detail: "이미지 분석 첫 3개월 무료" },
        { service: "Translate", detail: "번역 API 첫 2개월 무료" },
      ]
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
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-green-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

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
              AWS Free Tier
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-green-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20">
            이메일 하나로 시작 — 신용카드 등록 후 비용 한도 설정하면 안전하게 학습
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${tier.bg} p-6 rounded-2xl border ${tier.border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <tier.icon className={`w-10 h-10 ${tier.color}`} />
                <div>
                  <h3 className={`text-xl font-bold ${tier.color}`}>{tier.title}</h3>
                  <p className="text-slate-400 text-sm">{tier.subtitle}</p>
                </div>
              </div>

              <div className="space-y-2">
                {tier.items.map((item) => (
                  <div key={item.service} className="bg-black/20 rounded-xl p-3">
                    <span className={`text-sm font-bold ${tier.color}`}>{item.service}</span>
                    <p className="text-muted-foreground text-xs mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-orange-500/20 text-center"
        >
          <p className="text-white">
            ⚠️ 비용 폭탄 방지 — <span className="text-orange-400 font-bold">Billing Alerts</span>를 설정해 월 $1 초과 시 알람을 받으세요
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageFreeLayer;
