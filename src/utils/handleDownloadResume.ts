export default function handleDownloadResume() {
  // Implementation for downloading resume
    const resumeUrl = "/resume/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "DOSSA_Gaby_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}