console.log("oi");
// ==== Recomendação de livros
var books = [
    { author: "Ali Hazelwood", image: "/assets/images/books/Ali-Hazelwood/a-hipótese-do-amor.jpg" },
    { author: "Ali Hazelwood", image: "/assets/images/books/Ali-Hazelwood/a-razão-do-amor.jpg" },
    { author: "Ali Hazelwood", image: "/assets/images/books/Ali-Hazelwood/abaixo-de-zero.jpg" },
    { author: "Ali Hazelwood", image: "/assets/images/books/Ali-Hazelwood/amor-teoricamente.jpg" },
    { author: "Ali Hazelwood", image: "/assets/images/books/Ali-Hazelwood/noiva.jpg" },
    { author: "Ali Hazelwood", image: "/assets/images/books/Ali-Hazelwood/odeio-te-amar.jpg" },
    { author: "Ali Hazelwood", image: "/assets/images/books/Ali-Hazelwood/presa-com-você.jpg" },
    { author: "Ali Hazelwood", image: "/assets/images/books/Ali-Hazelwood/sob-o-mesmo-teto.jpg" },
    { author: "Ali Hazelwood", image: "/assets/images/books/Ali-Hazelwood/xeque-mate.jpg" },
    { author: "Alicia Bianchi", image: "/assets/images/books/Alicia-Bianchi/Acordo com um Bilionário.jpg" },
    { author: "Alicia Bianchi", image: "/assets/images/books/Alicia-Bianchi/Bilionário de Aluguel.jpg" },
    { author: "Alicia Bianchi", image: "/assets/images/books/Alicia-Bianchi/Comprada pelo Magnata.jpg" },
    { author: "Alicia Bianchi", image: "/assets/images/books/Alicia-Bianchi/Leiloada Para o CEO.jpg" },
    { author: "Alicia Bianchi", image: "/assets/images/books/Alicia-Bianchi/Minha Redenção.jpg" },
    { author: "Alicia Bianchi", image: "/assets/images/books/Alicia-Bianchi/Nosso Último Acordo.jpg" },
    { author: "Alicia Bianchi", image: "/assets/images/books/Alicia-Bianchi/Sua Propriedade.jpg" },
    { author: "Bárbara Lorrany", image: "/assets/images/books/Barbara-Lorrany/A ESPOSA POR CONVENIÊNCIA DO BILIONÁRIO.jpg" },
    { author: "Bárbara Lorrany", image: "/assets/images/books/Barbara-Lorrany/EM CHAMAS POR VOCÊ.jpg" },
    { author: "Bárbara Lorrany", image: "/assets/images/books/Barbara-Lorrany/O ABUSADO DO MEU CHEFE.jpg" },
    { author: "Bárbara Lorrany", image: "/assets/images/books/Barbara-Lorrany/O ARROGANTE.jpg" },
    { author: "Bárbara Lorrany", image: "/assets/images/books/Barbara-Lorrany/O AUTORITÁRIO.jpg" },
    { author: "Bárbara Lorrany", image: "/assets/images/books/Barbara-Lorrany/O RABUGENTO DO MEU CHEFE.jpg" },
    { author: "Bárbara Lorrany", image: "/assets/images/books/Barbara-Lorrany/SENTIMENTO TEMPESTUOSO.jpg" },
    { author: "Brittainy Cherry", image: "/assets/images/books/Brittainy-Cherry/a-chama-dentro-de-nós.jpg" },
    { author: "Brittainy Cherry", image: "/assets/images/books/Brittainy-Cherry/a-força-que-nos-atrai.jpg" },
    { author: "Brittainy Cherry", image: "/assets/images/books/Brittainy-Cherry/arte-alma.jpg" },
    { author: "Brittainy Cherry", image: "/assets/images/books/Brittainy-Cherry/as-cartas-que-escrevemos.jpg" },
    { author: "Brittainy Cherry", image: "/assets/images/books/Brittainy-Cherry/estrelas-do-norte.jpg" },
    { author: "Brittainy Cherry", image: "/assets/images/books/Brittainy-Cherry/luzes-do-leste.jpg" },
    { author: "Brittainy Cherry", image: "/assets/images/books/Brittainy-Cherry/no-ritmo-do-amor.jpg" },
    { author: "Brittainy Cherry", image: "/assets/images/books/Brittainy-Cherry/o-ar-que-ele-respira.jpg" },
    { author: "Brittainy Cherry", image: "/assets/images/books/Brittainy-Cherry/ondas-do-oeste.jpg" },
    { author: "Brittainy Cherry", image: "/assets/images/books/Brittainy-Cherry/o-silêncio-das-águas.jpg" },
    { author: "Brittainy Cherry", image: "/assets/images/books/Brittainy-Cherry/tempestades-do-sul.jpg" },
    { author: "Brittainy Cherry", image: "/assets/images/books/Brittainy-Cherry/um-amor-desastroso.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/as-mil-partes-do-meu-coração.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/até-o-verão-terminar.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/confesse.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/e-assim-que-acaba.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/e-assim-que-começa.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/em-busca-de-Cinderela-e-Em-busca-da-perfeição.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/essa-garota.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/layla.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/novembro-9.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/nunca-jamais.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/o-lado-feio-do-amor.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/pausa.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/sem-esperança.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/se-não-fosse-você.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/talvez-agora.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/talvez-um-dia.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/tarde-demais.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/todas-as-suas-(im)perfeições.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/uma-segunda-chance.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/um-caso-perdido.jpg" },
    { author: "Colleen Hoover", image: "/assets/images/books/Colleen-Hoover/verity.jpg" },
    { author: "Elle Kennedy", image: "/assets/images/books/Elle-Kennedy/a-conquista.jpg" },
    { author: "Elle Kennedy", image: "/assets/images/books/Elle-Kennedy/fama-de-garota-má.jpg" },
    { author: "Elle Kennedy", image: "/assets/images/books/Elle-Kennedy/o-acordo.jpg" },
    { author: "Elle Kennedy", image: "/assets/images/books/Elle-Kennedy/o-efeito-graham.jpg" },
    { author: "Elle Kennedy", image: "/assets/images/books/Elle-Kennedy/o-erro.jpg" },
    { author: "Elle Kennedy", image: "/assets/images/books/Elle-Kennedy/o-jogo.jpg" },
    { author: "Elle Kennedy", image: "/assets/images/books/Elle-Kennedy/o-legado.jpg" },
    { author: "Elle Kennedy", image: "/assets/images/books/Elle-Kennedy/síndrome-da-boa-garota.jpg" },
    { author: "Elle Kennedy", image: "/assets/images/books/Elle-Kennedy/the-Chase.jpg" },
    { author: "Elle Kennedy", image: "/assets/images/books/Elle-Kennedy/the-Dare.jpg" },
    { author: "Elle Kennedy", image: "/assets/images/books/Elle-Kennedy/the-Play.jpg" },
    { author: "Elle Kennedy", image: "/assets/images/books/Elle-Kennedy/the-Risk.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/a-bailarina-e-a-fera.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/chama-distorcida.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/correndo-para-você.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/cruel-desejo.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/esperando-por-você.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/fugindo-com-você.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/honra-distorcida.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/lealdade-distorcida.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/lutando-por-você.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/mentira-distorcida.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/princesa-distorcida.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/príncipe-distorcido.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/sobrevivendo-por-você.jpg" },
    { author: "Evilane Oliveira", image: "/assets/images/books/Evilane-Oliveira/sua-unica-salvação.jpg" },
    { author: "Fernanda Santana", image: "/assets/images/books/Fernanda-Santana/A melhor parte de mim.jpg" },
    { author: "Fernanda Santana", image: "/assets/images/books/Fernanda-Santana/Acredite em mim.jpg" },
    { author: "Fernanda Santana", image: "/assets/images/books/Fernanda-Santana/Além das aparências.jpg" },
    { author: "Fernanda Santana", image: "/assets/images/books/Fernanda-Santana/Confie em mim.jpg" },
    { author: "Fernanda Santana", image: "/assets/images/books/Fernanda-Santana/Ele não faz o meu tipo.jpg" },
    { author: "Fernanda Santana", image: "/assets/images/books/Fernanda-Santana/Entregue-se a mim.jpg" },
    { author: "Fernanda Santana", image: "/assets/images/books/Fernanda-Santana/Incompatíveis.jpg" },
    { author: "Fernanda Santana", image: "/assets/images/books/Fernanda-Santana/Indecifrável.jpg" },
    { author: "Fernanda Santana", image: "/assets/images/books/Fernanda-Santana/Inocente tentação.jpg" },
    { author: "Fernanda Santana", image: "/assets/images/books/Fernanda-Santana/Meu declínio.jpg" },
    { author: "Laura Amorim", image: "/assets/images/books/Laura-Amorim/a-Voz-do-Nosso-Amor.jpg" },
    { author: "Laura Amorim", image: "/assets/images/books/Laura-Amorim/o-Silêncio-do-Nosso-Amor.jpg" },
    { author: "Laura Amorim", image: "/assets/images/books/Laura-Amorim/se-não-fosse-por-você.jpg" },
    { author: "Mellisa Christine", image: "/assets/images/books/Mellisa-Christine/Ascensão.jpg" },
    { author: "Mellisa Christine", image: "/assets/images/books/Mellisa-Christine/Coroa de Cinzas - Parte 1.jpg" },
    { author: "Mellisa Christine", image: "/assets/images/books/Mellisa-Christine/Coroa de Cinzas - Parte II.jpg" },
    { author: "Mellisa Christine", image: "/assets/images/books/Mellisa-Christine/Interseção.jpg" },
    { author: "Mellisa Christine", image: "/assets/images/books/Mellisa-Christine/Obsessão.jpg" },
    { author: "Tatiane Biasi", image: "/assets/images/books/Tatiane-Biasi/E se eu me importasse.jpg" },
    { author: "Tatiane Biasi", image: "/assets/images/books/Tatiane-Biasi/E se eu precisasse de você.jpg" },
    { author: "Tatiane Biasi", image: "/assets/images/books/Tatiane-Biasi/E se você soubesse.jpg" },
    { author: "Tatiane Biasi", image: "/assets/images/books/Tatiane-Biasi/Pecado Preferido.jpg" },
    { author: "Tatiane Biasi", image: "/assets/images/books/Tatiane-Biasi/Todas as nossas estrelas.jpg" },
    { author: "Tatiane Biasi", image: "/assets/images/books/Tatiane-Biasi/Todas As Nossas Mentiras.jpg" },
    { author: "Tatiane Biasi", image: "/assets/images/books/Tatiane-Biasi/Uma Nova Chance.jpg" },
];

function filterBooks(event) {
    if (!event) {
        paginateBooks(books);
        return;
    }
    var selectedAuthor = event.target.value;
    var filteredBooks = books.filter(function (book) {
        return selectedAuthor === "" || book.author === selectedAuthor;
    });
    paginateBooks(filteredBooks);
}

const select = document.getElementById("filter-select");
select.addEventListener("change", filterBooks);


function paginateBooks(books) {
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