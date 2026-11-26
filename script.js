
document.addEventListener("DOMContentLoaded", () => {
  const botaoConfigVisual = document.getElementById("btn-config-celular");
  const modalConfigVisual = document.getElementById("modal-config-visual");
  const botaoFecharConfigVisual = document.getElementById("fechar-config-visual");

  botaoConfigVisual.addEventListener("click", () => {
    modalConfigVisual.showModal();
  });

  const campoCorWallpaper = document.getElementById("cor-wallpaper");
  const botaoSalvarWallpaper = document.getElementById("salvar-wallpaper");
  

  botaoFecharConfigVisual.addEventListener("click", () => {
    modalConfigVisual.close();
  });
  const botaoInventario = document.getElementById("btn-inventario");
  const botaoVoltar = document.getElementById("voltar-home");

  const telaHome = document.querySelector(".home");
  const telaInventario = document.getElementById("tela-inventario");

  const modal = document.getElementById("modal-item");
  const botaoFechar = document.getElementById("fechar-modal");
  const botaoEditar = document.getElementById("editar-item");
  const botaoExcluir = document.getElementById("excluir-item");

  const itemNome = document.getElementById("item-nome");
  const itemDescricao = document.getElementById("item-descricao");
  const itemQuantidade = document.getElementById("item-quantidade");

  if (!botaoInventario || !botaoVoltar || !telaHome ||
      !telaInventario || !modal || !botaoFechar ||
      !botaoEditar || !botaoExcluir) {
    console.error("Erro ao encontrar elementos do aplicativo.");
    return;
  }

// Aplicar a cor salva do wallpaper
const corSalva = localStorage.getItem("lendas_wallpaper");

if (corSalva) {
  telaHome.style.background = `linear-gradient(160deg, ${corSalva}, #0c130f)`;
  campoCorWallpaper.value = corSalva;
}

// Salvar nova cor do wallpaper
botaoSalvarWallpaper.addEventListener("click", () => {
  const novaCor = campoCorWallpaper.value;

  telaHome.style.background = `linear-gradient(160deg, ${novaCor}, #0c130f)`;

  localStorage.setItem("lendas_wallpaper", novaCor);

  modalConfigVisual.close();
});

  // Painel do Mestre
const telaMestre = document.getElementById("tela-mestre");
const botaoAbrirMestre = document.getElementById("abrir-config-mestre");
const botaoVoltarMestre = document.getElementById("voltar-mestre");

// Elementos do perfil do Instagram
const fotoPerfilInstagram = document.getElementById("foto-perfil-instagram");
const usuarioPerfilInstagram = document.getElementById("usuario-perfil-instagram");
const nomePerfilInstagram = document.getElementById("nome-perfil-instagram");
const bioPerfilInstagram = document.getElementById("bio-perfil-instagram");
const descricaoPerfilInstagram = document.getElementById("descricao-perfil-instagram");

// Configurações de horário e localização
const botaoConfigCelular = document.getElementById("config-celular");
const modalConfigCelular = document.getElementById("modal-config-celular");

const campoHorario = document.getElementById("campo-horario");
const campoLocalizacao = document.getElementById("campo-localizacao");

const botaoFecharConfigCelular = document.getElementById("fechar-config-celular");
const botaoSalvarConfigCelular = document.getElementById("salvar-config-celular");
const horarioCelular = document.getElementById("horario-celular");
const horarioStatus = document.getElementById("horario-status");
const localizacaoCelular = document.getElementById("localizacao-celular");

// Carregar configurações salvas
const configSalva = localStorage.getItem("lendas_config_celular");

if (configSalva) {
  const config = JSON.parse(configSalva);

  horarioCelular.textContent = config.horario;
  horarioStatus.textContent = config.horario;
  localizacaoCelular.textContent = config.localizacao;

  campoHorario.value = config.horario;
  campoLocalizacao.value = config.localizacao;
}

// Abrir Painel do Mestre
botaoAbrirMestre.addEventListener("click", () => {
  telaHome.hidden = true;
  telaMestre.hidden = false;
});

// Abrir configurações do celular
botaoConfigCelular.addEventListener("click", () => {
  modalConfigCelular.showModal();
});

// Fechar configurações do celular
botaoFecharConfigCelular.addEventListener("click", () => {
  modalConfigCelular.close();
});

// Salvar configurações do celular
botaoSalvarConfigCelular.addEventListener("click", () => {
  const novoHorario = campoHorario.value;
  const novaLocalizacao = campoLocalizacao.value.trim();

  if (!novoHorario || !novaLocalizacao) {
    alert("Preencha o horário e a cidade.");
    return;
  }

  horarioCelular.textContent = novoHorario;
  horarioStatus.textContent = novoHorario;
  localizacaoCelular.textContent = novaLocalizacao;
  localStorage.setItem("lendas_config_celular", JSON.stringify({
    horario: novoHorario,
    localizacao: novaLocalizacao
  }));

  modalConfigCelular.close();
});

// Voltar para a tela inicial
botaoVoltarMestre.addEventListener("click", () => {
  telaMestre.hidden = true;
  telaHome.hidden = false;
});

// Abrir gerenciamento de NPCs
const telaGerenciarNpcs = document.getElementById("tela-gerenciar-npcs");
const botaoGerenciarNpcs = document.getElementById("gerenciar-npcs");

botaoGerenciarNpcs.addEventListener("click", () => {
  telaMestre.hidden = true;
  telaGerenciarNpcs.hidden = false;
});

// Voltar para o Painel do Mestre
const botaoVoltarGerenciarNpcs = document.getElementById("voltar-gerenciar-npcs");

botaoVoltarGerenciarNpcs.addEventListener("click", () => {
  telaGerenciarNpcs.hidden = true;
  telaMestre.hidden = false;
});

// Abrir janela de criação de NPC
const botaoCriarNpc = document.getElementById("criar-npc");
const modalCriarNpc = document.getElementById("modal-criar-npc");

botaoCriarNpc.addEventListener("click", () => {
  modalCriarNpc.showModal();
});

// Fechar janela de criação de NPC
const botaoCancelarCriarNpc = document.getElementById("cancelar-criar-npc");

botaoCancelarCriarNpc.addEventListener("click", () => {
  modalCriarNpc.close();
});

// Campos do cadastro de NPC
const campoNpcNome = document.getElementById("npc-nome");
const campoNpcUsuario = document.getElementById("npc-usuario");
const campoNpcBio = document.getElementById("npc-bio");
const campoNpcFoto = document.getElementById("npc-foto");

// Lista de NPCs
const listaNpcs = document.getElementById("lista-npcs");

// Carregar NPCs salvos
let npcs = JSON.parse(
  localStorage.getItem("lendas_npcs") || "[]"
);

let npcEditando = null;

// Mostrar NPCs cadastrados
function renderizarNpcs() {
  listaNpcs.innerHTML = "";

  if (npcs.length === 0) {
    listaNpcs.textContent = "Nenhum NPC cadastrado ainda.";
    return;
  }

  npcs.forEach((npc, indice) => {
    const cartao = document.createElement("div");
    cartao.className = "cartao-npc";

    const nome = document.createElement("h3");
    nome.textContent = npc.nome;

    const usuario = document.createElement("p");
    usuario.textContent = "@" + npc.usuario;

    const bio = document.createElement("p");
bio.textContent = npc.bio || "Sem biografia.";

cartao.append(nome, usuario, bio);
const botaoEditar = document.createElement("button");
botaoEditar.textContent = "Editar";

cartao.appendChild(botaoEditar);
const botaoExcluir = document.createElement("button");
botaoExcluir.textContent = "Excluir";

cartao.appendChild(botaoExcluir);
botaoExcluir.addEventListener("click", () => {
  const confirmar = confirm(
    "Tem certeza que deseja excluir este NPC?"
  );

  if (confirmar) {
    npcs.splice(indice, 1);

    localStorage.setItem(
      "lendas_npcs",
      JSON.stringify(npcs)
    );

    renderizarNpcs();
  }
});

botaoEditar.addEventListener("click", () => {
  npcEditando = indice;

  campoNpcNome.value = npc.nome;
  campoNpcUsuario.value = npc.usuario;
  campoNpcBio.value = npc.bio;
  modalCriarNpc.showModal();
});

if (npc.foto) {
  const foto = document.createElement("img");
  foto.src = npc.foto;
  foto.alt = "Foto de " + npc.nome;
  foto.style.width = "100px";
  foto.style.borderRadius = "10px";

  cartao.prepend(foto);
}
    listaNpcs.appendChild(cartao);
  });
}

// Exibir NPCs ao abrir o aplicativo
renderizarNpcs();


// Salvar novo NPC
const botaoSalvarNpc = document.getElementById("salvar-npc");

botaoSalvarNpc.addEventListener("click", () => {
  const nome = campoNpcNome.value.trim();

  const usuario = campoNpcUsuario.value
    .trim()
    .replace(/^@+/, "")
    .replace(/\s+/g, "")
    .toLowerCase();

  const bio = campoNpcBio.value.trim();
  const arquivo = campoNpcFoto.files[0];

  if (!nome || !usuario) {
    alert("Preencha o nome e o nome de usuário do NPC.");
    return;
  }

  if (arquivo && !arquivo.type.startsWith("image/")) {
    alert("Escolha um arquivo de imagem válido.");
    return;
  }

  if (arquivo && arquivo.size > 2 * 1024 * 1024) {
    alert("A imagem deve ter no máximo 2 MB.");
    return;
  }

  function finalizarCadastro(foto) {
    const dadosNpc = {
      nome,
      usuario,
      bio,
      foto
    };
  
    if (npcEditando !== null) {
      dadosNpc.foto = foto || npcs[npcEditando].foto || "";
      npcs[npcEditando] = dadosNpc;
      npcEditando = null;
    } else {
      npcs.push(dadosNpc);
    }

    try {
      localStorage.setItem("lendas_npcs", JSON.stringify(npcs));
    } catch (erro) {
      alert("Não foi possível salvar. Tente uma imagem menor.");
      return;
    }

    renderizarNpcs();

    campoNpcNome.value = "";
    campoNpcUsuario.value = "";
    campoNpcBio.value = "";
    campoNpcFoto.value = "";

    modalCriarNpc.close();
  }

  if (arquivo) {
    const leitor = new FileReader();

    leitor.onload = () => {
      finalizarCadastro(leitor.result);
    };

    leitor.onerror = () => {
      alert("Não foi possível carregar a imagem.");
    };

    leitor.readAsDataURL(arquivo);
  } else {
    finalizarCadastro("");
  }
});


  // Salvamento automático
  const CHAVE_INVENTARIO = "lendas_inventario";

  let itens = {};

  try {
    const dadosSalvos = localStorage.getItem(CHAVE_INVENTARIO);

    if (dadosSalvos) {
      const dados = JSON.parse(dadosSalvos);

      if (dados && typeof dados === "object" && !Array.isArray(dados)) {
        itens = dados;
      }
    }
  } catch (erro) {
    console.error("Não foi possível carregar o inventário:", erro);
  }

  function salvarItens() {
    try {
      localStorage.setItem(CHAVE_INVENTARIO, JSON.stringify(itens));
    } catch (erro) {
      console.error("Não foi possível salvar o inventário:", erro);
      alert("Não foi possível salvar os itens neste navegador.");
    }
  }

  
  // Vida e Sanidade
  const CHAVE_STATUS = "lendas_status";

  const vidaMaxima = 20;
  const sanidadeMaxima = 15;

  let vidaAtual = vidaMaxima;
  let sanidadeAtual = sanidadeMaxima;

  // Carregar valores salvos
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_STATUS));

    if (dados) {
      if (Number.isInteger(dados.vida)) {
        vidaAtual = Math.max(0, Math.min(vidaMaxima, dados.vida));
      }

      if (Number.isInteger(dados.sanidade)) {
        sanidadeAtual = Math.max(0, Math.min(sanidadeMaxima, dados.sanidade));
      }
    }
  } catch (erro) {
    console.error("Erro ao carregar Vida e Sanidade:", erro);
  }

  const barraVida = document.getElementById("barra-vida");
  const textoVida = document.getElementById("texto-vida");

  const barraSanidade = document.getElementById("barra-sanidade");
  const textoSanidade = document.getElementById("texto-sanidade");

  const vidaMenos = document.getElementById("vida-menos");
  const vidaMais = document.getElementById("vida-mais");

  const sanidadeMenos = document.getElementById("sanidade-menos");
  const sanidadeMais = document.getElementById("sanidade-mais");

  // Salvar valores
  function salvarStatus() {
    try {
      localStorage.setItem(CHAVE_STATUS, JSON.stringify({
        vida: vidaAtual,
        sanidade: sanidadeAtual
      }));
    } catch (erro) {
      console.error("Erro ao salvar Vida e Sanidade:", erro);
    }
  }

  // Atualizar Vida
  function atualizarVida() {
    textoVida.textContent = `${vidaAtual} / ${vidaMaxima}`;
    barraVida.style.width = `${(vidaAtual / vidaMaxima) * 100}%`;
  }

  // Atualizar Sanidade
  function atualizarSanidade() {
    textoSanidade.textContent = `${sanidadeAtual} / ${sanidadeMaxima}`;
    barraSanidade.style.width = `${(sanidadeAtual / sanidadeMaxima) * 100}%`;
  }

  // Botões de Vida
  vidaMenos.addEventListener("click", () => {
    vidaAtual = Math.max(0, vidaAtual - 1);
    atualizarVida();
    salvarStatus();
  });

  vidaMais.addEventListener("click", () => {
    vidaAtual = Math.min(vidaMaxima, vidaAtual + 1);
    atualizarVida();
    salvarStatus();
  });

  // Botões de Sanidade
  sanidadeMenos.addEventListener("click", () => {
    sanidadeAtual = Math.max(0, sanidadeAtual - 1);
    atualizarSanidade();
    salvarStatus();
  });

  sanidadeMais.addEventListener("click", () => {
    sanidadeAtual = Math.min(sanidadeMaxima, sanidadeAtual + 1);
    atualizarSanidade();
    salvarStatus();
  });

  // Mostrar valores carregados
  atualizarVida();
  atualizarSanidade();


  // Perfil do personagem
  const CHAVE_PERSONAGEM = "lendas_personagem";

  const modalPersonagem = document.getElementById("modal-personagem");
  const botaoEditarPersonagem = document.getElementById("editar-personagem");
  const botaoFecharPersonagem = document.getElementById("fechar-personagem");
  const botaoSalvarPersonagem = document.getElementById("salvar-personagem");

  const campoNomePersonagem = document.getElementById("campo-personagem-nome");
  const campoIdadePersonagem = document.getElementById("campo-personagem-idade");
  const campoOcupacaoPersonagem = document.getElementById("campo-personagem-ocupacao");
  const campoDescricaoPersonagem = document.getElementById("campo-personagem-descricao");
  const campoFotoPersonagem = document.getElementById("campo-personagem-foto");

  const nomePersonagem = document.getElementById("nome-personagem");
  const idadePersonagem = document.getElementById("idade-personagem");
  const ocupacaoPersonagem = document.getElementById("ocupacao-personagem");
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  const fotoPersonagem = document.getElementById("foto-personagem");

  let fotoSalva = "";

  // Carregar perfil salvo
  function carregarPersonagem() {
    try {
      const dados = JSON.parse(localStorage.getItem(CHAVE_PERSONAGEM));

      if (!dados) return;

      nomePersonagem.textContent = dados.nome || "Sem nome";
      idadePersonagem.textContent = dados.idade || "Não informada";
      ocupacaoPersonagem.textContent = dados.ocupacao || "Não informada";
      descricaoPersonagem.textContent = dados.descricao || "Nenhuma descrição adicionada.";

      if (dados.foto) {
        fotoSalva = dados.foto;
        fotoPersonagem.src = fotoSalva;
        fotoPersonagem.style.display = "block";
      }
    } catch (erro) {
      console.error("Erro ao carregar personagem:", erro);
    }
  }

  // Abrir edição
  botaoEditarPersonagem.addEventListener("click", () => {
    campoNomePersonagem.value = nomePersonagem.textContent;
    campoIdadePersonagem.value =
      idadePersonagem.textContent === "Não informada"
        ? ""
        : idadePersonagem.textContent;

    campoOcupacaoPersonagem.value =
      ocupacaoPersonagem.textContent === "Não informada"
        ? ""
        : ocupacaoPersonagem.textContent;

    campoDescricaoPersonagem.value =
      descricaoPersonagem.textContent === "Nenhuma descrição adicionada."
        ? ""
        : descricaoPersonagem.textContent;

    campoFotoPersonagem.value = "";

    modalPersonagem.showModal();
  });

  // Fechar edição
  botaoFecharPersonagem.addEventListener("click", () => {
    modalPersonagem.close();
  });

  // Salvar perfil
  botaoSalvarPersonagem.addEventListener("click", () => {
    const nome = campoNomePersonagem.value.trim();
    const idade = campoIdadePersonagem.value;
    const ocupacao = campoOcupacaoPersonagem.value.trim();
    const descricao = campoDescricaoPersonagem.value.trim();
    const arquivo = campoFotoPersonagem.files[0];

    if (!nome) {
      alert("Digite o nome do personagem.");
      campoNomePersonagem.focus();
      return;
    }

    if (idade && (!Number.isInteger(Number(idade)) || Number(idade) < 1)) {
      alert("Digite uma idade válida.");
      campoIdadePersonagem.focus();
      return;
    }

    function finalizarSalvamento(foto) {
      const dados = {
        nome,
        idade,
        ocupacao,
        descricao,
        foto
      };

      try {
        localStorage.setItem(CHAVE_PERSONAGEM, JSON.stringify(dados));

        nomePersonagem.textContent = nome;
        idadePersonagem.textContent = idade || "Não informada";
        ocupacaoPersonagem.textContent = ocupacao || "Não informada";
        descricaoPersonagem.textContent = descricao || "Nenhuma descrição adicionada.";

        if (foto) {
          fotoSalva = foto;
          fotoPersonagem.src = foto;
          fotoPersonagem.style.display = "block";
        }

        modalPersonagem.close();

      } catch (erro) {
        console.error("Erro ao salvar personagem:", erro);
        alert("Não foi possível salvar. Tente escolher uma imagem menor.");
      }
    }

    if (arquivo) {
      if (!arquivo.type.startsWith("image/")) {
        alert("Escolha um arquivo de imagem.");
        return;
      }

      if (arquivo.size > 2 * 1024 * 1024) {
        alert("A imagem deve ter no máximo 2 MB.");
        return;
      }

      const leitor = new FileReader();

      leitor.onload = () => {
        finalizarSalvamento(leitor.result);
      };

      leitor.onerror = () => {
        alert("Não foi possível carregar a imagem.");
      };

      leitor.readAsDataURL(arquivo);

    } else {
      finalizarSalvamento(fotoSalva);
    }
  });

  // Restaurar perfil ao abrir o aplicativo
  carregarPersonagem();
  // Nível, perícias e bônus
  const CHAVE_PERICIAS = "lendas_pericias";

  const campoNivel = document.getElementById("nivel-personagem");
  const camposPericias = document.querySelectorAll(".linha-pericia");

  // Carregar dados salvos
  function carregarPericias() {
    try {
      const dados = JSON.parse(localStorage.getItem(CHAVE_PERICIAS));

      if (!dados) return;

      if (campoNivel && Number.isInteger(dados.nivel)) {
        campoNivel.value = Math.max(1, dados.nivel);
      }

      if (Array.isArray(dados.pericias)) {
        camposPericias.forEach((linha, indice) => {
          const campos = linha.querySelectorAll("input");
          const valores = dados.pericias[indice];

          if (!valores) return;

          campos[0].value = valores.pericia ?? 0;
          campos[1].value = valores.bonus ?? 0;
        });
      }

    } catch (erro) {
      console.error("Erro ao carregar perícias:", erro);
    }
  }

  // Salvar dados
  function salvarPericias() {
    const dados = {
      nivel: Number(campoNivel.value),
      pericias: []
    };

    camposPericias.forEach((linha) => {
      const campos = linha.querySelectorAll("input");

      dados.pericias.push({
        pericia: Number(campos[0].value) || 0,
        bonus: Number(campos[1].value) || 0
      });
    });

    try {
      localStorage.setItem(CHAVE_PERICIAS, JSON.stringify(dados));
    } catch (erro) {
      console.error("Erro ao salvar perícias:", erro);
      alert("Não foi possível salvar os dados das perícias.");
    }
  }

  // Salvar quando os valores forem alterados
  if (campoNivel) {
    campoNivel.addEventListener("change", () => {
      if (campoNivel.value === "" || Number(campoNivel.value) < 1) {
        campoNivel.value = 1;
      }

      salvarPericias();
    });
  }

  camposPericias.forEach((linha) => {
    linha.querySelectorAll("input").forEach((campo) => {
      campo.addEventListener("change", () => {
        if (campo.value === "" || Number(campo.value) < 0) {
          campo.value = 0;
        }

        salvarPericias();
      });
    });
  });

  // Restaurar dados ao abrir o aplicativo
  carregarPericias();

  // Navegação
  const telaPericias = document.getElementById("tela-pericias");
  const botaoAbrirPericias = document.getElementById("abrir-pericias");
  const botaoVoltarPersonagem = document.getElementById("voltar-personagem");

  // Instagram
  const telaInstagram = document.getElementById("tela-instagram");
  const botaoInstagram = document.getElementById("btn-instagram");
  const botaoVoltarInstagram = document.getElementById("voltar-instagram");

  // Anotações
