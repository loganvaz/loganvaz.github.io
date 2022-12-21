import React from 'react';
import { Document } from 'react-pdf';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const PDFViewer = ({ filePath }) => {
  return (
    <Document file={filePath} options={{
        cMapUrl: 'cmaps/',
        cMapPacked: true,
      }}>
      
    </Document>
  );
};

export default PDFViewer;