// ==== Recomendação de livros
var books = [
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/81q6ArMrBTL._SL1500_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/91GtrmKsjUL._SL1500_.jpg" },
    { author: "L.J Smith", image: "https://m.media-amazon.com/images/I/71IB3b3XAsL._SL1500_.jpg"},
    { author: "FML Pepper", image: "https://m.media-amazon.com/images/I/71sx8ZIAfyS._SL1500_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/91LzeKCuAGL._SL1500_.jpg" },
    { author: "V. E. Schwab", image: "https://m.media-amazon.com/images/I/71X245OYRBL._SL1500_.jpg" },
    { author: "Holly Black", image: "https://m.media-amazon.com/images/I/91vZBs7i-+L._SL1500_.jpg" },
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/81TF6bU3yBL._SL1500_.jpg" },
    { author: "L.J Smith", image: "https://m.media-amazon.com/images/I/719BnWs5CEL._SL1500_.jpg"},
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/81QxigKmYeL._SL1500_.jpg" },
    { author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/91273xaUviL._SL1500_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/71-q5t9u0JL._SL1500_.jpg" },
    { author: "FML Pepper", image: "https://m.media-amazon.com/images/I/71MMxov5zES._SL1500_.jpg" },
    { author: "Elena Armas", image: "https://m.media-amazon.com/images/I/8137g6aoSgL._SL1500_.jpg" },
    { author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81FEytag46L._SL1500_.jpg" },
    { author: "L.J Smith", image: "https://m.media-amazon.com/images/I/71++k8AE5hL._SL1500_.jpg" },
    { author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/91YbRs+x+cL._SL1500_.jpg" },
    { author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/81HAuOpFJ8L._SL1500_.jpg" },
    { author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/816ewVxl5+L._SL1500_.jpg" },
    { author: "FML Pepper", image: "https://m.media-amazon.com/images/I/81rEE3EBH7L._SL1500_.jpg" },
    { author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/81v9ss1J7GL._SL1500_.jpg" },
    { author: "L.J Smith", image: "https://m.media-amazon.com/images/I/51Sxsy387nL._SL1500_.jpg" },
    { author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/81C9LrY3djL._SL1500_.jpg" },
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/91DNUrsqrWL._SL1500_.jpg" },
    { author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81Izv2GRWoL._SL1500_.jpg" },
    { author: "L.J Smith", image: "https://m.media-amazon.com/images/I/71QDcBNHDeL._SL1500_.jpg" },
    { author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/814pUv-EGbL._SL1500_.jpg" },
    { author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/81rLg+AqxpL._SL1500_.jpg" },
    { author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/815FZfu4GZL._SL1500_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/814HWxuZiCL._SL1500_.jpg" },
    { author: "FML Pepper", image: "https://m.media-amazon.com/images/I/81QEHr5OLYL._SL1500_.jpg" },
    { author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/91SDZ2eUj+L._SL1500_.jpg" },
    { author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/71lfuzyB-PL._SL1500_.jpg" },
    { author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/91PVgPnC2iL._SL1500_.jpg" },
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/A1XuJkRHoYL._SL1500_.jpg" },
    { author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81u8c5lziEL._SL1500_.jpg" },
    { author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/816bO8cDqXL._SL1500_.jpg" },
    { author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81Vhnel+xxL._SL1500_.jpg" },
    { author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81GtPP6nTlL._SL1500_.jpg" },
    { author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/81nD6jFPuTL._SL1500_.jpg" },
    { author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81oopRph1QL._SL1500_.jpg" },
    { author: "FML Pepper", image: "https://m.media-amazon.com/images/I/81vlGZZ-VSL._SL1485_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/61z4-KJmq4L._SL1000_.jpg" },
    { author: "Alê Santos", image: "https://m.media-amazon.com/images/I/81t68UXsI9L._SL1500_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/816FvhiR3KL._SL1500_.jpg" },
    { author: "L.J Smith", image: "https://m.media-amazon.com/images/I/512LlTTb-NL._SL1500_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/81TjnGG0g7L._SL1500_.jpg" },
    { author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/81-STfcnLJL._SL1500_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/616VAtZ4QoL._SL1360_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/71RtaONRPsL._SL1500_.jpg" },
    { author: "Alê Santos", image: "https://m.media-amazon.com/images/I/91hHLX7p1YL._SL1500_.jpg" },
    { author: "Holly Black", image: "https://m.media-amazon.com/images/I/613TrCHIx3L._SL1360_.jpg" },
    { author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81bkmJnflPL._SL1500_.jpg" },
    { author: "Elena Armas", image: "https://m.media-amazon.com/images/I/71SliYa-JkL._SL1500_.jpg" },
    { author: "L.J Smith", image: "https://m.media-amazon.com/images/I/713X0lJJTXS._SL1500_.jpg" },
    { author: "Elena Armas", image: "https://m.media-amazon.com/images/I/7133U3EN9lL._SL1500_.jpg" },
    { author: "FML Pepper", image: "https://m.media-amazon.com/images/I/A1rotOVldOL._SL1500_.jpg" },
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/91SlcrwGPLS._SL1500_.jpg" },
    { author: "L.J Smith", image: "https://m.media-amazon.com/images/I/71AvqYYFvXL._SL1240_.jpg" },
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/A1OouJDeznL._SL1500_.jpg" },
    { author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/91r5G8RxqfL._SL1500_.jpg" },
    { author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/71ii3Fu++9L._SL1500_.jpg" },
    { author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/81gz4Lx9l5L._SL1500_.jpg" },
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/81OYnc8B7nL._SL1500_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/71F7XNElBxL._SL1008_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/71jrHhPcE6L._SL1404_.jpg" },
    { author: "Holly Black", image: "https://m.media-amazon.com/images/I/81FH6q0EqYS._SL1500_.jpg" },
    { author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/71fPFgNoQ0L._SL1500_.jpg" },
    { author: "Holly Black", image: "https://m.media-amazon.com/images/I/71r7KaVqTFL._SL1437_.jpg" },
    { author: "Alê Santos", image: "https://m.media-amazon.com/images/I/71IWqd49RgL._SL1500_.jpg" },
    { author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81iUrbors9L._SL1500_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/91izqT4CK5L._SL1500_.jpg" },
    { author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81NqyuC2M3L._SL1500_.jpg" },
    { author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81O6eWVPaiL._SL1500_.jpg" },
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/A1xOwZJDOVL._SL1500_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/71iCWxBKsiL._SL1358_.jpg" },
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/91ledGOKhgL._SL1500_.jpg" },
    { author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81b48B0vpNL._SL1500_.jpg" },
    { author: "Holly Black", image: "https://m.media-amazon.com/images/I/91GPRQQ3V1L._SL1500_.jpg" },
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/71pPLUph3DL._SL1500_.jpg" },
    { author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/81yIhzRW15L._SL1500_.jpg" },
    { author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/81B1l-YXUkL._SL1500_.jpg" },
    { author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/81QfnQRnYxL._SL1500_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/71lk+D2w8RL._SL1404_.jpg" },
    { author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/81m2veDZTGL._SL1500_.jpg" },
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/A1-FjRUWOhL._SL1500_.jpg" },
    { author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/91UkcpRvEXL._SL1500_.jpg" },
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/91CC0CiT+cL._SL1500_.jpg" },
    { author: "Lynn Painter", image: "https://m.media-amazon.com/images/I/61NIKTSzi1L._SL1005_.jpg" },
    { author: "Holly Black", image: "https://m.media-amazon.com/images/I/81GhdNKiIOL._SL1500_.jpg" },
    { author: "Colleen Hoover", image: "https://m.media-amazon.com/images/I/91-M+6ZOjuL._SL1500_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/91TEjiURuYL._SL1500_.jpg" },
    { author: "Lynn Painter", image: "https://m.media-amazon.com/images/I/61y5iLUKS3L._SL1005_.jpg" },
    { author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/918Y5362XlL._SL1500_.jpg" },
    { author: "L.J Smith", image: "https://m.media-amazon.com/images/I/81iweLknv3L._SL1500_.jpg" },
    { author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/91YnK6tzAFL._SL1500_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/61VJofOTv-L._SL1007_.jpg" },
    { author: "Carina Rissi", image: "https://m.media-amazon.com/images/I/815g7bykhWL._SL1500_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/91pnDB6miDL._SL1500_.jpg" },
    { author: "Holly Black", image: "https://m.media-amazon.com/images/I/81wQQpHr-NL._SL1500_.jpg" },
    { author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/81SyNVijVaS._SL1500_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/71IzjUwYaEL._SL1404_.jpg" },
    { author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81Hr3TYhA0L._SL1500_.jpg" },
    { author: "L.J Smith", image: "https://m.media-amazon.com/images/I/612NcXJzsdL._SL1500_.jpg" },
    { author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/816tKxfHi1L._SL1500_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/71Z5rStyxWL._SL1404_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/51cybvg2LiL._SL1006_.jpg" },
    { author: "Hannah Grace", image: "https://m.media-amazon.com/images/I/81xPIpkYrcL._SL1500_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/81uhNs6Wx5L._SL1500_.jpg" },
    { author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/91I-SRqzBJL._SL1500_.jpg" },
    { author: "Holly Black", image: "https://m.media-amazon.com/images/I/81TP6nbtKqL._SL1500_.jpg" },
    { author: "Ali Hazelwood", image: "https://m.media-amazon.com/images/I/81LTEfXYgcL._SL1500_.jpg" },
    { author: "L.J Smith", image: "https://m.media-amazon.com/images/I/91NkVodh4NL._SL1500_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/81EEhZOy26L._SL1500_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/91XtGJvioqL._SL1500_.jpg" },
    { author: "Holly Black", image: "https://m.media-amazon.com/images/I/81DnHZSBtqL._SL1500_.jpg" },
    { author: "Julia Quinn", image: "https://m.media-amazon.com/images/I/71b5DDpCvsL._SL1500_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/91uivowF+LL._SL1500_.jpg" },
    { author: "Holly Black", image: "https://m.media-amazon.com/images/I/91N9kjbqxWS._SL1500_.jpg" },
    { author: "Jennifer L. Armentrout", image: "https://m.media-amazon.com/images/I/61pVY9cMPUL._SL1404_.jpg" },
    { author: "Holly Black", image: "https://m.media-amazon.com/images/I/81pB4ymIc3L._SL1500_.jpg" },
    { author: "Elle Kennedy", image: "https://m.media-amazon.com/images/I/91oyypSxfeS._SL1500_.jpg" },
    { author: "Brittainy Cherry", image: "https://m.media-amazon.com/images/I/81ukm9QQ-vS._SL1500_.jpg" },
    { author: "L.J Smith", image: "https://m.media-amazon.com/images/I/91Y7L8vnqQL._SL1500_.jpg"}
];

function filterBooks(event) {
    if (!event) { // Se não houver evento, exibe todos os livros
        paginateBooks(books);
        return;
    }
    var selectedAuthor = event.target.value; // Obtém o autor selecionado
    var filteredBooks = books.filter(function (book) { // Filtra os livros pelo autor selecionado
        return selectedAuthor === "" || book.author === selectedAuthor;
    });
    paginateBooks(filteredBooks);
}

const select = document.getElementById("filter-select");
select.addEventListener("change", filterBooks);


function paginateBooks(books) { // Função para exibir os livros paginados
    var itemsPerPage = 12;
    var limit = Math.ceil(books.length / itemsPerPage);
    totalPages = limit; // Atualiza o total de páginas
    var paginationContainer = document.getElementById("book-list");
    paginationContainer.innerHTML = "";
    document.getElementById("page-numbers").innerHTML = ""; // Limpa os botões de página

    for (var i = 1; i <= totalPages; i++) {
        let button = document.createElement("button");
        button.innerText = i; // Adiciona o número da página no botão
        button.addEventListener("click", function () {
            currentPage = button.innerText; // Atualiza a página atual
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
                <div class="single_recommendation">
                    <div class="recommendation_image">
                        <img src="${book.image}" alt="${book.author}">
                    </div>
                </div>`;
            // paginationContainer.appendChild(bookElement);
            page.appendChild(bookElement);
        });

        paginationContainer.appendChild(page);
    }

    showPage(0); // Mostrar a primeira página por padrão
}

function showPage(pageIndex) {
    const buttons = document.querySelectorAll(".button-number"); // Seleciona todos os botões de página
    buttons.forEach(function (button) {
        button.classList.remove("active"); // Remove a classe active de todos os botões
    });
    buttons[pageIndex].classList.add("active"); // Adiciona a classe active no botão da página atual

    var pages = document.querySelectorAll(".page");
    pages.forEach(function (page, index) {
        if (index === pageIndex) {
            page.classList.remove("hidden");
        } else {
            page.classList.add("hidden");
        }
    });
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
    showPage(currentPage - 1); // Lembre-se que o índice da página começa em 0
}

// Variáveis para controlar a paginação
let currentPage = 1;
let totalPages = 0;

// Chamando a função para exibir os livros inicialmente
filterBooks();