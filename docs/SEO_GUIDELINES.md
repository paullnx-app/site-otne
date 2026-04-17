# INSTRUÇÕES COMPLETAS PUBLICAÇÃO DOS ARTIGOS - OTNE.SEO

| Campo | Valor |
|---|---|
| **Revisão** | `v1.6` |
| **Data** | 2026-04-17 |
| **Alterações desta revisão** | Proibição de travessão em todo o texto e metadados |
| **Histórico** | v1.0 base · v1.1 performance e multimídia · v1.2 pipeline e YAML · v1.3 Schema Markup · v1.4 registro de imagens e regra de duplicatas · v1.5 voz humana e sentence case · v1.6 travessão proibido |

> Para incrementar: atualize `Revisão`, `Data` e `Alterações desta revisão`. Registre a versão anterior em `Histórico`.

Este documento unifica todas as diretrizes de produção de conteúdo, SEO, linkagem interna e qualidade para a Otne.seo.

## FUNÇÃO E OBJETIVO

Você é um redator / publicador altamente versátil, conhecedor de CMO, capaz de escrever sobre qualquer tema, adaptando-se a diferentes estilos, públicos e finalidades.

Seu objetivo é publicar os textos aqui solicitados, sempre otimizados para SEO (Search Engine Optimization), GEO (Generative Engine Optimization) e AEO (Answer Engine Optimization), garantindo máximo alcance e impacto.

Este guia é **vivo**: deve acompanhar mudanças de busca, de interfaces com IA e de **performance web** (Core Web Vitals, mobile-first). Será também a **base de regras** para automatizar redação e publicação no blog — por isso pedimos formato previsível (metadados, FAQ, slugs) além de qualidade editorial.

## DOMÍNIO DE PUBLICAÇÃO (CANÔNICO)

- Todas as publicações do site Otne SEO usam exclusivamente o domínio **`https://www.otne.com.br`**.
- Em artigos, CTAs, linkagem interna, URLs absolutas sugeridas (slug completo) e menções ao site oficial, use sempre esse prefixo (incluindo `www`). Não misture `https://otne.com.br` sem `www`, domínios de preview (ex.: `*.vercel.app`) ou outras bases, salvo instrução explícita em contrário.

---

## 1. QUALIDADE DO CONTEÚDO E E-E-A-T

### Princípios fundamentais:
- O artigo deve esclarecer com **máxima qualidade e assertividade** o que foi pedido.
- O conteúdo deve apresentar **informações, relatos, pesquisas ou análises originais**.
- Deve incluir uma **descrição significativa, completa ou abrangente** do assunto.
- O artigo deve apresentar **análises relevantes** ou informações interessantes e originais.
- Quando o conteúdo for baseado em outras fontes, **evite simplesmente copiar ou reescrever com sinônimos**. Reconstrua e adicione valor e originalidade ao artigo.
- Evite utilizar em demasia termos exagerados ou chocantes nos artigos.
- Evite superlativos e adjetivos exagerados.
- Crie artigos que dariam vontade de adicionar aos favoritos e compartilhar com amigos.
- Escreva para ter seu conteúdo em uma revista, enciclopédia ou livro impresso.
- Ofereça conteúdo humano, escreva para as pessoas, com valor significativo quando comparado com outras páginas nos resultados da pesquisa.
- Sempre que possível, **linke para fontes oficiais, estudos e pesquisas**. Crie o hyperlink para nova aba no local correto. Para links externos, no máximo 2 links.
- Ao escrever, tenha calma, relaxe, ative seus modos mais humanos, criativos e inteligentes e evite fazer a criação com pressa.
- Revise erros de português antes da entrega final. Não falhe nisso.

### Padrões de E-E-A-T (Experiência, Especialização, Autoridade, Confiança):
- **Autoria:** Todo artigo deve ter um autor definido (evite "Admin").
- **Experiência Real:** Incluir exemplos práticos, estudos de caso ou opiniões baseadas na vivência da agência.
- **Multimídia (conteúdo):** Usar imagens originais, prints de ferramentas e, se possível, vídeos. Cada imagem deve **ilustrar o parágrafo** (não encher página).
- **Nomes de arquivos (imagens do blog):** usar **português** em slugs descritivos (palavras separadas por hífen; preferir **ASCII sem acentos** no nome do arquivo para compatibilidade entre sistemas). Ex.: `equipe-autoridade.jpg`, `erros-seo-tecnicos.jpg`. Evite nomes genéricos só em inglês quando houver equivalente claro em PT.

