# Clean Blog for Textpattern

Clean Blog is a carefully styled Bootstrap blog theme that is perfect for personal or company blogs. This theme features four HTML pages including a blog index, an about page, a sample post, and a contact page.

[![Clean Blog](https://raw.githubusercontent.com/brahm/clean-blog-textpattern/master/assets/img/clean-blog.jpg)](https://raw.githubusercontent.com/brahm/clean-blog-textpattern/master/assets/img/clean-blog.jpg)
[Live Demo →](http://lab.brahm.com.br/cleanblogtxp/)

## Features:
-   Built to support the  **latest, stable releases**  of all major browsers and platforms.
-   Fully responsive template created with Bootstrap 4.
-   Modern design with a subtle splash of color (which is easy to customize, especially with LESS!).
-   Distraction free blog text optimized for legibility with a menu bar interface that conveniently appears when you scroll up!
- Five pages including a blog index, an single article page, an archive/search page, a contact page and an error page.
- Contact form powered by com_connect.
-   Footer with social links and copyright information.
-   SASS/SCSS files included for deeper customization options.

## Required Environment / Minimum Setup

-   Textpattern 4.7

## Plugins:

-   **[cbs_gravatar](http://textpattern.org/plugins/628/cbs_gravatar)**  - a simple, clean plugin to display [gravatars](http://www.gravatar.com/) in comment forms.
-   **[com_connect](https://github.com/textpattern/com_connect)**  - form mailer plugin for Textpattern CMS.

## Instalation

-	Upload the **cleanblogtxp** folder to the themes folder in the root of your Textpattern install.
-	In the Textpattern, go to Presentention/Themes and on the **Import from disk** drop-down list select **Clean Blog for Textpattern**, then click on Upload.

### Assets

-	Upload the **assets** folder to the root of your Textpattern install.
-   Go to Presentention/Themes and on the first drop-down list, select Clean Blog for Textpattern, then click on Import.

### Plugins

Install and activate with level 5 both cvs_gravatar and com_connect plugins.

### Custom Field

Go to Admin/Preferences/Advanced/Custom Fields and create one called  **Article BG**  to insert the image used as header backgound on your posts.

### Pages

Edit and replace the contents of standard pages  **archive**,  **default**  and  **error_default**  for the content of file with the same name and type. Create  **contact**  and  **single**  pages and paste the content of respective files.

### Sections

Configure the Sections this way:

| Name     | Title    | Page    | Style   | Appears | Syndicate | Search |
|----------|----------|---------|---------|---------|-----------|--------|
| default  | default  | default | default | yes     | yes       | yes    |
| contact  | Contact  | contact | default | no      | no        | yes    |
| articles | Articles | default | default | yes     | yes       | yes    |
| archive  | Archive  | archive | default | no      | no        | no     |
| about    | About    | single  | default | no      | no        | yes    |

## Navigation Menu

The navigation menu has the section list hard coded, so when you create new pages or sections don't forget to update the form  **clear_nav**.

## How to Make a New Single Page

1.  Create a new  **section**  and use the  **single**  page as template.
2.  Create a new  **post**  and use the  **section**  you just create.
3.  Fill in the  **title**, it will be displayed on the article body of this page, and  **summary**  field will be displayed in the page header.
4.  In  **Excerpt markup**  select  **Leave text untouched**.
5. Each page has a beautiful background header, to be simple to change for your own images, the theme will look for a file with a pattern  **section_name-bg.png**.
6.  Upload an image file to the  **assets/img**  folder using this  **section_name-bg.png**  pattern name, it will be the header background of this page.
7.  Publish!

## How to Make a New Post

1.  Create a new  **post**  and use the section  **article**.
2.  Select the categories.
3.  Fill in the  **title**  and  **summary**  fields. Its contents will be displayed in the page header.
4.  In  **Excerpt markup**  select  **Leave text untouched**.
5.  Fill in the custom  **Article BG**  field with image you want to be displayed as header background.
6.  Publish!

## Development Information

This theme wouldn't have been possible without the following open source resources:

-   Textpattern (htto://textpattern.io)
-   Bootstrap ([http://getbootstrap.com/](http://getbootstrap.com/))
-   JQuery ([https://jquery.com/](https://jquery.com/))
-   Gravatar plugin made by Christophe Beyls ([http://textpattern.org/plugins/628/cbs_gravatar](http://textpattern.org/plugins/628/cbs_gravatar))
-   Connect plugin (zem, Mary, Stuart, wet, Tranquillo, aslsw66, jdykast, Ruud, Bloke, and now supported and tested to destruction by the Textpattern community.  [Textpattern](https://github.com/textpattern/com_connect)
-   Font Awesome iconic font set ([https://fortawesome.github.io/Font-Awesome/](https://fortawesome.github.io/Font-Awesome/))

And a special thank you to Michael K Pate ([http://michaelkpate.com/](http://michaelkpate.com/)) for having pointed out many bugs.

## Copyright

[Clean Blog](https://startbootstrap.com/template-overviews/clean-blog/) is a theme that belongs to the [Start Bootstrap](https://startbootstrap.com/), a project created and maintained by [David Miller](http://davidmiller.io/) at [Blackrock Digital](http://blackrockdigital.io/).  
Based on [Bootstrap](https://getbootstrap.com/).

Clean Blog for Textpattern is a port form the original made by [Wagner Brahm](http://wagnerbrahm.com.br).

## License

Licensed under GNU General Public License Version 3 [https://github.com/brahm/clean-blog-textpattern/blob/master/LICENSE](https://github.com/brahm/clean-blog-textpattern/blob/master/LICENSE).