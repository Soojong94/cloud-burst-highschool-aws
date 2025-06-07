import { useCallback } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// 별도 함수들을 컴포넌트 외부로 분리
const showProgress = (message: string) => {
  const existing = document.getElementById('pdf-progress');
  if (existing) existing.remove();

  const progressDiv = document.createElement('div');
  progressDiv.id = 'pdf-progress';
  progressDiv.style.cssText = `
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.9); color: white; padding: 20px; border-radius: 10px;
    z-index: 10000; font-family: Arial, sans-serif; text-align: center;
    min-width: 300px;
  `;
  progressDiv.innerHTML = `
    <div style="font-size: 16px; margin-bottom: 10px;">PDF 생성 중...</div>
    <div style="font-size: 14px; color: #60A5FA;">${message}</div>
  `;
  document.body.appendChild(progressDiv);
};

const hideProgress = () => {
  const progressDiv = document.getElementById('pdf-progress');
  if (progressDiv) progressDiv.remove();
};

const captureSection = async (
  section: HTMLElement,
  pdf: jsPDF,
  pdfWidth: number,
  pdfHeight: number,
  isFirstPage: boolean
) => {
  // 스크롤을 맨 위로
  window.scrollTo(0, 0);
  section.scrollIntoView({ behavior: 'instant', block: 'start' });

  // 잠시 대기
  await new Promise(resolve => setTimeout(resolve, 300));

  try {
    const canvas = await html2canvas(section, {
      useCORS: true,
      allowTaint: true,
      scale: 1.5,
      width: section.scrollWidth,
      height: section.scrollHeight,
      backgroundColor: null,
      logging: false,
      scrollX: 0,
      scrollY: 0,
      windowWidth: 1920,
      windowHeight: 1080,
      onclone: (clonedDoc) => {
        const style = clonedDoc.createElement('style');
        style.textContent = `
          * {
            font-family: 'Noto Sans KR', 'Malgun Gothic', '맑은 고딕', system-ui, sans-serif !important;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          section {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            transform: none !important;
          }
        `;
        clonedDoc.head.appendChild(style);
      }
    });

    if (!canvas || canvas.width === 0 || canvas.height === 0) {
      console.warn('캔버스 생성 실패, 다른 방법 시도');
      return;
    }

    const imgData = canvas.toDataURL('image/png', 1.0);

    // PDF 전체 크기에 맞춰 이미지 크기 계산 (여백 없이)
    const canvasAspectRatio = canvas.width / canvas.height;
    const pdfAspectRatio = pdfWidth / pdfHeight;

    let imgWidth, imgHeight, x, y;

    if (canvasAspectRatio > pdfAspectRatio) {
      imgWidth = pdfWidth;
      imgHeight = pdfWidth / canvasAspectRatio;
      x = 0;
      y = (pdfHeight - imgHeight) / 2;
    } else {
      imgHeight = pdfHeight;
      imgWidth = pdfHeight * canvasAspectRatio;
      x = (pdfWidth - imgWidth) / 2;
      y = 0;
    }

    if (!isFirstPage) {
      pdf.addPage();
    }

    pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);

  } catch (error) {
    console.error('섹션 캡처 오류:', error);
  }
};

