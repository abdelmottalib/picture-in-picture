const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {

			videoElement.play();
		};
	} catch (error) {

	}
}

buttonElement.addEventListener('click', async ()=> {
	button.disabled = true;
	await videoElement.requestPictureInPicture();
	button.disabled = false;

});
selectMediaStream();