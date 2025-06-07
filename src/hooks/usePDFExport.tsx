
import { useCallback } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const usePDFExport = () => {
  const exportToPDF = useCallback(async () => {
    const element = document.getElementById('aws-content');
    if (!element) return;

    try {
      // 모든 페이지 섹션 찾기
      const sections = element.querySelectorAll('section');
      if (sections.length === 0) return;

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // 첫 번째 페이지는 addPage 없이 시작
      let isFirstPage = true;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        
        // 각 섹션을 개별적으로 캡처
        const canvas = await html2canvas(section, {
          width: section.scrollWidth,
          height: section.scrollHeight,
          useCORS: true,
          scale: 0.8,
          backgroundColor: '#ffffff'
        });

        const imgData = canvas.toDataURL('image/png');
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        
        // PDF 크기에 맞게 비율 계산
        const ratio = Math.min(pdfWidth / (imgWidth * 0.264583), pdfHeight / (imgHeight * 0.264583));
        const scaledWidth = imgWidth * 0.264583 * ratio;
        const scaledHeight = imgHeight * 0.264583 * ratio;
        
        // 페이지 중앙에 배치
        const x = (pdfWidth - scaledWidth) / 2;
        const y = (pdfHeight - scaledHeight) / 2;

        // 첫 번째 페이지가 아니면 새 페이지 추가
        if (!isFirstPage) {
          pdf.addPage();
        }
        isFirstPage = false;

        // 이미지를 PDF에 추가
        pdf.addImage(imgData, 'PNG', x, y, scaledWidth, scaledHeight);
      }

      pdf.save('AWS_완전정복.pdf');
    } catch (error) {
      console.error('PDF 생성 중 오류 발생:', error);
    }
  }, []);

  return { exportToPDF };
};
