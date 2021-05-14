import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import NewPlatformNewTest111AuthorLForm from './forms/new-platform-new-test111-author-l';
import NewPlatformNewTest111BookLForm from './forms/new-platform-new-test111-book-l';
import NewPlatformNewTest111CountryLForm from './forms/new-platform-new-test111-country-l';
import NewPlatformNewTest111LanguageLForm from './forms/new-platform-new-test111-language-l';
import NewPlatformNewTest111AuthorEForm from './forms/new-platform-new-test111-author-e';
import NewPlatformNewTest111BookEForm from './forms/new-platform-new-test111-book-e';
import NewPlatformNewTest111CountryEForm from './forms/new-platform-new-test111-country-e';
import NewPlatformNewTest111LanguageEForm from './forms/new-platform-new-test111-language-e';
import NewPlatformNewTest111AuthorModel from './models/new-platform-new-test111-author';
import NewPlatformNewTest111BookModel from './models/new-platform-new-test111-book';
import NewPlatformNewTest111CountryModel from './models/new-platform-new-test111-country';
import NewPlatformNewTest111LanguageModel from './models/new-platform-new-test111-language';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'new-platform-new-test111-author': NewPlatformNewTest111AuthorModel,
    'new-platform-new-test111-book': NewPlatformNewTest111BookModel,
    'new-platform-new-test111-country': NewPlatformNewTest111CountryModel,
    'new-platform-new-test111-language': NewPlatformNewTest111LanguageModel
  },

  'application-name': 'Books',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Books',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Books',
          title: 'Books'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        books: {
          caption: 'Books',
          title: 'Books',
          'new-platform-new-test111-country-l': {
            caption: 'Country',
            title: ''
          },
          'new-platform-new-test111-book-l': {
            caption: 'Book',
            title: ''
          },
          'new-platform-new-test111-author-l': {
            caption: 'Author',
            title: ''
          },
          'new-platform-new-test111-language-l': {
            caption: 'Language',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'new-platform-new-test111-author-l': NewPlatformNewTest111AuthorLForm,
    'new-platform-new-test111-book-l': NewPlatformNewTest111BookLForm,
    'new-platform-new-test111-country-l': NewPlatformNewTest111CountryLForm,
    'new-platform-new-test111-language-l': NewPlatformNewTest111LanguageLForm,
    'new-platform-new-test111-author-e': NewPlatformNewTest111AuthorEForm,
    'new-platform-new-test111-book-e': NewPlatformNewTest111BookEForm,
    'new-platform-new-test111-country-e': NewPlatformNewTest111CountryEForm,
    'new-platform-new-test111-language-e': NewPlatformNewTest111LanguageEForm
  },

});

export default translations;