### Multimídia, performance e Core Web Vitals (obrigatório no site)
- **Sem repetir o mesmo arquivo** no corpo do artigo: cada `<img>` no texto deve apontar para um **asset distinto**. O **hero** (imagem principal do post) conta como um arquivo — **não** volte a usar esse mesmo arquivo logo abaixo no corpo só para “cumprir meta” de imagens.
- **Sem duplicatas de arquivo em todo o site:** cada imagem deve existir em **uma única cópia** no repositório. Arquivos com conteúdo idêntico mas nomes diferentes são proibidos — causam a mesma foto aparecendo em contextos distintos e desperdiçam banda. Antes de subir uma nova imagem, verificar o MD5/hash contra o **Registro de Imagens** (Seção 1.1). Se o hash já existir, reutilizar o arquivo original com seu nome canônico — **não** criar cópia com novo nome.
- **Menos pedidos HTTP vale ouro:** prefira **menos imagens fortes** a muitas fotos médias repetidas. Tabelas, listas e infográficos embutidos contam para escaneabilidade — não substituem E-E-A-T, mas **podem** reduzir a necessidade de imagem a cada X palavras quando o texto já é denso.
- **Peso e formato:** preferir **JPEG/WebP** otimizado para fotos; **PNG** só quando precisar transparência ou leitura fina. Evite PNG enormes para fotos realistas. Comprimir antes de subir (metas orientadoras: hero tipicamente **&lt; 200–300 KB** quando possível; corpo **&lt; 150 KB** por imagem — ajustar ao orçamento de qualidade).
- **Carregamento no corpo do artigo:** imagens abaixo da dobra devem usar **carregamento tardio** (`loading="lazy"`), **`decoding="async"`** e **`sizes`** adequado ao layout; evitar alturas gigantes só por estética se não trouxer informação.
- **Hero (LCP):** a imagem principal do post deve ser tratada como **LCP** — priorizar carregamento (ex.: `fetchpriority="high"` no template quando aplicável) e não competir com várias imagens pesadas logo acima do texto.
- **Texto alternativo:** todo arquivo publicado com **alt** descritivo, único por imagem, alinhado ao conteúdo adjacente (acessibilidade + SEO imagem).


### 1.1 Registro de Imagens — `client/src/assets/images/` (atualizar a cada novo artigo)

**Regra:** cada MD5 deve aparecer **uma única vez** neste registro e no repositório. Antes de subir uma nova imagem, calcule o MD5 (`md5 <arquivo>` no terminal) e confirme que o hash não existe. Se já existir, use o arquivo canônico listado aqui — nunca crie cópia com nome diferente.

#### Blog (`/blog/`)

| Arquivo | MD5 (8 chars) | Hero em | Corpo em |
|---|---|---|---|
| `tendencias-seo-2026.jpg` | beb2bf87 | guia-seo-2026, artigo-01 | — |
| `erros-seo-tecnicos.jpg` | 673b27c5 | erros-tecnicos-seo | artigo-01 |
| `rede-construcao-links.jpg` | 1cf88f86 | como-aumentar-autoridade | artigo-02 |
| `confianca-conteudo-ia.jpg` | 20beed87 | como-construir-confianca-ia | artigo-01 |
| `guia-seo-local-diferenciado.jpg` | b46a0efc | seo-local-para-pequenas-empresas | — |
| `guia-google-maps.jpg` | 1e7d6f44 | como-aparecer-no-google-maps | — |
| `marketing-digital-empreendedores.png` | 1e459906 | marketing-digital-para-empresarios | — |
| `aparecer-nas-buscas.jpg` | 90b3d927 | como-aparecer-nas-buscas | — |
| `midia-imprensa.jpg` | 9ffc00c1 | artigo-02-empresa-chatgpt | — |
| `equipe-autoridade.jpg` | 8f562dbb | — | artigo-01 |
| `framework-decisao-seo-ia.jpg` | 76d1da0d | — | artigo-02 |
| `premios-reconhecimento.jpg` | 8f1f1930 | — | — |
| `parceria-estrategica.jpg` | c46bb429 | — | — |
| `loja-seo-local.jpg` | f0903f62 | — | — |
| `capa-artigo-seo-ou-ia-2026.jpg` | afc93fe1 | — | draft-article |

#### Outras pastas (`/consultoria/`, `/about/`, etc.)

| Arquivo | MD5 (8 chars) | Usado em |
|---|---|---|
| `consultoria/empresario-resultados.jpg` | 5380c3a4 | página consultoria |
| `consultoria/empresario-feliz.jpg` | 57b7819f | página consultoria |
| `consultoria/equipe-resultados.jpg` | 9cf58513 | página consultoria |
| `about/team-meeting.jpg` | c8ec276b | página sobre |
| `about/office-space.jpg` | d56c279a | página sobre |

> **Como verificar antes de subir:** `md5 caminho/para/nova-imagem.jpg`. Se o hash já estiver na tabela acima, use o arquivo listado. Se for novo, adicione uma linha a esta tabela.

### 1.2 Voz Humana e Escrita Anti-IA

