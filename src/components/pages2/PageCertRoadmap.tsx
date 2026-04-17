import { motion } from "framer-motion";
import { Award, ChevronUp, Sparkles } from "lucide-react";

const PageCertRoadmap = () => {
  const certs = [
    {
      level: "Foundational",
      levelKo: "기초",
      certs: [{ code: "CLF-C02", name: "Cloud Practitioner", desc: "클라우드·AWS 개념 전반. 비기술직 포함 누구나 취득 가능. 첫 번째 목표", color: "text-green-400", badge: "bg-green-500/20 text-green-300" }],
      bg: "from-green-900/20 to-green-800/20",
      border: "border-green-500/20",
      time: "약 2~4주 학습"
    },
    {
      level: "Associate",
      levelKo: "중급",
      certs: [
        { code: "SAA-C03", name: "Solutions Architect", desc: "AWS 아키텍처 설계. 가장 인기 있는 자격증. 취업 시 강력한 무기", color: "text-blue-400", badge: "bg-blue-500/20 text-blue-300" },
        { code: "DVA-C02", name: "Developer", desc: "AWS 서비스를 활용한 개발. Lambda·API Gateway·DynamoDB 중심", color: "text-blue-400", badge: "bg-blue-500/20 text-blue-300" },
        { code: "SOA-C02", name: "SysOps Administrator", desc: "AWS 운영 및 모니터링. CloudWatch·Auto Scaling 운영 실무", color: "text-blue-400", badge: "bg-blue-500/20 text-blue-300" },
      ],
      bg: "from-blue-900/20 to-blue-800/20",
      border: "border-blue-500/20",
      time: "약 2~3개월 학습"
    },
    {
      level: "Professional",
      levelKo: "전문가",
      certs: [
        { code: "SAP-C02", name: "Solutions Architect Pro", desc: "복잡한 엔터프라이즈 아키텍처 설계. 최고 수준의 아키텍트 역량 인증", color: "text-orange-400", badge: "bg-orange-500/20 text-orange-300" },
        { code: "DOP-C02", name: "DevOps Engineer Pro", desc: "CI/CD·자동화·모니터링 심화. DevOps 전문가 경력 필수 자격증", color: "text-orange-400", badge: "bg-orange-500/20 text-orange-300" },
      ],
      bg: "from-orange-900/20 to-orange-800/20",
      border: "border-orange-500/20",
      time: "약 6개월+ 학습"
    },
    {
      level: "Specialty",
      levelKo: "스페셜티",
      certs: [
        { code: "ANS-C01", name: "Advanced Networking", desc: "복잡한 네트워크 설계", color: "text-purple-400", badge: "bg-purple-500/20 text-purple-300" },
        { code: "MLS-C01", name: "Machine Learning", desc: "AWS AI/ML 서비스 전문", color: "text-purple-400", badge: "bg-purple-500/20 text-purple-300" },
        { code: "SCS-C02", name: "Security", desc: "보안 전문 자격증", color: "text-purple-400", badge: "bg-purple-500/20 text-purple-300" },
      ],
      bg: "from-purple-900/20 to-purple-800/20",
      border: "border-purple-500/20",
      time: "전문 분야별 심화"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">
              AWS 자격증 로드맵
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="flex items-center justify-center gap-3 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-blue-500/20 max-w-xl mx-auto">
            <Award className="w-6 h-6 text-blue-400" />
            <span className="text-white font-semibold">오늘 강의가 CLF-C02의 시작입니다</span>
          </div>
        </motion.div>

        <div className="space-y-4">
          {certs.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-r ${level.bg} border ${level.border} rounded-2xl p-5`}
            >
              <div className="flex items-center gap-3 mb-4">
                {index > 0 && <ChevronUp className="w-5 h-5 text-slate-400" />}
                <div>
                  <span className="text-white font-bold text-lg">{level.level}</span>
                  <span className="text-slate-400 text-sm ml-2">({level.levelKo})</span>
                </div>
                <span className="text-slate-400 text-xs ml-auto">{level.time}</span>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                {level.certs.map(cert => (
                  <div key={cert.code} className="bg-black/20 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-mono ${cert.color} font-bold`}>{cert.code}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${cert.badge}`}>{cert.name}</span>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-blue-500/20 text-center"
        >
          <p className="text-white">
            💡 취업·연봉 협상 시 <span className="text-blue-400 font-bold">SAA-C03</span>이 가장 강력합니다 — 국내 클라우드 엔지니어 채용 공고의 80%에서 우대
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageCertRoadmap;
