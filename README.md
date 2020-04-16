# Froala WYSIWYG Editor Plugin for CakePHP 3

[![Packagist](https://img.shields.io/packagist/v/froala/wysiwyg-cake.svg)](https://packagist.org/packages/froala/wysiwyg-cake)
[![Packagist](https://img.shields.io/packagist/dt/froala/wysiwyg-cake.svg)](https://packagist.org/packages/froala/wysiwyg-cake)

> CakePHP Plugin for Froala Javascript WYSIWYG Text Editor. For CakePHP >=3.0.

> See [froala/wysiwyg-cake2](https://github.com/froala/wysiwyg-cake2) for CakePHP version 2.

## About
The purpose of placing [Froala WYSIWYG Editor](https://www.froala.com/wysiwyg-editor) in a plugin is to keep it separate from a themed view, the regular webroot or the app in general, which makes it easier to update and overall follows the idea of keeping the code clean and modular.

## Installation
To use Froala WYSIWYG Editor you need to clone git repository:

	git clone git://github.com/froala/wysiwyg-cake.git Plugin/Froala

Or if your CakePHP application is setup as a git repository, you can add it as a submodule:

	git submodule add git://github.com/froala/wysiwyg-cake.git Plugin/Froala

Or
 	Add:

         	"froala/wysiwyg-cake": "^2.9"

	to the require section of your composer.json file.

	or use [composer](https://getcomposer.org/download/) :

    		php ./composer.phar require froala/wysiwyg-cake

Alternatively, you can download an archive from the [master branch on Github](https://github.com/froala/wysiwyg-cake/archive/master.zip) and extract the contents to `Plugin/Froala`.

Make sure that you load the plugin routes by adding to your bootstrap file(bootstrap.php) in config folder: 

Plugin::loadAll(); or  Plugin::load('Froala');
This will load all plugins at once or only the Froala plugin.


## Usage
The Froala helper is basically just a convenience helper that allows you to use php and CakePHP conventions to generate the configuration for Froala and as an extra it allows you to load configs.

```php
// Loads Froala Editor javascript also will load all the plugins and css for the plugins
<?= $this->Froala->plugin();?>

// Will target one specific html selector on which the editor will be init.
// Second paramenter is mix can be array/object of options that the Froala Editor will take.

<?= $this->Froala->editor('#froala', array('option' => value));?>
```

If you need to load the plugins, please include the respective `js` and `css` files in the file `Froala/View/Helper/FroalaHelper.php` as shown below:

```php
$this->Html->script(array(
	'/Froala/js/froala_editor.min.js',
	'/Froala/js/plugins/align.min.js',
	'/Froala/js/plugins/char_counter.min.js',
	'/Froala/js/plugins/code_beautifier.min.js',
	'/Froala/js/plugins/code_view.min.js',
	'/Froala/js/plugins/colors.min.js',
	'/Froala/js/plugins/draggable.min.js',
'/Froala/js/third_party/embedly.min.js',
	'/Froala/js/plugins/emoticons.min.js',
	'/Froala/js/plugins/entities.min.js',
	'/Froala/js/plugins/file.min.js',
	'/Froala/js/plugins/font_family.min.js',
	'/Froala/js/plugins/font_size.min.js',
	'/Froala/js/plugins/fullscreen.min.js',
	'/Froala/js/plugins/help.min.js',
	'/Froala/js/plugins/image.min.js',
'/Froala/js/third_party/image_aviary.min.js',
	'/Froala/js/plugins/image_manager.min.js',
	'/Froala/js/plugins/inline_style.min.js',
	'/Froala/js/plugins/line_breaker.min.js',
	'/Froala/js/plugins/link.min.js',
	'/Froala/js/plugins/lists.min.js',
	'/Froala/js/plugins/paragraph_format.min.js',
	'/Froala/js/plugins/paragraph_style.min.js',
	'/Froala/js/plugins/print.min.js',
	'/Froala/js/plugins/quick_insert.min.js',
	'/Froala/js/plugins/quote.min.js',
	'/Froala/js/plugins/special_characters.min.js',
'/Froala/js/third_party/spell_checker.min.js',
	'/Froala/js/plugins/save.min.js',
	'/Froala/js/plugins/table.min.js',
	'/Froala/js/plugins/url.min.js',
	'/Froala/js/plugins/video.min.js',
	'/Froala/js/plugins/word_paste.min.js'
	), $js_options);
$this->Html->css(array(
		'/Froala/css/froala_editor.min.css',
		'/Froala/css/froala_style.min.css',
		'/Froala/css/plugins/char_counter.min.css',
		'/Froala/css/plugins/code_view.min.css',
		'/Froala/css/plugins/colors.min.css',
		'/Froala/css/plugins/draggable.min.css',
'/Froala/css/third_party/embedly.min.css',
		'/Froala/css/plugins/emoticons.min.css',
		'/Froala/css/plugins/file.min.css',
		'/Froala/css/plugins/fullscreen.min.css',
		'/Froala/css/plugins/help.min.css',
		'/Froala/css/plugins/image_manager.min.css',
		'/Froala/css/plugins/image.min.css',
		'/Froala/css/plugins/line_breaker.min.css',
		'/Froala/css/plugins/quick_insert.min.css',
		'/Froala/css/plugins/special_characters.min.css',
'/Froala/css/third_party/spell_checker.min.css',
		'/Froala/css/plugins/table.min.css',
		'/Froala/css/plugins/video.min.css',
		'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
	), $css_options
);
```

## How to use the helper

Since CakePHP 3.0 it is necessary to activate the plugin in your application. To do so,
edit `app/Config/bootstrap.php` and add the line `CakePlugin::load('Froala');` at the
bottom. If you already have `CakePlugin::loadAll();` to auto-load all plugins then you may skip this step.

Wherever you want to use it, load it in the controller

open AppController.php (your project/src/controller/AppController)
Declare variable public $helpers = array('Froala.Froala');

```php
class AppController extends Controller
{
	...
	
	public $helpers = array('Froala.Froala');
	
	...
}
```
In the view page (template) 
add 
```php
<?= $this->Froala->editor('#froala-editor'');?>
```

This is a simple init example with no options for the Froala Editor.
Include the below statement in your view template to integrate the plugins in your editor

```php
$this->Froala->plugin();
$this->Froala->editor('selector');
```

This will instruct Froala to convert the matched element on the page to Froala editor.

A complete list of [Froala configuration options](https://www.froala.com/wysiwyg-editor/docs/options) are on the website.


## Default options

If you want a quick way to configure default values for all the Froala Editors of an application, you could use the 'Froala.editorOptions' configuration.

Here is an example of a line you could have in `bootstrap.php`:

```php
Configure::write('Froala.editorOptions', array('height' => '300px'));
```

It will make all editors to have a 300px height and apply line braker tags. You may want to override this value for a single editor. To do so, just pass the option to the editor() method and it will override the default value.

## Usage examples

Example of init using array of options

```php

// '#comment'  Represents the html element selector.
// 'array()'   Represents the list of options that are passed to the editor.

$this->Froala->editor('#comment', array('minHeight => '200px', 'maxHeight' => '400px'));
                  
```



## Requirements

* PHP version: PHP 5.2+
* jQuery javascript library <http://jquery.com/>

## Dependency Note

This plugin depends on jQuery (<http://jquery.com>) so you would need to ensure that it is loaded in your layout or the
view in which you want to display your editor. An example of how to load jQuery in your layout is shown below:


```php

<?= $this->Html->script(array('http://code.jquery.com/jquery-1.11.0.min.js')); ?>

<?= $this->fetch('script'); ?>

```

Of course, you can also use a copy of the jQuery library from your app/webroot/js folder.

## License

The `CakePHP Froala WYSIWYG Editor` project is under MIT license. However, in order to use WordPress Froala WYSIWYG Editor plugin you should purchase a license for it.

Froala Editor has [3 different licenses](https://www.froala.com/wysiwyg-editor/pricing) for commercial use. For details please see [License Agreement](https://www.froala.com/wysiwyg-editor/terms).

