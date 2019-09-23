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
	// Array that will contain plugins list
	private $_plugins = array();


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

		// Copying the requested plugins in the private variable _plugins
		if (!empty($options['pluginsEnabled'])) {
			$this->_plugins = $options['pluginsEnabled'];
		}

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

		$script_str = 'new FroalaEditor("' . $selector . '",'.$options.');';

		// Call the plugin assets
        $this->plugin($scriptBlockOptions);

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

		// Javascript array files
		$js_files = array(
			'/Froala/js/froala_editor.min.js'
		);

		// Stylesheet array files
		$css_files = array(
			'/Froala/css/froala_editor.min.css',
			'/Froala/css/froala_style.min.css'
		);

		/**
		 * Including assets of each plugin (JS / CSS)
		 */
		if (in_array('align', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/align.min.js');
		}
		if (in_array('charCounter', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/char_counter.min.css');
			array_push($js_files, '/Froala/js/plugins/char_counter.min.js');
		}
		if (in_array('codeBeautifier', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/code_beautifier.min.js');
		}
		if (in_array('codeView', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/code_view.min.css');
			array_push($js_files, '/Froala/js/plugins/code_view.min.js');
		}
		if (in_array('colors', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/colors.min.css');
			array_push($js_files, '/Froala/js/plugins/colors.min.js');
		}
		if (in_array('draggable', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/draggable.min.css');
			array_push($js_files, '/Froala/js/plugins/draggable.min.js');
		}
		if (in_array('embedly', $this->_plugins)) {
			array_push($css_files, '/Froala/css/third_party/embedly.min.css');
			array_push($js_files, '/Froala/js/third_party/embedly.min.js');
		}
		if (in_array('emoticons', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/emoticons.min.css');
			array_push($js_files, '/Froala/js/plugins/emoticons.min.js');
		}
		if (in_array('entities', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/entities.min.js');
		}
		if (in_array('file', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/file.min.css');
			array_push($js_files, '/Froala/js/plugins/file.min.js');
		}
		if (in_array('fontFamily', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/font_family.min.js');
		}
		if (in_array('fontSize', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/font_size.min.js');
		}
		if (in_array('fullscreen', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/fullscreen.min.css');
			array_push($js_files, '/Froala/js/plugins/fullscreen.min.js');
		}
		if (in_array('help', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/help.min.css');
			array_push($js_files, '/Froala/js/plugins/help.min.js');
		}
		if (in_array('image', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/image.min.css');
			array_push($js_files, '/Froala/js/plugins/image.min.js');
		}
		if (in_array('imageManager', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/image_manager.min.css');
			array_push($js_files, '/Froala/js/plugins/image_manager.min.js');
		}
		if (in_array('inlineStyle', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/inline_style.min.js');
		}
		if (in_array('lineBreaker', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/line_breaker.min.css');
			array_push($js_files, '/Froala/js/plugins/line_breaker.min.js');
		}
		if (in_array('link', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/link.min.js');
		}
		if (in_array('lists', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/lists.min.js');
		}
		if (in_array('paragraphFormat', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/paragraph_format.min.js');
		}
		if (in_array('paragraphStyle', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/paragraph_style.min.js');
		}
		if (in_array('print', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/print.min.js');
		}
		if (in_array('quickInsert', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/quick_insert.min.css');
			array_push($js_files, '/Froala/js/plugins/quick_insert.min.js');
		}
		if (in_array('quote', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/quote.min.js');
		}
		if (in_array('spellChecker', $this->_plugins)) {
			array_push($js_files, '/Froala/css/third_party/spell_checker.min.css');
			array_push($js_files, '/Froala/js/third_party/spell_checker.min.js');
		}
		if (in_array('specialCharacters', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/special_characters.min.css');
			array_push($js_files, '/Froala/js/plugins/special_characters.min.js');
		}
		if (in_array('fontAwsome', $this->_plugins)) {
			array_push($css_files, '/Froala/css/third_party/font_awesome.min.css');
			array_push($css_files, 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
			array_push($js_files, '/Froala/js/third_party/font_awsome.min.js');
		}
		if (in_array('save', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/save.min.js');
		}
		if (in_array('table', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/table.min.css');
			array_push($js_files, '/Froala/js/plugins/table.min.js');
		}
		if (in_array('url', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/url.min.js');
		}
		if (in_array('video', $this->_plugins)) {
			array_push($css_files, '/Froala/css/plugins/video.min.css');
			array_push($js_files, '/Froala/js/plugins/video.min.js');
		}
		if (in_array('wordPaste', $this->_plugins)) {
			array_push($js_files, '/Froala/js/plugins/word_paste.min.js');
		}

		echo $this->Html->script($js_files, $js_options);

		echo $this->Html->css($css_files, $css_options
		);
	}


}
