import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.books.caption'),
          title: i18n.t('forms.application.sitemap.books.title'),
          children: [{
            link: 'new-platform-new-test111-country-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-new-test111-country-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-new-test111-country-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'new-platform-new-test111-book-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-new-test111-book-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-new-test111-book-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'new-platform-new-test111-author-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-new-test111-author-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-new-test111-author-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'new-platform-new-test111-language-l',
            caption: i18n.t('forms.application.sitemap.books.new-platform-new-test111-language-l.caption'),
            title: i18n.t('forms.application.sitemap.books.new-platform-new-test111-language-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})