const telaAnotacoes = document.getElementById("tela-anotacoes");
const botaoAnotacoes = document.getElementById("btn-anotacoes");
const botaoVoltarAnotacoes = document.getElementById("voltar-anotacoes");

// Janela de anotação
const modalAnotacao = document.getElementById("modal-anotacao");
const botaoNovaAnotacao = document.getElementById("nova-anotacao");
const botaoFecharAnotacao = document.getElementById("fechar-anotacao");
const botaoSalvarAnotacao = document.getElementById("salvar-anotacao");

const campoTituloAnotacao = document.getElementById("campo-titulo-anotacao");
const campoTextoAnotacao = document.getElementById("campo-texto-anotacao");
const listaAnotacoes = document.getElementById("lista-anotacoes");

// Janela de visualização da anotação
const modalVisualizarAnotacao = document.getElementById("modal-visualizar-anotacao");
const botaoFecharVisualizarAnotacao = document.getElementById("fechar-visualizar-anotacao");
const visualizarTituloAnotacao = document.getElementById("visualizar-titulo-anotacao");
const visualizarTextoAnotacao = document.getElementById("visualizar-texto-anotacao");

// Botões de edição e exclusão
const botaoEditarAnotacao = document.getElementById("editar-anotacao");
const botaoExcluirAnotacao = document.getElementById("excluir-anotacao");

