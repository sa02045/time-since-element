# &lt;outside-click&gt; element

A simple element to detect clicks outside

## Usage

Import as ES modules:

```js
import 'outside-click-element';
```

Or

With a script tag:

```html
<script type="module" src="./node_modules/outside-click-element/dist/index.js">
```

### Example

```html
<!-- html -->
<outside-click>
  <div>inside</div>
</outside-click>
```

```js
// js
const outsideClickEl = document.querySelector('outside-click');
outsideClickEl.addEventListener('outside-click', () => {
  console.log('outside clicked!');
});
```

### React Example

```jsx
import 'outside-click-element';

function Component() {
  return (
    <outside-click
      onOutsideClick={() => {
        console.log('inside clicked');
      }}
    ></outside-click>
  );
}
```