O objetivo desta seção é garantir que qualquer leitor — inclusive ferramentas de detecção — perceba o texto como escrito por um especialista humano, não por uma IA.

#### Capitalização de títulos e subtítulos (sentence case)

**Regra:** somente a **primeira letra do título é maiúscula**. Nomes próprios, marcas e siglas mantêm sua grafia usual. Todo o resto fica em minúscula.

- ✅ `Como aparecer no Google Maps em 2026`
- ✅ `O que é GEO — Generative Engine Optimization?`
- ❌ `Como Aparecer No Google Maps Em 2026`
- ❌ `O Que É GEO — Generative Engine Optimization?`

Aplica-se a: H1, H2, H3, meta title, og:title, títulos de cards no blog e âncoras de links internos.

---

#### Pontuação — travessão proibido

**Regra:** nunca usar travessão (`—` ou `–`) em nenhuma parte do texto, títulos, subtítulos ou metadados.

O travessão é uma marca forte de texto gerado por IA e soa artificial na leitura em PT-BR. Substituir por:

| Em vez de | Usar |
|---|---|
| `SEO — o que você precisa saber` | vírgula, dois-pontos ou reescrever a frase |
| `Resultado — mais tráfego e vendas` | `: resultado: mais tráfego e vendas` |
| `Ele disse — e repetiu — que...` | vírgulas ou parênteses |

Aplica-se a: corpo do artigo, H1, H2, H3, meta title, meta description, alt text e YAML de briefing.

---

#### Frases-gatilho de IA — proibidas em qualquer parte do texto

Estas expressões são marcadores reconhecíveis de texto gerado por IA. **Nunca usar:**

| Proibido | Por que |
|---|---|
| "No mundo atual..." | Abertura genérica clássica de IA |
| "Em um cenário cada vez mais..." | Idem |
| "Você já se perguntou..." | Gancho vazio e previsível |
| "É importante ressaltar que..." | Enchimento sem valor |
| "Vale destacar que..." | Idem |
| "Neste artigo, vamos explorar..." | Descreve o texto em vez de entrar nele |
| "Isso posto..." | Formalismo artificial |
| "Sem dúvida alguma..." | Certeza exagerada, típica de IA |
| "É fundamental compreender que..." | Condescendente e previsível |
| "Em última análise..." | Conclusão formulaica |
| "Não podemos negar que..." | Construção vaga e passiva |
| "Como já mencionado..." | Remissão circular |
| "Certamente..." / "Evidentemente..." | Afirmações sem prova |
| "Em termos de [substantivo]..." | Construção burocrática |
| "É imperativo que..." | Tom inflado |
| "Isso nos leva a refletir..." | Filosofia de almanaque |
| "De fato, ..." (no início de frase) | Enchimento de transição |

---

#### Regras de voz humana (obrigatórias)

**1. Ritmo irregular — varie o tamanho das frases**
IA produz frases de comprimento médio constante. Humanos alternam: uma frase curtíssima. Depois uma mais longa, com mais contexto e nuance. Depois outra curta. O leitor sente o ritmo, mesmo sem perceber.

**2. Opinião explícita da agência**
Todo artigo deve ter pelo menos **uma afirmação de opinião real**, não apenas síntese de fatos:
- ✅ *"Na nossa prática com clientes, o que funciona não é o que os estudos preveem — é [opinião específica]."*
- ✅ *"Discordamos da abordagem mais comum aqui: [razão concreta]."*
- ❌ *"Especialistas divergem sobre o tema."* (delegação de opinião)

**3. Exemplos com especificidade brasileira**
Não use exemplos genéricos que qualquer IA produziria. Prefira:
- Referências a setores brasileiros reais (e-commerce nacional, escritórios de advocacia em SP, clínicas no interior)
- Dados com fonte citável em PT-BR
- Situações que um empresário brasileiro reconheceria de imediato

**4. Admitir incerteza quando ela existe**
IA tende a afirmar tudo com confiança igual. Humanos diferenciam:
- ✅ *"Ainda não há consenso sobre isso, mas o que observamos é..."*
- ✅ *"Pode variar muito dependendo do setor — não há resposta única."*
- ❌ *"A solução é simples: basta seguir os passos abaixo."*

**5. Abertura sem gancho de IA**
Os três primeiros parágrafos nunca devem começar com:
- Pergunta retórica genérica (*"Você sabia que...?"*)
- Estatística solta sem contexto imediato
- Definição de dicionário do tema principal

Em vez disso: entre no problema real do leitor na primeira linha, sem rodeios.

**6. Estrutura assimétrica**
- Bullet points com itens de tamanhos diferentes (não todos com 1 linha)
- H2s com seções de comprimentos variados (não todos com 3 parágrafos iguais)
- Pelo menos uma seção sem lista alguma — só texto corrido

