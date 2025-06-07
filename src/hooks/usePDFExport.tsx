
import { useCallback } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const usePDFExport = () => {
  const exportToPDF = useCallback(async () => {
    const element = document.getElementById('aws-content');
    if (!element) return;

    try {
      // 임시로 스크롤을 최상단으로 이동
      const originalScrollTop = window.pageYOffset;
      window.scrollTo(0, 0);

      // 전체 페이지 높이 계산
      const canvas = await html2canvas(element, {
        height: element.scrollHeight,
        width: element.scrollWidth,
        useCORS: true,
        scale: 1,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      // 이미지가 한 페이지에 들어가지 않으면 여러 페이지로 분할
      const pageHeight = imgHeight * ratio;
      let heightLeft = pageHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, pageHeight);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', imgX, position, imgWidth * ratio, pageHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('AWS_완전정복.pdf');

      // 원래 스크롤 위치로 복원
      window.scrollTo(0, originalScrollTop);
    } catch (error) {
      console.error('PDF 생성 중 오류 발생:', error);
    }
  }, []);

  return { exportToPDF };
};
