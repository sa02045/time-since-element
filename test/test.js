import { assert } from '@open-wc/testing';
import { OutsideClickElement } from '../src/index.ts';
import { spy } from 'sinon';

describe('OutsideClickElement', () => {
  it('should be defined', () => {
    const el = new OutsideClickElement();
    assert.instanceOf(el, OutsideClickElement);
  });

  it('should be trigger "outside-click" event when click outside', async () => {
    const sinonSpy = spy();
    const outsideClickEL = document.createElement('outside-click');
    const outsideEl = document.createElement('div');

    document.body.appendChild(outsideClickEL);
    document.body.appendChild(outsideEl);

    outsideClickEL.addEventListener('outside-click', sinonSpy);

    outsideEl.click();

    assert.isTrue(sinonSpy.calledOnce);
  });

  it('should not be trigger "outside-click" event when click inside', async () => {
    const sinonSpy = spy();
    const outsideClickEL = new OutsideClickElement();
    const inside = document.createElement('div');

    outsideClickEL.appendChild(inside);
    document.body.appendChild(outsideClickEL);

    outsideClickEL.addEventListener('outside-click', sinonSpy);

    inside.click();

    assert.isFalse(sinonSpy.calledOnce);
  });
});
