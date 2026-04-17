import { motion } from "framer-motion";
import { Network, Globe, Lock, ArrowUpDown, Sparkles } from "lucide-react";

const PageSubnet = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-purple title-main title-section">
              서브넷 & 라우팅
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-red-500/20">
            VPC 내부를 나누는 방법 — 인터넷에 노출할 것과 숨길 것을 분리
          </p>
        </motion.div>

        {/* VPC 다이어그램 */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            {/* 인터넷 */}
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-900/30 border border-blue-500/30 px-6 py-2 rounded-xl text-blue-400 font-bold flex items-center gap-2">
                <Globe className="w-5 h-5" />인터넷
              </div>
            </div>
            <div className="flex justify-center mb-2"><ArrowUpDown className="w-5 h-5 text-slate-400" /></div>

            {/* Internet Gateway */}
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-900/30 border border-yellow-500/30 px-5 py-2 rounded-xl text-yellow-400 text-sm font-semibold">Internet Gateway (IGW)</div>
            </div>

            {/* VPC 박스 */}
            <div className="border border-orange-500/30 rounded-2xl p-4 bg-orange-900/5">
              <p className="text-orange-400 text-sm font-bold mb-4 text-center">VPC (10.0.0.0/16)</p>

              <div className="grid grid-cols-2 gap-4">
                {/* 퍼블릭 서브넷 */}
                <div className="border border-green-500/30 rounded-xl p-3 bg-green-900/10">
                  <p className="text-green-400 text-xs font-bold mb-2 flex items-center gap-1"><Globe className="w-3 h-3" />퍼블릭 서브넷 (10.0.1.0/24)</p>
                  <div className="space-y-1">
                    {["Web Server (EC2)", "Load Balancer", "NAT Gateway"].map(s => (
                      <div key={s} className="bg-green-900/20 rounded-lg px-2 py-1 text-xs text-white">{s}</div>
                    ))}
                  </div>
                  <p className="text-green-400 text-xs mt-2">✅ 인터넷 직접 통신 가능</p>
                </div>

                {/* 프라이빗 서브넷 */}
                <div className="border border-red-500/30 rounded-xl p-3 bg-red-900/10">
                  <p className="text-red-400 text-xs font-bold mb-2 flex items-center gap-1"><Lock className="w-3 h-3" />프라이빗 서브넷 (10.0.2.0/24)</p>
                  <div className="space-y-1">
                    {["App Server (EC2)", "RDS Database", "ElastiCache"].map(s => (
                      <div key={s} className="bg-red-900/20 rounded-lg px-2 py-1 text-xs text-white">{s}</div>
                    ))}
                  </div>
                  <p className="text-red-400 text-xs mt-2">🔒 인터넷 직접 접근 차단</p>
                </div>
              </div>

              <div className="mt-3 flex justify-center">
                <div className="text-xs text-slate-400 bg-black/20 px-3 py-1 rounded-full">
                  프라이빗 서브넷 → NAT Gateway → Internet (아웃바운드만)
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            { icon: Network, title: "라우팅 테이블", desc: "각 서브넷의 트래픽 경로를 정의. 퍼블릭 서브넷은 IGW로, 프라이빗은 NAT GW로 라우팅", color: "text-cyan-400", bg: "from-cyan-900/20 to-cyan-800/20", border: "border-cyan-500/20" },
            { icon: Globe, title: "Internet Gateway", desc: "VPC와 인터넷을 연결하는 관문. 퍼블릭 서브넷에만 연결. 수평 확장·고가용성 자동 지원", color: "text-green-400", bg: "from-green-900/20 to-green-800/20", border: "border-green-500/20" },
            { icon: ArrowUpDown, title: "NAT Gateway", desc: "프라이빗 서브넷에서 인터넷으로 아웃바운드 통신 허용. 외부에서 직접 접근은 차단", color: "text-orange-400", bg: "from-orange-900/20 to-orange-800/20", border: "border-orange-500/20" },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1, duration: 0.5 }} viewport={{ once: true }}
              className={`bg-gradient-to-br ${item.bg} border ${item.border} p-4 rounded-2xl hover:scale-[1.02] transition-transform duration-300`}>
              <item.icon className={`w-8 h-8 ${item.color} mb-2`} />
              <h3 className={`font-bold ${item.color} mb-1 text-sm`}>{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageSubnet;
