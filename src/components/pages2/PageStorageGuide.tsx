import { motion } from "framer-motion";
import { HelpCircle, Sparkles } from "lucide-react";

const PageStorageGuide = () => {
  const guide = [
    { need: "파일·이미지·영상 저장 (무제한)", answer: "S3", color: "text-emerald-400", bg: "from-emerald-900/20 to-emerald-800/20", border: "border-emerald-500/20", detail: "객체 스토리지, 99.999999999% 내구성, 무제한 용량" },
    { need: "EC2의 부팅 디스크·DB 볼륨", answer: "EBS", color: "text-blue-400", bg: "from-blue-900/20 to-blue-800/20", border: "border-blue-500/20", detail: "블록 스토리지, SSD(gp3) 기본, EC2 1:1 연결" },
    { need: "여러 EC2가 공유하는 파일 시스템", answer: "EFS", color: "text-green-400", bg: "from-green-900/20 to-green-800/20", border: "border-green-500/20", detail: "NFS 파일 시스템, 자동 확장, 수천 개 EC2 동시 마운트" },
    { need: "정형 데이터 (트랜잭션, 관계형)", answer: "RDS / Aurora", color: "text-orange-400", bg: "from-orange-900/20 to-orange-800/20", border: "border-orange-500/20", detail: "MySQL·PostgreSQL·Aurora, Multi-AZ, 자동 백업" },
    { need: "비정형 데이터 (고속, 키-값)", answer: "DynamoDB", color: "text-yellow-400", bg: "from-yellow-900/20 to-yellow-800/20", border: "border-yellow-500/20", detail: "NoSQL, ms 이하 지연, 서버리스, 글로벌 테이블" },
    { need: "인메모리 캐시 (DB 속도 향상)", answer: "ElastiCache", color: "text-purple-400", bg: "from-purple-900/20 to-purple-800/20", border: "border-purple-500/20", detail: "Redis·Memcached, 마이크로초 지연, 세션 캐싱" },
    { need: "장기 아카이브 (수년 보관)", answer: "S3 Glacier", color: "text-cyan-400", bg: "from-cyan-900/20 to-cyan-800/20", border: "border-cyan-500/20", detail: "GB당 월 $0.004, 검색에 수 시간 소요, 의료·법무 보관용" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-emerald-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl float-animation" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main title-section">
              스토리지 & DB 선택 가이드
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-emerald-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="flex items-center justify-center gap-2 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-emerald-500/20 max-w-xl mx-auto">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-white">무엇을 저장해야 하나요? → 아래에서 찾으세요</span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-3">
          {guide.map((item, index) => (
            <motion.div
              key={item.answer}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-r ${item.bg} border ${item.border} rounded-2xl p-4 hover:scale-[1.01] transition-transform duration-300`}
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-5">
                  <p className="text-white text-sm">🤔 {item.need}</p>
                </div>
                <div className="col-span-2 text-center">
                  <span className="text-slate-400 text-sm">→</span>
                </div>
                <div className="col-span-5">
                  <p className={`text-base font-bold ${item.color} mb-0.5`}>{item.answer}</p>
                  <p className="text-muted-foreground text-xs">{item.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageStorageGuide;
