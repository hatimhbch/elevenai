document.getElementById('convertButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput');
    const downloadLink = document.getElementById('downloadLink');

    if (fileInput.files.length === 0) {
        alert('Please select a PNG file first.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async function(event) {
        const imgDataUrl = event.target.result;
        const img = new Image();
        img.src = imgDataUrl;

        img.onload = async function() {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: img.width > img.height ? 'landscape' : 'portrait',
                unit: 'px',
                format: [img.width, img.height]
            });
            pdf.addImage(img, 'PNG', 0, 0, img.width, img.height);

            const pdfBytes = pdf.output('blob');
            const url = URL.createObjectURL(pdfBytes);
            downloadLink.href = url;
            downloadLink.download = 'converted.pdf';
            downloadLink.style.display = 'block';
        };

        img.onerror = function() {
            console.error('Failed to load image');
        };
    };

    reader.onerror = function() {
        console.error('Failed to read file');
    };

    reader.readAsDataURL(file);
});


document.getElementById('convertButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput');
    const downloadLink = document.getElementById('downloadLink');
    const loadingIndicator = document.getElementById('loadingIndicator');

    if (fileInput.files.length === 0) {
        alert('Please select a PNG file first.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async function(event) {
        loadingIndicator.style.display = 'block'; // Show loading indicator
        downloadLink.style.display = 'none'; // Hide download link

        const imgDataUrl = event.target.result;
        const img = new Image();
        img.src = imgDataUrl;

        img.onload = async function() {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: img.width > img.height ? 'landscape' : 'portrait',
                unit: 'px',
                format: [img.width, img.height]
            });
            pdf.addImage(img, 'PNG', 0, 0, img.width, img.height);

            const pdfBytes = pdf.output('blob');
            const url = URL.createObjectURL(pdfBytes);
            downloadLink.href = url;
            downloadLink.download = 'converted.pdf';
            downloadLink.style.display = 'block'; // Show download link
            loadingIndicator.style.display = 'none'; // Hide loading indicator
        };

        img.onerror = function() {
            loadingIndicator.style.display = 'none'; // Hide loading indicator
            console.error('Failed to load image');
        };
    };

    reader.onerror = function() {
        loadingIndicator.style.display = 'none'; // Hide loading indicator
        console.error('Failed to read file');
    };

    reader.readAsDataURL(file);
});


