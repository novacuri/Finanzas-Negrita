document.addEventListener("DOMContentLoaded", function (event) {
	const recomendacionesContainer = document.querySelector(".recomendaciones");
	const recomendPrevButton = document.querySelector(".recomendPrev");
	const recomendNextButton = document.querySelector(".recomendNext");
	let recomendScrollAmount = 0;
	let recomendTouchStartX = 0;
	const cardsContainer = document.querySelector(".cards");
	const prevButton = document.querySelector(".prev");
	const nextButton = document.querySelector(".next");
	let scrollAmount = 0;
	let touchStartX = 0;

	// Sección Recomendaciones ----------------------------------------------------------------
	recomendPrevButton.addEventListener("click", function (e) {
		e.preventDefault();
		recomendacionesContainer.scrollTo({
			top: 0,
			left: (recomendScrollAmount -= 300),
			behavior: "smooth",
		});

		if (recomendScrollAmount < 0) {
			recomendScrollAmount = 0;
		}
	});

	recomendNextButton.addEventListener("click", function (e) {
		e.preventDefault();
		if (
			recomendScrollAmount <=
			recomendacionesContainer.scrollWidth -
				recomendacionesContainer.clientWidth
		) {
			recomendacionesContainer.scrollTo({
				top: 0,
				left: (recomendScrollAmount += 300),
				behavior: "smooth",
			});
		}
	});

	recomendacionesContainer.addEventListener("touchstart", function (event) {
		recomendTouchStartX = event.touches[0].clientX;
	});

	recomendacionesContainer.addEventListener("touchmove", function (event) {
		const touchMoveX = event.touches[0].clientX;
		const swipeDistance = recomendTouchStartX - touchMoveX;

		recomendacionesContainer.scrollLeft += swipeDistance;
	});

	recomendacionesContainer.addEventListener("touchend", function (event) {
		recomendTouchStartX = 0;
		recomendScrollAmount = recomendacionesContainer.scrollLeft;
	});

	// Sección Novedades ----------------------------------------------------------------
	prevButton.addEventListener("click", function (e) {
		e.preventDefault();
		cardsContainer.scrollTo({
			top: 0,
			left: (scrollAmount -= 300),
			behavior: "smooth",
		});

		if (scrollAmount < 0) {
			scrollAmount = 0;
		}
	});

	nextButton.addEventListener("click", function (e) {
		e.preventDefault();
		if (
			scrollAmount <=
			cardsContainer.scrollWidth - cardsContainer.clientWidth
		) {
			cardsContainer.scrollTo({
				top: 0,
				left: (scrollAmount += 300),
				behavior: "smooth",
			});
		}
	});

	cardsContainer.addEventListener("touchstart", function (event) {
		touchStartX = event.touches[0].clientX;
	});

	cardsContainer.addEventListener("touchmove", function (event) {
		const touchMoveX = event.touches[0].clientX;
		const swipeDistance = touchStartX - touchMoveX;

		cardsContainer.scrollLeft += swipeDistance;
	});

	cardsContainer.addEventListener("touchend", function (event) {
		touchStartX = 0;
		scrollAmount = cardsContainer.scrollLeft;
	});
});
