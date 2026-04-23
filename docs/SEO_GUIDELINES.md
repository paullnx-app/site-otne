# INSTRUÇÕES COMPLETAS PUBLICAÇÃO DOS ARTIGOS - OTNE.SEO

| Campo | Valor |
|---|---|
| **Revisão** | `v2.2` |
| **Data** | 2026-04-21 |
| **Alterações desta revisão** | Otimização radical de imagens: hero e cards do blog usam `next/image` e imagens no corpo do artigo passam por otimização automática via `/_next/image` com `srcset` + `sizes` + lazy/async, sem exigir marcação manual. |
| **Histórico** | v1.0 base · v1.1 performance e multimídia · v1.2 pipeline e YAML · v1.3 Schema Markup · v1.4 registro de imagens e regra de duplicatas · v1.5 voz humana e sentence case · v1.6 travessão proibido · v1.7 links externos e parceiros · v1.8 acentuação pt-BR obrigatória · v1.9 rótulos de instrução proibidos como heading · v2.0 imagens únicas em todo o site · v2.1 endurecimento anti-IA + autoria real + freshness + canibalização + mapa topical + CWV metas + acessibilidade + GEO citabilidade + metadados por página + política editorial · v2.2 otimização automática de imagens (next/image + srcset no corpo) |

> Para incrementar: atualize `Revisão`, `Data` e `Alterações desta revisão`. Registre a versão anterior em `Histórico`.

Este documento unifica todas as diretrizes de produção de conteúdo, SEO, linkagem interna e qualidade para a Otne.seo.

## FUNÇÃO E OBJETIVO

Você é um redator / publicador altamente versátil, conhecedor de CMO, capaz de escrever sobre qualquer tema, adaptando-se a diferentes estilos, públicos e finalidades.

Seu objetivo é publicar os textos aqui solicitados, sempre otimizados para SEO (Search Engine Optimization), GEO (Generative Engine Optimization) e AEO (Answer Engine Optimization), garantindo máximo alcance e impacto.

Este guia é **vivo**: deve acompanhar mudanças de busca, de interfaces com IA e de **performance web** (Core Web Vitals, mobile-first). Será também a **base de regras** para automatizar redação e publicação no blog, por isso pedimos formato previsível (metadados, FAQ, slugs) além de qualidade editorial.

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

### 1.2. Acentuação, gramática e concordância em pt-BR (obrigatório)
- **Idioma:** todo o texto (títulos, excerpts, corpo, FAQ, CTAs, alt text, schema) deve ser redigido em **português brasileiro**, com **acentuação completa e correta**. Nunca publicar conteúdo sem os acentos (ex.: "nao", "voce", "tambem", "trafego", "tecnica", "pagina", "acao", "conteudo") ou trocando "ç" por "c".
- **Concordância e regência:** revise concordância nominal e verbal e o uso de crase antes de publicar. Ex.: "orientadas à tarefa" (não "a tarefa"), "às dúvidas reais", "à frente".
- **Ortografia:** use o novo acordo ortográfico. Ex.: "ideia" (sem trema), "março" com ç e cedilha, "análise" com acento, "técnico/técnica" com acento.
- **Coerência de termos:** nomes de produtos do Google devem ser escritos conforme o padrão oficial (Google Search Console, Core Web Vitals, Google Search Central, Helpful Content, Spam Policies). Se um termo é usado em inglês, mantenha a capitalização original.
- **Validação automática:** o script `scripts/validate-ptbr.ts` é executado dentro de `npm run check` e bloqueia o build quando encontra palavras comuns sem acentuação nos arquivos `src/data/blog-post-content/*.ts`, `src/data/blog-posts.ts` e `src/data/blog-posts.meta.ts`. Se algum termo for um falso positivo legítimo (nome de arquivo, slug de URL, código, verbo no imperativo), trate na lista de exceções do próprio script, não ignorando o erro.

### 1.3. Rótulos da instrução de produção não vão para o artigo
- A estrutura do briefing usa nomes como **"Gancho"**, **"Lead"**, **"Introdução"**, **"Desenvolvimento"**, **"Conclusão com CTA"**, **"CTA final"** para orientar quem escreve. Esses rótulos **nunca** podem aparecer como heading (`<h1>`…`<h6>`) ou como título visível no artigo publicado.
- O que entra no artigo é o conteúdo da seção, não o nome da caixa. Se a seção de fechamento termina com um bloco de CTA, ela não precisa (nem deve) carregar um heading "Conclusão com CTA" antes — basta o parágrafo final + o bloco do CTA.
- Headings válidos são aqueles que o leitor reconheceria em uma revista ou enciclopédia (temas, perguntas, comparações, checklists). Se você está prestes a escrever um heading que repete um nome de seção do briefing, reformule: ou remova o heading, ou transforme-o em uma pergunta/afirmação útil para o leitor.
- **Validação automática:** o mesmo `scripts/validate-ptbr.ts` detecta rótulos proibidos em tags de heading e falha o `check` se algum aparecer.

### 1.4. FAQ (conteúdo + Schema) — padrão obrigatório
- **Schema é a fonte de verdade:** todo post que tiver FAQ deve preencher `faqJsonLd` (tipo `FAQPage`). O site injeta esse JSON-LD via `SchemaMarkup`; a formatação visual do FAQ no HTML não muda nada no Schema.
- **Padrão de escrita do FAQ no corpo:** use exatamente um heading `<h2>Perguntas Frequentes (FAQ)</h2>` e, abaixo, pares de `<h3>Pergunta</h3>` + `<p>Resposta</p>`, sem inventar headings de instrução e sem “widgets” com marcação alternativa.
- **Evite divergência:** as perguntas/respostas do HTML devem bater com o `faqJsonLd` (mesmo sentido e termos). Se houver update no texto, atualize o `faqJsonLd` junto.
- **Consistência visual:** não dependa de wrappers e classes para o FAQ “parecer certo”. O template do blog já aplica tipografia/spacing padronizados em `h2/h3/p` em qualquer profundidade do HTML.
- **Proibição de rótulos internos no FAQ:** nunca publicar headings de instrução como `FAQ: cinco perguntas frequentes (formato snippet)` — isso é texto de briefing e é bloqueado pelo validador em `scripts/validate-ptbr.ts`.

