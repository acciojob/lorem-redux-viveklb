
import React from "react";
import { connect, Provider } from "react-redux";
import { fetchLorem } from "../redux/actions";
import store from "../redux/store";
import './../styles/App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchLorem();
  }

  render() {
    const { loading, error, content } = this.props;

    return (
      <div>
        {/* Do not remove the main div */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p role="alert">{error}</p>
        ) : (
          <p>
            <strong>{content.title}</strong>
            <br />
            {content.body}
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  content: state.content,
});

const ConnectedApp = connect(mapStateToProps, { fetchLorem })(App);

const AppWithStore = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default AppWithStore;