**7. Tom conversacional direto (não apresentação corporativa)**
- ✅ *"Isso custa caro. E a maioria das empresas descobre tarde."*
- ✅ *"Simples assim."*
- ❌ *"Portanto, conclui-se que a adoção de tais práticas é recomendável."*

---

#### Checklist de revisão anti-IA (aplicar antes de entregar)

- ☐ Nenhuma frase da lista de proibidas acima está no texto
- ☐ Há pelo menos uma opinião explícita da agência (não delegada a "especialistas")
- ☐ Há pelo menos um exemplo com especificidade brasileira ou de cliente real
- ☐ Os 3 primeiros parágrafos não começam com pergunta retórica nem estatística solta
- ☐ O texto tem variação de ritmo — frases curtas intercaladas com longas
- ☐ Todos os títulos (H1, H2, H3, meta title) estão em sentence case
- ☐ Não há parágrafos com estrutura perfeitamente simétrica entre si


---

## 2. ESTRATÉGIA DE LINKAGEM INTERNA (Atualizado)

A linkagem interna é crucial para distribuir autoridade (link juice), melhorar a navegabilidade e aumentar o tempo de permanência do usuário.

### Volume e Densidade
- **Meta:** Inserir entre **3 a 8 links internos** para cada 1.000 palavras.
- **Qualidade:** Cada link deve adicionar valor real ao leitor, oferecendo aprofundamento ou contexto. Não force links irrelevantes.

### Posicionamento Estratégico
- **Início do Texto (Prioridade):** Coloque os links mais importantes (especialmente para páginas de conversão ou artigos pilares) nos primeiros parágrafos.
  - *Motivo:* Reduz a taxa de rejeição e engaja o usuário rapidamente.
- **Contextual:** Espalhe os demais links naturalmente ao longo do corpo do texto.
- **Call-to-Action (Fim):** Sempre termine com um link para um serviço (Consultoria) ou próximo artigo relacionado.

### Texto Âncora (Anchor Text)
- **Descritivo:** Use âncoras que descrevam o conteúdo do destino.
  - ✅ Bom: "Veja nosso [guia completo de SEO Local]."
  - ❌ Ruim: "Para saber mais, [clique aqui]."
- **Variação:** Evite usar sempre o mesmo texto âncora para o mesmo link. Varie as palavras-chave.

### Estrutura de Clusters
- Sempre linkar artigos novos para artigos "Pilar" (conteúdos mais completos e antigos).
- Sempre linkar artigos Pilar para artigos satélites (novos e específicos).
- Conectar tópicos relacionados (ex: Artigo de "SEO Técnico" deve linkar para "Velocidade de Site").
- **Destinos prioritários:** Pillar pages, Artigos de conversão, Conteúdo relacionado.
- **Atenção:** Verificar disponibilidade de links internos no site atual.

---

## 3. LEGIBILIDADE E ESTRUTURA VISUAL

### Métricas obrigatórias (WordPress/Yoast SEO):
- **Frases curtas:** Máximo de 20 palavras por frase.
- **Parágrafos concisos:** Máximo de 150 palavras (idealmente 50-75).
- **Voz ativa:** Mínimo de 80% das frases.
- **Palavras de transição:** Mínimo de 30% do texto (use a lista em [`transitionWords.js`](./transitionWords.js) na pasta `docs/` do repositório).
- **Flesch Reading Ease:** Acima de 60 pontos.
- **Subtítulos frequentes:** H2 ou H3 a cada 300 palavras no máximo.

### Formatação Visual (Estilo Focused Reading):
- **Largura:** Container otimizado (max-w-[700px]) para leitura confortável.
- **Espaçamento:** Margens generosas entre parágrafos e seções (H2 com margem superior maior).
- **Negrito:** Usar em 2-3 termos-chave por seção para escaneabilidade.
- **Listas:** Usar bullets/listas numeradas quando houver 3+ itens.
- **Imagens:** **Meta orientadora** — cerca de **1 imagem a cada ~300 palavras** quando o texto não tiver outros elementos visuais fortes (tabelas longas, listas comparativas, infográfico). Se já houver **muita** estrutura visual, pode-se **reduzir** o número de imagens para proteger **performance** e leitura (ver a seção *Multimídia, performance e Core Web Vitals*). **Alt** obrigatório e único por imagem.

---

## 4. OTIMIZAÇÃO ESTRATÉGICA (SEO, GEO, AEO)

### Palavra-chave e LSI:
- **Densidade:** 0,5% a 2%.
- **Obrigatória em:** H1, primeiro parágrafo (100-150 chars), ao menos um H2, URL/Slug, Meta Descrição, Conclusão.
- **Variações:** Usar sinônimos e termos relacionados (LSI) naturalmente.

### Introdução Estratégica (Primeiros 150 chars):
1. **Hook forte:** Pergunta, estatística ou afirmação impactante.
2. **Resposta direta:** Responder brevemente à pergunta do título.
3. **Palavra-chave:** Integrada naturalmente.
4. **Promessa de valor:** O que o leitor vai aprender.

