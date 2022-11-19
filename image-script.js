const image = document.querySelector('img');
const file = document.querySelector('input[type="file"]');

file.addEventListener('change', () => {
	const imgUrl = URL.createObjectURL(file.files[0]);
	image.setAttribute("src", imgUrl);
	image.onload = () => {
		URL.revokeObjectURL(imgUrl);
	}
});

/* alternative way with FileReader interface */

/*file.addEventListener('change', (event) => {
	const reader = new FileReader();
	const [imgFile] = event.target.files;
	// const imgFile = event.target.files.item(0);
	reader.addEventListener('load', () => {
		image.src = reader.result;
	});
	reader.readAsDataURL(imgFile);
});*/
