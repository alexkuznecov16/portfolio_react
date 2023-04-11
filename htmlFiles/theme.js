const themeChanger = document.querySelector('.theme-change')

themeChanger.addEventListener('click', () => {
	document.body.classList.toggle('light')
	console.log(themeChanger)
})

const themeChanger2 = document.querySelector('.theme-change2')

themeChanger2.addEventListener('click', () => {
	document.body.classList.toggle('light')
	console.log(themeChanger2)
})