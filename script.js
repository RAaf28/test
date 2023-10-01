const fileInput = document.getElementById('fileInput');
const captionInput = document.getElementById('captionInput');
const uploadButton = document.getElementById('uploadButton');
const gallery = document.getElementById('gallery');

uploadButton.addEventListener('click', function() {
    const file = fileInput.files[0];
    const caption = captionInput.value;

    if (file && caption) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const imageUrl = event.target.result;
            const image = new Image();
            image.src = imageUrl;

            const captionElement = document.createElement('p');
            captionElement.textContent = caption;

            gallery.appendChild(image);
            gallery.appendChild(captionElement);

            // Clear input fields
            fileInput.value = '';
            captionInput.value = '';
        };

        reader.readAsDataURL(file);
    }
});