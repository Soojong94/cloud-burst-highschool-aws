import { motion } from "framer-motion";
import { Cloud, Sparkles } from "lucide-react";

const PageCSPComparison = () => {
  const csps = [
    {
      name: "AWS",
      fullName: "Amazon Web Services",
      share: "31%",
      founded: "2006",
      strength: "서비스 폭, 생태계 성숙도, 글로벌 리전",
      koreanRegion: "서울 리전 (2016~)",
      majorCustomers: "넷플릭스, 삼성, 카카오, 에어비앤비",
      certifications: "CLF · SAA · SAP · ANS 등",
      color: "text-orange-400",
      bg: "from-orange-900/30 to-orange-800/20",
      border: "border-orange-500/40",
      badge: "bg-orange-500/30 text-orange-200",
      highlight: true,
      tagline: "🏆 글로벌 점유율 1위"
    },
    {
      name: "Azure",
      fullName: "Microsoft Azure",
      share: "22%",
      founded: "2010",
      strength: "엔터프라이즈 통합, Office 365·Windows 연동",
      koreanRegion: "한국 중부·남부 리전",
      majorCustomers: "현대자동차, LG, 롯데, 공공기관",
      certifications: "AZ-900 · AZ-104 · AZ-305 등",
      color: "text-blue-400",
      bg: "from-blue-900/20 to-blue-800/10",
      border: "border-blue-500/20",
      badge: "bg-blue-500/20 text-blue-300",
      highlight: false,
      tagline: "🏢 엔터프라이즈 강자"
    },
    {
      name: "GCP",
      fullName: "Google Cloud Platform",
      share: "12%",
      founded: "2011",
      strength: "빅데이터·AI/ML, Kubernetes 원조",
      koreanRegion: "서울 리전 (2020~)",
      majorCustomers: "스포티파이, 트위터, 야놀자",
      certifications: "ACE · PCA · PDE 등",
      color: "text-green-400",
      bg: "from-green-900/20 to-green-800/10",
      border: "border-green-500/20",
      badge: "bg-green-500/20 text-green-300",
      highlight: false,
      tagline: "🤖 AI/데이터 강점"
    },
  ];

  const compareItems = [
    { label: "글로벌 점유율" },
    { label: "서비스 출시연도" },
    { label: "핵심 강점" },
    { label: "한국 리전" },
    { label: "주요 고객사" },
    { label: "대표 자격증" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-pattern-grid relative overflow-hidden"
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
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-orange title-main title-section">
              주요 CSP 비교
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-orange-500/20">
            AWS vs Azure vs GCP — 각 클라우드의 포지션과 강점
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {csps.map((csp, index) => (
            <motion.div
              key={csp.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${csp.bg} p-6 rounded-2xl border ${csp.border} hover:scale-[1.02] transition-transform duration-300 ${csp.highlight ? 'ring-2 ring-orange-500/40' : ''}`}
            >
              <div className="text-center mb-5">
                <Cloud className={`w-12 h-12 mx-auto ${csp.color} mb-3`} />
                <h3 className={`text-3xl font-bold ${csp.color}`}>{csp.name}</h3>
                <p className="text-slate-400 text-sm">{csp.fullName}</p>
                <span className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${csp.badge}`}>{csp.tagline}</span>
              </div>

              <div className="space-y-3">
                {[
                  { label: "시장 점유율", value: csp.share },
                  { label: "핵심 강점", value: csp.strength },
                  { label: "한국 리전", value: csp.koreanRegion },
                  { label: "주요 고객", value: csp.majorCustomers },
                  { label: "자격증", value: csp.certifications },
                ].map((item) => (
                  <div key={item.label} className="bg-black/20 rounded-xl p-3">
                    <p className="text-xs text-slate-400 mb-1">{item.label}</p>
                    <p className="text-sm text-white">{item.value}</p>
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
          <p className="text-white font-semibold">
            이 강의에서는 <span className="text-orange-400 font-bold">AWS</span>를 중심으로 배웁니다 —
            점유율 1위, 가장 많은 서비스, 풍부한 학습 자료
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageCSPComparison;
