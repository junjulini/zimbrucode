
/*
 * This file is part of the zimbrucode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*
 * Control script : Measurement
 *
 * @author  C.R <cr@junjulini.com>
 * @package zimbrucode
 * @since   1.1.0
 */

'use strict';

zc.module.panel.addControl(($, panel, global) => {
    const control = {};

    control.addDefaultValue = (el, m) => {
        const n    = m.match(/[+-]?([0-9]*[.])?[0-9]+/);
        const unit = m.replace(/[+-]?([0-9]*[.])?[0-9]+/g, '');

        if (n !== null) {
            el.find('.zc-panel-control-measurement__input').val(n[0]);
        } else {
            console.error('Control : Measurement - Default value is null');
        }

        if (unit) {
            if (el.find('.zc-panel-control-measurement__container').hasClass('zc-panel-control-measurement__container_only')) {
                el.find('.zc-panel-control-measurement__unit').text(unit);
            } else {
                el.find('.zc-panel-control-measurement__select').val(unit).change().trigger('chosen:updated');
            }
        } else {
            el.addClass('zc-panel-control-measurement_no-unit');
        }
    };

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
        
                    const value = $(this).val();

                    if (value.match(/[+-]?([0-9]*[.])?[0-9]+/) && value >= g.settings.min && value <= g.settings.max) {
                        g.settings.ifChangeCallback(value);
                    } else {
                        g.settings.ifErrorCallback(value);
                    }
        
                });
            },
    
            manualScroll: function() {
                const g = this;
    
                g.settings.input.on('wheel', function(event) {
                    if ($(this).is(':focus')) {
                        event.preventDefault();
                        /* Act on the event */
        
                        let value = g.settings.input.val();
        
                        if (event.originalEvent.deltaY < 0){
                            value = parseFloat(value) + parseFloat(g.settings.step);
                            value = zc.round(value, 3);

                            if (value >= g.settings.min && value <= g.settings.max) {
                                g.settings.ifIncCallback(value);
                            }
                        } else {
                            value = parseFloat(value) - parseFloat(g.settings.step);
                            value = zc.round(value, 3);

                            if (value >= g.settings.min && value <= g.settings.max) {
                                g.settings.ifDecCallback(value);
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
                        g.settings.ifIncCallback(value);
                    }
        
                    to = setTimeout(() => {
                        int = setInterval(() => {
                            
                            value = parseFloat(value) + parseFloat(g.settings.step);
                            value = zc.round(value, 3);

                            if (value >= g.settings.min && value <= g.settings.max) {
                                g.settings.ifIncCallback(value);
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
    
                g.settings.buttonDec.on('mousedown', function (event) {
                    event.preventDefault();
                    /* Act on the event */

                    $(g.settings.input).blur();
        
                    let value = g.settings.input.val();
                    
                    value = parseFloat(value) - parseFloat(g.settings.step);
                    value = zc.round(value, 3);

                    if (value >= g.settings.min && value <= g.settings.max) {
                        g.settings.ifDecCallback(value);
                    }
        
                    to = setTimeout(() => {
                        int = setInterval(() => {
                            
                            value = parseFloat(value) - parseFloat(g.settings.step);
                            value = zc.round(value, 3);

                            if (value >= g.settings.min && value <= g.settings.max) {
                                g.settings.ifDecCallback(value);
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

    control.initMeasurement = (el) => {
        let m = (el.find('input[type=hidden]').val() || '0px'),
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

        const titleRangeError = zc.strReplace(['{MIN}', '{MAX}'], [min, max], global['title-range-error']);

        control.inputNumber({
            input: el.find('.zc-panel-control-measurement__input'),
            buttonInc: el.find('.zc-panel-control-measurement__spinner-button_inc'),
            buttonDec: el.find('.zc-panel-control-measurement__spinner-button_dec'),
            min: min,
            max: max,
            step: step,
            ifIncCallback: (value) => {
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
            ifDecCallback: (value) => {
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
            ifChangeCallback: (value) => {
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
            ifErrorCallback: (value) => {
                el.find('.zc-panel-control-measurement__input').addClass('zc-panel-control-measurement__input_bad-value');
                el.find('.zc-panel-control-measurement__input').attr('title', titleRangeError);
                panel.disableSaveButton();
            }
        });

        el.on('change', 'select', function(event) {
            event.preventDefault();
            /* Act on the event */

            const n = el.find('.zc-panel-control-measurement__input').val();

            el.find('input[type=hidden]').val(n + $(this).val()).change();
        });

        el.on('click', '.zc-panel-control-measurement__inherit-type', function(event) {
            event.preventDefault();
            /* Act on the event */

            const input = el.find('.zc-panel-control-measurement__input');

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

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
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

    $(window).on('zc/panel/menu/item-change-ICP', (event, section) => {
        if (section) {
            section.find('.zc-panel-control-measurement').each((index, el) => {
                observer.observe(el);
            });
        }
    });
});