# Life Planner – Todo React App

En enkel och modern todo-app byggd med React, TypeScript och Vite. Appen är uppbyggd enligt rekommenderade arbetssätt inom React, både vad gäller komponenter, state-hantering och testning.

## Funktioner

- Lägg till, redigera och ta bort todos
- Modal-dialoger för redigering och borttagning
- Toast-meddelanden för feedback
- Teckenräknare i inputfält
- Filtrering och visning av slutförda todos

## Kom igång

### Förkrav

Du behöver ha installerat:

- Node.js
- npm (följer med Node)

Kolla versioner med:

```bash
node -v
npm -v
```

### 1. Klona och installera

```bash
git clone <repo-url>
cd todo-react
npm install
```

### 4. Testa

```bash
npm run test
```

## Projektstruktur

```
src/
  components/      // Återanvändbara React-komponenter
  types/           // TypeScript-typer och props
  utils/           // Hjälpfunktioner (validering, filter, locale storage)
  App.tsx          // Huvudkomponent med state
  setupTests.ts    // Testsetup för Testing Library
```

## Best Practice (som projektet följer)

- Liten och tydlig komponentstruktur
- All typning i en egen mapp (types)
- State i App.tsx → skickas vidare till komponenter via props
- Separata utils-filer för logik
- Testning med Vitest + Testing Library
- Modulär CSS med tydliga klassnamn

## Verktyg och ramverk

- **React:** Bygger UI med komponenter. Varje komponent har sin egen fil.
- **TypeScript:** Ger typkontroll, minskar buggar och gör koden lättare att förstå.
- **Vite:** Snabb utvecklingsserver och byggverktyg.
- **Testing Library:** Testar att appen fungerar som användaren förväntar sig.
- **Vitest:** Modern test-runner för TypeScript och Vite-projekt.

---

Byggt med 💚