const captureDialogIfExists = async (
  section: HTMLElement,
  pdf: jsPDF,
  pdfWidth: number,
  pdfHeight: number,
  pageNumber: number
): Promise<boolean> => {
  try {
    // 다이얼로그 트리거 버튼 찾기
    const dialogTriggers = section.querySelectorAll('button');
    let dialogButton: HTMLButtonElement | null = null;

    for (const button of dialogTriggers) {
      const buttonText = button.textContent?.toLowerCase() || '';
      if (buttonText.includes('자세히') || buttonText.includes('상세') || buttonText.includes('더보기') || buttonText.includes('보기')) {
        dialogButton = button as HTMLButtonElement;
        break;
      }
    }

    if (!dialogButton) return false;

    // 다이얼로그 열기
    dialogButton.click();
    await new Promise(resolve => setTimeout(resolve, 500));

    // 다이얼로그 콘텐츠 찾기
    const dialogContent = document.querySelector('[role="dialog"] [class*="DialogContent"], [data-radix-dialog-content], .dialog-content');

    if (!dialogContent) {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      return false;
    }

    // 다이얼로그 내용을 임시 컨테이너로 복사
    const tempContainer = document.createElement('div');
    tempContainer.style.cssText = `
      position: fixed;
      top: -10000px;
      left: -10000px;
      width: 1400px;
      min-height: 900px;
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      padding: 0;
      font-family: 'Noto Sans KR', sans-serif;
      color: #f8fafc;
      overflow: visible;
      z-index: -1;
    `;

    // 제목 섹션
    const titleSection = document.createElement('div');
    titleSection.style.cssText = `
      background: linear-gradient(90deg, #1e40af, #3b82f6);
      padding: 30px;
      text-align: center;
      margin-bottom: 0;
    `;
    titleSection.innerHTML = `
      <h1 style="margin: 0; font-size: 28px; color: white; font-weight: bold;">
        페이지 ${pageNumber} - 상세 가이드
      </h1>
    `;

    // 콘텐츠 섹션
    const contentSection = document.createElement('div');
    contentSection.style.cssText = `
      padding: 40px;
      line-height: 1.8;
      font-size: 16px;
    `;

    // 다이얼로그 내용 복사 및 스타일 적용
    const clonedContent = dialogContent.cloneNode(true) as HTMLElement;

    // 불필요한 요소들 제거
    const elementsToRemove = clonedContent.querySelectorAll('button, [data-radix-dialog-close]');
    elementsToRemove.forEach(el => el.remove());

    // 다이얼로그 제목 제거
    const dialogTitle = clonedContent.querySelector('[data-radix-dialog-title], h2');
    if (dialogTitle) dialogTitle.remove();

    // 스타일 정리
    clonedContent.style.cssText = `
      background: transparent;
      border: none;
      box-shadow: none;
      max-width: none;
      max-height: none;
      position: static;
      transform: none;
      margin: 0;
      padding: 0;
    `;

    // 내부 요소들 스타일 개선
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .dialog-section-blue { 
        background: rgba(59, 130, 246, 0.15) !important; 
        border: 1px solid rgba(59, 130, 246, 0.3) !important;
        border-radius: 8px !important;
        padding: 20px !important;
        margin: 15px 0 !important;
      }
      .dialog-section-green { 
        background: rgba(34, 197, 94, 0.15) !important; 
        border: 1px solid rgba(34, 197, 94, 0.3) !important;
        border-radius: 8px !important;
        padding: 20px !important;
        margin: 15px 0 !important;
      }
      .dialog-section-purple { 
        background: rgba(147, 51, 234, 0.15) !important; 
        border: 1px solid rgba(147, 51, 234, 0.3) !important;
        border-radius: 8px !important;
        padding: 20px !important;
        margin: 15px 0 !important;
      }
      .dialog-section-orange { 
        background: rgba(251, 146, 60, 0.15) !important; 
        border: 1px solid rgba(251, 146, 60, 0.3) !important;
        border-radius: 8px !important;
        padding: 20px !important;
        margin: 15px 0 !important;
      }
      .dialog-section-cyan { 
        background: rgba(6, 182, 212, 0.15) !important; 
        border: 1px solid rgba(6, 182, 212, 0.3) !important;
        border-radius: 8px !important;
        padding: 20px !important;
        margin: 15px 0 !important;
      }
      .dialog-section-red { 
        background: rgba(239, 68, 68, 0.15) !important; 
        border: 1px solid rgba(239, 68, 68, 0.3) !important;
        border-radius: 8px !important;
        padding: 20px !important;
        margin: 15px 0 !important;
      }
      .dialog-section-yellow { 
        background: rgba(245, 158, 11, 0.15) !important; 
        border: 1px solid rgba(245, 158, 11, 0.3) !important;
        border-radius: 8px !important;
        padding: 20px !important;
        margin: 15px 0 !important;
      }
      .dialog-section-pink { 
        background: rgba(236, 72, 153, 0.15) !important; 
        border: 1px solid rgba(236, 72, 153, 0.3) !important;
        border-radius: 8px !important;
        padding: 20px !important;
        margin: 15px 0 !important;
      }
      h3 { 
        color: #60A5FA !important; 
        font-size: 20px !important; 
        margin-bottom: 12px !important;
        font-weight: 600 !important;
      }
      p { 
        color: #e2e8f0 !important; 
        margin-bottom: 16px !important;
        line-height: 1.7 !important;
      }
      * {
        font-family: 'Noto Sans KR', 'Malgun Gothic', '맑은 고딕', sans-serif !important;
      }
    `;
    clonedContent.appendChild(styleElement);

    contentSection.appendChild(clonedContent);
    tempContainer.appendChild(titleSection);
    tempContainer.appendChild(contentSection);
    document.body.appendChild(tempContainer);

    await new Promise(resolve => setTimeout(resolve, 300));

    // 캡처
    const canvas = await html2canvas(tempContainer, {
      useCORS: true,
      allowTaint: true,
      scale: 1.5,
      width: 1400,
      height: 900,
      backgroundColor: null,
      logging: false,
    });

    document.body.removeChild(tempContainer);

    // 다이얼로그 닫기
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await new Promise(resolve => setTimeout(resolve, 200));

    if (canvas && canvas.width > 0 && canvas.height > 0) {
      const imgData = canvas.toDataURL('image/png', 1.0);

      // PDF 전체 크기에 맞춰 이미지 크기 계산
      const canvasAspectRatio = canvas.width / canvas.height;
      const pdfAspectRatio = pdfWidth / pdfHeight;

      let imgWidth, imgHeight, x, y;

      if (canvasAspectRatio > pdfAspectRatio) {
        imgWidth = pdfWidth;
        imgHeight = pdfWidth / canvasAspectRatio;
        x = 0;
        y = (pdfHeight - imgHeight) / 2;
      } else {
        imgHeight = pdfHeight;
        imgWidth = pdfHeight * canvasAspectRatio;
        x = (pdfWidth - imgWidth) / 2;
        y = 0;
      }

      pdf.addPage();
      pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
      return true;
    }

    return false;
  } catch (error) {
    console.error('다이얼로그 캡처 오류:', error);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    return false;
  }
};

// 메인 훅 함수
export const usePDFExport = () => {
  const exportToPDF = useCallback(async () => {
    const element = document.getElementById('aws-content');
    if (!element) return;

    try {
      // 모든 페이지 섹션 찾기
      const sections = element.querySelectorAll('section');
      if (sections.length === 0) return;

      // A4 landscape 크기 설정
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      let isFirstPage = true;
      let totalPages = 0;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;

        // 1. 메인 섹션 캡처
        showProgress(`메인 페이지 ${i + 1}/${sections.length} 처리 중...`);
        await captureSection(section, pdf, pdfWidth, pdfHeight, isFirstPage);
        if (isFirstPage) isFirstPage = false;
        totalPages++;

        // 2. 다이얼로그 내용 캡처 시도
        showProgress(`페이지 ${i + 1} 상세 내용 확인 중...`);
        const hasDialog = await captureDialogIfExists(section, pdf, pdfWidth, pdfHeight, i + 1);
        if (hasDialog) {
          totalPages++;
        }
      }

      // 진행 상황 제거
      hideProgress();

      // PDF 저장
      pdf.save(`AWS_완전정복_${totalPages}페이지.pdf`);

    } catch (error) {
      console.error('PDF 생성 중 오류 발생:', error);
      hideProgress();
      alert('PDF 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  }, []);

  return { exportToPDF };
};

// default export 추가 (Fast Refresh 호환성)
export default usePDFExport;