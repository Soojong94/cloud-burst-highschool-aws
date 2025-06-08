import { motion } from "framer-motion";
import { Cpu, Database, Network, Shield, Sparkles } from "lucide-react";

const Page04AWSCategories = () => {
  const categories = [
    {
      icon: Cpu,
      title: "컴퓨팅",
      services: ["EC2", "Lambda", "ECS", "EKS", "Batch"],
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20"
    },
    {
      icon: Database,
      title: "스토리지",
      services: ["S3", "EBS", "EFS", "Glacier"],
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20"
    },
    {
      icon: Database,
      title: "데이터베이스",
      services: ["RDS", "DynamoDB", "ElastiCache", "Neptune"],
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20"
    },
    {
      icon: Network,
      title: "네트워킹",
      services: ["VPC", "CloudFront", "Route 53", "API Gateway"],
      color: "text-orange-400",
      bgColor: "from-orange-900/20 to-orange-800/20"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-cyan-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-cyan title-main">
              AWS 서비스 카테고리
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-cyan-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${category.bgColor} p-6 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-6">
                <category.icon className={`w-16 h-16 ${category.color} mx-auto mb-4`} />
                <h3 className={`text-2xl font-bold ${category.color}`}>{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.services.map((service, i) => (
                  <div key={i} className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <span className="text-white font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page04AWSCategories;