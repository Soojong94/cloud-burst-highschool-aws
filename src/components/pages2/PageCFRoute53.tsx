import { motion } from "framer-motion";
import { Zap, Globe, Sparkles } from "lucide-react";

const PageCFRoute53 = () => {
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
              CloudFront & Route 53
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-orange-500/20">
            전 세계 사용자가 빠르게 접속하게 만드는 두 핵심 서비스
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* CloudFront */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 p-6 rounded-2xl border border-orange-500/20"
          >
            <div className="flex items-center gap-3 mb-5">
              <Zap className="w-12 h-12 text-orange-400" />
              <div>
                <h3 className="text-2xl font-bold text-orange-400">CloudFront</h3>
                <p className="text-slate-400 text-sm">CDN (Content Delivery Network)</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              전 세계 600+ 엣지 로케이션에 콘텐츠를 캐싱해 사용자 가장 가까운 곳에서 전송. 응답 속도를 최대 1/10로 단축
            </p>
            <div className="space-y-2 mb-4">
              {[
                { label: "엣지 수", value: "600+ 위치 (서울·부산·인천 포함)" },
                { label: "캐싱 대상", value: "이미지, 영상, HTML, JS, API 응답" },
                { label: "보안", value: "DDoS 방어 (AWS Shield) 기본 포함" },
                { label: "HTTPS", value: "무료 SSL/TLS 인증서 자동 발급" },
                { label: "비용 절감", value: "오리진 서버 트래픽·비용 대폭 감소" },
              ].map(item => (
                <div key={item.label} className="bg-black/20 rounded-lg px-3 py-2">
                  <span className="text-orange-400 text-xs font-semibold">{item.label}: </span>
                  <span className="text-white text-xs">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="bg-black/30 rounded-xl p-3">
              <p className="text-xs text-slate-400 mb-1">🇰🇷 활용 예시</p>
              <p className="text-orange-400 text-sm">넷플릭스가 한국 드라마를 서울 엣지에서 스트리밍하는 방식</p>
            </div>
          </motion.div>

          {/* Route 53 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-6 rounded-2xl border border-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-5">
              <Globe className="w-12 h-12 text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Route 53</h3>
                <p className="text-slate-400 text-sm">DNS & 트래픽 라우팅</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              도메인 이름(example.com)을 IP 주소로 변환하는 DNS 서비스. 헬스체크와 결합해 장애 시 자동 우회
            </p>
            <div className="space-y-2 mb-4">
              {[
                { label: "라우팅 정책", value: "단순, 가중치, 지리, 지연시간, 장애 조치" },
                { label: "헬스체크", value: "서버 장애 감지 → 다른 엔드포인트로 자동 전환" },
                { label: "도메인 등록", value: "Route 53에서 직접 도메인 구매 가능" },
                { label: "가용성", value: "100% SLA (AWS 서비스 중 유일)" },
                { label: "글로벌 DR", value: "리전 장애 시 다른 리전으로 자동 페일오버" },
              ].map(item => (
                <div key={item.label} className="bg-black/20 rounded-lg px-3 py-2">
                  <span className="text-blue-400 text-xs font-semibold">{item.label}: </span>
                  <span className="text-white text-xs">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="bg-black/30 rounded-xl p-3">
              <p className="text-xs text-slate-400 mb-1">이름의 유래</p>
              <p className="text-blue-400 text-sm">DNS가 사용하는 포트(53번)에서 따온 이름</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PageCFRoute53;
