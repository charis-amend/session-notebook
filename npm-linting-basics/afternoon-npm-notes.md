# THE PROCESS OF NPM

### starting with new npm

1. starting a new npm
   1. npm init
   2. then add all these things in the terminal in vs code
   3. adding package name (project name)
   4. description
   5. main
   6. scripts (eg. running a test)
   7. author
   8. license

### installing someones npm to your project

2. go to package.json file of the project
3. check that we are on the same version as the person we are coding with!
4. run this to install

   ```console
   npm install name of the package
   ```

   1. "dependencies": {"name of the package"}
   2. check this for same version 2. eslint: version as a string 3. htmlhint: version as a string 4. prettier: version as a string

##### putting our information for starting to work on someones project here:

5. "devDependencies": {

   1. eslint: version as a string
   2. htmlhint: version as a string
   3. prettier: version as a string}

6. dont touch the node_modules!!!!

7. check index.html for a-tag
   1. includes data-js=""
   2. class=""
   3. href=""

## IMPORTANT

> ⚠️ -- check creation year of the npm package on website!!
>
> ---
>
> ⚠️ -- npm run prettier:check name of the file
>
> this corrects the file and makes it prettier

## UNINSTALL NPM

run npm uninstall 'name of the package'

```console
npm uninstall name of the package
```
