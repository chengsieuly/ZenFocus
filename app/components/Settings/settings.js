import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Intent } from '@blueprintjs/core';

import NavBar from './components/nav-bar';
import Option from './components/option';

export default class Settings extends PureComponent {

  onSettingsChange(keyPath, val, fn) {
    const { setElectronSettings } = this.props;
    fn(val);
    setElectronSettings(keyPath, val, { prettify: true });
  }

  render() {
    const {
      focusLength,
      longBreakInterval,
      longBreakLength,
      shortBreakLength,
      totalRounds,
      setFocusLength,
      setLongBreakInterval,
      setLongBreakLength,
      setShortBreakLength,
      setTotalRounds
    } = this.props;

    return (
      <div className="settings bg-black vh-100">
        <NavBar />
        <div className="container-fluid mt-4">
          <Option
            title="Focus Length"
            type="number"
            max={60}
            intent={Intent.PRIMARY}
            value={focusLength} unit="mins"
            inputStyles="w-exact-70"
            onChange={(val) => this.onSettingsChange('rounds.focusLength', val, setFocusLength)}
          />
          <Option
            title="Short Break Length"
            type="number"
            max={60}
            unit="mins"
            intent={Intent.PRIMARY}
            value={shortBreakLength}
            inputStyles="w-exact-70"
            onChange={(val) => this.onSettingsChange('rounds.shortBreakLength', val, setShortBreakLength)}
          />
          <Option
            title="Long Break Length"
            type="number"
            max={60}
            intent={Intent.PRIMARY}
            unit="mins"
            value={longBreakLength}
            inputStyles="w-exact-70"
            onChange={(val) => this.onSettingsChange('rounds.longBreakLength', val, setLongBreakLength)}
          />
          <Option
            title="Long Break Interval"
            type="number"
            max={60}
            intent={Intent.PRIMARY}
            value={longBreakInterval}
            inputStyles="w-exact-70"
            onChange={(val) => this.onSettingsChange('rounds.longBreakInterval', val, setLongBreakInterval)}
          />
          <Option
            title="Rounds"
            type="number"
            max={1000}
            intent={Intent.PRIMARY}
            value={totalRounds}
            inputStyles="w-exact-70"
            onChange={(val) => this.onSettingsChange('rounds.totalRounds', val, setTotalRounds)}
          />
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  focusLength: PropTypes.number.isRequired,
  longBreakLength: PropTypes.number.isRequired,
  longBreakInterval: PropTypes.number.isRequired,
  shortBreakLength: PropTypes.number.isRequired,
  totalRounds: PropTypes.number.isRequired,
  setElectronSettings: PropTypes.func.isRequired,
  setFocusLength: PropTypes.func.isRequired,
  setLongBreakInterval: PropTypes.func.isRequired,
  setLongBreakLength: PropTypes.func.isRequired,
  setShortBreakLength: PropTypes.func.isRequired,
  setTotalRounds: PropTypes.func.isRequired
};
