<h1>Meu Portfólio - React + TypeScript + Vite<h1/>
Este repositório é parte do meu portfólio, demonstrando uma configuração mínima para um projeto React com TypeScript e Vite. O projeto está configurado para suportar Hot Module Replacement (HMR) e inclui regras básicas de ESLint para garantir a qualidade do código.

Tecnologias Utilizadas
React: Biblioteca para construção de interfaces de usuário.
TypeScript: Superset do JavaScript que adiciona tipagem estática.
Vite: Ferramenta de construção para desenvolvimento rápido e suporte a HMR.
Plugins do Vite
Este projeto utiliza dois plugins oficiais para React com Vite:

@vitejs/plugin-react: Utiliza Babel para Fast Refresh.
@vitejs/plugin-react-swc: Utiliza SWC para Fast Refresh.
Escolha o plugin que melhor se adapta às suas necessidades e substitua conforme necessário.

Configuração do ESLint
Para garantir a qualidade do código, é recomendável atualizar a configuração do ESLint para habilitar regras de linting cientes do tipo. Siga as etapas abaixo para configurar:

Atualize as opções do parser:

No arquivo de configuração do ESLint (eslint.config.js), configure parserOptions da seguinte forma:

js
Copiar código
import tseslint from 'typescript-eslint'

export default tseslint.config({
  languageOptions: {
    // outras opções...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
Atualize a configuração do ESLint:

Substitua tseslint.configs.recommended por tseslint.configs.recommendedTypeChecked ou tseslint.configs.strictTypeChecked.

Opcionalmente, adicione ...tseslint.configs.stylisticTypeChecked.

Instale o eslint-plugin-react e atualize a configuração:

js
Copiar código
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Defina a versão do React
  settings: { react: { version: '18.3' } },
  plugins: {
    // Adicione o plugin React
    react,
  },
  rules: {
    // outras regras...
    // Habilite as regras recomendadas
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
Como Executar o Projeto
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências:

bash
Copiar código
cd seu-repositorio
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm run dev
Abra o navegador e acesse http://localhost:3000 para ver o projeto em execução.

Contribuições
Sinta-se à vontade para contribuir para este projeto! Envie pull requests com melhorias ou correções.

Licença
Este projeto é licenciado sob a MIT License.
