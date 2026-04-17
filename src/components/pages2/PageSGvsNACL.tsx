import { motion } from "framer-motion";
import { Shield, Lock, Sparkles } from "lucide-react";

const PageSGvsNACL = () => {
  const comparison = [
    { item: "적용 레벨", sg: "인스턴스 (EC2) 레벨", nacl: "서브넷 레벨" },
    { item: "상태 추적", sg: "Stateful (응답 트래픽 자동 허용)", nacl: "Stateless (인바운드·아웃바운드 각각 설정)" },
    { item: "기본 동작", sg: "모든 인바운드 차단, 아웃바운드 허용", nacl: "모든 트래픽 허용 (기본값)" },
    { item: "규칙 수", sg: "최대 60개 인바운드/아웃바운드", nacl: "최대 20개 (번호 순서 우선)" },
    { item: "허용/거부", sg: "허용 규칙만 작성 (거부는 묵시적)", nacl: "허용 & 거부 규칙 모두 명시" },
    { item: "주로 사용", sg: "EC2 포트 허용 (22·80·443 등)", nacl: "특정 IP 차단, 서브넷 간 격리" },
  ];

  const sgExample = [
    { rule: "인바운드 TCP 80 허용 (0.0.0.0/0)", desc: "웹 트래픽 허용" },
    { rule: "인바운드 TCP 443 허용 (0.0.0.0/0)", desc: "HTTPS 허용" },
    { rule: "인바운드 TCP 22 허용 (내 IP만)", desc: "SSH 접속 제한" },
    { rule: "아웃바운드 모두 허용", desc: "기본값" },
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
              보안 그룹 vs NACL
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-red-500/20">
            VPC의 두 가지 방화벽 계층 — 함께 사용하면 심층 방어(Defense in Depth) 구현
          </p>
        </motion.div>

        {/* 비교표 */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-8"
        >
          {/* 헤더 */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="bg-slate-800/50 p-3 rounded-xl text-center"><span className="text-slate-300 font-semibold text-sm">항목</span></div>
            <div className="bg-blue-900/20 border border-blue-500/20 p-3 rounded-xl text-center flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-bold text-sm">Security Group</span>
            </div>
            <div className="bg-red-900/20 border border-red-500/20 p-3 rounded-xl text-center flex items-center justify-center gap-2">
              <Lock className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-bold text-sm">NACL</span>
            </div>
          </div>

          <div className="space-y-2">
            {comparison.map((row, index) => (
              <motion.div key={row.item} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.07, duration: 0.4 }} viewport={{ once: true }}
                className="grid grid-cols-3 gap-3">
                <div className="bg-slate-800/30 p-3 rounded-xl flex items-center">
                  <span className="text-slate-300 text-xs font-medium">{row.item}</span>
                </div>
                <div className="bg-blue-900/10 border border-blue-500/10 p-3 rounded-xl">
                  <span className="text-blue-200 text-xs">{row.sg}</span>
                </div>
                <div className="bg-red-900/10 border border-red-500/10 p-3 rounded-xl">
                  <span className="text-red-200 text-xs">{row.nacl}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 보안 그룹 예시 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-blue-900/10 border border-blue-500/20 p-5 rounded-2xl"
        >
          <h3 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5" />웹 서버 보안 그룹 설정 예시
          </h3>
          <div className="space-y-2">
            {sgExample.map(e => (
              <div key={e.rule} className="grid grid-cols-3 gap-3">
                <div className="col-span-2 bg-black/20 rounded-lg px-3 py-1.5">
                  <span className="text-green-400 text-xs font-mono">{e.rule}</span>
                </div>
                <div className="bg-black/20 rounded-lg px-3 py-1.5">
                  <span className="text-muted-foreground text-xs">{e.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageSGvsNACL;
