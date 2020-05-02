
/*
 * This file is part of the ZimbruCode package.
 *
 * (c) Junjulini
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

;(function ($, window) {
    $.fn.extend({
        zcColorPicker: function(config) {

            var that = this;
            var f = {
                renderCallback: function(colors, mode) {
                    var options = this;
                    var $input = $(options.input),
                        RGB = colors.RND.rgb,
                        HSL = colors.RND.hsl,
                        AHEX = options.isIE8 ? (colors.alpha < 0.16 ? '0' : '') + (Math.round(colors.alpha * 100)).toString(16).toUpperCase() + colors.HEX : '',
                        RGBInnerText = RGB.r + ', ' + RGB.g + ', ' + RGB.b,
                        RGBAText = 'rgba(' + RGBInnerText + ', ' + colors.alpha + ')',
                        isAlpha = colors.alpha !== 1 && !options.isIE8,
                        colorMode = $input.data('colorMode');

                    var output = '';
                    if (colorMode === 'HEX' && !isAlpha) {
                        output = '#' + (options.isIE8 ? AHEX : colors.HEX);
                    } else {
                        if (colorMode === 'rgb' || (colorMode === 'HEX' && isAlpha)) {
                            output = (!isAlpha ? 'rgb(' + RGBInnerText + ')' : RGBAText);
                        } else {
                            output = 'hsl' + (isAlpha ? 'a(' : '(') + HSL.h + ', ' + HSL.s + '%, ' + HSL.l + '%' + (isAlpha ? ', ' + colors.alpha : '') + ')';
                        }
                    }

                    if ($.isFunction(options.renderEC)) {
                        options.renderEC(colors, mode, options, output);
                    }
                },

                extractValue: function(elm) {
                    return $(elm).val() || $(elm).data('colorpicker-value') || '#FFFFFF';;
                },

                actionCallback: function(event, action) {
                    var options = this;
                    var colorPicker = colorPickers.current;

                    if ($.isFunction(options.actionEC)) {
                        options.actionEC(action);
                    }

                    if (action === 'toMemery') {
                        var memos = colorPicker.nodes.memos,
                            $memo,
                            backgroundColor = '',
                            opacity = 0,
                            cookieTXT = [];

                        for (var n = 0, m = memos.length; n < m; n++) {
                            $memo = $(memos[n]);
                            backgroundColor = $memo.css('background-color');
                            opacity = Math.round($memo.css('opacity') * 100) / 100;
                            cookieTXT.push(backgroundColor.
                                replace(/, /g, ',').
                                replace('rgb(', 'rgba(').
                                replace(')', ',' + opacity + ')')
                            );
                        }
                        cookieTXT = '\'' + cookieTXT.join('\',\'') + '\'';
                        f.docCookies('colorPickerMemos' + (options.noAlpha ? 'NoAlpha' : ''), cookieTXT);
                    } else if (action === 'resizeApp') {
                        f.docCookies('colorPickerSize', colorPicker.color.options.currentSize);
                    } else if (action === 'modeChange') {
                        var mode = colorPicker.color.options.mode;
                        f.docCookies('colorPickerMode', mode.type + '-' + mode.z);
                    }
                },

                createInstance: function(elm, config) {
                    var initConfig = {
                            klass: window.ColorPicker,
                            input: elm,
                            patch: elm,
                            isIE8: !!document.all && !document.addEventListener,
                            animationSpeed: 200,
                            draggable: true,
                            margin: {left: 1, top: 40},
                            customBG: '#FFFFFF',
                            color: f.extractValue(elm),
                            initStyle: 'display: none',
                            mode: f.docCookies('colorPickerMode') || 'hsv-h',
                            memoryColors: f.docCookies('colorPickerMemos' + ((config || {}).noAlpha ? 'NoAlpha' : '')),
                            size: f.docCookies('colorPickerSize') || 1,
                            renderCallback: f.renderCallback,
                            actionCallback: f.actionCallback
                        };

                    for (var n in config) {
                        initConfig[n] = config[n]; 
                    }

                    return new initConfig.klass(initConfig);
                },

                doEventListeners: function(elm, multiple) {
                    $(elm).on('click.colorPicker', function(e) {
                        e.preventDefault();

                        var position = $(this).offset(),
                            index = multiple ? $('[data-colorpicker=colorpicker]').index(this) : 0,
                            colorPicker = (colorPickers[index] = f.createInstance(this, config)),
                            options = colorPicker.color.options;

                        if ($.ui && options.draggable) {
                            var $colorPicker = $(colorPicker.nodes.colorPicker).draggable({
                                cancel: '.' + options.CSSPrefix + 'app div'
                            });
                        } else {
                            var $colorPicker = $(colorPicker.nodes.colorPicker);
                        }

                        options.color = f.extractValue(elm);

                        $colorPicker.css({
                            'position': 'absolute',
                            'left': options.margin.left,
                            'top': options.margin.top
                        });

                        if (options.eventListenersCallback) {
                            options.eventListenersCallback(elm, $colorPicker, options);
                        }

                        if (!multiple) {
                            options.input = elm;
                            options.patch = elm;
                            colorPicker.setColor(f.extractValue(elm), undefined, undefined, true);
                            colorPicker.saveAsBackground();
                        }

                        colorPickers.current = colorPickers[index];
                        $(this).parent().append($colorPicker);
                        setTimeout(function() {
                            $colorPicker.show(colorPicker.color.options.animationSpeed);
                        }, 0);
                    });

                    $(window).on('mousedown.colorPicker', function(e) {
                        var colorPicker = colorPickers.current,
                            $colorPicker = $(colorPicker ? colorPicker.nodes.colorPicker : undefined),
                            animationSpeed = colorPicker ? colorPicker.color.options.animationSpeed : 0,
                            isColorPicker = $(e.target).closest('.cp-app')[0],
                            inputIndex = $(that).index(e.target);

                        if (isColorPicker && colorPicker && $(colorPickers).index(isColorPicker)) {
                            if (e.target === colorPicker.nodes.exit) {
                                $colorPicker.hide(animationSpeed);
                                $(':focus').trigger('blur');
                                $colorPicker.remove();
                            }
                        } else {
                            $colorPicker.hide(animationSpeed);
                            $colorPicker.remove();

                            if (colorPicker !== undefined) {
                                $(colorPicker.color.options.input).change();
                                delete colorPickers.current;
                            }
                        }
                    });
                },

                docCookies: function(key, val, options) {
                    var encode = encodeURIComponent, decode = decodeURIComponent,
                        cookies, n, tmp, cache = {},
                        days;

                    if (val === undefined) {
                        cookies = document.cookie.split('; ') || [];
                        for (n = cookies.length; n--; ) {
                            tmp = cookies[n].split('=');
                            if (tmp[0]) cache[decode(tmp.shift())] = decode(tmp.join('='));
                        }

                        if (!key) return cache;
                        else return cache[key];
                    } else {
                        options = options || {};

                        if (val === '' || options.expires < 0) {
                            options.expires = -1;
                        }

                        if (options.expires !== undefined) {
                            days = new Date();
                            days.setDate(days.getDate() + options.expires);
                        }

                        document.cookie = encode(key) + '=' + encode(val) +
                            (days            ? '; expires=' + days.toUTCString() : '') +
                            (options.path    ? '; path='    + options.path       : '') +
                            (options.domain  ? '; domain='  + options.domain     : '') +
                            (options.secure  ? '; secure'                        : '');
                    }
                }
            }

            var colorPickers = $.fn.zcColorPicker.colorPickers || [],
                testColors = new window.Colors({
                    customBG: (config && config.customBG) || '#FFFFFF',
                    allMixDetails: true
                });

            $.fn.zcColorPicker.colorPickers = colorPickers;

            $(this).off('.colorPicker');
            $(window).off('.colorPicker');

            if (config !== 'destroy') {
                var color = f.extractValue(this),
                    value = color.split('('),
                    colorMode = value[1] ? value[0].substr(0, 3) : 'HEX';

                $(this).data('colorMode', colorMode);
                f.doEventListeners(this, (config && config.multipleInstances));

                $(this).on('paste keyup', function() {
                    var color = $(this).val();
                    var index = $('[data-colorpicker=colorpicker]').index(this);

                    if (color) {
                        testColors.setColor(color);

                        if (!isNaN(testColors.getColor().RGBLuminance)) {
                            $(this).parent().find('.zc-panel-control-colorpicker__live-color').css('background', color);

                            if (colorPickers[index] !== undefined) {
                                colorPickers[index].setColor(color);
                            }
                        }
                    }
                });

                if (config && config.readOnly) {
                    this.readOnly = true;
                }

                testColors.setColor(color);

                if (config && config.init) {
                    config.init(this, testColors.colors);
                }
            }

            return this;
        }
    });
})(jQuery, this);