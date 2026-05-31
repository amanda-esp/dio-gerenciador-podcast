# 🎙️ Podcast Manager

Um gerenciador de podcasts robusto e escalável, desenvolvido com TypeScript sem frameworks e arquitetura em camadas, focando em desacoplação e manutenibilidade.

## ✨ Principais Funcionalidades

- **📋 Listagem de Episódios**: Recupere todos os episódios de podcasts disponíveis
- **🔍 Filtro Avançado**: Filtre episódios por critérios específicos
- **🔌 API REST**: Endpoints bem definidos para integração com outras aplicações
- **📊 Gerenciamento de Dados**: Persistência de dados em JSON

## 🏗️ Arquitetura do Projeto

O projeto segue o padrão de **Arquitetura em Camadas**, garantindo separação de responsabilidades e facilidade de manutenção:

```
┌─────────────────────────────────────┐
│          Routes                     │
│    (Roteamento de URLs)             │
├─────────────────────────────────────┤
│          Controllers                │
│    (Manipulação de Requisições)     │
├─────────────────────────────────────┤
│          Services                   │
│    (Lógica de Negócio)              │
├─────────────────────────────────────┤
│          Repository                 │
│    (Acesso a Dados)                 │
├─────────────────────────────────────┤
│       Model (DTO/Interfaces)        │
│    (Estrutura de Dados)             │
└─────────────────────────────────────┘
```

### Estrutura de Diretórios

```
src/
├── controllers/        # Controladores (requisições HTTP)
├── services/          # Serviços (lógica de negócio)
├── repository/        # Repositório (acesso a dados)
├── model/            # DTOs e Interfaces
├── routes/           # Definição de rotas
├── utils/            # Utilitários (status, content-types, etc)
├── app.ts            # Configuração da aplicação
└── server.ts         # Servidor HTTP
```

## 🎯 Pontos Fortes

### 1. **Desacoplação**
- Cada camada tem responsabilidade única e bem definida
- Camadas não dependem diretamente uma da outra, apenas através de interfaces
- Facilita testes unitários e substituição de implementações

### 2. **Escalabilidade**
- Estrutura preparada para crescimento do projeto
- Fácil adição de novos endpoints e funcionalidades
- Padrão coerente em toda a aplicação

### 3. **Manutenibilidade**
- Código organizado e previsível
- Responsabilidades claras para cada módulo
- Alterações em uma camada não impactam as outras

### 4. **TypeScript**
- Type-safe development
- Melhor suporte a IDE e autocompletar
- Prevenção de erros em tempo de compilação

### 5. **Sem Dependências Pesadas**
- Utiliza apenas módulos nativos do Node.js
- Setup simples e rápido
- Menos vulnerabilidades de segurança

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/amanda-esp/dio-gerenciador-podcast.git

# Instalar dependências
npm install
```


## 📡 Endpoints da API

### Listar Todos os Episódios

```
GET /api/list
```

**Resposta:**
```json
{
  "statusCode": 200,
  "body": [
    {
      "name": "Podcast Name",
      "episodes": [...]
    }
  ]
}
```

### Filtrar Episódios

```
GET /api/filter?name=<filtro>
```

**Resposta:**
```json
{
  "statusCode": 200,
  "body": [
    {
      "name": "Filtered Episode",
      ...
    }
  ]
}
```

## 🔧 Stack Tecnológico

- **Runtime**: Node.js
- **Linguagem**: TypeScript
- **Build**: tsup
- **Dev Tools**: tsx, @types/node

## 📚 Padrões de Design Utilizados

- **DTO (Data Transfer Object)**: Para transferência de dados entre camadas
- **Repository Pattern**: Para abstração de acesso a dados
- **Service Layer**: Para encapsulamento de lógica de negócio
- **Controller Pattern**: Para manipulação de requisições HTTP

## 🧪 Fluxo de uma Requisição

```
1. Request chega na aplicação (app.ts)
        ↓
2. URL é roteada (url-paths.ts)
        ↓
3. Controller é chamado (podcasts-controller.ts)
        ↓
4. Service executa lógica (listPodcast.service.ts)
        ↓
5. Repository acessa dados (podcast-repository.ts)
        ↓
6. Response é formatada com status (server-status-response.ts)
        ↓
7. JSON é retornado ao cliente
```

## 📝 Boas Práticas Implementadas

✅ Separação de responsabilidades  
✅ Type safety com TypeScript  
✅ Tratamento de erros com status HTTP apropriados  
✅ Content-type headers corretos  
✅ Estrutura escalável e preparada para crescimento  
✅ Código limpo e comentado  


## 👤 Autor

Desenvolvido como parte da Jornada Para o Futuro - DIO

---

**Última atualização**: Maio de 2026
