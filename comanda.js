
function adicionarPedido(mesa, item) {
    const produtos = JSON.parse(localStorage.getItem(`comanda-mesa${mesa}`)) || [];
    produtos.push(item);
    localStorage.setItem(`comanda-mesa${mesa}`, JSON.stringify(produtos));
  
    exibirProdutos(mesa);
  
    document.getElementById('pedido-input').value = ''; // Limpar o campo de entrada
  }


  function calcularPrecoTotal() {
    var tabela = document.getElementById("cardapioMesa1");
    var linhas = tabela.getElementsByTagName("tr");
    var total = 0;

    for (var i = 1; i < linhas.length - 1; i++) {
      var linha = linhas[i];
      var checkbox = linha.getElementsByTagName("input")[0];
      var preco = linha.getElementsByClassName("preco")[0].innerHTML;
      preco = parseFloat(preco);

      if (checkbox.checked) {
        total += preco;
      }
    }

    document.getElementById("totalPreco").innerHTML = total.toFixed(2);
  }

  
function exibirProdutos(mesa) {
    const listaProdutos = document.getElementById(`comanda-mesa${mesa}`);
    listaProdutos.innerHTML = ""; // Limpar a lista antes de exibir novamente
  
    const produtos = JSON.parse(localStorage.getItem(`comanda-mesa${mesa}`));
    if (produtos) {
      let contador = 1;
  
      for (const item of produtos) {
        const novoItem = document.createElement('span');
        novoItem.textContent = `${contador}. ${item}`;
  
        listaProdutos.appendChild(novoItem);
        listaProdutos.appendChild(document.createElement('br')); // Quebrar a linha
  
        contador++;
      }
    }
  }

  function calcularPrecoTotal() {
    var tabela = document.getElementById("cardapioMesa1");
    var linhas = tabela.getElementsByTagName("tr");
    var total = 0;

    for (var i = 1; i < linhas.length - 1; i++) {
      var linha = linhas[i];
      var checkbox = linha.getElementsByTagName("input")[0];
      var preco = linha.getElementsByClassName("preco")[0].innerHTML;
      preco = parseFloat(preco);

      if (checkbox.checked) {
        total += preco;
      }
    }

    document.getElementById("totalPreco").innerHTML = total.toFixed(2);
  }

  




  // Chamar a função para exibir os produtos ao carregar a página
  window.onload = function() {
    exibirProdutos(1);
  };

  function finalizarPedido(mesa) {
    // Limpar os registros do localStorage
    localStorage.removeItem(`comanda-mesa${mesa}`);
  
    // Limpar a exibição dos produtos na página
    const listaProdutos = document.getElementById(`comanda-mesa${mesa}`);
    listaProdutos.innerHTML = "";
  }
  
