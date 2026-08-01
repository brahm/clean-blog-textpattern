# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Textpattern CMS **4.9** theme (verified against 4.9.1) — a port of Start Bootstrap's "Clean Blog", targeting **Bootstrap 5.3**. It is **not** an application: there is no build system, no package manager, no test suite, and nothing to compile or run locally. The deliverable is two directory trees that get copied into a Textpattern installation.

The templates depend on Bootstrap 5 specifics (`data-bs-*` attributes, logical-property utilities like `ms-auto`/`float-start`, and `--bs-btn-*` custom properties) and will not render correctly against Bootstrap 4.

## Repository layout: two independent deliverables

| Tree | Goes to | How it is installed |
|------|---------|---------------------|
| `cleanblogtxp/` | `themes/` folder of the Textpattern install | Presentation → Themes → *Import from disk* → select "Clean Blog for Textpattern" → Upload, then Import |
| `assets/` | web root of the Textpattern install | plain file upload |

`plugins/` holds the two required plugin installers (`cbs_gravatar`, `com_connect` — install and activate both at level 5). They are third-party payloads: don't edit them, swap in a newer upstream release instead. The `.txt` files are base64 of either a gzipped or a plain PHP-serialised array; decode one to read the PHP it installs and to check which tags and attributes it provides.

`com_connect` must be **v4.9.0 or newer** on Textpattern 4.9. Older releases call `encode_mailheader()` and `strip_rn()`, which core dropped in 4.9, so submitting the contact form raises a fatal undefined-function error. Note that com_connect validates attributes itself: a tag's own `$defaults`/`lAtts` list plus the shared `$com_connect_globals` (which is where `id` comes from) plus anything starting with `on`. Anything else is silently dropped and warns when `production_status` is not `live`.

The theme tree only contains templates. **Every stylesheet, script, image, and font lives in `assets/` and is referenced from templates as `<txp:site_url />assets/...`** — `cleanblogtxp/styles/default.css` is deliberately empty, so never move CSS into it.

## Template system

Templates are Textpattern tag markup (`<txp:... />`) in `.txp` files. Textpattern maps the directory structure to its admin objects:

- `cleanblogtxp/pages/<name>.txp` → a Page, assigned to a Section
- `cleanblogtxp/forms/<type>/<name>.txp` → a Form of that type (`article`, `comment`, `misc`, `file`, `link`); the filename is the form name used in `form="..."`
- `cleanblogtxp/manifest.json` → theme metadata (bump `version` here when releasing)

There is no way to preview or lint these files outside a running Textpattern install. Verifying a change means importing the theme and loading the site.

What *can* be checked offline is whether the txp tags and attributes still exist. Unpack the matching Textpattern source and read `textpattern/publish/taghandlers.php`: the `Txp::get('\Textpattern\Tag\Registry')->register(...)` block at the top is the authoritative list of tag names, and each handler's `lAtts(array(...))` block is its accepted attribute list. Deprecations show up two ways — `array('$deprecate' => true)` in a registry entry (whole tag), and an explicit `trigger_error(gTxt('deprecated_attribute'), ...)` inside a handler (individual attributes, as in `comments_form`). Note that a deprecated attribute still appears in `lAtts`, so an "is it accepted?" check will not flag it; grep for `deprecat` separately.

### Shared page skeleton

All five pages (`default`, `single`, `archive`, `contact`, `error_default`) repeat the same structure by hand:

```
<txp:output_form form="clean_head" />   <!-- <head>: meta, canonical, CSS links -->
<body id="...-page">                    <!-- id derived from section / search state -->
<txp:output_form form="clean_nav" />
<header class="masthead" style="background-image: ...">
  ... container / row / col-lg-8 col-md-10 mx-auto ...
<txp:output_form form="clean_footer" />
<txp:output_form form="clean_js" />
```

