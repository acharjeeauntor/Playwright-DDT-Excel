const XLSX = require('xlsx');

function getData(){
    const workbook = XLSX.readFile('data.xlsx');
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const radioValue = worksheet['A1'].v;
    const dropdownValue = worksheet['B1'].v;
    return {radioValue,dropdownValue}
}


module.exports = { getData };
