# JollyGoodGame-BBC 2.0

This is an extension of [JollyGoodGame](https://github.com/jollywise/jollygoodgame) with components overwritten to acocomodate BBC requirements.  
Most notably - this come equipped with the hud component installed as it follows standard bbc layouts.

---

### Installing

---

This is intended to remove as much boilerplate setup as possible for you, and provide a base structure to start with.  
Once setup, feel free to edit as required for your game.

**package.json**

Setting up a basic app from scratch is a simple as creating an empty folder and adding a package.json with the following contents.

<pre>
{
  "name": "project_name",
  "scripts": {
    "postinstall": "jgg createproject"
  },
  "dependencies": {
    "@jollywise/jollygoodgame": "git://github.com/jollywise/jollygoodgame.git#2-0",
    "@jollywise/jollygoodgame-bbc": "git://github.com/jollywise/jollygoodgame-bbc.git#2-0"
  }
}
</pre>

**install**

With the above package.json created, open the terminal in the same folder and run

<pre>npm install</pre>

This process will

- Install the jollygoodgame base
- Update the package.json with all required dependecies
- Install packages added to package.json
- Install a game skeleton that can be launched and is ready to be edited

**watch**

One complete, you can run the watch command, and should see a welcome message.

<pre>npm run watch</pre>

**Files**

After installing the package your folder structure should look like below

- package.json
- package-lock.json
- package-fragment.json
- .prettierignore
- .editorconfig
- src
  - assets
  - scss
    - main.scss
    - reset.scss
  - js
    - main.js
    - App.js
    - game
      - constants
        - Constants.js
        - AppFonts.js
        - SceneConstants.js
      * display/ui/loading
        - LoadDisplay.js
      * model
        - PlayerModel.js
      * scenes
        - Boot.js
        - Load.js
        - Welcome.js