### 1.5. Autoria real e E-E-A-T operacional (obrigatório)
- **Autor identificado (nunca "Admin" ou só "Equipe"):** cada artigo deve ter um autor com nome próprio. "Equipe Otne SEO" só é aceitável quando complementado por editor nomeado no rodapé ("Editado por [nome]").
- **Página de autor obrigatória:** todo autor recorrente tem uma página em `/autor/<slug-do-autor>` com: foto, bio de 4-8 linhas (credenciais, anos de experiência, especialidades), redes sociais verificadas (LinkedIn obrigatório), link para todos os artigos assinados.
- **Link do autor no post:** o nome do autor no cabeçalho do post **precisa linkar** para a página do autor. Sem essa ligação, o schema `Person` fica solto e perde efeito.
- **Schema `Person` completo:** `name`, `url` (→ `/autor/<slug>`), `jobTitle`, `worksFor` (`Organization`), `sameAs` com pelo menos 1 perfil verificado (LinkedIn). Ver Seção 7.6.
- **Revisor quando houver:** quando o artigo for revisado por outra pessoa, adicionar "Revisado por [nome], [cargo]" logo abaixo da data. Isso reforça E-E-A-T pós-HCU.
- **Experiência demonstrada:** cada artigo precisa de pelo menos **1 referência a experiência em primeira mão** ("na operação com 30+ clientes em 2026", "auditamos X sites no último trimestre", "rodamos esse teste em 5 setores diferentes"). Genérico derruba E-E-A-T.

### 1.6. Freshness e `dateModified` (obrigatório)
- **`dateModified` disciplinado:** toda edição substantiva do artigo (nova seção, atualização de dado, correção importante) atualiza **obrigatoriamente** o campo `dateModified` no schema `BlogPosting`. Correções de digitação menor não contam.
- **Selo visível:** se o artigo foi atualizado depois da data de publicação original, mostrar no cabeçalho do post uma linha **"Atualizado em DD/MM/AAAA"** logo abaixo da data de publicação. Transparência aumenta confiança do leitor e sinal de frescor no Google.
- **Revisão programada:** artigos evergreen devem ser revisados a cada **6–12 meses**. Cadastrar no backlog editorial o próximo `dateReview`. Atualização tipicamente inclui: novos dados, links quebrados, mudanças de interface (ex.: Search Console, Perfil da Empresa), remoção de exemplos obsoletos.
- **Core updates e spam updates:** quando o Google roda um core update relevante, revisar os artigos mais trafegados em até 30 dias e atualizar cenário + dados.
- **`lastmod` do sitemap:** o sitemap.xml precisa refletir `dateModified` (`lastmod` = `dateModified`). Não usar `datePublished` no `lastmod`.
- **Changelog interno:** manter um `CHANGELOG` curto no topo de artigos pilares com a lista das últimas 2-3 atualizações principais ("Abril/2026: adicionada seção sobre INP"). Opcional em satélites.

### Padrões de E-E-A-T (Experiência, Especialização, Autoridade, Confiança):
- **Autoria:** Todo artigo deve ter um autor definido (evite "Admin").
- **Experiência Real:** Incluir exemplos práticos, estudos de caso ou opiniões baseadas na vivência da agência.
- **Multimídia (conteúdo):** Usar imagens originais, prints de ferramentas e, se possível, vídeos. Cada imagem deve **ilustrar o parágrafo** (não encher página).
- **Nomes de arquivos (imagens do blog):** usar **português** em slugs descritivos (palavras separadas por hífen; preferir **ASCII sem acentos** no nome do arquivo para compatibilidade entre sistemas). Ex.: `equipe-autoridade.jpg`, `erros-seo-tecnicos.jpg`. Evite nomes genéricos só em inglês quando houver equivalente claro em PT.

### Multimídia, performance e Core Web Vitals (obrigatório no site)
- **Regra dura de unicidade global (v2.0):** cada arquivo de imagem pode aparecer **uma única vez no site inteiro**, somando hero e corpo de **todos** os posts. Hero de um post nunca pode ser body de outro; body de um post nunca pode ser body de outro. O validador em `src/data/blog-posts.ts` (`detectRepeatedImages`) **derruba o build** em qualquer repetição, inclusive cruzada entre posts.
- **Estrutura canônica por post:** 1 hero + **no máximo 1** imagem de corpo. Posts podem ter 0 imagens de corpo quando não houver valor ilustrativo. Heroes são obrigatórios.
- **Sem duplicatas de arquivo em todo o site:** cada imagem deve existir em **uma única cópia** no repositório. Arquivos com conteúdo idêntico mas nomes diferentes são proibidos, causam a mesma foto aparecendo em contextos distintos e desperdiçam banda. Antes de subir uma nova imagem, verificar o MD5/hash contra o **Registro de Imagens** (Seção 1.1). Se o hash já existir, reutilizar o arquivo original com seu nome canônico, **não** criar cópia com novo nome.
- **Menos pedidos HTTP vale ouro:** prefira **menos imagens fortes** a muitas fotos médias repetidas. Tabelas, listas e infográficos embutidos contam para escaneabilidade, não substituem E-E-A-T, mas **podem** reduzir a necessidade de imagem a cada X palavras quando o texto já é denso.
- **Peso e formato:** preferir **JPEG/WebP** otimizado para fotos; **PNG** só quando precisar transparência ou leitura fina. Evite PNG enormes para fotos realistas. Comprimir antes de subir (metas orientadoras: hero tipicamente **&lt; 200-300 KB** quando possível; corpo **&lt; 150 KB** por imagem, ajustar ao orçamento de qualidade).
- **Carregamento no corpo do artigo (padrão novo):** o site otimiza automaticamente imagens de corpo (a partir de `<img src="/...">`) usando o otimizador do Next (`/_next/image`) e injeta `srcset` + `sizes` + `loading="lazy"` + `decoding="async"`. Na prática: você **não precisa** escrever manualmente `srcset/sizes` — basta usar `<img src="...">` com `alt` correto e classes de tamanho/proporção.
- **Hero (LCP):** a imagem principal do post deve ser tratada como **LCP**: ela é renderizada com `next/image` (priority + sizes). Mesmo assim, o arquivo original precisa ser bem comprimido para não estourar o orçamento.
- **Texto alternativo:** todo arquivo publicado com **alt** descritivo, único por imagem, alinhado ao conteúdo adjacente (acessibilidade + SEO imagem).


### 1.1 Registro de Imagens: `client/src/assets/images/` (atualizar a cada novo artigo)

**Regra:** cada MD5 deve aparecer **uma única vez** neste registro e no repositório. Antes de subir uma nova imagem, calcule o MD5 (`md5 <arquivo>` no terminal) e confirme que o hash não existe. Se já existir, use o arquivo canônico listado aqui, nunca crie cópia com nome diferente.

#### Blog (`/blog/`)

