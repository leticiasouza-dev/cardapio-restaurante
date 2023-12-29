1 - O App deve carregar pratos do restaurante com imagem, nome, categoria, descrição e preço
![Imagem, nome, categoria, descrição e preço](./img-especificações/image.png)

2- Os dados da aplicação devem ser estáticos e armazenados localmente
![Coleção de dados](./img-especificações/image-1.png)

3- A aplicação deve ser iniciada mostrando os pratos da categoria "entrada"
![Aplicação iniciada com os pratos da categoria "entrada"](./img-especificações/image-3.png)

4- A aplicação deve permitir ao usuário filtrar os pratos através dos botões de categoria
![Pratos por categoria](./img-especificações/image-4.png)

5- Sempre que um botão for clicado, ele deve "acender", ou seja, ele deve mudar de cor como indicação de que foi clicado pelo usuário
![Botões acesos](./img-especificações/image-5.png)

6- A aplicação deve permitir a busca por pratos quando um usuário digitar o nome ou a descrição de um prato no campo de busca
![Buscando pratos por nome](./img-especificações/image-6.png)

![Buscando pratos por descrição](./img-especificações/image-7.png)

7- A busca deve ocorrer a partir do 3° caractere digitado, deve aceitar textos parciais e também deve ignorar letras minúsculas ou maiúsculas no resultado
Exemplo: Uma busca por "sa", tem menos de três caracteres e não executa nada na página.
![Resultado onde o número de caracteres digitados não atende o requisito da busca](./img-especificações/image-8.png)

Exemplo: Buscar por "Sal" deve retornar resultados que contenham a palavra "salada" ou "salmão" no nome ou descrição.
![Resultado onde o número de caracteres digitados atende o requisito da busca](./img-especificações/image-9.png)

![Resultado da busca com o texto em minúsculo e maiúsculo](./img-especificações/image-10.png)

8- Quando um texto digitado no campo de busca for totalmente apagado, a lista exibida na tela não precisa ser atualizada. Isso acontecerá apenas se o usuário clicar em alguma categoria ou se realizar uma nova busca
![Resultado da busca após o texto digitado ser apagado](./img-especificações/image-11.png)

9- Fontes usadas no projeto
Para o desenvolvimento deste projeto serão utilizadas as fontes Poppins e Dancing Script como fontes padrão para os textos da página

Código HTML das fontes do projeto

font-family: 'Dancing Script', cursive;
font-family: 'Poppins', sans-serif;

onde serão utilizada cada fonte:
![Utilização das fontes no projeto (parte 1)](./img-especificações/image-12.png)

![Utilização das fontes no projeto (parte 2)](./img-especificações/image-13.png)

10- Paleta de cores
No desenvolvimento do projeto será utilizado a seguinte paleta de coresna página do cardápio do restaurante:

#daa520: ![onde será utilizada essa cor](./img-especificações/image-14.png)
#fff
#f3f3f3
#000000
#fff

![onde as demais cores seão utilizadas, na parte de buscas](./img-especificações/image-15.png)
![Container e suas cores de fundo e de texto](./img-especificações/image-16.png)

11- Imagens do projeto
No desenvolvimento do projeto, além das imagens contidas na coleção de dados, serão utilizadas mais sete imagens na página:

Uma imagem que será utilizada como banner da página;
Seis imagens que serão utilizadas como ícones dos botões de categoria;
Uma imagem que será utilizada como ícone (lupa) do campo de busca.

![Imagens utilizadas no projeto](./img-especificações/image-17.png)

12- Especificações do layout do projeto
![especificação do layout](./img-especificações/image-18.png)
![espaçamento do conatiner](./img-especificações/image-19.png)
![especificações do botão](./img-especificações/image-20.png)
![especificações do container cards](./img-especificações/image-21.png)
![especificação dos cards](./img-especificações/image-22.png)

13- Responsividade do projeto
O projeto deverá ser responsivo, ou seja, se adaptar a diversas resoluções de tela.
![Comportamento da página nas resoluções 1440px e 1024px - computadores grande e pequenos](./img-especificações/image-23.png)
![Comportamento da página nas resoluções 768px e 375px - tablet e celular](./img-especificações/image-24.png)

![Detalhes do crescimento de tamanho dos cards](./img-especificações/image-25.png)
