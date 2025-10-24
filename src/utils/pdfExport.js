import html2pdf from "html2pdf.js";

export function exportToPdf(element, filename = "mon_cv.pdf"){
    const opt ={
        margin: 0.4,
        filename,
        image: {
            type: "jpeg",
            quality: 0.98
        },
        html2canvas: {scale: 2},
        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait"
        }
    };
    html2pdf().set(opt).from(element).save();
}