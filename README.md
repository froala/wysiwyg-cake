# Froala WYSIWYG Editor Plugin for CakePHP 3

[![Packagist](https://img.shields.io/packagist/v/froala/wysiwyg-cake.svg)](https://packagist.org/packages/froala/wysiwyg-cake)
[![Packagist](https://img.shields.io/packagist/dt/froala/wysiwyg-cake.svg)](https://packagist.org/packages/froala/wysiwyg-cake)

> CakePHP Plugin for Froala Javascript WYSIWYG Text Editor. For CakePHP >=3.0.

> See [froala/wysiwyg-cake2](https://github.com/froala/wysiwyg-cake2) for CakePHP version 2.

## About
The purpose of placing [Froala WYSIWYG Editor](https://www.froala.com/wysiwyg-editor) in a plugin is to keep it separate from a themed view, the regular webroot or the app in general, which makes it easier to update and overall follows the idea of keeping the code clean and modular.

## Installation
To use Froala WYSIWYG Editor you need to 

Open terminal/command prompt (windows)
	type 
    
    composer require froala/wysiwyg-cake

Alternatively, you can download an archive from the [master branch on Github](https://github.com/froala/wysiwyg-cake/archive/master.zip) and extract the contents to `vendor/Froala/wysiwyg-cake`.

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
```
<div id="froala-editor" class="row">
</div>
```
```php
<?= $this->Froala->plugin() ?>
<?= $this->Froala->editor('#froala-editor'');?>
```
Open `Application.php` and add:
```
$this->addPlugin('Froala');
```


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

## License

The `CakePHP Froala WYSIWYG Editor` project is under MIT license. However, in order to use WordPress Froala WYSIWYG Editor plugin you should purchase a license for it.

Froala Editor has [3 different licenses](https://www.froala.com/wysiwyg-editor/pricing) for commercial use. For details please see [License Agreement](https://www.froala.com/wysiwyg-editor/terms).

