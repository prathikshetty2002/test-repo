import React from "react";
import jsPDF from "jspdf";

const PDFGenerator = ({ data }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const headerImg = new Image();
    headerImg.src = "https://duolingoschools.zendesk.com/hc/article_attachments/4821350549901/Screen_Shot_2022-03-15_at_10.49.37_AM.png";
    doc.addImage(headerImg, 'PNG', 10, 10, 180, 40); // Adjust position and size as needed
    // Add data to the PDF document
       // Add data to the PDF document
       doc.text(`Email: ${data.displayName}`, doc.internal.pageSize.getWidth() / 2, 60, { align: 'center' });
       doc.text(`Full name: ${data.fullName}`, doc.internal.pageSize.getWidth() / 2, 70, { align: 'center' });
       doc.text(`Address: ${data.workspaceName}`, doc.internal.pageSize.getWidth() / 2, 80, { align: 'center' });
       doc.text(`Phone number : ${data.workspaceUrl}`, doc.internal.pageSize.getWidth() / 2, 90, { align: 'center' });
   
       // Add image to the PDF document
       const img = new Image();
       img.onload = function() {
         doc.addImage(this, 'PNG', doc.internal.pageSize.getWidth() / 2 - 50, 100, 100, 100); // Center horizontally
         doc.save("data.pdf");
       };
       img.src = data.imageURL;
     };

  return (
    <div>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default PDFGenerator;