### Conclusão Poderosa:
1. **Resumo:** Recapitular pontos principais.
2. **CTA Claro:** Relacionado ao conteúdo (serviço ou leitura complementar).
3. **Link Interno:** Estratégico.
4. **Fechamento:** Reforçar a mensagem central.

### Otimização para GEO (IA Generativa):
- **Clareza e Estrutura:** Tópicos bem definidos.
- **Definições:** Usar frases "X é..." no início de seções.
- **Fatos:** Afirmações objetivas e citar fontes.
- **Experiência:** Destacar casos reais.

### Otimização para AEO (Respostas Diretas):
- **Perguntas em Headings:** H2/H3 como perguntas.
- **Respostas Curtas:** 40-60 palavras logo após a pergunta.
- **FAQ:** Seção ao final com pelo menos 5 perguntas e respostas schema-friendly.

---

## 5. INTENÇÃO DE BUSCA (Search Intent)

Identificar antes de escrever e alinhar 100% do conteúdo:
1. **Informacional:** "O que é", "Como funciona" (Guias, tutoriais).
2. **Navegacional:** Procura marca ou página específica.
3. **Transacional:** Quer comprar ("Preço", "Contratar").
4. **Investigacional:** Comparar opções ("Melhor", "Review").

---

## 6. AUTOMAÇÃO DA ESCRITA E PUBLICAÇÃO (PIPELINE)

Objetivo: permitir que **ferramentas** (IA + scripts + CMS) gerem rascunhos e publiquem com **revisão humana** e critérios mensuráveis.

### O que o sistema deve conseguir ler sem ambiguidade
- **Metadados por artigo:** `slug`, `meta_title`, `meta_description`, `autor`, `data`, `categoria`, `tempo_de_leitura`, `palavra_chave_principal` (e secundárias opcionais).
- **Corpo:** Markdown ou HTML semântico (H1 único no front; H2/H3 coerentes; listas; tabela quando fizer sentido; FAQ no fim).
- **FAQ para rich results:** bloco de perguntas/respostas + **JSON-LD FAQPage** quando o template suportar.
- **Imagens:** lista de `{ arquivo_pt, alt, posicao_aproximada }` ou equivalente; **nunca** reutilizar o mesmo `arquivo_pt` duas vezes no corpo; hero separado.
- **Links internos:** URLs relativas canônicas (`/blog/...`, `/consultoria-seo`) alinhadas ao domínio da seção *Domínio de publicação*.

### Portões de qualidade (humano + máquina)
- **Revisão humana obrigatória** antes de “publicar produção”: fatos, tom, E-E-A-T, e verificação de links.
- **Validação automática sugerida:** contagem de palavras, densidade de keyword (faixa), número de links internos, presença de FAQ, duplicados de imagem, **Lighthouse mobile** em páginas piloto após mudanças de template.

### Acompanhar a tecnologia (revisitar o guia)
- **Google / busca:** atualizações de algoritmo, experiência em página, resultados com IA (SGE / AI Overviews / equivalentes).
- **Privacidade e cookies:** regras de analytics e consentimento conforme a stack do site.
- **Formato:** quando novos formatos (vídeo curto, schema adicional) forem adotados, **atualizar este documento** para o pipeline não ficar desatualizado.

### Exemplo mínimo de *payload* (YAML) — contrato para briefing → redação → publicação

Use um arquivo YAML (ou o mesmo bloco dentro de uma *issue* / *card*) para **entregar o briefing** a quem redige, à IA ou ao script.

**Temas mudam; o contrato não:** o bloco YAML abaixo usa o **Artigo 02 só como ilustração**. Em cada novo tema você **mantém as mesmas chaves** (`slug_sugerido`, `ideia_central`, `estrutura_outline`, `faq`, etc.) e **troca só os valores** (título, palavras-chave, outline, perguntas do FAQ, links sugeridos). Scripts e validações devem depender do **nome das chaves** e de regras (ex.: FAQ ≥ 5), não do assunto específico.

Regras:

- **Chaves estáveis:** não renomear campos à toa; scripts validam por chave.
- **`conteudo_md`:** no briefing pode vir vazio; depois da redação, preenche com Markdown (H1 só se o CMS exigir no corpo; no site Otne o título costuma ser fora do corpo).
- **`faq`:** mínimo **5** itens (regra do guia). Cada item com `pergunta` + `resposta` (1–3 frases para snippet).
- **`imagens.corpo`:** cada `arquivo` uma vez; **não** repetir o mesmo arquivo no corpo; hero separado (ver seção de performance).
- **`links_internos`:** URLs relativas `https://www.otne.com.br` no site público; no código do projeto usar caminhos `/...` conforme o template.

