
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

zc.module.panel.addControl(($, panel, global) => {
    const control = {};

    control.containerLBClass      = 'zc-panel-control-range__container_lb';
    control.leftIndicatorClass    = 'zc-panel-control-range__indicator_left';
    control.currentIndicatorClass = 'zc-panel-control-range__indicator_current';
    control.rightIndicatorClass   = 'zc-panel-control-range__indicator_right';

    control.inputNumber = (settings) => {
        const internFunctions = {
            settings: {
                input: false,
                buttonInc: false,
                buttonDec: false,
                min: 1,
                max: 100,
                step: 1,
                ifIncCallback:    () => {},
                ifDecCallback:    () => {},
                ifChangeCallback: () => {},
                ifErrorCallback:  () => {}
            },
    
            addSettings: function(settings) {
                this.settings = settings;
                return this;
            },
    
            manualInput: function() {
                const g = this;
    
                g.settings.input.on('input', function(event) {
                    event.preventDefault();
                    /* Act on the event */

                    let value = $(this).val();
                    let rule  = '';

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
                const g = this;
    
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
                const g = this;
                let to  = null;
                let int = null;
            
                g.settings.buttonInc.on('mousedown', (event) => {
                    event.preventDefault();
                    /* Act on the event */

                    $(g.settings.input).blur();
        
                    let value = g.settings.input.val();

                    value = parseFloat(value) + parseFloat(g.settings.step);
                    value = zc.round(value, 3);

                    if (value >= g.settings.min && value <= g.settings.max) {
                        g.settings.ifIncCallback.call(this, value);
                    }
        
                    to = setTimeout(() => {
                        int = setInterval(() => {
                            
                            value = parseFloat(value) + parseFloat(g.settings.step);
                            value = zc.round(value, 3);

                            if (value >= g.settings.min && value <= g.settings.max) {
                                g.settings.ifIncCallback.call(this, value);
                            }
        
                        }, 75);
                    }, 500);
                }).on('mouseup', () => {
                    clearTimeout(to);
                    clearInterval(int);
                });
            },
    
            buttonDec: function() {
                const g = this;
                let to  = null;
                let int = null;
    
                g.settings.buttonDec.on('mousedown', (event) => {
                    event.preventDefault();
                    /* Act on the event */

                    $(g.settings.input).blur();
        
                    let value = g.settings.input.val();
                    
                    value = parseFloat(value) - parseFloat(g.settings.step);
                    value = zc.round(value, 3);

                    if (value >= g.settings.min && value <= g.settings.max) {
                        g.settings.ifDecCallback.call(this, value);
                    }
        
                    to = setTimeout(() => {
                        int = setInterval(() => {
                            
                            value = parseFloat(value) - parseFloat(g.settings.step);
                            value = zc.round(value, 3);

                            if (value >= g.settings.min && value <= g.settings.max) {
                                g.settings.ifDecCallback.call(this, value);
                            }
        
                        }, 75);
                    }, 500);
                }).on('mouseup', () => {
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

    control.inputRange = (el, mode) => {
        zc.inputRange(mode, {
            el: el,
            settings: el.data('settings'),

            containerLBClass      : control.containerLBClass,
            leftIndicatorClass    : control.leftIndicatorClass,
            currentIndicatorClass : control.currentIndicatorClass,
            rightIndicatorClass   : control.rightIndicatorClass,
        });
    };

    control.initManualRange = (el) => {
        let settings = el.data('settings'),
            manualRange = el.parent().parent().find('.zc-panel-control-range__manual-range'),
            min = settings.min || 0,
            max = settings.max || 0,
            step = settings.step || 1,
            titleRangeError = zc.strReplace(['{MIN}', '{MAX}'], [min, max], global['title-range-error']);

        control.inputNumber({
            input: manualRange.find('.zc-panel-control-range__manual-range_type_text'),
            buttonInc: manualRange.find('.zc-panel-control-range__manual-range-spinner-button_inc'),
            buttonDec: manualRange.find('.zc-panel-control-range__manual-range-spinner-button_dec'),
            min: min,
            max: max,
            step: step,
            ifIncCallback: (value) => {
                manualRange.find('.zc-panel-control-range__manual-range_type_text').removeClass('zc-panel-control-range__manual-range_bad-value');
                manualRange.find('.zc-panel-control-range__manual-range_type_text').attr('title', '');
                manualRange.find('.zc-panel-control-range__manual-range_type_text').val(value).change();
                el.val(value).change();
                control.inputRange(el, 'live');
                panel.enableSaveButton();
            },
            ifDecCallback: (value) => {
                manualRange.find('.zc-panel-control-range__manual-range_type_text').removeClass('zc-panel-control-range__manual-range_bad-value');
                manualRange.find('.zc-panel-control-range__manual-range_type_text').attr('title', '');
                manualRange.find('.zc-panel-control-range__manual-range_type_text').val(value).change();
                el.val(value).change();
                control.inputRange(el, 'live');
                panel.enableSaveButton();
            },
            ifChangeCallback: (value) => {
                manualRange.find('.zc-panel-control-range__manual-range_type_text').removeClass('zc-panel-control-range__manual-range_bad-value');
                manualRange.find('.zc-panel-control-range__manual-range_type_text').attr('title', '');
                el.val(value).change();
                control.inputRange(el, 'live');
                panel.enableSaveButton();
            },
            ifErrorCallback: (value) => {
                manualRange.find('.zc-panel-control-range__manual-range_type_text').addClass('zc-panel-control-range__manual-range_bad-value');
                manualRange.find('.zc-panel-control-range__manual-range_type_text').attr('title', titleRangeError);
                panel.disableSaveButton();
            }
        });
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
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

    $(window).on('zc/panel/menu/item-change-ICP', (event, section) => {
        if (section) {
            section.find('.zc-panel-control-range__input').each((index, el) => {
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