| Arquivo | MD5 (8 chars) | Hero em | Corpo em |
|---|---|---|---|
| `tendencias-seo-2026.jpg` | beb2bf87 | guia-seo-2026, artigo-01 | (nenhum) |
| `erros-seo-tecnicos.jpg` | 673b27c5 | erros-tecnicos-seo | artigo-01 |
| `rede-construcao-links.jpg` | 1cf88f86 | como-aumentar-autoridade | artigo-02 |
| `confianca-conteudo-ia.jpg` | 20beed87 | como-construir-confianca-ia | artigo-01 |
| `guia-seo-local-diferenciado.jpg` | b46a0efc | seo-local-para-pequenas-empresas | (nenhum) |
| `guia-google-maps.jpg` | 1e7d6f44 | como-aparecer-no-google-maps | (nenhum) |
| `marketing-digital-empreendedores.png` | 1e459906 | marketing-digital-para-empresarios | (nenhum) |
| `aparecer-nas-buscas.jpg` | 90b3d927 | como-aparecer-nas-buscas | (nenhum) |
| `midia-imprensa.jpg` | 9ffc00c1 | artigo-02-empresa-chatgpt | (nenhum) |
| `equipe-autoridade.jpg` | 8f562dbb | (nenhum) | artigo-01 |
| `framework-decisao-seo-ia.jpg` | 76d1da0d | (nenhum) | artigo-02 |
| `premios-reconhecimento.jpg` | 8f1f1930 | (nenhum) | (nenhum) |
| `parceria-estrategica.jpg` | c46bb429 | (nenhum) | (nenhum) |
| `loja-seo-local.jpg` | f0903f62 | (nenhum) | (nenhum) |
| `capa-artigo-seo-ou-ia-2026.jpg` | afc93fe1 | (nenhum) | draft-article |

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

O objetivo desta seção é garantir que qualquer leitor, inclusive ferramentas de detecção, perceba o texto como escrito por um especialista humano, não por uma IA.

#### Capitalização de títulos e subtítulos (sentence case)

**Regra:** somente a **primeira letra do título é maiúscula**. Nomes próprios, marcas e siglas mantêm sua grafia usual. Todo o resto fica em minúscula.

- ✅ `Como aparecer no Google Maps em 2026`
- ✅ `O que é GEO: Generative Engine Optimization?`
- ❌ `Como Aparecer No Google Maps Em 2026`
- ❌ `O Que É GEO: Generative Engine Optimization?`

Aplica-se a: H1, H2, H3, meta title, og:title, títulos de cards no blog e âncoras de links internos.

---

#### Pontuação: travessão proibido

**Regra:** nunca usar travessão (`—` ou `–`) em nenhuma parte do texto, títulos, subtítulos ou metadados.

O travessão é uma marca forte de texto gerado por IA e soa artificial na leitura em PT-BR. Substituir por:

| Em vez de | Usar |
|---|---|
| `SEO — o que você precisa saber` | vírgula, dois-pontos ou reescrever a frase |
| `Resultado — mais tráfego e vendas` | `: resultado: mais tráfego e vendas` |
| `Ele disse — e repetiu — que...` | vírgulas ou parênteses |

Aplica-se a: corpo do artigo, H1, H2, H3, meta title, meta description, alt text e YAML de briefing.

---

#### Frases-gatilho de IA: proibidas em qualquer parte do texto

Estas expressões são marcadores reconhecíveis de texto gerado por IA. **Nunca usar:**

| Proibido | Por que |
|---|---|
| "No mundo atual..." | Abertura genérica clássica de IA |
| "Em um cenário cada vez mais..." | Idem |
| "Você já se perguntou..." | Gancho vazio e previsível |
| "É importante ressaltar que..." | Enchimento sem valor |
| "Vale destacar que..." | Idem |
| "Neste artigo, vamos explorar..." | Descreve o texto em vez de entrar nele |
| "Ao longo deste artigo..." / "No decorrer deste conteúdo..." | Meta-frase sobre o próprio texto |
| "Como veremos a seguir..." / "Neste guia completo..." | Idem |
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

#### Vocabulário AI-inflated (pt-BR): palavras que derrubam a voz humana

Estas palavras são marcadores fortes de texto gerado por IA em português. Substituir por opções simples e concretas. **Uso esporádico é tolerado; abuso é proibido.**

| Evitar | Por que | Usar em vez disso |
|---|---|---|
| `crucial`, `fundamental`, `essencial`, `imprescindível` | Intensificadores genéricos | "importante", "decisivo", "o que mais pesa é" |
| `robusto`, `holístico`, `abrangente` | Jargão corporativo de IA | "completo", "inteiro", "fim-a-fim" |
| `subjacente`, `intrínseco` | Erudição gratuita | "por trás", "próprio de" |
| `paradigma`, `ecossistema` (figurado) | Clichê de consultoria | "modelo", "conjunto", "cadeia" |
| `jornada` (como em "jornada do cliente"), `panorama`, `âmbito` | Clichê de marketing | "caminho", "cenário concreto", "contexto" |
| `tangível`, `intangível` | Buzzword | "prático", "mensurável", "difícil de medir" |
| `alavancar`, `potencializar`, `aproveitar` (oportunidades) | Verbo de coach | "usar", "ampliar", "tirar proveito" |
| `desvendar`, `navegar` (no sentido figurado) | Metáfora de IA | "entender", "lidar com", "atravessar" |
| `impactar`, `impactante` | Anglicismo desnecessário | "afetar", "marcante", "forte" |
| `extremamente`, `incrivelmente`, `notavelmente`, `significativamente` | Intensificadores vagos | número específico, exemplo real |
| `eficiente`, `eficaz` (soltos) | Adjetivos fracos | métrica ou prova |
| `dinâmico`, `disruptivo`, `inovador` | Palavras-ônibus | descrever o que faz, não adjetivar |

**Regra prática:** se a palavra funciona em qualquer artigo de qualquer setor, ela provavelmente é AI-inflated. Boa escrita usa termos específicos do domínio ou substantivos concretos.

---

#### Perplexidade e burstiness (princípios anti-detecção)

Texto gerado por IA tem **perplexidade baixa** (cada próxima palavra é muito previsível) e **burstiness baixa** (frases têm comprimentos parecidos). Texto humano é o contrário: palavras inesperadas no lugar certo, e tamanhos de frase muito variados.

Regras práticas:
- Misturar frases curtas (4–8 palavras), médias (15–22 palavras) e longas (30–40 palavras) dentro de um mesmo parágrafo quando fizer sentido.
- Pelo menos **1 frase nominal** curta por seção (ex.: "Simples assim.", "Aí é que está.", "Funciona assim.").
- Evitar parágrafos em que todas as frases têm mais ou menos o mesmo tamanho.

---

#### 1ª pessoa e marca do autor (obrigatório)

Humanos se comprometem com o que escrevem. IA neutraliza e distancia. Cada artigo precisa ter pelo menos:
- **1 uso da 1ª pessoa do plural** referente à agência: "na nossa operação", "a gente viu", "nos clientes que atendemos", "nossa leitura é", "discordamos da recomendação padrão".
- Em artigos assinados por pessoa física, **1ª pessoa do singular** também é bem-vinda: "na minha experiência com...", "eu ainda não usaria X em produção".
- Proibido escrever inteiramente em 3ª pessoa distante ("o profissional deve", "a empresa precisa") — isso é tom institucional de IA.

