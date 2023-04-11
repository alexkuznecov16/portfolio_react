const filterBox = document.querySelectorAll('.box')

document.querySelector('ul').addEventListener('click', event => {
	if (event.target.tagName !== 'LI') {
		return false
	} else {
		let filterClass = event.target.dataset['filter']

		filterBox.forEach(item => {
			item.classList.add('display-none')
			if (item.classList.contains(filterClass)) {
				item.classList.remove('display-none')
			}
		})
	}
})
