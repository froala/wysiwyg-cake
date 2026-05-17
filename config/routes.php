<?php
use Cake\Routing\RouteBuilder;
use Cake\Routing\Route\DashedRoute;

/** @var \Cake\Routing\RouteBuilder $routes */
$routes->plugin(
    'Froala',
    ['path' => '/froala'],
    function (RouteBuilder $routes) {
        $routes->fallbacks(DashedRoute::class);
    }
);
