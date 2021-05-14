import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-new-test111-author-l');
  this.route('new-platform-new-test111-author-e',
  { path: 'new-platform-new-test111-author-e/:id' });
  this.route('new-platform-new-test111-author-e.new',
  { path: 'new-platform-new-test111-author-e/new' });
  this.route('new-platform-new-test111-book-l');
  this.route('new-platform-new-test111-book-e',
  { path: 'new-platform-new-test111-book-e/:id' });
  this.route('new-platform-new-test111-book-e.new',
  { path: 'new-platform-new-test111-book-e/new' });
  this.route('new-platform-new-test111-country-l');
  this.route('new-platform-new-test111-country-e',
  { path: 'new-platform-new-test111-country-e/:id' });
  this.route('new-platform-new-test111-country-e.new',
  { path: 'new-platform-new-test111-country-e/new' });
  this.route('new-platform-new-test111-language-l');
  this.route('new-platform-new-test111-language-e',
  { path: 'new-platform-new-test111-language-e/:id' });
  this.route('new-platform-new-test111-language-e.new',
  { path: 'new-platform-new-test111-language-e/new' });
});

export default Router;
