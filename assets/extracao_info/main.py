from bs4 import BeautifulSoup
import time
import sys
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By

sys.path.insert(0, '/usr/lib/chromium-browser/chromedriver')

authors = (
    'Ali Hazelwood', 'Alê Santos', 'Brittainy Cherry', 'Carina Rissi', 'Colleen Hoover', 'Elena Armas', 'Elle Kennedy',
    'Hannah Grace', 'Holly Black', 'Isabel Allende', 'Jennifer L. Armentrout', 'Julia Quinn', 'L.J Smith ', 'FML Pepper',
    'Lynn Painter', 'V. E. Schwab')

# Tempo de início da requisição
start_time = time.time()

books_list = []

for author in authors:
    name_plus = author.replace(' ', '+')
    name_less = author.replace(' ', '-')

    driver = webdriver.Chrome()
    driver.get(
        f'https://www.amazon.com.br/Romance-{name_less}-Livros/s?rh=n%3A7882388011%2Cp_lbr_books_authors_browse-bin%3A{name_plus}')
    content = driver.page_source
    soup = BeautifulSoup(content, 'lxml')  # Pegar o conteudo da pagina

    if not soup.find('a',
                     class_='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal'):  # Se não encontrar a tag, recarregar a página
        driver.refresh()
        time.sleep(3)  # Aguarda alguns segundos para a página carregar completamente
        content = driver.page_source
        soup = BeautifulSoup(content, 'lxml')

    books = soup.find_all('a', class_='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal')

    href_img = [book.get('href') for book in books]  # Pegar o href de cada livro

    for href in href_img:
        driver.get(f'https://www.amazon.com.br{href}')
        time.sleep(3)
        content = driver.page_source
        soup = BeautifulSoup(content, 'lxml')

        # Recarregar a página ate aparece o nome do livro
        max_tentativas = 10
        tentativas = 0

        while not soup.find('span',
                            class_='a-size-extra-large celwidget') and tentativas < max_tentativas:  # Recarregar 10 vezes a página ate aparece o nome do livro
            tentativas += 1

            driver.get(f'https://www.amazon.com.br{href}')
            time.sleep(3)
            content = driver.page_source
            soup = BeautifulSoup(content, 'lxml')

        if tentativas == max_tentativas:
            continue

        title = soup.find('span', class_='a-size-extra-large celwidget').text

        if 'Kit' in title or 'Box' in title:
            continue
        elif '- Edição' in title:
            title = title.split(' -')[0]
        elif '(Sucesso' in title or '( Sucesso' in title:
            title = title.split(' (')[0]
        elif ': ' in title:
            title = title.split(':')[0]

        clickable = driver.find_element(By.ID, 'imgTagWrapperId')
        ActionChains(driver).click(clickable).perform()

        imagem = driver.page_source
        soup = BeautifulSoup(imagem, 'lxml')

        max_tentativas = 10
        tentativas = 0

        while not soup.find('div', id='ivLargeImage').find('img') and tentativas < max_tentativas:
            tentativas += 1

            driver.refresh()
            clickable = driver.find_element(By.ID, 'imgTagWrapperId')
            ActionChains(driver).click(clickable).perform()

            imagem = driver.page_source
            soup = BeautifulSoup(imagem, 'lxml')

        if soup.find('div', id='ivLargeImage').find('img'):
            url = soup.find('div', id='ivLargeImage').find('img').get('src')
        else:
            continue

        if tentativas == max_tentativas:
            continue

        books_list.append({'author': author, 'url': url})

    driver.quit()

    # Quero criar um arquivo .txt com o nome do autor e a url da imagem
with open(f'url_capas.txt', 'w') as file:
    for book in books_list:
        file.write(f'author:"{book["author"]}", image: "{book["url"]}"\n')
    file.close()

# Tempo de término da requisição
end_time = time.time()

# Calculando e imprimindo o tempo total da requisição
tempo_total = end_time - start_time
print(f"Tempo total da requisição: {tempo_total} segundos")
