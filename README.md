# Modular HTML &amp; CSS Workshop

* [Presentation Slides](https://speakerdeck.com/shayhowe/modular-html-and-css-workshop)
* [Turbo Presentation Slides](https://speakerdeck.com/shayhowe/modular-html-and-css-turbo-workshop)
* [Workshop Files](https://github.com/shayhowe/modular-html-css-workshop/archive/master.zip)

All too often writing HTML and CSS is an afterthought. Its the work that happens after design is finalized and the product has been developed. Its a necessary task in the process to building a website. Wrong.

HTML and CSS are the backbone to every website, and are equally as important as any design or development. At the end of the workshop and after spending time writing some of code attendees will be able to better organize their code, develop modular styles, and work with CSS specificity.

## Totally Awesome Corp.

### #1 - Media

**Step 1**

* Place two different feeds in to primary and secondary columns
* Float all profile images to the left and content to the right

**Step 2**

* Visually offset the primary column
* Visually offset one unique item inside the secondary column

**Step 3**

* Add borders around each item inside the primary column
* Reduce the width of the images within the secondary column

**Step 4**

* Add counts to a few items inside the primary column
* Change the "Posted&hellip;" text next to each name to be more subtle

**Step 5**

* Reverse the position of profile images and content within the primary column, placing the images on the right and content on the left
* Leave any nested items within the primary column inversed, with profile images on the left and content on the right
* Reverse the position of profile images and content within any offset items in the secondary column, placing the images on the left and content on the right

### #2 - Buttons

**Step 1**

* Add `View more`, `Start a new discussion`, and `Remove` buttons
  * Do not forget to account for different styles, sizes, and element types as outlined in the following steps

**Step 2**

* Compose 5 different button styles, including:
 * `Default`, `Success`, `Warning`, `Danger`, `Boring`

**Step 3**

* Compose 4 different buttons sizes, including:
  * `Default`, `Large`, `Small`, `Mini`

**Step 4**

* Ensure the button styles that can be applied to any element, specifically including:
  * `a`, `button`, `input`, `span`, `div`

### #3 - Navigation

**Step 1**

* Create a horizontal tab style navigation using an unordered list across the top of the primary column
  * Include links for `Discussions`, `To-dos`, and `Files`

**Step 2**

* Create a horizontal pill style navigation using an unordered list across the top of the secondary column
  * Include links for `Today`, `Yesterday`, and `This Week`

**Step 3**

* Create two new classes, `nav-tabs-stacked` and `nav-pills-stacked`, that transform the horizontal list tab and pill style navigations into stacked vertical lists

### Final Product

![Workshop Totally Awesome Corp Product Screenshot](_screenshots/totally-awesome-corp.png)

## Boombox

### Assembling Layout

**Step 1**

* Within the playlist, position the album artwork to the left of the song title and artist name
* Keep the album artwork vertically centered with the song title and artist name

**HTML**
```
<li class="playlist-song flag">
  <figure class="flag-object">
    <img src="assets/img/#.jpg" alt="Artist Name">
  </figure>
  <div class="flag-body">
    <h3 class="h-subheadline h-bold">Song Title</h3>
    <h4 class="artist h-byline">Artist Name</h4>
  </div>
</li>
```

**CSS**
```
/* Flag object
================================== */

.flag {
  display: table;
  width: 100%;
}
.flag-object,
.flag-body {
  display: table-cell;
  vertical-align: middle;
}
.flag-object img {
  display: block;
}
.flag-body {
  width: 100%;
}

/* Playlist
================================== */

.playlist-song .flag-object {
  padding: 0 20px;
}
.playlist-song .flag-object img {
  border-radius: 5px;
  height: 66px;
}
.playlist-song .flag-body {
  padding-right: 20px;
}
```

**Step 2**

* Reusing styles from positioning the album artwork, add a `Currently loading…` section at the top of the file to displayed before the playlist loads

**HTML**
```
<div class="loading flag">
  <figure class="flag-object">
    <img src="assets/img/loading.gif" alt="Currently loading...">
  </figure>
  <div class="flag-body">
    <h3>Currently loading&#8230;</h3>
  </div>
</div>
```

**CSS**
```
/* Loading
================================== */

.loading {
  color: #95959a;
  margin: 0 auto;
  padding: 66px;
  width: 292px;
}
.loading .flag-object {
  padding-right: 10px;
}
.loading .flag-object img {
  height: 22px;
}
```

### Accommodating Content

**Step 1**

* Add `previous`, `play`, and `next` controls within the player
* Make the `previous` and `next` controls slightly smaller than the `play` control
* Keep all controls vertically centered

**HTML**
```
<header class="player cover-art controls-container">
  <menu class="controls">
    <li>
      <a class="control-prev ir" href="#">Previous</a>
    </li>
    <li>
      <a class="control-play ir" href="#">Play/Pause</a>
    </li>
    <li>
      <a class="control-next ir" href="#">Next</a>
    </li>
  </menu>
</header>
```

**CSS**
```
/* Controls
================================== */

.controls-container {
  position: relative;
}
.controls {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
  bottom: 0;
  margin: 0;
  padding: 44px 20px 22px 20px;
  position: absolute;
  text-align: center;
  width: 100%;
}
.controls li {
  display: inline-block;
  vertical-align: middle;
}
.controls a {
  background-image: url("../img/controls.png");
  background-image: url(“../img/controls.svg");
  border: 2px solid #fff;
  border-radius: 50%;
  display: block;
  height: 38px;
  margin: 0 8px;
  width: 38px;
}
.controls a:hover {
  background-color: rgba(0, 0, 0, .5);
}
.controls .control-play {
  height: 44px;
  width: 44px;
}
```

**Step 2**

* Add `favorite` and `share` controls within each song in the playlist
* Reuse as many styles from the player controls as possible

**HTML**
```
<menu class="controls player-controls">
  ...
</menu>

...

<div class="flag-body controls-container">
  <h3 class="h-subheadline h-bold">Song Title</h3>
  <h4 class="artist h-byline">Artist Name</h4>
  <menu class="controls playlist-controls">
    <li>
      <a class="control-fav ir" href="#">Favorite</a>
    </li>
    <li>
      <a class="control-share ir" href="#">Share</a>
    </li>
  </menu>
</div>
```

**CSS**
```
/* Controls
======================================================= */

.controls-container {
  position: relative;
}
.controls {
  margin: 0;
  position: absolute;
  text-align: center;
}
.controls li {
  display: inline-block;
  vertical-align: middle;
}
.controls a {
  background-image: url("../img/controls.png");
  background-image: url("../img/controls.svg");
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  display: block;
}

/* Player
======================================================= */

.player-controls {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
  bottom: 0;
  padding: 44px 20px 22px 20px;
  width: 100%;
}
.player-controls a {
  border-color: #fff;
  height: 38px;
  margin: 0 8px;
  width: 38px;
}
.player-controls a:hover {
  background-color: rgba(0, 0, 0, .5);
}
.player-controls .control-play {
  height: 44px;
  width: 44px;
}

/* Playlist
======================================================= */

.playlist-controls {
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 35px);
  height: 100%;
  padding: 0 20px 0 40px;
  right: 0;
  top: 0;
}
.playlist-controls li {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.playlist-controls a {
  border-color: #bfbfbf;
  height: 32px;
  width: 32px;
}
.playlist-controls a:hover {
  border-color: #7c7c87;
}
```

**Step 3**

* Animate the player controls to appear from the bottom upon hovering over the player
* Animate the song controls to appear from the right upon hovering over a song
* Add hardware acceleration to each of the animations

**HTML**
```
<menu class="controls player-controls boost">
  ...
</menu>
<menu class="controls playlist-controls boost">
  ...
</menu>
```

**CSS**
```
/* Controls
================================== */

.controls-container {
  overflow: hidden;
  position: relative;
}
.controls {
  margin: 0;
  position: absolute;
  text-align: center;
  transition: all .2s ease-in-out;
}

/* Player
================================== */

.player-controls {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
  bottom: 0;
  padding: 44px 20px 22px 20px;
  transform: translateY(100%);
  width: 100%;
}
.player:hover .player-controls {
  transform: translateY(0);
}

/* Playlist (below now playing)
================================== */

.playlist-controls {
  background: linear-gradient(to right, rgba(255, 255, 255, 0), fff 35px);
  height: 100%;
  padding: 0 20px 0 40px;
  right: 0;
  top: 0;
  transform: translateX(100%);
}
.playlist-song:hover .playlist-controls {
  transform: translateX(0);
}
```

### Final Product

![Workshop Boombox Product Screenshot](_screenshots/boombox.png)

# Turbo (Advanced)

Pure HTML and CSS allow us to be modular however CSS preprocessors greatly boost our capabilities, providing even more resources for better flexibility, organization, and performance. Using [SCSS](http://sass-lang.com/) let&#8217;s take another look at our example, refactoring it to be even more modular.

## Totally Awesome Corp.

### #1 - Setup

**Step 1**

* Inside the `assets` folder create a new folder named `scss`
  * Move the `workshop.css` file into this new folder
* Download and install the [Scout App](http://mhs.github.io/scout-app/)
* Create a new project in Scout using the current set of files
  * Set `scss` as the input folder and `css` as the output folder
* Change the file extension of the `workshop.css` file to `workshop.css.scss`

### #2 - Organization

**Step 1**

* Inside the `scss` folder create folders for `base`, `components`, and `settings`
* Break apart `workshop.css.scss` appropriately into partials across these new folders
  * Partials must begin with an underscore, `_`, and have a file extension of `.scss`, not `.css.scss`
* Use the `workshop.css.scss` file to import Compass and all of the partials

### #3 - Settings

**Step 1**

* Create a `_variables.scss` file in the `settings` folder and add any appropriate variables
  * Include variables for  `Layout`, `Colors`, `Typography` and so forth

**Step 2**

* Develop any additional extends based of the necessary variables

### #4 - Refactor

**Step 1**

* Refactor the `base` partials using the appropriate variables and extends, including:
  * `_layout.scss` and `_typography.scss`
  * Add any additional variables, extends, or mixins as seen necessary

**Step 2**

* Refactor the `components` partials using the appropriate variables and extends, including:
  * `_buttons.scss`, `_lists.scss`, `_media.scss`, and `_nav.scss`
  * Add any additional variables, extends, or mixins as seen necessary

### #5 - Compile

**Step 1**

* Configure Scout App to compile the styles in a `Production` environment and `Compressed` output before any deploys