// Anotação atualmente selecionada
let indiceAnotacaoSelecionada = null;

// Perfil da Lívia
const telaPerfilInstagram = document.getElementById("tela-perfil-instagram");
const botaoAbrirPerfilLivia = document.getElementById("abrir-perfil-livia");
const botaoVoltarPerfilInstagram = document.getElementById("voltar-perfil-instagram");

// Buscar NPC pelo nome de usuário
function buscarNpcInstagram(usuario) {
  const npcs = JSON.parse(localStorage.getItem("lendas_npcs") || "[]");

  return npcs.find((npc) => npc.usuario === usuario);
}

// Atualizar perfil de NPC no Instagram
function atualizarPerfilNpcInstagram(usuario) {
  const npc = buscarNpcInstagram(usuario);

  if (!npc) {
    alert("NPC não encontrado.");
    return;
  }

  fotoPerfilInstagram.src = npc.foto || "assets/Foto perfil Lívia.jpg";
  nomePerfilInstagram.textContent = npc.nome;
  usuarioPerfilInstagram.textContent = npc.usuario.replace(/^@/, "");
  bioPerfilInstagram.textContent = npc.bio || "";
  descricaoPerfilInstagram.textContent = "";
}

// Abrir perfil
botaoAbrirPerfilLivia.addEventListener("click", () => {
  telaInstagram.hidden = true;
  telaPerfilInstagram.hidden = false;
});

