export const exportToExcel = (data: object[], fileName: string) => {
  if (!data || data.length === 0) {
    console.warn("No data to export");
    return;
  }

  // Create table header
  const header = Object.keys(data[0]).join("\t");

  // Create table rows
  const rows = data.map((row) => Object.values(row).join("\t")).join("\n");

  // Combine header and rows
  const excelContent = `${header}\n${rows}`;

  // Create a Blob object with Excel-compatible content
  const blob = new Blob([excelContent], { type: "application/vnd.ms-excel" });

  // Create a download link
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fileName}.xls`;

  // Trigger the download
  link.click();
};