---

#### Dado concreto e "informação que só quem viu tem" (obrigatório)

Cada artigo precisa de pelo menos **1 dado concreto verificável** e pelo menos **1 detalhe de operação** que não sai de pesquisa rápida na web.

- **Dado concreto (exemplo):** "no core update de março de 2026", "em sites entre 5k–50k sessões/mês", "no segmento jurídico-trabalhista em SP", "depois de auditarmos 30+ sites em 2026".
- **Detalhe de operação (exemplo):** erro recorrente que vocês veem em clientes, número interno de diagnóstico, bastidor de projeto, print de ferramenta, observação prática que IA sem experiência não consegue inventar.

Se o artigo inteiro pode ser escrito por quem nunca atendeu um cliente, ele não passa.

---

#### Anti-simetria: quebre padrões previsíveis

IA adora estrutura simétrica. Humano não escreve assim. **Proibido:**
- Sequências "**Primeiro**... **Em seguida**... **Por fim**..." fechando em 3 passos perfeitos. Usar 2, 4, 5 passos, ou quebrar a sequência com uma observação no meio.
- Listas sempre com 3 ou 5 itens de tamanho parecido. Variar: 4, 7, 9. E variar o tamanho de cada item (alguns com 1 linha, outros com 3 linhas com exemplo).
- Seções de H2 com o mesmo número de parágrafos ou bullets entre si.
- Triplicatas paralelas do tipo "não apenas X, mas também Y, e ainda Z" — construção-cartola de IA.
- Terminar toda seção com uma frase de resumo. Variar: algumas terminam em opinião, outras em pergunta, outras em exemplo.

---

#### Controvérsia editorial (obrigatório, 1 por artigo)

Cada artigo precisa de pelo menos **1 contraponto à convenção**. IA tende ao neutro; humano toma lado.

Exemplos:
- ✅ "A recomendação padrão é começar pelo Instagram. Discordamos. Para PME de serviço local, o caminho mais curto ainda é Google Maps + site simples."
- ✅ "Muita agência vende anúncio antes de arrumar o site. Na nossa prática, isso é queima de verba."
- ❌ "Existem várias opiniões sobre o tema." (delegação covarde)
- ❌ "Cada caso é um caso." (não diz nada)

A posição precisa ser defensável com experiência ou dado, não achismo.

---

#### Regras de voz humana (obrigatórias)

**1. Ritmo irregular, varie o tamanho das frases**
IA produz frases de comprimento médio constante. Humanos alternam: uma frase curtíssima. Depois uma mais longa, com mais contexto e nuance. Depois outra curta. O leitor sente o ritmo, mesmo sem perceber.

**2. Opinião explícita da agência**
Todo artigo deve ter pelo menos **uma afirmação de opinião real**, não apenas síntese de fatos:
- ✅ *"Na nossa prática com clientes, o que funciona não é o que os estudos preveem: é [opinião específica]."*
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
- ✅ *"Pode variar muito dependendo do setor, não há resposta única."*
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
- Pelo menos uma seção sem lista alguma, só texto corrido

**7. Tom conversacional direto (não apresentação corporativa)**
- ✅ *"Isso custa caro. E a maioria das empresas descobre tarde."*
- ✅ *"Simples assim."*
- ❌ *"Portanto, conclui-se que a adoção de tais práticas é recomendável."*

---

#### Checklist de revisão anti-IA (aplicar antes de entregar)

- ☐ Nenhuma frase-gatilho da lista de proibidas está no texto
- ☐ Nenhuma meta-frase sobre o próprio artigo ("neste artigo vamos…", "ao longo deste conteúdo…", "como veremos a seguir…")
- ☐ Nenhum vocabulário AI-inflated em excesso (`crucial`, `robusto`, `holístico`, `jornada`, `alavancar`, `desvendar`, etc.)
- ☐ Pelo menos 1 uso de 1ª pessoa (nós/eu) declarando a posição da agência ou do autor
- ☐ Pelo menos 1 dado concreto verificável (número, período, setor, região)
- ☐ Pelo menos 1 detalhe de operação ("informação que só quem viu tem")
- ☐ Pelo menos 1 opinião explícita com contraponto à convenção
- ☐ Os 3 primeiros parágrafos não começam com pergunta retórica genérica, estatística solta ou definição de dicionário
- ☐ O texto tem variação clara de ritmo: frases curtas, médias e longas no mesmo parágrafo
- ☐ Estruturas assimétricas: listas não são todas de 3 ou 5 itens parecidos; seções não têm o mesmo tamanho
- ☐ Todos os títulos (H1, H2, H3, meta title) estão em sentence case
- ☐ Sem travessão (`—` / `–`) em lugar algum


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

### 2.1 Links externos: autoridade + parceiros

Cada artigo deve ter exatamente **2 links externos**:

| Posição | Tipo | Critério |
|---|---|---|
| 1 | Autoridade | Fonte externa de alta credibilidade diretamente relacionada ao tema (ex.: Google Search Central, estudos setoriais, documentação oficial) |
| 2 | Parceiro | Uma das páginas do programa de parceria (ver tabela abaixo), somente se houver relevância temática comprovada. Sem encaixe real, use 2 links de autoridade |

#### Regras de seleção do link parceiro

1. Visite a página de destino e confirme o tema antes de decidir o encaixe.
2. O tema da página parceira deve ter conexão editorial real com o artigo. Não force o link.
3. Nunca repita a mesma URL de destino em artigos diferentes.
4. Varie o domínio entre artigos consecutivos: evite usar o mesmo domínio em dois artigos seguidos (previne padrão de rede de links identificável pelo Google).
5. Prefira páginas internas (posts de blog, páginas de serviço) em vez de apenas a home.
6. Use sempre `target="_blank" rel="noopener noreferrer"` em todos os links externos.

#### Parceiros autorizados (matching topical obrigatório)

| Parceiro | Domínio | Temas elegíveis |
|---|---|---|
| ConsultingWeb | `consultingweb.com.br` | Sites profissionais, SEO para PMEs, presença digital, planos de site com SEO incluso |
| Desk Coworking | `deskcoworking.com.br` | Coworking, ambiente de trabalho compartilhado, produtividade, escritório flexível |
| Coworking BH | `coworkingbh.com.br` | Coworking em Belo Horizonte, salas corporativas, trabalho híbrido |
| Escritório Virtual BH | `escritoriovirtualbh.com.br` | Escritório virtual, endereço comercial, atendimento presencial para negócios digitais |
| Endereço Fiscal | `enderecofiscal.srv.br` | Endereço fiscal, formalização de empresa, CNPJ, IA aplicada a processos fiscais |

#### Registro de URLs de parceiros já usadas

