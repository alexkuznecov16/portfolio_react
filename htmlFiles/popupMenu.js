document.querySelector('#popupOpen').addEventListener('click', () => {
	document.body.classList.add('active')
})

document.querySelector('#popupClose').addEventListener('click', () => {
	document.body.classList.remove('active')
})
