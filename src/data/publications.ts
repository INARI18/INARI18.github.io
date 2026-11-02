import type { Publication } from "types";
export const publications: Publication[] = [
  {
    year: "2026",
    title:
      "MulitaMiner: A Multi-Version Evaluation of LLM-Based Vulnerability Report Extraction",
    venue: "SBSeg 2026",
    short: "MulitaMiner V1-V3",
    icon: "chart",
    desc: {
      en: "An LLM-based pipeline for structured vulnerability extraction from heterogeneous scanner PDFs, hardened across three versions (V1-V3) that evolve from a functional baseline, to scanner-aware segmentation, and finally to per-LLM tuning with few-shot prompting. Across 450 runs with five LLMs (DeepSeek, GPT-4, GPT-5, LLaMA 3, LLaMA 4) on three curated OpenVAS baselines, Exact Record Match rises from 37.5% to 90.4% and vulnerability-level omission falls from 20.5% to 1.7%, showing that pipeline engineering, not model substitution, is the primary lever for extraction quality.",
      pt: "Pipeline baseado em LLMs para extração estruturada de vulnerabilidades a partir de PDFs heterogêneos de scanners, refinado ao longo de três versões (V1-V3) que evoluem de um baseline funcional para segmentação ciente do scanner e, por fim, ajuste por LLM com prompting few-shot. Em 450 execuções com cinco LLMs (DeepSeek, GPT-4, GPT-5, LLaMA 3, LLaMA 4) sobre três baselines OpenVAS curados manualmente, o Exact Record Match sobe de 37,5% para 90,4% e a omissão em nível de vulnerabilidade cai de 20,5% para 1,7%, mostrando que a engenharia do pipeline, e não a troca de modelo, é o principal fator de qualidade da extração.",
    },
    tags: ["LLMs", "Vulnerability Extraction", "OpenVAS", "Prompt Engineering", "Benchmarking"],
    link: "https://sol.sbc.org.br/index.php/sbseg/article/view/44328",
    project: "MulitaMiner",
  },
  {
    year: "2026",
    title:
      "On-Premise vs. Cloud: Local LLMs for Vulnerability Extraction from Security Scanner Reports",
    venue: "SBSeg 2026",
    short: "Local LLMs vs cloud",
    icon: "chip",
    award: { en: "All 4 CTA artifact badges", pt: "4 selos de artefato do CTA" },
    desc: {
      en: "Cloud LLMs extract structured data from vulnerability-scanner reports accurately, but each report maps an organization's attack surface, so routing it to a third-party API trades confidentiality for that accuracy. We evaluate nine local models (4B to 21B) against a DeepSeek cloud reference on three ground-truth baselines. The best local model, on a consumer GPU, trails the cloud by only 1.2 points in free-text fidelity and matches it on structured fields; the spread across local models far exceeds this gap, making model choice the decisive factor for private, on-premise extraction.",
      pt: "LLMs em nuvem extraem dados estruturados de relatórios de scanners de vulnerabilidade com precisão, mas cada relatório mapeia a superfície de ataque de uma organização, então enviá-lo a uma API de terceiros troca confidencialidade por essa precisão. Avaliamos nove modelos locais (4B a 21B) contra uma referência em nuvem (DeepSeek) em três baselines com ground truth. O melhor modelo local, numa GPU de consumo, fica apenas 1,2 ponto atrás da nuvem em fidelidade de texto livre e empata nos campos estruturados; a variação entre os modelos locais supera em muito essa diferença, tornando a escolha do modelo o fator decisivo para extração privada e on-premise.",
    },
    tags: ["Local LLMs", "On-Premise", "Vulnerability Extraction", "Privacy", "Benchmarking"],
    link: "https://doi.org/10.5753/sbseg_estendido.2026.29879",
    project: "MulitaMiner",
  },
  {
    year: "2026",
    title: "ZeroLINC: Training-Free Local Classification of Security Incident Reports",
    venue: "SBSeg 2026",
    short: "ZeroLINC",
    icon: "tag",
    award: { en: "All 4 CTA artifact badges", pt: "4 selos de artefato do CTA" },
    desc: {
      en: "Security operations centers must classify large volumes of incident reports. Recent work automates this by prompting commercial LLMs, which charge per call and receive sensitive incident data, or locally hosted models with billions of parameters, which demand a GPU server. ZeroLINC is an open-source tool that lets a SOC or CSIRT analyst assign each incoming report to one of 12 NIST categories on a single local GPU, with no gradient training and no external API. Its instance-memory engine labels each ticket by similarity to the nearest already-labeled tickets: with 89 labeled examples it reaches 90.8% mean test accuracy over the eight categories the corpus populates, matching the band prior work reached only with a commercial LLM. A second engine works with no labeled data at all, up to 70.9%. The engines were selected with a systematic benchmark of 293 runs on 182 expert-labeled tickets from real incident response teams. Classifying the whole corpus takes seconds and under 3 Wh on one GPU.",
      pt: "Centros de operações de segurança precisam classificar grandes volumes de relatórios de incidentes. Trabalhos recentes automatizam isso com LLMs comerciais, que cobram por chamada e recebem dados sensíveis, ou com modelos locais de bilhões de parâmetros, que exigem um servidor com GPU. O ZeroLINC é uma ferramenta open source que permite a um analista de SOC ou CSIRT atribuir cada relatório a uma das 12 categorias do NIST em uma única GPU local, sem treinamento por gradiente e sem API externa. Seu motor de memória de instâncias rotula cada ticket pela similaridade com os tickets já rotulados mais próximos: com 89 exemplos rotulados chega a 90,8% de acurácia média de teste nas oito categorias presentes no corpus, igualando a faixa que trabalhos anteriores só alcançavam com um LLM comercial. Um segundo motor funciona sem nenhum dado rotulado, chegando a 70,9%. Os motores foram escolhidos com um benchmark sistemático de 293 execuções sobre 182 tickets rotulados por especialistas de times reais de resposta a incidentes. Classificar o corpus inteiro leva segundos e menos de 3 Wh em uma GPU.",
    },
    tags: ["Incident Response", "NIST Categories", "Local Models", "Classification", "CSIRT"],
    link: "https://doi.org/10.5753/sbseg_estendido.2026.33502",
  },
  {
    year: "2026",
    title:
      "Vulnerabilities, Secrets and Misconfiguration in the Highest-Exposure Docker Hub Images",
    venue: "arXiv",
    short: "Docker Hub exposure",
    icon: "whale",
    desc: {
      en: "ChimangoScan, a pipeline that crawls the whole Docker Hub namespace (12.7M repositories, 663.8B pulls), reconstructs the image layer graph, ranks images by an exposure score and scans the 52,895 highest-exposure repositories with six scanners, yielding 170.4M findings. 96.3% of images carry a known vulnerability and 98.0% a CIS Docker Benchmark misconfiguration, yet only 2.7% of (vulnerability, package) groups are flagged by all three vulnerability scanners, showing how tool-dependent the reported posture is.",
      pt: "ChimangoScan, um pipeline que percorre todo o namespace do Docker Hub (12,7M repositórios, 663,8B pulls), reconstrói o grafo de camadas das imagens, ordena as imagens por um score de exposição e escaneia os 52.895 repositórios de maior exposição com seis scanners, gerando 170,4M de achados. 96,3% das imagens têm alguma vulnerabilidade conhecida e 98,0% alguma má configuração do CIS Docker Benchmark, mas apenas 2,7% dos grupos (vulnerabilidade, pacote) são apontados pelos três scanners de vulnerabilidade, mostrando o quanto o diagnóstico depende da ferramenta.",
    },
    tags: ["Docker Hub", "Containers", "Vulnerability Scanners", "Secrets", "CIS Benchmark"],
    link: "https://arxiv.org/abs/2608.02669",
  },
  {
    year: "2026",
    title:
      "MulitaMiner: Transforming Heterogeneous Technical Reports into Structured Data Using LLMs",
    venue: "Zenodo",
    short: "MulitaMiner tool",
    icon: "armadillo",
    desc: {
      en: "An LLM-based tool that extracts and transforms vulnerability information from heterogeneous reports into structured data, evaluated against structured baselines with semantic similarity metrics (ROUGE-L, BERTScore). Validated on a dataset of 6,700 vulnerabilities extracted from 129 OpenVAS reports on DockerHub containers.",
      pt: "Ferramenta baseada em LLMs que extrai e transforma informações de vulnerabilidades de relatórios heterogêneos em dados estruturados, avaliada contra baselines estruturados com métricas de similaridade semântica (ROUGE-L, BERTScore). Validada em um dataset de 6.700 vulnerabilidades extraídas de 129 relatórios OpenVAS de containers do DockerHub.",
    },
    tags: ["LLMs", "Vulnerability Extraction", "OpenVAS", "BERTScore", "ROUGE-L"],
    link: "https://zenodo.org/records/19539374",
    project: "MulitaMiner",
  },
  {
    year: "2026",
    title:
      "AnonShield: Scalable On-Premise Pseudonymization for CSIRT Network Vulnerability Data",
    venue: "SBRC 2026",
    short: "AnonShield",
    icon: "shield",
    award: { en: "Best Artifact", pt: "Melhor Artefato" },
    desc: {
      en: "A high-throughput, on-premise pseudonymization system for network vulnerability scan reports, combining GPU-accelerated NER, streaming processing, caching, and schema-aware configuration. Reaches up to 738× speedup on datasets up to 550 MB while achieving F1 = 94.2% and recall = 96.4%.",
      pt: "Sistema de pseudonimização on-premise de alta vazão para relatórios de varredura de vulnerabilidades, combinando NER acelerado por GPU, processamento em streaming, cache e configuração baseada em schema. Alcança até 738× de speedup em datasets de até 550 MB, com F1 = 94,2% e recall = 96,4%.",
    },
    tags: ["Pseudonymization", "NER", "GPU", "Privacy", "CSIRT"],
    link: "https://sol.sbc.org.br/index.php/sbrc_estendido/article/view/42580",
    project: "AnonLFI 2.0",
  },
  {
    year: "2025",
    title:
      "Structured Extraction of Vulnerabilities in OpenVAS and Tenable WAS Reports Using LLMs",
    venue: "WRSEG 2025",
    short: "OpenVAS & Tenable",
    icon: "document",
    award: { en: "2nd Best Paper", pt: "2º Melhor Artigo" },
    desc: {
      en: "An automated LLM-based method to extract and structure vulnerabilities from OpenVAS and Tenable WAS scanner reports, converting unstructured data into a standardized format for risk management. In an evaluation with 34 vulnerabilities, GPT-4.1 and DeepSeek reached the highest similarity to the baseline (ROUGE-L > 0.7).",
      pt: "Método automatizado baseado em LLMs para extrair e estruturar vulnerabilidades de relatórios dos scanners OpenVAS e Tenable WAS, convertendo dados não estruturados em um formato padronizado para gestão de risco. Em uma avaliação com 34 vulnerabilidades, GPT-4.1 e DeepSeek alcançaram a maior similaridade com o baseline (ROUGE-L > 0,7).",
    },
    tags: ["LLMs", "OpenVAS", "Tenable WAS", "Vulnerability Extraction", "ROUGE-L"],
    link: "https://sol.sbc.org.br/index.php/errc/article/view/39195",
    project: "MulitaMiner",
  },
  {
    year: "2025",
    title:
      "AnonLFI 2.0: Extensible Architecture for PII Pseudonymization in CSIRTs with OCR and Technical Recognizers",
    venue: "WRSEG 2025",
    short: "AnonLFI 2.0",
    icon: "mask",
    desc: {
      en: "A modular pseudonymization framework for CSIRTs that uses HMAC-SHA256 to generate strong, reversible pseudonyms, preserves the structural integrity of XML and JSON documents, and integrates OCR and specialized technical recognizers for PII and security artifacts. Achieved 100% precision and F1 scores of 76.5% and 92.13% across two case studies.",
      pt: "Framework modular de pseudonimização para CSIRTs que usa HMAC-SHA256 para gerar pseudônimos fortes e reversíveis, preserva a integridade estrutural de documentos XML e JSON e integra OCR e reconhecedores técnicos especializados para PII e artefatos de segurança. Alcançou 100% de precisão e F1 de 76,5% e 92,13% em dois estudos de caso.",
    },
    tags: ["Pseudonymization", "PII", "OCR", "HMAC-SHA256", "CSIRT"],
    link: "https://sol.sbc.org.br/index.php/errc/article/view/39186",
    project: "AnonLFI 2.0",
  },
];
