# 🧪 Projeto de Testes com TDD em Node.js

Este projeto demonstra a aplicação do conceito de Test-Driven Development (TDD) utilizando tecnologias modernas como TypeScript, Express, Jest e Supertest. O código está organizado de forma modular para garantir escalabilidade, manutenibilidade e testes eficazes.

# 🚀 Tecnologias Utilizadas
- Node.js
- TypeScript
- Express
- Jest
- Supertest
  
# 📁 Estrutura de Pastas
O projeto está contido dentro da pasta src, com as seguintes subpastas:
- app/ – Regras de negócio e controladores
- core/ – Utilitários e configurações essenciais
- infra/ – Integrações com banco de dados, serviços externos etc.
- tests/ – Testes unitários e de integração usando Jest + Supertest

# ⚙️ Instalação e Execução
Siga os passos abaixo para clonar e rodar o projeto em sua máquina:
## 1. Clone o repositório
```console
git clone https://github.com/kim-a9/Projeto3_TDD.git

```
##  2. Acesse o diretório do projeto
```console
cd Projeto3_TDD

```
##  3. Instale as dependências
```javascript
npm install

```
##  4. Inicie o servidor de desenvolvimento
```javascript
npm start

```
##  5. Execute os testes para verificar funcionamento
```javascript
npm test

```
Certifique-se de ter o Node.js e o npm instalados em sua máquina.


# 🆕 Atualizações Recentes
O projeto passou por melhorias significativas para torná-lo mais robusto. Confira as novidades:

## 🔐 Autenticação com JWT
- Implementação de autenticação baseada em JSON Web Tokens (JWT)
- Rotas protegidas com middleware de verificação de token
- Geração e validação de tokens seguros para sessões de usuário

## 🧪 Testes de Integração Aprimorados
- Uso de dados dinâmicos para testes mais realistas
- Separação clara entre testes unitários e de integração

## 🗄️ Conexão com MongoDB
- Integração com banco de dados MongoDB usando mongoose
- Modelos definidos para persistência de dados
