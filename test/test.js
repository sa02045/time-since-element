import { assert } from '@open-wc/testing';
import { OutsideClickElement } from '../src/index.ts';
import sinon from 'sinon';

describe('OutsideClickElement', () => {
  it('should be defined', () => {
    const el = new OutsideClickElement();
    assert.instanceOf(el, OutsideClickElement);
  });

  it('should be trigger "outside-click" event when click outside', async () => {
    const spy = sinon.spy();
    const el = new OutsideClickElement();
    const outsideEl = document.createElement('div');

    document.body.appendChild(el);
    document.body.appendChild(outsideEl);

    el.addEventListener('outside-click', spy);

    outsideEl.click();

    assert.isTrue(spy.calledOnce);
  });

  it('should not be trigger "outside-click" event when click inside', async () => {
    const spy = sinon.spy();
    const el = new OutsideClickElement();
    const inside = document.createElement('div');

    el.appendChild(inside);
    document.body.appendChild(el);

    el.addEventListener('outside-click', spy);

    inside.click();

    assert.isFalse(spy.calledOnce);
  });
});
