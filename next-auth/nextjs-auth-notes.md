# Authentication

in the database: in mongdDB

user item:

```
_id: ObjectId('12345lkajahdkls')
email: "email adress"
password: "password123" --> this is a HASH!!
__v: 0
```

## Symmetric Cryptopgraphy

we use for application

... in the internet we use:

## Asymmetric Cryptopgraphy

(or Public Key Cryptopgraphy)

### example with alice & bob

1. Alice has a private & public key
2. Bob wants to send Alice a document
3. He looks for Alice public key
4. He uses the public key and sends it together with the document
5. Alice can only open Bob's document with her private key
6. Alice's private and public key are connected and check on each other

## Hashing

```dotnetcli
<any digital input> -> "randomcharactersforthehash"
```

- cant be copied, because it can only be used once

### example with alice & bob

--- need to change this below ----
_1. Bob sends Document to Alice 2. He hashes the document with the hash "randomcharactersforthehash" 3. then sends it to _

---

## bcrypt

1. use brypt package
   `npm bcrypt`

rainbow table

1.  a list of common passwords with their "hashes"
2.  password123 -> "öalskdfjsöldkfjölkj"
3.  then hackers can access password secured accounts

4.  create hash.js file

```js
const bcrypt = requeire("becrypt");
const password = "1234";
const salt = brypt.genSaltSync();
console.log(salt);
// logs: 'lasödkfjasöldkfjasd'
const hash = bcrypt.hashSync(password, salt);
console.log(hash);
// logs: 'password.salt'
// logs: 'öalskdföalskfjdöklasfj.lasödkfjasöldkfjasd'
```

## process SIGNUP

1. client signs up creates pw
2. sends hashed PW to backend
3. backend has now a new entry

## process LOGIN

1. client enters email address
2. check email -> find user with this email address
3. if it exists -> yes
4. email is authenticated
5. **user is authenticated**
6. client enters password
7. sends hashed PW to backend
8. **client is authorized**

#### difference Authentication vs Authorization

authentication === if a user is authentically the user
authorization === user is allowed to do the action (creation, change, delete, ...)

## save LOGIN process

need a useState() for the session
-> checks whether user is logged in or not
-> server-side session
-> there is also a "browser-session"

#### with cookies

- if user logins in with email and pw it sends along a cookie
- cookie is piece of data which saves the user info
- if user visits the website again, the cookie will check whether the info of the revisiting user matches any userinfo of the saved cookies.

#### JWT

- you dont store the cookie info on the browser, you always send the information back and forth between the client and backend and it checks for matches

## MIDDLEWARE

between client and backend there is middleware to optimize the saving of login data for revisiting user so they dont have to login again.

# implement AUTH in NextJS

https://next-auth.js.org

### Provider - what are they

-> eg GitHub, Google, ...

- if i use a provider like github
- auth data is saved on github database, not my database
- the browser saves the users data, so if user already was logged in with github in the browser, then the login will go even faster

##### "EMAIL"

-> login with link send via email
-> double authenticataion

## Implementation of NextAuthJS

1. setup provider
2. connect my application with the selected provider
3. example GitHub
   1. go to developer settings
      1. go to OAUTH settings
      2. create a new one
      3. we have 2 credentials
         1. client ID
         2. client secret
         3. copy directly the secret! otherwise its gone after a couple seconds
         4. need to paste into the .env file
      4. adding HOMEPAGE URL -> replace with deployed address
      5. authorization callback url
         1. address of deployed website.com **/api/auth**
   2. in project:
      1. add "auth" folder in /pages/api/auth
      2. create [nextauth].js
      3. choose with adapter -> in this mongoDB
   3. in nextauth js file:

```js
export const authOptions = {
  // add selected provider
  providers: [GitHubProvider],
  // add adapter -> mongoDB
  adapter: [mongoDB],
};
export default NextAuth(authOptions);
```

#### check for session status:

in component file:

```js
const { data: session } = useSession();
```

if(user === useSession(loggedIn)) {send user to webpage}
