const todosOsAlunos = document.querySelectorAll(".aluno");

// calcular a media para cada aluno
for (let i = 0; i < todosOsAlunos.length; i++) {
  const aluno = todosOsAlunos[i];

  const notaUmTd = aluno.querySelector(".info-notaum").textContent;
  const notaDoisTd = aluno.querySelector(".info-notadois").textContent;
  const valorDaMediaTd = aluno.querySelector(".info-media");
  const valorDaMedia = calcularMedia(notaUmTd, notaDoisTd);
  valorDaMediaTd.textContent = valorDaMedia;
}

function calcularMedia(notaUmTd, notaDoisTd) {
  let valorMediaCalculada = 0;
  valorMediaCalculada = (parseFloat(notaUmTd) + parseFloat(notaDoisTd)) / 2;
  return valorMediaCalculada;
}

const botao = document.querySelector("#adicionar-aluno")
botao.addEventListener('click', function (event) {
  event.preventDefault();

  const formulario = document.querySelector("#form-adiciona");

  const nomeAluno = formulario.nome.value;
  const notaUm = formulario.notaum.value;
  const notaDois = formulario.notadois.value;
  const mediaAluno = calcularMedia(notaUm, notaDois);

  const alunoTr = document.createElement("tr");
  const nomeAlunoTd = document.createElement("td");
  const notaUmAlunoTd = document.createElement("td");
  const notaDoisAlunoTd = document.createElement("td");
  const mediaAlunoTd = document.createElement("td");

  nomeAlunoTd.textContent = nomeAluno;
  notaUmAlunoTd.textContent = notaUm;
  notaDoisAlunoTd.textContent = notaDois;
  mediaAlunoTd.textContent = mediaAluno;

  alunoTr.appendChild(nomeAlunoTd);
  alunoTr.appendChild(notaUmAlunoTd);
  alunoTr.appendChild(notaDoisAlunoTd);
  alunoTr.appendChild(mediaAlunoTd);

  const tabela = document.querySelector("#tabela-alunos");
  tabela.appendChild(alunoTr);

})