// Perfil do jogador
const telaPerfilJogador = document.getElementById("tela-perfil-jogador");
const botaoAbrirPerfilJogador = document.getElementById("abrir-perfil-jogador");
const botaoVoltarPerfilJogador = document.getElementById("voltar-perfil-jogador");

const fotoPerfilJogador = document.getElementById("foto-perfil-jogador");
const fotoPerfilJogadorVazia = document.getElementById("foto-perfil-jogador-vazia");

const usuarioPerfilJogador = document.getElementById("usuario-perfil-jogador");
const bioNomeJogador = document.getElementById("bio-nome-jogador");
const bioIdadeJogador = document.getElementById("bio-idade-jogador");
const bioOcupacaoJogador = document.getElementById("bio-ocupacao-jogador");
const bioDescricaoJogador = document.getElementById("bio-descricao-jogador");

// Edição do perfil do Instagram
const modalPerfilInstagram = document.getElementById("modal-perfil-instagram");
const botaoEditarPerfilInstagram = document.getElementById("editar-perfil-instagram");
const botaoFecharPerfilInstagram = document.getElementById("fechar-perfil-instagram");
const botaoSalvarPerfilInstagram = document.getElementById("salvar-perfil-instagram");

const campoUsuarioInstagram = document.getElementById("campo-usuario-instagram");
const campoBioInstagram = document.getElementById("campo-bio-instagram");
const bioPersonalizadaJogador = document.getElementById("bio-personalizada-jogador");

