# ember-cli-bootstrap-breakpoints

Expose Bootstrap breakpoints as Controller property in Ember

## Addon Install

    ember install:addon

## Using

Add `{{bootstrap-breakpoints}}` to application.hbs.

This captures the browser resize event and sets the property `bootstrapBreakpoint` in ApplicationController. `bootstrapBreakpoint` will contain one of `lg`, `md`, `sm`, `xs`, which can then be used in computed properties and such within the Ember app.

## License
[Unlicense](http://unlicense.org/)