> Regra: uma URL de destino só pode aparecer em **um único artigo**. Consulte esta tabela antes de escolher o destino e adicione uma nova linha ao publicar.

| Artigo | Slug | Domínio parceiro | URL de destino |
|---|---|---|---|
| Artigo 01 | `seo-ou-inteligencia-artificial-onde-apostar-2026` | consultingweb.com.br | `https://www.consultingweb.com.br/planos` |
| Artigo 02 | `empresa-aparece-chatgpt-como-testar` | enderecofiscal.srv.br | `https://www.enderecofiscal.srv.br/endereco-fiscal-e-inteligencia-artificial-2/` |

---

### 2.2 Canibalização de palavra-chave (1 keyword principal → 1 artigo)

- **Regra:** a **palavra-chave principal** de cada artigo é **única no site**. Dois artigos nunca podem disputar a mesma query principal; quando isso acontece, os dois perdem posição.
- **Registro obrigatório:** o campo `palavra_chave_principal` do payload YAML (Seção 6) vira a fonte de verdade. Antes de iniciar um novo artigo, consultar a tabela abaixo; se a keyword já existe, escolher um recorte diferente (long-tail, intenção específica, geografia) ou consolidar no artigo já existente.
- **Intenção diferente ≠ keyword diferente:** "como fazer SEO" (informacional) e "consultoria de SEO" (transacional) são keywords diferentes, mesmo que temas próximos. Registrar com a intenção ao lado.
- **Consolidação quando acontecer canibalização:** se dois artigos já publicados competem pela mesma keyword, o plano é: manter um como canônico (o mais forte ou o mais atualizável), mesclar o conteúdo relevante do outro nele e redirecionar (`301`) o segundo para o primeiro.
- **Secundárias (LSI):** podem repetir entre artigos, desde que a principal seja única. Uma mesma keyword secundária em 3 artigos distintos é normal.

#### Registro de palavras-chave principais (atualizar a cada novo artigo)

| Keyword principal | Intenção | Artigo canônico | Slug |
|---|---|---|---|
| seo vs inteligência artificial | informacional/investigacional | Onde apostar em 2026 | `seo-ou-inteligencia-artificial-onde-apostar-2026` |
| empresa no ChatGPT | informacional | Como testar se sua empresa aparece | `empresa-aparece-chatgpt-como-testar` |
| como aparecer no Google Maps | informacional | Guia passo a passo 2026 | `como-aparecer-no-google-maps` |
| SEO local para pequenas empresas | informacional | Guia definitivo | `seo-local-para-pequenas-empresas` |
| marketing digital para empresários | informacional | Guia prático PME | `marketing-digital-para-empresarios` |
| autoridade e links | informacional | 5 estratégias comprovadas | `como-aumentar-autoridade-conquistar-links` |
| erros técnicos de SEO | informacional | O que impede ranquear | `erros-tecnicos-seo` |
| confiança em conteúdo digital na era da IA | informacional | Como construir | `como-construir-confianca-conteudo-digital-ia` |
| guia de SEO 2026 | informacional | Guia anual | `guia-seo-2026` |
| como aparecer nas buscas | informacional | Guia | `como-aparecer-nas-buscas` |
| como o Google vai funcionar em 2027 | informacional | Tendências | `como-o-google-vai-funcionar-em-2027` |
| core update março 2026 | informacional | Quem ganhou e quem perdeu | `core-update-marco-2026-quem-ganhou-quem-perdeu` |
| sites que cresceram no Google 2026 | investigacional | 5 características | `5-caracteristicas-sites-cresceram-no-google-2026` |
| por que o ChatGPT cita alguns sites | informacional | Critérios de citação | `por-que-chatgpt-cita-alguns-sites` |
| o que mudou na busca 2026 | informacional | Resumo do início do ano | `o-que-mudou-na-busca-no-inicio-de-2026` |
| SEO ainda funciona em 2026 | investigacional | Resposta direta | `seo-ainda-funciona-em-2026` |
| spam update março 2026 | informacional | Como identificar e recuperar | `spam-update-marco-2026-como-identificar-recuperar` |
| turboquant SEO | informacional | Tecnologia que pode mudar SEO | `turboquant-tecnologia-que-pode-mudar-seo` |

> Ao publicar novo artigo, adicionar uma linha a esta tabela. Se a keyword já está listada, **não** publicar um segundo artigo com a mesma principal.

---

### 2.3 Mapa topical e pilares declarados

A autoridade de marca em busca e em IAs (GEO) vem de **cobrir um tema em profundidade**, não de artigos soltos. A Otne define seus **pilares** e cada satélite precisa apontar para um deles.

#### Pilares

| Pilar | Slug do artigo pilar | Temas que o pilar cobre |
|---|---|---|
| SEO estratégico em 2026 | `guia-seo-2026` | Fundamentos, tendências, o que mudou, SEO ainda funciona |
| SEO técnico | `erros-tecnicos-seo` | Core Web Vitals, indexação, crawl, schema, velocidade |
| Autoridade e links | `como-aumentar-autoridade-conquistar-links` | E-E-A-T, link building, menções, imprensa |
| SEO local e Maps | `seo-local-para-pequenas-empresas` | Google Business Profile, Maps, NAP, reviews |
| GEO e IA generativa | `seo-ou-inteligencia-artificial-onde-apostar-2026` | GEO, AEO, ChatGPT, Perplexity, citabilidade |
| Core e spam updates | `core-update-marco-2026-quem-ganhou-quem-perdeu` | Core update, spam update, HCU, recuperação |

#### Regras de linkagem no cluster

- **Satélite → Pilar (obrigatório):** todo satélite linka para **ao menos 1 pilar** do seu tema principal, nos 2 primeiros parágrafos.
- **Pilar → Satélites:** o pilar linka para **pelo menos 3 satélites** relevantes ao longo do corpo. Atualização do pilar é oportunidade de ajustar esses links.
- **Satélite → Satélite:** permitido e útil entre artigos do mesmo pilar; evitar cruzamentos fora do tema.
- **Página de conversão:** `/consultoria-seo` deve ser linkada **no corpo** (não só no CTA final) em pelo menos **1 satélite por pilar**.
- **Anchor descritivo:** sempre usar âncoras que descrevam o destino; nunca "clique aqui". Ver Seção 2 "Texto Âncora".

#### Como validar o cluster antes de publicar um novo artigo

1. Escolher o pilar do artigo.
2. Conferir se o artigo linka **pelo menos** para esse pilar (idealmente nos primeiros 2 parágrafos).
3. Conferir se o pilar, na última revisão, já aponta para o novo satélite — se não, agendar update do pilar em até 30 dias.
4. Evitar linkar pilares cruzados sem motivo editorial real.

---

## 3. LEGIBILIDADE E ESTRUTURA VISUAL