// Atualizar perfil do jogador
function atualizarPerfilJogador() {
  const dados = JSON.parse(
    localStorage.getItem("lendas_personagem") || "{}"
  );

  const nome = dados.nome || "Seu personagem";

  usuarioPerfilJogador.textContent = "meu.usuario";
  bioNomeJogador.textContent = nome;

  bioIdadeJogador.textContent = dados.idade || "Não informada";
  bioOcupacaoJogador.textContent = dados.ocupacao || "Não informada";

  bioDescricaoJogador.textContent =
    dados.descricao || "Nenhuma descrição adicionada.";

  if (dados.foto) {
    fotoPerfilJogador.src = dados.foto;
    fotoPerfilJogador.style.display = "block";
    fotoPerfilJogadorVazia.style.display = "none";
  } else {
    fotoPerfilJogador.style.display = "none";
    fotoPerfilJogadorVazia.style.display = "block";

// Carregar dados personalizados do Instagram
const perfilInstagram = JSON.parse(
  localStorage.getItem("lendas_perfil_instagram") || "{}"
);

usuarioPerfilJogador.textContent =
  perfilInstagram.usuario
    ? "@" + perfilInstagram.usuario
    : "@meu.usuario";

bioPersonalizadaJogador.textContent =
  perfilInstagram.bio || "";

  }
}

