
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Cloud, 
  Rocket, 
  Globe, 
  Shield, 
  Code, 
  Database, 
  Cpu, 
  HardDrive,
  Brain,
  Users,
  Trophy,
  ChevronRight,
  Play,
  Target,
  Smartphone,
  Camera,
  Music,
  FileText,
  Wifi,
  DollarSign,
  Lock,
  Zap,
  TrendingUp,
  BookOpen,
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  Star,
  Building,
  Gamepad2
} from 'lucide-react';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: 'intro',
      title: '일상 속 클라우드',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500',
      description: '우리가 매일 사용하는 클라우드'
    },
    {
      id: 'generation-comparison',
      title: '세대별 기술 변화',
      icon: Camera,
      color: 'from-purple-500 to-pink-500',
      description: '90년대부터 현재까지의 변화'
    },
    {
      id: 'cloud-definition',
      title: '클라우드란 무엇인가',
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500',
      description: '클라우드의 핵심 개념'
    },
    {
      id: 'cloud-benefits',
      title: '클라우드의 장점',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      description: '왜 클라우드를 사용하는가'
    },
    {
      id: 'amazon-story',
      title: '아마존의 변신',
      icon: Building,
      color: 'from-orange-500 to-yellow-500',
      description: '온라인 서점에서 클라우드 제왕까지'
    },
    {
      id: 'aws-birth',
      title: 'AWS의 탄생',
      icon: Lightbulb,
      color: 'from-red-500 to-pink-500',
      description: '혁신적인 아이디어의 시작'
    },
    {
      id: 'aws-numbers',
      title: 'AWS의 위상',
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500',
      description: '숫자로 보는 AWS의 규모'
    },
    {
      id: 'daily-aws',
      title: '일상 속 AWS',
      icon: Gamepad2,
      color: 'from-cyan-500 to-blue-500',
      description: '우리가 사용하는 서비스들'
    },
    {
      id: 'ec2-intro',
      title: 'EC2 - 클라우드 컴퓨터',
      icon: Cpu,
      color: 'from-amber-500 to-orange-500',
      description: '언제든 빌릴 수 있는 컴퓨터'
    },
    {
      id: 'ec2-demo',
      title: 'EC2 실제 사례',
      icon: Code,
      color: 'from-emerald-500 to-green-500',
      description: '고등학생들의 실제 활용'
    },
    {
      id: 's3-intro',
      title: 'S3 - 무제한 저장소',
      icon: HardDrive,
      color: 'from-blue-500 to-indigo-500',
      description: '전 세계 어디서든 접근 가능'
    },
    {
      id: 's3-cases',
      title: 'S3 활용 사례',
      icon: FileText,
      color: 'from-pink-500 to-rose-500',
      description: '다양한 파일 저장 및 배포'
    },
    {
      id: 'rds-intro',
      title: 'RDS - 관리형 데이터베이스',
      icon: Database,
      color: 'from-teal-500 to-cyan-500',
      description: '자동 관리되는 데이터 창고'
    },
    {
      id: 'ai-services',
      title: 'AWS AI 서비스',
      icon: Brain,
      color: 'from-purple-500 to-violet-500',
      description: '누구나 사용할 수 있는 AI'
    },
    {
      id: 'new-careers',
      title: '새로운 직업들',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-500',
      description: '클라우드가 만든 새로운 기회'
    },
    {
      id: 'career-paths',
      title: '구체적인 진로',
      icon: Target,
      color: 'from-green-500 to-teal-500',
      description: '연봉과 업무 내용'
    },
    {
      id: 'student-action',
      title: '고등학생 실천 방안',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-500',
      description: '지금 당장 시작할 수 있는 것들'
    },
    {
      id: 'security-basics',
      title: '보안 기본 원칙',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: '안전한 클라우드 사용법'
    },
    {
      id: 'cost-management',
      title: '비용 관리',
      icon: DollarSign,
      color: 'from-emerald-500 to-green-500',
      description: '현명한 클라우드 사용'
    },
    {
      id: 'learning-roadmap',
      title: '학습 로드맵',
      icon: Users,
      color: 'from-blue-500 to-purple-500',
      description: '단계별 성장 계획'
    }
  ];

  const renderSection = () => {
    const section = sections[currentSection];
    const IconComponent = section.icon;

    return (
      <div className="space-y-8 animate-fade-in">
        {/* Section Header with enhanced animation */}
        <div className={`bg-gradient-to-r ${section.color} p-8 rounded-2xl text-white transform transition-all duration-700 hover:scale-105 shadow-2xl`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="animate-pulse">
              <IconComponent className="w-12 h-12" />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold">{section.title}</h2>
              <p className="text-xl opacity-90">{section.description}</p>
            </div>
          </div>
        </div>

        {/* Section Content with enhanced transitions */}
        <div className="transform transition-all duration-500 animate-scale-in">
          {currentSection === 0 && renderIntroSection()}
          {currentSection === 1 && renderGenerationSection()}
          {currentSection === 2 && renderCloudDefinitionSection()}
          {currentSection === 3 && renderCloudBenefitsSection()}
          {currentSection === 4 && renderAmazonStorySection()}
          {currentSection === 5 && renderAWSBirthSection()}
          {currentSection === 6 && renderAWSNumbersSection()}
          {currentSection === 7 && renderDailyAWSSection()}
          {currentSection === 8 && renderEC2IntroSection()}
          {currentSection === 9 && renderEC2DemoSection()}
          {currentSection === 10 && renderS3IntroSection()}
          {currentSection === 11 && renderS3CasesSection()}
          {currentSection === 12 && renderRDSSection()}
          {currentSection === 13 && renderAIServicesSection()}
          {currentSection === 14 && renderNewCareersSection()}
          {currentSection === 15 && renderCareerPathsSection()}
          {currentSection === 16 && renderStudentActionSection()}
          {currentSection === 17 && renderSecuritySection()}
          {currentSection === 18 && renderCostManagementSection()}
          {currentSection === 19 && renderLearningRoadmapSection()}
        </div>
      </div>
    );
  };

  const renderIntroSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-blue-900 text-center">📱 여러분의 하루를 돌아보세요</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h4 className="font-bold text-lg mb-2">아침</h4>
              <p className="text-sm text-gray-600">알람 → 카톡 확인 → 날씨 앱</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Music className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h4 className="font-bold text-lg mb-2">등교길</h4>
              <p className="text-sm text-gray-600">스포티파이 → 유튜브 → 웹툰</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <FileText className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h4 className="font-bold text-lg mb-2">수업 중</h4>
              <p className="text-sm text-gray-600">구글 클래스룸 → 패들릿 → 프레젠테이션</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h4 className="font-bold text-lg mb-2">방과 후</h4>
              <p className="text-sm text-gray-600">게임 → 넷플릭스 → 인스타그램</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold mb-4 text-center">🌟 놀라운 사실</h4>
            <p className="text-lg text-center mb-4">
              지금 여러분이 사용한 모든 서비스가<br/>
              <span className="text-3xl font-bold text-yellow-300">클라우드</span> 위에서 동작합니다!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderGenerationSection = () => (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-xl">
          <CardContent className="p-0">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">📼</div>
              <h3 className="text-2xl font-bold text-amber-900">1990년대</h3>
              <p className="text-lg text-amber-700">부모님 세대</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <Camera className="w-6 h-6 text-amber-600" />
                <span>필름 카메라 → 현상소</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <Music className="w-6 h-6 text-amber-600" />
                <span>CD/테이프로 음악</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <FileText className="w-6 h-6 text-amber-600" />
                <span>플로피 디스크 숙제</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-red-100 rounded-lg text-center">
              <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-600" />
              <p className="text-red-700 font-medium">디스크 잃어버리면 숙제 날라감!</p>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl">
          <CardContent className="p-0">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">💾</div>
              <h3 className="text-2xl font-bold text-blue-900">2000년대</h3>
              <p className="text-lg text-blue-700">형/누나 세대</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <Camera className="w-6 h-6 text-blue-600" />
                <span>디지털카메라 → 컴퓨터</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <Music className="w-6 h-6 text-blue-600" />
                <span>MP3 다운로드</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
                <span>USB 저장</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-red-100 rounded-lg text-center">
              <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-600" />
              <p className="text-red-700 font-medium">USB 잃어버리면 또 날라감!</p>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 shadow-xl">
          <CardContent className="p-0">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-green-900">2025년</h3>
              <p className="text-lg text-green-700">여러분 세대</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <Cloud className="w-6 h-6 text-green-600" />
                <span>구글 포토 자동 백업</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <Wifi className="w-6 h-6 text-green-600" />
                <span>실시간 동기화</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <Globe className="w-6 h-6 text-green-600" />
                <span>어디서든 접근</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <p className="text-green-700 font-medium">폰을 잃어버려도 괜찮아!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCloudDefinitionSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-indigo-900 text-center">☁️ 클라우드의 핵심 개념</h3>
          
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <div className="text-center mb-6">
              <Cloud className="w-16 h-16 mx-auto mb-4 text-blue-500" />
              <h4 className="text-2xl font-bold text-gray-800">클라우드란?</h4>
            </div>
            <p className="text-xl text-center text-gray-700 mb-6">
              "인터넷 어딘가에 있는 거대한 컴퓨터를<br/>
              필요할 때마다 빌려 쓰는 것"
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold mb-6 text-center">🎬 넷플릭스 예시로 이해하기</h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/20 rounded-lg">
                <Smartphone className="w-12 h-12 mx-auto mb-3" />
                <h5 className="font-bold mb-2">여러분</h5>
                <p className="text-sm">재생 버튼만 클릭</p>
              </div>
              
              <div className="text-center p-4 bg-white/20 rounded-lg">
                <Globe className="w-12 h-12 mx-auto mb-3" />
                <h5 className="font-bold mb-2">실제 영상</h5>
                <p className="text-sm">전 세계 서버에 저장</p>
              </div>
              
              <div className="text-center p-4 bg-white/20 rounded-lg">
                <Zap className="w-12 h-12 mx-auto mb-3" />
                <h5 className="font-bold mb-2">결과</h5>
                <p className="text-sm">끊김 없는 HD 스트리밍!</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCloudBenefitsSection = () => (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-6 text-green-900">✅ 클라우드의 장점</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                <Zap className="w-8 h-8 text-yellow-500" />
                <div>
                  <h4 className="font-bold">언제든 접근</h4>
                  <p className="text-sm text-gray-600">인터넷만 있으면 전 세계 어디서든</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                <DollarSign className="w-8 h-8 text-green-500" />
                <div>
                  <h4 className="font-bold">사용한 만큼 지불</h4>
                  <p className="text-sm text-gray-600">필요한 만큼만 비용 지불</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                <Shield className="w-8 h-8 text-blue-500" />
                <div>
                  <h4 className="font-bold">자동 백업</h4>
                  <p className="text-sm text-gray-600">데이터 손실 걱정 없음</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                <Rocket className="w-8 h-8 text-purple-500" />
                <div>
                  <h4 className="font-bold">무한 확장</h4>
                  <p className="text-sm text-gray-600">필요에 따라 자동으로 확장</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border-0 shadow-xl">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-6 text-red-900">❌ 기존 방식의 문제</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                <AlertTriangle className="w-8 h-8 text-red-500" />
                <div>
                  <h4 className="font-bold">저장 공간 부족</h4>
                  <p className="text-sm text-gray-600">용량 제한으로 파일 삭제 필요</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                <AlertTriangle className="w-8 h-8 text-orange-500" />
                <div>
                  <h4 className="font-bold">데이터 손실 위험</h4>
                  <p className="text-sm text-gray-600">하드웨어 고장시 모든 것 잃음</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
                <div>
                  <h4 className="font-bold">높은 초기 비용</h4>
                  <p className="text-sm text-gray-600">서버, 소프트웨어 구매 비용</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                <AlertTriangle className="w-8 h-8 text-purple-500" />
                <div>
                  <h4 className="font-bold">복잡한 관리</h4>
                  <p className="text-sm text-gray-600">전문 인력 필요</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAmazonStorySection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-orange-50 to-yellow-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-orange-900 text-center">📚 아마존의 놀라운 변신 스토리</h3>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">1994년 - 온라인 서점</h4>
                    <p className="text-gray-600">시애틀 차고에서 책 판매 시작</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  제프 베조스가 "인터넷으로 책을 판다"는 아이디어로 시작한 작은 회사
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">1990년대 말 - 종합몰</h4>
                    <p className="text-gray-600">옷, 전자제품 등으로 확장</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "지구상에서 가장 고객 중심적인 회사"를 목표로 급속 성장
                </p>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="flex items-center gap-4 mb-4">
                <AlertTriangle className="w-12 h-12 text-red-500" />
                <div>
                  <h4 className="font-bold text-lg text-red-900">2000년대 초 - 성장통</h4>
                  <p className="text-red-700">급성장으로 인한 기술적 문제들</p>
                </div>
              </div>
              <ul className="text-sm text-red-800 space-y-2">
                <li>• 크리스마스 시즌 웹사이트 먹통</li>
                <li>• 서버 다운으로 매출 손실</li>
                <li>• IT 인프라 관리에 막대한 비용</li>
                <li>• 확장성 문제로 고객 불만 증가</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAWSBirthSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-purple-900 text-center">💡 AWS 탄생의 순간</h3>
          
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-lg mb-8">
            <div className="text-center mb-6">
              <Lightbulb className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-bold">2006년 - 혁신적인 아이디어</h4>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg">
              <p className="text-lg font-medium mb-4">아마존 임원들의 회의:</p>
              <blockquote className="text-xl italic border-l-4 border-white/50 pl-4">
                "우리가 이렇게 큰 서버 인프라를 구축했는데...<br/>
                다른 회사들도 똑같은 고민을 하고 있을 거야.<br/>
                우리 남는 서버 용량을 빌려줄까?"
              </blockquote>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-bold text-lg mb-2">문제 발견</h4>
              <p className="text-sm text-gray-600">모든 회사가 같은 IT 인프라 문제로 고민</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="font-bold text-lg mb-2">해결책 제시</h4>
              <p className="text-sm text-gray-600">아마존의 인프라를 서비스로 제공</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-bold text-lg mb-2">AWS 출시</h4>
              <p className="text-sm text-gray-600">클라우드 컴퓨팅 시대의 시작</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAWSNumbersSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-blue-900 to-purple-900 text-white border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-center">📊 숫자로 보는 AWS의 위력</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-white/20 rounded-xl backdrop-blur">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">32%</div>
              <div className="text-lg">전 세계 클라우드 시장 점유율</div>
              <Badge className="mt-2 bg-yellow-500">1위</Badge>
            </div>
            
            <div className="text-center p-6 bg-white/20 rounded-xl backdrop-blur">
              <DollarSign className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">120조원</div>
              <div className="text-lg">연간 매출</div>
              <div className="text-sm opacity-75">(900억 달러)</div>
            </div>
            
            <div className="text-center p-6 bg-white/20 rounded-xl backdrop-blur">
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">102개</div>
              <div className="text-lg">전 세계 가용 영역</div>
              <div className="text-sm opacity-75">33개국</div>
            </div>
            
            <div className="text-center p-6 bg-white/20 rounded-xl backdrop-blur">
              <Building className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">수백만</div>
              <div className="text-lg">사용 기업</div>
              <div className="text-sm opacity-75">개인부터 대기업까지</div>
            </div>
          </div>

          <div className="bg-white/20 p-6 rounded-xl backdrop-blur">
            <h4 className="text-xl font-bold mb-4 text-center">🏆 아마존 전체 수익 구성</h4>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">70%</div>
                <div>AWS (클라우드)</div>
              </div>
              <div className="text-4xl">vs</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">30%</div>
                <div>쇼핑몰</div>
              </div>
            </div>
            <p className="text-center mt-4 text-lg">
              놀랍게도 쇼핑몰보다 클라우드가 더 큰 사업!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDailyAWSSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-cyan-900 text-center">📱 여러분이 매일 사용하는 AWS 서비스들</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-pink-500" />
              <h4 className="font-bold text-lg mb-3">소셜미디어</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-pink-50 rounded">인스타그램</div>
                <div className="p-2 bg-pink-50 rounded">디스코드</div>
                <div className="p-2 bg-pink-50 rounded">카카오톡</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h4 className="font-bold text-lg mb-3">게임</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-green-50 rounded">포트나이트</div>
                <div className="p-2 bg-green-50 rounded">마인크래프트</div>
                <div className="p-2 bg-green-50 rounded">배틀그라운드</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <Play className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h4 className="font-bold text-lg mb-3">엔터테인먼트</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-red-50 rounded">넷플릭스</div>
                <div className="p-2 bg-red-50 rounded">디즈니+</div>
                <div className="p-2 bg-red-50 rounded">트위치</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <Building className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h4 className="font-bold text-lg mb-3">생활 서비스</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-blue-50 rounded">쿠팡</div>
                <div className="p-2 bg-blue-50 rounded">배달의민족</div>
                <div className="p-2 bg-blue-50 rounded">카카오맵</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold mb-6 text-center">🌟 재미있는 사실들</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/20 p-4 rounded-lg">
                <h5 className="font-bold mb-2">📺 넷플릭스</h5>
                <p className="text-sm">전체 스트리밍의 99%가 AWS에서 처리됨</p>
              </div>
              
              <div className="bg-white/20 p-4 rounded-lg">
                <h5 className="font-bold mb-2">🎮 포트나이트</h5>
                <p className="text-sm">전 세계 4억 명이 동시에 게임 가능</p>
              </div>
              
              <div className="bg-white/20 p-4 rounded-lg">
                <h5 className="font-bold mb-2">🚀 NASA</h5>
                <p className="text-sm">우주선 데이터도 AWS에서 분석</p>
              </div>
              
              <div className="bg-white/20 p-4 rounded-lg">
                <h5 className="font-bold mb-2">🏎️ F1 레이싱</h5>
                <p className="text-sm">실시간 경기 데이터 분석</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderEC2IntroSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-orange-900 text-center">💻 EC2 - 클라우드 컴퓨터</h3>
          
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <div className="text-center mb-6">
              <Cpu className="w-16 h-16 mx-auto mb-4 text-orange-500" />
              <h4 className="text-2xl font-bold">EC2란?</h4>
              <p className="text-lg text-gray-600">Elastic Compute Cloud</p>
              <p className="text-lg">"탄력적인 컴퓨팅 클라우드"</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-6 rounded-lg">
              <p className="text-xl text-center font-medium">
                언제든지 필요한 만큼<br/>
                컴퓨터를 빌려 쓸 수 있는 서비스
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h4 className="font-bold text-lg mb-2">저렴한 비용</h4>
              <p className="text-3xl font-bold text-green-600 mb-2">시간당 100원</p>
              <p className="text-sm text-gray-600">고사양 게임용 PC: 200-300만원<br/>vs EC2: 필요할 때만 사용</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h4 className="font-bold text-lg mb-2">즉시 사용</h4>
              <p className="text-lg font-bold text-blue-600 mb-2">클릭 몇 번</p>
              <p className="text-sm text-gray-600">몇 분 안에 전 세계<br/>어디든 컴퓨터 생성</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h4 className="font-bold text-lg mb-2">무한 확장</h4>
              <p className="text-lg font-bold text-purple-600 mb-2">필요에 따라</p>
              <p className="text-sm text-gray-600">1대에서 1000대까지<br/>자동으로 확장 가능</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderEC2DemoSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-emerald-50 to-green-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-emerald-900 text-center">🎯 EC2 실제 활용 사례</h3>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Gamepad2 className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">케이스 1: 고등학생 게임 개발자</h4>
                  <p className="text-gray-600">민수(고2) - 친구들과 멀티플레이 게임 제작</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h5 className="font-bold text-red-800 mb-2">😰 문제</h5>
                  <p className="text-sm">집 컴퓨터로는 서버 역할 불가능</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-bold text-green-800 mb-2">✅ 해결</h5>
                  <p className="text-sm">EC2로 게임 서버 구축</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-bold text-blue-800 mb-2">🎉 결과</h5>
                  <p className="text-sm">전국 고등학생 50명이 동시 플레이!</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg text-center">
                <p className="font-bold">비용: 한 달에 1만원 정도</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">케이스 2: 유튜버의 영상 편집</h4>
                  <p className="text-gray-600">지은(고3) - 4K 영상 편집 유튜버</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h5 className="font-bold text-red-800 mb-2">😰 문제</h5>
                  <p className="text-sm">집 컴퓨터로 렌더링 5시간 소요</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-bold text-green-800 mb-2">✅ 해결</h5>
                  <p className="text-sm">고성능 EC2 빌려서 편집</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-bold text-blue-800 mb-2">🎉 결과</h5>
                  <p className="text-sm">30분 만에 렌더링 완료!</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-center">
                <p className="font-bold">비용: 한 번에 3,000원</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-center">🚀 EC2로 할 수 있는 더 많은 것들</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>개인 웹사이트 호스팅</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>데이터베이스 서버</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>AI 모델 학습</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>파일 변환 서비스</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>백업 서버</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>실시간 채팅 서버</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderS3IntroSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-blue-900 text-center">📦 S3 - 무제한 저장소</h3>
          
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <div className="text-center mb-6">
              <HardDrive className="w-16 h-16 mx-auto mb-4 text-blue-500" />
              <h4 className="text-2xl font-bold">S3란?</h4>
              <p className="text-lg text-gray-600">Simple Storage Service</p>
              <p className="text-lg">"간단한 저장 서비스"</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg">
              <p className="text-xl text-center font-medium">
                파일을 무제한으로 저장할 수 있는<br/>
                전 세계적인 저장 공간
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">∞</div>
              <h4 className="font-bold text-lg mb-2">무제한 용량</h4>
              <p className="text-sm text-gray-600">1TB든 1PB든 상관없음</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-bold text-lg mb-2">99.999999999%</h4>
              <p className="text-sm text-gray-600">파일 손실 확률 거의 0%</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-bold text-lg mb-2">전 세계 접근</h4>
              <p className="text-sm text-gray-600">어디서든 빠른 다운로드</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="font-bold text-lg mb-2">GB당 월 25원</h4>
              <p className="text-sm text-gray-600">매우 저렴한 비용</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-center">📱 휴대폰 용량 부족 해결!</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/20 p-4 rounded-lg">
                <h5 className="font-bold mb-2">😰 기존 방식</h5>
                <ul className="text-sm space-y-1">
                  <li>• 휴대폰 용량 부족</li>
                  <li>• 소중한 사진 삭제</li>
                  <li>• 앱 설치 못함</li>
                  <li>• 외장 메모리 구매</li>
                </ul>
              </div>
              
              <div className="bg-white/20 p-4 rounded-lg">
                <h5 className="font-bold mb-2">✅ S3 사용</h5>
                <ul className="text-sm space-y-1">
                  <li>• 자동 백업</li>
                  <li>• 무제한 저장</li>
                  <li>• 어디서든 접근</li>
                  <li>• 저렴한 비용</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderS3CasesSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-pink-900 text-center">🎯 S3 실제 활용 사례</h3>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Camera className="w-12 h-12 text-pink-500" />
                <div>
                  <h4 className="text-xl font-bold">사진 작가의 포트폴리오</h4>
                  <p className="text-gray-600">웨딩, 돌잔치, 이벤트 사진 관리</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-4 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-pink-600">1TB</div>
                    <div className="text-sm">웨딩 사진 원본</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-600">언제든</div>
                    <div className="text-sm">고객 다운로드</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-600">안전</div>
                    <div className="text-sm">실수로 삭제해도 복구</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="w-12 h-12 text-blue-500" />
                <div>
                  <h4 className="text-xl font-bold">웹툰 작가의 작품 보관</h4>
                  <p className="text-gray-600">원본 파일부터 완성작까지</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">여러 플랫폼</div>
                    <div className="text-sm">네이버, 카카오 동시 서비스</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">백업 걱정</div>
                    <div className="text-sm">없음</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">협업</div>
                    <div className="text-sm">편집자와 파일 공유</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Smartphone className="w-12 h-12 text-green-500" />
                <div>
                  <h4 className="text-xl font-bold">고등학생의 일상 활용</h4>
                  <p className="text-gray-600">학교 생활부터 취미까지</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-bold text-green-800 mb-2">📚 학습 자료</h5>
                  <ul className="text-sm space-y-1">
                    <li>• 과제 및 프로젝트 파일</li>
                    <li>• 수업 녹음 파일</li>
                    <li>• 시험 자료 백업</li>
                    <li>• 포트폴리오 작성</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-bold text-green-800 mb-2">🎨 개인 활동</h5>
                  <ul className="text-sm space-y-1">
                    <li>• 개인 홈페이지 호스팅</li>
                    <li>• 사진/영상 백업</li>
                    <li>• 음악 파일 저장</li>
                    <li>• 친구들과 파일 공유</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderRDSSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-teal-900 text-center">🗄️ RDS - 관리형 데이터베이스</h3>
          
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <div className="text-center mb-6">
              <Database className="w-16 h-16 mx-auto mb-4 text-teal-500" />
              <h4 className="text-2xl font-bold">데이터베이스란?</h4>
              <p className="text-lg text-gray-600">정리된 데이터 창고</p>
            </div>
            
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-lg">
              <h5 className="text-lg font-bold mb-4 text-center">🏫 학교 학생 정보 관리 예시</h5>
              <div className="grid md:grid-cols-5 gap-4 text-center text-sm">
                <div className="bg-white/20 p-2 rounded">이름</div>
                <div className="bg-white/20 p-2 rounded">학번</div>
                <div className="bg-white/20 p-2 rounded">반</div>
                <div className="bg-white/20 p-2 rounded">성적</div>
                <div className="bg-white/20 p-2 rounded">연락처</div>
              </div>
              <p className="text-center mt-4">체계적으로 저장하고 빠르게 검색!</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-teal-800">😰 기존 데이터베이스 관리</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <span className="text-sm">복잡한 설치 과정</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <span className="text-sm">수동 백업 필요</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <span className="text-sm">보안 설정 어려움</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <span className="text-sm">업데이트 수동 진행</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-teal-800">✅ RDS 관리형 서비스</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-sm">클릭 몇 번으로 설치</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-sm">자동 백업</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-sm">보안 자동 설정</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-sm">자동 업데이트</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-center">🎯 RDS 실제 활용 사례</h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/20 p-4 rounded-lg text-center">
                <Building className="w-8 h-8 mx-auto mb-2" />
                <h5 className="font-bold mb-2">쇼핑몰</h5>
                <p className="text-sm">상품 정보, 주문 내역, 고객 정보</p>
              </div>
              
              <div className="bg-white/20 p-4 rounded-lg text-center">
                <Gamepad2 className="w-8 h-8 mx-auto mb-2" />
                <h5 className="font-bold mb-2">게임</h5>
                <p className="text-sm">사용자 레벨, 아이템, 랭킹</p>
              </div>
              
              <div className="bg-white/20 p-4 rounded-lg text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-2" />
                <h5 className="font-bold mb-2">학교</h5>
                <p className="text-sm">학생 정보, 성적, 시간표</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAIServicesSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-purple-50 to-violet-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-purple-900 text-center">🧠 AWS AI 서비스</h3>
          
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl shadow-lg mb-8">
            <div className="text-center mb-6">
              <Brain className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-bold">누구나 사용할 수 있는 AI</h4>
              <p className="text-lg opacity-90">코딩 없이도 인공지능 활용!</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <Camera className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                <h4 className="text-xl font-bold">Amazon Rekognition</h4>
                <p className="text-gray-600">이미지 분석</p>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-800">얼굴 인식</div>
                  <div className="text-sm text-blue-600">사진 속 인물 자동 인식</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-800">감정 분석</div>
                  <div className="text-sm text-blue-600">웃고 있는지, 화나있는지 판단</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-800">텍스트 추출</div>
                  <div className="text-sm text-blue-600">간판이나 문서의 글자 읽기</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <Globe className="w-12 h-12 mx-auto mb-3 text-green-500" />
                <h4 className="text-xl font-bold">Amazon Translate</h4>
                <p className="text-gray-600">실시간 번역</p>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium text-green-800">75개 언어</div>
                  <div className="text-sm text-green-600">전 세계 주요 언어 지원</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium text-green-800">실시간 번역</div>
                  <div className="text-sm text-green-600">채팅하면서 즉시 번역</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium text-green-800">문서 번역</div>
                  <div className="text-sm text-green-600">긴 글도 한 번에 번역</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <Music className="w-12 h-12 mx-auto mb-3 text-purple-500" />
                <h4 className="text-xl font-bold">Amazon Polly</h4>
                <p className="text-gray-600">음성 합성</p>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="font-medium text-purple-800">자연스러운 음성</div>
                  <div className="text-sm text-purple-600">사람처럼 자연스럽게 읽기</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="font-medium text-purple-800">다양한 목소리</div>
                  <div className="text-sm text-purple-600">남성, 여성, 연령대별 선택</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="font-medium text-purple-800">실시간 변환</div>
                  <div className="text-sm text-purple-600">텍스트 입력하면 즉시 음성</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold mb-6 text-center">🚀 고등학생 활용 아이디어</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">📱 외국인 친구와 소통</h5>
                  <p className="text-sm">실시간 번역으로 언어 장벽 없이 채팅</p>
                </div>
                
                <div className="bg-white/20 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">📸 인스타그램 자동 태그</h5>
                  <p className="text-sm">사진 속 내용을 AI가 분석해서 자동 해시태그</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">🎬 유튜브 자막 생성</h5>
                  <p className="text-sm">음성을 텍스트로 변환해서 자막 제작</p>
                </div>
                
                <div className="bg-white/20 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">📚 읽어주는 교과서</h5>
                  <p className="text-sm">교과서 내용을 음성으로 변환해서 듣기</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderNewCareersSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-yellow-50 to-amber-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-yellow-900 text-center">🆕 클라우드가 만든 새로운 직업들</h3>
          
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-xl shadow-lg mb-8">
            <div className="text-center">
              <Trophy className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-4">완전히 새로운 직업 분야</h4>
              <p className="text-lg">10년 전에는 존재하지 않았던 직업들이 지금은 가장 인기!</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <Building className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                <h4 className="text-xl font-bold">클라우드 아키텍트</h4>
                <Badge className="bg-green-500">연봉 7,000만원 ~ 1억</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-bold text-blue-800 mb-2">주요 업무</h5>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• 기업의 클라우드 시스템 설계</li>
                    <li>• "우리 회사를 어떻게 클라우드로 옮길까?" 계획</li>
                    <li>• 비용 효율적인 클라우드 구조 제안</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-bold mb-2">필요한 능력</h5>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>기술 지식 + 비즈니스 감각</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>의사소통 능력</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>문제 해결 능력</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <Code className="w-12 h-12 mx-auto mb-3 text-purple-500" />
                <h4 className="text-xl font-bold">DevOps 엔지니어</h4>
                <Badge className="bg-green-500">연봉 5,000만원 ~ 8,000만원</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h5 className="font-bold text-purple-800 mb-2">주요 업무</h5>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• 개발자와 운영자 사이의 다리 역할</li>
                    <li>• 코드 배포 자동화</li>
                    <li>• 시스템 모니터링</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-bold mb-2">매력 포인트</h5>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>개발도 하고 인프라도 관리</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>다양한 기술 경험</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>빠른 성장</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <Database className="w-12 h-12 mx-auto mb-3 text-green-500" />
                <h4 className="text-xl font-bold">데이터 엔지니어</h4>
                <Badge className="bg-green-500">연봉 6,000만원 ~ 9,000만원</Badge>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-bold text-green-800 mb-2">핫한 이유</h5>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 빅데이터 시대의 핵심 인재</li>
                  <li>• AI/ML 모델을 위한 데이터 준비</li>
                  <li>• 모든 회사가 데이터 분석 필요</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <Shield className="w-12 h-12 mx-auto mb-3 text-red-500" />
                <h4 className="text-xl font-bold">클라우드 보안 전문가</h4>
                <Badge className="bg-green-500">연봉 6,000만원 ~ 1억</Badge>
              </div>
              
              <div className="p-4 bg-red-50 rounded-lg">
                <h5 className="font-bold text-red-800 mb-2">미래 전망</h5>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 해킹 위협 증가로 수요 급증</li>
                  <li>• 모든 클라우드 시스템에 필수</li>
                  <li>• 정년까지 안정적인 직업</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCareerPathsSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-green-50 to-teal-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-green-900 text-center">🎯 구체적인 진로 가이드</h3>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">기술 중심 진로</h4>
                    <p className="text-gray-600">코딩과 기술을 좋아하는 학생</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium text-blue-800">클라우드 개발자</div>
                    <div className="text-sm text-blue-600">AWS 서비스를 활용한 애플리케이션 개발</div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium text-blue-800">솔루션 아키텍트</div>
                    <div className="text-sm text-blue-600">기업의 클라우드 솔루션 설계</div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium text-blue-800">클라우드 보안 엔지니어</div>
                    <div className="text-sm text-blue-600">클라우드 환경의 보안 구축</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">비즈니스 중심 진로</h4>
                    <p className="text-gray-600">소통과 경영을 좋아하는 학생</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-800">클라우드 세일즈</div>
                    <div className="text-sm text-green-600">기업에 클라우드 솔루션 제안</div>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-800">클라우드 컨설턴트</div>
                    <div className="text-sm text-green-600">클라우드 도입 전략 수립</div>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-800">프로덕트 매니저</div>
                    <div className="text-sm text-green-600">클라우드 제품 기획 및 관리</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-center">💰 연봉 정보 (경력 3-5년 기준)</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                    <span>클라우드 아키텍트</span>
                    <span className="font-bold">7,000만원 ~ 1억+</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                    <span>데이터 엔지니어</span>
                    <span className="font-bold">6,000만원 ~ 9,000만원</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                    <span>DevOps 엔지니어</span>
                    <span className="font-bold">5,000만원 ~ 8,000만원</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                    <span>클라우드 보안 전문가</span>
                    <span className="font-bold">6,000만원 ~ 1억+</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-400 text-yellow-900 rounded-lg text-center">
                  <p className="font-bold">💡 참고: 신입도 4,000-5,000만원부터 시작!</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold mb-4">🏢 주요 취업처</h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <h5 className="font-medium text-gray-800">대기업</h5>
                    <p className="text-sm text-gray-600">삼성, LG, 현대</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <h5 className="font-medium text-gray-800">IT 기업</h5>
                    <p className="text-sm text-gray-600">네이버, 카카오, 쿠팡</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <h5 className="font-medium text-gray-800">스타트업</h5>
                    <p className="text-sm text-gray-600">토스, 당근마켓, 직방</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg text-center">
                    <h5 className="font-medium text-gray-800">외국계</h5>
                    <p className="text-sm text-gray-600">AWS, 구글, 마이크로소프트</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold mb-6 text-center">🚀 성공하는 사람들의 특징</h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lightbulb className="w-12 h-12 mx-auto mb-3" />
                <h5 className="font-bold mb-2">호기심이 많음</h5>
                <p className="text-sm opacity-90">새로운 기술에 관심이 많고 계속 학습</p>
              </div>
              
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-3" />
                <h5 className="font-bold mb-2">소통을 잘함</h5>
                <p className="text-sm opacity-90">기술을 비전문가에게도 쉽게 설명</p>
              </div>
              
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-3" />
                <h5 className="font-bold mb-2">문제 해결 지향</h5>
                <p className="text-sm opacity-90">복잡한 문제를 차근차근 해결</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStudentActionSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-indigo-900 text-center">📚 고등학생 실천 방안</h3>
          
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-lg mb-8">
            <div className="text-center">
              <BookOpen className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-4">🎯 지금 당장 시작할 수 있는 것들</h4>
              <p className="text-lg">클라우드 전문가가 되는 첫걸음을 내디뎌 보세요!</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">1. AWS 프리티어 시작하기</h4>
                    <Badge className="bg-green-500 text-white">무료 1년</Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">✅ 할 수 있는 것들</h5>
                    <ul className="text-sm space-y-1">
                      <li>• EC2 인스턴스로 개인 서버 만들기</li>
                      <li>• S3로 개인 웹사이트 호스팅</li>
                      <li>• RDS로 간단한 데이터베이스 구축</li>
                      <li>• AI 서비스로 재미있는 프로젝트</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <h5 className="font-bold text-yellow-800 mb-2">⚠️ 주의사항</h5>
                    <p className="text-sm text-yellow-700">프리티어 한도를 넘지 않도록 사용량 모니터링 필수!</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">2. 온라인 강의 수강</h4>
                    <Badge className="bg-blue-500 text-white">기초부터</Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-800">무료 강의</div>
                    <div className="text-sm text-green-600">AWS 공식 교육, 유튜브 강의</div>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-800">유료 강의</div>
                    <div className="text-sm text-green-600">인프런, 유데미 체계적 학습</div>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-800">부트캠프</div>
                    <div className="text-sm text-green-600">코드스테이츠, 패스트캠퍼스</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">3. AWS 자격증 준비</h4>
                    <Badge className="bg-purple-500 text-white">입시 도움</Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2">🥉 Cloud Practitioner</h5>
                    <ul className="text-sm space-y-1">
                      <li>• 고등학생도 충분히 합격 가능</li>
                      <li>• 클라우드 기본 개념 이해</li>
                      <li>• 대학 입시 포트폴리오에 도움</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-bold mb-2">🥈 Solutions Architect</h5>
                    <p className="text-sm text-gray-600">대학 진학 후 도전 추천</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">4. 실전 프로젝트</h4>
                    <Badge className="bg-orange-500 text-white">포트폴리오</Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="font-medium text-orange-800">개인 프로젝트</div>
                    <div className="text-sm text-orange-600">블로그, 포트폴리오 사이트</div>
                  </div>
                  
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="font-medium text-orange-800">팀 프로젝트</div>
                    <div className="text-sm text-orange-600">친구들과 앱/게임 개발</div>
                  </div>
                  
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="font-medium text-orange-800">공모전 참가</div>
                    <div className="text-sm text-orange-600">AWS 관련 대회 도전</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold mb-6 text-center">🌟 실제 고등학생 성공 사례</h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h5 className="font-bold mb-2">17세 앱 개발자</h5>
                <p className="text-sm opacity-90">AWS로 만든 앱이 전 세계 10만 다운로드</p>
              </div>
              
              <div className="bg-white/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h5 className="font-bold mb-2">고3 수험생</h5>
                <p className="text-sm opacity-90">AWS 자격증으로 대기업 조기 취업</p>
              </div>
              
              <div className="bg-white/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎮</div>
                <h5 className="font-bold mb-2">동아리 프로젝트</h5>
                <p className="text-sm opacity-90">AWS로 만든 게임에 1만 명 동시 접속</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecuritySection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-red-900 text-center">🔒 클라우드 보안 기본 원칙</h3>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-xl shadow-lg mb-8">
            <div className="text-center">
              <Shield className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-4">보안은 선택이 아닌 필수!</h4>
              <p className="text-lg">클라우드의 편리함을 안전하게 누리는 방법</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-6 text-green-800 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                ✅ 좋은 보안 습관
              </h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-bold text-green-800 mb-2">🔐 강력한 비밀번호</h5>
                  <div className="space-y-2 text-sm">
                    <div className="p-2 bg-white rounded">
                      <span className="font-mono text-green-700">MyAw3som3P@ssw0rd2025!</span>
                    </div>
                    <ul className="text-green-700 space-y-1">
                      <li>• 대문자 + 소문자 + 숫자 + 특수문자</li>
                      <li>• 최소 12자리 이상</li>
                      <li>• 개인정보 사용 금지</li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-bold text-green-800 mb-2">🛡️ 2단계 인증 (2FA)</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 비밀번호 + 휴대폰 인증</li>
                    <li>• 해커가 비밀번호를 알아도 뚫기 어려움</li>
                    <li>• 모든 중요한 계정에 설정 필수</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-bold text-green-800 mb-2">👥 최소 권한 원칙</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 필요한 최소한의 권한만 부여</li>
                    <li>• 정기적인 권한 점검</li>
                    <li>• 사용하지 않는 계정 비활성화</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-6 text-red-800 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                ❌ 피해야 할 실수
              </h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-bold text-red-800 mb-2">😱 약한 비밀번호</h5>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-red-100 rounded text-red-700">password123</div>
                      <div className="p-2 bg-red-100 rounded text-red-700">생일 (1234)</div>
                      <div className="p-2 bg-red-100 rounded text-red-700">전화번호</div>
                      <div className="p-2 bg-red-100 rounded text-red-700">qwerty</div>
                    </div>
                    <p className="text-red-700">⚠️ 해커가 몇 초 만에 뚫을 수 있음!</p>
                  </div>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-bold text-red-800 mb-2">🤝 계정 공유</h5>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• 친구와 AWS 계정 공유 금지</li>
                    <li>• 가족과도 개별 계정 사용</li>
                    <li>• 그룹 프로젝트도 개별 계정으로</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-bold text-red-800 mb-2">🚫 보안 업데이트 무시</h5>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• "나중에" 하다가 해킹당함</li>
                    <li>• 보안 패치는 즉시 적용</li>
                    <li>• 자동 업데이트 설정 권장</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold mb-6 text-center">🛠️ 추천 보안 도구</h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 p-6 rounded-lg text-center">
                <Lock className="w-12 h-12 mx-auto mb-3" />
                <h5 className="font-bold mb-2">비밀번호 관리자</h5>
                <p className="text-sm opacity-90">1Password, LastPass<br/>강력한 비밀번호 자동 생성</p>
              </div>
              
              <div className="bg-white/20 p-6 rounded-lg text-center">
                <Smartphone className="w-12 h-12 mx-auto mb-3" />
                <h5 className="font-bold mb-2">2FA 앱</h5>
                <p className="text-sm opacity-90">Google Authenticator<br/>Authy 등 활용</p>
              </div>
              
              <div className="bg-white/20 p-6 rounded-lg text-center">
                <Shield className="w-12 h-12 mx-auto mb-3" />
                <h5 className="font-bold mb-2">AWS 보안 도구</h5>
                <p className="text-sm opacity-90">CloudWatch 모니터링<br/>보안 그룹 설정</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCostManagementSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-emerald-50 to-green-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-emerald-900 text-center">💰 현명한 클라우드 비용 관리</h3>
          
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 rounded-xl shadow-lg mb-8">
            <div className="text-center">
              <DollarSign className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-4">클라우드의 가장 큰 장점</h4>
              <p className="text-xl">"사용한 만큼만 지불"</p>
              <p className="text-lg opacity-90">하지만 잘못 쓰면 큰 요금이 나올 수 있어요!</p>
            </div>
          </div>

          <div className="bg-yellow-100 p-6 rounded-xl shadow-lg mb-8">
            <h4 className="text-xl font-bold mb-4 text-yellow-900 text-center">⚠️ 실제 사례: 비용 폭탄</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2 text-red-600">
                  <AlertTriangle className="w-6 h-6" />
                  <h5 className="font-bold">문제 상황</h5>
                </div>
                <p className="text-sm text-gray-700">
                  대학생이 실습용 서버를 끄는 것을 깜빡해서
                  한 달 후 <span className="font-bold text-red-600">30만원 요금</span>이 청구됨
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2 text-green-600">
                  <CheckCircle className="w-6 h-6" />
                  <h5 className="font-bold">해결</h5>
                </div>
                <p className="text-sm text-gray-700">
                  AWS 고객 서비스에 문의해서
                  <span className="font-bold text-green-600">50% 할인</span>을 받아 해결함
                </p>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-yellow-200 rounded-lg text-center">
              <p className="text-yellow-800 font-medium">
                예방이 최선! 과금 폭탄은 미리 방지하세요! 💸➡️💰
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h4 className="text-xl font-bold mb-4">1. 프리티어 한도 확인</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg text-left">
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>무료 사용량 초과 알림 설정</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>매주 사용량 확인</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>프리티어 종료일 달력에 표시</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <p className="text-sm text-green-700 font-medium">
                    AWS 콘솔에서 "Billing" 메뉴 확인
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <HardDrive className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h4 className="text-xl font-bold mb-4">2. 리소스 정리</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg text-left">
                  <ul className="text-sm text-purple-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>실습 후 EC2 서버 종료</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>미사용 저장소(EBS) 삭제</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>자동 종료 스케줄링 설정</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <p className="text-sm text-green-700 font-medium">
                    "작업이 끝난 후 습관적으로 서버 확인"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Bell className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h4 className="text-xl font-bold mb-4">3. 예산 알림 설정</h4>
              
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg text-left">
                  <ul className="text-sm text-orange-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>"한 달에 1만원 이상 쓰면 알림" 설정</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>이메일, 문자 알림 활성화</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>AWS Cost Explorer로 비용 분석</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg text-center">
                  <p className="text-sm text-green-700 font-medium">
                    "AWS Budgets"에서 쉽게 설정
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderLearningRoadmapSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-3xl font-bold mb-8 text-blue-900 text-center">🗺️ 앞으로의 학습 로드맵</h3>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg mb-8">
            <div className="text-center">
              <Target className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-4">단계별 성장 계획</h4>
              <p className="text-lg">클라우드 전문가로 성장하는 여정을 시작해보세요!</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">1</div>
                <div>
                  <h4 className="text-2xl font-bold text-blue-800">1단계 (1-2개월): 기초 다지기</h4>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">📚 학습</h5>
                    <ul className="text-sm text-blue-700 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>AWS 개념 이해하기</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>AWS 프리티어 계정 생성</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>기본 서비스 공부 (EC2, S3, RDS)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">🔍 추천 자료</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• AWS 공식 가이드</li>
                      <li>• 유튜브 "생활코딩" 채널</li>
                      <li>• 인프런 "AWS 입문" 강의</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2">👨‍💻 실습</h5>
                    <ul className="text-sm text-purple-700 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>EC2로 웹서버 직접 만들기</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>S3로 개인 웹사이트 만들기</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>AI 서비스 체험해보기</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h5 className="font-bold text-yellow-800 mb-2">🎯 목표</h5>
                    <p className="text-sm text-yellow-700">
                      AWS 기본 서비스의 사용법 익히고<br/>
                      간단한 프로젝트 하나 완성하기
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600">2</div>
                <div>
                  <h4 className="text-2xl font-bold text-green-800">2단계 (3-6개월): 실전 프로젝트</h4>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">🚀 도전</h5>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>개인 웹사이트 구축 및 배포</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>친구들과 협업 프로젝트</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>자격증 공부 시작</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">📚 심화 학습</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• AWS 네트워킹 개념</li>
                      <li>• 보안 관련 서비스</li>
                      <li>• 데이터베이스 서비스</li>
                      <li>• 서버리스 컴퓨팅</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2">🏆 자격증</h5>
                    <ul className="text-sm text-purple-700 space-y-2">
                      <li className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span>AWS Cloud Practitioner</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Book className="w-4 h-4" />
                        <span>시험 준비 교재 구매</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        <span>모의시험 풀어보기</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h5 className="font-bold text-yellow-800 mb-2">🎯 목표</h5>
                    <p className="text-sm text-yellow-700">
                      포트폴리오용 실제 프로젝트 완성<br/>
                      첫 번째 AWS 자격증 취득하기
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600">3</div>
                <div>
                  <h4 className="text-2xl font-bold text-purple-800">3단계 (6개월 이후): 전문가 되기</h4>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2">🏅 전문성 강화</h5>
                    <ul className="text-sm text-purple-700 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>고급 AWS 자격증 도전</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>오픈소스 프로젝트 기여</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>커뮤니티 활동 참여</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">🔍 진로 탐색</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• 클라우드 개발자</li>
                      <li>• 솔루션스 아키텍트</li>
                      <li>• DevOps 엔지니어</li>
                      <li>• 클라우드 보안 전문가</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">🌐 네트워크 구축</h5>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>AWS 행사 참여</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>개발자 커뮤니티 가입</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>멘토 찾기</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h5 className="font-bold text-yellow-800 mb-2">🎯 목표</h5>
                    <p className="text-sm text-yellow-700">
                      포트폴리오 완성 및 취업/진학 준비<br/>
                      클라우드 전문가로서의 입지 구축
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              🎤 클라우드 혁명 시대
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              AWS와 함께 시작하기
            </h2>
            <p className="text-xl opacity-90">고등학생을 위한 특강</p>
            
            <div className="mt-8 flex items-center justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20">
                <Users className="w-5 h-5 mr-2" />
                고등학생 대상
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20">
                <Cloud className="w-5 h-5 mr-2" />
                AWS 입문
              </Badge>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Button
                  key={section.id}
                  variant={currentSection === index ? "secondary" : "outline"}
                  className={`p-4 h-auto flex flex-col items-center gap-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 ${
                    currentSection === index ? 'bg-white text-purple-600 shadow-xl scale-110' : 'text-white'
                  }`}
                  onClick={() => setCurrentSection(index)}
                >
                  <IconComponent className="w-6 h-6" />
                  <div className="text-center">
                    <div className="font-semibold text-sm line-clamp-1">{section.title}</div>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        {renderSection()}
        
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            이전 섹션
          </Button>
          
          <Button
            variant="default"
            size="lg"
            onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
            disabled={currentSection === sections.length - 1}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-transform"
          >
            다음 섹션
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">🚀 지금 바로 시작하세요!</h3>
          <p className="text-lg mb-6">
            AWS 프리티어로 1년간 무료로 클라우드를 경험해보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-transform">
              AWS 프리티어 시작하기
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 hover:scale-105 transition-transform">
              온라인 강의 찾아보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