Abaixo: **Artigo 02** (usado como exemplo) já com **ajustes** (FAQ com 5 perguntas; meta de palavras até ~2.200 se precisar de profundidade; nota sobre ferramentas e tom sem promessa mágica).

```yaml
versao_contrato: "1.0"
# Identificação interna (rascunho, card no Linear, etc.)
rascunho_id: "artigo-02"

artigo:
  slug_sugerido: "empresa-aparece-chatgpt-como-testar"
  meta_title: "Sua empresa aparece quando alguém pergunta ao ChatGPT?"
  meta_description: >-
    Saiba como verificar se seu negócio é citado pelas inteligências artificiais
    — e o que fazer para aparecer nas respostas do ChatGPT, Gemini e Perplexity.
  palavra_chave_principal: "empresa no ChatGPT"
  palavras_chave_secundarias:
    - "GEO o que é"
    - "aparecer no ChatGPT"
    - "otimização para IA"
    - "visibilidade nas inteligências artificiais"
    - "Generative Engine Optimization"
    - "minha empresa aparece na IA"
  long_tail:
    - "como fazer minha empresa aparecer no ChatGPT"
    - "o que é GEO em marketing digital"
    - "como monitorar presença da marca em IAs"
  intencao_busca: ["informacional", "investigacional"]
  autor: "Equipe Otne SEO"
  categoria_sugerida: "Inteligência Artificial"
  tempo_leitura_sugerido: "10 min"
  palavras_alvo_min: 1600
  palavras_alvo_max: 2200

  ideia_central: >-
    A maioria dos empresários brasileiros ainda não percebeu a "nova vitrine digital"
    dentro das IAs. O artigo abre esse canal com um tutorial imediato: testar agora
    se a empresa aparece quando alguém pergunta ao ChatGPT (e equivalentes).

  estrategia:
    seo: >-
      Ranquear para buscas como "minha empresa aparece no ChatGPT" e "como aparecer nas IAs".
      Tema em crescimento em PT-BR; priorizar experiência brasileira e passos verificáveis.
    aeo: >-
      O texto deve funcionar como resposta modelo para "como fazer minha empresa aparecer no ChatGPT",
      com passos numerados e definições diretas sob cada H2/H3 em formato de pergunta quando couber.
    geo: >-
      Definir GEO (Generative Engine Optimization) com exemplos práticos no Brasil e vocabulário consistente
      para associação como fonte.

  estrutura_outline:
    - "Introdução: a vitrine digital que você provavelmente não conhece"
    - "Como funciona a busca dentro das IAs (explicado de forma simples)"
    - "Tutorial: como testar se sua empresa aparece (ChatGPT, Gemini e Perplexity)"
    - "Por que algumas empresas aparecem e outras não"
    - "O que é GEO — Generative Engine Optimization"
    - "5 ações concretas para aparecer nas respostas das IAs"
    - "Ferramentas para monitorar sua presença nas IAs"
    - "FAQ"
    - "Conclusão com CTA"

  elementos_apoio:
    - "Tutorial visual: prints ou roteiro passo a passo nas 3 IAs"
    - "Lista: 5 ações para melhorar presença nas IAs"
    - "Tabela: ChatGPT vs Gemini vs Perplexity (como cada um cita fontes)"

  links_internos_prioritarios:
    - url: "/blog/seo-ou-inteligencia-artificial-onde-apostar-2026"
      motivo: "Artigo pilar SEO vs IA; reforça cluster."
    - url: "/blog/como-construir-confianca-conteudo-digital-ia"
      motivo: "Confiança e E-E-A-T em conteúdo com IA."
    - url: "/blog/erros-tecnicos-seo"
      motivo: "Base técnica do site como pré-requisito de citabilidade."
    - url: "/consultoria-seo"
      motivo: "CTA de conversão."

  imagens:
    hero:
      descricao_cena: "Empresário testando prompt no computador; ambiente de escritório BR."
      arquivo_pt_sugerido: "" # preencher após produção do asset; nome em PT-BR, ASCII
    corpo:
      - posicao: "apos_tutorial_chatgpt"
        descricao_cena: "Print ou recorte de interface (sem dados sensíveis)."
        arquivo_pt_sugerido: ""
      - posicao: "apos_tabela_comparativa"
        descricao_cena: "Ilustração conceito 'citação de fontes' / livros ou web."
        arquivo_pt_sugerido: ""

  faq:
    - pergunta: "Como saber se minha empresa aparece no ChatGPT?"
      resposta: >-
        Faça perguntas neutras que imitem um comprador (sem citar sua marca), depois
        perguntas que incluam seu segmento e região. Registre se a IA cita seu site,
        Google Business Profile ou menções consistentes da marca.
    - pergunta: "O ChatGPT sempre mostra as mesmas empresas?"
      resposta: >-
        Não. Respostas podem variar por modelo, data do conteúdo, idioma e contexto do prompt.
        Por isso o teste deve ser repetível e documentado, não uma única tentativa.
    - pergunta: "O que é GEO em marketing digital?"
      resposta: >-
        GEO (Generative Engine Optimization) é o conjunto de práticas para aumentar a chance
        de sua marca ser citada ou recomendada em respostas geradas por IA, com conteúdo
        claro, verificável e bem conectado a fontes públicas.
    - pergunta: "Aparecer na IA substitui aparecer no Google?"
      resposta: >-
        São canais diferentes que se influenciam. Muitas IAs usam a web indexada como base;
        um site bem estruturado e citável costuma ajudar em ambos, mas não há garantia única.
    - pergunta: "Quanto tempo leva para melhorar após mudanças no site?"
      resposta: >-
        Depende de rastreamento, autoridade e consistência. Trate como projeto contínuo:
        corrigir base técnica, publicar provas (cases, FAQs) e ganhar menções em fontes confiáveis.

  cta_final: >-
    Faça o teste agora com os prompts sugeridos no tutorial. Se quiser um plano priorizado
    para citabilidade e SEO, peça uma conversa na consultoria Otne.

  conteudo_md: "" # preencher na etapa de redação

  notas_para_automacao_e_revisor:
    - "FAQ com 5 itens (mínimo do guia); não usar só 4."
    - "Seção 'Ferramentas': priorizar critérios do que medir; no máximo 2 exemplos nomeados para não envelhecer rápido."
    - "Tom: aumentar probabilidade de citação; evitar promessa de 'vai aparecer com certeza'."
    - "Após publicar: validar links internos, imagens sem duplicar arquivo, Lighthouse mobile em amostra."
```

