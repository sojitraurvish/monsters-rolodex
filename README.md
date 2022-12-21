npm i typescript
tsc index.tsc | ts

tsc init -y(default option if you want to go with default options)// create tsconfig.json file

"target":"es2016"
"rootDir":"./"
"outDir":"./dist"

tsc -w //like node mon it keep running and compilaing typescript code to javascript

React

https://create-react-app.dev/docs/adding-typescript/
in order to add typescript in to react

and tsconfig file if (you added typescript after)
{
"compilerOptions": {
"target": "es5",
"lib": ["dom", "dom.iterable", "esnext"],
"allowJs": true,
"skipLibCheck": true,
"esModuleInterop": true,
"allowSyntheticDefaultImports": true,
"strict": true,
"forceConsistentCasingInFileNames": true,
"noFallthroughCasesInSwitch": true,
"module": "esnext",
"moduleResolution": "node",
"resolveJsonModule": true,
"isolatedModules": true,
"noEmit": true,
"jsx": "react-jsx"
},
"include": ["src"]
}
