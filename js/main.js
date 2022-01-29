function scaleCv() {
  document.body.classList.add('scale-cv');
}

let areaCv = document.getElementById('area-cv')
let resumeButton = document.getElementById('resume-button');

let opt = {
  margin:       0,
  filename:     'gabriel-andrade.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 4 },
  jsPDF:        { format: 'a4', orientation: 'portrait' }
};

function generateResume() {
  html2pdf(areaCv, opt)
}

resumeButton.addEventListener('click', () => {
  scaleCv();
  generateResume();
});