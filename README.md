Clean Blog for Textpattern
==============================================

Clean blog is a carefully styled Bootstrap blog theme that is perfect for personal or company blogs. This theme features five HTML pages including a blog index, an single article page, an archive/search page, a contact page and an error page.

Features:

* Fully responsive
* Modern design with a subtle splash of color (which is easy to customize)
* Distraction free blog text optimized for legibility with a menu bar interface that conveniently appears when you scroll up!
* Contact form powered by Zem Contact Reborn 4.5.
* Footer with social links and copyright information


Required Environment / Minimum Setup
----------------------------------------------

Textpattern 4.5
Plugins cbs_gravatar (http://textpattern.org/plugins/628/cbs_gravatar) and zem_contact_reborn_v4.5.0.0 (https://github.com/Bloke/zem_contact_reborn)


Files
----------------------------------------------

Pages:

* archive.page.txt - articles archive and search page
* contact.page.txt - contact form page
* default.page.txt - home and articles page
* error_default.page.txt - error page
* single.page.txt - for non articles page like about or author profile

Default forms:

* archive_list.form.article.txt - articles archive list code block
* article_list.form.article.txt - articles list code block
* comments_display.form.article.txt - comments list code block
* comments_form.form.comment.txt - comment form code block
* comments.form.comment.txt - single comment code block
* default.form.article.txt - basic article code block
* search_results.form.article.txt - search results code block
* single.form.article.txt - non article basic code block

Custom forms:

* clear_footer.form.misc.txt - page footer code block
* clear_head.form.misc.txt - page head (includes) code block
* clear_js.form.misc.txt - javascripts code block
* clear_nav.form.misc.txt - main mavigation menu code block
* clear_single_subtitle.form.misc.txt - "kludge" solution to give a subtitle to non article pages code block

Plugins:

* cbs_gravatar_v0.3.txt - used to display gravatars in comments
* zem_contact_reborn_v4.5.0.0 - used in the contact page


Instalation
----------------------------------------------

Plugins

Install and activate with level 5 both cvs_gravatar and zen_contact_reborn plugins.

Pages

Edit and replace the contents of standard pages "archive", "default" and "error_default" for the content of file with the same name and type. Create de page "single" and put the content of the file with the same name.

| Page          | File                   |
|---------------|------------------------|
| archive       | archive.page.txt       |
| contact       | contact.page.txt       |
| default       | default.page.txt       |
| error_default | error_default.page.txt |
| single        | single.page.txt        |

Forms

Edit and replace the contents of standard forms for the content of file with the same name and type. If some file has no form prebuild in your Textpattern installation, create and do the same as before.

| Form Name             | Type    | File                                |
|-----------------------|---------|-------------------------------------|
| archive_list          | article | archive_list.form.article.txt       |
| article_list          | article | article_list.form.article.txt       |
| comments_display      | article | comments_display.form.article.txt   |
| comments_form         | comment | comments_form.form.comment.txt      |
| comments              | comment | comments.form.comment.txt           |
| default               | article | default.form.comment.txt            |
| search_results        | article | search_results.form.comment.txt     |
| single                | article | single.form.comment.txt             |
| clear_footer          | misc    | clear_footer.form.misc.txt          |
| clear_head            | misc    | clear_head.form.misc.txt            |
| clear_js              | misc    | clear_js.form.misc.txt              |
| clear_nav             | misc    | clear_nav.form.misc.txt             |
| clear_single_subtitle | misc    | clear_single_subtitle.form.misc.txt |

Sections

Configure the Sections this way:

| Name     | Title    | Page    | Style   |
|----------|----------|---------|---------|
| default  | default  | default | default |
| contact  | Contact  | contact | default |
| articles | Articles | default | default |
| archive  | Archive  | archive | default |
| about    | About    | single  | default |


About The "clear_single_subtitle" Form
----------------------------------------------

To any page/section you create using the theme "single page", if you want a subtitle on it you'll need to copy the single page with a different name, create a clear_single_subtitle changing the "subtitie" part for the name of this new section and made the correction on the copied page. I know, its ugly.

Images

Each page has a beautiful backgound header, to be simple to change for your own images, the theme will look for a file with a pattern "section_name-bg.png".


How to Make a New Post
----------------------------------------------

1. Fill in the title and summary fields. Its contents will be displayed in the page header.
2. Fill in the Article Image field with image you want to be displayed as header background.
3. Publish!


Known Issues
----------------------------------------------

* The Zem Contact Reborn plugin is still in development, it may be that error messages do not appear correctly on the form, so either you wait out the final version, or edit the PHP code and replace all texts.


Development Information
----------------------------------------------

This theme wouldn't have been possible without the following open source resources:

* Textpattern
* Bootstrap
* Jquery
* Clean Blog Bootstrap template from Start Bootstrap
* Gravatar plugin made by Christophe Beyls (http://textpattern.org/plugins/628/cbs_gravatar)
* Zem Contact Reborn plugin currently maintained by Bloke (Stef Dawson) (https://github.com/Bloke/zem_contact_reborn)
* Font Awesome iconic font set
