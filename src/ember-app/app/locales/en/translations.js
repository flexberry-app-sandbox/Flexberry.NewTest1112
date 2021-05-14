import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        books: {
          caption: 'books',
          title: 'books',
          'new-platform-new-test111-country-l': {
            caption: 'new-platform-new-test111-country-l',
            title: 'new-platform-new-test111-country-l'
          },
          'new-platform-new-test111-book-l': {
            caption: 'new-platform-new-test111-book-l',
            title: 'new-platform-new-test111-book-l'
          },
          'new-platform-new-test111-author-l': {
            caption: 'new-platform-new-test111-author-l',
            title: 'new-platform-new-test111-author-l'
          },
          'new-platform-new-test111-language-l': {
            caption: 'new-platform-new-test111-language-l',
            title: 'new-platform-new-test111-language-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
