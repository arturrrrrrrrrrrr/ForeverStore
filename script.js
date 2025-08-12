document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const modalPrice = document.getElementById("modal-price");
    const confirmBtn = document.getElementById("confirmBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    const buyButtons = document.querySelectorAll(".buy_button");

    const genreFilter = document.getElementById("genreFilter");
    const searchInput = document.getElementById("searchInput");

    const cards = document.querySelectorAll(".card");

    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            const card = button.closest(".card");
            if (!card) return;

            const title = card.querySelector(".title")?.textContent || "Цю гру";
            const price = card.querySelector(".price")?.textContent || "";

            modalText.textContent = `Ви дійсно хочете купити "${title}"?`;
            modalPrice.textContent = price;

            modal.classList.remove("modal-hidden");
        });
    });

    confirmBtn.addEventListener("click", () => {
        modal.classList.add("modal-hidden");
        alert("Дякую за покупку!")
    });

    cancelBtn.addEventListener("click", () => {
        modal.classList.add("modal-hidden");
    });


    genreFilter.addEventListener("change", () => {
        const selectedGenre = genreFilter.value;

        cards.forEach(card => {
            const cardGenre = card.querySelector(".ribbon")?.textContent || "";

            if (selectedGenre === "Усі жанри" || cardGenre === selectedGenre) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });


    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        cards.forEach(card => {
            const title = card.querySelector(".title")?.textContent.toLowerCase() || "";
            
            if (title.includes(searchTerm)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        if (scrollY > 50) {

            header.classList.add("sticky");
            header.style.transform = 'translateY(0)';

        } else if (scrollY > 0) {

           header.classList.remove("sticky");
           header.style.transform = `translateY(-${scrollY}px)`;

        } else {

           header.classList.remove("sticky");
           header.style.transform = 'translateY(0)';

        }
    });
});
