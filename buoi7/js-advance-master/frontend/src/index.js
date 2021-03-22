import HomPage from './pages/HomPage.js';

const homepage = new HomPage();

const $ = selector => {
	let elements = document.querySelectorAll(selector);
	return elements.length == 1 ? elements[0] : elements
}

const router = () => {
	$('#main-content').innerHTML = homepage.render();
}

window.addEventListener('DOMContentLoaded', router);