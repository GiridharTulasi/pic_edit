const fileInput = document.getElementById('fileInput');
const cropButton = document.getElementById('cropButton');
const saveButton = document.getElementById('saveButton');
const profileImage = document.getElementById('profileImage');
const imageContainer = document.getElementById('imageContainer');

let selectedImage = null;
let cropper = null;

fileInput.addEventListener('change', function (e) {
    selectedImage = e.target.files[0];
    if (selectedImage) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(selectedImage);
    }
});

cropButton.addEventListener('click', function () {
    if (selectedImage) {
        if (cropper) {
            cropper.destroy();
        }
        cropper = new Cropper(profileImage, {
            aspectRatio: 1, // You can set the desired aspect ratio for cropping
        });
    }
});

saveButton.addEventListener('click', function () {
    if (cropper) {
        // Get the cropped image data
        const croppedImageData = cropper.getCroppedCanvas().toDataURL();

        // Update the profile image with the cropped data
        profileImage.src = croppedImageData;

        // Destroy the cropper instance
        cropper.destroy();
        cropper = null;

        // You can implement image saving logic here, e.g., send it to a server or save it locally.
        // After saving, update the profile picture on the server.
        // Simulate saving by updating the display after a short delay (you should replace this with your own save logic).
        setTimeout(function () {
            alert('Image saved successfully.');
            // Update the profile image on the server, if necessary.
        }, 2000);
    }
});