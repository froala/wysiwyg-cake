<?php
namespace Froala\Test\TestCase\View\Helper;

use Cake\TestSuite\TestCase;
use Cake\View\View;
use Froala\View\Helper\FroalaHelper;

/**
 * Froala\View\Helper\FroalaHelper Test Case
 */
class FroalaHelperTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \Froala\View\Helper\FroalaHelper
     */
    public $Froala;

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $view = new View();
        $this->Froala = new FroalaHelper($view);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Froala);

        parent::tearDown();
    }

    /**
     * Test initial setup
     *
     * @return void
     */
    public function testInitialization()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

}
