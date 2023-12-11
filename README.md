# iWeather

## O que é necessário para testar essa aplicação?

- Ter o [Node.js](https://nodejs.org/en) instalado acima da versão 18;
- Ter o gerenciador de pacotes [Yarn](https://yarnpkg.com/) instalado;
- Simuladores: [Xcode](https://developer.apple.com/xcode/) ou [Android Studio](https://developer.android.com/)

## Principais Tecnologias Utilizadas

- [React-Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Styled-components](https://styled-components.com/)
- [React Navigation](https://reactnavigation.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [React Native Testing Library](https://testing-library.com/)

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`EXPO_PUBLIC_WEATHER_APP_ID`

## Rodando Localmente

Clone o projeto

```bash
  git clone https://github.com/flpcastro/iweather.git
```

Entre no diretório do projeto

```bash
  cd iweather
```

Instale as dependências

```bash
  yarn
```

Execute no emulador de sua preferência

```bash
  npx expo run:ios
  npx expo run:android
```

# Testes

```bash
  yarn test
```

```
iweather
├── assets/
├── ios/
├── src/
│   ├── @types/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── libs/
│   │   └── asyncStorage/
│   │   └── dayjs/
│   ├── mocks/
│   │   └── api/
│   │   └── libs/
│   │   └── utils/
│   ├── routes/
│   ├── screens/
│   ├── services/
│   ├── styles/
│   ├── utils/
├── .env.example
├── .gitignore
├── app.json
├── App.tsx
├── babel.config.js
├── jest.config.json
├── metro.config.js
├── package.json
├── README.md
└── tsconfig.json
└── yarn.lock
```

## Documentação de cores

| Cor        | Hexadecimal                                                      |
| ---------- | ---------------------------------------------------------------- |
| White      | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| Blue Light | ![#8FB2F5](https://via.placeholder.com/10/8FB2F5?text=+) #8FB2F5 |
| Brand Mid  | ![#00875F](https://via.placeholder.com/10/00875F?text=+) #00875F |
| Gray 100   | ![#FAFAFA](https://via.placeholder.com/10/FAFAFA?text=+) #FAFAFA |
| Gray 200   | ![#BFBFD4](https://via.placeholder.com/10/BFBFD4?text=+) #BFBFD4 |
| Gray 300   | ![#ABABC4](https://via.placeholder.com/10/ABABC4?text=+) #ABABC4 |
| Gray 400   | ![#7F7F98](https://via.placeholder.com/10/7F7F98?text=+) #7F7F98 |
| Gray 500   | ![#3B3B54](https://via.placeholder.com/10/3B3B54?text=+) #3B3B54 |
| Gray 600   | ![#22222F](https://via.placeholder.com/10/22222F?text=+) #22222F |
| Gray 700   | ![#1C1C27](https://via.placeholder.com/10/1C1C27?text=+) #1C1C27 |
| Gray 800   | ![#16161F](https://via.placeholder.com/10/16161F?text=+) #16161F |
| Gray 900   | ![#13131A](https://via.placeholder.com/10/13131A?text=+) #13131A |

## Documentação das Fontes

| Nome   | Tipo           |
| ------ | -------------- |
| Nunito | **Extra Bold** |
| Nunito | **Bold**       |
| Nunito | Regular        |

## Screenshoots

<div align="center">
  <img alt="Screenshot" src="./src/assets/screenshots/screenshot1.png" width="300" height="600">
  <img alt="Screenshot" src="./src/assets/screenshots/screenshot2.png" width="300" height="600">
  <img alt="Screenshot" src="./src/assets/screenshots/screenshot3.png" width="300" height="600">
  <img alt="Screenshot" src="./src/assets/screenshots/screenshot4.png" width="300" height="600">
</div>