// Voltar para o feed
botaoVoltarPerfilInstagram.addEventListener("click", () => {
  telaPerfilInstagram.hidden = true;
  telaInstagram.hidden = false;
});

// Abrir perfil do jogador
botaoAbrirPerfilJogador.addEventListener("click", () => {
  atualizarPerfilJogador();

  telaInstagram.hidden = true;
  telaPerfilJogador.hidden = false;
});

// Abrir edição do perfil do Instagram
botaoEditarPerfilInstagram.addEventListener("click", () => {
  const dados = JSON.parse(
    localStorage.getItem("lendas_perfil_instagram") || "{}"
  );

  campoUsuarioInstagram.value = dados.usuario || "";
  campoBioInstagram.value = dados.bio || "";

  modalPerfilInstagram.showModal();
});

// Fechar edição do perfil
botaoFecharPerfilInstagram.addEventListener("click", () => {
  modalPerfilInstagram.close();
});

// Salvar edição do perfil do Instagram
botaoSalvarPerfilInstagram.addEventListener("click", () => {
  const usuario = campoUsuarioInstagram.value
    .trim()
    .replace(/^@+/, "")
    .replace(/\s+/g, "")
    .toLowerCase();

  const bio = campoBioInstagram.value.trim();

  if (!usuario) {
    alert("Digite um nome de usuário.");
    campoUsuarioInstagram.focus();
    return;
  }

  const dados = {
    usuario,
    bio
  };

  localStorage.setItem(
    "lendas_perfil_instagram",
    JSON.stringify(dados)
  );

  usuarioPerfilJogador.textContent = "@" + usuario;
  bioPersonalizadaJogador.textContent = bio;

  modalPerfilInstagram.close();
});

// Voltar para o Instagram
botaoVoltarPerfilJogador.addEventListener("click", () => {
  telaPerfilJogador.hidden = true;
  telaInstagram.hidden = false;
});

 // Curtir publicação
const botaoCurtir = document.getElementById("curtir-publicacao");

let curtiu = localStorage.getItem("lendas_curtida_livia") === "true";

// Atualizar aparência da curtida
function atualizarCurtida() {
  botaoCurtir.classList.toggle("curtiu", curtiu);
  botaoCurtir.textContent = curtiu ? "♥" : "♡";
}

// Salvar curtida ao clicar
botaoCurtir.addEventListener("click", () => {
  curtiu = !curtiu;

  localStorage.setItem("lendas_curtida_livia", curtiu);

  atualizarCurtida();
});

// Carregar curtida salva
atualizarCurtida();

// Sistema de comentários
const formularioComentario = document.getElementById("form-comentario");
const campoComentario = document.getElementById("campo-comentario");
const listaComentarios = document.getElementById("lista-comentarios");

let comentarios = JSON.parse(
  localStorage.getItem("lendas_comentarios_livia") || "[]"
);

// Identificar o personagem que está comentando
const dadosPersonagem = JSON.parse(
  localStorage.getItem("lendas_personagem") || "{}"
);

const nomeQuemComenta = dadosPersonagem.nome || "Você";

