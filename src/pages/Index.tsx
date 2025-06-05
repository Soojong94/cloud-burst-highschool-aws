
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
  Clock,
  Target
} from 'lucide-react';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: 'intro',
      title: 'Hello Cloud World',
      duration: '15분',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      description: '왜 클라우드인가?'
    },
    {
      id: 'aws-intro',
      title: 'Hello AWS World',
      duration: '20분',
      icon: Globe,
      color: 'from-orange-500 to-yellow-500',
      description: '아마존이 만든 클라우드 세상'
    },
    {
      id: 'aws-services',
      title: 'In the AWS World',
      duration: '40분',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      description: 'AWS로 할 수 있는 것들'
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      duration: '5분',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      description: '안전하고 현명한 클라우드 사용법'
    },
    {
      id: 'qa',
      title: 'Q&A & Wrap-up',
      duration: '15분',
      icon: Users,
      color: 'from-indigo-500 to-blue-500',
      description: '질문과 정리'
    }
  ];

  const cloudBenefits = [
    {
      icon: Cpu,
      title: 'EC2 - 컴퓨팅',
      description: '시간당 100원부터 컴퓨터 대여',
      example: '게임 서버, 영상 편집'
    },
    {
      icon: HardDrive,
      title: 'S3 - 저장소',
      description: '무제한 파일 저장 공간',
      example: '사진 백업, 웹사이트 호스팅'
    },
    {
      icon: Database,
      title: 'RDS - 데이터베이스',
      description: '자동 관리되는 데이터 창고',
      example: '쇼핑몰, 게임 데이터'
    },
    {
      icon: Brain,
      title: 'AI/ML 서비스',
      description: '누구나 쓸 수 있는 인공지능',
      example: '이미지 분석, 번역, 음성 변환'
    }
  ];

  const careerPaths = [
    {
      title: '클라우드 아키텍트',
      salary: '7,000만원 ~ 1억',
      description: '기업의 클라우드 시스템 설계'
    },
    {
      title: 'DevOps 엔지니어',
      salary: '5,000만원 ~ 8,000만원',
      description: '개발과 운영의 다리 역할'
    },
    {
      title: '데이터 엔지니어',
      salary: '6,000만원 ~ 9,000만원',
      description: '빅데이터 클라우드 처리'
    },
    {
      title: '클라우드 보안 전문가',
      salary: '6,000만원 ~ 1억',
      description: '클라우드 환경 보안 담당'
    }
  ];

  const successStories = [
    {
      platform: '인스타그램',
      usage: '사진 저장, 처리',
      users: '20억 명'
    },
    {
      platform: '넷플릭스',
      usage: '영상 스트리밍 99%',
      users: '2억 3천만 명'
    },
    {
      platform: '포트나이트',
      usage: '실시간 대전',
      users: '4억 명'
    },
    {
      platform: '쿠팡',
      usage: '하루 배송 시스템',
      users: '한국 대표 이커머스'
    }
  ];

  const renderSection = () => {
    const section = sections[currentSection];
    const IconComponent = section.icon;

    return (
      <div className="space-y-8">
        {/* Section Header */}
        <div className={`bg-gradient-to-r ${section.color} p-8 rounded-2xl text-white`}>
          <div className="flex items-center gap-4 mb-4">
            <IconComponent className="w-12 h-12" />
            <div>
              <h2 className="text-3xl font-bold">{section.title}</h2>
              <p className="text-xl opacity-90">{section.description}</p>
            </div>
            <div className="ml-auto">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                {section.duration}
              </Badge>
            </div>
          </div>
        </div>

        {/* Section Content */}
        {currentSection === 0 && renderIntroSection()}
        {currentSection === 1 && renderAWSIntroSection()}
        {currentSection === 2 && renderAWSServicesSection()}
        {currentSection === 3 && renderBestPracticesSection()}
        {currentSection === 4 && renderQASection()}
      </div>
    );
  };

  const renderIntroSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
        <CardContent className="p-0">
          <h3 className="text-2xl font-bold mb-6 text-blue-900">🤔 여러분의 일상 속 클라우드</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="font-semibold text-lg mb-2">1990년대 - 부모님 세대</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 필름 카메라 → 현상소</li>
                <li>• CD/테이프로 음악</li>
                <li>• 플로피 디스크 숙제</li>
                <li>• 집 전화/삐삐</li>
              </ul>
              <div className="mt-4 text-red-500 font-medium">
                💥 디스크 잃어버리면 숙제 날라감!
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">💾</div>
              <h4 className="font-semibold text-lg mb-2">2000년대 - 형/누나 세대</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 디지털카메라 → 컴퓨터</li>
                <li>• MP3 다운로드</li>
                <li>• USB 저장</li>
                <li>• 문자/싸이월드</li>
              </ul>
              <div className="mt-4 text-red-500 font-medium">
                💥 USB 잃어버리면 또 날라감!
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl shadow-sm border-2 border-green-300">
              <div className="text-4xl mb-4">☁️</div>
              <h4 className="font-semibold text-lg mb-2">2025년 - 여러분 세대</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 구글 포토 자동 백업</li>
                <li>• 스포티파이/유튜브 뮤직</li>
                <li>• 구글 드라이브 실시간 동기화</li>
                <li>• 카톡/인스타/디스코드</li>
              </ul>
              <div className="mt-4 text-green-600 font-medium">
                ✅ 폰을 잃어버려도 괜찮아!
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4">💡 클라우드란?</h4>
            <p className="text-lg mb-4">
              "인터넷 어딘가에 있는 거대한 컴퓨터를 빌려 쓰는 것"
            </p>
            <div className="bg-white/20 p-4 rounded-lg">
              <p className="font-medium">넷플릭스 예시:</p>
              <p className="text-sm mt-2">
                📱 여러분: 재생 버튼만 클릭<br/>
                🌏 실제 영상: 전 세계 서버에 저장<br/>
                ⚡ 결과: 끊김 없는 HD 스트리밍!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAWSIntroSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-orange-50 to-yellow-50 border-0">
        <CardContent className="p-0">
          <h3 className="text-2xl font-bold mb-6 text-orange-900">🏛️ 아마존의 놀라운 변신 스토리</h3>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">1994년 - 온라인 서점</h4>
                    <p className="text-gray-600">시애틀 차고에서 책 판매 시작</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">1990년대 말 - 종합몰</h4>
                    <p className="text-gray-600">옷, 전자제품 등 확장</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">2000년대 초 - 위기</h4>
                    <p className="text-gray-600">서버 다운, 크리스마스 먹통</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">2006년 - AWS 탄생!</h4>
                    <p className="opacity-90">"남는 서버 빌려줄까?"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-6">📊 현재 AWS 위상</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">32%</div>
                  <div className="text-blue-100">전 세계 클라우드 시장 점유율 1위</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">120조원</div>
                  <div className="text-blue-100">연간 매출 (900억 달러)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">102개</div>
                  <div className="text-blue-100">전 세계 가용 영역</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">수백만</div>
                  <div className="text-blue-100">사용 기업 수</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="p-8 bg-gray-50 border-0">
        <CardContent className="p-0">
          <h3 className="text-2xl font-bold mb-6">🏢 여러분이 매일 쓰는 AWS 서비스들</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h4 className="font-bold text-lg mb-2">{story.platform}</h4>
                <p className="text-sm text-gray-600 mb-2">{story.usage}</p>
                <Badge variant="secondary">{story.users}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAWSServicesSection = () => (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        {cloudBenefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 mb-3">{benefit.description}</p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">실제 활용: {benefit.example}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-0">
        <CardContent className="p-0">
          <h3 className="text-2xl font-bold mb-6 text-green-900">💼 새로운 직업 기회들</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {careerPaths.map((career, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                  <div>
                    <h4 className="font-bold text-lg">{career.title}</h4>
                    <Badge variant="secondary" className="text-green-600">
                      연봉 {career.salary}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600">{career.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl">
            <h4 className="font-bold text-xl mb-4">🎓 고등학생인 여러분이 지금 할 수 있는 것들</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>AWS 프리티어로 실습</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>온라인 강의 수강</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>AWS 자격증 준비</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>개인 프로젝트 진행</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderBestPracticesSection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50 border-0">
        <CardContent className="p-0">
          <h3 className="text-2xl font-bold mb-6 text-red-900">🔒 보안 기본 원칙</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-3 text-green-600">✅ 좋은 보안 습관</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 강력한 비밀번호 (MyAw3som3P@ssw0rd2025!)</li>
                  <li>• 2단계 인증 (2FA) 필수</li>
                  <li>• 최소 권한 원칙</li>
                  <li>• 정기적인 보안 점검</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-3 text-red-600">❌ 피해야 할 실수</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 약한 비밀번호 (password123, 생일)</li>
                  <li>• 계정 공유</li>
                  <li>• 과도한 권한 부여</li>
                  <li>• 보안 업데이트 무시</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-0">
        <CardContent className="p-0">
          <h3 className="text-2xl font-bold mb-6 text-orange-900">💰 비용 관리</h3>
          
          <div className="bg-yellow-100 p-6 rounded-xl mb-6">
            <h4 className="font-bold text-lg mb-3">⚠️ 실제 사례: 비용 폭탄</h4>
            <p className="text-gray-700">
              대학생이 실습용 서버 끄는 걸 깜빡해서 30만원 요금이 나왔지만, 
              AWS 고객 서비스에 문의해서 50% 할인받았어요! 💸➡️💰
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold mb-2">프리티어 한도 확인</h4>
              <p className="text-sm text-gray-600">무료 사용량 초과 알림 설정</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-3">🗑️</div>
              <h4 className="font-bold mb-2">리소스 정리</h4>
              <p className="text-sm text-gray-600">안 쓰는 서버 자동 종료</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-3">💳</div>
              <h4 className="font-bold mb-2">예산 알림</h4>
              <p className="text-sm text-gray-600">한도 초과시 자동 알림</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderQASection = () => (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
        <CardContent className="p-0">
          <h3 className="text-2xl font-bold mb-6 text-blue-900">📚 오늘 배운 것 총정리</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">☁️</div>
              <h4 className="font-bold text-lg mb-2">클라우드 혁명</h4>
              <p className="text-gray-600 text-sm">우리는 이미 클라우드 시대에 살고 있다</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="font-bold text-lg mb-2">AWS의 위력</h4>
              <p className="text-gray-600 text-sm">전 세계 인터넷의 30%를 책임지는 거대한 클라우드</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🛠️</div>
              <h4 className="font-bold text-lg mb-2">무한한 가능성</h4>
              <p className="text-gray-600 text-sm">EC2, S3, RDS, AI 서비스로 무엇이든 가능</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💼</div>
              <h4 className="font-bold text-lg mb-2">새로운 기회</h4>
              <p className="text-gray-600 text-sm">클라우드 관련 직업들의 폭발적 증가</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🎓</div>
              <h4 className="font-bold text-lg mb-2">지금 시작</h4>
              <p className="text-gray-600 text-sm">고등학생도 지금부터 준비 가능</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🔒</div>
              <h4 className="font-bold text-lg mb-2">안전한 사용</h4>
              <p className="text-gray-600 text-sm">보안과 비용 관리는 필수</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
        <CardContent className="p-0">
          <h3 className="text-2xl font-bold mb-6">🗺️ 앞으로의 학습 로드맵</h3>
          
          <div className="space-y-4">
            <div className="bg-white/20 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2">1단계 (1-2개월): 기초 다지기</h4>
              <ul className="space-y-1 opacity-90">
                <li>• AWS 프리티어 계정 생성</li>
                <li>• 기본 서비스들 (EC2, S3) 실습</li>
                <li>• 온라인 강의 수강</li>
              </ul>
            </div>
            
            <div className="bg-white/20 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2">2단계 (3-6개월): 실전 프로젝트</h4>
              <ul className="space-y-1 opacity-90">
                <li>• 개인 웹사이트 구축</li>
                <li>• 친구들과 협업 프로젝트</li>
                <li>• AWS 자격증 (Cloud Practitioner) 준비</li>
              </ul>
            </div>
            
            <div className="bg-white/20 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2">3단계 (6개월 이후): 전문가 되기</h4>
              <ul className="space-y-1 opacity-90">
                <li>• 고급 AWS 자격증 도전</li>
                <li>• 오픈소스 기여</li>
                <li>• 포트폴리오 완성 및 취업/진학 준비</li>
              </ul>
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              🎤 클라우드 혁명 시대
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              AWS와 함께 시작하기
            </h2>
            <p className="text-xl opacity-90">고등학생을 위한 90분 특강</p>
            
            <div className="mt-6 flex items-center justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Play className="w-4 h-4 mr-2" />
                총 90분
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                고등학생 대상
              </Badge>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="grid md:grid-cols-5 gap-4">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Button
                  key={section.id}
                  variant={currentSection === index ? "secondary" : "outline"}
                  className={`p-4 h-auto flex flex-col items-center gap-2 border-white/20 hover:bg-white/20 transition-all ${
                    currentSection === index ? 'bg-white text-purple-600 shadow-lg scale-105' : 'text-white'
                  }`}
                  onClick={() => setCurrentSection(index)}
                >
                  <IconComponent className="w-6 h-6" />
                  <div className="text-center">
                    <div className="font-semibold text-sm">{section.title}</div>
                    <div className="text-xs opacity-75">{section.duration}</div>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-8">
        {renderSection()}
        
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            className="flex items-center gap-2"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            이전 섹션
          </Button>
          
          <Button
            variant="default"
            size="lg"
            onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
            disabled={currentSection === sections.length - 1}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            다음 섹션
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">🚀 지금 바로 시작하세요!</h3>
          <p className="text-lg mb-6">
            AWS 프리티어로 1년간 무료로 클라우드를 경험해보세요
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              AWS 프리티어 시작하기
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              온라인 강의 찾아보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