The `misc` forms are the only shared chrome. Changing markup that appears on every page (head tags, nav, footer, script tags) means editing one `misc` form; changing anything else means repeating the edit across all five pages.

`default.txp` is the busiest file: it branches on `if_search` → `if_individual_article` to serve the search results page, the single-article view, and the article-list index from one page template.

### Conventions the templates depend on

- **Header background images** are resolved by convention, not configuration:
  - `single.txp` / `archive.txp` / `contact.txp` build the URL from the section name: `assets/img/<section>-bg.jpg`. Adding a section means adding a matching image file.
  - Individual articles use the `Article BG` custom field, falling back to `assets/img/home-bg.jpg`.
- **Custom fields** used by templates (create them under Admin → Preferences → Advanced → Custom Fields): `Article BG` (article header background) and `Post_Description` (meta description, read in `clean_head`).
- **The navigation menu is hard-coded** in `forms/misc/clean_nav.txp` (`about`, `archive`, `contact`). New sections must be added there manually.
- **The contact recipient is hard-coded** in `pages/contact.txp` as `<txp:com_connect to="wagner@brahm.com.br" ...>`. Change it for any real deployment.
- **The footer** (`forms/misc/clean_footer.txp`) has placeholder social links (`href="#"`) and a hard-coded copyright year.
- The archive page pulls from `section="articles"` explicitly (`article_custom`), so posts intended for the archive must live in that section.

### Expected section configuration

The theme assumes these sections exist:

| Name | Page | Appears | Syndicate | Search |
|------|------|---------|-----------|--------|
| default | default | yes | yes | yes |
| contact | contact | no | no | yes |
| articles | default | yes | yes | yes |
| archive | archive | no | no | no |
| about | single | no | no | yes |

Any section using the `single` page renders one article: `title` → article body heading, `excerpt` → page header subtitle (set *Excerpt markup* to "Leave text untouched").

## Editing CSS and JS

`assets/css/clean-blog.css` and `assets/js/clean-blog.js` are hand-maintained alongside committed `.min` versions, with **no minification pipeline in the repo**. The templates load only the minified files (`clean-blog.min.css`, `clean-blog.min.js`), so an edit to the unminified source has no effect until the `.min` file is updated too. Always change both.

`assets/vendor/` (Bootstrap, jQuery, Font Awesome 5) is vendored third-party code — replace wholesale on upgrade, never patch in place.

The theme's own styling hooks into Bootstrap 5 through custom properties rather than by out-specifying it: `.btn-primary` sets `--bs-btn-bg`, `--bs-btn-hover-bg` and friends instead of overriding `background-color` with `!important`. Keep that pattern when restyling components — it survives Bootstrap's own specificity.

## Known dead weight and inconsistencies

Worth knowing before "fixing" something that looks broken:

- `assets/js/` still contains Bootstrap 3-era leftovers that no template loads: `bootstrap.min.js`, `jquery-1.12.3.min.js`, `contact_me.js`, `jqBootstrapValidation.js` (and their `.min` twins). Likewise `assets/fonts/` (Glyphicons) is unreferenced.
- `assets/vendor/jquery/` is also unreferenced now — Bootstrap 5 dropped the dependency and `clean-blog.js` was rewritten in plain JS, so `clean_js.txp` no longer loads jQuery. The files are kept only in case site-specific code still expects them.
- `contact.txp` still carries `data-validation-required-message` attributes aimed at jqBootstrapValidation, which is not loaded. The fields rely on the native `required` attribute instead; the empty `<p class="form-text text-danger">` placeholders are never populated.
- Two long-standing typos in `clean-blog.css` are left as-is deliberately, because "fixing" them would activate dormant rules and change the rendering: `.floating-label-form-group::not(:first-child)` (should be a single colon — the whole rule is currently ignored) and `font-color: gray` in `.comment-metadata` (not a real property).
- The README advertises "SASS/SCSS files included"; the only Sass in the repo belongs to vendored Font Awesome. There are no theme Sass sources.