// Mostrar comentários salvos
function mostrarComentarios() {
  listaComentarios.innerHTML = "";

  if (comentarios.length === 0) {
    const vazio = document.createElement("p");
    vazio.className = "publicacao-comentarios";
    vazio.textContent = "Nenhum comentário ainda.";
    listaComentarios.appendChild(vazio);
    return;
  }

  comentarios.forEach((comentario) => {
    const paragrafo = document.createElement("p");
    paragrafo.className = "comentario";

    const usuario = document.createElement("strong");
    usuario.textContent = nomeQuemComenta + " ";

    const mensagem = document.createElement("span");
    mensagem.textContent = comentario;

    paragrafo.appendChild(usuario);
    paragrafo.appendChild(mensagem);
    listaComentarios.appendChild(paragrafo);
  });
}

// Publicar comentário
formularioComentario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const texto = campoComentario.value.trim();

  if (texto === "") return;

  comentarios.push(texto);

  localStorage.setItem(
    "lendas_comentarios_livia",
    JSON.stringify(comentarios)
  );

  campoComentario.value = "";
  mostrarComentarios();
});

mostrarComentarios();

  // Abrir inventário
  botaoInventario.addEventListener("click", () => {
    telaHome.hidden = true;
    telaInventario.hidden = false;
  });

  // Voltar para a tela inicial
  botaoVoltar.addEventListener("click", () => {
    telaInventario.hidden = true;
    telaHome.hidden = false;
  });

  // Abrir Instagram
  botaoInstagram.addEventListener("click", () => {
    telaHome.hidden = true;
    telaInstagram.hidden = false;
  });

// Abrir Anotações
botaoAnotacoes.addEventListener("click", () => {
  telaHome.hidden = true;
  telaAnotacoes.hidden = false;
});

// Abrir janela de nova anotação
botaoNovaAnotacao.addEventListener("click", () => {
  campoTituloAnotacao.value = "";
  campoTextoAnotacao.value = "";

  modalAnotacao.showModal();
});

// Fechar janela de anotação
botaoFecharAnotacao.addEventListener("click", () => {
  modalAnotacao.close();
});

// Fechar janela de visualização da anotação
botaoFecharVisualizarAnotacao.addEventListener("click", () => {
  modalVisualizarAnotacao.close();
});

// Excluir anotação
botaoExcluirAnotacao.addEventListener("click", () => {
  if (indiceAnotacaoSelecionada === null) return;

  const confirmar = confirm("Tem certeza que deseja excluir esta anotação?");

  if (!confirmar) return;

  anotacoes.splice(indiceAnotacaoSelecionada, 1);

  localStorage.setItem(
    "lendas_anotacoes",
    JSON.stringify(anotacoes)
  );

  indiceAnotacaoSelecionada = null;

  modalVisualizarAnotacao.close();
  mostrarAnotacoes();
});

// Editar anotação
botaoEditarAnotacao.addEventListener("click", () => {
  if (indiceAnotacaoSelecionada === null) return;

  const anotacao = anotacoes[indiceAnotacaoSelecionada];

  campoTituloAnotacao.value = anotacao.titulo;
  campoTextoAnotacao.value = anotacao.texto;

  modalVisualizarAnotacao.close();
  modalAnotacao.showModal();

  botaoSalvarAnotacao.textContent = "Salvar alterações";
});

// Carregar anotações salvas
let anotacoes = JSON.parse(
  localStorage.getItem("lendas_anotacoes") || "[]"
);

// Mostrar anotações na tela
function mostrarAnotacoes() {
  listaAnotacoes.innerHTML = "";

  if (anotacoes.length === 0) {
    listaAnotacoes.innerHTML = `
      <div class="anotacoes-vazio">
        <span>📝</span>
        <p>Nenhuma anotação ainda.</p>
        <small>Registre aqui suas descobertas e teorias.</small>
      </div>
    `;
    return;
  }

  anotacoes.forEach((anotacao, indice) => {
    const cartao = document.createElement("div");
    cartao.className = "cartao-anotacao";
    cartao.addEventListener("click", () => {
      indiceAnotacaoSelecionada = indice;

      visualizarTituloAnotacao.textContent = anotacao.titulo;
      visualizarTextoAnotacao.textContent = anotacao.texto;
    
      modalVisualizarAnotacao.showModal();
    });
    
    cartao.style.cursor = "pointer";
    const titulo = document.createElement("h3");
    titulo.textContent = anotacao.titulo;

    const texto = document.createElement("p");
    texto.textContent = anotacao.texto;

    cartao.appendChild(titulo);
    cartao.appendChild(texto);

    listaAnotacoes.appendChild(cartao);
  });
}

// Salvar nova anotação
botaoSalvarAnotacao.addEventListener("click", () => {
  const titulo = campoTituloAnotacao.value.trim();
  const texto = campoTextoAnotacao.value.trim();

  if (!titulo || !texto) {
    alert("Preencha o título e a anotação.");
    return;
  }

  if (indiceAnotacaoSelecionada !== null) {
    anotacoes[indiceAnotacaoSelecionada] = {
      titulo,
      texto
    };
  
    indiceAnotacaoSelecionada = null;
  } else {
    anotacoes.push({
      titulo,
      texto
    });
  }

  localStorage.setItem(
    "lendas_anotacoes",
    JSON.stringify(anotacoes)
  );

  mostrarAnotacoes();
  botaoSalvarAnotacao.textContent = "Salvar";
  modalAnotacao.close();
});

