import * as XLSX from 'xlsx';

function getQuestionData() {
  const workbook = XLSX.readFile('data.xlsx');
  const sheetName = workbook.SheetNames[0];
  const worksheet= workbook.Sheets[sheetName];

  const preliminaryQ1Radio= worksheet['B3'].v;
  const preliminaryQ2Radio = worksheet['B4'].v;
  
  return { preliminaryQ1Radio, preliminaryQ2Radio };
}

export { getQuestionData };
