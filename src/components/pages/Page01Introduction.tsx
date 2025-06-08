import { motion } from "framer-motion";
import { User, Building, Award, Handshake, Sparkles } from "lucide-react";

const Page01Introduction = () => {
  const profile = [
    {
      icon: User,
      title: "강사 소개",
      content: "김수종",
      subtitle: "으뜸정보기술 Solutions Architect",
      color: "text-blue-400"
    },
    {
      icon: Building,
      title: "회사 소개",
      content: "으뜸정보기술",
      subtitle: "MSP (Managed Service Provider)",
      color: "text-green-400"
    },
    {
      icon: Award,
      title: "전문 분야",
      content: "클라우드 컨설팅",
      subtitle: "인프라 설계 및 운영",
      color: "text-purple-400"
    },
    {
      icon: Handshake,
      title: "서비스 목표",
      content: "고객 성공",
      subtitle: "최적의 클라우드 솔루션 제공",
      color: "text-orange-400"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main">
              강사 소개
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
            AWS 전문가와 함께하는 클라우드 컴퓨팅 여정을 시작해보세요
          </p>
        </motion.div>

        {/* 프로필 카드들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {profile.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300 text-center"
            >
              <item.icon className={`w-16 h-16 ${item.color} mx-auto mb-4`} />
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className={`text-2xl font-bold ${item.color} mb-2`}>{item.content}</p>
              <p className="text-muted-foreground text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* 하단 메시지 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient-purple">Cloud First</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            클라우드 기술은 미래의 핵심 역량입니다.
            <br></br>
            AWS의 혁신적인 기술에 대해서 함께 알아봅시다.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page01Introduction;