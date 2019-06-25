import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_PEOPLE = gql`
  query AllPeople {
    people {
      id
      name
    }
  }
`;

class Trigger extends React.Component {
  componentDidMount() {
    const { update } = this.props;
    window.setTimeout(update, 5000);
  }

  render() {
    return <div />;
  }
}

class App extends React.Component {
  state = {
    a: false
  };

  triggerUpdate = () => {
    this.setState(({ a }) => ({ a: !a }));
  };

  render() {
    return (
      <main>
        <h1>Apollo Client Error Template</h1>
        <p>
          This is a template that you can use to demonstrate an error in Apollo
          Client. Edit the source code and watch your browser window reload with
          the changes.
        </p>
        <p>
          The code which renders this component lives in{" "}
          <code>./src/App.js</code>.
        </p>
        <p>
          The GraphQL schema is in <code>./src/graphql/schema</code>. Currently
          the schema just serves a list of people with names and ids.
        </p>
        <Query query={ALL_PEOPLE}>
          {({ loading, data, error }) => (
            <>
              <h3>Loading: </h3>
              <pre>{JSON.stringify(loading)}</pre>
              <h3>Data: </h3>
              <pre>{JSON.stringify(data)}</pre>
              <br />
              <h3>Error:</h3>
              <pre>{JSON.stringify(error)}</pre>
              <Trigger update={this.triggerUpdate} />
            </>
          )}
        </Query>
      </main>
    );
  }
}

export default App;
