Clean Blog for Textpattern
==============================================

Clean blog is a carefully styled Bootstrap blog theme that is perfect for personal or company blogs. This theme features five HTML pages including a blog index, an single article page, an archive/search page, a contact page and an error page.

![Clean Blog](https://raw.githubusercontent.com/brahm/clean-blog-textpattern/master/assets/img/clean-blog.jpg)

###[View Live Demo &rarr;](http://lab.brahm.com.br/cleanblogtxp/)

##### Features:

* Fully responsive
* Modern design with a subtle splash of color (which is easy to customize)
* Distraction free blog text optimized for legibility with a menu bar interface that conveniently appears when you scroll up!
* Contact form powered by Zem Contact Reborn 4.5
* Footer with social links and copyright information


Required Environment / Minimum Setup
----------------------------------------------

* Textpattern 4.5
* Plugins cbs_gravatar (http://textpattern.org/plugins/628/cbs_gravatar) and zem_contact_reborn_v4.5.0.0 (https://github.com/Bloke/zem_contact_reborn)


Files
----------------------------------------------

##### Pages:

* **archive.page.txt** - articles archive and search page
* **contact.page.txt** - contact form page
* **default.page.txt** - home and articles page
* **error_default.page.txt** - error page
* **single.page.txt** - for non articles page like about or author profile

##### Default forms:

* **archive_list.form.article.txt** - articles archive list code block
* **article_list.form.article.txt** - articles list code block
* **comments_display.form.article.txt** - comments list code block
* **comments_form.form.comment.txt** - comment form code block
* **comments.form.comment.txt** - single comment code block
* **default.form.article.txt** - basic article code block
* **search_results.form.article.txt** - search results code block
* **single.form.article.txt** - non article basic code block

##### Custom forms:

* **clean_footer.form.misc.txt** - page footer code block
* **clean_head.form.misc.txt** - page head (includes) code block
* **clean_js.form.misc.txt** - javascripts code block
* **clean_nav.form.misc.txt** - main mavigation menu code block
* **clean_single_subtitle.form.misc.txt** - "kludge" solution to give a subtitle to non article pages code block

##### Plugins:

* **cbs_gravatar** - used to display gravatars in comments
* **zem_contact_reborn** - used in the contact page


Instalation
----------------------------------------------

##### Assets

Upload the assets folder to your site/blog root.

##### Plugins

Install and activate with level 5 both cvs_gravatar and zen_contact_reborn plugins.

##### Custom Field

Go to Admin/Preferences/Advanced/Custom fields and create a custom field called **Article BG** to insert the image used as header backgound on your posts.

##### Pages

Edit and replace the contents of standard pages **archive**, **default** and **error_default** for the content of file with the same name and type. Create **contact** and **single** pages and paste the content of respective files.

| Page          | File                   |
|---------------|------------------------|
| archive       | archive.page.txt       |
| contact       | contact.page.txt       |
| default       | default.page.txt       |
| error_default | error_default.page.txt |
| single        | single.page.txt        |

##### Forms

Edit and replace the contents of **comments_display**, **default**, **search_results**, **comments_form** and **comments** standard forms for the content of respective files. Create **clean_archive_list**, **clean_article_list**, **clean_single**, **clean_footer**, **clean_head**, **clean_js** and **clean_nav** using the types and contents of the files listed in the table below.

| Form Name             | Type    | File                                |
|-----------------------|---------|-------------------------------------|
| clean_archive_list    | article | archive_list.form.article.txt       |
| clean_article_list    | article | article_list.form.article.txt       |
| comments_display      | article | comments_display.form.article.txt   |
| default               | article | default.form.comment.txt            |
| search_results        | article | search_results.form.comment.txt     |
| clean_single          | article | single.form.comment.txt             |
| clean_footer          | misc    | clean_footer.form.misc.txt          |
| clean_head            | misc    | clean_head.form.misc.txt            |
| clean_js              | misc    | clean_js.form.misc.txt              |
| clean_nav             | misc    | clear_nav.form.misc.txt             |
| comments_form         | comment | comments_form.form.comment.txt      |
| comments              | comment | comments.form.comment.txt           |


##### Sections

Configure the Sections this way:

| Name     | Title    | Page    | Style   | Appears | Syndicate | Search |
|----------|----------|---------|---------|---------|-----------|--------|
| default  | default  | default | default | yes     | yes       | yes    |
| contact  | Contact  | contact | default | no      | no        | yes    |
| articles | Articles | default | default | yes     | yes       | yes    |
| archive  | Archive  | archive | default | no      | no        | no     |
| about    | About    | single  | default | no      | no        | yes    |

Navigation Menu
----------------------------------------------
The navigation menu has the section list hard coded, so when you create new pages or sections don't forget to update the form **clear_nav**.


Header Images On Single Pages
----------------------------------------------
Each page has a beautiful background header, to be simple to change for your own images, the theme will look for a file with a pattern **section_name-bg.png**.


How to Make a New Single Page
----------------------------------------------

1. Create a new **section** and use the **single** page as template.
2. Create a new **post** and use the **section** you just create.
3. Fill in the **title**, it will be displayed on the article body of this page, and **summary** field will be displayed in the page header.
4. In **Excerpt markup** select **Leave text untouched**.
5. Upload an image file to the **assets/img** folder using this **section_name-bg.png** pattern name, it will be the header background of this page.
6. Publish!

Select the section you want.

How to Make a New Post
----------------------------------------------

1. Create a new **post** and use the section **article**.
2. Select the categories.
3. Fill in the **title** and **summary** fields. Its contents will be displayed in the page header.
4. In **Excerpt markup** select **Leave text untouched**.
5. Fill in the custom **Article BG** field with image you want to be displayed as header background.
6. Publish!

Known Issues
----------------------------------------------

* The **Zem Contact Reborn** plugin is still in development, it may be that error messages do not appear correctly on the form, so either you wait out the final version, or edit the PHP code and replace all texts.


Development Information
----------------------------------------------

This theme wouldn't have been possible without the following open source resources:

* Textpattern (htto://textpattern.io)
* Bootstrap (http://getbootstrap.com/)
* JQuery (https://jquery.com/)
* Clean Blog Bootstrap template from Start Bootstrap (http://startbootstrap.com/template-overviews/clean-blog/)
* Gravatar plugin made by Christophe Beyls (http://textpattern.org/plugins/628/cbs_gravatar)
* Zem Contact Reborn plugin currently maintained by Bloke (Stef Dawson) (https://github.com/Bloke/zem_contact_reborn)
* Font Awesome iconic font set (https://fortawesome.github.io/Font-Awesome/)

License
----------------------------------------------
Licensed under GNU General Public License Version 3 (https://github.com/brahm/clean-blog-textpattern/blob/master/LICENSE)
