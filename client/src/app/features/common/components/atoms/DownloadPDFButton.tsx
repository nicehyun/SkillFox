import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Button from "./Button";
import Icon from "./Icon";
import { MdFileDownload } from "react-icons/md";

interface IDownloadPDFButtonProps {
  id: string;
}

const DownloadPDFButton = ({ id }: IDownloadPDFButtonProps) => {
  const downloadPDF = async () => {
    const chartElement = document.getElementById(id);

    if (chartElement instanceof HTMLElement) {
      const canvas = await html2canvas(chartElement);
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "landscape",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("chart.pdf");
    } else {
      console.error("Unable to find the chart element");
    }
  };

  return (
    <Button
      color="primary"
      id={`button-download-pdf__${id}`}
      onClick={downloadPDF}
      content={
        <span className="flex items-center">
          Download
          <Icon icon={<MdFileDownload />} />
        </span>
      }
      aria-label="Download chart as PDF"
    />
  );
};

export default DownloadPDFButton;