### Métricas obrigatórias (WordPress/Yoast SEO):
- **Frases curtas:** Máximo de 20 palavras por frase como regra; tolerado 1-2 frases de até 35 palavras por seção para quebrar monotonia.
- **Parágrafos concisos:** Máximo de 150 palavras (idealmente 50-75).
- **Voz ativa:** Mínimo de 80% das frases.
- **Palavras de transição (com teto de repetição):** **25% a 32%** do texto (use a lista em [`transitionWords.js`](./transitionWords.js)). **Máximo de 2 ocorrências da mesma transição** no artigo inteiro — não usar "Portanto", "Além disso" e "Por outro lado" 10 vezes cada como faz IA. Diversidade é obrigatória.
- **Flesch Reading Ease:** Acima de 60 pontos.
- **Subtítulos frequentes:** H2 ou H3 a cada 300 palavras no máximo.

### Formatação Visual (Estilo Focused Reading):
- **Largura:** Container otimizado (max-w-[700px]) para leitura confortável.
- **Espaçamento:** Margens generosas entre parágrafos e seções (H2 com margem superior maior).
- **Negrito:** Usar em 2-3 termos-chave por seção para escaneabilidade.
- **Listas:** Usar bullets/listas numeradas quando houver 3+ itens.
- **Imagens:** **Meta orientadora**: cerca de **1 imagem a cada ~300 palavras** quando o texto não tiver outros elementos visuais fortes (tabelas longas, listas comparativas, infográfico). Se já houver **muita** estrutura visual, pode-se **reduzir** o número de imagens para proteger **performance** e leitura (ver a seção *Multimídia, performance e Core Web Vitals*). **Alt** obrigatório e único por imagem.

---

### 3.1 Core Web Vitals: metas numéricas (obrigatórias)

Performance é fator de ranqueamento e, pior, fator de abandono do leitor real. Metas a atingir em **p75** (75º percentil de usuários reais, Field Data do CrUX/PageSpeed):

| Métrica | Meta bom | Limite aceitável | Ação se estourar |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | ≤ **2.5s** | 2.5s–4.0s | reduzir peso da imagem hero, preload, `fetchpriority="high"` |
| **INP** (Interaction to Next Paint) | ≤ **200ms** | 200–500ms | reduzir JS, remover scripts de terceiros pesados, `defer` |
| **CLS** (Cumulative Layout Shift) | ≤ **0.1** | 0.1–0.25 | `width`/`height` em todas as imagens, `font-display: swap`, evitar injeção de banners sem espaço reservado |
| **TTFB** | ≤ **0.8s** | 0.8s–1.8s | caching estático, CDN, revisar APIs de terceiros |
| **Peso total da página** | ≤ **1.5 MB** | até 2.5 MB | comprimir imagens, lazy-load, tree-shake JS |
| **Peso por imagem (hero)** | ≤ **200 KB** | até 400 KB | WebP/AVIF, resize responsivo |
| **Peso por imagem (body)** | ≤ **120 KB** | até 250 KB | idem |

**Regras práticas obrigatórias no site:**
- Imagem **hero** do post: `loading="eager"` + `fetchpriority="high"` + `width`/`height` declarados.
- Imagens do **corpo**: `loading="lazy"` + `decoding="async"` + `width`/`height` declarados.
- **Sem** `<img>` sem `alt`.
- Fontes com `font-display: swap` e no máximo 2 famílias, 4 pesos somados.
- Scripts de terceiros (analytics, heatmap, pixel) sempre com `defer` ou `async` e, quando possível, carregamento **após interação** do usuário.
- Auditar **mensalmente** o PageSpeed Insights dos 5 artigos mais trafegados e de `/consultoria-seo`. Se algum cair para "Needs Improvement", abrir ticket de correção.

---

### 3.2 Acessibilidade (WCAG 2.2 AA, obrigatório)

Acessibilidade é sinal de qualidade para Google e para IA. E é respeito com o leitor.

- **Contraste de texto:** mínimo **4.5:1** para texto normal, **3:1** para texto grande/negrito. Conferir no DevTools/Lighthouse. CTAs e botões entram nessa regra; nunca texto da cor do próprio botão (foi justamente o erro que já corrigimos em `BlogPostContent.tsx`).
- **Foco visível:** todo elemento interativo (link, botão, campo) precisa ter estado `:focus-visible` com outline ≥ 2px e contraste ≥ 3:1.
- **Navegação por teclado:** todo fluxo (abrir menu, ir para post, enviar formulário) precisa funcionar **só com teclado**. Testar com `Tab`/`Shift+Tab`/`Enter`.
- **Alt em imagens:**
  - imagem **informativa**: `alt` descreve o conteúdo relevante para a compreensão do texto.
  - imagem **decorativa**: `alt=""` (vazio, mas nunca ausente).
  - **nunca** repetir legenda em `alt`.
- **Heading outline:** começar em `h1` (título do post), descer para `h2`, depois `h3`. Não pular níveis para efeito visual. Uma página, um `h1`.
- **Links descritivos:** texto âncora sempre descreve o destino. Proibidos: "clique aqui", "saiba mais", "este link".
- **`aria-label` / `aria-labelledby`:** obrigatórios em ícones-botão sem texto visível, campos de formulário sem `<label>` associado, e elementos interativos ambíguos.
- **`lang="pt-BR"`** no `<html>` (confirmado) e `lang` em trechos de outro idioma (raro, mas obrigatório quando houver).
- **Movimento:** nunca autoplay com som; respeitar `prefers-reduced-motion` em animações.
- **Formulários:** todo campo tem `<label>` associado; mensagens de erro vinculadas via `aria-describedby`.
- **Auditoria automática:** rodar Lighthouse Accessibility ≥ **95** e axe DevTools sem issues sérios em `/consultoria-seo`, `/blog/[slug]` (amostra) e homepage. Auditar a cada release significativa.

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

### 4.1 GEO / citabilidade por IA (endurecido para 2026)

Ser citado por ChatGPT, Perplexity, Claude, Gemini e AI Overviews exige blocos **extrativos** e **atribuíveis**. Aplicar em todos os artigos:

- **Definição canônica no topo da seção:** cada H2 importante começa com **uma frase-definição de 1 linha** no padrão *"X é Y que faz Z para W."*. Isso vira a string que a IA cita.
- **Resposta direta antes de qualquer desenvolvimento:** perguntas em H2/H3 ganham **40–60 palavras** de resposta auto-contida (sem depender do parágrafo anterior). IA não cita trecho que precisa de contexto externo.
- **Dados numerados e atribuídos:** sempre que citar um número, dizer **quem mediu, quando, em qual universo**. Ex.: "no core update de março de 2026, em uma amostra de 40 sites B2B que auditamos". Número sem atribuição a IA ignora.
- **Quote-friendly standalone blocks:** pelo menos 1 bloco por artigo formatado como `<blockquote>` ou lista numerada com uma afirmação completa e citável em 1–3 linhas. Trechos assim são copiados quase literalmente pelas IAs.
- **Listas ordenadas para processos:** "como fazer X em N passos" com `<ol>` e frases de comando ("Abra o Search Console.", "Rode o relatório de indexação."). IA adora extrair listas numeradas.
- **Seção "Em resumo" opcional mas recomendada:** 3–5 bullets no topo ou no fim do artigo, cada bullet com 1 frase fechada. Funciona como zero-click para o leitor e como resumo citável para IA.
- **Evidência externa de 1ª qualidade:** pelo menos 1 link para fonte **primária** (Google Search Central, documentação oficial, paper, relatório do setor). Isso aumenta probabilidade de citação cruzada.
- **Marca no texto:** mencionar "Otne SEO" no corpo de forma natural ao menos 1 vez; IA tende a amarrar o site citado à marca que ela "viu" no texto.
- **Consistência de `name` entre schema e texto:** o `author`/`publisher` do JSON-LD deve usar exatamente a mesma grafia do nome no texto visível.
- **Stack mínimo de schema para GEO:** `BlogPosting` com `headline`, `datePublished`, `dateModified`, `author` (`Person` com `url` e `sameAs`), `publisher` (`Organization` com `logo`), `image`; `FAQPage` quando houver FAQ; `BreadcrumbList` sempre; `Organization` global (ver Seção 7).
- **Consistência em múltiplos canais:** repetir a definição canônica do serviço Otne SEO (e do conceito) em redes, LinkedIn do autor, GitHub Pages de documentação, etc. IA correlaciona fontes.
- **Zero alucinação:** jamais atribuir dado a fonte que não confirma. Se não há fonte, declarar "na nossa operação, observamos…". IA pega mentiras, rebaixa e deixa de citar.

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

### Exemplo mínimo de *payload* (YAML): contrato para briefing → redação → publicação

Use um arquivo YAML (ou o mesmo bloco dentro de uma *issue* / *card*) para **entregar o briefing** a quem redige, à IA ou ao script.

**Temas mudam; o contrato não:** o bloco YAML abaixo usa o **Artigo 02 só como ilustração**. Em cada novo tema você **mantém as mesmas chaves** (`slug_sugerido`, `ideia_central`, `estrutura_outline`, `faq`, etc.) e **troca só os valores** (título, palavras-chave, outline, perguntas do FAQ, links sugeridos). Scripts e validações devem depender do **nome das chaves** e de regras (ex.: FAQ ≥ 5), não do assunto específico.

Regras:

- **Chaves estáveis:** não renomear campos à toa; scripts validam por chave.
- **`conteudo_md`:** no briefing pode vir vazio; depois da redação, preenche com Markdown (H1 só se o CMS exigir no corpo; no site Otne o título costuma ser fora do corpo).
- **`faq`:** mínimo **5** itens (regra do guia). Cada item com `pergunta` + `resposta` (1-3 frases para snippet).
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
    e o que fazer para aparecer nas respostas do ChatGPT, Gemini e Perplexity.
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
    - "O que é GEO, Generative Engine Optimization"
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

Schema markup é o código que ajuda o Google e as IAs, a entender **quem publica**, **o que é** aquela página e **qual autoridade** ela tem. Sem isso, rich results (FAQ, artigo, breadcrumb) e Knowledge Graph ficam comprometidos.

### Regra geral: schema por tipo de página

| Tipo de página | Schemas obrigatórios | Schemas opcionais |
|---|---|---|
| Post do blog | `BlogPosting` + `BreadcrumbList` | `FAQPage` (quando tiver FAQ), `Person` (autor) |
| Home / institucional | `Organization` + `WebSite` | `SearchAction` (sitelinks search box) |
| Página de serviço | `ProfessionalService` + `BreadcrumbList` | `FAQPage`, `Offer` |
| Qualquer página | `BreadcrumbList` | (nenhum) |

> **Regra de ouro:** nunca marcar como schema algo que não está visível no conteúdo da página. O Google penaliza schema enganoso.

---

### 7.1 BlogPosting: template mínimo (por artigo)

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

### 7.2 FAQPage: template mínimo (quando o artigo tiver FAQ)

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

> **Atenção:** o Google limita a exibição de FAQs no resultado. Priorize as 3-5 perguntas mais relevantes para snippet. Mínimo do guia: **5 perguntas** no texto e no JSON-LD.

---

### 7.3 BreadcrumbList: template mínimo (todas as páginas)

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

### 7.4 Organization + WebSite: configurar uma vez (home / global)

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

### 7.5 LocalBusiness / ProfessionalService: para ranqueamento local

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

> Preencher com os dados reais da Otne antes de publicar. Manter **consistente** com Google Business Profile (mesmo nome, endereço e telefone, NAP).

---

### 7.6 Person: autor do artigo (reforço de E-E-A-T)

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