---

## 7. DADOS ESTRUTURADOS (SCHEMA MARKUP)

Schema markup é o código que ajuda o Google — e as IAs — a entender **quem publica**, **o que é** aquela página e **qual autoridade** ela tem. Sem isso, rich results (FAQ, artigo, breadcrumb) e Knowledge Graph ficam comprometidos.

### Regra geral: schema por tipo de página

| Tipo de página | Schemas obrigatórios | Schemas opcionais |
|---|---|---|
| Post do blog | `BlogPosting` + `BreadcrumbList` | `FAQPage` (quando tiver FAQ), `Person` (autor) |
| Home / institucional | `Organization` + `WebSite` | `SearchAction` (sitelinks search box) |
| Página de serviço | `ProfessionalService` + `BreadcrumbList` | `FAQPage`, `Offer` |
| Qualquer página | `BreadcrumbList` | — |

> **Regra de ouro:** nunca marcar como schema algo que não está visível no conteúdo da página. O Google penaliza schema enganoso.

---

### 7.1 BlogPosting — template mínimo (por artigo)

Injetar via `<script type="application/ld+json">` no `<head>` ou antes do `</body>`. No site Otne, o template de post deve gerar isso automaticamente a partir dos metadados do artigo.

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Título do artigo (= meta_title, até 110 chars)",
  "description": "Meta description do artigo (até 155 chars).",
  "image": "https://www.otne.com.br/assets/images/blog/nome-do-hero.jpg",
  "url": "https://www.otne.com.br/blog/slug-do-artigo",
  "datePublished": "2026-04-17",
  "dateModified": "2026-04-17",
  "author": {
    "@type": "Person",
    "name": "Nome do Autor",
    "url": "https://www.otne.com.br/sobre"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Otne SEO",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.otne.com.br/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.otne.com.br/blog/slug-do-artigo"
  }
}
```

**Campos obrigatórios para rich results:** `headline`, `image`, `datePublished`, `author`.
**Campos recomendados:** `dateModified`, `publisher`, `description`, `url`.

---

### 7.2 FAQPage — template mínimo (quando o artigo tiver FAQ)

Adicionar **junto** ao `BlogPosting`, não no lugar dele. O bloco de FAQ do JSON-LD deve espelhar exatamente as perguntas e respostas visíveis na página.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Pergunta exatamente como aparece no texto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Resposta direta, de 1 a 3 frases. Sem HTML complexo; pode usar <strong> e <a>."
      }
    },
    {
      "@type": "Question",
      "name": "Segunda pergunta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Resposta da segunda pergunta."
      }
    }
  ]
}
```

> **Atenção:** o Google limita a exibição de FAQs no resultado. Priorize as 3–5 perguntas mais relevantes para snippet. Mínimo do guia: **5 perguntas** no texto e no JSON-LD.

---

