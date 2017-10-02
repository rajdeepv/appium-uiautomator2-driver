import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import ADB from 'appium-adb';
import AndroidUiautomator2Driver from '../../..';

let driver;
let sandbox = sinon.sandbox.create();
chai.should();
chai.use(chaiAsPromised);

describe('viewport screenshot', () => {
  driver = new AndroidUiautomator2Driver();
  driver.adb = new ADB();
  it('expect not empty string to be returned', async () => {
    sandbox.stub(driver, 'getWindowSize').returns({width: 1080, height:1920});
    sandbox.stub(driver, 'getDevicePixelRatio').returns(3);
    sandbox.stub(driver, 'getStatusBarHeight').returns(72);
    let screenshot = await driver.getScreenshot();
    screenshot.should.not.equal('');
  });
});