
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Input range
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

zc.module.panel.addControl(function($, panel, global) {

    var control = {};

    control.containerLBClass      = 'zc-panel-control-range__container_lb';
    control.leftIndicatorClass    = 'zc-panel-control-range__indicator_left';
    control.currentIndicatorClass = 'zc-panel-control-range__indicator_current';
    control.rightIndicatorClass   = 'zc-panel-control-range__indicator_right';

    control.inputNumber = function (settings) {
        var internFunctions = {
            settings: {
                input: false,
                buttonInc: false,
                buttonDec: false,
                min: 1,
                max: 100,
                step: 1,
                ifIncCallback: function () {},
                ifDecCallback: function () {},
                ifChangeCallback: function () {},
                ifErrorCallback: function () {}
            },
    
            addSettings: function(settings) {
                this.settings = settings;
                return this;
            },
    
            manualInput: function() {
                var g = this;
    
                g.settings.input.on('input', function(event) {
                    event.preventDefault();
                    /* Act on the event */

                    var value = $(this).val();
                    var rule  = '';

                    if (!isNaN(g.settings.step) && g.settings.step.toString().indexOf('.') != -1) {
                        rule = /^-?\d*(\.\d+)?$/;
                    } else {
                        rule = /^\d+$/;
                    }

                    if (value.match(rule) && value >= g.settings.min && value <= g.settings.max) {
                        g.settings.ifChangeCallback.call(this, value);
                    } else {
                        g.settings.ifErrorCallback.call(this, value);
                    }
                });
            },
    
            manualScroll: function() {
                var g = this;
    
                g.settings.input.on('wheel', function(event) {
                    if ($(this).is(':focus')) {
                        event.preventDefault();
                        /* Act on the event */
        
                        var value = g.settings.input.val();
        
                        if (event.originalEvent.deltaY < 0){
                            value = parseFloat(value) + parseFloat(g.settings.step);
                            value = zc.round(value, 3);

                            if (value >= g.settings.min && value <= g.settings.max) {
                                g.settings.ifIncCallback.call(this, value);
                            }
                        } else {
                            value = parseFloat(value) - parseFloat(g.settings.step);
                            value = zc.round(value, 3);

                            if (value >= g.settings.min && value <= g.settings.max) {
                                g.settings.ifDecCallback.call(this, value);
                            }
                        }
                    }
                });
            },
    
            buttonInc: function () {
                var g = this;
                var to = null;
                var int = null;
            
                g.settings.buttonInc.on('mousedown', function (event) {
                    event.preventDefault();
                    /* Act on the event */

                    $(g.settings.input).blur();
        
                    var value = g.settings.input.val();

                    value = parseFloat(value) + parseFloat(g.settings.step);
                    value = zc.round(value, 3);

                    if (value >= g.settings.min && value <= g.settings.max) {
                        g.settings.ifIncCallback.call(this, value);
                    }
        
                    to = setTimeout(function () {
                        int = setInterval(function () {
                            
                            value = parseFloat(value) + parseFloat(g.settings.step);
                            value = zc.round(value, 3);

                            if (value >= g.settings.min && value <= g.settings.max) {
                                g.settings.ifIncCallback.call(this, value);
                            }
        
                        }, 75);
                    }, 500);
                }).on('mouseup', function () {
                    clearTimeout(to);
                    clearInterval(int);
                });
            },
    
            buttonDec: function() {
                var g = this;
                var to = null;
                var int = null;
    
                g.settings.buttonDec.on('mousedown', function (event) {
                    event.preventDefault();
                    /* Act on the event */

                    $(g.settings.input).blur();
        
                    var value = g.settings.input.val();
                    
                    value = parseFloat(value) - parseFloat(g.settings.step);
                    value = zc.round(value, 3);

                    if (value >= g.settings.min && value <= g.settings.max) {
                        g.settings.ifDecCallback.call(this, value);
                    }
        
                    to = setTimeout(function () {
                        int = setInterval(function () {
                            
                            value = parseFloat(value) - parseFloat(g.settings.step);
                            value = zc.round(value, 3);

                            if (value >= g.settings.min && value <= g.settings.max) {
                                g.settings.ifDecCallback.call(this, value);
                            }
        
                        }, 75);
                    }, 500);
                }).on('mouseup', function () {
                    clearTimeout(to);
                    clearInterval(int);
                });
            }
        }

        internFunctions.addSettings(settings);
        internFunctions.manualInput();
        internFunctions.manualScroll();
        internFunctions.buttonInc();
        internFunctions.buttonDec();
    };

    control.inputRange = function(el, mode) {
        zc.inputRange(mode, {
            el: el,
            settings: el.data('settings'),

            containerLBClass      : control.containerLBClass,
            leftIndicatorClass    : control.leftIndicatorClass,
            currentIndicatorClass : control.currentIndicatorClass,
            rightIndicatorClass   : control.rightIndicatorClass,
        });
    };

    control.initManualRange = function(el) {
        var settings = el.data('settings'),
            titleRangeError = zc.strReplace(['{MIN}', '{MAX}'], [min, max], global['title-range-error']),
            manualRange = el.parent().parent().find('.zc-panel-control-range__manual-range'),
            min = settings.min || 0,
            max = settings.max || 0,
            step = settings.step || 1;

        control.inputNumber({
            input: manualRange.find('.zc-panel-control-range__manual-range_type_text'),
            buttonInc: manualRange.find('.zc-panel-control-range__manual-range-spinner-button_inc'),
            buttonDec: manualRange.find('.zc-panel-control-range__manual-range-spinner-button_dec'),
            min: min,
            max: max,
            step: step,
            ifIncCallback: function (value) {
                manualRange.find('.zc-panel-control-range__manual-range_type_text').removeClass('zc-panel-control-range__manual-range_bad-value');
                manualRange.find('.zc-panel-control-range__manual-range_type_text').attr('title', '');
                manualRange.find('.zc-panel-control-range__manual-range_type_text').val(value).change();
                el.val(value).change();
                control.inputRange(el, 'live');
                panel.enableSaveButton();
            },
            ifDecCallback: function (value) {
                manualRange.find('.zc-panel-control-range__manual-range_type_text').removeClass('zc-panel-control-range__manual-range_bad-value');
                manualRange.find('.zc-panel-control-range__manual-range_type_text').attr('title', '');
                manualRange.find('.zc-panel-control-range__manual-range_type_text').val(value).change();
                el.val(value).change();
                control.inputRange(el, 'live');
                panel.enableSaveButton();
            },
            ifChangeCallback: function (value) {
                manualRange.find('.zc-panel-control-range__manual-range_type_text').removeClass('zc-panel-control-range__manual-range_bad-value');
                manualRange.find('.zc-panel-control-range__manual-range_type_text').attr('title', '');
                el.val(value).change();
                control.inputRange(el, 'live');
                panel.enableSaveButton();
            },
            ifErrorCallback: function (value) {
                manualRange.find('.zc-panel-control-range__manual-range_type_text').addClass('zc-panel-control-range__manual-range_bad-value');
                manualRange.find('.zc-panel-control-range__manual-range_type_text').attr('title', titleRangeError);
                panel.disableSaveButton();
            }
        });
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                if (!$(entry.target).hasClass('zc-panel-control-range__input_activated')) {
                    $(entry.target).addClass('zc-panel-control-range__input_activated');

                    control.inputRange($(entry.target), 'init');
                    control.initManualRange($(entry.target));
                }
            }
        });
    }, {
        root: null,
        threshold: 0.25
    });

    $(window).on('zc/panel/menu/item-change-ICP', function(event, section) {
        if (section) {
            section.find('.zc-panel-control-range__input').each(function(index, el) {
                observer.observe(el);
            });
        }
    });

    $('.zc-panel').on('input', '.zc-panel-control-range__input', function(event) {
        event.preventDefault();
        /* Act on the event */

        control.inputRange($(this), 'live');

        var manualRange = $(this).parent().parent().find('.zc-panel-control-range__manual-range');

        manualRange.find('.zc-panel-control-range__manual-range_type_text').val($(this).val()).change();
        manualRange.find('.zc-panel-control-range__manual-range_type_text').removeClass('zc-panel-control-range__manual-range_bad-value');
        panel.enableSaveButton();
    });
});