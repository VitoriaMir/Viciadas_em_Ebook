// ==== Recomendação de livros
var books = [
    { title: "Vergonha", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/81q6ArMrBTL._SL1500_.jpg" },
    { title: "Para Sir Phillip, com amor", author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/91GtrmKsjUL._SL1500_.jpg" },
    { title: "Diários do Vampiro: O Despertar", author: "L.J Smith", image: "https://m.media-amazon.com/images/I/71IB3b3XAsL._SL1500_.jpg"},
    { title: "Não fuja!", author: "FML Pepper", image: "https://m.media-amazon.com/images/I/71sx8ZIAfyS._SL1500_.jpg" },
    { title: "Bridgerton: O Duque e Eu", author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/91LzeKCuAGL._SL1500_.jpg" },
    { title: "A Vida Invisível de Addie LaRue", author: "V. E. Schwab", image: "https://m.media-amazon.com/images/I/71X245OYRBL._SL1500_.jpg" },
    { title: "A Rainha do Nada", author: "Holly Black", image: "https://m.media-amazon.com/images/I/91vZBs7i-+L._SL1500_.jpg" },
    { title: "Sr. Daniels", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/81TF6bU3yBL._SL1500_.jpg" },
    { title: "Diários do Vampiro: O Confronto", author: "L.J Smith", image: "https://m.media-amazon.com/images/I/719BnWs5CEL._SL1500_.jpg"},
    { title: "Landon & Shay", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/81QxigKmYeL._SL1500_.jpg" },
    { title: "The Risk", author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/91273xaUviL._SL1500_.jpg" },
    { title: "Um Beijo Inesquecível", author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/71-q5t9u0JL._SL1500_.jpg" },
    { title: "Não Pare!", author: "FML Pepper", image: "https://m.media-amazon.com/images/I/71MMxov5zES._SL1500_.jpg" },
    { title: "Um experimento de amor em Nova York", author: "Elena Armas", image: "https://m.media-amazon.com/images/I/8137g6aoSgL._SL1500_.jpg" },
    { title: "O lado feio do amor", author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81FEytag46L._SL1500_.jpg" },
    { title: "Diários do Vampiro: A Fúria", author: "L.J Smith", image: "https://m.media-amazon.com/images/I/71++k8AE5hL._SL1500_.jpg" },
    { title: "Novembro", author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/91YbRs+x+cL._SL1500_.jpg" },
    { title: "Perdida", author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/81HAuOpFJ8L._SL1500_.jpg" },
    { title: "O erro", author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/816ewVxl5+L._SL1500_.jpg" },
    { title: "Não Olhe!", author: "FML Pepper", image: "https://m.media-amazon.com/images/I/81rEE3EBH7L._SL1500_.jpg" },
    { title: "Diários do Vampiro: Reunião Sombria", author: "L.J Smith", image: "https://m.media-amazon.com/images/I/51Sxsy387nL._SL1500_.jpg" },
    { title: "Destinado", author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/81C9LrY3djL._SL1500_.jpg" },
    { title: "Estrelas do Norte", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/91DNUrsqrWL._SL1500_.jpg" },
    { title: "É assim que começa", author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81Izv2GRWoL._SL1500_.jpg" },
    { title: "Diários do Vampiro: Anoitecer", author: "L.J Smith", image: "https://m.media-amazon.com/images/I/71QDcBNHDeL._SL1500_.jpg" },
    { title: "As mil partes do meu coração", author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/814pUv-EGbL._SL1500_.jpg" },
    { title: "Sindrome da boa garota", author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/81rLg+AqxpL._SL1500_.jpg" },
    { title: "No mundo da Luna", author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/815FZfu4GZL._SL1500_.jpg" },
    { title: "História de um grande amor", author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/814HWxuZiCL._SL1500_.jpg" },
    { title: "Máscaras", author: "FML Pepper", image: "https://m.media-amazon.com/images/I/81QEHr5OLYL._SL1500_.jpg" },
    { title: "Verity", author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/91SDZ2eUj+L._SL1500_.jpg" },
    { title: "Presa com você", author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/71lfuzyB-PL._SL1500_.jpg" },
    { title: "Quando a noite cai", author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/91PVgPnC2iL._SL1500_.jpg" },
    { title: "Ondas do Oeste", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/A1XuJkRHoYL._SL1500_.jpg" },
    { title: "Até o verão terminar", author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81u8c5lziEL._SL1500_.jpg" },
    { title: "Prometida", author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/816bO8cDqXL._SL1500_.jpg" },
    { title: "Todas as suas imperfeições", author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81Vhnel+xxL._SL1500_.jpg" },
    { title: "Sob o mesmo teto", author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81GtPP6nTlL._SL1500_.jpg" },
    { title: "The Dare", author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/81nD6jFPuTL._SL1500_.jpg" },
    { title: "Abaixo de zero", author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81oopRph1QL._SL1500_.jpg" },
    { title: "13", author: "FML Pepper", image: "https://m.media-amazon.com/images/I/81vlGZZ-VSL._SL1485_.jpg" },
    { title: "Rainha Charlotte", author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/61z4-KJmq4L._SL1000_.jpg" },
    { title: "Um amor para chamar de meu", author: "Alê Santos", image: "https://m.media-amazon.com/images/I/81t68UXsI9L._SL1500_.jpg" },
    { title: "Uma alma de cinzas e sangue", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/816FvhiR3KL._SL1500_.jpg" },
    { title: "Diários do Vampiro: Almas Sombrias", author: "L.J Smith", image: "https://m.media-amazon.com/images/I/512LlTTb-NL._SL1500_.jpg" },
    { title: "De sangue e cinzas", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/81TjnGG0g7L._SL1500_.jpg" },
    { title: "O legado", author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/81-STfcnLJL._SL1500_.jpg" },
    { title: "Espero por você", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/616VAtZ4QoL._SL1360_.jpg" },
    { title: "O viscode que me amava", author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/71RtaONRPsL._SL1500_.jpg" },
    { title: "Tom, o menino do mar", author: "Alê Santos", image: "https://m.media-amazon.com/images/I/91hHLX7p1YL._SL1500_.jpg" },
    { title: "A menina mais fria de Coldtown", author: "Holly Black", image: "https://m.media-amazon.com/images/I/613TrCHIx3L._SL1360_.jpg" },
    { title: "A Razão do Amor", author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81bkmJnflPL._SL1500_.jpg" },
    { title: "Uma farsa de amor na Espanha", author: "Elena Armas", image: "https://m.media-amazon.com/images/I/71SliYa-JkL._SL1500_.jpg" },
    { title: "Diários do Vampiro: Meia-Noite", author: "L.J Smith", image: "https://m.media-amazon.com/images/I/713X0lJJTXS._SL1500_.jpg" },
    { title: "Uma farsa de amor na Espanha: conteúdo extra", author: "Elena Armas", image: "https://m.media-amazon.com/images/I/7133U3EN9lL._SL1500_.jpg" },
    { title: "Deusa de Sangue", author: "FML Pepper", image: "https://m.media-amazon.com/images/I/A1rotOVldOL._SL1500_.jpg" },
    { title: "Um amor desastroso", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/91SlcrwGPLS._SL1500_.jpg" },
    { title: "Diários do Vampiro: Espectro", author: "L.J Smith", image: "https://m.media-amazon.com/images/I/71AvqYYFvXL._SL1240_.jpg" },
    { title: "A força que nos atrai", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/A1OouJDeznL._SL1500_.jpg" },
    { title: "É assim que acaba", author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/91r5G8RxqfL._SL1500_.jpg" },
    { title: "A teoria do amor", author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/71ii3Fu++9L._SL1500_.jpg" },
    { title: "O efeito Graham", author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/81gz4Lx9l5L._SL1500_.jpg" },
    { title: "O ar que ele respira", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/81OYnc8B7nL._SL1500_.jpg" },
    { title: "A caminho do altar", author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/71F7XNElBxL._SL1008_.jpg" },
    { title: "Tempestade & Fúria", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/71jrHhPcE6L._SL1404_.jpg" },
    { title: "O príncipe cruel", author: "Holly Black", image: "https://m.media-amazon.com/images/I/81FH6q0EqYS._SL1500_.jpg" },
    { title: "A hipótese do amor", author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/71fPFgNoQ0L._SL1500_.jpg" },
    { title: "O desafio de ferro", author: "Holly Black", image: "https://m.media-amazon.com/images/I/71r7KaVqTFL._SL1437_.jpg" },
    { title: "Dúbio: o olho de Lilith", author: "Alê Santos", image: "https://m.media-amazon.com/images/I/71IWqd49RgL._SL1500_.jpg" },
    { title: "Amor, teoricamente", author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81iUrbors9L._SL1500_.jpg" },
    { title: "A coroa de ossos dourados", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/91izqT4CK5L._SL1500_.jpg" },
    { title: "Tarde demais", author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81NqyuC2M3L._SL1500_.jpg" },
    { title: "Xeque-mate", author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81O6eWVPaiL._SL1500_.jpg" },
    { title: "Tempestades do Sul", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/A1xOwZJDOVL._SL1500_.jpg" },
    { title: "Se não houver amanhã", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/71iCWxBKsiL._SL1358_.jpg" },
    { title: "O silêncio das aguas", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/91ledGOKhgL._SL1500_.jpg" },
    { title: "Uma segunda chance", author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81b48B0vpNL._SL1500_.jpg" },
    { title: "O canto mais escuro da floresta", author: "Holly Black", image: "https://m.media-amazon.com/images/I/91GPRQQ3V1L._SL1500_.jpg" },
    { title: "Um encontro com Holly", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/71pPLUph3DL._SL1500_.jpg" },
    { title: "The Play", author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/81yIhzRW15L._SL1500_.jpg" },
    { title: "Amor sob encomenda", author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/81B1l-YXUkL._SL1500_.jpg" },
    { title: "Talvez um dia", author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81QfnQRnYxL._SL1500_.jpg" },
    { title: "Mais quente que fogo", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/71lk+D2w8RL._SL1404_.jpg" },
    { title: "Procura-se um marido", author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/81m2veDZTGL._SL1500_.jpg" },
    { title: "Luzes do Leste", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/A1-FjRUWOhL._SL1500_.jpg" },
    { title: "No mundo da Luna", author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/91UkcpRvEXL._SL1500_.jpg" },
    { title: "Eleanor & Grey", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/91CC0CiT+cL._SL1500_.jpg" },
    { title: "Amor por engano", author: "Lynn Painter", image: "https://m.media-amazon.com/images/I/61NIKTSzi1L._SL1005_.jpg" },
    { title: "O herdeiro roubado", author: "Holly Black", image: "https://m.media-amazon.com/images/I/81GhdNKiIOL._SL1500_.jpg" },
    { title: "Layla", author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/91-M+6ZOjuL._SL1500_.jpg" },
    { title: "Os segredos de Colin Bridgerton", author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/91TEjiURuYL._SL1500_.jpg" },
    { title: "Melhor do que nos filmes", author: "Lynn Painter", image: "https://m.media-amazon.com/images/I/61y5iLUKS3L._SL1005_.jpg" },
    { title: "Mentira perfeita", author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/918Y5362XlL._SL1500_.jpg" },
    { title: "Diários do Vampiro: Canção da Lua", author: "L.J Smith", image: "https://m.media-amazon.com/images/I/81iweLknv3L._SL1500_.jpg" },
    { title: "Desencantada", author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/91YnK6tzAFL._SL1500_.jpg" },
    { title: "Uma dama fora dos padrões", author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/61VJofOTv-L._SL1007_.jpg" },
    { title: "Indomada", author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/815g7bykhWL._SL1500_.jpg" },
    { title: "Um reino de carne e fogo", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/91pnDB6miDL._SL1500_.jpg" },
    { title: "O trono do prisioneiro", author: "Holly Black", image: "https://m.media-amazon.com/images/I/81wQQpHr-NL._SL1500_.jpg" },
    { title: "The Chase", author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/81SyNVijVaS._SL1500_.jpg" },
    { title: "Mais frio que gelo", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/71IzjUwYaEL._SL1404_.jpg" },
    { title: "Noiva", author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81Hr3TYhA0L._SL1500_.jpg" },
    { title: "Diários do Vampiro: Destino", author: "L.J Smith", image: "https://m.media-amazon.com/images/I/612NcXJzsdL._SL1500_.jpg" },
    { title: "Odeio te amar", author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/816tKxfHi1L._SL1500_.jpg" },
    { title: "A cada último suspiro", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/71Z5rStyxWL._SL1404_.jpg" },
    { title: "A Hipótese do Amor", author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81LTEfXYgcL._SL1500_.jpg" },
    { title: "Quebrando o gelo", author: "Hannah Grace", image: "https://m.media-amazon.com/images/I/81xPIpkYrcL._SL1500_.jpg" },
    { title: "Um perfeito Cavalheiro", author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/81uhNs6Wx5L._SL1500_.jpg" },
    { title: "Ele", author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/91I-SRqzBJL._SL1500_.jpg" },
    { title: "Title", author: "Holly Black", image: "https://m.media-amazon.com/images/I/81TP6nbtKqL._SL1500_.jpg" },
    { title: "The Originals: A perda", author: "L.J Smith", image: "https://m.media-amazon.com/images/I/91NkVodh4NL._SL1500_.jpg" },
    { title: "O Conde Enfeitiçado", author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/81EEhZOy26L._SL1500_.jpg" },
    { title: "Uma Sombra na Brasa", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/91XtGJvioqL._SL1500_.jpg" },
    { title: "Reino de Ferro", author: "Holly Black", image: "https://m.media-amazon.com/images/I/81DnHZSBtqL._SL1500_.jpg" },
    { title: "E viveram felizes para sempre", author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/71b5DDpCvsL._SL1500_.jpg" },
    { title: "A guerra das duas rainhas", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/91uivowF+LL._SL1500_.jpg" },
    { title: "O rei perverso", author: "Holly Black", image: "https://m.media-amazon.com/images/I/91N9kjbqxWS._SL1500_.jpg" },
    { title: "Raiva & Ruína", author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/61pVY9cMPUL._SL1404_.jpg" },
    { title: "Valente", author: "Holly Black", image: "https://m.media-amazon.com/images/I/81pB4ymIc3L._SL1500_.jpg" },
    { title: "O Acordo", author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/91oyypSxfeS._SL1500_.jpg" },
    { title: "No ritmo do Amor", author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/81ukm9QQ-vS._SL1500_.jpg" },
    { title: "The Originals: Ascensão", author: "L.J Smith", image: "https://m.media-amazon.com/images/I/91Y7L8vnqQL._SL1500_.jpg"}
];

function filterBooks(event) {
    var selectedAuthor = select.value; // Obtém o autor selecionado
    var filteredBooks = books.filter(function (book) { // Filtra os livros pelo autor selecionado
        return selectedAuthor === "" || book.author === selectedAuthor;
    });
    currentPage = 1;
    paginateBooks(filteredBooks);
}

const select = document.getElementById("filter-select");
select.addEventListener("change", filterBooks);
const pageSizeSelect = document.getElementById("page-size-select");
pageSizeSelect.addEventListener("change", function () {
    currentPage = 1;
    filterBooks();
});


function paginateBooks(books) { // Função para exibir os livros paginados
    var itemsPerPage = Number(pageSizeSelect.value);
    var limit = Math.ceil(books.length / itemsPerPage);
    totalPages = limit; // Atualiza o total de páginas
    var paginationContainer = document.getElementById("book-list");
    var resultsCount = document.getElementById("results-count");
    paginationContainer.innerHTML = "";
    resultsCount.textContent = books.length + (books.length === 1 ? " livro encontrado" : " livros encontrados");
    document.getElementById("page-numbers").innerHTML = ""; // Limpa os botões de página

    for (var i = 1; i <= totalPages; i++) {
        let button = document.createElement("button");
        button.innerText = i; // Adiciona o número da página no botão
        button.type = "button";
        button.classList.add("page-number");
        button.setAttribute("aria-label", "Ir para a página " + i);
        button.setAttribute("aria-current", i === currentPage ? "page" : "false");
        button.addEventListener("click", function () {
            currentPage = Number(button.innerText); // Atualiza a página atual
            updatePage(); // Atualiza a página exibida
        });
        button.classList.add("button-number");
        document.getElementById("page-numbers").appendChild(button); // Adiciona o botão na div de números de página  
    }

    for (var i = 0; i < totalPages; i++) {
        var page = document.createElement("div");
        page.className = "page";
        page.classList.add("hidden");

        var startIndex = i * itemsPerPage;
        var endIndex = startIndex + itemsPerPage;
        var pageBooks = books.slice(startIndex, endIndex);

        pageBooks.forEach(function (book) {
            var bookElement = document.createElement("div");
            bookElement.innerHTML = `
                <article class="single_recommendation">
                    <div class="recommendation_image">
                        <img src="${book.image}" alt="Capa de livro recomendado por ${book.author}" loading="lazy">
                    </div>
                    <div class="book-details">
                        <span class="book-title">${book.title || "Livro recomendado"}</span>
                        <p class="book-author">${book.author}</p>
                    </div>
                </article>`;
            // paginationContainer.appendChild(bookElement);
            page.appendChild(bookElement);
        });

        paginationContainer.appendChild(page);
    }

    showPage(0); // Mostrar a primeira página por padrão
}

function showPage(pageIndex, shouldScroll) {
    var pagination = document.querySelector("#pagination-container .pagination");
    pagination.style.display = totalPages <= 1 ? "none" : "";
    const buttons = document.querySelectorAll(".button-number"); // Seleciona todos os botões de página
    buttons.forEach(function (button) {
        button.classList.remove("active"); // Remove a classe active de todos os botões
        var pageNumber = Number(button.textContent);
        var firstPage = Math.floor(pageIndex / 8) * 8 + 1;
        var lastPage = firstPage + 7;
        button.style.display = pageNumber >= firstPage && pageNumber <= lastPage ? "" : "none";
        button.setAttribute("aria-current", "false");
    });
    if (buttons[pageIndex]) {
        buttons[pageIndex].classList.add("active"); // Adiciona a classe active no botão da página atual
        buttons[pageIndex].setAttribute("aria-current", "page");
    }

    var pages = document.querySelectorAll(".page");
    pages.forEach(function (page, index) {
        if (index === pageIndex) {
            page.classList.remove("hidden");
        } else {
            page.classList.add("hidden");
        }
    });
    previousPage.disabled = pageIndex === 0;
    nextPage.disabled = pageIndex >= totalPages - 1;
    nextPage.style.display = totalPages > 8 ? "" : "none";
    if (shouldScroll) {
        document.getElementById("book-list").scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// Capturando os elementos HTML necessários
const previousPage = document.getElementById('previous-page');
const nextPage = document.getElementById('next-page');

// Adicionando event listener para o clique nos botões de página
previousPage.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    // Se já estamos na primeira página, não faz nada
    if (currentPage === 1) {
        return;
    }
    currentPage--; // Decrementa a página atual
    updatePage(); // Atualiza a página exibida
});

nextPage.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    // Se já estamos na última página, não faz nada
    if (currentPage >= totalPages) {
        return;
    }
    currentPage++; // Incrementa a página atual
    updatePage(); // Atualiza a página exibida
});

// Função para atualizar a página exibida
function updatePage() {
    showPage(currentPage - 1, true); // Lembre-se que o índice da página começa em 0
}

// Variáveis para controlar a paginação
let currentPage = 1;
let totalPages = 0;

// Chamando a função para exibir os livros inicialmente
filterBooks();