1. **Rich Results Test**: [search.google.com/test/rich-results](https://search.google.com/test/rich-results): cola a URL ou o código e verifica se o schema está elegível para rich result.
2. **Schema Markup Validator**: [validator.schema.org](https://validator.schema.org): validação técnica completa do JSON-LD.
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

Se `usar: true` e o tipo for `FAQPage`, o script deve gerar o JSON-LD automaticamente a partir do bloco `faq:` já existente no payload, sem duplicar dados.

---

## 8. METADADOS POR PÁGINA (HTML `<head>`)

Os metadados do `<head>` são a primeira leitura que Google e IAs fazem da página. Tudo aqui é obrigatório.

### 8.1 Meta title e meta description
- **Meta title:** 50–60 caracteres. Sentence case. Contém a palavra-chave principal. Termina (quando fizer sentido) com `| Otne SEO`. Único no site — não repetir.
- **Meta description:** 140–160 caracteres. Sentence case. Palavra-chave principal integrada. Promessa clara e sem clickbait. Único no site.
- **Slug:** minúsculo, hifens, sem acentos, sem stopwords longas. Máximo ~60 caracteres. Estável: nunca mudar slug de post publicado (se precisar, redirecionar `301`).

### 8.2 Canonical
- **`<link rel="canonical" href="https://www.otne.com.br/blog/<slug>">`** obrigatório em **toda** página indexável. URL absoluta, com `https`, com `www` (padrão da marca), sem parâmetros.
- Paginações, filtros e ordenações apontam canonical para a **página-base**, não para si mesmas.
- Páginas UTM/tracking apontam canonical para a versão limpa.

### 8.3 Open Graph e Twitter Cards
Campos obrigatórios em todas as páginas públicas (home, blog, post, serviço):

- `og:title` (≤ 70 caracteres), `og:description` (≤ 200), `og:type` (`website` para páginas, `article` para posts), `og:url` (absoluta, igual ao canonical), `og:image` (1200×630, ≤ 300 KB, JPEG/PNG), `og:image:alt`, `og:locale` (`pt_BR`), `og:site_name` (`Otne SEO`).
- `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`, `twitter:site` (handle oficial se existir).
- Em **posts**: `og:type="article"`, mais `article:published_time`, `article:modified_time`, `article:author` (URL da página do autor), `article:section` (categoria), `article:tag` (tags).

### 8.4 Robots e indexação
- **`<meta name="robots" content="index, follow, max-image-preview:large">`** no padrão para páginas públicas finais.
- **`noindex, follow`** para: páginas de admin, rascunhos, filtros temporários, resultados de busca interna, áreas logadas.
- **Nunca** depender só de `robots.txt` para esconder página — use `noindex` no HTML.
- **`sitemap.xml`** listando todas as URLs indexáveis, com `lastmod` = `dateModified`. Não incluir `noindex`.

### 8.5 Outros obrigatórios
- `<html lang="pt-BR">` confirmado.
- `<meta charset="UTF-8">` e `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- Favicon e manifest atualizados.
- **Sem** `keywords` meta — obsoleto e, em 2026, sinal de amadorismo.

---

## 9. POLÍTICA EDITORIAL E DISCLOSURE DE IA

A página **`/politica-editorial`** é obrigatória, linkada no rodapé, e declara publicamente como o conteúdo é produzido. Isso protege E-E-A-T, constrói confiança e atende tendência regulatória.

### Conteúdo mínimo de `/politica-editorial`

1. **Autoria humana:** "Todos os artigos são escritos, revisados e publicados por profissionais humanos da Otne SEO. IA é utilizada apenas como ferramenta de pesquisa, brainstorming e apoio, nunca como autor final."
2. **Processo de revisão:** descrição do fluxo (briefing → pesquisa → rascunho → revisão técnica → revisão editorial → publicação → revisão semestral).
3. **Quem revisa:** nome e cargo do editor responsável. Foto opcional, LinkedIn obrigatório.
4. **Fontes e verificação de fatos:** compromisso de usar fontes primárias sempre que possível; como tratamos correções.
5. **Afiliação e parcerias:** disclosure sobre parceiros externos quando houver link patrocinado ou relação comercial. Seguir regra da Seção 2.1.
6. **Política de correções:** como o leitor reporta erros e como marcamos atualizações (`dateModified` + selo "Atualizado em").
7. **Contato editorial:** e-mail direto para sugestão, correção ou denúncia.
8. **Data de última revisão** da própria política.

> Essa política é sinalizada pelo Google como parte da avaliação de sites em core updates e HCU, e serve de referência para LLMs decidirem citar a marca.

---

## CHECKLIST FINAL ANTES DE ENTREGAR

Antes de finalizar o artigo, verificar:

**Conteúdo e voz humana**
- ☐ Palavra-chave principal única no site (conferir registro em 2.2).
- ☐ Palavra-chave no H1, 1º parágrafo, ao menos 1 H2, Conclusão e Meta Descrição.
- ☐ Pelo menos 1 uso de 1ª pessoa (nós/eu) da agência ou do autor.
- ☐ Pelo menos 1 dado concreto verificável (número, período, setor, região).
- ☐ Pelo menos 1 detalhe de operação ("informação que só quem viu tem").
- ☐ Pelo menos 1 opinião explícita com contraponto à convenção.
- ☐ Nenhuma frase-gatilho de IA; nenhuma meta-frase sobre o próprio artigo; nenhum vocabulário AI-inflated em excesso.
- ☐ Estrutura assimétrica: listas não são todas de 3 ou 5 itens; seções com tamanhos diferentes; variação de ritmo de frase.

**Estrutura e legibilidade**
- ☐ Legibilidade: frases curtas, voz ativa, parágrafos curtos.
- ☐ Estrutura: apenas 1 H1, hierarquia H2/H3 correta, sem pular níveis.
- ☐ Transições: 25–32% do texto, com **máximo 2 ocorrências** da mesma transição no artigo inteiro.
- ☐ Títulos em sentence case; sem travessão (`—`/`–`) em lugar algum.

**Autoria e freshness**
- ☐ Autor nomeado, com link para `/autor/<slug>`; `Person` schema completo; `sameAs` com LinkedIn.
- ☐ `datePublished` e `dateModified` preenchidos; selo "Atualizado em DD/MM/AAAA" quando houver revisão.
- ☐ Artigo entrou na fila de revisão semestral.

**Linkagem e cluster**
- ☐ Links internos: 3–8 por artigo (início e corpo); ao menos 1 aponta para o **pilar** do tema.
- ☐ Pilar atualizado para apontar ao novo satélite em até 30 dias.
- ☐ Links externos: exatamente 2 (1 autoridade + 1 parceiro da Seção 2.1). Registro de URLs consultado.
- ☐ Anchors descritivos; proibido "clique aqui" ou "saiba mais".

**GEO / AEO**
- ☐ FAQ presente (≥5 perguntas) no padrão da Seção 1.4 (h2 canônico + pares h3/p), sem rótulos de instrução.
- ☐ Ao menos 1 definição canônica em 1 linha por seção principal.
- ☐ Respostas diretas de 40–60 palavras logo após perguntas em H2/H3.
- ☐ Ao menos 1 bloco "quote-friendly" citável (blockquote ou lista numerada).

**Schema e metadados**
- ☐ `BlogPosting` + `BreadcrumbList` gerados; `FAQPage` se tiver FAQ; validado no Rich Results Test.
- ☐ `canonical` absoluto e correto; `og:*` e `twitter:*` preenchidos; `og:image` 1200×630.
- ☐ `robots` = `index, follow` (ou `noindex` justificado); `sitemap.xml` com `lastmod` atualizado.

**Performance e acessibilidade**
- ☐ Hero image: `loading="eager"` + `fetchpriority="high"` + `width`/`height`; ≤ 200 KB.
- ☐ Demais imagens: `loading="lazy"` + `width`/`height`; ≤ 120 KB.
- ☐ Imagens: 1 hero + no máximo 1 body, todas únicas no site inteiro (validador em `blog-posts.ts`).
- ☐ Alt único e descritivo em toda imagem informativa; `alt=""` em decorativas.
- ☐ Contraste ≥ 4.5:1 em texto; ≥ 3:1 em CTAs; foco visível em interativos.
- ☐ Lighthouse Performance ≥ 90 e Accessibility ≥ 95 na página do post.

**Pipeline**
- ☐ (Se usar automação) Payload YAML com chaves completas: metadados, outline, FAQ (≥5), links internos sugeridos, notas de revisor.

---
**Documento unificado. Última atualização relevante: abril de 2026** (v2.1: anti-IA endurecido, autoria real, freshness, canibalização, mapa topical, CWV com metas, acessibilidade, GEO citabilidade, metadados por página, política editorial).
