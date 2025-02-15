/**
 * Copyright © Q-Solutions Studio: eCommerce Nanobots. All rights reserved.
 *
 * @category    Nanobots
 * @package     Nanobots_ProductPack
 * @author      Jakub Winkler <jwinkler@qsolutionsstudio.com>
 * @author      Wojtek Wnuk <wojtek@qsolutionsstudio.com>
 * @author      Łukasz Owczarczuk <lukasz@qsolutionsstudio.com>
 */
let config = {
    map: {
        '*': {
            productpack: 'Nanobots_ProductPack/js/productpack'
        }
    },
    shim: {
        'productPackage': {
            deps: ['jquery']
        }
    }
};
