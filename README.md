# react-native-typescript-scaffold

Built on react navigation and optimised for iPhone X series' notch

```sh
npm i --no-save
react-native run-ios
react-native run-ios --simulator='iPhone 8'
```

## NOTICE

if you have installed Xcode 11 Beta, you may get an error says

`error Could not find iPhone X simulator. Run CLI with --verbose flag for more details.`

which may be due to this issue https://github.com/react-native-community/cli/pull/414

you could fix this bug by add `simulator.isAvailable !== true` in `node_modules/@react-native-community/cli/build/commands/runIOS/findMatchingSimulator.js`
