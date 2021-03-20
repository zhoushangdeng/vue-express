import { ref, reactive, toRefs, createVNode, render, h, Transition, withCtx, withDirectives, vShow, nextTick } from 'vue';
import { removeClass, getStyle, addClass } from '../utils/dom';
import PopupManager from '../utils/popup-manager';
import isServer from '../utils/isServer';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function createLoadingComponent({ options, globalLoadingOption, }) {
    let vm = null;
    let afterLeaveTimer = null;
    const afterLeaveFlag = ref(false);
    const data = reactive(Object.assign(Object.assign({}, options), { originalPosition: '', originalOverflow: '', visible: false }));
    function setText(text) {
        data.text = text;
    }
    function destroySelf() {
        const target = data.parent;
        if (!target.vLoadingAddClassList) {
            let loadingNumber = target.getAttribute('loading-number');
            loadingNumber = Number.parseInt(loadingNumber) - 1;
            if (!loadingNumber) {
                removeClass(target, 'el-loading-parent--relative');
                target.removeAttribute('loading-number');
            }
            else {
                target.setAttribute('loading-number', loadingNumber.toString());
            }
            removeClass(target, 'el-loading-parent--hidden');
        }
        if (vm.el && vm.el.parentNode) {
            vm.el.parentNode.removeChild(vm.el);
        }
    }
    function close() {
        const target = data.parent;
        target.vLoadingAddClassList = null;
        if (data.fullscreen) {
            globalLoadingOption.fullscreenLoading = undefined;
        }
        afterLeaveFlag.value = true;
        clearTimeout(afterLeaveTimer);
        afterLeaveTimer = window.setTimeout(() => {
            if (afterLeaveFlag.value) {
                afterLeaveFlag.value = false;
                destroySelf();
            }
        }, 400);
        data.visible = false;
    }
    function handleAfterLeave() {
        if (!afterLeaveFlag.value)
            return;
        afterLeaveFlag.value = false;
        destroySelf();
    }
    const componentSetupConfig = Object.assign(Object.assign({}, toRefs(data)), { setText,
        close,
        handleAfterLeave });
    const elLoadingComponent = {
        name: 'ElLoading',
        setup() {
            return componentSetupConfig;
        },
        render() {
            const spinner = h('svg', {
                class: 'circular',
                viewBox: '25 25 50 50',
            }, [
                h('circle', { class: 'path', cx: '50', cy: '50', r: '20', fill: 'none' }),
            ]);
            const noSpinner = h('i', { class: this.spinner });
            const spinnerText = h('p', { class: 'el-loading-text' }, [this.text]);
            return h(Transition, {
                name: 'el-loading-fade',
                onAfterLeave: this.handleAfterLeave,
            }, {
                default: withCtx(() => [withDirectives(createVNode('div', {
                        style: {
                            backgroundColor: this.background || '',
                        },
                        class: [
                            'el-loading-mask',
                            this.customClass,
                            this.fullscreen ? 'is-fullscreen' : '',
                        ],
                    }, [
                        h('div', {
                            class: 'el-loading-spinner',
                        }, [
                            !this.spinner ? spinner : noSpinner,
                            this.text ? spinnerText : null,
                        ]),
                    ]), [[vShow, this.visible]])]),
            });
        },
    };
    vm = createVNode(elLoadingComponent);
    render(vm, document.createElement('div'));
    return Object.assign(Object.assign({}, componentSetupConfig), { vm, get $el() {
            return vm.el;
        } });
}

