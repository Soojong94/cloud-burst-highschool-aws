import { motion } from "framer-motion";
import { HardDrive, FolderOpen, Sparkles } from "lucide-react";

const PageEBSEFS = () => {
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
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main title-section">
              EBS & EFS
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-emerald-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/20">
            S3 외의 두 가지 스토리지 — EC2 전용 블록 스토리지 vs 다중 공유 파일 시스템
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* EBS */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-6 rounded-2xl border border-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <HardDrive className="w-12 h-12 text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold text-blue-400">EBS</h3>
                <p className="text-slate-400 text-sm">Elastic Block Store</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              EC2 인스턴스에 연결하는 가상 하드디스크. 하나의 EC2에 전용으로 부착되며 OS·DB·앱 데이터 저장에 사용
            </p>
            <div className="space-y-2 mb-4">
              {[
                "하나의 EC2에만 연결 가능 (단일 부착)",
                "EC2를 종료해도 데이터 보존",
                "SSD(gp3) 타입: IOPS 최대 16,000",
                "스냅샷으로 다른 리전에 복제 가능",
                "DB 서버, 부팅 볼륨으로 주로 사용",
              ].map(f => (
                <div key={f} className="bg-black/20 rounded-lg px-3 py-1.5 flex items-start gap-2">
                  <span className="text-blue-400 font-bold flex-shrink-0">·</span>
                  <span className="text-white text-xs">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-black/30 rounded-xl p-3">
              <p className="text-xs text-slate-400 mb-1">비유</p>
              <p className="text-blue-400 text-sm font-semibold">💻 노트북에 꽂는 USB 외장 SSD</p>
            </div>
          </motion.div>

          {/* EFS */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-900/20 to-green-800/20 p-6 rounded-2xl border border-green-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <FolderOpen className="w-12 h-12 text-green-400" />
              <div>
                <h3 className="text-2xl font-bold text-green-400">EFS</h3>
                <p className="text-slate-400 text-sm">Elastic File System</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              여러 EC2 인스턴스가 동시에 공유하는 관리형 NFS 파일 시스템. 자동으로 용량을 늘리고 줄임
            </p>
            <div className="space-y-2 mb-4">
              {[
                "수천 개의 EC2 동시 마운트 가능",
                "용량 자동 확장·축소 (페타바이트까지)",
                "리전 내 다중 AZ 자동 복제",
                "Linux 워크로드에 최적화 (NFSv4)",
                "공유 콘텐츠, CMS, 분산 빌드 환경",
              ].map(f => (
                <div key={f} className="bg-black/20 rounded-lg px-3 py-1.5 flex items-start gap-2">
                  <span className="text-green-400 font-bold flex-shrink-0">·</span>
                  <span className="text-white text-xs">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-black/30 rounded-xl p-3">
              <p className="text-xs text-slate-400 mb-1">비유</p>
              <p className="text-green-400 text-sm font-semibold">🗄️ 사무실 공유 NAS 드라이브 (모두 접속 가능)</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 max-w-5xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-white/10"
        >
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div><p className="text-slate-400 mb-1">객체 저장 (무제한)</p><p className="text-emerald-400 font-bold">S3</p></div>
            <div><p className="text-slate-400 mb-1">블록 저장 (EC2 전용)</p><p className="text-blue-400 font-bold">EBS</p></div>
            <div><p className="text-slate-400 mb-1">파일 공유 (다중 EC2)</p><p className="text-green-400 font-bold">EFS</p></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageEBSEFS;
