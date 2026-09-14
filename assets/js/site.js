'use strict';

(() => {
    const storageKey = 'onfibox.language';
    const translations = window.onfiboxTranslations;
    const dialog = document.getElementById('language-dialog');
    const changeButton = document.getElementById('change-language');
    let currentLanguage = null;

    function isSupported(language) {
        return language === 'en' || language === 'fa';
    }

    function applyLanguage(language) {
        const messages = translations[language];
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
        document.title = messages.title;
        document.querySelector('meta[name="description"]').content = messages.meta;
        document.querySelectorAll('[data-i18n]').forEach(element => {
            // Markup comes only from the bundled, maintained translation dictionary.
            element.innerHTML = messages[element.dataset.i18n];
        });
        ['aria-label', 'alt'].forEach(attribute => {
            document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
                element.setAttribute(attribute, messages[element.getAttribute(`data-i18n-${attribute}`)]);
            });
        });
        changeButton.setAttribute('aria-label', language === 'fa' ? 'تغییر زبان' : 'Change language');
        document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
        currentLanguage = language;
        document.documentElement.classList.remove('language-pending');
    }

    function chooseLanguage(language) {
        if (!isSupported(language)) return;
        applyLanguage(language);
        try {
            localStorage.setItem(storageKey, language);
        } catch {
            // Language selection still works when browser storage is unavailable.
        }
        dialog.close();
        changeButton.focus({ preventScroll: true });
    }

    dialog.querySelectorAll('[data-language]').forEach(button => {
        button.addEventListener('click', () => chooseLanguage(button.dataset.language));
    });
    dialog.addEventListener('cancel', event => {
        if (!currentLanguage) event.preventDefault();
    });
    changeButton.addEventListener('click', () => {
        dialog.showModal();
        dialog.querySelector(`[data-language="${currentLanguage}"]`).focus();
    });

    let savedLanguage;
    try {
        savedLanguage = localStorage.getItem(storageKey);
    } catch {
        savedLanguage = null;
    }
    if (isSupported(savedLanguage)) {
        applyLanguage(savedLanguage);
    } else {
        dialog.showModal();
        dialog.querySelector('[data-language="en"]').focus();
    }
})();