const defaults = {
    parent: null,
    background: '',
    spinner: false,
    text: null,
    fullscreen: true,
    body: false,
    lock: false,
    customClass: '',
};
const globalLoadingOption = {
    fullscreenLoading: null,
};
const addStyle = (options, parent, instance) => __awaiter(void 0, void 0, void 0, function* () {
    const maskStyle = {};
    if (options.fullscreen) {
        instance.originalPosition.value = getStyle(document.body, 'position');
        instance.originalOverflow.value = getStyle(document.body, 'overflow');
        maskStyle.zIndex = String(PopupManager.nextZIndex());
    }
    else if (options.body) {
        instance.originalPosition.value = getStyle(document.body, 'position');
        yield nextTick();
        ['top', 'left'].forEach(property => {
            const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
            maskStyle[property] = options.target.getBoundingClientRect()[property] +
                document.body[scroll] +
                document.documentElement[scroll] -
                parseInt(getStyle(document.body, `margin-${property}`), 10) +
                'px';
        });
        ['height', 'width'].forEach(property => {
            maskStyle[property] = options.target.getBoundingClientRect()[property] + 'px';
        });
    }
    else {
        instance.originalPosition.value = getStyle(parent, 'position');
    }
    Object.keys(maskStyle).forEach(property => {
        instance.$el.style[property] = maskStyle[property];
    });
});
const addClassList = (options, parent, instance) => {
    if (instance.originalPosition.value !== 'absolute' && instance.originalPosition.value !== 'fixed') {
        addClass(parent, 'el-loading-parent--relative');
    }
    else {
        removeClass(parent, 'el-loading-parent--relative');
    }
    if (options.fullscreen && options.lock) {
        addClass(parent, 'el-loading-parent--hidden');
    }
    else {
        removeClass(parent, 'el-loading-parent--hidden');
    }
};
const Loading = function (options = {}) {
    if (isServer)
        return;
    options = Object.assign(Object.assign({}, defaults), options);
    if (typeof options.target === 'string') {
        options.target = document.querySelector(options.target);
    }
    options.target = options.target || document.body;
    if (options.target !== document.body) {
        options.fullscreen = false;
    }
    else {
        options.body = true;
    }
    if (options.fullscreen && globalLoadingOption.fullscreenLoading) {
        globalLoadingOption.fullscreenLoading.close();
    }
    const parent = options.body ? document.body : options.target;
    options.parent = parent;
    const instance = createLoadingComponent({
        options,
        globalLoadingOption,
    });
    addStyle(options, parent, instance);
    addClassList(options, parent, instance);
    options.parent.vLoadingAddClassList = () => {
        addClassList(options, parent, instance);
    };
    let loadingNumber = parent.getAttribute('loading-number');
    if (!loadingNumber) {
        loadingNumber = 1;
    }
    else {
        loadingNumber = Number.parseInt(loadingNumber) + 1;
    }
    parent.setAttribute('loading-number', loadingNumber.toString());
    parent.appendChild(instance.$el);
    nextTick().then(() => {
        instance.visible.value = options.hasOwnProperty('visible') ? options.visible : true;
    });
    if (options.fullscreen) {
        globalLoadingOption.fullscreenLoading = instance;
    }
    return instance;
};

const createInstance = (el, binding) => {
    const textExr = el.getAttribute('element-loading-text');
    const spinnerExr = el.getAttribute('element-loading-spinner');
    const backgroundExr = el.getAttribute('element-loading-background');
    const customClassExr = el.getAttribute('element-loading-custom-class');
    const vm = binding.instance;
    el.instance = Loading({
        text: vm && vm[textExr] || textExr,
        spinner: vm && vm[spinnerExr] || spinnerExr,
        background: vm && vm[backgroundExr] || backgroundExr,
        customClass: vm && vm[customClassExr] || customClassExr,
        fullscreen: !!binding.modifiers.fullscreen,
        target: !!binding.modifiers.fullscreen ? null : el,
        body: !!binding.modifiers.body,
        visible: true,
        lock: !!binding.modifiers.lock,
    });
};
const vLoading = {
    mounted(el, binding) {
        if (!!binding.value) {
            createInstance(el, binding);
        }
    },
    updated(el, binding) {
        const instance = el.instance;
        if (binding.oldValue !== binding.value) {
            if (binding.value) {
                createInstance(el, binding);
            }
            else {
                instance.close();
            }
        }
    },
    unmounted(el) {
        var _a;
        (_a = el === null || el === void 0 ? void 0 : el.instance) === null || _a === void 0 ? void 0 : _a.close();
    },
};

var index = {
    install(app) {
        app.directive('loading', vLoading);
        app.config.globalProperties.$loading = Loading;
    },
    directive: vLoading,
    service: Loading,
};

export default index;
