<?php
namespace Froala\View\Helper;

use Cake\View\Helper;
use Cake\Core\Configure;

/**
 * Froala helper
 */
class FroalaHelper extends Helper
{

    /**
     * Default configuration.
     *
     * @var array
     */
    protected $_defaultConfig = [];
	public $helpers = array('Html');


	public function initialize(array $config) {}

	/**
	 * Adds a new editor to the script block on the page
	 *
	 * @see http://editor.froala.com/docs/options for a list of keys
	 * @param mixed $selector
	 * @param mixed $options
	 * @param mixed $scriptBlockOptions Options array for HtmlHelper::scriptBlock() of false for return without block at all
	 * @return void
	 */
	public function editor($selector = null, $options = null, $scriptBlockOptions = []) {

		$configs = Configure::read('Froala.editorOptions');
		if (!empty($configs) && is_array($configs)) {
			$this->_defaultConfig = $configs;
		}

		if (is_object($options)){
			$options = json_encode($options);
		} else if (is_array($options)) {
			$options = json_encode(array_merge($this->_defaultConfig, $options));

		}
		else {
			$options = '{}';
		}

		$script_str = '$(function() {$("' . $selector . '").froalaEditor(' . "\n" . $options . "\n" . ');})' . "\n";
        
        echo is_array($scriptBlockOptions) ? $this->Html->scriptBlock($script_str, $scriptBlockOptions) : $script_str;
	}


	/**
	 * Loads up all the plugins and css for plugins upon calling.
	 * @param   array   $common_options Common options for HtmlHelper script() and css() methods
	 * @param   array   $js_options     Specific options for HtmlHelper::script() method
	 * @param   array   $css_options    Specific options for HtmlHelper::css() method
	 *
	 *
	 */
	public function plugin($common_options = array(), $js_options = array(), $css_options = array()) {
		$js_options = array_merge(array('toolbarInline' => false), $common_options, $js_options);
		$css_options = array_merge(array('toolbarInline' => false), $common_options, $css_options);

		echo $this->Html->script(array(
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
		echo $this->Html->css(array(
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
	}


}
