## Desenvolvimento

| Comando | O que faz |
|---|---|
| `npm start` | Sobe o dev server (`ng serve`), normalmente em `http://localhost:4200` |
| `npm run build` | Build de produção |
| `npm run watch` | Build em modo watch, configuração de desenvolvimento |

## Testes unitários

// npx ng test --watch=false --include="**/clients/**/*.spec.ts" --reporters=verbose - Comando para rodar o teste apenas no clients.-

| Comando | O que faz |
|---|---|
| `npm test` | Roda a suíte inteira. **Atenção**: em terminal interativo, fica em modo watch por padrão (não termina sozinho) |
| `ng test --watch=false` | Roda uma vez só e termina — bom pra conferir rápido se está tudo passando |
| `ng test --filter Clients --watch=false` | Roda só os testes cujo nome (do `describe`/`it`) bate com o texto — ex.: pega `ClientsService` e `Clients` (a página) de uma vez |
| `ng test --include src/app/features/dashboard/services/clients --include src/app/features/dashboard/pages/clients --watch=false` | Mesma ideia, mas filtrando por caminho de arquivo/pasta em vez de nome |
| `ng test --list-tests` | Só lista os arquivos de teste encontrados, sem executar nada |
| `ng test --coverage --watch=false` | Roda com relatório de cobertura |
| `ng test --ui` | Abre a UI interativa do Vitest pra navegar pelos testes visualmente |

## Storybook

| Comando | O que faz |
|---|---|
| `npx compodoc -p .storybook/tsconfig.doc.json -e json -d .` | Gera `documentation.json` — **precisa rodar antes** da primeira vez que o Storybook for aberto, senão o `preview.ts` não encontra o arquivo |
| `npm run storybook` | Sobe o Storybook localmente, normalmente em `http://localhost:6006` |
| `npm run build-storybook` | Gera a versão estática do Storybook (pra publicar/hospedar) |

## Gerar código (Angular CLI)

| Comando | O que faz |
|---|---|
| `ng generate component <caminho>` (curto: `ng g c <caminho>`) | Cria um componente novo na pasta indicada |
| `ng generate service <caminho>` (`ng g s`) | Cria um service novo |
| `ng generate guard <caminho>` (`ng g g`) | Cria um guard funcional (`CanActivateFn`) |
| `ng generate interceptor <caminho>` | Cria um interceptor funcional (`HttpInterceptorFn`) |

