# 📋 Template de Novo Projeto

Use esta estrutura como base para criar novos projetos no laboratório.

## Estrutura Obrigatória

```
project-name/
├── index.html        # Página do projeto (obrigatório)
├── description.md    # Descrição detalhada (obrigatório)
├── demo/             # Demonstrações e protótipos
└── assets/           # Recursos do projeto (imagens, dados, etc.)
```

## Checklist para Novo Projeto

- [ ] Criar diretório em `projects/`
- [ ] Criar `index.html` com design padrão do lab
- [ ] Criar `description.md` com:
  - Visão geral
  - Stack tecnológica
  - Funcionalidades
  - Roadmap
- [ ] Criar pasta `demo/` (mesmo se vazia inicialmente)
- [ ] Criar pasta `assets/`
- [ ] Atualizar `index.html` principal com link para o novo projeto
- [ ] Commit e push

## Template HTML Base

Copie o HTML de um projeto existente (`projects/senselens/index.html`) e adapte:

1. Mude o título e descrição
2. Atualize as cores do badge (blue, purple, emerald, amber)
3. Atualize as meta tags
4. Adicione o conteúdo específico

## Cores do Design System

| Cor | CSS Variable | Uso |
|-----|-------------|-----|
| Azul | `--accent-blue` | Projetos de visão/análise |
| Roxo | `--accent-purple` | Projetos de IA/predição |
| Verde | `--accent-emerald` | Experimentos/pesquisa |
| Âmbar | `--accent-amber` | Ferramentas/utilitários |