// Mostrar anotações ao abrir o aplicativo
mostrarAnotacoes();

// Voltar das Anotações
botaoVoltarAnotacoes.addEventListener("click", () => {
  telaAnotacoes.hidden = true;
  telaHome.hidden = false;
});

  // Voltar do Instagram
  botaoVoltarInstagram.addEventListener("click", () => {
    telaInstagram.hidden = true;
    telaHome.hidden = false;
  });

  // Abrir perícias
  botaoAbrirPericias.addEventListener("click", () => {
    telaInventario.hidden = true;
    telaPericias.hidden = false;
  });

  // Voltar para o inventário
  botaoVoltarPersonagem.addEventListener("click", () => {
    telaPericias.hidden = true;
    telaInventario.hidden = false;
  });

// Abrir tela de perícias
botaoAbrirPericias.addEventListener("click", () => {
  telaInventario.hidden = true;
  telaPericias.hidden = false;
});

// Voltar para o personagem
botaoVoltarPersonagem.addEventListener("click", () => {
  telaPericias.hidden = true;
  telaInventario.hidden = false;
});

  // Espaços do inventário
  const espacosInventario = document.querySelectorAll(".slot");
  let slotSelecionado = null;

  // Mostrar item no espaço
  function atualizarEspaco(numero) {
    const espaco = document.querySelector(
      `.slot[data-slot="${numero}"]`
    );

    const item = itens[numero];

    espaco.replaceChildren();

    if (!item) {
      espaco.textContent = "+";
      espaco.classList.remove("cheio");
      espaco.classList.add("vazio");
      return;
    }

    const nome = document.createElement("span");
    nome.className = "item-nome";
    nome.textContent = item.nome;

    const quantidade = document.createElement("em");
    quantidade.textContent = item.quantidade;

    espaco.append(nome, quantidade);
    espaco.classList.remove("vazio");
    espaco.classList.add("cheio");
  }
  // Restaurar os itens salvos na tela
  espacosInventario.forEach((espaco) => {
    atualizarEspaco(espaco.dataset.slot);
  });

  // Abrir detalhes
  function abrirDetalhes(numero) {
    const item = itens[numero];

    slotSelecionado = numero;

    itemNome.textContent = item.nome;
    itemDescricao.textContent = item.descricao || "Sem descrição.";
    itemQuantidade.textContent = item.quantidade;

    modal.showModal();
  }

  // Cadastro
  espacosInventario.forEach((espaco) => {
    espaco.addEventListener("click", () => {
      const numero = espaco.dataset.slot;

      if (itens[numero]) {
        abrirDetalhes(numero);
        return;
      }

      const nome = prompt("Qual é o nome do item?");
      if (!nome || !nome.trim()) return;

      const descricao = prompt("Descreva o item:");
      if (descricao === null) return;

      const quantidadeTexto = prompt("Qual é a quantidade?");
      if (quantidadeTexto === null) return;

      const quantidade = Number(quantidadeTexto);

      if (!Number.isInteger(quantidade) || quantidade < 1) {
        alert("Digite uma quantidade inteira maior que zero.");
        return;
      }

      itens[numero] = {
        nome: nome.trim(),
        descricao: descricao.trim(),
        quantidade
      };

      salvarItens();
      atualizarEspaco(numero);
    });
  });

  // Editar item
  botaoEditar.addEventListener("click", () => {
    const item = itens[slotSelecionado];

    if (!item) return;

    const novoNome = prompt("Novo nome:", item.nome);
    if (novoNome === null || !novoNome.trim()) return;

    const novaDescricao = prompt("Nova descrição:", item.descricao);
    if (novaDescricao === null) return;

    const novaQuantidadeTexto = prompt(
      "Nova quantidade:",
      item.quantidade
    );

    if (novaQuantidadeTexto === null) return;

    const novaQuantidade = Number(novaQuantidadeTexto);

    if (!Number.isInteger(novaQuantidade) || novaQuantidade < 1) {
      alert("Digite uma quantidade inteira maior que zero.");
      return;
    }

    item.nome = novoNome.trim();
    item.descricao = novaDescricao.trim();
    item.quantidade = novaQuantidade;

    salvarItens();
    atualizarEspaco(slotSelecionado);
    abrirDetalhes(slotSelecionado);
  });

  // Excluir item
  botaoExcluir.addEventListener("click", () => {
    if (!itens[slotSelecionado]) return;

    const confirmar = confirm("Tem certeza que deseja excluir este item?");

    if (!confirmar) return;

    delete itens[slotSelecionado];

    salvarItens();
    atualizarEspaco(slotSelecionado);
    modal.close();
    slotSelecionado = null;
  });

  // Fechar janela
  botaoFechar.addEventListener("click", () => {
    modal.close();
    slotSelecionado = null;
  });
});
