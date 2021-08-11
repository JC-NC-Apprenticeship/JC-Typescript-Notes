# creating a greenfield TS project

1) Create folders
    a) dist - this is to hold your compiled .js files
    b) src - this will hold your ts files and your testing folder.
        i) test - create this folder to add testing (TDD)

2) Create files
    a) .gitignore - main branch
        *** Remeber to add "dist" and "node_modules" to a this file ***
    b) index.html - main branch
    c) index.ts - in src branch

3) package.json
    npm init -y

4) tsconfig.json
    tsc --init

    a) Update 'outDir' to "./dist"
    b) "allowJs": true
    c) "checkJs": true
    d) start like this but should look to move to true:
        "strict": false,
        "noImplicitAny": false
    e) types []

    d) add this to the bottom: ,"include": ["src"],

---- Testing installation ----

5) Install mocha and chai
    npm i -D mocha chai sinon
    npm install @types/mocha --save-dev
    npm install @types/chai --save-dev
    npm install -D @types/node

6) Install:
    npm install -D typescript
    npm install -D ts-mocha

-- -- To run a test -- --
npm run test
