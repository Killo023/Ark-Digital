const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function extractPDF() {
  const pdfPath = path.join(__dirname, '..', 'public', 'business portfolio.pdf');
  
  try {
    // Use file path directly
    const parser = new PDFParse({ url: pdfPath });
    const result = await parser.getText();
    const data = { text: result.text };
    
    console.log('PDF Content:');
    console.log('============');
    console.log(data.text);
    console.log('\n\nMetadata:');
    console.log('=========');
    console.log(JSON.stringify({
      pages: data.numpages,
      info: data.info,
      metadata: data.metadata
    }, null, 2));
    
    // Save extracted text to a file for easier access
    const outputPath = path.join(__dirname, '..', 'public', 'business-portfolio-content.txt');
    fs.writeFileSync(outputPath, data.text);
    console.log(`\n\nExtracted text saved to: ${outputPath}`);
    
  } catch (error) {
    console.error('Error extracting PDF:', error);
    process.exit(1);
  }
}

extractPDF();
