import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
		var target = this.get('targetObject');
    var prevLevel = target.get('bootstrapBreakpoint');
    var that = this;
    Ember.$(window).on('resize', function() {
      that.setBootstrapBreakpoint(target);
    });
    if(!prevLevel) { that.setBootstrapBreakpoint(target); }
	},
  setBootstrapBreakpoint: function(target) {
    if(Ember.$('#bootstrap-breakpoint-indicator-xs').is(':visible')) {
      target.set('bootstrapBreakpoint', 'xs');
    } else if(Ember.$('#bootstrap-breakpoint-indicator-sm').is(':visible')) {
      target.set('bootstrapBreakpoint', 'sm');
    } else if(Ember.$('#bootstrap-breakpoint-indicator-md').is(':visible')) {
      target.set('bootstrapBreakpoint', 'md');
    } else if(Ember.$('#bootstrap-breakpoint-indicator-lg').is(':visible')) {
      target.set('bootstrapBreakpoint', 'lg');
    }
  }
});
