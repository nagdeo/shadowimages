# what is this?

Get perfect shadows every time for the non-designer.

# Installation

 npm i shadowimagesv2 --save

Then...

...
import { shadowimagesv2 } from 'shadowimagesv2';

shadowimagesv2({
    shadow_type: 'soft',
    padding: false
});

...

# options

shadow supports 2 options, both are which are optional

* *shadow_type* - _hard | soft_  (Defaults to soft)
* *padding* - _boolean_ (Defaults to false)
