import type { Publication } from "types";
export const publications: Publication[] = [
  {
    year: "2026",
    title:
      "Vulnerabilities, Secrets and Misconfiguration in the Highest-Exposure Docker Hub Images",
    venue: "arXiv",
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
    desc: {
      en: "An LLM-based tool that extracts and transforms vulnerability information from heterogeneous reports into structured data, evaluated against structured baselines with semantic similarity metrics (ROUGE-L, BERTScore). Validated on a dataset of 6,700 vulnerabilities extracted from 129 OpenVAS reports on DockerHub containers.",
      pt: "Ferramenta baseada em LLMs que extrai e transforma informações de vulnerabilidades de relatórios heterogêneos em dados estruturados, avaliada contra baselines estruturados com métricas de similaridade semântica (ROUGE-L, BERTScore). Validada em um dataset de 6.700 vulnerabilidades extraídas de 129 relatórios OpenVAS de containers do DockerHub.",
    },
    tags: ["LLMs", "Vulnerability Extraction", "OpenVAS", "BERTScore", "ROUGE-L"],
    link: "https://zenodo.org/records/19539374",
  },
  {
    year: "2026",
    title:
      "AnonShield: Scalable On-Premise Pseudonymization for CSIRT Network Vulnerability Data",
    venue: "SBRC 2026",
    award: { en: "Best Artifact", pt: "Melhor Artefato" },
    desc: {
      en: "A high-throughput, on-premise pseudonymization system for network vulnerability scan reports, combining GPU-accelerated NER, streaming processing, caching, and schema-aware configuration. Reaches up to 738× speedup on datasets up to 550 MB while achieving F1 = 94.2% and recall = 96.4%.",
      pt: "Sistema de pseudonimização on-premise de alta vazão para relatórios de varredura de vulnerabilidades, combinando NER acelerado por GPU, processamento em streaming, cache e configuração baseada em schema. Alcança até 738× de speedup em datasets de até 550 MB, com F1 = 94,2% e recall = 96,4%.",
    },
    tags: ["Pseudonymization", "NER", "GPU", "Privacy", "CSIRT"],
    link: "https://sol.sbc.org.br/index.php/sbrc_estendido/article/view/42580",
  },
  {
    year: "2025",
    title:
      "Structured Extraction of Vulnerabilities in OpenVAS and Tenable WAS Reports Using LLMs",
    venue: "WRSEG 2025",
    award: { en: "2nd Best Paper", pt: "2º Melhor Artigo" },
    desc: {
      en: "An automated LLM-based method to extract and structure vulnerabilities from OpenVAS and Tenable WAS scanner reports, converting unstructured data into a standardized format for risk management. In an evaluation with 34 vulnerabilities, GPT-4.1 and DeepSeek reached the highest similarity to the baseline (ROUGE-L > 0.7).",
      pt: "Método automatizado baseado em LLMs para extrair e estruturar vulnerabilidades de relatórios dos scanners OpenVAS e Tenable WAS, convertendo dados não estruturados em um formato padronizado para gestão de risco. Em uma avaliação com 34 vulnerabilidades, GPT-4.1 e DeepSeek alcançaram a maior similaridade com o baseline (ROUGE-L > 0,7).",
    },
    tags: ["LLMs", "OpenVAS", "Tenable WAS", "Vulnerability Extraction", "ROUGE-L"],
    link: "https://sol.sbc.org.br/index.php/errc/article/view/39195",
  },
  {
    year: "2025",
    title:
      "AnonLFI 2.0: Extensible Architecture for PII Pseudonymization in CSIRTs with OCR and Technical Recognizers",
    venue: "WRSEG 2025",
    desc: {
      en: "A modular pseudonymization framework for CSIRTs that uses HMAC-SHA256 to generate strong, reversible pseudonyms, preserves the structural integrity of XML and JSON documents, and integrates OCR and specialized technical recognizers for PII and security artifacts. Achieved 100% precision and F1 scores of 76.5% and 92.13% across two case studies.",
      pt: "Framework modular de pseudonimização para CSIRTs que usa HMAC-SHA256 para gerar pseudônimos fortes e reversíveis, preserva a integridade estrutural de documentos XML e JSON e integra OCR e reconhecedores técnicos especializados para PII e artefatos de segurança. Alcançou 100% de precisão e F1 de 76,5% e 92,13% em dois estudos de caso.",
    },
    tags: ["Pseudonymization", "PII", "OCR", "HMAC-SHA256", "CSIRT"],
    link: "https://sol.sbc.org.br/index.php/errc/article/view/39186",
  },
];
