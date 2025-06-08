import { motion } from "framer-motion";
import { Calendar, CheckCircle, Sparkles } from "lucide-react";

const Page03AmazonTimeline = () => {
  const events = [
    {
      year: "1994",
      title: "Amazon 창립",
      description: "Jeff Bezos가 시애틀 차고에서 온라인 서점 시작"
    },
    {
      year: "1997",
      title: "IPO 상장",
      description: "나스닥에 상장, 주가 18달러로 시작"
    },
    {
      year: "2002",
      title: "AWS 아이디어",
      description: "내부 인프라 효율성을 외부 서비스로 제공하기로 결정"
    },
    {
      year: "2006",
      title: "AWS 출시",
      description: "S3, EC2 서비스로 클라우드 컴퓨팅 시장 개척"
    },
    {
      year: "2012",
      title: "클라우드 선도",
      description: "Netflix, Airbnb 등 주요 기업들이 AWS 채택"
    },
    {
      year: "2018",
      title: "AI/ML 확장",
      description: "SageMaker, Alexa 등 AI 서비스 본격 출시"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-red title-main">
              Amazon 주요 이정표
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-orange-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-6 rounded-2xl border border-red-500/20 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-2xl font-bold text-red-400">{event.year}</h3>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">{event.title}</h4>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page03AmazonTimeline;