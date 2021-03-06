import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownMenuItem, Action, ActionLabel } from './styles';
import { TiWeatherNight, TiWeatherSunny } from 'react-icons/ti';
import { themes } from 'styles/palette';
import { appActions } from 'store/app/actions';

class CommonSettingsComponents extends Component {
  constructor() {
    super();
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme(evt) {
    evt.preventDefault();
    const { theme, setTheme } = this.props;
    if (theme.name === themes.dark.name) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  }

  render() {
    const { theme } = this.props;

    return (
      <React.Fragment>
        <DropdownMenuItem onClick={this.toggleTheme}>
          <Action>
            {theme.name === themes.dark.name ? (
              <React.Fragment>
                <ActionLabel>Use light theme</ActionLabel>
                <TiWeatherSunny />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <ActionLabel>Use dark theme</ActionLabel>
                <TiWeatherNight />
              </React.Fragment>
            )}
          </Action>
        </DropdownMenuItem>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.app.theme,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTheme: theme => dispatch(appActions.setTheme({ theme })),
  };
};

export const CommonSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommonSettingsComponents);
