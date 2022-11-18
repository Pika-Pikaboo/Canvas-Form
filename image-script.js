const image = document.querySelector('img');
const file = document.querySelector('input[type="file"]');

file.addEventListener('change', () => {
	const imgUrl = URL.createObjectURL(file.files[0]);
	image.setAttribute("src", imgUrl);
	image.onload = () => {
		URL.revokeObjectURL(imgUrl);
	}
});
