<?php

/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use ZimbruCode\Component\Core\Kernel;

return [

    // Package : ACE Editor
    'ace-editor'  => [
        'styles'  => [],
        'scripts' => [
            'ace'                    => [
                'path'    => "{$path}/packages/ace-editor/ace.js",
                'version' => '1.12.5',
            ],
            'ace-ext-language-tools' => [
                'path'    => "{$path}/packages/ace-editor/ext-language_tools.js",
                'version' => '1.12.5',
            ],
        ],
    ],

    // Package : ZimbruCode functions
    'zimbrucode'  => [
        'styles'  => [],
        'scripts' => [
            'zimbrucode' => [
                'path'    => (function () use ($path): string {
                    if (Kernel::getEnvironment() == 'prod') {
                        return "{$path}/packages/zimbrucode/jquery.zimbrucode.min.js";
                    } else {
                        return "{$path}/packages/zimbrucode/jquery.zimbrucode.js";
                    }
                })(),
                'version' => '1.1.0',
            ],
        ],
    ],

    // Package : Chosen
    'chosen'      => [
        'styles'  => [
            'chosen' => [
                'path'    => "{$path}/packages/chosen/chosen.min.css",
                'version' => '1.8.7',
            ],
        ],
        'scripts' => [
            'chosen' => [
                'path'    => "{$path}/packages/chosen/jquery.chosen.min.js",
                'version' => '1.8.7',
            ],
        ],
    ],

    // Package : Ba-bbq
    'ba-bbq'      => [
        'styles'  => [],
        'scripts' => [
            'ba-bbq' => [
                'path'    => "{$path}/packages/ba-bbq/jquery.ba-bbq.min.js",
                'version' => '1.2.1',
            ],
        ],
    ],

    // Package : Color picker
    'colorpicker' => [
        'styles'  => [
            'pickr-monolith' => [
                'path'    => "{$path}/packages/colorpicker/monolith.min.css",
                'version' => '1.8.2',
            ],
        ],
        'scripts' => [
            'pickr' => [
                'path'    => "{$path}/packages/colorpicker/pickr.min.js",
                'version' => '1.8.2',
            ],
        ],
    ],

    // Package : Tipsy
    'tipsy'       => [
        'styles'  => [
            'tipsy' => [
                'path'    => "{$path}/packages/tipsy/tipsy.min.css",
                'version' => '1.0.1',
            ],
        ],
        'scripts' => [
            'tipsy' => [
                'path'    => "{$path}/packages/tipsy/jquery.tipsy.min.js",
                'version' => '1.0.1',
            ],
        ],
    ],
];
