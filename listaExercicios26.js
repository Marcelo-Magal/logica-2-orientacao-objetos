class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade
}

let livroUm = new Livro();
livroUm.Titulo = "Título 1";
livroUm.Autor = "Autor 1";
livroUm.Editora = "Editora 1";
livroUm.AnoDePublicacao = 2001;
livroUm.Disponibilidade = true;

let livroDois = new Livro();
livroDois.Titulo = "Título 2";
livroDois.Autor = "Autor 2";
livroDois.Editora = "Editora 2";
livroDois.AnoDePublicacao = 2002;
livroDois.Disponibilidade = false;

let livroTres = new Livro();
livroTres.Titulo = "Título 3";
livroTres.Autor = "Autor 3";
livroTres.Editora = "Editora 3";
livroTres.AnoDePublicacao = 2003;
livroTres.Disponibilidade = true;

let livros = [livroUm, livroDois, livroTres]

class Biblioteca {
    Nome
    Endereco
    Telefone

    BuscarLivro(titulo) {
        for (let i = 0; i < livros.length; i++) {
            if (titulo == livros[i].Titulo)
            console.log(livros[i])
        }
    }

    EmprestarLivro(titulo) {
        for (let i = 0; i < livros.length; i++) {
            if (titulo == livros[i].Titulo) {
                if (livros[i].Disponibilidade == true) {
                    livros[i].Disponibilidade = false;
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    DevolverLivro(titulo) {
        for (let i = 0; i < livros.length; i++) {
            if (titulo == livros[i].Titulo) {
            if (livros[i].Disponibilidade == false)
            livros[i].Disponibilidade = true; 
            }
        }
    }    
}

let biblioteca = new Biblioteca();
biblioteca.Nome = "NomeBibli"
biblioteca.Endereco = "EnderecoBibli"
biblioteca.Telefone = "22222222"

biblioteca.BuscarLivro("Título 2");

biblioteca.EmprestarLivro("Título 1");

biblioteca.DevolverLivro("Título 2");