### 7.3 BreadcrumbList — template mínimo (todas as páginas)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.otne.com.br"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.otne.com.br/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Título do Artigo",
      "item": "https://www.otne.com.br/blog/slug-do-artigo"
    }
  ]
}
```

---

### 7.4 Organization + WebSite — configurar uma vez (home / global)

Esses schemas descrevem **a empresa**, não o artigo. Devem ser injetados **uma única vez**, no template global ou na home. Não repetir em cada post.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Otne SEO",
  "url": "https://www.otne.com.br",
  "logo": "https://www.otne.com.br/logo.png",
  "sameAs": [
    "https://www.instagram.com/otne.seo",
    "https://www.linkedin.com/company/otne"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "availableLanguage": "Portuguese"
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Otne SEO",
  "url": "https://www.otne.com.br"
}
```

> Preencha `sameAs` com as redes sociais oficiais verificadas. Isso alimenta o Knowledge Graph da marca.

---

### 7.5 LocalBusiness / ProfessionalService — para ranqueamento local

Se a Otne atende clientes em uma cidade ou região específica, esse schema é fundamental para aparecer em buscas do tipo "agência SEO em São Paulo".

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Otne SEO",
  "url": "https://www.otne.com.br",
  "telephone": "+55-XX-XXXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Exemplo, 123",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01000-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.55,
    "longitude": -46.63
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "areaServed": "Brasil",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de SEO"
  }
}
```

> Preencher com os dados reais da Otne antes de publicar. Manter **consistente** com Google Business Profile (mesmo nome, endereço e telefone — NAP).

---

### 7.6 Person — autor do artigo (reforço de E-E-A-T)

Opcional, mas recomendado para artigos assinados por especialistas identificáveis.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nome do Autor",
  "url": "https://www.otne.com.br/sobre",
  "jobTitle": "Especialista em SEO",
  "worksFor": {
    "@type": "Organization",
    "name": "Otne SEO"
  },
  "sameAs": [
    "https://www.linkedin.com/in/perfil-autor"
  ]
}
```

---

### 7.7 Como validar (obrigatório antes de publicar)

1. **Rich Results Test** — [search.google.com/test/rich-results](https://search.google.com/test/rich-results): cola a URL ou o código e verifica se o schema está elegível para rich result.
2. **Schema Markup Validator** — [validator.schema.org](https://validator.schema.org): validação técnica completa do JSON-LD.
3. **Google Search Console → Melhorias**: após publicar, monitorar erros de schema na propriedade `www.otne.com.br`.

> **Regra de automação:** o script de publicação deve **rejeitar** artigos com JSON-LD inválido ou ausente nos campos obrigatórios (`headline`, `datePublished`, `author` no `BlogPosting`).

---

### 7.8 Chave `schema_extra` no payload YAML

Adicionar ao contrato YAML de cada artigo para indicar schemas extras além do `BlogPosting` padrão:

```yaml
schema_extra:
  - tipo: "FAQPage"
    usar: true          # gerar JSON-LD a partir do bloco faq: acima
  - tipo: "HowTo"
    usar: false         # não aplicável neste artigo
```

Se `usar: true` e o tipo for `FAQPage`, o script deve gerar o JSON-LD automaticamente a partir do bloco `faq:` já existente no payload — sem duplicar dados.

---

## CHECKLIST FINAL ANTES DE ENTREGAR

Antes de finalizar o artigo, verificar:
- ☐ Palavra-chave no H1, 1º parágrafo, H2, Conclusão e Meta Descrição.
- ☐ Legibilidade: Frases curtas, voz ativa, parágrafos curtos.
- ☐ Estrutura: Apenas 1 H1, hierarquia H2/H3 correta.
- ☐ Links: 3-8 links internos (início e corpo), 1-2 externos confiáveis.
- ☐ AEO/GEO: FAQ presente (≥5 perguntas), definições claras.
- ☐ Schema: `BlogPosting` + `BreadcrumbList` gerados; `FAQPage` se tiver FAQ; validado no Rich Results Test.
- ☐ Qualidade: E-E-A-T demonstrado, conteúdo original, sem plágio.
- ☐ Voz humana: nenhuma frase-gatilho de IA (ver Seção 1.2); pelo menos uma opinião explícita da agência; exemplo com especificidade brasileira.
- ☐ Títulos em sentence case: só a primeira letra maiúscula em H1, H2, H3 e meta title (exceto nomes próprios e siglas).
- ☐ Sem travessão: nenhum `—` ou `–` no texto, títulos, metadados ou alt text.
- ☐ Imagens: meta de ~1/300 palavras **ou** menos se o texto já for visualmente denso; **sem repetir** o mesmo arquivo no corpo; hero distinto; **alt** único; peso razoável (ver performance).
- ☐ CTA: Claro e relevante no final.
- ☐ (Se usar automação) *Payload* YAML com chaves completas: metadados, outline, FAQ (≥5), links internos sugeridos, notas de revisor.

---
**Documento unificado. Última atualização relevante: abril de 2026** (performance, multimídia, pipeline de automação, exemplo YAML de payload, Schema Markup, voz humana e anti-IA, sentence case em títulos).
