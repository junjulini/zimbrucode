
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Measurement
 *
 * @author  Junjulini
 * @package ZimbruCode
 * @since   ZimbruCode 1.0.0
 */

'use strict';

zc.module.panel.addControl(function($, panel, global) {

    var control = {};

    control.addDefaultValue = function(el, m) {
        var n = m.match(/[+-]?([0-9]*[.])?[0-9]+/),
            unit = m.replace(/[+-]?([0-9]*[.])?[0-9]+/g, '');

        if (n !== null) {
            el.find('.zc-panel-control-measurement__input').val(n[0]);
        } else {
            console.error('Control : Measurement - Default value is null');
        }

        if (unit) {
            if (el.find('.zc-panel-control-measurement__container').hasClass('zc-panel-control-measurement__container_only')) {
                el.find('.zc-panel-control-measurement__unit').text(unit);
            } else {
                el.find('.zc-panel-control-measurement__select').val(unit).change().trigger("chosen:updated");;
            }
        } else {
            el.addClass('zc-panel-control-measurement_no-unit');
        }
    };

    control.inputNumber = function(settings) {
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

                    if (value.match(/[+-]?([0-9]*[.])?[0-9]+/) && value >= g.settings.min && value <= g.settings.max) {
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

    control.initMeasurement = function(el) {
        var m = (el.find('input[type=hidden]').val() || '0px'),
            min = el.find('.zc-panel-control-measurement__input').data('min'),
            max = el.find('.zc-panel-control-measurement__input').data('max'),
            step = el.find('.zc-panel-control-measurement__input').data('step');
        
        if (max == 'infinity') {
            max = Infinity;
        }

        if (el.find('select').length > 0) {
            el.find('select').chosen({
                width: '100%',
                disable_search_threshold: 10
            });
        }

        if (zc.isMobile()) {
            el.addClass('zc-panel-control-measurement_mobile');
        }

        if (m != 'inherit') {
            control.addDefaultValue(el, m);
        } else {
            el.find('.zc-panel-control-measurement__input').prop('disabled', true);
            el.find('.zc-panel-control-measurement__inherit-type').addClass('zc-panel-control-measurement__inherit-type_active');
            el.find('.zc-panel-control-measurement__inherit-container').addClass('zc-panel-control-measurement__inherit-container_active');

            if (el.hasClass('zc-panel-control-measurement_only')) {
                control.addDefaultValue(el, el.data('default'));
            }
        }

        var titleRangeError = zc.strReplace(['{MIN}', '{MAX}'], [min, max], global['title-range-error']);

        control.inputNumber({
            input: el.find('.zc-panel-control-measurement__input'),
            buttonInc: el.find('.zc-panel-control-measurement__spinner-button_inc'),
            buttonDec: el.find('.zc-panel-control-measurement__spinner-button_dec'),
            min: min,
            max: max,
            step: step,
            ifIncCallback: function (value) {
                el.find('.zc-panel-control-measurement__input').removeClass('zc-panel-control-measurement__input_bad-value');
                el.find('.zc-panel-control-measurement__input').attr('title', '');
                panel.enableSaveButton();
                
                el.find('.zc-panel-control-measurement__input').val(value);

                if (el.hasClass('zc-panel-control-measurement_only')) {
                    var unit = el.find('.zc-panel-control-measurement__unit').text();
                } else {
                    var unit = el.find('select').val();
                }
    
                el.find('input[type=hidden]').val(el.find('.zc-panel-control-measurement__input').val() + unit).change();
            },
            ifDecCallback: function (value) {
                el.find('.zc-panel-control-measurement__input').removeClass('zc-panel-control-measurement__input_bad-value');
                el.find('.zc-panel-control-measurement__input').attr('title', '');
                panel.enableSaveButton();

                el.find('.zc-panel-control-measurement__input').val(value);

                if (el.hasClass('zc-panel-control-measurement_only')) {
                    var unit = el.find('.zc-panel-control-measurement__unit').text();
                } else {
                    var unit = el.find('select').val();
                }
    
                el.find('input[type=hidden]').val(el.find('.zc-panel-control-measurement__input').val() + unit).change();
            },
            ifChangeCallback: function (value) {
                el.find('.zc-panel-control-measurement__input').removeClass('zc-panel-control-measurement__input_bad-value');
                el.find('.zc-panel-control-measurement__input').attr('title', '');
                panel.enableSaveButton();

                el.find('.zc-panel-control-measurement__input').val(value);

                if (el.hasClass('zc-panel-control-measurement_only')) {
                    var unit = el.find('.zc-panel-control-measurement__unit').text();
                } else {
                    var unit = el.find('select').val();
                }
    
                el.find('input[type=hidden]').val(el.find('.zc-panel-control-measurement__input').val() + unit).change();
            },
            ifErrorCallback: function (value) {
                el.find('.zc-panel-control-measurement__input').addClass('zc-panel-control-measurement__input_bad-value');
                el.find('.zc-panel-control-measurement__input').attr('title', titleRangeError);
                panel.disableSaveButton();
            }
        });

        el.on('change', 'select', function(event) {
            event.preventDefault();
            /* Act on the event */

            var n = el.find('.zc-panel-control-measurement__input').val();

            el.find('input[type=hidden]').val(n + $(this).val()).change();
        });

        el.on('click', '.zc-panel-control-measurement__inherit-type', function(event) {
            event.preventDefault();
            /* Act on the event */

            var input = el.find('.zc-panel-control-measurement__input');

            if (!input.prop('disabled')) {
                input.prop('disabled', true);
                $(this).addClass('zc-panel-control-measurement__inherit-type_active');
                $(this).parent().find('.zc-panel-control-measurement__inherit-container').addClass('zc-panel-control-measurement__inherit-container_active');
                $(this).data('output', el.find('input[type=hidden]').val());
                el.find('input[type=hidden]').val('inherit').change();
            } else {
                input.prop('disabled', false);
                $(this).removeClass('zc-panel-control-measurement__inherit-type_active');
                $(this).parent().find('.zc-panel-control-measurement__inherit-container').removeClass('zc-panel-control-measurement__inherit-container_active');

                if ($(this).data('output') === undefined) {
                    control.addDefaultValue(el, el.data('default'));
                    el.find('input[type=hidden]').val(el.data('default')).change();
                } else {
                    el.find('input[type=hidden]').val($(this).data('output')).change();
                }
            }
        });
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                if (!$(entry.target).hasClass('zc-panel-control-measurement_activated')) {
                    $(entry.target).addClass('zc-panel-control-measurement_activated');

                    control.initMeasurement($(entry.target));
                }
            }
        });
    }, {
        root: null,
        threshold: 0.25
    });

    $(window).on('zc/panel/menu/item-change-ICP', function(event, section) {
        if (section) {
            section.find('.zc-panel-control-measurement').each(function(index, el) {
                observer.observe(el);
            });
        }
    });
});