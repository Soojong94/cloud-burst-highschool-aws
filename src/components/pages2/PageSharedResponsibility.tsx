import { motion } from "framer-motion";
import { Cloud, User, Sparkles } from "lucide-react";

const PageSharedResponsibility = () => {
  const awsResponsibility = [
    "물리적 데이터센터 보안 (출입 통제, CCTV)",
    "서버·스토리지·네트워크 장비",
    "하이퍼바이저 (가상화 레이어)",
    "AWS 관리형 서비스 내부 인프라",
    "글로벌 네트워크 인프라",
    "리전·AZ 물리적 분리 및 이중화",
  ];

  const customerResponsibility = [
    "EC2 운영체제 패치 및 업데이트",
    "애플리케이션 코드 보안",
    "IAM 사용자·권한 관리",
    "데이터 암호화 (저장·전송)",
    "보안 그룹·NACL 규칙 설정",
    "네트워크 트래픽 보호 설정",
    "고객 데이터 자체 (GDPR·개인정보보호법)",
  ];

  const managedService = [
    { service: "RDS", aws: "OS·DB 엔진 패치, 백업", customer: "DB 접근 권한, 데이터 암호화" },
    { service: "Lambda", aws: "서버·OS·런타임", customer: "함수 코드, IAM 역할" },
    { service: "S3", aws: "스토리지 인프라, 내구성", customer: "버킷 정책, 퍼블릭 접근 차단" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-purple title-main title-section">
              공동 책임 모델
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-red-500/20">
            보안은 AWS와 고객이 함께 책임집니다 — 무엇이 AWS 몫이고 무엇이 내 몫인지 명확히
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
          {/* AWS 책임 */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 p-5 rounded-2xl border border-orange-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="w-8 h-8 text-orange-400" />
              <h3 className="text-lg font-bold text-orange-400">AWS 책임</h3>
              <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded-full">"클라우드의 보안"</span>
            </div>
            <div className="space-y-2">
              {awsResponsibility.map(item => (
                <div key={item} className="bg-black/20 rounded-lg px-3 py-2 flex items-start gap-2">
                  <span className="text-orange-400 font-bold flex-shrink-0">☑</span>
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 고객 책임 */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-5 rounded-2xl border border-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <User className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-blue-400">고객 책임</h3>
              <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">"클라우드 안에서의 보안"</span>
            </div>
            <div className="space-y-2">
              {customerResponsibility.map(item => (
                <div key={item} className="bg-black/20 rounded-lg px-3 py-2 flex items-start gap-2">
                  <span className="text-blue-400 font-bold flex-shrink-0">☑</span>
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-white/10"
        >
          <h3 className="text-white font-bold mb-3 text-center">관리형 서비스일수록 AWS가 더 많이 책임</h3>
          <div className="space-y-2">
            {managedService.map(s => (
              <div key={s.service} className="grid grid-cols-3 gap-3">
                <div className="bg-slate-800/50 rounded-lg px-3 py-2 text-center"><span className="text-white font-bold text-sm">{s.service}</span></div>
                <div className="bg-orange-900/10 rounded-lg px-3 py-2"><span className="text-orange-300 text-xs">AWS: {s.aws}</span></div>
                <div className="bg-blue-900/10 rounded-lg px-3 py-2"><span className="text-blue-300 text-xs">고객: {s.customer}</span></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageSharedResponsibility;
